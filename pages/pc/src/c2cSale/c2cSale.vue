<template>
	<view class="page buttonp">
		<headtop type="single" :indexpage='3'></headtop>
		<view class="main m-t-40">
			<uni-card class="bgfff m-b-20 card1  " margin='0px' padding="40px" :is-shadow="false" :border="false">
				<view class=" flex_sp_be m-b-20">
					<h1 class="">{{$t('sell')}}</h1>
					<button class="el-button " type="default" plain="true"
						@click="routeTo('/pages/pc/src/withdraw/withdraw')">{{$t('buy')}}</button>
				</view>
				<!-- 	<view class=" flex_sp_be m-b-20">

					<button class="el-button  button1" type="default" plain="true">USDT</button>
				</view> -->
				<view class="flex_start m-b-20">
					<view class="coin-option  m-l-20" :class="selectItem.name==item.name?'actvent':''"
						v-for="(item,index) in getCurrencyData" :key="index" @click="checkeditem(item)">
						{{item.name}}
					</view>

				</view>
				<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData" label-position="top">

					<uni-forms-item :label="$t('collectionAccount')" name="bankCardId">

						<uni-data-select class="select2" v-model="valiFormData.bankCardId"
							:localdata="getUserBankCardData" labelkey="bankCardCode" valuekey="id"
							@change="changebankCardCode" :clear="false">
						</uni-data-select>
					</uni-forms-item>
					<uni-forms-item :label="$t('num')" name="amount">
						<view class="">

							<view class=" flex_sp_be input-box">
								<uni-easyinput class="easyinput" v-model="valiFormData.amount" :inputBorder="false"
									:styles="styles" :placeholderStyle="placeholderStyle"
									:placeholder="$t('placeholdernum')">
								</uni-easyinput>
								<view class="">
									<text class="font-32 text1">{{selectItem.name||$t('unselected')}}</text>
									<text class="font-32 text2" :class="valiFormData.currency?'c333':'c999'"
										@click="valiFormData.currency?valiFormData.amount=getBalanceOrAssetsData.amount:''">{{$t('all')}}</text>
								</view>
							</view>
							<view class="m-l-20 m-b-20 flex_sp_be">
								<view class="">
									<view class="c333 m-b-10 flex_start"
										v-show="valiFormData.amount>0&&regionCodeItem.exchangeRate>0&&C2CMarketItem.currentDaysClosePrice>0">

										<text>
											{{$t('univalence')}}≈
										</text>
										<text class="m-l-10"
											v-if="regionCodeItem.outcomeDiscount=='0'||regionCodeItem.outcomeDiscount==''||regionCodeItem.outcomeDiscount=='null'||regionCodeItem.outcomeDiscount==null">{{getFloat(valiFormData.amount*regionCodeItem.exchangeRate*C2CMarketItem.currentDaysClosePrice,2)}}
										</text>
										<text class="m-l-10"
											v-else>{{getFloat(valiFormData.amount*regionCodeItem.exchangeRate*regionCodeItem.outcomeDiscount*C2CMarketItem.currentDaysClosePrice,2)}}
										</text>
										<text class="m-l-10">{{c2cTrade.legalCurrency}}</text>
									</view>
									<view class="c333">

										{{$t('availablenum')}}：{{getBalanceOrAssetsData.amount}} {{selectItem.name}}
									</view>
								</view>
								<view class="">
									<text>

										{{$t('nowCollectionMethodTip')}}
									</text>
									<text class="to" @click="routeTo('/pages/pc/src/bankSetting/bankSetting')">
										→{{$t('toAdd')}}
									</text>
								</view>
							</view>
						</view>
					</uni-forms-item>
					<uni-forms-item :label="$t('payPassword')" name="payPassword">
						<view class="input-box">

							<uni-easyinput class="easyinput " :inputBorder="false" :styles="styles"
								:placeholderStyle="placeholderStyle" type="password" v-model="valiFormData.payPassword"
								:placeholder="$t('placeholderPassword')" />
						</view>
					</uni-forms-item>
				</uni-forms>


				<view class=" flex_sp_be m-b-20">

					<button class="el-button  button1" type="default" plain="true"
						@click="submit('valiForm')">{{selectItem?$t('sell'):$t('closed')}}</button>
				</view>
				<uni-card class=" m-b-20 card2  " margin='0px' padding="20px" :is-shadow="false" :border="false">
					<view class="">
						<text>{{$t('type')}}</text>
						<uni-data-checkbox mode="tag" selectedColor=" #1abb97" v-model="typeradio" :localdata="type"
							@change="checkboxchange(typeradio,'')">
						</uni-data-checkbox>
					</view>
					<view class="">
						<text>{{$t('state')}}</text>
						<uni-data-checkbox mode="tag" selectedColor=" #1abb97" v-model="resultStatusradio"
							:localdata="status" @change="checkboxchange('',resultStatusradio)"></uni-data-checkbox>
					</view>
				</uni-card>
				<view class="table">
					<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll">
						<uni-table v-if="typeradio=='0'" :loading="loading" border :stripe="false" type=""
							:emptyText="$t('contentnomore')">
							<uni-tr>
								<uni-th width="150" align="left">{{$t('state')}}</uni-th>
								<uni-th width="150" align="left">{{$t('currency')}}</uni-th>
								<uni-th width="150" align="left">{{$t('price')}}</uni-th>
								<uni-th width="150" align="left">{{$t('num')}}</uni-th>
								<uni-th width="150" align="left">{{$t('currencyNum')}}</uni-th>
								<uni-th width="150" align="left">{{$t('createTime')}}</uni-th>
							</uni-tr>
							<template v-for="(item, index) in getLegalCurrencyTransactionData.list">
								<uni-tr :key="index">
									<uni-td><text class="" v-if="item.status=='0'">{{ select1[item.status] }}</text>
										<text class="green" v-if="item.status=='1'">{{ select1[item.status] }}</text>
										<text class="red" v-if="item.status=='2'">{{ select1[item.status] }}</text>
									</uni-td>
									<uni-td>
										<view class="flex_start">
											<view class="image55 ">
												<image class="image55" v-if="!item.defaultSrc"
													:src="'../../../../static/trade/'+item.withdrawalBankName+'.png'"
													mode="widthFix" @error="ErrSrc($event, item)">
												</image>
												<image class="image55 " v-else
													src="../../../../static/trade/default.png" />
											</view>
											<text class="m-l-20">{{ item.withdrawalBankName }}</text>
										</view>
									</uni-td>
									<uni-td>{{item.exchangeRate}} {{item.realCurrency}}</uni-td>
									<uni-td>{{ item.topUpMoney }} {{item.withdrawalBankName}}</uni-td>
									<uni-td>{{ item.exchangeAmount }} {{item.realCurrency}}</uni-td>
									<uni-td>{{ item.createTime }}</uni-td>
								</uni-tr>
							</template>
						</uni-table>
						<uni-table v-if="typeradio=='1'" :loading="loading" border :stripe="false" type=""
							:emptyText="$t('contentnomore')">
							<uni-tr>
								<uni-th width="150" align="left">{{$t('state')}}</uni-th>
								<uni-th width="150" align="left">{{$t('currency')}}</uni-th>
								<uni-th width="150" align="left">{{$t('price')}}</uni-th>
								<uni-th width="150" align="left">{{$t('num')}}</uni-th>
								<uni-th width="150" align="left">{{$t('bankName')}}</uni-th>
								<uni-th width="150" align="left">{{$t('bankcode')}}</uni-th>
								<uni-th width="150" align="left">{{$t('createTime')}}</uni-th>
								<uni-th width="150" align="left">{{$t('confirmTime')}}</uni-th>
							</uni-tr>
							<template v-for="(item, index) in getLegalCurrencyTransactionData.list">
								<uni-tr :key="index">
									<uni-td><text class="" v-if="item.status=='0'">{{ select1[item.status] }}</text>
										<text class="green" v-if="item.status=='1'">{{ select1[item.status] }}</text>
										<text class="red" v-if="item.status=='2'">{{ select1[item.status] }}</text>
									</uni-td>
									<uni-td>
										<view class="flex_start">
											<view class="image55 ">
												<image class="image55" v-if="!item.defaultSrc"
													:src="'../../../../static/trade/'+item.currency+'.png'"
													mode="widthFix" @error="ErrSrc($event, item)">
												</image>
												<image class="image55 " v-else
													src="../../../../static/trade/default.png" />
											</view>
											<text class="m-l-20">{{ item.currency }}</text>
										</view>
									</uni-td>
									<uni-td>{{ item.exchangeRate }} {{item.realCurrency}}</uni-td>
									<uni-td>{{ item.withdrawalAmount }} {{item.currency}}</uni-td>
									<uni-td>{{ item.withdrawalBankName }}</uni-td>
									<uni-td>{{ item.withdrawalCardId }}</uni-td>
									<uni-td>{{ item.createTime }}</uni-td>
									<uni-td>{{item.byTime }}</uni-td>
								</uni-tr>
							</template>
						</uni-table>
					</scroll-view>
					<pagInation v-if="getLegalCurrencyTransactionData.total" :page-sizes="[10, 20, 30, 40]"
						:limit.sync="params.pageSize" layout="  prev, pager, next"
						:total="getLegalCurrencyTransactionData.total" :page.sync="params.page"
						@size-change="lower_size" @current-change="lower_page" />
				</view>
			</uni-card>
		</view>
	</view>
