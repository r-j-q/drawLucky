<template>
	<view class="">
		<view class="content_app">
			<!-- 顶部 -->
			<view class="">
				<view class="title-row-list">
					<view class="font700 row-list-style">
						<uni-icons type="list" size="20" @click="delBankCard"></uni-icons>
						<text>BTC/USDT</text> <text
							class="z-d-l">-4.741%</text> </view>
					<view class="centerColor fontS1 textC"></view>
					<view class="rightColor fontS1 textR">
						<uni-icons type="more-filled" size="20" @click="delBankCard"></uni-icons>
						 
						  
					</view>
				</view>
			</view>
			<view class="dis-row-sp">
				<view class="dis-row-sp-col">
					<view class="dis-row-sp-l">
						<view class="dis-row-sp-l-pl-top" :style="{width:WH}"> </view>
						<view class="s_1 s_4"> 0.0222 </view>
						<view class="s_2"> 566222 </view>
					</view>
					<view class="dis-row-sp-l">
						<view class="dis-row-sp-l-pl-top" :style="{width:WH}"> </view>
						<view class="s_1 s_4"> 0.0222 </view>
						<view class="s_2"> 566222 </view>
					</view>
					<view class="dis-row-sp-l">
						<view class="dis-row-sp-l-pl-top" :style="{width:WH}"> </view>
						<view class="s_1 s_4"> 0.0222 </view>
						<view class="s_2 "> 566222 </view>
					</view>
					<view class="dis-row-sp-l">
						<view class="dis-row-sp-l-pl-top" :style="{width:WH}"> </view>
						<view class="s_1 s_4"> 0.0222 </view>
						<view class="s_2"> 566222 </view>
					</view>
					<view class="dis-row-sp-l">
						<view class="dis-row-sp-l-pl-top" :style="{width:WH}"> </view>
						<view class="s_1 s_4"> 0.0222 </view>
						<view class="s_2"> 566222 </view>
					</view>
					<view class="s_1_r p-t-b-10">
						132.5
					</view>
					<view class="s_1_r p-t-b-10">
						≈908.53 CNY
					</view>
					<view class="dis-row-sp-l">
						<view class="dis-row-sp-l-pl" :style="{width:WH}"> </view>
						<view class="s_1"> 0.0222 </view>
						<view class="s_2"> 566222 </view>
					</view>
					<view class="dis-row-sp-l">
						<view class="dis-row-sp-l-pl" :style="{width:WH}"> </view>
						<view class="s_1"> 0.0222 </view>
						<view class="s_2"> 566222 </view>
					</view>
					<view class="dis-row-sp-l">
						<view class="dis-row-sp-l-pl" :style="{width:WH}"> </view>
						<view class="s_1"> 0.0222 </view>
						<view class="s_2"> 566222 </view>
					</view>
					<view class="dis-row-sp-l">
						<view class="dis-row-sp-l-pl" :style="{width:WH}"> </view>
						<view class="s_1"> 0.0222 </view>
						<view class="s_2"> 566222 </view>
					</view>
					<view class="dis-row-sp-l">
						<view class="dis-row-sp-l-pl" :style="{width:WH}"> </view>
						<view class="s_1"> 0.0222 </view>
						<view class="s_2"> 566222 </view>
					</view>

				</view>
				<view class="dis-row-sp-r">
					<view class="dis-row-sp-row">
						<view @click="handleButton(item)" :class="coumtId==1?'left_buy':'right_sell'"
							:style="{backgroundColor:item.id==coumtId?left_buy_active:''}"
							v-for="(item,index) in BuySellList" :key="index"> {{item.name}}</view>
						<!-- <view class="right_sell"> Sell</view> -->
					</view>
					<!-- <view class="dis-row-sp-input"> -->
					<uni-easyinput class="input-box" v-model="amount" type="number" :inputBorder="true"
						placeholder="Transaction Amount(USD)" :clearable="false">
					</uni-easyinput>
					<!-- </view> -->
					<view class="dis-row-1-r">
						<view class="s_1_r">Available</view>
						<view class="s_1_r row-list-style">  
						<text>{{coumtId==1 ?'1727609.0332444 USDT':'0 ADA'}}</text>
						<uni-icons type="bars" size="16" @click="delBankCard"></uni-icons>
						 
						</view>
					</view>

					<view class="dis-row-1-r">
						<view class="s_1_r">BuyQuantity</view>
						<view class="s_1_r"> ≈0.000000 BCH </view>
					</view>
					<view class="dis-row-1-r">
						<view class="s_1_r s_1_rborder" @click="changeBuyQuantity(its)" :class="itemsListCount==its.id?'borderColor':''" v-for="(its,i) in itemsList" :key="i">{{its.name}}%</view>
						 
						 
					</view>
					<view class="dis-row-1-r">
						<view class="s_1_r">Handling Fee</view>
						<view class="s_1_r"> ≈0.000000 BCH </view>
					</view>
					<view class="buy-style-button" :style="{backgroundColor:left_buy_active}">
						Buy
					</view>

				</view>
			</view>

		</view>
		<view class="tabs-styles">
			<v-tabs v-model="currentTab" :tabs="listTabs" lineHeight='6rpx' lineColor="#1abb97" activeColor="#333"
				@change="change"></v-tabs>
		</view>
		<view class="list-style-col">
			<view class="border-bottom-color">
				<view class="dis-row-1-r">
					<view class="s_1_r">AAVE/USDT</view>
					<view class="s_1_r">
						<view>Completed</view>
						<view class="m-t-10">02-12 15:04</view>
					</view>
				</view>
				<view class="dis-row-1-r">
					<view class="s_1_r">Order Quantity(USDT)</view>
					<view class="s_1_r">1</view>
				</view>
				<view class="dis-row-1-r">
					<view class="s_1_r">Order Price</view>
					<view class="s_1_r">--</view>
				</view>
				<view class="dis-row-1-r">
					<view class="s_1_r">Average Transaction Price</view>
					<view class="s_1_r">17.2</view>
				</view>
				<view class="dis-row-1-r">
					<view class="s_1_r">Closed(AAVE)</view>
					<view class="s_1_r">0.01261034</view>
				</view>
				<view class="dis-row-1-r">
					<view class="s_1_r">Handling Fee(AAVE)</view>
					<view class="s_1_r">1</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var self;

	export default {
		props: [],
		components: {},
		data() {
			return {
				itemsListCount:0,
				itemsList:[{name:25,id:1},{name:50,id:2},{name:75,id:3},{name:100,id:4}],
				right_sell_active: '#e93f4f',
				left_buy_active: '#12b887',
				coumtId: 1,
				BuySellList: [{
					name: 'Buy',
					id: 1
				}, {
					name: "Sell",
					id: 2
				}],
				amount: "",
				WH: "30%",
				connect: true,
				scoketError: false,
				isShowMore: false,
				current: 1,
				time_type: "1s",


				listTabs: ['History Order'],
				currentTab: 0,

				tabs: [{
						name: '1s',
						id: 1
					},
					{
						name: '1m',
						id: 2
					},
					{
						name: '5m',
						id: 3
					},
					{
						name: '15m',
						id: 4
					},
					{
						name: '30m',
						id: 5
					},

				],
				tabs2: [{
						name: '1h',
						id: 6
					},
					{
						name: '6h',
						id: 7
					},
					{
						name: '1d',
						id: 8
					},
					{
						name: '1w',
						id: 9
					},
					{
						name: '1M',
						id: 10
					},

				]

			};
		},

		onLoad(option) {
			self = this;
			this.coumtId=option.tabId;
			if(option.tabId==2){
				this.left_buy_active = this.right_sell_active
			}
		 
		// console.log("this.coumtId",this.coumtId)
			// self.getWebsocketData()

		},
		onUnload() {
			this.scoketClose()
			this.socketIo.traderDetailIndex = 100 // 初始化 tabIndex 
		},
		methods: {
			changeBuyQuantity(v){
				this.itemsListCount =v.id;
			},
			delBankCard(){},
			handleButton(item) {
				this.coumtId = item.id;
				if (this.coumtId == 1) {
					this.left_buy_active = '#12b887'
				} else {
					this.left_buy_active = this.right_sell_active
				}


			},
			change(index) {
				console.log("index", index)
				this.currentTab = index;
			},
			// star
			scoketClose() {
				this.socketIo.connectNum = 1
				const data = "ROOM_C2C_HALL"
				this.socketIo.send(data) // 这是给后端发送特定数据 关闭推送
				this.socketIo.Close() // 主动 关闭连接 ， 不会重连
			},

			getWebsocketData() {
				// 要发送的数据包
				const data = "ROOM_C2C_HALL" //ROOM_C2B_HALL 

				// 打开连接
				this.socketIo.connectSocketInit(data)
				// 接收数据
				uni.$on("getPositonsOrder", (res) => {
					// this.connect = true
					// const {
					//     code,
					//     data
					// } = res
					console.log("-socketIo接收消息------------>", res)
				})
				// 错误时做些什么
				uni.$on("connectError", () => {
					this.connect = false
					this.scoketError = true
				})
			},
			// end


			showMore() {
				this.isShowMore = !this.isShowMore
			},
			changeList(v) {
				this.current = v.id
				console.log("======>", v)
			}

		}
	};
