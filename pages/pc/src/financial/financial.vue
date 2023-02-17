<template>
	<view class="page buttonp">
		<headtop type="single" :indexpage='4'></headtop>
		<view class="wraper financial">
			<uni-row class="Box row active animated fadeInRight" style="opacity: 1;">
				<uni-col :span="24">
					<view class="wraper-box">
						<view class="title-box">
							<view class="title-box-text">
								<h1 class="title">{{$t('pledgeMining')}}</h1>
								<h2>{{$t('stabilize')}}</h2>
							</view>
						</view>
						<view class="content-box" v-show="!sonpage">
							<view class="content-box-text" @click="sonpage=!sonpage">
								<view class="category">
									<view class="category-box">
										<view class="category-row">
											<view class="flex"><span class="triangle"></span>
												<p class="title">{{$t('pledgeMining')}}</p>
											</view>
											<p class="status">{{$t('underway')}}</p>
										</view>
										<view class="category-center"> {{$t('stabilize')}} </view>
										<view class="category-row number">
											<p class="l">{{maxprofitRate*10000/100}}%</p>
											<p class="r">{{$t('income')}}</p>
										</view>
									</view>
								</view>
							</view>
						</view>
						<view class="content-box" v-show="sonpage">
							<view class="content-box-text">

								<view class="back" @click="sonpage=!sonpage">
									<view class="backBtn pointer">
										<image src="@/static/webimage/back.952950b9.png" mode="widthFix">
									</view>
								</view>
								<view class="content-nobg">
									<view class="flex-nw mt10">
										<h2 class="titleHasLeftLine"> {{$t('pledgeMining')}} </h2>
										<span>{{$t('stabilize')}}</span>
									</view>
									<view class="userInfo">
										<view class="userInfo-row">
											<view class="userInfo-item">
												<p>{{$t('managedOrder')}}(USDT)：{{getPledgeStatisticsData.handAmount}}
												</p><br>
												<p>{{$t('earningsToday')}}(USDT)：{{getPledgeStatisticsData.todayAmount}}
												</p><br>
												<p>{{$t('accumulatedIncome')}}：{{getPledgeStatisticsData.cumulativeAmoun}}
												</p><br>
											</view>
											<view class="userInfo-item btns" @click="openTabitem"><button type="button"
													class="el-button el-button--default">

													<span>{{$t('managedOrder')}}</span>
												</button>

											</view>
										</view>
									</view>
									<view class="table">
										<view class="table-head">
											<view class="table-head-item"><span>{{$t('productName')}}</span></view>
											<view class="table-head-item"><span>{{$t('income')}}</span></view>
											<view class="table-head-item"><span>{{$t('cycle')}}</span></view>
											<view class="table-head-item"><span>{{$t('singleLimit')}}</span></view>
											<view class="table-head-item"><span>{{$t('operation')}}</span></view>
										</view>
										<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll"
											@scrolltolower="lowergetPledgeProducts">
											<view class="table-body">
												<view class="table-row"
													v-for="(item,index) in getPledgeProductsData.list" :key="item.id">
													<view class="table-col text-left">
														<image :src="'../../../../static/trade/'+item.currency+'.png'"
															mode="widthFix" width="25" height="25" class="coin-icon">
														</image>
														<!-- <image src="@/static/webimage/r9knkaf.png" mode="widthFix"
															alt="icon" width="25" height="25" class="coin-icon"> -->
														{{item.productName}}
														<image src="@/static/webimage/fire.png" mode="widthFix" alt=""
															class="fire-icon">
													</view>
													<view class="table-col gr">
														{{item.profitRate*10000/100}}%{{maxprofitRatefun(item.profitRate)}}
													</view>
													<view class="table-col">{{item.productLife}} </view>

													<view class="table-col gr">
														{{item.minAmount}}~{{item.maxAmount}}({{item.currency}})
													</view>
													<view class="table-col" @click="subscribefun(item)">
														<view class="btn">{{$t('buy')}}</view>
													</view>

												</view>

											</view>
										</scroll-view>
									</view>
									<view class="el-loading-mask" style="display: none;">
										<view class="el-loading-spinner"><svg viewBox="25 25 50 50" class="circular">
												<circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
											</svg>

										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</uni-col>
			</uni-row>
		</view>
		<!-- 普通弹窗 -->
		<uni-popup ref="popup">
			<uni-card class="bgfff m-b-20 card1  " margin='0px' padding="40px" :is-shadow="false" :border="false">
				<view class="tabs ">
					<view class="tab-item " :class="active==0?'active':''" @click="tabitem(0)"> {{$t('underway')}}
					</view>
					<view class="tab-item" :class="active==1?'active':''" @click="tabitem(1)"> {{$t('completed')}}
					</view>
					<!-- <view class="tab-item" :class="active==2?'active':''" @click="tabitem(2)"> 已赎回 </view> -->
				</view>
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll">

					<uni-table ref="table1" :loading="loading" border :stripe="false" type=""
						:emptyText="$t('contentnomore')" @selection-change="selectionChange">
						<uni-tr>
							<uni-th width="200" align="left">{{$t('productName')}}</uni-th>
							<uni-th width="200" align="left">{{$t('purchaseAmount')}}</uni-th>
							<uni-th width="200" align="left">{{$t('dailyRate')}}</uni-th>
							<uni-th width="200" align="left">{{$t('profit')}}</uni-th>
							<uni-th width="200" align="left">{{$t('createTime')}}</uni-th>
							<uni-th width="200" align="left">{{$t('callDate')}}</uni-th>
						</uni-tr>
						<template v-for="(item, index) in getPledgeRecordsData.list">
							<uni-tr :key="index">
								<uni-td>
									<view class="" v-if="item.redemptionEarly =='1' &&active=='0'" @click="order(item)">
										{{ item.productName }}

										<text class="c1abb97 m-l-20 pointer">{{$t('cancelOrder')}}</text>
									</view>
									<view class="" v-else>
										{{ item.productName }}
									</view>

								</uni-td>
								<uni-td> {{ item.amount }} {{item.currency}}</uni-td>
								<uni-td>{{ item.profitRate*10000/100 }}%</uni-td>
								<uni-td> {{ item.profitAmount }}<text class="m-l-10">{{item.currency}}</text></uni-td>
								<uni-td>{{ item.pledgeTime }}</uni-td>
								<uni-td>{{ item.redemptionTime }}</uni-td>
							</uni-tr>
						</template>
					</uni-table>
					<!-- <uni-table ref="table2" :loading="loading" border :stripe="false" type="" :emptyText="$t('contentnomore')"
						@selection-change="selectionChange" v-show="active==2">
						<uni-tr>
							<uni-th width="200" align="left">创建时间</uni-th>
							<uni-th width="200" align="left">币种</uni-th>
							<uni-th width="200" align="left">数量</uni-th>
							<uni-th width="200" align="left">从</uni-th>
							<uni-th width="200" align="left">至</uni-th>
						</uni-tr>
						<template v-for="(item, index) in getLegalCurrencyTransactionData2.list">
							<uni-tr :key="index">
								<uni-td>{{ item.createTime }}</uni-td>
								<uni-td>{{ item.realCurrency }}</uni-td>
								<uni-td>{{ item.cumulativeQuantity }}</uni-td>
								<uni-td>{{ item.note }}</uni-td>
								<uni-td>{{ item.prepaidType }}</uni-td>
							</uni-tr>
						</template>
					</uni-table> -->
				</scroll-view>
				<pagInation v-if="getPledgeRecordsData.total" :page-sizes="[10, 20, 30, 40]"
					:limit.sync="paramsRecords.pageSize" layout="  prev, pager, next"
					:total="getPledgeRecordsData.total" :page.sync="paramsRecords.page" @size-change="lower_size"
					@current-change="lower_page" />

			</uni-card>
		</uni-popup>
		<!-- 普通弹窗 -->
		<uni-popup ref="subscribe">
			<uni-card class="bgfff m-b-20 card1  " margin='0px' padding="40px" :is-shadow="false" :border="false">
				<view class="content-nobg nobg">

					<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData" label-position="top"
						labelWidth="690rpx">
						<view class="financial-buy-area">
							<view class="buy-product">
								<view class="buy-row">
									<view class="info-item tac"><span>{{$t('cycle')}}
										</span><br><span>{{subscribe.productLife}}
											{{$t('day')}}
										</span></view>
									<view class="info-item tac">
										<span>{{$t('dailyRate')}}</span><br><span>{{subscribe.profitRate*10000/100}}%</span>
									</view>
								</view>
								<view class="buy-row green">
									<view class="info-item tac">
										<span>{{$t('dividend')}}</span><br><span
											v-if="subscribe.profitType=='0'">{{$t('dueDividend')}}</span><span
											v-else>{{$t('dailyDividend')}}</span>
									</view>
									<view class="info-item tac">
										<span>{{$t('escrowAmount')}}</span><br><span
											v-if="subscribe.redemptionEarly=='0'">{{$t('dueReturn')}}</span><span
											v-else>{{$t('redemption')}}</span>
									</view>
								</view>
							</view>
							<view class="user-info">
								<view class="item">
									<p>{{$t('availableBalance')}}({{subscribe.currency}})</p>
									<p>{{getBalanceOrAssetsData.amount}}
									</p>
								</view>
								<view class="item">
									<p>{{$t('totalIncome')}}({{subscribe.currency}})</p>
									<p>{{valiFormData.amount*subscribe.productLife*10000/10000*subscribe.profitRate*10000/10000-valiFormData.amount*(subscribe.incomeChargeFeeRate*10000/10000+subscribe.outcomeChargeFeeRate*10000/10000)||0.00}}
									</p>
								</view>
							</view>
							<view class="user-control">
								<view class="rowText"><span>{{$t('escrowAmount')}}</span><span
										class="pointer el-icon-sort"
										@click="routeTo('/pages/pc/src/transfer/transfer')">{{$t('capitalTransfer')}}</span>
								</view>
								<uni-forms-item class="countforms" label="" name="amount">
									<view class="count">
										<view class="el-input el-input--suffix">
											<input type="number" autocomplete="off" v-model="valiFormData.amount"
												class="el-input__inner">
										</view><span
											@click="valiFormData.amount=getBalanceOrAssetsData.amount">{{subscribe.currency}}
											| <span class="pointer">{{$t('all')}}</span></span>
									</view>
								</uni-forms-item>
								<view class="rowText color666"><span>{{subscribe.minAmount}} -
										{{subscribe.maxAmount}}</span>
									<view class="">

										<view>
											{{$t('buy')}}{{$t('commission')}}：{{subscribe.incomeChargeFeeRate*10000/100}}%
										</view>
										<view>
											{{$t('sell')}}{{$t('commission')}}：{{subscribe.outcomeChargeFeeRate*10000/100}}%
										</view>
									</view>
								</view>
								<view class="rowText">
									<view class="flex_start m-b-40 m-t-40 ">

										<checkbox-group @change="checkboxChange">
											<label>
												<checkbox color="#1abb97" value="agree" :checked="agree"
													style="transform:scale(0.7)" />
												{{$t('readAgree')}}
											</label>
										</checkbox-group>
										<text class="c1abb97"
											@click="agree=true,$refs.serviceAgreement.open('center')">{{$t('serviceAgreement')}}</text>

									</view>
								</view>
								<view class="sentBtn-area"><button type="button"
										class="el-button el-button--default un-sentBtn "
										:disabled="!(agree&&valiFormData.amount>0)"
										:class="agree&&valiFormData.amount>0?'el-buttonbutton':''"
										@click="submit('valiForm')">

										<span style="line-height: 30px;"> {{$t('confirm')}} </span>
									</button></view>
							</view>
						</view>

					</uni-forms>
				</view>
			</uni-card>
		</uni-popup>
		<!-- 普通弹窗 -->
		<uni-popup ref="serviceAgreement">
			<uni-card class="bgfff m-b-20  trustProtocol " margin='0px' padding="40px" :is-shadow="false"
				:border="false">
				<p class="c333 weight700 font-30">{{$t('serviceAgreement')}}</p>
				<view class="" v-html="$t('trustProtocol')">

				</view>
			</uni-card>
		</uni-popup>
		<foot></foot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				agree: false, //是否同意隐私政策
				sonpage: false,
				loading: false,
				subscribe: '',
				scrollTop: 0,
				getPledgeStatisticsData: "",
				getBalanceOrAssetsData: {
					amount: 0,
					frozenAmount: 0
				},
				params: {
					page: 1, //是 int 页码
					pageSize: 10, //是 int 每页条数
					type: 0, //是 int 交易类型（ 0： 充币， 1： 提币）
				},
				paramsRecords: {
					page: 1, //是 int 页码
					pageSize: 20, //是 int 每页条数
					status: 0, //是 int 交易类型（ 0： 充币， 1： 提币）
				},
				getPledgeProductsData: "",
				/***/
				active: 0,
				maxprofitRate: 0,
				getPledgeRecordsData: '',
				// getPledgeRecordsData1: '',
				// getLegalCurrencyTransactionData1: '',
				// getLegalCurrencyTransactionData2: '',
				///*****//
				// 校验表单数据
				valiFormData: {
					userId: this.$store.state.user.id,
					productId: '',
					money: {
						currency: '',
						amount: ''
					},
					currency: '',
					amount: ''
				},
				// 校验规则
				rules: {

					amount: {
						rules: [{
							required: true,
							errorMessage: this.$t("errorEmpty")
						}, {
							format: 'number',
							errorMessage: this.$t('onlyNumbers')
						}]
					},

				},
			}
		},
		computed: {
			amount() {
				return this.valiFormData.amount
			},
			currency() {
				return this.valiFormData.currency
			},
			buttondisabled() {
				return !(this.agree && this.valiFormData.amount >= this.subscribe.minAmount && this.valiFormData.amount <=
					this.subscribe.maxAmount && this.valiFormData.amount)
			}
		},
		watch: {
			amount(val) {
				this.valiFormData.money.amount = val
			},
			currency(val) {
				this.valiFormData.money.currency = val
			},
			subscribe(val) {
				this.valiFormData.productId = val.id
				this.valiFormData.currency = val.currency
			},
			active(val) {
				this.paramsRecords.status = val
			}
		},
		onLoad() {
			this.getPledgeProducts()
			this.getPledgeStatistics()
			this.getPledgeRecords()
		},
		methods: {
			order(item) {
				console.log(item)
				let _this = this
				this.$store.state.user.id
				uni.showModal({
					content: _this.$t('whether'),
					cancelText: _this.$t('cancelText'),
					confirmText: _this.$t('confirm'),
					success: (res) => {
						if (res.confirm) {
							_this.$api.financial.redemption({
								userId: _this.$store.state.user.id,
								orderCode: item.orderCode
							}).then(res => {
								_this.tabitem(0)
							})
						}
					}
				})
			},
			maxprofitRatefun(profitRate) {
				if (this.maxprofitRate <= profitRate) {

					this.maxprofitRate = profitRate
				}
			},
			checkboxChange(event) {
				if (event.detail.value.length != 0 && event.detail.value[0] == 'agree') {
					this.agree = true
				} else {
					this.agree = false

				}
			},
			subscribefun(item) {
				this.$refs.subscribe.open('center')
				this.subscribe = item
				this.getBalanceOrAssets(item.currency)
			},
			openTabitem() {
				this.$refs.popup.open('center')
				this.tabitem(0)
			},
			tabitem(type) {
				this.paramsRecords.page = 1
				this.active = type
				this.paramsRecords.status = type
				this.getPledgeRecordsData = ''
				this.getPledgeRecords()
			},
			getPledgeProducts(pushtype) {

				this.$api.financial.getPledgeProducts(this.params).then((res) => {
					if (pushtype) {
						this.getPledgeProductsData.list.push(...res.list)
					} else {

						this.getPledgeProductsData = res
					}
				})
			},
			getPledgeStatistics() {
				this.$api.financial.getPledgeStatistics().then((res) => {

					this.getPledgeStatisticsData = res
				})
			},
			getPledgeRecords(pushtype) {
				this.loading = true
				this.$api.financial.getPledgeRecords(this.paramsRecords).then((res) => {
					if (pushtype) {
						this.getPledgeRecordsData.list.push(...res.list)
					} else {

						this.getPledgeRecordsData = res
					}
					this.loading = false
				}).catch(err => {
					this.loading = false
				})
			},
			getBalanceOrAssets(currency) {
				let params = {
					type: 1, //是	int	类型（0：查询资产，1：查询余额）
					currency, //否	string	币种（查询 余额时必传）
					walletType: 4, //	否	int	钱包类型（1 币币钱包 2 期货钱包 3 法币钱包 4质押钱包）（查询 余额时必传）
				}
				this.$api.financial.getBalanceOrAssets(params).then((res) => {


					this.getBalanceOrAssetsData = res
				})
			},
			lowergetPledgeProducts(e) {
				this.params.page++
				if (this.params.page <= this.getPledgeProductsData.pages) {

					this.getPledgeProducts('push')
				}
			},
			lower_size(event) {
				this.params.pageSize = event
				this.getPledgeRecords()
			},
			lower_page(event) {
				this.params.page = event
				this.getPledgeRecords()

			},
			submit(ref) {


				this.$refs[ref].validate().then(() => {
					this.$api.financial.hold(this.deleteInvalidParam(this.valiFormData)).then(res => {
						console.log('res', res);
						this.$refs.subscribe.close()
					}).catch(err => {
						console.log('err', err);
					})

				}).catch(err => {
					console.log('catch', err);
				})

			},

		}
	}
