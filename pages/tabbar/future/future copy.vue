<template>
  <view class="app">
    <view class="echart">
      <echarts :option="option" style="height: 100%;width: 100%;" ref="echart" @click="echartClick"></echarts>
    </view>
    <tabbar index="2"></tabbar>
  </view>
</template>

<script>
import Echarts from "@/components/echarts/echarts.vue";
export default {
  // 注册组件
  components: {},
  data() {
    return {
      option: {
        grid: {
          left: "30"
        },
        dataZoom: [
          {
            type: "inside",
            start: 50,
            end: 100
          }
        ],
        tooltip: {
          show: true,
          trigger: "axis",
          axisPointer: {
            type: "line"
          },
          triggerOn: "click"
        },
        xAxis: {
          boundaryGap: 0,
          gridIndex: 0,

          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed"
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            margin: 15.5
          },
          data: [
            "2017-10-24",
            "2017-10-25",
            "2017-10-26",
            "2017-10-27",
            "2017-10-24",
            "2017-10-25",
            "2017-10-26",
            "2017-10-27",
            "2017-10-24",
            "2017-10-25",
            "2017-10-26",
            "2017-10-27",
            "2017-10-24",
            "2017-10-25",
            "2017-10-26",
            "2017-10-27",
            "2017-10-24",
            "2017-10-25",
            "2017-10-26",
            "2017-10-27",
            "2017-10-24",
            "2017-10-25",
            "2017-10-26",
            "2017-10-27"
          ]
        },
        yAxis:[ 
          {
            position: "right",
            splitLine: {
              show: true,
              lineStyle: {
                type: "dashed"
              }
            },

            axisLabel: {
              margin: 10.5
            }
          }
        ],
        series: [
          {
            type: "candlestick",
            encode: {
              x: 0,
              y: [1, 2, 3, 4],
              tooltip: [1, 2, 3, 4]
            },
            markLine: {
              symbol: ["none", "none"],
              silent: false,
              label:{
                backgroundColor:"red",
                color:"#fff",
                padding:[2,4]
              },
              lineStyle: {
                type: "dashed"
              },
              data: [
                {
                  yAxis: 20
                }
              ],
            },
            data: [
              [20, 34, 10, 38],
              [40, 35, 30, 50],
              [31, 38, 33, 44],
              [38, 15, 5, 42],
              [20, 34, 10, 38],
              [40, 35, 30, 50],
              [31, 38, 33, 44],
              [38, 15, 5, 42],
              [20, 34, 10, 38],
              [40, 35, 30, 50],
              [31, 38, 33, 44],
              [38, 15, 5, 42],
              [20, 34, 10, 38],
              [40, 35, 30, 50],
              [31, 38, 33, 44],
              [38, 15, 5, 42],
              [20, 34, 10, 38],
              [40, 35, 30, 50],
              [31, 38, 33, 44],
              [38, 15, 5, 42],
              [20, 34, 10, 38],
              [40, 35, 30, 50],
              [31, 38, 33, 44],
              [38, 15, 5, 42]
            ]
          },
          {
            data: [
              1,
              2,
              1,
              8,
              7,
              11,
              13,
              1,
              2,
              1,
              8,
              7,
              11,
              13,
              1,
              2,
              1,
              8,
              7,
              11,
              13
            ],
            type: "bar",

            itemStyle: {
              opacity: 0.7
            }
          },
          {
            type: "line",
            symbol: "none",
            data: [
              10,
              23,
              22,
              28,
              15,
              17,
              20,
              10,
              23,
              22,
              28,
              15,
              17,
              20,
              10,
              23,
              22,
              28,
              15,
              17,
              20
            ]
          }
        ]
      }
    };
  },
  methods: {
    logstatrt() {
      // console.log('初次调用');
    },
    echartClick(param) {
      console.log(param);
    }
  }
};
</script>

<style lang="scss" scoped>
.echart {
  height: 910rpx;
  border-radius: 8rpx;
  #canvasLine {
    width: 100%;
    height: 100%;
  }
}
</style>
