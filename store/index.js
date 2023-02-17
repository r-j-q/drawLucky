//  页面路径：store/index.js
import Vue from 'vue'
import Vuex from 'vuex'


import moduleA from '@/store/modules/moduleA' //不要的
import moduleB from '@/store/modules/moduleB' //不要的
import user from '@/store/modules/user'
import socket from '@/store/modules/socket'
import webInfo from '@/store/modules/webInfo'
import system from '@/store/modules/system'

Vue.use(Vuex)
export default new Vuex.Store({
	modules: {
		moduleA,
		moduleB,
		user,
		socket,
		webInfo,
		system,
	}
})
