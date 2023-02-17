<template>
	<view>
		<!-- <view class="find-popup" @click="shareModal"> 
				<view class="find-content">
					<view class="share-title"><text class="share-title-text">分享至</text></view>
					<view class="share-list margin-top">
						<view class="share-icon" @click.stop="share('weixin')">
							<text class="cstIconfontN weixin">&#xe61a;</text>
							<text class="text-center margin-top-xs text-size">微信</text>
						</view>
						 
						<view class="share-icon" @click.stop="share('pengyouquan')">
							<text class="cstIconfontN pengyouquan">&#xe650;</text>
							<text class="text-center margin-top-xs text-size">朋友圈</text>
						</view>
						<view class="share-icon" @click.stop="share('saveImage')">
							<text class="cstIconfontN picture">&#xe62d;</text>
							<text class="text-center margin-top-xs text-size">图片</text>
						</view>
					</view>
					<view class="tui-btn-cancle" @click.stop="closeModal"><text class="tui-btn-cancle-text">取消</text></view>
				</view>
			</view> -->
		<view class="echartsStyle" :id="option.id" :prop="option" :change:prop="echarts.handleUpdate" @click="echarts.handleOnClick"></view>
	</view>
</template>

<script>
	
	// data() {
	// 		return {};
	// 	},
	// 	destroyed() {
	// 		uni.$off('find-share-popup', function(data) {
	// 			console.log('移除 find-share-popup 自定义事件');
	// 		});
	// 	},
	// 	methods: {
	// 		closeModal() {
	// 			uni.getCurrentSubNVue().hide();
	// 		},
	// 		shareModal() {
	// 			uni.getCurrentSubNVue().hide();
	// 		},
	// 		share(type) {
	// 			uni.$emit('find-share-popup', {
	// 				type: type
	// 			});
	// 		}
	// 	}
	export default {
		name: 'Echarts',
		props: {
			option: {
				type: Object,
				required: true
			}
		},
		created() { 
			let t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
			let len = t.length
			let id = ''
			for (let i = 0; i < 32; i++) {
				id += t.charAt(Math.floor(Math.random() * len))
			}
			this.option.id = id
		},
		methods: { 
			onViewClick(params) {
				this.$emit('click', params)
			}
		}
	}
</script>

