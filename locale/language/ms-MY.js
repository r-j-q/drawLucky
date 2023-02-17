// import Common from "./data/common/index" //公共模块翻译文件引入
// import User from "./data/user/index" //用户模块翻译文件引入
// import ErrorPage from "./data/error/index"
// import Home from "./data/home/index"
// import Me from "./data/me/index"
// import other from "./data/other/index"
import pc from "./data/pc/index"
const zh = {
	//托管订单
	completed: `Selesai `,
	cancelOrder: `Batal perintah`,
	purchaseAmount: `Beli Amaun`,
	profit: `Pendapatan`,
	day: `Hari`,
	callDate: `Redemption date`,
	whether: `Sama ada untuk membatalkan perintah`,
	dividend: `masa dividend`,
	dueDividend: `Selepas tamat`,
	dailyDividend: `Dividen Harian`,
	escrowAmount: `Amount Escrow`,
	dueReturn: `Kembali selepas selesai`,
	redemption: `Redemption at any time`,
	availableBalance: `Baki tersedia`,
	totalIncome: `Jumlah pendapatan dijangka`,
	readAgree: `Saya telah membaca dan bersetuju`,
	serviceAgreement: `Perjanjian Perkhidmatan Kewangan Platform`,
	trustProtocol: `<div>
					<p> 1. Platform memperkenalkan Perkhidmatan Akaun Konsumsi Kepentingan untuk menyediakan pengguna platform dengan perkhidmatan nilai aset digital yang terbiar. <br>
2. Aset akaun yang konsisten akan digunakan untuk produk derivatif platform dan projek modal teroka yang lain. <br>
3. Platform ini menyediakan perkhidmatan pengurusan risiko untuk aset yang dipindahkan oleh pengguna akaun yang menarik. Platform ini bergantung kepada sistem kawalan risiko yang ketat platform untuk memastikan keselamatan aset perkhidmatan kewangan pengguna dan jaminan. <br>
4. Apabila pengguna menggunakan perkhidmatan akaun kesihatan, platform kebenaran tanpa syarat diperuntukkan dan diedarkan mengikut peraturan platform. <br>
5. Apabila menggunakan perkhidmatan akaun yang ditangani, pengguna harus mematuhi undang -undang negara yang relevan untuk memastikan pematuhan sumber aset yang sah. <br>
6. Apabila menggunakan Perkhidmatan Akaun Perkhidmatan, pengguna harus memahami sepenuhnya risiko pelaburan aset digital, dikendalikan dengan berhati -hati, dan dapat mencapai. <br>
7. Pengguna bersetuju bahawa semua operasi pelaburan di platform mewakili niat pelaburan sebenar mereka, dan tanpa syarat menerima potensi risiko dan faedah yang dibawa oleh keputusan pelaburan. <br>
8. Platform berhak untuk menggantung atau menamatkan Perkhidmatan Akaun Perakaunan Kepentingan. Jika perlu, platform boleh menggantung dan menamatkan Perkhidmatan Akaun Perakaunan Faedah pada bila -bila masa. <br>
9. Oleh kerana kelewatan rangkaian dan kegagalan sistem komputer, pelaksanaan perkhidmatan faedah mungkin ditangguhkan, digantung, digantung atau menyimpang. Kami akan melakukan yang terbaik untuk memastikan operasi sistem pelaksanaan sistem pelaksanaan perkhidmatan yang stabil dan berkesan tidak dijanjikan. Walau bagaimanapun, disebabkan oleh faktor -faktor di atas, hasil pelaksanaan akhir perkhidmatan akaun langsung berbeza daripada jangkaan pelanggan , dan platform tidak akan bertanggungjawab. <br>
10. Apabila pengguna menggunakan perkhidmatan akaun langsung, mereka harus mematuhi peruntukan "Perjanjian Perkhidmatan Kewangan". <br>
</p>
				</div>`,

	//产品列表
	managedOrder: `Managed Order`,
	earningsToday: `Pendapatan hari ini`,
	accumulatedIncome: `Accumulated income`,
	singleLimit: `Had tunggal`,
	dailyRate: `Kadar faedah Hari`,
	cycle: `masa`,

	//信托
	pledgeMining: `Ikrar Perlombongan`,
	underway: `dalam proses`,
	stabilize: `Stabilisasi pendapatan dan jadikan perlombongan lebih mudah`,
	income: `Expected income`,


	//common
	copySucceeded: `Salin berjaya`,
	serverResponseFailed: `The server is not responding`,
	noData: `Tiada data sementara`,
	contentdown: `Tarik untuk menunjukkan lebih`,
	contentrefresh: `untuk kemaskini...`,
	contentnomore: `Tiada lagi data`,

	// tabbar
	Home: `home`,
	Trade: `Transaksi`,
	Future: `masa depan`,
	Trust: `Percaya `,
	Assets: `aset`,

	// 登录
	login: `log masuk `,
	language: `bahasa `,
	mailbox: `kotak mel`,
	placeholderName: `Sila masukkan alamat e-mel `,
	password: `Kata laluan`,
	placeholderPassword: `Sila masukkan kata laluan`,
	forgetPassword: `Lupakan kata laluan？`,
	noHave: `Tiada akaun？`,
	registerNow: `Register now`,
	errorEmpty: `tidak boleh kosong`,
	errorStandard: `Ralat format`,
	errorLength: `(4-30 bit)`,
	errorLength1: `(4-300 bit)`,
	// 注册

	register: `Daftar `,
	code: `kod pengesahan`,
	placeholderCode: `Sila masukkan kod pengesahan `,
	sending: `Menghantar`,
	send: `Hantar `,
	okPassword: `Sahkan kata laluan`,
	invitationCode: `kod undangan `,
	placeholderinvitationCode: `Sila masukkan kod undangan`,
	checkedAgree: `Setuju`,
	userAgreement: `Perjanjian Pengguna`,
	and: `dan`,
	privacyPolicy: `Polisi Privasi`,
	pleaseCheck: `Setuju tidak disemak`,
	atypism: `Katalaluan tidak konsisten`,

	// 忘记登录密码

	forgotLoginPassword: `Lupakan kata laluan log masuk`,
	newPassword: `Katalaluan baru`,
	confirm: `Sahkan`,

	//忘记支付密码

	forgotPayPassword: `Forgot payment password`,
	//设置支付密码
	setpayPassword: `Tetapkan kata laluan pembayaran`,
	//主页
	helper: `Bantuan `,
	rising: `Meningkat`,
	business: `Pasangan dagangan`,
	newPrice: `Harga`,
	upfloat: `Ubah`,
	// 资产

	totalAssets: `Total assets converted`,
	record: `Rekod `,
	nowAssets: ` pertukaran harta benda`,
	buyCoins: `Buy coins`,
	sellCoins: `Selling coins`,
	transfer: `pemindahan `,
	searchCurrency: `Cari`,
	hideSmall: `Sembunyi jumlah kecil`,
	currencyAccount: `Spot`,
	futuresAccount: `Futures`,
	legalAccount: `Akaun Fiat`,
	trustAccount: `Earn`,
	//划转记录

	transferRecord: `transfer record`,
	time: `masa`,
	rollout: `Pemindahan`,
	rollin: `pendapatan`,
	// 币币记录

	screen: `query`,
	money: `jumlah wang`,
	transferAddress: `alamat pemindahan`,
	createTime: `Creation time`,
	confirmTime: `selesai time`,
	note: `Remarks`,
	type: `jenis `,
	reset: `reset `,
	recharge: `Deposit`,
	disbursement: `Pengunduran wang`,
	incomplete: `Tidak Selesai`,
	success: `sukses`,
	fail: `gagal`,


	//币币充币

	currency: `Mata wang`,
	placeholderCurrency: `Sila pilih mata wang`,
	payeeName: `chain name`,
	rechargeAddress: `Alamat semula`,
	copyAddress: `Salin alamat`,
	rechargeQuantity: `Quantity `,
	chargingAddress: `Alamat deposit`,
	placeholderchargingAddress: `Sila masukkan alamat deposit`,
	prove: `Gambar deposit`,
	optional: `(pilihan)`,
	placeholderHash: `Sila masukkan Hash `,
	placeholderNote: `Sila masukkan nota`,
	errorMessageprove: `Sila muat naik gambar deposit`,
	onlyNumbers: `Hanya nombor yang boleh dimasukkan`,
	//币币提币

	withdrawalAddress: `withdrawal address`,
	tipwallet: `Anda belum mengikat dompet yang sepadan lagi`,
	toAdd: `to add`,
	placeholderwithdrawalAddress: `Sila pilih alamat penarikan`,
	availablenum: `Kuantiti tersedia`,
	placeholdernum: `Sila masukkan kuantiti`,
	unselected: `Tidak dipilih`,
	payPassword: `Kata laluan pembayaran`,
	commission: `kos`,
	placeholderpayPassword: `Sila masukkan kata laluan pembayaran`,
	//币币划转

	capitalTransfer: `Pemindahan modal`,
	from: `Dari`,
	to: `ke`,
	moneybag: `Dompet tidak boleh sama`,
	//法币添加收款方式


	subbranch: `Subbranch`,
	placeholdersubbranch: `Sila masukkan cabang`,
	bankcode: `bank code`,
	placeholderbankcode: `Sila masukkan kod bank`,
	placeholderbankName: `Sila masukkan nama bank`,
	placeholderbankAccount: `Sila masukkan nombor kad bank`,

	//法币记录

	price: `harga`,
	num: `kuantiti`,
	bankName: `bank name`,
	account: `akaun`,
	buy: `Beli`,
	sell: `jual`,
	all: `Semua`,
	processing: `Memproses`,
	//法币买币

	onlineService: `Servis Pelanggan Dalam Talian`,
	//法币卖币账户

	collectionAccount: `Akaun resit`,
	addCollection: `Tambah kaedah pengumpulan`,
	showModal1: `Adakah anda pasti untuk memadam`,
	cancelText: `Batalkan`,
	//法币卖币

	salesQuantity: `Kuantiti jualan`,
	univalence: `Harga rujukan`,
	closed: `Penjualan syiling telah ditutup`,
	your: `Akaun resit anda`,
	bankAccount: `nombor akaun bank`,
	name: `Nama`,
	// 账户详情

	total: `Jumlah`,
	frozen: `Bekukan`,
	//home左侧导航窗

	homloginAndRegister: `login/register`,
	rechargeMoney: `Deposit syiling`,
	withdrawCoins: `Pengeluaran`,
	customer: `khidmat Pelanggan`,
	identityVerification: `Pengesahan Identiti`,
	withdrawalAddress: `withdrawal address`,
	paymentMethodInFiatCurrency: `Kaedah kutipan wang gemuk`,
	help: `Pusat Bantuan`,
	pricing: `Kaedah Harga`,
	setUp: `Setup`,
	USD: `USD`,
	//个人信息

	personal: `Maklumat Peribadi`,
	headPortrait: `Portret Kepala`,
	nickname: `nama gelaran`,
	bindMailbox: `Bind mailbox`,
	//邮箱设置

	mailboxSettings: `Tetapan Peti Mel`,
	oldEmail: `old email account`,
	placeholderoldEmail: `Sila masukkan akaun e- mel lama`,
	newEmail: `Akaun emel baru`,
	placeholdernewEmail: `New email account`,
	//身份认证

	certification: `pengesahihan`,
	noCcertification: `Pergi ke pengesahihan nama-sebenar`,
	quota: `Had penarikan`,
	count: `Bilangan penarikan`,
	everyday: `Setiap hari`,
	cumulative: `jumlah kumulatif`,
	unauthorized: `tidak diperakui`,
	audit: `Tidak disemak`,
	attestation: `Pensijilan umum`,
	hand: `Pensijilan lanjutan`,
	auditFailed: `Audit gagal `,

	//实名认证

	country: `negara`,
	placeholdercountry: `Sila pilih negara`,
	placeholdername: `Sila masukkan nama`,
	documentType: `Jenis ID`,
	placeholderdocumentType: `Sila pilih jenis sijil`,
	identificationNumber: `Nombor ID`,
	placeholderidentificationNumber: `Sila masukkan nombor ID`,
	next: `Next `,
	IDcard: `ID card`,
	passport: `pasport`,

	//实名认证照片

	photo1: `Sila muat naik foto depan dokumen`,
	photo2: `Sila muat naik foto di bahagian belakang dokumen`,
	photo3: `Sila muat naik foto sijil tangan`,
	Uploading: `Uploading....`,
	//提币地址

	addWalletAddress: `Tambah alamat dompet`,
	//添加钱包地址

	address: `alamat`,
	placeholderAddress: `Sila masukkan alamat`,
	//帮助中心

	welcome: `Selamat datang ke pusat bantuan`,
	commonProblem: `Pertanyaan sering ditanyakan`,
	tutorial: `Tutorial Deposit`,
	description: `masa depan`,
	accountProblem: `Masalah Akaun`,
	accountSettings: `Bagaimana untuk mendaftar`,
	certified: `Pengesahihan identiti`,
	totutorial: `Bagaimana jika saya tidak menerima deposit?`,
	todescription: `Apa itu masa depan？`,
	toaccountProblem: `Perubahan/reset kata laluan`,
	toaccountSettings: `Bagaimana untuk mendaftar akaun? `,
	tocertified: `Pengesahan nama sebenar`,
	tutorialText: `<div><p>Hello! Pemindahan aset rantai blok dibahagi ke tiga langkah: cadangan - pengesahan blok - masukan<br><br>Langkah 1: Pemindahan berjaya menunjukkan bahawa platform atau dompet yang mana wang ditarik telah dilakukan operasi pemindahan<br><br></p><p>Langkah 2: Sahkan blok yang sepadan. Kemegahan rantai blok, lambat, dll. akan menyebabkan wang digital anda menunda kesempurnaan semua pengesahan</ p></div>`,
	descriptionText: `<div><p>Option is a financial instrument that can provide users with the price exposure of underlying assets and limit their downside risk exposure. Ia menyediakan pembeli peluang untuk membeli pilihan panjang (panggilan) atau pendek (pilihan letak) BTC atau ETH<br><br>Novice kepada kontrak pilihan boleh memahami bahawa<br><br>• Letakkan pilihan mewakili hak (bukan kewajiban) untuk menjual aset pada harga yang ditentukan sebelumnya dalam tempoh tertentu. Ini memberikan and a eksposisi "pendek", sama seperti harga aset di bawah turun, anda menyimpan hak untuk menjual aset pada harga yang lebih tinggi (dipanggil harga latihan) dan membuat keuntungan<br><br></p><p>• Pilihan panggilan mewakili hak (bukan kewajiban) pemegang untuk membeli aset pada harga yang ditentukan sebelumnya dalam tempoh tertentu. Ini memberikan and a eksposisi "panjang", sama seperti harga aset di bawah naik, anda memelihara hak untuk membeli aset pada harga yang lebih rendah dan membuat keuntungan</ p></div>`,
	accountProblemText: `<div><p>
1. Klik lokasi akaun anda di sudut kiri atas halaman rumah, dan klik "Tetapan" - "Ubah Katalaluan".<br><br>
2. Masukkan kata laluan lama, kemudian masukkan kata laluan baru untuk mengesahkan kata laluan baru<br><br>
3. Klik "Tetap Semula Katalaluan"<br><br>
4. For the security of users' funds, it is generally necessary to wait 24 hours after resetting or changing the password before withdrawing the currency<br><br>
</p></div>`,
	accountSettingsText: `<div><p>Sila guna nombor telefon bimbit atau e-mel anda untuk mendapatkan kod pengesahan dan daftar akaun anda. Jika anda tidak menerima kod pengesahan, sila klik untuk semak spam e-mel atau hubungi perkhidmatan pelanggan</ p></div>`,
	certifiedText: `<div><p>1. Klik lokasi akaun anda di sudut kiri atas halaman rumah dan klik "Pengesahihan Identiti".<br><br>2. Masukkan nombor sijil+name and click Authentication<br><br>3. Tunggu sabar untuk persetujuan. Secara umum, audit boleh selesai dalam 24 jam</ p></div>`,

	//设置

	changeLoginPassword: `Ubahsuai kata laluan log masuk`,
	setWithdrawalPassword: `Set withdrawal password`,
	noSetWithdrawalPassword: `Pergi untuk tetapkan kata laluan pembayaran`,
	preference: `Keutamaan warna`,
	about: `Tentang kita`,
	signOut: `Log out`,
	//修改登录密码

	oldPassword: `Old password`,


	//修改支付密码

	changePayPassword: `Ubah kata laluan pembayaran`,
	//颜色偏好

	upRed: `Merah naik/hijau turun`,
	upGreen: `Merah ke bawah/hijau ke atas`,
	//关于我们

	platformIntroduction: `Platform introduction`,
	privacyPolicy: `Polisi Privasi`,
	userAgreement: `Perjanjian Pengguna`,
	officialWebsite: `laman web rasmi`,
	//平台简介

	platformIntroductionText: `Platform ini adalah platform perdagangan aset digital terkemuka di dunia. Ia terus berusaha untuk meningkatkan ciri -ciri keselamatan untuk memastikan keselamatan aset digital pelanggan. Model kami adalah untuk membawa pelanggan dengan nilai yang mampan dan menyediakan perkhidmatan transaksi. Ahli -ahli Pasukan Pengurusan Teras lulus dari universiti -universiti yang ditakrifkan di dunia, dan telah berkhidmat sebagai Montreal Bank of Canada, Pricewater -Miyoro dan lain -lain eksekutif perusahaan Cross -Sorder. Mereka mempunyai pengalaman operasi yang kaya dalam industri kewangan dan pertukaran aset digital. Di atas terbuka Perjanjian Sumber, menurut prinsip menggabungkan amalan praktikal realiti, kami memecahkan sistem tertutup blockchain asal.
'Pada masa yang sama, menggabungkan kecerdasan buatan dengan teknologi blockchain, kami berharap dapat mewujudkan sistem operasi blok blok kelas yang benar -benar tersedia secara komersil. . `,

	//隐私政策
	privacyPolicyText: `
<p>
Platform ini. ("Syarikat" di bawah) adalah sebuah syarikat yang didaftarkan di Switzerland selaras dengan undang -undang Switzerland yang berkaitan. Syarikat ini mengendalikan aplikasi global platform ini (selepas ini disebut sebagai "platform ini" atau "platform"). dan perkhidmatan yang berkaitan (selepas ini dirujuk sebagai "perkhidmatan ini" atau "perkhidmatan"). Untuk menyatakan kemudahan, syarikat dan platform secara kolektif dirujuk sebagai "kami" atau nama -nama orang pertama yang lain dalam perjanjian ini. Kami secara kolektif dirujuk sebagai "kedua belah pihak", dan kami atau anda dipanggil "satu pihak "Sendiri.
<br>
Kami memahami dan menghormati maklumat peribadi anda kepada anda. Kami akan mengambil langkah -langkah perlindungan keselamatan yang sesuai mengikut undang -undang dan peraturan untuk melindungi keselamatan maklumat peribadi anda. Memandangkan ini, "Dasar Privasi" (selepas ini disebut sebagai "dasar ini"
/Dasar privasi ben ") dan ingatkan anda:
<br>
Dasar ini sesuai untuk semua produk dan perkhidmatan yang kami sediakan. Sekiranya kami menubuhkan dasar privasi kepada produk atau perkhidmatan yang anda berikan, produk atau perkhidmatan terpakai kepada Dasar Privasi yang ditubuhkan secara berasingan; jika produk atau perkhidmatan kami tidak menubuhkan dasar privasi secara berasingan, dasar ini terpakai.
<br>
Apa yang perlu dijelaskan secara khusus ialah dasar ini tidak terpakai kepada perkhidmatan yang anda berikan dalam arahan ketiga yang lain, dan arahan ketiga yang anda berikan untuk dasar privasi yang akan anda jelaskan kepada anda.
<br>
Sebelum menggunakan pelbagai produk atau perkhidmatan kami, sila baca dan fahami dasar ini dengan teliti, terutamanya klausa yang dikenal pasti oleh threading baris. Anda harus memberi tumpuan kepada membaca dan mula menggunakannya selepas mengesahkan dan persetujuan. Jika anda mempunyai sebarang pertanyaan, pendapat atau cadangan mengenai kandungan dasar ini, anda boleh menghubungi kami melalui pelbagai maklumat hubungan yang disediakan oleh pegawai kami. Jika anda tidak bersetuju dengan sebarang peruntukan dalam dasar ini, anda harus segera berhenti melawat platform ini.
<br>
<strong> Definisi bahagian pertama </strong>
<br>
Maklumat Peribadi: Merujuk kepada pelbagai maklumat yang boleh direkodkan sendiri atau dengan maklumat lain dengan maklumat lain dalam maklumat berasingan atau lain -lain.
<br>
Maklumat Sensitif Peribadi: Merujuk kepada maklumat peribadi termasuk dokumen identiti, maklumat biometrik peribadi, nombor akaun bank, maklumat harta, maklumat perdagangan, maklumat transaksi, di bawah 14 tahun maklumat kanak -kanak, dan lain -lain. Maklumat sensitif peribadi dibuat dengan pengenalan yang signifikan).
<br>
Penghapusan Maklumat Peribadi: Merujuk kepada penyingkiran maklumat peribadi dalam sistem yang terlibat dalam fungsi perniagaan harian, supaya ia membuat mereka tidak diambil dan boleh diakses.
<br>
Kanak -kanak: merujuk kepada kanak -kanak di bawah umur 14 tahun.
<br>
<strong> Dasar Privasi Bahagian II </strong>
<br>
Dasar Privasi ini akan membantu anda memahami perkara berikut:
<br>
1. Bagaimana kami mengumpulkan dan menggunakan maklumat anda
<br>
2. Bagaimana kita menggunakan kuki dan teknologi yang serupa
<br>
3. Bagaimana kami dapat berkongsi, memindahkan, dan mendedahkan maklumat anda secara terbuka
<br>
4. Bagaimana kami melindungi maklumat anda
<br>
5. Bagaimana anda menguruskan maklumat anda
<br>
6. Bagaimana kita menangani maklumat anak -anak di bawah umur
<br>
7. Cara Mengemas kini Dasar Privasi ini
<br>
<strong> 1. Bagaimana kami mengumpulkan dan menggunakan maklumat anda </strong>
<br>
Apabila anda menggunakan produk dan/atau perkhidmatan kami, maklumat peribadi yang kami perlukan/mungkin perlu dikumpulkan dan digunakan termasuk yang berikut: yang berikut:
<br>
1. Untuk memberi anda fungsi asas untuk memberi anda produk dan/atau perkhidmatan, anda mesti memberi kuasa maklumat yang diperlukan dan digunakan. Jika anda enggan memberikan maklumat yang sepadan, anda tidak akan dapat menggunakan produk dan/atau perkhidmatan kami secara normal;
<br>
2. Untuk memberi anda fungsi tambahan untuk menyediakan produk dan/atau perkhidmatan kami, anda boleh memilih untuk memberi kuasa maklumat yang kami kumpulkan dan gunakan. Jika anda enggan memberikannya, anda tidak akan dapat menggunakan fungsi tambahan yang berkaitan secara normal atau tidak dapat mencapai kesan fungsional yang kami ingin capai, tetapi ia tidak akan menjejaskan fungsi asas anda yang menggunakan produk dan/atau perkhidmatan kami secara normal.
<br>
Anda faham dan setuju:
<br>
1. Kami komited untuk mewujudkan pelbagai produk dan perkhidmatan untuk memenuhi keperluan anda. Kerana terdapat banyak jenis dan perkhidmatan yang kami berikan kepada anda, dan terdapat perbezaan dalam skop produk/perkhidmatan tertentu yang dipilih oleh pengguna yang berbeza. Oleh itu, jenis dan skop fungsi asas/tambahan dan maklumat peribadi dan skop pengumpulan akan berbeza. Fungsi produk/perkhidmatan tertentu hendaklah diguna pakai;
<br>
2. Untuk membawa anda pengalaman produk dan perkhidmatan yang lebih baik, kami terus berusaha keras untuk meningkatkan teknologi kami, dan kami boleh melancarkan fungsi baru atau dioptimumkan dari semasa ke semasa. Kami mungkin perlu mengumpul, menggunakan maklumat peribadi baru atau mengubah peribadi tujuan penggunaan maklumat atau kaedah. Sehubungan ini, kami akan menerangkan kepada anda tujuan pengumpulan, skop dan penggunaan maklumat yang sepadan dengan mengemas kini polisi ini, tetingkap pop -up, arahan halaman, dan lain -lain, dan memberi anda persetujuan pemilihan sendiri. Kumpulkan dan gunakan. Dalam proses ini, jika anda mempunyai sebarang pertanyaan, pendapat atau cadangan, anda boleh menghubungi kami melalui pelbagai maklumat hubungan yang disediakan oleh platform ini, dan kami akan menjawabnya secepat mungkin.
<br>
Kami akan mengumpulkan dan menggunakan maklumat peribadi anda untuk merealisasikan fungsi berikut dasar ini:
<br>
(1) membantu anda mendaftar dan memberi anda perkhidmatan yang disediakan oleh platform ini;
<br>
1. Perkhidmatan Pendaftaran
<br>
Kami menyediakan anda dengan perkhidmatan keahlian asas melalui akaun platform ini. Untuk mendaftar sebagai ahli dan menggunakan perkhidmatan keahlian kami, anda perlu mengisi dan memberikan maklumat berikut apabila memohon pendaftaran:
<br>
(1) Maklumat identiti. Maklumat ini dapat membantu kami mengesahkan sama ada anda layak mendaftar sebagai ahli platform, termasuk tetapi tidak terhad kepada nama anda, alamat kediaman anda, sijil lain yang dikeluarkan oleh negara anda atau kerajaan dengan sijil yang berbeza, dan apa yang melibatkan maklumat identiti anda dan terlibat . Nombor dan maklumat lain yang dapat membantu kami mengesahkan identiti anda (selepas ini disebut sebagai "Maklumat Identiti"
Ke. Maklumat identiti ini berbeza mengikut sama ada anda pengguna individu atau pengguna institusi. Menurut undang -undang dan peraturan -peraturan bidang kuasa yang berbeza, kami mungkin mempunyai maklumat yang berbeza yang dikumpulkan oleh pengguna dari negara atau wilayah yang berlainan. Maklumat dan data berikut digunakan sebagai contoh arahan:
<br>
Pengguna Individu: Kewarganegaraan, Nama Penuh (termasuk Nama dan Nama Bahasa Tempatan), Nombor ID, Alamat E -mel, Nombor Telefon, Nombor Keselamatan Sosial ("SSN"), nombor pasport atau nombor ID yang dikeluarkan oleh mana -mana kerajaan, tarikh lahir, identiti sijil (seperti pasport, lesen memandu, atau pensijilan kerajaan yang dikeluarkan oleh kerajaan).
<br>
Pengguna institusi: nama undang -undang syarikat (termasuk nama undang -undang bahasa setempat), maklumat pendaftaran, nombor telefon perniagaan, wakil yang diberi kuasa dan maklumat peribadi pengguna yang diberi kuasa, lokasi perniagaan utama, maklumat peribadi semua pemilik benefisiari), identiti dokumen bukti identiti pemegang saham/manfaat pemilik (pasport atau kad ID yang dikeluarkan oleh kerajaan), rangka kerja syarikat, penubuhan syarikat dokumen berkaitan, resolusi lembaga, pembiayaan untuk sumber dana, penerangan kawalan risiko dan pematuhan, dan maklumat atau dokumen lain yang diperlukan oleh platform.
<br>
(2) maklumat perkhidmatan. Maklumat ini membantu kami menghubungi anda dan lancar memberikan anda model perkhidmatan transaksi aset digital yang berbeza, termasuk tetapi tidak terhad kepada maklumat identiti peribadi anda, maklumat hubungan, maklumat transaksi, dan maklumat kad debit anda dan/atau maklumat akaun lain (berikut adalah Dirujuk sebagai "Maklumat Perkhidmatan"
Ke. Pada masa yang sama, sila faham bahawa perkhidmatan yang kami berikan kepada anda sentiasa dikemas kini dan dibangunkan. Jika anda memilih untuk menggunakan perkhidmatan lain yang belum diliputi dalam keterangan yang disebutkan di atas, berdasarkan perkhidmatan yang kami perlukan untuk mengumpulkan maklumat tambahan anda, kami akan menerangkan skop pengumpulan maklumat melalui halaman petikan, proses interaksi, persetujuan, dan sebagainya dengan tujuan dan dapatkan persetujuan anda.
<br>
Jika anda hanya perlu menggunakan perkhidmatan semak imbas, anda tidak perlu mendaftar sebagai ahli kami dan memberikan maklumat di atas.
<br>
2. Perkhidmatan Pendaftaran Lain
<br>
Pengesahan Nama Sebenar: Apabila anda mendaftar dan log masuk, anda perlu memasukkan "pusat peribadi" untuk menyelesaikan pengesahan sebenar dalam pengesahan identiti anda. Anda mesti memberikan nama sebenar, nombor ID atau nombor pasport anda ke platform semasa Penggunaan Pengesahan Nama Sebenar.
<br>
Pensijilan Lanjutan: Apabila jumlah urus niaga anda di platform ini melebihi had tertentu, platform akan memerlukan anda membuat pensijilan lanjutan untuk mengekalkan keselamatan aset anda. Sebagai tambahan kepada maklumat pengesahan sebenar, anda mengiktiraf platform untuk pensijilan lanjutan "Pengiktirafan Wajah". Pengiktirafan muka akan melibatkan koleksi platform aliran video yang berkaitan atau imej muka platform.
<br>
Paparan maklumat akaun: Sekiranya anda sudah mempunyai akaun platform ini, kami mungkin memaparkan maklumat peribadi anda di atas dalam perkhidmatan (Pengesahan Nama Sebenar hanya menunjukkan sama ada pensijilan diluluskan), dan apa yang anda laksanakan dalam produk dan perkhidmatan yang berkaitan dengan akaun Platform Operasi, termasuk memaparkan data peribadi dan pesanan transaksi anda melalui akaun platform ini. Kami akan menghormati pilihan tetapan akaun platform anda.
<br>
(2) Perkhidmatan Pengurusan Keselamatan dan Perkhidmatan Tekan Perkhidmatan
<br>
Apabila anda menggunakan perkhidmatan yang disediakan oleh platform ini atau mengakses platform ini, platform ini perlu secara automatik menerima dan merakam maklumat pelayar web anda untuk memastikan keselamatan transaksi dan keselamatan perkhidmatan anda dan operasi stabil. Maklumat peralatan seperti model dan simbol pengenalan peralatan lain , Alamat IP dan rekod di laman web yang anda minta untuk mengakses, kawasan, persekitaran rangkaian, maklumat cap jari peranti, maklumat log perkhidmatan, maklumat perisian, maklumat lokasi, dll.
<br>
Sila ambil perhatian bahawa maklumat peranti berasingan adalah maklumat yang tidak dapat mengenal pasti identiti orang semulajadi tertentu. Sekiranya kita menggunakan maklumat bukan peribadi jenis ini dengan maklumat lain untuk mengenal pasti orang semula jadi tertentu, atau menggunakannya dengan maklumat peribadi, semasa gabungan penggunaan, maklumat bukan peribadi tersebut akan dianggap sebagai maklumat peribadi, kecuali kebenaran anda Dapatkan kebenaran anda atau sebagai tambahan kepada peruntukan undang -undang dan peraturan lain, kami akan tanpa nama dan mengenal pasti maklumat tersebut.
<br>
Untuk memberi anda lebih mudah dan lebih banyak maklumat paparan dan tolak perkhidmatan yang memenuhi keperluan peribadi anda, kami mungkin berdasarkan maklumat peranti anda dan maklumat pelayaran platform atau klien anda, mengeluarkan pilihan anda, dan label berdasarkan label ciri. Output Potret potret tidak langsung digunakan untuk memaparkan, menolak maklumat dan kemungkinan iklan komersial. Jika anda tidak bersetuju untuk menerima maklumat push tersebut atau menarik balik persetujuan anda untuk mengumpul maklumat peribadi, anda boleh menghubungi kami mengikut maklumat hubungan yang disediakan oleh Polisi ini.
<br>
Kami berusaha untuk memastikan pengalaman melayari anda. Jika anda tidak mahu menerima iklan komersial yang kami hantar kepada anda, anda boleh membalas atau menutup pengeluaran atau cara lain yang kami berikan dengan segera.
<br>
Di samping itu, kami akan menggunakan maklumat di atas untuk terus memperbaiki dan mengoptimumkan fungsi di atas.
<br>
(3) Rekod perdagangan dan perkhidmatan pertanyaan
<br>
Data yang berkaitan yang dikumpulkan di platform ini di platform ini, termasuk tetapi tidak terhad kepada rekod perdagangan. Jika anda perlu menanyakan rekod transaksi pesanan anda, anda boleh menyemak butiran transaksi peribadi anda dalam platform "Pengurusan Pesanan", termasuk: nama samaran pihak perdagangan, masa pesanan, nombor pesanan, maklumat transaksi, jenis aset digital dan kuantiti.
<br>
(4) perkhidmatan pelanggan dan pengendalian pertikaian
<br>
Apabila anda menghubungi kami atau mencadangkan permohonan dijual selepas jualan, pengendalian pertikaian pertikaian, untuk memastikan keselamatan akaun dan sistem anda, kami memerlukan anda untuk memberikan maklumat peribadi yang diperlukan untuk mengesahkan status keahlian anda.
<br>
Untuk memudahkan anda, membantu anda menyelesaikan masalah masalah atau isu yang berkaitan dengan rekod secepat mungkin, kami boleh menyimpan rekod komunikasi anda dan kandungan yang berkaitan dengan kami (termasuk maklumat akaun, maklumat pesanan, dan fakta lain yang anda berikan maklumat, atau maklumat hubungan yang anda tinggalkan), jika anda berunding, mengadu atau memberikan cadangan untuk pesanan tertentu, kami akan menggunakan maklumat akaun dan maklumat pesanan anda.
<br>
Untuk menyediakan keperluan perkhidmatan yang munasabah dan meningkatkan kualiti perkhidmatan, maklumat lain yang mungkin kami gunakan, termasuk maklumat yang relevan yang anda berikan apabila anda menghubungi perkhidmatan pelanggan, dan soal selidik membalas maklumat yang dihantar kepada kami semasa tinjauan soal selidik.
<br>
(5) yang lain
<br>
1. Jika maklumat yang anda berikan mengandungi maklumat peribadi pengguna lain, anda perlu memastikan bahawa anda telah memperoleh kebenaran undang -undang sebelum memberikan maklumat peribadi ini kepada platform ini. Sekiranya anda melibatkan maklumat peribadi kanak -kanak, anda perlu mendapatkan persetujuan penjaga kanak -kanak sebelum pembebasan, dan Guardian berhak menghubungi kami melalui pendekatan Perkara 9 dasar ini dalam situasi yang disebutkan di atas untuk meminta lebih tepat atau memadamkan kandungan yang terlibat dalam maklumat peribadi kanak -kanak.
<br>
2. Jika kami menggunakan maklumat bahawa maklumat tidak dinyatakan dalam dasar ini, atau maklumat yang dikumpulkan berdasarkan matlamat tertentu untuk tujuan lain, atau kami mengambil inisiatif untuk mendapatkan maklumat peribadi anda dari pihak ketiga, kami akan membawa anda terlebih dahulu Setuju.
<br>
Sekiranya kami memperoleh maklumat anda secara tidak langsung dari pihak ketiga, kami akan meminta pihak ketiga dengan jelas mengumpulkan maklumat peribadi secara bertulis sebelum mengutip secara bertulis, dan memberitahu anda kandungan maklumat yang dikongsi, dan melibatkan maklumat sensitif yang anda perlukan untuk disahkan Dengan pengesahan yang jelas sebelum memberi kami, yang memerlukan pihak ketiga untuk melakukan komitmen terhadap kesahihan dan pematuhan sumber maklumat peribadi. Jika pihak ketiga melanggar tingkah laku, kami akan meminta pihak lain untuk menanggung liabiliti undang -undang yang sepadan; Pada masa yang sama kami akan menjalankan tetulang keselamatan pada maklumat peribadi (termasuk pelaporan maklumat sensitif, penyimpanan penyulitan maklumat sensitif, kawalan kebenaran akses, dll.). Kami tidak akan menggunakan maklumat peribadi yang diperolehi oleh maklumat peribadi kami sendiri yang tidak lebih rendah daripada maklumat dan langkah peribadi kami.
<br>
3. Pengecualian mendapatkan kebenaran kebenaran
<br>
Anda memahami dan bersetuju sepenuhnya. Di bawah keadaan berikut, kami mengumpul dan menggunakan maklumat peribadi anda tanpa kebenaran kebenaran anda, dan kami mungkin tidak menjawab permintaan pembetulan/pengubahsuaian, penghapusan, pembatalan, penarikan balik persetujuan, dan mendapatkan maklumat.
<br>
(1) ia berkaitan dengan keselamatan negara dan keselamatan pertahanan negara;
<br>
(2) berkaitan dengan keselamatan awam, kesihatan awam, dan kepentingan awam utama;
<br>
(3) Ia berkaitan dengan penguatkuasaan undang -undang kehakiman atau pentadbiran siasatan jenayah, pendakwaan, perbicaraan, dan penghakiman.
<br>
(4) untuk hak dan kepentingan yang sah seperti mengekalkan individu atau individu lain, tetapi sukar untuk mendapatkan persetujuan saya;
<br>
(5) maklumat peribadi yang anda nyatakan kepada orang ramai sendiri;
<br/>
(6) Kumpulkan maklumat peribadi dari maklumat awam undang -undang, seperti laporan berita undang -undang, pendedahan maklumat kerajaan dan saluran lain.
<br>
(7) Apa yang perlu menandatangani dan melaksanakan perjanjian yang berkaitan atau dokumen bertulis lain dengan anda;
<br>
(8) operasi yang diperlukan dan stabil produk dan/atau perkhidmatan yang disediakan oleh penyelenggaraan, seperti penemuan, pelupusan produk dan/atau kegagalan perkhidmatan;
<br>
(9) Adalah perlu untuk laporan berita undang -undang;
<br>
(10) institusi penyelidikan akademik adalah perlu untuk menjalankan statistik atau penyelidikan akademik berdasarkan kepentingan awam, dan memberikan hasil penyelidikan akademik atau penerangan untuk mengenal pasti maklumat peribadi yang terkandung dalam hasilnya;
<br>
(11) Keadaan lain yang ditetapkan dalam undang -undang dan peraturan.
<br>
Harap maklum bahawa menurut undang -undang yang berkenaan, jika kita mengambil langkah -langkah teknikal dan langkah -langkah lain yang diperlukan untuk mengambil maklumat peribadi, supaya penerima data tidak dapat mengenali semula individu tertentu dan tidak dapat pulih, atau kita boleh mengkaji pengumpulan maklumat, analisis statistik dan Ramalan, untuk meningkatkan kandungan dan susun atur platform ini, memberikan sokongan produk atau perkhidmatan untuk keputusan perniagaan, dan meningkatkan produk dan perkhidmatan kami (termasuk menggunakan data tanpa nama untuk pembelajaran mesin atau latihan algoritma model), maka jenis pemprosesan ini penggunaan data Selepas data tidak perlu memberitahu anda dan mendapatkan persetujuan anda.
<br>
4. Jika kami berhenti mengendalikan produk atau perkhidmatan platform ini, kami akan berhenti mengumpul aktiviti maklumat peribadi anda pada waktunya. Notis operasi berhenti akan dimaklumkan dalam bentuk penghantaran atau pengumuman, dan kami berkaitan dengan apa yang kami pegang. Hentikan maklumat peribadi yang berkaitan dengan perniagaan dipadam atau tidak dikenali.
<br>
<strong> 2. Bagaimana kita menggunakan kuki </strong>
<br>
Jika penyemak imbas atau penyemak imbas anda membolehkan, anda boleh mengubah suai tahap penerimaan kuki atau menolak kuki kami. Untuk perincian, lihat
TentangCookies.org. Tetapi jika anda melakukan ini, dalam beberapa kes, anda boleh menjejaskan akses keselamatan anda ke platform kami, dan anda mungkin perlu menukar tetapan pengguna apabila anda melawat platform kami. Anda faham dan setuju:
<br>
1. Apabila anda melawat platform kami, kami menggunakan statistik Google untuk merakam prestasi kami dan menyemak kesan pengiklanan dalam talian melalui kuki.
Cookie adalah sedikit data yang dihantar ke penyemak imbas anda dan disimpan pada pemacu cakera keras komputer anda. Hanya apabila anda menggunakan komputer anda untuk memasuki platform kami, boleh dikirimkan ke cakera keras komputer anda.
<br>
2. Kuki sering digunakan untuk merakam tabiat dan keutamaan pelawat untuk melayari pelbagai projek di platform kami. Data yang dikumpulkan oleh kuki adalah statistik kolektif yang tidak diketahui dan tiada maklumat peribadi.
<br>
3. Kuki tidak boleh digunakan untuk mendapatkan data pada cakera keras anda, alamat e -mel anda, dan data peribadi anda, yang boleh menjadikan sistem platform atau penyedia perkhidmatan ini mengenali penyemak imbas dan maklumat penangkapan dan memori anda. Kebanyakan penyemak imbas adalah pratetap untuk menerima kuki. Anda boleh memilih untuk menetapkan penyemak imbas anda untuk tidak menerima kuki, atau memberitahu anda jika kuki dipasang. tetapi,
Jika anda menetapkan untuk melarang kuki, anda mungkin tidak dapat memulakan atau menggunakan beberapa fungsi platform kami.
<br>
<strong> 3. Bagaimana kami berkongsi, memindahkan, mendedahkan maklumat anda secara terbuka </strong>
<br>
(1) berkongsi
<br>
Kami tidak akan berkongsi maklumat peribadi anda dengan syarikat, organisasi dan individu selain penyedia perkhidmatan platform ini, kecuali situasi berikut:
<br>
1. Berkongsi dalam situasi berkanun: Kami boleh berkongsi maklumat peribadi anda kepada dunia luar mengikut kehendak undang -undang dan peraturan, tindakan undang -undang, dan pertikaian, atau mengikut kehendak organ pentadbiran dan kehakiman mengikut kehendak undang -undang.
<br>
2. Dikongsi dengan persetujuan yang jelas: Setelah mendapat persetujuan yang jelas, kami akan berkongsi maklumat peribadi anda dengan pihak lain.
<br>
3. Kongsi di bawah pilihan aktif anda: Kami akan berkongsi maklumat yang diperlukan yang berkaitan dengan maklumat transaksi dalam maklumat pesanan anda berdasarkan pilihan anda untuk berkongsi transaksi aset digital untuk mencapai urus niaga dan selepas perkhidmatan perkhidmatan anda.
<br>
4. Kongsi dengan rakan kongsi yang diberi kuasa: pihak berkaitan kami, membantu kami menjalankan platform kami, menjalankan perniagaan, atau memberi anda pihak ketiga yang dipercayai yang memberikan anda perkhidmatan. Maklumat itu sesuai. Ini adalah perintah yang mematuhi undang -undang, peraturan , peraturan dan peraturan atau dari mahkamah atau pihak berkuasa yang kompeten, dan melaksanakan strategi platform kami. Hak, harta atau keselamatan.
<br>
(2) pemindahan
<br>
Kami tidak akan memindahkan maklumat peribadi anda kepada mana -mana syarikat, organisasi dan individu, kecuali situasi berikut: Kecuali:
<br>
1. Dalam hal mendapatkan persetujuan yang jelas: Setelah mendapat persetujuan yang jelas, kami akan memindahkan maklumat peribadi anda kepada pihak lain;
<br>
2. Dalam hal penggabungan, pengambilalihan atau pembubaran kebankrapan di platform ini, atau kes -kes lain yang melibatkan penggabungan, pengambilalihan atau pembubaran kebankrapan, jika anda melibatkan pemindahan maklumat peribadi, kami akan meminta syarikat dan organisasi baru yang memegang maklumat peribadi anda untuk terus tertakluk kepada buku ini. Kekangan dasar, jika tidak, kami akan meminta syarikat, organisasi dan individu untuk mendamaikan persetujuan kebenaran anda.
<br>
(3) pendedahan awam
<br>
Kami hanya akan mendedahkan maklumat peribadi anda secara terbuka dalam keadaan berikut:
<br>
1. Dapatkan persetujuan anda yang jelas atau berdasarkan pilihan aktif anda, kami mungkin mendedahkan maklumat peribadi anda secara terbuka;
<br>
2. Jika kami menentukan bahawa anda telah melanggar undang -undang dan peraturan atau serius melanggar perjanjian dan peraturan yang berkaitan Langkah -langkah yang telah diambil oleh platform ini kepada anda.
<br>
(4) Perkongsian, pemindahan, dan pendedahan awam pendedahan maklumat peribadi.
<br>
Dalam keadaan berikut, perkongsian, pemindahan, dan mendedahkan maklumat peribadi anda secara terbuka tanpa mendapat kebenaran kebenaran anda terlebih dahulu:
<br>
1. Ia berkaitan dengan keselamatan negara dan keselamatan pertahanan negara;
<br>
2. Berkaitan dengan keselamatan awam, kesihatan awam, dan kepentingan awam utama;
<br>
3. Ia berkaitan dengan penguatkuasaan undang -undang kehakiman atau pentadbiran siasatan jenayah, pendakwaan, perbicaraan, dan penghakiman.
<br>
4. Untuk hak dan kepentingan yang sah seperti mengekalkan individu atau individu lain, tetapi sukar untuk mendapatkan persetujuan saya;
<br>
5. Maklumat peribadi yang anda nyatakan kepada orang ramai sendiri;
<br>
6. Kumpulkan maklumat peribadi dari maklumat awam undang -undang, seperti laporan berita undang -undang dan pendedahan maklumat kerajaan.
<br>
Harap maklum bahawa menurut undang -undang yang berkenaan, jika kita mengambil langkah -langkah teknikal dan langkah -langkah lain yang diperlukan untuk mengambil maklumat peribadi, supaya penerima data tidak dapat mengenali semula individu tertentu dan tidak dapat pulih, maka perkongsian, pemindahan, dan pendedahan awam setelah Pemprosesan tidak perlu didedahkan tanpa pendedahan. Beritahu anda dan dapatkan persetujuan anda.
<br>
<strong> 4. Bagaimana kami melindungi maklumat anda </strong>
<br>
1. Kami melaksanakan langkah fizikal, elektronik, pengurusan dan teknikal yang betul untuk melindungi dan melindungi data peribadi anda. Kami berusaha sebaik mungkin untuk memastikan bahawa sebarang maklumat peribadi yang dikumpulkan oleh platform kami dielakkan oleh mana -mana pihak ketiga yang tidak ada kaitan dengan kami. Langkah -langkah keselamatan yang kami ambil termasuk, tetapi tidak terhad kepada:
<br>
(1) Langkah Fizikal: Rekod dengan data peribadi anda akan disimpan di tempat terkunci.
<br>
(2) Langkah -langkah elektronik: Data komputer dengan data peribadi anda akan disimpan pada sistem komputer dan media penyimpanan yang log masuk dengan ketat.
<br>
(3) Langkah Pengurusan: Kami telah menubuhkan jabatan yang relevan dengan perlindungan keselamatan maklumat pengguna di dalam, dan telah menetapkan kawalan dalaman yang relevan. Prinsip kebenaran yang ketat untuk kakitangan yang boleh menghubungi anda.
Pekerja -pekerja ini perlu mematuhi kod kerahsiaan dalaman kami. Di samping itu, kami terus mengukuhkan advokasi undang -undang dan peraturan yang berkaitan, piawaian keselamatan privasi dan kesedaran keselamatan latihan kakitangan, dan kerap menganjurkan kakitangan dalaman untuk menjalankan latihan tindak balas kecemasan dan latihan kecemasan, supaya mereka dapat menguasai tugas pekerjaan dan strategi pelupusan kecemasan dan peraturan
<br>
(4) Langkah -langkah teknikal: Teknologi penyulitan seperti penyulitan lapisan soket selamat boleh digunakan untuk mengangkut data peribadi anda.
<br>
(5) Langkah -langkah keselamatan: Untuk memastikan keselamatan maklumat anda, kami komited untuk menggunakan pelbagai teknologi keselamatan sejagat dan sistem pengurusan sokongan semasa untuk meminimumkan maklumat anda dibocorkan, rosak, disalahgunakan, akses tidak dibenarkan, pendedahan pendedahan yang tidak dibenarkan dan risiko perubahan. Sebagai contoh: penghantaran yang disulitkan, penyimpanan penyulitan maklumat, sekatan yang ketat pada pusat data melalui perisian lapisan keselamatan rangkaian (SSL). Apabila menghantar dan menyimpan maklumat sensitif peribadi (termasuk maklumat biometrik peribadi), kami akan menggunakan langkah -langkah keselamatan seperti penyulitan, kawalan kebenaran, pengenalpastian, dan desensitisasi.
<br>
(6) Langkah -langkah lain: Secara kerap mengkaji semula pengumpulan data peribadi, proses penyimpanan dan pemprosesan;
Dan menyekat akses pekerja dan pembekal kami kepada data anda mengikut prinsip yang diperlukan, dan pekerja dan pembekal kami perlu mematuhi kewajipan kerahsiaan kontrak yang ketat. Intipati
<br>
2. Jika anda tahu bahawa terdapat sebarang kelemahan keselamatan di platform kami, sila hubungi kami dengan segera supaya kami dapat mengambil tindakan yang sesuai secepat mungkin.
<br>
3. Walaupun pelaksanaan teknologi dan langkah -langkah keselamatan yang disebutkan di atas, kami tidak dapat menjamin bahawa data data di Internet benar -benar selamat.
Oleh itu, kami tidak dapat menjamin bahawa anda semua selamat bagi kami untuk memberikan maklumat peribadi kami melalui platform kami. Kami akan mengemas kini dan mendedahkan kandungan risiko keselamatan yang berkaitan, laporan penilaian impak keselamatan maklumat peribadi, dan lain -lain. Anda boleh mendapatkannya melalui pengumuman platform ini.
<br>
<strong> 5. Bagaimana anda menguruskan maklumat anda </strong>
<br>
Anda boleh mengakses dan menguruskan maklumat anda melalui cara berikut:
<br>
(1) pertanyaan, betul dan padamkan maklumat anda
<br>
Anda mempunyai hak untuk mendapatkan salinan profil anda mengikut keperluan dan menentukan sama ada maklumat yang kami kendalikan adalah tepat dan yang terkini. Jika data peribadi anda tidak tepat, anda boleh meminta mengemas kini maklumat anda. Anda juga boleh meminta memadam maklumat peribadi anda, tetapi kami boleh menolak permintaan penghapusan anda dalam beberapa kes, seperti keperluan undang -undang atau tujuan undang -undang lain. Mengenai akses data, lebih banyak permintaan yang betul atau memadam, anda boleh menghubungi kami melalui maklumat hubungan dalam Perkara 8.
<br>
Sebagai tindak balas kepada akses data, lebih tepat atau memadam permintaan, kami akan mengesahkan identiti pihak permintaan untuk memastikan bahawa dia mempunyai hak untuk membuat permintaan tersebut dalam undang -undang. Walaupun matlamat kami adalah untuk membalas permintaan ini secara percuma, kami mengekalkan hak untuk mengumpul kos yang munasabah apabila permintaan anda berulang atau berat.
<br>
(2) Tukar skop kebenaran kebenaran anda
<br>
Setiap fungsi perniagaan memerlukan beberapa maklumat peribadi asas untuk diselesaikan (lihat "bahagian pertama" Dasar Privasi ini). Di samping itu, anda boleh menghubungi kami melalui maklumat hubungan dalam Perkara 8 untuk memberi atau mengambil kembali kebenaran kebenaran anda.
<br>
Apabila anda memulihkan persetujuan anda, kami tidak lagi memproses maklumat peribadi yang sepadan. Tetapi keputusan anda untuk memulihkan persetujuan tidak akan menjejaskan pemprosesan maklumat peribadi berdasarkan kebenaran anda.
<br>
(3) Log keluar akaun anda
<br>
Anda boleh menghubungi kami untuk memohon pembatalan akaun anda melalui maklumat hubungan dalam Perkara 8; Setelah anda secara aktif membatalkan akaun, kami akan berhenti menyediakan produk atau perkhidmatan anda, memadam maklumat peribadi anda mengikut keperluan undang -undang yang berkenaan, atau Jadikan mereka membuat rawatan tanpa nama.
<br>
(4) balas permintaan anda di atas
<br>
Untuk memastikan keselamatan, anda mungkin perlu memberikan permintaan bertulis atau membuktikan identiti anda dengan cara lain. Kami mungkin meminta anda mengesahkan identiti anda terlebih dahulu, dan kemudian memproses permintaan anda.
<br>
Kami akan bertindak balas dalam masa 15 hari. Jika anda tidak berpuas hati, anda juga boleh memulakan aduan melalui maklumat hubungan yang kami sediakan.
<br>
Untuk permintaan yang munasabah, kami tidak mengenakan yuran secara prinsip, tetapi kami akan mengenakan bayaran tertentu yang sesuai untuk permintaan berulang dan lebih munasabah. Untuk maklumat yang tidak dikaitkan secara langsung dengan identiti anda, maklumat berulang yang tidak pernah berlaku sebelum ini, atau terlalu banyak cara teknikal (contohnya, anda perlu membangunkan sistem baru atau mengubah amalan semasa dari asas), membawa risiko atau permintaan yang tidak realistik kepada hak sah orang lain dan kepentingan kepada orang lain kita boleh menolak.
<br>
Dalam keadaan berikut, selaras dengan keperluan undang -undang dan peraturan, kami tidak akan dapat menjawab permintaan anda:
<br>
1. Ia berkaitan dengan keselamatan negara dan keselamatan pertahanan negara;
<br>
2. Berkaitan dengan keselamatan awam, kesihatan awam, dan kepentingan awam utama;
<br>
3. Berkaitan dengan penyiasatan jenayah, pendakwaan, percubaan, dan penghakiman pelaksanaan;
<br>
4. Terdapat bukti yang mencukupi bahawa subjek maklumat peribadi mempunyai subjektif yang berniat jahat atau penyalahgunaan hak;
<br>
5. Respons Permintaan anda akan menyebabkan hak dan kepentingan yang sah dari anda atau individu dan organisasi lain yang rosak serius;
<br>
6. Melibatkan rahsia perniagaan.
<br>
<strong> 6. Bagaimana kita memproses maklumat kanak -kanak di bawah umur </strong>
<br>
Platform ini terbuka kepada kanak -kanak. Jika kita mendapati atau mengesyaki bahawa pengguna berusia di bawah 14 tahun, kami akan meminta pengguna menutup akaun mereka dan tidak akan membenarkan pengguna terus menggunakan produk atau perkhidmatan platform. Kami akan memadam data yang relevan secepat mungkin. Jika anda tahu bahawa sesiapa yang berumur di bawah 14 tahun menggunakan perkhidmatan kami, sila maklumkan kepada kami supaya kami dapat mengambil tindakan untuk menghalang mereka daripada mendapatkan produk atau perkhidmatan kami.
<br>
Bagi kanak -kanak di bawah umur 14 tahun tetapi di bawah umur 18 tahun, kami mengharapkan ibu bapa atau penjaga untuk membimbing kanak -kanak di bawah umur untuk menggunakan perkhidmatan kami. Kami akan melindungi kerahsiaan dan keselamatan maklumat anak -anak di bawah umur mengikut peruntukan undang -undang dan peraturan yang berkaitan.
<br>
Sekiranya anda kecil, disarankan agar ibu bapa atau penjaga anda membaca dasar ini dan menggunakan perkhidmatan kami atau memberi kami maklumat kepada kami di bawah persetujuan ibu bapa atau penjaga anda. Bagi kes di mana ibu bapa atau penjaga bersetuju untuk mengumpulkan maklumat anda, kami hanya akan menggunakan atau mendedahkan maklumat ini jika mereka dibenarkan oleh undang -undang, ibu bapa atau penjaga dengan jelas membenarkan atau melindungi hak anda. Jika Guardian anda tidak bersetuju bahawa anda menggunakan Perkhidmatan kami atau memberikan maklumat kepada kami mengikut Polisi ini, sila segera tamatkan Perkhidmatan kami dan beritahu kami pada waktunya supaya kami dapat mengambil langkah yang sepadan.
<br>
Jika anda adalah ibu bapa atau penjaga kecil, apabila anda mempunyai soalan mengenai pemprosesan maklumat anak -anak di bawah umur yang anda pantau, sila hubungi kami melalui maklumat hubungan dasar ini.
<br>
<strong> Tujuh, Cara mengemas kini Dasar Privasi </strong>
<br>
Dasar Privasi kami mungkin berubah.
<br>
Tanpa persetujuan anda, kami tidak akan mengehadkan hak yang harus anda nikmati mengikut Dasar Privasi ini. Kami akan menerbitkan sebarang perubahan kepada dasar privasi di saluran rasmi. Jika anda tidak bersetuju dengan kandungan yang disemak semula, anda harus berhenti melawat platform ini dengan segera. Apabila versi kemas kini Dasar Privasi dikeluarkan, anda terus melawat paparan platform ini dan menunjukkan bahawa anda bersetuju dengan kandungan yang perlu dikemas kini, dan bersetuju untuk mematuhi Dasar Privasi yang dikemas kini.
<br>
Untuk perubahan besar, kami juga akan memberikan pemberitahuan yang lebih penting (termasuk kami akan memaklumkan pemberitahuan melalui cara platform ini dan bahkan memberikan anda tetingkap tetingkap pop -up).
<br>
Perubahan utama dalam dasar ini termasuk, tetapi tidak terhad kepada:
<br>
1. Model perkhidmatan kami telah berubah dengan ketara. Seperti tujuan mengendalikan maklumat peribadi, jenis maklumat peribadi, penggunaan maklumat peribadi, dan lain -lain;
<br>
2. Kami telah mengalami perubahan besar dalam kawalan dan aspek lain. Seperti perubahan dalam pengawal maklumat yang disebabkan oleh penggabungan dan pengambilalihan dan penyusunan semula;
<br>
3. Objek utama perkongsian maklumat peribadi, pemindahan atau perubahan pendedahan awam;
<br>
4. Hak untuk mengambil bahagian dalam pemprosesan maklumat peribadi dan kaedah latihannya telah mengalami perubahan besar;
<br>
5. Kami bertanggungjawab untuk jabatan tanggungjawab, kaedah hubungan dan saluran aduan untuk mengendalikan keselamatan maklumat peribadi;
<br>
6. Laporan Penilaian Impak Keselamatan Maklumat Peribadi menunjukkan risiko tinggi.
</p>`,

	//用户协议
	userAgreementText: `<p> Petua penting: </p>
<p> <br>
Kami berada di sini untuk mengingatkan anda:
<br>
• 1 aset digital itu sendiri tidak boleh dikeluarkan oleh mana -mana institusi kewangan atau syarikat atau laman web;
<br>
• 2 Pasaran aset digital adalah jenama baru, tidak disahkan, dan mungkin tidak berkembang;
<br>
• 3
Aset digital terutamanya digunakan oleh spekulator. Pasaran runcit dan komersil agak kecil. Urus niaga aset digital mempunyai risiko yang sangat tinggi. Perubahan;
<br>
• 4
Sekiranya Syarikat percaya bahawa anda melanggar perjanjian ini berdasarkan penghakiman unilateralnya, atau tingkah laku yang disediakan oleh Perkhidmatan yang disediakan oleh Laman Web ini mengikut bidang kuasa anda atau Perkhidmatan yang disediakan oleh laman web anda adalah haram, syarikat itu berhak untuk menggantung atau menamatkan anda Akaun pada bila -bila masa atau menamatkan akaun anda pada bila -bila masa., atau menggantung atau menamatkan perkhidmatan atau transaksi aset digital yang disediakan oleh laman web anda.
Urus niaga aset digital sangat berisiko dan tidak sesuai untuk kebanyakan orang. Anda memahami dan memahami bahawa urus niaga ini boleh menyebabkan beberapa kerugian atau semua kerugian, jadi anda harus menentukan jumlah urus niaga dengan tahap kerugian yang dapat bertahan. Anda memahami dan memahami bahawa aset digital akan menghasilkan risiko derivatif, jadi jika anda mempunyai sebarang pertanyaan, disarankan untuk mendapatkan bantuan perunding profesional terlebih dahulu. Di samping itu, sebagai tambahan kepada risiko yang disebutkan di atas, tidak akan ada risiko ramalan. Anda harus mempertimbangkan dengan teliti dan menggunakan keupayaan yang jelas untuk menilai status fiskal anda dan risiko di atas untuk membuat sebarang keputusan membeli dan menjual aset digital, dan menanggung semua kerugian yang disebabkan olehnya. Kami tidak bertanggungjawab untuk ini.
</p>
<p> <br>
Bercakap dengan awak:
<br> <br>
</p>
<p>
• 1
Sebarang pendapat, mesej, perbincangan, analisis, harga, cadangan, dan maklumat lain di laman web ini adalah ulasan pasaran umum, dan tidak merupakan cadangan pelaburan. Kami tidak menanggung sebarang kerugian yang bergantung kepada maklumat secara langsung atau tidak langsung, termasuk tetapi tidak terhad kepada sebarang kerugian keuntungan.
<br>
• 2
Atribut laman web ini tidak akan diubah pada bila -bila masa. Kami telah mengambil langkah -langkah yang munasabah untuk memastikan ketepatan maklumat laman web, tetapi ia tidak dapat menjamin ketepatannya. Kerugian langsung atau tidak langsung di Internet, penghantaran atau menerima pemberitahuan dan maklumat adalah secara langsung atau tidak langsung.
<br>
• 3
Terdapat juga risiko penggunaan sistem perdagangan internet, termasuk tetapi tidak terhad kepada perisian, kegagalan perkakasan dan pautan internet. Kerana kita tidak dapat mengawal kebolehpercayaan dan ketersediaan Internet, kita tidak akan bertanggungjawab terhadap gangguan, kelewatan dan kegagalan pautan.
<br>
• 4
Adalah dilarang menggunakan laman web ini untuk semua aktiviti perdagangan tidak bermoral seperti pasaran manipulasi yang berniat jahat dan urus niaga yang tidak wajar. Jika insiden tersebut dijumpai, laman web ini akan mengambil amaran, menyekat urus niaga, dan adat istiadat semua harga manipulasi berniat jahat dan sistem perdagangan yang terjejas jahat. Langkah -langkah perlindungan pencegahan seperti penggantungan akaun, kami tidak menanggung semua tanggungjawab yang dihasilkan dan mengekalkan hak untuk memegang tanggungjawab kepada orang yang berkaitan.
</p> <br>
<p> I. Prinsip Umum </p> <br>
<p>
• 1.1
"Perjanjian Pengguna" (selepas ini dirujuk sebagai "Perjanjian ini" atau "Terma dan Syarat ini"), oleh teks, "Syarat Privasi", "Memahami Dasar Pelanggan dan Anti -Money Pencucian", dan masing -masing yang mungkin Dikeluarkan oleh laman web ini atau boleh dikeluarkan dalam peraturan kelas, pernyataan, penjelasan, dan sebagainya.
<br>
• 1.2
Sebelum anda menggunakan perkhidmatan yang disediakan oleh Laman Web ini, anda harus membaca Perjanjian ini dengan teliti. Jika anda tidak faham atau lain -lain yang diperlukan, sila rujuk seorang peguam profesional. Jika anda tidak bersetuju dengan Perjanjian ini dan/atau pengubahsuaiannya pada bila -bila masa, sila segera berhenti menggunakan Perkhidmatan yang disediakan oleh Laman Web ini atau tidak lagi log masuk ke Laman Web ini. Sebaik sahaja anda log masuk ke Laman Web ini, gunakan sebarang perkhidmatan atau sebarang tingkah laku yang serupa di laman web ini, ini bermakna anda telah memahami dan bersetuju sepenuhnya dengan sifat -sifat Perjanjian ini, termasuk sebarang pindaan yang dibuat oleh Perjanjian ini pada bila -bila masa.
<br>
• 1.3
Anda boleh mengisi maklumat yang relevan mengikut keperluan laman web ini dan berjaya mendaftar selepas prosedur lain yang berkaitan. Borang mencapai persetujuan dengan Syarikat; atau jika anda mengklik pada tingkah laku butang yang dilabel "persetujuan" atau makna serupa dalam Proses menggunakan laman web ini, atau penggunaan sebenar perkhidmatan yang disediakan oleh laman web ini di mana laman web lain membenarkan 2. Setuju dengan kekangan semua terma di bawah perjanjian ini, tandatangan bertulis tanpa tulisan tangan anda tidak mempengaruhi kuasa mengikat undang -undang anda Mengenai Perjanjian ini.
<br>
• 1.4 Setelah menjadi ahli laman web ini, anda akan mendapat akaun ahli dan kata laluan yang sepadan. Anda akan bertanggungjawab untuk akaun keahlian dan kata laluan, anda harus menanggung tanggungjawab undang -undang untuk semua aktiviti dan peristiwa yang akan anda lakukan dengan akaun anda.
<br>
• 1.5 hanya menjadi ahli laman web ini boleh menggunakan platform perdagangan aset digital yang disediakan oleh laman web ini untuk transaksi dan nikmati perkhidmatan yang disediakan oleh laman web lain.
<br>
• 1.6 melalui pendaftaran dan penggunaan sebarang perkhidmatan dan fungsi yang disediakan oleh laman web ini, anda akan dianggap sebagai bacaan, memahami dan:
<br>
• 1.6.1 Menerima kekangan semua terma dan syarat Perjanjian ini.
<br>
• 1.6.2
Anda mengesahkan bahawa anda berumur 16 tahun atau mengikut peraturan undang -undang yang berbeza dengan usia undang -undang yang dapat disimpulkan, dan tingkah laku anda mengenai pendaftaran, jualan atau pembelian, dan maklumat penerbitan di laman web ini harus selaras dengan terdapat undang -undang yang relevan dan peraturan negara berdaulat atau wilayah dengan bidang kuasa, dan mempunyai keupayaan yang mencukupi untuk menerima terma ini, dan menubuhkan urus niaga untuk menggunakan laman web ini untuk transaksi aset digital.
<br>
• 1.6.3 Anda menjamin bahawa aset digital anda yang terlibat dalam urus niaga diperoleh dan dinikmati secara sah.
<br>
• 1.6.4 Anda bersetuju untuk mengambil semua tanggungjawab dan apa -apa pendapatan atau kerugian untuk urus niaga anda sendiri atau tingkah laku bukan penindasan.
<br>
• 1.6.5 Anda mengesahkan bahawa maklumat yang diberikan semasa mendaftar adalah benar dan tepat.
<br>
• 1.6.6 Anda bersetuju untuk mematuhi sebarang peruntukan undang -undang yang berkaitan. Setakat tujuan cukai berkenaan, termasuk melaporkan sebarang keuntungan transaksi.
<br>
• 1.6.7 Anda bersetuju bahawa pada bila -bila masa, anda tidak boleh terlibat dalam atau mengambil bahagian dalam tingkah laku atau aktiviti yang merosakkan kepentingan laman web atau syarikat ini, sama ada berkaitan dengan perkhidmatan yang disediakan oleh Laman Web ini.
<br>
• 1.6.8 Perjanjian ini hanya terhad oleh hak dan kewajipan yang anda capai dengan kami, dan tidak melibatkan hubungan undang -undang dan pertikaian undang -undang yang disebabkan oleh perdagangan aset digital antara pengguna laman web ini dan laman web lain dan anda.
</p> <br>
<p> 2. Semakan Protokol </p> <br>
<p>
Kami mengekalkan pengumuman perjanjian ini dari semasa ke semasa dan diumumkan oleh publisiti laman web, dan tidak lagi memberitahu hak anda. Perjanjian yang berubah akan menandakan masa perubahan di laman web perjanjian ini. Setelah diumumkan di laman web, ia akan mengambil masa secara automatik kesan segera. Anda harus melayari dan memberi perhatian kepada masa kemas kini dan mengemas kini kandungan perjanjian ini dari semasa ke semasa. Jika anda tidak bersetuju dengan perubahan yang berkaitan, anda harus segera berhenti menggunakan perkhidmatan laman web ini; anda terus menggunakan perkhidmatan laman web ini, yang bermaksud bahawa anda menerima dan bersetuju dengan sekatan perjanjian yang disemak semula. Essence
</p> <br>
<p> Tiga, Pendaftaran </p> <br>
<p>
• 3.1 Kelayakan Berdaftar
<br>
Anda mengesahkan dan menjanjikan: Apabila anda melengkapkan prosedur pendaftaran atau membenarkan perkhidmatan yang disediakan oleh Laman Web ini dengan cara anda membenarkan laman web ini, anda harus menjadi peraturan undang -undang yang berkenaan untuk menandatangani perjanjian ini dan menggunakan keupayaan yang perlu anda miliki dengan perkhidmatan laman web ini. Orang semula jadi, orang undang -undang atau organisasi lain. Sebaik sahaja anda mengklik untuk bersetuju dengan butang pendaftaran, ini bermakna bahawa hak atau hak anda kepada ejen telah bersetuju dengan atribut perjanjian dan didaftarkan dan menggunakan laman web ini untuk berkhidmat. Sekiranya anda tidak mempunyai kelayakan subjek yang disebutkan di atas, anda dan hak anda kepada ejen harus menanggung semua akibat yang disebabkan olehnya, dan Syarikat berhak untuk membatalkan atau membekukan akaun anda dengan bebas dan memegang anda dan hak anda kepada ejen. Essence
<br>
• 3.2 tujuan pendaftaran
<br>
Anda mengesahkan dan berjanji: Anda mendaftarkan laman web ini bukan untuk melanggar undang -undang dan peraturan atau memusnahkan perintah transaksi aset digital di Laman Web.
<br>
• 3.3 Proses Pendaftaran
<br>
• 3.3.1
Anda bersetuju untuk memberikan maklumat seperti e -mel yang berkesan dan nombor telefon bimbit mengikut keperluan halaman pendaftaran pengguna laman web ini. Anda boleh menggunakan nombor telefon bimbit anda sebagai kaedah log masuk untuk memasukkan laman web ini. Sekiranya perlu, selaras dengan peruntukan undang -undang dan peraturan yang berkaitan di kawasan yang berlainan, anda mesti memberikan nama sebenar, dokumen identiti dan undang -undang, peraturan, dan klausa privasi lain, dan maklumat yang relevan yang ditetapkan dalam klausa pengubahan wang haram. Semua data utama yang asal akan dirujuk sebagai maklumat berdaftar. Anda bertanggungjawab untuk keaslian, integriti dan ketepatan maklumat ini, dan menanggung sebarang kerugian langsung atau tidak langsung dan akibat buruk yang disebabkan olehnya.
<br>
• 3.3.2 Anda secara sah, lengkap dan berkesan diberikan untuk memberikan maklumat yang diperlukan untuk pendaftaran dan sahkan. Anda berhak mendapatkan nombor akaun dan kata laluan laman web ini. Apabila anda mendapatkan nombor akaun dan kata laluan laman web ini, anda boleh didaftarkan Dan anda boleh log masuk di laman web ini.
<br>
• 3.3.3 Anda bersetuju menerima e -mel dan/atau mesej pendek yang berkaitan dengan pengurusan dan operasi laman web ini.
</p> <br>
<p> empat, perkhidmatan </p> <br>
<p>
• 4.1 Kandungan Perkhidmatan
<br>
• 4.1.1 Anda berhak untuk melayari sebut harga sebenar dan maklumat transaksi pelbagai produk aset digital di laman web ini, dan berhak untuk mengemukakan arahan transaksi aset digital dan lengkap transaksi aset digital melalui laman web ini.
<br>
• 4.1.2 Anda berhak untuk menyemak maklumat di bawah Akaun Ahli anda di Laman Web ini, dan mempunyai hak untuk memohon fungsi yang disediakan oleh Laman Web ini untuk operasi.
<br>
• 4.1.3 Anda berhak untuk mengambil bahagian dalam aktiviti laman web yang dianjurkan oleh laman web ini mengikut peraturan aktiviti yang dikeluarkan di laman web ini.
<br>
• 4.1.4 Laman web ini menjanjikan perkhidmatan lain yang disediakan oleh anda.
<br>
• 4.2. Peraturan perkhidmatan yang anda janjikan untuk mematuhi peraturan perkhidmatan laman web berikut:
<br>
•4.2.1
Anda harus mematuhi undang -undang dan peraturan dan menggunakan dengan betul dan menyimpan nombor akaun anda, kata laluan masuk, kata laluan dana, dan kod pengesahan telefon bimbit yang diterima oleh telefon bimbit. Anda mempunyai tanggungjawab untuk sebarang operasi dan akibat dari nombor akaun anda dan kata laluan masuk, kata laluan dana, dan kod pengesahan telefon bimbit. Apabila anda mendapati bahawa nombor akaun laman web ini, kata laluan masuk, atau kata laluan dana, dan kod pengesahan digunakan oleh pihak ketiga yang anda telah diberi kuasa atau akaun lain, atau isu keselamatan akaun lain, laman web ini harus diberitahu dengan berkesan. Essence Laman web ini mempunyai hak untuk mengambil tindakan atas permintaan anda dalam masa yang munasabah, tetapi laman web ini tidak bertanggungjawab terhadap akibatnya (termasuk tetapi tidak terhad kepada kerugian anda) sebelum mengambil tindakan. Anda tidak boleh menghukum orang lain dengan akaun laman web ini dengan hadiah, meminjam, menyewa, memindahkan, atau cara lain tanpa laman web ini.
<br>
• 4.2.3 Anda bersetuju dengan semua aktiviti yang berlaku di laman web dan kata laluan anda (termasuk tetapi tidak terhad kepada pendedahan maklumat, maklumat pelepasan, klik dalam talian untuk bersetuju atau mengemukakan pelbagai perjanjian peraturan, perjanjian pembaharuan dalam talian atau perkhidmatan pembelian, dll) melaksanakan) melaksanakan tanggungjawab.
<br>
4.2.4
Apabila anda menjalankan urus niaga aset digital di laman web ini, anda tidak boleh mengganggu kemajuan normal transaksi aset digital dan memusnahkan susunan urus niaga; anda tidak boleh mengganggu operasi normal laman web ini atau mengganggu penggunaan pengguna lain Perkhidmatan laman web ini dalam apa -apa cara teknikal atau kaedah lain. Fakta dan kaedah lain secara berniat memfitnah muhibah laman web ini.
<br>
• 4.2.5 Jika anda mempunyai pertikaian dengan pengguna lain kerana transaksi dalam talian, anda tidak boleh meminta maklumat yang relevan di laman web ini melalui saluran kehakiman atau pentadbiran.
<br>
• 4.2.6 Dalam proses perkhidmatan yang disediakan oleh laman web ini, kos aspek lain yang ditanggung dihakimi dan ditanggung oleh anda sahaja.
<br>
• 4.3. Peraturan produk
<br>
• 4.3.1 Semak maklumat urus niaga
<br>
• Apabila anda melayari maklumat transaksi di laman web ini, anda harus membaca dengan teliti semua kandungan yang terkandung dalam maklumat transaksi, termasuk tetapi tidak terhad kepada harga, kuantiti komisen, yuran pengendalian, membeli atau menjual arah.
Anda boleh mengklik butang untuk berdagang selepas semua kandungan yang terkandung dalam maklumat transaksi.
<br>
• 4.3.2 Lihat butiran transaksi
<br>
• Anda boleh melihat rekod urus niaga yang sepadan melalui akaun anda.
</p> <br>
<p> 5. Hak dan kewajipan laman web ini </p> <br>
<p>
• 5.1
Sekiranya anda tidak mempunyai kelayakan pendaftaran yang ditetapkan dalam Perjanjian ini, laman web ini mempunyai hak untuk menolak anda untuk mendaftar. Untuk didaftarkan, laman web ini mempunyai hak untuk membatalkan akaun keahlian anda. Pada masa yang sama, laman web ini merizabkan sebarang keadaan lain untuk menentukan sama ada untuk menerima hak anda untuk mendaftar.
<br>
• 5.2 Menurut penghakiman laman web ini, apabila laman web ini mendapati bahawa anda atau pengguna akaun gabungan anda tidak sesuai untuk pelaburan yang tinggi, mereka berhak untuk menggantung atau menamatkan akaun anda dan semua akaun penutupan.
<br>
• 5.3 Laman web ini mendapati bahawa pengguna akaun bukan pendaftar awal akaun, dan mereka berhak untuk menggantung atau menamatkan penggunaan akaun.
<br>
• 5.4 Apabila laman web ini, laman web ini secara munasabah mengesyaki bahawa kesilapan maklumat yang anda berikan, apabila kesilapan maklumat tidak betul, tidak sah atau tidak lengkap, maklumat yang anda berikan, anda berhak untuk memberitahu anda untuk membetulkan, mengemas kini maklumat atau berhenti, dan menamatkan perkhidmatan laman web ini.
<br>
• 5.5 Laman web ini mempunyai hak untuk membetulkan maklumat apabila didapati bahawa sebarang maklumat yang dipaparkan di laman web ini jelas salah.
<br>
• 5.6
Laman web ini berhak untuk mengubah suai, menggantung atau menamatkan perkhidmatan laman web ini pada bila -bila masa. Hak untuk menjalankan atau menggantung Perkhidmatan di Laman Web ini tidak perlu memaklumkan anda terlebih dahulu. Tarikh pengumuman penamatan adalah berkesan.
<br>
• 5.7 Laman Web ini akan mengguna pakai cara teknikal dan langkah -langkah pengurusan yang diperlukan untuk memastikan operasi normal laman web ini, dan menyediakan persekitaran perdagangan dan perdagangan yang diperlukan dan dipercayai untuk mengekalkan susunan transaksi aset digital.
<br>
• 5.8 Jika anda belum menggunakan akaun keahlian dan kata laluan laman web ini selama setahun, anda berhak membatalkan akaun laman web anda. Selepas pembatalan akaun, laman web ini mempunyai hak untuk membuka nama keahlian yang sepadan kepada pengguna lain.
<br>
• 5.9 Laman web untuk memastikan keselamatan aset digital anda dengan mengukuhkan pelaburan teknologi dan meningkatkan langkah berjaga -jaga keselamatan, dan memberitahu anda terlebih dahulu apabila akaun anda muncul risiko keselamatan yang boleh dijangka.
<br>
• Laman web 5.10 mempunyai hak untuk memadam maklumat atribut yang tidak mematuhi undang -undang dan peraturan atau ditentukan di laman web ini pada bila -bila masa. Laman web ini tidak perlu memberitahu anda terlebih dahulu.
<br>
• 5.11
Laman web ini mempunyai hak untuk meminta anda memberikan lebih banyak maklumat atau maklumat mengikut kehendak undang -undang dan peraturan, peraturan, perintah dan peraturan lain dalam kepunyaan negara atau rantau ini, dan mengambil langkah yang munasabah untuk memenuhi kehendak norma -norma tempatan Ia diwajibkan untuk bekerjasama; laman web ini mempunyai hak untuk menggantung atau menghentikan atau menghentikan anda mengikut kehendak undang -undang, peraturan, peraturan, dan perintah dalam negara atau wilayah berdaulat.
</p> <br>
<p> 6. Batasan dan Pengecualian Tanggungjawab </p> <br>
<p>
• 6.1 Anda memahami dan bersetuju, dalam mana -mana, kami tidak akan bertanggungjawab atas perkara berikut:
<br>
• 6.1.1 kehilangan pendapatan;
<br>
• 6.1.2 Keuntungan perdagangan atau kerugian kontrak;
<br>
• 6.1.3 kerugian yang disebabkan oleh gangguan perniagaan;
<br>
• 6.1.4 Kehilangan mata wang yang boleh disimpan;
<br>
• kerugian yang disebabkan oleh isu maklumat;
<br>
• 6.1.6 Peluang, muhibah atau kerugian reputasi;
<br>
• Kerosakan atau kehilangan data 6.1.7 data;
<br>
• 6.1.8 Kos membeli produk atau perkhidmatan alternatif;
<br>
• 6.1.9
Sebarang kerugian atau kerosakan atau kerosakan yang tidak langsung, khas atau dilampirkan yang disebabkan oleh pelanggaran (termasuk kecuaian), pelanggaran kontrak, atau sebarang sebab lain, sama ada kerugian atau kerosakan ini boleh diramalkan secara munasabah bagi kita, sama ada kita telah diberitahu terlebih dahulu bahawa ada seperti itu jenis kemungkinan kehilangan atau kerosakan.
<br>
• Perkara 6.1.1 hingga 8.1.9 adalah bebas daripada satu sama lain.
<br>
• 6.2 Anda tahu dan bersetuju, kami tidak bertanggungjawab untuk sebarang pampasan kerosakan yang disebabkan oleh mana -mana situasi berikut:
<br>
• 6.2.1 Mungkin terdapat situasi yang tidak sah atau lalai untuk urus niaga khusus anda.
<br>
• 6.2.2 Tingkah laku anda di laman web ini disyaki tidak sah atau tidak bermoral.
<br>
• 6.2.3 Beli atau dapatkan sebarang data, maklumat atau urus niaga atau tingkah laku penggantian yang dihasilkan melalui perkhidmatan laman web ini.
<br>
• 6.2.4 Kesalahpahaman anda terhadap perkhidmatan laman web ini.
<br>
• 6.2.5 Sebarang kerugian lain yang berkaitan dengan perkhidmatan yang disediakan oleh laman web ini yang disebabkan oleh alasan kami.
<br>
• 6.3
Kami kesalahan, komputer, komunikasi atau kegagalan sistem lain, kesalahan, kegagalan kuasa, sebab cuaca, kemalangan, pertikaian buruh, rusuhan, pemberontakan, rusuhan, daya produktif, daya produktif, daya produktif, daya produktif, daya produktif, daya produktif, daya produktif , kekuatan produktif, rusuhan, banjir rusuhan, ribut, letupan, peperangan, bank atau rakan kongsi lain, kejatuhan pasaran aset digital, tingkah laku kerajaan,
Perintah organ kehakiman atau pentadbiran, perkhidmatan lain yang tidak diingini atau tertunda yang disebabkan oleh kawalan lain atau kami tidak mampu mengawal atau alasan untuk pihak ketiga, dan menyebabkan kerugian anda, kami tidak akan bertanggungjawab.
<br>
• 6.4
Kami tidak dapat menjamin bahawa semua maklumat, program, teks, dan lain -lain yang terkandung di dalam laman web ini benar risiko dan kemungkinan kerugian.
<br>
• 6.5
Kami tidak menjamin dan komitmen terhadap apa -apa maklumat, produk dan perniagaan di mana -mana laman web pihak ketiga di laman web ini, dan sebarang bentuk atribut lain yang tidak tergolong dalam subjek kami. Produk dan tanggungjawab lain adalah bertanggungjawab untuk keputusan peribadi anda.
<br>
• 6.6
Kami tidak membuat sebarang jaminan yang jelas atau tersirat untuk penggunaan perkhidmatan laman web ini, termasuk tetapi tidak terhad kepada kebolehgunaan Perkhidmatan yang disediakan oleh Laman Web ini, tidak ada kesilapan atau ketinggalan, kemampanan, ketepatan, kebolehpercayaan, dan terpakai bagi tujuan tertentu. Pada masa yang sama, kami tidak membuat komitmen dan jaminan untuk keberkesanan, ketepatan, ketepatan, ketepatan, kebolehpercayaan, kualiti, kestabilan, integriti dan ketepatan masa perkhidmatan yang disediakan oleh perkhidmatan yang disediakan oleh laman web ini. Sama ada untuk log masuk atau menggunakan Perkhidmatan yang disediakan oleh Laman Web ini adalah keputusan peribadi anda dan risiko beruang dan kemungkinan kerugian. Kami tidak membuat jaminan eksplisit atau tersirat untuk pasaran, nilai dan harga aset digital. Anda memahami dan memahami bahawa pasaran aset digital tidak stabil, dan harga dan nilai akan turun naik atau runtuh secara mendadak pada bila -bila masa. Kebebasan peribadi anda terhadap kebebasan peribadi anda. Pilih dan tentukan dan berisiko dan kemungkinan kerugian.
<br>
• 6.7
Jaminan dan komitmen kami yang ditetapkan dalam Perjanjian ini adalah satu -satunya jaminan dan pernyataan Perkhidmatan yang disediakan oleh Perjanjian ini dan Perkhidmatan yang disediakan oleh Perjanjian ini, dan menggantikan jaminan dan komitmen yang dihasilkan oleh cara dan kaedah lain. Semua jaminan dan kenyataan ini hanya mewakili komitmen dan jaminan kita sendiri, dan tidak menjamin bahawa mana -mana pihak ketiga mematuhi jaminan dan komitmen dalam Perjanjian ini.
<br>
• 6.8 Kami tidak menyerahkan apa -apa hak yang kami tidak memerintahkan dalam skop maksimum undang -undang dalam perjanjian ini dalam skop maksimum undang -undang.
<br>
• 6.9 Selepas anda mendaftar, anda boleh mengenali sebarang operasi yang kami lakukan mengikut peraturan yang ditetapkan dalam Perjanjian ini, dan sebarang risiko yang dihasilkan oleh anda akan ditanggung oleh anda.
</p> <br>
<p> tujuh, penamatan perjanjian </p> <br>
<p>
• 7.1 Laman Web ini mempunyai hak untuk menamatkan semua Perkhidmatan Laman Web ini mengikut perjanjian Perjanjian ini. Perjanjian ini ditamatkan pada tarikh penamatan semua perkhidmatan laman web ini.
<br>
• 7.2 Selepas perjanjian ini ditamatkan, anda tidak berhak untuk meminta Laman Web ini untuk terus menyediakan sebarang perkhidmatan atau memenuhi sebarang kewajipan lain, termasuk tetapi tidak terhad kepada meminta laman web ini untuk anda atau mendedahkan sebarang maklumat dalam akaun laman web asalnya.
Menghadapi anda atau pihak ketiga untuk sebarang maklumat yang tidak pernah anda baca atau hantar.
<br>
• 7.3 Penamatan Perjanjian ini tidak menjejaskan permintaan pihak mungkir untuk menanggung tanggungjawab lain.
</p> <br>
<p> 8. Harta Intelek </p> <br>
<p>
• 8.1 Semua hasil intelektual yang terkandung di dalam laman web ini termasuk, tetapi tidak terhad kepada logo laman web, pangkalan data, reka bentuk laman web, teks dan carta, perisian, foto, video, muzik, bunyi dan kombinasi yang disebutkan di atas, kompilasi perisian, kod sumber dan perisian yang berkaitan
(Termasuk aplikasi kecil dan skrip), hak harta intelek dimiliki oleh laman web ini. Anda tidak boleh menyalin, menukar, menyalin, menghantar atau menggunakan sebarang bahan atau atribut untuk tujuan perniagaan.
<br>
• 8.2 Semua hak (termasuk tetapi tidak terhad kepada muhibah dan tanda dagangan, tanda -tanda) yang terkandung dalam nama laman web ini dimiliki oleh syarikat.
<br>
• 8.3 Anda mesti digunakan secara haram atau pelupusan hak harta intelek di laman web ini atau orang lain semasa penggunaan perkhidmatan laman web ini. Anda tidak boleh menerbitkan atau membenarkan laman web lain (dan media) untuk menerbitkan atau memberi kuasa laman web lain dalam sebarang bentuk.
<br>
• 8.4 Anda log masuk ke Laman Web ini atau menggunakan mana -mana perkhidmatan yang disediakan oleh Laman Web ini kerana kami untuk memindahkan mana -mana harta intelek kepada anda.
</p> <br>
<p> sembilan, pengiraan </p> <br>
<p> Semua keputusan pengiraan transaksi telah disahkan oleh kami, tetapi kami tidak dapat menjamin bahawa laman web tidak akan diganggu atau tanpa kesilapan. </p> <br>
<p> Sepuluh, Segmentability </p> <br>
<p> Jika mana -mana klausa dalam Perjanjian ini dikenalpasti oleh mana -mana Mahkamah Jurisdiksi sebagai tidak boleh digantikan, tidak sah atau menyalahi undang -undang, ia tidak menjejaskan keberkesanan syarat -syarat Perjanjian ini. </p> <br>
<p> Eleven, Non -proxy Hubungan </p> <br>
<p> Sebarang peruntukan dalam Perjanjian ini tidak boleh dipertimbangkan, tersirat, atau cara lain untuk merawat kami sebagai ejen, pemegang amanah atau wakil lain. Perjanjian ini mempunyai peraturan lain. </p> <br>
<p> Dua belas, abstain </p> <br>
<p>
Kami atau salah satu daripada anda untuk menyiasat liabiliti lalai atau tanggungjawab lain yang dipersetujui dalam Perjanjian ini tidak dapat ditentukan atau dijelaskan sebagai pengabaian liabiliti lain untuk pelanggaran kontrak lain;
</p> <br>
<p> Tiga belas, Tajuk </p> <br>
<p> Semua tajuk adalah mudah untuk protokol dan tidak digunakan untuk mengembangkan atau mengehadkan atribut atau skop terma perjanjian. </p>
<p> Orang lain mengenakan bayaran untuk orang lain: Mengecas USDT, ETH, BTC, urus niaga mata wang berganda, sekali hukuman yang ketat! </p>
<p> </p> <br>
<p> Empat belas, keberkesanan dan penjelasan perjanjian </p> <br>
<p>
• 14.1 Perjanjian di halaman pendaftaran laman web ini diluluskan untuk mendaftar dan menyelesaikan prosedur pendaftaran, dan berkuatkuasa apabila mendapatkan akaun dan kata laluan laman web ini. Kedua -dua laman web ini dan anda mengikat.
<br>
• 14.2 Hak tafsiran akhir Perjanjian ini dimiliki oleh laman web ini.
<br>
• 14.3
Sekiranya akaun permohonan peribadi digunakan, ia hendaklah menyediakan dokumen yang sah dan akaun penerimaan dan pembayaran yang dinyatakan di jabatan GTM yang berkaitan, dan jabatan yang berkaitan dengan GTM akan dikeluarkan selepas jabatan yang berkaitan GTM akan membuka akaun berdaftar; memohon GTM dan ITS Akaun hanya untuk mengeluarkan GTM berkaitan GTM yang berkaitan dengan GTM berkaitan Orang yang diluluskan oleh Jabatan yang digunakan oleh pemegang Akaun, dan ia tidak dibenarkan untuk menyewa atau memindahkan.
</p>`,















	pc: {
		// pc页面
		home: pc.home.ZH,
	},
}
export default zh //暴露出去
