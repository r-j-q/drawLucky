package com.example.usdttrade.resultEntity;

public final class MsgData {
    /**
     * 信息不完整
     */
    public static final String Parameter_ERROR = "A00000001";
    /**
     * 网络异常,请稍后再试!
     */
    public static final String Network_ERROR = "A00000002";
    /**
     * 服务器内部错误!
     */
    public static final String Server_ERROR = "A00000003";
    /**
     * 用户注册功能关闭
     */
    public static final String Status_ERROR = "A00000004";
    /**
     * 系统已开启邀请码强制输入
     */
    public static final String invitationCode_ERROR = "A00000005";
    /**
     * 不是本人无法注销
     */
    public static final String delUser_ERROR = "A00000006";
    /**
     * 第三方验证码发送失败
     */
    public static final String verifyCodeSent_ERROR = "A00000007";
    /**
     * 账号异地登录
     */
    public static final String RemoteLogin_ERROR = "A00000008";
    /**
     * 第三方通道网络错误
     */
    public static final String ThirdPartyNetwork_ERROR = "A00000500";
    /**
     * 验证码生成成功
     */
    public static final String VerificationCode_OK = "A01010001";
    /**
     * 验证码生成失败
     */
    public static final String VerificationCode_ERROR = "A01010002" ;
    /**
     * 保存图片成功
     */
    public static final String SaveImage_OK = "A01020001";
    /**
     * 保存图片失败
     */
    public static final String SaveImage_ERROR = "A01020002" ;
    /**
     * 文件格式不支持
     */
    public static final String SaveFile_ERROR = "A01020003";
    /**
     * 图片大小不能超过10M
     */
    public static final String SaveImageSize_ERROR = "A01020004";
    /**
     * 视频大小不能超过200M
     */
    public static final String SaveVoideSize_ERROR = "A01020005";
    /**
     * 保存文件失败
     */
    public static final String File_ERROR = "A01020006";
    /**
     * 保存文件成功
     */
    public static final String SaveFile_OK = "A01020007";
    /**
     * 文件名不合法
     */
    public static final String FileName_ERROR = "A01020008";
    /**
     * 文件不存在
     */
    public static final String FileNo_ERROR = "A01020009";
    /**
     * 文件删除成功
     */
    public static final String DelFile_OK = "A01020010";
    /**
     * 验证码输入错误
     */
    public static final String Code_ERROR = "A01030001";
    /**
     * 验证码已失效
     */
    public static final String CodeDate_ERROR = "A01030003";
    /**
     * 邀请码已过期
     */
    public static final String invitationCodeOverdue_ERROR = "A01030002";
    /**
     * 账号已存在
     */
    public static final String User_ERROR ="A01030101";
    /**
     * 账号未注册
     */
    public static final String UserName_ERROR ="A01030102";
    /**
     * 手机号未绑定账号
     */
    public static final String UserPhone_ERROR ="A01030113";
    /**
     * 系统未开放手机号登录
     */
    public static final String UserPhoneLogin_ERROR ="A01030114";
    /**
     * 邮箱未绑定账号
     */
    public static final String UserEmail_ERROR ="A01030115";
    /**
     * 系统未开放邮箱号登录
     */
    public static final String UserEmailLogin_ERROR ="A01030116";
    /**
     * 手机号未输入，请重新输入！
     */
    public static final String phoneNull_ERROR ="A01030117";
    /**
     * 手机号不符合规定，请重新输入！
     */
    public static final String phone_ERROR ="A01030118";
    /**
     * 邮箱不符合规定，请重新输入！
     */
    public static final String email_ERROR ="A01030119";
    /**
     * 该邮箱已绑定，请重新输入！
     */
    public static final String emailUser_ERROR ="A01030120";
    /**
     * 该账号已绑定邮箱！
     */
    public static final String userEmail_ERROR ="A01030121";
    /**
     * 该手机号已绑定！
     */
    public static final String phoneUser_ERROR ="A01030122";
    /**
     * 该账号已绑定手机号！
     */
    public static final String userBDPhone_ERROR ="A01030123";

    /**
     * 该账号未绑定手机号！++++
     */
    public static final String usernameBDPhone_ERROR ="A01030124";

