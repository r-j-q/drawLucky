import App from './App'


import messages from './locale/index'
import store from './store'

import api from './api'
import {
	langList, //语言标识符列表
	langTranslate, //语言标识符转义
} from '@/utils/language.js'
import {
	getDistanceSpecifiedTime,
	deleteInvalidParam,
	removeStorageAPI,
	routeTo,
	openWeb,
	copyfun,
	delZero,
	getFloat,
	getDateFormat,
	calculateMA,
	floatAdd,
	floatSub,
	floatMul,
	floatDiv,
} from '@/utils/common.js'
import tabbar from '@/components/tabbar/tabbar.vue'

import QxPop from '@/components/qxPop/qxPop.js'

Vue.use(QxPop)

Vue.component('tabbar', tabbar)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
let nowLanguage = uni.getStorageSync(
	'LANGUAGE') || langTranslate(uni.getSystemInfoSync().language)
// 
console.log(nowLanguage.value, " nowLanguage.value")
let i18nConfig = {
	locale: nowLanguage.value,
	messages
}
Vue.prototype.$store = store
Vue.prototype.$api = api
//初始化获取屏幕可用高度 除去了导航你nav 90rpx 计算后单位为rpx
Vue.prototype.windowHeight = parseInt(750 / uni.getSystemInfoSync().windowWidth * (uni.getSystemInfoSync()
	.windowHeight - uni.getSystemInfoSync().statusBarHeight))
Vue.prototype.statusBarHeight = parseInt(750 / uni.getSystemInfoSync().windowWidth * uni.getSystemInfoSync()
	.statusBarHeight)

// 公共方法 js

Vue.prototype.langList = langList
Vue.prototype.langTranslate = langTranslate
Vue.prototype.getDistanceSpecifiedTime = getDistanceSpecifiedTime
Vue.prototype.deleteInvalidParam = deleteInvalidParam
Vue.prototype.removeStorageAPI = removeStorageAPI
Vue.prototype.routeTo = routeTo
Vue.prototype.openWeb = openWeb
Vue.prototype.copyfun = copyfun
Vue.prototype.delZero = delZero
Vue.prototype.getFloat = getFloat
Vue.prototype.getDateFormat = getDateFormat
Vue.prototype.calculateMA = calculateMA
Vue.prototype.floatAdd = floatAdd
Vue.prototype.floatSub = floatSub
Vue.prototype.floatMul = floatMul
Vue.prototype.floatDiv = floatDiv

// #ifndef VUE3
import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

Vue.use(ElementUI)
const i18n = new VueI18n(i18nConfig)
import socketIO from '@/utils/scoket.js'
Vue.prototype.socketIo = new socketIO()
// window.wx = {}
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({

	store,
	i18n,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import {
	createI18n
} from 'vue-i18n'
const i18n = createI18n(i18nConfig)
export function createApp() {
	const app = createSSRApp(App)

	app.use(i18n).use(ElementUI)
	return {

		app
	}
}
// #endif

export default {
	app
}
