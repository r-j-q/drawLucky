<template>
	<view class="headtop ">

		<view class="nav nav1" v-show="type=='double'">
			<uni-row class="flex_center top">
				<uni-col :xs="20" :sm="20" :md="18" :lg="18" :xl="18">
					<view class="flex_sp_be">
						<view class="flex_start"
							@click="openWeb('https://v.chatone.link/index?key=d9a3dae3f1fb4d24abaf0eb6a9e24386&userInfo=name%3D55667943%26email%3Dlingyi008%26ip%3D{ip}%26nickname%3D*@gmail.com&vid=55667943')">
							<uni-icons type="chatboxes" size="24" color="#0088ff"></uni-icons>
							<view class="font-24">

								{{$t('onlineService')}}
							</view>
						</view>
						<view class="po flex_sp_be title-box font-24">
							<uni-icons v-if="$store.state.user.token" type="person" size="24" color="#fff"
								@click="routeTo('/pages/pc/src/me/me')">
							</uni-icons>
							<view class="" v-if="$store.state.user.token"
								@click="routeTo('/pages/pc/src/assets/assets')">
								{{$t('Assets')}}
							</view>
							<view class="homloginAndRegister" v-if="!$store.state.user.token"
								@click="routeTo('/pages/pc/src/login/login', 'reLaunch')">
								{{$t('homloginAndRegister')}}
							</view>
							<view class="" @click="setlanguage(true)">
								{{$store.state.user.languageInfo.name}}
							</view>


							<ul v-show="showLanguage" class="el-dropdown-menu el-popper"
								:class="type=='single'?'':'double'" id="dropdown-menu-3447"
								style="position: absolute; top: 33px; left: 1090px; transform-origin: center top; z-index: 2001;"
								x-placement="bottom-end">
								<li tabindex="-1" class="el-dropdown-menu__item flex align-center"
									@click="setlanguage(false,item)" v-for="(item,index) in langList" :key="index">

									<img mode="widthFix" :src="item.image"
										style="width: 24px; height: 24px; margin-right: 6px;">
									{{item.name}}
								</li>

								<div x-arrow="" class="popper__arrow" style="left: 98px;"></div>
							</ul>
						</view>
					</view>
				</uni-col>
			</uni-row>
			<uni-row class="flex_center last">
				<uni-col :xs="20" :sm="20" :md="18" :lg="18" :xl="18">
					<view class="flex_sp_be">

						<image class="logoimg" src="@/static/r9eeka5.png" mode="widthFix"
							@click="routeTo('/pages/pc/src/home/home')"></image>

						<view class="tabs">
							<uni-segmented-control :current="current"
								:values="[$t('Home'), $t('Trade'), $t('Future'), $t('legal'), $t('transactions')]"
								style-type="text" active-color="#1abb97" @clickItem="onClickItem" />
						</view>
					</view>
				</uni-col>
			</uni-row>
		</view>
		<view class="nav nav2 flex_sp_be" v-show="type=='single'">
			<view class="flex_start ">
				<image class="logoimg" src="@/static/r9eeka5.png" mode="widthFix"></image>

				<view class="tabs">
					<uni-segmented-control :current="current"
						:values="[$t('Home'), $t('Trade'), $t('Future'), $t('legal'), $t('transactions')]"
						style-type="text" active-color="#1abb97" @clickItem="onClickItem" />
				</view>
			</view>
			<view class="po flex_sp_be title-box font-24">

				<uni-icons class="navtext" v-if="$store.state.user.token" type="person" size="24" color="#fff"
					@click="routeTo('/pages/pc/src/me/me')">
				</uni-icons>
				<view class="navtext" v-if="$store.state.user.token" @click="routeTo('/pages/pc/src/assets/assets')">
					{{$t('Assets')}}
				</view>
				<view class="homloginAndRegister navtext" v-if="!$store.state.user.token"
					@click="routeTo('/pages/pc/src/login/login', 'reLaunch')">
					{{$t('homloginAndRegister')}}
				</view>
				<view class="m-l-20 navtext" @click="setlanguage(true)">
					<image class="image25" mode="widthFix" :src="$store.state.user.languageInfo.image" alt=""
						style="width: 24px; height: 24px; margin-right: 6px;" />
					<text>{{$store.state.user.languageInfo.name}}</text>

				</view>
				<ul v-show="showLanguage" class="el-dropdown-menu el-popper" :class="type=='single'?'':'double'"
					id="dropdown-menu-3447"
					style="position: absolute; top: 33px; left: 1090px; transform-origin: center top; z-index: 2001;"
					x-placement="bottom-end">
					<li tabindex="-1" class="el-dropdown-menu__item flex align-center" @click="setlanguage(false,item)"
						v-for="(item,index) in langList" :key="index">

						<image mode="widthFix" :src="item.image" alt=""
							style="width: 24px; height: 24px; margin-right: 6px;" />
						{{item.name}}
					</li>

					<div x-arrow="" class="popper__arrow" style="left: 98px;"></div>
				</ul>
			</view>
		</view>

	</view>
