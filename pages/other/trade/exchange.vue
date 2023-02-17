<template>
  <view class="exchange">
    <uni-nav-bar
      :border="false"
      backgroundColor="#fff"
      fixed
      left-icon="left"
      @clickLeft="routeTo(1)"
    >
    </uni-nav-bar>
    <view class="exchangeTop">
      <view class="coinInfo" @click="toggle">
        <uni-icons type="list" size="48rpx"></uni-icons>
        <text class="font-36">{{ initData.symbolPretty }}</text>
        <view
          class="changeDown font-24"
          :style="{
            color: textColor(initData.priceChangePercent),
            backgroundColor: backGroundColor(initData.priceChangePercent),
          }"
          >{{ initData.priceChangePercent }}%</view
        >
      </view>
    </view>
    <view class="exchangeCon font-24">
      <view class="depInfo">
        <view class="conHeader">
          <view>
            <view>价格</view>
            <view>USDT</view>
          </view>
          <view>
            <view>
              <view>数量</view>
              <view>{{ initData.symbolPretty.split("/")[0] }}</view>
            </view>
          </view>
        </view>
        <view
          class="conItem"
          v-if="detailData && detailData.datas.asks.length > 0"
        >
          <view class="item" v-for="(item, index) in 5" :key="index">
            <view>{{
              delZero(detailData && detailData.datas.asks[index].price)
            }}</view>
            <view>{{
              delZero(detailData && detailData.datas.asks[index].quantity)
            }}</view>
          </view>
        </view>
        <view class="curPrice">
          <view :style="{ color: textColor(initData.priceChangePercent) }">{{
            delZero(initData.currentDaysClosePrice)
          }}</view>
          <view
            >≈{{
              detailData &&
              detailData.aggTrade &&
              delZero(detailData.aggTrade.tradePrice)
            }}USD</view
          >
        </view>
        <view class="conItem">
          <view class="item" v-for="(item, index) in 5" :key="index">
            <view>{{ delZero(detailData.datas.bids[index].price) }}</view>
            <view>{{ delZero(detailData.datas.bids[index].quantity) }}</view>
          </view>
        </view>
      </view>
      <view class="opPanel">
        <view class="opForm">
          <view class="opType tac">
            <view
              :class="['flexSub buy', opType == 'buy' ? 'active' : '']"
              :style="{ background: buyBackground('buy') }"
              @click="(opType = 'buy'), getBalance()"
              >买入</view
            >
            <view
              :class="['flexSub sell', opType == 'sell' ? 'active' : '']"
              :style="{ background: buyBackground('sell') }"
              @click="(opType = 'sell'), getBalance()"
              >卖出</view
            >
          </view>
          <view class="opInput">
            <input
              type="number"
              :placeholder="
                opType == 'buy'
                  ? '成交额(' + initData.symbolPretty.split('/')[0] + ')'
                  : '数量(' + initData.symbolPretty.split('/')[0] + ')'
              "
              placeholder-style="fontSize:28rpx"
              v-model="inputValue"
            />
          </view>
          <view class="opItem">
            <view>可用</view>
            <view
              >{{ balance || "--" }}
              {{
                opType == "buy"
                  ? initData.symbolPretty.split("/")[1]
                  : initData.symbolPretty.split("/")[0]
              }}</view
            >
          </view>
          <view class="opItem">
            <view>买入数量</view>
            <view
              >≈{{ buyNum }}
              {{
                opType == "buy"
                  ? initData.symbolPretty.split("/")[0]
                  : initData.symbolPretty.split("/")[1]
              }}</view
            >
          </view>
          <view class="quickCont">
            <view
              :class="['quickItem', key === index ? 'active' : '']"
              v-for="(item, index) in 4"
              :key="index"
              @click="(key = index), changeInputValue()"
              >{{ item * 25 }}%</view
            >
          </view>
          <view class="opItem">
            <view>手续费</view>
            <view
              >≈0.000000
              {{
                opType == "buy"
                  ? initData.symbolPretty.split("/")[0]
                  : initData.symbolPretty.split("/")[1]
              }}</view
            >
          </view>
        </view>
        <view
          class="opBtns"
          :style="{ background: buyBackground(opType) }"
          @click="buyAndsell()"
        >
          {{ opType == "buy" ? "买入" : "卖出" }}
        </view>
      </view>
    </view>
    <view class="bor"></view>
    <view
      :class="['hisTitle', scrollTop > domTop ? 'fiexDom' : '']"
      :style="{ top: scrollTop > domTop - 50 ? navbarHei + 'px' : '' }"
    >
      <view>历史订单</view>
    </view>
    <view class="list">
      <view class="item font-24" v-for="(item, index) in hisList" :key="index">
        <view class="head">
          <view class="left">
            <uni-icons
              :type="item.transType ? 'arrow-up' : 'arrow-down'"
              size="20"
              :color="iconColor(item.transType ? 'sell' : 'buy')"
            ></uni-icons
            >{{
              item.transType
                ? item.chargeFeeCurrency + "/" + item.transCurrency
                : item.transCurrency + "/" + item.chargeFeeCurrency
            }}
          </view>
          <view class="tar">
            <view>已完成</view>
            <view>01-09 09:07</view>
          </view>
        </view>
        <view class="label">
          <view>委托数量({{ initData.symbolPretty.split("/")[0] }})</view>
          <text>{{ item.transAmount }}</text>
        </view>
        <view class="label">
          <view>委托价格</view>
          <text>{{ item.hangupPrice }}</text>
        </view>
        <view class="label">
          <view>成交均价</view>
          <text>{{ item.transPrice }}</text>
        </view>
        <view class="label">
          <view>已成交({{ initData.symbolPretty.split("/")[0] }})</view>
          <text>{{ item.finishAmount }}</text>
        </view>
        <view class="label">
          <view>手续费({{ item.chargeFeeCurrency }})</view>
          <text>{{ item.chargeFeeRate }}</text>
        </view>
      </view>
    </view>
    <view
      class="toTop"
      :style="{ opacity: scrollTop > 300 ? 1 : 0 }"
      @click="goTop"
    >
      <image src="@/static/trade/toTop.png" mode="scaleToFill" />
    </view>

    <view style="position: relative; z-index: 10000">
      <uni-popup ref="popup" background-color="#fff">
        <view class="popup-content">
          <view class="title"> 期货 </view>
          <view class="rankHeader">
            <view class="flexSub">交易对</view>
            <view class="flexSub priceHead">最新价格</view>
            <view class="flexSub" style="text-align: right">涨跌幅</view>
          </view>
          <scroll-view scroll-y="true" class="scrollBox">
            <view
              class="item"
              v-for="(item, index) in C2CMarketData"
              :key="index"
              @click="change(item)"
            >
              <view class="name flexSub">
                <text class="nameCoi">{{
                  item.symbolPretty.split("/")[0]
                }}</text>
                <text class="nameCur"
                  >/{{ item.symbolPretty.split("/")[1] }}</text
                >
              </view>
              <view
                class="price flexSub"
                :style="{
                  color: textColor(item.priceChangePercent),
                }"
                >{{ delZero(item.currentDaysClosePrice) }}</view
              >
              <view class="changeWarp flexSub">
                <view
                  class="change"
                  :style="{
                    backgroundColor: backGroundColor(item.priceChangePercent),
                    color: textColor(item.priceChangePercent),
                  }"
                  >{{ item.priceChangePercent }}%</view
                >
              </view>
            </view>
          </scroll-view>
        </view>
      </uni-popup>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      key: "",
      navbarHei: 0,
      opacity: 0,
      domTop: 0,
      scrollTop: 0, //滚动距离
      dbId: "",
      changeColor: {},
      initData: {},
      detailData: {},
      dataLength: 0,
      C2CMarketData: [],
      opType: "buy",
      balance: "",
      inputValue: "",
      buyNum: 0.0,
      page: 1,
      num: 0,
      hisList: [],
    };
  },
  computed: {
    stroeChange() {
      return this.$store.state.socket.stroeChange;
    },
  },
  watch: {
    stroeChange: {
      handler: function (newVal, oldVal) {
        this.C2CMarketData = this.$store.state.socket.websocketData.C2CMarket;
        if (this.C2CMarketData) {
          this.initData = this.C2CMarketData.filter(
            (v) => v.dbId == this.dbId
          )[0];
        }
        if (this.$store.state.socket.websocketData.C2CDepth) {
          this.detailData =
            this.$store.state.socket.websocketData.C2CDepth[
              this.initData.symbol
            ];
          if (!this.domTop) {
            const query = uni.createSelectorQuery().in(this);
            setTimeout(() => {
              this.getBalance();
              query
                .select(".hisTitle")
                .boundingClientRect((data) => {
                  this.domTop = data.top;
                })
                .exec();
              query
                .select(".uni-navbar__content")
                .boundingClientRect((data) => {
                  this.navbarHei = data.height;
                })
                .exec();
            }, 50);
          }
        } else {
          this.$store.dispatch(
            "websocketSend",
            "ROOM_C2C@" + this.initData.symbol
          );
        }
        // if (!this.balance) {
        //   this.getBalance();
        // }
        if (this.detailData && this.detailData.datas) {
          this.dataLength = this.detailData.datas.asks.length;
        }
      },
      deep: true,
    },
  },
  methods: {
    change(item) {
      this.dbId = item.dbId;
      this.$store.dispatch("websocketSend", "ROOM_C2C@" + item.symbol);
      this.$refs.popup.close();
      setTimeout(() => {
        this.getBalance();
      },1000);
    },
    toggle() {
      this.$refs.popup.open("left");
    },
    changeInputValue() {
      this.inputValue = this.balance * (this.key + 1) * 0.25;
      this.buyNum = (
        this.inputValue *
        (1 / this.initData.currentDaysClosePrice)
      ).toFixed(8);
    },
    buyAndsell() {
      if (this.opType == "buy") {
        this.$api.trade
          .buy({
            userId: uni.getStorageSync("userInfo").id,
            moneyToTrans: {
              amount: this.inputValue,
              currency: this.initData.symbolPretty.split("/")[0],
            },
            priceMoney: {
              amount: this.initData.currentDaysClosePrice,
              currency: this.initData.symbolPretty.split("/")[1],
            },
          })
          .then((res) => {
            uni.showToast({
              icon: "none",
              duration: 4000,
              title: "交易成功",
            });
            this.getTransactions();
          });
      } else {
        this.$api.trade
          .sell({
            userId: uni.getStorageSync("userInfo").id,
            moneyToTrans: {
              amount: this.inputValue,
              currency: this.initData.symbolPretty.split("/")[0],
            },
            priceMoney: {
              amount: this.initData.currentDaysClosePrice,
              currency: this.initData.symbolPretty.split("/")[1],
            },
          })
          .then((res) => {
            uni.showToast({
              icon: "none",
              duration: 4000,
              title: "交易成功",
            });
            this.getTransactions();
          });
      }
    },
    getBalance() {
      this.$api.trade
        .getBalanceOrAssets({
          type: 1,
          currency:
            this.opType == "buy"
              ? this.initData.symbolPretty.split("/")[1]
              : this.initData.symbolPretty.split("/")[0],
          walletType: 1,
        })
        .then((res) => {
          this.balance = res.amount - res.frozenAmount;
        });
    },
    getTransactions() {
      this.$api.trade
        .getTransactions({
          page: this.page,
          pageSize: 10,
          walletType: 1,
        })
        .then((res) => {
          this.hisList = res.list;
        });
    },
    backGroundColor(value) {
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
    textColor(value) {
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
    buyBackground(type) {
      if (type == "buy" && this.opType == "buy") {
        if (this.changeColor.value == 0 || !this.changeColor) {
          return "rgb(233, 63, 79)";
        } else {
          return "rgb(18, 184, 135)";
        }
      } else if (type == "sell" && this.opType == "sell") {
        if (this.changeColor.value == 1) {
          return "rgb(233, 63, 79)";
        } else {
          return "rgb(18, 184, 135)";
        }
      }
    },
    iconColor(type) {
      if (type == "buy") {
        if (this.changeColor.value == 0 || !this.changeColor) {
          return "rgb(233, 63, 79)";
        } else {
          return "rgb(18, 184, 135)";
        }
      } else if (type == "sell") {
        if (this.changeColor.value == 1) {
          return "rgb(233, 63, 79)";
        } else {
          return "rgb(18, 184, 135)";
        }
      }
    },
    goTop() {
      uni.pageScrollTo({
        scrollTop: 0,
        duration: 300,
      });
    },
  },
  onPageScroll(e) {
    this.scrollTop = e.scrollTop;
  },
  onLoad(options) {
    this.dbId = options.dbId;
    this.changeColor = uni.getStorageSync("changeColor");
    if (this.$store.state.socket.websocketData.C2CMarket) {
      this.initData = this.$store.state.socket.websocketData.C2CMarket.filter(
        (v) => v.dbId == this.dbId
      )[0];
      this.$store.dispatch("websocketSend", "ROOM_C2C@" + this.initData.symbol);
      this.getBalance();
    }
    setInterval(() => {
      //   this.getBalance();
    }, 5000);
    this.getTransactions();
  },
};
</script>
<style lang="scss" scoped>
.flexSub {
  flex: 1;
}
.exchange {
  .exchangeTop {
    padding: 0 30rpx;
    .coinInfo {
      display: flex;
      text {
        font-weight: 700;
      }
      .changeDown {
        padding: 4rpx 10rpx;
        margin-left: 10rpx;
        border-radius: 6rpx;
        color: rgb(18, 184, 135);
        background-color: rgba(62, 173, 93, 0.2);
      }
    }
  }
  .exchangeCon {
    display: flex;
    padding: 0 30rpx;
    margin-top: 30rpx;
    .depInfo {
      width: 300rpx;
      .conHeader {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0 10rpx;
      }
      .conItem {
        .item {
          display: flex;
          line-height: 44rpx;
          justify-content: space-between;
        }
      }
      .curPrice {
        margin: 15rpx 0;
      }
    }
    .opPanel {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 20rpx;
      .opType {
        display: flex;
        .flexSub {
          flex: 1;
          height: 70rpx;
          line-height: 70rpx;
          position: relative;
          &.buy {
            &.active {
              border-radius: 8rpx;
            }
            &::after {
              content: " ";
              position: absolute;
              right: 0;
              bottom: 0;
              width: 0;
              height: 0;
              border-bottom: 36px solid #f6f6f6;
              border-left: 10px solid transparent;
            }
          }
          &.sell {
            &.active {
              border-radius: 8rpx;
            }
            &::after {
              content: " ";
              position: absolute;
              left: 0;
              top: 0;
              width: 0;
              height: 0;
              border-top: 36px solid #f6f6f6;
              border-right: 10px solid transparent;
            }
          }
        }
      }
      .opInput {
        background: #f6f6f6;
        padding: 20rpx;
        border-radius: 8rpx;
        margin: 20rpx 0;
      }
      .opItem {
        display: flex;
        justify-content: space-between;
        margin: 20rpx 0;
      }
      .quickCont {
        display: flex;
        justify-content: space-between;
        .quickItem {
          border-radius: 8rpx;
          border: 1px solid hsla(0, 0%, 100%, 0.5);
          padding: 6rpx 14rpx;
          &.active {
            color: #3771e2;
            border-color: #3771e2;
          }
        }
      }
      .opBtns {
        height: 80rpx;
        line-height: 80rpx;
        text-align: center;
        color: #fff;
        background-color: rgb(233, 63, 79);
        border-radius: 8rpx;
      }
    }
  }
  .bor {
    background-color: rgb(246, 248, 252);
    height: 10px;
    margin-top: 30rpx;
    margin-bottom: 0px;
  }
  .hisTitle {
    padding: 0 30rpx;
    background: #fff;
    &.fiexDom {
      position: fixed;
      right: 0;
      left: 0;
    }
    & > view {
      position: relative;
      font-size: 30rpx;
      display: inline-block;
      height: 78rpx;
      line-height: 78rpx;
      font-weight: 500;
      &::after {
        content: " ";
        position: absolute;
        bottom: 0;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        width: 40%;
        height: 6rpx;
        background: #1abb97;
      }
    }
  }
  .list {
    padding: 0 30rpx;
    .item {
      padding: 30rpx 0;
      border-bottom: 1px solid rgba(184, 198, 216, 0.16);
      .head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        .left {
          display: flex;
          align-items: center;
        }
      }
      .label {
        display: flex;
        justify-content: space-between;
        line-height: 48rpx;
        text {
          font-weight: 700;
        }
      }
    }
  }
  .toTop {
    width: 80rpx;
    height: 80rpx;
    z-index: 999;
    position: fixed;
    bottom: 80rpx;
    right: 24rpx;
    transition-duration: 0.3s;
    transition-property: opacity;
    image {
      width: 80rpx;
      height: 80rpx;
    }
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
}
</style>