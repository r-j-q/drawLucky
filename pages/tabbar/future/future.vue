<template>
  <view class="app" v-if="Object.keys(initData).length > 0">
    <uni-view class="header" @click="toggle">
      <uni-view class="menu u-m-r-10">
        <uni-icons type="list" size="48rpx"></uni-icons>
      </uni-view>
      <uni-view class="text">{{ initData.symbolPretty }}</uni-view>
    </uni-view>
    <uni-view class="coinInfo">
      <uni-view class="flexSub">
        <uni-view
          class="price"
          :style="{ color: textColor1(initData.priceChangePercent) }"
        >{{ delZero(initData.currentDaysClosePrice) }}</uni-view>
        <uni-view class="currencyValue">
          <uni-text class="cusText">
            <span>
              ≈{{
              detailData &&
              detailData.aggTrade &&
              delZero(detailData.aggTrade.tradePrice)
              }}USD
            </span>
          </uni-text>
          <uni-text :style="{ color: textColor1(initData.priceChangePercent) }">
            <span>{{ initData.priceChangePercent }}%</span>
          </uni-text>
        </uni-view>
      </uni-view>
      <uni-view class="flexSub">
        <uni-view class="inLabel">
          <uni-view class="grayColor">24hHigh</uni-view>
          <uni-view class="cusText">{{ delZero(initData.highPrice) }}</uni-view>
        </uni-view>
        <uni-view class="inLabel">
          <uni-view class="grayColor">24hLow</uni-view>
          <uni-view class="cusText">{{ delZero(initData.lowPrice) }}</uni-view>
        </uni-view>
        <uni-view class="inLabel">
          <uni-view class="grayColor">Volume(USDT)</uni-view>
          <uni-view class="cusText">
            {{
            initData.totalTradedQuoteAssetVolume
            }}
          </uni-view>
        </uni-view>
      </uni-view>
    </uni-view>
    <uni-view class="periodWrap">
      <uni-view class="periods">
        <uni-view
          :class="['periodItem', item.value == curTimeV ? 'active' : '']"
          v-for="(item, index) in timeLists"
          :key="index"
          v-if="index < 5"
          @click="changeTimeV(item.value)"
        >{{ item.name }}</uni-view>

        <uni-view class="more" @click="hidePeriods = !hidePeriods">
          <uni-text>
            <span>More</span>
          </uni-text>

          <uni-view class="u-icon u-icon--right">
            <uni-icons type="arrow-down-fill" size="48rpx"></uni-icons>
          </uni-view>
        </uni-view>
      </uni-view>
      <uni-view class="hidePeriods" v-show="hidePeriods">
        <uni-view
          class="periodItem"
          v-for="(item, index) in timeLists"
          :key="index"
          v-if="index > 4"
          @click="changeTimeV(item.value)"
        >{{ item.name }}</uni-view>
      </uni-view>
    </uni-view>
    <view class="echart">
      <echarts :option="option" style="height: 100%; width: 100%" ref="echart" @click="echartClick"></echarts>
    </view>
    <view class="tabsView">
      <view :class="['item', key == 1 ? 'active' : '']" @click="key = 1">等待交割</view>
      <view :class="['item', key == 2 ? 'active' : '']" @click="key = 2">交割历史</view>
      <view :class="['line', key == 2 ? 't1' : '']"></view>
    </view>
    <view class="tabsCont">
      <view class="t1" v-if="key == 1">
        <view class="noData">
          <image src="../../../static/trade/bg.png" />暂无数据
        </view>
      </view>
      <view class="t2" v-else>
        <view class="item" v-for="(item, index) in hisList" :key="index">
          <view class="label">
            <view class="left">交易对</view>
            <view class="right">{{ item.chargeFeeCurrency }}/{{ item.transCurrency }}</view>
          </view>
          <view class="label">
            <view class="left">开仓价格</view>
            <view class="right">{{ item.hangupPrice }}</view>
          </view>
          <view class="label">
            <view class="left">交割价格</view>
            <view class="right">{{ item.transPrice }}</view>
          </view>
          <view class="label">
            <view class="left">方向</view>
            <view class="right">看{{ item.c2bPlayType == "0" ? "涨" : "跌" }}</view>
          </view>
          <view class="label">
            <view class="left">时间</view>
            <view class="right">{{ item.c2bDuration }} S</view>
          </view>
          <view class="label">
            <view class="left">买入金额(USDT)</view>
            <view class="right">{{ item.transAmount }}</view>
          </view>
          <view class="label">
            <view class="left">开仓时间</view>
            <view class="right">{{ item.createTime }}</view>
          </view>
          <view class="label">
            <view class="left">交割时间</view>
            <view class="right">{{ item.transTime }}</view>
          </view>
          <view class="label">
            <view class="left">盈亏</view>
            <view class="right">{{ item.quantity }}</view>
          </view>
        </view>
      </view>
    </view>
    <view class="botBtn">
      <view @click="openBot('rise')" :style="{ backgroundColor: backGroundColor('rise') }">看涨</view>
      <view @click="openBot('fall')" :style="{ backgroundColor: backGroundColor('fall') }">看跌</view>
    </view>
    <view>
      <uni-popup ref="popup" background-color="#fff">
        <view class="popup-content">
          <view class="title">期货</view>
          <view class="rankHeader">
            <view class="flexSub">交易对</view>
            <view class="flexSub priceHead">最新价格</view>
            <view class="flexSub" style="text-align: right">涨跌幅</view>
          </view>
          <scroll-view scroll-y="true" class="scrollBox">
            <view
              class="item"
              v-for="(item, index) in C2BMarket"
              :key="index"
              @click="change(item)"
            >
              <view class="name flexSub">
                <text class="nameCoi">
                  {{
                  item.symbolPretty.split("/")[0]
                  }}
                </text>
                <text class="nameCur">/{{ item.symbolPretty.split("/")[1] }}</text>
              </view>
              <view
                class="price flexSub"
                :style="{
                  color: textColor1(item.priceChangePercent),
                }"
              >{{ delZero(item.currentDaysClosePrice) }}</view>
              <view class="changeWarp flexSub">
                <view
                  class="change"
                  :style="{
                    backgroundColor: backGroundColor1(item.priceChangePercent),
                    color: textColor1(item.priceChangePercent),
                  }"
                >{{ item.priceChangePercent }}%</view>
              </view>
            </view>
          </scroll-view>
        </view>
      </uni-popup>
    </view>
    <uni-popup ref="popupBottom" background-color="#fff">
      <view class="popupBottom">
        <view class="title">
          <view class="left">
            购买{{ this.initData.symbolPretty.split("/")[0] }}期货
            <text
              :style="{
                color: textColor(),
              }"
            >{{ type == "rise" ? "涨" : "跌" }}</text>
          </view>
          <view class="right" @click="close()">取消</view>
        </view>
        <view class="contract">
          <view
            :class="['item', contractKey == index + 1 ? 'active' : '']"
            @click="contractKey = index + 1"
            v-for="(item, index) in playMethod"
            :key="index"
            :style="{ backgroundColor: textColor() }"
            v-if="
              (type == 'rise' && item.type == 0) ||
              (type != 'rise' && item.type == 1)
            "
          >
            <text class="time">{{ item.time }}S</text>
            <text class="pro">{{ item.ratio * 100 }}%</text>
          </view>
        </view>
        <view class="light">
          <text>购买数量</text>
          <text>托管费: 0%</text>
        </view>
        <view class="inputWarp">
          <input
            class="uni-input"
            :placeholder="`最低购买限额${palyCurrency.incomeMinAmount}`"
            type="number"
            placeholder-style="fontSize:28rpx"
            v-model="inputValue"
            @input="changeValue"
          />
        </view>
        <view class="light">
          <text>余额: {{ balance }} USDT</text>
          <text>预计收益: {{ profit }} USDT</text>
        </view>
        <view
          class="submit"
          @click="buy"
          :style="{
            backgroundColor:
              palyCurrency.incomeSwitch == 1 ? textColor() : '#dee1e6',
          }"
        >{{ palyCurrency.incomeSwitch == 1 ? "立即购买" : "暂停交易" }}</view>
      </view>
    </uni-popup>
    <tabbar index="2"></tabbar>
  </view>
