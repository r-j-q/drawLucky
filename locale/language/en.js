// import Common from "./data/common/index" //公共模块翻译文件引入
// import User from "./data/user/index" //用户模块翻译文件引入
// import ErrorPage from "./data/error/index"
// import Home from "./data/home/index"
// import Me from "./data/me/index"
// import other from "./data/other/index"
// import pc from "./data/pc/index"
const en = {
	//托管订单
	completed: `Completed`,
	cancelOrder: `Cancel the order`,
	purchaseAmount: `Purchase amount`,
	profit: `income`,
	day: `Day`,
	callDate: `Redemption date`,
	whether: `Whether to cancel the orde`,
	dividend: `dividend time`,
	dueDividend: `Dividend on maturity`,
	dailyDividend: `Daily dividend`,
	escrowAmount: `Escrow amount`,
	dueReturn: `Return upon expiration`,
	redemption: `Redemption at any time`,
	availableBalance: `Available balance`,
	totalIncome: `Estimated total income`,
	readAgree: `I have read and agreed`,
	serviceAgreement: `Platform financial management service agreement`,
	trustProtocol: `<div>
					<p>1. The platform launched interest-bearing account service to provide platform users with value-added services for idle digital assets<br>
2. The interest-bearing account assets will be used for platform derivatives and other subsequent venture capital projects<br>
3. The platform provides risk management services for assets transferred by interest-bearing account users. Relying on the strict risk control system of the platform, the platform fully guarantees the security of users' wealth management service assets and benefits at ease<br>
4. When users use interest-bearing account services, they unconditionally authorize the platform to reasonably allocate and distribute interest-bearing income according to the platform rules<br>
5. When using interest-bearing account services, users should comply with relevant national laws to ensure that the source of assets is legal and compliant<br>
6. When using interest-bearing account services, users should fully understand the risks of digital asset investment, operate cautiously and do their best<br>
7. Users agree that all investment operations on the platform represent their true investment intentions and unconditionally accept the potential risks and benefits brought by investment decisions<br>
8. The platform reserves the right to suspend or terminate the interest-bearing account service. If necessary, the platform can suspend or terminate the interest-bearing account service at any time<br>
9. Due to network delay, computer system failure and other factors that may be irresistible, the execution of interest-bearing services may be delayed, suspended, suspended or deviated. We will try our best to ensure, but will not commit to, the stable and effective operation of the interest-bearing account service execution system. However, due to the above factors, the final execution result of the interest-bearing account service is different from the customer's expectation, and the platform will not assume any responsibility<br>
10. When using interest-bearing account services, users should comply with the provisions of the Financial Management Service Agreement<br>
</p>
				</div>`,

	//产品列表
	managedOrder: `Managed Order`,
	earningsToday: `Expected earnings today`,
	accumulatedIncome: `Accumulated income`,
	singleLimit: `Single Quota`,
	dailyRate: `Daily Interest Rate`,
	cycle: `Period`,

	//信托
	pledgeMining: `pledge mining`,
	underway: `In progress`,
	stabilize: `Stabilize income and make mining easier`,
	income: `expected income`,


	//common
	copySucceeded: `Copy succeeded`,
	serverResponseFailed: `The server is not responding`,
	noData: `No data temporarily`,
	contentdown: `Pull up to show more`,
	contentrefresh: `Loading...`,
	contentnomore: `No more data`,

	// tabbar
	Home: `Home`,
	Trade: `Trade`,
	Future: `Future`,
	Trust: `Trust`,
	Assets: `Assets`,

	// 登录
	login: `Log in`,
	language: `language`,
	mailbox: `email`,
	placeholderName: `please input your email`,
	password: `password`,
	placeholderPassword: `Please enter the password`,
	forgetPassword: `Forgot password？`,
	noHave: `No account？`,
	registerNow: `Sign up now`,
	errorEmpty: `Can not be empty`,
	errorStandard: `wrong format`,
	errorLength: `(4-30Position)`,
	errorLength1: `(4-300Position)`,
	// 注册

	register: `register`,
	code: `Verification code`,
	placeholderCode: `please enter verification code`,
	sending: `sending`,
	send: `send`,
	okPassword: `confirm password`,
	invitationCode: `Invitation code`,
	placeholderinvitationCode: `Please enter the invitation code`,
	checkedAgree: `agree`,
	userAgreement: `User Agreement`,
	and: `and`,
	privacyPolicy: `Privacy Policy`,
	pleaseCheck: `Uncumbeen agreed`,
	atypism: `Inconsistent password`,

	// 忘记登录密码

	forgotLoginPassword: `forgot your password`,
	newPassword: `New Password`,
	confirm: `confirm`,

	//忘记支付密码

	forgotPayPassword: `Forgot to pay the password`,
	//设置支付密码
	setpayPassword: `Set up payment password`,
	//主页
	helper: `help`,
	rising: `Rising list`,
	business: `Pair`,
	newPrice: `latest price`,
	upfloat: `Change`,
	// 资产

	totalAssets: `Total assets converted`,
	record: `Record`,
	nowAssets: `Assets converted`,
	buyCoins: `Buy`,
	sellCoins: `Sell`,
	transfer: `Transfer`,
	searchCurrency: `Search`,
	hideSmall: `Hide small currency`,
	currencyAccount: `Spot`,
	futuresAccount: `Futures`,
	legalAccount: `Funding`,
	trustAccount: `Earn`,
	//划转记录

	transferRecord: `Transfer record`,
	time: `time`,
	rollout: `Turn out`,
	rollin: `Turn in`,
	// 币币记录

	screen: `filter`,
	money: `Amount`,
	transferAddress: `Transfer address`,
	createTime: `Creation time`,
	confirmTime: `confirm the time`,
	note: `Remark`,
	type: `Types of`,
	reset: `clear`,
	recharge: `Recharge`,
	disbursement: `Withdraw`,
	incomplete: `undone`,
	success: `success`,
	fail: `fail`,


	//币币充币

	currency: `Currency`,
	placeholderCurrency: `Please select currency`,
	payeeName: `Chain name`,
	rechargeAddress: `Recharge address`,
	copyAddress: `Replication address`,
	rechargeQuantity: `quantity`,
	chargingAddress: `Coin address`,
	placeholderchargingAddress: `Please enter the recharge address`,
	prove: `upload coindeposit pictue`,
	optional: `(optional)`,
	placeholderHash: `Hash`,
	placeholderNote: `Please enter the remarks`,
	errorMessageprove: `Please upload the coin deposit picture`,
	onlyNumbers: `Can only enter numbers`,
	//币币提币

	withdrawalAddress: `Withdrawal address`,
	tipwallet: `You also bind the corresponding wallet`,
	toAdd: `Add`,
	placeholderwithdrawalAddress: `Please select the currency address`,
	availablenum: `Quantity Available`,
	placeholdernum: `Please enter the quantity`,
	unselected: `No choice`,
	payPassword: `Payment password`,
	commission: `Handling fee`,
	placeholderpayPassword: `Please enter the payment password`,
	//币币划转

	capitalTransfer: `Capital transfer`,
	from: `From`,
	to: `to`,
	moneybag: `Wallets cannot be the same`,
	//法币添加收款方式


	subbranch: `Branch`,
	placeholdersubbranch: `Please enter the branch`,
	bankcode: `Bank code`,
	placeholderbankcode: `Please enter the bank encoding`,
	placeholderbankName: `Please enter the bank name`,
	placeholderbankAccount: `Please enter the silver card name`,

	//法币记录

	price: `price`,
	num: `quantity`,
	bankName: `Bank name`,
	account: `Account`,
	buy: `Buy`,
	sell: `Sell`,
	all: `all`,
	processing: `Processing`,
	//法币买币

	onlineService: `online service`,
	//法币卖币账户

	collectionAccount: `Receipt account`,
	addCollection: `Add payment method`,
	showModal1: `Whether to confirm delete`,
	cancelText: `Cancel`,
	//法币卖币

	salesQuantity: `Quantity`,
	univalence: `Reference price`,
	closed: `Sales have been closed`,
	your: `Your receipt account`,
	bankAccount: `Bank Account`,
	name: `Name`,
	// 账户详情

	total: `Available`,
	frozen: `freeze`,
	//home左侧导航窗

	homloginAndRegister: `Log in/register`,
	rechargeMoney: `Deposit`,
	withdrawCoins: `Withdrawal`,
	customer: `Service`,
	identityVerification: `Kyc Verification`,
	withdrawalAddress: `Withdrawal address`,
	paymentMethodInFiatCurrency: `Fiat currency account`,
	help: `Help center`,
	pricing: `Pricing Method`,
	setUp: `Settings`,
	USD: `USD`,
	//个人信息

	personal: `Personal information`,
	headPortrait: `avatar`,
	nickname: `Nick name`,
	bindMailbox: `Binding mailbox`,
	//邮箱设置

	mailboxSettings: `setting of the mail`,
	oldEmail: `Old mailbox account`,
	placeholderoldEmail: `Please enter the old mailbox account`,
	newEmail: `New mailbox account`,
	placeholdernewEmail: `New mailbox account`,
	//身份认证

	certification: `Verified`,
	noCcertification: `Go to real-name authentication`,
	quota: `Withdrawal limit`,
	count: `Pen`,
	everyday: `daily`,
	cumulative: `Number of daily`,
	unauthorized: `not certified`,
	audit: `To be reviewed`,
	attestation: `General certification`,
	hand: `Handheld certification`,
	auditFailed: `Audit failure`,

	//实名认证

	country: `nation`,
	placeholdercountry: `Please select a country`,
	placeholdername: `Please enter your name`,
	documentType: `type of certificate`,
	placeholderdocumentType: `Please select certificate type`,
	identificationNumber: `Certificate number`,
	placeholderidentificationNumber: `Please enter the ID number`,
	next: `Next step`,
	IDcard: `ID card`,
	passport: `passport`,

	//实名认证照片

	photo1: `Please upload the front photo of the ID card`,
	photo2: `Please upload photos on the back of the ID card`,
	photo3: `Please upload a photo of your ID`,
	Uploading: `uploading...`,
	//提币地址

	addWalletAddress: `Add wallet address`,
	//添加钱包地址

	address: `address`,
	placeholderAddress: `Please enter the address`,
	//帮助中心

	welcome: `Welcome to the help center`,
	commonProblem: `common problem`,
	tutorial: `deposit tutorial`,
	description: `Option trading`,
	accountProblem: `Account problem`,
	accountSettings: `How to register`,
	certified: `Authentication`,
	totutorial: `What to do if you do not receive the deposit？`,
	todescription: `What is option trading？`,
	toaccountProblem: `Password change/reset`,
	toaccountSettings: `How to register an account？`,
	tocertified: `How to authenticate`,
	tutorialText: `<div><p>Hi! Blockchain asset transfer is divided into three steps: proposal-block confirmation-enter。<br><br>Step 1: The transfer successfully indicates that the platform or wallet of the currency is transferred to the transfer operation。<br><br></p><p>Step 2: Complete the confirmation of the corresponding block. Blockchain delay, etc. will cause your digital currency delay to complete all confirmation。</p></div>`,
	descriptionText: `<div><p>Option is a financial instrument that can provide users with the price exposure of underlying assets and limit their downside risk exposure. It provides buyers with the opportunity to buy long (call option) or short (put option) of BTC or ETH<br><br>Novice to option contracts can understand that<br><br>• Put options represent the right (non obligation) to sell assets at a predetermined price within a certain period of time. This provides you with "short" exposure, just as the price of the underlying asset falls, you reserve the right to sell the asset at a higher price (called the exercise price) and make profits<br><br></p><p>• A call option represents the right (not obligation) of the holder to purchase assets at a predetermined price within a certain period of time. This provides you with "long" exposure, just as the price of the underlying asset rises, you reserve the right to purchase the asset at a lower price and make profits</p></div>`,
	accountProblemText: `<div><p>
1. Click your account location in the upper left corner of the home page, and click "Settings" - "Change Password".<br><br>
2. Enter the old password, and then enter the new password to confirm the new password<br><br>
3. Click "Reset Password"<br><br>
4. For the security of users' funds, it is generally necessary to wait 24 hours after resetting or changing the password before withdrawing the currency<br><br>
</p></div>`,
	accountSettingsText: `<div><p>Please use your mobile phone number or email to obtain the verification code and register your account. If you do not receive the verification code, please click to check the email spam or contact customer service</p></div>`,
	certifiedText: `<div><p>1. Click your account location in the upper left corner of the home page and click "Identity authentication".<br><br>2.  Enter the certificate number+name, and click Authentication<br><br>3. Wait patiently for approval. Generally, the audit can be completed within 24 hours</p></div>`,
	//设置

	changeLoginPassword: `Modify the login password`,
	setWithdrawalPassword: `Set the withdrawal password`,
	noSetWithdrawalPassword: `Go to set payment password`,
	preference: `Color preference`,
	about: `about Us`,
	signOut: `sign out`,
	//修改登录密码

	oldPassword: `Old Password`,


	//修改支付密码

	changePayPassword: `Modify the funds password`,
	//颜色偏好

	upRed: `Red Up/Green Down`,
	upGreen: `Green Up/Red Down`,
	//关于我们

	platformIntroduction: `Introduction to the platform`,
	privacyPolicy: `Privacy Policy`,
	userAgreement: `User Agreement`,
	officialWebsite: `Official website`,
	//平台简介

	platformIntroductionText: `This platform is a leading digital asset trading platform in the world. We constantly strive to improve the security features to ensure the security of customers' digital assets. Our model is to bring projects with sustainable value to customers. Only projects with the highest quality will be selected and provided with trading services. The members of the core management team graduated from world-famous universities, and served as senior executives of multinational enterprises such as Bank of Montreal, PricewaterhouseCoopers, etc., with rich experience in the operation of the financial industry and digital asset exchange. Based on the innovative open source agreement proposed by Bitshare and Ethereum, we broke the closed system of the original blockchain based on the principle of combining with real business practice, East Fortune visual artificial high intelligence blockchain operating system '
'At the same time, combining AI with blockchain technology, we hope to create a truly commercial world-class blockchain operating system. The platform promises to strictly abide by the relevant laws of Canada and conduct business under the supervision of financial regulators.`,

	//隐私政策
	privacyPolicyText: `
<p>
This platform (hereinafter referred to as "the Company") is a company registered and established in Switzerland in accordance with the relevant laws of Switzerland. The company operates the global APP of the platform (hereinafter referred to as "the Platform" or "the Platform"), which is a platform for users to conduct digital asset transactions and provide related services (hereinafter referred to as "the Service" or "the Service"). For the convenience of expression, the company and the platform are collectively referred to as "we" or other first-person titles in this agreement. As long as the natural person or other subjects who log on to the platform are users of the platform, the following uses "you" or other second-person titles. We and you are collectively referred to as "both parties", and we or you are individually referred to as "one party".
<br>
We fully understand and respect the importance of your personal information to you. We will take corresponding security measures to protect your personal information according to the requirements of laws and regulations. In view of this, this Privacy Policy (hereinafter referred to as "this Policy
/This Privacy Policy ") and remind you:
<br>
This policy applies to all products and services we provide. If the product or service we provide to you has a separate privacy policy, the product or service is subject to its separate privacy policy; If our products or services do not have a separate privacy policy, this policy applies.
<br>
It should be noted that this policy does not apply to the services provided to you by other third parties, and the services provided to you by third parties are subject to the privacy policy that they have explained to you separately.
<br>
Before using our products or services, you must carefully read and thoroughly understand this policy, especially the terms marked with bold/bold underline. You should focus on reading, and start using after confirming that you fully understand and agree. If you have any questions, opinions or suggestions about the contents of this policy, you can contact us through various contact methods provided by our official. If you do not agree with any terms in this policy, you should immediately stop accessing this platform.
<br>
<strong>Part I Definitions</strong>
<br>
Personal information refers to all kinds of information recorded in electronic or other ways that can identify the identity of a specific natural person or reflect the activities of a specific natural person alone or in combination with other information.
<br>
Personal sensitive information: refers to personal information including ID card number, personal biometric information, bank account number, property information, whereabouts, transaction information, and information of children under the age of 14 (including), etc. (we will prominently mark specific personal sensitive information in bold in this privacy policy).
<br>
Personal information deletion: refers to the removal of personal information from the system involved in the realization of daily business functions, so that it can not be retrieved and accessed.
<br>
Children: refer to minors under the age of 14.
<br>
<strong>Part II Privacy Policy</strong>
<br>
This privacy policy section will help you understand the following:
<br>
1、 How do we collect and use your information
<br>
2、 How do we use cookies and similar technologies
<br>
3、 How do we share, transfer and publicly disclose your information
<br>
4、 How do we protect your information
<br>
5、 How do you manage your information
<br>
6、 How do we deal with minors' information
<br>
7、 How to update this privacy policy
<br>
<strong>I. How do we collect and use your information</strong>
<br>
When you use our products and/or services, we need/may need to collect and use your personal information, including the following two types:
<br>
1. In order to provide you with the basic functions of our products and/or services, you must authorize us to collect and use the necessary information. If you refuse to provide the corresponding information, you will not be able to use our products and/or services normally;
<br>
2. In order to provide you with additional functions of our products and/or services, you can choose to authorize us to collect and use the information. If you refuse to provide it, you will not be able to use the relevant additional functions normally or achieve the functional effect we intend to achieve, but it will not affect your normal use of the basic functions of our products and/or services.
<br>
You understand and agree that:
<br>
1. We are committed to creating a variety of products and services to meet your needs. Because we provide you with a wide range of products and services, and the range of specific products/services that different users choose to use is different, accordingly, the basic/additional functions and the type and scope of personal information collected and used will be different, please take the specific product/service functions as the standard;
<br>
2. In order to bring you a better product and service experience, we are making continuous efforts to improve our technology, and then we may introduce new or optimized functions from time to time, and may need to collect and use new personal information or change the purpose or method of using personal information. In this regard, we will explain to you the purpose, scope and use of the corresponding information separately by updating this policy, pop-up window, page prompt and other ways, and provide you with the means of independent choice and consent, and collect and use it with your express consent. In this process, if you have any questions, comments or suggestions, you can contact us through the various contact methods provided by this platform, and we will give you an answer as soon as possible.
<br>
We will collect and use your personal information to achieve the following functions of this policy:
<br>
（1） Help you register and provide you with the services provided by this platform;
<br>
1. Registration Service
<br>
We provide you with basic membership services through our platform account. In order to register as a member and use our membership services, you need to fill in and provide the following information when applying for registration:
<br>
(1) Identity information. This information can help us to verify whether you are eligible to register as a member of the platform, including but not limited to your name, your residential address, other different certificates issued by your country or government that can prove your identity, the number involved and all other information that can help us verify your identity (hereinafter collectively referred to as "identity information")
）。 The identity information varies depending on whether you are an individual user or an institutional user. According to the laws and regulations of different jurisdictions, the information we collect for users from different countries or regions may vary. The following information and data are used as an indicative example:
<br>
Individual users: nationality, full legal name (including former name and local language name), ID number, e-mail address, telephone number, social security number ("SSN"), passport number or any government issued ID card number, date of birth, identity certificate (such as passport, driver's license or government issued ID certificate).
<br>
Institutional users: legal name of the company (including legal name in local language), registration information, business telephone number, personal information of authorized representative and authorized user, main place of business, personal information of all beneficial owners), identification documents of shareholders/beneficial owners (passport or ID card issued by the government), corporate structure, documents related to the establishment of the company, resolutions of the board of directors, declaration of capital sources Risk and compliance control instructions and other information or documents required by the platform.
<br>
(2) Service information. This information helps us to contact you and successfully provide you with different modes of digital asset transaction services, including but not limited to your personal identity information, contact information, transaction information, and your debit card information and/or other account information (hereinafter collectively referred to as "service information")
）。 At the same time, please understand that the services we provide to you are constantly updated and developed. If you choose to use other services not covered in the above description, and we need to collect your additional information based on this service, we will explain the scope and purpose of information collection to you through page prompts, interactive processes, agreement agreements, pop-up prompts, and other methods, and obtain your consent.
<br>
If you only need to use the browsing service, you do not need to register as our member and provide the above information.
<br>
2. Other registration services
<br>
Real name authentication: After you register and log in, you need to enter the "Personal Center" to complete real name authentication in identity authentication. You need to provide the platform with your real name, ID number number or passport number in the process of using real name authentication.
<br>
Advanced authentication: When your transaction amount in the platform exceeds a certain limit, the platform will require advanced authentication for you in order to maintain your asset security. In addition to real-name authentication information, you recognize the platform to carry out advanced authentication of "face recognition" for you. Face recognition involves the platform's collection of your relevant video streams or face images.
<br>
Account information display: If you already have this platform account, we may display your above personal information in the service (real-name authentication only displays the results of whether the authentication has passed), as well as the operations you perform in the products and services associated with the platform account, including the centralized display of your personal information and transaction orders through this platform account. We will respect your choice of platform account settings.
<br>
（2） Security management service and service information push service
<br>
When you use the services provided by this platform or visit this platform, in order to ensure the security of your transaction and the safe and stable operation of the service, we need to automatically receive and record your web browser information, the device identification symbol and other device information such as the type and model version of the device you log in to the account, the IP address and record on the webpage you request to visit, the location, network environment, device fingerprint information, service log information Software information, location information, etc.
<br>
Please note that separate device information is information that cannot identify a specific natural person. If we use such non-personal information in combination with other information to identify a specific natural person, or use it in combination with personal information, such non-personal information will be considered as personal information during the combined use. Unless otherwise authorized by you or specified by laws and regulations, we will anonymize and de-identify such information.
<br>
In order to provide you with more convenient and personalized information display and push services, we may, in the future, extract your preference features based on your device information and your browsing and using information on your platform or client, and produce indirect crowd portraits based on feature tags for display, push information and possible commercial advertisements. If you do not agree to receive such push information or withdraw your consent to collect personal information, you can contact us according to the contact information provided in this policy.
<br>
We strive to ensure your browsing experience. If you do not want to accept the commercial advertisement we sent you, you can unsubscribe or close it by SMS prompt reply or other methods provided by us.
<br>
In addition, we will also use your above information in order to continuously improve and optimize the above functions.
<br>
（3） Transaction record keeping and inquiry service
<br>
We collect relevant data about your exchanges on this platform, including but not limited to transaction records. If you need to query your order transaction records, you can query your personal transaction details in the "order management" of the platform, including: the nickname of the counterparty, the time of placing the order, the order number, the transaction information, the type and quantity of digital assets, etc.
<br>
（4） Customer service and dispute handling
<br>
When you contact us or submit an application for after-sales and dispute settlement in the process of sale, we need you to provide necessary personal information to verify your membership in order to ensure the security of your account and system.
<br>
In order to contact you, help you solve the problem as soon as possible, or record the solutions and results of the relevant problems, we may save your communication records with us and relevant contents (including account information, order information, other information you provided to prove the relevant facts, or contact information you left). If you make inquiries, complaints or provide suggestions about specific orders, We will use your account information and order information.
<br>
In order to provide services and improve service quality, we may also use your other information, including the relevant information you provided when you contacted customer service, and the questionnaire response information you sent to us when you participated in the questionnaire.
<br>
（5） Others
<br>
1. If the information you provide contains personal information of other users, you need to ensure that you have obtained legal authorization before providing these personal information to the platform. If it involves children's personal information, you need to obtain the consent of the corresponding child guardian before publishing it. In the foregoing cases, the guardian has the right to contact us through the channels in Article 9 of this policy to request the correction or deletion of the content involving children's personal information.
<br>
2. If we use the information for other purposes not specified in this policy, or use the information collected for specific purposes for other purposes, or we take the initiative to obtain your personal information from a third party, we will obtain your consent in advance.
<br>
If we obtain your information indirectly from a third party, we will explicitly require the third party to collect personal information after obtaining your consent according to law before collection, and inform you of the content of the shared information. If sensitive information is involved, it needs to be clearly confirmed by you before it is provided to us, and require the third party to make a commitment to the legality and compliance of the source of personal information. If the third party violates the law, We will clearly require the other party to bear corresponding legal responsibilities; At the same time, we will strengthen the security of personal information (including sensitive information reporting, sensitive information encryption storage, access control, etc.). We will use the same protection methods and measures as we do for our own user's personal information to protect the indirectly obtained personal information.
<br>
3. Exceptions to authorization
<br>
You fully understand and agree that we do not need your authorization to collect and use your personal information under the following circumstances, and we may not respond to your request for correction/modification, deletion, cancellation, withdrawal of consent and request for information:
<br>
(1) Relating to national security and national defense security;
<br>
(2) Those related to public safety, public health and major public interests;
<br>
(3) Relating to judicial or administrative law enforcement such as criminal investigation, prosecution, trial and execution of judgments;
<br>
(4) For the purpose of protecting your or other personal life, property and other major legitimate rights and interests, but it is difficult to obtain my consent;
<br>
(5) Personal information that you disclose to the public;
<br/>
(6) Collect personal information from legally disclosed information, such as legal news reports, government information disclosure and other channels.
<br>
(7) It is necessary to sign and perform relevant agreements or other written documents with you;
<br>
(8) It is necessary to maintain the safe and stable operation of the products and/or services provided, for example, to find and handle the faults of the products and/or services;
<br>
(9) Necessary for legal news reporting;
<br>
(10) It is necessary for academic research institutions to carry out statistical or academic research based on the public interest, and to de-identify the personal information contained in the results when providing the results of academic research or description;
<br>
(11) Other circumstances stipulated by laws and regulations.
<br>
Please be informed that, according to applicable laws, if we take technical measures and other necessary measures to process personal information, so that the data receiver cannot re-identify specific individuals and cannot recover, or we may de-identify research, statistical analysis and forecast the collected information, which is used to improve the content and layout of the platform and provide product or service support for business decisions, And improve our products and services (including the use of anonymous data for machine learning or model algorithm training), then the use of such processed data need not be notified to you and your consent.
<br>
4. If we stop operating the platform's products or services, we will stop collecting your personal information in a timely manner, notify you of the notice of stopping operation in the form of one by one or announcement, and delete or anonymize the personal information we hold related to the closed business.
<br>
<strong>Second, how do we use cookies</strong>
<br>
If your browser or browser add-on service allows, you can modify the acceptance of cookies or reject our cookies. For details, see
AboutCookies.org。 However, if you do this, it may affect your safe access to our platform in some cases, and you may need to change user settings every time you visit our platform. You understand and agree that:
<br>
1. When you visit our platform, we use Google Stats through cookies to record our performance and check the effect of online advertising.
Cookies are small amounts of data sent to your browser and stored on your computer's hard drive. Cookies can only be sent to your computer hard disk when you use your computer to enter our platform.
<br>
2. Cookies are often used to record visitors' habits and preferences when browsing various items on our platform. The data collected by Cookies are anonymous collective statistics and do not contain personal data.
<br>
3. Cookies cannot be used to obtain data on your hard disk, your email address, and your personal data. They can enable the platform or service provider system to recognize your browser and capture and remember information. Most browsers are preset to accept cookies. You can choose to set your browser to not accept cookies, or notify you as soon as cookies are loaded. however,
If it is set to disable cookies, you may not be able to start or use some functions of our platform.
<br>
<strong>III. How do we share, transfer and publicly disclose your information</strong>
<br>
（1） Share
<br>
We will not share your personal information with companies, organizations and individuals other than the service providers of this platform, except for the following:
<br>
1. Sharing under legal circumstances: We may share your personal information according to laws and regulations, litigation, dispute resolution needs, or according to the requirements of administrative and judicial authorities.
<br>
2. Sharing with explicit consent: After obtaining your explicit consent, we will share your personal information with other parties.
<br>
3. Sharing under your active choice: We will share the necessary information related to transactions in your order information with the counterparties of digital assets according to your choice to meet your transaction and after-sales service needs.
<br>
4. Share with authorized partners: our affiliates, trusted third parties who help us operate our platform, conduct business, or provide services to you, as long as these parties agree to keep these information confidential; When we believe that the information disclosed is appropriate, it is required to comply with laws, regulations, rules and regulations or orders from the court or other competent authorities, implement our platform strategy, and provide services or protect our or others' rights, property or security.
<br>
（2） Transfer
<br>
We will not transfer your personal information to any company, organization or individual, except for the following:
<br>
1. Transfer with explicit consent: After obtaining your explicit consent, we will transfer your personal information to other parties;
<br>
2. In the case of merger, acquisition or bankruptcy liquidation of this platform, or other cases involving merger, acquisition or bankruptcy liquidation, if personal information transfer is involved, we will require the new company or organization that holds your personal information to continue to be bound by this policy, otherwise we will require the company, organization and individual to ask you for authorization again.
<br>
（3） Public disclosure
<br>
We will only publicly disclose your personal information under the following circumstances:
<br>
1. With your explicit consent or based on your active choice, we may publicly disclose your personal information;
<br>
2. If we determine that you have violated laws and regulations or seriously violated the relevant agreements and rules of the platform, or in order to protect the personal and property safety of users or the public of the platform from infringement, we may disclose personal information about you according to laws and regulations or with your consent, including relevant violations and the measures that the platform has taken against you.
<br>
（4） Exceptions to obtaining authorization prior to sharing, transferring and public disclosure of personal information
<br>
In the following cases, sharing, transferring and public disclosure of your personal information does not require your prior authorization:
<br>
1. Relating to national security and national defense security;
<br>
2. Those related to public safety, public health and major public interests;
<br>
3. Relating to judicial or administrative law enforcement such as criminal investigation, prosecution, trial and execution of judgments;
<br>
4. For the purpose of protecting your or other personal life, property and other major legitimate rights and interests, but it is difficult to obtain my consent;
<br>
5. Personal information that you disclose to the public;
<br>
6. Collect personal information from legally disclosed information, such as legal news reports, government information disclosure and other channels.
<br>
Please note that, according to applicable laws, if we take technical measures and other necessary measures to process personal information, so that the data receiver cannot re-identify specific individuals and cannot recover them, the sharing, transfer and public disclosure of such processed data need not be notified to you and your consent.
<br>
<strong>IV. How do we protect your information</strong>
<br>
1. We implement appropriate physical, electronic, management and technical measures to protect and guarantee the security of your personal data. We try our best to ensure that any personal data collected through our platform is free from the harassment of any third party unrelated to us. Our safety measures include but are not limited to:
<br>
(1) Physical measures: The records containing your personal data will be stored in a locked place.
<br>
(2) Electronic measures: The computer data containing your personal data will be stored on the computer system and storage media subject to strict login restrictions.
<br>
(3) Management measures: We have set up relevant departments for the security protection of user information, and established relevant internal control systems. We adopt strict authorization principles for staff who may access your information. Only staff authorized by us can access your personal data,
These employees need to abide by our internal rules on the confidentiality of personal data. In addition, we continue to strengthen and advocate the training of relevant laws and regulations, privacy and security standards and security awareness for staff, and regularly organize relevant internal personnel to carry out emergency response training and emergency drills, so that they can master their job responsibilities and emergency response strategies and procedures
<br>
(4) Technical measures: You may use encryption technology such as Secure Socket Layer Encryption to transmit your personal data.
<br>
(5) Security measures: In order to ensure your information security, we are committed to using various current general security technologies and supporting management systems to minimize the risk of your information being disclosed, damaged, misused, accessed, disclosed and changed without authorization. For example, the network security layer software (SSL) is used for encryption transmission, information encryption storage, and strict restrictions on data center access. When transmitting and storing personal sensitive information (including personal biometric information), we will adopt security measures such as encryption, permission control, de-identification and desensitization.
<br>
(6) Other measures: regularly review our personal data collection, storage and processing process;
And restrict the access rights of our employees and suppliers to your data according to the necessary principles, and our employees and suppliers are required to abide by strict contractual confidentiality obligations..
<br>
2. If you know that there are any security vulnerabilities on our platform, please contact us immediately so that we can take appropriate actions as soon as possible.
<br>
3. Despite the implementation of the above technical and security measures, we cannot guarantee the absolute safety of data transmission on the Internet,
Therefore, we cannot absolutely guarantee that the personal data you provide to us through our platform is safe at all times. We will update and publish the security risk, personal information security impact assessment report and other relevant contents from time to time, which can be obtained through the platform announcement.
<br>
<strong>V. How do you manage your information</strong>
<br>
You can access and manage your information in the following ways:
<br>
（1） Query, correct and delete your information
<br>
You have the right to obtain a copy of your personal data upon request and determine whether the information we have about you is accurate and up-to-date. If any of your personal data is inaccurate, you can request to update your information. You can also request to delete your personal data, but we may refuse your request under certain circumstances, such as for legal requirements or other legal purposes. For data access, correction or deletion requests, you can contact us through the contact information in Article 8.
<br>
In response to data access, correction or deletion requests, we will verify the identity of the requesting party to ensure that he/she is legally entitled to make such requests. Although our goal is to respond to these requests for free, we reserve the right to charge you a reasonable fee if your request is repeated or onerous.
<br>
（2） Change the scope of your authorization
<br>
Each business function needs some basic personal information to be completed (see "Part I" of this privacy policy). In addition, you can contact us through the contact information in Article 8 to give or withdraw your authorization.
<br>
After you withdraw your consent, we will not process the corresponding personal information. However, your decision to withdraw your consent will not affect the previous personal information processing based on your authorization.
<br>
（3） Cancel your account
<br>
You can contact us through the contact information in Article 8 to apply for cancellation of your account; After you actively cancel your account, we will stop providing you with products or services, delete your personal information or make it anonymous according to the requirements of applicable laws.
<br>
（4） Respond to your above request
<br>
To ensure security, you may need to provide a written request, or prove your identity in other ways. We may ask you to verify your identity before processing your request.
<br>
We will reply within 15 days. If you are not satisfied, you can also initiate a complaint through the contact information provided by us.
<br>
In principle, we will not charge for your reasonable request, but we will charge a certain fee for repeated requests that exceed the reasonable limit. We may refuse requests for information that is not directly related to your identity, duplicate information for no reason, or that require too many technical means (for example, the need to develop new systems or fundamentally change existing practices), or that pose risks to the legitimate rights and interests of others, or that are unrealistic.
<br>
In the following cases, according to the requirements of laws and regulations, we will not be able to respond to your request:
<br>
1. Relating to national security and national defense security;
<br>
2. Those related to public safety, public health and major public interests;
<br>
3. Relating to criminal investigation, prosecution, trial and execution of judgments;
<br>
4. There is sufficient evidence to show that the personal information subject has subjective malice or abuse of rights;
<br>
5. Responding to your request will cause serious damage to the legitimate rights and interests of you or other individuals and organizations;
<br>
6. Involving trade secrets.
<br>
<strong>VI. How do we handle the information of minors</strong>
<br>
The platform is open to children. If we find or suspect that the user is under the age of 14, we will ask the user to close his account and will not allow the user to continue to use the platform products or services. We will delete relevant data as soon as possible. If you know that anyone under the age of 14 uses our services, please notify us so that we can take action to prevent them from accessing our products or services.
<br>
For minors who have reached the age of 14 but have not reached the age of 18, we expect parents or guardians to guide minors to use our services. We will protect the confidentiality and security of minors' information in accordance with relevant laws and regulations.
<br>
If you are a minor, it is recommended that your parents or guardians read this policy and use our services or provide us with your information with the consent of your parents or guardians. In the case of collecting your information with the consent of your parents or guardians, we will only use or publicly disclose this information if it is permitted by law, expressly agreed by your parents or guardians or necessary to protect your rights and interests. If your guardian does not agree that you use our services or provide us with information in accordance with this policy, please immediately stop using our services and notify us in time so that we can take corresponding measures.
<br>
If you are the parent or guardian of a minor, if you have any questions about the information processing of the minor under your supervision, please contact us through the contact information published in this policy.
<br>
<strong>VII. How to update this privacy policy</strong>
<br>
Our privacy policy may change.
<br>
Without your explicit consent, we will not limit your rights under this privacy policy. We will publish any changes to the privacy policy on the official channels. If you do not agree with the revised content, you should stop accessing the platform immediately. When the updated version of the privacy policy is released, you continue to visit the platform to display and indicate that you agree with the updated content and agree to abide by the updated privacy policy.
<br>
For major changes, we will also provide more significant notifications (including that we will notify you through the way of publicity on this platform and even provide you with pop-up prompts).
<br>
The major changes referred to in this policy include but are not limited to:
<br>
1. Significant changes have taken place in our service model. For example, the purpose of processing personal information, the type of personal information processed, and the use of personal information;
<br>
2. Significant changes have taken place in our control. For example, changes in information controllers caused by mergers and acquisitions;
<br>
3. The main objects of personal information sharing, transfer or public disclosure have changed;
<br>
4. Your right to participate in personal information processing and the way you exercise it have changed significantly;
<br>
5. The department responsible for handling personal information security, contact information and complaint channels have changed;
<br>
6. The personal information security impact assessment report indicates that there are high risks.
</p>`,

	//用户协议
	userAgreementText: `<p>Important:</p>
<p><br>
We would like to remind you:
<br>
• 1 The digital assets themselves are not issued by any financial institution or company or this website;
<br>
• 1 2Digital asset market is new, unconfirmed and may not grow;
<br>
•3
Digital assets are mainly used by speculators in large quantities, while retail and commercial markets are relatively less used. There are high risks in the transaction of digital assets. They are traded continuously throughout the day, with no rise or fall restrictions, and the price is vulnerable to sharp fluctuations due to the impact of the policies of makers and global governments;
<br>
•4
If the company believes, based on its unilateral judgment, that you have violated this agreement, or that the services provided by this website or your use of the services provided by this website is illegal according to the laws of your jurisdiction, the company has the right to suspend or terminate your account at any time, or suspend or terminate your use of the services provided by this website or digital asset transactions.
Digital asset trading has high risks and is not suitable for most people. You know and understand that this transaction may cause partial or total losses, so you should determine the amount of the transaction based on the degree of loss you can bear. You know and understand that digital assets can generate derivative risks, so if you have any questions, you are advised to seek the assistance of professional consultants first. In addition, in addition to the risks mentioned above, there will also be unpredictable risks. You should carefully consider and use your clear judgment to evaluate your financial situation and the above risks, and make any decision to buy or sell digital assets, and bear all losses arising therefrom. We do not assume any responsibility for this.
</p>
<p><br>
I would like to inform you:
<br><br>
</p>
<p>
•1
Any comments, news, discussion, analysis, prices, suggestions and other information on this website are general market comments and do not constitute investment suggestions. We will not bear any losses arising directly or indirectly from reliance on this information, including but not limited to any loss of profits.
<br>
•2
The properties of this website are subject to change at any time without further notice. We have taken reasonable measures to ensure the accuracy of the website information, but we cannot guarantee its accuracy, nor will we bear any direct or indirect losses arising from the information on this website or the delay or failure in connecting to the Internet, transmitting or receiving any information and information.
<br>
•3
There are also risks in using the trading system in the form of internet, including but not limited to the failure of software, hardware and internet links. Since we cannot control the reliability and availability of the Internet, we will not assume any responsibility for distortion, delay and link failure.
<br>
•4
It is prohibited to use this website to conduct all unethical trading activities such as malicious manipulation of the market and improper trading. If such events are found, this website will take preventive protective measures such as warning, restriction of trading, account closure, etc. for all unethical behaviors such as malicious manipulation of prices and malicious impact on the trading system. We will not assume all responsibilities arising therefrom and reserve the right to investigate responsibilities from relevant persons.
</p><br>
<p>1、 General</p><br>
<p>
•1.1
The User Agreement (hereinafter referred to as "the Agreement" or "the Terms and Conditions") consists of the text, Privacy Terms, Know Your Customer and Anti-money Laundering Policy, and various rules, statements, and instructions that have been published or may be published on this website in the future.
<br>
•1.2
Before using the services provided by this website, you should read this agreement carefully. If there is any misunderstanding or other necessary, please consult a professional lawyer. If you disagree with this agreement and/or modify it at any time, please immediately stop using the services provided by this website or no longer log on to this website. Once you log on to this website, use any service of this website or any other similar behavior, you have understood and fully agreed to the properties of this agreement, including any modification of this agreement made by this website at any time.
<br>
•1.3
You can become a member of this website (hereinafter referred to as "member") by filling in relevant information according to the requirements of this website and successfully registering through other relevant procedures. Clicking the "agree" button during the registration process means that you have reached an agreement with the company in the form of electronic signature; Or when you click any button marked with "agree" or similar meaning in the process of using this website or actually use the services provided by this website in other ways allowed by this website, it means that you fully understand, agree and accept all the terms and conditions under this agreement. Without your handwritten written signature, this agreement will not affect your legal binding force.
<br>
• 1.4 After becoming a member of this website, you will get a member account and corresponding password, which are kept by you; You should be legally responsible for all activities and events conducted with your account.
<br>
• 1.5 Only members who become members of this website can use the digital asset trading platform provided by this website to trade and enjoy other services that are only available to members as stipulated by this website.
<br>
• 1.6 By registering and using any services and functions provided by this website, you will be deemed to have read, understood and:
<br>
• 1.6.1 Accept all terms and conditions of this agreement.
<br>
•1.6.2
You confirm that you have reached the age of 16 or have the legal age to enter into a contract according to different applicable laws. Your registration, sale, purchase, release of information and other acceptance of the services of this website should comply with the relevant laws and regulations of the sovereign country or region that has jurisdiction over you, and have the full ability to accept these terms, enter into transactions, and use this website for digital asset transactions.
<br>
• 1.6.3 You guarantee that the digital assets involved in the transaction belong to you are legally acquired and have ownership.
<br>
• 1.6.4 You agree that you are fully responsible for your own trading or non-trading activities and any gains or losses.
<br>
• 1.6.5 You confirm that the information provided during registration is true and accurate.
<br>
• 1.6.6 You agree to comply with the provisions of any relevant laws, including reporting any transaction profits for tax purposes.
<br>
• 1.6.7 You agree not to engage in or participate in any act or activity that damages the interests of the website or the company at any time, regardless of whether it is related to the services provided by the website.
<br>
• 1.6.8 This agreement is only binding on the rights and obligations between you and us, and does not involve the legal relationship and legal disputes between users of this website and other websites and between you arising from digital asset transactions.
</p><br>
<p>2、 Agreement Amendment</p><br>
<p>
We reserve the right to revise this agreement from time to time, announce it in the form of public announcement on the website, and no longer notify you separately. The changed agreement will be marked with the change time on the front page of this agreement. Once it is published on the website, it will take effect automatically. You should browse and pay attention to the updated time and content of this agreement from time to time. If you do not agree with the relevant changes, you should immediately stop using the website service; By continuing to use the services of this website, you accept and agree to be bound by the amended agreement.
</p><br>
<p>3、 Register</p><br>
<p>
• 3.1 Registration qualification
<br>
You confirm and promise that when you complete the registration process or use the services provided by this website in other ways allowed by this website, you should be a natural person, legal person or other organization with the ability to sign this agreement and use the services provided by this website according to applicable laws. Once you click the "agree to register" button, you or your authorized agent has agreed to the properties of the agreement and registered and used the services of this website by its agent. If you do not have the above-mentioned subject qualification, you and your authorized agent shall bear all the consequences arising therefrom, and the company reserves the right to cancel or permanently freeze your account and hold you and your authorized agent accountable.
<br>
• 3.2 Registration purpose
<br>
You confirm and promise that you do not register this website for the purpose of violating laws and regulations or disrupting the order of digital asset trading on this website.
<br>
• 3.3 Registration process
<br>
•3.3.1
You agree to provide effective e-mail, mobile phone number and other information according to the requirements of the user registration page of this website. You can use the mobile phone number you provide as a means of login to enter this website. If necessary, in accordance with the relevant laws and regulations of different jurisdictions, you must provide your real name, identity card and other laws and regulations, as well as the relevant information stipulated in the privacy clause and anti-money laundering clause, and constantly update the registration data to meet the timely, detailed and accurate requirements. All materials originally typed will be referenced as registration materials. You shall be responsible for the authenticity, completeness and accuracy of such information, and bear any direct or indirect losses and adverse consequences arising therefrom.
<br>
• 3.3.2 You have the right to obtain the account number and password of this website by providing the information required for registration legally, completely and effectively and after verification. When you obtain the account number and password of this website, you will be deemed to have successfully registered and can log in as a member on this website.
<br>
• 3.3.3 You agree to receive e-mails and/or short messages sent by the website related to the management and operation of the website.
</p><br>
<p>4、 Services</p><br>
<p>
• 4.1 Service content
<br>
• 4.1.1 You have the right to browse the real-time market and transaction information of various products of digital assets on this website, submit the digital asset transaction instructions and complete the digital asset transaction through this website.
<br>
• 4.1.2 You have the right to view the information under your member account on this website, and have the right to use the functions provided by this website for operation.
<br>
• 4.1.3 You have the right to participate in the website activities organized by the website according to the activity rules published by the website.
<br>
• 4.1.4 Other services that the website promises to provide for you.
<br>
• 4.2. Service rules You promise to abide by the following service rules of this website:
<br>
•4.2.1
You should comply with laws and regulations, and properly use and keep your account and login password, capital password, and mobile phone verification code received by your mobile phone. You are fully responsible for any operation and consequence of using your account and login password, capital password and mobile phone verification code. When you find that the account, login password, or capital password or verification code of this website is used by a third party without your authorization, or there are other account security problems, you should immediately and effectively notify this website and ask this website to suspend the service of this website account. The website has the right to take action on your request within a reasonable time, but the website is not responsible for the consequences (including but not limited to any loss of you) that have occurred before taking action. You may not give, borrow, rent, transfer or otherwise dispose of the account of this website to others without the consent of this website.
<br>
• 4.2.3 You agree to be responsible for all activities (including but not limited to information disclosure, information release, online click consent or submission of various rules and agreements, online renewal agreements or purchase of services) under your account and password of this website.
<br>
4.2.4
When you conduct digital asset transactions on this website, you shall not maliciously interfere with the normal conduct of digital asset transactions and disrupt the order of transactions; It is not allowed to interfere with the normal operation of the website or other users' use of the website services by any technical means or other means; It is not allowed to maliciously defame the goodwill of this website by making up facts.
<br>
• 4.2.5 If you have disputes with other users due to online transactions, you may not request the website to provide relevant information through any means other than judicial or administrative.
<br>
• 4.2.6 Other expenses incurred by you in using the services provided by this website shall be judged and borne by you alone.
<br>
• 4.3. Product rules
<br>
• 4.3.1 Browse transaction information
<br>
• When you browse the transaction information on this website, you should carefully read all the contents contained in the transaction information, including but not limited to price, commission, buying or selling direction,
You can click the button to trade after you completely accept all the contents contained in the transaction information.
<br>
• 4.3.2 View transaction details
<br>
• You can view the corresponding transaction records through your account.
</p><br>
<p>5、 Rights and obligations of this website</p><br>
<p>
•5.1
If you do not have the registration qualification agreed in this agreement, the website has the right to refuse you to register. For those who have registered, the website has the right to cancel your member account, and the website reserves the right to hold you or your authorized agent accountable. At the same time, this website reserves the right to decide whether to accept your registration under any other circumstances.
<br>
• 5.2 According to our own judgment, we have the right to suspend or terminate the use of your account and all associated accounts when we find that you or your associated account users are not suitable for high-risk investment.
<br>
• 5.3 The website has the right to suspend or terminate the use of the account if it finds that the account user is not the original registrant of the account.
<br>
• 5.4 If the website reasonably suspects that the information provided by you is wrong, untrue, invalid or incomplete through technical testing, manual sampling and other testing methods, it has the right to notify you to correct, update the information or suspend or terminate the provision of the website services.
<br>
• 5.5 The website has the right to correct any information displayed on the website when finding obvious errors.
<br>
•5.6
The website reserves the right to modify, suspend or terminate the service of the website at any time, and the website does not need to inform you in advance to exercise the right to modify or terminate the service; If the website terminates one or more services of the website, the termination shall take effect from the date of the termination announcement on the website.
<br>
• 5.7 The website will take necessary technical measures and management measures to ensure the normal operation of the website, provide necessary and reliable trading environment and services, and maintain the order of digital asset trading.
<br>
• 5.8 If you do not use the member account and password of the website to log on to the website for one consecutive year, the website has the right to cancel your account of the website. After the account is cancelled, the website has the right to open the corresponding member name to other users for registration.
<br>
• 5.9 This website ensures the security of your digital assets by strengthening technical investment, improving security precautions and other measures, and will notify you in advance of foreseeable security risks in your account.
<br>
• 5.10 The website has the right to delete all kinds of attribute information in the website that does not conform to laws and regulations or the provisions of the website at any time. The website does not need to notify you in advance to exercise such rights.
<br>
•5.11
This website has the right to provide you with more information or data according to the requirements of laws, regulations, rules, orders and other norms of your sovereign country or region, and take reasonable measures to meet the requirements of local norms. You have the obligation to cooperate; This website has the right to suspend or permanently stop opening some or all of its services to you according to the requirements of laws, regulations, rules, orders and other specifications of your sovereign country or region.
</p><br>
<p>6、 Limitation and exemption of liability</p><br>
<p>
• 6.1 You understand and agree that we will not be responsible for the following matters under any circumstances:
<br>
• 6.1.1 Loss of income;
<br>
• 6.1.2 Trading profits or contract losses;
<br>
• 6.1.3 Losses caused by business interruption;
<br>
• 6.1.4 Loss of currency expected to be saved;
<br>
• 6.1.5 Losses caused by information problems;
<br>
• 6.1.6 Loss of opportunity, goodwill or reputation;
<br>
• 6.1.7 Damage or loss of data;
<br>
• 6.1.8 Cost of purchasing substitute products or services;
<br>
•6.1.9
Any indirect, special or incidental loss or damage arising from infringement (including negligence), breach of contract or any other reason, whether or not such loss or damage can be reasonably foreseen by us; Whether we have been informed in advance of the possibility of such loss or damage.
<br>
• Clauses 6.1.1 to 8.1.9 are independent of each other.
<br>
• 6.2 You understand and agree that we will not be liable for any damages caused to you due to any of the following circumstances:
<br>
• 6.2.1 There may be major violations or defaults in your specific transactions.
<br>
• 6.2.2 Your behavior on this website is suspected to be illegal or unethical.
<br>
• 6.2.3 Expenses and losses arising from the purchase or acquisition of any data, information or transaction through the services of this website or other acts of substitution.
<br>
• 6.2.4 Your misunderstanding of the website services.
<br>
• 6.2.5 Any other losses related to the services provided by this website that are not caused by us.
<br>
•6.3
We are responsible for the maintenance of information network equipment, failure of information network connection, failure of computer, communication or other systems, power failure, weather reasons, accidents, strikes, labor disputes, riots, insurrections, riots, insufficient productivity or means of production, fire, flood, storm, explosion, war, bank or other partners, collapse of digital asset market, government actions
We do not assume any responsibility for the failure or delay of service caused by the order of judicial or administrative authorities, other acts beyond our control or our inability to control, or the reasons of a third party, as well as the loss caused to you.
<br>
•6.4
We cannot guarantee that all information, programs, text, etc. contained in this website are completely safe and free from interference and damage by any virus, Trojan horse and other malicious programs. Therefore, your login, use of any service or download and use of any program, information, data, etc. downloaded from this website are your personal decision, and you will bear the risk and possible losses.
<br>
•6.5
We do not make any guarantee and commitment for any information, products and business of any third-party website linked to this website and any other form of attribute that is not our subject. If you use any service, information and products provided by the third-party website, it is your personal decision and assume all responsibilities arising therefrom.
<br>
•6.6
We make no warranty, express or implied, for your use of the services of this website, including but not limited to the applicability, no error or omission, continuity, accuracy, reliability, and suitability for a specific purpose of the services provided by this website. At the same time, we do not make any commitment and guarantee for the validity, accuracy, correctness, reliability, quality, stability, completeness and timeliness of the technology and information involved in the services provided by this website. Whether to log in or use the services provided by this website is your personal decision and you shall bear the risk and possible losses. We do not make any express or implied guarantee for the market, value and price of digital assets. You understand and understand that the digital asset market is unstable, and the price and value may fluctuate or collapse at any time. Trading digital assets is your personal free choice and decision, and you can bear risks and possible losses.
<br>
•6.7
Our warranties and commitments set forth in this agreement are the only warranties and representations made by us in connection with this agreement and the services provided by this website, and supersede any other warranties and commitments, whether written or oral, express or implied. All these warranties and representations only represent our own promises and warranties, and do not guarantee that any third party will comply with the warranties and commitments in this agreement.
<br>
• 6.8 We do not waive any right not mentioned in this agreement to limit, exempt or offset our liability for damages to the maximum extent applicable by law.
<br>
• 6.9 After you register, you will recognize any operation we carry out in accordance with the rules specified in this agreement, and any risk arising therefrom shall be borne by you.
</p><br>
<p>7、 Termination of agreement</p><br>
<p>
• 7.1 The website has the right to terminate all services of the website according to the agreement, and this agreement shall terminate on the date of termination of all services of the website.
<br>
• 7.2 After the termination of this agreement, you have no right to require the website to continue to provide any services or perform any other obligations, including but not limited to requiring the website to retain or disclose any information in its original website account for you,
Forwarding any information they have not read or sent to you or a third party.
<br>
• 7.3 The termination of this agreement does not affect the observant party's demand for other responsibilities from the defaulting party.
</p><br>
<p>8、 Intellectual property</p><br>
<p>
• 8.1 All intellectual achievements included in this website include but are not limited to website logo, database, website design, text and graphics, software, photos, videos, music, sound and their combination, software compilation, relevant source code and software
All intellectual property rights (including applets and scripts) belong to this website. You may not copy, change, copy, send or use any of the foregoing materials or properties for commercial purposes.
<br>
• 8.2 All rights contained in the name of this website (including but not limited to goodwill, trademark and logo) belong to the company.
<br>
• 8.3 You shall not illegally use or dispose of the intellectual property rights of the website or others in the process of using the website services. You may not publish the information published on this website in any form or authorize other websites (and media) to use it.
<br>
• 8.4 Your access to this website or use of any services provided by this website shall not be deemed as the transfer of any intellectual property rights to you.
</p><br>
<p>9、 Calculate</p><br>
<p>All transaction calculation results have been verified by us, but we cannot guarantee that the use of the website will not be disturbed or free of errors</ p><br>
<p>10、 Severability</p><br>
<p>If any provision of this Agreement is found to be unenforceable, invalid or illegal by any court of competent jurisdiction, the validity of the remaining provisions of this Agreement shall not be affected</ p><br>
<p>11、 Non-agent relationship</p><br>
<p>Nothing in this Agreement shall be deemed to create, imply or otherwise treat us as your agent, trustee or other representative, except as otherwise provided in this Agreement</ p><br>
<p>12、 Waiver</p><br>
<p>
The waiver of the liability for breach of contract or other liabilities agreed in this agreement by us or any of you cannot be recognized or interpreted as a waiver of other liabilities for breach of contract; The failure to exercise any right or remedy shall not be construed in any way as a waiver of such right or remedy.
</p><br>
<p>13、 Title</p><br>
<p>All headings are for the convenience of the agreement and are not intended to expand or limit the nature or scope of the terms of the agreement</ p>
<p>Agreement of charging by others: charging USDT, ETH, BTC for others, multiple currency transactions, once detected, strict punishment</ p>
<p></p><br>
<p>14、 Effectiveness and interpretation of the agreement</p><br>
<p>
• 14.1 This agreement takes effect when you click on the registration page of this website to agree to register and complete the registration procedure, and obtain the account number and password of this website, and is binding on this website and you.
<br>
• 14.2 The final interpretation right of this agreement belongs to this website.
<br>
•14.3
When an individual applies for the use of an account, he/she shall provide his/her valid certificate and collection and payment account as required by the relevant department of GTM, and open a registered account for him/her after passing the examination of the relevant department of GTM; The application for GTM and its account can only be used by the account holder who has been approved by the relevant department of issuing GTM, and cannot be rented or lent.
</p>`,















	// pc: {
	// 	// pc页面
	// 	home: pc.home.ZH,
	// },

}
export default en