    /**
     * 该账号未绑定邮箱！+++++
     */
    public static final String usernameBDEmail_ERROR ="A01030125";
    /**
     * 添加用户成功
     */
    public static final String AddUser_OK = "A01030103";
    /**
     * 添加用户失败
     */
    public static final String AddUser_ERROR ="A01030104" ;
    /**
     * 登录成功
     */
    public static final String Login_OK ="A01030105";
    /**
     * 登录失败
     */
    public static final String Login_ERROR = "A01030106" ;
    /**
     * 修改密码成功
     */
    public static final String updatePWD_OK = "A01030107" ;
    /**
     * 修改密码失败
     */
    public static final String updatePWD_ERROR = "A01030108" ;
    /**
     * 新密码与确认密码不一致
     */
    public static final String PWD_ERROR = "A01030110" ;
    /**
     * 登录密码校验失败
     */
    public static final String LOGINPWD_Type_ERROR = "A01030111" ;
    /**
     * 请输入6位数字密码
     */
    public static final String PAYPWD_Type_ERROR = "A01030112" ;
    /**
     * 重置密码成功
     */
    public static final String backPWD_OK = "A01030130" ;
    /**
     * 重置密码失败
     */
    public static final String backPWD_ERROR = "A01030131" ;
    /**
     * token过期
     */
    public static final String Token_ERROR = "A01030201" ;

    /**
     * 密码错误
     */
    public static final String Password_ERROR = "A01030202" ;
    /**
     * 密码错误次数达到上限
     */
    public static final String PasswordNum_ERROR =  "A01030203" ;
    /**
     * 账号已锁死
     */
    public static final String AccountLocked_ERROR = "A01030204" ;
    /**
     * 退出登录成功
     */
    public static final String Logout_OK = "A01030205";
    /**
     * 退出登录失败
     */
    public static final String Logout_ERROR = "A01030206";
    /**
     * 获取自身信息成功
     */
    public static final String GetUser_OK = "A01030207";
    /**
     * 获取自身信息失败
     */
    public static final String GetUser_ERROR = "A01030208";
    /**
     * 用户ID和token用户不相符
     */
    public static final String Account_Incorrect_ERROR = "A01030209";
    /**
     * token为空
     */
    public static final String TokenNull_ERROR = "A01030210";
    /**
     * 修改用户成功
     */
    public static final String UpdateUser_OK = "A01030301";
    /**
     * 修改用户失败
     */
    public static final String UpdateUser_ERROR ="A01030302" ;
    /**
     * 删除用户成功
     */
    public static final String DelUser_OK = "A01030401";
    /**
     * 删除用户失败
     */
    public static final String DelUser_ERROR ="A01030402" ;
    /**
     * 用户余额不足
     */
    public static final String userBalanceNotEnough_ERROR = "A01030404";

    //---------------------------------8月22号已更新------------------------------------------------------

    /**
     * 修改用户支付密码成功
     */
    public static final String UpdatePayPwd_OK = "A01030501";
    /**
     * 修改用户支付密码失败
     */
    public static final String UpdatePayPwd_ERROR ="A01030502" ;
    /**
     * 设置用户支付密码成功
     */
    public static final String SetPayPwd_OK = "A01030503";
    /**
     * 设置用户支付密码失败
     */
    public static final String SetPayPwd_ERROR ="A01030504" ;
    /**
     * 用户已设置支付密码
     */
    public static final String SetPayPwd_has_ERROR ="A01030505" ;
    /**
     * 用户未设置支付密码
     */
    public static final String SetPayPwd_null_ERROR ="A01030506" ;
    /**
     * 用户支付密码错误
     */
    public static final String UserPayPwd_ERROR ="A01030507" ;
    /**
     *重置支付密码成功
     */
    public static final String ResetPayPwd_ok ="A01030508" ;
    /**
     *重置支付密码失败
     */
    public static final String ResetPayPwd_ERROR ="A01030509" ;
    /*
     * 修改日志成功
     */
    public static final String getLogs_OK = "A01040101";
    /**
     * 修改日志失败
     */
    public static final String getLogs_ERROR ="A01040102" ;

    //---------------------------------8月23号已更新------------------------------------------------------
    /**
     * 用户银行账号验证失败
     */
    public static final String BankCardCode_ERROR ="B01000001" ;
    /**
     * 用户银行名称验证失败
     */
    public static final String BankName_ERROR ="B01000002" ;
    /**
     * 用户银行卡禁用
     */
    public static final String BankCardTyoe_ERROR ="B01000003" ;
    /**
     * 该账号未绑定
     */
    public static final String getBankCardNULL_ERROR ="B01000004" ;


    /**
     * 查询用户绑定的所有的银行账号成功
     */
    public static final String getBankCard_OK ="B01010101" ;
    /**
     * 查询用户绑定的所有的银行账号失败
     */
    public static final String getBankCard_ERROR ="B01010102" ;

