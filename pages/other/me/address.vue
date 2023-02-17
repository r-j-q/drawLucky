<template>
	<view class="page ">
		<uni-nav-bar class="nav-bar" statusBar left-icon="left" :title="$t('withdrawalAddress')" rightText=""
			@clickLeft="routeTo(1)">
		</uni-nav-bar>
		<!-- <view v-for="(item,index) in 500" :key="index">
			{{ index}}
		</view> -->
		<view class="content main p-t-40">
			<view class="">
				<view class="" v-for="(item,index) in getUserBankCardData" :key="item.id">
					<uni-card class="bgfff m-b-20 card1  " margin='0px' padding="5px" :is-shadow="false"
						:border="false">
						<view class="flex_start">
							<view class="image60 ">
								<image class="image60" v-if="!item.defaultSrc" :src="
								  '../../../static/trade/' +
								  item.bankName +
								  '.png'
								" @error="ErrSrc($event, item)" />
								<image class="image60" v-else src="../../../static/trade/default.png" />
							</view>

							<view class="boxtit ">


								<view class="flex_sp_be">
									<view class="">
										<view class=" ">
											{{item.bankName}}-{{item.bankCardName}}
										</view>
									</view>
									<uni-icons type="trash" size="20" @click="delBankCard(item)"></uni-icons>
								</view>

								<view class="flex_sp_be">

									<view class="c999 font-24">
										{{item.bankCardCode}}
									</view>
								</view>

								<view class="flex_sp_be c999 font-24">

									<view class="">
										{{item.note}}
									</view>
								</view>
							</view>
						</view>
					</uni-card>
				</view>

			</view>

			<loadMore :total="getUserBankCardData.length" :nowPage="1" :pages="1" :loading="loading"></loadMore>
			<button class="button footFixedButton"
				@click="noSetWithdrawalPassword()">{{$t('addWalletAddress')}}</button>
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
				getUserBankCardData: [],
			}
		},
		computed: {

			//借助mapGetters生成计算属性：
			...mapGetters('user', ['getUser']),
		},

		onShow() {
			this.getUserBankCard()
		},
		onLoad() {

		},
		methods: {
			noSetWithdrawalPassword() {
				if (this.getUser.payPassword == "0") {
					this.$qxPop.show({
						message: this.$t('noSetWithdrawalPassword'),
						showTitle: false,
						showConfirmButton: true,
						confirmButtonText: this.$t('confirm'),
						duration: 0,
						success: () => {
							this.routeTo('/pages/other/me/setPayPassword')
						}
					})
				} else {
					this.routeTo('/pages/other/me/addAddress')
				}
			},
			ErrSrc(e, item) {
				this.$set(item, "defaultSrc", true);
			},
			delBankCard(item) {
				uni.showModal({
					title: '',
					content: this.$t('showModal1'),
					cancelText: this.$t('cancelText'),
					confirmText: this.$t('confirm'),
					success: (res) => {
						if (res.confirm) {
							this.$api.addWallet.delBankCard({
								id: item.id
							}).then((res) => {
								this.getUserBankCard()
							})
						}
					}
				})
			},
			getUserBankCard() {
				let params = {
					type: 0, //是	int	银行卡类型（0：银行卡，1：数字货币地址）
				}
				this.loading = true
				this.$api.withdraw.getUserBankCard(this.deleteInvalidParam(params)).then(
						res => {
							this.loading = false
							console.log('res', res);
							this.getUserBankCardData = res
						})
					.catch(err => {
						this.loading = false
						console.log('err', err);
					})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.main {
		padding-top: 30rpx;
		margin-bottom: 145px;

		.boxtit {
			flex: 1;
			padding-left: 20rpx;
		}

		.card1 {
			min-height: 152rpx;
		}
	}
</style>
