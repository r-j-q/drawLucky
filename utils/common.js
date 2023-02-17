import store from '@/store'
import Vue from "@/main.js"
import pages from "@/pages.json" //获取路由
// 获取要拦截的路由
export const intercept = () => {
	let arr = []
	pages.pages.filter(item => {
		if (item.style.intercept) {
			arr.push('/' + item.path)
		}
	})
	return arr
}
// 从本地缓存中同步移除指定 key。信息重置
export function removeStorageAPI() {
	uni.removeStorageSync('token');
	uni.removeStorageSync('loglevel:webpack-dev-server');
	uni.removeStorageSync('__DC_STAT_UUID');
	uni.removeStorageSync('userInfo');

}
// 防止处理多次点击
export function noMultipleClicks(methods, delay = 500, info) {
	// methods是需要点击后需要执行的函数， info是点击需要传的参数
	let that = this;
	console.log("asd", that.noClick)
	if (that.noClick) {
		// 第一次点击

		that.noClick = false;
		if (info && info != '') {
			// info是执行函数需要传的参数
			methods(info);
		} else {
			methods();
		}
		setTimeout(() => {
			that.noClick = true;
		}, delay)
	} else {
		console.log('被隔离了')
		// 这里是重复点击的判断
	}
}
// 跳转打开新的网页 打开方式默认'_blank'
// openURL 跳转的url
// openWith  打开方式  默认新窗口打开
export function openWeb(openURL, openWith = '_blank') {
	//#ifdef APP-PLUS
	plus.runtime.openURL(openURL, );
	//#endif
	//#ifdef H5
	window.open(openURL, openWith)
	//#endif
}
/* 将数值转换为金额格式（分隔千分位和自动增加小数点） regexNum('23424224'); //输出2,42,224.00 */
export function regexNum(str) {
	// regexNum('23424224'); //输出2,42,224.00
	if (str || str == 0) {
		if (typeof str == 'number') {
			str = (str / 100).toString()

		}
	} else {
		str = '0'
	}
	var newStr = "";
	var count = 0;

	if (str.indexOf(".") == -1) {
		for (var i = str.length - 1; i >= 0; i--) {
			if (count % 3 == 0 && count != 0) {
				newStr = str.charAt(i) + "," + newStr;
			} else {
				newStr = str.charAt(i) + newStr;
			}
			count++;
		}
		str = newStr + ".00"; //自动补小数点后两位

	} else {
		for (var i = str.indexOf(".") - 1; i >= 0; i--) {
			if (count % 3 == 0 && count != 0) {
				newStr = str.charAt(i) + "," + newStr; //碰到3的倍数则加上“,”号
			} else {
				newStr = str.charAt(i) + newStr; //逐个字符相接起来
			}
			count++;
		}
		str = newStr + (str + "00").substr((str + "00").indexOf("."), 3);
	}
	return str
}
/* 字符串转表情 */
export const uncodeUtf16 = (str) => {
	if (str) {
		var reg = /\&#.*?;/g;
		var result = str.replace(reg, function(char) {
			var H, L, code;
			if (char.length == 9) {
				code = parseInt(char.match(/[0-9]+/g));
				H = Math.floor((code - 0x10000) / 0x400) + 0xd800;
				L = ((code - 0x10000) % 0x400) + 0xdc00;
				return unescape('%u' + H.toString(16) + '%u' + L.toString(16));
			} else {
				return char;
			}
		});
		return result;
	} else {
		return '';
	}
}
/* // 表情转字符串 */
export const utf16toEntities = (str) => {
	var patt = /[\ud800-\udbff][\udc00-\udfff]/g; // 检测utf16字符正则 
	str = str.replace(patt, function(char) {
		var H, L, code;
		if (char.length === 2) {
			H = char.charCodeAt(0); // 取出高位 
			L = char.charCodeAt(1); // 取出低位 
			code = (H - 0xD800) * 0x400 + 0x10000 + L - 0xDC00; // 转换算法 
			return "&#" + code + ";";
		} else {
			return char;
		}
	});
	return str;
}
//返回 指定距离当前日期以前   多少天前的时间
// day 几天前
// getDay(day)  当前日期
// getDay(-2)  距今2天前的日期  年-月-日
export function getDay(day) {
	var today = new Date();

	function doHandleMonth(month) {
		var m = month;

		if (month.toString().length == 1) {
			m = "0" + month;
		}

		return m;
	}

	var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;

	today.setTime(targetday_milliseconds); //注意，这行是关键代码

	var tYear = today.getFullYear();

	var tMonth = today.getMonth();

	var tDate = today.getDate();

	tMonth = doHandleMonth(tMonth + 1);

	tDate = doHandleMonth(tDate);

	return tYear + "-" + tMonth + "-" + tDate;
}
/**
 * 获取距离指定时间还有多少天
 * @param {String | Number | Date} dateTime 日期时间
 * @example
 * ```javascript
 *     getDistanceSpecifiedTime('2019/02/02 02:02:00');
 *     getDistanceSpecifiedTime(1549036800000);
 *     getDistanceSpecifiedTime(new Date("2019/2/2 00:00:00"));
 * ```
 */
