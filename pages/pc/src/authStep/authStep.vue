<template>
	<view class="page">
		<headtop type="single"></headtop>
		<view class="main">

			<uni-nav-bar class="nav-bar" statusBar backgroundColor="#eef1f5" left-icon="left" :leftText="$t('goBack')"
				color="#1abb97" rightText="" @clickLeft="routeTo(1)">
			</uni-nav-bar>
			<view class="fund-box">
				<uni-card class="bgfff m-b-20 card1  " margin='0px' padding="40px" :is-shadow="false" :border="false">

					<view class="font-32 ">
						{{$t('certification')}}
					</view>
					<view class="content boximage ">
						<view class="p-t-40">
							<view class=" m-b-40 tac">
								{{$t('photo1')}}
							</view>
							<view class="flex_sp_ar m-b-40 p-t-40">
								<image class="file-picker" src="@/static/img/icon_one.png" mode="widthFix"></image>
								<izUploaderImg style="width: 100%;" :number="1" :configObj="configObj"
									:isUploadUrl="isUploadUrl0" @delImagefun="delImagefun0" @successImg="successImg0"
									@kaishi="kaishi0" @qingkong="qingkong0">
								</izUploaderImg>
							</view>
						</view>
						<view class="p-t-40">
							<view class=" m-b-40 tac">
								{{$t('photo2')}}
							</view>
							<view class="flex_sp_ar m-b-40 p-t-40">
								<image class="file-picker" src="@/static/img/icon_two.png" mode="widthFix"></image>


								<izUploaderImg style="width: 100%;" :number="1" :configObj="configObj"
									:isUploadUrl="isUploadUrl1" @delImagefun="delImagefun1" @successImg="successImg1"
									@kaishi="kaishi1" @qingkong="qingkong1">
								</izUploaderImg>
							</view>
						</view>
						<view class="p-t-40 p-b-40">
							<view class=" m-b-40 tac">
								{{$t('photo3')}}
							</view>
							<view class="flex_sp_ar m-b-40 p-t-40">
								<image class="file-picker" src="@/static/img/icon_three.png" mode="widthFix"></image>


								<izUploaderImg style="width: 100%;" :number="1" :configObj="configObj"
									:isUploadUrl="isUploadUrl2" @delImagefun="delImagefun2" @successImg="successImg2"
									@kaishi="kaishi2" @qingkong="qingkong2">
								</izUploaderImg>
							</view>
						</view>
						<button class="button " @click="submit('valiForm')">{{$t('confirm')}}</button>
					</view>
					<!-- <view class="p-t-40">
						<view class=" m-b-40 tac">
							请上传证件正面照片
						</view>
						<view class="flex_sp_ar m-b-40 p-t-40">
							<image class="file-picker" src="@/static/img/icon_one.png" mode="widthFix"></image>
							<view class="file-picker">

								<uni-file-picker limit="1" v-model="imageValue" fileMediatype="image" mode="grid"
									@select="select('certificatesImage1')" @progress="progress" @success="success"
									@fail="fail">
								</uni-file-picker>
							</view>
						</view>
					</view>
					<view class="p-t-40">
						<view class=" m-b-40 tac">
							请上传证件背面照片
						</view>
						<view class="flex_sp_ar m-b-40 p-t-40">
							<image class="file-picker" src="@/static/img/icon_two.png" mode="widthFix"></image>
							<view class="file-picker">

								<uni-file-picker limit="1" v-model="imageValue" fileMediatype="image" mode="grid"
									@select="select('certificatesImage2')" @progress="progress" @success="success"
									@fail="fail">
								</uni-file-picker>
							</view>
						</view>
					</view>
					<view class="p-t-40 p-b-40">
						<view class=" m-b-40 tac">
							请上传手持证件照片
						</view>
						<view class="flex_sp_ar m-b-40 p-t-40">
							<image class="file-picker" src="@/static/img/icon_three.png" mode="widthFix">
							</image>
							<view class="file-picker">
								<view class="file-picker">

									<uni-file-picker limit="1" v-model="imageValue" fileMediatype="image" mode="grid"
										@select="select('certificatesImage3')" @progress="progress" @success="success"
										@fail="fail">
									</uni-file-picker>
								</view>
							</view>
						</view>
					</view>
					<button class="button " @click="submit('valiForm')">提交</button> -->
				</uni-card>
			</view>
		</view>
	</view>
