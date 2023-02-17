const upColor = '#e93f4f';
const downColor = '#12b887';
let formatterValues = '100';

function splitData(rawData) {
	let categoryData = [];
	let values = [];
	let volumes = [];
	for (let i = 0; i < rawData.length; i++) {
		categoryData.push(rawData[i].splice(0, 1)[0]);
		values.push(rawData[i]);
		volumes.push([i, rawData[i][4], rawData[i][0] > rawData[i][1] ? 1 : -1]);
	}
	return {
		categoryData: categoryData,
		values: values,
		volumes: volumes
	};
}

function calculateMA(dayCount, data) {
	var result = [];
	for (var i = 0, len = data.values.length; i < len; i++) {
		if (i < dayCount) {
			result.push('-');
			continue;
		}
		var sum = 0;
		for (var j = 0; j < dayCount; j++) {
			sum += data.values[i - j][1];
		}
		result.push(+(sum / dayCount).toFixed(3));
	}
	return result;
}
$.get(ROOT_PATH + '/data/asset/data/stock-DJI.json', function(rawData) {
	var data = splitData(rawData);
	myChart.setOption(
		(option = {
			animation: false,
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
				borderColor: '#ccc',
				padding: 10,
				textStyle: {
					color: '#000'
				},
				formatter(params) {
					let val = '';
					for (x in params) {
						console.log(params[x])
						val +=
							"<div style='font-size:12px;display: flex;flex-direction: row;align-items: center;justify-content: space-between;'><div>Date:</div><div>" +
							params[x].name + "</div></div>"
						val +=
							"<div style='font-size:12px;display: flex;flex-direction: row;align-items: center;justify-content: space-between;'><div>Open:</div><div>" +
							params[x].value[1] + "</div></div>"
						val +=
							"<div style='font-size:12px;display: flex;flex-direction: row;align-items: center;justify-content: space-between;'><div>Close:</div><div>" +
							params[x].value[2] + "</div></div>"
						val +=
							"<div style='font-size:12px;display: flex;flex-direction: row;align-items: center;justify-content: space-between;'><div>High:</div><div>" +
							params[x].value[4] + "</div></div>"
						val +=
							"<div style='font-size:12px;display: flex;flex-direction: row;align-items: center;justify-content: space-between;'><div>Low:</div><div>" +
							params[x].value[3] + "</div></div>"
						val +=
							"<div style='font-size:12px;display: flex;flex-direction: row;align-items: center;justify-content: space-between;'><div>Volume:</div><div>" +
							params[x].value[0] + "</div></div>"

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
						color: downColor
					},
					{
						value: -1,
						color: upColor
					}
				]
			},
			grid: [{
					left: '10%',
					right: '8%',
					height: '50%'
				},
				{
					left: '10%',
					right: '8%',
					top: '64%',
					height: '10%' //底部轴的位置
				}
			],
			xAxis: [{
					type: 'category',
					data: data.categoryData,
					boundaryGap: false,
					axisLine: {
						onZero: false,
					},
					splitLine: {
						show: false
					},

					show: false, //隐藏x轴坐标
					min: 'dataMin',
					max: 'dataMax',

				},
				{
					type: 'category',
					gridIndex: 1,
					data: data.categoryData,
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
					show: true
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
					} //图里面的x线是否显示
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
						show: true
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
					data: data.values,

					itemStyle: {
						color: upColor,
						color0: downColor,
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
									formatter: formatterValues,
									show: true,
									color: '#fff',
									backgroundColor: downColor,
									padding: 2,
									borderRadius: 2
								}
							},
							itemStyle: {
								color: downColor,

							},

						}]
					},
					tooltip: {
						formatter: function(param) {
							param = param[0];
							return [
								'Date: ' + param.name + '<hr size=1 style="margin: 3px 0">',
								'Open: ' + param.data[0] + '<br/>',
								'Close: ' + param.data[1] + '<br/>',
								'Lowest: ' + param.data[2] + '<br/>',
								'Highest: ' + param.data[3] + '<br/>'
							].join('');
						}
					}
				},
				{
					name: 'MA5',
					type: 'line',

					data: calculateMA(5, data),
					smooth: true,
					symbol: "none",
					lineStyle: {
						width: 0.5
					},
				},
				{
					name: 'MA10',
					type: 'line',
					data: calculateMA(10, data),
					smooth: true,
					symbol: "none",
					lineStyle: {
						width: 0.5
					}
				},
				{
					name: 'MA20',
					type: 'line',
					data: calculateMA(20, data),
					smooth: true,
					symbol: "none", //去掉线上圆点
					lineStyle: {
						width: 0.5
					}
				},
				{
					name: 'MA30',
					type: 'line',
					data: calculateMA(30, data),
					smooth: false,

					symbol: "none",
					lineStyle: {
						width: 0.5,
						color: "#fff"
					}
				},
				{
					name: 'Volume',
					type: 'bar',

					xAxisIndex: 1,
					yAxisIndex: 1,
					data: data.volumes
				}
			]
		})

	);
});