</template>

<script>
import Echarts from "@/components/echarts/echarts.vue";
export default {
  data() {
    return {
      key: 1,
      type: "rise",
      hidePeriods: false,
      C2BMarket: [],
      dbId: "",
      contractList: [
        { time: "30S", pro: "40%" },
        { time: "60S", pro: "60%" },
        { time: "120S", pro: "80%" },
        { time: "300S", pro: "100%" }
      ],
      initData: {},
      changeColor: {},
      contractKey: 1,
      detailData: {},
      playMethod: [],
      palyCurrency: {},
      balance: 0,
      inputValue: "",
      profit: 0,
      hisList: [],
      page: 1,
      timeLists: [
        {
          name: "1 min",
          value: 1,
          label: "1m"
        },
        {
          name: "15 min",
          value: 15,
          label: "15m"
        },
        {
          name: "1 hour",
          value: 60,
          label: "1h"
        },
        {
          name: "1 day",
          value: 1440,
          label: "1d"
        },
        {
          name: "5 min",
          value: 5,
          label: "5m"
        },
        {
          name: "30 min",
          value: 30,
          label: "30m"
        },
        {
          name: "6 hour",
          value: 360,
          label: "6h"
        },
        {
          name: "1 week",
          value: 10080,
          label: "1w"
        },
        {
          name: "1 month",
          value: 44640,
          label: "1M"
        }
      ],
      curTimeV: 1,
      kData: {},
      option: {
        grid: [
          {
            left: "0",
            top: "10",
            right: "80",
            height: "75%"
          },
          {
            left: "0",
            top: "75%",
            right: "80",
            height: "10%"
          }
        ],
        dataZoom: [
          {
            type: "inside",
            start: 50,
            end: 100,
            xAxisIndex: [0, 0]
          },
          {
            type: "inside",
            start: 50,
            end: 100,
            xAxisIndex: [0,1]
          },
          {
            type: "inside",
            start: 50,
            end: 100,
            xAxisIndex: [0, 2]
          }
          // {
          //   type: "inside",
          //   start: 50,
          //   end: 100,
          // },
        ],
        tooltip: {
          show: true,
          trigger: "axis",
          axisPointer: {
            type: "line"
          },
          triggerOn: "click"
        },
        xAxis: [
          {
            type: "category",
            scale: true,
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
              show: false,
              onZero: false
            },
            axisLabel: {
              show: false
            },
            data: []
          },
          {
            type: "category",
            boundaryGap: 0,
            gridIndex: 1,
            data: [],
            axisTick: {
              show: false
            },
            axisLine: {
              show: false,
              onZero: false
            },
            axisLabel: {
              margin: 10.5,
              formatter: function(value, index) {
                if (value.indexOf("00:00:00") > -1) {
                  return value.substr(8, 2) + "日";
                } else {
                  return value.substr(11, 5);
                }
              }
            }
          }
        ],
        yAxis: [
          {
            scale: true,
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
          },
          {
            position: "right",
            gridIndex: 1,
            splitNumber: 3,
            scale: true,
            axisLine: { onZero: false },
            axisTick: { show: false },
            splitLine: { show: false },
            axisLabel: { show: false }
          }
        ],
        series: [
          {
            type: "candlestick",
            // markLine: {
            //   symbol: ["none", "none"],
            //   silent: false,
            //   label: {
            //     backgroundColor: "red",
            //     color: "#fff",
            //     padding: [2, 4],
            //   },
            //   lineStyle: {
            //     type: "dashed",
            //   },
            //   data: [
            //     {
            //       // yAxis: 20,
            //     },
            //   ],
            // },
            data: [["23431.40", "23446.40", "23431.20", "23447.30"]],
            xAxisIndex: 0,
            yAxisIndex: 0
          },
          {
            name: "MA5",
            type: "line",
            data: [],
            smooth: true,
            symbol: "none",
            lineStyle: {
              // opacity: 0.5,
              color: "rgba(189, 165, 79, 1)"
            }
          },
          {
            name: "MA10",
            type: "line",
            data: [],
            smooth: true,
            symbol: "none",
            lineStyle: {
              // opacity: 0.5,
              color: "rgba(24, 131, 222, 1)"
            }
          },
          {
            name: "MA30",
            type: "line",
            data: [],
            smooth: true,
            symbol: "none",
            lineStyle: {
              // opacity: 0.5,
              color: "rgba(145, 32, 138, 1)"
            }
          },
          {
            name: "Volume",
            type: "bar",
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [],
            // itemStyle: {
            //   normal: {
            //     color: function(params) {
            //       var colorList;
            //       if (
            //         data.datas[params.dataIndex][1] >
            //         data.datas[params.dataIndex][0]
            //       ) {
            //         colorList = "#ef232a";
            //       } else {
            //         colorList = "#14b143";
            //       }
            //       return colorList;
            //     }
            //   }
            // }
          }
        ]
      },
      timer: null
    };
  },

  computed: {
    stroeChange() {
      return this.$store.state.socket.stroeChange;
    }
  },
  watch: {
    stroeChange: {
      handler: function(newVal, oldVal) {
        this.C2BMarket = this.$store.state.socket.websocketData.C2BMarket;
        if (this.C2BMarket && this.dbId) {
          this.initData = this.C2BMarket.filter(v => v.dbId == this.dbId)[0];
          // if (this.playMethod.length ==0) {
          //   this.getCurrencyPlayMethod();
          // }
        }
        if (!this.dbId) {
          this.$store.dispatch(
            "websocketSend",
            "ROOM_C2B@" + this.C2BMarket[0].symbol
          );
          this.dbId = this.C2BMarket[0].dbId;
        }
        if (this.$store.state.socket.websocketData.C2CDepth) {
          this.detailData = this.$store.state.socket.websocketData.C2CDepth[
            this.initData.symbol
          ];
        }
        let websocketData = this.$store.state.socket.websocketData;
        if (websocketData.C2BKline) {
          this.kData = websocketData.C2BKline.BTCUSDT;
        }
        // console.log('---')
        // console.log(this.initData)
        // if (!this.balance) {
        //   this.getBalance();
        // }
      },
      deep: true
    },
    initData: {
      handler: function(nv, ov) {
        if (nv && nv.symbol != ov.symbol) {
          this.getCurrencyPlayMethod();
          this.getBalance();
        }
      },
      deep: true
    },
    contractKey() {
      this.changeValue();
    },
    kData: {
      deep: true,
      handler(val) {
        if (val.isBarFinal) {
          this.setKLineOption();
        }
      }
    }
  },
  methods: {
    getKlineHistory() {
      let startTime = new Date("2023-02-01").getTime();
      let endTime = new Date("2023-02-05").getTime();
      let dataArr = []; // k线数据,
      let ma5Arr = [],
        ma10Arr = [],
        ma30Arr = [],
        volumeArr = [];
      let dateArr = []; // k线日期
      this.$api.kline
        .getKlineHistory({
          startDate: startTime,
          endDate: endTime,
          symbol: "BTCUSDT",
          marketType: 1,
          interval: this.timeLists.find(item => item.value == this.curTimeV)
            .label
        })
        .then(res => {
          res.forEach((item,index) => {
            dataArr.push([item[1], item[4], item[3], item[2]]);
            ma5Arr.push(item[12] != 0 ? item[12] : null);
            ma10Arr.push(item[13] != 0 ? item[13] : null);
            ma30Arr.push(item[14] != 0 ? item[14] : null);
            let time = this.getDateFormat(item[0]);
            dateArr.push(time);
            volumeArr.push({
              value:item[8],
              itemStyle:{
                normal: {
                  color:(Number(item[4])>Number(item[1]))?"rgba(218, 82, 82, 0.5)":"rgba(62, 173, 93, 0.5)"
                }
                
              }
            });
          });

          // this.$set(this.option.series[0].data, 0, arr);
          this.option.series[0].data = dataArr;
          this.option.series[1].data = ma5Arr; //this.calculateMA(5,dataArr)
          this.option.series[2].data = ma10Arr; //this.calculateMA(10,dataArr)
          this.option.series[3].data = ma30Arr; //this.calculateMA(30,dataArr)
          this.option.series[4].data = volumeArr;
          this.option.xAxis[0].data = dateArr;
          this.option.xAxis[1].data = dateArr;
          this.setTimer();
        });
    },
    getTransactions(status) {
      this.$api.trade
        .getTransactions({
          page: this.page,
          pageSize: 10,
          walletType: 2,
          status: status || ""
        })
        .then(res => {
          this.hisList = res.list;
        });
    },
    getBalance() {
      this.$api.trade
        .getBalanceOrAssets({
          type: 1,
          currency: "usdt",
          walletType: 2
        })
        .then(res => {
          this.balance = res.amount - res.frozenAmount;
        });
    },
    getCurrencyPlayMethod() {
      this.$api.trade
        .getCurrencyPlayMethod({
          currency: this.initData.symbolPretty.split("/")[0]
        })
        .then(res => {
          this.palyCurrency = res.currency;
          this.playMethod = res.palyMethod;
        });
    },
    changeValue() {
      this.profit =
        this.inputValue * this.playMethod[this.contractKey - 1].ratio -
        this.inputValue * this.palyCurrency.incomeChargeFeeRate;
    },
    buy() {
      this.$api.trade
        .bet({
          userId: uni.getStorageSync("userInfo").id,
          playId: this.playMethod[this.contractKey - 1].id,
          playType: this.type == "rise" ? 0 : 1,
          currencyToBet: {
            code: this.initData.symbolPretty.split("/")[0]
          },
          moneyToBet: {
            amount: this.inputValue,
            currency: this.initData.symbolPretty.split("/")[1]
          }
        })
        .then(res => {});
    },
    change(item) {
      this.dbId = item.dbId;
      this.$store.dispatch("websocketSend", "ROOM_C2B@" + item.symbol);
      this.$refs.popup.close();
    },
    toggle() {
      this.$refs.popup.open("left");
    },
    openBot(type) {
      this.type = type;
      this.$refs.popupBottom.open("bottom");
    },
    close() {
      this.contractKey = 1;
      this.$refs.popupBottom.close();
    },
    textColor() {
      if (this.type == "rise") {
        if (this.changeColor.value == 0 || !this.changeColor) {
          return "rgb(233, 63, 79)";
        } else {
          return "rgb(18, 184, 135)";
        }
      } else {
        if (this.changeColor.value == 1) {
          return "rgb(233, 63, 79)";
        } else {
          return "rgb(18, 184, 135)";
        }
      }
    },
    textColor1(value) {
      if (value > 0) {
        if (this.changeColor.value == 0 || !this.changeColor) {
          return "rgb(233, 63, 79)";
        } else {
          return "rgb(18, 184, 135)";
        }
      } else {
        if (this.changeColor.value == 1) {
          return "rgb(233, 63, 79)";
        } else {
          return "rgb(18, 184, 135)";
        }
      }
    },
    backGroundColor1(value) {
      if (value > 0) {
        if (this.changeColor.value == 0 || !this.changeColor) {
          return "rgba(218, 82, 82, 0.2)";
        } else {
          return "rgba(62, 173, 93, 0.2)";
        }
      } else {
        if (this.changeColor.value == 1) {
          return "rgba(218, 82, 82, 0.2)";
        } else {
          return "rgba(62, 173, 93, 0.2)";
        }
      }
    },
    backGroundColor(type) {
      if (type == "rise") {
        if (this.changeColor.value == 0 || !this.changeColor) {
          return "rgb(233, 63, 79)";
        } else {
          return "rgb(18, 184, 135)";
        }
      } else {
        if (this.changeColor.value == 1) {
          return "rgb(233, 63, 79)";
        } else {
          return "rgb(18, 184, 135)";
        }
      }
    },
    echartClick(param) {
      console.log(param);
    },
    setKLineOption() {
      let arr = [
        this.kData.open,
        this.kData.close,
        this.kData.low,
        this.kData.high
      ];
      let dataArr = [...this.option.series[0].data, arr];
      this.option.series[0].data = dataArr;
      // this.$set(this.option.series[0].data, 0, arr);
      // this.option.xAxis.data[0] = this.getCurTime();
      let date = this.getDateFormat(new Date().valueOf());
      let dateArr = [...this.option.xAxis[0].data, date];
      this.option.xAxis[0].data = dateArr;
      this.option.xAxis[1].data = dateArr
    },
    changeTimeV(val) {
      this.curTimeV = val;
      // this.setKLineOption();
      this.getKlineHistory();
      this.setTimer();
      this.$store.dispatch(
        "websocketSend",
        `ROOM_C2B@BTCUSDT@${
          this.timeLists.find(item => item.value == this.curTimeV).label
        }`
      );
    },
    getCurTime() {
      let curDate = new Date();
      let hours = curDate.getHours();
      let minu = curDate.getMinutes();
      let time =
        (hours > 10 ? hours : "0" + hours) +
        ":" +
        (minu > 10 ? minu : "0" + minu);
      return time;
    },
    setTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
      this.timer = setInterval(() => {
        console.log("timer---");
        this.setKLineOption();
      }, this.curTimeV * 60000);
    }
  },
  onShow() {
    this.$store.dispatch("websocketSend", `ROOM_C2B_HALL`);
    this.$store.dispatch(
      "websocketSend",
      `ROOM_C2B@BTCUSDT@${
        this.timeLists.find(item => item.value == this.curTimeV).label
      }`
    );
    this.getTransactions();
    this.changeColor = uni.getStorageSync("changeColor");
    console.log(this.$store.state.socket.websocketData);
    console.log(this.changeColor);
    this.getKlineHistory();
    if (!this.timer) {
      // this.setTimer();
    }
  },
  onHide() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  },
  onLoad() {}
};
</script>