</template>

<script>
	import izUploaderImg from '@/components/iz-uploader-img/iz-uploader-img.vue'
	export default {
		components: {
			izUploaderImg
		},
		data() {
			return {

				configObj: {
					//aliyun OSS config
					uploadImageUrl: uni.getStorageSync("WEBINFO").resourceProxy +
						"/usdttrade_uploader/uploadPrepayProof", //阿里云上传域名
					AccessKeySecret: '***', //Secret，登录oss控制台查看
					OSSAccessKeyId: '***', //KeyId，登录oss控制台查看
					timeout: 87600,
					maxSize: 4 * 1024 * 1024 //上传文件的大小限制,128mb
				},
				isUploadUrl0: true,
				isUploadUrl1: true,
				isUploadUrl2: true,
				fileList0: [],
				fileList1: [],
				fileList2: [],
				isimg0: false,
				isimg1: false,
				isimg2: false,
				detailsimg0: "",
				detailsimg1: "",
				detailsimg2: "",
				// 校验表单数据
				valiFormData: {
					id: this.$store.state.user.id, //是	int	用户id
					certificatesType: 0, //是	int	证件类型（0：身份证，1：护照）
					realName: '', //	是	string	用户真实姓名
					realRegionCode: '', //	是	string	真实地区号
					regionId: '', //int	id
					regionName: '', //	string	地区/币种名称
					certificatesCode: '', //	是	string	证件号码
					certificatesImage1: '', //	是	string	认证正面照片地址
					certificatesImage2: '', //	是	string	认证反面照片地址
					certificatesImage3: '', //	是	string	认证手持证件照片地址
				},
			}
		},

		watch: {
			fileList0: {
				handler(val) {
					this.valiFormData.certificatesImage1 = val[0] || ''
				},
				deep: true
			},
			fileList1: {
				handler(val) {
					this.valiFormData.certificatesImage2 = val[0] || ''
				},
				deep: true
			},
			fileList2: {
				handler(val) {
					this.valiFormData.certificatesImage3 = val[0] || ''
				},
				deep: true
			}
		},

		onLoad(options) {
			if (options) {
				Object.assign(this.valiFormData, JSON.parse(decodeURIComponent(options.valiFormData)))
			}
		},
		methods: {
			qingkong0() {
				this.fileList0 = []
			},
			qingkong1() {
				this.fileList1 = []
			},
			qingkong2() {
				this.fileList2 = []
			},
			kaishi0(e, i, res) {

				if (e) {
					uni.showLoading({
						title: this.$t('Uploading'),
						mask: true
					});
					this.isimg0 = true
				}
				if (!e) {
					uni.hideLoading()
					this.isimg0 = false
				}
				if (i) {
					let err = res
					this.fileList0 = []
					console.log("客户端报错", err)
					uni.showToast({
						title: err.data.description,
						duration: 3000,
						icon: "none"
					});
					this.isimg0 = false
				}
			},
			kaishi1(e, i, res) {

				if (e) {
					uni.showLoading({
						title: this.$t('Uploading'),
						mask: true
					});
					this.isimg1 = true
				}
				if (!e) {
					uni.hideLoading()
					this.isimg1 = false
				}
				if (i) {
					let err = res
					this.fileList1 = []
					console.log("客户端报错", err)
					uni.showToast({
						title: err.data.description,
						duration: 3000,
						icon: "none"
					});
					this.isimg1 = false
				}
			},
			kaishi2(e, i, res) {

				if (e) {
					uni.showLoading({
						title: this.$t('Uploading'),
						mask: true
					});
					this.isimg2 = true
				}
				if (!e) {
					uni.hideLoading()
					this.isimg2 = false
				}
				if (i) {
					let err = res
					this.fileList2 = []
					console.log("客户端报错", err)
					uni.showToast({
						title: err.data.description,
						duration: 3000,
						icon: "none"
					});
					this.isimg2 = false
				}
			},
			successImg0(details) {

				let arrimg = []
				this.detailsimg0 = JSON.parse(JSON.stringify(details))
				this.detailsimg0.forEach((img, index, arr) => {
					arrimg.push(img.url)

				})
				this.fileList0 = arrimg
			},
			successImg1(details) {

				let arrimg = []
				this.detailsimg1 = JSON.parse(JSON.stringify(details))
				this.detailsimg1.forEach((img, index, arr) => {
					arrimg.push(img.url)

				})
				this.fileList1 = arrimg
			},
			successImg2(details) {

				let arrimg = []
				this.detailsimg2 = JSON.parse(JSON.stringify(details))
				this.detailsimg2.forEach((img, index, arr) => {
					arrimg.push(img.url)

				})
				this.fileList2 = arrimg
			},
			delImagefun0(imagelist) {
				let arrimg = []
				this.detailsimg0 = JSON.parse(JSON.stringify(imagelist))
				this.detailsimg0.forEach((img, index, arr) => {
					arrimg.push(img.url)

				})
				this.fileList0 = arrimg
			},
			delImagefun1(imagelist) {
				let arrimg = []
				this.detailsimg1 = JSON.parse(JSON.stringify(imagelist))
				this.detailsimg1.forEach((img, index, arr) => {
					arrimg.push(img.url)

				})
				this.fileList1 = arrimg
			},
			delImagefun2(imagelist) {
				let arrimg = []
				this.detailsimg2 = JSON.parse(JSON.stringify(imagelist))
				this.detailsimg2.forEach((img, index, arr) => {
					arrimg.push(img.url)

				})
				this.fileList2 = arrimg
			},
			submit(ref) {
				if (!this.valiFormData.certificatesImage1) {
					uni.showToast({
						title: this.$t('photo1'),
						icon: 'none'
					})
				} else if (!this.valiFormData.certificatesImage2) {
					uni.showToast({
						title: this.$t('photo2'),
						icon: 'none'
					})
				} else if (!this.valiFormData.certificatesImage3) {
					uni.showToast({
						title: this.$t('photo3'),
						icon: 'none'
					})
				} else {
					console.log(this.valiFormData, "this.valiFormData");
					this.$api.authStep.realNameAuthentication(this.valiFormData).then(res => {
						this.$store.dispatch('user/GET_USERINFO', 2)
					})


				}

			},


		}
	}