</script>

<style lang="scss" scoped>
	.wraper {
		color: #fff;
	}

	/deep/ .uni-forms-item__label.no-label {
		display: none;
	}

	.wraper .wraper-box .title-box,
	.wraper .wraper-box {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}

	.wraper .wraper-box {
		text-align: left;
		background: #fff;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		padding: 0;
	}

	.financial .wraper-box .title-box {
		height: 78vh;
		background-image: url(@/static/webimage/financial-banner.83837143.png);
	}

	.wraper .wraper-box .title-box {
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		// height: 100vh;
		width: 100%;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.wraper .wraper-box .title-box,
	.wraper .wraper-box {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}

	.flex {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}

	.wraper .wraper-box .category .category-box .category-row .title {
		font-weight: 800;
	}

	.wraper .wraper-box .category .category-box .category-row .triangle:before {
		position: relative;
		top: -14px;
		content: "";
		width: 0;
		height: 0;
		border-left: 8px solid transparent;
		border-right: 8px solid transparent;
		margin-right: 9px;
		border-bottom: 10px solid #1abb97;
	}

	.wraper .wraper-box .category .category-box .category-row .status {
		font-size: 14px;
		white-space: nowrap;
		background: #1abb97;
		padding: 4px 10px;
		border-radius: 17px;
		color: #fff;
	}

	.wraper .wraper-box .title-box .title-box-text {
		width: 85%;
		max-width: 1200px;
	}

	.wraper .wraper-box .title-box .title-box-text .title {
		font-size: 48px;
		font-weight: 500;
		margin-bottom: 40px;
	}

	.wraper .wraper-box .content-box {
		width: 100%;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		min-height: 80vh;
	}

	.wraper .wraper-box .content-box .content-box-text {
		width: 85%;
		max-width: 1200px;
		padding: 0 15px;
		color: #999;
	}

	.wraper .wraper-box .category {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		width: 100%;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		padding: 20px 0 100px;
		font-size: 18px;
	}

	.wraper .wraper-box .category .category-box {
		cursor: pointer;
		background: #fff;
		-webkit-box-shadow: 0 0 9px #e9e9e9;
		box-shadow: 0 0 9px #e9e9e9;
		color: #333;
		border-radius: 10px;
		padding: 10px;
		margin: 20px 8px;
		width: 100%;
		height: -webkit-fit-content;
		height: -moz-fit-content;
		height: fit-content;
	}

	.wraper .wraper-box .category .category-box .category-row {
		display: -webkit-inline-box;
		display: -ms-inline-flexbox;
		display: inline-flex;
		width: 100%;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
	}

	.wraper .wraper-box .category .category-box .category-center {
		padding: 15px;
		text-align: center;
		font-size: 15px;
	}

	.wraper .wraper-box .category .category-box .number {
		padding: 16px 0;
		background: #f6f6f6;
		color: #888;
	}

	.wraper .wraper-box .category .category-box .category-row {
		display: -webkit-inline-box;
		display: -ms-inline-flexbox;
		display: inline-flex;
		width: 100%;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
	}

	.wraper .wraper-box .category .category-box .number .l {
		width: 10%;
		margin-left: 15px;
		font-size: 40px;
		font-weight: 800;
		color: #1abb97;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}

	.wraper .wraper-box .category .category-box .number .r {
		width: 80%;
		text-align: left;
		padding: 10px 10px;
	}

	.wraper .wraper-box .content-box .content-box-text .back {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		width: 100%;
		margin-bottom: 20px;
	}

	.wraper .wraper-box .content-box .content-box-text .back .backBtn {
		width: 50px;
	}

	.pointer {
		cursor: pointer;
		color: #00b5ac;
	}

	.wraper image {
		width: 100%;
	}

	.mt10 {
		margin-top: 10px;
	}

	.flex-nw {
		display: -webkit-inline-box;
		display: -ms-inline-flexbox;
		display: inline-flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}

	.wraper .wraper-box .content-box .content-box-text .titleHasLeftLine {
		color: #1abb97;
		padding: 0 20px 0 20px;
		border-left: 5px solid #1abb97;
	}

	.financial .userInfo {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		background-color: #1abb97;
		margin: 15px 0;
		color: #fff;
		border-radius: 6px;
		font-size: 14px;
	}

	.financial .userInfo .userInfo-row {
		-webkit-box-flex: 0;
		-ms-flex: 0 0 100%;
		flex: 0 0 100%;
		display: -webkit-inline-box;
		display: -ms-inline-flexbox;
		display: inline-flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		padding: 20px 0;
	}

	.financial .userInfo .userInfo-row .userInfo-item {
		min-width: 150px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		padding: 0 20px;
	}

	.financial .userInfo .userInfo-row .userInfo-item p {
		width: 100%;
		margin: 3px 0;
		font-size: 14px;
	}

	.financial .userInfo .userInfo-row .btns {
		-webkit-box-pack: start;
		-ms-flex-pack: start;
		justify-content: flex-start;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		max-width: 400px;
	}

	.financial .userInfo .userInfo-row .userInfo-item {
		min-width: 150px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		padding: 0 20px;
	}

	.financial .userInfo .userInfo-row .btns .el-button {
		width: 100%;
		margin: 0;
		line-height: 1.5;
	}

	.el-button {
		height: 48px;
	}

	.el-button {
		display: inline-block;
		line-height: 1;
		white-space: nowrap;
		cursor: pointer;
		background: #fff;
		border: 1px solid #dcdfe6;
		color: #606266;
		-webkit-appearance: none;
		text-align: center;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		outline: 0;
		margin: 0;
		-webkit-transition: .1s;
		transition: .1s;
		font-weight: 500;
		padding: 12px 20px;
		font-size: 14px;
		border-radius: 4px;
	}

	.table {
		font-size: 14px;
		padding: 30px 0;
		margin: 20px 0 60px;
	}

	.table .table-head {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		color: #909090;
		padding: 10px;
	}

	.table .table-head .table-head-item {
		text-align: center;
		-webkit-box-flex: 1;
		-ms-flex: 1 1 20%;
		flex: 1 1 20%;
	}

	.table .table-body .table-row {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		width: 100%;
	}

	.table .table-body .table-row .table-col.text-left {
		-webkit-box-pack: left;
		-ms-flex-pack: left;
		justify-content: left;
	}

	.table .table-body .table-row .table-col {
		-webkit-box-flex: 1;
		-ms-flex: 1 1 20%;
		flex: 1 1 20%;
		padding: 16px 10px;
		display: -webkit-inline-box;
		display: -ms-inline-flexbox;
		display: inline-flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
	}

	.text-left {
		text-align: left;
	}

	.table .table-body .table-row .table-col .coin-icon {
		width: 40px;
		height: 40px;
		margin-right: 5px;
	}

	.table .table-body .table-row .table-col .coin-icon {
		width: 40px;
		height: 40px;
		margin-right: 5px;
	}

	.table .table-body .table-row .table-col {
		-webkit-box-flex: 1;
		-ms-flex: 1 1 20%;
		flex: 1 1 20%;
		padding: 16px 10px;
		display: -webkit-inline-box;
		display: -ms-inline-flexbox;
		display: inline-flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
	}

	.gr {
		color: #00b5ac;
	}

	.table .table-body .table-row .table-col .btn {
		cursor: pointer;
		background: #1abb97;
		color: #fff;
		border-radius: 50px;
		padding: 10px 20px;
	}

	.fire-icon {
		width: 20px !important;
		height: 20px !important;
		margin-left: 5px;
	}

	@media (max-width: 1200px) {
		.financial .wraper-box .title-box {
			background-position-x: 77%;
			height: 50vh;
		}

		.financial .wraper-box .content-box .content-box-text {
			width: 90%;
			padding: 0 5px;
		}

		.financial .userInfo .userInfo-row {
			// -webkit-box-pack: left;
			// -ms-flex-pack: left;
			// justify-content: left;
			padding: 2px 0;
		}

		.financial .userInfo {
			padding: 10px;
		}


		.financial .wraper-box .content-box .content-box-text {
			width: 90%;
			padding: 0 5px;
		}
	}

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


	.scroll {
		max-height: 480px;
		overflow: auto;
	}

	.nobg {
		width: 800px;

	}

	.content-nobg {

		.financial-buy-area {
			padding-top: 20px;
			font-size: 14px;
		}

		.financial-buy-area .buy-product {
			// margin: 0 20px;
			border: 1px solid #e6ecf2;
			border-radius: 20px;
		}

		.financial-buy-area .buy-product .buy-row {
			border-radius: 0 0 20px 20px;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-pack: justify;
			-ms-flex-pack: justify;
			justify-content: space-between;
			padding: 20px;
		}

		.financial-buy-area .buy-product .buy-row.green {
			background: #f6f6f6;
		}

		.financial-buy-area .buy-product .buy-row {
			border-radius: 0 0 20px 20px;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-pack: justify;
			-ms-flex-pack: justify;
			justify-content: space-between;
			padding: 20px;
		}

		.financial-buy-area .user-info {
			padding: 20px 50px;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-pack: justify;
			-ms-flex-pack: justify;
			justify-content: space-between;
		}

		.financial-buy-area .user-control {
			background: #f6f6f6;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-ms-flex-wrap: wrap;
			flex-wrap: wrap;
		}

		.financial-buy-area .user-info .item {
			text-align: center;
		}

		.financial-buy-area .user-control .count,
		.financial-buy-area .user-control .rowText {
			padding: 10px 20px;
			width: 100%;
			display: -webkit-inline-box;
			display: -ms-inline-flexbox;
			display: inline-flex;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
			-webkit-box-pack: justify;
			-ms-flex-pack: justify;
			justify-content: space-between;
		}

		.pointer {
			cursor: pointer;
			color: #00b5ac;
		}

		.financial-buy-area .user-control .count {
			background: #fff;
		}

		.financial-buy-area .user-control .count,
		.financial-buy-area .user-control .rowText {
			padding: 10px 20px;
			width: 100%;
			display: -webkit-inline-box;
			display: -ms-inline-flexbox;
			display: inline-flex;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
			-webkit-box-pack: justify;
			-ms-flex-pack: justify;
			justify-content: space-between;
		}

		.financial-buy-area .user-control .count .el-input {
			width: 630px;
			font-size: 25px;
		}

		.el-input {
			position: relative;
			font-size: 14px;
			display: inline-block;
			width: 100%;
		}

		.financial-buy-area .user-control .count,
		.financial-buy-area .user-control .rowText {
			padding: 10px 20px;
			width: 100%;
			display: -webkit-inline-box;
			display: -ms-inline-flexbox;
			display: inline-flex;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
			-webkit-box-pack: justify;
			-ms-flex-pack: justify;
			justify-content: space-between;
		}

		.color666 {
			color: #666;
		}

		.financial-buy-area .user-control .count,
		.financial-buy-area .user-control .rowText {
			padding: 10px 20px;
			width: 100%;
			display: -webkit-inline-box;
			display: -ms-inline-flexbox;
			display: inline-flex;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
			-webkit-box-pack: justify;
			-ms-flex-pack: justify;
			justify-content: space-between;
		}

		.financial-buy-area .user-control .sentBtn-area {
			padding: 10px 20px;
			width: 100%;
			display: -webkit-inline-box;
			display: -ms-inline-flexbox;
			display: inline-flex;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center;

		}

		.financial-buy-area .user-control .sentBtn-area .un-sentBtn {
			max-width: 400px;
			text-align: center;
			color: #fff;
			border-radius: 10px;
			padding: 10px 0;
			background: rgba(26, 187, 151, .3);
			width: 100%;
			margin: 20px 0;
		}

		.el-button {
			height: 48px;
		}

		.el-input {
			padding: 2px 10px;
			// border: 1px solid rgba(26, 187, 151, .3);
		}
	}

	.info-item {
		flex: 0 1 50%;
	}

	/deep/.uni-forms-item {
		margin-bottom: 0 !important;
	}

	.trustProtocol {
		width: 500px;
	}

	.el-buttonbutton {
		color: rgb(255, 255, 255) !important;
		background-color: #1abb97 !important;

		border: none !important;
	}
</style>
