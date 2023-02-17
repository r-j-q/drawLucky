<template>
	<view class="container">
		<view class="container_week fontSize13 textColorffb860">
			<span class="mrr c1">MA5 82.5500 </span><span class='c2'> Ma10 82.5900</span><span class='c3'>MA30
				82.7700</span>
		</view>
		<!-- @click="echartsClick" -->
		<echarts :option="option" style="height: 455px;width: 750upx;"></echarts>
	</view>
</template>

<script>
	import echarts from '@/components/secharts/echarts/echarts.vue'

	export default {
		name: "categoryLine",
		props: ['stock_no'],

		components: {
			echarts
		},
		data() {
			return {


				option: {},

				activeList: {
					id: 1,
					time: "Daily"
				},

				data0: null,
				historical: [],
				dataWR1: [], //线32
				dataWR2: [], //线64
				dateAllPorint: [],
				resultPorint64: [],
				resultPorint32: [],
				chartData: {},
				s_b: [],
				newBaseData: [],
				subTitle: "11111111",
				subTextContent: "222222",


				upColor: '#e93f4f',
				downColor: '#12b887',
				formatterValues: '100'

			}
		},


		mounted() {

			this.getUsdttradeKlineHistoryList()
		},
		methods: {
			getLocalTime(time) {
				var date = new Date(time);
				var Y = date.getFullYear() + '-';
				var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
				var D = date.getDate() + ' ';
				// var h = date.getHours() + ':';
				// var m = date.getMinutes() + ':';
				// var s = (date.getSeconds() + 1 < 10 ? '0' + (date.getSeconds() + 1) : date.getSeconds() + 1);
				var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
				var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
				var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()); // 秒
				return Y + M + D + h + m + s;
			},

			// k线图数据
			getUsdttradeKlineHistoryList() {
				let _this = this;
				let dataArr = []; // k线数据,
				let ma5Arr = [],
					ma10Arr = [],
					ma30Arr = [],
					volumeArr = [];
				let dateArr = []; // k线日期
				let startTime = new Date("2022-02-01").getTime();
				let endTime = new Date("2023-02-05").getTime();
				let params = {
					startDate: startTime,
					endDate: endTime,
					symbol: "BTCUSDT",
					marketType: 1,
				}
				_this.$api.ak.getUsdttradeKlineHistory(params).then(
					res => {
						//0 Date  1 Open 4 Close 2 High 3 Low Volume
						console.log('Date', _this.getLocalTime());
						res.forEach((item, index) => {


							dataArr.push([item[1], item[4], item[2], item[3]]);
							ma5Arr.push(item[12] != 0 ? item[12] : null);
							ma10Arr.push(item[13] != 0 ? item[13] : null);
							ma30Arr.push(item[14] != 0 ? item[14] : null);

							// let time = _this.getDateFormat(item[0]);
							// console.log(item[0])
							dateArr.push(_this.getLocalTime(item[0]));

							volumeArr.push({
								value: item[8],
								itemStyle: {
									normal: {
										color: (Number(item[4]) > Number(item[1])) ?
											"rgba(218, 82, 82, 0.5)" : "rgba(62, 173, 93, 0.5)"
									}

								}
							});
						});

						// this.option.series[0].data = dataArr;
						// this.option.series[1].data = ma5Arr; //this.calculateMA(5,dataArr)
						// this.option.series[2].data = ma10Arr; //this.calculateMA(10,dataArr)
						// this.option.series[3].data = ma30Arr; //this.calculateMA(30,dataArr)
						// this.option.series[4].data = volumeArr;
						// this.option.xAxis[0].data = dateArr;
						// this.option.xAxis[1].data = dateArr;

						_this.myRadarEchart(dataArr, ma5Arr, ma10Arr, ma30Arr, volumeArr, dateArr)


					}).catch(err => {
					console.log('err', err);
				})
			},

			myRadarEchart(dataArr, ma5Arr, ma10Arr, ma30Arr, volumeArr, dateArr) {


				this.option = {
					// title: {
					// 	x: 'center',
					// 	y: 'center',
					// 	top: "10%",
					// 	left: '3%',
					// 	subtext: "MA5 82.5500 Ma 10 82.5900 MA30 82.7700",
					// 	subtextStyle: {
					// 		color: '#e4393c'
					// 		// fontWeight: 'bold'
					// 	},
					// 	formatter(){
					// 		return [
					// 		'{a| 啊的a}',
					// 		'{b| 啊的b}',
					// 	].join('\n')
					// 	},
					// 	rich:{
					// 		a:{
					// 			color:"red"
					// 		},
					// 		b:{
					// 			color:"blue"
					// 		}
					// 	}
					// },
					animation: true,
					legend: {
						bottom: 10,
						left: 'center',
						data: ['Dow-Jones index', 'MA5', 'MA10', 'MA20', 'MA30']
					},
					legend: {
						show: false
					},
					tooltip: {
						trigger: 'axis',
						// axisPointer: {
						//   type: 'cross'
						// },
						borderWidth: 1,
						borderColor: 'red',
						backgroundColor: '#fff',
						padding: 10,
						textStyle: {
							color: '#000'
						},
						textStyle: { //文字样式
							color: '#6A6A6A',
							decoration: 'none',
							fontFamily: 'Verdana,sans-serif',

						},
						formatter(params) {
							let val = '';
							for (var x in params) {
								val +=
									"Date:" + params[x].name + "\n"
								val +=
									"Open:" + params[x].value[1] + "\n"
								val +=
									"Close:" + params[x].value[2] + "\n"
								val +=
									"High:" + params[x].value[4] + "\n"
								val +=
									"Low:" + params[x].value[3] + "\n"
								val +=
									"Volume:" + params[x].value[0] + "\n"

								return val
							}

						},
						// position: function (pos, params, el, elRect, size) {
						//   const obj = {
						//     top: 10
						//   };
						//   obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
						//   return obj;
						// },
						extraCssText: 'width: 130px'
					},
					axisPointer: {
						link: [{
							xAxisIndex: 'all'
						}],
						label: {
							backgroundColor: '#777'
						}
					},
					toolbox: {
						show: false,
						feature: {
							dataZoom: {
								yAxisIndex: false
							},
							brush: {
								type: ['lineX', 'clear']
							}
						}
					},
					brush: {
						xAxisIndex: 'all',
						brushLink: 'all',
						outOfBrush: {
							colorAlpha: 0.1
						}
					},
					visualMap: {
						show: false,
						seriesIndex: 5,
						dimension: 2,
						pieces: [{
								value: 1,
								color: this.downColor
							},
							{
								value: -1,
								color: this.upColor
							}
						]
					},
					grid: [{
							top: '2%',
							left: '0%',
							right: '18%',
							height: '50%',

						},
						{
							left: '0%',
							right: '0%',
							top: '54%',
							height: '10%', //底部轴的位置
							bottom: '1%',
							containLabel: true
						}
					],
					xAxis: [{
							type: 'category',
							data: dateArr,
							boundaryGap: false,
							axisLine: {
								onZero: false,
							},
							// splitLine: {
							// 	show: false
							// },
							splitLine: {
								show: true,
								lineStyle: {
									type: "dashed"
								}
							}, 

							show: false, //隐藏x轴坐标
							min: 'dataMin',
							max: 'dataMax',

						},
						{
							type: 'category',
							gridIndex: 1,
							data: dateArr,
							boundaryGap: false,
							axisLine: {
								show: true,
								lineStyle: {
									width: 0
								}
							},
							axisTick: {
								show: false
							},
							splitLine: {
								show: false,



							},
							axisLabel: {
								show: true
							},
							min: 'dataMin',
							max: 'dataMax',
							show: true,
							axisLabel: {
								margin: 10.5,
								formatter: function(value, index) {
									if (value.indexOf("00:00:00") > -1) {
										return value.substr(8, 2) + "日";
									} else {
										return value.substr(10, 5);
									}
								}
							}
						}
					],
					yAxis: [{

							scale: true,
							splitArea: {
								show: false //是否显示背景色
							},

							axisLabel: {
								show: false
							},
							axisLine: {
								show: false
							}, //Y轴线是否显示
							axisTick: {
								show: false
							}, //Y轴线刻度是否显示
							splitLine: {
								show: false
							}, //图里面的x线是否显示
							// position: "right",
							// splitLine: {
							//   show: true,
							//   lineStyle: {
							//     type: "dashed"
							//   }
							// },
						},
						{
							// 底部模块坐标设置
							scale: true,
							gridIndex: 1,
							splitNumber: 2,

							axisLabel: {
								show: false
							},
							axisLine: {
								show: false
							},
							axisTick: {
								show: false
							},
							splitLine: {
								show: false
							},

						},
						// 右侧数据显示问题
						// 改变最大的数和最小的数
						{
							type: 'value',
							name: '',
							min: 0,
							max: 0.64,
							// interval: 5, 
							splitLine: {
								show: true
							},
							axisLabel: {
								formatter: '{value}',
								show: true,
								textStyle: {
									color: "#999",
									margin: 12
								}
							},
							axisLine: {
								show: false,
								lineStyle: {
									width: 0
								}
							},
							axisTick: {
								show: false
							}
						}
					],
					dataZoom: [{
							type: 'inside',
							xAxisIndex: [0, 1],
							start: 98,
							end: 100
						},
						{
							show: false,
							xAxisIndex: [0, 1],
							type: 'slider',
							top: '85%',
							start: 98,
							end: 100
						}
					],
					series: [{
							name: 'Dow-Jones index',
							type: 'candlestick',
							data: dataArr,

							itemStyle: {
								color: this.upColor,
								color0: this.downColor,
								borderColor: undefined,
								borderColor0: undefined
							},
							markLine: {
								symbol: ['none', 'none'],
								data: [{
									name: '',
									type: 'max',
									label: {
										normal: {
											formatter: this.formatterValues,
											show: true,
											color: '#fff',
											backgroundColor: this.downColor,
											padding: 2,
											borderRadius: 2
										}
									},
									itemStyle: {
										color: this.downColor,

									},

								}]
							},
							// tooltip: {
							// 	formatter: function(param) {
							// 		param = param[0];
							// 		return [
							// 			'Date: ' + param.name + '<hr size=1 style="margin: 3px 0">',
							// 			'Open: ' + param.data[0] + '<br/>',
							// 			'Close: ' + param.data[1] + '<br/>',
							// 			'Lowest: ' + param.data[2] + '<br/>',
							// 			'Highest: ' + param.data[3] + '<br/>'
							// 		].join('');
							// 	}
							// }
						},
						{
							name: 'MA5',
							type: 'line',

							data: ma5Arr,
							smooth: true,
							symbol: "none",
							lineStyle: {
								width: 0.8
							},
						},
						{
							name: 'MA10',
							type: 'line',
							data: ma10Arr,
							smooth: true,
							symbol: "none",
							lineStyle: {
								width: 0.8
							}
						},
						{
							name: 'MA20',
							type: 'line',
							data: ma30Arr,
							smooth: true,
							symbol: "none", //去掉线上圆点
							lineStyle: {
								width: 0.8
							}
						},
						{
							name: 'MA30',
							type: 'line',
							data: ma30Arr,
							smooth: false,

							symbol: "none",
							lineStyle: {
								width: 0.8,
								color: "#fff"
							}
						},
						{
							name: 'Volume',
							type: 'bar',

							xAxisIndex: 1,
							yAxisIndex: 1,
							data: volumeArr
						}
					],

				}

			}
		}


	}
</script>

<style>
	.container {
		width: 750upx;
		height: 600upx;
		margin: 0 auto;
		position: relative;

	}

	.container_week {
		position: absolute;
		top: 10upx;
		left: 20upx;
		font-size: 1vw;
	}

	.container100 {
		width: 100%;
		height: 100%;
	}

	.c1 {
		color: burlywood
	}

	.c2 {
		color: blue;
		margin: 0 10upx;
	}

	.c3 {
		color: blueviolet;
	}
</style>