    /**
     * 用户还未绑定银行账号
     */
    public static final String getBankCard_NULL ="B01010103" ;
    /**
     * 用户绑定银行账号成功
     */
    public static final String setBankCard_OK ="B01010201" ;
    /**
     * 用户绑定银行账号失败
     */
    public static final String setBankCard_ERROR ="B01010202" ;
    /**
     * 该银行账号已绑定
     */
    public static final String setBankCardIsBD_ERROR ="B01010203" ;
    /**
     * 用户删除银行账号成功
     */
    public static final String delBankCard_OK ="B01010301" ;
    /**
     * 用户删除银行账号失败
     */
    public static final String delBankCard_ERROR ="B01010302" ;
    /**
     * 用户修改银行账号成功
     */
    public static final String updateBankCard_OK ="B01010401" ;
    /**
     * 用户修改银行账号失败
     */
    public static final String updateBankCard_ERROR ="B01010402" ;
    /**
     * 查询充值记录成功
     */
    public static final String getPR_OK ="C01000101" ;
    /**
     * 查询充值记录失败
     */
    public static final String getWR_ERROR ="C01000102" ;
    /**
     * 删除充值记录成功
     */
    public static final String delWR_OK ="C01000201" ;
    /**
     * 删除充值记录失败
     */
    public static final String delWR_ERROR ="C01000202" ;
    /**
     * 该充值记录不存在
     */
    public static final String WR_NULL_ERROR ="C01000203" ;
    /**
     * 查询提款记录成功
     */
    public static final String getWR_OK ="C01010101" ;
    /**
     * 查询提款记录失败
     */
    public static final String getPR_ERROR ="C01010102" ;
    /**
     * 删除提款记录成功
     */
    public static final String delPR_OK ="C01010201" ;
    /**
     * 删除提款记录失败
     */
    public static final String delPR_ERROR ="C01010202" ;
    /**
     * 该提款记录不存在
     */
    public static final String PR_NULL_ERROR ="C01010203" ;
    /**
     * 查询提款记录成功
     */
    public static final String getBI_OK ="C01020101" ;
    /**
     * 查询提款记录失败
     */
    public static final String getBI_ERROR ="C01020102" ;
    /**
     * 删除提款记录成功
     */
    public static final String delBI_OK ="C01020201" ;
    /**
     * 删除提款记录失败
     */
    public static final String delBI_ERROR ="C01020202" ;
    /**
     * 该提款记录不存在
     */
    public static final String BI_NULL_ERROR ="C01020203" ;
    /**
     * 查询活动成功
     */
    public static final String getNormalTasks_OK ="C02010001" ;
    /**
     * 查询活动失败
     */
    public static final String getNormalTasks_ERROR ="C02010002" ;
    /**
     * 根据id查询任务进度成功
     */
    public static final String getTaskSchedule_OK ="C02020001" ;
    /**
     * 该任务不存在
     */
    public static final String getTaskSchedule_ERROR ="C02020002" ;
    /**
     * 根据id查询当天的任务记录
     */
    public static final String getTaskRecord_OK ="C02030001" ;
    /**
     * 当天无任务记录
     */
    public static final String getTaskRecord_ERROR ="C02030002" ;
    /**
     * 网站未找到
     */
    public static final String siteNotFound_ERROR = "C01000301";
    /**
     * 系统维护中
     */
    public static final String siteMaintenance_ERROR = "C01000302";
    /**
     * 系统配置无法提现
     */
    public static final String siteCanNotWithdrawal_ERROR = "C01000303";
    /**
     * 未在系统配置提现时间内
     */
    public static final String siteOutOfWithdrawalTimeRange_ERROR = "C01000304";
    /**
     * 超过系统配置的提现限额
     */
    public static final String siteWithdrawalAmountOutOfLimit_ERROR = "C01000305";
    /**
     * 提款金额不在VIP提款限额范围内
     */
    public static final String siteWithdrawalAmountOutOfVipLimit_ERROR = "C01000306";
    /**
     * VIP等级数据错误
     */
    public static final String vipLevelInvalid_ERROR = "C01000307";
    /**
     * 系统配置提现时间段配置错误，请联系客服
     */
    public static final String site_Withdrawal_Date_Range_Config_ERROR = "C01000308";
    /**
     * 订单生成成功
     */
    public static final String prepayRecords_OK = "C01000401";
    /**
     * 通道未找到
     */
    public static final String channelNotFound_ERROR = "C01000402";
    /**
     * 通道关闭中
     */
    public static final String channelClosed_ERROR = "C01000403";
    /**
     * 不符合通道金额规则
     */
    public static final String channelMoneyNotSupport_ERROR = "C01000404";
    /**
     * 第三方通道未配置网关ID
     */
    public static final String channelThirdPartyNoGateway_ERROR = "C01000405";
    /**
     * 第三方支付通道下单失败
     */
    public static final String thirdPartyPrepayFail_ERROR = "C01000406";
    /**
     * 没有设置对应钱包地址
     */
    public static final String walletNotConfig_ERROR = "C01000407";
    /**
     * 提款成功
     */
    public static final String withdrawals_OK = "C02000401";
    /**
     * 根据id查询任务进度成功
     */
    public static final String getIndianaBuyRecords_OK ="C02040001" ;
    /**
     * 该任务不存在
     */
    public static final String getIndianaBuyRecords_ERROR ="C02040002" ;
    /**
     * 查询夺宝列表成功
     */
    public static final String getFriendList_OK ="C02050001" ;
    /**
     * 查询夺宝列表失败
     */
    public static final String getFriendList_ERROR ="C02050002" ;
    /**
     * 查询夺宝中奖信息成功
     */
    public static final String getRaidersWinningInformation_OK ="C02050003" ;
    /**
     * 查询夺宝中奖信息失败
     */
    public static final String getRaidersWinningInformation_ERROR ="C02050004" ;
    //----------------------------8月27号已更新----------------------------------------