export function getDistanceSpecifiedTime(dateTime) {
	// 指定日期和时间
	var EndTime = new Date(dateTime);
	// 当前系统时间
	var NowTime = new Date();
	var t = EndTime.getTime() - NowTime.getTime();
	var d = Math.floor(t / 1000 / 60 / 60 / 24);
	var h = Math.floor(t / 1000 / 60 / 60 % 24);
	var m = Math.floor(t / 1000 / 60 % 60);
	var s = Math.floor(t / 1000 % 60);
	var html = d + " 天" + h + " 时" + m + " 分" + s + " 秒";
	return d > 0 ? d - 1 : -d - 1
}
//1. 默认返回当前  年-月-日
// 2.处理时间戳 为年月日  转换为指定间隔符 默认‘-’
//*timestamp没有传就返回当前时间
//*space没有传就 y-m-d 格式
//后端给的时间戳 位数可能不一样  
export function timestampToTime(timestamp = Date.parse(new Date()), space = '-') {
	if (typeof timestamp == 'number' && timestamp.toString().length > 9) {
		var date = timestamp.toString().length == 10 ? new Date(timestamp * 1000) : new Date(
			timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
		var Y = date.getFullYear() + space;
		var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + space;
		var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
		// var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
		// var m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
		// var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
		// var mi = date.getMilliseconds() < 10 ? '00' + date.getMilliseconds() : date.getMilliseconds() < 100 ? '0' + date
		// 	.getMilliseconds() : date.getMilliseconds();
		// return Y + M + D + ' ' + h + m + s + ' ' + mi;
		return Y + M + D;
	} else {
		return timestamp
	}
}
// 限制文字显示长度'...'显示
// value 要处理的字符串
// 指定显示字符串的长度
export function ellipsis(value, length) {
	if (!value) return ''
	if (value.length > length) {
		return value.slice(0, length) + '...'
	}
	return value
}
// 转换字符串，undefined,null等转化为""
export function parseStrEmpty(str) {
	if (!str || str == "undefined" || str == "null") {
		return "";
	}
	return str;
}
// 消除无值 的参数
const isVoid = value => value === '' || value === undefined || value === null
export const deleteInvalidParam = (obj) => {
	const result = {
		...obj
	}
	//console.log('obj', obj)
	return Object.keys(result).reduce((prev, current) => {
		const value = result[current]
		if (!isVoid(value)) {
			prev[current] = value
		}
		return prev
	}, {})
}
// 再次封装跳转
// uni.navigateTo  uni.switchTab uni.navigateBack uni.reLaunch
// url  跳转页面路径||也可以是 要返回的页面数值   string  ||number
// params 跳转传参 string 如'?id=2&num=5'
export function routeTo(url, params = '') {
	console.log(url, params, "跳转");

	if (params == 'reLaunch') {
		if (intercept().indexOf(url) != -1 && !store.getters['user/getUser']) {

			console.log('reLaunch拦截routeTo()未登录,跳转登录页')
			// #ifdef APP-PLUS

			if (uni.getSystemInfoSync().platform != 'windows') {
				console.log('跳转H5login')
				routeTo('/pages/user/login/login')
			} else {
				console.log('跳转PClogin')
				routeTo('/pages/pc/src/login/login')

			}
			// #endif
		} else {
			uni.reLaunch({
				url: url
			})
		}
	} else if (isNaN(Number(url)) && url.indexOf("tabbar") != -1 && url) {
		if (intercept().indexOf(url) != -1 && !store.getters['user/getUser']) {
			console.log('tabbar拦截routeTo()未登录,跳转登录页')
			// #ifdef APP-PLUS

			if (uni.getSystemInfoSync().platform != 'windows') {
				console.log('跳转H5login')
				routeTo('/pages/user/login/login')
			} else {
				console.log('跳转PClogin')
				routeTo('/pages/pc/src/login/login')

			}
			// #endif
		} else {
			uni.switchTab({
				url: url + params
			});
		}
	} else if (isNaN(Number(url)) && url) {
		if (intercept().indexOf(url) != -1 && !store.getters['user/getUser']) {
			console.log('navigateTo拦截routeTo()未登录,跳转登录页')
			// #ifdef APP-PLUS

			if (uni.getSystemInfoSync().platform != 'windows') {
				console.log('跳转H5login')
				routeTo('/pages/user/login/login')
			} else {
				console.log('跳转PClogin')
				routeTo('/pages/pc/src/login/login')

			}
			// #endif
		} else {
			uni.navigateTo({
				url: url + params
			})
		}
	} else if (!isNaN(Number(url)) && url) {
		if (intercept().indexOf('/' + (getCurrentPages()[getCurrentPages().length - 1 - url])) != -1 && !store.getters[
				'user/getUser']) {
			console.log('navigateBack拦截routeTo()未登录,跳转登录页')
			// #ifdef APP-PLUS

			if (uni.getSystemInfoSync().platform != 'windows') {
				console.log('跳转H5login')
				routeTo('/pages/user/login/login')
			} else {
				console.log('跳转PClogin')
				routeTo('/pages/pc/src/login/login')

			}
			// #endif
		} else {
			uni.navigateBack({
				delta: url
			});
		}
	} else {
		console.error("routeTo 参数不合法！")
	}


}
// 点击复制内容
export function copyfun(val) {

	uni.setClipboardData({
		data: val + '' || '',
		success: function() {
			uni.showToast({
				title: Vue.app.$t('copySucceeded'),
				duration: 800,
				icon: "none"
			})
		},
		fail(err) {
			console.log(val, err, "val");
		}
	});

}
//去0 过滤

export function delZero(val) {
	let arr = val.split("");
	const isLargeNumber = (element) => element > 0;
	return val.slice(0, arr.findLastIndex(isLargeNumber) + 1);
}
//除法函数，用来得到精确的除法结果
//说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
//调用：accDiv(arg1,arg2)
//返回值：arg1除以arg2的精确结果

export function getFloat(number, n) {
	n = n ? parseInt(n) : 0;
	if (n <= 0) {
		return Math.round(number);
	}
	number = Math.round(number * Math.pow(10, n)) / Math.pow(10, n); //四舍五入
	number = Number(number).toFixed(n); //补足位数
	return number;
}




// /** 
//  * 时间戳格式化函数 

//  */
export function getDateFormat(time) {
	var date = new Date(time);
	var year = date.getFullYear() + '-';
	var month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	var dates = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
	var hour = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()) + ':';
	var min = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + ':';
	var second = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds());
	return year + month + dates + hour + min + second;
	// return result
}

