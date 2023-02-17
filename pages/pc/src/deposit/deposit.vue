<template>
	<view class="page ">
		<headtop type="single"></headtop>
		<view class="main">
			<uni-nav-bar class="nav-bar" statusBar backgroundColor="#eef1f5" left-icon="left" :leftText="$t('goBack')"
				color="#1abb97" rightText="" @clickLeft="routeTo(1)"></uni-nav-bar>
			<view class="fund-box">
				<h3 class="title">{{$t('rechargeMoney')}}</h3>
				<uni-card class="bgfff m-b-20   " margin="0px" padding="40px" :is-shadow="false" :border="false">
					<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData" label-position="top"
						label-width="150">
						<view class="flex_sp_be">
							<view class="left">
								<uni-forms-item :label="$t('currency')" name="currency">
									<uni-data-select v-model="valiFormData.currency" icon="bankName"
										:localdata="getChannelData" labelkey="bankName-payeeName" valuekey="bankName"
										:clear="false" @change="selectchange"></uni-data-select>
								</uni-forms-item>

								<!-- <uni-forms-item label="提币网络" name="">
									<view class="tab">
										<view class="item " :class="active==item.payeeName?'active':''"
											v-for="(item,index) in getChannelData" :key="item.id"
											@click="active=item.payeeName">
											{{item.payeeName}}
										</view>
									</view>
								</uni-forms-item> -->
								<uni-forms-item :label="$t('chargingAddress')" name="">
									<uni-card class="bgfff m-b-20   " margin="0px" padding="40px" :is-shadow="false">
										<view class="tac" v-if="this.valiFormData.channelId">
											<view class=" m-b-20">{{ $t('rechargeAddress') }}</view>
											<canvas class=" m-b-20" id="qrcode" canvas-id="qrcode"
												style="width: 160px;height: 160px; margin: 0 auto;"></canvas>
											<view class="m-b-20">{{ selectitem.bankCardCode }}</view>
											<view class="m-b-20 copy" @click="copyfun(selectitem.bankCardCode)">
												{{ $t('copyAddress') }}
											</view>
										</view>
									</uni-card>
								</uni-forms-item>
							</view>
							<view class="rghit">
								<uni-forms-item :label="$t('rechargeQuantity')" name="amount">
									<uni-easyinput class="input-box" v-model="valiFormData.amount" type="text"
										:inputBorder="false"
										:placeholder=" selectitem.supportMoney.split(',')[0] +'-'+selectitem.supportMoney.split(',')[1]">
									</uni-easyinput>
								</uni-forms-item>
								<uni-forms-item :label="$t('chargingAddress')" name="address">
									<uni-easyinput class="input-box" v-model="valiFormData.address" type="text"
										:inputBorder="false" :placeholder="$t('placeholderchargingAddress')">
									</uni-easyinput>
								</uni-forms-item>
								<uni-forms-item :label="$t('prove')" name="fileList">
									<izUploaderImg :imageWidth="400" style="width: 100%;" :number="3"
										:configObj="configObj" :isUploadUrl="isUploadUrl" @delImagefun="delImagefun"
										@successImg="successImg" @kaishi="kaishi" @qingkong="qingkong"></izUploaderImg>
								</uni-forms-item>
								<uni-forms-item :label="'Hash'+$t('optional')" name="hashValue">
									<uni-easyinput class="input-box" v-model="valiFormData.hashValue" type="text"
										:inputBorder="false" :placeholder="$t('placeholderHash')"></uni-easyinput>
								</uni-forms-item>
								<uni-forms-item :label="$t('note')+$t('optional')" name="remark">
									<uni-easyinput class="input-box" v-model="valiFormData.remark" type="text"
										:inputBorder="false" :placeholder="$t('placeholderNote')"></uni-easyinput>
								</uni-forms-item>
								<button class="button" :disabled="valiFormData.amount <= 0"
									@click="submit('valiForm')">{{$t('rechargeMoney')}}</button>
							</view>
						</view>
					</uni-forms>
				</uni-card>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		// mapState,
		mapGetters
	} from 'vuex';
	import izUploaderImg from '@/components/iz-uploader-img/iz-uploader-img.vue';
	// https://ext.dcloud.net.cn/plugin?id=1287
	import UQRCode from '@/uni_modules/Sansnn-uQRCode/js_sdk/uqrcode/uqrcode.js';
	export default {
		components: {
			izUploaderImg
		},
		data() {
			return {
				detailsimg: '',
				isimg: false,
				configObj: {
					//aliyun OSS config
					uploadImageUrl: uni.getStorageSync('WEBINFO').resourceProxy +
						'/usdttrade_uploader/uploadPrepayProof', //阿里云上传域名
					AccessKeySecret: '***', //Secret，登录oss控制台查看
					OSSAccessKeyId: '***', //KeyId，登录oss控制台查看
					timeout: 87600,
					maxSize: 4 * 1024 * 1024 //上传文件的大小限制,128mb
				},
				isUploadUrl: true,

				active: '',
				getChannelData: [],
				selectitem: {
					supportMoney: '0,0'
				},
				// 校验表单数据
				valiFormData: {
					payeeName: '',
					userId: '', //是	int	用户ID
					money: {
						amount: '', //
						currency: '' //
					}, //	是	dict	充值数量（amount=数量；currency=币种）
					amount: '', //
					currency: '', //
					fileList: [], //	是	list	充值证明文件地址数组

					address: '', //	是	string	充值地址
					channelId: '', //	是	int	通道ID
					hashValue: '', //	否	string	Hash
					remark: '' //否	string	用户备注
				},
				frst: true,
				// 校验规则
				rules: {
					fileList: {
						rules: [{
								required: true,
								errorMessage: this.$t('errorMessageprove')
							},
							{
								validateFunction: (rule, value, data, callback) => {
									if (value.length <= 0) {
										callback(this.$t('errorMessageprove'));
									}
									return true;
								}
							}
						]
					},
					amount: {
						rules: [{
								required: true,
								errorMessage: this.$t('errorEmpty')
							},
							{
								format: 'number',
								errorMessage: this.$t('onlyNumbers')
							}
						]
					},
					currency: {
						rules: [{
							required: true,
							errorMessage: this.$t('errorEmpty')
						}]
					},
					address: {
						rules: [{
							required: true,
							errorMessage: this.$t('errorEmpty')
						}]
					}
				}
			};
		},

		computed: {
			currency() {
				return this.valiFormData.currency;
			},
			amount() {
				return this.valiFormData.amount;
			},
			//借助mapGetters生成计算属性：
			...mapGetters('user', ['getUser'])
		},
		watch: {
			selectitem: {
				handler(val) {
					if (val) {
						this.valiFormData.payeeName = val.id;
						this.valiFormData.channelId = val.id;
						this.valiFormData.currency = val.bankName;
						this.valiFormData.money.currency = val.bankName;
						this.$nextTick(() => {
							this.makeCode(val.bankCardCode);
						});
					}
				},
				immediate: true,
				deep: true
			},
			currency(val) {
				this.valiFormData.money.currency = val;
			},
			amount(val) {
				this.valiFormData.money.amount = val;
			},
			getUser: {
				handler(val) {
					this.valiFormData.userId = val.id;
				},
				deep: true,
				immediate: true
			}
		},

		onLoad() {
			this.getChannel();
		},
		methods: {
			qingkong() {
				this.valiFormData.fileList = [];
			},
			kaishi(e, i, res) {
				if (e) {
					uni.showLoading({
						title: `Uploading...`,
						mask: true
					});
					this.isimg = true;
				}
				if (!e) {
					uni.hideLoading();
					this.isimg = false;
				}
				if (i) {
					let err = res;
					this.valiFormData.fileList = [];
					console.log('客户端报错', err);
					uni.showToast({
						title: err.data.description,
						duration: 3000,
						icon: 'none'
					});
					this.isimg = false;
				}
			},
			successImg(details) {
				let arrimg = [];
				this.detailsimg = JSON.parse(JSON.stringify(details));
				this.detailsimg.forEach((img, index, arr) => {
					arrimg.push(img.url);
				});
				this.valiFormData.fileList = arrimg;
			},
			delImagefun(imagelist) {
				let arrimg = [];
				this.detailsimg = JSON.parse(JSON.stringify(imagelist));
				this.detailsimg.forEach((img, index, arr) => {
					arrimg.push(img.url);
				});
				this.valiFormData.fileList = arrimg;
			},
			//
			makeCode(data) {
				// 获取uQRCode实例
				var qr = new UQRCode();
				// 设置二维码内容
				qr.data = data;
				// 设置二维码大小，必须与canvas设置的宽高一致
				qr.size = 160;
				// 调用制作二维码方法
				qr.make();
				// 获取canvas上下文
				var canvasContext = uni.createCanvasContext('qrcode', this); // 如果是组件，this必须传入
				// 设置uQRCode实例的canvas上下文
				qr.canvasContext = canvasContext;
				// 调用绘制方法将二维码图案绘制到canvas上
				qr.drawCanvas();
			},
			selectchange(event, val) {
				console.log(event, val, 'event, val');
				if (val) {
					this.selectitem = val;
				} else {
					this.selectitem = {
						supportMoney: '0,0'
					};
				}
			},
			getChannel() {
				let params = {
					type: 0 //是	int	银行卡类型（0：银行卡，1：数字货币地址）
				};
				this.$api.deposit
					.getChannel(this.deleteInvalidParam())
					.then(res => {
						console.log('res', res);
						this.getCurrencyData = [];
						for (let key in res) {
							this.getChannelData.push(...res[key]);
						}
					})
					.catch(err => {
						console.log('err', err);
					});
			},
			submit(ref) {
				this.$refs[ref]
					.validate()
					.then(() => {
						this.$api.deposit
							.recharge(this.deleteInvalidParam(this.valiFormData))
							.then(res => {
								console.log('res', res);
								this.routeTo(1)
							})
							.catch(err => {
								console.log('err', err);
							});
					})
					.catch(err => {
						console.log('catch', err);
					});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.main {
		width: 800px;
		margin: 0 auto;

		.fund-box {
			/deep/ .uni-card {
				overflow: inherit;
			}

			color: #1e2329;
			border-radius: 8px;
			background: rgba(242, 246, 250, 0.5);
			padding: 40px 0px;

			.title {
				font-size: 24px;
				font-weight: 600;
				margin-bottom: 20px;
			}

			// .tab {
			// 	margin: 10px 0 20px 0;
			// 	color: #707a8a;
			// 	font-size: 16px;

			// 	.item.active {
			// 		background-color: #f5f5f5;
			// 		color: #1e2329;
			// 		border-radius: 8px;
			// 	}

			// 	.item {
			// 		display: inline-block;
			// 		cursor: pointer;
			// 		padding: 8px 24px;
			// 		margin-right: 12px;
			// 	}

			// }
		}

		.input-box {
			border-radius: 4px;
			border: 1rpx solid #dcdfe6;
			overflow: hidden;
		}

		.left {
			flex: 0 1 60%;
			align-self: flex-start;
			// padding: 0 10px 0 0;
		}

		.rghit {
			flex: 0 1 35%;
			align-self: flex-start;
			// padding: 0 0 0 10px;
		}

		// .file {
		// 	/deep/ .file-picker__box {
		// 		width: 100% !important;
		// 	}
		// }
		/deep/ .add-wrap,
		/deep/ .area-con {
			width: 90% !important;
			height: 90% !important;
		}
	}
</style>
