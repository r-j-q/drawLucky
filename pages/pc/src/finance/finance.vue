<template>
	<view class="page buttonp">
		<headtop type="single"></headtop>
		<view class="main">

			<uni-nav-bar class="nav-bar" statusBar backgroundColor="#eef1f5" left-icon="left" :leftText="$t('goBack')"
				color="#1abb97" rightText="" @clickLeft="routeTo(1)">
			</uni-nav-bar>
			<view class="tabs flex_center">
				<view class="tab-item " :class="active==0?'active':''" @click="tabitem(0)"> {{$t('rechargerecord')}}
				</view>
				<view class="tab-item" :class="active==1?'active':''" @click="tabitem(1)"> {{$t('withdrawalrgerecord')}}
				</view>
				<view class="tab-item" :class="active==2?'active':''" @click="tabitem(2)"> {{$t('transferRecord')}}
				</view>
			</view>
			<uni-card class="bgfff m-b-20 card1  " margin='0px' padding="40px" :is-shadow="false" :border="false">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="table">
					<uni-table ref="table0" :loading="loading" border :stripe="false" type=""
						:emptyText="$t('contentnomore')" @selection-change="selectionChange" v-show="active==0">
						<uni-tr>
							<uni-th width="200" align="left">{{$t('createTime')}}</uni-th>
							<uni-th width="200" align="left">{{$t('currency')}}</uni-th>
							<uni-th width="200" align="left">{{$t('num')}}</uni-th>
							<uni-th width="200" align="left">{{$t('state')}}</uni-th>
							<uni-th width="200" align="left">{{$t('note')}}</uni-th>
						</uni-tr>
						<template v-for="(item, index) in getLegalCurrencyTransactionData0.list">
							<uni-tr :key="index">
								<uni-td>{{ item.createTime }}</uni-td>
								<uni-td>{{ item.withdrawalBankName }}</uni-td>
								<uni-td>{{ item.prepaidType==1?item.payAmount: item.topUpMoney}}</uni-td>
								<uni-td>{{ select0[item.prepaidType] }}</uni-td>
								<uni-td>{{ item.note }}</uni-td>
							</uni-tr>
						</template>
					</uni-table>
					<uni-table ref="table1" :loading="loading" border :stripe="false" type=""
						:emptyText="$t('contentnomore')" @selection-change="selectionChange" v-show="active==1">
						<uni-tr>
							<uni-th width="200" align="left">{{$t('createTime')}}</uni-th>
							<uni-th width="200" align="left">{{$t('currency')}}</uni-th>
							<uni-th width="200" align="left">{{$t('num')}}</uni-th>
							<uni-th width="200" align="left">{{$t('state')}}</uni-th>
							<uni-th width="200" align="left">{{$t('note')}}</uni-th>
						</uni-tr>
						<template v-for="(item, index) in getLegalCurrencyTransactionData1.list">
							<uni-tr :key="index">
								<uni-td>{{ item.createTime }}</uni-td>
								<uni-td>{{ item.withdrawalBankName }}</uni-td>
								<uni-td>{{ item.withdrawalAmount }}</uni-td>
								<uni-td>{{select1[ item.withdrawalCardType] }}</uni-td>
								<uni-td>{{ item.withdrawalNote }}</uni-td>
							</uni-tr>
						</template>
					</uni-table>
					<uni-table ref="table2" :loading="loading" border :stripe="false" type=""
						:emptyText="$t('contentnomore')" @selection-change="selectionChange" v-show="active==2">
						<uni-tr>
							<uni-th width="200" align="left">{{$t('createTime')}}</uni-th>
							<uni-th width="200" align="left">{{$t('type')}}</uni-th>
							<uni-th width="200" align="left">{{$t('currency')}}</uni-th>
							<uni-th width="200" align="left">{{$t('num')}}</uni-th>
						</uni-tr>
						<template v-for="(item, index) in getTransferRecordsData2.list">
							<uni-tr :key="index">
								<uni-td>{{ item.operationTime }}</uni-td>
								<uni-td>{{ select2[item.walletType-1] }}</uni-td>
								<uni-td>{{ item.currency }}</uni-td>
								<uni-td>{{ item.direction?'-'+item.amount:'+'+item.amount }}</uni-td>
							</uni-tr>
						</template>
					</uni-table>
				</scroll-view>

				<pagInation v-if="getLegalCurrencyTransactionData0.total > 0&&active==0" :page-sizes="[10, 20, 30, 40]"
					:limit.sync="params.pageSize" layout="  prev, pager, next"
					:total="getLegalCurrencyTransactionData0.total" :page.sync="params.page" @size-change="lower_size"
					@current-change="lower_page" />
				<pagInation v-if="getLegalCurrencyTransactionData1.total > 0&&active==1" :page-sizes="[10, 20, 30, 40]"
					:limit.sync="params.pageSize" layout="  prev, pager, next"
					:total="getLegalCurrencyTransactionData1.total" :page.sync="params.page" @size-change="lower_size"
					@current-change="lower_page" />
				<pagInation v-if="getTransferRecordsData2.total &&active==2" :page-sizes="[10, 20, 30, 40]"
					:limit.sync="params.pageSize" layout="  prev, pager, next" :total="getTransferRecordsData2.total"
					:page.sync="params.page" @size-change="lower_size" @current-change="lower_page" />
			</uni-card>

		</view>
	</view>
