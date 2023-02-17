<template>
	<view class="app">
		<uni-nav-bar class="nav-bar" statusBar left-icon="left" :title="$t('identityVerification')" rightText=""
			@clickLeft="routeTo(1)">
		</uni-nav-bar>
		<view class="content main p-t-20">
			<!-- <uni-list class="listselect m-b-10" :border="false">
				<uni-list-item :border="false" :clickable="getUser.certificationStatus==0?true:false" showArrow
					:title="$t('other.verification.realName')"
					:rightText="certificationStatus[getUser.certificationStatus]"
					@click="routeTo('/pages/other/home/verificationBasic')" />
			</uni-list> -->
			<view class="listselect selectforms flex_sp_be m-b-10" v-if="getUser.certificationStatus==0"
				@click="routeTo('/pages/other/home/verificationBasic')">
				<view class="c333 font-30">
					{{$t('certification')}}
				</view>
				<view class="font-28 c999 flex_end">

					<view class="">
						<text class="placeholderItem"
							style="color: #1abb97;">{{certificationStatus[getUser.certificationStatus]}}</text>
					</view>

					<uni-icons class="m-l-10" color="c999" type="forward" size="15"></uni-icons>
				</view>
			</view>
			<view class="listselect selectforms flex_sp_be m-b-10" v-if="getUser.certificationStatus==1">
				<view class="c333 font-30">
					{{$t('certification')}}
				</view>
				<view class="font-28 c999 flex_end">

					<view class="">
						<text class="placeholderItem">{{certificationStatus[getUser.certificationStatus]}}</text>
					</view>

					<uni-icons class="m-l-10" color="c999" type="forward" size="15"></uni-icons>
				</view>
			</view>
			<view class="listselect selectforms flex_sp_be m-b-10" v-if="getUser.certificationStatus==2">
				<view class="c333 font-30">
					{{$t('certification')}}
				</view>
				<view class="font-28 c999 flex_end">

					<view class="">
						<text class="placeholderItem">{{certificationStatus[getUser.certificationStatus]}}</text>
					</view>

					<uni-icons class="m-l-10" color="c999" type="forward" size="15"></uni-icons>
				</view>
			</view>
			<view class="listselect selectforms flex_sp_be m-b-10" v-if="getUser.certificationStatus==3">
				<view class="c333 font-30">
					{{$t('certification')}}
				</view>
				<view class="font-28 c999 flex_end">

					<view class="">
						<text class="placeholderItem">{{certificationStatus[getUser.certificationStatus]}}</text>
					</view>

					<uni-icons class="m-l-10" color="c999" type="forward" size="15"></uni-icons>
				</view>
			</view>
			<view class="listselect selectforms flex_sp_be m-b-10" v-if="getUser.certificationStatus==4"
				@click="routeTo('/pages/other/home/verificationBasic')">
				<view class="c333 font-30">
					{{$t('certification')}}
				</view>
				<view class="font-28 c999 flex_end">

					<view class="">
						<text class="placeholderItem"
							style="color: red;">{{certificationStatus[getUser.certificationStatus]}}</text>
					</view>

					<uni-icons class="m-l-10" color="c999" type="forward" size="15"></uni-icons>
				</view>
			</view>
			<uni-card class="bgf6f6f6 " margin='0px' padding="5px" :is-shadow="false" :border="false"
				v-if="getWithdrawalLimiteData">
				<view class="m-b-20 flex_start">

					<uni-icons type="auth-filled" color="#1abb97" size="25"></uni-icons>
					<text class="font-30 c333">{{$t('quota')}}</text>
				</view>
				<view class="flex_sp_be font-24 c999 m-b-20">

					<text>{{$t('count')}}</text>
					<text>{{getWithdrawalLimiteData[value].DailyLimit}} {{$t('everyday')}}</text>
				</view>
				<view class="flex_sp_be font-24 c999">

					<text>{{$t('cumulative')}}</text>
					<text>{{getWithdrawalLimiteData[value].DailyLimitPuantity }} USDT {{$t('everyday')}}</text>
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
				value: 0,
				getWithdrawalLimiteData: '',
				certificationStatus: [this.$t('unauthorized'), this.$t('audit'), this.$t('attestation'), this.$t('hand'),
					this.$t('auditFailed')
				]
			}
		},

		computed: {


			//借助mapGetters生成计算属性：
			...mapGetters('user', ['getUser']),
		},

		async onShow() {
			await this.$store.dispatch('user/GET_USERINFO', true)
			await this.getWithdrawalLimite()
		},
		methods: {
			getWithdrawalLimite() {
				return this.$api.verification.getWithdrawalLimite().then(res => {
					console.log(res, "getWithdrawalLimite");
					this.getWithdrawalLimiteData = res
					let str = ""
					switch (this.getUser.certificationStatus) {
						case 0:
						case 1:
						case 4:
							str = 0
							break;
						case 2:
							str = 2
							break;
						case 3:
							str = 3
							break;
						default:
							break;
					}
					this.getWithdrawalLimiteData.map((item, index) => {
						if (item.level == str) {
							this.value = index
						}
						// getUser.certificationStatus
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main {
		padding-top: 30rpx;

		.selectforms {
			min-height: 77rpx;
			padding: 0 20rpx 0 30rpx;
		}

		.bgf6f6f6 {
			background-color: #f6f6f6;
		}

	}
</style>