export function calculateMA(dayCount, data) {
	var result = [];
	for (var i = 0, len = data.length; i < len; i++) {
		if (i < dayCount) {
			result.push('-');
			continue;
		}
		var sum = 0;
		for (var j = 0; j < dayCount; j++) {
			sum += +data[i - j][1];
		}
		result.push(sum / dayCount);
	}
	return result;
}


//加  精度计算
//加法函数，用来得到精确的加法结果
//说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
//调用：floatAdd(arg1,arg2)
//返回值：arg1加上arg2的精确结果
function floatAdd(arg1, arg2) {
	var r1, r2, m;
	try {
		r1 = arg1.toString().split(".")[1].length
	} catch (e) {
		r1 = 0
	}
	try {
		r2 = arg2.toString().split(".")[1].length
	} catch (e) {
		r2 = 0
	}
	m = Math.pow(10, Math.max(r1, r2));
	return (arg1 * m + arg2 * m) / m;
}

//减  精度计算
//减法函数，用来得到精确的减法结果
//说明：javascript的减法结果会有误差，在两个浮点数相减的时候会比较明显。这个函数返回较为精确的减法结果。
//调用：floatSub(arg1,arg2)
//返回值：arg1减上arg2的精确结果
function floatSub(arg1, arg2) {
	var r1, r2, m, n;
	try {
		r1 = arg1.toString().split(".")[1].length
	} catch (e) {
		r1 = 0
	}
	try {
		r2 = arg2.toString().split(".")[1].length
	} catch (e) {
		r2 = 0
	}
	m = Math.pow(10, Math.max(r1, r2));
	//动态控制精度长度 
	n = (r1 >= r2) ? r1 : r2;
	return ((arg1 * m - arg2 * m) / m).toFixed(n);
}

//乘  精度计算
//乘法函数，用来得到精确的乘法结果
//说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
//调用：floatMul(arg1,arg2)
//返回值：arg1乘以arg2的精确结果
function floatMul(arg1, arg2) {
	var m = 0,
		s1 = arg1.toString(),
		s2 = arg2.toString();
	try {
		m += s1.split(".")[1].length
	} catch (e) {}
	try {
		m += s2.split(".")[1].length
	} catch (e) {}
	return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}


//除  精度计算

//除法函数，用来得到精确的除法结果
//说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
//调用：floatDiv(arg1,arg2)
//返回值：arg1除以arg2的精确结果
function floatDiv(arg1, arg2) {
	var t1 = 0,
		t2 = 0,
		r1, r2;
	try {
		t1 = arg1.toString().split(".")[1].length
	} catch (e) {}
	try {
		t2 = arg2.toString().split(".")[1].length
	} catch (e) {}

	r1 = Number(arg1.toString().replace(".", ""));

	r2 = Number(arg2.toString().replace(".", ""));
	return (r1 / r2) * Math.pow(10, t2 - t1);
}
