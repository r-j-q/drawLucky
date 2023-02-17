<template>
	<view class="page">
		<headtop type="single"></headtop>
		<view class="main">

			<uni-nav-bar class="nav-bar" statusBar backgroundColor="#eef1f5" left-icon="left" :leftText="$t('goBack')"
				color="#1abb97" rightText="" @clickLeft="routeTo(1)">
			</uni-nav-bar>
			<view class="fund-box">
				<uni-card class="bgfff m-b-20 card1  " margin='0px' padding="40px" :is-shadow="false" :border="false">
					<h3 class="title">{{$t('certification')}}</h3>
					<h6 class="title">{{$t('certificationed')}}</h6>

					<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData" label-position="top">
						<uni-forms-item :label="$t('country')" name="realRegionCode">
							<uni-data-select class="select2" v-model="valiFormData.realRegionCode"
								:localdata="getRegionData" labelkey="regionName" valuekey="regionCode" :clear="false"
								@change="realRegionCodechange">
							</uni-data-select>
						</uni-forms-item>
						<uni-forms-item :label="$t('name')" name="realName">
							<uni-easyinput v-model="valiFormData.realName" :placeholder="$t('placeholdername')">
							</uni-easyinput>
						</uni-forms-item>

						<uni-forms-item :label="$t('documentType')" name="certificatesType">
							<uni-data-select class="select2" v-model="valiFormData.certificatesType"
								:localdata="certificatesType" :clear="false">
							</uni-data-select>
						</uni-forms-item>
						<uni-forms-item :label="$t('identificationNumber')" name="certificatesCode">
							<uni-easyinput v-model="valiFormData.certificatesCode" placeholder="">
							</uni-easyinput>
						</uni-forms-item>
						<button class="button" @click="submit('valiForm')">{{$t('next')}}</button>
					</uni-forms>

				</uni-card>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				getRegionData: [],
				certificatesType: [{
					value: '0',
					text: this.$t('IDcard')
				}, {
					value: '1',
					text: this.$t('passport')
				}],
				// 校验表单数据
				valiFormData: {
					id: this.$store.state.user.id, //是	int	用户id
					certificatesType: '', //是	int	证件类型（0：身份证，1：护照）
					realName: '', //	是	string	用户真实姓名
					realRegionCode: '', //	是	string	真实地区号
					regionId: '', //int	id
					regionName: '', //	string	地区/币种名称
					certificatesCode: '', //	是	string	证件号码
				},
				// 校验规则
				rules: {
					realRegionCode: {
						rules: [{
							required: true,
							errorMessage: this.$t("errorEmpty")
						}]
					},
					realName: {
						rules: [{
							required: true,
							errorMessage: this.$t("errorEmpty")
						}]
					},

					certificatesType: {
						rules: [{
							required: true,
							errorMessage: this.$t("errorEmpty")
						}]
					},
					certificatesCode: {
						rules: [{
							required: true,
							errorMessage: this.$t("errorEmpty")
						}, {
							pattern: /^[a-zA-Z0-9]{4,300}$/,
							errorMessage: this.$t('errorStandard') + this.$t('errorLength1') + "[a-zA-Z0-9]"
						}]
					}
				},
			}
		},



		onLoad() {
			this.getgetRegion()
		},
		methods: {
			getgetRegion() {
				this.$api.changeValuation.getRegion({
					type: 0, //	是	int	类型（0：地区，1：币种，2：真实货币）
					page: 1, //	是	int	页码
					pageSize: 2000, //	是	int	每页条数
				}).then((res) => {

					this.getRegionData = res.list
				})
			},
			realRegionCodechange(val, item) {
				if (val) {

					console.log(val, item, "val, item")
					this.valiFormData.regionId = item.id
					this.valiFormData.regionName = item.regionName
				}
			},
			submit(ref) {

				this.$refs[ref].validate().then(() => {
					this.routeTo('/pages/pc/src/authStep/authStep', '?valiFormData=' + encodeURIComponent(JSON
						.stringify(this
							.valiFormData)))

				}).catch(err => {
					console.log('catch', err);
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.main {
		width: 600px;
		margin: 0 auto;



	}
</style>
