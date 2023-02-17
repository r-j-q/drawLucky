<template>
	<view class="page">
		<headtop type="single"></headtop>
		<view class="userInfo">
			<view class="baseMsg">
				<view class="ml flex align-center">
					<view class="img-uploader" style="border-radius: 100%; overflow: hidden; margin-right: 20px;">
						<view tabindex="0" class="el-upload el-upload--text">
							<view class="el-image" style="vertical-align: middle; width: 80px; height: 80px;">
								<img :src="getUser.headPortrait || '/static/files/rkoi0d3.jpeg'"
									class="el-image__inner" />
							</view>
							<input type="file" name="file" class="el-upload__input" />
						</view>
					</view>
					<view class="flex1">
						<view class="hi">
							Hi, *{{ getUser.email }}

							<!-- <uni-icons type="compose" color="#1abb97" class="" size="30">
							</uni-icons> -->
						</view>
						<view class="uid">uid {{ getUser.invitationCode }}</view>
					</view>
					<button type="button" class="el-button el-button--text" @click="logout()">
						<text>{{ $t('signOut') }}</text>
					</button>
				</view>
			</view>
			<view class="others">
				<view class="ml">
					<view class="flex align-center ">
						<view class="flex1 pd border safe">
							<h3>{{ $t('certification') }}</h3>
							<p class="desc">{{ $t('certificationed') }}</p>
							<view class="mt10" v-if="getUser.certificationStatus==0">
								<button type="button" class="el-button el-button--text"
									@click="routeTo('/pages/pc/src/auth/auth')">
									<text style="color: #1abb97;">{{ $t('noCcertification') }}</text>
								</button>
							</view>
							<view class="mt10" v-if="getUser.certificationStatus==1">
								<button type="button" class="el-button el-button--text">
									<text class="c999">{{certificationStatus[getUser.certificationStatus]}}</text>
								</button>
							</view>
							<view class="mt10" v-if="getUser.certificationStatus==2">
								<button type="button" class="el-button el-button--text">
									<text class="c999">{{certificationStatus[getUser.certificationStatus]}}</text>
								</button>
							</view>
							<view class="mt10" v-if="getUser.certificationStatus==3">
								<button type="button" class="el-button el-button--text">
									<text class="c999">{{certificationStatus[getUser.certificationStatus]}}</text>
								</button>
							</view>
							<view class="mt10" v-if="getUser.certificationStatus==4">
								<button type="button" class="el-button el-button--text"
									@click="routeTo('/pages/pc/src/auth/auth')">
									<text
										style="color: red;">{{certificationStatus[getUser.certificationStatus]}}</text>
								</button>
							</view>
						</view>
					</view>
				</view>
				<view class="ml">
					<view class="board border">
						<view class="head">{{ $t('authentication') }}</view>
						<view class="content">
							<view class="flex align-center item">
								<view class="icon el-icon-message"></view>
								<view class="flex1">
									<h3>{{ $t('mailbox') }}</h3>
									<p class="desc">{{ $t('mailboxTip') }}</p>
								</view>
								<view class="op ">
									<view class="sf flex_start">
										<text>{{ getUser.email }} {{ $t('verified') }}</text>
										<button type="button" class="el-button ml10 el-button--text"
											@click="routeTo('/pages/pc/src/updateEmail/updateEmail')">
											{{ $t('modify') }}
										</button>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="board border">
						<view class="head">{{ $t('passwordManagement') }}</view>
						<view class="content">
							<view class="flex align-center item">
								<view class="icon el-icon-lock"></view>
								<view class="flex1">
									<h3>{{ $t('loginPassword') }}</h3>
									<p class="desc">{{ $t('loginPasswordTip') }}</p>
								</view>
								<view class="op"
									@click="routeTo('/pages/pc/src/updateloginpwd/updateloginpwd', '?updatePWDType=1')">
									<button type="button" class="el-button el-button--text">
										<text>{{ $t('modify') }}</text>
									</button>
								</view>
							</view>
							<view class="flex align-center item">
								<view class="icon el-icon-lock"></view>
								<view class="flex1">
									<h3>{{ $t('payPassword') }}</h3>
									<p class="desc">{{ $t('payPasswordTip') }}</p>
								</view>
								<view class="op" v-if="getUser.payPassword == 0"
									@click="routeTo('/pages/pc/src/setPayPassword/setPayPassword')">
									<button type="button" class="el-button el-button--text">
										<text>{{ $t('setUp') }}</text>
									</button>
								</view>
								<view class="op" v-else
									@click="routeTo('/pages/pc/src/updateloginpwd/updateloginpwd', '?updatePWDType=2')">
									<button type="button" class="el-button el-button--text">
										<text>{{ $t('modify') }}</text>
									</button>
								</view>
							</view>
						</view>
					</view>
					<view class="board border">
						<view class="head">{{ $t('collection') }}</view>
						<view class="content">
							<view class="flex align-center item">
								<view class="icon el-icon-s-finance"></view>
								<view class="flex1">
									<h3>{{ $t('withdrawalAddress') }}</h3>
									<p class="desc">{{ $t('withdrawalAddressTip') }}</p>
								</view>
								<view class="op" @click="routeTo('/pages/pc/src/addWallet/addWallet')">
									<button type="button" class="el-button el-button--text">
										<text>{{ $t('modify') }}</text>
									</button>
								</view>
							</view>
							<view class="flex align-center item">
								<view class="icon el-icon-s-claim"></view>
								<view class="flex1">
									<h3>{{ $t('paymentMethodInFiatCurrency') }}</h3>
									<p class="desc">{{ $t('paymentMethodInFiatCurrencyTip') }}</p>
								</view>
								<view class="op" @click="routeTo('/pages/pc/src/bankSetting/bankSetting')">
									<button type="button" class="el-button el-button--text">
										<text>{{ $t('modify') }}</text>
									</button>
								</view>
							</view>
						</view>
					</view>
					<view class="board border">
						<view class="head">{{ $t('personalSettings') }}</view>
						<view class="content">
							<!-- <view class="flex align-center item">
								<view class="icon el-icon-setting"></view>
								<view class="flex1">
									<h3>颜色偏好</h3>
									<p class="desc">设定K线图、买涨、买跌的颜色</p>
								</view>
								<view class="op"><button type="button" class="el-button el-button--text">

										<text>{{$t('modify')}}</text>
									</button></view>
							</view> -->
							<view class="flex align-center item">
								<view class="icon el-icon-s-data"></view>
								<view class="flex1">
									<h3>{{ $t('pricing') }}</h3>
									<p class="desc">{{ $t('pricingTip') }}</p>
								</view>
								<view class="op flex_start" @click="toggle">
									<text class="sf mr10">{{ currentRegion.regionCode }}</text>
									<button type="button" class="el-button el-button--text m-l-20">
										<text>{{ $t('modify') }}</text>
									</button>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<foot></foot>
		<!-- 普通弹窗 -->
		<uni-popup ref="popup">
			<uni-card :title="$t('pricing')">
				<view class="el-dialog__body">
					<view class="flex_start">
						<view class="lang-item cursor"
							:class="currentRegion.regionCode == item.regionCode ? 'active' : ''"
							v-for="(item, index) in getRegionData" :key="item.id" @click="changeRegion(item)">
							{{ item.regionCode }}
						</view>
					</view>
				</view>
			</uni-card>
		</uni-popup>
	</view>
