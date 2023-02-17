<template>
  <view class="page">
    <headtop type="single" :indexpage="2"></headtop>
    <view class="main">
      <view class="boxLeft">
        <view class="search">
          <el-input placeholder="搜索" prefix-icon="el-icon-search" v-model="search"></el-input>
        </view>
        <el-table
          :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
          max-height="320"
          style="width: 100%"
          :default-sort="{prop: 'date', order: 'descending'}"
        >
          <el-table-column prop="date" label="交易对" width="124">
            <template slot-scope="scope">
              <view class="name">
                <image
                  :src="scope.row.img"
                  mode="scaleToFill"
                  style="width: 20px; height: 20px; margin-right: 10px;"
                />
                <text>{{ scope.row.name }}</text>
              </view>
            </template>
          </el-table-column>
          <el-table-column prop="price" label="价格" sortable>
            <template slot-scope="scope">
              <span style="color: rgb(18, 184, 134);">{{ scope.row.price }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="涨跌幅" sortable>
            <template slot-scope="scope">
              <span style="color: rgb(18, 184, 134);">{{ scope.row.change }}</span>
            </template>
          </el-table-column>
        </el-table>
      </view>
      <view class="boxCenter">
        <div class="coin-msg">
          <div class="coin-name">BTC/USDT</div>
          <div class="coin-price fs18" style="color: rgb(18, 184, 134);">
            18229.65
            <div class="fs12 color666">≈18229.65 USD</div>
          </div>
          <div class="item">
            <div class="title">涨跌幅</div>
            <div class="value" style="color: rgb(18, 184, 134);">+4.807%</div>
          </div>
          <div class="item">
            <div class="title">高</div>
            <div class="value">18385.71</div>
          </div>
          <div class="item">
            <div class="title">低</div>
            <div class="value">17315.6</div>
          </div>
          <div class="item">
            <div class="title">额</div>
            <div class="value">379232.34343</div>
          </div>
        </div>
        <!--  -->
        <div class="switch-chart">
          <div
            :class="['item','cursor',item.value ==curTimeV? 'active':'']"
            v-for="(item,index) in timeLists"
            :key="index"
            @click="changeTimeV(item.value)"
          >{{ item.name }}</div>
        </div>
        <!-- k线图 -->
        <div class="echart-wrap"></div>
        <!--  -->
        <div class="bottom-tabs">
          <el-tabs value="first">
            <el-tab-pane label="期货交易" name="first">
              <div class="flex">
                <div class="contract-list">
                  <span class="no-msg">
                    <button type="button" class="el-button el-button--text">
                      <span>登录</span>
                    </button>
                    <span>查看合约</span>
                  </span>
                </div>
                <div class="spliter"></div>
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
                    <span @click="changeMe('enter')" :class="methods == 'enter' ? 'active' : ''">看涨</span>
                    <span @click="changeMe('out')" :class="methods == 'out' ? 'active' : ''">看跌</span>
                  </div>
                  <el-form-item class="form-item form-item-moeny" prop="money">
                    <el-input v-model="form.money" placeholder="0"></el-input>
                    <span class="label">买入金额</span>
                  </el-form-item>
                  <div class="flex balance">
                    <span>
                      可用: 0{{ methods == "enter" ? "USDT" : "BTC" }}
                      <span
                        class="el-icon-sort cursor primary"
                      >划转</span>
                      <span>最少买入-- (USDT)</span>
                    </span>
                  </div>
                  <el-button type="primary" style="width: 100%">登录/注册</el-button>
                </el-form>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </view>
      <view class="boxRight">
        <el-table
          :data="tableData2"
          style="width: 100%"
          :default-sort="{prop: 'date', order: 'descending'}"
        >
          <el-table-column prop="price" label="价格(USDT)">
            <template slot-scope="scope">
              <span style="color: rgb(250, 77, 86);">{{ scope.row.price }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="quantity" label="数量(BTC)"></el-table-column>
          <el-table-column prop="sum" label="累计(BTC)">
            <template slot-scope="scope">
              <view class="sum-box">
                <text>{{ scope.row.sum }}</text>
                <view class="bg" style="width:230px;background:rgb(250, 77, 86)"></view>
              </view>
            </template>
          </el-table-column>
        </el-table>
        <div class="curprice">
          <span class="fs18">18224.09 USDT</span>
          <span class="fs14">≈18224.09 USD</span>
        </div>
        <el-table
          :data="tableData2"
          style="width: 100%"
          :default-sort="{prop: 'date', order: 'descending'}"
          :showHeader="false"
        >
          <el-table-column prop="price" label="Price(USDT)">
            <template slot-scope="scope">
              <span style="color: rgb(250, 77, 86);">{{ scope.row.price }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="quantity" label="Quantity(BTC)"></el-table-column>
          <el-table-column prop="sum" label="Sum(BTC)">
            <template slot-scope="scope">
              <view class="sum-box">
                <text>{{ scope.row.sum }}</text>
                <view class="bg" style="width:230px;background:rgb(18, 184, 134)"></view>
              </view>
            </template>
          </el-table-column>
        </el-table>
      </view>
    </view>
    <view class="bottom-table">
      <el-tabs v-model="bomTabs">
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
        <el-tab-pane label="在持订单" name="second">
          <el-table :data="historyOrderList" style="width: 100%">
            <el-table-column prop="price" label="创建时间" align="center"></el-table-column>
            <el-table-column prop="quantity" label="产品名称" align="center"></el-table-column>
            <el-table-column prop="sum" label="交易方向" align="center"></el-table-column>
            <el-table-column prop="price" label="价格" align="center"></el-table-column>
            <el-table-column prop="sum" label="成交金额" align="center"></el-table-column>
            <el-table-column prop="sum" label="剩余时间" align="center"></el-table-column>
            <el-table-column prop="sum" label="盈亏（USDT）" align="center"></el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </view>
    <foot></foot>
  </view>
</template>
  
  <script>
import {
  // mapState,
  mapGetters
} from "vuex";
export default {
  data() {
    return {
      tableData: [
        {
          img: require("@/static/qzo762k.png"),
          name: "BTC/USDT",
          price: "18179.39",
          change: "+4.3%"
        },
        {
          img: require("@/static/qzo762k.png"),
          name: "ETH/USDT",
          price: "1396.31",
          change: "+4.7%"
        }
      ],
      tableData2: [
        {
          price: "18179.39",
          quantity: " 0.000690 ",
          sum: " 2.638280 "
        },
        {
          price: "18179.39",
          quantity: " 0.000690 ",
          sum: " 2.638280 "
        },
        {
          price: "18179.39",
          quantity: " 0.000690 ",
          sum: " 2.638280 "
        },
        {
          price: "18179.39",
          quantity: " 0.000690 ",
          sum: " 2.638280 "
        },
        {
          price: "18179.39",
          quantity: " 0.000690 ",
          sum: " 2.638280 "
        },
        {
          price: "18179.39",
          quantity: " 0.000690 ",
          sum: " 2.638280 "
        },
        {
          price: "18179.39",
          quantity: " 0.000690 ",
          sum: " 2.638280 "
        },
        {
          price: "18179.39",
          quantity: " 0.000690 ",
          sum: " 2.638280 "
        },
        {
          price: "18179.39",
          quantity: " 0.000690 ",
          sum: " 2.638280 "
        },
        {
          price: "18179.39",
          quantity: " 0.000690 ",
          sum: " 2.638280 "
        }
      ],
      search: "",

      timeLists: [
        {
          name: "1M",
          value: 1
        },
        {
          name: "5M",
          value: 5
        },
        {
          name: "15M",
          value: 15
        },
        {
          name: "30M",
          value: 30
        },
        {
          name: "1H",
          value: 60
        },
        {
          name: "6H",
          value: 360
        },
        {
          name: "1D",
          value: 1440
        },
        {
          name: "1W",
          value: 10080
        },
        {
          name: "1M",
          value: 44640
        }
      ],
      curTimeV: 1,
      kData: {},
      form: {
        num: 0,
        money: 0
      },
      rules: {
        money: [{ required: true, message: "请输入买入金额", trigger: "blur" }]
      },
      methods: "",
      bomTabs:'first'
    };
  },

  computed: {
    //借助mapGetters生成计算属性：
    ...mapGetters("user", ["getUser"])
  },

  onLoad() {},
  methods: {
    changeMe(val) {
      this.methods = val;
    },
    setKLineOption() {
      let arr = [
        this.kData.open,
        this.kData.close,
        this.kData.low,
        this.kData.high
      ];
      this.$set(this.option.series[0].data, 0, arr);
      this.option.xAxis.data[0] = this.getCurTime();
    },
    changeTimeV(val) {
      this.curTimeV = val;
      //   this.setKLineOption()
      //   this.setTimer()
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
        .contract-list {
          position: relative;
          padding: 0 20px;
          text-align: center;
          height: 274px;
          min-width: 300px;
          .no-msg {
            margin-top: 100px;
            display: inline-block;
            font-size: 12px;
            ::v-deep {
              .el-button {
                font-size: 14px;
                &::after {
                  display: none;
                }
              }
              .el-button--text,
              .el-button--text:focus,
              .el-button--text:hover {
                color: #1abb97;
              }
            }
          }
        }
        .spliter:after {
          content: "";
          display: block;
          width: 1px;
          height: 240px;
          border-left: 1px dashed #e6ecf2;
          margin: 0 10px;
        }
        .form {
          padding: 0 20px;
          flex: 1;
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
      min-width: 330px;
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
  