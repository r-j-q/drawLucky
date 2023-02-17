import QxPop from '@/components/qxPop/qxPop.vue'
// 定义插件对象
const qxPop = {

}

// vue的install方法，用于定义vue插件
qxPop.install = function(Vue, options) {

	const MessageTipInstance = Vue.extend(QxPop)
	let currentPop
	const initInstance = () => {

		// 实例化vue实例
		currentPop = new MessageTipInstance()
		let msgBoxEl = currentPop.$mount().$el
		document.body.appendChild(msgBoxEl)
	}

	// 在Vue的原型上添加实例方法，以全局调用
	Vue.prototype.$qxPop = {

		show(options) {

			if (!currentPop) {

				initInstance()
			}
			currentPop.show(options)
		},
		hide() {

			currentPop.hide()
		},
	}
}
export default qxPop