</template>

<script>
	/**
	 * headtop 头部导航
	 
	 * @property {String} type = [single|double] 颜色类型
	 * 	@value single 单行头部
	 * 	@value double 多行头部
	
	 
	 */

	export default {
		props: {
			type: {
				type: String,
				default: 'double'
			},
			indexpage: {
				type: Number,
				default: -1
			},
		},
		data() {
			return {
				showLanguage: false,
				current: null,
				pagetabbar: ['/pages/pc/src/home/home', '/pages/pc/src/spot/spot', '/pages/pc/src/futures/futures',
					'/pages/pc/src/c2cSale/c2cSale', '/pages/pc/src/financial/financial'
				],
			}
		},


		created() {
			this.current = this.indexpage
			console.log(this.current, "this.current")
		},
		methods: {
			setlanguage(bool, item) {
				console.log(bool, item, "bool, item")
				this.showLanguage = !this.showLanguage
				if (item) {
					this.$store.dispatch('user/SET_LANGUAGE', item.value)

				}

			},
			onClickItem(item) {
				this.routeTo(this.pagetabbar[item.currentIndex])
			}
		}
	}
</script>

<style lang="scss" scoped>
	.logoimg {
		width: 110rpx;
	}

	.headtop {

		.top {
			padding: 15px 0;
			background: #000050;
			color: #fff;

			.title-box {
				width: 300rpx;
			}
		}

		.nav {}

		.nav1 {
			.last {
				padding: 50rpx 0;
			}

			.tabs {
				min-width: 350px;
			}

			/deep/ .segmented-control__text {
				color: #000050 !important;
			}

			/deep/ .segmented-control__item {
				align-items: flex-end;
			}

			/deep/ .segmented-control__text.segmented-control__item--text {
				color: #0088ff !important;
			}
		}

		.nav2 {
			padding: 10px 50px;

			background: #000050;
			color: #fff;

			.tabs {
				min-width: 350px;
			}

			/deep/ .segmented-control__text {
				color: #fff !important;
			}

			/deep/ .segmented-control__text.segmented-control__item--text {
				color: #1abb97 !important;
			}
		}
	}

	/******/
	.el-popper[x-placement^=bottom] {
		margin-top: 12px;
	}

	.el-dropdown-menu {
		position: absolute;
		top: 0;
		left: 0px;
		padding: 10px 0;
		margin: 5px 0;
		background-color: #fff;
		border: 1px solid #ebeef5;
		border-radius: 4px;
		// -webkit-box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
		// box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
	}

	.el-dropdown-menu,
	.el-menu--collapse .el-submenu .el-menu {
		z-index: 10;
		// -webkit-box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
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

	.el-dropdown-menu__item {
		list-style: none;
		line-height: 36px;
		padding: 0 20px;
		margin: 0;
		font-size: 14px;
		color: #606266;
		cursor: pointer;
		outline: 0;
	}

	.el-popper[x-placement^=bottom] .popper__arrow {
		top: -6px;
		left: 50%;
		margin-right: 3px;
		border-top-width: 0;
		border-bottom-color: #ebeef5;
	}

	.el-popper .popper__arrow {
		border-width: 6px;
		-webkit-filter: drop-shadow(0 2px 12px rgba(0, 0, 0, .03));
		filter: drop-shadow(0 2px 12px rgba(0, 0, 0, .03));
	}

	.el-popper .popper__arrow,
	.el-popper .popper__arrow:after {
		position: absolute;
		display: block;
		width: 0;
		height: 0;
		border-color: transparent;
		border-style: solid;
	}

	.el-dropdown-menu__item:focus,
	.el-dropdown-menu__item:not(.is-disabled):hover,
	.el-tabs__item.is-active {
		color: #1abb97;
	}

	.el-dropdown-menu__item:focus,
	.el-dropdown-menu__item:not(.is-disabled):hover {
		background-color: #ecf5ff;
		color: #66b1ff;
	}

	.po {
		position: relative;

		.el-popper {
			position: absolute !important;
			top: 20px !important;
			left: -20px !important;

			z-index: 999 !important;
		}

		.double {
			left: 15px !important;
		}

	}

	.homloginAndRegister {
		border-radius: 6px;
		background-color: rgb(245, 217, 147);
		color: #000;
		line-height: 30px;
		padding: 0 10px;
	}

	.navtext {
		padding: 0 5px;
		margin: 0 5px;
	}

	/deep/ .segmented-control__item {
		flex: 0 1 auto !important;
		padding: 0 10px !important;
	}
</style>
