<template>
	<view class="minHeight100 content_app">
		<!-- 顶部 -->
		<view class="">
			<view class="title-row-list">
				<view class="font700 fontS1"> ONE/USDT </view>
				<view class="centerColor fontS1 textC"> 24hHigh </view>
				<view class="rightColor fontS1 textR"> 0.02447 </view>
			</view>
			<view class="title-row-list">
				<view class="font700  font700 colorLv "> 0.02409 </view>
				<view class="centerColor fontS1 textC"> 24Low </view>
				<view class="rightColor fontS1 textR"> 0.02447 </view>
			</view>
			<view class="title-row-list">
				<view class="font700  font700 fontS1 "> ≈0.16 CNY<text class="colorLv">5.563%</text> </view>
				<view class="centerColor fontS1 textC"> 24Low </view>
				<view class="rightColor fontS1 textR"> 0.02447 </view>
			</view>

		</view>
		<view class="detail-tab-all">
			<view class="detail-tab">
				<view class="detail-tab-list" @click="changeList(item)" :class="current==item.id?'isActive':''"
					v-for="(item,index) in tabs" :key='index'>{{item.name}} </view>
				<view class="row-list-style" @click="showMore">More <view class="arrow_down"></view>
				</view>
			</view>
			<view class="detail-tab-show" v-if="isShowMore">
				<view class="detail-tab-list-style" @click="changeList(items)" :class="current==items.id?'isActive':''"
					v-for="(items,i) in tabs2" :key='i'>{{items.name}} </view>
				<view class="colorf detail-tab-list-style">.</view>
			</view>
		</view>
		<CategoryLine />
		<view class="tabs-styles">
			<v-tabs v-model="currentTab" :tabs="listTabs"  :scroll="false"  lineHeight='6rpx' lineColor="#1abb97" activeColor="#1abb97"
				@change="change"></v-tabs>
		</view>
		<view class="dis-row-sp">
			<view class=""> Accumulation </view>
			<view class=""> Price </view>
			<view class=""> Accumulation </view>
		</view>
		<view class="dis-row-sp">
			<view class="dis-row-sp-l">
				<view class="dis-row-sp-l-pl" :style="{width:WH}"> </view>
				<view class="s_1"> 0.0222 </view>
				<view class="s_2"> 566222 </view>
			</view>
			<view class="dis-row-sp-r">
				<view class="dis-row-sp-l-pr" :style="{width:WH}"> </view>
				<view class="s_3"> 0.0222 </view>
				<view class="s_2"> 566222 </view>
			</view>
		</view>
		<view class="detail-buttom-style">
			<view class="detail-buttom-style-left" @click="handleJumpTo(1)">Buy</view>
			<view class="detail-buttom-style-right" @click="handleJumpTo(2)">Sell</view>
		</view>
	</view>
</template>

<script>
	var self;
	import CategoryLine from '@/components/categoryLine/index.vue'

	export default {
		props: [],
		components: {
			CategoryLine
		},
		data() {
			return {
				WH:"30%",
				connect: true,
				scoketError: false,
				isShowMore: false,
				current: 1,
				time_type: "1s",


				listTabs: ['Order', 'Introduction to Currency'],
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
			self.getWebsocketData()

		},
		onUnload() {
			this.scoketClose()
			this.socketIo.traderDetailIndex = 100 // 初始化 tabIndex 
		},
		methods: {
			handleJumpTo(v){
				uni.navigateTo({
					url:`/pages/trade/exchange?tabId=${v}`
				})
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
	/deep/ .uni-scroll-view-content .v-tabs__container {
		background: none !important;
		background-color: none !important;
	}
	.detail-buttom-style{
		 width: 94%;  
		margin: 40upx auto;
		font-size: 1vw;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		position: fixed;
		bottom: 20upx;
		left: 0;
		right: 0;
		
	}
	.detail-buttom-style-left{
		flex: 1;
		color: #fff;
		background-color: rgb(18, 184, 135);
		padding: 30upx 0;
		text-align: center;
		border-radius: 16upx;
		margin-right: 10upx;
	}
	.detail-buttom-style-right{
		flex: 1;
		color: #fff;
		background-color: rgb(233, 63, 79);
		padding: 30upx 0;
		text-align: center;
		border-radius: 16upx;
		margin-left: 10upx;
	}

	.dis-row-sp {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		font-size: 1vw;
		margin-top: 10upx;
	}

	.dis-row-sp-l,
	.dis-row-sp-r {
		flex: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 6upx 0;

	}

	.s_1 {
		color: rgb(18, 184, 135);
		font-size: 1vw;
	}

	.s_2 {
		color: #333;
		font-size: 1vw;
	}

	.s_3 {
		color: rgb(233, 63, 79);
		font-size: 1vw;
	}

	.dis-row-sp-l {

		position: relative;
	}

	.dis-row-sp-r {
		position: relative;
	}

	.dis-row-sp-l-pl {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0; 
		 transition:width 0.8s;
		background-color: rgba(62, 173, 93, 0.2);
	}

	.dis-row-sp-l-pr {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0; 
		 transition:width 0.8s; 
		background-color: rgba(218, 82, 82, 0.2)
	}
	@keyframes width{
		0%{
			font-size: 1vw;
		}
	}

	.content_app {
		width: 94%;
		margin: 0 auto;
	}

	.title-row-list {

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 10upx;
	}

	.title-row-list view {
		width: 30%;
	}

	.font700 {
		font-weight: 700;
	}

	.fontS1 {
		font-size: 1vw;
	}

	.textC {
		text-align: center;
	}

	.textR {
		text-align: right;
	}

	.centerColor {
		color: #ad4242;

	}

	.colorLv {
		color: rgb(18, 184, 135);
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
	    border-radius: 5px;
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
/* /deep/	.v-tabs__container{
		display: flex;
		    align-items: center;
		    flex-direction: row;
		    justify-content: space-between;
	} */
</style>