    /**
     * 銀行卡不存在
     */
    public static final String addWithdrawalCardNotFound_ERROR = "C02060001";
    /**
     * 提现银行卡不是自己的 or 银行卡状态关闭
     */
    public static final String addWithdrawalCardInvalid_ERROR = "C02060002";
    /**
     * 提现金额错误
     */
    public static final String addWithdrawalAmountInvalid_ERROR = "C02060003";
    /**
     * 提现活动充值比例和流水不符合条件
     */
    public static final String addWithdrawalActivityRechargeFlow_ERROR = "C02060004";
    /**
     * 提现满足活动条件
     */
    public static final String getAddWithdrawalActivity_OK = "C02060005";
    /**
    * 充值提现活动类型错误
    */
    public static final String RechargeWithdrawalActivityTypeInvalid_ERROR = "C02060006";
    /**
     * 提现超出当日允许次数
     */
    public static final String addWithdrawalOutOfCountLimit_ERROR = "C02060007";
    /**
     * 领取任务物品任务不存在
     */
    public static final String addTaskRecordTaskNotFound_ERROR = "C02070001";
    /**
     * 领取任务物品任务已過期
     */
    public static final String addTaskRecordStatusInvalid_ERROR = "C02070002";
    /**
     * 领取任务物品已過截至日期
     */
    public static final String addTaskRecordOutOfTime_ERROR = "C02070003";
    /**
     * 领取任务失败
     */
    public static final String addTask_ERROR = "C02070004";
    /**
     * 领取任务當日已經領取過
     */
    public static final String addTaskRecordExists_ERROR = "C02070005";
    /**
     * 领取成功
     */
    public static final String addTaskRecord_OK = "C02070006";
    /**
     * 领取任务邀请人数不足
     */
    public static final String addTaskRecordRefereesValidNumNotEnough_ERROR = "C02070007";
    /**
     * 领取任务类型错误
     */
    public static final String addTaskRecordTaskTypeInvalid_ERROR = "C02070008";
    /**
     * 新增夺宝成功
     */
    public static final String addRaidersWinning_OK = "C02080001";
    /**
     * 夺宝游戏未找到
     */
    public static final String addRaidersWinningGameNotFound_ERROR = "C02080002";
    /**
     * 夺宝物品未找到
     */
    public static final String addRaidersWinningGoodsNotFound_ERROR = "C02080003";
    /**
     * 夺宝游戏类型错误
     */
    public static final String addRaidersWinningGameTypeInvalid_ERROR = "C02080004";
    /**
     * 夺宝游戏状态非法
     */
    public static final String addRaidersWinningGameStatusInvalid_ERROR = "C02080005";
    /**
     * 夺宝物品類型錯誤
     */
    public static final String addRaidersWinningTypeInvalid_ERROR = "C02080006";
    /**
     * 夺宝实物用户收货信息不完善
     */
    public static final String addRaidersWinningUserRecipientInvalid_ERROR = "C02080007";
    /**
     * 夺宝奖品存量不足
     */
    public static final String addRaidersWinningGoodsNotEnough_ERROR = "C02080008";
    /**
     * 当日已存在夺宝记录
     */
    public static final String addRaidersWinningExists_ERROR = "C02080009";
    /**
     * 夺宝邀请赠送次数不足
     */
    public static final String addRaidersWinningRefereesNotEnough_ERROR = "C02080010";
    /**
     * 夺宝邀请赠送次数不足系统配置
     */
    public static final String addRaidersWinningGivingCountInvalid_ERROR = "C02080011";
    /**
     * 夺宝物品已开奖
     */
    public static final String addRaidersWinningAlreadyDrawn_ERROR = "C02080012";
    /**
     * 夺宝物品被禁用
     */
    public static final String addRaidersWinningGoodsBanned_ERROR = "C02080013";
    /**
     * 夺宝参与量超过了限制
     */
    public static final String addRaidersWinningNumOutOfRange_ERROR = "C02080014";
    /**
     * 夺宝物品已下架
     */
    public static final String addRaidersWinningShelved_ERROR = "C02080015";
    /**
     * 查询充值通道成功
     */
    public static final String getChannels_OK ="C02050103" ;
    /**
     * 查询充值通道失败
     */
    public static final String getChannels_ERROR ="C02050104" ;
    /**
     * 查询产品列表成功
     */
    public static final String getFinanceInvestments_OK ="C02050201" ;
    /**
     * 查询产品列表失败
     */
    public static final String getFinanceInvestments_ERROR ="C02050202" ;
    /**
     * 查询产品详情成功
     */
    public static final String getProductDetails_OK ="C02050203" ;
    /**
     * 查询产品详情失败
     */
    public static final String getProductDetails_ERROR ="C02050204" ;
    /**
     * 查询所有理财成功
     */
    public static final String getRetiredRecords_OK ="C02050301" ;
    /**
     * 查询所有理财失败
     */
    public static final String getRetiredRecords_ERROR ="C02050302" ;
    /**
     * 查询未赎回理财记录成功
     */
    public static final String getRedemptionRecords_OK ="C02050303" ;
    /**
     * 查询未赎回理财记录失败
     */
    public static final String getRedemptionRecords_ERROR ="C02050304" ;