</template>

<script>
	import pagInation from '@/components/pagInation/pagInation.vue'
	export default {
		components: {
			pagInation
		},
		data() {
			return {
				select0: [this.$t('incomplete'), this.$t('success'), this.$t('fail')],
				select1: [this.$t('withdrawCoins'),
					this.$t('sell')
				],
				select2: [this.$t('currencyAccount'),
					this.$t('futuresAccount'),
					this.$t('legalAccount'),
					this.$t('trustAccount'),
				],
				// select4: [this.$t('recharge'),
				// 	this.$t('disbursement')
				// ],
				select3: [this.$t('rollout'), this.$t('rollin')],
				loading: false,
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				active: 0,
				params: {
					page: 1, //是 int 页码
					pageSize: 20, //是 int 每页条数
					type: 0, //是 int 交易类型（ 0： 充币， 1： 提币）
				},
				getLegalCurrencyTransactionData0: '',
				getLegalCurrencyTransactionData1: '',
				getTransferRecordsData2: '',
			}
		},



		onLoad() {
			this.getLegalCurrencyTransaction(0)
		},
		methods: {
			lower_size(event) {
				this.params.pageSize = event
				if (this.active == 2) {


					this.getTransferRecords(this.active)
				} else {



					this.getLegalCurrencyTransaction(this.active)
				}
			},
			lower_page(event) {
				this.params.page = event
				if (this.active == 2) {


					this.getTransferRecords(this.active)
				} else {

					this.getLegalCurrencyTransaction(this.active)

				}

			},

			tabitem(type) {
				this.params.page = 1
				this.active = type
				if (type == 2) {

					this.getTransferRecords(type)
				} else {

					this.getLegalCurrencyTransaction(type)
				}
			},
			getLegalCurrencyTransaction(type, pushtype) {
				this.params.type = type
				this.params.status = 0
				this.$api.finance.getLegalCurrencyTransaction(this.params).then((res) => {
					if (pushtype) {
						this['getLegalCurrencyTransactionData' + type].list.push(...res.list)
					} else {

						this['getLegalCurrencyTransactionData' + type] = res
					}
				})
			},
			getTransferRecords(type, pushtype) {
				this.params.type = type
				this.$api.finance.getTransferRecords(this.params).then((res) => {
					if (pushtype) {
						this['getTransferRecordsData' + type].list.push(...res.list)
					} else {

						this['getTransferRecordsData' + type] = res
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main {
		width: 1200px;
		margin: 0 auto;

		.tabs {
			color: #707a8a;
			font-size: 16px;
			padding: 40px 0 20px 0;

			.tab-item.active {
				background-color: #1abb97;
				color: #fff;
				border-radius: 4px;
			}

			.tab-item {
				display: inline-block;
				cursor: pointer;
				padding: 8px 24px;
				margin-right: 12px;
			}

			.tab-item {
				display: inline-block;
				cursor: pointer;
				padding: 8px 24px;
				margin-right: 12px;
			}
		}


		.table {
			max-height: 500px;
			overflow: auto;
		}

	}
</style>