</template>

<script>
	import {
		// mapState,
		mapGetters
	} from 'vuex';
	export default {
		data() {
			return {
				certificationStatus: [this.$t('unauthorized'), this.$t('audit'), this.$t('attestation'), this.$t('hand'),
					this.$t('auditFailed')
				],
				currentRegion: {
					exchangeRate: 0,
					id: 16,
					regionCode: 'USD',
					regionName: this.$t('USD'),
					type: 1
				},
				getRegionData: []
			};
		},
		computed: {
			//借助mapState生成计算属性：
			// ...mapState({
			// 	headPortrait: (state) => state.user.headPortrait,
			// 	email: (state) => state.user.email,
			// 	invitationCode: (state) => state.user.invitationCode,
			// }),
			//借助mapGetters生成计算属性：
			...mapGetters('user', ['getUser'])
		},

		onLoad() {
			this.currentRegion = {
				exchangeRate: 0,
				id: 16,
				regionCode: 'USD',
				regionName: this.$t('USD'),
				type: 1
			};
			uni.setStorageSync('currentRegion', this.currentRegion);
		},
		methods: {
			toggle() {
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性

				this.getRegion();
			},
			getRegion() {
				let params = {
					type: 1, //	是	int	类型
					page: 1, //	是	int	页码
					pageSize: 1000 //	是	int	每页条数
				};
				this.$api.changeValuation.getRegion(params).then(res => {
					this.getRegionData = res.list;
					this.$refs.popup.open('center');
					uni.setStorageSync('getRegion', JSON.stringify(res.list));
				});
			},
			changeRegion(item) {
				if (!this.$store.state.user.token) {
					this.currentRegion = item;
					uni.setStorageSync('currentRegion', item);
					this.$refs.popup.close();
				} else {
					this.updateUserPricingMethod(item);
				}
			},
			logout() {
				// this.removeStorageAPI();
				// this.$store.dispatch('user/GETUSER');
				// this.routeTo('/pages/pc/src/login/login', 'reLaunch');
				this.$store.commit('user/LOGOUT')
			},
			updateUserPricingMethod(val) {
				this.$api.changeValuation
					.updateUserPricingMethod({
						pricingMethod: val.regionCode
					})
					.then(res => {
						this.currentRegion = val;
						this.$store.commit('user/USER_INFO_pricingMethod', val.regionCode);
						uni.setStorageSync('currentRegion', val);
						this.$refs.popup.close();
					});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.active {
		border-radius: 4px;
		background-color: #f5f5f5;
	}

	.page {
		background-color: #f2f6fc;
	}

	.userInfo .baseMsg {
		padding: 200px 0 40px 0;
		background-color: #1d1f20;
	}

	.ml {
		width: 1200px;
		margin: 0 auto;
	}

	.align-center {
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}

	.flex {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}

	.el-upload {
		width: 100%;
	}

	.el-upload {
		display: inline-block;
		text-align: center;
		cursor: pointer;
		outline: 0;
	}

	.el-image {
		position: relative;
		display: inline-block;
		overflow: hidden;
	}

	.el-image__inner {
		vertical-align: top;
		border-radius: 50%;
		overflow: hidden;
	}

	.el-image__error,
	.el-image__inner,
	.el-image__placeholder {
		width: 100%;
		height: 100%;
	}

	.flex1 {
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
	}

	.userInfo .baseMsg .hi {
		color: #fff;
		font-size: 24px;
	}

	.userInfo .baseMsg .uid {
		color: #fff;
		display: inline-block;
		padding: 2px 10px;
		min-width: 40px;
		border-radius: 11px;
		border: 1px solid #686868;
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
		-webkit-transition: 0.1s;
		transition: 0.1s;
		font-weight: 500;
		padding: 12px 20px;
		font-size: 14px;
		border-radius: 4px;
		line-height: 20px;
	}

	.el-button {
		height: 48px;
		border-color: transparent;
		background-color: transparent;
	}

	.el-button--text,
	.el-button--text:focus,
	.el-button--text:hover {
		color: #1abb97;
	}

	.el-button--text {
		color: #1abb97;
		background: 0 0;
		padding-left: 0;
		padding-right: 0;
	}

	.el-button--text,
	.el-button--text.is-disabled,
	.el-button--text.is-disabled:focus,
	.el-button--text.is-disabled:hover,
	.el-button--text:active {
		border-color: transparent;
	}

	.userInfo .others {
		padding: 20px 0;
		margin: 50px 0;
	}

	.ml {
		width: 1200px;
		margin: 0 auto;
	}

	.align-center {
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}

	.flex {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}

	.userInfo .safe {
		background: url(@/static/webimage/auth.2b0ed6c9.png) no-repeat;
		background-position: 90%;
		background-size: 200px;
	}

	.pd {
		padding: 24px;
	}

	.border {
		border: 1px solid #e6ecf2;
	}

	.flex1 {
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
	}

	.userInfo .others h3 {
		font-weight: 400;
		margin-bottom: 4px;
		font-size: 15px;
	}

	.userInfo .others .desc {
		color: #666;
		font-size: 13px;
	}

	.mt10 {
		margin-top: 10px;
	}

	.userInfo .others .board {
		margin-top: 24px;
	}

	.border {
		border: 1px solid #e6ecf2;
	}

	.userInfo .others .board .head {
		background-color: #f2f6fa;
		padding: 15px 24px;
		border-bottom: 1px solid #e6ecf2;
		font-size: 16px;
	}

	.content {
		overflow: hidden;
	}

	.userInfo .others .board .content .item {
		padding: 15px 24px;
	}

	.align-center {
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}

	.flex {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}

	.userInfo .others .board .content .item .icon {
		color: #1abb97;
		margin-right: 20px;
		font-size: 18px;
		height: 30px;
		width: 30px;
		line-height: 29px;
		border: 1px solid #1abb97;
		border-radius: 100%;
		text-align: center;
	}

	.userInfo .others h3 {
		font-weight: 400;
		margin-bottom: 4px;
		font-size: 15px;
	}

	.userInfo .others .desc {
		color: #666;
		font-size: 13px;
	}

	.userInfo .others .board .content .item .sf {
		color: #999;
		font-size: 12px;
	}

	.ml10 {
		margin-left: 10px;
	}

	.el-dialog__body {
		padding: 20px 20px 0;
		width: 500px;
	}

	.el-dialog__body {
		padding: 30px 20px;
		color: #606266;
		font-size: 14px;
		word-break: break-all;
		//
	}

	.lang-item {
		text-align: center;
		flex: 0 1 calc(33% - 40px);
		display: inline-block;
		margin-top: 16px;
		margin-right: 16px;
		// width: calc(33% - 40px);
		height: 40px;
		line-height: 40px;
		padding: 0 12px;
	}

	.cursor {
		cursor: pointer;
	}

	.lang-item:hover {
		border-radius: 4px;
		background-color: #f5f5f5;
	}

	uni-button:after {
		content: ' ';
		width: 200%;
		height: 200%;
		// position: absolute;
		// top: 50%;
		// left: 0;
		line-height: 46px;
		border: none;
		-webkit-transform: scale(0.5);
		transform: scale(0.5);
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
		box-sizing: border-box;
		border-radius: 10px;
	}
</style>