    /**
     * 查询期号时间成功
     */
    public static final String getIssueTime_OK ="C02060101" ;
    /**
     * 查询期号时间失败
     */
    public static final String getIssueTime_ERROR ="C02060102" ;
    /**
     * 查询历史期号成功
     */
    public static final String getHistoryIssue_OK ="C02060201" ;
    /**
     * 查询历史期号失败
     */
    public static final String getHistoryIssue_ERROR ="C02060202" ;
    /**
     * 查询玩法成功
     */
    public static final String getPlayMethod_OK ="C02060301" ;
    /**
     * 查询玩法失败
     */
    public static final String getPlayMethod_ERROR ="C02060302" ;

    //--------------------------------8月30号已更新-----------------
    /**
     * 查询排行榜成功
     */
    public static final String getRanking_OK ="C02060303" ;
    /**
     * 查询排行榜失败
     */
    public static final String getRanking_ERROR ="C02060304" ;
    /**
     * 分页查询下注记录成功
     */
    public static final String getLuckyBettingRecords_OK ="C02060401" ;
    /**
     * 分页查询下注记录失败
     */
    public static final String getLuckyBettingRecords_ERROR ="C02060402" ;
    /**
     * 查询网站信息成功
     */
    public static final String getSiteConfiguration_OK ="C02060501" ;
    /**
     * 查询网站信息失败
     */
    public static final String getSiteConfiguration_ERROR ="C02060502" ;
    /**
     * 查询网站公告成功
     */
    public static final String getWebSiteAnnouncement_OK ="C02060503" ;
    /**
     * 查询网站公告失败
     */
    public static final String getWebSiteAnnouncement_ERROR ="C02060504" ;
    /**
     * 查询推广文本成功
     */
    public static final String getPromoteTexts_OK ="C02060505" ;
    /**
     * 查询推广文本失败
     */
    public static final String getPromoteTexts_ERROR ="C02060506" ;
    /**
     * 新增购买理财成功
     */
    public static final String addFinancialBuyRecords_OK = "C03010001";
    /**
     * 新增购买理财失败 - 理财产品不存在
     */
    public static final String addFinancialBuyRecordsFinancialNotFound_ERROR = "C03010002";
    /**
     * 新增购买理财失败 - 不在合法时间内
     */
    public static final String addFinancialBuyRecordsDatetimeInvalid_ERROR = "C03010003";
    /**
     * 新增购买理财失败 - 金额未超过起买金额
     */
    public static final String addFinancialBuyRecordsAmountInvalid_ERROR = "C03010004";
    /**
     * 新增购买理财失败 - 不支持自动续期
     */
    public static final String addFinancialBuyRecordsAutoRenewalNotSupport_ERROR = "C03010005";
    /**
     * 新增赎回理财成功
     */
    public static final String addFinancialRedemptionRecords_OK = "C03020001";
    /**
     * 理财购买记录未找到
     */
    public static final String addFinancialRedemptionRecordsNotFount_ERROR = "C03020002";
    /**
     * 未到赎回时间
     */
    public static final String addFinancialRedemptionDatetimeInvalid_ERROR = "C03020003";
    /**
     * 利率类型错误
     */
    public static final String addFinancialRedemptionRateTypeInvalid_ERROR = "C03020004";
    /**
     * 赎回状态不为进行中
     */
    public static final String addFinancialRedemptionStatusInvalid_ERROR = "C03020005";
    /**
     * 理财产品赎回时利率未找到
     */
    public static final String addFinancialRedemptionRateNotFound_ERROR = "C03020006";
    /**
     * 新增大转盘下注成功
     */
    public static final String add3XYZPRecords_OK = "C03030001";
    /**
     * 大转盘游戏未找到
     */
    public static final String add3XYZPGameNotFound_ERROR = "C03030002";
    /**
     * 大转盘游戏类型错误
     */
    public static final String add3XYZPGameTypeInvalid_ERROR = "C03030003";
    /**
     * 大转盘游戏状态非法
     */
    public static final String add3XYZPGameStatusInvalid_ERROR = "C03030004";
    /**
     * 大转盘游戏玩法未找到
     */
    public static final String add3XYZPGameMethodNotFound_ERROR = "C03030005";
    /**
     * 该期已停止下注
     */
    public static final String add3XYZPGame_ERROR = "C03030006";
    /**
     * 大转盘游戏下注金额超限
     */
    public static final String add3XYZPGameAmountOutOfLimit_ERROR = "C03030007";
    /**
     * 大转盘游戏下注内容空白
     */
    public static final String add3XYZPGameContentEmpty_ERROR = "C03030008";
    /**
     * 大转盘游戏下注内容有重复
     */
    public static final String add3XYZPGameContentRepeat_ERROR = "C03030009";
    /**
     * 大转盘游戏下注内容格式错误
     */
    public static final String add3XYZPGameContentInvalid_ERROR = "C03030010";
    /**
     * 大转盘游戏玩法格式错误
     */
    public static final String add3XYZPGameMethodsInvalid_ERROR = "C03030011";
    /**
     * 大转盘游戏下注倍数只能正整数
     */
    public static final String add3XYZPGameTimesInvalid_ERROR = "C03030012";
    /**
     * 大转盘游戏规则错误
     */
    public static final String add3XYZPGamePlayMethodInvalid_ERROR = "C03030013";
    /**
     * 系统未开启赠送功能
     */
    public static final String NotOpenGiving_ERROR ="C02100001" ;
    /**
     * 查询商品详情成功
     */
    public static final String getGoodsDetails_OK = "C03040201";
    /**
     * 查询商品详情失败
     */
    public static final String getGoodsDetails_ERROR = "C03040202";
    /**
     * 商品不存在+++
     */
    public static final String getGoods_ERROR = "C03040203";


