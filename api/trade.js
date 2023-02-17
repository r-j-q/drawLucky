import request from "@/utils/request.js"
export default {

    // 查询币种说明接口
    getIntroduction(params) {
        return request("/usdttrade/currencyIntroduction/getIntroduction", params, {
            method: "GET",
            loading: true
        })
    },


    // 查询余额/查询资产接口
    getBalanceOrAssets(params) {
        return request("/usdttrade/tbWallet/getBalanceOrAssets", params, {
            method: "POST",
            loading: false
        })
    },




    // 用户委托挂买单
    buy(params) {
        return request("/usdttrade/transactions/c2c/buy", params, {
            method: "POST",
            loading: false
        })
    },
    // 用户委托挂卖单
    sell(params) {
        return request("/usdttrade/transactions/c2c/sell", params, {
            method: "POST",
            loading: false
        })
    },

    // 查询币币交易记录/期货交易记录接口
    getTransactions(params) {
        return request("/usdttrade/transactions/getTransactions", params, {
            method: "GET",
            loading: false
        })
    },


    // 用户发起期货下注
    bet(params) {
        return request("/usdttrade/transactions/c2b/bet", params, {
            method: "POST",
            loading: true
        })
    },


    // 查询玩法接口

    getCurrencyPlayMethod(params) {
        return request("/usdttrade/currencyPlayMethod/getCurrencyPlayMethod", params, {
            method: "GET",
            loading: false
        })
    },






}