<style lang="scss" scoped>
@mixin height {
  /* #ifndef APP-NVUE */
  height: 100%;
  /* #endif */
  /* #ifdef APP-NVUE */
  flex: 1;
  /* #endif */
}
.coinInfo {
  padding: 0 30rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .flexSub {
    flex: 1;
    .price {
      font-weight: 700;
      margin: 10rpx 0 !important;
      font-size: 40rpx;
    }
    .cusText {
      color: #666;
    }
    .currencyValue {
      margin-top: 10rpx !important;
      font-size: 24rpx;
      .cusText {
        margin-right: 10rpx !important;
      }
    }
    .inLabel {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 24rpx;
      .grayColor {
        color: #333;
      }
    }
  }
}
.periodWrap {
  position: relative;
  height: 64rpx;
  line-height: 64rpx;
  .periodItem {
    font-size: 24rpx;
    &.active {
      color: #1abb97;
    }
  }
  .periods {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    .periodItem,
    .more {
      flex: 1;
    }
  }
  .hidePeriods {
    position: absolute;
    top: 64rpx;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1082;
    height: 64rpx;
    line-height: 64rpx;
    background-color: #f6f6f6;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    .periodItem {
      width: 126rpx;
    }
  }
}
.echart {
  height: 700rpx;
  border-radius: 8rpx;
  #canvasLine {
    width: 100%;
    height: 100%;
  }
}
.header {
  height: 84rpx;
  padding: 0 32rpx;
  display: flex;
  align-items: center;
}
.menu {
  margin-right: 10rpx;
}
.text {
  font-size: 38rpx;
}
.popup-content {
  width: 80vw;
  height: calc(100vh - 64rpx);
  padding: 32rpx;
  display: flex;
  flex-direction: column;
  .scrollBox {
    flex: 1;
    overflow: scroll;
  }
  .title {
    font-size: 36rpx;
    font-weight: 700;
  }
  .flexSub {
    flex: 1;
  }
  .rankHeader {
    display: flex;
    font-size: 24rpx;
    margin-top: 20rpx;
    margin-bottom: 10rpx;
    .priceHead {
      width: 124rpx;
      text-align: center;
    }
  }
  .item {
    display: flex;
    align-items: center;
    height: 100rpx;
    .name {
      .nameCoi {
        font-size: 30rpx;
        font-weight: 500;
      }
      .nameCur {
        font-size: 24rpx;
      }
    }
    .price {
      text-align: center;
      font-size: 28rpx;
      width: 124rpx;
      font-weight: 500;
    }
    .changeWarp {
      display: flex;
      justify-content: flex-end;
      .change {
        min-width: 142rpx;
        height: 64rpx;
        border-radius: 8rpx;
        line-height: 64rpx;
        text-align: center;
        padding: 0 16rpx;
        font-weight: 500;
        font-size: 28rpx;
        background-color: rgba(62, 173, 93, 0.2);
        color: rgb(18, 184, 135);
      }
    }
  }
}
.tabsView {
  background: #f6f6f6;
  display: flex;
  height: 80rpx;
  align-items: center;
  margin: 0 30rpx 30rpx 30rpx;
  border-radius: 4rpx;
  position: relative;
  .item {
    flex: 1;
    text-align: center;
    font-size: 30rpx;
    &.active {
      color: rgb(26, 187, 151);
      font-weight: 700;
    }
  }
  .line {
    position: absolute;
    left: calc(25% - 20rpx);
    width: 40rpx;
    height: 6rpx;
    border-radius: 6rpx;
    background: rgb(26, 187, 151);
    transition-duration: 0.5s;
    bottom: 4rpx;
    &.t1 {
      left: calc(75% - 20rpx);
    }
  }
}
.tabsCont {
  padding-bottom: 280rpx;
  .noData {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 28rpx;
    color: #c0c4cc;
    margin-top: 80rpx;
    image {
      width: 328rpx;
      height: 328rpx;
      margin-bottom: 60rpx;
    }
  }
  .t1 {
  }
  .t2 {
    .item {
      margin: 0 30rpx 20rpx;
      padding-bottom: 20rpx;
      border-bottom: 1px solid rgba(184, 198, 216, 0.16) !important;
      .label {
        display: flex;
        height: 52rpx;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
}
.botBtn {
  position: fixed;
  display: flex;
  bottom: 150rpx;
  left: 0;
  background: #fff;
  right: 0;
  padding: 0 30rpx;
  justify-content: space-between;
  view {
    width: 48%;
    border-radius: 8rpx;
    color: #fff;
    height: 80rpx;
    background: rgb(233, 63, 79);
    text-align: center;
    line-height: 80rpx;
    font-size: 24rpx;
  }
}
.popupBottom {
  padding: 30rpx;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      font-size: 40rpx;
      font-weight: 700;
      text {
        padding-left: 20rpx;
      }
    }
    .right {
      font-size: 24rpx;
      color: #333;
    }
  }
  .contract {
    display: flex;
    flex-wrap: wrap;
    border-radius: 20rpx;
    padding: 20rpx 10rpx;
    border: 1px solid rgba(184, 198, 216, 0.16);
    margin: 30rpx 0;
    .item {
      opacity: 0.4;
      flex: 1;
      width: 31.3%;
      min-width: 31.3%;
      max-width: 31.3%;
      padding: 10rpx 0;
      margin: 10rpx 1%;
      font-size: 24rpx;
      border-radius: 8rpx;
      text-align: center;
      &.active {
        opacity: 1;
      }
      .time {
        padding-right: 10rpx;
      }
    }
  }
  .light {
    display: flex;
    justify-content: space-between;
    font-size: 24rpx;
  }
  .inputWarp {
    border: 1px solid rgba(184, 198, 216, 0.16);
    border-radius: 8rpx;
    padding: 0 20rpx;
    margin: 30rpx 0;
    ::v-deep {
      .uni-input {
        height: 78rpx;
        font-size: 28rpx;
      }
    }
  }
  .submit {
    font-size: 24rpx;
    color: #fff;
    height: 80rpx;
    line-height: 80rpx;
    color: #fff;
    text-align: center;
    border-radius: 8rpx;
    margin-top: 30rpx;
  }
}
</style>