    //------------------------------9月20号已更新-------------------------

    /**
     * 第三方通道API类型错误
     */
    public static final String getThirdPartyApiTypeInvalid_ERROR = "C04000100";
    /**
     * 该API——TYPE第三方通道不存在
     */
    public static final String getThirdPartyApiNotFound_ERROR = "C04000101";
    /**
     * 该API——TYPE第三方通道已关闭
     */
    public static final String getThirdPartyApiClosed_ERROR = "C04000101";


    //------------------------------10月20号新增-------------------------.

    /**
     * 充值证明上传成功
     */
    public static final String Charge_Prove_Upload_OK = "D01010100";
    /**
     * 充值证明不能为空
     */
    public static final String Charge_Prove_NULL_ERROR = "D01010101";

    /**
     * 该用户已完成实名认证
     */
    public static final String REALNAMEAUTHENTICATION_ERROR = "D01010102";

    /**
     * 该用户实名认证成功
     */
    public static final String REALNAMEAUTHENTICATION_OK = "D01010103";

    /**
     * 查询观看记录成功
     */
    public static final String selectWatchRecords_OK = "D01010104";


    /**
     * 查询返利等级成功
     */
    public static final String getRebateLevel_OK = "D01010105";

    /**
     * 查询今日视频收入成功
     */
    public static final String getVideoRevenue_OK = "D01010106";
    /**
     * 查询会员中心成功
     */
    public static final String getMemberCenter_OK = "D01010107";
    /**
     * 随机查询视频
     */
    public static final String getVideos_OK = "D01010108";

  /**
     * 随机查询视频
     */
    public static final String addVideos_OK = "D01010301";


    /**
     * 充值证明文件过大
     */
    public static final String Charge_Prove_Out_Of_Size_ERROR = "D02010201";

