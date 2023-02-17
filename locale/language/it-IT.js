// import Common from "./data/common/index" //公共模块翻译文件引入
// import User from "./data/user/index" //用户模块翻译文件引入
// import ErrorPage from "./data/error/index"
// import Home from "./data/home/index"
// import Me from "./data/me/index"
// import other from "./data/other/index"
import pc from "./data/pc/index"
const zh = {
	//托管订单
	completed: `Completato`,
	cancelOrder: `Annulla l'ordine`,
	purchaseAmount: `Importo dell'acquisto`,
	profit: `reddito`,
	day: `Giorno`,
	callDate: `Data di fine`,
	whether: `Se annullare l'ordine`,
	dividend: `tempo di dividendo`,
	dueDividend: `Dopo la scadenza`,
	dailyDividend: `dividendo giornaliero`,
	escrowAmount: `Escrow amount`,
	dueReturn: `Restituire quando scade`,
	redemption: `Riscattare in qualsiasi momento`,
	availableBalance: `saldo disponibile`,
	totalIncome: `Redditi totali stimati`,
	readAgree: `Ho letto e accettato`,
	serviceAgreement: `Platform financial management service agreement`,
	trustProtocol: `<div>
					<p>1. La piattaforma ha lanciato un servizio di account fruttifero per fornire agli utenti della piattaforma servizi a valore aggiunto per asset digitali inattivi<br>
2. Le attività dei conti fruttiferi saranno utilizzate per derivati su piattaforma e altri successivi progetti di venture capital<br>
3. La piattaforma fornisce servizi di gestione del rischio per le attività trasferite dagli utenti di conti fruttiferi. Affidandosi al rigoroso sistema di controllo dei rischi della piattaforma, la piattaforma garantisce pienamente la sicurezza degli asset e dei benefici dei servizi di gestione patrimoniale degli utenti<br>
4. Quando gli utenti utilizzano servizi di conto fruttiferi, autorizzano incondizionatamente la piattaforma a allocare e distribuire ragionevolmente i proventi fruttiferi secondo le regole della piattaforma<br>
5. Quando si utilizzano servizi di conto fruttiferi di interessi, gli utenti dovrebbero rispettare le pertinenti leggi nazionali per garantire che la fonte dei beni sia legale e conforme<br>
6. Quando si utilizzano servizi di conto fruttiferi, gli utenti dovrebbero comprendere appieno i rischi dell'investimento in asset digitali, operare con cautela e fare del loro meglio<br>
7. Gli utenti accettano che tutte le operazioni di investimento sulla piattaforma rappresentano le loro vere intenzioni di investimento e accettano incondizionatamente i potenziali rischi e benefici derivanti dalle decisioni di investimento<br>
8. La piattaforma si riserva il diritto di sospendere o interrompere il servizio di conto fruttifero. Se necessario, la piattaforma può sospendere o terminare il servizio di conto fruttifero in qualsiasi momento<br>
9. A causa di ritardi di rete, guasti del sistema informatico e altri fattori che possono essere irresistibili, l'esecuzione di servizi portatori di interessi può essere ritardata, sospesa, sospesa o deviata. Faremo del nostro meglio per garantire, ma non ci impegneremo, il funzionamento stabile ed efficace del sistema di esecuzione del servizio di conto fruttifero. Tuttavia, a causa di questi fattori, il risultato finale dell'esecuzione del servizio di conto fruttifero è diverso dalle aspettative del cliente e la piattaforma non si assume alcuna responsabilità<br>
10. Quando si utilizzano servizi di conto fruttiferi, gli utenti devono rispettare le disposizioni del Contratto di servizio di gestione finanziaria<br>
</p>
				</div>`,

	//产品列表
	managedOrder: `Managed Order`,
	earningsToday: `Guadagni attesi oggi`,
	accumulatedIncome: `Redditi accumulati`,
	singleLimit: `Limite singolo`,
	dailyRate: `tutti i giorni`,
	cycle: `ciclo`,

	//信托
	pledgeMining: `Mining ipotecario`,
	underway: `In corso`,
	stabilize: `Stabilizzare il reddito e facilitare l'estrazione mineraria`,
	income: `redditi attesi`,


	//common
	copySucceeded: `Copia riuscita`,
	serverResponseFailed: `Il server non risponde`,
	noData: `Nessun dato temporaneamente`,
	contentdown: `Tira su per mostrare di più`,
	contentrefresh: `Caricamento...`,
	contentnomore: `Niente più dati`,


	// tabbar
	Home: `Casa`,
	Trade: `Transazione`,
	Future: `Opzioni`,
	Trust: `Fiducia`,
	Assets: `Attività`,

	// 登录
	login: `login`,
	language: `lingua`,
	mailbox: `mailbox`,
	placeholderName: `Inserisci indirizzo email`,
	password: `Password`,
	placeholderPassword: `Inserisci la password`,
	forgetPassword: `Hai dimenticato la password？`,
	noHave: `Nessun conto？`,
	registerNow: `Registrati ora`,
	errorEmpty: `cannot be empty`,
	errorStandard: `Errore di formato`,
	errorLength: `(4-30bit)`,
	errorLength1: `(4-300bit)`,
	// 注册

	register: `Registrati`,
	code: `codice di verifica`,
	placeholderCode: `Inserire il codice di verifica`,
	sending: `Invia....`,
	send: `Invia`,
	okPassword: `Conferma password`,
	invitationCode: `codice invito`,
	placeholderinvitationCode: `Inserire il codice invito`,
	checkedAgree: `Agree`,
	userAgreement: `User Agreement`,
	and: `e`,
	privacyPolicy: `Privacy Policy`,
	pleaseCheck: `Nessun accordo`,
	atypism: `Password è incoerente`,

	// 忘记登录密码

	forgotLoginPassword: `Password dimenticata`,
	newPassword: `Nuova password`,
	confirm: `Conferma`,

	//忘记支付密码

	forgotPayPassword: `Password dimenticata`,
	//设置支付密码
	setpayPassword: `Imposta password di pagamento`,
	//主页
	helper: `Aiuto`,
	rising: `Aumenta elenco`,
	business: `Transaction pair`,
	newPrice: `Ultimo prezzo`,
	upfloat: `Alzati e cadi`,
	// 资产

	totalAssets: `Equivalente totale delle attività`,
	record: `disco`,
	nowAssets: `Conversione asset`,
	buyCoins: `Compra`,
	sellCoins: `Vendita`,
	transfer: `Trasferimento`,
	searchCurrency: `Cerca`,
	hideSmall: `Nascosto piccolo importo`,
	currencyAccount: `Spot`,
	futuresAccount: `Futures`,
	legalAccount: `Conto Fiat`,
	trustAccount: `Earn`,
	//划转记录

	transferRecord: `transfer record`,
	time: `time`,
	rollout: `trasferimento`,
	rollin: `reddito`,
	// 币币记录

	screen: `Filtro`,
	money: `importo`,
	transferAddress: `transfer address`,
	createTime: `Tempo di creazione`,
	confirmTime: `Confirming time`,
	note: `Appunti`,
	type: `tipo`,
	reset: `reset`,
	recharge: `Deposit`,
	disbursement: `Withdrawal`,
	incomplete: `Elaborazione`,
	success: `successo`,
	fail: `Fallito`,


	//币币充币

	currency: `valuta`,
	placeholderCurrency: `Seleziona valuta`,
	payeeName: `chain name`,
	rechargeAddress: `indirizzo di ricarica`,
	copyAddress: `Copia indirizzo`,
	rechargeQuantity: `quantità`,
	chargingAddress: `indirizzo di deposito monete`,
	placeholderchargingAddress: `Inserisci l'indirizzo di deposito`,
	prove: `Carica immagine deposito monete`,
	optional: `(facoltativo)`,
	placeholderHash: `Inserisci Hash`,
	placeholderNote: `Inserire una nota`,
	errorMessageprove: `Seleziona un'immagine`,
	onlyNumbers: `Possono essere inseriti solo i numeri`,
	//币币提币

	withdrawalAddress: `indirizzo di ritiro`,
	tipwallet: `Si prega di impostare l'indirizzo del portafoglio corrispondente`,
	toAdd: `to add`,
	placeholderwithdrawalAddress: `Seleziona l'indirizzo di prelievo`,
	availablenum: `Quantità disponibile`,
	placeholdernum: `Inserire la quantità`,
	unselected: `Non selezionato`,
	payPassword: `Password di pagamento`,
	commission: `Tassa di servizio`,
	placeholderpayPassword: `Inserisci la password di pagamento`,
	//币币划转

	capitalTransfer: `trasferimento di capitale`,
	from: `Da `,
	to: `a`,
	moneybag: `I portafogli non possono essere uguali`,
	//法币添加收款方式


	subbranch: `ramo`,
	placeholdersubbranch: `Inserire il ramo`,
	bankcode: `codice bancario`,
	placeholderbankcode: `Inserire il codice bancario`,
	placeholderbankName: `Inserire il nome della banca`,
	placeholderbankAccount: `Numero della scheda di input`,

	//法币记录

	price: `prezzo`,
	num: `quantità`,
	bankName: `nome della banca`,
	account: `conto`,
	buy: `Compra`,
	sell: `vendi`,
	all: `Tutti`,
	processing: `Non elaborato`,
	//法币买币

	onlineService: `Servizio clienti online`,
	//法币卖币账户

	collectionAccount: `Numero di conto di raccolta`,
	addCollection: `Add collection method`,
	showModal1: `Sei sicuro di eliminare`,
	cancelText: `Annulla`,
	//法币卖币

	salesQuantity: `Quantità vendite`,
	univalence: `prezzo di riferimento`,
	closed: `La vendita di monete è stata chiusa`,
	your: `Numero di conto bancario`,
	bankAccount: `Numero di conto bancario`,
	name: `Nome`,
	// 账户详情

	total: `importo totale`,
	frozen: `congelare`,
	//home左侧导航窗

	homloginAndRegister: `login/register`,
	rechargeMoney: `Ricarica monete`,
	withdrawCoins: `Ritiro`,
	customer: `Servizio clienti`,
	identityVerification: `Autenticazione identità`,
	withdrawalAddress: `Indirizzo di ritiro`,
	paymentMethodInFiatCurrency: `Metodo di raccolta Fiat`,
	help: `Centro assistenza`,
	pricing: `Metodo di prezzo`,
	setUp: `Impostazioni`,
	USD: `dollaro`,
	//个人信息

	personal: `informazioni personali`,
	headPortrait: `Ritratto`,
	nickname: `Soprannome`,
	bindMailbox: `Associa casella di posta`,
	//邮箱设置

	mailboxSettings: `Mailbox settings`,
	oldEmail: `vecchio account email`,
	placeholderoldEmail: `Inserisci il vecchio account email`,
	newEmail: `Nuovo account email`,
	placeholdernewEmail: `Nuovo account email`,
	//身份认证

	certification: `Autenticazione dell'identità`,
	noCcertification: `Go to identity authentication`,
	quota: `Limite di uscita`,
	count: `Numero di prelievi`,
	everyday: `Ogni giorno`,
	cumulative: `Quantità cumulativa`,
	unauthorized: `non autenticato`,
	audit: `Da sottoporre a revisione`,
	attestation: `Autenticazione generale`,
	hand: `Autenticazione portatile`,
	auditFailed: `Audit failed`,

	//实名认证

	country: `paese`,
	placeholdercountry: `Seleziona un paese`,
	placeholdername: `Inserisci un nome`,
	documentType: `ID type`,
	placeholderdocumentType: `Seleziona un tipo di certificato`,
	identificationNumber: `Numero di identificazione`,
	placeholderidentificationNumber: `Inserire il numero identificativo`,
	next: `Successivo`,
	IDcard: `carta d'identità`,
	passport: `passaporto`,

	//实名认证照片

	photo1: `Si prega di caricare la foto anteriore del documento d'identità`,
	photo2: `Carica la foto posteriore del documento`,
	photo3: `Si prega di caricare la foto del proprio documento d'identità portatile`,
	Uploading: `Caricamento...`,
	//提币地址

	addWalletAddress: `Add wallet address`,
	//添加钱包地址

	address: `indirizzo`,
	placeholderAddress: `Inserisci l'indirizzo`,
	//帮助中心

	welcome: `Benvenuti nel centro assistenza`,
	commonProblem: `Domande frequenti`,
	tutorial: `Tutorial deposito`,
	description: `Transazione Opzioni`,
	accountProblem: `Account Problem`,
	accountSettings: `Come registrarsi`,
	certified: `Autenticazione dell'identità`,
	totutorial: `Mancata ricarica？`,
	todescription: `Cos'è Transazione opzioni？`,
	toaccountProblem: `Cambio/reset password`,
	toaccountSettings: `Come registrarsi？`,
	tocertified: `How to authenticate`,
	tutorialText: `<div><p>Ciao! Il trasferimento di asset blockchain è suddiviso in tre fasi: proposta - conferma blocco - entrata<br><br>Passo 1: Un trasferimento riuscito indica che la piattaforma o il portafoglio in cui viene recuperata la valuta ha eseguito l'operazione di trasferimento<br><br></p><p>Passo 2: Confermare il blocco corrispondente. La congestione della blockchain, il ritardo, ecc. causeranno alla tua valuta digitale un ritardo nel completamento di tutte le conferme</ p></div>`,
	descriptionText: `<div><p>L'opzione è uno strumento finanziario che può fornire agli utenti l'esposizione al prezzo delle attività sottostanti e limitare la loro esposizione al rischio al ribasso. Offre agli acquirenti l'opportunità di acquistare long (call option) o short (put option) di BTC o ETH<br><br>I contratti da principiante a opzione possono comprendere che<br><br>• Le opzioni Put rappresentano il diritto (non obbligo) di vendere beni ad un prezzo predeterminato entro un certo periodo di tempo. Questo ti fornisce un'esposizione "breve", proprio quando il prezzo dell'attività sottostante scende, ti riserviamo il diritto di vendere l'attività ad un prezzo più alto (chiamato prezzo di esercizio) e realizzare profitti<br><br></p><p>• Un'opzione call rappresenta il diritto (non l'obbligo) del titolare di acquistare beni ad un prezzo predeterminato entro un determinato periodo di tempo. Questo ti fornisce un'esposizione "lunga", proprio quando il prezzo dell'asset sottostante aumenta, ti riserverai il diritto di acquistare l'asset a un prezzo inferiore e di realizzare profitti</ p></div>`,
	accountProblemText: `<div ><p>
	1. Fare clic sulla posizione del proprio account nell'angolo in alto a sinistra della home page e fare clic su "Impostazioni" - "Cambia password".<br><br >
2. Inserire la vecchia password, quindi immettere la nuova password per confermare la nuova password<br><br >
3. Fare clic su "Ripristina password"<br><br >
4. Per la sicurezza dei fondi degli utenti, è generalmente necessario attendere 24 ore dopo il ripristino o la modifica della password prima di prelevare la valuta<br><br >
</p></div>`,
	accountSettingsText: `<div ><p>Utilizza il tuo numero di cellulare o email per ottenere il codice di verifica e registrare il tuo account. Se non ricevi il codice di verifica, fai clic per controllare lo spam e-mail o contatta il servizio clienti</p></div>`,
	certifiedText: `<div ><p>1. Fai clic sulla posizione del tuo account nell'angolo in alto a sinistra della home page e fai clic su "Autenticazione identità".<br><br >2. Immettere il numero del certificato+nome e fare clic su Autenticazione<br><br>3. Attendere pazientemente l'approvazione. Generalmente, l'audit può essere completato entro 24 ore.</p></div>`,

	//设置

	changeLoginPassword: `Modifica password di accesso`,
	setWithdrawalPassword: `Imposta la password di pagamento`,
	noSetWithdrawalPassword: `Vai a impostare la password di pagamento`,
	preference: `Preferenza colore`,
	about: `About us`,
	signOut: `Esci`,
	//修改登录密码

	changeLoginPassword: `Modifica password di accesso`,
	oldPassword: `Vecchia password`,


	//修改支付密码

	changePayPassword: `Modifica password di pagamento`,
	//颜色偏好

	upRed: `Rosso su/verde giù`,
	upGreen: `Rosso giù/verde su`,
	//关于我们

	platformIntroduction: `Platform introduction`,
	privacyPolicy: `Privacy Policy`,
	userAgreement: `User Agreement`,
	officialWebsite: `sito ufficiale`,
	//平台简介

	platformIntroductionText: `Questa piattaforma è una piattaforma di trading di asset digitali leader nel mondo. Ci sforziamo costantemente di migliorare le funzionalità di sicurezza per garantire la sicurezza degli asset digitali dei clienti. Il nostro modello è quello di portare progetti con valore sostenibile ai clienti. Solo i progetti con la massima qualità saranno selezionati e forniti con servizi di trading. I membri del team di core management si sono laureati presso università di fama mondiale, ed hanno servito come senior executive di imprese multinazionali come Bank of Montreal, PricewaterhouseCoopers, ecc., con una ricca esperienza nel funzionamento del settore finanziario e dello scambio di asset digitali.Sulla base dell'innovativo accordo open source proposto da Bitshare ed Ethereum, abbiamo rotto il sistema chiuso della blockchain originale basato sul principio di combinare con la pratica aziendale reale, Sistema operativo blockchain artificiale ad alta intelligenza visiva East Fortune
"Allo stesso tempo, combinando l'intelligenza artificiale con la tecnologia blockchain, speriamo di creare un sistema operativo blockchain davvero commerciale di livello mondiale, che promette di rispettare rigorosamente le leggi del Canada e condurre affari sotto la supervisione delle autorità di regolamentazione finanziaria.`,

	//隐私政策
	privacyPolicyText: `
<p>
Questa piattaforma (di seguito "la Società") è una società registrata e stabilita in Svizzera in conformità con le pertinenti leggi della Svizzera. La società gestisce l'APP globale della piattaforma (di seguito "la Piattaforma" o "la Piattaforma"), che è una piattaforma per gli utenti per effettuare transazioni di asset digitali e fornire servizi correlati (di seguito "il Servizio" o "il Servizio"). Per comodità di espressione, l'azienda e la piattaforma sono collettivamente denominati "noi" o altri titoli di prima persona nel presente accordo. Finché la persona fisica o altri soggetti che accedono alla piattaforma sono utenti della piattaforma, i seguenti utilizzano "voi" o altri titoli di seconda persona. Noi e voi siamo collettivamente denominati "entrambe le parti", e noi o voi individualmente siamo denominati "una parte".
<br>
Comprendiamo pienamente e rispettiamo l'importanza dei vostri dati personali per voi e prenderemo misure di sicurezza corrispondenti per proteggere i vostri dati personali secondo i requisiti di leggi e regolamenti. In considerazione di ciò, la presente Informativa sulla privacy (di seguito denominata "questa Informativa").
/Questa Privacy Policy ") e ricorda:
<br>
Questa politica si applica a tutti i prodotti e servizi che forniamo. Se il prodotto o servizio che forniamo all'utente dispone di una politica sulla privacy separata, il prodotto o servizio è soggetto alla sua politica sulla privacy separata; Se i nostri prodotti o servizi non dispongono di una politica sulla privacy separata, si applica questa politica.
<br>
Si noti che la presente informativa non si applica ai servizi forniti dall'utente da altre terze parti, e i servizi forniti dall'utente da terze parti sono soggetti all'informativa sulla privacy che hanno spiegato separatamente all'utente.
<br>
Prima di utilizzare i nostri prodotti o servizi, è necessario leggere attentamente e comprendere a fondo questa politica, in particolare i termini contrassegnati con grassetto / grassetto sottolineatura. In caso di domande, opinioni o suggerimenti sui contenuti di questa politica, è possibile contattarci attraverso vari metodi di contatto forniti dal nostro funzionario. Se non siete d'accordo con i termini di questa politica, dovreste interrompere immediatamente l'accesso a questa piattaforma.
<br>
<strong>Parte I Definizioni</strong>
<br>
Per informazioni personali si intendono tutti i tipi di informazioni registrate in forma elettronica o in altro modo che possono identificare l'identità di una determinata persona fisica o riflettere le attività di una determinata persona fisica da sola o in combinazione con altre informazioni.
<br>
Informazioni personali sensibili: si riferiscono a informazioni personali tra cui numero di carta d'identità, informazioni biometriche personali, numero di conto bancario, informazioni sulla proprietà, posizione, informazioni sulle transazioni e informazioni di minori di 14 anni (compresi), ecc. (contrassegneremo in modo evidente specifiche informazioni personali sensibili in grassetto in questa informativa sulla privacy).
<br>
Cancellazione dei dati personali: si riferisce alla rimozione dei dati personali dal sistema coinvolto nella realizzazione delle funzioni aziendali quotidiane, in modo che non possano essere recuperati e accessibili.
<br>
Bambini: si riferisce ai minori di 14 anni.
<br>
<strong>Parte II Privacy Policy</strong>
<br>
Questa sezione sulla privacy ti aiuterà a comprendere quanto segue:
<br>
1,Come raccogliamo e utilizziamo le tue informazioni
<br>
2,Come utilizziamo i cookie e tecnologie simili
<br>
3,Come condividiamo, trasferiamo e divulghiamo pubblicamente le tue informazioni
<br>
4,Come proteggiamo le vostre informazioni
<br>
5,Come si fa a gestire le informazioni
<br>
6,Come facciamo a trattare con le informazioni dei minori
<br>
7,Come aggiornare questa informativa sulla privacy
<br>
<strong>I. Come raccogliamo e utilizziamo le tue informazioni</strong>
<br>
Quando utilizzi i nostri prodotti e/o servizi, abbiamo bisogno/potrebbe essere necessario raccogliere e utilizzare le tue informazioni personali, tra cui i seguenti due tipi:
<br>
Al fine di fornirti le funzioni di base dei nostri prodotti e/o servizi, devi autorizzarci a raccogliere e utilizzare le informazioni necessarie. Se l'utente rifiuta di fornire le informazioni corrispondenti, non sarà in grado di utilizzare i nostri prodotti e/o servizi normalmente;
<br>
2. Al fine di fornirti funzioni aggiuntive dei nostri prodotti e/o servizi, puoi scegliere di autorizzarci a raccogliere e utilizzare le informazioni. Se l'utente rifiuta di fornirlo, non sarà in grado di utilizzare normalmente le pertinenti funzioni aggiuntive o di ottenere l'effetto funzionale che intendiamo ottenere, ma ciò non influirà sul normale utilizzo delle funzioni di base dei nostri prodotti e/o servizi.
<br>
Lei comprende e accetta che:
<br>
1. ci impegniamo a creare una varietà di prodotti e servizi per soddisfare le vostre esigenze. Poiché forniamo all'utente una vasta gamma di prodotti e servizi e la gamma di prodotti/servizi specifici che diversi utenti scelgono di utilizzare è diversa, di conseguenza, le funzioni di base/aggiuntive e il tipo e la portata delle informazioni personali raccolte e utilizzate saranno diverse, si prega di prendere le funzioni specifiche di prodotto/servizio come standard;
<br>
Al fine di offrirti una migliore esperienza di prodotto e servizio, stiamo facendo sforzi continui per migliorare la nostra tecnologia, e quindi potremmo introdurre nuove o ottimizzate funzioni di volta in volta, e potrebbe essere necessario raccogliere e utilizzare nuove informazioni personali o modificare lo scopo o il metodo di utilizzo delle informazioni personali. A questo proposito, ti spiegheremo lo scopo, la portata e l'uso delle informazioni corrispondenti separatamente aggiornando questa politica, finestra pop-up, prompt della pagina e altri modi, e ti forniremo i mezzi di scelta e consenso indipendenti, e li raccoglieremo e li utilizzeremo con il tuo esplicito consenso. In questo processo, se avete domande, commenti o suggerimenti, potete contattarci attraverso i vari metodi di contatto forniti da questa piattaforma, e vi daremo una risposta il prima possibile.
<br>
Raccogliamo e utilizziamo le informazioni personali dell'utente per realizzare le seguenti funzioni di questa politica:
<br>
(1) Aiutarti a registrarti e fornirti i servizi forniti da questa piattaforma;
<br>
1. Servizio di registrazione
<br>
Ti forniamo servizi di base per l'iscrizione tramite il nostro account di piattaforma. Per registrarsi come membro e utilizzare i nostri servizi di iscrizione, è necessario compilare e fornire le seguenti informazioni al momento della richiesta di registrazione:
<br>
(1) Informazioni di identità. Queste informazioni possono aiutarci a verificare se sei idoneo a registrarti come membro della piattaforma, inclusi, a titolo esemplificativo ma non esaustivo, il tuo nome, il tuo indirizzo di residenza, altri certificati diversi rilasciati dal tuo paese o governo che possono dimostrare la tua identità, il numero coinvolto e tutte le altre informazioni che possono aiutarci a verificare la tua identità (di seguito collettivamente denominate "informazioni di identità")
）。 Le informazioni di identità variano a seconda che tu sia un utente individuale o un utente istituzionale. Secondo le leggi e i regolamenti di diverse giurisdizioni, le informazioni che raccogliamo per utenti di diversi paesi o regioni possono variare. Le seguenti informazioni e dati sono utilizzati come esempio indicativo:
<br>
Utenti individuali: nazionalità, nome legale completo (incluso nome precedente e nome della lingua locale), numero d'identità, indirizzo e-mail, numero di telefono, numero di previdenza sociale ("SSN"), numero di passaporto o qualsiasi numero di carta d'identità rilasciata dal governo, data di nascita, certificato d'identità (come passaporto, patente di guida o certificato d'identità rilasciato dal governo).
<br>
Utenti istituzionali: nome legale della società (compreso il nome legale in lingua locale), informazioni di registrazione, numero di telefono aziendale, informazioni personali del rappresentante autorizzato e dell'utente autorizzato, sede principale della società, informazioni personali di tutti i beneficiari effettivi), documenti identificativi degli azionisti/beneficiari effettivi (passaporto o carta d'identità rilasciata dal governo), struttura societaria, documenti relativi alla costituzione della società, deliberazioni del consiglio di amministrazione, dichiarazione delle fonti di capitale Istruzioni per il controllo dei rischi e della conformità e altre informazioni o documenti richiesti dalla piattaforma.
<br>
(2) Informazioni sul servizio. Queste informazioni ci aiutano a contattarti e fornirti con successo diverse modalità di servizi di transazione di asset digitali, tra cui, a titolo esemplificativo ma non esaustivo, le tue informazioni personali di identità, i dati di contatto, le informazioni sulle transazioni e le informazioni sulla tua carta di debito e/o altre informazioni sull'account (di seguito collettivamente denominate "informazioni sul servizio")
）。 Allo stesso tempo, ti preghiamo di comprendere che i servizi che ti forniamo sono costantemente aggiornati e sviluppati. Se l'utente sceglie di utilizzare altri servizi non inclusi nella descrizione di cui sopra, e abbiamo bisogno di raccogliere informazioni aggiuntive sulla base di questo servizio, spiegheremo l'ambito e lo scopo della raccolta di informazioni attraverso richieste di pagina, processi interattivi, accordi di accordo, richieste pop-up e altri metodi, e otterremo il consenso dell'utente.
<br>
Se hai solo bisogno di utilizzare il servizio di navigazione, non è necessario registrarsi come nostro membro e fornire le informazioni di cui sopra.
<br>
2. Altri servizi di registrazione
<br>
Autenticazione del nome reale: Dopo la registrazione e l'accesso, è necessario inserire il "Centro Personale" per completare l'autenticazione del nome reale nell'autenticazione dell'identità. È necessario fornire alla piattaforma il proprio nome reale, numero di identificazione o numero di passaporto durante l'utilizzo dell'autenticazione del nome reale.
<br>
Autenticazione avanzata: quando l'importo della transazione nella piattaforma supera un determinato limite, la piattaforma richiederà l'autenticazione avanzata per mantenere la sicurezza delle risorse. Oltre alle informazioni di autenticazione con nome reale, riconosci la piattaforma per eseguire l'autenticazione avanzata del "riconoscimento facciale" per te.
<br>
Visualizzazione delle informazioni dell'account: se l'utente dispone già di questo account della piattaforma, potremmo visualizzare le informazioni personali di cui sopra nel servizio (l'autenticazione con nome reale mostra solo i risultati del superamento dell'autenticazione), così come le operazioni eseguite nei prodotti e servizi associati all'account della piattaforma, inclusa la visualizzazione centralizzata delle informazioni personali e degli ordini di transazione attraverso questo account della piattaforma. Rispetteremo la scelta delle impostazioni dell'account della piattaforma.
<br>
(2) Servizio di gestione della sicurezza e servizio push di informazioni di servizio
<br>
Quando si utilizzano i servizi forniti da questa piattaforma o si visita questa piattaforma, al fine di garantire la sicurezza della transazione e il funzionamento sicuro e stabile del servizio, abbiamo bisogno di ricevere e registrare automaticamente le informazioni del browser Web, il simbolo di identificazione del dispositivo e altre informazioni del dispositivo come il tipo e la versione del modello del dispositivo che si accede all'account, l'indirizzo IP e registra sulla pagina Web che si richiede di visitare, la posizione, l'ambiente di rete, le informazioni sulle impronte digitali del dispositivo, le informazioni sul registro del servizio Informazioni sul software, informazioni sulla posizione, ecc.
<br>
Si prega di notare che le informazioni separate sul dispositivo sono informazioni che non possono identificare una persona fisica specifica. Se utilizziamo tali informazioni non personali in combinazione con altre informazioni per identificare una persona fisica specifica o utilizzarle in combinazione con informazioni personali, tali informazioni non personali saranno considerate come informazioni personali durante l'uso combinato. Salvo diversa autorizzazione da parte dell'utente o specificato da leggi e regolamenti, anonimizzeremo e deidentificheremo tali informazioni.
<br>
Al fine di fornire all'utente servizi di visualizzazione e push di informazioni più convenienti e personalizzati, potremmo, in futuro, estrarre le funzionalità delle preferenze dell'utente in base alle informazioni del dispositivo e alla navigazione e all'utilizzo delle informazioni sulla piattaforma o sul cliente, e produrre ritratti di folla indiretti basati su tag di funzionalità per visualizzazione, informazioni push e possibili pubblicità commerciali. Se non si accetta di ricevere tali informazioni push o revocare il consenso alla raccolta di informazioni personali, è possibile contattarci in base alle informazioni di contatto fornite in questa informativa.
<br>
Ci sforziamo di garantire la tua esperienza di navigazione. Se non desideri accettare l'annuncio commerciale che ti abbiamo inviato, puoi cancellarlo o chiuderlo tramite SMS prompt reply o altri metodi da noi forniti.
<br>
Inoltre, utilizzeremo le informazioni di cui sopra anche al fine di migliorare e ottimizzare continuamente le funzioni di cui sopra.
<br>
(3) Servizio di registrazione delle transazioni e di indagine
<br>
Raccogliamo dati rilevanti sui tuoi exchange su questa piattaforma, inclusi, a titolo esemplificativo ma non esaustivo, i record delle transazioni. Se hai bisogno di interrogare i tuoi record di transazione dell'ordine, puoi interrogare i tuoi dati personali della transazione nella "gestione degli ordini" della piattaforma, tra cui: il nickname della controparte, l'ora di effettuare l'ordine, il numero dell'ordine, le informazioni sulla transazione, il tipo e la quantità di asset digitali, ecc.
<br>
(4) Servizio clienti e gestione delle controversie
<br>
Quando l'utente ci contatta o presenta una domanda di post-vendita e risoluzione delle controversie durante il processo di vendita, abbiamo bisogno che fornisca le informazioni personali necessarie per verificare la sua iscrizione al fine di garantire la sicurezza del suo account e del sistema.
<br>
Al fine di contattarti, aiutarti a risolvere il problema il prima possibile, o registrare le soluzioni e i risultati dei problemi rilevanti, potremmo salvare i tuoi record di comunicazione con noi e i contenuti pertinenti (incluse le informazioni sull'account, le informazioni sull'ordine, altre informazioni fornite per dimostrare i fatti rilevanti o le informazioni di contatto che hai lasciato). Useremo le informazioni del tuo account e le informazioni sugli ordini.
<br>
Al fine di fornire servizi e migliorare la qualità del servizio, potremmo anche utilizzare le altre informazioni dell'utente, incluse le informazioni pertinenti fornite quando ha contattato il servizio clienti e le informazioni sulla risposta al questionario che ci ha inviato quando ha partecipato al questionario.
<br>
(5) Altri
<br>
1. Se le informazioni fornite contengono informazioni personali di altri utenti, è necessario assicurarsi di aver ottenuto l'autorizzazione legale prima di fornire tali informazioni personali alla piattaforma. Nei casi precedenti, il tutore ha il diritto di contattarci attraverso i canali di cui all'articolo 9 della presente informativa per richiedere la correzione o la cancellazione dei contenuti che riguardano i dati personali dei minori.
<br>
Se utilizziamo le informazioni per altri scopi non specificati nella presente informativa, o utilizziamo le informazioni raccolte per scopi specifici per altri scopi, o prendiamo l'iniziativa di ottenere i tuoi dati personali da una terza parte, otterremo il tuo consenso in anticipo.
<br>
Se otteniamo i tuoi dati indirettamente da una terza parte, richiederemo esplicitamente alla terza parte di raccogliere dati personali dopo aver ottenuto il tuo consenso ai sensi della legge prima della raccolta, e di informarti del contenuto delle informazioni condivise. Se si tratta di informazioni sensibili, devono essere chiaramente confermate da te prima che ci vengano fornite e richiedere alla terza parte di impegnarsi per la legalità e la conformità della fonte dei dati personali. Chiediamo chiaramente all'altra parte di assumersi le responsabilità legali corrispondenti; Allo stesso tempo, rafforzeremo la sicurezza delle informazioni personali (tra cui la segnalazione di informazioni sensibili, l'archiviazione di crittografia delle informazioni sensibili, il controllo degli accessi, ecc.). Useremo gli stessi metodi e misure di protezione che facciamo per le informazioni personali del nostro utente per proteggere le informazioni personali ottenute indirettamente.
<br>
3. Eccezioni all'autorizzazione
<br>
Comprendi pienamente e accetti che non abbiamo bisogno della tua autorizzazione per raccogliere e utilizzare i tuoi dati personali nelle seguenti circostanze e che potremmo non rispondere alla tua richiesta di correzione/modifica, cancellazione, cancellazione, revoca del consenso e richiesta di informazioni:
<br>
(1) Relativamente alla sicurezza nazionale e alla sicurezza della difesa nazionale;
<br>
(2) quelli relativi alla sicurezza pubblica, alla sanità pubblica e ai grandi interessi pubblici;
<br>
(3) relative all'applicazione della legge giudiziaria o amministrativa, quali indagini penali, procedimenti penali, processi ed esecuzione delle decisioni;
<br>
(4) allo scopo di proteggere la vostra o altra vita personale, la proprietà e altri importanti diritti e interessi legittimi, ma è difficile ottenere il mio consenso;
<br>
(5) Dati personali che l'utente divulga al pubblico;
<br/>
(6) Raccogliere informazioni personali da informazioni divulgate legalmente, come notizie legali, divulgazione di informazioni governative e altri canali.
<br>
(7) È necessario firmare ed eseguire accordi pertinenti o altri documenti scritti con l'utente;
<br>
(8) è necessario mantenere il funzionamento sicuro e stabile dei prodotti e/o servizi forniti, ad esempio per individuare e gestire i difetti dei prodotti e/o servizi;
<br>
(9) Necessario per la segnalazione legale di notizie;
<br>
(10) è necessario che gli istituti di ricerca accademici svolgano ricerche statistiche o accademiche basate sull'interesse pubblico e che disadentifichino le informazioni personali contenute nei risultati quando forniscono i risultati della ricerca o della descrizione accademica;
<br>
(11) Altre circostanze previste da leggi e regolamenti.
<br>
Si informa che, secondo le leggi applicabili, se adottiamo misure tecniche e altre misure necessarie per elaborare le informazioni personali, in modo che il destinatario dei dati non possa ri-identificare specifiche persone e non possa recuperare, o potremmo de-identificare ricerche, analisi statistiche e previsioni delle informazioni raccolte, che vengono utilizzate per migliorare il contenuto e il layout della piattaforma e fornire supporto su prodotti o servizi per le decisioni aziendali, E migliorare i nostri prodotti e servizi (compreso l'uso di dati anonimi per l'apprendimento automatico o la formazione di algoritmi di modello), quindi l'uso di tali dati elaborati non deve essere notificato all'utente e il suo consenso.
<br>
4. Se smettiamo di gestire i prodotti o i servizi della piattaforma, smetteremo di raccogliere i tuoi dati personali in modo tempestivo, notificheremo l'avviso di interruzione dell'operazione sotto forma di uno per uno o annuncio, e cancelleremo o anonimizzeremo le informazioni personali che deteniamo relative all'attività chiusa.
<br>
<strong>Secondo, come utilizziamo i cookie</strong>
<br>
Se il tuo browser o il servizio aggiuntivo del browser lo consente, puoi modificare l'accettazione dei cookie o rifiutare i nostri cookie. Per maggiori dettagli, cfr.
AboutCookies.org. Tuttavia, se lo fai, in alcuni casi potrebbe influire sul tuo accesso sicuro alla nostra piattaforma e potrebbe essere necessario modificare le impostazioni utente ogni volta che visiti la nostra piattaforma. Lei comprende e accetta che:
<br>
1. Quando visiti la nostra piattaforma, utilizziamo Google Stats attraverso i cookie per registrare le nostre prestazioni e controllare l'effetto della pubblicità online.
I cookie sono piccole quantità di dati inviati al tuo browser e memorizzati sul disco rigido del tuo computer. I cookie possono essere inviati al disco rigido del computer solo quando si utilizza il computer per accedere alla nostra piattaforma.
<br>
I cookie sono spesso utilizzati per registrare le abitudini e le preferenze dei visitatori durante la navigazione di vari elementi sulla nostra piattaforma. I dati raccolti dai Cookie sono statistiche collettive anonime e non contengono dati personali.
<br>
3. I cookie non possono essere utilizzati per ottenere dati sul disco rigido dell'utente, il suo indirizzo e-mail e i suoi dati personali. Essi possono consentire alla piattaforma o al sistema del fornitore di servizi di riconoscere il browser dell'utente e acquisire e ricordare informazioni. La maggior parte dei browser sono preimpostati per accettare i cookie. Puoi scegliere di impostare il tuo browser in modo da non accettare i cookie, o avvisarti non appena i cookie vengono caricati. tuttavia,
Se è impostato per disabilitare i cookie, potrebbe non essere possibile avviare o utilizzare alcune funzioni della nostra piattaforma.
<br>
<strong>III. Come condividiamo, trasferiamo e divulghiamo pubblicamente le tue informazioni</strong>
<br>
(1) Quota
<br>
Non condivideremo le tue informazioni personali con aziende, organizzazioni e individui diversi dai fornitori di servizi di questa piattaforma, ad eccezione dei seguenti:
<br>
Condivisione in circostanze legali: potremmo condividere le tue informazioni personali in base a leggi e regolamenti, controversie, esigenze di risoluzione delle controversie o in base ai requisiti delle autorità amministrative e giudiziarie.
<br>
Condivisione con consenso esplicito: Dopo aver ottenuto il tuo consenso esplicito, condivideremo le tue informazioni personali con altre parti.
<br>
Condivisione a tua scelta attiva: condivideremo le informazioni necessarie relative alle transazioni nelle informazioni dell'ordine con le controparti di asset digitali in base alla tua scelta per soddisfare le tue esigenze di transazione e servizio post-vendita.
<br>
4. condividere con partner autorizzati: le nostre affiliate, terze parti fidate che ci aiutano a gestire la nostra piattaforma, condurre attività commerciali o fornire servizi all'utente, fintanto che queste parti accettano di mantenere queste informazioni riservate; Quando riteniamo che le informazioni divulgate siano appropriate, è necessario conformarsi a leggi, regolamenti, regole e regolamenti o ordini del tribunale o di altre autorità competenti, implementare la nostra strategia sulla piattaforma e fornire servizi o proteggere i diritti, la proprietà o la sicurezza di noi o di altri.
<br>
(2) Trasferimento
<br>
Non trasferiremo le tue informazioni personali a nessuna società, organizzazione o individuo, tranne per quanto segue:
<br>
Trasferimento con consenso esplicito: dopo aver ottenuto il tuo consenso esplicito, trasferiremo le tue informazioni personali ad altre parti;
<br>
2. In caso di fusione, acquisizione o liquidazione fallimentare di questa piattaforma, o altri casi di fusione, acquisizione o liquidazione fallimentare, se si tratta di trasferimento di dati personali, richiederemo alla nuova società o organizzazione che detiene i vostri dati personali di continuare ad essere vincolata da questa politica, altrimenti richiederemo alla società, all'organizzazione e alla persona fisica di chiedere nuovamente l'autorizzazione.
<br>
(3) Comunicazione al pubblico
<br>
Divulgheremo pubblicamente le tue informazioni personali solo nelle seguenti circostanze:
<br>
1. Con il tuo esplicito consenso o sulla base della tua scelta attiva, possiamo divulgare pubblicamente le tue informazioni personali;
<br>
Qualora dovessimo accertare che l'utente abbia violato leggi e regolamenti o abbia violato gravemente gli accordi e le regole pertinenti della piattaforma, o al fine di proteggere la sicurezza personale e della proprietà degli utenti o del pubblico della piattaforma da violazioni, potremmo divulgare le informazioni personali che lo riguardano in base a leggi e regolamenti o con il suo consenso, incluse le violazioni pertinenti e le misure che la piattaforma ha adottato nei suoi confronti.
<br>
(4) Eccezioni all'ottenimento dell'autorizzazione prima della condivisione, trasferimento e divulgazione pubblica di informazioni personali
<br>
Nei seguenti casi, la condivisione, il trasferimento e la divulgazione pubblica dei tuoi dati personali non richiedono la tua autorizzazione preventiva:
<br>
1. Relativamente alla sicurezza nazionale e alla sicurezza della difesa nazionale;
<br>
2. quelli relativi alla sicurezza pubblica, alla salute pubblica e ai grandi interessi pubblici;
<br>
3. relative all'applicazione della legge giudiziaria o amministrativa, quali indagini penali, procedimenti penali, processi ed esecuzione delle decisioni;
<br>
4. allo scopo di proteggere la vostra o altra vita personale, la proprietà e altri importanti diritti e interessi legittimi, ma è difficile ottenere il mio consenso;
<br>
5. informazioni personali che l'utente divulga al pubblico;
<br>
6. Raccogliere informazioni personali da informazioni divulgate legalmente, come notizie legali, divulgazione di informazioni governative e altri canali.
<br>
Si prega di notare che, secondo le leggi applicabili, se adottiamo misure tecniche e altre misure necessarie per il trattamento dei dati personali, in modo che il destinatario dei dati non possa ri-identificare specifiche persone e non possa recuperarle, la condivisione, il trasferimento e la divulgazione pubblica di tali dati trattati non devono essere notificati all'utente e il suo consenso.
<br>
<strong>IV. Come proteggiamo le tue informazioni</strong>
<br>
Adottiamo misure fisiche, elettroniche, gestionali e tecniche adeguate per proteggere e garantire la sicurezza dei vostri dati personali. Facciamo del nostro meglio per garantire che i dati personali raccolti attraverso la nostra piattaforma siano esenti da molestie nei confronti di terzi non correlati a noi. Le nostre misure di sicurezza includono, a titolo esemplificativo e non esaustivo:
<br>
(1) Misure fisiche: i registri contenenti i vostri dati personali saranno conservati in un luogo chiuso.
<br>
(2) Misure elettroniche: i dati informatici contenenti i vostri dati personali saranno memorizzati sul sistema informatico e sui supporti di memorizzazione soggetti a rigorose restrizioni di accesso.
<br>
(3) Misure di gestione: Abbiamo istituito dipartimenti competenti per la protezione della sicurezza delle informazioni degli utenti e istituito sistemi di controllo interno pertinenti. Adottiamo rigorosi principi di autorizzazione per il personale che può accedere alle informazioni dell'utente. Solo il personale autorizzato da noi può accedere ai dati personali dell'utente,
Questi dipendenti devono rispettare le nostre norme interne sulla riservatezza dei dati personali. Inoltre, continuiamo a rafforzare e sostenere la formazione di leggi e regolamenti pertinenti, standard di privacy e sicurezza e consapevolezza della sicurezza per il personale, e organizziamo regolarmente il personale interno pertinente per svolgere formazione di risposta alle emergenze e esercitazioni di emergenza, in modo che possano padroneggiare le proprie responsabilità lavorative e strategie e procedure di risposta alle emergenze.
<br>
(4) Misure tecniche: è possibile utilizzare la tecnologia di crittografia come Secure Socket Layer Encryption per trasmettere i propri dati personali.
<br>
(5) Misure di sicurezza: al fine di garantire la sicurezza delle informazioni dell'utente, ci impegniamo a utilizzare varie tecnologie di sicurezza generale attuali e a supportare i sistemi di gestione per ridurre al minimo il rischio che le informazioni dell'utente vengano divulgate, danneggiate, utilizzate in modo improprio, accessibili, divulgate e modificate senza autorizzazione. Ad esempio, il software SSL (Network Security Layer Software) viene utilizzato per la trasmissione di crittografia, l'archiviazione di crittografia delle informazioni e restrizioni rigorose sull'accesso al data center. Quando trasmettiamo e archiviamo informazioni personali sensibili (comprese le informazioni biometriche personali), adotteremo misure di sicurezza quali crittografia, controllo delle autorizzazioni, de-identificazione e desensibilizzazione.
<br>
(6) Altre misure: rivedere regolarmente il nostro processo di raccolta, conservazione e trattamento dei dati personali;
E limitare i diritti di accesso dei nostri dipendenti e fornitori ai vostri dati secondo i principi necessari, e i nostri dipendenti e fornitori sono tenuti a rispettare severi obblighi contrattuali di riservatezza.
<br>
2. Se siete a conoscenza della presenza di vulnerabilità di sicurezza sulla nostra piattaforma, vi preghiamo di contattarci immediatamente in modo da poter adottare le misure appropriate il prima possibile.
<br>
3. Nonostante l'attuazione delle misure tecniche e di sicurezza di cui sopra, non possiamo garantire l'assoluta sicurezza della trasmissione dei dati su Internet,
Pertanto, non possiamo assolutamente garantire che i dati personali che ci fornisci attraverso la nostra piattaforma siano sempre sicuri. Aggiorneremo e pubblicheremo di volta in volta il rischio per la sicurezza, il rapporto sulla valutazione dell'impatto sulla sicurezza delle informazioni personali e altri contenuti pertinenti, che possono essere ottenuti attraverso l'annuncio della piattaforma.
<br>
<strong>V. Come gestisci le tue informazioni</strong>
<br>
Puoi accedere e gestire le tue informazioni nei seguenti modi:
<br>
(1) Interrogare, correggere ed eliminare le tue informazioni
<br>
Hai il diritto di ottenere una copia dei tuoi dati personali su richiesta e determinare se le informazioni che abbiamo su di te sono accurate e aggiornate. Se uno qualsiasi dei tuoi dati personali è impreciso, puoi richiedere di aggiornare le tue informazioni. Puoi anche richiedere la cancellazione dei tuoi dati personali, ma possiamo rifiutare la tua richiesta in determinate circostanze, ad esempio per requisiti legali o altri scopi legali. Per richieste di accesso, rettifica o cancellazione dei dati, potete contattarci tramite le informazioni di contatto di cui all'articolo 8.
<br>
In risposta alle richieste di accesso, rettifica o cancellazione dei dati, verificheremo l'identità della parte richiedente per garantire che sia legalmente autorizzata a presentare tali richieste. Sebbene il nostro obiettivo sia quello di rispondere gratuitamente a queste richieste, ci riserviamo il diritto di addebitarti una commissione ragionevole se la tua richiesta è ripetuta o onerosa.
<br>
(2) Modificare la portata della vostra autorizzazione
<br>
Ogni funzione aziendale necessita di alcune informazioni personali di base per essere completata (vedi "Parte I" di questa informativa sulla privacy). Inoltre, puoi contattarci tramite le informazioni di contatto di cui all'articolo 8 per dare o revocare la tua autorizzazione.
<br>
Dopo aver revocato il consenso, non elaboreremo le informazioni personali corrispondenti. Tuttavia, la tua decisione di revocare il tuo consenso non influirà sul precedente trattamento dei dati personali basato sulla tua autorizzazione.
<br>
(3) Annulla il tuo account
<br>
Puoi contattarci tramite le informazioni di contatto di cui all'articolo 8 per richiedere la cancellazione del tuo account; Dopo aver cancellato attivamente il tuo account, smetteremo di fornirti prodotti o servizi, elimineremo le tue informazioni personali o le renderemo anonime secondo i requisiti delle leggi applicabili.
<br>
(4) Rispondi alla tua richiesta di cui sopra
<br>
Per garantire la sicurezza, potrebbe essere necessario fornire una richiesta scritta o dimostrare la propria identità in altri modi. Potremmo chiederti di verificare la tua identità prima di elaborare la tua richiesta.
<br>
Risponderemo entro 15 giorni. Se non sei soddisfatto, puoi anche avviare un reclamo attraverso le informazioni di contatto da noi fornite.
<br>
In linea di principio, non addebiteremo per una richiesta ragionevole, ma addebiteremo una certa commissione per richieste ripetute che superano il limite ragionevole. Possiamo rifiutare richieste di informazioni che non siano direttamente correlate alla tua identità, duplicazioni di informazioni senza motivo, o che richiedano troppi mezzi tecnici (ad esempio, la necessità di sviluppare nuovi sistemi o modificare radicalmente le pratiche esistenti), o che comportino rischi per i diritti legittimi e gli interessi altrui, o che siano irrealistici.
<br>
Nei seguenti casi, in base ai requisiti di leggi e regolamenti, non saremo in grado di rispondere alla tua richiesta:
<br>
1. Relativamente alla sicurezza nazionale e alla sicurezza della difesa nazionale;
<br>
2. quelli relativi alla sicurezza pubblica, alla salute pubblica e ai grandi interessi pubblici;
<br>
3. per quanto riguarda le indagini penali, l'azione penale, il processo e l'esecuzione delle sentenze;
<br>
4. vi sono prove sufficienti per dimostrare che l'interessato ha dolo soggettivo o abuso di diritti;
<br>
5. Rispondere alla vostra richiesta causerà gravi danni ai diritti e agli interessi legittimi dell'utente o di altri individui e organizzazioni;
<br>
6. Coinvolgimento di segreti commerciali.
<br>
<strong>VI. Come gestiamo le informazioni dei minori</strong>
<br>
Se scopriamo o sospettiamo che l'utente abbia meno di 14 anni, chiederemo all'utente di chiudere il suo account e non permetteremo all'utente di continuare a utilizzare i prodotti o i servizi della piattaforma. Cancelleremo i dati pertinenti il prima possibile. Se siete a conoscenza che chiunque di età inferiore ai 14 anni utilizza i nostri servizi, vi preghiamo di comunicarcelo in modo che possiamo agire per impedire loro di accedere ai nostri prodotti o servizi.
<br>
Per i minori che hanno compiuto 14 anni ma non hanno compiuto 18 anni, ci aspettiamo che genitori o tutori guidino i minori a utilizzare i nostri servizi. Proteggeremo la riservatezza e la sicurezza delle informazioni sui minori in conformità con le leggi e i regolamenti pertinenti.
<br>
Se sei minorenne, si consiglia ai tuoi genitori o tutori di leggere questa politica e utilizzare i nostri servizi o di fornirci le tue informazioni con il consenso dei tuoi genitori o tutori. Nel caso di raccolta delle tue informazioni con il consenso dei tuoi genitori o tutori, utilizzeremo o divulgheremo pubblicamente queste informazioni solo se consentito dalla legge, espressamente concordato dai tuoi genitori o tutori o necessario per proteggere i tuoi diritti e interessi. Se il tuo tutore non accetta di utilizzare i nostri servizi o di fornirci informazioni in conformità con questa politica, ti preghiamo di interrompere immediatamente l'utilizzo dei nostri servizi e avvisarci in tempo in modo che possiamo prendere le misure corrispondenti.
<br>
Se sei il genitore o tutore di un minore, se hai domande sul trattamento delle informazioni del minore sotto la tua supervisione, ti preghiamo di contattarci attraverso le informazioni di contatto pubblicate in questa informativa.
<br>
<strong>VII. Come aggiornare la presente informativa sulla privacy</strong>
<br>
La nostra politica sulla privacy potrebbe cambiare.
<br>
Senza il tuo esplicito consenso, non limiteremo i tuoi diritti ai sensi della presente informativa sulla privacy. Pubblicheremo eventuali modifiche all'informativa sulla privacy sui canali ufficiali. Se non sei d'accordo con i contenuti rivisti, dovresti interrompere immediatamente l'accesso alla piattaforma. Quando viene rilasciata la versione aggiornata dell'informativa sulla privacy, l'utente continua a visitare la piattaforma per visualizzare e indicare di essere d'accordo con il contenuto aggiornato e accettare di rispettare l'informativa sulla privacy aggiornata.
<br>
In caso di modifiche importanti, forniremo anche notifiche più significative (tra cui che vi informeremo attraverso la pubblicità su questa piattaforma e persino forniremo suggerimenti pop-up).
<br>
I principali cambiamenti menzionati in questa politica comprendono, a titolo esemplificativo e non esaustivo:
<br>
1. Cambiamenti significativi sono avvenuti nel nostro modello di servizio. Ad esempio, lo scopo del trattamento dei dati personali, il tipo di dati personali trattati e l'uso dei dati personali;
<br>
2. Cambiamenti significativi sono avvenuti nel nostro controllo. Ad esempio, cambiamenti nei controllori dell'informazione causati da fusioni e acquisizioni;
<br>
3. Gli obiettivi principali della condivisione, del trasferimento o della divulgazione di informazioni personali sono cambiati;
<br>
4. il tuo diritto di partecipare al trattamento dei dati personali e il modo in cui lo eserciti sono cambiati significativamente;
<br>
5. il dipartimento responsabile della gestione della sicurezza dei dati personali, delle informazioni di contatto e dei canali di reclamo sono cambiati;
<br>
6. La relazione sulla valutazione d'impatto sulla sicurezza delle informazioni personali indica che vi sono rischi elevati.
</p>`,

	//用户协议
	userAgreementText: `<p>Importante:</p>
<p><br>
Vi ricordiamo:
<br>
• 1 I beni digitali stessi non sono emessi da alcun istituto finanziario o società o da questo sito web;
<br>
• 1 2Il mercato degli asset digitali è nuovo, non confermato e potrebbe non crescere;
<br>
•3
Gli asset digitali sono utilizzati principalmente dagli speculatori in grandi quantità, mentre i mercati retail e commerciali sono relativamente meno utilizzati. Le transazioni di asset digitali presentano rischi elevati e vengono scambiate continuamente durante tutto il giorno, senza restrizioni in aumento o in calo, e il prezzo è vulnerabile a forti fluttuazioni dovute all'impatto delle politiche dei maker e dei governi globali;
<br>
•4
Se la società ritiene, sulla base del suo giudizio unilaterale, che l'utente abbia violato il presente accordo, o che i servizi forniti da questo sito Web o l'uso dei servizi forniti da questo sito Web sia illegale secondo le leggi della sua giurisdizione, la società ha il diritto di sospendere o chiudere il suo account in qualsiasi momento, o sospendere o interrompere l'uso dei servizi forniti da questo sito Web o transazioni di asset digitali.
Il trading di asset digitali presenta rischi elevati e non è adatto per la maggior parte delle persone. Lei sa e comprende che questa transazione può causare perdite parziali o totali, quindi dovrebbe determinare l'importo della transazione in base al grado di perdita che può sopportare. Sai e comprendi che gli asset digitali possono generare rischi derivati, quindi se hai domande, ti consigliamo di chiedere prima l'assistenza di consulenti professionisti. Inoltre, oltre ai rischi sopra menzionati, vi saranno anche rischi imprevedibili. È necessario considerare attentamente e utilizzare il proprio giudizio chiaro per valutare la propria situazione finanziaria e i rischi di cui sopra, prendere qualsiasi decisione di acquistare o vendere beni digitali e sostenere tutte le perdite derivanti da tali attività.
</p>
<p><br>
Vorrei informarvi:
<br><br>
</p>
<p>
•1
Eventuali commenti, notizie, discussioni, analisi, prezzi, suggerimenti e altre informazioni su questo sito web sono commenti generali di mercato e non costituiscono suggerimenti di investimento. Non sopporteremo perdite derivanti direttamente o indirettamente dall'affidamento su queste informazioni, incluse, a titolo esemplificativo ma non esaustivo, eventuali perdite di profitti.
<br>
•2
Le proprietà di questo sito web sono soggette a modifiche in qualsiasi momento e senza ulteriore preavviso. Abbiamo adottato misure ragionevoli per garantire l'accuratezza delle informazioni del sito web, ma non possiamo garantire la loro accuratezza, né sosterremo perdite dirette o indirette derivanti dalle informazioni su questo sito web o dal ritardo o dalla mancata connessione a Internet, trasmissione o ricezione di informazioni e informazioni.
<br>
•3
Ci sono anche rischi nell'utilizzo del sistema di trading sotto forma di Internet, inclusi, a titolo esemplificativo ma non esaustivo, il guasto di software, hardware e collegamenti Internet. Poiché non possiamo controllare l'affidabilità e la disponibilità di Internet, non ci assumiamo alcuna responsabilità per distorsioni, ritardi e guasti del collegamento.
<br>
•4
È vietato utilizzare questo sito web per condurre tutte le attività di trading non etiche come la manipolazione dannosa del mercato e il trading improprio. In caso di tali eventi, questo sito web adotterà misure protettive preventive come avvertimento, restrizione del trading, chiusura di account, ecc. per tutti i comportamenti non etici come la manipolazione dannosa dei prezzi e l'impatto dannoso sul sistema di trading.
</p><br>
<p>1,General</p><br>
<p>
•1.1
Il Contratto per l'Utente (di seguito denominato "l'Accordo" o "i Termini e Condizioni") è costituito dal testo, Termini sulla Privacy, Conosci il Cliente e Politica Anti-riciclaggio di denaro, e da varie regole, dichiarazioni e istruzioni che sono stati pubblicati o potrebbero essere pubblicati su questo sito web in futuro.
<br>
•1.2
Prima di utilizzare i servizi forniti da questo sito web, è necessario leggere attentamente il presente accordo. In caso di malintesi o altro necessario, si prega di consultare un avvocato professionista. Se l'utente non è d'accordo con il presente accordo e/o lo modifica in qualsiasi momento, si prega di interrompere immediatamente l'utilizzo dei servizi forniti da questo sito web o di non accedere più a questo sito web. Una volta effettuato l'accesso a questo sito web, utilizzare qualsiasi servizio di questo sito web o qualsiasi altro comportamento simile, avete compreso e pienamente accettato le proprietà di questo accordo, inclusa qualsiasi modifica di questo accordo fatta da questo sito web in qualsiasi momento.
<br>
•1.3
Puoi diventare membro di questo sito web (di seguito denominato "membro") compilando le informazioni pertinenti secondo i requisiti di questo sito web e registrandoti con successo attraverso altre procedure pertinenti. Facendo clic sul pulsante "accetta" durante il processo di registrazione, hai raggiunto un accordo con la società sotto forma di firma elettronica; Oppure quando si fa clic su qualsiasi pulsante contrassegnato con "accordo" o significato simile nel processo di utilizzo di questo sito web o effettivamente si utilizzano i servizi forniti da questo sito web in altri modi consentiti da questo sito web, significa che si comprende pienamente, accetta e accetta tutti i termini e le condizioni di questo accordo. Senza la vostra firma scritta a mano, questo accordo non influirà sulla vostra forza vincolante legale.
<br>
• 1.4 Dopo essere diventato membro di questo sito web, si otterrà un account utente e la relativa password, che sono conservati da voi; Dovresti essere legalmente responsabile di tutte le attività e gli eventi condotti con il tuo account.
<br>
• 1.5 Solo i membri che diventano membri di questo sito web possono utilizzare la piattaforma di trading di asset digitali fornita da questo sito web per fare trading e godere di altri servizi che sono disponibili solo per i membri come previsto da questo sito web.
<br>
• 1.6 Registrandoti e utilizzando qualsiasi servizio e funzione fornito da questo sito web, sarai considerato di aver letto, compreso e:
<br>
• 1.6.1 Accettare tutti i termini e le condizioni del presente accordo.
<br>
•1.6.2
L'utente conferma di aver raggiunto l'età di 16 anni o di avere l'età legale per stipulare un contratto in base alle diverse leggi applicabili. La registrazione, la vendita, l'acquisto, il rilascio di informazioni e l'altra accettazione dei servizi di questo sito web devono essere conformi alle leggi e ai regolamenti pertinenti del paese sovrano o della regione che ha giurisdizione su di lei, e avere la piena capacità di accettare questi termini, concludere transazioni e utilizzare questo sito web per transazioni di asset digitali.
<br>
• 1.6.3 Garantisci che i beni digitali coinvolti nella transazione ti appartengono legalmente e sono proprietari.
<br>
• 1.6.4 L'utente accetta di essere pienamente responsabile delle proprie attività di trading o non di trading e di eventuali guadagni o perdite.
<br>
• 1.6.5 L'utente conferma che le informazioni fornite durante la registrazione sono veritiere e accurate.
<br>
• 1.6.6 L'utente accetta di rispettare le disposizioni di qualsiasi legge pertinente, compresa la segnalazione di eventuali profitti delle transazioni a fini fiscali.
<br>
• 1.6.7 L'utente accetta di non impegnarsi o partecipare ad alcun atto o attività che danneggi gli interessi del sito web o della società in qualsiasi momento, indipendentemente dal fatto che sia collegato ai servizi forniti dal sito web.
<br>
• 1.6.8 Il presente accordo è vincolante solo per i diritti e gli obblighi tra voi e noi, e non comporta il rapporto giuridico e le controversie legali tra gli utenti di questo sito web e altri siti web e tra voi derivanti da transazioni di asset digitali.
</p><br>
<p>2,Accordo Emendamento</p><br>
<p>
Ci riserviamo il diritto di rivedere il presente accordo di volta in volta, annunciarlo sotto forma di annuncio pubblico sul sito web, senza più darne comunicazione separatamente. L'accordo modificato sarà contrassegnato con l'orario di modifica sulla prima pagina del presente accordo. Una volta pubblicato sul sito web, entrerà in vigore automaticamente. È necessario navigare e prestare attenzione all'ora e al contenuto aggiornati del presente accordo di volta in volta. Continuando a utilizzare i servizi di questo sito web, accetti e accetti di essere vincolato dall'accordo modificato.
</p><br>
<p>3,Register</p><br>
<p>
• 3.1 Qualifica di registrazione
<br>
L'utente conferma e promette che quando completa il processo di registrazione o utilizza i servizi forniti da questo sito web in altri modi consentiti da questo sito web, si dovrebbe essere una persona fisica, persona giuridica o altra organizzazione con la possibilità di firmare il presente accordo e utilizzare i servizi forniti da questo sito web secondo le leggi applicabili. Una volta cliccato il pulsante "accetta di registrarsi", voi o il vostro agente autorizzato avete accettato le proprietà del contratto e registrato e utilizzato i servizi di questo sito web dal suo agente. Se non si dispone della qualifica di soggetto di cui sopra, lei e il suo agente autorizzato sopporteranno tutte le conseguenze che ne derivano e la società si riserva il diritto di cancellare o bloccare definitivamente il suo account e di ritenere lei e il suo agente autorizzato responsabili.
<br>
• 3.2 Finalità della registrazione
<br>
L'utente conferma e promette di non registrare questo sito web allo scopo di violare leggi e regolamenti o interrompere l'ordine del trading di asset digitali su questo sito web.
<br>
• 3.3 Procedura di registrazione
<br>
•3.3.1
L'utente accetta di fornire l'e-mail effettiva, il numero di telefono cellulare e altre informazioni in base ai requisiti della pagina di registrazione dell'utente di questo sito web. Se necessario, in conformità con le leggi e i regolamenti pertinenti delle diverse giurisdizioni, è necessario fornire il proprio nome reale, carta d'identità e altre leggi e regolamenti, nonché le informazioni pertinenti previste nella clausola sulla privacy e clausola antiriciclaggio, e aggiornare costantemente i dati di registrazione per soddisfare i requisiti tempestivi, dettagliati e accurati. Tutti i materiali originariamente digitati saranno indicati come materiali di registrazione. L'utente è responsabile per l'autenticità, la completezza e l'accuratezza di tali informazioni e sopporta eventuali perdite dirette o indirette e conseguenze negative derivanti da tali informazioni.
<br>
• 3.3.2 Lei ha il diritto di ottenere il numero di account e la password di questo sito web fornendo le informazioni necessarie per la registrazione in modo legale, completo ed efficace e previa verifica.
<br>
3.3.3 L'utente accetta di ricevere e-mail e/o brevi messaggi inviati dal sito web relativi alla gestione e al funzionamento del sito web.
</p><br>
<p>4,Servizi</p><br>
<p>
• 4.1 Contenuto del servizio
<br>
• 4.1.1 Hai il diritto di navigare in tempo reale sulle informazioni di mercato e sulle transazioni di vari prodotti di asset digitali su questo sito web, inviare le istruzioni per la transazione di asset digitali e completare la transazione di asset digitali attraverso questo sito web.
<br>
• 4.1.2 Hai il diritto di visualizzare le informazioni contenute nel tuo account utente su questo sito web e hai il diritto di utilizzare le funzioni fornite da questo sito web per il funzionamento.
<br>
• 4.1.3 Hai il diritto di partecipare alle attività del sito web organizzate dal sito web secondo le regole di attività pubblicate dal sito web.
<br>
• 4.1.4 Altri servizi che il sito promette di fornire per voi.
<br>
• 4.2, Regole di servizio L'utente si impegna a rispettare le seguenti regole di servizio di questo sito web:
<br>
•4.2.1
È necessario rispettare le leggi e i regolamenti, e utilizzare e conservare correttamente il proprio account e password di accesso, password maiuscola e codice di verifica del telefono cellulare ricevuto dal telefono cellulare. Sei pienamente responsabile di qualsiasi operazione e conseguenza dell'utilizzo del tuo account e password di accesso, password maiuscola e codice di verifica del telefono cellulare. Quando si scopre che l'account, la password di accesso, la password maiuscola o il codice di verifica di questo sito Web sono utilizzati da terzi senza la vostra autorizzazione, o ci sono altri problemi di sicurezza dell'account, è necessario informare immediatamente questo sito Web e chiedere a questo sito Web di sospendere il servizio di questo account Web. Il sito web ha il diritto di agire sulla richiesta dell'utente entro un termine ragionevole, ma il sito web non è responsabile delle conseguenze (incluse ma non limitate a qualsiasi perdita dell'utente) che si sono verificate prima di agire. L'utente non può dare, prendere in prestito, noleggiare, trasferire o altrimenti disporre dell'account di questo sito web ad altri senza il consenso di questo sito web.
<br>
4.2.3 L'utente accetta di essere responsabile di tutte le attività (tra cui, a titolo esemplificativo ma non esaustivo, la divulgazione di informazioni, il rilascio di informazioni, il consenso dei clic online o l'invio di varie regole e accordi, accordi di rinnovo online o l'acquisto di servizi) sotto il proprio account e password di questo sito web.
<br>
4.2.4
Quando effettui transazioni di asset digitali su questo sito web, non interferirai con la normale condotta delle transazioni di asset digitali e non interferirai con l'ordine delle transazioni; Non è consentito interferire con il normale funzionamento del sito web o con l'uso da parte di altri utenti dei servizi del sito web con qualsiasi mezzo tecnico o altro mezzo; Non è consentito diffamare maliziosamente la buona volontà di questo sito web inventando fatti.
<br>
• 4.2.5 In caso di controversie con altri utenti a causa di transazioni online, non è possibile richiedere al sito web di fornire informazioni pertinenti con mezzi diversi da quelli giudiziari o amministrativi.
<br>
• 4.2.6 Le altre spese sostenute dall'utente nell'utilizzo dei servizi forniti da questo sito web saranno giudicate e sostenute esclusivamente dall'utente.
<br>
• 4.3. Norme sui prodotti
<br>
• 4.3.1 Sfoglia le informazioni sulle transazioni
<br>
• Quando si naviga nelle informazioni sulla transazione su questo sito web, è necessario leggere attentamente tutti i contenuti contenuti nelle informazioni sulla transazione, inclusi, a titolo esemplificativo ma non esaustivo, prezzo, commissione, direzione di acquisto o vendita,
Puoi fare clic sul pulsante per fare trading dopo aver accettato completamente tutti i contenuti contenuti nelle informazioni sulla transazione.
<br>
• 4.3.2 Visualizza i dettagli della transazione
<br>
• Puoi visualizzare i record delle transazioni corrispondenti attraverso il tuo account.
</p><br>
<p>5,Diritti e obblighi di questo sito web</p><br>
<p>
•5.1
Se non hai la qualifica di registrazione concordata nel presente accordo, il sito web ha il diritto di rifiutare la registrazione. Per coloro che si sono registrati, il sito web ha il diritto di cancellare il tuo account utente, e il sito web si riserva il diritto di ritenere te o il tuo agente autorizzato responsabile. Allo stesso tempo, questo sito si riserva il diritto di decidere se accettare la registrazione in qualsiasi altra circostanza.
<br>
• 5.2 Secondo il nostro giudizio, abbiamo il diritto di sospendere o interrompere l'uso del tuo account e di tutti gli account associati quando scopriamo che tu o gli utenti del tuo account associati non sono adatti per investimenti ad alto rischio.
<br>
• 5.3 Il sito web ha il diritto di sospendere o interrompere l'utilizzo dell'account se rileva che l'utente dell'account non è il registrante originale dell'account.
<br>
5.4 Se il sito web sospetta ragionevolmente che le informazioni fornite dall'utente siano errate, false, non valide o incomplete attraverso test tecnici, campionamenti manuali e altri metodi di prova, ha il diritto di notificare all'utente di correggere, aggiornare le informazioni o sospendere o interrompere la fornitura dei servizi del sito web.
<br>
5.5 Il sito web ha il diritto di correggere qualsiasi informazione visualizzata sul sito web in caso di errori evidenti.
<br>
•5.6
Il sito web si riserva il diritto di modificare, sospendere o interrompere il servizio del sito web in qualsiasi momento, e il sito web non ha bisogno di informarvi in anticipo per esercitare il diritto di modificare o terminare il servizio; Se il sito web termina uno o più servizi del sito web, la risoluzione avrà effetto dalla data dell'annuncio di risoluzione sul sito web.
<br>
• 5.7 Il sito web adotterà le misure tecniche e gestionali necessarie per garantire il normale funzionamento del sito web, fornire l'ambiente e i servizi di trading necessari e affidabili e mantenere l'ordine del trading di asset digitali.
<br>
• 5.8 Se non utilizzate l'account utente e la password del sito web per accedere al sito web per un anno consecutivo, il sito web ha il diritto di cancellare il vostro account del sito web. Dopo la cancellazione dell'account, il sito web ha il diritto di aprire il corrispondente nome utente ad altri utenti per la registrazione.
<br>
5.9 Questo sito web garantisce la sicurezza dei vostri asset digitali rafforzando gli investimenti tecnici, migliorando le precauzioni di sicurezza e altre misure, e vi informerà in anticipo dei rischi di sicurezza prevedibili nel vostro account.
<br>
5.10 Il sito web ha il diritto di cancellare qualsiasi tipo di informazione relativa agli attributi presenti nel sito web che non sia conforme alle leggi e ai regolamenti o alle disposizioni del sito web in qualsiasi momento.
<br>
•5.11
Questo sito web ha il diritto di fornire all'utente ulteriori informazioni o dati secondo i requisiti di leggi, regolamenti, regole, ordini e altre norme del proprio paese sovrano o regione, e di adottare misure ragionevoli per soddisfare i requisiti delle norme locali. Questo sito web ha il diritto di sospendere o interrompere definitivamente l'apertura di alcuni o tutti i suoi servizi all'utente secondo i requisiti di leggi, regolamenti, regole, ordini e altre specifiche del suo paese sovrano o regione.
</p><br>
<p>6,Limitazione ed esenzione di responsabilità</p><br>
<p>
6.1 L'utente comprende e accetta che non saremo responsabili per le seguenti questioni in nessuna circostanza:
<br>
• 6.1.1 Perdita di reddito;
<br>
• 6.1.2 Profitti commerciali o perdite contrattuali;
<br>
• 6.1.3 Perdite causate dall'interruzione dell'attività;
<br>
• 6.1.4 Perdita di valuta da risparmiare;
<br>
• 6.1.5 Perdite causate da problemi di informazione;
<br>
• 6.1.6 Perdita di opportunità, buona volontà o reputazione;
<br>
• 6.1.7 Danni o perdita di dati;
<br>
• 6.1.8 Costo dell'acquisto di prodotti o servizi sostitutivi;
<br>
•6.1.9
Qualsiasi perdita o danno indiretto, speciale o incidentale derivante da violazione (inclusa negligenza), violazione del contratto o qualsiasi altro motivo, indipendentemente dal fatto che tale perdita o danno possa essere ragionevolmente previsto da noi; Se siamo stati informati in anticipo della possibilità di tale perdita o danno.
<br>
• I punti da 6.1.1 a 8.1.9 sono indipendenti l'uno dall'altro.
<br>
6.2 L'utente comprende e accetta che non saremo responsabili per eventuali danni causati all'utente a causa di una delle seguenti circostanze:
<br>
• 6.2.1 Ci possono essere gravi violazioni o default nelle transazioni specifiche.
<br>
6.2.2 Il tuo comportamento su questo sito web è sospettato di essere illegale o non etico.
<br>
• 6.2.3 Spese e perdite derivanti dall'acquisto o dall'acquisizione di dati, informazioni o transazioni attraverso i servizi di questo sito web o altri atti di sostituzione.
<br>
• 6.2.4 Il vostro malinteso sui servizi del sito web.
<br>
6.2.5 Qualsiasi altra perdita relativa ai servizi forniti da questo sito web che non sia causata da noi.
<br>
•6.3
Siamo responsabili della manutenzione di apparecchiature di rete di informazione, guasto della connessione alla rete di informazione, guasto di computer, comunicazione o altri sistemi, interruzione di corrente, cause meteorologiche, incidenti, scioperi, controversie di lavoro, rivolte, insurrezioni, sommosse, produttività insufficiente o mezzi di produzione, incendio, inondazione, tempesta, esplosione, guerra, banca o altri partner, crollo del mercato delle risorse digitali, azioni governative
Non ci assumiamo alcuna responsabilità per il mancato o ritardo del servizio causato dall'ordine delle autorità giudiziarie o amministrative, altri atti al di fuori del nostro controllo o dalla nostra incapacità di controllo, o per le ragioni di terzi, così come per la perdita causata all'utente.
<br>
•6.4
Non possiamo garantire che tutte le informazioni, i programmi, i testi, ecc. contenuti in questo sito web siano completamente sicuri e privi di interferenze e danni da virus, trojan horse e altri programmi dannosi. Pertanto, l'accesso, l'uso di qualsiasi servizio o il download e l'uso di qualsiasi programma, informazione, dati, ecc. scaricati da questo sito web sono una decisione personale, e si assumerà il rischio e le eventuali perdite.
<br>
•6.5
Non forniamo alcuna garanzia e impegno per qualsiasi informazione, prodotto e attività di qualsiasi sito web di terze parti collegato a questo sito web e qualsiasi altra forma di attributo che non sia nostro soggetto.
<br>
•6.6
Non forniamo alcuna garanzia, espressa o implicita, per l'utilizzo dei servizi di questo sito web, inclusa, a titolo esemplificativo ma non esaustivo, l'applicabilità, nessun errore o omissione, la continuità, l'accuratezza, l'affidabilità e l'idoneità per uno scopo specifico dei servizi forniti da questo sito web. Allo stesso tempo, non assumiamo alcun impegno e garanzia per la validità, l'accuratezza, la correttezza, l'affidabilità, la qualità, la stabilità, la completezza e la tempestività della tecnologia e delle informazioni coinvolte nei servizi forniti da questo sito web. Se effettuare l'accesso o utilizzare i servizi forniti da questo sito web è una vostra decisione personale e sarete a carico del rischio e delle eventuali perdite. Non forniamo alcuna garanzia esplicita o implicita per il mercato, il valore e il prezzo degli asset digitali. L'utente comprende e comprende che il mercato degli asset digitali è instabile, e il prezzo e il valore possono fluttuare o collassare in qualsiasi momento. Il trading di asset digitali è una scelta e una decisione personale, e può sopportare rischi e possibili perdite.
<br>
•6.7
Le nostre garanzie e impegni stabiliti nel presente accordo sono le uniche garanzie e dichiarazioni da noi fornite in relazione al presente accordo e ai servizi forniti da questo sito web, e sostituiscono qualsiasi altra garanzia e impegno, sia scritto che orale, esplicito o implicito. Tutte queste garanzie e dichiarazioni rappresentano solo le nostre promesse e garanzie, e non garantiscono che terze parti rispetteranno le garanzie e gli impegni contenuti nel presente accordo.
<br>
6.8 Non rinunciamo ad alcun diritto non menzionato nel presente accordo di limitare, esentare o compensare la nostra responsabilità per danni nella misura massima applicabile dalla legge.
<br>
• 6.9 Dopo la registrazione, riconoscerete qualsiasi operazione che svolgiamo in conformità con le regole specificate nel presente accordo, e qualsiasi rischio derivante da esso sarà a vostro carico.
</p><br>
<p>7,Risoluzione del contratto</p><br>
<p>
• 7.1 Il sito web ha il diritto di terminare tutti i servizi del sito web in base al contratto, e questo accordo terminerà alla data di cessazione di tutti i servizi del sito web.
<br>
• 7.2 Dopo la risoluzione del presente accordo, non hai alcun diritto di richiedere al sito Web di continuare a fornire qualsiasi servizio o eseguire qualsiasi altro obbligo, incluso ma non limitato a richiedere al sito Web di conservare o divulgare qualsiasi informazione nel suo account Web originale per te,
Inoltrare informazioni che non hanno letto o inviato a te o a terzi.
<br>
• 7.3 La risoluzione del presente contratto non pregiudica la richiesta della parte osservante di altre responsabilità da parte della parte inadempiente.
</p><br>
<p>8,Proprietà intellettuale</p><br>
<p>
• 8.1 Tutti i risultati intellettuali inclusi in questo sito web includono, a titolo esemplificativo ma non esaustivo, logo del sito web, database, design del sito web, testo e grafica, software, foto, video, musica, suono e la loro combinazione, compilazione del software, codice sorgente pertinente e software
Tutti i diritti di proprietà intellettuale (compresi applet e script) appartengono a questo sito web. Non è consentito copiare, modificare, copiare, inviare o utilizzare nessuno dei materiali o proprietà di cui sopra per scopi commerciali.
<br>
• 8.2 Tutti i diritti contenuti nel nome di questo sito web (inclusi ma non limitati a goodwill, marchio e logo) appartengono alla società.
<br>
• 8.3 L'utente non deve utilizzare o disporre illegalmente dei diritti di proprietà intellettuale del sito web o di altri nel processo di utilizzo dei servizi del sito web. Non è possibile pubblicare le informazioni pubblicate su questo sito web in qualsiasi forma o autorizzare altri siti web (e media) ad utilizzarle.
<br>
• 8.4 L'accesso a questo sito web o l'utilizzo di qualsiasi servizio fornito da questo sito web non sarà considerato come trasferimento di alcun diritto di proprietà intellettuale a voi.
</p><br>
<p>9,Calcola</p><br>
<p>Tutti i risultati del calcolo delle transazioni sono stati verificati da noi, ma non possiamo garantire che l'utilizzo del sito web non sia disturbato o privo di errori</ p><br>
<p>10,Severability</p><br>
<p>Se una qualsiasi disposizione del presente Contratto è ritenuta inapplicabile, non valida o illegale da qualsiasi tribunale della giurisdizione competente, la validità delle restanti disposizioni del presente Contratto non sarà pregiudicata</ p><br>
<p>11,Rapporto non agente</p><br>
<p>Nulla di quanto contenuto nel presente Contratto sarà considerato come creare, implicare o altrimenti trattarci come agente, fiduciario o altro rappresentante, salvo quanto diversamente previsto nel presente Contratto</ p><br>
<p>12,Waiver</p><br>
<p>
La rinuncia alla responsabilità per violazione del contratto o altre responsabilità concordate nel presente accordo da noi o da nessuno di voi non può essere riconosciuta o interpretata come una rinuncia ad altre responsabilità per violazione del contratto; Il mancato esercizio di qualsiasi diritto o rimedio non deve essere interpretato in alcun modo come una rinuncia a tale diritto o rimedio.
</p><br>
<p>13,Title</p><br>
<p>Tutte le intestazioni sono per comodità dell'accordo e non hanno lo scopo di espandere o limitare la natura o la portata dei termini dell'accordo</ p>
<p>Accordo di addebito da parte di altri: addebito USDT, ETH, BTC per altri, transazioni in valuta multipla, una volta rilevate, severa punizione</ p>
<p></p><br>
<p>14,Efficacia e interpretazione dell'accordo</p><br>
<p>
14.1 Il presente accordo entra in vigore quando si fa clic sulla pagina di registrazione di questo sito web per accettare di registrarsi e completare la procedura di registrazione, e ottenere il numero di account e la password di questo sito web, ed è vincolante per questo sito web e per voi.
<br>
• 14.2 Il diritto di interpretazione finale del presente accordo appartiene a questo sito web.
<br>
•14.3
Quando una persona fisica richiede l'utilizzo di un conto, deve fornire il suo certificato valido e il suo conto di riscossione e pagamento come richiesto dal dipartimento competente di GTM e aprire un conto registrato per lui dopo aver superato l'esame del dipartimento competente di GTM; La domanda di GTM e il suo conto possono essere utilizzati solo dal titolare del conto che è stato approvato dal dipartimento competente di emissione GTM e non possono essere noleggiati o prestati.
</p>`,
















	pc: {
		// pc页面
		home: pc.home.ZH,
	},
}
export default zh //暴露出去
