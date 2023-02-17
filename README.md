#nasdaq项目
	# 开发
		coin
		线上接口： http://47.245.34.221:900
		k图的组件		npm install klinecharts --save
		element-ui		npm i element-ui -S
	#建议
		1.变量命名规则--小驼峰英文翻译 如 firstName、lastName、getUserName
		2.App.css 全局布局样式   flex布局  当行或多行文字显示   可以用也可以不用
		3.Vuex和api封装请求以及i18n翻译文件  根据所在页面  创建对应的文件夹
	# UQRCode
		1.import UQRCode from '../../../uni_modules/Sansnn-uQRCode/js_sdk/uqrcode/uqrcode.js';	 // https://ext.dcloud.net.cn/plugin?id=1287
	# hello-i18n
		1 pages.json 翻译  
			使用方式"%名称%"如同页面的$t("名称") 
			为了兼容pages.json 的tabbar文字  以及页面标题
			建议在"@/locale/en.json  &&  @/locale/ja.json && @/locale/zh-Hans.json  &&  @/locale/zh-Hant.json"等等外部语言所有文件添加对应的标题

		2其他页面  翻译
			使用方式$t("名称")||this.$t("名称")如同page.json页面的"%名称%" 
			根据所在页面  在@/locale/language/data下添加对应的文件夹  翻译文件
			
	#git
		以下举例远程分支为dys 本地分支为master
		1.要从本地master推送到其他远程dys，请使用:git push origin master:dys
			要让您的朋友将此远程dys拉入本地master，他们可以将git pull用作:
			
			git checkout master
			git pull origin dys
		
	# pages.json
		新增* "intercept": true //路由拦截名单
		{
			"path": "pages/pc/src/me/me",
			"style": {
				"intercept": true, //路由拦截名单开启
				"navigationBarTitleText": "%me%",
				"enablePullDownRefresh": false,
				"navigationStyle": "custom",
				"app-plus": {
					"titleNView": false
				}
			}
		}
	#uni-ui库 已经手动改动组件的有
		1.uni-data-select 由于格式太固化单一
			新增* @property {String} 	labelkey 默认值text
			新增* @property {String} 	valuekey 默认值value
			新增* @property {Boolean} isdisableShow 是否需要显示被禁用的item  默认显示true
			
		2.uni-data-select 返回值
			新增* this.$emit('change', val, item)***原来this.$emit('change', val)
			新增* this.$emit('input', val, item)***原来this.$emit('input', val,)
			新增* this.$emit('update:modelValue', val, item)***原来this.$emit('update:modelValue', val)
		3. uni-data-select 显示labelkey  传 'name'  就显示name 传 'name-age-sex'  就显示name-age-sex
		
			// 自定义
			setlabel(item) {
				let labelkey = this.labelkey.split('-')
				let labelstr = ''
				labelstr = labelkey.map((label, index) => {
					return item[label]
				}).join('-')
				return labelstr
			}
			使用
			<uni-data-select v-model="valiFormData.currency" :localdata="getChannelData"
				labelkey="bankName-payeeName" valuekey="bankName" :clear="false"
				@change="selectchange">
			</uni-data-select>
		4.IndexedList 索引列表
			 * @property {String} label = '' 子属性 默认没有子属性
			