</script>

<style lang="scss" scoped>
	.main {
		width: 600px;
		margin: 0 auto;

		.boximage {
			padding-top: 30rpx;

			/deep/ .area-con {
				width: 222rpx !important;
				height: 136rpx !important;
				display: inline-block !important;
				color: #12b887 !important;
				background-color: #f6f6f6 !important;
				border-radius: 10rpx !important;
			}

			/deep/ .con {
				width: 222rpx !important;
				height: 136rpx !important;
			}

			/deep/ .area {
				width: 222rpx !important;
				height: 136rpx !important;
			}

			/deep/ .view {
				width: 222rpx !important;
				height: 136rpx !important;
				display: inline-block !important;
				color: #12b887 !important;
				background-color: #f6f6f6 !important;
				border-radius: 10rpx !important;
			}

			/deep/ .add-wrap {
				width: 222rpx !important;
				height: 136rpx !important;
				display: inline-block !important;
				color: #12b887 !important;
				background-color: #f6f6f6 !important;
				border-radius: 10rpx !important;
			}

			/deep/ .add {
				width: 222rpx !important;
				height: 136rpx !important;
				display: inline-block !important;
				color: #12b887 !important;
				background-color: #f6f6f6 !important;
				border-radius: 10rpx !important;
			}

			.file-picker {
				width: 222rpx;
				height: 136rpx;
				display: inline-block;
				color: #12b887;
				background-color: #f6f6f6;
				border-radius: 10rpx;


			}
		}

	}
</style>
