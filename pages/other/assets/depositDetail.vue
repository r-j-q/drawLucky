<template>
	<view class="app">
		<uni-nav-bar class="nav-bar" statusBar left-icon="left" :title="$t('rechargeMoney')" rightText="" @clickLeft="routeTo(1)"
			@clickRight="routeTo('/pages/other/assets/orderHistory','?orderHistory=0')">
			<block slot="right">
				<view class="">
					<view class="cfff font-28 flex_start" @click="">
						<uni-icons type="calendar" color="#333" size="20"></uni-icons>
					</view>
				</view>
			</block>
		</uni-nav-bar>
		<view class="content main p-b-40 p-t-40">
			<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData" label-position="top"
				labelWidth="690rpx">

				<uni-forms-item :label="$t('currency')" name="currency">
					<uni-list class="listselect" :border="false">
						<uni-list-item v-if="!selectitem" title="" clickable showArrow
							@click="$refs.popup.open('bottom')">
							<template v-slot:body>
								<text class="placeholderItem">{{$t('placeholderCurrency')}}</text>
							</template>
						</uni-list-item>
						<uni-list-item v-else :title="valiFormData.currency"
							:thumb="'../../../static/trade/'+valiFormData.currency+'.png'" thumb-size="sm" clickable
							showArrow @click="$refs.popup.open('bottom')">
						</uni-list-item>
					</uni-list>
				</uni-forms-item>
				<uni-forms-item :label="$t('payeeName')" name="payeeName">
					<uni-data-checkbox mode="tag" v-model="valiFormData.payeeName" :value="valiFormData.payeeName"
						selectedColor="#1abb97" :disabled="!selectitem.child" :localdata="selectitem.child" :map="{
							text:'payeeName',value:'id'
						}" @change="checkbox"></uni-data-checkbox>
				</uni-forms-item>
				<view class="tac" v-if="childItem">
					<view class=" m-b-20">
						{{$t('rechargeAddress')}}
					</view>
					<canvas class=" m-b-20" id="qrcode" canvas-id="qrcode"
						style="width: 160px;height: 160px; margin: 0 auto;"></canvas>
					<view class="m-b-20">
						{{childItem.bankCardCode}}
					</view>
					<view class="m-b-20 copy" @click="copyfun(childItem.bankCardCode)">
						{{$t('copyAddress')}}
					</view>
				</view>
				<uni-forms-item :label="$t('rechargeQuantity')" name="amount">
					<uni-easyinput class="input-box" v-model="valiFormData.amount" type="text" :inputBorder="false"
						:placeholder="childItem.supportMoney?childItem.supportMoney.split(',')[0]+'-'+childItem.supportMoney.split(',')[1]:''">
					</uni-easyinput>
				</uni-forms-item>
				<uni-forms-item :label="$t('chargingAddress')" name="address">
					<uni-easyinput class="input-box" :inputBorder="false" v-model="valiFormData.address" type="text"
						:placeholder="$t('placeholderchargingAddress')">
					</uni-easyinput>
				</uni-forms-item>
				<uni-forms-item :label="$t('prove')" name="fileList">
					<izUploaderImg  style="width: 100%;" :number="3" :configObj="configObj" :isUploadUrl="isUploadUrl"
						 @delImagefun="delImagefun"
						@successImg="successImg" @kaishi="kaishi" @qingkong="qingkong">
					</izUploaderImg>
				</uni-forms-item>
				<uni-forms-item :label="'Hash'+$t('optional')" name="hashValue">
					<uni-easyinput class="input-box" v-model="valiFormData.hashValue" type="text" :inputBorder="false"
						:placeholder="$t('placeholderHash')">
					</uni-easyinput>
				</uni-forms-item>
				<uni-forms-item :label="$t('note')+$t('optional')" name="remark">
					<uni-easyinput class="input-box" v-model="valiFormData.remark" type="text" :inputBorder="false"
						:placeholder="$t('placeholderNote')">
					</uni-easyinput>
				</uni-forms-item>
				<button class="button m-t-40" @click="submit('valiForm')">{{$t('rechargeMoney')}}</button>
			</uni-forms>
		</view>
		<uni-popup ref="popup">
			<view class="popup-select">
				<view class="uni-list">

					<radio-group @change="radioChange">
						<label class="flex_sp_be popuplabel" v-for="(item, index) in getChannelData" :key="item.id">
							<view class=" flex_start">
								<image class="image40" :src="'../../../static/trade/'+item.name+'.png'" mode="widthFix">
								</image>
								<view class="m-l-20">{{item.name}}</view>
								<!-- <view>{{item.payeeName}}</view> -->
							</view>
							<view>
								<radio color="#1abb97" :value="JSON.stringify(item) "
									:checked="item.name == selectitem.name" style="transform:scale(0.7)" />
							</view>
						</label>
					</radio-group>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import izUploaderImg from '@/components/iz-uploader-img/iz-uploader-img.vue'
	import {
		// mapState,
		mapGetters
	} from 'vuex'
	// https://ext.dcloud.net.cn/plugin?id=1287
	import UQRCode from '../../../uni_modules/Sansnn-uQRCode/js_sdk/uqrcode/uqrcode.js';
	export default {
		components: {
			izUploaderImg
		},
		data() {
			return {
				childItem: '',
				// 图片上传
				// imgs: [],
				detailsimg: "",
				isimg: false,
				configObj: {
					//aliyun OSS config
					uploadImageUrl: uni.getStorageSync("WEBINFO").resourceProxy +
						"/usdttrade_uploader/uploadPrepayProof", //阿里云上传域名
					AccessKeySecret: '***', //Secret，登录oss控制台查看
					OSSAccessKeyId: '***', //KeyId，登录oss控制台查看
					timeout: 87600,
					maxSize: 4 * 1024 * 1024 //上传文件的大小限制,128mb
				},
				isUploadUrl: true,
				//
				selectitem: {
					bankName: '',
					payeeName: ''
				},
				getChannelData: [],
				// 校验表单数据
				valiFormData: {
					payeeName: '',
					userId: '', //是	int	用户ID
					money: {
						amount: "", //
						currency: '', //
					}, //	是	dict	充值数量（amount=数量；currency=币种）
					amount: "", //
					currency: '', //
					fileList: [], //	是	list	充值证明文件地址数组


					address: "", //	是	string	充值地址
					channelId: "", //	是	int	通道ID
					hashValue: "", //	否	string	Hash
					remark: "", //否	string	用户备注
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
										callback(this.$t('errorMessageprove'))
									}
									return true
								}
							}
						]
					},
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
					address: {
						rules: [{
							required: true,
							errorMessage: this.$t("errorEmpty")
						}]
					},
				},
			}
		},
		computed: {
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

			selectitem: {
				handler(val) {
					if (val) {
						if (this.frst != true) {

							this.childItem = ''
							this.frst = false
						}
						this.valiFormData.currency = val.name
					}
					console.log(this.childItem, "this.childItem ");

				},
				deep: true,

			},
			childItem: {
				handler(val) {
					if (val) {
						console.log(val, 123456);
						this.valiFormData.payeeName = val.id
						this.valiFormData.channelId = val.id
						this.valiFormData.currency = val.bankName
						this.valiFormData.money.currency = val.bankName
						this.$nextTick(() => {

							this.makeCode(val.bankCardCode)
						})
						console.log(this.valiFormData, 123456);
					}

				},
				immediate: true,
				deep: true,

			},
			currency(val) {
				this.valiFormData.money.currency = val
			},
			amount(val) {
				this.valiFormData.money.amount = val
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
			this.getChannel()
		},
		methods: {
			// 
			checkbox(event) {
				if (event.detail.data) {
					this.childItem = event.detail.data
				}
			},
			qingkong() {
				this.valiFormData.fileList = []
			},
			kaishi(e, i, res) {

				if (e) {
					uni.showLoading({
						title: `Uploading...`,
						mask: true
					});
					this.isimg = true
				}
				if (!e) {
					uni.hideLoading()
					this.isimg = false
				}
				if (i) {
					let err = res
					this.valiFormData.fileList = []
					console.log("客户端报错", err)
					uni.showToast({
						title: err.data.description,
						duration: 3000,
						icon: "none"
					});
					this.isimg = false
				}
			},
			successImg(details) {

				let arrimg = []
				this.detailsimg = JSON.parse(JSON.stringify(details))
				this.detailsimg.forEach((img, index, arr) => {
					arrimg.push(img.url)

				})
				this.valiFormData.fileList = arrimg
			},
			delImagefun(imagelist) {
				let arrimg = []
				this.detailsimg = JSON.parse(JSON.stringify(imagelist))
				this.detailsimg.forEach((img, index, arr) => {
					arrimg.push(img.url)

				})
				this.valiFormData.fileList = arrimg
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
			radioChange(evt) {
				let item = JSON.parse(evt.detail.value)
				this.selectitem = item;
				this.$refs.popup.close()
			},
			getChannel() {
				let params = {
					type: 0, //是	int	银行卡类型（0：银行卡，1：数字货币地址）
				}
				this.$api.deposit.getChannel(this.deleteInvalidParam()).then(
					res => {
						console.log('res', res);
						this.getChannelData = []
						for (let key in res) {
							console.log(key, "key");
							this.getChannelData.push({
								name: key,
								child: res[key] || []
							})
						}
						this.selectitem = this.getChannelData[0];
						this.childItem = this.selectitem.child[0];
						console.log('this.getChannelData', this.getChannelData, this.selectitem, this.childItem);
					}).catch(err => {
					console.log('err', err);
				})
			},
			submit(ref) {
				this.$refs[ref].validate().then(() => {

					this.$api.deposit.recharge(this.deleteInvalidParam(this.valiFormData)).then(
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
	.copy {
		border: 1rpx solid #71d5a1;
		border-radius: 8rpx;
		display: inline-flex;
		width: auto;
		font-size: 26rpx;
		height: 70rpx;
		line-height: 70rpx;
		padding: 0 80rpx;
		color: #19be6b !important;
		border-color: #71d5a1 !important;
		background-color: #dbf1e1 !important;
	}
</style>
