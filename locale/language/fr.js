// import Common from "./data/common/index" //公共模块翻译文件引入
// import User from "./data/user/index" //用户模块翻译文件引入
// import ErrorPage from "./data/error/index"
// import Home from "./data/home/index"
// import Me from "./data/me/index"
// import other from "./data/other/index"
import pc from "./data/pc/index"
const zh = {
	//托管订单
	completed: `terminé `,
	cancelOrder: `Annuler une commande`,
	purchaseAmount: `montant de l'achat`,
	profit: `gains `,
	day: `jour`,
	callDate: `Date de retour`,
	whether: `Annuler une commande ou non`,
	dividend: `Temps de dividende`,
	dueDividend: `Livraison après la fin`,
	dailyDividend: `distribution quotidienne`,
	escrowAmount: `Confier le montant`,
	dueReturn: `Retour de fin`,
	redemption: `Retour à tout moment`,
	availableBalance: `Balance disponible`,
	totalIncome: `bénéfice total estimé`,
	readAgree: `j'ai lu et j'accepte`,
	serviceAgreement: `accord de services financiers de plateforme`,
	trustProtocol: `<div>
					<p> 1, la plate - forme lance un service de compte portant intérêt pour fournir aux utilisateurs de la plate - forme un service à valeur ajoutée d'actifs numériques inactifs. <br>
Les actifs du compte portant intérêt seront utilisés pour les produits dérivés de la plate - forme et d'autres projets de création ultérieurs. <br>
3, la plate - forme fournit des services de gestion des risques pour les actifs transférés par les utilisateurs de comptes portant intérêt. La plate - forme s'appuie sur le système de contrôle du vent strict de la plate - forme, afin de garantir pleinement la sécurité des actifs des services financiers des utilisateurs et la tranquillité d'esprit. <br>
4, l'utilisateur, lors de l'utilisation du Service de compte générateur d'intérêts, autorise inconditionnellement la plate - forme à distribuer et distribuer raisonnablement les revenus générateur d'intérêts conformément aux règles de la plate - forme. BR >
5, les utilisateurs doivent se conformer à la législation nationale pertinente lors de l'utilisation du Service de compte portant intérêt et s'assurer que l'origine des actifs est légalement conforme. <br>
6, les utilisateurs lors de l'utilisation du Service de compte générateur d'intérêts, doivent pleinement comprendre les risques de l'investissement dans les actifs numériques, opérer avec prudence et dans la mesure de leurs moyens. <br>
7, l'utilisateur accepte que toutes les opérations d'investissement effectuées sur la plate - forme représentent ses véritables intentions d'investissement et accepte inconditionnellement les risques et avantages potentiels découlant de la décision d'investissement. BR >
8, la plateforme se réserve le droit de suspendre ou de résilier le Service de compte portant intérêt. Si nécessaire, la plateforme peut suspendre, résilier le Service de compte portant intérêt à tout moment. <br>
9, l'exécution des services portant intérêt peut être retardée, suspendue, interrompue ou déviée en raison de facteurs pouvant être irrésistibles tels que des retards de réseau, des défaillances du système informatique, etc. Nous ferons de notre mieux pour assurer, mais ne promettons pas, le fonctionnement stable et efficace du système d'exécution du Service de compte générateur d'intérêts, mais la plateforme n'assume aucune responsabilité en raison des facteurs ci - dessus qui font que le résultat final de l'exécution du Service de compte générateur d'intérêts diffère des attentes du client. BR >
Les utilisateurs doivent se conformer aux dispositions du contrat de services financiers lorsqu'ils utilisent le Service de compte générateur d'intérêts. <br>
</ p>
				</div>`,

	//产品列表
	managedOrder: `commandes gérées`,
	earningsToday: `Les revenus d'aujourd'hui`,
	accumulatedIncome: `gains cumulés`,
	singleLimit: `Limite`,
	dailyRate: `Taux d'intérêt quotidien`,
	cycle: `période `,

	//信托
	pledgeMining: `Minière stable`,
	underway: `en cours`,
	stabilize: `stabiliser les gains, rendre l'exploitation minière plus simple`,
	income: `bénéfices attendus`,


	//common
	copySucceeded: `copié avec succès`,
	serverResponseFailed: `Le serveur n'a aucune réponse`,
	noData: `Pas de données`,
	contentdown: `pull up show more`,
	contentrefresh: `chargement en cours...`,
	contentnomore: `il n'y a plus de données`,

	// tabbar
	Home: `Maison`,
	Trade: `Opération`,
	Future: `Options`,
	Trust: `Confiance`,
	Assets: `Actifs`,

	// 登录
	login: `Se connecter`,
	language: `Langue`,
	mailbox: `Boîte aux lettres`,
	placeholderName: `Veuillez entrer une boîte aux lettres`,
	password: `Mot de passe`,
	placeholderPassword: `Veuillez entrer votre mot de passe`,
	forgetPassword: `Mot de passe oublié？`,
	noHave: `Pas de numéro de compte？`,
	registerNow: `Enregistrement`,
	errorEmpty: `Ne peut pas être vide`,
	errorStandard: `Erreur de format`,
	errorLength: `(4-30Position)`,
	errorLength1: `(4-300Position)`,
	// 注册

	register: `s'inscrire`,
	code: `Code de vérification`,
	placeholderCode: `Veuillez saisir le code de vérification`,
	sending: `envoyé`,
	send: `envoyer`,
	okPassword: `confirmer le mot de passe`,
	invitationCode: `Code d'invitation`,
	placeholderinvitationCode: `veuillez saisir le Code d'invitation`,
	checkedAgree: `d'accord`,
	userAgreement: `contrat d'utilisation`,
	and: `et`,
	privacyPolicy: `politique de confidentialité`,
	pleaseCheck: `Veuillez accepter l'accord`,
	atypism: `mot de passe incohérent`,

	// 忘记登录密码

	forgotLoginPassword: `Mot de passe oublié`,
	newPassword: `nouveau mot de passe`,
	confirm: `Confirmer`,

	//忘记支付密码

	forgotPayPassword: `Oublie le mot de passe de paiement`,
	//设置支付密码
	setpayPassword: `Définissez le mot de passe de paiement`,
	//主页
	helper: `Aide`,
	rising: `Augmenter la liste`,
	business: `Paire de négociation`,
	newPrice: `Dernier prix`,
	upfloat: `Monter et descendre`,
	// 资产

	totalAssets: `Équivalent total des actifs`,
	record: `Record`,
	nowAssets: `Conversion d'actifs`,
	buyCoins: `Acheter`,
	sellCoins: `Vente`,
	transfer: `Transfert`,
	searchCurrency: `Rechercher`,
	hideSmall: `Masquer la devise de faible valeur`,
	currencyAccount: `Spot`,
	futuresAccount: `Futures`,
	legalAccount: `Compte Fiat`,
	trustAccount: `Earn`,
	//划转记录

	transferRecord: `Record de transfert`,
	time: `temps`,
	rollout: `transfert`,
	rollin: `Rendre`,
	// 币币记录

	screen: `filtre`,
	money: `Quantité`,
	transferAddress: `Adresse de transfert`,
	createTime: `Créer du temps`,
	confirmTime: `Confirmez l'heure`,
	note: `Remarques`,
	type: `Type`,
	reset: `réinitialisation`,
	recharge: `Recharger`,
	disbursement: `Retirer`,
	incomplete: `non terminé`,
	success: `Succès`,
	fail: `échouer`,


	//币币充币

	currency: `monnaie`,
	placeholderCurrency: `Veuillez sélectionner la monnaie`,
	payeeName: `Nom de la chaîne`,
	rechargeAddress: `Adresse de recharge`,
	copyAddress: `Copiez l 'adresse`,
	rechargeQuantity: `Nombre d'
	argent`,
	chargingAddress: `Adresse de recharge`,
	placeholderchargingAddress: `Veuillez saisir l 'adresse de paiement`,
	prove: `Veuillez sélectionner une image`,
	optional: `(Facultatif)`,
	placeholderHash: `Veuillez entrer dans le hash`,
	placeholderNote: `Veuillez saisir les remarques`,
	errorMessageprove: `Télécharger la photo du dépôt de pièces`,
	onlyNumbers: `ne peut entrer que des numéros`,
	//币币提币

	withdrawalAddress: `Adresse de retrait`,
	tipwallet: `Vous n'avez pas de portefeuille correspondant`,
	toAdd: `à ajouter`,
	placeholderwithdrawalAddress: `Veuillez sélectionner l'adresse de devise`,
	availablenum: `Quantité disponible`,
	placeholdernum: `Veuillez saisir la quantité`,
	unselected: `Pas le choix`,
	payPassword: `Mot de passe de paiement`,
	commission: `Frais de gestion`,
	placeholderpayPassword: `Veuillez saisir le mot de passe de paiement`,
	//币币划转

	capitalTransfer: `Transfert de capital`,
	from: `de`,
	to: `à`,
	moneybag: `Les portefeuilles ne peuvent pas être les mêmes`,
	//法币添加收款方式


	subbranch: `sous-branch`,
	placeholdersubbranch: `Veuillez entrer dans la succursale`,
	bankcode: `Encodage bancaire`,
	placeholderbankcode: `Veuillez entrer dans le codage bancaire`,
	placeholderbankName: `Veuillez saisir le nom de la banque`,
	placeholderbankAccount: `Veuillez saisir le numéro de carte`,

	//法币记录

	price: `Prix`,
	num: `quantité`,
	bankName: `Nom de la banque`,
	account: `Compte`,
	buy: `acheter`,
	sell: `vendre`,
	all: `tout`,
	processing: `Dans le traitement`,
	//法币买币

	onlineService: `un service en ligne`,
	//法币卖币账户

	collectionAccount: `Compte de réception`,
	addCollection: `Ajouter un compte`,
	showModal1: `Que ce soit pour confirmer Delete`,
	cancelText: `Annuler`,
	//法币卖币

	salesQuantity: `Quantité`,
	univalence: `Prix de référence`,
	closed: `la vente de monnaie est fermée`,
	your: `Votre numéro de compte de collecte`,
	bankAccount: `Compte bancaire`,
	name: `Nom et prénom`,
	// 账户详情

	total: `Total`,
	frozen: `Congelé`,
	//home左侧导航窗

	homloginAndRegister: `connexion/enregistrement`,
	rechargeMoney: `charger`,
	withdrawCoins: `Retrait`,
	customer: `Service client`,
	identityVerification: `authentification`,
	withdrawalAddress: `Adresse de retrait`,
	paymentMethodInFiatCurrency: `Méthode de collecte Fiat`,
	help: `Centre d'aide`,
	pricing: `méthode de tarification`,
	setUp: `paramètres`,
	USD: `Dollar`,
	//个人信息

	personal: `Informations personnelles`,
	headPortrait: `avatar`,
	nickname: `surnom`,
	bindMailbox: `Poster`,
	//邮箱设置

	mailboxSettings: `Réglage du courrier`,
	oldEmail: `Ancien compte de boîte aux lettres`,
	placeholderoldEmail: `Veuillez saisir l'ancien compte de boîte aux lettres`,
	newEmail: `Nouveau compte de boîte aux lettres`,
	placeholdernewEmail: `Nouveau compte de boîte aux lettres`,
	//身份认证

	certification: `Vérifié`,
	noCcertification: `Aller à la certification de nom réel`,
	quota: `Limites de retrait`,
	count: `Nombre de fois`,
	everyday: `Quotidien`,
	cumulative: `Limite cumulative de retrait`,
	unauthorized: `Non certifié`,
	audit: `À auditer`,
	attestation: `Certification générale`,
	hand: `Certification à main levée`,
	auditFailed: `Audit échoué`,

	//实名认证

	country: `Country`,
	placeholdercountry: `Veuillez choisir le pays`,
	placeholdername: `Veuillez entrer un nom`,
	documentType: `certificat`,
	placeholderdocumentType: `Type d'identité`,
	identificationNumber: `Numéro d'identification`,
	placeholderidentificationNumber: `Veuillez entrer un numéro d'identification`,
	next: `Next Étape`,
	IDcard: `carte d'identification`,
	passport: `Passeport`,

	//实名认证照片

	photo1: `Photo d'identité`,
	photo2: `Photos au dos du certificat`,
	photo3: `Vous et photos de carte portable`,
	Uploading: `nous faire parvenir...`,
	//提币地址

	addWalletAddress: `Ajoutez l'adresse`,
	//添加钱包地址

	address: `adresse`,
	placeholderAddress: `Veuillez saisir l'adresse`,
	//帮助中心

	welcome: `Bienvenue au centre d'aide`,
	commonProblem: `Problème commun`,
	tutorial: `Tutoriel de dépôt`,
	description: `Options`,
	accountProblem: `Question de compte`,
	accountSettings: `Comment s'inscrire`,
	certified: `certification d'identité`,
	totutorial: `Que faire si vous ne recevez pas le dépôt？`,
	todescription: `Qu'est-ce qu'une transaction d'option？`,
	toaccountProblem: `Changement de mot de passe / réinitialisation`,
	toaccountSettings: `Comment s'inscrire？`,
	tocertified: `Comment s'authentifier`,
	tutorialText: `<div><p>Salut! Le transfert d'actifs de blockchain est divisé en trois étapes: proposition / confirmation / entrée de bloc.<br><br>Étape 1: Le transfert du transfert indique que la plate-forme ou le portefeuille de la devise est transféré.<br><br></p><p>Étape 2: Complétez la confirmation du bloc correspondant. L'adoption et le retard de la blockchain entraîneront que votre retard de monnaie numérique terminera toute confirmation.</p></div>`,
	descriptionText: `<div> <p> une option est un instrument financier qui permet à un utilisateur d'être exposé au prix d'un actif sous - jacent tout en limitant son exposition à la baisse. Il offre aux acheteurs la possibilité d'acheter soit long (option d'achat) ou Short (option de vente) pour BTC ou ETH. <br> <br> les nouveaux venus dans les contrats d'options peuvent savoir: <br> <br> • Les options de vente représentent le droit (non l'obligation) de vendre un actif à un prix prédéterminé pendant une certaine période. Cela vous donne une exposition "short" comme si le prix de l'actif sous - jacent baissait et vous vous réservez le droit de vendre l'actif à un prix plus élevé (appelé prix d'exercice) et de faire un profit. <br> <br> </p> <p> • Une option d’achat représente le droit (non l’obligation) du détenteur d’acheter un actif à un prix prédéterminé pendant une certaine période. Cela vous donne une exposition "longue" comme si le prix de l'actif sous - jacent augmentait et vous vous réservez le droit d'acheter l'actif à un prix inférieur et de faire un profit. </p> </div>`,
	accountProblemText: ` <div> <p> 
	1. Cliquez sur l'emplacement de votre compte dans le coin supérieur gauche de la page d'accueil et cliquez sur "Paramètres" - "modifier le mot de passe". <br> <br> 
	2. Entrez l'ancien mot de passe, puis le nouveau mot de passe pour confirmer le nouveau mot de passe. <br> <br> 
	3. Cliquez sur "réinitialiser le mot de passe". <br> <br> 
	4. Pour la sécurité des fonds des utilisateurs, il est généralement nécessaire d'attendre 24 heures après la Réinitialisation ou le changement de mot de passe avant de pouvoir retirer de l'argent. <br> <br> 
	</p> </div>`,
	accountSettingsText: ` <div> <p> Veuillez utiliser votre numéro de téléphone portable ou votre boîte aux lettres pour obtenir le Code de vérification et enregistrer votre numéro de compte. Si vous ne recevez pas le Code de vérification, cliquez sur afficher le spam de la boîte aux lettres ou contactez le service clientèle. </p> </div>`,
	certifiedText: ` <div> <p> 1. Cliquez sur l'emplacement de votre compte dans le coin supérieur gauche de la page d'accueil, cliquez sur "authentification de l'identité".<br> <br> 2. Entrez le numéro de certificat + nom, appuyez sur certification. <br> <br> 3. Soyez patient et attendez l'audit. Les audits sont généralement terminés en 24 heures. </p> </div>`,

	//设置

	changeLoginPassword: `changer le mot de passe`,
	setWithdrawalPassword: `Définissez le mot de passe de retrait`,
	noSetWithdrawalPassword: `Aller à définir un mot de passe de paiement`,
	preference: `préférence des couleurs`,
	about: `À propos de nous`,
	signOut: `se déconnecter`,
	//修改登录密码

	oldPassword: `ancien mot de passe`,


	//修改支付密码

	changePayPassword: `Modifier le mot de passe des fonds`,
	//颜色偏好

	upRed: `Red Up/Green Down`,
	upGreen: `Red Down/Green Up`,
	//关于我们

	platformIntroduction: `Introduction à la plate-forme`,
	privacyPolicy: `Politique de confidentialité`,
	userAgreement: `accord d'utilisateur`,
	officialWebsite: `Site officiel`,
	//平台简介

	platformIntroductionText: `cette plate - forme est la principale plate - forme de négociation d'actifs numériques au monde, avec un effort constant pour améliorer les caractéristiques de sécurité afin de garantir la sécurité des actifs numériques de nos clients, notre modèle est d'apporter à nos clients des projets à valeur durable, seuls les projets de la plus haute qualité sont sélectionnés et des services de négociation sont fournis. Les membres de l'équipe de gestion de base sont diplômés d'établissements d'enseignement de renommée mondiale, ont travaillé en tant que dirigeants d'entreprises multinationales telles que la Banque de Montréal du Canada, PWC et d'autres, ont une vaste expérience de l'industrie financière et des opérations d'échange d'actifs numériques, bitshares et ethereum sur la base de protocoles open source novateurs, nous avons brisé le système fermé de la blockchain originale en nous basant sur le principe de la combinaison avec des pratiques commerciales réelles, East fortune Visual Artificial High Intelligence blockchain système d'exploitation '
" en combinant simultanément l’intelligence artificielle et la technologie blockchain, nous voulons créer un système d’exploitation blockchain de classe mondiale véritablement commercialisable, avec la promesse de la plate - forme: qu’il respectera strictement les lois canadiennes pertinentes et qu’il fera des affaires sous la supervision des régulateurs financiers.`,

	//隐私政策
	privacyPolicyText: `
<p>
Cette plateforme. (ci - après la « société») est une société constituée en Suisse conformément au droit suisse applicable qui exploite cette plate - forme global app (ci - après la « plate - forme» ou la « plate - forme»), une plate - forme dédiée aux utilisateurs pour le Trading d’actifs numériques et la fourniture de services connexes (ci - après le « service» ou le « service»). Pour plus de commodité, la société et la plate - forme sont collectivement désignées par « nous» ou d'autres termes à la première personne dans le présent Accord, tant que la personne physique ou l'autre personne qui accède à la plate - forme est un utilisateur de la plate - forme, ci - dessous, nous utilisons « vous» ou d'autres termes à la deuxième personne, nous et vous sommes collectivement désignés par « parties» et nous ou vous êtes individuellement désignés par « partie».
<br>
Nous comprenons et respectons pleinement l'importance de vos informations personnelles pour vous et nous prendrons les mesures de sécurité appropriées requises par la loi et la réglementation pour protéger vos informations personnelles. En conséquence, la présente politique de confidentialité (ci - après dénommée « la présente politique ») est établie.
/ cette politique de confidentialité) et vous rappelle que:
<br>
Cette politique s'applique à tous les produits et services que nous offrons. Si un produit ou un service que nous vous fournissons a une politique de confidentialité établie séparément, le produit ou le Service applique sa politique de confidentialité établie séparément; Si aucune politique de confidentialité n'est établie séparément pour nos produits ou services, cette politique s'applique.
<br>
Il est particulièrement important de préciser que la présente politique ne s’applique pas aux services qui vous sont fournis par d’autres tiers et que les services qui vous sont fournis par ces tiers s’appliquent à leurs politiques de confidentialité qui vous sont autrement indiquées.
<br>
Avant d'utiliser chacun de nos produits ou services, il est important que vous lisiez attentivement et compreniez bien cette politique, en particulier les termes identifiés en gras / souligné en gras, que vous devriez mettre l'accent sur avant de commencer à l'utiliser après avoir confirmé la pleine compréhension et l'accord. Pour toute question, commentaire ou suggestion concernant le contenu de cette politique, vous pouvez nous contacter via les différents moyens de contact que nous mettons à votre disposition officiellement. Si vous n’acceptez aucune des dispositions de cette politique, vous devez immédiatement cesser d’accéder à la plateforme.
<br>
<strong> première partie définition </strong>
<br>
Informations personnelles: informations enregistrées électroniquement ou autrement qui, seules ou en combinaison avec d’autres informations, permettent d’identifier une personne physique donnée ou reflètent les activités d’une personne physique donnée.
<br>
Renseignements personnels sensibles: désigne les renseignements personnels qui comprennent des numéros de documents d’identité, des renseignements biométriques personnels, des numéros de compte bancaire, des renseignements sur la propriété, des pistes de localisation, des renseignements sur les transactions, des renseignements sur les enfants de moins de 14 ans (inclus), etc. (nous identifierons clairement les Renseignements personnels sensibles en caractères gras dans cette politique de confidentialité).
<br>
Suppression des renseignements personnels: désigne l’action consistant à supprimer les renseignements personnels dans les systèmes impliqués dans la réalisation des fonctions commerciales quotidiennes afin qu’ils restent inaccessibles.
<br>
Enfants: désigne les mineurs de moins de quatorze ans.
<br>
<strong> deuxième partie politique de confidentialité </strong>
<br>
Cette section de la politique de confidentialité vous aidera à comprendre ce qui suit:
<br>
I. comment nous collectons et utilisons vos informations
<br>
II. Comment nous utilisons les cookies et les technologies similaires
<br>
Iii. Comment nous partageons, transférons et divulguons publiquement vos informations
<br>
Iv. Comment nous protégeons vos informations
<br>
V. Comment vous gérez vos informations
<br>
Vi. Comment nous traitons les informations des mineurs
<br>
Vii. Comment cette politique de confidentialité est mise à jour
<br>
<strong> I. comment nous collectons et utilisons vos informations </strong>
<br>
Les informations personnelles que nous avons besoin / pouvons avoir besoin de collecter et d’utiliser lorsque vous utilisez nos produits et / ou services sont les suivantes:
<br>
Vous nous autorisez à collecter et utiliser les informations nécessaires pour vous fournir nos produits et / ou services. Si vous refusez de fournir les informations correspondantes, vous ne pourrez pas utiliser nos produits et / ou services normalement;
<br>
Afin de mettre en œuvre des fonctionnalités supplémentaires pour vous fournir nos produits et / ou services, vous pouvez choisir d'autoriser les informations que nous collectons et utilisons. Si vous refusez de le fournir, vous ne serez pas en mesure d'utiliser correctement les fonctionnalités supplémentaires ou d'obtenir les résultats fonctionnels que nous vous proposons, mais cela n'affectera pas votre utilisation normale des fonctionnalités essentielles de nos produits et / ou services.
<br>
Vous comprenez et acceptez que:
<br>
1, nous nous engageons à créer une variété de produits et de services pour répondre à vos besoins. En raison de la grande variété de produits et de services que nous vous fournissons et des différences dans la gamme de produits / services spécifiques que les utilisateurs choisissent d'utiliser, les fonctionnalités de base / supplémentaires correspondantes et le type et la portée des informations personnelles collectées à des fins d'utilisation peuvent varier, selon la fonctionnalité du produit / service spécifique.
<br>
Afin de vous offrir une meilleure expérience avec nos produits et services, nous nous efforçons continuellement d'améliorer notre technologie, ce qui nous permet d'introduire de nouvelles fonctionnalités ou des fonctionnalités optimisées de temps à autre, qui peuvent nécessiter la collecte, l'utilisation de nouvelles informations personnelles ou des modifications des fins ou de la manière dont les informations personnelles sont utilisées. À cet égard, nous vous indiquerons le but, la portée et la manière dont les informations correspondantes sont collectées et utilisées en mettant à jour la présente politique, les fenêtres contextuelles, les conseils sur les pages, etc., et nous vous fournirons des moyens de choisir librement votre consentement à la collecte et à l'utilisation, sous réserve de votre consentement explicite. Au cours de ce processus, si vous avez des questions, des commentaires ou des suggestions, vous pouvez nous contacter via les différents moyens de contact disponibles sur cette plateforme et nous vous répondrons dans les meilleurs délais.
<br>
Nous recueillons et utilisons vos renseignements personnels pour remplir les fonctions décrites dans la présente politique:
<br>
(i) pour vous aider à vous inscrire et vous fournir les services offerts par la plateforme;
<br>
1, Service d'enregistrement
<br>
Nous vous fournissons des services d'adhésion de base via ce compte de plateforme. Pour vous inscrire en tant que membre et utiliser nos services aux membres, vous devez remplir et fournir les informations suivantes lors de votre demande d'inscription:
<br>
(1) Informations d'identification. Ces informations peuvent nous aider à vérifier que vous êtes éligible pour vous inscrire en tant que membre de la plateforme, y compris, mais sans s'y limiter, votre nom, votre adresse de résidence, d'autres certificats différents délivrés par le pays ou le Gouvernement auquel vous appartenez avec des informations prouvant votre identité et les numéros impliqués et Toutes les autres informations qui peuvent nous aider à vérifier votre identité (collectivement, les « informations d'identification»).
). Ces informations d'identification varient selon que vous êtes un utilisateur individuel ou institutionnel, et les informations que nous collectons pour les utilisateurs de différents pays ou régions peuvent varier en fonction des lois et réglementations de différentes juridictions. Les informations et données suivantes sont données à titre indicatif:
<br>
Utilisateurs individuels: nationalité, nom légal complet (y compris le nom d'utilisateur et le nom dans la langue locale), numéro d'identification, adresse e - mail, numéro de téléphone, numéro de sécurité sociale (« ssn»), numéro de passeport ou tout numéro d'identification émis par le Gouvernement, date de naissance, preuve d'identité (par exemple, passeport, permis de conduire ou pièce d'identité émise par le Gouvernement).
<br>
Utilisateurs institutionnels: dénomination sociale de l'entreprise (y compris la dénomination sociale dans la langue locale), informations d'enregistrement, numéro de téléphone professionnel, informations personnelles sur les représentants autorisés et les utilisateurs autorisés, lieu d'affaires principal, informations personnelles sur tous les propriétaires effectifs, pièces d'identité des actionnaires / propriétaires effectifs (passeport ou carte d'identité émise par le Gouvernement), structure de l'entreprise, documents relatifs à la Constitution de l'entreprise, résolutions du Conseil d'administration, Déclaration d'origine des fonds, Description du contrôle des risques et de la conformité et autres informations ou documents requis par la plateforme.
<br>
(2) Informations sur les services. Ces informations nous aident à vous contacter et à vous fournir différents modèles de services de transaction entre actifs numériques, y compris, mais sans s'y limiter, vos informations d'identification personnelle, vos coordonnées, vos informations de transaction, ainsi que vos informations de carte de débit et / ou d'autres informations de compte (collectivement, les « informations de service»).
). Veuillez également comprendre que les services que nous vous proposons sont constamment mis à jour et développés. Si vous choisissez d'utiliser un autre service qui n'est pas encore couvert par les instructions ci - dessus et sur la base duquel nous avons besoin de recueillir des informations supplémentaires à votre sujet, nous vous indiquerons la portée et le but de la collecte d'informations par le biais de conseils sur la page, de processus interactifs, de Conventions contractuelles, de pop - ups, etc., et avec votre consentement.
<br>
Si vous utilisez uniquement les services de navigation, vous n'avez pas besoin de vous inscrire en tant que membre et de fournir les informations ci - dessus.
<br>
2. Autres services d'enregistrement
<br>
Authentification par nom réel: lorsque vous vous inscrivez pour vous connecter, accédez au « Centre personnel» pour compléter l'authentification par nom réel dans l'authentification par nom réel, vous devez fournir à la plate - forme votre vrai nom, votre numéro d'identification ou votre numéro de passeport lors de l'utilisation de l'authentification par nom réel.
<br>
Certification Premium: lorsque vous tradez sur cette plateforme au - delà d’une certaine limite, la plateforme vous demande une certification Premium afin de préserver la sécurité de vos actifs. En plus des informations d'authentification par nom réel, vous reconnaissez que la plate - forme vous authentifie de manière avancée pour la « reconnaissance faciale», qui implique la collecte par la plate - forme de flux vidéo ou d'images de votre visage.
<br>
Affichage des informations de compte: Si vous avez déjà un compte sur la plateforme, nous pouvons afficher vos informations personnelles ci - dessus dans les services (l’authentification par nom réel indique uniquement le résultat de l’authentification ou non), ainsi que les actions que vous effectuez dans les produits et services associés à votre compte sur la plateforme, y compris l’affichage centralisé de votre profil, les ordres de Trading via ce compte sur la plateforme. Nous respectons les choix que vous faites concernant les paramètres de votre compte sur la plateforme.
<br>
(II) Services de gestion de la sécurité et services push d'information sur les services
<br>
Lorsque vous utilisez les services fournis par la plateforme ou y accédez, afin de garantir la sécurité de vos transactions et le fonctionnement sûr et stable des services, nous avons besoin de recevoir et d'enregistrer automatiquement les informations de votre navigateur Web, le type d'appareil que vous utilisez pour vous connecter à votre compte, les informations sur l'appareil telles que les symboles d'identification de l'appareil tels que la version du modèle, l'adresse IP et les enregistrements sur les pages Web auxquelles vous demandez l'accès, la région, l'environnement réseau, les informations d'empreinte digitale de l'appareil, les informations de journal de service, Informations sur le logiciel, informations de localisation, etc.
<br>
Veuillez noter que les informations individuelles sur l'appareil sont des informations qui ne permettent pas d'identifier une personne physique spécifique. Si nous combinons ces informations non personnelles avec d'autres informations pour identifier une personne physique spécifique, ou si nous les combinons avec des informations personnelles, ces informations non personnelles seront considérées comme des informations personnelles pendant la durée de l'utilisation combinée et, sauf si nous avons votre autorisation ou si la loi ou la réglementation en dispose autrement, Nous les traiterons de manière anonyme et dépersonnalisée.
<br>
Afin de vous fournir des services push et d'affichage d'informations plus pratiques et plus adaptés à vos besoins individuels, nous pouvons à l'avenir extraire les caractéristiques de vos préférences et produire des portraits indirects de la population basés sur des balises de caractérisation pour l'affichage, les messages push et éventuellement la publicité commerciale, en fonction des informations de votre appareil et de votre utilisation de la plate - forme ou du client. Si vous n’acceptez pas de recevoir de tels messages Push ou si vous retirez votre consentement à la collecte de renseignements personnels, vous pouvez nous contacter conformément aux coordonnées fournies dans la présente politique.
<br>
Nous nous efforçons de garantir votre expérience de navigation. Si vous ne souhaitez pas accepter les publicités commerciales que nous vous envoyons, vous pouvez vous désabonner ou désactiver en réponse à une demande de désabonnement par SMS ou par tout autre moyen que nous proposons.
<br>
En outre, nous utilisons également vos informations ci - dessus afin d'améliorer et d'optimiser continuellement les fonctionnalités décrites ci - dessus.
<br>
Iii) Services de garde et d'interrogation des transactions
<br>
Les données pertinentes que nous collectons concernant vos échanges sur cette plateforme, y compris, mais sans s'y limiter, les enregistrements de transactions. Si vous souhaitez consulter votre historique des transactions de commande, vous pouvez consulter les détails de vos transactions personnelles sur la plate - forme « gestion des commandes», notamment: le pseudonyme de la partie adverse, l'heure de passation de la commande, le numéro de commande, les informations de transaction, le type et la quantité d'actifs numériques, etc.
<br>
Iv) Service à la clientèle et règlement des différends
<br>
Lorsque vous nous contactez ou faites une demande de règlement de litiges, nous avons besoin des informations personnelles nécessaires pour vérifier votre adhésion afin de garantir la sécurité de votre compte et de vos systèmes.
<br>
Afin de faciliter la prise de contact avec vous, de vous aider à résoudre votre problème le plus rapidement possible ou de documenter le traitement et les résultats de votre problème, nous pouvons conserver un enregistrement de votre correspondance avec nous et du contenu associé (y compris les informations de compte, les informations de commande, d'autres informations que vous fournissez pour prouver les faits pertinents, ou les informations de contact que vous laissez derrière vous) Si vous avez des questions, des plaintes ou des suggestions concernant une commande spécifique. Nous utilisons vos informations de compte et les informations de commande.
<br>
D'autres informations vous concernant que nous pouvons également utiliser afin de fournir les services et d'améliorer la qualité des services, y compris les informations pertinentes que vous fournissez lorsque vous contactez le service client, les informations de réponse au questionnaire que vous nous envoyez lorsque vous participez à un questionnaire.
<br>
V) Autres
<br>
Si vous fournissez des informations personnelles sur d'autres utilisateurs, vous devez vous assurer que vous avez obtenu une autorisation légale avant de fournir ces informations personnelles à la plateforme. Dans le cas où il s’agit de renseignements personnels d’un enfant, vous devez obtenir le consentement du tuteur de l’enfant avant de le publier, auquel cas le tuteur a le droit de demander la correction ou la suppression des renseignements personnels de l’enfant en nous contactant à l’article 9 de la présente politique.
<br>
Si nous utilisons les informations à d'autres fins non décrites dans la présente politique, ou si nous utilisons les informations collectées à d'autres fins, ou si nous obtenons activement vos informations personnelles auprès de tiers, nous obtiendrons votre consentement préalable.
<br>
Si nous obtenons indirectement des informations vous concernant auprès d’un tiers, nous demanderons expressément par écrit à ce tiers, avant la collecte, de collecter des informations personnelles après avoir obtenu votre consentement conformément à la loi et de vous informer du contenu des informations partagées, et si des informations sensibles sont concernées, elles devront faire l’objet d’une confirmation expresse de votre part avant d’être mises à notre disposition pour utilisation, exigeant que le tiers s’engage à respecter la légalité et la conformité de la source des informations personnelles, par exemple en cas de violation de la part du tiers. Nous demanderons expressément à l'autre partie d'assumer la responsabilité légale correspondante; Dans le même temps, nous renforçons la sécurité des informations personnelles (y compris la préparation des informations sensibles, le stockage crypté des informations sensibles, le contrôle des droits d'accès, etc.). Nous protégerons les renseignements personnels obtenus indirectement en utilisant des mesures et des moyens de protection non moins efficaces que ceux que nous appliquons aux renseignements personnels de nos utilisateurs.
<br>
3 - exceptions au consentement autorisé
<br>
Vous comprenez et acceptez pleinement que nous n’avons pas besoin de votre consentement autorisé pour collecter, utiliser vos informations personnelles lorsque:
<br>
(1) en rapport avec la sécurité nationale, la sécurité de la défense;
<br>
2° En ce qui concerne la sécurité publique, la santé publique, un intérêt public important;
<br>
(3) dans le cadre de l'exécution judiciaire ou administrative, y compris la détection d'infractions, les poursuites, les procès et l'exécution des peines;
<br>
(4) nécessaire à la sauvegarde de vos intérêts légitimes vitaux ou de ceux d’une autre personne, tels que votre vie, vos biens, etc., mais pour lesquels il est difficile d’obtenir votre consentement;
<br>
(5) Les renseignements personnels que vous divulguez vous - même au public;
< br / >
(6) Lorsque des renseignements personnels sont recueillis à partir d’informations légalement divulguées publiquement, telles que des articles de presse légitimes, des informations gouvernementales rendues publiques, etc.
<br>
(7) dans la mesure où cela est nécessaire à la conclusion et à l’exécution d’un accord pertinent ou d’un autre document écrit avec vous;
<br>
(8) nécessaire pour maintenir un fonctionnement sûr et stable des produits et / ou services fournis, par exemple pour détecter, éliminer les défauts des produits et / ou services;
<br>
(9) nécessaire à la couverture légale de la presse;
<br>
(10) le traitement dépersonnalisé des données à caractère personnel contenues dans les résultats est effectué par un établissement de recherche universitaire lorsque cela est nécessaire pour la réalisation d’une statistique ou d’un Institut de recherche universitaire dans l’intérêt public et lorsque les résultats de la recherche ou de la description académique sont fournis à l’extérieur;
<br>
(11) dans les autres cas prévus par les lois et règlements.
<br>
Veuillez noter que, conformément à la loi applicable, si nous traitons les informations personnelles de manière à ce que les destinataires des données ne puissent pas identifier à nouveau une personne spécifique et ne puissent pas être récupérés, ou si nous pouvons effectuer des recherches désidentifiées, des analyses statistiques et des prévisions sur les informations collectées pour améliorer le contenu et la présentation de la plate - forme et fournir des produits ou des services pour soutenir les décisions commerciales, Et pour améliorer nos produits et services (y compris l'utilisation de données anonymisées pour l'apprentissage automatique ou la formation d'algorithmes de modèle), l'utilisation de ces données après traitement n'est pas nécessaire de vous en informer et d'obtenir votre consentement.
<br>
Si nous cessons d'exploiter les produits ou services de la plate - forme, nous cesserons rapidement de collecter vos informations personnelles, vous informerons de la cessation des activités sous forme de livraison ou d'annonce au cas par cas, et supprimerons ou anonymiserons les informations personnelles que nous détenons dans le cadre de nos activités abandonnées.
<br>
<strong> II. Comment nous utilisons les cookies </strong>
<br>
Vous pouvez modifier votre acceptation des cookies ou refuser nos cookies si votre navigateur ou les services supplémentaires du navigateur le permettent. Pour plus de détails, voir
Aboutcookies.org. Mais si vous le faites, cela peut affecter votre accès sécurisé à notre plate - forme dans certains cas et peut nécessiter de modifier les paramètres de l'utilisateur à chaque fois que vous accédez à notre plate - forme. Vous comprenez et acceptez que:
<br>
Lorsque vous visitez notre plate - forme, nous utilisons Google stats via des cookies pour enregistrer nos performances et vérifier l'efficacité de la publicité en ligne.
Les cookies sont de petites quantités de données envoyées à votre navigateur et stockées sur le disque dur de votre PC. Les cookies ne peuvent être envoyés sur le disque dur de votre ordinateur que si vous utilisez votre ordinateur pour accéder à notre plateforme.
<br>
Les cookies sont généralement utilisés pour enregistrer les habitudes et les préférences des visiteurs lorsqu'ils naviguent sur différents éléments de notre plateforme. Les données collectées par les cookies sont des statistiques collectives non nominatives et ne contiennent aucune donnée personnelle.
<br>
Les cookies ne peuvent pas être utilisés pour obtenir des données sur votre disque dur, votre adresse e - mail ou vos données personnelles qui permettent à la plateforme ou aux systèmes des fournisseurs de services de reconnaître votre navigateur et de capturer et mémoriser des informations. La plupart des navigateurs sont prédéfinis pour accepter les cookies. Vous pouvez choisir de configurer votre navigateur pour qu'il n'accepte pas les cookies ou pour qu'il vous avertisse dès qu'ils sont installés. Pourtant,
Si vous êtes configuré pour interdire les cookies, vous ne pourrez peut - être pas lancer ou utiliser certaines fonctionnalités de notre plateforme.
<br>
<strong> III. Comment nous partageons, transférons et divulguons publiquement vos informations </strong>
<br>
(i) le partage
<br>
Nous ne partageons pas vos informations personnelles avec des entreprises, des organisations et des personnes autres que les fournisseurs de services de cette plate - forme, sauf dans les cas suivants:
<br>
Partage dans des circonstances légales: Nous pouvons partager vos informations personnelles à l'extérieur conformément aux dispositions légales et réglementaires, aux procédures judiciaires, au règlement des litiges ou à la demande d'une autorité administrative ou judiciaire conformément à la loi.
<br>
Partage avec consentement explicite: après avoir obtenu votre consentement explicite, nous partageons vos informations personnelles avec d'autres parties.
<br>
Partage lorsque vous le choisissez activement: Nous partageons les informations nécessaires relatives à la transaction dans les informations de votre commande avec la partie commerçante de vos actifs numériques afin de répondre à vos besoins de transaction et de service après - vente.
<br>
Partage avec des partenaires autorisés: nos sociétés affiliées, des tiers de confiance qui nous aident à exploiter notre plateforme, à mener nos activités ou à vous fournir des services, dans la mesure où ces parties acceptent de garder ces informations confidentielles; Lorsque nous pensons que les informations divulguées sont appropriées, nécessaires pour se conformer à une loi, un règlement, une réglementation ou une ordonnance d'un tribunal ou d'une autre autorité compétente, pour appliquer nos politiques de plate - forme, pour le bon fonctionnement de la plate - forme, nécessaires à la fourniture de services par l'affilié ou pour protéger nos droits, notre propriété ou notre sécurité ou ceux d'autrui.
<br>
Ii) transfert
<br>
Nous ne transférons pas vos informations personnelles à des sociétés, organisations et individus, sauf dans les cas suivants:
<br>
Transfert avec consentement explicite: après avoir obtenu votre consentement explicite, nous transférons vos informations personnelles à d'autres parties;
<br>
Dans le cas d'une fusion, d'une acquisition ou d'une liquidation de faillite sur la plateforme, ou dans d'autres circonstances impliquant une fusion, une acquisition ou une liquidation de faillite, en ce qui concerne le transfert de renseignements personnels, nous exigerons que la nouvelle société ou organisation détenant vos renseignements personnels continue d'être soumise à La présente politique, sinon nous demanderons à cette société, organisation ou personne de vous demander à nouveau votre consentement autorisé.
<br>
Iii) divulgation publique
<br>
Nous ne divulguerons publiquement vos informations personnelles que si:
<br>
1. Avec votre consentement explicite ou sur la base de vos choix non sollicités, nous pouvons divulguer publiquement vos informations personnelles;
<br>
Nous pouvons divulguer des informations personnelles vous concernant conformément à la loi ou avec votre consentement, y compris les violations pertinentes et les mesures prises par la plate - forme à votre encontre, si nous déterminons que vous avez enfreint la loi ou les règlements ou avez commis une violation grave des accords et règles liés à la plate - forme, ou pour protéger la sécurité des biens personnels des utilisateurs de la plate - forme ou du public.
<br>
(IV) Exceptions au consentement préalable autorisé en cas de partage, de transfert ou de divulgation publique de renseignements personnels
<br>
Le partage, le transfert et la divulgation publique de vos renseignements personnels ne nécessitent pas votre consentement préalable:
<br>
1) liées à la sécurité nationale, à la sécurité de la défense;
<br>
2) liés à la sécurité publique, à la santé publique, à un intérêt public important;
<br>
3. Dans le cadre de l'exécution judiciaire ou administrative des enquêtes criminelles, des poursuites, des procès et de l'exécution des peines;
<br>
Pour préserver vos intérêts légitimes vitaux ou ceux d'une autre personne, tels que votre vie, vos biens, etc., mais pour lesquels il est difficile d'obtenir votre consentement;
<br>
5. Les renseignements personnels que vous divulguez vous - même au public;
<br>
Les informations personnelles sont collectées à partir d'informations légalement divulguées publiquement, telles que des informations légales, des informations gouvernementales publiques, etc.
<br>
Veuillez noter que, conformément à la loi applicable, lorsque nous traitons des informations personnelles dans le cadre de mesures techniques et autres mesures nécessaires pour que le destinataire des données ne puisse pas identifier à nouveau une personne en particulier et ne puisse pas les récupérer, le partage, le transfert et la divulgation publique de ces données après traitement ne nécessitent pas de vous en informer et d’obtenir votre consentement.
<br>
<strong> IV. Comment nous protégeons vos informations </strong>
<br>
Nous mettons en œuvre des mesures physiques, électroniques, administratives et techniques appropriées pour protéger et sécuriser vos données personnelles. Nous nous efforçons de veiller à ce que toutes les données personnelles collectées via notre plateforme soient protégées contre toute nuisance de la part de tiers qui ne sont pas affiliés avec nous. Les mesures de sécurité que nous prenons comprennent, mais ne sont pas limitées à:
<br>
(1) mesures physiques: les enregistrements contenant vos données personnelles sont stockés dans un endroit verrouillé.
<br>
(2) Mesures électroniques: les données informatiques contenant vos données personnelles sont stockées sur des systèmes informatiques et des supports de stockage soumis à des restrictions d’accès strictes.
<br>
(3) Mesures de gestion: Nous avons mis en place des services compétents en interne pour assurer la sécurité des informations des utilisateurs et avons mis en place un système de contrôle interne approprié, en appliquant le principe d'autorisation stricte pour le personnel susceptible d'avoir accès à vos informations, seul le personnel autorisé par nous aura accès à vos données personnelles,
Ces employés sont tenus de respecter notre code interne de confidentialité des données personnelles. En outre, nous encourageons en permanence la formation du personnel en ce qui concerne les lois et règlements, les directives de sécurité en matière de protection de la vie privée et la sensibilisation à la sécurité, et nous organisons régulièrement des formations internes sur les interventions d'urgence et des exercices d'urgence afin que le personnel concerné puisse maîtriser les Responsabilités de son poste et les stratégies et protocoles de résolution d'urgence.
<br>
(4) Mesures techniques: une technologie de cryptage telle que Secure Socket Layer Encryption peut être utilisée pour transmettre vos données personnelles.
<br>
(5) Mesures de sécurité: pour assurer la sécurité de vos informations, nous nous engageons à utiliser diverses technologies de sécurité courantes et des systèmes de gestion connexes pour minimiser les risques de compromission, de destruction, d'utilisation abusive, d'accès non autorisé, de divulgation non autorisée et de modification de vos informations. Par exemple: transmission cryptée via le logiciel SSL (Network Security Layer), stockage crypté des informations, accès strictement restreint aux centres de données. Lorsque nous transférons et stockons des informations personnelles sensibles (y compris des informations biométriques personnelles), nous appliquons des mesures de sécurité telles que le cryptage, le contrôle des autorisations, la dépersonnalisation, la désensibilisation, etc.
<br>
(6) Autres mesures: examiner régulièrement nos processus de collecte, de stockage et de traitement des données personnelles;
Et limiter l'accès à vos données par nos employés et fournisseurs conformément aux principes nécessaires, et nos employés et fournisseurs sont soumis à des obligations contractuelles strictes de confidentialité.
<br>
Si vous avez connaissance d'une faille de sécurité sur notre plateforme, veuillez nous contacter immédiatement afin que nous puissions prendre les mesures appropriées dès que possible.
<br>
3, malgré la mise en œuvre des mesures techniques et de sécurité décrites ci - dessus, nous ne pouvons pas garantir la sécurité absolue de la transmission des données sur Internet,
Par conséquent, nous ne pouvons pas garantir de manière absolue que les données personnelles que vous nous fournissez via notre plateforme seront sécurisées en tout temps. Nous ne mettrons pas régulièrement à jour et rendrons public le contenu concernant les risques de sécurité, les rapports d'évaluation de l'impact sur la sécurité des informations personnelles, etc., que vous pouvez obtenir via cette plateforme.
<br>
<strong> V. Comment gérez - vous vos informations? </strong>
<br>
Vous pouvez accéder à vos informations et les gérer de la manière suivante:
<br>
(i) interroger, corriger et supprimer vos informations
<br>
Vous avez le droit, sur demande, d’obtenir une copie de vos données personnelles et de déterminer si les informations que nous détenons à votre sujet sont exactes et à jour. Si l’une de vos données personnelles est inexacte, vous pouvez demander que vos informations soient mises à jour. Vous pouvez également demander la suppression de vos données personnelles, mais nous pouvons refuser votre demande de suppression dans certaines circonstances, par exemple lorsque la loi l’exige ou à d’autres fins légales. Pour les demandes d'accès, de rectification ou de suppression de données, vous pouvez nous contacter aux coordonnées indiquées à l'article VIII.
<br>
Pour répondre aux demandes d'accès, de rectification ou de suppression de données, Nous vérifierons l'identité de la partie requérante afin de nous assurer qu'elle est légalement autorisée à faire une telle demande. Bien que notre objectif soit de répondre à ces demandes sans frais, nous nous réservons le droit de vous facturer des frais raisonnables si votre demande est répétitive ou lourde.
<br>
(II) Modifier la portée de votre consentement autorisé
<br>
Chaque fonction commerciale nécessite des informations personnelles de base pour être remplie (voir la « partie I» de la présente politique de confidentialité). En outre, vous pouvez donner ou retirer votre consentement autorisé en nous contactant aux coordonnées indiquées à l’article VIII.
<br>
Lorsque vous retirez votre consentement, nous ne traiterons plus les informations personnelles correspondantes. Toutefois, votre décision de retirer votre consentement n’affectera pas le traitement antérieur des renseignements personnels fondé sur votre autorisation.
<br>
(III) déconnexion de votre compte
<br>
Vous pouvez demander la déconnexion de votre compte en nous contactant aux coordonnées indiquées à la clause VIII; Après vous être déconnecté activement de votre compte, nous cesserons de vous fournir des produits ou des services, supprimerons vos informations personnelles comme requis par la loi applicable ou les traiterons de manière anonyme.
<br>
(IV) répondre à votre demande ci - dessus
<br>
Pour des raisons de sécurité, vous devrez peut - être fournir une demande écrite ou prouver votre identité. Nous pouvons vous demander de vérifier votre identité avant de traiter votre demande.
<br>
Nous vous répondrons dans les 15 jours. Si vous n'êtes pas satisfait, vous pouvez également déposer une plainte via les coordonnées que nous avons fournies.
<br>
Nous ne facturons pas de frais en principe pour vos demandes raisonnables, mais nous facturerons certains frais à notre discrétion pour les demandes répétées multiples qui dépassent une limite raisonnable. Nous pouvons rejeter les demandes d'informations qui ne sont pas directement liées à votre identité, qui ne sont pas dupliquées de manière injustifiée ou qui nécessitent des moyens techniques excessifs (par exemple, pour développer de nouveaux systèmes ou modifier fondamentalement les pratiques actuelles), qui présentent un risque pour les intérêts légitimes d'autrui ou qui sont irréalistes.
<br>
Nous ne serons pas en mesure de répondre à votre demande, conformément aux exigences légales et réglementaires, dans les cas suivants:
<br>
1) liées à la sécurité nationale, à la sécurité de la défense;
<br>
2) liés à la sécurité publique, à la santé publique, à un intérêt public important;
<br>
3. Dans le cadre, entre autres, des enquêtes criminelles, des poursuites, des procès et de l'exécution des peines;
<br>
4. S'il existe des preuves suffisantes de mauvaise foi subjective ou d'abus de droit de la part de la personne concernée par les informations personnelles;
<br>
Répondre à votre demande porterait gravement atteinte à vos intérêts légitimes ou à ceux d'autres personnes ou organisations;
<br>
6) concernant les secrets commerciaux.
<br>
<strong> VI. Comment nous traitons les informations des mineurs </strong>
<br>
La plateforme est ouverte aux enfants et si nous découvrons ou soupçonnons qu’un utilisateur a moins de 14 ans, nous demandons à l’utilisateur de fermer son compte et nous ne permettrons pas à l’utilisateur de continuer à utiliser les produits ou services de la plateforme. Nous supprimerons les données concernées dès que possible. Si vous connaissez une personne de moins de 14 ans qui utilise nos services, veuillez nous en informer afin que nous puissions prendre des mesures pour l'empêcher d'accéder à nos produits ou services.
<br>
Pour les mineurs âgés de 14 ans révolus mais de moins de 18 ans, nous nous attendons à ce qu'un parent ou un tuteur guide le mineur dans l'utilisation de nos services. Nous protégerons la confidentialité et la sécurité des informations des mineurs conformément aux lois et règlements applicables.
<br>
Si vous êtes mineur, nous vous recommandons de demander à vos parents ou tuteurs de lire cette politique et d’utiliser nos services ou de nous fournir vos informations avec le consentement de vos parents ou tuteurs. Dans les cas où vos informations sont collectées avec le consentement d'un parent ou d'un tuteur, nous n'utiliserons ou ne divulguerons publiquement ces informations que si la loi le permet, si le parent ou le tuteur y consent expressément ou si cela est nécessaire pour protéger vos droits et intérêts. Si votre tuteur n'accepte pas que vous utilisiez nos services ou que vous nous fournissiez des informations conformément à la présente politique, veuillez mettre fin immédiatement à votre utilisation de nos services et nous en informer rapidement afin que nous puissions prendre les mesures appropriées.
<br>
Si vous êtes le parent ou le tuteur d'un mineur, lorsque vous avez des questions sur le traitement des informations d'un mineur sous votre garde, veuillez nous contacter aux coordonnées publiées dans la présente politique.
<br>
<strong> VII. Comment cette politique de confidentialité est - elle mise à jour? </strong>
<br>
Notre politique de confidentialité peut changer.
<br>
Nous ne limiterons pas vos droits en vertu de la présente politique de confidentialité sans votre consentement explicite. Nous publierons toute modification apportée à notre politique de confidentialité sur nos canaux officiels. Si vous n'êtes pas d'accord avec le contenu révisé, vous devez cesser immédiatement d'accéder à la plateforme. Lorsqu'une version mise à jour de la politique de confidentialité est publiée, votre accès continu à la plateforme affiche et indique que vous acceptez le contenu de cette mise à jour et que vous acceptez de vous conformer à cette politique de confidentialité mise à jour.
<br>
Nous fournissons également des notifications plus importantes pour les changements importants (y compris lorsque nous vous informerons ou même vous fournirons des conseils de fenêtre par le biais de la publicité sur cette plate - forme).
<br>
Les changements importants auxquels cette politique fait référence incluent, mais ne sont pas limités à:
<br>
1. Changements majeurs dans notre modèle de service. Tels que les finalités du traitement des informations personnelles, le type d’informations personnelles traitées, la manière dont les informations personnelles sont utilisées, etc.;
<br>
2, nous avons des changements majeurs dans le contrôle, etc. Par exemple, un changement de Contrôleur d'informations résultant d'une réorganisation de fusions et acquisitions, etc.;
<br>
3. Le changement de l'objet principal du partage, du transfert ou de la divulgation publique des renseignements personnels;
<br>
4. Des changements importants dans vos droits de participation au traitement des informations personnelles et dans la manière dont ils sont exercés;
<br>
Les modifications apportées à notre département responsable de la sécurité des informations personnelles, à nos coordonnées et à nos canaux de réclamation;
<br>
Le rapport d'évaluation de l'impact sur la sécurité des renseignements personnels indique un risque élevé.
</p>`,

	//用户协议
	userAgreementText: `<p> important: </p>
<p> <br>
Nous vous rappelons en particulier:
<br>
• 1 les actifs numériques eux - mêmes ne sont pas émis par une institution financière ou une société ou par ce site Web;
<br>
• 2 le marché des actifs numériques est entièrement nouveau, non confirmé et peut ne pas croître;
<br>
• 3
Les actifs numériques sont largement utilisés par les spéculateurs, relativement peu utilisés par les marchés de détail et commerciaux, il existe des risques extrêmement élevés pour les transactions d'actifs numériques, il n'y a pas de restrictions à la hausse et à la baisse tout au long de la journée, les prix sont susceptibles de fluctuer considérablement sous l'Influence des banquiers, des politiques gouvernementales mondiales;
<br>
• 4
La société se réserve le droit de suspendre ou de résilier votre compte à tout moment, ou de suspendre ou de résilier votre utilisation des services ou des transactions d'actifs numériques fournis par le site, si elle estime, à son seul jugement, que vous avez violé le présent accord ou que les services fournis par le site ou votre Utilisation des services fournis par le site sont illégaux en vertu des lois de votre juridiction.
Le Trading d'actifs numériques comporte des risques extrêmement élevés et ne convient pas à la grande majorité des gens. Vous comprenez et comprenez que cette transaction peut entraîner une perte partielle ou totale, vous devez donc décider du montant de la transaction dans la mesure où vous pouvez vous permettre de perdre. Vous comprenez et comprenez que les actifs numériques créent des risques dérivés, il est donc conseillé de demander l’aide d’un conseiller professionnel en cas de doute. En outre, outre les risques mentionnés ci - dessus, il existe un risque de non - prévision. Vous devez prendre toute décision d'achat ou de vente d'actifs numériques en considérant attentivement et en faisant preuve d'un jugement clair afin d'évaluer votre situation financière et les risques mentionnés ci - dessus, et vous assumez l'intégralité des pertes qui en découlent et nous déclinons toute responsabilité à cet égard.
</p>
<p> <br>
En vous saluant:
<br> <br>
</p>
<p>
• 1
Les opinions, messages, explorations, analyses, prix, conseils et autres informations sur ce site sont des commentaires généraux sur le marché et ne constituent pas des conseils en investissement. Nous déclinons toute responsabilité pour toute perte découlant directement ou indirectement de la confiance accordée à ces informations, y compris, mais sans s'y limiter, toute perte de profit.
<br>
• 2
Le contenu de ce site Web peut changer à tout moment sans préavis, et nous avons pris des mesures raisonnables pour assurer l'exactitude des informations sur le site Web, mais nous ne pouvons pas garantir leur niveau d'exactitude, et nous ne serons pas responsables de toute perte, directe ou indirecte, découlant de l'information sur le site Web ou de tout retard ou échec dans la connexion Internet, la transmission ou la réception de tout avis et information.
<br>
• 3
L'utilisation de systèmes de négociation sous forme d'Internet comporte également des risques, y compris, mais sans s'y limiter, l'échec des logiciels, du matériel et des liens Internet. Étant donné que nous ne pouvons pas contrôler la fiabilité et la disponibilité d'Internet, nous n'assumons aucune responsabilité pour les distorsions, les retards et les échecs de liaison.
<br>
• 4
Il est interdit d'utiliser ce site Web pour toute activité commerciale immorale telle que la manipulation malveillante des marchés, le commerce inapproprié, etc. si de tels événements sont détectés, ce site Web prendra des mesures de protection préventives telles que des avertissements, des restrictions sur les transactions, des fermetures de comptes, etc. contre toute manipulation malveillante des prix, toute influence malveillante sur les systèmes de Trading, etc. et nous déclinons toute responsabilité en découlant et nous nous réservons le droit de demander des comptes aux personnes concernées.
</p> <br>
<p> I. Généralités </p> <br>
<p>
• 1.1
Le contrat d'utilisation (ci - après dénommé « Le présent contrat» ou « les présentes Conditions générales») est constitué du corps du contrat, des conditions de confidentialité, de la politique de confidentialité, de know your customer et de la politique de lutte contre le blanchiment d'argent, ainsi que des règles, déclarations, instructions, etc. publiées ou susceptibles d'être publiées sur le site.
<br>
• 1.2
Vous devez lire attentivement le présent contrat avant d'utiliser chacun des services offerts sur le site et, en cas d'incompréhension ou si nécessaire, consulter un avocat spécialisé. Si vous n’acceptez pas le présent contrat et / ou les modifications qui y sont apportées à tout moment, nous vous prions de cesser immédiatement d’utiliser les services offerts sur le site ou de ne plus y accéder. Une fois que vous accédez au site, utilisez l'un des services du site ou toute autre action similaire, vous reconnaissez que vous avez pris connaissance et que vous acceptez pleinement chaque contenu du présent contrat, y compris toutes les modifications apportées au présent contrat par le site à tout moment.
<br>
• 1.3
Vous pouvez devenir membre du site Web (ci - après le « membre ») en remplissant les informations pertinentes requises par le site Web et en vous inscrivant avec succès après avoir suivi d’autres procédures pertinentes, et en cliquant sur le bouton « accepter » pendant le processus d’inscription, vous concluez un accord sous forme électronique signée avec la société; Ou lorsque vous cliquez sur un bouton marqué « accepter» ou similaire dans le cadre de l'utilisation du site Web ou que vous utilisez effectivement les services fournis par le site Web d'une autre manière permise par le site Web, vous reconnaissez que vous êtes pleinement conscient, acceptez et acceptez d'être lié par toutes les dispositions du présent Accord, et l'absence de signature écrite manuscrite de votre part n'affecte pas le caractère juridiquement contraignant du présent accord pour vous.
<br>
• 1.4 En devenant membre du site, vous recevrez un numéro de compte de membre et un mot de passe correspondant dont vous êtes responsable; Vous êtes légalement responsable de toutes les activités et événements liés à votre compte.
<br>
1.5 seuls les membres qui deviennent membres du site peuvent utiliser la plate - forme de négociation d'actifs numériques fournie par le site pour effectuer des transactions et profiter d'autres services disponibles uniquement pour les membres, comme indiqué sur le site.
<br>
1.6 En vous inscrivant et en utilisant l'un des services et fonctionnalités offerts par ce site, vous êtes réputé avoir lu, compris et:
<br>
• 1.6.1 accepter d'être lié par tous les termes et conditions de cet accord.
<br>
• 1.6.2
Vous confirmez que vous avez au moins 16 ans ou que vous avez l’âge légal pour conclure un contrat en vertu de différentes lois applicables, et que votre inscription, vente ou achat, publication d’informations, etc. sur le site doit être conforme aux lois et réglementations applicables dans un pays souverain ou une région qui a juridiction sur vous, et que vous êtes en mesure d’accepter ces conditions et de conclure des transactions en utilisant le site pour effectuer des transactions sur des actifs numériques.
<br>
1.6.3 vous garantissez que les actifs numériques vous appartenant impliqués dans la transaction sont légalement acquis et détenus.
<br>
1.6.4 vous acceptez d'être seul responsable de vos propres actions commerciales ou non commerciales et de tout gain ou perte.
<br>
1.6.5 vous confirmez que les informations fournies lors de votre inscription sont véridiques et exactes.
<br>
1.6.6 vous acceptez de vous conformer aux dispositions de toute loi pertinente à des fins fiscales, y compris la Déclaration des bénéfices de toute transaction.
<br>
1.6.7 vous acceptez de ne pas, à tout moment, vous engager ou vous engager dans des actions ou des activités préjudiciables aux intérêts du site ou de la société, que ce soit en relation ou non avec les services fournis par le site.
<br>
1.6.8 le présent contrat régit uniquement la relation de droits et d'obligations entre vous et nous, et ne traite pas des relations juridiques et des litiges juridiques entre les utilisateurs du site et d'autres sites Web et vous résultant de transactions sur des actifs numériques.
</p> <br>
<p> II. Modification de l'accord </p> <br>
<p>
Nous nous réservons le droit de modifier le présent contrat de temps à autre et de le publier sur le site Web sans vous en informer séparément, et le contrat modifié sera affiché sur la première page du présent contrat avec effet immédiat et automatique dès sa publication sur le site Web. De temps à autre, vous devez consulter et suivre les mises à jour et les mises à jour du présent contrat et, si vous n’acceptez pas les modifications, cesser immédiatement d’utiliser les services du site; En continuant à utiliser les services du site, vous acceptez et acceptez d'être lié par l'accord modifié.
</p> <br>
<p> III, enregistrement </p> <br>
<p>
• 3.1 admissibilité à l’inscription
<br>
Vous reconnaissez et vous engagez à être une personne physique, une personne morale ou une autre organisation ayant la capacité requise par la loi applicable pour conclure le présent contrat et utiliser les services du site Web au moment où vous complétez le processus d’inscription ou utilisez effectivement les services du site Web d’une autre manière autorisée par le site Web. Une fois que vous cliquez sur le bouton d'inscription de consentement, vous déclarez que vous - même ou votre agent autorisé avez accepté le contenu de l'Accord et que votre agent a enregistré et utilisé les services du site. Si vous ne remplissez pas les conditions susmentionnées, vous et vos agents autorisés êtes responsables de toutes les conséquences qui en découlent, et la société se réserve le droit de résilier ou de geler définitivement votre compte et d'engager sa responsabilité envers vous et vos agents autorisés.
<br>
• 3.2 but de l'enregistrement
<br>
Vous reconnaissez et promettez que: vous ne vous inscrivez pas sur le site dans le but de violer les lois et règlements ou de perturber l'ordre des transactions sur les actifs numériques sur le site.
<br>
• 3.3 processus d'inscription
<br>
• 3.3.1
Vous acceptez de fournir des informations telles qu'une adresse e - mail valide, un numéro de téléphone portable, etc., tel que requis par la page d'inscription des utilisateurs de ce site Web, et vous pouvez utiliser votre numéro de téléphone portable fourni pour entrer sur ce site Web comme moyen d'atterrissage. Le cas échéant, conformément aux lois et règlements applicables dans les différents pays, vous devez fournir votre vrai nom, vos documents d'identité et autres informations pertinentes conformément aux dispositions légales et réglementaires et aux dispositions relatives à la protection de la vie privée et à la lutte contre le blanchiment d'argent, et mettre à jour en permanence vos données d'enregistrement conformément aux exigences en matière de rapidité, d'exhaustivité et d'exactitude. Toutes les données tapées à l'origine seront référencées en tant que données d'inscription. Vous êtes responsable de la véracité, de l'exhaustivité et de l'exactitude de ces informations et êtes responsable de toute perte directe ou indirecte et des conséquences négatives qui en découlent.
<br>
3.3.2 vous avez le droit d'obtenir un numéro de compte et un mot de passe sur le site Web lorsque vous fournissez légalement, complètement et efficacement les informations requises pour vous inscrire et que vous avez été vérifié, et que vous obtenez un numéro de compte et un mot de passe sur le site Web que vous considérez comme une inscription réussie et que vous pouvez effectuer une inscription sur le site Web.
<br>
3.3.3 vous acceptez de recevoir des e - mails et / ou des messages courts envoyés par le site en rapport avec l'administration, le fonctionnement du site.
</p> <br>
<p> IV, service </p> <br>
<p>
4.1 contenu du Service
<br>
4.1.1 vous avez le droit de consulter des informations en temps réel sur le fonctionnement et les transactions des produits d'actifs numériques sur le site, de soumettre des instructions de négociation d'actifs numériques sur le site et de conclure des transactions d'actifs numériques.
<br>
4.1.2 vous avez le droit de consulter les informations de votre compte de membre sur ce site, d'appliquer les fonctionnalités fournies sur ce site.
<br>
4.1.3 vous avez le droit de participer aux activités du site organisées par le site conformément aux règles d'activité publiées sur le site.
<br>
• 4.1.4 autres services que le site s’engage à vous fournir.
<br>
4.2. Règles de service vous vous engagez à respecter les règles de service suivantes du site:
<br>
• 4.2.1
Vous devez respecter les lois et règlements et utiliser et conserver correctement votre numéro de compte et votre mot de passe d'accès, votre mot de passe de fonds et le Code d'authentification de votre téléphone portable. Vous êtes seul responsable de toute action et conséquence effectuée en utilisant votre numéro de compte et votre mot de passe d'accès, votre mot de passe de fonds, votre code de vérification de téléphone portable. Lorsque vous découvrez que le numéro de compte, le mot de passe d'accès, le mot de passe de fonds, le Code de vérification du site Web sont utilisés par un tiers non autorisé par vous, ou qu'il existe d'autres problèmes de sécurité liés au numéro de compte, vous devez en informer immédiatement et efficacement le site Web en lui demandant de suspendre les services du numéro de compte du site Web. Le site a le droit d'agir sur ces demandes dans un délai raisonnable, mais le site n'est pas responsable des conséquences (y compris, mais sans s'y limiter, toute perte pour vous) qui ont déjà eu lieu avant d'agir. Vous ne pouvez pas donner, emprunter, louer, transférer ou autrement céder le numéro de compte du site à une autre personne sans le consentement du site.
<br>
4.2.3 vous acceptez d'être responsable de toutes les activités qui se produisent sous votre numéro de compte, votre mot de passe sur ce site (y compris, mais sans s'y limiter, la divulgation d'informations, la publication d'informations, le consentement au clic en ligne ou la soumission de divers types d'accords de règles, le renouvellement d'accords en ligne ou l'achat de services, etc.).
<br>
4.2.4
Vous ne devez pas interférer de mauvaise foi avec le bon déroulement des transactions d'actifs numériques, perturber l'ordre des transactions lorsque vous effectuez des transactions d'actifs numériques sur ce site; Ne pas interférer avec le bon fonctionnement du site Web ou interférer avec l’utilisation des services du site Web par d’autres utilisateurs, que ce soit par des moyens techniques ou autres; La bonne volonté de ce site ne doit pas être dénigrée de manière malveillante, par exemple par des faits fictifs.
<br>
4.2.5 si vous êtes en conflit avec un autre utilisateur à la suite d'une transaction en ligne, vous ne pouvez pas demander des informations pertinentes sur le site autrement que par des moyens judiciaires ou administratifs.
<br>
4.2.6 les autres coûts que vous engagez pour utiliser les services proposés sur le site sont à votre seule discrétion et à votre charge.
<br>
• 4.3. Règles relatives aux produits
<br>
• 4.3.1 parcourir les informations de transaction
<br>
• vous devez lire attentivement tout ce qui est inclus dans les informations de transaction lorsque vous naviguez sur ce site, y compris, mais sans s'y limiter, le prix, le volume de commande, les frais de traitement, l'orientation d'achat ou de vente,
Vous acceptez pleinement que tout ce qui est inclus dans les informations de transaction soit négocié par un bouton cliquable derrière.
<br>
• 4.3.2 voir les détails de la transaction
<br>
• vous pouvez consulter les enregistrements de clôture correspondants via votre compte.
</p> <br>
<p> V. Droits et obligations de ce site Web </p> <br>
<p>
• 5.1
Si vous n'êtes pas éligible à l'inscription comme convenu dans le présent Accord, le site se réserve le droit de vous refuser l'inscription et, si vous êtes inscrit, le site se réserve le droit de vous déconnecter de votre compte de membre et le site se réserve le droit d'engager sa responsabilité envers vous ou votre agent autorisé. Dans le même temps, le site se réserve le droit de décider d'accepter ou non votre inscription dans tout autre cas.
<br>
5.2 Le site se réserve le droit de suspendre ou de résilier votre compte et l'utilisation de tous les comptes associés s'il estime que vous ou les utilisateurs de votre compte affilié n'êtes pas appropriés pour des investissements à haut risque.
<br>
5.3 Le site Web a le droit de suspendre ou de résilier l'utilisation d'un compte lorsqu'il découvre que l'utilisateur n'est pas le titulaire initial du compte.
<br>
5.4 Le droit de vous informer de la correction, de la mise à jour des informations ou de l'interruption, de la cessation ou de la cessation de la fourniture des services du site Web lorsque le site Web soupçonne raisonnablement que les informations que vous avez fournies sont erronées, fausses, périmées ou incomplètes, par des moyens de détection tels que des tests techniques, des tests manuels, etc.
<br>
5.5 Le site se réserve le droit de corriger toute information affichée sur le site si une erreur manifeste est constatée.
<br>
• 5,6
Le site se réserve le droit de modifier, d’interrompre ou de mettre fin aux services du site à tout moment, et l’exercice par le site du droit de modifier ou d’interrompre les services ne nécessite pas de vous en informer au préalable; La résiliation d'un ou plusieurs services du site Web par le site Web prend effet à la date à laquelle le site Web publie une annonce de résiliation sur le site Web.
<br>
5.7 Le site prendra les moyens techniques et les mesures administratives nécessaires pour garantir le bon fonctionnement du site et fournir l'environnement de négociation et les services de négociation nécessaires et fiables pour maintenir l'ordre des transactions d'actifs numériques.
<br>
5.8 si vous n'avez pas utilisé votre numéro de compte de membre et votre mot de passe pour accéder au site pendant un an, le site a le droit de vous déconnecter de votre compte sur le site. Après la déconnexion du numéro de compte, ce site a le droit d'ouvrir le nom de membre correspondant à d'autres utilisateurs enregistrés pour l'utilisation.
<br>
5.9 Le site protège la sécurité de vos actifs numériques grâce à des mesures telles que le renforcement de la technologie, l'amélioration des mesures de sécurité et vous informera à l'avance en cas de risque prévisible pour la sécurité de votre compte.
<br>
• 5.10 Le site a le droit de supprimer à tout moment les informations contenues sur le site qui ne sont pas conformes aux lois et règlements ou aux dispositions du site, etc., et l'exercice de ces droits par le site ne nécessite pas de vous en informer au préalable.
<br>
• 5.11
Le site a le droit de vous demander des informations ou des documents supplémentaires, conformément aux lois et règlements, règles, ordonnances, etc. du pays souverain ou de la région dont vous êtes membre, et de prendre des mesures raisonnables pour se conformer aux exigences des normes locales, auxquelles vous êtes tenu de coopérer; Le site se réserve le droit de suspendre ou de cesser définitivement de vous ouvrir tout ou partie des services du site, tel que requis par les lois et règlements, règles, ordonnances, etc. du pays souverain ou du territoire auquel vous appartenez.
</p> <br>
<p> VI. Limitation et exclusion de responsabilité </p> <br>
<p>
6.1 vous comprenez et acceptez que nous ne sommes en aucun cas responsables de:
<br>
6.1.1 perte de revenus;
<br>
6.1.2 perte de bénéfices commerciaux ou de contrats;
<br>
6.1.3 pertes résultant de l'interruption des activités;
<br>
• 6.1.4 perte de devises pouvant être économisées;
<br>
• 6.1.5 pertes résultant de problèmes d'information;
<br>
6.1.6 perte d'opportunité, de bonne volonté ou de réputation;
<br>
6.1.7 dommages ou pertes de données;
<br>
6.1.8 le coût d’achat d’un produit ou service de remplacement;
<br>
• 6.1.9
Toute perte ou dommage indirect, spécial ou accessoire résultant d'un délit (y compris la négligence), d'un manquement ou de toute autre cause, que cette perte ou ce dommage ait été raisonnablement prévisible pour nous ou non; Que nous soyons ou non informés à l'avance de la possibilité d'une telle perte ou d'un tel dommage.
<br>
• Les articles 6.1.1 à 8.1.9 sont tous indépendants les uns des autres.
<br>
6.2 vous comprenez et acceptez que nous ne serons pas responsables envers vous de tout dommage résultant de l'une des circonstances suivantes:
<br>
6.2.1 il peut y avoir des violations ou des manquements importants à vos transactions spécifiques.
<br>
6.2.2 votre comportement sur ce site est soupçonné d'être illégal ou immoral.
<br>
6.2.3 les frais et les pertes résultant d'actions telles que l'achat ou l'obtention de données, d'informations ou la réalisation de transactions par le biais des services du site Web.
<br>
6.2.4 votre mauvaise interprétation des services de ce site Web.
<br>
6.2.5 toute autre perte non imputable à nous et liée aux services fournis sur le site.
<br>
• 6.3
Nous nous opposons à la maintenance des équipements de réseaux d'information, aux pannes de connexion aux réseaux d'information, aux pannes d'ordinateurs, de communications ou d'autres systèmes, aux pannes d'électricité, aux conditions météorologiques, aux accidents, aux grèves, aux conflits du travail, aux émeutes, aux soulèvements, aux émeutes, à L'insuffisance de la productivité ou des moyens de production, aux incendies, aux inondations, aux tempêtes, aux explosions, aux guerres, aux banques ou à d'autres causes coopératives, à l'effondrement du marché des actifs numériques, aux actions gouvernementales,
Nous déclinons toute responsabilité en cas d'incapacité ou de retard dans le service causé par une ordonnance d'une autorité judiciaire ou administrative, par d'autres actions indépendantes de notre volonté ou hors de notre contrôle, ou pour des raisons imputables à des tiers, ainsi que pour les dommages qui vous ont causé.
<br>
• 6.4
Nous ne pouvons pas garantir que toutes les informations, programmes, textes, etc. contenus sur ce site Web sont entièrement sécurisés et exempts de virus, chevaux de Troie et autres programmes malveillants, de sorte que votre accès, votre utilisation de l'un des services du site Web ou le téléchargement et l'utilisation de tout programme, information, données, etc. téléchargés sont à votre discrétion personnelle et à vos propres risques et pertes éventuelles.
<br>
• 6,5
Nous n'offrons aucune garantie et n'assumons aucun engagement concernant les informations, produits et activités de tout site Web tiers lié à ce site Web et toute autre forme de contenu qui ne nous appartient pas, et votre utilisation de tout service, information et produit offert par un site Web tiers est à votre discrétion et sous votre responsabilité.
<br>
• 6,6
Nous ne donnons aucune garantie, expresse ou implicite, concernant votre utilisation des services du site, y compris, mais sans s'y limiter, la pertinence des services fournis par le site, l'absence d'erreurs ou d'omissions, la continuité, l'exactitude, la fiabilité, l'adéquation à un usage particulier. De même, nous ne faisons aucun engagement et ne donnons aucune garantie quant à la validité, l'exactitude, l'exactitude, la fiabilité, la qualité, la stabilité, l'exhaustivité et l'actualité de la technologie et des informations impliquées dans les services fournis sur ce site. L'accès ou l'utilisation des services fournis sur ce site est à votre discrétion personnelle et à vos propres risques et pertes éventuelles. Nous ne donnons aucune garantie, expresse ou implicite, quant au marché, à la valeur et au prix des actifs numériques, etc. vous comprenez et comprenez que le marché des actifs numériques est instable, que les prix et les valeurs peuvent fluctuer considérablement ou s’effondrer à tout moment, et que le Trading d’actifs numériques est votre choix et votre Décision personnels librement et à vos propres risques et pertes éventuelles.
<br>
• 6,7
Nos garanties et engagements énoncés dans le présent Accord sont les seules garanties et représentations de notre part en ce qui concerne le présent Accord et les services fournis par le site Web, et remplacent les garanties et engagements découlant de toute autre manière, écrite ou orale, expresse ou implicite. Toutes ces garanties et représentations représentent uniquement nos propres engagements et garanties et ne garantissent pas le respect par un tiers des garanties et engagements énoncés dans le présent Accord.
<br>
6.8 nous ne renonçons à aucun droit non mentionné dans les présentes de limiter, d’exonérer ou de compenser notre responsabilité pour les dommages dans toute la mesure où la loi s’applique.
<br>
6.9 lorsque vous vous inscrivez, vous reconnaissez que toute action que nous effectuons conformément aux règles énoncées dans le présent contrat est à vos risques et périls.
</p> <br>
<p> VII, résiliation de l'accord </p> <br>
<p>
7.1 Le site a le droit de résilier l'ensemble des services du site conformément aux dispositions du présent contrat, qui prend fin à la date de résiliation de l'ensemble des services du site.
<br>
7.2 après la résiliation du présent contrat, vous n’avez pas le droit d’exiger que le site continue de lui fournir des services ou de remplir toute autre obligation, y compris, mais sans s’y limiter, d’exiger que le site conserve pour vous ou vous divulgue toute information contenue dans son numéro de compte original sur le site,
Vous transmettre, à vous ou à des tiers, toute information qu’ils n’ont pas lue ou envoyée.
<br>
7.3 la résiliation du présent contrat n’affecte pas la responsabilité supplémentaire que le signataire peut exiger de la partie défaillante.
</p> <br>
<p> VIII. Propriété intellectuelle </p> <br>
<p>
8.1 L'ensemble des résultats intellectuels contenus sur ce site Web comprend, mais sans s'y limiter, les logos du site Web, les bases de données, la conception du site Web, les textes et les graphiques, les logiciels, les photographies, les vidéos, la musique, les sons et leurs combinaisons, la compilation de logiciels, le code source associé et les logiciels.
Les droits de propriété intellectuelle (y compris les applets et les scripts) appartiennent à ce site Web. Vous ne pouvez pas copier, altérer, copier, envoyer ou utiliser à des fins commerciales tout matériel ou contenu décrit ci - dessus.
<br>
8.2 tous les droits (y compris, mais sans s'y limiter, la bonne volonté et les marques de commerce, logos) contenus dans le nom de ce site sont la propriété de la société.
<br>
8.3 vous ne devez pas utiliser ou disposer illégalement du site ou des droits de propriété intellectuelle d'autrui dans le cadre de votre utilisation des services du site. Vous ne pouvez pas publier les informations publiées sur ce site Web sous quelque forme que ce soit ou autoriser d'autres sites Web (et médias) à les utiliser.
<br>
8.4 votre accès au site ou votre utilisation de l’un des services proposés sur le site ne constitue pas un transfert de droits de propriété intellectuelle de notre part.
</p> <br>
<p> IX, calculé </p> <br>
<p> tous les calculs de transaction sont vérifiés par nous, mais nous ne pouvons pas garantir que l'utilisation du site sera sans interférence ou sans erreur. </p> <br>
<p> Ten, divisibilité </p> <br>
<p> Si une disposition du présent Accord est jugée inapplicable, nulle ou illégale par un tribunal compétent, cela n'affectera pas la validité des autres dispositions du présent Accord. </p> <br>
<p> Xi, relation non - Mandataire </p> <br>
<p> rien dans le présent Accord ne peut être considéré comme créant, impliquant ou nous traitant autrement comme votre agent, fiduciaire ou autre représentant, sauf dans les cas prévus ailleurs dans le présent Accord. </p> <br>
<p> XII, abstention </p><br>
<p>
La renonciation de notre part ou de la part de l'une de vos parties à la responsabilité ou à toute autre responsabilité en cas de violation des présentes ne peut être considérée ou interprétée comme une renonciation à toute autre responsabilité en cas de violation; Le non - exercice de tout droit ou recours ne peut en aucun cas être interprété comme une renonciation à ces droits ou recours.
</p> <br>
<p> XIII, titre </p> <br>
<p> tous les titres sont fournis pour la commodité de la formulation de l'Accord et ne sont pas destinés à élargir ou limiter le contenu ou la portée des dispositions de cet accord. </p>
<p> Protocole de remplissage d'autrui: usdt, ETH, BTC, transactions multidevises pour les autres, une fois qu'une pénalité stricte est détectée! </p>
<p> </p> <br>
<p> XIV, entrée en vigueur et interprétation de l'accord </p> <br>
<p>
14.1 Le présent Accord entre en vigueur lorsque vous cliquez sur votre consentement sur la page d'inscription du site Web pour vous inscrire et compléter le processus d'inscription, obtenir un numéro de compte et un mot de passe sur le site Web et lie le site Web et vous - même.
<br>
• 14.2 l'interprétation finale de cet accord appartient à ce site Web.
<br>
• 14,3
La demande individuelle d'utilisation du compte doit être soumise à la demande du Service GTM compétent pour l'ouverture d'un compte nominatif sur la base de ses documents valides et de son compte de paiement conformément aux conditions requises, après examen de l'admissibilité par le service GTM compétent; La demande de GTM et de son compte est réservée à l'usage personnel du titulaire du compte, approuvé par le service compétent de GTM, et ne peut être louée ni prêtée.
</p>`,
















	pc: {
		// pc页面
		home: pc.home.ZH,
	},
}
export default zh //暴露出去
