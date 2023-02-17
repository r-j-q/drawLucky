// import Common from "./data/common/index" //公共模块翻译文件引入
// import User from "./data/user/index" //用户模块翻译文件引入
// import ErrorPage from "./data/error/index"
// import Home from "./data/home/index"
// import Me from "./data/me/index"
// import other from "./data/other/index"
import pc from "./data/pc/index"
const zh = {
	//托管订单
	completed: `Tamamlandı`,
	cancelOrder: `siparişleri geri çekme`,
	purchaseAmount: `Purchase amount`,
	profit: `gelir`,
	day: `gün`,
	callDate: `Geri dönüş zamanı`,
	whether: `Emri iptal etmek mi?`,
	dividend: `Temettü zamanı`,
	dueDividend: `Bittikten sonra`,
	dailyDividend: `her gün`,
	escrowAmount: `Escrow amount`,
	dueReturn: `Tamamlandıktan sonra geri dön`,
	redemption: `limitsiz`,
	availableBalance: `Mevcut Bakiye`,
	totalIncome: `Toplam gelir tahmin edildi`,
	readAgree: `Okudum ve kabul ettim`,
	serviceAgreement: `Platform Mali Hizmet Sözleşmesi`,
	trustProtocol: `<div>
					<p>1. Platform, platform kullanıcılarına boşta dijital varlık değeri katılan hizmetler sağlamak için faiz -sayım hesap hizmetleri sunar. <br>
2. Faiz -Olumsal Hesabının Varlıkları Platform Türev Ürünleri ve sonraki diğer risk sermayesi projeleri için kullanılacaktır. <br>
3. Platform, faiz -tüketim hesapları kullanıcıları tarafından aktarılan varlıklar için risk yönetimi hizmetleri sunmaktadır. Platform, kullanıcı finansal hizmet varlıklarının güvenliğini ve güvencesini tam olarak sağlamak için platformun katı risk kontrol sistemine dayanmaktadır. <br>
4. Kullanıcı Sağlık Hesabı Hizmetini kullandığında, koşulsuz yetkilendirme platformu, platform kurallarına uygun olarak makul bir şekilde tahsis edilir ve dağıtılır. <br>
5. Faiz -Sıkıştırma Hesap Hizmetlerini kullanırken, kullanıcılar varlık kaynaklarının meşru uyumunu sağlamak için ilgili ulusal yasalara uymalıdır. <br>
6. Hizmet Hesabı Hizmetini kullanırken, kullanıcılar dijital varlık yatırımı risklerini tam olarak anlamalı, dikkatli bir şekilde işletilmeli ve ulaşabilmelidir. <br>
7. Kullanıcı, platformdaki tüm yatırım operasyonlarının gerçek yatırım niyetlerini temsil ettiğini ve yatırım kararlarının getirdiği potansiyel riskleri ve faydaları koşulsuz olarak kabul ettiğini kabul eder. <br>
8. Platform, Faiz Muhasebe Hesap Hizmetini askıya alma veya feshetme hakkını saklı tutar. Gerekirse, platform herhangi bir zamanda faiz muhasebe hesap hizmetini askıya alabilir ve feshedebilir. <br>
9. Ağ gecikmesi ve bilgisayar sistemi arızası nedeniyle, faiz hizmetlerinin uygulanması ertelenebilir, askıya alınabilir, askıya alınabilir veya sapabilir. Hesap hizmeti yürütme sisteminin uygulama sisteminin istikrarlı ve etkili çalışmasının vaat edilmemesini sağlamak için elimizden geleni yapacağız. Ancak, yukarıdaki faktörler nedeniyle, canlı hesap hizmetinin nihai yürütme sonuçları müşterinin beklentilerinden farklıdır. ve platform herhangi bir sorumluluk taşımayacaktır. <br>
10. Kullanıcılar canlı hesabın hizmetini kullandıklarında, "Mali Hizmet Sözleşmesi" hükümlerine uymaları gerekir.<br>
					</p>
				</div>`,

	//产品列表
	managedOrder: `Managed Order`,
	earningsToday: `Bugün beklenmiş kazançlar`,
	accumulatedIncome: `Tahmin edilen gelir`,
	singleLimit: `Tek sınır`,
	dailyRate: `Günlük faiz oranı`,
	cycle: `zaman`,

	//信托
	pledgeMining: `söz madencisi`,
	underway: `ilerliyor`,
	stabilize: `Stabilize income and make mining easier`,
	income: `beklenmiş gelir`,


	//common
	copySucceeded: `Kopyalama başarılı`,
	serverResponseFailed: `Sunucu cevap vermiyor`,
	noData: `Geçici veri yok`,
	contentdown: `Daha fazla göstermek için yukarı çekin`,
	contentrefresh: `Yükleniyor...`,
	contentnomore: `Artık veri yok`,


	// tabbar
	Home: `ana sayfa`,
	Trade: `ticaret`,
	Future: `Seçenekler`,
	Trust: `Güven`,
	Assets: `varlıklar`,

	// 登录
	login: `Login`,
	language: `dil`,
	mailbox: `posta kutusu`,
	placeholderName: `Posta kutusunu girin`,
	password: `şifre`,
	placeholderPassword: `Parolayı girin`,
	forgetPassword: `Parola unutun？`,
	noHave: `Hesap yok mu?`,
	registerNow: `Hemen Kayıt`,
	errorEmpty: `boş olamaz`,
	errorStandard: `Biçim Hatası`,
	errorLength: `(4-30bit)`,
	errorLength1: `(4-300bit)`,
	// 注册

	register: `Kayıt`,
	code: `doğrulama kodu`,
	placeholderCode: `Lütfen doğrulama kodunu girin`,
	sending: `Gönderiyor...`,
	send: `Gönderiyor`,
	okPassword: `Şifreyi Onayla`,
	invitationCode: `davet kodu`,
	placeholderinvitationCode: `Lütfen davet kodunu girin`,
	checkedAgree: `Anlaşıldı`,
	userAgreement: `Kullanıcı Anlaşması`,
	and: `Ve`,
	privacyPolicy: `Gizlilik Politikası`,
	pleaseCheck: `Anlaşma kontrol edilmedi`,
	atypism: `Tutarsız şifre`,

	// 忘记登录密码

	forgotLoginPassword: `Giriş Şifresini Unuttun`,
	newPassword: `Yeni parola`,
	confirm: `Confirm`,

	//忘记支付密码

	forgotPayPassword: `Ödeme parolanı unuttun`,
	//设置支付密码
	setpayPassword: `ödeme parolanı ayarlayın`,
	//主页
	helper: `Yardım`,
	rising: `Yükselme`,
	business: `çift`,
	newPrice: `Son fiyat`,
	upfloat: `24H değişiklik`,
	// 资产

	totalAssets: `Toplam varlıklar`,
	record: `Kayit`,
	nowAssets: `Varlıklar dönüştürülür`,
	buyCoins: `Satın`,
	sellCoins: `satmak`,
	transfer: `aktar`,
	searchCurrency: `aramak`,
	hideSmall: `gizli küçük para`,
	currencyAccount: `Spot Account`,
	futuresAccount: `Futures Account`,
	legalAccount: `Fiat Account`,
	trustAccount: `Financial Account`,
	//划转记录

	transferRecord: `Kayıtları aktar`,
	time: `Zaman`,
	rollout: `Transfer-out`,
	rollin: `Transfer- in`,
	// 币币记录

	screen: `sorgulama`,
	money: `miktar`,
	transferAddress: `Transfer Adresi`,
	createTime: `Zaman Oluştur`,
	confirmTime: `Zamanı onaylayın`,
	note: `notalar`,
	type: `type`,
	reset: `sıfırla`,
	recharge: `Şarj`,
	disbursement: `Geri çekilmek`,
	incomplete: `tamamlanmadı`,
	success: `başarılı`,
	fail: `başarısız`,


	//币币充币

	currency: `para birimi`,
	placeholderCurrency: `Para birimini seçin`,
	payeeName: `zincir adı`,
	rechargeAddress: `adres`,
	copyAddress: `adresi kopyala`,
	rechargeQuantity: `Ödeme miktarı`,
	chargingAddress: `Ödeme adresi`,
	placeholderchargingAddress: `Lütfen ödeme adresini girin`,
	prove: `Başarılı ödemenin fotoğrafları`,
	optional: `(İsteğe bağlı)`,
	placeholderHash: `Hash girin`,
	placeholderNote: `Lütfen notları girin`,
	errorMessageprove: `Ödeme fotoğraflarını yükle`,
	onlyNumbers: `Yalnızca Numaralar Girebilir`,
	//币币提币

	withdrawalAddress: `Para çekme adresi`,
	tipwallet: `İlgili bir cüzdan ayarlamadınız`,
	toAdd: `eklemek`,
	placeholderwithdrawalAddress: `Para birimi adresini seçin`,
	availablenum: `Mevcut Miktar`,
	placeholdernum: `Miktar girin`,
	unselected: `seçenek yok`,
	payPassword: `ödeme şifresi`,
	commission: `Servis ücreti`,
	placeholderpayPassword: `lütfen ödeme şifresini gir`,
	//币币划转

	capitalTransfer: `Aktar`,
	from: `from`,
	to: `to`,
	moneybag: `cüzdanlar aynı olamaz`,
	//法币添加收款方式


	subbranch: `Dal`,
	placeholdersubbranch: `şubeye girin`,
	bankcode: `Banka Kodlama`,
	placeholderbankcode: `Lütfen Banka Kodlama Bankasına girin`,
	placeholderbankName: `Banka adını girin`,
	placeholderbankAccount: `Kart numarasını girin`,

	//法币记录

	price: `Fiyat`,
	num: `Miktar`,
	bankName: `Banka Adı`,
	account: `Hesap`,
	buy: `Satın almak`,
	sell: `Satmak`,
	all: `Hepsi`,
	processing: `devam etmekte`,
	//法币买币

	onlineService: `çevrimiçi müşteri hizmetleri`,
	//法币卖币账户

	collectionAccount: `Collection account number`,
	addCollection: `Koleksiyon metodu ekle`,
	showModal1: `Sil ya da yok`,
	cancelText: `Cancel`,
	//法币卖币

	salesQuantity: `Miktar Satma`,
	univalence: `referans fiyatı`,
	closed: `Para satışı kapalı`,
	your: `Kolleksiyon hesabınız`,
	bankAccount: `Banka hesabı`,
	name: `isim`,
	// 账户详情

	total: `Toplam`,
	frozen: `dondurulmuş `,
	//home左侧导航窗

	homloginAndRegister: `Giriş/Kayıt`,
	rechargeMoney: `Depozito`,
	withdrawCoins: `Para çekme`,
	customer: `Hizmet`,
	identityVerification: `KYC Doğrulaması`,
	withdrawalAddress: `Para çekme adresi`,
	paymentMethodInFiatCurrency: `Fiat Para Birimi ödeme Yöntemi`,
	help: `Yardım Merkezi`,
	pricing: `Fiyatlandırma Yöntemi`,
	setUp: `Ayarlar`,
	USD: `Dolar`,
	//个人信息

	personal: `personal information`,
	headPortrait: `Baş portret`,
	nickname: `takma ad`,
	bindMailbox: `posta kutusunu bağlama `,
	//邮箱设置

	mailboxSettings: `Posta kutusu ayarları`,
	oldEmail: `Eski E- posta hesabı`,
	placeholderoldEmail: `Lütfen eski e-posta hesabınızı girin`,
	newEmail: `Yeni e-posta hesabı`,
	placeholdernewEmail: `Yeni e-posta hesabı`,
	//身份认证

	certification: `gerçek isim doğrulama`,
	noCcertification: `Gerçek isim kimliğine git`,
	quota: `Para çekme sınırı`,
	count: `Transaksyon sayısı`,
	everyday: `Her gün`,
	cumulative: `Kümülatif miktar`,
	unauthorized: `sertifikalı değil`,
	audit: `İncelenecek`,
	attestation: `Genel sertifika`,
	hand: `Handheld authentication`,
	auditFailed: `Audit failed`,

	//实名认证

	country: `ülke`,
	placeholdercountry: `Lütfen bir ülke seçin`,
	placeholdername: `Lütfen bir isim girin`,
	documentType: `ID türü`,
	placeholderdocumentType: `Lütfen Sertifika Türünü Seçin`,
	identificationNumber: `Sertifika numarası`,
	placeholderidentificationNumber: `Lütfen kimlik numarasını girin`,
	next: `Sonraki`,
	IDcard: `kimlik kartı`,
	passport: `Pasaportu`,

	//实名认证照片

	photo1: `Lütfen kimlik kartınızın ön fotoğrafını yükleyin`,
	photo2: `Sertifikatın arkasını yükle`,
	photo3: `Upload hand-held ID`,
	Uploading: `yükle ...`,
	//提币地址

	addWalletAddress: `Cüzdanın adresini ekle`,
	//添加钱包地址

	address: `adres`,
	placeholderAddress: `Lütfen adresi girin`,
	//帮助中心

	welcome: `Yardım Merkezine hoş geldiniz`,
	commonProblem: `Sık Sorulan Sorular`,
	tutorial: `Depozito Eğitimi`,
	description: `Gelecek nedir`,
	accountProblem: `Hesap Problemi'`,
	accountSettings: `Nasıl Kayıt`,
	certified: `Kimlik doğrulama`,
	totutorial: `Ya depoziti almazsam?`,
	todescription: `Gelecek nedir？`,
	toaccountProblem: `Parola değiştirme/reset`,
	toaccountSettings: `Bir Hesap Nasıl Kaydolur？`,
	tocertified: `KYC doğrulaması nasıl`,
	tutorialText: `<div><p>Merhaba! Blockchain Varlık Aktarımı üç adıma ayrılır: Teklif bloğu onaylama girişi.<br><br>1. adım: başarılı bir aktarım, para alındığı platformun ya da cüzdanın aktarılması işlemini gerçekleştirdiğini gösterir<br><br></p><p>2. adım: Doğru bloğu onaylayın. Blok zinciri karıştırılması, gecikme, etc. bütün onaylamaların tamamlamasını gecikmelerini sağlayacak</p></div>`,
	descriptionText: `<div><p>Seçenek, kullanıcıların temel aktarların fiyat a çıklamasını sağlayan ve aşağıdaki risklerin açıklamasını sınırlayabilen finans aleti. BTC veya ETH'nin uzun (çağrı seçeneği) veya kısa (koyma seçeneği) satın alma fırsatını sağlıyor. <br><br>Seçenek sözleşmelerinin <br><br>• Seçenekler, belirlenen bir süre içinde aktarları satmak için sağ (gereksiz) fiyatı temsil ediyor. Bu size "kısa" görüntüsü sağlıyor, temel malın fiyatı düşürken, maliyeti daha yüksek fiyatla satmak hakkını (alıştırma fiyatı) sağlıyorsunuz. <br><br></p><p> • Bir arama seçeneği, sahibinin, belirlenen bir süre içinde malları satın almak için (gerekli değil) hakkını temsil ediyor. Bu size "uzun" görüntüsü sağlıyor, temel maliğin fiyatı arttığı gibi, maliyeti düşük fiyatla satın almak ve zarar kazanmak hakkını sağlıyorsunuz.</p></div>`,
	accountProblemText: `<div><p>
	1. Ana sayfanın sağ üst köşesindeki hesap konumunuzu tıklayın ve "Güvenlik Merkezi" ni tıklayın-"Parolayı değiştir". <br> <br>
2. Eski şifreyi girin ve yeni şifreyi onaylamak için yeni şifreyi girin. <br> <br>
3. "Parolayı sıfırla" yı tıklayın. <br> <br>
4. Kullanıcı fonu güvenliği için, parolayı sıfırladıktan veya geri çekilmek üzere değiştirdikten sonra 24 saat beklemek gerekir.<br><br>
	</p></div>`,
	accountSettingsText: `<div><p>Doğrulama kodunu almak ve hesabınızı kaydetmek için lütfen cep telefonu numaranızı veya posta kutunuzu kullanın. Doğrulama kodu alınmazsa, posta kutusu spamını kontrol etmek veya müşteri hizmetleriyle iletişime geçmek için lütfen tıklayın.</p></div>`,
	certifiedText: `<div><p>1. Ev sayfasının üst sağ köşesinde hesap yerinizi tıklayın ve "Kimlik doğrulaması" tıklayın<br><br>2. Sertifikate numarasını girin ve Kimlik Doğrulamasını tıklayın<br><br>3. onaylama için sabırlı bekle. Genelde, denetim 24 saat içinde tamamlanabilir.</p></div>`,

	//设置

	changeLoginPassword: `Giriş Şifresini Değiştir`,
	setWithdrawalPassword: `Ödeme parolanı ayarlayın`,
	noSetWithdrawalPassword: `Go to set the payment password`,
	preference: `Renk tercihleri`,
	about: `Bizim hakkımızda`,
	signOut: `oturumu Kapat`,
	//修改登录密码

	changeLoginPassword: `Giriş Şifresini Değiştir`,
	oldPassword: `Eski parola`,


	//修改支付密码

	changePayPassword: `Ödeme şifresini değiştirin`,
	//颜色偏好

	upRed: `Kırmızı yukarı/yeşil aşağı`,
	upGreen: `Kırmızı aşağı/yeşil yukarı`,
	//关于我们

	platformIntroduction: `Platform introduction`,
	privacyPolicy: `Gizlilik Politikası`,
	userAgreement: `Kullanıcı Anlaşması`,
	officialWebsite: `resmi web sitesi`,
	//平台简介

	platformIntroductionText: `Bu platform dünyanın önde gelen dijital varlık ticaret platformudur. Müşterilerin dijital varlıklarının güvenliğini sağlamak için sürekli olarak güvenlik özelliklerini iyileştirmeye çalışmaktadır. Modelimiz, müşterileri sürdürülebilir değere sahip müşterileri getirmek ve işlem hizmetleri sağlamaktır. Çekirdek yönetim ekibinin üyeleri dünyayla ünlü üniversitelerden mezun oldu ve Kanada Montreal Bank, Pricewater -Miyoro ve diğer çapraz işletme yöneticileri olarak görev yaptı. Finans endüstrisinde ve dijital varlık borsasında zengin işletme deneyimine sahipler. Kaynak anlaşması, gerçekliğin pratik pratiğini birleştirme ilkesine göre, orijinal blok zincirinin kapalı sistemini kırdık.
'Aynı zamanda, yapay zekayı blockchain teknolojisiyle birleştirin, gerçekten ticari olarak temin edilebilen bir dünya -blockchain işletim sistemi yaratmayı umuyoruz. Platform vaat ediyor: Kanada yasalarına kesinlikle uyacak ve finansal düzenleyici kurumların denetimini kabul edecek.`,

	//隐私政策
	privacyPolicyText: `
<p>
Bu platform. (Aşağıdaki "Şirket") İsviçre'nin ilgili yasalarına uygun olarak İsviçre'de kayıtlı bir şirkettir. Şirket, bu platform küresel uygulamasını işletmektedir (bundan sonra "bu platform" veya "platform" olarak anılacaktır. Dijital varlık işlemleri olarak anılacaktır. ve ilgili hizmetler (bundan böyle "bu hizmet" veya "hizmet" olarak anılacaktır). Kolaylığı ifade etmek için, şirket ve platform toplu olarak bu Sözleşmedeki "ABD" veya diğer ilk kişi adları olarak adlandırılır. Toplu olarak "her iki taraf" olarak adlandırılırız ve biz ya da siz "bir taraf olarak adlandırılırız " yalnız.
<br>
Kişisel bilgilerinizi size tam olarak anlıyor ve saygı duyuyoruz. Kişisel bilgi güvenliğinizi korumak için yasa ve düzenlemelere uygun olarak ilgili güvenlik koruma önlemlerini alacağız. Bu göz önüne alındığında, "Gizlilik Politikası" (bundan sonra "bu politika" olarak adlandırılır.
/Ben Gizlilik Politikası ") ve size hatırlatın:
<br>
Bu politika, sağladığımız tüm ürün ve hizmetler için uygundur. Sağladığınız ürün veya hizmetler için bir gizlilik politikası oluşturursak, ürün veya hizmet ayrı ayrı oluşturulan Gizlilik Politikası için geçerlidir; eğer ürün veya hizmetimiz ayrı ayrı bir gizlilik politikası oluşturmazsa, bu politika geçerlidir.
<br>
Özellikle açıklanması gereken şey, bu politikanın diğer üçüncü yönlerde sağladığınız hizmetler ve size açıklayacağınız gizlilik politikasını sağladığınız üçüncü yöne uygulanamadığıdır.
<br>
Çeşitli ürünlerimizi veya hizmetlerimizi kullanmadan önce, lütfen bu politikayı dikkatli bir şekilde okuyun ve anlayın, özellikle hatların iptal edilmesiyle tanımlanan hükümler. Okumaya odaklanmalı ve onaylama ve rızadan sonra kullanmaya başlamalısınız. Bu politikanın içeriği hakkında herhangi bir sorunuz, görüşünüz veya önerileriniz varsa, yetkilimiz tarafından sağlanan çeşitli iletişim bilgileri aracılığıyla bizimle iletişime geçebilirsiniz. Bu politikadaki herhangi bir hüküm ile hemfikir değilseniz, bu platformu ziyaret etmeyi hemen bırakmalısınız.
<br>
<strong> İlk bölüm tanımı </strong>
<br>
Kişisel Bilgiler: Tek başına kaydedilebilen veya diğer bilgilerle ayrı veya diğer bilgilerle kaydedilebilen çeşitli bilgileri ifade eder.
<br>
Kişisel Duyarlı Bilgiler: Kimlik belgeleri, kişisel biyometrik bilgiler, banka hesabı numarası, mülk bilgileri, ticaret bilgileri, işlem bilgileri, 14 yıllık çocuk bilgileri vb.
<br>
Kişisel Bilgilerin Silinmesi: Günlük iş işlevlerinde yer alan bir sistemde kişisel bilgilerin kaldırılmasını ifade eder, böylece alınmasını ve erişilebilir olmalarını önler.
<br>
Çocuk: 14 yaşın altındaki küçükleri ifade eder.
<br>
<strong> Bölüm II Gizlilik Politikası </strong>
<br>
Bu gizlilik politikası aşağıdakileri anlamanıza yardımcı olacaktır:
<br>
1. Bilgilerinizi nasıl toplar ve kullanırız
<br>
2. Çerezleri ve benzeri teknolojileri nasıl kullanıyoruz
<br>
3. Bilgilerinizi nasıl paylaşabilir, aktarabilir ve kamuya açıklayabiliriz
<br>
4. Bilgilerinizi nasıl koruruz
<br>
5. Bilgilerinizi nasıl yönetiyorsunuz
<br>
6. Küçüklerin bilgilerini nasıl ele alıyoruz
<br>
7. Bu Gizlilik Politikası Nasıl Güncellenir
<br>
<strong> 1. Bilgilerinizi nasıl toplar ve kullanırız </strong>
<br>
Ürünlerimizi ve/veya hizmetlerimizi kullandığınızda, ihtiyacımız olan/toplamamız ve kullanmamız gereken kişisel bilgiler aşağıdakileri içerir: aşağıdakileri aşağıdakiler:
<br>
1. Size ürünler ve/veya hizmetler sunmak için temel işlevler sunmak için topladığımız ve kullandığımız gerekli bilgileri yetkilendirmelisiniz. İlgili bilgileri sağlamayı reddediyorsanız, ürünlerimizi ve/veya hizmetlerimizi normal olarak kullanamazsınız;
<br>
2. Bize ürünler ve/veya hizmetler sağlamak için size ek işlevler sunmak için topladığımız ve kullandığımız bilgileri yetkilendirmeyi seçebilirsiniz. Bunu sağlamayı reddederseniz, ilgili ek işlevleri normal olarak kullanamazsınız veya elde etmeyi düşündüğümüz işlevsel etkileri elde edemezsiniz, ancak ürünlerimizi ve/veya hizmetlerimizi normal kullanan temel işlevlerinizi etkilemez.
<br>
Anlıyorsunuz ve kabul ediyorsunuz:
<br>
1. İhtiyaçlarınızı karşılamak için çeşitli ürün ve hizmetler yaratmaya kararlıyız. Size sağladığımız birçok tür ve hizmet olduğundan ve farklı kullanıcılar tarafından seçilen belirli ürün/hizmetin kapsamında farklılıklar vardır. Buna göre, temel/ek işlevlerin türleri ve kapsamı ile kişisel bilgiler ve toplama kapsamı Farklı olacaktır. Belirli ürün/hizmet işlevi geçerli olacaktır;
<br>
2. Size daha iyi bir ürün ve hizmet deneyimi sunmak için, teknolojimizi geliştirmek için sürekli çalışıyoruz ve zaman zaman yeni veya optimize edilmiş işlevler başlatabiliriz. Bilgi Kullanımı Amaç veya Yöntem. Bu bağlamda, size bu politikayı güncelleyerek, POP -UUN penceresini, sayfa istemlerini vb. Güncelleyerek, ilgili bilgilerin koleksiyon amacını, kapsamı ve kullanım yöntemini açıklayacağız ve size kendi seçim rızasını toplayın. ve kullan. Bu süreçte, herhangi bir sorunuz, görüşünüz veya önerileriniz varsa, bu platform tarafından sağlanan çeşitli iletişim bilgileri aracılığıyla bizimle iletişime geçebilirsiniz ve mümkün olan en kısa sürede cevap vereceğiz.
<br>
Bu politikanın aşağıdaki işlevlerini gerçekleştirmek için kişisel bilgilerinizi toplayacağız ve kullanacağız:
<br>
(1) bu platform tarafından sağlanan hizmetleri kaydetmenize ve sunmanıza yardımcı olur;
<br>
1. Kayıt Hizmeti
<br>
Bu platform hesabı aracılığıyla size temel üyelik hizmetleri sunuyoruz. Üye olarak kaydolmak ve üyelik hizmetlerimizi kullanmak için, kayıt için başvururken aşağıdaki bilgileri doldurmanız ve sağlamanız gerekir:
<br>
(1) Kimlik Bilgileri. Bu bilgiler, adınız, ikamet adresiniz, ülkeniz veya hükümet tarafından farklı sertifikalarla verilen diğer sertifikalar ve kimlik bilgilerinizi içeren ve dahil olan diğer sertifikalar dahil ancak bunlarla sınırlı olmamak üzere bir platform üyesi olarak kayıt yaptırmaya uygun olup olmadığınızı doğrulayabilir. . Kimliğinizi doğrulamamıza yardımcı olabilecek sayılar ve diğer bilgiler (bundan sonra "kimlik bilgileri" olarak anılacaktır.
İle. Bu kimlik bilgileri, bireysel kullanıcı veya kurumsal kullanıcı olup olmadığınıza göre farklıdır. Farklı yargı bölgelerinin yasalarına ve düzenlemelerine göre, farklı ülkelerden veya bölgelerden kullanıcılar tarafından toplanan farklı bilgilerimiz olabilir. Aşağıdaki bilgiler ve veriler öğretim örneği olarak kullanılır:
<br>
Bireysel kullanıcılar: milliyet, tam adı (ad ve yerel dil adı dahil), kimlik numarası, e -posta adresi, telefon numarası, sosyal güvenlik numarası ("SSN"), herhangi bir hükümet tarafından verilen pasaport numarası veya kimlik numarası, doğum tarihi, kimlik sertifika (pasaportlar, sürücü lisansları veya hükümet tarafından verilen hükümet sertifikası gibi).
<br>
Kurumsal Kullanıcı: Şirketin yasal adı (yerel dilin yasal adı dahil), kayıt bilgileri, işletme telefon numarası, yetkili temsilci ve yetkili kullanıcı kişisel bilgileri, ana iş yeri, tüm kişisel bilgileri yararlanıcı sahipleri), hissedar/fayda sahibinin kimlik destekli belgelerinin (hükümet tarafından verilen pasaportlar veya kimlik kartları) kimliği, şirket çerçevesi, ilgili belgelerin şirket kurulması, kurul kararları, fon kaynakları için finansman, risk ve uyum kontrol tanımları ve Platformun gerektirdiği diğer bilgiler veya belgeler.
<br>
(2) Hizmet bilgileri. Bu bilgiler sizinle iletişime geçmemize ve kişisel kimlik bilgileriniz, iletişim bilgileriniz, işlem bilgileriniz ve banka kartı bilgileriniz ve/veya diğer hesap bilgileriniz dahil ancak bunlarla sınırlı olmamak üzere farklı dijital varlık işlem hizmetleri modellerini sorunsuz bir şekilde sunmamıza yardımcı olur (aşağıdakiler aşağıdakilerdir "Hizmet Bilgileri" olarak adlandırılır
İle. Aynı zamanda, size verdiğimiz hizmetlerin sürekli olarak güncellendiğini ve geliştirildiğini lütfen anlayın. Ek bilgilerinizi toplamamız gereken hizmete dayanarak, yukarıda belirtilen açıklamada yer almayan diğer hizmetleri kullanmayı seçerseniz, sayfa istemleri, etkileşim süreçleri, anlaşma istemleri vb. İle bilgi toplama kapsamını açıklayacağız. amaç ve rızanızı elde edin.
<br>
Yalnızca Gözat Hizmetlerini kullanmanız gerekiyorsa, üyelerimiz olarak kaydolmanız ve yukarıdaki bilgileri vermeniz gerekmez.
<br>
2. Diğer Kayıt Hizmetleri
<br>
Gerçek -name Kimlik Doğrulaması: Kayıt ve giriş yaptığınızda, kimlik kimlik doğrulamanızda gerçek adlı kimlik doğrulamasını tamamlamak için "Kişisel Merkezi" girmeniz gerekir. Gerçek ad kimlik doğrulaması kullanımı.
<br>
Gelişmiş Sertifika: Bu platformdaki işlem tutarınız belirli bir sınırı aştığında, platform varlık güvenliğinizi korumak için gelişmiş sertifika yapmanızı gerektirecektir. Gerçek adlı kimlik doğrulama bilgilerine ek olarak, "Yüz Tanıma" Gelişmiş Sertifikasyon platformunu tanırsınız. Yüz tanıma, platformun ilgili video akışları veya platformun yüz görüntüleri koleksiyonunu içerecektir.
<br>
Hesap Bilgileri Ekran: Bu platform hesabınız zaten varsa, yukarıdaki kişisel bilgilerinizi hizmette görüntüleyebiliriz (gerçek -isim kimlik doğrulaması yalnızca sertifikanın geçip geçmediğini gösterir) ve ürün ve hizmette platform hesabı ile ilgili ne yürüttüğünüzü gösterebiliriz. Kişisel verilerinizi ve işlem siparişlerinizi bu platform hesabı aracılığıyla görüntüleme dahil. Platform hesap ayarları seçiminize saygı duyacağız.
<br>
(2) Güvenlik Yönetimi Hizmeti ve Hizmet Bilgileri İtme Hizmeti
<br>
Bu platform tarafından sağlanan hizmetleri kullandığınızda veya bu platforma eriştiğinizde, bu platformun, işlem güvenliğinizi ve hizmet güvenliğinizi ve istikrarlı çalışmanızı sağlamak için web tarayıcı bilgilerinizi otomatik olarak alması ve kaydetmesi gerekir. Modeller ve diğer ekipman tanımlama sembolleri gibi ekipman bilgileri , IP adresleri ve erişimi, alan, ağ ortamı, cihaz parmak izi bilgileri, hizmet günlüğü bilgileri, yazılım bilgileri, konum bilgileri vb.
<br>
Ayrı cihaz bilgilerinin belirli doğal kişi kimliğini tanımlayamayan bilgiler olduğunu lütfen unutmayın. Bu tür kişisel olmayan bilgileri, belirli bir doğal kişiyi tanımlamak veya kişisel bilgilerle kullanmak için diğer bilgilerle kullanırsak, kullanım kombinasyonu sırasında, bu tür kişisel olmayan bilgiler kişisel bilgiler olarak kabul edilecektir. Yetkinizi alın veya diğer yasa ve düzenlemeler hükümlerine ek olarak, bu tür bilgileri anonim ve tanımlayacağız.
<br>
Size kişiselleştirilmiş ihtiyaçlarınızı karşılayan daha uygun ve daha fazla bilgi gösterme ve itme hizmetleri sunmak için, cihaz bilgilerinize ve platformunuza veya müşterinizin göz atma bilgilerine dayanabilir, tercihlerinizi ve özellik etiketlerine göre etiketleyebiliriz. Çıktı Dolaylı portre portresi, bilgileri ve olası ticari reklamları göstermek için kullanılır. Bu tür bilgileri almayı kabul etmiyorsanız veya kişisel bilgileri toplamak için onayınızı geri çekmezseniz, bu politika tarafından sağlanan iletişim bilgilerine göre bizimle iletişime geçebilirsiniz.
<br>
Tarama deneyiminizi sağlamak için çalışıyoruz. Size gönderdiğimiz ticari reklamı kabul etmek istemiyorsanız, geri çekilmeyi veya SMS istemi tarafından sağladığımız diğer yolları yanıtlayabilir veya kapatabilirsiniz.
<br>
Ayrıca, yukarıdaki bilgilerinizi yukarıdaki işlevleri sürekli iyileştirmek ve optimize etmek için kullanacağız.
<br>
(3) Ticaret Kayıtları ve Sorgu Hizmetleri
<br>
Bu platformda bu platformda toplanan ve ticaret kayıtları dahil ancak bunlarla sınırlı olmamak üzere ilgili veriler. Sipariş işlem kaydınızı sorgulamanız gerekiyorsa, kişisel işlem bilgilerinizi "Sipariş Yönetimi" platformunda kontrol edebilirsiniz: ticaret partisinin takma adı, sipariş zamanı, sipariş numarası, işlem bilgileri, dijital varlık türleri ve miktarları.
<br>
(4) Müşteri hizmetleri ve anlaşmazlık işleme
<br>
Bizimle iletişime geçtiğinizde veya satıştan sonra satış başvurusunu teklif ettiğinizde, anlaşmazlık işleme, hesabınızı ve sistem güvenliğinizi sağlamak için, üyelik durumunuzu doğrulamak için gerekli kişisel bilgileri sağlamanız gerekir.
<br>
Sizi kolaylaştırmak için, sorun sorununu çözmenize veya ilgili sorunları mümkün olan en kısa zamanda kaydedmenize yardımcı olmak için, iletişim kayıtlarınızı ve ilgili içeriğinizi bizimle kaydedebiliriz (hesap bilgileri, sipariş bilgileri ve bilgi verdiğiniz diğer gerçekler veya diğer gerçekler dahil veya Ayrıldığınız iletişim bilgileri), belirli siparişler için danışır, şikayet eder veya önerilerde bulunursanız, hesap bilgilerinizi kullanırız ve sipariş bilgilerini sipariş edeceğiz.
<br>
Makul hizmet ihtiyaçlarını sağlamak ve hizmet kalitesini iyileştirmek için, müşteri hizmetleriyle iletişim kurduğunuzda verdiğiniz ilgili bilgiler ve anket anketi sırasında bize gönderilen anket yanıt bilgileri de dahil olmak üzere kullanabileceğimiz diğer bilgiler.
<br>
(5) Diğerleri
<br>
1. Verdiğiniz bilgiler diğer kullanıcıların kişisel bilgilerini içeriyorsa, bu kişisel bilgileri bu platforma sağlamadan önce yasal izin aldığınızdan emin olmanız gerekir. Çocukların kişisel bilgilerini dahil ederseniz, serbest bırakılmadan önce çocuğun koruyucusunun rızasını almanız gerekir ve Guardian, daha fazla doğru talep etmek veya silmek için bu politikanın 9. maddesinin 9. maddesinin yaklaşımı yoluyla bizimle iletişime geçme hakkına sahiptir. Çocukların kişisel bilgilerine dahil olan içerik.
<br>
2. Bilginin bu politikada belirtilmediği bilgileri veya başka amaçlar için belirli hedeflere dayalı olarak toplanan bilgileri kullanırsak veya kişisel bilgilerinizi üçüncü bir taraftan elde etme inisiyatifini alırsak, sizi önceden alacağız Kabul etmek.
<br>
Bilgilerinizi dolaylı olarak üçüncü taraftan alırsak, üçüncü taraftan, yazılı olarak toplamadan önce yazılı olarak kişisel bilgileri yazılı olarak toplamasını isteyeceğiz ve paylaşılan bilgi içeriğini bilgilendireceğiz ve doğrulanmanız gereken hassas bilgileri içerir. Bize sağlamadan önce açık onayınızla, üçüncü taraflara kişisel bilgi kaynağının yasallığına ve uyumuna bağlılık yapmalarını istemek. Üçüncü taraf davranışı ihlal ederse, diğer taraftan ilgili yasal sorumluluğu üstlenmesini isteyeceğiz; Aynı zamanda kişisel bilgiler (hassas bilgi raporlaması, hassas bilgi şifreleme depolama, erişim izinleri kontrolü vb.) Kişisel bilgilerimiz ve önlemlerimizden daha düşük olmayan kendi kişisel bilgilerimiz tarafından elde edilen kişisel bilgileri kullanmayacağız.
<br>
3. Yetkilendirme izni almak hariç
<br>
Tam olarak anlıyorsunuz ve kabul ediyorsunuz. Aşağıdaki koşullar altında, kişisel bilgilerinizi yetkilendirme izniniz olmadan toplar ve kullanırız ve düzeltme/değişiklik, silme, iptal, rızanın geri çekilmesi ve bilgi edinme talebine yanıt veremeyebiliriz.
<br>
(1) Ulusal Güvenlik ve Ulusal Savunma Güvenliği ile ilgilidir;
<br>
(2) kamu güvenliği, halk sağlığı ve büyük kamu çıkarları ile ilgili;
<br>
(3) Ceza soruşturması, kovuşturma, duruşma ve yargının yargı veya idari kolluk kuvvetleri ile ilgilidir.
<br>
(4) sizin veya diğer bireylerin yaşamı ve mülkiyeti gibi büyük meşru hak ve çıkarları korumaktan, rızamı almak zor;
<br>
(5) kendiniz halka açıkladığınız kişisel bilgiler;
<br/>
(6) Yasal haberler, hükümet bilgilerinin açıklanması ve diğer kanallar gibi yasal kamu bilgilerinden kişisel bilgileri toplayın.
<br>
(7) ilgili anlaşmaları veya diğer yazılı belgeleri imzalamak ve yapmak için neyin gerekli olduğunu;
<br>
(8) ürünlerin ve/veya bakımla sağlanan ürünlerin ve/veya hizmetlerin, ürünlerin ve /./ veya hizmet arızaları gibi gerekli ve istikrarlı bir şekilde çalışması;
<br>
(9) Hukuk haberleri için gereklidir;
<br>
(10) akademik araştırma kurumları, kamu çıkarlarına dayalı istatistik veya akademik araştırma yapmak ve sonuçlarda yer alan kişisel bilgileri tanımlamak için akademik araştırma veya açıklamaların sonuçlarını sağlamak;
<br>
(11) Kanun ve yönetmeliklerde öngörülen diğer koşullar.
<br>
Uygulanabilir yasalara göre, kişisel bilgileri almak için teknik önlemler ve diğer gerekli önlemler alırsak, veri alıcısının belirli kişileri yeniden tanımlayamayacağını ve iyileşemeyeceğini veya bilgi, istatistiksel analiz ve toplanmasını inceleyebiliriz. Tahmin, bu platformun içeriğini ve düzenini geliştirmek, iş kararları için ürün veya hizmet desteği sağlamak ve ürün ve hizmetlerimizi geliştirmek için (makine öğrenimi veya model algoritma eğitimi için anonim veriler kullanma dahil), o zaman bu tür verilerin işlenmesi Verilerin sizi bilgilendirmesi ve onayınızı almanız gerekmez.
<br>
4. Bu platformun ürününü veya hizmetini çalıştırmayı bırakırsak, kişisel bilgi faaliyetlerinizi zamanında toplamayı bırakacağız. Durdurma işlemi bildirimi teslimat veya duyuru şeklinde bilgilendirilecek ve sahip olduğumuz şeyle ilgiliyiz. İşletme ile ilgili kişisel bilgilerin silinmesi veya anonimdir.
<br>
<strong> 2. Çerezleri nasıl kullanırız </strong>
<br>
Tarayıcınız veya tarayıcınız ek hizmetiniz izin verirse, çerezlerin kabul derecesini değiştirebilir veya çerezlerimizi reddedebilirsiniz. Ayrıntılar için bkz.
About Cookies.org. Ancak bunu yaparsanız, bazı durumlarda, platformumuza güvenlik erişiminizi etkileyebilirsiniz ve platformumuzu ziyaret ettiğinizde kullanıcı ayarlarını değiştirmeniz gerekebilir. Anlıyorsunuz ve kabul ediyorsunuz:
<br>
1. Platformumuzu ziyaret ettiğinizde, performansımızı kaydetmek ve Çerezler aracılığıyla çevrimiçi reklamcılığın etkisini kontrol etmek için Google istatistiklerini kullanırız.
Çerez, tarayıcınıza gönderilen ve bilgisayar sabit disk sürücünüzde saklanan az miktarda veridir. Platformumuza girmek için yalnızca bilgisayarınızı kullandığınızda, bilgisayar sabit diskinize çerez gönderilebilir.
<br>
2. Çerezler genellikle platformumuzdaki çeşitli projelere göz atmak için ziyaretçilerin alışkanlıklarını ve tercihlerini kaydetmek için kullanılır. Çerezler tarafından toplanan veriler bilinmeyen kolektif istatistiklerdir ve kişisel bilgi yoktur.
<br>
3. Çerezler, sabit diskiniz, e -posta adresiniz ve bu platform veya servis sağlayıcı sisteminin tarayıcınızı ve yakalama ve bellek bilgilerinizi tanımasını sağlayabilecek kişisel verileriniz hakkında veri elde etmek için kullanılamaz. Çoğu tarayıcı çerezleri kabul etmek için önceden ayarlanmıştır. Tarayıcınızı çerezleri kabul etmeyecek şekilde ayarlamayı veya çerezler yüklenip yüklenmediyse size haber vermeyi seçebilirsiniz. Ancak,
Çerezleri yasaklamak için ayarladıysanız, platformumuzun bazı işlevlerini başlatamayabilir veya kullanamayabilirsiniz.
<br>
<strong> 3. Bilgilerinizi nasıl paylaşırız, aktarırız, herkese açık olarak ifşa ederiz </strong>
<br>
(1) Paylaşım
<br>
Aşağıdaki durumlar dışında, kişisel bilgilerinizi bu platform servis sağlayıcısı dışındaki şirketler, kuruluşlar ve bireylerle paylaşmayacağız:
<br>
1. Yasal durumlarda paylaşım: Kişisel bilgilerinizi, yasa ve yönetmeliklerin, davaların ve anlaşmazlıkların gerekliliklerine uygun olarak veya idari ve yargı organlarının gerekliliklerine uygun olarak dış dünyada paylaşabiliriz. kanun.
<br>
2. Net Onam ile Paylaşılır: Açık rızanızı aldıktan sonra, kişisel bilgilerinizi diğer taraflarla paylaşacağız.
<br>
3. Aktif seçiminiz altında paylaşın: İşlem bilgilerinizle ilgili gerekli bilgileri, işleminize ulaşmak için dijital varlıkların işlemini ve -sales hizmet ihtiyaçlarını paylaşmak için sipariş bilgilerinizde paylaşacağız.
<br>
4. Yetkili ortaklarla paylaşın: İlgili taraflarımız, platformumuzu çalıştırmamıza, iş yapmamıza veya size hizmet sunan güvenilir bir üçüncü taraf sunmamıza yardımcı olun. Bilgiler uygundur. Bu, yasalara, düzenlemelere uygun bir sipariştir , kurallar ve düzenlemeler veya mahkemeden veya yetkili makamlarından ve platform stratejimizi uygulayın. Haklar, mülk veya güvenlik.
<br>
(2) Transfer
<br>
Aşağıdaki durumlar dışında kişisel bilgilerinizi herhangi bir şirkete, organizasyona ve bireye aktarmayacağız: hariç:
<br>
1. Açık rıza alması durumunda: Açık rızanızı aldıktan sonra kişisel bilgilerinizi diğer taraflara aktaracağız;
<br>
2. Bu platformda birleştirme, satın alma veya iflas tasfiyesi veya birleşme, satın alma veya iflas tasfiyesi içeren diğer durumlarda, kişisel bilgi transferini içerirseniz, kişisel bilgilerinizi tutan yeni şirketler ve kuruluşlar isteyeceğiz. Bu kitaba tabi olun. Politikanın kısıtlamaları, aksi takdirde şirket, kuruluş ve bireyden izin rızanızı uzlaştırmasını isteyeceğiz.
<br>
(3) Halka açık açıklama
<br>
Kişisel bilgilerinizi yalnızca aşağıdaki koşullarda herkese açık olarak açıklayacağız:
<br>
1. Açık onayınızı alın veya aktif seçiminize göre, kişisel bilgilerinizi herkese açık olarak ifşa edebiliriz;
<br>
2. Yasaları ve yönetmelikleri ihlal ettiğinizi veya platformun ilgili anlaşmalarını ve kurallarını ciddi şekilde ihlal ettiğinizi veya kullanıcının veya halkın kişisel mülkünün güvenliği için ciddi ihlaller için, ilgili ihlaller ve dahil olmak üzere kişisel bilgilerinizi keşfedebiliriz. Bu platformun size götürdüğü önlemler.
<br>
(4) Kişisel bilgilerin ifşa edilmesinin paylaşılması, aktarılması ve kamuya açıklanması.
<br>
Aşağıdaki koşullarda, izin onayınızı önceden almadan kişisel bilgilerinizi paylaşmak, aktarmak ve kamuya açıklamak:
<br>
1. Ulusal güvenlik ve ulusal savunma güvenliği ile ilgilidir;
<br>
2. Kamu güvenliği, halk sağlığı ve büyük kamu çıkarları ile ilgili;
<br>
3. Ceza soruşturması, kovuşturma, yargılama ve kararın yargı veya idari kanun uygulanması ile ilgilidir.
<br>
4. sizin veya diğer bireyleri korumak gibi büyük meşru haklar ve çıkarlar için, ancak rızamı almak zor;
<br>
5. Kişisel olarak kendiniz ifşa ettiğiniz kişisel bilgiler;
<br>
6. Yasal haber raporları ve hükümet bilgilerinin açıklanması gibi yasal kamu bilgilerinden kişisel bilgileri toplayın.
<br>
Uygulanabilir yasalara göre, kişisel bilgileri almak için teknik önlemler ve diğer gerekli önlemler alırsak, veri alıcısının belirli bireyleri yeniden tanımlayamaması ve geri kazanamaması, daha sonra verilerin paylaşımı, aktarılaması ve kamuya açıklanması için verilerin paylaşılamaması İşlemenin açıklanmadan açıklanması gerekmez. Size bildirin ve onayınızı alın.
<br>
<strong> 4. Bilgilerinizi nasıl koruruz </strong>
<br>
1. Kişisel verilerinizi korumak ve korumak için uygun fiziksel, elektronik, yönetim ve teknik önlemler uyguluyoruz. Platformumuz tarafından toplanan herhangi bir kişisel bilgilerin bizimle hiçbir ilgisi olmayan herhangi bir üçüncü taraf tarafından önlenmesini sağlamak için elimizden gelenin en iyisini yapıyoruz. Aldığımız güvenlik önlemleri şunları içerir, ancak bunlarla sınırlı değildir:
<br>
(1) Fiziksel önlemler: Kişisel verilerinizle ilgili kayıtlar kilitli yerlerde saklanacaktır.
<br>
(2) Elektronik Önlemler: Kişisel verilerinizle bilgisayar verileri, kesinlikle oturum açılan bilgisayar sisteminde ve depolama ortamında saklanacaktır.
<br>
(3) Yönetim Tedbirleri: İçeride kullanıcı bilgilerinin güvenlik koruması ile ilgili departmanları kurduk ve ilgili iç kontrolü oluşturduk. Sizinle iletişime geçebilecek personel için katı izin prensibi. Kişisel verilerinize,
Bu çalışanların iç gizlilik kodlarımıza uymaları gerekmektedir. Buna ek olarak, ilgili yasa ve düzenlemelerin savunuculuğunu, gizlilik güvenliği standartlarını ve personel eğitimi konusunda güvenlik bilincini güçlendirmeye devam ediyoruz ve acil müdahale eğitimi ve acil durum tatbikatları yürütmek için iç personeli düzenli olarak organize ediyoruz, böylece iş görevlerinde ve acil durum dağıtım stratejileri ustalaşabilirler. ve düzenlemeler
<br>
(4) Teknik Önlemler: Kişisel verilerinizi taşımak için güvenli soket katmanı şifrelemesi gibi şifreleme teknolojisi benimsenebilir.
<br>
(5) Güvenlik Önlemleri: Bilgi güvenliğinizi sağlamak için, bilgilerinizi en aza indirmek için çeşitli mevcut evrensel güvenlik teknolojilerini kullanmaya ve destekleme yönetim sistemlerini sızdırıyor, hasar görüyor, yanlış kullanılmamış, yetkisiz erişim, yetkisiz açıklama açıklaması ve değişiklik riski. Örneğin: Şifreli İletim, Bilgi Şifreleme Depolama, Ağ Güvenliği Katmanı Yazılımı (SSL) aracılığıyla veri merkezlerinde katı kısıtlamalar. Kişisel hassas bilgileri (kişisel biyometrik bilgiler dahil) iletirken ve saklarken, şifreleme, izin kontrolü, tanımlama ve duyarsızlaştırma gibi güvenlik önlemlerini benimseyeceğiz.
<br>
(6) Diğer önlemler: Kişisel veri toplama, depolama ve işleme sürecimizi düzenli olarak gözden geçirin;
Ve çalışanlarımızın ve tedarikçilerimizin verilerinize erişimini gerekli ilkelere göre kısıtlar ve çalışanlarımızın ve tedarikçilerimizin ve tedarikçilerimizin katı sözleşme gizlilik yükümlülüklerine uymaları gerekir. Öz
<br>
2. Platformumuzda herhangi bir güvenlik boşluğu olduğunu biliyorsanız, mümkün olan en kısa sürede uygun işlem yapabilmemiz için lütfen hemen bizimle iletişime geçin.
<br>
3. Yukarıda belirtilen teknolojilerin ve güvenlik önlemlerinin uygulanmasına rağmen, İnternet'teki verilerin verilerinin kesinlikle güvenli olduğunu garanti edemeyiz.
Bu nedenle, kişisel bilgilerimizi platformumuz aracılığıyla sunmamız için hepinizin güvende olduğunuzu kesinlikle garanti edemeyiz. Güvenlik risklerinin, kişisel bilgi güvenliği etkisi değerlendirme raporlarının vb. İlgili içeriğini güncelleyip açıklayacağız.
<br>
<strong> 5. Bilgilerinizi nasıl yönetiyorsunuz </strong>
<br>
Bilgilerinize aşağıdaki yollarla erişebilir ve yönetebilirsiniz:
<br>
(1) Bilgilerinizi sorgulayın, düzeltin ve silin
<br>
Profilinizin bir kopyasını gereksinimlere göre alma ve kontrol ettiğimiz bilgilerin doğru ve en son olup olmadığını belirleme hakkına sahipsiniz. Kişisel verileriniz yanlışsa, bilgilerinizi güncellemeyi isteyebilirsiniz. Ayrıca kişisel bilgilerinizi silmek isteyebilirsiniz, ancak yasal gereksinimler veya diğer yasal amaçlar gibi bazı durumlarda silme talebinizi reddedebiliriz. Veri erişimi, daha doğru veya silme istekleri ile ilgili olarak, 8. Madde'deki iletişim bilgileri aracılığıyla bizimle iletişime geçebilirsiniz.
<br>
Veri erişimine yanıt olarak, talebi daha doğru veya silin, bu tür talepleri hukukta yapma hakkına sahip olduğundan emin olmak için istek tarafının kimliğini doğrulayacağız. Amacımız bu taleplere ücretsiz olarak cevap vermek olsa da, talebiniz tekrarladığında veya ağır olduğunda makul maliyetleri toplama hakkını koruyoruz.
<br>
(2) Yetkilendirme izninizin kapsamını değiştirin
<br>
Her iş işlevi tamamlanması için bazı temel kişisel bilgiler gerektirir (bu Gizlilik Politikasının "İlk Bölümü" na bakın). Ayrıca, yetkilendirme onayınızı vermek veya geri almak için 8. Madde'deki iletişim bilgileri aracılığıyla bizimle iletişime geçebilirsiniz.
<br>
Onayınızı kurtardığınızda, artık ilgili kişisel bilgileri işlemeyeceğiz. Ancak rızayı kurtarma kararınız, yetkinize göre kişisel bilgi işlemeyi etkilemez.
<br>
(3) hesabınızı kaydetmek
<br>
8. Madde'deki iletişim bilgileriniz aracılığıyla hesabınızın iptal edilmesi için başvurmak için bizimle iletişime geçebilirsiniz; hesabı aktif olarak iptal ettikten sonra, size ürün veya hizmet sağlamayı bırakacağız, kişisel bilgilerinizi geçerli yasaların gereksinimlerine göre sileceğiz veya Onları anonim tedavi haline getirin.
<br>
(4) Yukarıdaki talebinize yanıt verin
<br>
Güvenliği sağlamak için, yazılı bir talepte bulunmanız veya kimliğinizi başka şekillerde kanıtlamanız gerekebilir. Önce kimliğinizi doğrulamanızı ve ardından isteğinizi işleme koymanızı isteyebiliriz.
<br>
15 gün içinde cevap vereceğiz. Memnun kalmazsanız, sağladığımız iletişim bilgileri aracılığıyla şikayetler de başlatabilirsiniz.
<br>
Makul talebiniz için, prensipte ücret talep etmiyoruz, ancak tekrarlanan ve daha makul talepler için uygun bir ücret talep edeceğiz. Kimliğinizle doğrudan ilişkili olmayan bilgiler, benzeri görülmemiş tekrarlanan bilgiler veya çok fazla teknik araç için (örneğin, yeni bir sistem geliştirmeniz veya mevcut uygulamayı temelden değiştirmeniz gerekir), başkalarının meşru haklarına riskler veya gerçekçi olmayan talepler getirmeniz gerekir. ve başkalarının ilgi alanları reddedebiliriz.
<br>
Aşağıdaki koşullarda, yasa ve düzenlemelerin gerekliliklerine uygun olarak, talebinize yanıt veremeyiz:
<br>
1. Ulusal güvenlik ve ulusal savunma güvenliği ile ilgilidir;
<br>
2. Kamu güvenliği, halk sağlığı ve büyük kamu çıkarları ile ilgili;
<br>
3. Suç soruşturması, kovuşturma, yargılama ve infaz kararı ile ilgili;
<br>
4. Kişisel bilgi konusunun öznel kötü niyetli veya hakların kötüye kullanılması olduğuna dair yeterli kanıt vardır;
<br>
5. Talebiniz, sizin veya diğer bireylerin ve kuruluşların meşru haklarının ve çıkarlarının ciddi şekilde zarar görmesine neden olacaktır;
<br>
6. İş Sırlarını Dahil Etme.
<br>
<strong> 6. Küçüklerin bilgilerini nasıl işleriz </strong>
<br>
Bu platform çocuklara açıktır. Kullanıcıların 14 yaşından küçük olduğundan şüphelenirsek veya şüphelenirsek, kullanıcılardan hesaplarını kapatmalarını isteyeceğiz ve kullanıcının platform ürünlerini veya hizmetlerini kullanmaya devam etmesine izin vermeyeceğiz. İlgili verileri mümkün olan en kısa sürede sileceğiz. 14 yaşın altındaki herhangi birinin hizmetimizi kullandığını biliyorsanız, ürünlerimizi veya hizmetlerimizi almalarını önlemek için harekete geçebilmemiz için lütfen bizi bilgilendirin.
<br>
14 yaşında ancak 18 yaşından küçük olanlar için, ebeveynlerin veya velilerin küçüklere hizmetlerimizi kullanmalarına rehberlik etmelerini bekliyoruz. İlgili yasa ve düzenlemeler hükümlerine uygun olarak, küçüklerin bilgisinin gizliliğini ve güvenliğini koruyacağız.
<br>
Küçükseniz, ebeveynlerinizin veya velilerin bu politikayı okuması ve hizmetlerimizi kullanması veya bize ebeveynlerinizin veya velilerinizin rızası altında bize bilgi vermesi önerilir. Ebeveynlerin veya velilerin bilgilerinizi toplamayı kabul ettikleri durum için, bu bilgileri yalnızca yasalar, ebeveynler veya veliler tarafından izin verilirse, haklarınızı açıkça kabul eder veya koruyabilirse kullanacağız. Guardian'ınız, hizmetlerimizi kullandığınızı veya bize bu politikaya uygun olarak bilgi verdiğinizi kabul etmiyorsa, lütfen hizmetlerimizi hemen sonlandırın ve ilgili önlemleri alabilmemiz için bizi zamanında bilgilendirin.
<br>
Küçüklerin ebeveynleri veya velilerseniz, izlediğiniz küçüklerin bilgi işlenmesi hakkında sorularınız olduğunda, lütfen bu politikanın iletişim bilgileri aracılığıyla bizimle iletişime geçin.
<br>
<strong> Yedi, Gizlilik Politikası Nasıl Güncellenir </strong>
<br>
Gizlilik politikamız değişebilir.
<br>
Rızanız olmadan, bu Gizlilik Politikasına uygun olarak keyif almanız gereken hakları sınırlamayacağız. Resmi kanallarda gizlilik politikalarında herhangi bir değişiklik yayınlayacağız. Gözden geçirilmiş içerikle aynı fikirde değilseniz, bu platformu hemen ziyaret etmeyi bırakmalısınız. Gizlilik Politikasının güncelleme sürümü yayınlandığında, bu platform ekranını ziyaret etmeye devam edersiniz ve güncellenmesi gereken içeriği kabul ettiğinizi ve güncellenmiş gizlilik politikasına uymayı kabul etmiş olursunuz.
<br>
Büyük değişiklikler için, daha önemli bildirimler de sağlayacağız (bu platformun yoluyla bildirimi bildireceğiz ve hatta size pop -up penceresi istemleri sağlayacağız).
<br>
Bu politikadaki en büyük değişiklikler şunları içerir, ancak bunlarla sınırlı değildir:
<br>
1. Hizmet modelimiz önemli ölçüde değişti. Kişisel bilgileri ele almak, kişisel bilgilerin türü, kişisel bilgilerin kullanımı vb.;
<br>
2. Kontrol ve diğer yönlerde büyük değişiklikler yaptık. Birleşme ve devralmalar ve yeniden düzenlemelerin neden olduğu bilgi denetleyicisindeki değişiklikler;
<br>
3. Kişisel Bilgi Paylaşımı, Transfer veya Kamu Bilgilendirme Değişikliklerinin ana nesnesi;
<br>
4. Kişisel Bilgi İşlemeye Katılma Hakkı ve Egzersiz Yöntemleri Büyük Değişiklikler geçirmiştir;
<br>
5. Kişisel bilgi güvenliğini ele almak için sorumluluk departmanı, iletişim yöntemleri ve şikayet kanallarından sorumluyuz;
<br>
6. Kişisel Bilgi Güvenliği Etki Değerlendirme Raporu yüksek risk göstermektedir.
</p>`,

	//用户协议
	userAgreementText: `<p> Önemli İpuçları: </p>
<p> <br>
Size hatırlatmak için buradayız:
<br>
• 1 dijital varlığın kendisi herhangi bir finansal kurum veya şirket veya web sitesi tarafından verilemez;
<br>
• 2 Dijital Varlık Pazarı yepyeni, doğrulanmamış ve büyümeyebilir;
<br>
• 3
Dijital varlıklar esas olarak spekülatörler tarafından kullanılmaktadır. Perakende ve ticari piyasalar nispeten küçüktür. Dijital varlık işlemlerinin son derece yüksek riskleri vardır. Dalgalanma;
<br>
• 4
Şirket, bu Sözleşmeyi tek taraflı kararına göre ihlal ettiğinize veya bu web sitesi tarafından sağlanan hizmet tarafından sağlanan hizmetin sağladığı davranış veya web siteniz tarafından sağlanan hizmetin yasadışı olduğuna inanıyorsa, şirketin askıya alma veya feshetme hakkı vardır. Herhangi bir zamanda hesaplayın veya hesabınızı istediğiniz zaman sonlandırın veya web siteniz tarafından sağlanan Hizmetleri veya Dijital Varlık işlemlerini askıya alın veya sonlandırın.
Dijital varlık işlemleri son derece risklidir ve çoğu insan için uygun değildir. Bu işlemin bazı kayıplara veya tüm kayıplara neden olabileceğini anlarsınız ve anlarsınız, bu nedenle işlemin miktarını dayanabilecek kayıp derecesi ile belirlemelisiniz. Dijital varlıkların türev riskler üreteceğini anlıyorsunuz ve anlıyorsunuz, bu nedenle herhangi bir sorunuz varsa, önce profesyonel danışmanların yardımını almanız önerilir. Ayrıca, yukarıda belirtilen risklere ek olarak, öngörücü riskler olmayacaktır. Mali durumunuzu değerlendirmek için net bir yetenek ve dijital varlıkları satın alma ve satma kararları vermek ve bunun neden olduğu tüm kayıpları üstlenecek şekilde dikkatlice düşünmeli ve kullanmalısınız. Bunun için herhangi bir sorumluluk almıyoruz.
</p>
<p> <br>
Seninle konuşmak:
<br> <br>
</p>
<p>
• 1
Bu web sitesindeki görüşler, mesajlar, tartışmalar, analizler, fiyatlar, öneriler ve diğer bilgiler genel pazar incelemeleridir ve yatırım önerileri oluşturmaz. Herhangi bir kar zarar dahil ancak bunlarla sınırlı olmamak üzere, doğrudan veya dolaylı olarak bilgiye dayanan herhangi bir kayıp almıyoruz.
<br>
• 2
Bu web sitesinin özellikleri hiçbir zamanda değiştirilmeyecektir. Web sitesi bilgilerinin doğruluğunu sağlamak için makul önlemler aldık, ancak doğruluğunu garanti edemez. İnternette doğrudan veya dolaylı kayıplar, iletim veya bildirim ve bilgiler almak doğrudan veya dolaylı olarak katlanıyor.
<br>
• 3
İnternet ticaret sistemlerinin kullanımında, yazılım, donanım ve internet bağlantılarının başarısızlığı dahil ancak bunlarla sınırlı olmamak üzere riskler de vardır. İnternetin güvenilirliğini ve kullanılabilirliğini kontrol edemediğimiz için, bozulma, gecikme ve bağlantı hatası için herhangi bir sorumluluk taşımayacağız.
<br>
• 4
Bu web sitesini kötü amaçlı manipülasyon pazarları ve uygunsuz işlemler gibi tüm ahlaksız ticaret faaliyetleri için kullanmak yasaktır. Bu tür olaylar bulunursa, bu web sitesi tüm kötü niyetli manipülasyon fiyatları ve kötü niyetli etkilenen ticaret sistemlerinin uyarılarını, işlemleri kısıtlayacak ve özelleştirilmesini sağlayacaktır. Hesapların askıya alınması gibi önleyici koruma önlemleri, üretilen tüm sorumlulukları taşımayız ve ilgili kişilere karşı sorumluluğu koruma hakkını saklı tutmuyoruz.
</p> <br>
<p> I. Genel İlkeler </p> <br>
<p>
• 1.1
"Kullanıcı Sözleşmesi" (bundan böyle "Bu Sözleşme" veya "Bu Hüküm ve Koşullar" olarak anılacaktır), "Gizlilik Şartları", "Müşterinizi ve Müşterilerinizi Anlama" ve her biri olabilecek her biri Bu web sitesi tarafından yayınlandı veya gelecekteki sınıf kurallarında, ifadelerinde, açıklamalarda vb.
<br>
• 1.2
Bu web sitesi tarafından sağlanan hizmetleri kullanmadan önce, bu sözleşmeyi dikkatlice okumalısınız. Anlamıyorsanız veya gerekli başka bir şey varsa, lütfen profesyonel bir avukata danışın. Bu Sözleşmeyi ve/veya BT'nin herhangi bir zamanda değiştirilmesini kabul etmiyorsanız, lütfen hemen bu web sitesi tarafından sağlanan hizmetleri kullanmayı bırakın veya artık bu web sitesine giriş yapmayın. Bu web sitesinde oturum açtıktan sonra, bu web sitesinde herhangi bir hizmeti veya başka benzer davranışları kullanın, bu Sözleşmenin herhangi bir zamanda yapılan değişiklikler de dahil olmak üzere, bu Sözleşmenin özelliklerini anladığınız ve tam olarak kabul ettiğiniz anlamına gelir.
<br>
• 1.3
İlgili bilgileri bu web sitesinin gereksinimlerine göre doldurabilir ve diğer ilgili prosedürlerden sonra başarıyla kaydedebilirsiniz. Formlar şirketle bir anlaşmaya varabilirsiniz; veya "rızası" veya benzer anlamlar olarak etiketlenmiş düğmelerin davranışını tıklarsanız Bu web sitesini kullanma süreci veya diğer web sitelerinin izin verdiği bu web sitesi tarafından sağlanan hizmetleri gerçekleştirme süreci 2. Bu Sözleşme kapsamındaki tüm şartların kısıtlamalarını kabul edin, el yazınız olmadan yazılı imza yasal bağlama gücünüzü etkilemez Bu anlaşma.
<br>
• 1.4 Bu web sitesine üye olduktan sonra, bir üye hesabı ve ilgili şifre alacaksınız. Üyelik hesabından ve şifreden sorumlu olacaksınız; hesabınızla yürüteceğiniz tüm etkinlikler ve etkinlikler için yasal sorumluluk taşımalısınız.
<br>
• 1.5 yalnızca bu web sitesinin bir üyesi olur, bu web sitesi tarafından sunulan dijital varlık ticaret platformunu işlemler için kullanabilir ve diğer web siteleri tarafından sağlanan hizmetlerin tadını çıkarabilir.
<br>
• 1.6 Bu web sitesi tarafından sağlanan herhangi bir hizmet ve işlevin tescili ve kullanılmasıyla, okuma, anlama ve:
<br>
• 1.6.1 Bu Anlaşmanın tüm hüküm ve koşullarının kısıtlamalarını kabul edin.
<br>
• 1.6.2
16 yaşında olduğunuzu veya sonuçlandırılabilecek yasal yaşla ilgili farklı yasal düzenlemelere göre ve bu web sitesinde kayıt, satış veya satın alma ve yayınlama hakkındaki davranışlarınızın ilgili yasalarla uyumlu olması gerektiğini onaylarsınız. ve egemen ülkelerin veya yargı yetkisine sahip bölgelerin düzenlemeleri ve bu şartları kabul etmek için yeterli yeteneklere sahiptir ve bu web sitesini dijital varlık işlemleri için kullanmak üzere işlemler oluşturur.
<br>
• 1.6.3 İşlemde yer alan dijital varlıklarınızın yasal olarak alındığını ve keyif aldığını garanti edersiniz.
<br>
• 1.6.4 Kendi işlemleriniz veya ticaret yapmayan davranışlarınız için tüm sorumlulukları ve gelir veya kayıpları üstlenmeyi kabul edersiniz.
<br>
• 1.6.5 Kayıt sırasında verilen bilgilerin doğru ve doğru olduğunu onaylarsınız.
<br>
• 1.6.6 İlgili yasal hükümlere uymayı kabul edersiniz. Herhangi bir işlem kârının raporlanması da dahil olmak üzere vergi amaçları söz konusu olduğunda.
<br>
• 1.6.7 Herhangi bir zamanda, bu Web Sitesi tarafından sağlanan hizmetlerle ilgili olsun, bu web sitesinin veya şirketin çıkarlarına zarar veren davranış veya faaliyetlere katılmamanız veya katılmamanız gerektiğini kabul edersiniz.
<br>
• 1.6.8 Bu Sözleşme, bizimle ulaştığınız haklar ve yükümlülüklerle sınırlıdır ve bu web sitesinin kullanıcıları ile diğer web siteleri ve sizler arasında dijital varlıkların ticaretinin neden olduğu yasal ilişkileri ve yasal anlaşmazlıkları içermez.
</p> <br>
<p> 2. Protokol Revizyonu </p> <br>
<p>
Bu Sözleşmenin duyurusunu zaman zaman koruyoruz ve web sitesi tanıtımı tarafından duyuruyoruz ve artık haklarınızı bildirmiyoruz. Değişen anlaşma, bu Sözleşmenin ana sayfasındaki değişiklik süresini işaretleyecek. Web sitesinde açıklandıktan sonra otomatik olarak alacak Hemen efekti. Bu Sözleşmenin Güncelleme Zamanına ve Güncelleme İçeriğine zaman zaman göz atmalı ve dikkat etmelisiniz. İlgili değişikliklerle aynı fikirde değilseniz, bu web sitesi hizmetini kullanmayı hemen bırakmalısınız; bu web sitesi hizmetini kullanmaya devam edersiniz, bu da Gözden geçirilmiş anlaşmanın kısıtlamalarını kabul edersiniz.
</p> <br>
<p> üç, kayıt </p> <br>
<p>
• 3.1 Kayıtlı Nitelikler
<br>
Onay ve Söz: Kayıt Prosedürünü tamamladığınızda veya bu Web Sitesi tarafından sağlanan hizmetlere bu Web Sitesine izin verdiğiniz şekilde izin verdiğinizde, bu Sözleşmeyi imzalamak ve bu Web Sitesi Hizmeti ile sahip olmanız gereken yetenekleri kullanmak için geçerli bir yasal düzenlemeler olmalısınız. Doğal kişiler, yasal kişiler veya diğer kuruluşlar. Kayıt düğmesini kabul etmek için tıkladıktan sonra, bu, veya acentenin sözleşmenin niteliğini kabul ettiği ve bu web sitesini hizmet vermek için kaydettirip kullandığı anlamına gelir. Yukarıda belirtilen konu yeterliliğine sahip değilseniz, siz ve temsilci hakkınız, bunun neden olduğu tüm sonuçları taşımalısınız ve şirket, hesabınızı iptal etme veya serbestçe dondurma ve sizi ve acenteye hakkınızı tutma hakkını saklı tutar. Essence
<br>
• 3.2 Kayıt Amacı
<br>
Teyit ve söz veriyorsunuz: Bu web sitesini kaydettiriyorsunuz, yasaların ve düzenlemelerin ihlali veya web sitesindeki dijital varlık işlemlerinin siparişini yok etmek için değildir.
<br>
• 3.3 Kayıt Süreci
<br>
• 3.3.1
Bu web sitesinin kullanıcı kayıt sayfasının gereksinimlerine göre etkili e -postalar ve cep telefonu numaraları gibi bilgileri vermeyi kabul edersiniz. Bu web sitesini girmek için cep telefonu numaranızı giriş yöntemi olarak kullanabilirsiniz. Gerekirse, farklı bölgelerdeki ilgili yasa ve düzenlemeler hükümlerine uygun olarak, gerçek isimlerinizi, kimlik belgelerinizi ve diğer yasalarınızı, düzenlemelerin ve gizlilik hükümlerinizi ve anti -aklama önleme maddelerinde öngörülen ilgili bilgileri sağlamalısınız. Tüm orijinal anahtarlama verilerine kayıtlı bilgiler olarak atıfta bulunulacaktır. Bu bilgilerin özgünlüğünden, bütünlüğünden ve doğruluğundan sorumlusunuz ve bunun neden olduğu doğrudan veya dolaylı kayıplar ve olumsuz sonuçlar taşıyorsunuz.
<br>
• 3.3.2 Kayıt için gerekli bilgileri sağlamak ve doğrulamak için yasal, eksiksiz ve etkin bir şekilde sağlanmışsınız. Bu web sitesinin hesap numarasını ve şifresini alma hakkınız vardır. Bu web sitesi hesap numarasını ve şifreyi aldığınızda, kaydedilebilirsiniz. Ve bu web sitesinde giriş yapabilirsiniz.
<br>
• 3.3.3 Bu web sitesinin yönetimi ve işletilmesi ile ilgili e -posta ve/veya kısa mesajlar almayı kabul edersiniz.
</p> <br>
<p> Dört, Hizmet </p> <br>
<p>
• 4.1 Hizmet İçeriği
<br>
• 4.1.1 Bu web sitesinde çeşitli dijital varlık ürünlerinin gerçek zamanlı alıntılarına ve işlem bilgilerine göz atma ve dijital varlık işlem talimatları ve dijital varlık işlemlerini bu web sitesi üzerinden tamamlama hakkına sahipsiniz.
<br>
• 4.1.2 Bu web sitesinde üye hesabınız altındaki bilgileri kontrol etme hakkına sahipsiniz ve bu web sitesi tarafından sağlanan işlevleri operasyon için uygulama hakkına sahipsiniz.
<br>
• 4.1.3 Bu web sitesinde yayınlanan faaliyet kurallarına uygun olarak bu web sitesi tarafından düzenlenen Web Sitesi faaliyetlerine katılma hakkına sahipsiniz.
<br>
• 4.1.4 Bu web sitesi, sizin tarafınızdan sağlanan diğer hizmetleri vaat etmektedir.
<br>
• 4.2. Aşağıdaki web sitesine uymaya söz verdiğiniz hizmet kuralları:
<br>
•4.2.1
Yasalara ve düzenlemelere uymalı ve hesap numaranızı, giriş şifrenizi, fon şifresini ve cep telefonu doğrulama kodunu cep telefonları tarafından alınan uygun şekilde kullanmalı ve saklamalısınız. Hesap numaranızın ve giriş şifrenizin herhangi bir işlemi ve sonuçları için tüm sorumluluğunuz var. Bu Web Sitesi Hesap Numarası, Oturum Açma Şifresi veya Fon Parolası ve Doğrulama Kodunun Yetkili veya Diğer Hesaplar veya Diğer Hesap Güvenlik Sorunları tarafından kullanıldığını bulduğunuzda, bu web sitesi etkin bir şekilde bildirilmelidir. Essence Bu web sitesi, makul bir süre içinde isteğinizle ilgili harekete geçme hakkına sahiptir, ancak bu web sitesi harekete geçmeden önce sonuçlar için herhangi bir sorumluluk taşımamaktadır (kayıplarınız dahil ancak bunlarla sınırlı değildir). Bu web sitesi hesabıyla başkalarını bu web sitesi olmadan hediye, ödünç alma, kiralama, transfer veya başka yollarla cezalandırmamalısınız.
<br>
• 4.2.3 Web sitenizde ve şifrenizde meydana gelen tüm faaliyetleri kabul edersiniz (bunlarla sınırlı olmamakla birlikte, bilgi açıklaması, serbest bırakma, çevrimiçi tıklamalar, çeşitli kurallar anlaşmaları kabul etmek veya sunmak için çevrimiçi tıklamalar, çevrimiçi yenileme anlaşmaları veya satın alma hizmetleri) taahhüt) sorumluluk almak.
<br>
4.2.4
Bu web sitesinde dijital varlık işlemleri yürüttüğünüzde, dijital varlık işlemlerinin normal ilerlemesine kötü niyetli bir şekilde müdahale etmemelisiniz ve işlemler sırasını yok etmelisiniz; bu web sitesinin normal çalışmasına müdahale etmemelisiniz veya diğer kullanıcıların kullanımına müdahale etmemelisiniz. Bu web sitesinin herhangi bir teknik yolla veya diğer yöntemlerde hizmeti. Gerçekler ve diğer yöntemler bu web sitesinin şerefiyesini kötü niyetli bir şekilde iftira eder.
<br>
• 4.2.5 Çevrimiçi işlemler nedeniyle diğer kullanıcılarla anlaşmazlıklarınız varsa, bu web sitesinde adli veya idari kanallar aracılığıyla ilgili bilgi istememeniz gerekir.
<br>
• 4.2.6 Bu web sitesi tarafından sağlanan hizmet sürecinde, ortaya çıkan diğer yönlerin maliyetleri sadece sizin tarafınızdan değerlendirilir ve karşılanır.
<br>
• 4.3. Ürün kuralları
<br>
• 4.3.1 İşlem bilgilerine göz atın
<br>
• Bu web sitesindeki işlem bilgilerine göz attığınızda, fiyat, komisyon miktarı, ücretleri ele alma veya satma yönergeleri dahil ancak bunlarla sınırlı olmamak üzere işlem bilgilerinde bulunan tüm içeriği dikkatlice okumalısınız.
İşlem bilgilerinde yer alan tüm içerikten sonra takas için düğmeyi tıklayabilirsiniz.
<br>
• 4.3.2 İşlem ayrıntılarını görüntüle
<br>
• İlgili işlem kayıtlarını hesabınız üzerinden görüntüleyebilirsiniz.
</p> <br>
<p> 5. Bu web sitesinin hak ve yükümlülükleri </p> <br>
<p>
• 5.1
Bu Sözleşmede öngörülen kayıt yeterliliğiniz yoksa, bu web sitesi sizi kaydolmanızı reddetme hakkına sahiptir. Kayıtlı olarak, bu web sitesi üyelik hesabınızı iptal etme hakkına sahiptir. Aynı zamanda, bu web sitesi, kaydolma hakkınızı kabul edip etmeyeceğinizi belirlemek için başka koşulları saklı tutar.
<br>
• 5.2 Bu web sitesinin kararına göre, bu web sitesi sizin veya bağlı hesap kullanıcılarınızın yüksek riskli yatırım için uygun olmadığını tespit ettiğinde, hesabınızı ve tüm kapanış hesaplarınızı askıya alma veya sonlandırma hakkına sahipler.
<br>
• 5.3 Bu web sitesi, hesap kullanıcılarının hesabın ilk kayıt memuru olmadığını ve hesabın kullanımını askıya alma veya feshetme hakkına sahip olduklarını tespit eder.
<br>
• 5.4 Bu web sitesi, bu web sitesi, sağladığınız bilgi hatalarının yanlış, geçersiz veya eksik olduğunda, verdiğiniz bilgileri, bilgileri güncellemenizi, güncellemenizi ve durdurmanızı bildirme hakkına sahip olduğundan şüphelenir. Bu web sitesi hizmetini sonlandırın.
<br>
• 5.5 Bu web sitesi, bu web sitesinde görüntülenen bilgilerin açıkça yanlış olduğu tespit edildiğinde bilgileri düzeltme hakkına sahiptir.
<br>
• 5.6
Bu web sitesi, bu web sitesinin hizmetini herhangi bir zamanda değiştirme, askıya alma veya feshetme hakkını saklı tutar. Bu web sitesinde hizmeti kullanma veya askıya alma hakkı sizi önceden bilgilendirmesi gerekmez. Fesih duyurusu tarihi etkilidir.
<br>
• 5.7 Bu web sitesi, bu web sitesinin normal çalışmasını sağlamak için gerekli teknik araçlar ve yönetim önlemlerini benimseyecek ve dijital varlık işleminin siparişini korumak için gerekli ve güvenilir ticaret ortamını ve ticaret hizmetlerini sağlayacaktır.
<br>
• 5.8 Bir yıl boyunca bu web sitesinin üyelik hesabını ve şifresini kullanmadıysanız, web sitesi hesabınızı iptal etme hakkınız vardır. Hesap iptalinden sonra, bu web sitesi ilgili üyelik adını diğer kullanıcılara açma hakkına sahiptir.
<br>
• 5.9 Web Sitesi Teknolojik yatırımı güçlendirerek ve güvenlik önlemlerini geliştirerek dijital varlıklarınızın güvenliğini sağlamak ve hesabınız öngörülebilir güvenlik riskleri göründüğünde sizi önceden bilgilendirin.
<br>
• 5.10 Web Sitesi, yasalara ve düzenlemelere uymayan veya bu web sitesinde belirtilen öznitelik bilgilerini herhangi bir zamanda silme hakkına sahiptir. Bu web sitesinin sizi önceden bilgilendirmesi gerekmez.
<br>
• 5.11
Bu web sitesi, ülkeye veya bölgeye ait olduğunuzdaki yasalar ve düzenlemeler, kurallar, siparişler ve diğer düzenlemelerin gerekliliklerine uygun olarak daha fazla bilgi veya bilgi vermenizi isteme hakkına sahiptir ve yerel normların gereksinimlerini karşılamak için makul önlemler alabilirsiniz. İşbirliği yapmak zorundadır; bu web sitesi, bağlı egemen eyaletinizdeki veya bölgenizdeki yasalar, yönetmelikler, kurallar ve emirlerin gerekliliklerine uygun olarak sizi askıya alma veya durdurma hakkına sahiptir.
</p> <br>
<p> 6. Sorumluluk Kısıtlamaları ve Muafiyeti </p> <br>
<p>
• 6.1 Anlıyorsunuz ve kabul ediyorsunuz, her durumda, aşağıdaki konular için sorumluluk almayacağız:
<br>
• 6.1.1 Gelir kaybı;
<br>
• 6.1.2 Ticaret kar veya sözleşme zararı;
<br>
• 6.1.3 İş kesintisinin neden olduğu kayıplar;
<br>
• 6.1.4 Tasarruf edilebilecek para kaybı;
<br>
• Bilgi sorunlarının neden olduğu kayıplar;
<br>
• 6.1.6 Fırsatlar, şerefiye veya itibar kayıpları;
<br>
• Veri hasarı veya kaybı 6.1.7 verileri;
<br>
• 6.1.8 Alternatif ürün veya hizmet satın alma maliyeti;
<br>
• 6.1.9
İhlalin (ihmal dahil) neden olduğu herhangi bir dolaylı, özel veya bağlı kayıp veya hasar, sözleşmenin ihlali veya bu kayıp veya hasarın bizim için makul bir şekilde öngörülüp öngörülüp öngörülmeyeceği; kayıp veya hasar olasılığı.
<br>
• Madde 6.1.1 ila 8.1.9 birbirinden bağımsızdır.
<br>
• 6.2 Biliyorsunuz ve kabul ediyorsunuz, aşağıdaki durumlardan herhangi birinin neden olduğu herhangi bir hasar tazminatından sorumlu değiliz:
<br>
• 6.2.1 Özel işlemleriniz için büyük yasadışı veya varsayılan durumlar olabilir.
<br>
• 6.2.2 Bu web sitesindeki davranışlarınızın yasadışı veya ahlaksız olduğundan şüpheleniliyor.
<br>
• 6.2.3 Bu web sitesi hizmeti aracılığıyla üretilen veri, bilgi veya işlem veya değiştirme davranışları satın alın veya alın.
<br>
• 6.2.4 Bu web sitesi hizmetini yanlış anlamanız.
<br>
• 6.2.5 Bu web sitesi tarafından sağlanan hizmetlerle ilgili nedenlerimizden kaynaklanan diğer zararlar.
<br>
• 6.3
Hatalar, bilgisayarlar, iletişim veya diğer sistem başarısızlıkları, hatalar, güç başarısızlıkları, hava nedenleri, kazalar, emek uyuşmazlıkları, ayaklanmalar, ayaklanma, isyanlar, üretken güçler, üretken kuvvetler, üretken kuvvetler, üretken güçler, üretken kuvvetler, üretken kuvvetler, üretken kuvvetler , üretken güçler, ayaklanmalar, ayaklanmalar, fırtınalar, patlamalar, savaşlar, bankalar veya diğer ortaklar, dijital varlık pazarının çöküşü, hükümet davranışı,
Yargı veya idari organların komutları, diğer kontrollerin neden olduğu diğer isteksiz veya gecikmiş hizmetler veya kontrol edemeyiz ya da üçüncü tarafların nedenleri ve kayıplarınıza neden olarak herhangi bir sorumluluk almayacağız.
<br>
• 6.4
Bu web sitesinde yer alan tüm bilgilerin, programların, metinlerin vb. Tamamen güvenli olduğunu ve virüs ve truva atları gibi kötü niyetli prosedürlerle müdahale etmediğini ve yok edilmediğini garanti edemeyiz. Bu nedenle bilgi, veriler vb. Kişisel kararınız ve ayıdır. risk ve olası kayıplar.
<br>
•6.5
Bu web sitesindeki herhangi bir üçüncü taraf web sitesinde herhangi bir bilgi, ürün ve işletmeye ve konumuza ait olmayan özelliklerin diğer herhangi bir biçimini garanti etmiyoruz. Ürünler ve diğer sorumluluklar kişisel kararınızdan sorumludur.
<br>
• 6.6
Bu web sitesi hizmetini kullanmanız için bu web sitesi tarafından sağlanan hizmetin uygulanabilirliği, hata veya eksiklik, sürdürülebilirlik, doğruluk, güvenilirlik ve belirli bir amaç için uygulanabilir olmaları dahil ancak bunlarla sınırlı olmamak üzere açık veya zımni garantiler yapmıyoruz. Aynı zamanda, bu web sitesi tarafından sağlanan hizmetler tarafından sağlanan hizmetlerin etkinliği, doğruluğu, doğruluğu, güvenilirliği, kalite, istikrar, bütünlüğü ve zamanında herhangi bir taahhüt ve garanti vermiyoruz. Bu web sitesi tarafından sağlanan hizmetin giriş yapılması veya kullanılması kişisel kararınızdır ve risk ve olası kayıplardır. Dijital varlıkların piyasa, değeri ve fiyatı için açık veya zımni garantiler yapmıyoruz. Dijital varlık piyasasının kararsız olduğunu ve fiyat ve değerin herhangi bir zamanda keskin bir şekilde dalgalanacağını veya çökeceğini anlıyorsunuz ve anlıyorsunuz. Kişisel Özgürlüğünüz Kişisel Özgürlüğünüz. Risk ve olası kayıpları seçin ve karar verin.
<br>
• 6.7
Bu Sözleşmede öngörülen garantilerimiz ve taahhütlerimiz, bu Anlaşma tarafından sağlanan hizmetlerin ve bu Anlaşma tarafından sağlanan hizmetlerin tek garantisi ve beyanıdır ve diğer yol ve yöntemlerle üretilen garanti ve taahhüdün yerini almıştır. Tüm bu garantiler ve ifadeler yalnızca kendi taahhütlerimizi ve garantilerimizi temsil eder ve herhangi bir üçüncü tarafın bu Sözleşmedeki garanti ve taahhütle uyumlu olduğunu garanti etmez.
<br>
• 6.8 Bu Anlaşmada Yasanın maksimum kapsamı dahilinde bu Anlaşmada Yasanın maksimum kapsamında kabul etmediğimiz herhangi bir haktan vazgeçmiyoruz.
<br>
• 6.9 Kayıt olduktan sonra, yürüttüğümüz işlemleri bu Sözleşmede öngörülen kurallara göre tanıyabilirsiniz ve siz tarafından üretilen herhangi bir risk sizin tarafınızdan karşılanacaktır.
</p> <br>
<p> Yedi, Anlaşmanın Feshi </p> <br>
<p>
• 7.1 Bu Web Sitesi, bu Sözleşmenin Anlaşması uyarınca tüm bu web sitesi hizmetini feshetme hakkına sahiptir. Bu Sözleşme, bu Web Sitesinin tüm hizmetlerinin feshi tarihinde sona erdirilir.
<br>
• 7.2 Bu Sözleşme feshedildikten sonra, bu web sitesini sizin için talep etmek veya orijinal web sitesi hesabında herhangi bir bilgi açıklamak dahil ancak bunlarla sınırlı olmamak üzere, bu web sitesinin herhangi bir hizmet sunmaya devam etmesini veya başka yükümlülükleri yerine getirmesini istemeniz gerekmez.
Hiç okumadığınız veya göndermediğiniz bilgilere sizi veya üçüncü tarafları yeniden yayınlayın.
<br>
• 7.3 Bu Sözleşmenin feshi, temerrüde düşen tarafın diğer sorumlulukları üstlenme talebini etkilemez.
</p> <br>
<p> 8. Fikri Mülkiyet </p> <br>
<p>
• 8.1 Bu web sitesinde yer alan tüm entelektüel sonuçlar, web sitesi logoları, veritabanları, web sitesi tasarımı, metin ve çizelgeler, yazılım, fotoğraf, video, müzik, ses ve söz konusu kombinasyon, yazılım derlemesi, ilgili kaynak kodu ve yazılımı içerir, ancak bunlarla sınırlı değildir.
(Küçük uygulamalar ve senaryolar dahil), fikri mülkiyet hakları bu web sitesine aittir. İş amaçları için herhangi bir malzeme veya özellik kopyalamamalı, değiştirmemesi, kopyalamaması, göndermemeli veya kullanmamalısınız.
<br>
• 8.2 Bu web sitesi adına yer alan tüm haklar (şerefiye ve ticari markalar, işaretler, işaretler dahil ancak bunlarla sınırlı değildir) şirkete aittir.
<br>
• 8.3 Bu web sitesi hizmetinin kullanımı sırasında bu web sitesinin veya diğer kişilerin fikri mülkiyet haklarının yasadışı olarak kullanılmalı veya elden çıkarılması gerekir. Diğer web sitelerini herhangi bir biçimde yayınlamak veya yetkilendirmek için diğer web siteleri (ve medya) yayınlamamalı veya yetkilendirmemelisiniz.
<br>
• 8.4 Bu web sitesine giriş yaparsınız veya herhangi bir fikri mülkiyeti size aktarmak için bu web sitesi tarafından sağlanan herhangi bir hizmeti kullanırsınız.
</p> <br>
<p> dokuz, hesaplamalar </p> <br>
<p> Tüm işlem hesaplama sonuçları bizim tarafımızdan doğrulanmıştır, ancak web sitelerinin müdahale edilmeyeceğini veya hatasız olmayacağını garanti edemeyiz. </p> <br>
<p> on, segmentlenebilirlik </p> <br>
<p> Bu Sözleşmedeki herhangi bir madde, herhangi bir yargı mahkemesi tarafından yeri doldurulamaz, geçersiz veya yasadışı olarak tanımlanırsa, bu Anlaşmanın geri kalan şartlarının etkinliğini etkilemez. </p> <br>
<p> on bir, proxy olmayan ilişkiler </p> <br>
<p> Bu Sözleşmedeki herhangi bir hüküm dikkate alınmamalı, ima edilmemeli veya bizi ajanınız, mütevelli heyetiniz veya diğer temsilcileriniz olarak ele almamalıdır. Bu sözleşmenin başka düzenlemeleri vardır. </p> <br>
<p> on iki, kaçınma </p> <br>
<p>
Biz ya da ikiniz de, bu Sözleşmede kararlaştırılan varsayılan yükümlülüğü veya diğer sorumlulukları araştırmamız için, diğer sözleşmenin ihlali için diğer sorumluluğun terk edilmesi olarak belirlenemez veya açıklanamaz;
</p> <br>
<p> on üç, başlık </p> <br>
<p> Tüm başlıklar protokoller için uygundur ve sözleşmenin şartlarının niteliklerini veya kapsamını genişletmek veya sınırlamak için kullanılmaz. </p>
<p> Diğerleri başkaları için ücret alır: USDT, ETH, BTC, çok para işlemleri, bir kez katı ceza! </p>
<p> </p> <br>
<p> On dört, anlaşmanın etkinliği ve açıklaması </p> <br>
<p>
• Bu web sitesinin kayıt sayfasındaki 14.1 anlaşma, kayıt prosedürünü kaydetmek ve tamamlamak ve bu web sitesi hesabını ve şifreyi alırken yürürlüğe girecek şekilde onaylanmıştır. Hem bu web sitesi hem de bağlayıcısınız.
<br>
• 14.2 Bu Anlaşmanın nihai yorum hakkı bu web sitesine aittir.
<br>
• 14.3
Kişisel başvuru hesabı kullanılırsa, ilgili GTM departmanlarında belirtilen geçerli belgeleri ve makbuz ve ödeme hesaplarını sağlayacaktır ve GTM ilgili departmanlar, GTM ile ilgili departmanlar kayıtlı bir hesap açacaktan sonra verilir; GTM ve bunun başvurun Yalnızca GTM ile ilgili GTM ile İlgili GTM ile ilgili Hesap Departman tarafından onaylanan kişi hesapların sahibi tarafından kullanılır ve kiralamayacak veya ödünç almayacaktır.
</p>`,
















	pc: {
		// pc页面
		home: pc.home.ZH,
	},
}
export default zh //暴露出去
