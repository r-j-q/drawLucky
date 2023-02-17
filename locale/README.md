# hello-i18n

# pages.json 翻译  
使用方式"%名称%"如同页面的$t("名称") 
为了兼容pages.json 的tabbar文字  以及页面标题
建议在"@/locale/en.json  &&  @/locale/ja.json && @/locale/zh-Hans.json  &&  @/locale/zh-Hant.json"等等外部语言所有文件添加对应的标题

#其他页面  翻译
使用方式$t("名称")||this.$t("名称")如同page.json页面的"%名称%" 
根据所在页面  在@/locale/language/data下添加对应的文件夹  翻译文件