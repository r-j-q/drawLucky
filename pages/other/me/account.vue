<template>
	<view class="app">
		<uni-nav-bar class="nav-bar" statusBar left-icon="left" :title="$t('personal')" rightText="" @clickLeft="routeTo(1)">
		</uni-nav-bar>
		<view class="content main p-t-20">
			<uni-list class=" m-b-10" :border="false">
				<uni-list-item title="">
					<template v-slot:body>
						<text class="toux">{{$t('headPortrait')}}</text>
					</template>
					<template v-slot:footer>
						<view class="image">
							<image class="image"
								:src="getUser.headPortrait||'../../../static/img/icon_empty_user_logo.png'"
								mode="widthFix">
							</image>
						</view>
					</template>
				</uni-list-item>
				<uni-list-item :title="$t('nickname')" :rightText="getUser.username">

				</uni-list-item>
				<uni-list-item :title="$t('bindMailbox')" clickable="" :showArrow="WEBINFO.emailValidationSwitch"
					@click="WEBINFO.emailValidationSwitch?routeTo('/pages/other/me/changeEmail'):''">
					<template v-slot:footer>
						<view class="email font-24"
							:style="WEBINFO.emailValidationSwitch?'color: #1abb97;':'color: #999;'">
							{{getUser.email}}
						</view>
					</template>
				</uni-list-item>
			</uni-list>

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
				WEBINFO: uni.getStorageSync('WEBINFO'),
			}
		},

		computed: {


			//借助mapGetters生成计算属性：
			...mapGetters('user', ['getUser']),
		},

		onLoad() {},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.main {
		padding-top: 30rpx;

		.image {
			width: 60rpx;
			height: 60rpx;
			overflow: hidden;
			border-radius: 50%;
		}

		.toux {
			display: flex;
			flex: 1;
			line-height: 60rpx;
		}

	}
</style>
