// import Common from "./data/common/index" //公共模块翻译文件引入
// import User from "./data/user/index" //用户模块翻译文件引入
// import ErrorPage from "./data/error/index"
// import Home from "./data/home/index"
// import Me from "./data/me/index"
// import other from "./data/other/index"
import pc from "./data/pc/index"
const zh = {
	//托管订单
	completed: `đã hoàn thành`,
	cancelOrder: `Rút lệnh`,
	purchaseAmount: `Số tiền mua`,
	profit: `thu nhập`,
	day: `ngày`,
	callDate: `Ngày sử dụng`,
	whether: `Có nên rút đơn đặt hàng hay không`,
	dividend: `Thời gian cổ tức`,
	dueDividend: `Mỗi ngày`,
	dailyDividend: `Cổ tức hàng ngày`,
	escrowAmount: `Số tiền lưu ký`,
	dueReturn: `Trả lại khi hết hạn`,
	redemption: `Đổi bất cứ lúc nào`,
	availableBalance: `Số dư Có sẵn`,
	totalIncome: `Tổng Doanh thu Ước tính`,
	readAgree: `Tôi đã đọc và đồng ý`,
	serviceAgreement: `Thỏa thuận dịch vụ tài chính nền tảng`,
	trustProtocol: `<div>
					<p>1, Nền tảng triển khai dịch vụ tài khoản tính lãi, cung cấp dịch vụ giá trị gia tăng tài sản kỹ thuật số nhàn rỗi cho người dùng nền tảng.<br>
2. Tài sản tài khoản tính lãi sẽ được sử dụng cho các sản phẩm phái sinh của nền tảng và các dự án đầu tư mạo hiểm khác. <br>
3. Nền tảng cung cấp dịch vụ quản lý rủi ro cho người dùng tài khoản tính lãi. Nền tảng dựa vào hệ thống kiểm soát gió nghiêm ngặt của nền tảng, đảm bảo đầy đủ an toàn tài sản dịch vụ quản lý tài chính của người dùng, an tâm thu nhập. <br>
4. Người dùng, khi sử dụng dịch vụ tài khoản sinh lãi, ủy quyền vô điều kiện cho nền tảng phân phối hợp lý và phân phối thu nhập sinh lãi theo quy tắc của nền tảng. <br>
5. Người dùng phải tuân thủ luật pháp quốc gia có liên quan khi sử dụng dịch vụ tài khoản lãi suất để đảm bảo sự tuân thủ hợp pháp nguồn tài sản. <br>
6. Khi sử dụng dịch vụ tài khoản sinh lãi, người dùng nên nhận thức đầy đủ rủi ro đầu tư tài sản kỹ thuật số, thao tác thận trọng, có khả năng. <br>
7. Người dùng đồng ý rằng tất cả các hoạt động đầu tư được thực hiện trên nền tảng đại diện cho ý định đầu tư thực sự của họ và chấp nhận vô điều kiện các rủi ro và lợi ích tiềm ẩn từ các quyết định đầu tư. <br>
8. Nền tảng bảo lưu quyền tạm dừng hoặc chấm dứt dịch vụ tài khoản tính lãi. Nền tảng có thể tạm dừng, chấm dứt dịch vụ tài khoản có lãi bất cứ lúc nào nếu cần thiết.<br>
9, Việc thực hiện các dịch vụ có lãi suất có thể bị trì hoãn, tạm dừng, hủy bỏ hoặc lệch do các yếu tố không thể cưỡng lại như độ trễ mạng, sự cố hệ thống máy tính, v.v. Chúng tôi sẽ cố gắng hết sức để đảm bảo, nhưng không cam kết, hoạt động ổn định và hiệu quả của hệ thống thực hiện dịch vụ tài khoản sinh lãi, nhưng nền tảng không chịu trách nhiệm do các yếu tố trên dẫn đến sự khác biệt giữa kết quả thực hiện cuối cùng của dịch vụ tài khoản sinh lãi và mong đợi của khách hàng. <br>
10. Khi sử dụng dịch vụ tài khoản sinh lãi, người dùng phải tuân thủ các quy định của Thỏa thuận dịch vụ quản lý tài chính.<br>
					</p>
				</div>`,

	//产品列表
	managedOrder: `Đơn đặt hàng theo ký quỹ`,
	earningsToday: `Lợi nhuận hôm nay`,
	accumulatedIncome: `Thu nhập tích lũy`,
	singleLimit: `Hạn ngạch duy nhất`,
	dailyRate: `Lãi suất hàng ngày`,
	cycle: `Dấu chấm`,

	//信托
	pledgeMining: `Khai thác cam kết`,
	underway: `Đang xử lý`,
	stabilize: `Thu nhập ổn định, làm cho việc khai thác dễ dàng hơn`,
	income: `Thu nhập hàng ngày dự kiến`,


	//common
	copySucceeded: `Sao chép thành công`,
	serverResponseFailed: `Máy chủ không phản hồi`,
	noData: `Không có dữ liệu`,
	contentdown: `Trượt hiển thị nhiều hơn`,
	contentrefresh: `đang tải...`,
	contentnomore: `Không còn dữ liệu nữa`,


	// tabbar
	Home: `Trang chủ`,
	Trade: `Thương mại`,
	Future: `Tương lai`,
	Trust: `Tin cậy`,
	Assets: `Nội dung`,

	// 登录
	login: `Đăng nhập`,
	language: `ngôn ngữ`,
	mailbox: `hộp thư`,
	placeholderName: `Vui lòng nhập hộp thư`,
	password: `mật khẩu`,
	placeholderPassword: `Vui lòng nhập mật khẩu`,
	forgetPassword: `Quên mật khẩu?`,
	noHave: `Không có tài khoản?`,
	registerNow: `Đăng ký ngay`,
	errorEmpty: `Chưa nhập thông tin`,
	errorStandard: `Lỗi định dạng`,
	errorLength: `(4-30bit)`,
	errorLength1: `(4-300bit)`,
	// 注册

	register: `đăng ký`,
	code: `mã xác nhận`,
	placeholderCode: `Vui lòng nhập mã xác nhận`,
	sending: `Đang gửi`,
	send: `gửi`,
	okPassword: `Xác nhận mật khẩu`,
	invitationCode: `Mã mời`,
	placeholderinvitationCode: `Vui lòng nhập mã mời`,
	checkedAgree: `đồng ý`,
	userAgreement: `Thỏa thuận người dùng`,
	and: `và`,
	privacyPolicy: `Chính sách bảo mật`,
	pleaseCheck: `Vui lòng đồng ý với User Agreement`,
	atypism: `mật khẩu không phù hợp`,

	// 忘记登录密码

	forgotLoginPassword: `Quên mật khẩu`,
	newPassword: `mật khẩu mới`,
	confirm: `xác nhận`,

	//忘记支付密码

	forgotPayPassword: `Quên mật khẩu`,
	//设置支付密码
	setpayPassword: `Đặt mật khẩu thanh toán`,
	//主页
	helper: `giúp đỡ`,
	rising: `Danh sách đang tăng`,
	business: `cặp giao dịch`,
	newPrice: `Giá mới nhất`,
	upfloat: `Thay đổi 24H`,
	// 资产

	totalAssets: `Tổng tài sản tương đương`,
	record: `bản ghi`,
	nowAssets: `Chuyển đổi nội dung`,
	buyCoins: `Mua`,
	sellCoins: `Bán`,
	transfer: `Chuyển`,
	searchCurrency: `Tìm kiếm tiền tệ`,
	hideSmall: `Ẩn số tiền nhỏ`,
	currencyAccount: `Tài khoản tiền tệ`,
	futuresAccount: `tài khoản tương lai`,
	legalAccount: `Tài khoản Fiat`,
	trustAccount: `tài khoản tin cậy`,
	//划转记录

	transferRecord: `Hồ sơ chuyển nhượng`,
	time: `thời gian`,
	rollout: `chuyển khoản`,
	rollin: `thu nhập`,
	// 币币记录

	screen: `Bộ lọc`,
	money: `Số tiền`,
	transferAddress: `Địa chỉ chuyển tiền`,
	createTime: `Thời gian tạo`,
	confirmTime: `thời gian xác nhận`,
	note: `Ghi chú`,
	type: `Loại`,
	reset: `Đặt lại`,
	recharge: `nạp tiền`,
	disbursement: `Rút tiền`,
	incomplete: `chưa hoàn thành`,
	success: `thành công`,
	fail: `thất bại`,


	//币币充币

	currency: `tiền tệ`,
	placeholderCurrency: `Vui lòng chọn loại tiền tệ`,
	payeeName: `Tên chuỗi`,
	rechargeAddress: `Địa chỉ nạp tiền`,
	copyAddress: `Sao chép địa chỉ`,
	rechargeQuantity: `Số tiền nạp`,
	chargingAddress: `Địa chỉ thanh toán`,
	placeholderchargingAddress: `Vui lòng nhập địa chỉ thanh toán`,
	prove: `Bằng chứng nạp tiền`,
	optional: `(tùy chọn)`,
	placeholderHash: `Vui lòng nhập hash`,
	placeholderNote: `Vui lòng nhập ghi chú`,
	errorMessageprove: `Vui lòng tải lên bằng chứng nạp tiền`,
	onlyNumbers: `Chỉ có thể nhập số`,
	//币币提币

	withdrawalAddress: `Địa chỉ rút tiền`,
	tipwallet: `Bạn chưa bị ràng buộc với ví tương ứng`,
	toAdd: `Thêm vào`,
	placeholderwithdrawalAddress: `Vui lòng chọn địa chỉ rút tiền`,
	availablenum: `Số lượng có sẵn`,
	placeholdernum: `Vui lòng nhập số lượng`,
	unselected: `không được chọn`,
	payPassword: `Mật khẩu thanh toán`,
	commission: `phí xử lý`,
	placeholderpayPassword: `Vui lòng nhập mật khẩu thanh toán`,
	//币币划转

	capitalTransfer: `Chuyển tiền`,
	from: `Từ`,
	to: `Đến`,
	moneybag: `ví không thể giống nhau`,
	//法币添加收款方式


	subbranch: `Sub branch`,
	placeholdersubbranch: `Vui lòng nhập chi nhánh`,
	bankcode: `Mã ngân hàng`,
	placeholderbankcode: `Vui lòng nhập mã ngân hàng`,
	placeholderbankName: `Vui lòng nhập tên ngân hàng`,
	placeholderbankAccount: `Vui lòng nhập số thẻ`,

	//法币记录

	price: `Giá`,
	num: `Số lượng`,
	bankName: `tên ngân hàng`,
	account: `tài khoản`,
	buy: `Mua`,
	sell: `Sell`,
	all: `Tất cả`,
	processing: `Đang tiến hành`,
	//法币买币

	onlineService: `dịch vụ trực tuyến`,
	//法币卖币账户

	collectionAccount: `Tài khoản nhận tiền`,
	addCollection: `Thêm phương thức thu tiền`,
	showModal1: `Xác nhận xóa`,
	cancelText: `Hủy bỏ`,
	//法币卖币

	salesQuantity: `Số lượng bán`,
	univalence: `Giá tham khảo`,
	closed: `Bán hàng đóng cửa`,
	your: `Số tài khoản của bạn`,
	bankAccount: `Số tài khoản ngân hàng`,
	name: `tên`,
	// 账户详情

	total: `tổng số`,
	frozen: `đóng băng`,
	//home左侧导航窗

	homloginAndRegister: `Đăng nhập/Đăng ký`,
	rechargeMoney: `nạp tiền`,
	withdrawCoins: `rút tiền`,
	customer: `Dịch vụ`,
	identityVerification: `Xác thực`,
	withdrawalAddress: `Địa chỉ rút tiền`,
	paymentMethodInFiatCurrency: `Phương thức Thanh toán Tiền tệ`,
	help: `Trung tâm trợ giúp`,
	pricing: `Phương pháp định giá`,
	setUp: `Cài đặt`,
	USD: `Đô la`,
	//个人信息

	personal: `Thông tin cá nhân`,
	headPortrait: `hình đại diện`,
	nickname: `Biệt danh`,
	bindMailbox: `Hộp thư ràng buộc`,
	//邮箱设置

	mailboxSettings: `Thiết lập hộp thư`,
	oldEmail: `Tài khoản email cũ`,
	placeholderoldEmail: `Vui lòng nhập số tài khoản email cũ`,
	newEmail: `Tài khoản email mới`,
	placeholdernewEmail: `Tài khoản email mới`,
	//身份认证

	certification: `Chứng thực tên thật`,
	noCcertification: `đi đến xác thực tên thật`,
	quota: `Giới hạn rút tiền`,
	count: `Số bút`,
	everyday: `Hàng ngày`,
	cumulative: `Số lượng tích lũy`,
	unauthorized: `Không xác nhận`,
	audit: `Để được xem xét`,
	attestation: `Chứng nhận chung`,
	hand: `Chứng nhận cầm tay`,
	auditFailed: `Đánh giá thất bại`,

	//实名认证

	country: `quốc gia`,
	placeholdercountry: `Vui lòng chọn quốc gia`,
	placeholdername: `Vui lòng nhập tên`,
	documentType: `Loại chứng chỉ`,
	placeholderdocumentType: `Vui lòng chọn loại tài liệu`,
	identificationNumber: `Số giấy tờ`,
	placeholderidentificationNumber: `Vui lòng nhập số ID`,
	next: `Tiếp theo`,
	IDcard: `thẻ căn cước`,
	passport: `Hộ chiếu`,

	//实名认证照片

	photo1: `Vui lòng upload ảnh ID`,
	photo2: `Vui lòng tải lên hình ảnh ngược của thẻ ID`,
	photo3: `Xin vui lòng tải lên hình ảnh có chứa bạn và chứng minh thư`,
	Uploading: `Đang tải lên...`,
	//提币地址

	addWalletAddress: `Thêm địa chỉ ví`,
	//添加钱包地址

	address: `Địa chỉ`,
	placeholderAddress: `Vui lòng nhập địa chỉ`,
	//帮助中心

	welcome: `Chào mừng bạn đến với Trung tâm trợ giúp`,
	commonProblem: `Câu hỏi thường gặp`,
	tutorial: `tiền gửi hướng dẫn`,
	description: `Futures Description`,
	accountProblem: `Vấn đề tài khoản`,
	accountSettings: `Cách đăng ký`,
	certified: `Xác thực`,
	totutorial: `Phải làm gì nếu bạn không nhận được tiền gửi？`,
	todescription: `Futures là gì？`,
	toaccountProblem: `Thay đổi mật khẩu/Đặt lại`,
	toaccountSettings: `Làm thế nào để đăng ký một tài khoản?`,
	tocertified: `Làm thế nào để xác thực`,
	tutorialText: `<div><p>Xin chào! Việc chuyển giao tài sản blockchain được chia thành ba bước: Đề xuất - Xác nhận khối - Nhập cảnh. Bước 1: Chuyển tiền thành công cho biết nền tảng hoặc ví đã rút tiền đã thực hiện hoạt động chuyển tiền. <br><br></p><p>Bước 2: Xác nhận khối tương ứng. Blockchain bị tắc nghẽn, độ trễ và nhiều hơn nữa có thể khiến đồng tiền kỹ thuật số của bạn bị trì hoãn để hoàn thành tất cả các xác nhận.</p></div>`,
	descriptionText: `<div><p>Một lựa chọn là một công cụ tài chính có thể cung cấp cho người dùng tiếp xúc với giá của tài sản cơ bản trong khi hạn chế tiếp xúc giảm giá của họ. Nó cung cấp cho người mua cơ hội mua dài (tùy chọn cuộc gọi) hoặc ngắn (tùy chọn đặt) cho BTC hoặc ETH. Những người mới tham gia hợp đồng quyền chọn có thể hiểu rằng:<br><br><br>• Đặt quyền đại diện cho quyền (không bắt buộc) bán tài sản với giá xác định trong một khoảng thời gian nhất định. Điều này cung cấp cho bạn tiếp xúc "short", như thể giá của tài sản cơ bản giảm và bạn có quyền bán tài sản của mình ở mức giá cao hơn, được gọi là giá thực hiện và kiếm được lợi nhuận. Quyền chọn cuộc gọi đại diện cho quyền (không có nghĩa vụ) của chủ sở hữu để mua tài sản với giá định trước trong một khoảng thời gian nhất định. Điều này cung cấp cho bạn tiếp xúc "dài" như thể giá của tài sản cơ bản tăng lên và bạn có quyền mua tài sản ở mức giá thấp hơn và kiếm được lợi nhuận.</p></div>`,
	accountProblemText: `<div><p>
	1. Nhấp vào vị trí tài khoản của bạn ở góc trên bên phải của trang chủ và nhấp vào "Trung tâm bảo mật" - "Thay đổi mật khẩu".<br><br>
2. Nhập mật khẩu cũ, sau đó nhập mật khẩu mới để xác nhận mật khẩu mới.<br><br>
3. Nhấp vào "Đặt lại mật khẩu".<br><br>
4. Đối với sự an toàn của tiền của người dùng, thường cần phải chờ 24 giờ sau khi đặt lại hoặc thay đổi mật khẩu trước khi rút tiền.<br><br>
	</p></div>`,
	accountSettingsText: `<div><p>Vui lòng sử dụng số điện thoại di động hoặc hộp thư của bạn để lấy mã xác minh và đăng ký tài khoản của bạn. Nếu bạn không nhận được mã xác minh, hãy nhấp vào để xem email rác hoặc liên hệ với dịch vụ khách hàng.</p></div>`,
	certifiedText: `<div><p>1. Nhấp vào vị trí tài khoản của bạn ở phía trên bên phải của trang chủ và nhấp vào "Xác thực".<br><br>2. Nhập số chứng chỉ+tên, nhấp vào chứng nhận.<br> 3. Kiên nhẫn chờ xét duyệt. Thông thường trong vòng 24 giờ là có thể hoàn thành xét duyệt.</p></div>`,

	//设置

	changeLoginPassword: `Sửa đổi mật khẩu đăng nhập`,
	setWithdrawalPassword: `Đặt mật khẩu thanh toán`,
	noSetWithdrawalPassword: `Đi để đặt mật khẩu thanh toán`,
	preference: `Sở thích màu`,
	about: `Giới thiệu về chúng tôi`,
	signOut: `Thoát`,
	//修改登录密码

	changeLoginPassword: `Sửa đổi mật khẩu đăng nhập`,
	oldPassword: `Mật khẩu cũ`,


	//修改支付密码

	changePayPassword: `Sửa đổi mật khẩu thanh toán`,
	//颜色偏好

	upRed: `Red Up/Green Fall`,
	upGreen: `Red Down/Green Rising`,
	//关于我们

	platformIntroduction: `hồ sơ nền tảng`,
	privacyPolicy: `Chính sách quyền riêng tư`,
	userAgreement: `Thỏa thuận người dùng`,
	officialWebsite: `Chính thức`,
	//平台简介

	platformIntroductionText: `Nền tảng này là nền tảng giao dịch tài sản kỹ thuật số hàng đầu thế giới, không ngừng nỗ lực cải thiện các tính năng bảo mật để đảm bảo an toàn cho tài sản kỹ thuật số của khách hàng, mô hình của chúng tôi là mang đến cho khách hàng các dự án có giá trị bền vững, chỉ những dự án có chất lượng cao nhất mới được lựa chọn và cung cấp dịch vụ giao dịch. Các thành viên của đội ngũ quản lý cốt lõi tốt nghiệp các trường đại học nổi tiếng thế giới, từng là giám đốc điều hành của các doanh nghiệp đa quốc gia như Ngân hàng Montreal, Phổ Hoa Vĩnh Đạo, có kinh nghiệm hoạt động phong phú trong ngành tài chính và trao đổi tài sản kỹ thuật số, trên nguyên tắc kết hợp với thực tiễn kinh doanh thực tế, chúng tôi đã phá vỡ hệ thống khép kín của blockchain vốn có, East Fortune trực quan hóa hệ điều hành blockchain AI cao
"Trong khi kết hợp trí tuệ nhân tạo với công nghệ blockchain, chúng tôi hy vọng sẽ tạo ra một hệ điều hành blockchain đẳng cấp thế giới thực sự có thể thương mại, với cam kết nền tảng: sẽ tuân thủ nghiêm ngặt các luật liên quan của Canada và hoạt động kinh doanh dưới sự giám sát của các cơ quan quản lý tài chính.`,

	//隐私政策
	privacyPolicyText: `
<p>
Nền tảng này. ("Công ty" bên dưới) là một công ty được đăng ký tại Thụy Sĩ theo luật liên quan của Thụy Sĩ. Công ty vận hành ứng dụng toàn cầu nền tảng này (sau đây gọi là "nền tảng này" hoặc "nền tảng"). và các dịch vụ liên quan (sau đây gọi là "dịch vụ này" hoặc "dịch vụ"). Để thể hiện sự tiện lợi, công ty và nền tảng được gọi chung là "chúng tôi" hoặc tên đầu tiên khác trong Thỏa thuận này. Chúng tôi được gọi chung là "cả hai bên" và chúng tôi hoặc bạn được gọi là "một bên " một mình.
<br>
Chúng tôi hoàn toàn hiểu và tôn trọng thông tin cá nhân của bạn với bạn. Chúng tôi sẽ thực hiện các biện pháp bảo vệ bảo mật tương ứng theo luật pháp và quy định để bảo vệ bảo mật thông tin cá nhân của bạn. Theo quan điểm này, "Chính sách quyền riêng tư" (sau đây gọi là "Chính sách này"
/Chính sách bảo mật của Ben ") và nhắc nhở bạn:
<br>
Chính sách này phù hợp cho tất cả các sản phẩm và dịch vụ chúng tôi cung cấp. Nếu chúng tôi thiết lập chính sách bảo mật cho các sản phẩm hoặc dịch vụ bạn cung cấp, sản phẩm hoặc dịch vụ áp dụng cho chính sách bảo mật được thiết lập riêng; nếu sản phẩm hoặc dịch vụ của chúng tôi không thiết lập chính sách bảo mật một cách riêng biệt, chính sách này sẽ được áp dụng.
<br>
Điều cần được giải thích cụ thể là chính sách này không áp dụng cho các dịch vụ bạn cung cấp theo hướng thứ ba khác và hướng thứ ba bạn cung cấp cho chính sách bảo mật mà bạn sẽ giải thích cho bạn.
<br>
Trước khi sử dụng các sản phẩm hoặc dịch vụ khác nhau của chúng tôi, vui lòng đọc và hiểu chính sách này một cách cẩn thận, đặc biệt là các điều khoản được xác định bằng cách luồng của các dòng. Bạn nên tập trung vào việc đọc và bắt đầu sử dụng nó sau khi xác nhận và đồng ý. Nếu bạn có bất kỳ câu hỏi, ý kiến ​​hoặc đề xuất nào về nội dung của chính sách này, bạn có thể liên hệ với chúng tôi thông qua các thông tin liên hệ khác nhau do quan chức của chúng tôi cung cấp. Nếu bạn không đồng ý với bất kỳ điều khoản nào trong chính sách này, bạn nên ngừng truy cập nền tảng này.
<br>
<strong> Định nghĩa phần đầu tiên </strong>
<br>
Thông tin cá nhân: Đề cập đến các thông tin khác nhau có thể được ghi lại một mình hoặc với thông tin khác với thông tin khác trong một thông tin riêng hoặc thông tin khác.
<br>
Thông tin nhạy cảm cá nhân: Đề cập đến thông tin cá nhân bao gồm tài liệu nhận dạng, thông tin sinh trắc học cá nhân, số tài khoản ngân hàng, thông tin tài sản, thông tin giao dịch, thông tin giao dịch, dưới 14 năm thông tin trẻ em, v.v ... Thông tin nhạy cảm cá nhân được thực hiện với nhận dạng đáng kể).
<br>
Xóa thông tin cá nhân: Đề cập đến việc loại bỏ thông tin cá nhân trong một hệ thống liên quan đến các chức năng kinh doanh hàng ngày, để nó không thể truy cập và truy cập.
<br>
Trẻ em: đề cập đến trẻ vị thành niên dưới 14 tuổi.
<br>
<strong> Chính sách bảo mật của Phần II </strong>
<br>
Chính sách bảo mật này sẽ giúp bạn hiểu những điều sau đây:
<br>
1. Làm thế nào để chúng tôi thu thập và sử dụng thông tin của bạn
<br>
2. Làm thế nào để chúng tôi sử dụng cookie và các công nghệ tương tự
<br>
3. Làm thế nào chúng tôi có thể chia sẻ, chuyển nhượng và tiết lộ công khai thông tin của bạn
<br>
4. Làm thế nào để chúng tôi bảo vệ thông tin của bạn
<br>
5. Làm thế nào để bạn quản lý thông tin của bạn
<br>
6. Làm thế nào để chúng tôi xử lý thông tin của trẻ vị thành niên
<br>
7. Cách cập nhật Chính sách bảo mật này
<br>
<strong> 1. Làm thế nào để chúng tôi thu thập và sử dụng thông tin của bạn </strong>
<br>
Khi bạn sử dụng các sản phẩm và/hoặc dịch vụ của chúng tôi, thông tin cá nhân chúng tôi cần/có thể cần thu thập và sử dụng bao gồm những điều sau: Sau đây:
<br>
1. Để cung cấp cho bạn các chức năng cơ bản để cung cấp cho bạn các sản phẩm và/hoặc dịch vụ, bạn phải ủy quyền cho thông tin cần thiết chúng tôi thu thập và sử dụng. Nếu bạn từ chối cung cấp thông tin tương ứng, bạn sẽ không thể sử dụng sản phẩm và/hoặc dịch vụ của chúng tôi bình thường;
<br>
2. Để cung cấp cho bạn các chức năng bổ sung để cung cấp cho chúng tôi sản phẩm và/hoặc dịch vụ, bạn có thể chọn ủy quyền cho thông tin chúng tôi thu thập và sử dụng. Nếu bạn từ chối cung cấp nó, bạn sẽ không thể sử dụng các chức năng bổ sung liên quan bình thường hoặc không thể đạt được các hiệu ứng chức năng mà chúng tôi dự định đạt được, nhưng nó sẽ không ảnh hưởng đến các chức năng cơ bản của bạn sử dụng sản phẩm và/hoặc dịch vụ của chúng tôi bình thường.
<br>
Bạn hiểu và đồng ý:
<br>
1. Chúng tôi cam kết tạo ra nhiều loại sản phẩm và dịch vụ để đáp ứng nhu cầu của bạn. Bởi vì có nhiều loại và dịch vụ chúng tôi cung cấp cho bạn, và có sự khác biệt trong phạm vi của sản phẩm/dịch vụ cụ thể được lựa chọn bởi những người dùng khác nhau. Theo đó, các loại và phạm vi của các chức năng cơ bản/bổ sung và thông tin cá nhân và phạm vi thu thập sẽ khác nhau. Chức năng sản phẩm/dịch vụ cụ thể sẽ chiếm ưu thế;
<br>
2. Để mang lại cho bạn trải nghiệm sản phẩm và dịch vụ tốt hơn, chúng tôi liên tục làm việc chăm chỉ để cải thiện công nghệ của mình và đôi khi chúng tôi có thể khởi chạy các chức năng mới hoặc tối ưu hóa. thông tin sử dụng mục đích hoặc phương pháp. Về vấn đề này, chúng tôi sẽ giải thích cho bạn mục đích thu thập, phạm vi và phương pháp sử dụng của thông tin tương ứng thông qua việc cập nhật chính sách này, cửa sổ pop -up, lời nhắc trang, v.v. và cung cấp cho bạn cách đồng ý chọn lọc. Và sử dụng. Trong quá trình này, nếu bạn có bất kỳ câu hỏi, ý kiến ​​hoặc đề xuất nào, bạn có thể liên hệ với chúng tôi thông qua các thông tin liên hệ khác nhau được cung cấp bởi nền tảng này và chúng tôi sẽ trả lời nó càng sớm càng tốt.
<br>
Chúng tôi sẽ thu thập và sử dụng thông tin cá nhân của bạn để nhận ra các chức năng sau của chính sách này:
<br>
(1) giúp bạn đăng ký và cung cấp cho bạn các dịch vụ được cung cấp bởi nền tảng này;
<br>
1. Dịch vụ đăng ký
<br>
Chúng tôi cung cấp cho bạn các dịch vụ thành viên cơ bản thông qua tài khoản nền tảng này. Để đăng ký làm thành viên và sử dụng các dịch vụ thành viên của chúng tôi, bạn cần điền và cung cấp thông tin sau khi đăng ký đăng ký:
<br>
(1) Thông tin nhận dạng. Thông tin này có thể giúp chúng tôi xác minh xem bạn có đủ điều kiện đăng ký làm thành viên nền tảng hay không, bao gồm nhưng không giới hạn tên của bạn, địa chỉ cư trú của bạn, các chứng chỉ khác do quốc gia của bạn hoặc chính phủ của bạn có chứng chỉ khác nhau và những gì liên quan đến thông tin danh tính của bạn và liên quan . Số và thông tin khác có thể giúp chúng tôi xác minh danh tính của bạn (sau đây gọi là "thông tin nhận dạng"
ĐẾN. Thông tin nhận dạng này là khác nhau tùy theo việc bạn là người dùng cá nhân hay người dùng tổ chức. Theo luật pháp và quy định của các khu vực pháp lý khác nhau, chúng tôi có thể có thông tin khác nhau được thu thập bởi người dùng từ các quốc gia hoặc khu vực khác nhau. Thông tin và dữ liệu sau đây được sử dụng làm ví dụ hướng dẫn:
<br>
Người dùng cá nhân: quốc tịch, tên đầy đủ (bao gồm tên và tên ngôn ngữ địa phương), số ID, địa chỉ email, số điện thoại, số an sinh xã hội ("SSN"), số hộ chiếu hoặc số ID được cấp bởi bất kỳ chính phủ, ngày sinh, danh tính Giấy chứng nhận (như hộ chiếu, giấy phép lái xe hoặc chứng nhận của chính phủ do chính phủ cấp).
<br>
Người dùng tổ chức: Tên hợp pháp của công ty (bao gồm tên hợp pháp của ngôn ngữ địa phương), thông tin đăng ký, số điện thoại kinh doanh, đại diện được ủy quyền và thông tin cá nhân của người dùng được ủy quyền, địa điểm kinh doanh chính, thông tin cá nhân của tất cả Chủ sở hữu người thụ hưởng), danh tính của các tài liệu chứng minh danh tính của cổ đông/chủ sở hữu lợi ích (hộ chiếu hoặc thẻ ID do chính phủ cấp), khung công ty, thành lập công ty các tài liệu liên quan, nghị quyết của hội đồng thông tin hoặc tài liệu khác theo yêu cầu của nền tảng.
<br>
(2) Thông tin dịch vụ. Thông tin này giúp chúng tôi liên hệ với bạn và cung cấp cho bạn các mô hình dịch vụ giao dịch tài sản kỹ thuật số khác nhau, bao gồm nhưng không giới hạn ở thông tin nhận dạng cá nhân, thông tin liên hệ, thông tin giao dịch và thông tin thẻ ghi nợ của bạn và/hoặc thông tin tài khoản khác ( được gọi là "thông tin dịch vụ"
ĐẾN. Đồng thời, xin vui lòng hiểu rằng các dịch vụ chúng tôi cung cấp cho bạn liên tục được cập nhật và phát triển. Nếu bạn chọn sử dụng các dịch vụ khác chưa được đề cập trong mô tả đã nói ở trên, dựa trên dịch vụ chúng tôi cần thu thập thông tin bổ sung của bạn, chúng tôi sẽ giải thích phạm vi thu thập thông tin thông qua lời nhắc trang, quy trình tương tác, lời nhắc thỏa thuận, v.v. mục đích và có được sự đồng ý của bạn.
<br>
Nếu bạn chỉ cần sử dụng Dịch vụ Duyệt, bạn không cần phải đăng ký làm thành viên của chúng tôi và cung cấp thông tin trên.
<br>
2. Dịch vụ đăng ký khác
<br>
Xác thực -Name thực: Khi bạn đăng ký và đăng nhập, bạn cần nhập "Trung tâm cá nhân" để hoàn thành xác thực tên thực trong xác thực danh tính của bạn. Bạn phải cung cấp tên thật, số ID hoặc số hộ chiếu cho nền tảng trong Sử dụng xác thực -Name thực.
<br>
Chứng nhận nâng cao: Khi số tiền giao dịch của bạn trên nền tảng này vượt quá giới hạn nhất định, nền tảng sẽ yêu cầu bạn thực hiện chứng nhận nâng cao để duy trì bảo mật tài sản của bạn. Ngoài thông tin xác thực thực sự, bạn nhận ra nền tảng cho chứng nhận nâng cao "Nhận dạng khuôn mặt". Nhận dạng khuôn mặt sẽ liên quan đến việc thu thập các luồng video liên quan hoặc hình ảnh khuôn mặt của nền tảng.
<br>
Hiển thị thông tin tài khoản: Nếu bạn đã có tài khoản nền tảng này, chúng tôi có thể hiển thị thông tin cá nhân ở trên của bạn trong dịch vụ (xác thực thực sự chỉ hiển thị liệu chứng nhận có được thông qua hay không) và những gì bạn thực hiện trong sản phẩm và dịch vụ liên quan đến tài khoản nền tảng Hoạt động, bao gồm hiển thị dữ liệu cá nhân và đơn đặt hàng giao dịch của bạn thông qua tài khoản nền tảng này. Chúng tôi sẽ tôn trọng sự lựa chọn của bạn về cài đặt tài khoản nền tảng.
<br>
(2) Dịch vụ dịch vụ quản lý bảo mật và dịch vụ đẩy dịch vụ
<br>
Khi bạn sử dụng các dịch vụ được cung cấp bởi nền tảng này hoặc truy cập nền tảng này, nền tảng này cần tự động nhận và ghi lại thông tin trình duyệt web của bạn để đảm bảo bảo mật giao dịch và bảo mật dịch vụ của bạn và hoạt động ổn định. Thông tin thiết bị như mô hình và các ký hiệu nhận dạng thiết bị khác , Địa chỉ IP và hồ sơ trên trang web bạn yêu cầu truy cập, khu vực, môi trường mạng, thông tin vân tay thiết bị, thông tin nhật ký dịch vụ, thông tin phần mềm, thông tin vị trí, v.v.
<br>
Xin lưu ý rằng thông tin thiết bị riêng biệt là thông tin không thể xác định danh tính người tự nhiên cụ thể. Nếu chúng tôi sử dụng loại thông tin phi cá nhân này với thông tin khác để xác định một người tự nhiên cụ thể hoặc sử dụng nó với thông tin cá nhân, trong quá trình sử dụng, thông tin phi cá nhân đó sẽ được coi là thông tin cá nhân, ngoại trừ sự cho phép của bạn Có được ủy quyền của bạn hoặc ngoài các quy định khác của luật pháp và quy định, chúng tôi sẽ ẩn danh và xác định thông tin đó.
<br>
Để cung cấp cho bạn các dịch vụ Hiển thị và Đẩy thông tin hơn và thúc đẩy nhiều thông tin đáp ứng nhu cầu được cá nhân hóa của bạn, chúng tôi có thể dựa trên thông tin thiết bị và thông tin duyệt của nền tảng hoặc khách hàng của bạn, trích xuất tùy chọn của bạn và nhãn dựa trên nhãn tính năng. Bức chân dung gián tiếp được sử dụng để hiển thị, đẩy thông tin và quảng cáo thương mại có thể. Nếu bạn không đồng ý nhận thông tin đẩy đó hoặc rút lại sự đồng ý của bạn để thu thập thông tin cá nhân, bạn có thể liên hệ với chúng tôi theo thông tin liên hệ được cung cấp bởi chính sách này.
<br>
Chúng tôi cố gắng để đảm bảo trải nghiệm duyệt web của bạn. Nếu bạn không muốn chấp nhận quảng cáo thương mại mà chúng tôi gửi cho bạn, bạn có thể trả lời hoặc đóng việc rút tiền hoặc các cách khác mà chúng tôi cung cấp bởi Prompt SMS.
<br>
Ngoài ra, chúng tôi sẽ sử dụng thông tin trên của bạn để liên tục cải thiện và tối ưu hóa các chức năng trên.
<br>
(3) Hồ sơ giao dịch và dịch vụ truy vấn
<br>
Dữ liệu liên quan được thu thập trên nền tảng này trên nền tảng này, bao gồm nhưng không giới hạn ở hồ sơ giao dịch. Nếu bạn cần truy vấn hồ sơ giao dịch đặt hàng của mình, bạn có thể kiểm tra chi tiết giao dịch cá nhân của mình trong nền tảng "Quản lý đơn hàng", bao gồm: Biệt danh của bên giao dịch, thời gian đặt hàng, số đơn đặt hàng, thông tin giao dịch, loại tài sản kỹ thuật số và số lượng.
<br>
(4) Dịch vụ khách hàng và xử lý tranh chấp
<br>
Khi bạn liên hệ với chúng tôi hoặc đề xuất ứng dụng để bán sau khi bán, xử lý tranh chấp tranh chấp, để đảm bảo bảo mật tài khoản và hệ thống của bạn, chúng tôi cần bạn cung cấp thông tin cá nhân cần thiết để xác minh trạng thái thành viên của bạn.
<br>
Để tạo điều kiện cho bạn, hãy giúp bạn giải quyết vấn đề của các vấn đề hoặc ghi lại các vấn đề liên quan càng sớm càng tốt, chúng tôi có thể lưu hồ sơ giao tiếp của bạn và nội dung liên quan với chúng tôi (bao gồm thông tin tài khoản, thông tin đặt hàng và các sự kiện khác mà bạn cung cấp thông tin hoặc Thông tin liên hệ bạn để lại), nếu bạn tham khảo, phàn nàn hoặc cung cấp đề xuất cho các đơn đặt hàng cụ thể, chúng tôi sẽ sử dụng thông tin tài khoản và thông tin đặt hàng của bạn.
<br>
Để cung cấp các nhu cầu hợp lý về dịch vụ và cải thiện chất lượng dịch vụ, các thông tin khác chúng tôi có thể sử dụng, bao gồm thông tin liên quan bạn cung cấp khi bạn liên hệ với dịch vụ khách hàng và thông tin trả lời câu hỏi được gửi cho chúng tôi trong quá trình khảo sát câu hỏi.
<br>
(5) Những người khác
<br>
1. Nếu thông tin bạn cung cấp chứa thông tin cá nhân của người dùng khác, bạn cần đảm bảo rằng bạn đã có được ủy quyền pháp lý trước khi cung cấp thông tin cá nhân này cho nền tảng này. Nếu bạn liên quan đến thông tin cá nhân của trẻ em, bạn cần có được sự đồng ý của người giám hộ của trẻ trước khi được phát hành và Người giám hộ có quyền liên hệ với chúng tôi thông qua cách tiếp cận Điều 9 của chính sách này trong tình huống đã nói ở trên để yêu cầu chính xác hoặc xóa Nội dung liên quan đến thông tin cá nhân của trẻ em.
<br>
2. Nếu chúng tôi sử dụng thông tin mà thông tin không được nêu trong chính sách này hoặc thông tin được thu thập dựa trên các mục tiêu cụ thể cho các mục đích khác hoặc chúng tôi chủ động lấy thông tin cá nhân của bạn từ bên thứ ba, chúng tôi sẽ giúp bạn trước Đồng ý.
<br>
Nếu chúng tôi có được thông tin của bạn một cách gián tiếp từ bên thứ ba, chúng tôi sẽ yêu cầu bên thứ ba thu thập thông tin cá nhân bằng văn bản trước khi thu thập bằng văn bản và thông báo cho bạn nội dung thông tin được chia sẻ và liên quan đến thông tin nhạy cảm mà bạn cần được xác nhận Theo xác nhận rõ ràng của bạn trước khi cung cấp cho chúng tôi, yêu cầu các bên thứ ba cam kết cam kết về tính hợp pháp và tuân thủ nguồn thông tin cá nhân. Nếu bên thứ ba vi phạm hành vi, chúng tôi sẽ yêu cầu bên kia chịu trách nhiệm pháp lý tương ứng; Đồng thời chúng tôi sẽ thực hiện củng cố bảo mật trên thông tin cá nhân (bao gồm báo cáo thông tin nhạy cảm, lưu trữ mã hóa thông tin nhạy cảm, kiểm soát quyền truy cập, v.v.). Chúng tôi sẽ không sử dụng thông tin cá nhân có được từ thông tin cá nhân của chúng tôi không thấp hơn thông tin và biện pháp cá nhân của chúng tôi.
<br>
3. Ngoại lệ có được sự đồng ý ủy quyền
<br>
Bạn hoàn toàn hiểu và đồng ý. Trong các trường hợp sau, chúng tôi thu thập và sử dụng thông tin cá nhân của bạn mà không có sự đồng ý của bạn và chúng tôi không được đáp ứng yêu cầu sửa chữa/sửa đổi, xóa, hủy, rút ​​tiền và nhận thông tin.
<br>
(1) nó liên quan đến an ninh quốc gia và an ninh quốc phòng;
<br>
(2) liên quan đến an toàn công cộng, sức khỏe cộng đồng và lợi ích công cộng lớn;
<br>
(3) Nó có liên quan đến việc thực thi pháp luật tư pháp hoặc hành chính đối với điều tra hình sự, truy tố, xét xử và phán quyết.
<br>
(4) Đối với các quyền và lợi ích chính đáng lớn như duy trì các cá nhân của bạn hoặc các cá nhân khác, nhưng rất khó để có được sự đồng ý của tôi;
<br>
(5) thông tin cá nhân mà bạn tiết lộ cho công chúng một mình;
<br/>
(6) Thu thập thông tin cá nhân từ thông tin công khai pháp lý, chẳng hạn như báo cáo tin tức pháp lý, công bố thông tin của chính phủ và các kênh khác.
<br>
(7) những gì cần thiết để ký và thực hiện các thỏa thuận liên quan hoặc các tài liệu bằng văn bản khác với bạn;
<br>
(8) hoạt động cần thiết và ổn định của các sản phẩm và/hoặc dịch vụ được cung cấp bởi bảo trì, chẳng hạn như khám phá, xử lý sản phẩm và/./ hoặc lỗi dịch vụ;
<br>
(9) nó là cần thiết cho các báo cáo tin tức pháp lý;
<br>
(10) các tổ chức nghiên cứu học thuật là cần thiết để thực hiện thống kê hoặc nghiên cứu học thuật dựa trên lợi ích công cộng và cung cấp kết quả nghiên cứu học thuật hoặc mô tả để xác định thông tin cá nhân có trong kết quả;
<br>
(11) Các trường hợp khác quy định trong luật pháp và quy định.
<br>
Xin vui lòng biết rằng theo luật hiện hành, nếu chúng tôi thực hiện các biện pháp kỹ thuật và các biện pháp cần thiết khác để lấy thông tin cá nhân, để người nhận dữ liệu không thể xác định lại các cá nhân cụ thể và không thể phục hồi hoặc chúng tôi có thể nghiên cứu việc thu thập thông tin, phân tích thống kê và Dự đoán, để cải thiện nội dung và bố cục của nền tảng này, cung cấp hỗ trợ sản phẩm hoặc dịch vụ cho các quyết định kinh doanh và cải thiện các sản phẩm và dịch vụ của chúng tôi Sau khi dữ liệu không cần thông báo cho bạn và có được sự đồng ý của bạn.
<br>
4. Nếu chúng tôi ngừng vận hành sản phẩm hoặc dịch vụ của nền tảng này, chúng tôi sẽ ngừng thu thập các hoạt động thông tin cá nhân của bạn kịp thời. Thông báo về hoạt động dừng sẽ được thông báo dưới dạng giao hàng hoặc thông báo và chúng tôi có liên quan đến những gì chúng tôi nắm giữ. Ngừng thông tin cá nhân liên quan đến kinh doanh bị xóa hoặc ẩn danh.
<br>
<strong> 2. Làm thế nào để chúng ta sử dụng cookie </strong>
<br>
Nếu trình duyệt hoặc trình duyệt của bạn Dịch vụ bổ sung cho phép, bạn có thể sửa đổi mức độ chấp nhận cookie hoặc từ chối cookie của chúng tôi. Để biết chi tiết, xem
Aboutcookies.org. Nhưng nếu bạn làm điều này, trong một số trường hợp, bạn có thể ảnh hưởng đến quyền truy cập bảo mật của mình vào nền tảng của chúng tôi và bạn có thể cần thay đổi cài đặt người dùng khi bạn truy cập nền tảng của chúng tôi. Bạn hiểu và đồng ý:
<br>
1. Khi bạn truy cập nền tảng của chúng tôi, chúng tôi sử dụng các số liệu thống kê của Google để ghi lại hiệu suất của chúng tôi và kiểm tra hiệu quả của quảng cáo trực tuyến thông qua cookie.
Cookie là một lượng nhỏ dữ liệu được gửi đến trình duyệt của bạn và được lưu trữ trên ổ đĩa cứng máy tính của bạn. Chỉ khi bạn sử dụng máy tính của mình để vào nền tảng của chúng tôi, cookie mới có thể được gửi đến đĩa cứng máy tính của bạn.
<br>
2. Cookie thường được sử dụng để ghi lại thói quen và sở thích của khách truy cập để duyệt các dự án khác nhau trên nền tảng của chúng tôi. Dữ liệu được thu thập bởi cookie không rõ thống kê tập thể và không có thông tin cá nhân.
<br>
3. Cookie không thể được sử dụng để lấy dữ liệu trên đĩa cứng, địa chỉ email và dữ liệu cá nhân của bạn, có thể làm cho nền tảng hoặc hệ thống nhà cung cấp dịch vụ này nhận ra trình duyệt và thông tin ghi nhớ và ghi nhớ của bạn. Hầu hết các trình duyệt được đặt trước để chấp nhận cookie. Bạn có thể chọn đặt trình duyệt của mình để không chấp nhận cookie hoặc thông báo cho bạn nếu cookie được cài đặt. Nhưng,
Nếu bạn đặt để cấm cookie, bạn có thể không thể bắt đầu hoặc sử dụng một số chức năng của nền tảng của chúng tôi.
<br>
<strong> 3. Làm thế nào để chúng tôi chia sẻ, chuyển nhượng, tiết lộ công khai thông tin của bạn </strong>
<br>
(1) Chia sẻ
<br>
Chúng tôi sẽ không chia sẻ thông tin cá nhân của bạn với các công ty, tổ chức và cá nhân khác ngoài nhà cung cấp dịch vụ nền tảng này, ngoại trừ các tình huống sau:
<br>
1. Chia sẻ trong các tình huống theo luật định: Chúng tôi có thể chia sẻ thông tin cá nhân của bạn với thế giới bên ngoài theo các yêu cầu của luật pháp và quy định, vụ kiện và tranh chấp, hoặc theo các yêu cầu của các cơ quan hành chính và tư pháp theo các yêu cầu của pháp luật.
<br>
2. Được chia sẻ với sự đồng ý rõ ràng: Sau khi nhận được sự đồng ý rõ ràng của bạn, chúng tôi sẽ chia sẻ thông tin cá nhân của bạn với các bên khác.
<br>
3. Chia sẻ nó theo lựa chọn tích cực của bạn: Chúng tôi sẽ chia sẻ thông tin cần thiết liên quan đến thông tin giao dịch trong thông tin đơn đặt hàng của bạn dựa trên sự lựa chọn của bạn để chia sẻ giao dịch tài sản kỹ thuật số để đạt được nhu cầu dịch vụ sau giao dịch và sau của bạn.
<br>
4. Chia sẻ với các đối tác được ủy quyền: Các bên liên quan của chúng tôi, giúp chúng tôi điều hành nền tảng của chúng tôi, thực hiện kinh doanh hoặc cung cấp cho bạn một bên thứ ba đáng tin cậy cung cấp cho bạn các dịch vụ. Thông tin là phù hợp. Đó là một đơn đặt hàng tuân thủ luật pháp, quy định , các quy tắc và quy định hoặc từ tòa án hoặc các cơ quan có thẩm quyền của anh ta, và thực hiện chiến lược nền tảng của chúng tôi. Quyền, tài sản hoặc bảo mật.
<br>
(2) Chuyển giao
<br>
Chúng tôi sẽ không chuyển thông tin cá nhân của bạn cho bất kỳ công ty, tổ chức và cá nhân nào, ngoại trừ các tình huống sau: ngoại trừ:
<br>
1. Trong trường hợp có được sự đồng ý rõ ràng: Sau khi nhận được sự đồng ý rõ ràng của bạn, chúng tôi sẽ chuyển thông tin cá nhân của bạn cho các bên khác;
<br>
2. Trong trường hợp sáp nhập, mua lại hoặc thanh lý phá sản trong nền tảng này hoặc các trường hợp khác liên quan đến sáp nhập, mua lại hoặc thanh lý phá sản, nếu bạn liên quan đến việc chuyển thông tin cá nhân, chúng tôi sẽ yêu cầu các công ty và tổ chức mới giữ thông tin cá nhân của bạn để tiếp tục phải tuân theo cuốn sách này. Các ràng buộc của chính sách, nếu không chúng tôi sẽ yêu cầu công ty, tổ chức và cá nhân điều hòa sự đồng ý ủy quyền của bạn.
<br>
(3) Tiết lộ công khai
<br>
Chúng tôi sẽ chỉ tiết lộ công khai thông tin cá nhân của bạn trong các trường hợp sau:
<br>
1. Nhận sự đồng ý rõ ràng của bạn hoặc dựa trên sự lựa chọn tích cực của bạn, chúng tôi có thể công khai thông tin cá nhân của bạn;
<br>
2. Nếu chúng tôi xác định rằng bạn đã vi phạm luật pháp và quy định hoặc vi phạm nghiêm trọng các thỏa thuận và quy tắc liên quan của nền tảng hoặc vì sự bảo mật của tài sản cá nhân của người dùng hoặc công chúng, chúng tôi có thể khám phá thông tin cá nhân của bạn, bao gồm các vi phạm liên quan và Các biện pháp mà nền tảng này đã thực hiện cho bạn.
<br>
(4) Chia sẻ, chuyển nhượng và tiết lộ công khai tiết lộ thông tin cá nhân.
<br>
Trong các trường hợp sau, chia sẻ, chuyển nhượng và tiết lộ công khai thông tin cá nhân của bạn mà không có được sự đồng ý ủy quyền của bạn trước:
<br>
1. Nó liên quan đến an ninh quốc gia và an ninh quốc phòng;
<br>
2. Liên quan đến an toàn công cộng, sức khỏe cộng đồng và lợi ích công cộng lớn;
<br>
3. Nó liên quan đến việc thực thi pháp luật tư pháp hoặc hành chính đối với điều tra hình sự, truy tố, xét xử và phán quyết.
<br>
4. Đối với các quyền và lợi ích hợp pháp lớn như duy trì các cá nhân của bạn hoặc các cá nhân khác, nhưng rất khó để có được sự đồng ý của tôi;
<br>
5. Thông tin cá nhân mà bạn tiết lộ cho công chúng một mình;
<br>
6. Thu thập thông tin cá nhân từ thông tin công khai pháp lý, chẳng hạn như báo cáo tin tức pháp lý và công bố thông tin của chính phủ.
<br>
Xin vui lòng biết rằng theo luật hiện hành, nếu chúng tôi thực hiện các biện pháp kỹ thuật và các biện pháp cần thiết khác để lấy thông tin cá nhân, để người nhận dữ liệu không thể xác định lại các cá nhân cụ thể và không thể phục hồi, sau đó chia sẻ, chuyển và công khai dữ liệu Xử lý không cần phải được tiết lộ mà không tiết lộ. Thông báo cho bạn và có được sự đồng ý của bạn.
<br>
<strong> 4. Làm thế nào để chúng tôi bảo vệ thông tin của bạn </strong>
<br>
1. Chúng tôi thực hiện các biện pháp vật lý, điện tử, quản lý và kỹ thuật thích hợp để bảo vệ và bảo vệ dữ liệu cá nhân của bạn. Chúng tôi cố gắng hết sức để đảm bảo rằng bất kỳ thông tin cá nhân nào được thu thập bởi nền tảng của chúng tôi đều được tránh bởi bất kỳ bên thứ ba nào không liên quan gì đến chúng tôi. Các biện pháp an toàn mà chúng tôi thực hiện bao gồm, nhưng không giới hạn ở:
<br>
(1) Các biện pháp vật lý: Hồ sơ với dữ liệu cá nhân của bạn sẽ được lưu trữ ở những nơi bị khóa.
<br>
(2) Các biện pháp điện tử: Dữ liệu máy tính với dữ liệu cá nhân của bạn sẽ được lưu trữ trên hệ thống máy tính và phương tiện lưu trữ được đăng nhập nghiêm ngặt.
<br>
.
Những nhân viên này cần phải tuân thủ các mã bảo mật nội bộ của chúng tôi. Ngoài ra, chúng tôi tiếp tục củng cố việc vận động các luật pháp và quy định liên quan, tiêu chuẩn an toàn quyền riêng tư và nhận thức bảo mật của đào tạo nhân viên, và thường xuyên tổ chức các nhân viên nội bộ để tiến hành đào tạo ứng phó khẩn cấp và diễn tập khẩn cấp, để họ có thể thành thạo các nhiệm vụ công việc và chiến lược xử lý khẩn cấp và các quy định
<br>
(4) Các biện pháp kỹ thuật: Công nghệ mã hóa như mã hóa lớp ổ cắm an toàn có thể được áp dụng để vận chuyển dữ liệu cá nhân của bạn.
<br>
. nguy cơ thay đổi. Ví dụ: truyền được mã hóa, lưu trữ mã hóa thông tin, hạn chế nghiêm ngặt đối với các trung tâm dữ liệu thông qua phần mềm lớp bảo mật mạng (SSL). Khi truyền và lưu trữ thông tin nhạy cảm cá nhân (bao gồm thông tin sinh trắc học cá nhân), chúng tôi sẽ áp dụng các biện pháp bảo mật như mã hóa, kiểm soát quyền, xác định và giải mẫn cảm.
<br>
(6) các biện pháp khác: Thường xuyên xem xét quá trình thu thập, lưu trữ và xử lý dữ liệu cá nhân của chúng tôi;
Và hạn chế quyền truy cập của nhân viên và nhà cung cấp của chúng tôi vào dữ liệu của bạn theo các nguyên tắc cần thiết và nhân viên và nhà cung cấp của chúng tôi cần tuân thủ các nghĩa vụ bảo mật hợp đồng nghiêm ngặt. Nước hoa
<br>
2. Nếu bạn biết rằng có bất kỳ kẽ hở bảo mật nào trên nền tảng của chúng tôi, vui lòng liên hệ với chúng tôi ngay lập tức để chúng tôi có thể thực hiện hành động thích hợp càng sớm càng tốt.
<br>
3. Mặc dù việc thực hiện các công nghệ và các biện pháp bảo mật đã đề cập ở trên, chúng tôi không thể đảm bảo rằng dữ liệu của dữ liệu trên Internet là hoàn toàn an toàn.
Do đó, chúng tôi hoàn toàn không thể đảm bảo rằng tất cả các bạn đều an toàn cho chúng tôi để cung cấp thông tin cá nhân của chúng tôi thông qua nền tảng của chúng tôi. Chúng tôi sẽ cập nhật và tiết lộ nội dung liên quan của rủi ro bảo mật, báo cáo đánh giá tác động bảo mật thông tin cá nhân, v.v. Bạn có thể nhận được thông báo thông báo về nền tảng này.
<br>
<strong> 5. Làm thế nào để bạn quản lý thông tin của mình </strong>
<br>
Bạn có thể truy cập và quản lý thông tin của mình thông qua các cách sau:
<br>
(1) Truy vấn, sửa và xóa thông tin của bạn
<br>
Bạn có quyền có được một bản sao hồ sơ của mình theo các yêu cầu và xác định xem thông tin chúng tôi kiểm soát có chính xác hay không và mới nhất. Nếu dữ liệu cá nhân của bạn không chính xác, bạn có thể yêu cầu cập nhật thông tin của bạn. Bạn cũng có thể yêu cầu xóa thông tin cá nhân của bạn, nhưng chúng tôi có thể từ chối yêu cầu xóa của bạn trong một số trường hợp, chẳng hạn như các yêu cầu pháp lý hoặc các mục đích pháp lý khác. Về quyền truy cập dữ liệu, chính xác hơn hoặc xóa các yêu cầu, bạn có thể liên hệ với chúng tôi thông qua thông tin liên hệ trong Điều 8.
<br>
Đáp lại quyền truy cập dữ liệu, chính xác hơn hoặc xóa yêu cầu, chúng tôi sẽ xác minh danh tính của bên yêu cầu để đảm bảo rằng anh ấy/cô ấy có quyền đưa ra các yêu cầu đó theo luật. Mặc dù mục tiêu của chúng tôi là trả lời các yêu cầu này miễn phí, chúng tôi vẫn giữ quyền thu chi phí hợp lý khi yêu cầu của bạn lặp lại hoặc nặng.
<br>
(2) Thay đổi phạm vi đồng ý ủy quyền của bạn
<br>
Mỗi chức năng kinh doanh yêu cầu một số thông tin cá nhân cơ bản để hoàn thành (xem "phần đầu tiên" của chính sách quyền riêng tư này). Ngoài ra, bạn có thể liên hệ với chúng tôi thông qua thông tin liên hệ trong Điều 8 để cung cấp hoặc lấy lại sự đồng ý ủy quyền của bạn.
<br>
Khi bạn phục hồi sự đồng ý của mình, chúng tôi sẽ không còn xử lý thông tin cá nhân tương ứng. Nhưng quyết định của bạn để phục hồi sự đồng ý sẽ không ảnh hưởng đến xử lý thông tin cá nhân dựa trên ủy quyền của bạn.
<br>
(3) Đăng xuất tài khoản của bạn
<br>
Bạn có thể liên hệ với chúng tôi để đăng ký hủy tài khoản của mình thông qua thông tin liên hệ tại Điều 8; sau khi bạn chủ động hủy tài khoản, chúng tôi sẽ ngừng cung cấp cho bạn các sản phẩm hoặc dịch vụ, xóa thông tin cá nhân của bạn theo yêu cầu của luật hiện hành hoặc Làm cho họ làm cho nó điều trị ẩn danh.
<br>
(4) Trả lời yêu cầu trên của bạn
<br>
Để đảm bảo an toàn, bạn có thể cần cung cấp một yêu cầu bằng văn bản hoặc chứng minh danh tính của bạn theo những cách khác. Chúng tôi có thể yêu cầu bạn xác minh danh tính của bạn trước, sau đó xử lý yêu cầu của bạn.
<br>
Chúng tôi sẽ trả lời trong vòng 15 ngày. Nếu bạn không hài lòng, bạn cũng có thể bắt đầu khiếu nại thông qua thông tin liên hệ chúng tôi cung cấp.
<br>
Đối với yêu cầu hợp lý của bạn, chúng tôi không tính phí về nguyên tắc, nhưng chúng tôi sẽ tính một khoản phí nhất định nếu phù hợp với các yêu cầu lặp đi lặp lại và hợp lý hơn. Để biết thông tin không liên quan trực tiếp đến danh tính của bạn, thông tin lặp đi lặp lại chưa từng có hoặc quá nhiều phương tiện kỹ thuật (ví dụ: bạn cần phát triển một hệ thống mới hoặc thay đổi thực tiễn hiện tại từ cơ bản), mang lại rủi ro hoặc yêu cầu không thực tế cho các quyền hợp pháp của người khác và lợi ích cho người khác chúng ta có thể từ chối.
<br>
Trong các trường hợp sau đây, theo các yêu cầu của luật pháp và quy định, chúng tôi sẽ không thể đáp ứng yêu cầu của bạn:
<br>
1. Nó liên quan đến an ninh quốc gia và an ninh quốc phòng;
<br>
2. Liên quan đến an toàn công cộng, sức khỏe cộng đồng và lợi ích công cộng lớn;
<br>
3. Liên quan đến điều tra tội phạm, truy tố, xét xử và phán quyết thực thi;
<br>
4. Có đủ bằng chứng cho thấy chủ đề thông tin cá nhân có chủ quan hoặc lạm dụng quyền;
<br>
5. Trả lời Yêu cầu của bạn sẽ khiến các quyền và lợi ích hợp pháp của bạn hoặc các cá nhân và tổ chức khác bị hư hại nghiêm trọng;
<br>
6. Liên quan đến bí mật kinh doanh.
<br>
<strong> 6. Làm thế nào để chúng ta xử lý thông tin của trẻ vị thành niên </strong>
<br>
Nền tảng này mở cửa cho trẻ em. Nếu chúng tôi thấy hoặc nghi ngờ rằng người dùng dưới 14 tuổi, chúng tôi sẽ yêu cầu người dùng đóng tài khoản của họ và sẽ không cho phép người dùng tiếp tục sử dụng các sản phẩm hoặc dịch vụ nền tảng. Chúng tôi sẽ xóa dữ liệu liên quan càng sớm càng tốt. Nếu bạn biết rằng bất kỳ ai dưới 14 tuổi đều sử dụng dịch vụ của chúng tôi, vui lòng thông báo cho chúng tôi để chúng tôi có thể hành động để ngăn họ lấy sản phẩm hoặc dịch vụ của chúng tôi.
<br>
Đối với trẻ vị thành niên 14 tuổi nhưng dưới 18 tuổi, chúng tôi hy vọng cha mẹ hoặc người giám hộ sẽ hướng dẫn trẻ vị thành niên sử dụng dịch vụ của chúng tôi. Chúng tôi sẽ bảo vệ tính bảo mật và bảo mật của thông tin của trẻ vị thành niên theo các quy định của các luật và quy định liên quan.
<br>
Nếu bạn là trẻ vị thành niên, nên cha mẹ hoặc người giám hộ của bạn đọc chính sách này và sử dụng dịch vụ của chúng tôi hoặc cung cấp thông tin cho chúng tôi cho chúng tôi theo sự đồng ý của cha mẹ hoặc người giám hộ của bạn. Đối với trường hợp phụ huynh hoặc người giám hộ đồng ý thu thập thông tin của bạn, chúng tôi sẽ chỉ sử dụng hoặc tiết lộ thông tin này nếu họ được pháp luật, phụ huynh hoặc người giám hộ cho phép rõ ràng hoặc bảo vệ quyền của bạn. Nếu người giám hộ của bạn không đồng ý rằng bạn sử dụng dịch vụ của chúng tôi hoặc cung cấp thông tin cho chúng tôi theo chính sách này, vui lòng chấm dứt ngay các dịch vụ của chúng tôi và thông báo cho chúng tôi kịp thời để chúng tôi có thể thực hiện các biện pháp tương ứng.
<br>
Nếu bạn là cha mẹ hoặc người giám hộ trẻ vị thành niên, khi bạn có thắc mắc về việc xử lý thông tin của trẻ vị thành niên bạn theo dõi, vui lòng liên hệ với chúng tôi thông tin liên hệ của chính sách này.
<br>
<strong> Seven, Cách cập nhật Chính sách bảo mật </strong>
<br>
Chính sách bảo mật của chúng tôi có thể thay đổi.
<br>
Nếu không có sự đồng ý của bạn, chúng tôi sẽ không giới hạn các quyền bạn nên được hưởng theo chính sách quyền riêng tư này. Chúng tôi sẽ xuất bản bất kỳ thay đổi nào đối với các chính sách bảo mật trên các kênh chính thức. Nếu bạn không đồng ý với nội dung sửa đổi, bạn nên ngừng truy cập nền tảng này ngay lập tức. Khi phiên bản cập nhật của Chính sách bảo mật được phát hành, bạn tiếp tục truy cập hiển thị nền tảng này và cho biết rằng bạn đồng ý với nội dung cần được cập nhật và đồng ý tuân thủ chính sách bảo mật được cập nhật.
<br>
Đối với những thay đổi lớn, chúng tôi cũng sẽ cung cấp các thông báo quan trọng hơn (bao gồm chúng tôi sẽ thông báo thông báo thông qua cách thức của nền tảng này và thậm chí cung cấp cho bạn lời nhắc cửa sổ POP -UP).
<br>
Những thay đổi chính trong chính sách này bao gồm, nhưng không giới hạn ở:
<br>
1. Mô hình dịch vụ của chúng tôi đã thay đổi đáng kể. Chẳng hạn như mục đích xử lý thông tin cá nhân, loại thông tin cá nhân, sử dụng thông tin cá nhân, v.v .;
<br>
2. Chúng tôi đã trải qua những thay đổi lớn trong kiểm soát và các khía cạnh khác. Chẳng hạn như thay đổi trong bộ điều khiển thông tin do sáp nhập và mua lại và tổ chức lại;
<br>
3. Đối tượng chính của việc chia sẻ thông tin cá nhân, chuyển giao hoặc thay đổi công khai;
<br>
4. Quyền tham gia xử lý thông tin cá nhân và các phương pháp tập thể dục của nó đã trải qua những thay đổi lớn;
<br>
5. Chúng tôi chịu trách nhiệm cho bộ phận trách nhiệm, phương pháp liên hệ và kênh khiếu nại để xử lý bảo mật thông tin cá nhân;
<br>
6. Báo cáo đánh giá tác động bảo mật thông tin cá nhân cho thấy rủi ro cao.
</p>`,

	//用户协议
	userAgreementText: `<p> Mẹo quan trọng: </p>
<p> <br>
Chúng tôi ở đây để nhắc nhở bạn:
<br>
• 1 tài sản kỹ thuật số không thể được cấp bởi bất kỳ tổ chức tài chính hoặc công ty hoặc trang web nào;
<br>
• 2 Thị trường tài sản kỹ thuật số là thương hiệu mới, chưa được xác nhận và có thể không phát triển;
<br>
• 3
Tài sản kỹ thuật số chủ yếu được sử dụng bởi các nhà đầu cơ. Thị trường bán lẻ và thương mại tương đối nhỏ. Giao dịch tài sản kỹ thuật số có rủi ro cực kỳ cao. Biến động;
<br>
• 4
Nếu công ty tin rằng bạn vi phạm Thỏa thuận này dựa trên phán quyết đơn phương hoặc hành vi được cung cấp bởi dịch vụ do trang web này cung cấp theo thẩm quyền của bạn hoặc dịch vụ được cung cấp bởi trang web của bạn là bất hợp pháp, công ty có quyền đình chỉ hoặc chấm dứt Tài khoản bất cứ lúc nào hoặc chấm dứt tài khoản của bạn bất cứ lúc nào., hoặc đình chỉ hoặc chấm dứt các dịch vụ hoặc giao dịch tài sản kỹ thuật số được cung cấp bởi trang web của bạn.
Giao dịch tài sản kỹ thuật số cực kỳ rủi ro và không phù hợp với hầu hết mọi người. Bạn hiểu và hiểu rằng giao dịch này có thể gây ra một số tổn thất hoặc tất cả các tổn thất, vì vậy bạn nên xác định số lượng giao dịch với mức độ thua lỗ có thể chịu được. Bạn hiểu và hiểu rằng tài sản kỹ thuật số sẽ tạo ra rủi ro phái sinh, vì vậy nếu bạn có bất kỳ câu hỏi nào, nên tìm kiếm sự hỗ trợ của các chuyên gia tư vấn chuyên nghiệp trước tiên. Ngoài ra, ngoài những rủi ro được đề cập ở trên, sẽ không có rủi ro dự đoán. Bạn nên xem xét cẩn thận và sử dụng một khả năng rõ ràng để đánh giá tình trạng tài chính của mình và những rủi ro trên để đưa ra bất kỳ quyết định nào về việc mua và bán tài sản kỹ thuật số, và chịu tất cả các khoản lỗ do nó gây ra. Chúng tôi không chịu bất kỳ trách nhiệm nào cho việc này.
</p>
<p> <br>
Nói chuyện với bạn:
<br> <br>
</p>
<p>
• 1
Bất kỳ ý kiến, tin nhắn, thảo luận, phân tích, giá cả, đề xuất và thông tin khác trên trang web này là đánh giá thị trường chung và không cấu thành các đề xuất đầu tư. Chúng tôi không chịu bất kỳ tổn thất nào dựa vào thông tin trực tiếp hoặc gián tiếp, bao gồm nhưng không giới hạn ở bất kỳ khoản lỗ lãi nào.
<br>
• 2
Các thuộc tính của trang web này sẽ không được thay đổi bất cứ lúc nào. Chúng tôi đã thực hiện các biện pháp hợp lý để đảm bảo tính chính xác của thông tin trang web, nhưng nó không thể đảm bảo tính chính xác của nó. trực tiếp hoặc gián tiếp phát sinh.
<br>
• 3
Ngoài ra còn có những rủi ro trong việc sử dụng các hệ thống giao dịch Internet, bao gồm nhưng không giới hạn ở phần mềm, sự thất bại của các liên kết phần cứng và Internet. Bởi vì chúng tôi không thể kiểm soát độ tin cậy và tính khả dụng của Internet, chúng tôi sẽ không chịu bất kỳ trách nhiệm nào về sự biến dạng, chậm trễ và liên kết thất bại.
<br>
• 4
Việc sử dụng trang web này cho tất cả các hoạt động giao dịch vô đạo đức như thị trường thao túng độc hại và giao dịch không phù hợp. Nếu tìm thấy sự cố như vậy, trang web này sẽ đưa ra cảnh báo, hạn chế giao dịch và tùy biến tất cả giá thao tác độc hại và hệ thống giao dịch bị ảnh hưởng độc hại. Các biện pháp bảo vệ phòng ngừa như đình chỉ tài khoản, chúng tôi không chịu tất cả các trách nhiệm được tạo ra và giữ quyền giữ trách nhiệm với những người có liên quan.
</p> <br>
<p> I. Nguyên tắc chung </p> <br>
<p>
• 1.1
"Thỏa thuận người dùng" (sau đây gọi là "Thỏa thuận này" hoặc "các điều khoản và điều kiện này"), theo văn bản, "Điều khoản quyền riêng tư", "Hiểu chính sách rửa chén của khách hàng và chống rửa tiền" và mỗi trong số chúng có thể là Được phát hành bởi trang web này hoặc có thể được phát hành trong các quy tắc, tuyên bố, giải thích trong tương lai, vv Thành phần.
<br>
• 1.2
Trước khi bạn sử dụng các dịch vụ được cung cấp bởi trang web này, bạn nên đọc cẩn thận thỏa thuận này. Nếu bạn không hiểu hoặc cần thiết khác, vui lòng tham khảo một luật sư chuyên nghiệp. Nếu bạn không đồng ý với Thỏa thuận này và/hoặc sửa đổi nó bất cứ lúc nào, vui lòng ngừng sử dụng các dịch vụ được cung cấp bởi trang web này hoặc không còn đăng nhập vào trang web này. Khi bạn đăng nhập vào trang web này, hãy sử dụng bất kỳ dịch vụ nào hoặc bất kỳ hành vi tương tự nào khác trên trang web này, điều đó có nghĩa là bạn đã hiểu và hoàn toàn đồng ý với các thuộc tính của Thỏa thuận này, bao gồm bất kỳ sửa đổi nào của Thỏa thuận này bất cứ lúc nào.
<br>
• 1.3
Bạn có thể điền thông tin liên quan theo các yêu cầu của trang web này và đăng ký thành công sau các thủ tục liên quan khác. Biểu mẫu đạt được thỏa thuận với công ty; hoặc nếu bạn nhấp vào hành vi của các nút được dán nhãn "đồng ý" hoặc ý nghĩa tương tự trong Quá trình sử dụng trang web này hoặc sử dụng thực tế các dịch vụ được cung cấp bởi trang web này trong đó các trang web khác cho phép 2. Đồng ý với các ràng buộc của tất cả các điều khoản theo Thỏa thuận này, chữ ký bằng văn bản mà không có chữ viết tay của bạn không ảnh hưởng đến sức mạnh ràng buộc pháp lý của bạn về thỏa thuận này.
<br>
• 1.4 Sau khi trở thành thành viên của trang web này, bạn sẽ nhận được tài khoản thành viên và mật khẩu tương ứng. Bạn sẽ chịu trách nhiệm về tài khoản thành viên và mật khẩu; bạn nên chịu trách nhiệm pháp lý cho tất cả các hoạt động và sự kiện bạn sẽ thực hiện với tài khoản của mình.
<br>
• 1.5 chỉ trở thành thành viên của trang web này có thể sử dụng nền tảng giao dịch tài sản kỹ thuật số được cung cấp bởi trang web này cho các giao dịch và tận hưởng các dịch vụ được cung cấp bởi các trang web khác.
<br>
• 1.6 Thông qua đăng ký và sử dụng bất kỳ dịch vụ và chức năng nào được cung cấp bởi trang web này, bạn sẽ được coi là đọc, hiểu và:
<br>
• 1.6.1 Chấp nhận các ràng buộc của tất cả các điều khoản và điều kiện của Thỏa thuận này.
<br>
• 1.6.2
Bạn xác nhận rằng bạn 16 tuổi hoặc theo các quy định pháp lý hiện hành khác nhau với độ tuổi pháp lý có thể được ký kết và hành vi của bạn về đăng ký, bán hàng hoặc mua hàng và thông tin xuất bản trên trang web này nên phù hợp với có luật pháp có liên quan và các quy định của các quốc gia hoặc khu vực có chủ quyền có thẩm quyền và có đủ khả năng để chấp nhận các Điều khoản này và thiết lập các giao dịch để sử dụng trang web này cho các giao dịch tài sản kỹ thuật số.
<br>
• 1.6.3 Bạn đảm bảo rằng các tài sản kỹ thuật số của bạn liên quan đến giao dịch có được và được hưởng một cách hợp pháp.
<br>
• 1.6.4 Bạn đồng ý đảm nhận tất cả các trách nhiệm và bất kỳ thu nhập hoặc tổn thất nào cho các giao dịch của riêng bạn hoặc các hành vi không gây ra.
<br>
• 1.6.5 Bạn xác nhận rằng thông tin được cung cấp khi đăng ký là đúng và chính xác.
<br>
• 1.6.6 Bạn đồng ý tuân thủ bất kỳ quy định pháp lý nào có liên quan. Theo như các mục đích thuế, bao gồm báo cáo bất kỳ lợi nhuận giao dịch nào.
<br>
• 1.6.7 Bạn đồng ý rằng bất cứ lúc nào, bạn không được tham gia hoặc tham gia vào hành vi hoặc hoạt động gây hại cho lợi ích của trang web hoặc công ty này, cho dù nó có liên quan đến các dịch vụ được cung cấp bởi trang web này.
<br>
• 1.6.8 Thỏa thuận này chỉ bị hạn chế bởi các quyền và nghĩa vụ mà bạn liên hệ với chúng tôi và không liên quan đến các mối quan hệ pháp lý và tranh chấp pháp lý do giao dịch tài sản kỹ thuật số giữa người dùng của trang web này và các trang web khác và bạn.
</p> <br>
<p> 2. Sửa đổi giao thức </p> <br>
<p>
Thỉnh thoảng chúng tôi giữ lại thông báo về Thỏa thuận này và được công bố bởi trang web và không còn thông báo cho quyền của bạn nữa. Thỏa thuận thay đổi sẽ đánh dấu thời gian thay đổi trên trang chủ của Thỏa thuận này. Sau khi được công bố trên trang web, nó sẽ tự động thực hiện ảnh hưởng ngay lập tức. Bạn nên duyệt và chú ý đến thời gian cập nhật và cập nhật nội dung của Thỏa thuận này theo thời gian. Nếu bạn không đồng ý với các thay đổi có liên quan, bạn nên ngừng sử dụng dịch vụ trang web này; bạn tiếp tục sử dụng dịch vụ trang web này, điều đó có nghĩa là điều đó có nghĩa là điều đó Bạn chấp nhận và đồng ý với các hạn chế của Thỏa thuận sửa đổi. Bản chất
</p> <br>
<p> ba, đăng ký </p> <br>
<p>
• 3.1 Trình độ đã đăng ký
<br>
Bạn xác nhận và hứa: Khi bạn hoàn thành quy trình đăng ký hoặc cho phép các dịch vụ được cung cấp bởi trang web này theo cách bạn cho phép trang web này, bạn nên là một quy định pháp lý hiện hành để ký Thỏa thuận này và sử dụng các khả năng bạn nên có với dịch vụ trang web này. Người tự nhiên, người pháp lý hoặc các tổ chức khác. Khi bạn nhấp để đồng ý với nút Đăng ký, điều đó có nghĩa là quyền của bạn hoặc quyền của bạn đã đồng ý với thuộc tính của Thỏa thuận và đã đăng ký và sử dụng trang web này để phục vụ. Nếu bạn không có trình độ chủ đề đã nói ở trên, bạn và quyền của bạn đối với đại lý sẽ chịu tất cả các hậu quả do nó gây ra và công ty có quyền hủy bỏ hoặc tự do đóng băng tài khoản của bạn và giữ bạn và quyền của bạn đối với đại lý.
<br>
• 3.2 Mục đích đăng ký
<br>
Bạn xác nhận và hứa: Bạn đăng ký trang web này không vi phạm luật pháp và quy định hoặc phá hủy lệnh giao dịch tài sản kỹ thuật số trên trang web.
<br>
• 3.3 Quy trình đăng ký
<br>
• 3.3.1
Bạn đồng ý cung cấp thông tin như email hiệu quả và số điện thoại di động theo yêu cầu của trang đăng ký người dùng của trang web này. Bạn có thể sử dụng số điện thoại di động của mình làm phương thức đăng nhập để nhập trang web này. Nếu cần thiết, theo các quy định của các luật và quy định liên quan của các khu vực khác nhau, bạn phải cung cấp tên thật, tài liệu danh tính và các luật, quy định và quyền riêng tư khác của mình và thông tin liên quan được quy định trong các điều khoản chống rửa chống rửa. Tất cả các dữ liệu khóa ban đầu sẽ được tham chiếu dưới dạng thông tin đã đăng ký. Bạn chịu trách nhiệm về tính xác thực, tính toàn vẹn và độ chính xác của các thông tin này, và chịu bất kỳ tổn thất trực tiếp hoặc gián tiếp và hậu quả bất lợi do nó gây ra.
<br>
• 3.3.2 Bạn được cung cấp một cách hợp pháp, đầy đủ và hiệu quả để cung cấp thông tin cần thiết để đăng ký và xác minh. Bạn có quyền lấy số tài khoản và mật khẩu của trang web này. Khi bạn nhận được số tài khoản và mật khẩu trang web này, bạn có thể đăng ký Và bạn có thể đăng nhập trên trang web này.
<br>
• 3.3.3 Bạn đồng ý nhận email và/hoặc tin nhắn ngắn liên quan đến quản lý và hoạt động của trang web này.
</p> <br>
<p> Bốn, Dịch vụ </P> <br>
<p>
• 4.1 Nội dung dịch vụ
<br>
• 4.1.1 Bạn có quyền duyệt các báo giá và thông tin giao dịch thực sự của các sản phẩm khác nhau của tài sản kỹ thuật số trên trang web này và có quyền gửi hướng dẫn giao dịch tài sản kỹ thuật số và hoàn thành giao dịch tài sản kỹ thuật số thông qua trang web này.
<br>
• 4.1.2 Bạn có quyền kiểm tra thông tin trong tài khoản thành viên của bạn trên trang web này và có quyền áp dụng các chức năng do trang web này cung cấp cho hoạt động.
<br>
• 4.1.3 Bạn có quyền tham gia vào các hoạt động trang web được tổ chức bởi trang web này theo Quy tắc hoạt động được phát hành trên trang web này.
<br>
• 4.1.4 Trang web này hứa hẹn các dịch vụ khác do bạn cung cấp.
<br>
• 4.2. Quy tắc dịch vụ Bạn hứa sẽ tuân thủ các quy tắc dịch vụ trang web sau:
<br>
• 4.2.1
Bạn nên tuân thủ luật pháp và quy định và sử dụng đúng và giữ số tài khoản, mật khẩu đăng nhập, mật khẩu tài trợ và mã xác minh điện thoại di động mà điện thoại di động nhận được. Bạn có trách nhiệm đối với mọi hoạt động và hậu quả của số tài khoản và mật khẩu đăng nhập, mật khẩu tài trợ và mã xác minh điện thoại di động. Khi bạn thấy rằng số tài khoản trang web này, mật khẩu đăng nhập hoặc mật khẩu tài trợ và mã xác minh được sử dụng bởi bên thứ ba mà bạn đã ủy quyền hoặc các tài khoản khác hoặc các vấn đề bảo mật tài khoản khác, trang web này sẽ được thông báo một cách hiệu quả. Trang web này có quyền hành động theo yêu cầu của bạn trong một thời gian hợp lý, nhưng trang web này không chịu bất kỳ trách nhiệm nào về hậu quả (bao gồm nhưng không giới hạn trong tổn thất của bạn) trước khi hành động. Bạn không được trừng phạt người khác bằng tài khoản trang web này bằng một món quà, mượn, thuê, chuyển nhượng hoặc các cách khác mà không có trang web này.
<br>
• 4.2.3 Bạn đồng ý với tất cả các hoạt động xảy ra trong trang web và mật khẩu của bạn (bao gồm nhưng không giới hạn trong công bố thông tin, thông tin phát hành, nhấp chuột trực tuyến để đồng ý hoặc gửi các thỏa thuận quy tắc khác nhau, thỏa thuận gia hạn trực tuyến hoặc dịch vụ mua hàng, v.v.) cam kết) đảm nhận trách nhiệm.
<br>
4.2.4
Khi bạn thực hiện các giao dịch tài sản kỹ thuật số trên trang web này, bạn không được can thiệp một cách độc hại vào tiến trình thông thường của các giao dịch tài sản kỹ thuật số và phá hủy thứ tự giao dịch; bạn không được can thiệp vào hoạt động bình thường của trang web này hoặc để can thiệp vào việc sử dụng người dùng khác đối với Dịch vụ của trang web này trong bất kỳ phương tiện kỹ thuật hoặc phương pháp khác. Sự kiện và các phương pháp khác nói xấu thiện chí của trang web này.
<br>
• 4.2.5 Nếu bạn có tranh chấp với người dùng khác do giao dịch trực tuyến, bạn không được yêu cầu thông tin liên quan trên trang web này thông qua các kênh tư pháp hoặc hành chính.
<br>
• 4.2.6 Trong quy trình dịch vụ được cung cấp bởi trang web này, chi phí của các khía cạnh khác phát sinh được bạn đánh giá và chịu một mình.
<br>
• 4.3. Quy tắc sản phẩm
<br>
• 4.3.1 Trình duyệt thông tin giao dịch
<br>
• Khi bạn duyệt thông tin giao dịch trên trang web này, bạn nên đọc kỹ tất cả các nội dung trong thông tin giao dịch, bao gồm nhưng không giới hạn ở giá, số lượng hoa hồng, phí xử lý, mua hoặc bán chỉ đường.
Bạn có thể nhấp vào nút để giao dịch sau khi chấp nhận tất cả các nội dung có trong thông tin giao dịch.
<br>
• 4.3.2 Xem chi tiết giao dịch
<br>
• Bạn có thể xem các bản ghi giao dịch tương ứng thông qua tài khoản của bạn.
</p> <br>
<p> 5. Các quyền và nghĩa vụ của trang web này </p> <br>
<p>
• 5.1
Nếu bạn không có trình độ đăng ký được quy định trong Thỏa thuận này, trang web này có quyền từ chối đăng ký. Đối với đã đăng ký, trang web này có quyền hủy tài khoản thành viên của bạn. Đồng thời, trang web này bảo lưu bất kỳ trường hợp nào khác để xác định có chấp nhận quyền đăng ký của bạn hay không.
<br>
• 5.2 Theo đánh giá của trang web này, khi trang web này thấy rằng bạn hoặc người dùng tài khoản liên kết của bạn không phù hợp với đầu tư cao, họ có quyền đình chỉ hoặc chấm dứt tài khoản của bạn và tất cả các tài khoản đóng.
<br>
• 5.3 Trang web này thấy rằng người dùng tài khoản không phải là nhà đăng ký ban đầu của tài khoản và họ có quyền đình chỉ hoặc chấm dứt việc sử dụng tài khoản.
<br>
• 5.4 Khi trang web này, trang web này nghi ngờ một cách hợp lý rằng các lỗi thông tin bạn cung cấp, khi các lỗi thông tin không chính xác, không hợp lệ hoặc không đầy đủ, thông tin bạn cung cấp, bạn có quyền thông báo cho bạn để sửa, cập nhật thông tin hoặc dừng lại và Chấm dứt dịch vụ trang web này.
<br>
• 5.5 Trang web này có quyền sửa thông tin khi thấy rằng mọi thông tin được hiển thị trên trang web này rõ ràng là không chính xác.
<br>
• 5.6
Trang web này có quyền sửa đổi, đình chỉ hoặc chấm dứt dịch vụ của trang web này bất cứ lúc nào. Quyền thực hiện hoặc đình chỉ dịch vụ trên trang web này không cần thông báo trước cho bạn. Ngày thông báo chấm dứt có hiệu lực.
<br>
• 5.7 Trang web này sẽ áp dụng các biện pháp quản lý và phương tiện kỹ thuật cần thiết để đảm bảo hoạt động bình thường của trang web này và cung cấp môi trường giao dịch và dịch vụ giao dịch cần thiết và đáng tin cậy để duy trì thứ tự giao dịch tài sản kỹ thuật số.
<br>
• 5.8 Nếu bạn chưa sử dụng tài khoản thành viên và mật khẩu của trang web này trong một năm, bạn có quyền hủy tài khoản trang web của mình. Sau khi hủy tài khoản, trang web này có quyền mở tên thành viên tương ứng cho người dùng khác.
<br>
• 5.9 Trang web để đảm bảo an toàn cho tài sản kỹ thuật số của bạn bằng cách tăng cường đầu tư công nghệ và cải thiện các biện pháp phòng ngừa bảo mật và thông báo trước cho bạn khi tài khoản của bạn xuất hiện rủi ro bảo mật có thể thấy trước.
<br>
• Trang web 5.10 có quyền xóa thông tin thuộc tính không tuân thủ luật pháp và quy định hoặc được chỉ định trên trang web này bất cứ lúc nào. Trang web này không cần thông báo trước cho bạn.
<br>
• 5.11
Trang web này có quyền yêu cầu bạn cung cấp thêm thông tin hoặc thông tin theo các yêu cầu của luật pháp và quy định, quy tắc, đơn đặt hàng và các quy định khác trong quốc gia hoặc khu vực của bạn, và thực hiện các biện pháp hợp lý để đáp ứng các yêu cầu của các quy tắc địa phương . Nó có nghĩa vụ hợp tác; Trang web này có quyền đình chỉ hoặc ngăn chặn hoặc ngăn chặn bạn theo các yêu cầu của luật pháp, quy định, quy tắc và đơn đặt hàng trong tiểu bang hoặc khu vực có chủ quyền của bạn.
</p> <br>
<p> 6. Hạn chế và miễn trừ trách nhiệm </p> <br>
<p>
• 6.1 Bạn hiểu và đồng ý, trong mọi trường hợp, chúng tôi sẽ không chịu trách nhiệm về các vấn đề sau:
<br>
• 6.1.1 Mất thu nhập;
<br>
• 6.1.2 Lợi nhuận giao dịch hoặc mất hợp đồng;
<br>
• 6.1.3 tổn thất do gián đoạn kinh doanh;
<br>
• 6.1.4 Mất tiền có thể được lưu;
<br>
• tổn thất gây ra bởi các vấn đề thông tin;
<br>
• 6.1.6 cơ hội, tổn thất thiện chí hoặc danh tiếng;
<br>
• Thiệt hại hoặc mất dữ liệu 6.1.7 dữ liệu;
<br>
• 6.1.8 Chi phí mua các sản phẩm hoặc dịch vụ thay thế;
<br>
• 6.1.9
Bất kỳ tổn thất hoặc thiệt hại gián tiếp, đặc biệt hoặc đính kèm hoặc thiệt hại do vi phạm (bao gồm cả sơ suất), vi phạm hợp đồng hoặc bất kỳ lý do nào khác, cho dù tổn thất hoặc thiệt hại này có thể thấy trước một cách hợp lý Kiểu khả năng mất mát hoặc thiệt hại.
<br>
• Điều 6.1.1 đến 8.1.9 độc lập với nhau.
<br>
• 6.2 Bạn biết và đồng ý, chúng tôi không chịu trách nhiệm cho bất kỳ khoản bồi thường thiệt hại nào do bất kỳ tình huống nào sau đây:
<br>
• 6.2.1 Có thể có các tình huống bất hợp pháp hoặc mặc định lớn cho các giao dịch cụ thể của bạn.
<br>
• 6.2.2 Hành vi của bạn trên trang web này bị nghi ngờ là bất hợp pháp hoặc vô đạo đức.
<br>
• 6.2.3 Mua hoặc có được bất kỳ dữ liệu, thông tin hoặc giao dịch hoặc hành vi thay thế nào được tạo thông qua dịch vụ trang web này.
<br>
• 6.2.4 Sự hiểu lầm của bạn về dịch vụ trang web này.
<br>
• 6.2.5 Bất kỳ tổn thất nào khác liên quan đến các dịch vụ được cung cấp bởi trang web này do lý do của chúng tôi.
<br>
• 6.3
Chúng tôi lỗi, máy tính, giao tiếp hoặc các lỗi hệ thống khác, lỗi, lỗi sức mạnh, lý do thời tiết, tai nạn, tranh chấp lao động, bạo loạn, cuộc nổi dậy, bạo loạn, lực lượng sản xuất, lực lượng sản xuất, lực lượng sản xuất, lực lượng sản xuất, lực lượng sản xuất, lực lượng sản xuất , Lực lượng sản xuất, bạo loạn, lũ lụt bạo loạn, bão, vụ nổ, chiến tranh, ngân hàng hoặc các đối tác khác, sự sụp đổ của thị trường tài sản kỹ thuật số, hành vi của chính phủ,
Các lệnh của các cơ quan tư pháp hoặc hành chính, các dịch vụ không sẵn sàng hoặc bị trì hoãn khác do các biện pháp kiểm soát khác hoặc chúng tôi không có khả năng kiểm soát hoặc lý do cho các bên thứ ba và gây ra tổn thất của bạn, chúng tôi sẽ không chịu bất kỳ trách nhiệm nào.
<br>
• 6.4
Chúng tôi không thể đảm bảo rằng tất cả thông tin, chương trình, văn bản, v.v. có trong trang web này hoàn toàn an toàn và không bị can thiệp và phá hủy bởi bất kỳ quy trình độc hại nào như virus và Trojans. Do đó, thông tin, dữ liệu, v.v. rủi ro và tổn thất có thể xảy ra.
<br>
• 6.5
Chúng tôi không đảm bảo và cam kết với bất kỳ thông tin, sản phẩm và doanh nghiệp nào trên bất kỳ trang web của bên thứ ba nào trên trang web này và bất kỳ hình thức nào khác của các thuộc tính không thuộc chủ thể của chúng tôi. Sản phẩm và các trách nhiệm khác đều chịu trách nhiệm cho quyết định cá nhân của bạn.
<br>
• 6.6
Chúng tôi không đưa ra bất kỳ đảm bảo rõ ràng hoặc ngụ ý nào cho việc bạn sử dụng dịch vụ trang web này, bao gồm nhưng không giới hạn ở khả năng áp dụng dịch vụ được cung cấp bởi trang web này, không có lỗi hoặc thiếu sót, tính bền vững, độ chính xác, độ tin cậy và áp dụng cho một mục đích cụ thể. Đồng thời, chúng tôi không đưa ra bất kỳ cam kết và đảm bảo nào về hiệu quả, độ chính xác, độ chính xác, độ chính xác, độ tin cậy, chất lượng, tính ổn định, tính toàn vẹn và tính kịp thời của các dịch vụ được cung cấp bởi các dịch vụ được cung cấp bởi trang web này. Việc đăng nhập hoặc sử dụng dịch vụ được cung cấp bởi trang web này là quyết định cá nhân của bạn và rủi ro và tổn thất có thể xảy ra. Chúng tôi không đưa ra bất kỳ đảm bảo rõ ràng hoặc ngụ ý nào cho thị trường, giá trị và giá của tài sản kỹ thuật số. Bạn hiểu và hiểu rằng thị trường tài sản kỹ thuật số không ổn định, và giá cả và giá trị sẽ dao động hoặc sụp đổ bất cứ lúc nào. Tự do cá nhân của bạn về tự do cá nhân của bạn. Lựa chọn và quyết định và chịu rủi ro và tổn thất có thể xảy ra.
<br>
• 6.7
Các đảm bảo và cam kết của chúng tôi được quy định trong Thỏa thuận này là bảo đảm và tuyên bố duy nhất của các dịch vụ được cung cấp bởi Thỏa thuận này và các dịch vụ được cung cấp bởi Thỏa thuận này, và thay thế bảo lãnh và cam kết được tạo ra bởi bất kỳ cách và phương pháp nào khác. Điều này ngụ ý. Tất cả các đảm bảo và tuyên bố này chỉ đại diện cho các cam kết và bảo đảm của chúng tôi, và không đảm bảo rằng bất kỳ bên thứ ba nào tuân thủ bảo đảm và cam kết trong Thỏa thuận này.
<br>
• 6.8 Chúng tôi không từ bỏ bất kỳ quyền nào mà chúng tôi không tham gia vào phạm vi tối đa của luật trong Thỏa thuận này trong phạm vi tối đa của pháp luật.
<br>
• 6.9 Sau khi đăng ký, bạn có thể nhận ra bất kỳ hoạt động nào chúng tôi đã thực hiện theo các quy tắc được quy định trong Thỏa thuận này và bất kỳ rủi ro nào do bạn tạo ra sẽ do bạn chịu.
</p> <br>
<p> Bảy, chấm dứt Thỏa thuận </p> <br>
<p>
• 7.1 Trang web này có quyền chấm dứt tất cả các dịch vụ trang web này theo thỏa thuận của Thỏa thuận này. Thỏa thuận này bị chấm dứt vào ngày chấm dứt tất cả các dịch vụ của trang web này.
<br>
• 7.2 Sau khi thỏa thuận này bị chấm dứt, bạn không có quyền yêu cầu trang web này tiếp tục cung cấp bất kỳ dịch vụ nào hoặc thực hiện bất kỳ nghĩa vụ nào khác cho nó, bao gồm nhưng không giới hạn trong việc yêu cầu trang web này cho bạn hoặc tiết lộ bất kỳ thông tin nào trong tài khoản trang web ban đầu của nó.
Đăng lại cho bạn hoặc các bên thứ ba vào bất kỳ thông tin nào bạn chưa bao giờ đọc hoặc gửi.
<br>
• 7.3 Việc chấm dứt Thỏa thuận này không ảnh hưởng đến yêu cầu của Bên mặc định để chịu các trách nhiệm khác.
</p> <br>
<p> 8. Sở hữu trí tuệ </p> <br>
<p>
• 8.1 Tất cả các kết quả trí tuệ có trong trang web này bao gồm, nhưng không giới hạn ở logo trang web, cơ sở dữ liệu, thiết kế trang web, văn bản và biểu đồ, phần mềm, hình ảnh, video, âm nhạc, âm thanh và kết hợp đã nói ở trên, biên dịch phần mềm, mã nguồn liên quan và phần mềm
(Bao gồm các ứng dụng và kịch bản nhỏ), quyền sở hữu trí tuệ được sở hữu bởi trang web này. Bạn không được sao chép, thay đổi, sao chép, gửi hoặc sử dụng bất kỳ tài liệu hoặc thuộc tính nào cho mục đích kinh doanh.
<br>
• 8.2 Tất cả các quyền (bao gồm nhưng không giới hạn ở Thiện chí và nhãn hiệu, Dấu hiệu) có trong tên của trang web này thuộc sở hữu của Công ty.
<br>
• 8.3 Bạn phải được sử dụng bất hợp pháp hoặc xử lý quyền sở hữu trí tuệ của trang web này hoặc người khác trong quá trình sử dụng dịch vụ trang web này. Bạn không được xuất bản hoặc ủy quyền cho các trang web (và phương tiện) khác để xuất bản hoặc ủy quyền cho các trang web khác dưới mọi hình thức.
<br>
• 8.4 Bạn đăng nhập vào trang web này hoặc sử dụng bất kỳ dịch vụ nào do trang web này cung cấp khi chúng tôi chuyển bất kỳ tài sản trí tuệ nào cho bạn.
</p> <br>
<p> Chín, tính toán </p> <br>
<p> Tất cả các kết quả tính toán giao dịch đã được chúng tôi xác minh, nhưng chúng tôi không thể đảm bảo rằng các trang web sẽ không bị can thiệp hoặc không có lỗi. </p> <br>
<p> Ten, Phân khúc </P> <br>
<p> Nếu bất kỳ điều khoản nào trong Thỏa thuận này được xác định bởi bất kỳ tòa án tài phán nào là một điều khoản không thể thay thế, không hợp lệ hoặc bất hợp pháp, nó không ảnh hưởng đến hiệu quả của các điều khoản còn lại của Thỏa thuận này. </p> <br>
<p> Eleven, các mối quan hệ không phải là -proxy </p> <br>
<p> Bất kỳ điều khoản nào trong Thỏa thuận này không được xem xét, ngụ ý hoặc các cách khác để coi chúng tôi là đại lý, ủy thác hoặc đại diện khác của bạn. Thỏa thuận này có các quy định khác. </p> <br>
<p> Mười hai, kiêng </p> <br>
<p>
Chúng tôi hoặc một trong hai bạn để điều tra trách nhiệm mặc định hoặc các trách nhiệm khác được thỏa thuận trong Thỏa thuận này không thể được xác định hoặc giải thích là từ bỏ trách nhiệm pháp lý khác đối với vi phạm hợp đồng khác; từ bỏ.
</p> <br>
<p> Mười ba, Tiêu đề </P> <br>
<p> Tất cả các tiêu đề đều thuận tiện cho các giao thức và không được sử dụng để mở rộng hoặc giới hạn các thuộc tính hoặc phạm vi của các điều khoản của Thỏa thuận. </p>
<p> Những người khác tính phí cho người khác: tính phí USDT, ETH, BTC, nhiều giao dịch tiền tệ, một khi bị trừng phạt nghiêm ngặt! </p>
<p> </p> <br>
<p> Mười bốn, hiệu quả và giải thích của thỏa thuận </p> <br>
<p>
• 14.1 Thỏa thuận trên trang đăng ký của trang web này được phê duyệt để đăng ký và hoàn thành quy trình đăng ký và có hiệu lực khi lấy tài khoản và mật khẩu trang web này. Cả trang web này và bạn đều ràng buộc.
<br>
• 14.2 Quyền giải thích cuối cùng của Thỏa thuận này thuộc sở hữu của trang web này.
<br>
• 14.3
Nếu tài khoản ứng dụng cá nhân được sử dụng, nó sẽ cung cấp các tài liệu và tài khoản nhận và thanh toán hợp lệ được chỉ định trong các bộ phận GTM có liên quan và các bộ phận liên quan của GTM sẽ được phát hành sau khi các bộ phận liên quan của GTM sẽ mở một tài khoản đã đăng ký; Tài khoản chỉ để phát hành GTM liên quan đến GTM liên quan đến GTM liên quan đến người được Bộ phê duyệt được sử dụng bởi người nắm giữ tài khoản và nó không được phép thuê hoặc chuyển nhượng.
</p>`,
















	pc: {
		// pc页面
		home: pc.home.ZH,
	},
}
export default zh //暴露出去
