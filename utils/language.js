/***
 * 前端 用 value
 * 后端 用 nterface
 * */
// 标识符转义
export function langTranslate(value) {
	let obj = langList.find((item, index) => {
		return item.value == value || item.interface == value

	})
	if (!obj) {
		obj = {

			value: 'en', //前端组件对应的标识符||或者i18n对应的内置文件名称
			interface: 'en-US', //后端接口传值标识符
			name: 'English', //语言名称
			image: '/static/language/0.png', //语言国旗
			language: "英语",
			checked: 'true'
		}
	}
	return obj
}
//语言标识符列表
export let langList = [{

		value: 'en', //前端组件对应的标识符||或者i18n对应的内置文件名称
		interface: 'en-US', //后端接口传值标识符
		name: 'English', //语言名称
		image: '/static/language/0.png', //语言国旗
		language: "英语",
		checked: 'true'
	},
	{
		value: 'zh-Hant',
		interface: 'zh-CHT',
		name: '中文繁体',
		language: "中文繁体",
		image: '/static/language/1.png',
	},
	{
		value: 'zh-Hans',
		interface: 'zh-CN',
		name: '中文简体',
		language: "中文简体",
		image: '/static/language/2.png',

	},
	{
		value: 'fr',
		interface: 'fr-FR',
		name: 'français',
		language: "法语",
		image: '/static/language/3.png',
	},
	{
		value: 'ja',
		interface: 'ja-JP',
		name: '日本語',
		language: "日语",
		image: '/static/language/4.png',
	},
	{
		value: 'ko-KR',
		interface: 'ko-KR',
		name: '한국어',
		language: "韩语",
		image: '/static/language/5.png',
	},
	{
		value: 'ms-MY',
		interface: 'ms-MY',
		name: 'Malay',
		language: "马来语",
		image: '/static/language/6.png',
	},
	{
		value: 'ru-RU',
		interface: 'ru-RU',
		name: 'русский',
		language: "俄语",
		image: '/static/language/7.png',
	},
	{
		value: 'de-DE',
		interface: 'de-DE',
		name: 'Deutsche',
		language: "德语",
		image: '/static/language/8.png',
	},
	{
		value: 'it-IT',
		interface: 'it-IT',
		name: 'italiano',
		language: "意大利语",
		image: '/static/language/9.png',
	},
	{
		value: 'es',
		interface: 'es-ES',
		name: 'Español',
		image: '/static/language/10.png',
	},
	{
		value: 'th-TH',
		interface: 'th-TH',
		name: 'ภาษาไทย',
		language: "泰语",
		image: '/static/language/11.png',
	},
	{
		value: 'pt-PT',
		interface: 'pt-PT',
		name: 'Português',
		language: "葡萄牙语",
		image: '/static/language/12.png',
	},
	{
		value: 'vi-VN',
		interface: 'vi-VN',
		name: 'Tiếngviệt',
		language: "越南语",
		image: '/static/language/13.png',
	},
	{
		value: 'tr-TR',
		interface: 'tr-TR',
		name: 'Türkiye',
		language: "土耳其语",
		image: '/static/language/14.png',
	},
]