</template>

<script>
	import {
		// mapState,
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {
				loading: false,
				getBalanceOrAssetsData: "",
				regionCodeItem: '',
				C2CMarketItem: '',
				c2cTrade: '',
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				params: {
					page: 1, //是 int 页码
					pageSize: 20, //是 int 每页条数
					type: 0, //是 int 交易类型（ 0： 充币， 1： 提币）
					status: 1, //是 
					resultStatus: 0, //是 
				},
				styles: {
					color: '#000', //	输入文字颜色
					disableColor: '#fff', //	输入框禁用背景色
					borderColor: '#fff', //	边框颜色
				},
				placeholderStyle: "font-size: 16px;				height: 53 px;				line - height: 53 px;				color: rgb(192, 196, 204);				",
				getLegalCurrencyTransactionData: [],

				getUserBankCardData: [],
				getCurrencyData: [],
				selectItem: '',
				current: 'JPY',
				typeradio: 0,
				resultStatusradio: 0,
				type: [{
					text: this.$t('buy'),
					value: 0
				}, {
					text: this.$t('sell'),
					value: 1
				}],
				status: [{
					text: this.$t('all'),
					value: ''
				}, {
					text: this.$t('processing'),
					value: 0
				}, {
					text: this.$t('success'),
					value: 1
				}, {
					text: this.$t('fail'),
					value: 2
				}],
				select1: [this.$t('processing'),
					this.$t('success'),
					this.$t('fail'),
				],
				// 校验表单数据
				valiFormData: {
					payPassword: '', //	是	dict	支付密码
					bankCardId: '', //	是	int	收款账户ID
					userId: '', //是	int	用户ID
					currency: "",
					amount: '',
					money: {
						currency: "",
						amount: ''
					}, //是 dict 划转数量（ amount = 数量； currency = 币种）
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
					currency: {
						rules: [{
							required: true,
							errorMessage: this.$t("errorEmpty")
						}]
					},
					payPassword: {
						rules: [{
							required: true,
							errorMessage: this.$t("errorEmpty")
						}, {
							pattern: /^[a-zA-Z0-9]{4,30}$/,
							errorMessage: this.$t('errorStandard') + this.$t('errorLength') + "[a-zA-Z0-9]"
						}]
					},
				},
			}
		},

		computed: {
			C2CMarketDelayed() {
				let arr = JSON.parse(JSON.stringify(this.$store.state.socket.websocketData.C2CMarketDelayed));
				return arr.reduce(
					(accumulator, current) => {
						accumulator[current.symbolPretty.split('/')[0]] = current;
						return accumulator;
					}, {}
				);
			},
			currency() {
				return this.valiFormData.currency
			},
			amount() {
				return this.valiFormData.amount
			},

			//借助mapGetters生成计算属性：
			...mapGetters('user', ['getUser']),
		},
		watch: {
			currency(val) {
				this.valiFormData.money.currency = val
				if (this.getRegion) {
					this.getRegion.map(item => {
						if (item.regionCode == this.c2cTrade.legalCurrency) {
							this.regionCodeItem = item
						}

					})


				}
				this.C2CMarketItem = this.C2CMarketDelayed[val]
			},
			amount(val) {
				this.valiFormData.money.amount = val
			},
			selectItem(val) {
				if (val) {
					this.valiFormData.currency = val.name
				}
			},
			getUser: {
				handler(val) {
					this.valiFormData.userId = val.id
				},
				deep: true,
				immediate: true
			},

		},

		onLoad() {
			this.getRegion = uni.getStorageSync('getRegion')
			this.getCurrency()
			this.getUserBankCard()
			this.getLegalCurrencyTransaction()
		},
		methods: {
			ErrSrc(e, item) {
				this.$set(item, "defaultSrc", true);
				// this.ImgSrc = this.errSrc;
			},
			changebankCardCode(event, item) {
				if (item) {

					this.c2cTrade = item
					this.valiFormData.bankCardId = this.c2cTrade.id
					console.log(this.valiFormData, "this.valiFormData")
				}
			},
			getCurrency() {
				let params = {
					type: 1, //是	int（出站类型（0提币 1卖出 2买币）
				}
				this.$api.c2cSale.getCurrency(this.deleteInvalidParam(params)).then(
					res => {
						console.log('res', res);

						this.getCurrencyData = []

						for (let key in res) {
							let obj = {
								name: key,
								child: res[key]
							}
							this.getCurrencyData.push(obj)
						}
						if (this.getCurrencyData[0]) {

							this.checkeditem(this.getCurrencyData[0])
						}
					})

			},
			checkeditem(val) {
				this.selectItem = val
				this.getBalanceOrAssets(val.name)
			},
			getBalanceOrAssets(currency) {
				let params = {
					type: 1, //是	int	类型（0：查询资产，1：查询余额）
					currency, //否	string	币种（查询 余额时必传）
					walletType: 3, //	否	int	钱包类型（1 币币钱包 2 期货钱包 3 法币钱包 4质押钱包）（查询 余额时必传）
				}
				return this.$api.assets.getBalanceOrAssets(params).then((res) => {
					this.getBalanceOrAssetsData = res
				})
			},
			getUserBankCard() {
				let params = {
					type: 1, //是	in
				}
				this.loading = true
				this.$api.withdraw.getUserBankCard(this.deleteInvalidParam(params)).then(res => {
						this.loading = false
						console.log('res', res);
						this.getUserBankCardData = res
					})
					.catch(err => {
						this.loading = false
						console.log('err', err);
					})
			},

			getLegalCurrencyTransaction(pushtype, type = "", resultStatus = "") {
				if (type != '') {
					this.params.page = 1
					this.params.type = type
				}
				if (resultStatus != '') {
					this.params.page = 1
					this.params.resultStatus = resultStatus

				}
				this.$api.c2cSale.getLegalCurrencyTransaction(this.deleteInvalidParam(this.params)).then(
					res => {
						console.log('res', res);
						if (pushtype) {

							this.getLegalCurrencyTransactionData.list.push(...res.list)
						} else {
							this.getLegalCurrencyTransactionData = res

						}
						this.currentvalue = this.params.type
					}).catch(err => {
					this.currentvalue = this.params.type
				})

			},
			checkboxchange(type = "", resultStatus = "") {
				this.params = {
					page: 1, //是 int 页码
					pageSize: 20, //是 int 每页条数
					type: this.typeradio,
					status: 1, //
					resultStatus: this.resultStatusradio, //
				}
				console.log(type, resultStatus, "event,type, resultStatus")
				this.getLegalCurrencyTransaction()
			},
			lower_size(event) {
				this.params.pageSize = event
				this.getLegalCurrencyTransaction()
			},
			lower_page(event) {
				this.params.page = event
				this.getLegalCurrencyTransaction()

			},
			submit(ref) {
				this.$refs[ref].validate().then(() => {

					this.$api.c2cSale.sell(this.deleteInvalidParam(this.valiFormData)).then(
						res => {
							console.log('res', res);
							this.routeTo(1)
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
	.coin-option {
		display: inline-block;
		padding: 20rpx;
		border-radius: 6rpx;
		min-width: 120rpx;
		text-align: center;
		color: #1abb97;
		background-color: rgba(197, 197, 197, 0.2);
	}

	.actvent {
		border-color: #1abb97;
		background-color: #1abb97;
		color: #fff;
	}

	.main {
		width: 1200px;
		margin: 0 auto;

		.el-button {
			line-height: 1;
			display: inline-block;
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
			padding: 10px 20px;
			font-size: 14px;
			border-radius: 4px;
			height: 36px;
		}

		.to {
			color: #1abb97;
		}

		.button1 {
			border-color: #1abb97;
			background-color: #1abb97;
			color: #fff;
		}

		.select2 {
			/deep/ .uni-select {
				line-height: 50px;
				height: 50px;

				.uni-select__input-box {

					line-height: 50px;
					height: 50px;
				}
			}
		}

		.easyinput /deep/ .uni-input-wrapper .uni-input-input {
			font-size: 16px;
			line-height: 100rpx;
			height: 100rpx;
		}

		.input-box {
			border: 1px solid #e5e5e5;
			border-radius: 4px;

			.text1 {
				line-height: 100rpx;
				border-right: 1rpx solid rgba(184, 198, 216, 0.16);
				padding: 0 20rpx;
			}

			.text2 {
				line-height: 100rpx;
				padding: 0 20rpx;
			}
		}

		.card2 {
			margin-top: 0px !important;
			background-color: #eee;
		}

		.table {}

		.scroll {

			max-height: 500px;
			overflow: auto;
		}
	}
</style>
