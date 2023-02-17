<template>
  <view class="page">
    <headtop type="single" :indexpage="1"></headtop>
    <view class="main">
      <view class="boxLeft">
        <view class="search">
          <el-input placeholder="Search" prefix-icon="el-icon-search" v-model="search"></el-input>
        </view>
        <el-table
          :data="
            C2CMarketData.filter(
              (data) =>
                !search ||
                data.name.toLowerCase().includes(search.toLowerCase())
            )
          "
          max-height="720"
          style="width: 100%"
        >
          <el-table-column prop="date" label="交易对" width="124">
            <template slot-scope="scope">
              <view class="name">
                <image
                  style="width: 20px; height: 20px; margin-right: 10px"
                  v-if="!scope.row.defaultSrc"
                  :src="
                    '../../../../static/trade/' +
                    scope.row.symbolPretty.split('/')[0] +
                    '.png'
                  "
                  @error="ErrSrc($event, scope.row)"
                />
                <image
                  v-else
                  src="@/static/trade/default.png"
                  style="width: 20px; height: 20px; margin-right: 10px"
                />
                <text>
                  {{ scope.row.symbolPretty.split("/")[0] }}/{{
                  scope.row.symbolPretty.split("/")[1]
                  }}
                </text>
              </view>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="价格" sortable>
            <template slot-scope="scope">
              <span style="color: rgb(18, 184, 134)">
                {{
                delZero(scope.row.currentDaysClosePrice)
                }}
              </span>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="涨跌幅" sortable>
            <template slot-scope="scope">
              <span style="color: rgb(18, 184, 134)">
                {{
                scope.row.priceChangePercent
                }}
              </span>
            </template>
          </el-table-column>
        </el-table>
      </view>
      <view class="boxCenter">
        <div class="coin-msg">
          <div class="coin-name">{{ initData.symbolPretty }}</div>
          <div class="coin-price fs18" style="color: rgb(18, 184, 134)">
            {{ delZero(initData.currentDaysClosePrice) }}
            <div class="fs12 color666">
              ≈{{
              detailData &&
              detailData.aggTrade &&
              delZero(detailData.aggTrade.tradePrice)
              }}
              USD
            </div>
          </div>
          <div class="item">
            <div class="title">涨跌幅</div>
            <div class="value" style="color: rgb(18, 184, 134)">{{ initData.priceChangePercent }}%</div>
          </div>
          <div class="item">
            <div class="title">高</div>
            <div class="value">{{ delZero(initData.highPrice) }}</div>
          </div>
          <div class="item">
            <div class="title">低</div>
            <div class="value">{{ delZero(initData.lowPrice) }}</div>
          </div>
          <div class="item">
            <div class="title">额</div>
            <div class="value">{{ initData.totalTradedQuoteAssetVolume }}</div>
          </div>
        </div>
        <!--  -->
        <div class="switch-chart flex">
          <div
            :class="['item','cursor',item.value ==curTimeV? 'active':'']"
            v-for="(item,index) in timeLists"
            :key="index"
            @click="changeTimeV(item.value)"
          >{{ item.name }}</div>
        </div>
        <!-- k线图 -->
        <div class="echart-wrap">
          <echarts
            :option="option"
            style="height: 100%; width: 100%"
            ref="echart"
            @click="echartClick"
          ></echarts>
        </div>
        <!--  -->
        <div class="bottom-tabs">
          <el-tabs value="first">
            <el-tab-pane label="币币交易" name="first">
              <el-form class="form" :rules="rules" :model="form">
                <div class="pro-msg flex">
                  <div class="flex align-center flex1">
                    <span class="label">产品名称</span>
                    <span class="title">BTC</span>
                  </div>
                  <div class="flex align-center flex1">
                    <span class="label">价格</span>
                    <span class="price" style="color: rgb(18, 184, 134)">20981.87</span>
                    USDT
                  </div>
                </div>
                <div class="direction">
                  <span @click="changeMe('enter')" :class="methods == 'enter' ? 'active' : ''">买入</span>
                  <span @click="changeMe('out')" :class="methods == 'out' ? 'active' : ''">卖出</span>
                </div>
                <el-form-item class="form-item form-item-moeny" prop="money">
                  <el-input v-model="form.money" placeholder="0"></el-input>
                  <span class="label">{{ methods == "enter" ? "买入" : "卖出" }}金额</span>
                </el-form-item>
                <el-form-item class="form-item">
                  <el-slider v-model="form.num"></el-slider>
                </el-form-item>
                <div class="flex balance">
                  <span>
                    可用: 0{{ methods == "enter" ? "USDT" : "BTC" }}
                    <span
                      class="el-icon-sort cursor primary"
                    >划转</span>
                  </span>
                </div>
                <el-button type="primary" style="width: 100%">登录/注册</el-button>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </div>
      </view>
      <view class="boxRight">
        <el-table
          :data="detailData.datas.bids"
          style="width: 100%"
          :default-sort="{ prop: 'date', order: 'descending' }"
        >
          <el-table-column prop="price" label="价格(USDT)">
            <template slot-scope="scope">
              <span style="color: rgb(250, 77, 86)">
                {{
                delZero(scope.row.price)
                }}
              </span>
            </template>
          </el-table-column>
          <el-table-column prop="quantity" :label="`数量(${initData.symbolPretty.split('/')[0]})`">
            <template slot-scope="scope">
              <span style="color: rgb(250, 77, 86)">
                {{
                scope.row.quantity
                }}
              </span>
            </template>
          </el-table-column>
          <el-table-column prop="sum" :label="`累计(${initData.symbolPretty.split('/')[0]})`">
            <template slot-scope="scope">
              <view class="sum-box">
                <text>{{ scope.row.total }}</text>
                <view class="bg" style="width: 230px; background: rgb(250, 77, 86)"></view>
              </view>
            </template>
          </el-table-column>
        </el-table>
        <div class="curprice">
          <span class="fs18">{{ delZero(initData.currentDaysClosePrice) }} USDT</span>
          <span class="fs14">
            ≈{{
            detailData &&
            detailData.aggTrade &&
            delZero(detailData.aggTrade.tradePrice)
            }}USD
          </span>
        </div>
        <el-table
          :data="detailData.datas.asks"
          style="width: 100%"
          :default-sort="{ prop: 'date', order: 'descending' }"
          :showHeader="false"
        >
          <el-table-column prop="price" label="Price(USDT)">
            <template slot-scope="scope">
              <span style="color: rgb(250, 77, 86)">
                {{
                delZero(scope.row.price)
                }}
              </span>
            </template>
          </el-table-column>
          <el-table-column prop="quantity" label="Quantity(BTC)"></el-table-column>
          <el-table-column prop="sum" label="Sum(BTC)">
            <template slot-scope="scope">
              <view class="sum-box">
                <text>{{ scope.row.total }}</text>
                <view class="bg" style="width: 230px; background: rgb(18, 184, 134)"></view>
              </view>
            </template>
          </el-table-column>
        </el-table>
      </view>
    </view>

    <view class="bottom-table">
      <el-tabs value="first">
        <el-tab-pane label="历史订单" name="first">
          <el-table :data="historyOrderList" style="width: 100%">
            <el-table-column prop="price" label="创建时间" align="center"></el-table-column>
            <el-table-column prop="quantity" label="产品名称" align="center"></el-table-column>
            <el-table-column prop="sum" label="交易方向" align="center"></el-table-column>
            <el-table-column prop="price" label="价格" align="center"></el-table-column>
            <el-table-column prop="quantity" label="成交数量" align="center"></el-table-column>
            <el-table-column prop="sum" label="成交金额" align="center"></el-table-column>
            <el-table-column prop="sum" label="手续费" align="center"></el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </view>
    <foot></foot>
  </view>