    /**
     * 查询我的报表
     */
    public static final String getMyReport_OK = "D01010201";

    /**
     * 查询每日报表
     */
    public static final String getReport_OK = "D01010202";
    /**
     * 查询我的团队
     */
    public static final String getUserTeams_OK = "D01010203";

    /**
     * 查询团队报告
     */
    public static final String getTeams_OK = "D01010204";
    /**
     * 查询从属报表
     */
    public static final String getSubordinates_OK = "D01010205";


    /**
     * 充值证明文件存储失败
     */
    public static final String Charge_Prove_Save_Fail_ERROR = "D02010202";

    /**
     * 产品下单成功
     */
    public static final String Order_Purchase_Add_New_OK = "D02010301";
    /**
     * 产品下单记录已存在
     */
    public static final String Order_Purchase_Add_Already_ERROR = "D02010302";
    /**
     * 产品下单产品未找到
     */
    public static final String Order_Purchase_Add_Product_Not_Found_ERROR = "D02010303";
    /**
     * 产品下单产品已下架
     */
    public static final String Order_Purchase_Add_Product_Off_Shelves_ERROR = "D02010304";
    /**
     * 免费产品限购一次
     */
    public static final String Order_Purchase_Free_Only_Once_ERROR = "D02010305";
    /**
     * 11:40-0点期间不能下单
     */
    public static final String Order_Purchase_Not_In_Service_ERROR = "D02010306";
    /**
     * 发起观看视频成功
     */
    public static final String Watch_Video_Begin_OK = "D02010401";
    /**
     * 发起观看失败，没找到可用的订单记录
     */
    public static final String Watch_Video_Product_Purchase_Not_Found_ERROR = "D02010402";
    /**
     * 发起观看失败，没找到可用的订单记录
     */
    public static final String Watch_Video_Task_Completed_Today_ERROR = "D02010403";
    /**
     * 结算观看视频成功
     */
    public static final String Settle_Watch_Video_OK = "D02010501";
    /**
     * 结算观看视频失败，观看记录未找到
     */
    public static final String Settle_Watch_Video_Record_Not_Found_ERROR = "D02010502";
    /**
     * 结算观看视频失败，观看记录已结算
     */
    public static final String Settle_Watch_Video_Record_Settled_Already_ERROR = "D02010503";
    /**
     * 结算观看视频失败，观看时间不足10s
     */
    public static final String Settle_Watch_Video_Record_Time_Not_Enough_ERROR = "D02010504";

    /**
     * 查询下属等级不能大于6级
     */
    public static final String select_level_ERROR = "D02010505";

    /**
     * 暂停注册
     */
    public static final String add_User_ERROR = "C04000202";
    /**
     * 获取用户余额成功
     */
    public static final String getUserBalance_OK = "C04000203";
    /**
     * 获取分享图片成功
     */
    public static final String getSharingImage_OK = "C04000301";

    /**
     * 获取分享图片类型错误
     */
    public static final String getSharingImageTypeInvalid_ERROR = "C04000302";
    /**
     * 获取分享图片公告对象未找到
     */
    public static final String getSharingImageSharingUrlInvalid_ERROR = "C04000303";
    /**
     * 获取分享图片用户邀请码错误
     */
    public static final String getSharingImageinvitationCodeInvalid_ERROR = "C04000304";
    /**
     * 获取分享图片用户邀请码错误
     */
    public static final String getSharingImageNotFound_ERROR = "C04000305";
    /**
     * 业务员推广码不存在
     */
    public static final String salesmanPromotionCode_ERROR = "C04000306";
    /**
     * 推荐码状态无效
     */
    public static final String invitationCodeStatus_ERROR = "C04000307";
    /**
     * 邀请人限制
     */
    public static final String InviterRestriction_ERROR = "C04000308";
    /**
     * 查询会员等级列表成功
     */
    public static final String getVipLevelList_ok = "D01000201";

    /**
     * 用户ID不能为空
     */
    public static final String userHasNoRevenueToday_ERROR = "E0000101";

    /**
     * 所属银行不能为空
     */
    public static final String bankNameNull_ERROR = "E0000102";

    /**
     * 银行账号不能为空
     */
    public static final String bankCardCodeNull_ERROR = "E0000103";

    /**
     * 支付密码不能为空
     */
    public static final String payPasswordNull_ERROR = "E0000104";


    /**
     * 查询客服成功
     */
    public static final String getCustomer_OK = "E0000201";

    /**
     * 账号未激活
     */
    public static final String NOACTIVATION_ERROR = "E0000202";

