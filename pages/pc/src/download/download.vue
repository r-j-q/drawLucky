<template>
	<view class="page">
		<div class="main main-v2">
			<!-- <div class="main-top">
				<div class="lang">
					<div class="cur-lang"><span>中文简体</span></div>
					<div class="lang-select" style="display: none;"><a class="lang-item"
							href="/index_en-US?jp=1">English</a><a class="lang-item" href="/index_zh-CN?jp=1">中文简体</a><a
							class="lang-item" href="/index_zh-TW?jp=1">中文繁體</a><a class="lang-item"
							href="/index_ja-JP?jp=1">日本語</a><a class="lang-item" href="/index_th-TH?jp=1">ภาษาไทย</a><a
							class="lang-item" href="/index_ms-MY?jp=1">Malay</a><a class="lang-item"
							href="/index_ko-KR?jp=1">한국어.</a><a class="lang-item" href="/index_ru-RU?jp=1">русский</a><a
							class="lang-item" href="/index_fr-FR?jp=1">français</a><a class="lang-item"
							href="/index_de-DE?jp=1">Deutsche</a><a class="lang-item"
							href="/index_it-IT?jp=1">italiano</a><a class="lang-item"
							href="/index_es-ES?jp=1">Español</a></div>
				</div>
			</div> -->
			<div class="s1"><img class="logo" src="@/static/webimage/r9eeka5.png">
				<p class="h1"><span> {{$t('globalLeader')}}</span><br><span>{{$t('digital')}} </span></p>
				<div class="phone"></div>
			</div>
			<div class="s2">
				<div class="item"><img src="@/static/webimage/safe.png">
					<p class="title">{{$t('reliable')}}</p>
					<div class="desc"><span>{{$t('experience')}}</span><br><span>{{$t('timely')}}</span></div>
				</div>
				<div class="item"><img src="@/static/webimage/flex.png">
					<p class="title">{{$t('ecological')}}</p>
					<div class="desc"><span>{{$t('been')}}</span><br><span>{{$t('blockchain')}} </span></div>
				</div>
				<div class="item"><img src="@/static/webimage/user.png">
					<p class="title">{{$t('userFirst')}}</p>
					<div class="desc"><span>{{$t('advance')}}</span><br><span>{{$t('protection')}}</span></div>
				</div>
			</div>
			<div class="s3">
				<p class="title">{{$t('international')}}</p>
				<div class="desc">{{$t('transaction')}}</div>
				<div class="phone"></div>
			</div>
			<div class="s4">
				<p class="title">{{$t('currencyTransaction')}}</p>
				<p class="desc"><span>{{$t('purchase')}}</span><br><span>{{$t('digitalAssets')}}</span></p>
				<div class="phone"></div>
			</div>
			<div class="s5">
				<p class="title">{{$t('mechanism')}}</p>
				<p class="desc">{{$t('professional')}}</p>
				<div class="phone"> </div>
			</div>
			<div class="download-area">
				<div class="flex">
					<a class="download-link" :href="WEBINFO.iosDownloadAddress" targer="_blank"
						onclick="onDownloadLight()">IOS APP</a>
					<a class="download-link" :href="WEBINFO.androidDownloadAddress" targer="_blank"
						onclick="onDownloadLight()">Android APP
					</a>
				</div>
				<!-- <div class="flex"> <a class="download-link" href="https://a.nasdaqgt.xyz/apk/nasdaq.apk"
						targer="_blank">安卓下载 1</a></div> -->
			</div>
			<div class="main-bottom">
				<p>Copyright ©️ 2017-2022 Nasdaq Corporation, All Rights Reserved</p>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				WEBINFO: uni.getStorageSync('WEBINFO'),
			}
		},



		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.flex {
		display: flex;
	}

	.flex1 {
		flex: 1;
	}

	.main-middle {
		text-align: center;
		color: #ffffff;
	}

	.main-middle .name {
		font-size: 28px;
		margin: 10px;
		color: #333;
	}

	.main-middle .version {
		font-size: 14px;
		color: #333;
	}

	.download-wrap {
		padding: 20px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		margin-bottom: 30px;
	}

	.main-middle .download {
		flex: 0 0 146px;
		font-size: 12px;
		background-color: #3e77f3;
		border: 1px solid #ffffff;
		border-radius: 6px;
		color: #ffffff;
		width: 220px;
		height: 40px;
		line-height: 40px;
		margin-bottom: 14px;
	}

	.main-middle .download:active {
		background-color: #5082ee;
	}

	.main-middle .download a {
		text-decoration: none;
		color: #ffffff;
		display: inline-block;
		width: 100%;
		height: 100%;
	}

	.main-bottom {
		margin-bottom: 10px;
		color: #333;
		background-color: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		font-size: 10px;
		text-align: center;
		width: 100%;
	}

	.main-v2 {
		color: #333;
		position: relative;
		padding-bottom: 140px;
	}

	.main-v2 .main-top {
		height: 40px;
		display: flex;
		padding: 0;
		align-items: center;
		justify-content: flex-start;
		padding-top: 40px;
		background: transparent;
		position: absolute;
		width: 100vw;
		top: 0;
		left: 0;
		color: #fff;
	}

	.main-v2 .main-top img {
		border-radius: 0;
		margin: 20px;
		box-shadow: none;
	}

	.main-v2 * {
		box-sizing: border-box;
	}

	.main-v2 .lang {
		position: absolute;
		width: auto;
		padding: 0;
		right: 20px;
		top: 20px;
		font-size: 12px;
		padding: 4px 10px;
		/* background: #000; */
		color: #fff;
		border-radius: 4px;
	}

	.main-v2 .logo {
		width: 68px;
		height: 68px;
		border-radius: 8px;
	}

	// .main-v2 .banner {
	// 	width: 100%;
	// 	padding: 0 20px;
	// 	margin-top: -20px;
	// 	min-height: 380px;
	// 	background: url(@/static/webimage/intro.png) no-repeat 98% 80px;
	// 	background-size: 40%;
	// }

	// .main-v2 .banner.en {
	// 	background: url(@/static/webimage/en-intro.jpg) no-repeat 98% 80px;
	// 	background-size: 46%;
	// }

	// .main-v2 .banner p {
	// 	word-break: break-word;
	// 	padding-top: 50px;
	// 	color: #333;
	// 	width: 50%;
	// 	font-size: 22px;
	// 	font-weight: bold;
	// }

	.main-v2 .intro-item {
		width: 90%;
		padding: 10px 16px;
		border-radius: 10px;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
		background: #fff;
		margin: 0 auto;
		margin-bottom: 18px;
	}

	.main-v2 .business {
		padding: 30px 0px 30px 20px;
		display: flex;
	}

	.main-v2 .business .mgr {
		margin-right: 30px;
	}

	.main-v2 .business .mgl {
		margin-left: 30px;
	}

	.img-w img {
		width: 100%;
		height: auto;
	}

	.main-v2 .download-area {
		width: 100%;
		position: fixed;
		background-color: #fff;
		padding: 10px 16px 40px 16px;
		bottom: 0;
		border-top: 1px solid #e9edf9;
	}

	.lang-select {
		display: none;
		background-color: #fff;
		box-shadow: 0px 0px 14px #bbb;
		padding-top: 10px;
		position: absolute;
		top: 26px;
		right: 0;
		border-radius: 4px;
	}

	.lang-select a {
		display: block;
		padding: 0px 20px;
		padding-bottom: 12px;
	}

	.lang-select a:hover {
		color: #00d3ad;
	}

	.download-area .flex {
		display: flex;
		margin-top: 10px;
	}

	.download-area .flex a {
		flex: 1;
		text-decoration: none;
		display: block;
		padding: 8px 4px;
		color: #fff;
		margin-left: 10px;
		text-align: center;
		border-radius: 4px;
		background: #0ba2ed;
		font-size: 12px;
	}

	.download-area .flex a:first-child {
		margin-left: 0px;
	}

	// .tf-wrap {
	// 	background: #05a390 url(@/static/webimage/tfbg.png) no-repeat top;
	// 	min-height: 100vh;
	// 	background-size: 100%;
	// 	padding: 0 4vw;
	// 	width: 100vw;
	// 	box-sizing: border-box;
	// }

	// .tf-wrap a {
	// 	text-decoration: none;
	// 	color: #fff;
	// }

	// .tf-wrap h3.title {
	// 	color: #fff;
	// 	font-size: 24px;
	// 	padding: 40px 0px;
	// 	margin: 0;
	// 	font-weight: normal;
	// }

	// .tf-wrap .step {
	// 	border-radius: 8px;
	// 	background-color: #fff;
	// 	text-align: center;
	// 	padding: 4vw;
	// 	margin-bottom: 8vw;
	// }

	// .tf-wrap .step>img {
	// 	width: 50px;
	// 	height: 50px;
	// 	display: block;
	// 	margin: 0 auto 5vw;
	// }

	// .tf-wrap .step>h4 {
	// 	font-size: 18px;
	// 	margin-bottom: 5vw;
	// 	font-weight: normal;
	// }

	// .tf-wrap .step>.desc {
	// 	font-size: 14px;
	// 	color: #666;
	// 	margin-bottom: 4vw;

	// }

	// .tf-wrap .step>.desc.nomg {
	// 	margin-bottom: 0;
	// }

	// .tf-wrap .step .btn {
	// 	font-size: 14px;
	// 	color: #fff;
	// 	display: block;
	// 	text-align: center;
	// 	padding: 10px;
	// 	background-color: #2ebc84;
	// }

	// .tf-wrap .step .logo-l {
	// 	height: 60px;
	// 	width: 60px;
	// }

	.resolve {
		background-color: #fff;
		padding: 4vh;
		border-radius: 8px;
		margin-bottom: 8vw;
		color: #666;
		font-size: 14px;
		text-align: left;
	}

	.resolve a {
		font-size: 12px;
		display: block;
		border: 1px solid #2ebc84;
		color: #2ebc84;
		padding: 4px 10px;
	}

	.install-logo {
		justify-content: center;
		align-items: center;
	}

	.install {
		margin-left: 10px;

	}

	.install-logo .install-btn {
		margin-top: 10px;
		padding: 4px 10px;
		display: inline-block;
		background-color: #1890ff;
		font-size: 12px;
		color: #fff;
		border-radius: 50px;
	}

	.update-desc {
		color: #fff;
		padding-bottom: 10px;
		font-size: 14px;
		margin-bottom: 0;
	}

	.tf-wrap .back {
		position: fixed;
		left: 20px;
		top: 20px;
		content: "";
		display: inline-block;
		height: 10px;
		width: 10px;
		border-width: 0 0px 2px 2px;
		border-color: #e5ecec;
		border-style: solid;
		transform: matrix(0.71, 0.71, -.71, 0.71, 0, 0);
	}

	.main-v2 {
		text-align: center;
		text-align-last: center;
	}

	.main-v2 .s1 {
		padding-top: 80px;
		background: url(@/static/webimage/mainbg.png) no-repeat;
		overflow: hidden;
		height: 650px;
		background-size: cover;
		background-color: #7B4AF5;

	}

	.main-v2 .phone {
		width: 280px;
		height: 560px;
		margin: 0 auto;
		margin-top: 40px;
	}

	.main-v2 .s1 .h1 {
		margin: 13px auto 0;
		line-height: 40px;
		font-size: 30px;
		color: #fff;
		text-align: center;
		font-weight: 700;
	}

	.s1 .phone {
		background: url(@/static/webimage/phone1.png) no-repeat;
		background-size: contain;

	}

	.s2 {
		padding: 30px 0;
		background: url(@/static/webimage/ll.png) no-repeat;
		background-size: cover;
	}

	.s2 .item {
		padding-top: 40px;
	}

	.s2 .item img {
		width: 44px;
		height: 44px;
	}

	.s2 .title {
		font-weight: 700;
		margin-top: 10px;
		font-size: 20px;
		line-height: 28px;
	}

	.s2 .desc {
		margin: 5px 25px 0;
		font-size: 16px;
		line-height: 23px;
		color: #8c9fad;
	}

	.s3 {
		padding: 60px 0;
		background: url(@/static/webimage/bg-s3.png) no-repeat;
		background-size: cover;
		height: 590px;
		color: #fff;
		background-color: #7B4AF5;
		overflow: hidden;
	}

	.s3 .phone {
		background: url(@/static/webimage/phone3.png) no-repeat;
		background-size: contain;
	}

	.s3 .title {
		margin: 6px auto 0;
		line-height: 38px;
		font-size: 28px;
		color: #fff;
		text-align: center;
		font-weight: 700;
	}

	.s3 .desc {
		text-align: center;
		width: 277px;
		font-size: 16px;
		line-height: 18px;
		margin: 16px auto 0;
	}

	.s4 {
		padding: 60px 0;
		background: url(@/static/webimage/bg-s4.png) no-repeat;
		background-size: cover;
		height: 630px;
		color: #1f3f59;
	}

	.s4 .title {
		font-weight: 700;
		font-size: 26px;
		line-height: 38px;
	}

	.s4 .desc {
		text-align: center;
		width: 277px;
		font-size: 16px;
		line-height: 18px;
		margin: 16px auto 0;
	}

	.s4 .phone {
		background: url(@/static/webimage/phone4.png) no-repeat;
		background-size: contain;
	}

	.s5 {
		padding: 60px 0;
		background: url(@/static/webimage/bg-s5.png) no-repeat;
		background-size: cover;
		height: 650px;
		color: #fff;
		overflow: hidden;
		background-color: #7B4AF5;
	}

	.s5 .title {
		margin: 6px auto 0;
		line-height: 38px;
		font-size: 28px;
		color: #fff;
		text-align: center;
		font-weight: 700;
	}

	.s5 .desc {
		text-align: center;
		width: 277px;
		font-size: 16px;
		line-height: 18px;
		margin: 16px auto 0;
	}

	.s5 .phone {
		background: url(@/static/webimage/phone5.png) no-repeat;
		background-size: contain;
	}
</style>