<script module="echarts" lang="renderjs">
	import echarts from '@/components/secharts/echarts/echarts.min.js'
	
	export default {
		data() {
			return {
				chart: null,
				clickData: null // echarts点击事件的值
			}
		},
		mounted() {
			this.handleInit();
		},
		methods: { 
			handleInit() {
				this.chart = echarts.init(document.getElementById(this.option.id))
				this.handleUpdate(this.option)
				this.chart.on('click', params => {
					this.clickData = params
				})
			},
		 
			handleOnClick(event, instance) {
				console.log('==this.event=====>',event)
				// console.log('==this.instance=====>',event)
				if (this.clickData) {
					instance.callMethod('onViewClick', {
						value: this.clickData.data,
						name: this.clickData.name,
						seriesName: this.clickData.seriesName
					})
					this.clickData = null
				}
			}, 
			handleUpdate(option) {
				if (this.chart) {
					if (option) {
						if (option.tooltip) {
							if (option.tooltip.positionStatus) {
								option.tooltip.position = this.handleTooltipPosition()
							}
							if (option.tooltip.formatterStatus) {
								option.tooltip.formatter = this.handleTooltipFormatter(option.tooltip.formatterUnit, option.tooltip.handleFormatFloat2, option.tooltip.hangleFormatThousands)
							}
						}
					}
					this.chart.setOption(option, option.notMerge)
				}
			}, 
			handleTooltipPosition() {
				return (point, params, dom, rect, size) => {
					let x = point[0]
					let y = point[1]
					let viewWidth = size.viewSize[0]
					let viewHeight = size.viewSize[1]
					let boxWidth = size.contentSize[0]
					let boxHeight = size.contentSize[1]
					let posX = 0  
					let posY = 0  
					if (x >= boxWidth) {  
						posX = x - boxWidth - 1
					}
					if (y >= boxHeight) {  
						posY = y - boxHeight - 1
					}
					return [posX, posY]
				}
			}, 
			handleTooltipFormatter(unit, handleFormatFloat2, hangleFormatThousands) {
				return params => {
					let resultStr = ''
					unit = unit ? unit : ''
					for (let i in params) {
						if (i == 0) {
							resultStr += params[i].axisValueLabel
						}
						let valueStr = '--'
						if (params[i].data !== null) {
							valueStr = params[i].data
							if (handleFormatFloat2) {
								valueStr = this.handleFormatFloat2(valueStr)
							}
							if (hangleFormatThousands) {
								valueStr = this.hangleFormatThousands(valueStr)
							}
						}
						// #ifdef H5
						resultStr += '\n' + params[i].seriesName + '：' + valueStr + ' ' + unit
						// #endif
						
						// #ifdef APP-PLUS
						resultStr += '<br/>' + params[i].marker + params[i].seriesName + '：' + valueStr + ' ' + unit
						// #endif
					}
					return resultStr
				}
			},
			/**
			 * 保留两位小数
			 * @param {Object} value
			 */
			handleFormatFloat2(v) {
				let tempNumber = Math.round(parseFloat(v) * 100) / 100
				let xsdStr = tempNumber.toString().split('.')
				if (xsdStr.length === 1) {
					tempNumber = (isNaN(tempNumber) ? '0' : tempNumber.toString()) + '.00'
					return tempNumber
				}
				if (xsdStr.length > 1) {
					if (xsdStr[1].length < 2) {
						tempNumber = tempNumber.toString() + '0'
					}
					return tempNumber
				}
			}, 
			hangleFormatThousands(value) {
				if (value === undefined || value === null) {
					value = ''
				}
				if (!isNaN(value)) {
					value = value + ''
				}
				let re = /\d{1,3}(?=(\d{3})+$)/g
				let n1 = value.replace(/^(\d+)((\.\d+)?)$/, function(s, s1, s2) {
					return s1.replace(re, '$&,') + s2
				})
				return n1
			}
		}
	}
</script>

<style lang="scss" scoped>
	.echartsStyle {
		width: 100%;
		height: 100%;
	}
	/*
	.cstIconfontN {
		text-align: center;
		font-size: 75rpx;
	}
	.weixin {
		color: #30ca70;
	}
	
	.qq {
		color: #1db2ed;
	}
	
	.pengyouquan {
		color: #52ae71;
	}
	
	.kongjian {
		color: #f2a141;
	}
	
	.bendi {
		color: #515a6e;
	}
	
	.picture {
		color: #808695;
	}
	
	.find-popup {
		width: 750rpx;
		flex-direction: column;
		flex: 1; 
	}
	.find-content{
		height: 400rpx;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0rpx;
	}
	.share-title-text {
		height: 60rpx;
		line-height: 60rpx;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		text-align: center;
		color: #7e7e7e;
		font-size: 30rpx;
	}
	
	.share-list {
		width: 750rpx;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: nowrap;
		flex: 1;
	}
	
	.share-icon {
		width: 187rpx;
		text-align: center;
		height: 130rpx;
		line-height: 130rpx;
		font-size: 44rpx;
	}
	
	.text-center {
		text-align: center;
	}
	.text-size {
		font-size: 32rpx;
	}
	.margin-top {
		margin-top: 35rpx;
	}
	
	.margin-top-xs {
		margin-top: 10rpx;
	}
	
	.margin-top2 {
		margin-top: 40rpx;
	}
	
	.tui-btn-cancle {
		width: 750rpx;
		height: 100rpx;
		line-height: 100rpx;
		position: absolute;
		left: 0;
		bottom: 0;
		background-color: #f6f6f6;
		align-items: center;
		justify-content: flex-end;
	}
	.tui-btn-cancle-text {
		width: 750rpx;
		font-size: 33rpx;
		color: #3e3e3e;
		height: 100rpx;
		line-height: 100rpx;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding-bottom: 5rpx;
	}*/
</style>

 
 