    /**
     * 注册成功
     */
    public static final String registered_OK = "E0000203";
    /**
     * 查询前端域名成功
     */
    public static final String getFrontendHosts_OK = "E0000205";
    /**
     * 验证接口获取失败，请联系客服.
     */
    public static final String botUsername_ERROR = "E0000204";
    /**
     * 地区编码禁用
     */
    public static final String RegionCodeDisabled_ERROR = "E0000206";
    /**
     * 钱包不存在
     */
    public static final String Wallet_Not_Found_ERROR = "E10000000";
    /**
     * 钱包已锁定
     */
    public static final String Wallet_LOCKED_ERROR = "E10000001";
    /**
     * 新建钱包失败
     */
    public static final String Wallet_Create_Failure_ERROR = "E10000002";
    /**
     * 不可跨币种划转
     */
    public static final String Wallet_Transfer_Cross_Currency_ERROR = "E10000003";
    /**
     * 钱包币种不对应
     */
    public static final String Wallet_Currency_Mismatch_ERROR = "E10000004";
    /**
     * 不支持的币种
     */
    public static final String Currency_Not_Support = "E10000005";
    /**
     * 不支持的钱包类型
     */
    public static final String Wallet_Type_Not_Support = "E10000006";
    /**
     *  提卖买设置未找到
     */
    public static final String Out_Fee_Rate_Not_Found = "E10000007";
    /**
     *  提买卖币超出限制
     */
    public static final String Out_Fee_Rate_Out_Of_Amount_Range = "E10000008";
    /**
     *  提买卖币超每日次数
     */
    public static final String Out_Fee_Rate_Out_Of_Count_Range = "E10000009";
    /**
     *  提买卖币超VIP每日提币总量
     */
    public static final String Out_Fee_Rate_Out_Of_Sum_Range = "E10000010";
    /**
     * 查询质押产品成功
     */
    public static final String getPledgeProducts_OK = "E20100001";
    /**
     * 查询支持交易的币种成功
     */
    public static final String getCurrencySupported_OK = "E20100002";
    /**
     * 查询手续费成功
     */
    public static final String getWalletSupported_OK = "E20100003";
    /**
     * 查询地区/币种成功
     */
    public static final String getRegiond_OK = "E20200001";
    /**
     * 查询手续费成功
     */
    public static final String getTBOutFeeRate_OK = "E20200002";
    /**
     * 查询期货玩法成功
     */
    public static final String getCurrencyPlayMethod_OK = "E20200003";
    /**
     * 查询余额/查询资产成功
     */
    public static final String getBalanceOrAssets_OK = "E20200101";
    /**
     * 查询币币交易记录/期货交易记录成功
     */
    public static final String getTransactions_OK = "E20300101";
    /**
     * 查询账单成功
     */
    public static final String getBills_OK = "E20300201";
    /**
     * 查询法币交易记录成功
     */
    public static final String getLegalCurrencyTransaction_OK = "E20300301";
    /**
     * 查询质押记录成功
     */
    public static final String getPledgeRecords_OK = "E20300302";
    /**
     * 原邮箱验证码错误
     */
    public static final String oldCode_ERROR = "E20300401";
    /**
     * 新邮箱验证码错误
     */
    public static final String newCode_ERROR = "E20300402";
    /**
     * 支付密码不合法
     */
    public static final String payPwdRegex_ERROR = "E20300403";

    // ------------------------------ 20230104 交易相关 K ------------------------------------//
    /**
     * 交易挂单成功
     */
    public static final String TRANS_OK = "E11000000";
    /**
     * 交易不支持的钱包、币种
     */
    public static final String TRANS_CURRENCY_WALLET_NOT_SUPPORT_ERROR = "E11000001";
    /**
     * 不允许买入交易
     */
    public static final String TRANS_INCOME_CLOSED = "E11000002";
    /**
     * 不允许卖出交易
     */
    public static final String TRANS_OUTCOME_CLOSED = "E11000003";
    /**
     * 不允许币币交易
     */
    public static final String TRANS_C2C_CLOSED = "E11000004";
    /**
     * 不允许期货交易
     */
    public static final String TRANS_C2B_CLOSED = "E11000005";
    /**
     * 交易现价错误
     */
    public static final String TRANS_PRICE_ERROR = "E11000006";
    /**
     * 委托价格超过浮动区间
     */
    public static final String TRANS_PRICE_OUT_OF_DIFF_PERCENT_RANGE = "E11000007";
    /**
     * 查询首页轮播图成功
     */
    public static final String getImages_OK = "E11000101";
    /**
     * 用户修改计价方式成功
     */
    public static final String updateUserPricingMethod_OK = "E11000102";
}
