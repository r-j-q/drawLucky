import en from './language/en.js' //英文
import zhHans from './language/zh-Hans.js' //简体中文
import zhHant from './language/zh-Hant.js' //繁体中文
import ja from './language/ja.js' //日文
import fr from './language/fr.js' //法语
import koKR from './language/ko-KR.js' //韩语
import msMY from './language/ms-MY.js' //马来语
import deDE from './language/de-DE.js' //德语
import ruRU from './language/ru-RU.js' //俄语
import thTH from './language/th-TH.js' //泰语
import itIT from './language/it-IT' //意大利语
import ptPT from './language/pt-PT' //葡萄牙语
import trTR from './language/tr-TR' //土耳其语
import viVN from './language/vi-VN' //越南语
import es from './language/es' //西班牙语
export default {
	en,
	'zh-Hans': {
		...zhHans
	},
	'zh-Hant': {
		...zhHant
	},
	ja: {
		...ja
	},
	fr: {
		...fr
	},
	'ko-KR': {
		...koKR
	},
	'ms-MY': {
		...msMY
	},
	'de-DE': {
		...deDE
	},
	'ru-RU': {
		...ruRU
	},
	'th-TH': {
		...thTH
	},
	'it-IT': {
		...itIT
	},
	'pt-PT': {
		...ptPT
	},
	'tr-TR': {
		...trTR
	},
	'vi-VN': {
		...viVN
	},
	'es': {
		...es
	}
}