</template>

<script>
import Echarts from "@/components/echarts/echarts.vue";
import {
  // mapState,
  mapGetters
} from "vuex";
export default {
  data() {
    return {
      C2CMarketData: [],
      initData: {},
      detailData: {},
      historyOrderList: [],
      search: "",
      option: {
        grid: {
          left: "0",
          bottom: "35",
          top: "10"
        },
        dataZoom: [
          {
            type: "inside",
            start: 50,
            end: 100
          },

          // {
          //   type: "inside",
          //   start: 80,
          //   end: 100,
          //   yAxisIndex: 0
          // }
        ],
        tooltip: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
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
            margin: 10.5
          },
          data: []
        },
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
            // markLine: {
            //   symbol: ["none", "none"],
            //   silent: false,
            //   label: {
            //     backgroundColor: "red",
            //     color: "#fff",
            //     padding: [2, 4]
            //   },
            //   lineStyle: {
            //     type: "dashed"
            //   },
            //   data: [
            //     {
            //       yAxis: 20
            //     }
            //   ]
            // },
            data: []
          },
          {
            data: [],
            type: "bar",

            itemStyle: {
              opacity: 0.7
            }
          },
          {
            type: "line",
            symbol: "none",
            data: []
          }
        ]
      },
      timeLists: [
        {
          name: "1M",
          value: 1,
          label:'1m'
        },
        {
          name: "5M",
          value: 5,
          label:'5m'
        },
        {
          name: "15M",
          value: 15,
          label:'15m'
        },
        {
          name: "30M",
          value: 30,
          label:'30m'
        },
        {
          name: "1H",
          value: 60,
          label:'1h'
        },
        {
          name: "6H",
          value: 360,
          label:'6h'
        },
        {
          name: "1D",
          value: 1440,
          label:'1d'
        },
        {
          name: "1W",
          value: 10080,
          label:'1w'
        },
        {
          name: "1M",
          value: 44640,
          label:'1M'
        }
      ],
      curTimeV: 1,
      kData: {},
      timer: null,

      methods: "enter",
      form: {
        num: 0,
        money: 0
      },
      rules: {
        money: [{ required: true, message: "请输入买入金额", trigger: "blur" }]
      }
    };
  },

  computed: {
    //借助mapGetters生成计算属性：
    ...mapGetters("user", ["getUser"]),
    stroeChange() {
      return this.$store.state.socket.stroeChange;
    }
  },
  watch: {
    stroeChange: {
      handler: function(newVal, oldVal) {
        this.initData = this.$store.state.socket.websocketData.C2CMarket.filter(
          v => v.dbId == this.dbId
        )[0];
        this.C2CMarketData = this.$store.state.socket.websocketData.C2CMarket;
        // console.log(this.initData)
        // console.log(this.initData.symbol)
        if (this.$store.state.socket.websocketData.C2CDepth) {
          this.detailData = this.$store.state.socket.websocketData.C2CDepth[
            this.initData.symbol
          ];
        } else {
          this.$store.dispatch(
            "websocketSend",
            "ROOM_C2C@" + this.C2CMarketData[0].symbol
          );
        }
        if (this.detailData && this.detailData.datas) {
          this.dataLength = this.detailData.datas.asks.length;
        }
        let websocketData = this.$store.state.socket.websocketData;
        if (websocketData.C2CKline) {
          this.kData = websocketData.C2CKline.ETHUSDT;
        }
      },
      deep: true
    },
    kData: {
      deep: true,
      handler() {
        // this.setKLineOption();
      }
    }
  },
  onLoad() {
    this.C2CMarketData = this.$store.state.socket.websocketData.C2CMarket;
    this.dbId = this.C2CMarketData[0].dbId;
    this.$store.dispatch(
      "websocketSend",
      "ROOM_C2C@" + this.C2CMarketData[0].symbol
    );
    this.getKlineHistory()
    if (!this.timer) {
      // this.setTimer();
    }
  },
  methods: {
    getKlineHistory(){
      let startTime = new Date('2023-02-01').getTime()
      let endTime = new Date('2023-02-05').getTime()
      let dataArr =[]// k线数据
      let dateArr = [] // k线日期
      this.$api.kline.getKlineHistory({
        startDate:startTime,
        endDate:endTime,
        symbol:'BTCUSDT',
        marketType:0,
        interval:this.timeLists.find(item=>item.value == this.curTimeV).label
      }).then(res=>{
        res.forEach(item=>{
          dataArr.push([
          item[1],
          item[4],
          item[3],
          item[2]
          ])
          let time = this.getDateFormat(item[0])
          dateArr.push(time)
        })
        // this.$set(this.option.series[0].data, 0, arr);
        this.option.series[0].data = dataArr
        this.option.xAxis.data = dateArr
        this.setKLineOption();
        this.setTimer();
      })
    },
    ErrSrc(e, item) {
      this.$set(item, "defaultSrc", true);
      // this.ImgSrc = this.errSrc;
    },
    echartClick(param) {
      console.log(param);
    },
    changeMe(val) {
      this.methods = val;
      if (val == "enter") {
        this.rules.money[0].message = "请输入买入金额";
      } else {
        this.rules.money[0].message = "请输入卖出金额";
      }
    },
    setKLineOption() {
      let arr = [
        this.kData.open,
        this.kData.close,
        this.kData.low,
        this.kData.high
      ];
      let dataArr = [...this.option.series[0].data,arr]
      this.option.series[0].data = dataArr
      // this.$set(this.option.series[0].data, 0, arr);
      // this.option.xAxis.data[0] = this.getCurTime();
      let date = this.getDateFormat(new Date().valueOf())
      let dateArr = [...this.option.xAxis.data,date]
      this.option.xAxis.data =dateArr
    },
    changeTimeV(val) {
      this.curTimeV = val;
      this.setKLineOption();
      this.setTimer();
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
  onHide() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  margin-top: 6px;
  .flex {
    display: flex;
  }
  .flex1 {
    flex: 1;
  }
  .align-center {
    align-items: center;
  }
  .primary {
    color: #1abb97;
  }
  & > view {
    color: #b0b8db;
    height: 780px;
    background: #fff;
    &.boxLeft {
      width: 320px;
      margin-right: 6px;
      .search {
        padding: 12px 10px 8px 10px;
        ::v-deep {
          .el-input__inner {
            border-radius: 100px;
            height: 36px;
          }
        }
        line-height: 36px;
      }
    }
    &.boxCenter {
      flex: 1;
      .coin-msg {
        padding: 6px 10px;
        display: flex;
        align-items: center;
        .coin-name {
          margin-right: 20px;
          color: #333;
          font-size: 18px;
        }
        .item {
          font-size: 12px;
          margin-left: 20px;
          color: #333;
          .title {
            color: #999;
            margin-bottom: 4px;
          }
        }
      }
      .switch-chart {
        display: flex;
        padding: 0 6px;
        .item {
          padding: 0 8px;
          height: 24px;
          line-height: 24px;
          font-size: 14px;
          &.active {
            color: #1abb97;
            background: #e8eaf1;
          }
        }
      }
      .echart-wrap {
        height: 360px;
      }
      .bottom-tabs {
        display: flex;
        border-top: 6px solid #eef1f5;
        color: #333;
        .form {
          padding: 0 20px;
        }
        .pro-msg {
          padding: 10px 0;
          .label {
            font-size: 12px;
            margin-right: 20px;
          }
          .price,
          .title {
            font-size: 16px;
            font-weight: 800;
          }
        }
        .direction {
          display: flex;
          margin: 10px 0 20px 0;
          span {
            display: inline-block;
            flex: 1;
            cursor: pointer;
            border-radius: 3px;
            padding: 8px;
            text-align: center;
            border: 1px solid #e6ecf2;
            color: #999;
            &.active {
              border-color: #00d3ad;
              color: #00d3ad;
              font-weight: 800;
            }
            &:not(:first-child) {
              margin-left: 20px;
            }
          }
        }
        .form-item {
          position: relative;
          ::v-deep {
            .el-input__inner {
              padding-left: 140px;
            }
            .el-slider__button {
              border-color: #1abb97;
            }
          }
          .label {
            left: 10px;
            top: 0;
            color: #666;
            position: absolute;
          }
          &-moeny {
            margin-bottom: 4px;
          }
        }
        .balance {
          font-size: 12px;
          margin: 20px 0 18px 0;
          span {
            flex: 1;
            &:last-child {
              text-align: right;
            }
          }
        }
      }
    }
    &.boxRight {
      width: 330px;
      margin-left: 6px;
      .curprice {
        padding: 14px 8px;
        color: #333;
        .fs18 {
          font-size: 18px;
        }
        .fs14 {
          font-size: 14px;
          color: #666;
        }
      }
    }
  }
  .fs18 {
    font-size: 18px;
  }
  .fs12 {
    font-size: 12px;
  }
  .color666 {
    color: #666;
  }
}
.bottom-table {
  background: #fff;
}
.el-table {
  ::v-deep {
    td.el-table__cell,
    th.el-table__cell.is-leaf {
      font-size: 12px;
      border: none;
      height: 23px;
      line-height: 23px;
      padding: 6px 0 !important;
    }
    .descending .sort-caret.descending {
      border-top-color: #1abb97;
    }
    .ascending .sort-caret.ascending {
      border-bottom-color: #1abb97;
    }
    td,
    th {
      color: #61688a;
    }
    td {
      padding: 6px 0 !important;
    }
    .el-table__row {
      position: relative;
    }
  }
  &::before {
    display: none;
  }
  .name {
    display: flex;
    align-items: center;
  }
  .sum-box {
    .bg {
      position: absolute;
      height: 100%;
      opacity: 0.1;
      top: 0;
      right: 0;
    }
  }
}
::v-deep {
  .el-tabs {
    flex: 1;
  }
  .el-tabs__item {
    height: 30px;
    line-height: 30px;
    font-size: 13px;
  }
  .el-tabs__nav {
    padding-left: 10px;
  }
  .el-tabs__header .el-tabs__active-bar {
    left: 10px;
  }
  .el-dropdown-menu__item:focus,
  .el-dropdown-menu__item:not(.is-disabled):hover,
  .el-tabs__item.is-active {
    color: #1abb97;
  }
  .el-tabs__active-bar,
  .el-slider__bar {
    background-color: #1abb97;
  }
  .el-tabs__header {
    padding: 4px;
  }
  .el-button--primary {
    height: 48px;
    width: 100%;
    background-color: #1abb97;
  }
  .el-button--primary,
  .el-input__inner:active,
  .el-input__inner:focus,
  .el-input__inner:hover,
  .el-textarea__inner:active,
  .el-textarea__inner:focus,
  .el-textarea__inner:hover {
    border-color: #1abb97;
  }
}
</style>
