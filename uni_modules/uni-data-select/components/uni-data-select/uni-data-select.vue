<template>
	<view class="uni-stat__select">
		<span v-if="label" class="uni-label-text hide-on-phone">{{label + '：'}}</span>
		<view class="uni-stat-box" :class="{'uni-stat__actived': current}">
			<view class="uni-select" :class="{'uni-select--disabled':disabled}">
				<view class="uni-select__input-box" @click="toggleSelector">
					<view v-if="current" class="uni-select__input-text">
						<image v-if="icon" class="image40"
							:src="'../../../../static/trade/'+current.split('-')[0]+'.png'" mode="widthFix"></image>
						<text class="m-l-10">{{current}}</text>

					</view>
					<view v-else class="uni-select__input-text uni-select__input-placeholder">{{typePlaceholder}}</view>
					<uni-icons v-if="current && clear" type="clear" color="#c0c4cc" size="24" @click="clearVal" />
					<uni-icons v-else :type="showSelector? 'top' : 'bottom'" size="14" color="#999" />
				</view>
				<view class="uni-select--mask" v-if="showSelector" @click="toggleSelector" />
				<view class="uni-select__selector" v-if="showSelector">
					<view class="uni-popper__arrow"></view>
					<scroll-view scroll-y="true" class="uni-select__selector-scroll">
						<view class="uni-select__selector-empty" v-if="mixinDatacomResData.length === 0">
							<text>{{emptyTips}}</text>
						</view>
						<template v-else v-for="(item,index) in mixinDatacomResData">
							<view class="uni-select__selector-item flex_start" :key="index" @click="change(item)"
								v-show="isdisableShow?true:!item.disable">

								<image v-if="icon" class="image40"
									:src="'../../../../static/trade/'+item[icon]+'.png'" mode="widthFix"></image>
								<text class="m-l-10"
									:class="{'uni-select__selector__disabled': item.disable}">{{formatItemName(item)}}</text>
							</view>

						</template>
					</scroll-view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * DataChecklist 数据选择器
	 * @description 通过数据渲染的下拉框组件
	 * @tutorial https://uniapp.dcloud.io/component/uniui/uni-data-select
	 * @property {String} value 默认值
	 * @property {String}  labelkey 默认值text
	 * @property {String} valuekey 默认值value
	 * @property {Array} localdata 本地数据 ，格式 [{text:'',value:''}]
	 * @property {Boolean} clear 是否可以清空已选项
	 * @property {Boolean} emptyText 没有数据时显示的文字 ，本地数据无效
	 * @property {String} label 左侧标题
	 * @property {String} placeholder 输入框的提示文字
	 * @property {Boolean} disabled 是否禁用
	 * @property {Boolean} isdisableShow 是否需要显示被禁用的item  默认显示trues
	 * @event {Function} change  选中发生变化触发
	 */

	export default {
		name: "uni-stat-select",
		mixins: [uniCloud.mixinDatacom || {}],
		data() {
			return {
				showSelector: false,
				current: '',
				mixinDatacomResData: [],
				apps: [],
				channels: []
			};
		},
		props: {

			localdata: {
				type: Array,
				default () {
					return []
				}
			},
			value: {
				type: [String, Number],
				default: ''
			},
			// 自定义改动
			labelkey: {
				type: String,
				default: 'text'
			},
			// 自定义改动
			valuekey: {
				type: String,
				default: 'value'
			},
			modelValue: {
				type: [String, Number],
				default: ''
			},
			label: {
				type: String,
				default: ''
			},
			placeholder: {
				type: String,
				default: '请选择'
			},
			emptyTips: {
				type: String,
				default: '无选项'
			},
			// 自定义
			icon: {
				type: String,
				default: ''
			},
			// 自定义
			isdisableShow: {
				type: Boolean,
				default: true
			},
			clear: {
				type: Boolean,
				default: true
			},
			defItem: {
				type: Number,
				default: 0
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		created() {
			this.last = `${this.collection}_last_selected_option_value`
			if (this.collection && !this.localdata.length) {
				this.query();
			}
		},
		computed: {
			typePlaceholder() {
				const text = {
					'opendb-stat-app-versions': '版本',
					'opendb-app-channels': '渠道',
					'opendb-app-list': '应用'
				}
				const common = this.placeholder
				const placeholder = text[this.collection]
				return placeholder ?
					common + placeholder :
					common
			}
		},
		watch: {
			localdata: {
				immediate: true,
				handler(val, old) {
					if (Array.isArray(val) && old !== val) {
						this.mixinDatacomResData = val
					}
				}
			},
			// #ifndef VUE3
			value() {
				this.initDefVal()
			},
			// #endif
			// #ifdef VUE3
			modelValue() {
				this.initDefVal()
			},
			// #endif
			mixinDatacomResData: {
				immediate: true,
				handler(val) {
					if (val.length) {
						this.initDefVal()
					}
				}
			}
		},
		methods: {
			// 执行数据库查询
			query() {
				// this.mixinDatacomEasyGet();
			},
			// 监听查询条件变更事件
			onMixinDatacomPropsChange() {
				this.query();
			},
			initDefVal() {
				let defValue = ''
				if ((this.value || this.value === 0) && !this.isDisabled(this.value)) {
					defValue = this.value
				} else if ((this.modelValue || this.modelValue === 0) && !this.isDisabled(this.modelValue)) {
					defValue = this.modelValue
				} else {
					let strogeValue
					if (this.collection) {
						strogeValue = uni.getStorageSync(this.last)
					}
					if (strogeValue || strogeValue === 0) {
						defValue = strogeValue
					} else {
						let defItem = ''
						if (this.defItem > 0 && this.defItem <= this.mixinDatacomResData.length) {
							defItem = this.mixinDatacomResData[this.defItem - 1][this.valuekey]
						}
						defValue = defItem
					}
					this.emit(defValue)
				}
				const def = this.mixinDatacomResData.find(item => item[this.valuekey] === defValue)
				this.current = def ? this.formatItemName(def) : ''
			},

			/**
			 * @param {[String, Number]} value
			 * 判断用户给的 value 是否同时为禁用状态
			 */
			isDisabled(value) {
				let isDisabled = false;

				this.mixinDatacomResData.forEach(item => {
					if (item[this.valuekey] === value) {
						isDisabled = item.disable
					}
				})

				return isDisabled;
			},

			clearVal() {
				this.emit('')
				if (this.collection) {
					uni.removeStorageSync(this.last)
				}
			},
			change(item) {
				if (!item.disable) {
					this.showSelector = false
					this.current = this.formatItemName(item)
					this.emit(item[this.valuekey], item)
				}
			},
			emit(val, item) {
				this.$emit('change', val, item)
				this.$emit('input', val, item)
				this.$emit('update:modelValue', val, item)
				if (this.collection) {
					uni.setStorageSync(this.last, val)
				}
			},

			toggleSelector() {
				if (this.disabled) {
					return
				}

				this.showSelector = !this.showSelector
			},
			formatItemName(item) {
				let labelstr = this.setlabel(item)

				item.channel_code = item.channel_code ? `(${item.channel_code})` : ''
				return this.collection.indexOf('app-list') > 0 ?
					`${labelstr}(${item[this.valuekey]})` :
					(
						labelstr ?
						labelstr :
						`未命名${channel_code}`
					)
				// 	item.channel_code = item.channel_code ? `(${item.channel_code})` : ''
				// return this.collection.indexOf('app-list') > 0 ?
				// 	`${item[this.labelkey]}(${item[this.valuekey]})` :
				// 	(
				// 		item[this.labelkey] ?
				// 		item[this.labelkey] :
				// 		`未命名${channel_code}`
				// 	)
			},
			// 自定义
			setlabel(item) {
				let labelkey = this.labelkey.split('-')
				let labelstr = ''
				labelstr = labelkey.map((label, index) => {
					return item[label]
				}).join('-')
				return labelstr
			}
		}
	}
</script>

<style lang="scss">
	$uni-base-color: #6a6a6a !default;
	$uni-main-color: #333 !default;
	$uni-secondary-color: #909399 !default;
	$uni-border-3: #e5e5e5;


	/* #ifndef APP-NVUE */
	@media screen and (max-width: 500px) {
		.hide-on-phone {
			display: none;
		}
	}

	/* #endif */
	.uni-stat__select {
		display: flex;
		align-items: center;
		// padding: 15px;
		cursor: pointer;
		width: 100%;
		flex: 1;
		box-sizing: border-box;
	}

	.uni-stat-box {
		width: 100%;
		flex: 1;
	}

	.uni-stat__actived {
		width: 100%;
		flex: 1;
		// outline: 1px solid #2979ff;
	}

	.uni-label-text {
		font-size: 14px;
		font-weight: bold;
		color: $uni-base-color;
		margin: auto 0;
		margin-right: 5px;
	}

	.uni-select {
		font-size: 14px;
		border: 1px solid $uni-border-3;
		box-sizing: border-box;
		border-radius: 4px;
		padding: 0 5px;
		padding-left: 10px;
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		user-select: none;
		/* #endif */
		flex-direction: row;
		align-items: center;
		border-bottom: solid 1px $uni-border-3;
		width: 100%;
		flex: 1;
		height: 35px;

		&--disabled {
			background-color: #f5f7fa;
			cursor: not-allowed;
		}
	}

	.uni-select__label {
		font-size: 16px;
		// line-height: 22px;
		height: 35px;
		padding-right: 10px;
		color: $uni-secondary-color;
	}

	.uni-select__input-box {
		height: 35px;
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		flex-direction: row;
		align-items: center;
	}

	.uni-select__input {
		flex: 1;
		font-size: 14px;
		height: 22px;
		line-height: 22px;
	}

	.uni-select__input-plac {
		font-size: 14px;
		color: $uni-secondary-color;
	}

	.uni-select__selector {
		/* #ifndef APP-NVUE */
		box-sizing: border-box;
		/* #endif */
		position: absolute;
		top: calc(100% + 12px);
		left: 0;
		width: 100%;
		background-color: #FFFFFF;
		border: 1px solid #EBEEF5;
		border-radius: 6px;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		z-index: 3;
		padding: 4px 0;
	}

	.uni-select__selector-scroll {
		/* #ifndef APP-NVUE */
		max-height: 200px;
		box-sizing: border-box;
		/* #endif */
	}

	.uni-select__selector-empty,
	.uni-select__selector-item {
		/* #ifndef APP-NVUE */
		display: flex;
		cursor: pointer;
		/* #endif */
		line-height: 35px;
		font-size: 14px;
		text-align: center;
		/* border-bottom: solid 1px $uni-border-3; */
		padding: 0px 10px;
	}

	.uni-select__selector-item:hover {
		background-color: #f9f9f9;
	}

	.uni-select__selector-empty:last-child,
	.uni-select__selector-item:last-child {
		/* #ifndef APP-NVUE */
		border-bottom: none;
		/* #endif */
	}

	.uni-select__selector__disabled {
		opacity: 0.4;
		cursor: default;
	}

	/* picker 弹出层通用的指示小三角 */
	.uni-popper__arrow,
	.uni-popper__arrow::after {
		position: absolute;
		display: block;
		width: 0;
		height: 0;
		border-color: transparent;
		border-style: solid;
		border-width: 6px;
	}

	.uni-popper__arrow {
		filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03));
		top: -6px;
		left: 10%;
		margin-right: 3px;
		border-top-width: 0;
		border-bottom-color: #EBEEF5;
	}

	.uni-popper__arrow::after {
		content: " ";
		top: 1px;
		margin-left: -6px;
		border-top-width: 0;
		border-bottom-color: #fff;
	}

	.uni-select__input-text {
		// width: 280px;
		width: 100%;
		color: $uni-main-color;
		white-space: nowrap;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
		overflow: hidden;
	}

	.uni-select__input-placeholder {
		color: $uni-base-color;
		font-size: 12px;
	}

	.uni-select--mask {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
	}
</style>