</script>
<style scoped>
	.borderColor{
		border: 1px solid rgb(18, 184, 135);
	}
	.s_1_rborder{
		padding: 8upx 16upx;
		border-radius: 10upx;
	}
	.dis-row-sp-l-pl-top {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		transition: width 0.8s;
		background-color: rgba(218, 82, 82, 0.2)
	}

	.dis-row-sp-row {
		width: 100%;
		height: 70upx;
		display: flex;
		flex-direction: row;
		/* align-items: center; */
		/* justify-content: space-between; */
	}

	.z-d-l {
		color: #e93f4f;
		font-size: 1vw;
		padding: 4upx 6upx;
		border-radius: 6upx;
		margin-left: 10upx;
		background-color: rgba(218, 82, 82, 0.2);
	}

	.dis-row-sp-input {
		width: 100%;
	}

	.list-style-col {
		padding: 0 20upx;
	}

	.left_buy {
		width: 50%;
		border-radius: 8upx;

		font-size: 1vw;
		height: 70upx;
		text-align: center;
		line-height: 70upx;
		position: relative
	}

	.left_buy_f {
		background-color: #fff;
	}

	.left_buy::after {
		content: " ";
		position: absolute;
		right: 0;
		bottom: 0;
		width: 0;
		height: 0;
		border-bottom: 35px solid #f6f6f6;
		border-left: 10px solid transparent;
	}

	.right_sell {
		border-radius: 8upx;
		font-size: 1vw;
		width: 50%;
		height: 70upx;
		text-align: center;
		line-height: 70upx;
		position: relative;

	}

	.right_sell::before {
		content: " ";
		position: absolute;
		left: 0;
		top: 0;
		width: 0;
		height: 0;
		border-top: 35px solid #f6f6f6;
		border-right: 10px solid transparent;
	}

	.border-bottom-color {
		padding-bottom: 20upx;
		border-bottom: 1px solid #f6f6f6;
	}

	.dis-row-sp {
		display: flex;
		flex-direction: row;
		/* align-items: center; */
		/* justify-content: space-between; */
		font-size: 1vw;
		margin-top: 10upx;

	}

	.dis-row-1-r {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 10upx 0;
	}

	.s_1_r {
		font-size: 1vw;
		color: #333;
		font-weight: 500;
	}

	.dis-row-sp-l {
		flex: 1;
		display: flex;
		/* flex-direction: row; */
		/* align-items: center; */
		justify-content: space-between;
		padding: 6upx 0;

	}

	.dis-row-sp-r {
		flex: 1;
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		/* justify-content: space-between; */
		/* padding: 6upx 0; */
		padding: 0 10upx 10upx 10upx;
	}

	.dis-row-sp-col {
		width: 40%;
	}

	.s_1 {
		color: rgb(18, 184, 135);
		font-size: 1vw;
	}

	.s_2 {
		color: #000;
		font-size: 1vw;
	}

	.s_3 {
		color: rgb(233, 63, 79);
		font-size: 1vw;
	}

	.s_4 {
		color: rgb(233, 63, 79);
	}

	.dis-row-sp-l {

		position: relative;
	}


	.dis-row-sp-l-pl {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		transition: width 0.8s;
		background-color: rgba(62, 173, 93, 0.2);
	}

	.dis-row-sp-l-pr {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		transition: width 0.8s;
		background-color: rgba(218, 82, 82, 0.2)
	}


	.content_app {
		/* width: 94%; */
		padding: 0 20upx;
		margin: 0 auto;
		border-bottom: 20upx solid #f5f5f5;
	}

	.title-row-list {

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 30upx;
	}

	.title-row-list view {
		width: 30%;
	}

	.font700 {
		font-weight: 700;
		font-size: 38upx;
	}

	.fontS1 {
		font-size: 1vw;
	}

	.textC {
		text-align: center;
	}

	.textR {
		text-align: right;
		font-size: 20px;
	}

	.centerColor {
		color: #ad4242;

	}

	.colorLv {
		color: rgb(18, 184, 135);
	}

	.p-t-b-10 {
		padding: 10upx 0;
	}

	.buy-style-button {
		font-size: 1vw;
		color: #fff;
		margin-top: 80upx;
		padding: 24upx 0;
		text-align: center;
		border-radius: 10upx;
	}

	.rightColor {
		color: #333;
		font-size: 1vw;
	}

	.detail-tab-all {
		height: 80upx;
	}

	.tabs-styles {
		width: 80%;
		margin: 0 auto;
	}

	.row-list-style {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.arrow_down {
		width: 0;
		height: 0;
		border-left: 10upx solid transparent;
		border-right: 10upx solid transparent;
		border-top: 10upx solid #333;
	}

	.detail-tab {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		color: #333;
		font-size: 1vw;
		font-weight: bold;
		width: 94%;
		margin: 0 auto;
	}

	.flex1 {
		flex: 1;
	}

	.detail-tab-show {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		color: #333;
		font-size: 1vw;
		font-weight: bold;
		width: 100%;
		margin: 0 auto;
	}

	.detail-tab-list {
		padding: 10upx 0;
		flex: 1;
	}

	.detail-tab-list-style {
		flex: 1;
		padding: 0 24upx;
	}

	.isActive {
		color: #1abb97;
	}

	.colorf {
		color: #fff;
	}

	/deep/ .uni-easyinput__content.is-input-border {
		border: none;
		border-color: rgb(229, 229, 229);
		/* background-color:  rgb(229, 229, 229); */
	}

	/deep/ .uni-easyinput__content-input {
		background-color: #f6f6f6;
		margin: 20upx 0;
	}

	/deep/ .uni-easyinput {
		flex: initial;
	}
</style>
