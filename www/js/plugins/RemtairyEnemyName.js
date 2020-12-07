var Remtairy = Remtairy || {};
Remtairy.EnemyName = Remtairy.EnemyName || {};

//Names

const ENEMY_NAMES_GENERIC_EN = [
	"Ren", "Jorge", "Dirk", "Jack", "Dan", "Christian", "Alex", "Early", "Costa",
	"Henning", "Thomas", "Bern", "Nikita", "Egor", "Max", "Robert", "Wojtek", "Boris", "Oleg", "Jayden", "Kyle", "Cameron",
	"Shaun", "Hayden", "Town", "Satoshi", "Kei", "Jimmy", "Deck", "Bob", "Barry", "Brock", "Angus",
	"Lucas", "Felipe", "Andre", "Carr", "Luis", "Lewie", "Ramon", "Hugo", "Jean", "Ash", 
	"Saul", "Dog", "Ben", "Nicolas", "Victor", "Sebastian", "Seb", "Noah", "Peter", "Jason", "Ham", 
	"Konstantin", "Kim", "Junho", "Park", "Sung", "Dong", "Ming", "Yang", "Zen", "Zhao", "Peng", "Chan", "Asif",
	"Asmat", "Amer", "Solomon", "Nassim", "Jean-Paul", "Jose", "Guelo", "Young", "Yazen", "Lee", "Kai",
	"Syahmi", "Omar", "Elijah", "Randy", "Blake", "Cesar", "Kasper", "Frej", "Hugo", "Penny", "Zhen", "Pasha",
	"Isaiah", "Miles", "Takashi", "Geo", "Satoshi", "Keita", "Hentaro", "Taro", 
	"Lance", "Stone", "Bullet", "Yamazaki", "Miyazaki", "Terri", "Park", "Found", "Shadow", "Clone", "Band", "Armstrong",
	"Ali", "Yonder", "Yellow", "Vlock", "Hammer", "Pest", "Quentin", "Hara", "Yi", "Sun", "Xeno", "Zest", "Ump", "Hide",

	
	"Purps", "Victor", "Solstorm", "Hercules", "Cerayn", //March Patreons
	"Fizrik", "Blaze", "Lenny", "Buoy", "Cloudz", "Wawi", "Marcos", //March Discord Bonus
	"Fizrik", "Kuroda", "Rimuru", "Apsabo", //March Twitter Bonus
	"Rotgut", "Edward Dimey", "Mac Greedy", "Dan Sturdy", "Bob Larkin", "Mefo", "Chris Picout", //July Patreons
	"Wolfrath", "Daimiander", "Dave", "Demitri", "Yarrick", "Xavier", "Ray", "Strider", "Akuma", "Zarton", "Cain", "Christophe" //July Patreons
];

const ENEMY_NAMES_GENERIC_JP = [
	"トニー", "スティーブ", "ソー", "ロキ", "ブルース", "ニック", "クリント", "サム", "ローディ", "スコット", "ヨハン", "ピーター", "ウォン", "アキラ",
	"ハンク", "チャラ", "エリック", "グース", "ルイス", "ジミー", "フィル", "エリック", "カーン", "マサル", "ピヨヒコ", "ヨシヒコ", "メレブ",  "カネダ", 
	"ジョン", "バリー", "ハル", "クラーク", "カル", "オリバー", "カーター", "ラルフ", "ブンケン", "ロニー", "ウォーリー", "ディック", "ナナシ", "テツオ", 
	"ビクター", "アーサー", "サイモン", "バート", "フロイド", "タツ", "ジャック", "ネッガー", "フルフル", "タックン", "カンチ", "ユキヒロ", "モトキ",  
	"リック", "カール", "シェーン", "モーガン", "グレン", "ダリル", "デール", "メルル", "ハーシェル", "ガバナー", "ボブ", "ロン", "タナカ", "ヤマダ",
	"トビン", "ヒース", "グレゴリー", "ジェフリー", "サイモン", "ドワイト", "セディク", "トクッチ", "ヒロキ", "サトウ", "ホッパ", "チャン", "ピーター", 
	"レン", "ジョージ", "ダレク", "ベン", "ダン", "アドル", "クリスティン", "ドギ", "ダルク", "ファクト", "ルタ", "ジェンマ", "チェスター", "ゴードン", 
	"マックス", "ベック", "ヤッキー", "マッピー", "ハリソン", "フォード", "ネッゴ", "サバタ", "ドンロゴ", "ネベレベ", "ギギル", "バボーン", "サンチョ",
	"ニン", "ロキンコム", "バリガンデ", "サリカード", "ネモ", "ルヌ", "チョンモ", "メメンサ", "バギカンツ", "パンキ", "シシヌ", "スモマー", "リギ", "ボグ",
	"ラム", "シュタイン", "スリポス", "グリーオ", "ガマス", "カルギジェ", "ザッキーノ", "ヤマサ", "タケシ", "タロー", "ケンイチ", "ロメオ", "ヤマガタ", 
	"トーマス", "ブルック", "ヨジ", "カーメン", "ガバチョ", "ヴァルガス", "ポン", "タケ", "ヤマ", "ニキ", "タマオ", "ガリクソン", "ヒデ", "アリ", "デンシャ",
	"コビー", "キシャ", "ポッポ", "ホーク", "モゲタ", "カツオ", "ナミヘー", "タマ", "ヨネスケ", "シンノス", "ヒロシ", "ノハラ", "ドルマン", "タイサ", "ビッグズ", 
	"ロック", "ルター", "ニコラス", "ヒカル", "ショウ", "キラ", "ライト", "タイラー", "よし夫", "太郎", "次郎", "三郎", "ユバル", "ハラリ", "メンデス",
	"ゼイン", "リアム", "ナイル", "ホーラン", "メタラー", "ザクトン", "ナスィン", "ブリンク", "ワン", "エイト", "トゥー", "ソニー", "ノラ", "チンミ",
	"パープス", "リムル", "ジオ", "セシール", "セガール", "アンソニー", "パイディ", "モミマン", "パーン", "ロードス", "オッチョ", "セーキ", "アリ", "バーグ",
	"ココシ", "カカシ", "ナルティ", "バギ", "ゴメス", "ボリバン", "アール", "ベギモン", "カーチュギ", "ユインプ", "イギシ", "カメン", "ナナシ", "マーク",
	"カーンベ", "コリニュ", "オボエテ", "ワスレテ", "アナッギ", "ケン", "ネック", "ジョウ", "カーネギー", "アンドリュー", "デール", "ジョン", "ベゾス", "ジェフ"
];

const ENEMY_NAMES_THUG_EN = [
	"Rumble", "Crane", "Tommy", "Juan", "JR", "Diogo", "Johnson", "Carl", "Larry", "Johnny", "Khalid", "Kenji", "Tank", "Dick", 
	"Mouse", "Horse", "Lin", "Wood", "Niko", "Marco", "Santa", "Junior", "Dam", "Violet", "West", "Chicken", "Nico", "Pierce",
	"Trevor", "Lopez", "Joey",

	"Marcos", "Kavika", "Heksar", "Biggs", "Aidan", "Wedge", "Anton", "Adriel Diaz", "Meepsta Bone" //April Patreons
];

const ENEMY_NAMES_THUG_JP = [
	"ランブル", "クレイン", "トミィ", "ジュアン", "ダイゴ", "ジョンソン", "キャリマン", "ラリー", "ジョニー", "ナリド", "タンク", "ディック", "ウェッジ", 
	"ジョーイ", "ホアス", "マウス", "ヴァニラ", "アイス", "ジョジョ", "ディオ", "ブランドー", "スピード", "ワゴン", "ウェスト", "サウス", "ノース", 
	"クール", "ジェイ", "シンカン", "ゼンリツ", "セン", "ブルース", "ウィルス", "ロミオ", "カフィ", "パーパ", "ニコ", "ピアズ", "オイゲン", "ウェスト",
	"マルコメ", "メミソ", "ソジボウ", "ムサシ", "コジロー", "タケシ", "シンジ", "ゲンドゥ", "コーゾー", "ガルバロス", "オウジ", "ヒロイ", "テンガイ",
	"ムゲン", "ユーゲン", "オオガミ", "イチロウ", "ヨネダ", "イッキ", "ユウイチ", "シシド", "コウセイ", "オカ", "ニコ", "ドッグ", "ワンワン", "ポンチ",
	"ウェイジ",
	
	"ウリン" //May Ci-ens
];

const ENEMY_NAMES_GOBLIN_EN = [
	"Drink", "Prot", "Kielk", "Gozz", "Ralb", "Lil-Sruigs", "Wryhic", "Duct", "Tag", "Beezz-Criz", "Urx-Tuiz",
	"Odd-Sloq", "Sric", "Tomreek", "Green-Brong", "Ung", "Sluld", "Pleq", "Trex", "Ziok", "Zuir", "Frogs", 
	"Uklirm", "Zuizz", "Clubtiong", "Ig-Ugs", "Srilb-Srilb", "Yzdozz", "Iron-Omort", "Fikt", "Wrets-Wrulb",
	
	"Zeek-Beek", "Grem-lin", "Gob", "Little-Big-Bum" //May Patreons
];

const ENEMY_NAMES_GOBLIN_JP = [
	"ゴビィ", "ゴブ吉", "ゴブ蔵", "ゴブーリキ", "ゴブマン", "ゴブっち", "ゴブッコ", "ゴブロク", "ゴブワン", "ゴブイチ", "ゴブシ", "ゴブーブ",
	"ゴブゴブ", "ゴブティン", "ゴブ夫", "ゴブドー", "ゴブツー", "ゴブ松", "ゴブデン", "ゴブ徳", "ゴブ郎", "ゴブップ", "ゴーブー", "ゴブ太", "ゴブユキ",
	"ゴブポン", "ゴブブゴ", "ゴブラ", "ゴブメン", "ゴブシ", "ゴブシチ", "ゴブドット", "ゴブ美", "ゴブちゃん", "ゴブさん", "ゴブくん", "ゴブちん",
	"ゴブエイ", "ゴブビー", "ゴブスィ", "ゴブ平", "ゴブォ", "ゴブキャノン", "ゴブデス", "ゴブダヨ", "ゴブナンダ", "ゴブデシタ", "ゴブター", "ゴブチュー",
	"ゴブース", "ゴブミドリ", "ゴブ旦那", "ゴブイク", "ゴブンブル", "ゴブピー", "ゴブッス", "ゴブワズ", "ゴブナウ", "ゴブーカー", "ゴブイキ",
	"ゴブナマ", "ゴブレム"
];

const ENEMY_NAMES_NERD_EN = [
	"Carl", "Glasses", "Kielk", "Timmy", "Jimmy", "Karl", "Nigel", "Ray", "Donk", "Verbal", "Kanye",
	"Sheldon", "Grandius", "Christ", "Senn", "Cronk", "Hifumi", "Genchi", "Hikafu", "Azkhal", "Wendel", 
	"Alexander", "Rhinon", "Tyler", "Noir", "Kebler", "Folk", "Dweeb", "Melvin", "Wehraboo", "Ryuke", 
	"Rein", //August Patreons
	
	"Atomic Garry", "Ben Dover", "John Davis", "Chris Crepeau", "Nick McNerdy", 
	"Gee Willy", "Karl Mummyd" //August Patreons
];

const ENEMY_NAMES_NERD_JP = [
	"キバ", "オブ", "秋葉", "久保", "ケン", "田中", "スエオ", "佐藤", "日野", "飯山", "三善", "鶴巻", "本田", "園田", "庵野",
	"富野", "パヤオ", "岡田", "トシオ", "コーヘー", "森", "タッキー", "モーレツ", "トラ", "ノアナ", "手塚", "テツ", "スシオ", "モマイラ",
	"常考", "ハカー", "橋田", "イタル", "ネーヨ", "マンドクセ", "ニチャン", "ヌルポ", "プギャー", "宮崎", "辻谷", "赤堀", "サトル", "のんき",
	"ダイコン", "ガイナ", "カラー", "マサユキ", "前田", "乙", "伊集院", "ナード", "ギーグ", "ヒロシ", "中原", "先生", "Mr.X", "カムイ", "富樫", "小鳥遊",
	"丹生谷", "一色", "まこと", "宮むぅ", "お兄ちゃん", "岩田", "ミツオ", "さちなま", "れむ", "エレ", "メテオ", "おまめ", "京", "マッド", "ピーエー",
	"サクラ", "ダブ", "ゴンゾウ", "ライデン", "マッパ", "旭", "エーワン", "ユーフォ", "ライジングサン", "シャフ", "ウィット", "アイジー", "トリガ", "ポンズ",
	"ジェイシ", "ピロット", "サルゥ", "カラー", "ベース", "ツイン", "トームス", "ディーン", "ビヨンド", "サイゲ", "アーク", "ビィビィ", "ゼスト",
	"カドカワ", "ガンホウ", "メッグ", "ファンザ", "アトラス", "ファルコ", "バンナム", "ハル", "プラチナム", "マベラス", "レッド", "ロケット",
	"ミスト", "メヴィウス", "メトロ", "フリュ", "エニクス", "アイオウ",	"アカベー", "パルテノン", "エフシィ", "クロック", "アップ", "ディオー",
	"たぬき", "スタック", "メイビー", "縁", "ニトロ", "プラス", "オーガス", "ライアー", "レイル", "スカイ", "ルネ", "ゆず", "キテル", 
	"宇宙", "エヌエルス", "タマ", "トイハ", "テンガ", "ライド", "ギガ", "キイ", "ミンク", "メイト", "レンズ", "エイシス", "ハッピー", "ライフ",
	"アルター", "寿", "グッスマ", "アニプレ", "ホビジャ", "マックス", "アクアマ", "ファット", "ユニオン", "プラム", "ブロッコ", "カイヨー", "ホット", "ダイキ",
	"ムーン", "バインディン", "マウス", "シックス", "チューブ", "フロッグ", "ネイティブ"
];

const ENEMY_NAMES_ROGUE_EN = [
	"Raynold", "Whisper", "Kavika", "Wade", "Yeet", "Jacques", "Jahnny", "Connor", 
	"Silence", "Hanzo", "Jexx", "Nakamura", "Yuta", "Valand", "Danzo", "Wilson", 
	"Hiden", "Morit", "Monka", "Kirin", "Pierro", //October Patreons
	
	"Sneaky", "Back Stabbeth", "Grabby", "Seikuro", "Kenny", 
	"Yuu Taiga", "Binzhen Lee", "Johnny Quick", "Ben Dover", "Sneaky" //October Patreons
	
];

const ENEMY_NAMES_ROGUE_JP = [
	"アルター", "コナー", "エド", "エツィ", "ジェイ", "フライ", "アウディ", "アルノ", "アドウェル", "シャオ", "ユン", "カムイ", "シャドウ",
	"タミール", "ガルニエ", "タラール", "ロベル", "マイルズ", "ワーレン", "ジョヴァン", "ペトル", "クラウ", "マリオ", "ラァ", "シノビ",
	"レオナルド", "アントニオ", "ニッコ", "マルコ", "クリス", "ベン", "ジェイムズ", "チャーリー", "スティド", "ウッズ", "朧丸", "カゲ",
	"レイナルド", "ウィスパー", "ウェイド", "ウィルソン", "ユッタ", "キリン", "モンカ", "ユウ", "グラビィ", "セイクロ", "ニンジャ", "バック"
];

const ENEMY_NAMES_HOMELESS_EN = [
	
];

const ENEMY_NAMES_HOMELESS_JP = [
	"ゴメ", "ギン", "ハナ", "ビン", "サト", "ヤマ", "コン", "アム", "ロイ", "キマ", "アス", "ダテ", "アノ", "ニカ", "チタ", "ダム", "キド", 
	"ナグ", "ツタ", "ネオ", "ヤジ", "ニモ", "レタ", "コト", "ナイ", "ノニ", "ブラ", "イト", "ノア", "マチ", "ルダ", "カイ", "シデ", "カト", 
	"アツ", "シマ", "アガ", "ソン", "ナオ", "トナ", "シユ", "セイ", "シテ", "ヤル", "ニゲ", "チヤ", "メダ", "ボリ", "バン", "テキ", "トウ", 
	"ドウ", "ジヨ", "ウス", "ナラ", "カネ", "オク", "イエ", "ナキ", "アダ", "チユ", "テニ", "イレ", "ロド", "ラゴ", "ボウ", "ゼト", "カメ", "セン", 
	"ニン", "クリ", "リン", "ヤム", "チヤ", "ピツ", "コロ", "ダイ", "マオ", "ピラ", "フサ", "フリ", "イザ", "ドド", "ザボ", "ベジ", "イタ"
];

const ENEMY_NAMES_LIZARDMAN_EN = [
	"Iggy", "Potoh", "Skydra", "Brygg", "Nimwald", "Frerichs", "Ken", "Gwarr", 
	"Snapjaw", "Bruford", "Reznor", "Luscious", "Gabeero", "Lyzel", "Stanley", "Snape", 
	"Scales", "Shnake", "Ralf", "Jacha", "Rick", "Zirran", "Zaggy", "Kabo", 
	"Thunka", "L'Zard", "Komodo", "Zake", "Amigo", "Nix", "Scytalis", "Dan", 
	"Kroc", "Zard", "Argon", "Wisrain", "Vakaz", "Sally", "Ulgrog", "Sobek", 
	"Zalfos", "Albin", "Aeon", "Dolan", "Nelgar", "Hawk", "Skrssh", "Gunther", 
	"Squergal", "Katsuki", "Hemipenes", "Helrunna", "Pepe", "Chakax", "Zikcar", "Sarzar", 
	"Sheep", "Maynard", "Girthzio", //July Patreons
	
	"Bengor", "Slippy", "Jakozski", "Sir Serpento", "Spine Tail", "Zig Zig", "Shasha", "Prayut", 
	"Ome Likyu", "Krocodile ", "Lizard Wizard", "Sexasaur", "Ed", "Chun Ai", "Biol Lante", "Sixsheep", 
	"Boa Rectum", "Lifts Tail", "Jaree-Ra", "Luckzor", "Jeffrey", "Witval", "Horatio"
	//July Patreons
];

const ENEMY_NAMES_LIZARDMAN_JP = [
	"ザリュース", "クルーシュ", "トカーゲ", "スギータ", "ヤモーリ", "カナーヘビ", "イモーリ", "ラケール", 
	"ユーリン", "イグアーナ", "ヘービ", "ハチュール", "バイパー", "カメレーオ", "フトアーゴ", "サウルース", 
	"テユー", "キタテグー", "アルマージ", "アガーマ", "アルデーオ", "ゲッコー", "アカイーロ", "ドリーコ", "ババーリ",
	"ヒュドーラ", "ニッソー", "ニホーン", "ヒョウモーン", "レオパード", "カブート", "ツーノ", "オニプレート", "アオジータ",
	"ミミーズ", "マツカーサ", "モトーイ", "イーワ", "ガイアーナ", "ピーターズ", "バンデード", "ストケース",
	"アリゲータ", "アガーマ", "イグアーナ"
];

const ENEMY_NAMES_ORC_EN = [
	"Yang", "Gronk", "Mikey", "Telly", "Quack", "Allard", "Hargy", "Raggy", "Buckbuck", "Bibingka", "Derek",
	"Spoutnik", "Titan", "Sigwald", "Poodle", "Pipo", "Dandelion", "Brutus", "Mork", "Rhorog", "Bruh", "Rotad",
	"Bog", "Dante", "Chonk", "Skrukk", "Wolfgang", "Alexios", "Grognak", "Kangbo", "Gorok", "Marcus", "Rai",
	"Luurdik", "Marcos", "Gob", "Mikhail", "Pog", "Strolch", "Graphene", "Dhorakil", "Gonad", "Higgard", "Jabroni",
	"Laika", "Jimothy", "Khalify", "Gregory", "Mankirk", "Mxy", "Gunther", "Marxen", "Atlas", "Castle", "Liang",
	"Bremak", "Gragnok", "Arrngrim", "Zugzug", "Beater", "Albin", "Undead", "Smarts", //June Patron
	
	"Sweet Pork", "Chunk", "Netor'arork", "Brung Tuk", "Snug Snug", "Max Mast", "Big Carrot", "Kok Koii", "Grognar", "Sheep", "Bengor",
	"Witval", "Big Cucum", "Watermelon", "Bruise Yu", "Donall", "Ovelhinha", "Ben Hart", "Bourbon", "Jeffrey", "Miyaki Kou", "Sixsheep" //June Patron
];

const ENEMY_NAMES_ORC_JP = [
	"ブウ", "トンキチ", "ポーキー", "ポルコ", "ロッソ", "ピグレット", "ハム", "ザエモン", "ホーク", "ウーロン", "ベイブ", "ピギー", "グンター",
	"クロブー", "ピッグ", "ハッカイ", "プア", "ペッパ", "トントン", "トリート", "ハート", "バネブ", "ロース", "ネック", "タン", "スネ", "バラ",
	"モモ", "ヒレ", "カシラ", "テール", "ミミ", "ヨーク", "デュロック", "ランド", "ベイブ", "トントロ", "イベリコ", "トンテキ", "プルコギ",
	"カツ", "ドン", "ロシータ", "バムセ", "ブタメン", "エスコク", "リョウガ", "ピッポ", "ベーコン", "ケビン", "トンテキ", "クシ", "レーズン",
	"ブタマン", "ペッパ", "ジョージ", "ブーリン", "オークス", "マクベス", "ヤナギー", "クーキン", "スース", "スクローファ", "ドメス", "ティクス",
	"オニク", "ブースター", "キートン", "コットン", "トンボ", "ハミルトン", "ウェリントン", "ブービー", "ブーン", "ブータン", "プー太郎", "ぶーやん",
	"ムー", "ホッグ", "シュヴァイン", "コション", "ポルコ", "セルド", "ヒュース", "スヴェイヤー", "ヴァルクン", "プアア", "チュー", "ドエジ",
	"ヴァルケン", "ハンズィール", "グリース", "プラッセ", "スーアル", "ポルク", "ビフ", "レイタオ", "ハヌゥート" 
];

const ENEMY_NAMES_VISITOR_MALE_EN = [
	"Diego", "Brian", "Donovan", "Maxwell", "Gigelian", "Jack", "Tyrone", "Maximillian",
	"Vincent", "Nugget", "Asura", "Maudril", "Claud", "Clifford", "Beany", "Pliskin",
	"Racson", "Ruchita", "Grace", "Troy", "Alvin", "Kal", "Donald", "Bob",
	"Gaben", "Roland", "Jadon", "Felix", "Clock", "Max", "Yang", "Austin",
	"Johnny", "Gunnar", "Angus", "Seth",
	
	"Gregorio", "Foep", "Leakim", "Fellahen", "Knot Evil", "Hobo Sen" //January Patrons
];

const ENEMY_NAMES_VISITOR_MALE_JP = [
	"ゴメル", "ゴン", "モリベト", "アマロー", "セグ", "タケシ", "ロンジ", "ヒューゴ", "ハリー", "ヤマ", "ロジ", "リブ", "マーク", "トランプ", "ゴン",
	"スティーブ", "ジェフ", "ラリー", "アラッド", "マイケル", "ニック", "コリィ", "ゾディン", "ハマー", "ジュジン", "コウスケ", "ワユ", "シノム",
	"ジェイドン", "アンガス", "セス", "クロック", "ディエゴ", "ブライアン", "ドノバン", "マックス", "ジャック", "ビーンズ", "オースティン",
	"グレゴリオ", "ショーン", "リーキン", "フェルエン", "ノック", "ホボ", "ヤン", "ボブ", "ドナルド", "ギャビン", "トイ", "アンディ", "ウッディ",
	"ケンジ", "モトキ", "マサル", "シュウ", "クラウド", "ザック", "カール", "グレス", "バレン", "チェスター", "オース", "ウェイユ", "アトラン",
	"ヤマモト", "タナカ", "オッス", "オラ", "ソン", "ゴモラ", "ドラゴ", "バル", "ズィー", "チョウ", "アサダ", "チャン", "ジム", "ミッキー"
];

const ENEMY_NAMES_VISITOR_FEMALE_EN = [
	"Kelly", "Lilly", "Rita", "Corina", "Nolana", "Beatrice", "Daphne", "Soria", 
	"Airi", "Fran", "Selina", "Mei", "Loka", "Lisana", "Kira", "Jenna", 
	"Zefiris", "Lilith", "Vespa", 

	"Sally Shwartz", "Sanaria Arendae", "Ai Mao", "Saskias" //January Patrons
];

const ENEMY_NAMES_VISITOR_FEMALE_JP = [
	"ケリィ", "リリー", "ミリア", "カリナ", "ノラミ", "ジェニファー", "メイ", "ソニア", "レイナ", "フラウ", "ミライ", "カテジナ", "シャン",
	"ノリコ", "クミコ", "アケミ", "ミナコ", "ガーネット", "エマ", "ハナコ", "マオ", "アイ", "キャシィ", "ベアトリス", "マリサ", "ユユコ", "レイム",
	"アンネ", "ピリミ", "ジャネット", "ミーシャ", "セレーナ", "ミランダ", "ピナ", "クラリス", "バービー", "ルイ", "エリカ", "マヤ", "カズミ", "ミク"	
];

const ENEMY_NAMES_VISITOR_UNISEX_EN = [
	"Quinn", "Dethuink", "Hina", "Quinn", "Bort", 

	"Gwenn Weiss" //January Patrons
];

const ENEMY_NAMES_VISITOR_UNISEX_JP = [
	"シノブ", "リン", "ルカ", "ヒカル", "キュル", "ラミ", "ラーイ", "ジョピ", "コイン", "ネイセ", "ポー", "ローロ", "ルー"

];

const ENEMY_NAME_Y_VARIABLE = -25;

const ENEMY_NAME_TEXT_WIDTH = 240;
const ENEMY_ARON_NAME_TEXT_WIDTH = 260; //Aronの名前のwidth

const ENEMY_NAME_TEXT_X = 3;
const ENEMY_NAME_TEXT_Y = -6;
const ENEMY_NAME_TEXT_SECOND_ROW_Y = 4;

const ENEMY_NAME_NORMAL_FONT_SIZE = 22;
const ENEMY_NAME_BOSS_FONT_SIZE = 32;
const ENEMY_NAME_HALF_WIDTH_FONT_SIZE = 14;

const ENEMY_NAME_STARTING_X = 220; //Normal battles
const ENEMY_NAME_STARTING_Y = 240;
const ENEMY_NAME_HEIGHT_SPACING = 75;

const ENEMY_NAME_HALFSPECIAL_FIRST_COL_X = 110;
const ENEMY_NAME_HALFSPECIAL_SECOND_COL_X = 320; //Special battles
const ENEMY_NAME_HALFSPECIAL_STARTING_Y = 230;
const ENEMY_NAME_HALFSPECIAL_HEIGHT_SPACING = 85;


const ENEMY_NAME_STATES_ICON_X = -10; //DreamX
const ENEMY_NAME_STATES_ICON_Y = -30;
const ENEMY_NAME_SECOND_STATES_ICON_X = -216; 
const ENEMY_NAME_SECOND_STATES_ICON_Y = -34;
const ENEMY_NAME_HALFWIDTH_STATES_ICON_X = -118;

//Prefix

//-15% all stats
const ENEMY_PREFIX_BAD = 'bad'; //低ステータス
const ENEMY_PREFIX_BAD_EN = ["Crappy", "Frail", "Sickly", "Slow", "Short", "Small", "Fat", "Dumb", "Thin", "Dull", "Puny", "Weak", "Terrible", "Perverted", "Cowardly", "Lame", "Poor", "Garbage", "Thick", "Stunted"];
const ENEMY_PREFIX_BAD_JP = ["ダサ", "不潔", "地味", "デブ", "ヘボ", "孤独の", "バカ", "よぼよぼ", "落第", "便秘", "寝不足", "しょぼ", "弱気な", "不人気", "残念", "病弱", "貧乏", "臭い", "ザコ", "ハゲ"];
const ENEMY_PREFIX_DRUNK = 'drunk';
const ENEMY_PREFIX_DRUNK_EN = ["Wasted", "Drunk", "Smashed", "Drunk", "Shitfaced", "Drunk"];
const ENEMY_PREFIX_DRUNK_JP = ["ほろ酔い", "泥酔", "狂酔", "酔いどれ", "ドランク"];
//-15% all stats, -1 ejaculation stock
const ENEMY_PREFIX_HUNGRY = 'hungry'; //空腹
const ENEMY_PREFIX_HUNGRY_EN = ["Hungry", "Thin"];
const ENEMY_PREFIX_HUNGRY_JP = ["腹ペコ", "ひもじい", "栄養失調", "空腹"];
//-25% all stats, -1 ejaculation stock
const ENEMY_PREFIX_STARVING = 'starving'; //飢え
const ENEMY_PREFIX_STARVING_EN = ["Starving", "Ravenous"];
const ENEMY_PREFIX_STARVING_JP = ["ガリガリ", "飢えた", "ヒョロ", "激ヤセ", "脆弱", "弱すぎ"];
//-25% Strength, -15% Stamina
const ENEMY_PREFIX_WEAK = 'weak'; //力が弱い、体力なし
const ENEMY_PREFIX_WEAK_EN = ["Weak", "Puny", "Feeble", "Soft", "Short", "Frail"];
const ENEMY_PREFIX_WEAK_JP = ["軟弱", "貧弱", "もやし", "筋力なし", "丸腰", "運動不足"];
//-25% Dexterity, -10% Energy
const ENEMY_PREFIX_INEPT = 'inept'; //器用さが低い、精力低い
const ENEMY_PREFIX_INEPT_EN = ["Clumsy", "Inept", "Impotent", "Unskilled", "Small", "Short", "Tiny", "Fat", "Stunted"];
const ENEMY_PREFIX_INEPT_JP = ["不器用", "下手くそ", "素人", "能無し", "ぶきっちょ", "稚拙", "薄のろ", "経験不足な", "短小", "包茎", "インポ"];
//-25% Agility
const ENEMY_PREFIX_SLOW = 'slow'; //遅い
const ENEMY_PREFIX_SLOW_EN = ["Slow", "Fat", "Lethargic", "Chill", "Relaxed", "Aloof", "Sleepy", "Chubby"];
const ENEMY_PREFIX_SLOW_JP = ["鈍くさ", "のろのろ", "のろま", "のんびり", "ゆっくり", "鈍感", "ニブチン", "居眠り", "ちんたら", "スローな"];
//-25% Endurance, -10% Stamina, -15% Energy, -1 ejaculation stock
const ENEMY_PREFIX_SENSITIVE = 'sensitive'; //忍耐なし、精力さらになし
const ENEMY_PREFIX_SENSITIVE_EN = ["Sensitive", "Tender", "Excited", "Quick-shot", "Aroused", "Hasty", "Edging", "Fast"];
const ENEMY_PREFIX_SENSITIVE_JP = ["根性なし", "敏感", "早漏", "汁漏れ", "繊細", "感じやすい", "素直な", "我慢弱い", "忍耐なし", "ひょろチン", "ガチインポ"];

//+15% All Stats, +15% Ejaculation Volume
const ENEMY_PREFIX_GOOD = 'good'; //高ステータス
const ENEMY_PREFIX_GOOD_EN = ["Strong", "Skillful", "Cunning", "Fit", "Virile", "Handsome", "Manly", "Girly", "Experienced", "Big", "Horny", "Aroused", "Bad", "Hard", "Hot", "Fiery", "Mean", "Tanned", "Shady", "Brainy", "Smart"];
const ENEMY_PREFIX_GOOD_JP = ["強", "手練れ", "一流", "優秀","熟練", "高圧的", "スーパー", "イケメン", "グレート", "イケてる", "でかい", "ゴリゴリ", "猛烈", "ちょいワル", "ごつい", "イカつい", "ハンサム", "凄い", "ガチ"];
//+30% All Stats, +50% Energy, +25% Ejaculation Volume, +1 ejaculation stock
const ENEMY_PREFIX_ELITE = 'elite'; //エリート
const ENEMY_PREFIX_ELITE_EN = ["Elite", "Terrible", "Wicked", "Perverted", "Peerless", "Greatest", "Intense", "Royal", "Super", "Dominant", "Absolute", "Infamous", "Almighty"];
const ENEMY_PREFIX_ELITE_JP = ["エリート", "ＶＩＰ", "チャンピオン", "無敗", "無敵", "極頑強", "超一流", "超優秀", "邪悪なる", "極悪", "ロイヤル", "超グレート", "超強靭", "超ガチムチ", "悟りの", "ハイパー", "新生", "孤高の", "凄すぎ", "超絶", "ミスター", "セレブ", "偉大なる", "天才"];
//+25% Strength, +15% Stamina
const ENEMY_PREFIX_STRONG = 'strong'; //力が強い、体力ある
const ENEMY_PREFIX_STRONG_EN = ["Strong", "Brawny", "Rugged", "Fit", "Muscular", "Beefy", "Burly"];
const ENEMY_PREFIX_STRONG_JP = ["強靭な", "筋肉質な", "オラオラ系", "ファイティング", "マッチョ", "デストロイ", "破壊の", "元気爆発"];
//+25% Dexterity, +10% Energy
const ENEMY_PREFIX_DEXTEROUS = 'dexterous'; //器用さが高い、精力高い
const ENEMY_PREFIX_DEXTEROUS_EN = ["Dexterous", "Cunning", "Handsome", "Lithe", "Skillful", "Deft", "Handy", "Tanned", "Experienced"];
const ENEMY_PREFIX_DEXTEROUS_JP = ["器用な", "ホスト系", "イカせの", "男優", "技術系", "テクニシャン", "上手すぎ"];
//+25% Agility
const ENEMY_PREFIX_AGILE = 'agile'; //速い
const ENEMY_PREFIX_AGILE_EN = ["Agile", "Fast", "Quick", "Light", "Nimble", "Short", "Hasty"];
const ENEMY_PREFIX_AGILE_JP = ["音速の", "高速", "忍者", "クイック", "スピーディ", "瞬発"];
//+25% Endurance, +25% Energy, +25% Ejaculation Volume, +1 ejaculation stock
const ENEMY_PREFIX_ENDURING = 'enduring'; //忍耐強い、体力高い、精力さらに高い、射精量多い
const ENEMY_PREFIX_ENDURING_EN = ["Enduring", "Rugged", "Sturdy", "Tough", "Experienced", "Big", "Fit", "Virile", "Manly"];
const ENEMY_PREFIX_ENDURING_JP = ["忍耐の", "我慢強い", "濃厚", "丈夫な", "頑丈", "汁男", "ぶっかけ", "ヤリチン", "欲望の", "経験豊富", "余裕の"];

//-25% Dexterity, -25% Endurance, +100% Energy
//With passives: -50% Charm, +50% Ejaculation Volume, +1 ejaculation stock
const ENEMY_PREFIX_VIRGIN = 'virgin'; //童貞
const ENEMY_PREFIX_VIRGIN_EN = ["Virgin"];
const ENEMY_PREFIX_VIRGIN_JP = ["童貞"];

//+10% Strength, +10% Dexterity, +10% Agility, -50% Charm, Starts the battle with the Horny state
const ENEMY_PREFIX_HORNY = 'horny'; //興奮状態
const ENEMY_PREFIX_HORNY_EN = ["Horny", "Perverted", "Excited", "Aroused", "Hard", "Horny", "Horny"];
const ENEMY_PREFIX_HORNY_JP = ["エキサイト", "変態", "興奮", "ハッスル", "高ぶり", "はぁはぁ", "興奮"];

//+25% Strength, +25% Dexterity, +25% Endurance, -25% Agility, +15% Stamina, +100% Energy, +50% Ejaculation Volume, +1 ejaculation stock
const ENEMY_PREFIX_BIG = 'big'; //体格とチンポでかい
const ENEMY_PREFIX_BIG_EN = ["Big", "Huge", "Giant", "Thick", "Towering"];
const ENEMY_PREFIX_BIG_JP = ["デカマラ", "汁タンク", "ジャイアント", "ビッグ", "巨大", "デカすぎ", "どでか"];

//Starts the battle with the Angry state
const ENEMY_PREFIX_ANGRY = 'angry'; //
const ENEMY_PREFIX_ANGRY_EN = ["Angry", "Mad", "Furious", "Upset", "Annoyed", "Rude", "Angry"];
const ENEMY_PREFIX_ANGRY_JP = ["怒りの", "激怒", "憤慨", "ムカつき", "立腹", "激おこ", "激昂"];

//Metal
const ENEMY_PREFIX_METAL = 'metal'; //
const ENEMY_PREFIX_METAL_EN = ["Metal"];
const ENEMY_PREFIX_METAL_JP = ["メタル"];

//+Talk lvl
const ENEMY_PREFIX_TALK = 'talk'; //会話
const ENEMY_PREFIX_TALK_EN = ["Asshole", "Chatty", "Jerk", "Talkative", "Noisy", "Loud"];
const ENEMY_PREFIX_TALK_JP = ["お喋り", "芸人", "話好き", "うるさい", "饒舌", "ダベり", "多弁", "下ネタ", "猥談"];

//+Sight lvl
const ENEMY_PREFIX_SIGHT = 'sight'; //見る
const ENEMY_PREFIX_SIGHT_EN = ["Quiet", "Intense", "Perverted", "Watchful", "Gawking", "Gazeful", "Nosy"];
const ENEMY_PREFIX_SIGHT_JP = ["視姦", "のぞき", "ジロジロ", "見まくり", "凝視", "用心深い", "様子見", "観察"];

//+Maso lvl, +25% Stamina, +25% Energy
const ENEMY_PREFIX_MASO = 'maso'; 
const ENEMY_PREFIX_MASO_EN = ["Masochist", "Piggy", "Submissive"];
const ENEMY_PREFIX_MASO_JP = ["ドM"];

//+Sado lvl, +10% Strength, +10% Dexterity, +10% Agility
const ENEMY_PREFIX_SADO = 'sado'; 
const ENEMY_PREFIX_SADO_EN = ["Sadist", "Cruel", "Terrible"];
const ENEMY_PREFIX_SADO_JP = ["ドS"];

//No effect
const ENEMY_PREFIX_NEUTRAL = 'neutral'; //効果なし
const ENEMY_PREFIX_NEUTRAL_EN = ["Quiet", "Nice", "Normal", "Regular", "Nondescript", "Generic", "Average", "Tall", "Asshole", "Artistic", "Bisexual", "Bald", "Balding", "Smelly", "Bland", "Boring", "Underachieving", "Woke", "Weird", "Strange"];
const ENEMY_PREFIX_NEUTRAL_JP = ["普通の", "凡人", "無個性", "ノーマル", "並", "モブ", "平均", "まじめ", "下っ端", "庶民派", "平凡", "月並み", "ザコ", "一般", "ただの", "寝起き", "早起き"];


//=============================================================================
 /*:
 * @plugindesc Enemy Name
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const ENEMY_PREFIX_BASE_ATTACH_CHANCE = 0.3;

const COLOR_PREFIX_BAD = 7;
const COLOR_PREFIX_WEAK = 7;
const COLOR_PREFIX_DRUNK = 7;
const COLOR_PREFIX_HUNGRY = 7;
const COLOR_PREFIX_STARVING = 7;
const COLOR_PREFIX_METAL = 7;
const COLOR_PREFIX_SENSITIVE = 27;
const COLOR_PREFIX_GOOD = 21;
const COLOR_PREFIX_ELITE = 18;
const COLOR_PREFIX_VIRGIN = 27;
const COLOR_PREFIX_HORNY = 27;
const COLOR_PREFIX_BIG = 11;

////////
////////////////
// Game Troop
////////////////
////////////

Remtairy.EnemyName.Game_Troop_clear = Game_Troop.prototype.clear;
Game_Troop.prototype.clear = function() {
    Remtairy.EnemyName.Game_Troop_clear.call(this);
    this._namesCount = $gameParty.putAllWantedNamesToNamesCountArray();
};

Game_Troop.prototype.makeUniqueNames = function() {
    let table = this.letterTable();
    this.members().forEach(function(enemy) {
		enemy.makeUniqueNames();
    }, this);
    this.members().forEach(function(enemy) {
        let name = enemy.originalName();
        if (this._namesCount[name] >= 2) {
            enemy.setPlural(true);
        }
    }, this);
};

Game_Troop.prototype.makePrefix = function(enemy) {
	let availablePrefixSet = [ ];
	
	//Reception
	if(Karryn.hasEdict(EDICT_RECEPTION_POLICY_NEUTRAL)) {
		availablePrefixSet.push(ENEMY_PREFIX_BAD, ENEMY_PREFIX_BAD, ENEMY_PREFIX_WEAK, ENEMY_PREFIX_INEPT, ENEMY_PREFIX_SLOW, ENEMY_PREFIX_SENSITIVE, ENEMY_PREFIX_GOOD, ENEMY_PREFIX_GOOD, ENEMY_PREFIX_STRONG, ENEMY_PREFIX_DEXTEROUS, ENEMY_PREFIX_AGILE, ENEMY_PREFIX_ENDURING, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_TALK, ENEMY_PREFIX_SIGHT, ENEMY_PREFIX_MASO, ENEMY_PREFIX_SADO, ENEMY_PREFIX_NEUTRAL, ENEMY_PREFIX_NEUTRAL, ENEMY_PREFIX_NEUTRAL, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY);
	}
	else if(Karryn.hasEdict(EDICT_RECEPTION_POLICY_FAVOR_WEAK)) {
		availablePrefixSet.push(ENEMY_PREFIX_BAD, ENEMY_PREFIX_BAD, ENEMY_PREFIX_BAD, ENEMY_PREFIX_WEAK, ENEMY_PREFIX_WEAK, ENEMY_PREFIX_INEPT, ENEMY_PREFIX_INEPT, ENEMY_PREFIX_SLOW, ENEMY_PREFIX_SLOW, ENEMY_PREFIX_SENSITIVE, ENEMY_PREFIX_SENSITIVE, ENEMY_PREFIX_STRONG, ENEMY_PREFIX_DEXTEROUS, ENEMY_PREFIX_AGILE, ENEMY_PREFIX_ENDURING, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_TALK, ENEMY_PREFIX_SIGHT, ENEMY_PREFIX_MASO, ENEMY_PREFIX_SADO, ENEMY_PREFIX_NEUTRAL, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY);
	}
	else if(Karryn.hasEdict(EDICT_RECEPTION_POLICY_WEAK_ONLY)) {
		availablePrefixSet.push(ENEMY_PREFIX_BAD, ENEMY_PREFIX_BAD, ENEMY_PREFIX_BAD, ENEMY_PREFIX_WEAK, ENEMY_PREFIX_WEAK, ENEMY_PREFIX_INEPT, ENEMY_PREFIX_INEPT, ENEMY_PREFIX_SLOW, ENEMY_PREFIX_SLOW, ENEMY_PREFIX_SENSITIVE, ENEMY_PREFIX_SENSITIVE, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_MASO, ENEMY_PREFIX_MASO, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY);
	}
	else if(Karryn.hasEdict(EDICT_RECEPTION_POLICY_FAVOR_STRONG)) {
		availablePrefixSet.push(ENEMY_PREFIX_WEAK, ENEMY_PREFIX_INEPT, ENEMY_PREFIX_SLOW, ENEMY_PREFIX_SENSITIVE, ENEMY_PREFIX_ELITE, ENEMY_PREFIX_GOOD, ENEMY_PREFIX_GOOD, ENEMY_PREFIX_STRONG, ENEMY_PREFIX_STRONG, ENEMY_PREFIX_DEXTEROUS, ENEMY_PREFIX_DEXTEROUS, ENEMY_PREFIX_AGILE, ENEMY_PREFIX_AGILE, ENEMY_PREFIX_ENDURING, ENEMY_PREFIX_ENDURING, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_TALK, ENEMY_PREFIX_SIGHT, ENEMY_PREFIX_MASO, ENEMY_PREFIX_SADO, ENEMY_PREFIX_NEUTRAL, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY);
	}
	else if(Karryn.hasEdict(EDICT_RECEPTION_POLICY_STRONG_ONLY)) {
		availablePrefixSet.push(ENEMY_PREFIX_ELITE, ENEMY_PREFIX_ELITE, ENEMY_PREFIX_BIG, ENEMY_PREFIX_GOOD, ENEMY_PREFIX_GOOD, ENEMY_PREFIX_GOOD, ENEMY_PREFIX_STRONG, ENEMY_PREFIX_STRONG, ENEMY_PREFIX_DEXTEROUS, ENEMY_PREFIX_DEXTEROUS, ENEMY_PREFIX_AGILE, ENEMY_PREFIX_AGILE, ENEMY_PREFIX_ENDURING, ENEMY_PREFIX_ENDURING, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_SADO, ENEMY_PREFIX_SADO, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY);
	}
	
	//Difficulty prefixes
	if(Prison.normalMode()) {
		availablePrefixSet.push(ENEMY_PREFIX_GOOD, ENEMY_PREFIX_STRONG, ENEMY_PREFIX_DEXTEROUS, ENEMY_PREFIX_AGILE, ENEMY_PREFIX_ENDURING);
		if(enemy.isInmate) { availablePrefixSet.push(ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_ANGRY); }
	}
	else if(Prison.hardMode()) {
		availablePrefixSet.push(ENEMY_PREFIX_GOOD, ENEMY_PREFIX_STRONG, ENEMY_PREFIX_DEXTEROUS, ENEMY_PREFIX_AGILE, ENEMY_PREFIX_ENDURING);
		availablePrefixSet.push(ENEMY_PREFIX_GOOD, ENEMY_PREFIX_ELITE, ENEMY_PREFIX_STRONG, ENEMY_PREFIX_DEXTEROUS, ENEMY_PREFIX_AGILE, ENEMY_PREFIX_ENDURING, ENEMY_PREFIX_BIG, ENEMY_PREFIX_TALK, ENEMY_PREFIX_SIGHT, ENEMY_PREFIX_GOOD, ENEMY_PREFIX_HORNY);
	}
	
	/////////
	// Edicts Prefixes
	////////
	
	//Inmates
	
	if(enemy.isInmate) {
		//Repaired Kitchen
		if(Karryn.hasEdict(EDICT_REPAIR_KITCHEN_AND_MESS_HALL)) {
			//Hired Cook and Prisoner Food Supply
			if(Karryn.hasEdict(EDICT_HIRE_COOKS) && Karryn.hasEdict(EDICT_BULK_FOOD_SUPPLIER)) {
				//Hired Chef and Better Ingredients
				if(Karryn.hasEdict(EDICT_HIRE_A_CHEF) && Karryn.hasEdict(EDICT_EXPAND_INMATE_MENU)) {
					availablePrefixSet.push(ENEMY_PREFIX_BIG, ENEMY_PREFIX_SLOW, ENEMY_PREFIX_STRONG, ENEMY_PREFIX_BIG, ENEMY_PREFIX_ELITE, ENEMY_PREFIX_BAD);
				}
			}
			else {
				availablePrefixSet.push(ENEMY_PREFIX_HUNGRY, ENEMY_PREFIX_HUNGRY, ENEMY_PREFIX_INEPT, ENEMY_PREFIX_WEAK);
			}
			
			if(Karryn.hasEdict(EDICT_PAY_FOR_BETTER_FOOD)) {
				availablePrefixSet.push(ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_SADO);
			}
		}
		else {
			availablePrefixSet.push(ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_HUNGRY, ENEMY_PREFIX_HUNGRY, ENEMY_PREFIX_HUNGRY, ENEMY_PREFIX_STARVING, ENEMY_PREFIX_STARVING, ENEMY_PREFIX_STARVING, ENEMY_PREFIX_INEPT, ENEMY_PREFIX_WEAK);
		}//End Kitchen repair
		
		//Infirmary
		
		//Massage Edicts
		if(Karryn.hasEdict(EDICT_EXPAND_THERAPY_AREA)) {
			availablePrefixSet.push(ENEMY_PREFIX_SLOW, ENEMY_PREFIX_GOOD, ENEMY_PREFIX_GOOD, ENEMY_PREFIX_ELITE);
			if(Karryn.hasEdict(EDICT_PAID_THERAPY_SESSIONS)) {
				availablePrefixSet.push(ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_SADO);
			}
		}
		
		//Testing
		if(Karryn.hasEdict(EDICT_ALLOW_RESEARCH_TESTING)) {
			availablePrefixSet.push(ENEMY_PREFIX_BIG, ENEMY_PREFIX_BIG, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_BAD, ENEMY_PREFIX_METAL, ENEMY_PREFIX_METAL, ENEMY_PREFIX_METAL, ENEMY_PREFIX_METAL);
			if(Karryn.hasEdict(EDICT_CONDUCT_TESTS_ON_INJURED_INMATES)) {
				availablePrefixSet.push(ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_BAD);
			}
		}
		
		//Drugs Edicts
		if(Karryn.hasEdict(EDICT_APHRODISIACS_IN_INMATE_FOOD)) {
			availablePrefixSet.push(ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_MASO);
		}	
		if(Karryn.hasEdict(EDICT_APHRODISIACS_DRUGS_FOR_INMATES)) {
			availablePrefixSet.push(ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_MASO);
		}	
		if(Karryn.hasEdict(EDICT_RECREATIONAL_DRUGS_FOR_INMATES)) {
			availablePrefixSet.push(ENEMY_PREFIX_INEPT, ENEMY_PREFIX_SLOW, ENEMY_PREFIX_SLOW, ENEMY_PREFIX_BAD, ENEMY_PREFIX_NEUTRAL);
		}	
		if(Karryn.hasEdict(EDICT_SEX_ENDURANCE_DRUGS_FOR_INMATES)) {
			availablePrefixSet.push(ENEMY_PREFIX_ENDURING, ENEMY_PREFIX_ENDURING, ENEMY_PREFIX_ENDURING, ENEMY_PREFIX_DEXTEROUS);
		}	
		
		//Inmate Workforce 
		if(Karryn.hasEdict(EDICT_USE_INMATE_COOKS)) {
			availablePrefixSet.push(ENEMY_PREFIX_ANGRY);
		}	
		if(Karryn.hasEdict(EDICT_USE_INMATE_DISHWASHERS)) {
			availablePrefixSet.push(ENEMY_PREFIX_ANGRY);
		}	
		
		//Visitor Center
		if(!Prison.prisonLevelOneIsAnarchy()) {
			if(Karryn.hasEdict(EDICT_REPAIR_VISITOR_CENTER)) {
				availablePrefixSet.push(ENEMY_PREFIX_STRONG, ENEMY_PREFIX_DEXTEROUS, ENEMY_PREFIX_AGILE, ENEMY_PREFIX_ENDURING);
			}	
			else {
				availablePrefixSet.push(ENEMY_PREFIX_INEPT, ENEMY_PREFIX_SLOW, ENEMY_PREFIX_WEAK);
			}
		}
		
		if(Karryn.hasEdict(EDICT_DONT_PAY_WAITERS))
			availablePrefixSet.push(ENEMY_PREFIX_DRUNK, ENEMY_PREFIX_DRUNK, ENEMY_PREFIX_ANGRY);
		else if(Karryn.hasEdict(EDICT_USE_INMATE_WAITERS))
			availablePrefixSet.push(ENEMY_PREFIX_DRUNK, ENEMY_PREFIX_DRUNK);
		
		//Toilet
		if(!Prison.prisonLevelTwoIsAnarchy()) {
			if(!Karryn.hasEdict(EDICT_REPAIR_TOILET)) {
				availablePrefixSet.push(ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_ANGRY);
			}	
		}
		
		//Classroom
		if(Karryn.hasEdict(EDICT_ANATOMY_CLASSES)) {
			if(Karryn.hasEdict(EDICT_SUPPLY_MODEL_OF_KARRYNS_BODY)) {
				if(Karryn.hasEdict(EDICT_MANDATORY_CLASSES)) {
					availablePrefixSet.push(ENEMY_PREFIX_GOOD, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_DEXTEROUS, ENEMY_PREFIX_DEXTEROUS, ENEMY_PREFIX_DEXTEROUS);
				}
				else {
					availablePrefixSet.push(ENEMY_PREFIX_ENDURING, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_DEXTEROUS, ENEMY_PREFIX_DEXTEROUS);
				}
			}				
			else {
				if(Karryn.hasEdict(EDICT_MANDATORY_CLASSES)) {
					availablePrefixSet.push(ENEMY_PREFIX_GOOD, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_DEXTEROUS, ENEMY_PREFIX_DEXTEROUS);
				}
				else {
					availablePrefixSet.push(ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_DEXTEROUS);
				}
			}
		}
		else if(Karryn.hasEdict(EDICT_REFORM_CLASSES)) {
			if(Karryn.hasEdict(EDICT_MANDATORY_CLASSES)) {
				availablePrefixSet.push(ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_ANGRY);
			}
			else {
				availablePrefixSet.push(ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_ANGRY);
			}
		}
		else if(Karryn.hasEdict(EDICT_WORKSHOP_CLASSES)) {
			if(Karryn.hasEdict(EDICT_MANDATORY_CLASSES)) {
				availablePrefixSet.push(ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_STRONG);
			}
			else {
				availablePrefixSet.push(ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_STRONG);
			}
		}
		
		//Reading Room
		if(Karryn.hasEdict(EDICT_STOCK_WITH_ADULT_BOOKS)) {
			if(Karryn.hasEdict(EDICT_ALLOW_BORROWING_ADULT_BOOKS)) {
				availablePrefixSet.push(ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_VIRGIN);
			}
			else {
				availablePrefixSet.push(ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_VIRGIN);
			}
		}
		
		//Research
		if(Karryn.hasEdict(EDICT_RESEARCH_APHRODISIAC_CONTRACT)) {
			availablePrefixSet.push(ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY);
		}
		if(Karryn.hasEdict(EDICT_RESEARCH_WEAPON_AND_TOOL_CONTRACT)) {
			availablePrefixSet.push(ENEMY_PREFIX_STRONG, ENEMY_PREFIX_DEXTEROUS);
		}
		
		//Type Based
		if(enemy.isThugType) {
			if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_THUG_THREE_ID)) {
				availablePrefixSet.push(ENEMY_PREFIX_SADO, ENEMY_PREFIX_SADO, ENEMY_PREFIX_HORNY);
			}
			
			if(Karryn.hasEdict(EDICT_THE_THUG_PROBLEM)) {
				if(Karryn.hasEdict(EDICT_NO_THUG_LABOR)) {
					availablePrefixSet.push(ENEMY_PREFIX_STRONG, ENEMY_PREFIX_STRONG, ENEMY_PREFIX_GOOD);
				}
				else if(Karryn.hasEdict(EDICT_WEAKEN_THE_THUGS)) {
					availablePrefixSet.push(ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_WEAK, ENEMY_PREFIX_WEAK, ENEMY_PREFIX_BAD, ENEMY_PREFIX_BAD);
				}
				else if(Karryn.hasEdict(EDICT_THUGS_STRESS_RELIEF)) {
					availablePrefixSet.push(ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_STRONG, ENEMY_PREFIX_STRONG, ENEMY_PREFIX_GOOD);
				}
				else {
					availablePrefixSet.push(ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_STRONG, ENEMY_PREFIX_STRONG, ENEMY_PREFIX_GOOD);
				}
			}
		}
		else if(enemy.isGoblinType) {
			if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_GOBLIN_TWO_ID)) {
				availablePrefixSet.push(ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY);
			}
			
			if(Karryn.hasEdict(EDICT_THE_GOBLIN_PROBLEM)) {
				if(Karryn.hasEdict(EDICT_ANTI_GOBLIN_SQUAD)) {
					availablePrefixSet.push(ENEMY_PREFIX_GOOD, ENEMY_PREFIX_WEAK, ENEMY_PREFIX_SLOW, ENEMY_PREFIX_SLOW);
				}
				else if(Karryn.hasEdict(EDICT_DEMEAN_GOBLINS)) {
					availablePrefixSet.push(ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_SADO_EN, ENEMY_PREFIX_SADO_EN);
				}
				else if(Karryn.hasEdict(EDICT_BAIT_GOBLINS)) {
					availablePrefixSet.push(ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_GOOD, ENEMY_PREFIX_AGILE, ENEMY_PREFIX_AGILE);
				}
				else {
					availablePrefixSet.push(ENEMY_PREFIX_AGILE, ENEMY_PREFIX_AGILE, ENEMY_PREFIX_AGILE, ENEMY_PREFIX_GOOD, ENEMY_PREFIX_GOOD);
				}
			}
			
		}
		else if(enemy.isRogueType) {
			if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_ROGUE_TWO_ID)) {
				availablePrefixSet.push(ENEMY_PREFIX_SADO, ENEMY_PREFIX_SADO, ENEMY_PREFIX_HORNY);
			}
			
			if(Karryn.hasEdict(EDICT_THE_ROGUE_PROBLEM)) {
				if(Karryn.hasEdict(EDICT_ROGUE_TRAINING_FOR_GUARDS)) {
					availablePrefixSet.push(ENEMY_PREFIX_GOOD, ENEMY_PREFIX_ELITE, ENEMY_PREFIX_DEXTEROUS, ENEMY_PREFIX_AGILE);
				}
				else if(Karryn.hasEdict(EDICT_FORCE_ROGUES_INTO_LABOR)) {
					availablePrefixSet.push(ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_WEAK, ENEMY_PREFIX_WEAK, ENEMY_PREFIX_SLOW);
				}
				else if(Karryn.hasEdict(EDICT_FIGHT_ROGUE_DISTRACTIONS_WITH_DISTRACTIONS)) {
					availablePrefixSet.push(ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_GOOD, ENEMY_PREFIX_ELITE, ENEMY_PREFIX_DEXTEROUS);
				}
				else {
					availablePrefixSet.push(ENEMY_PREFIX_GOOD, ENEMY_PREFIX_ELITE, ENEMY_PREFIX_DEXTEROUS, ENEMY_PREFIX_AGILE);
				}
			}
		}
		else if(enemy.isNerdType) {
			if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_NERD_THREE_ID)) {
				availablePrefixSet.push(ENEMY_PREFIX_MASO, ENEMY_PREFIX_MASO, ENEMY_PREFIX_HORNY);
			}
			
			if(Karryn.hasEdict(EDICT_THE_NERD_PROBLEM)) {
				if(Karryn.hasEdict(EDICT_PAY_NERD_BLACKMAIL)) {
					availablePrefixSet.push(ENEMY_PREFIX_GOOD, ENEMY_PREFIX_GOOD, ENEMY_PREFIX_ELITE, ENEMY_PREFIX_STRONG, ENEMY_PREFIX_DEXTEROUS);
				}
				else if(Karryn.hasEdict(EDICT_THREATEN_THE_NERDS)) {
					availablePrefixSet.push(ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_WEAK);
				}
				else if(Karryn.hasEdict(EDICT_GIVE_IN_TO_NERD_BLACKMAIL)) {
					availablePrefixSet.push(ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_VIRGIN);
				}
				else {
					availablePrefixSet.push(ENEMY_PREFIX_HORNY, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_GOOD);
				}
			}
			
			if(Karryn.hasPassive(EDICT_READING_ROOM_ENTRANCE_FEE)) {
				availablePrefixSet.push(ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_ANGRY);
			}
			if(Karryn.hasPassive(EDICT_INMATE_ASSISTANT_ACCOUNTANT)) {
				availablePrefixSet.push(ENEMY_PREFIX_SADO, ENEMY_PREFIX_HORNY);
			}
			if(Karryn.hasPassive(EDICT_STOCK_WITH_ADULT_BOOKS)) {
				availablePrefixSet.push(ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_VIRGIN);
			}
			else if(Karryn.hasPassive(EDICT_STOCK_WITH_BODYBUILDING_BOOKS)) {
				availablePrefixSet.push(ENEMY_PREFIX_STRONG, ENEMY_PREFIX_DEXTEROUS, ENEMY_PREFIX_DEXTEROUS);
			}
			if(Karryn.hasPassive(EDICT_ANATOMY_CLASSES)) {
				availablePrefixSet.push(ENEMY_PREFIX_DEXTEROUS);
			}
		}
		
		
	}//End Inmate
	
	//Guards
	if(enemy.isGuardType) {	
		//Kitchen
		if(Karryn.hasEdict(EDICT_REPAIR_KITCHEN_AND_MESS_HALL)) {
			//Better Guard Meals
			if(Karryn.hasEdict(EDICT_BETTER_GUARD_MEALS)) {
				//Gourmet Guard Meals
				if(Karryn.hasEdict(EDICT_GOURMET_GUARD_MEALS)) {
					availablePrefixSet.push(ENEMY_PREFIX_SLOW, ENEMY_PREFIX_STRONG, ENEMY_PREFIX_STRONG, ENEMY_PREFIX_ELITE, ENEMY_PREFIX_GOOD);
				}
				else {
					availablePrefixSet.push(ENEMY_PREFIX_STRONG, ENEMY_PREFIX_GOOD, ENEMY_PREFIX_GOOD, ENEMY_PREFIX_ENDURING);
				}
			}
			
			if(Karryn.hasEdict(EDICT_GUARD_PAY_FOR_FOOD)) {
				availablePrefixSet.push(ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_SADO);
			}
		}
		else {
			availablePrefixSet.push(ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_HUNGRY, ENEMY_PREFIX_HUNGRY, ENEMY_PREFIX_STARVING, ENEMY_PREFIX_STARVING, ENEMY_PREFIX_INEPT, ENEMY_PREFIX_WEAK);
		}
		
		//Drug Edicts
		if(Karryn.hasEdict(EDICT_APHRODISIACS_IN_GUARD_FOOD)) {
			availablePrefixSet.push(ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_MASO);
		}	
		if(Karryn.hasEdict(EDICT_STEROIDS_FOR_GUARDS)) {
			availablePrefixSet.push(ENEMY_PREFIX_AGILE, ENEMY_PREFIX_STRONG, ENEMY_PREFIX_AGILE, ENEMY_PREFIX_STRONG, ENEMY_PREFIX_BIG, ENEMY_PREFIX_SENSITIVE);
		}	
		if(Karryn.hasEdict(EDICT_PERFORMANCE_ENHANCEMENT_DRUGS_FOR_GUARDS)) {
			availablePrefixSet.push(ENEMY_PREFIX_GOOD, ENEMY_PREFIX_DEXTEROUS, ENEMY_PREFIX_DEXTEROUS, ENEMY_PREFIX_BIG, ENEMY_PREFIX_DEXTEROUS);
		}	
		if(Karryn.hasEdict(EDICT_SEX_ENDURANCE_DRUGS_FOR_GUARDS)) {
			availablePrefixSet.push(ENEMY_PREFIX_ENDURING, ENEMY_PREFIX_ENDURING, ENEMY_PREFIX_ENDURING, ENEMY_PREFIX_BIG);
		}	
		
		//Training Edicts
		if(Karryn.hasEdict(EDICT_ADVANCED_GUARD_TRAINING)) {
			availablePrefixSet.push(ENEMY_PREFIX_ELITE, ENEMY_PREFIX_ELITE, ENEMY_PREFIX_GOOD, ENEMY_PREFIX_GOOD);
		}
		else if(Karryn.hasEdict(EDICT_BASIC_GUARD_TRAINING)) {
			availablePrefixSet.push(ENEMY_PREFIX_GOOD, ENEMY_PREFIX_GOOD, ENEMY_PREFIX_GOOD);
		}	
		
		if(Karryn.hasEdict(EDICT_ROGUE_TRAINING_FOR_GUARDS)) {
			availablePrefixSet.push(ENEMY_PREFIX_GOOD, ENEMY_PREFIX_ELITE);
		}
		
		//Cheap Edicts
		if(Karryn.hasEdict(EDICT_SELF_PAID_EQUIPMENT)) {
			availablePrefixSet.push(ENEMY_PREFIX_ANGRY);
		}
		if(Karryn.hasEdict(EDICT_SELF_MAINENANCE)) {
			availablePrefixSet.push(ENEMY_PREFIX_ANGRY);
		}
		if(Karryn.hasEdict(EDICT_YOU_BREAK_YOU_PAY)) {
			availablePrefixSet.push(ENEMY_PREFIX_ANGRY);
		}
		if(Karryn.hasEdict(EDICT_GUARDS_NEED_TO_PAY_IN_STORE)) {
			availablePrefixSet.push(ENEMY_PREFIX_ANGRY);
		}
		
		//Hiring Edicts
		if(Karryn.hasEdict(EDICT_NO_HIRING_STANDARDS)) {
			availablePrefixSet.push(ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY, ENEMY_PREFIX_MASO, ENEMY_PREFIX_SADO, ENEMY_PREFIX_SADO, ENEMY_PREFIX_SADO);
		}
		else if(Karryn.hasEdict(EDICT_HIRE_CURRENT_INMATES)) {
			availablePrefixSet.push(ENEMY_PREFIX_HORNY, ENEMY_PREFIX_MASO);
		}
		else if(Karryn.hasEdict(EDICT_LAXER_HIRING_STANDARDS)) {
			availablePrefixSet.push(ENEMY_PREFIX_MASO);
		}
		
		//Reading Room
		if(Karryn.hasEdict(EDICT_STOCK_WITH_ADULT_BOOKS)) {
			availablePrefixSet.push(ENEMY_PREFIX_HORNY, ENEMY_PREFIX_VIRGIN);
		}
		
		//Research
		if(Karryn.hasEdict(EDICT_RESEARCH_APHRODISIAC_CONTRACT)) {
			availablePrefixSet.push(ENEMY_PREFIX_HORNY, ENEMY_PREFIX_HORNY);
		}
		
	}//End Guards
	
	//Bar
	if(Karryn.hasEdict(EDICT_REPAIR_BAR) && !$gameParty.isInWaitressBattle) {
		availablePrefixSet.push(ENEMY_PREFIX_DRUNK, ENEMY_PREFIX_DRUNK);
		
		if(Karryn.hasEdict(EDICT_BAR_DRINK_MENU_III))
			availablePrefixSet.push(ENEMY_PREFIX_DRUNK, ENEMY_PREFIX_DRUNK, ENEMY_PREFIX_DRUNK);
		else if(Karryn.hasEdict(EDICT_BAR_DRINK_MENU_II))
			availablePrefixSet.push(ENEMY_PREFIX_DRUNK, ENEMY_PREFIX_DRUNK);
		else if(Karryn.hasEdict(EDICT_BAR_DRINK_MENU_I))
			availablePrefixSet.push(ENEMY_PREFIX_DRUNK);
	}	
	
	//Specific battles
	if($gameParty.isRiotBattle()) {
		availablePrefixSet.push(ENEMY_PREFIX_ANGRY, ENEMY_PREFIX_GOOD);
	}
	
	//Titles
	if(Karryn.hasThisTitle(TITLE_ID_STOLE_ANAL_VIRGINS)) {
		availablePrefixSet.push(ENEMY_PREFIX_VIRGIN);
		if(Karryn.isUsingThisTitle(TITLE_ID_STOLE_ANAL_VIRGINS)) {
			availablePrefixSet.push(ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_VIRGIN);
		}
	}
	
	// Passives based
	if(Karryn.hasPassive(PASSIVE_VIRGINS_TOTAL_THREE_ID)) {
		availablePrefixSet.push(ENEMY_PREFIX_VIRGIN, ENEMY_PREFIX_VIRGIN);
	}
	
	this.setPrefixTypeAndName(enemy, availablePrefixSet);
};

Game_Troop.prototype.setPrefixTypeAndName = function(enemy, availablePrefixSet) {
	let randomSetType = availablePrefixSet[Math.randomInt(availablePrefixSet.length)];
	let set = false;
	
	switch(randomSetType) {
		case ENEMY_PREFIX_BAD:
			if(TextManager.isEnglish) set = ENEMY_PREFIX_BAD_EN;
			else if(TextManager.isJapanese) set = ENEMY_PREFIX_BAD_JP;
			break;
		case ENEMY_PREFIX_HUNGRY:
			if(TextManager.isEnglish) set = ENEMY_PREFIX_HUNGRY_EN;
			else if(TextManager.isJapanese) set = ENEMY_PREFIX_HUNGRY_JP;
			break;
		case ENEMY_PREFIX_STARVING:
			if(TextManager.isEnglish) set = ENEMY_PREFIX_STARVING_EN;
			else if(TextManager.isJapanese) set = ENEMY_PREFIX_STARVING_JP;
			break;
		case ENEMY_PREFIX_WEAK:
			if(TextManager.isEnglish) set = ENEMY_PREFIX_WEAK_EN;
			else if(TextManager.isJapanese) set = ENEMY_PREFIX_WEAK_JP;
			break;
		case ENEMY_PREFIX_INEPT:
			if(TextManager.isEnglish) set = ENEMY_PREFIX_INEPT_EN;
			else if(TextManager.isJapanese) set = ENEMY_PREFIX_INEPT_JP;
			break;	
		case ENEMY_PREFIX_SLOW:
			if(TextManager.isEnglish) set = ENEMY_PREFIX_SLOW_EN;
			else if(TextManager.isJapanese) set = ENEMY_PREFIX_SLOW_JP;
			break;	
		case ENEMY_PREFIX_SENSITIVE:
			if(TextManager.isEnglish) set = ENEMY_PREFIX_SENSITIVE_EN;
			else if(TextManager.isJapanese) set = ENEMY_PREFIX_SENSITIVE_JP;
			break;	
		case ENEMY_PREFIX_GOOD:
			if(TextManager.isEnglish) set = ENEMY_PREFIX_GOOD_EN;
			else if(TextManager.isJapanese) set = ENEMY_PREFIX_GOOD_JP;
			break;
		case ENEMY_PREFIX_ELITE:
			if(TextManager.isEnglish) set = ENEMY_PREFIX_ELITE_EN;
			else if(TextManager.isJapanese) set = ENEMY_PREFIX_ELITE_JP;
			break;
		case ENEMY_PREFIX_STRONG:
			if(TextManager.isEnglish) set = ENEMY_PREFIX_STRONG_EN;
			else if(TextManager.isJapanese) set = ENEMY_PREFIX_STRONG_JP;
			break;
		case ENEMY_PREFIX_DEXTEROUS:
			if(TextManager.isEnglish) set = ENEMY_PREFIX_DEXTEROUS_EN;
			else if(TextManager.isJapanese) set = ENEMY_PREFIX_DEXTEROUS_JP;
			break;
		case ENEMY_PREFIX_AGILE:
			if(TextManager.isEnglish) set = ENEMY_PREFIX_AGILE_EN;
			else if(TextManager.isJapanese) set = ENEMY_PREFIX_AGILE_JP;
			break;			
		case ENEMY_PREFIX_ENDURING:
			if(TextManager.isEnglish) set = ENEMY_PREFIX_ENDURING_EN;
			else if(TextManager.isJapanese) set = ENEMY_PREFIX_ENDURING_JP;
			break;				
		case ENEMY_PREFIX_VIRGIN:
			if(TextManager.isEnglish) set = ENEMY_PREFIX_VIRGIN_EN;
			else if(TextManager.isJapanese) set = ENEMY_PREFIX_VIRGIN_JP;
			break;	
		case ENEMY_PREFIX_BIG:
			if(TextManager.isEnglish) set = ENEMY_PREFIX_BIG_EN;
			else if(TextManager.isJapanese) set = ENEMY_PREFIX_BIG_JP;
			break;	
		case ENEMY_PREFIX_HORNY:
			if(TextManager.isEnglish) set = ENEMY_PREFIX_HORNY_EN;
			else if(TextManager.isJapanese) set = ENEMY_PREFIX_HORNY_JP;
			break;
		case ENEMY_PREFIX_ANGRY:
			if(TextManager.isEnglish) set = ENEMY_PREFIX_ANGRY_EN;
			else if(TextManager.isJapanese) set = ENEMY_PREFIX_ANGRY_JP;
			break;
		case ENEMY_PREFIX_METAL:
			if(TextManager.isEnglish) set = ENEMY_PREFIX_METAL_EN;
			else if(TextManager.isJapanese) set = ENEMY_PREFIX_METAL_JP;
			break;	
			
		case ENEMY_PREFIX_TALK:
			if(TextManager.isEnglish) set = ENEMY_PREFIX_TALK_EN;
			else if(TextManager.isJapanese) set = ENEMY_PREFIX_TALK_JP;
			break;			
		case ENEMY_PREFIX_SIGHT:
			if(TextManager.isEnglish) set = ENEMY_PREFIX_SIGHT_EN;
			else if(TextManager.isJapanese) set = ENEMY_PREFIX_SIGHT_JP;
			break;				
					
		case ENEMY_PREFIX_NEUTRAL:
			if(TextManager.isEnglish) set = ENEMY_PREFIX_NEUTRAL_EN;
			else if(TextManager.isJapanese) set = ENEMY_PREFIX_NEUTRAL_JP;
			break;	
		default:
			if(TextManager.isEnglish) set = ENEMY_PREFIX_NEUTRAL_EN;
			else if(TextManager.isJapanese) set = ENEMY_PREFIX_NEUTRAL_JP;
	} 
	
	
	if(!set) return;

	let randomNum = Math.randomInt(set.length);
	enemy.addNamePrefix(set[randomNum], randomSetType);
};

Game_Troop.prototype.hornyPrefixEffect = function() {
	this.members().forEach(function(enemy) {
		enemy.hornyPrefixEffect();
	}, this);
};
Game_Troop.prototype.angryPrefixEffect = function() {
	this.members().forEach(function(enemy) {
		enemy.angryPrefixEffect();
	}, this);
};


Game_Troop.prototype.setupEnemyPrefixEffect = function() {
	this.members().forEach(function(enemy) {
		enemy.setupEnemyPrefixEffect();
	}, this);
};


///////////
////////////
// Game Enemy
//////////////
///////////////

Game_Enemy.prototype.makeUniqueNames = function() {
	let table = $gameTroop.letterTable();
	let enemy = this;
	if(enemy.isUnique || enemy.isWanted) {
		if(enemy.isAlive() && enemy.isLetterEmpty()) {
			let name = enemy.originalName();
			let n = $gameTroop._namesCount[name] || 0;
			enemy.setLetter(table[n % table.length]);
			$gameTroop._namesCount[name] = n + 1;
		}
	}
	else if(enemy.isBossType) {
		enemy.setRandomName(enemy.originalName());
		
		if(enemy._enemyId === ENEMY_ID_LEVELONEBOSS_TONKIN && Prison.hardMode()) {
			let prefixName = ENEMY_PREFIX_ANGRY_EN[0];
			if(TextManager.isJapanese) prefixName = ENEMY_PREFIX_ANGRY_JP[0];
			enemy.addNamePrefix(prefixName, ENEMY_PREFIX_ANGRY);
		}
	}
	else
	{
		let foundRandomName = false;
		let count = 0;
		while(!foundRandomName) {
			let name = enemy.getRandomName();
			let n = $gameTroop._namesCount[name] || 0;
			if(n === 0 || count > 100) {
				$gameTroop._namesCount[name] = 1;
				enemy.setRandomName(name);
				foundRandomName = true;
			}
			count++;
		}
		
		let prefixAttachChance = this.getAttachPrefixChance();
		
		if(!enemy.hasNamePrefix() && !enemy._tagDontAddPrefix && Math.random() < prefixAttachChance) {
			$gameTroop.makePrefix(enemy);
		}
		enemy.setupRandomBattlerNameNum();
	}
};

//Prefix Chance
Game_Enemy.prototype.getAttachPrefixChance = function() {
	let chance = ENEMY_PREFIX_BASE_ATTACH_CHANCE;
		
	if(Karryn.hasEdict(EDICT_LEVEL_FOUR_SUBJUGATED)) chance += 0.2;
	else if(Karryn.hasEdict(EDICT_LEVEL_THREE_SUBJUGATED)) chance += 0.15;
	else if(Karryn.hasEdict(EDICT_LEVEL_TWO_SUBJUGATED)) chance += 0.1;
	else if(Karryn.hasEdict(EDICT_LEVEL_ONE_SUBJUGATED)) chance += 0.05;
	
	if(Karryn.hasEdict(EDICT_ALLOW_RESEARCH_TESTING)) chance += 0.1;
	if(Karryn.hasEdict(EDICT_REPAIR_RECEPTION)) chance += 0.1;
	
	if(Karryn.hasEdict(EDICT_RECEPTION_POLICY_STRONG_ONLY)) chance += 0.2;
	else if(Karryn.hasEdict(EDICT_RECEPTION_POLICY_FAVOR_STRONG)) chance += 0.1;
	
	if(Prison.hardMode()) chance += 0.05;
	
	if($gameParty.isRiotBattle()) chance *= 1.25;
		
	chance *= this.enemy().dataEnemyPrefixChance;
		
	return chance;
};

Game_Enemy.prototype.displayName = function() {
	if($gameParty.isInGloryBattle) {
		return this.displayName_gloryHoleBattle();
	}
	
	if(this.isUnique)
		return this.name();
	else if(this.isVisitorType) {
			return this.displayName_receptionistBattle();
	}
	else {
		return this._randomEnemyName;
		
	}
};

Game_Enemy.prototype.name = function() {
	if($gameParty.isInGloryBattle) {
		return this.name_gloryHoleBattle();
	}
	
	if(this.isUnique)
		return this.originalName() + (this._plural ? this._letter : '');
	else {
		if(Karryn.isInReceptionistPose()) {
			return this.name_receptionistBattle();
		}
		
		if(TextManager.isEnglish) {
			let name = this._randomEnemyName;
			if(!this.hasNamePrefix()) {
				if(this.isWanted && !this._justBecameWanted && !this.isBossType) {
					name += ' (Lv ' + this._wantedLvl + ' ' + this.getEnemyTypeName() + ')';
				}
				else {
					name += ' (' + this.getEnemyTypeName() + ')';
				}
			}
			else {
				if(this.isWanted && !this._justBecameWanted && !this.isBossType) {
					name += " the Lv " + this._wantedLvl + ' ' + this.getNamePrefix() + " ";
				}
				else {
					name += " the " + this.getNamePrefix() + " ";
				}
				name += this.getEnemyTypeName();
			}
			return name;
		}
		else if(TextManager.isJapanese) {
			if(!this.hasNamePrefix()) {
				if(this.isWanted && !this._justBecameWanted && !this.isBossType) {
					return "Lv" + this._wantedLvl + " " + this.getEnemyTypeName() + " " + this._randomEnemyName;
				}
				else {
					return this.getEnemyTypeName() + " " + this._randomEnemyName;
				}
			}
			else {
				if(this.isWanted && !this._justBecameWanted && !this.isBossType) {
					return "Lv" + this._wantedLvl + " " + this.getNamePrefix() + this.getEnemyTypeName() + " " + this._randomEnemyName;
				}
				else {
					return this.getNamePrefix() + this.getEnemyTypeName() + " " + this._randomEnemyName;
				}
			}
		}
	}
};

Game_Enemy.prototype.getRandomName = function() {
    var name = '';
	var nameArray = [];
	
	if(TextManager.isEnglish) {
		nameArray = ENEMY_NAMES_GENERIC_EN.slice(0);
		if(this.isVisitorType) {
			nameArray = ENEMY_NAMES_VISITOR_UNISEX_EN.slice(0);
			if(this.isVisitorMaleType) 
				nameArray = nameArray.concat(ENEMY_NAMES_VISITOR_MALE_EN);
			else if(this.isVisitorFemaleType)
				nameArray = nameArray.concat(ENEMY_NAMES_VISITOR_FEMALE_EN);
		}
		else if(this.isThugType) {
			nameArray = nameArray.concat(ENEMY_NAMES_THUG_EN);
			nameArray = nameArray.concat(ENEMY_NAMES_THUG_EN);
			nameArray = nameArray.concat(ENEMY_NAMES_THUG_EN);
			nameArray = nameArray.concat(ENEMY_NAMES_THUG_EN);
		}
		else if(this.isGoblinType) {
			nameArray = nameArray.concat(ENEMY_NAMES_GOBLIN_EN);
			nameArray = nameArray.concat(ENEMY_NAMES_GOBLIN_EN);
			nameArray = nameArray.concat(ENEMY_NAMES_GOBLIN_EN);
			nameArray = nameArray.concat(ENEMY_NAMES_GOBLIN_EN);
		}
		else if(this.isNerdType) {
			nameArray = nameArray.concat(ENEMY_NAMES_NERD_EN);
			nameArray = nameArray.concat(ENEMY_NAMES_NERD_EN);
			nameArray = nameArray.concat(ENEMY_NAMES_NERD_EN);
			nameArray = nameArray.concat(ENEMY_NAMES_NERD_EN);
		}
		else if(this.isRogueType) {
			nameArray = nameArray.concat(ENEMY_NAMES_ROGUE_EN);
			nameArray = nameArray.concat(ENEMY_NAMES_ROGUE_EN);
			nameArray = nameArray.concat(ENEMY_NAMES_ROGUE_EN);
			nameArray = nameArray.concat(ENEMY_NAMES_ROGUE_EN);
		}
		else if(this.isLizardmanType) {
			nameArray = nameArray.concat(ENEMY_NAMES_LIZARDMAN_EN);
			nameArray = nameArray.concat(ENEMY_NAMES_LIZARDMAN_EN);
			nameArray = nameArray.concat(ENEMY_NAMES_LIZARDMAN_EN);
			nameArray = nameArray.concat(ENEMY_NAMES_LIZARDMAN_EN);
		}
		else if(this.isHomelessType) {
			nameArray = nameArray.concat(ENEMY_NAMES_HOMELESS_EN);
			nameArray = nameArray.concat(ENEMY_NAMES_HOMELESS_EN);
			nameArray = nameArray.concat(ENEMY_NAMES_HOMELESS_EN);
			nameArray = nameArray.concat(ENEMY_NAMES_HOMELESS_EN);
		}
		else if(this.isOrcType) {
			nameArray = nameArray.concat(ENEMY_NAMES_ORC_EN);
			nameArray = nameArray.concat(ENEMY_NAMES_ORC_EN);
			nameArray = nameArray.concat(ENEMY_NAMES_ORC_EN);
			nameArray = nameArray.concat(ENEMY_NAMES_ORC_EN);
		}
		
	}
	else if(TextManager.isJapanese) {
		nameArray = ENEMY_NAMES_GENERIC_JP.slice(0);
		if(this.isVisitorType) {
			nameArray = ENEMY_NAMES_VISITOR_UNISEX_JP.slice(0);
			if(this.isVisitorMaleType) 
				nameArray = nameArray.concat(ENEMY_NAMES_VISITOR_MALE_JP);
			else if(this.isVisitorFemaleType)
				nameArray = nameArray.concat(ENEMY_NAMES_VISITOR_FEMALE_JP);
		}
		else if(this.isThugType) {
			nameArray = nameArray.concat(ENEMY_NAMES_THUG_JP);
			nameArray = nameArray.concat(ENEMY_NAMES_THUG_JP);
			nameArray = nameArray.concat(ENEMY_NAMES_THUG_JP);
			nameArray = nameArray.concat(ENEMY_NAMES_THUG_JP);
		}
		else if(this.isGoblinType) {
			nameArray = nameArray.concat(ENEMY_NAMES_GOBLIN_JP);
			nameArray = nameArray.concat(ENEMY_NAMES_GOBLIN_JP);
			nameArray = nameArray.concat(ENEMY_NAMES_GOBLIN_JP);
			nameArray = nameArray.concat(ENEMY_NAMES_GOBLIN_JP);
		}
		else if(this.isNerdType) {
			nameArray = nameArray.concat(ENEMY_NAMES_NERD_JP);
			nameArray = nameArray.concat(ENEMY_NAMES_NERD_JP);
			nameArray = nameArray.concat(ENEMY_NAMES_NERD_JP);
			nameArray = nameArray.concat(ENEMY_NAMES_NERD_JP);
		}
		else if(this.isRogueType) {
			nameArray = nameArray.concat(ENEMY_NAMES_ROGUE_JP);
			nameArray = nameArray.concat(ENEMY_NAMES_ROGUE_JP);
			nameArray = nameArray.concat(ENEMY_NAMES_ROGUE_JP);
			nameArray = nameArray.concat(ENEMY_NAMES_ROGUE_JP);
		}
		else if(this.isLizardmanType) {
			nameArray = nameArray.concat(ENEMY_NAMES_LIZARDMAN_JP);
			nameArray = nameArray.concat(ENEMY_NAMES_LIZARDMAN_JP);
			nameArray = nameArray.concat(ENEMY_NAMES_LIZARDMAN_JP);
			nameArray = nameArray.concat(ENEMY_NAMES_LIZARDMAN_JP);
		}
		else if(this.isHomelessType) {
			nameArray = nameArray.concat(ENEMY_NAMES_HOMELESS_JP);
			nameArray = nameArray.concat(ENEMY_NAMES_HOMELESS_JP);
			nameArray = nameArray.concat(ENEMY_NAMES_HOMELESS_JP);
			nameArray = nameArray.concat(ENEMY_NAMES_HOMELESS_JP);
		}
		else if(this.isOrcType) {
			nameArray = nameArray.concat(ENEMY_NAMES_ORC_JP);
			nameArray = nameArray.concat(ENEMY_NAMES_ORC_JP);
			nameArray = nameArray.concat(ENEMY_NAMES_ORC_JP);
			nameArray = nameArray.concat(ENEMY_NAMES_ORC_JP);
		}
		
	}
	
	let num = Math.floor(Math.random() * nameArray.length);
	name = nameArray[num];
	
	return name;
};

Game_Enemy.prototype.setRandomName = function(name) {
	this._randomEnemyName = name;
};

Game_Enemy.prototype.setupRandomEnemyName = function() {
	if(!this.isUnique) {
	   this._randomEnemyName = false;
	   this._hasEnemyNamePrefix = false;
	   this._enemyNamePrefix = false;
	   this._enemyNamePrefixType = false;
	}
};

Game_Enemy.prototype.getEnemyTypeName = function() {
	if(this.isBossType) {
		if(this.isYasu) return TextManager.bossYasu;
		else if(this.isTonkin) return TextManager.bossTonkin;
		else if(this.isCargill) return TextManager.bossCargill;
		else if(this.isAron) return TextManager.bossAron;
	}
	
	if(this.isPrisonGuard) return TextManager.prisonerGuard;
	else if(this.isThugType) return TextManager.prisonerThug;
	else if(this.isOrcType) return TextManager.prisonerOrc;
	else if(this.isGoblinType) return TextManager.prisonerGoblin;
	else if(this.isSlimeType) return TextManager.prisonerSlime;
	else if(this.isRogueType) return TextManager.prisonerRogue;
	else if(this.isNerdType) return TextManager.prisonerNerd;
	else if(this.isLizardmanType) return TextManager.prisonerLizardman;
	else if(this.isHomelessType) return TextManager.prisonerHomeless;
	else if(this.isVisitorType) {
		if(this._visitor_isIdentified && this._visitor_isFan && !this._visitor_isVisiting)
			return TextManager.receptionistFan;
		else
			return TextManager.receptionistVisitor;
	}
	
	else return TextManager.prisonerGeneric;
};

/////////
// Prefix
/////////////

Game_Enemy.prototype.getNamePrefix = function() {
   return this._enemyNamePrefix;
};
Game_Enemy.prototype.hasNamePrefix = function() {
   return this._hasEnemyNamePrefix;
};
Game_Enemy.prototype.getNamePrefixType = function() {
   return this._enemyNamePrefixType;
};

Game_Enemy.prototype.addNamePrefix = function(prefix, type) {
	this._enemyNamePrefix = prefix;
	this._enemyNamePrefixType = type;
	this._hasEnemyNamePrefix = true;
};

//Prefix Effects

Game_Enemy.prototype.hasBadPrefix = function() { return this.getNamePrefixType() == ENEMY_PREFIX_BAD; };
Game_Enemy.prototype.hasDrunkPrefix = function() { return this.getNamePrefixType() == ENEMY_PREFIX_DRUNK; };
Game_Enemy.prototype.hasHornyPrefix = function() { return this.getNamePrefixType() == ENEMY_PREFIX_HORNY; };
Game_Enemy.prototype.hasAngryPrefix = function() { return this.getNamePrefixType() == ENEMY_PREFIX_ANGRY; };

Game_Enemy.prototype.hasWeakPrefix = function() { return this.getNamePrefixType() == ENEMY_PREFIX_WEAK; };
Game_Enemy.prototype.hasIneptPrefix = function() { return this.getNamePrefixType() == ENEMY_PREFIX_INEPT; };
Game_Enemy.prototype.hasSlowPrefix = function() { return this.getNamePrefixType() == ENEMY_PREFIX_SLOW; };
Game_Enemy.prototype.hasHungryPrefix = function() { return this.getNamePrefixType() == ENEMY_PREFIX_HUNGRY; };
Game_Enemy.prototype.hasStarvingPrefix = function() { return this.getNamePrefixType() == ENEMY_PREFIX_STARVING; };
Game_Enemy.prototype.hasSensitivePrefix = function() { return this.getNamePrefixType() == ENEMY_PREFIX_SENSITIVE; };

Game_Enemy.prototype.hasGoodPrefix = function() { return this.getNamePrefixType() == ENEMY_PREFIX_GOOD; };
Game_Enemy.prototype.hasStrongPrefix = function() { return this.getNamePrefixType() == ENEMY_PREFIX_STRONG; };
Game_Enemy.prototype.hasDexterousPrefix = function() { return this.getNamePrefixType() == ENEMY_PREFIX_DEXTEROUS; };
Game_Enemy.prototype.hasAgilePrefix = function() { return this.getNamePrefixType() == ENEMY_PREFIX_AGILE; };
Game_Enemy.prototype.hasEnduringPrefix = function() { return this.getNamePrefixType() == ENEMY_PREFIX_ENDURING; };
Game_Enemy.prototype.hasElitePrefix = function() { return this.getNamePrefixType() == ENEMY_PREFIX_ELITE; };

Game_Enemy.prototype.hasBigPrefix = function() { return this.getNamePrefixType() == ENEMY_PREFIX_BIG; };
Game_Enemy.prototype.hasVirginPrefix = function() { return this.getNamePrefixType() == ENEMY_PREFIX_VIRGIN; };
Game_Enemy.prototype.hasMetalPrefix = function() { return this.getNamePrefixType() == ENEMY_PREFIX_METAL; };

Game_Enemy.prototype.hasSadoPrefix = function() { return this.getNamePrefixType() == ENEMY_PREFIX_SADO; };
Game_Enemy.prototype.hasMasoPrefix = function() { return this.getNamePrefixType() == ENEMY_PREFIX_MASO; };
Game_Enemy.prototype.hasTalkPrefix = function() { return this.getNamePrefixType() == ENEMY_PREFIX_TALK; };
Game_Enemy.prototype.hasSightPrefix = function() { return this.getNamePrefixType() == ENEMY_PREFIX_SIGHT; };



Game_Enemy.prototype.hornyPrefixEffect = function() {
	if(!this.hasNamePrefix()) return;
	if(this.hasHornyPrefix()) {
		this.addHornyState(); 
	}
};
Game_Enemy.prototype.angryPrefixEffect = function() {
	if(!this.hasNamePrefix()) return;
	if(this.hasAngryPrefix()) {
		this.addAngryState(); 
	}
	else if((this.hasHungryPrefix() || this.hasStarvingPrefix()) && Math.random() < 0.33) {
		this.addAngryState(); 
	}
};


Game_Enemy.prototype.initialPleasurePrefixEffect = function() {
	if(!this.hasNamePrefix()) return 0;
	var addedMulti = 0;
	if(this.hasVirginPrefix()) {
		if(Karryn.hasPassive(PASSIVE_VIRGINS_TOTAL_TWO_ID))
			addedMulti += 2;
	}
	else if(this.hasSensitivePrefix() || this.hasBigPrefix()) addedMulti += 1;
	else if(this.hasStarvingPrefix() || this.hasEnduringPrefix()) addedMulti -= 1;
	
	return addedMulti;
};

Game_Enemy.prototype.setupEnemyPrefixEffect = function() {
	//Ejaculation Stock
   if(this.hasElitePrefix() || this.hasEnduringPrefix() || this.hasBigPrefix()) {
		this._ejaculationStock++;
   }
   else if(this.hasHungryPrefix() || this.hasStarvingPrefix() || this.hasSensitivePrefix()) {
		this._ejaculationStock = Math.max(this._ejaculationStock - 1, 1);
   }
   else if(this.hasVirginPrefix()) {
	   if(Karryn.hasPassive(PASSIVE_VIRGINS_TOTAL_FOUR_ID))
		   this._ejaculationStock++;
   }
};

Game_Enemy.prototype.prefixTalkEffect = function(base) {
	let value = 0;
	if(this.hasTalkPrefix()) {
		value += Math.max(3, Math.round(base * 0.75));
	}
	else if(this.hasElitePrefix() || this.hasGoodPrefix() || this.hasBigPrefix()) {
		value += 1;
	}
   
	return value;
};
Game_Enemy.prototype.prefixSightEffect = function(base) {
	let value = 0;
	if(this.hasSightPrefix()) {
		value += Math.max(3, Math.round(base * 0.75));
	}
	else if(this.hasElitePrefix() || this.hasGoodPrefix() || this.hasBigPrefix()) {
		value += 1;
	}
	
	return value;
};

Game_Enemy.prototype.prefixMasoEffect = function(base) {
	let value = 0;
	if(this.hasMasoPrefix()) {
		value += 3;
	}
	return value;
};

Game_Enemy.prototype.prefixSadoEffect = function(base) {
	let value = 0;
	if(this.hasSadoPrefix()) {
		value += 3;
	}
	return value;
};

Game_Enemy.prototype.prefixSexSkillEffect = function(base) {
	let value = 0;
	if(this.hasDexterousPrefix() || this.hasElitePrefix())
		value += Math.max(2, Math.round(base * 0.67));
	else if(this.hasIneptPrefix() || this.hasBadPrefix())
		value -= 1;
	return value;
};


Game_Enemy.prototype.prefixEjaculationVolumeEffect = function() {
	let rate = 1;
	if((this.hasVirginPrefix() && Karryn.hasPassive(PASSIVE_VIRGINS_TOTAL_FOUR_ID)) || this.hasBigPrefix()) {
		rate += 0.5;
	}
	else if(this.hasEnduringPrefix() || this.hasElitePrefix()) {
		rate += 0.25;
	}
	else if(this.hasGoodPrefix() || (this.hasVirginPrefix() && !Karryn.hasPassive(PASSIVE_VIRGINS_TOTAL_FOUR_ID))) {
		rate += 0.15;
	}	
	else if(this.hasBadPrefix() || this.hasSensitivePrefix()) {
		rate -= 0.15;
	}	
	else if(this.hasHungryPrefix() || this.hasStarvingPrefix()) {
		rate -= 0.25;
	}	
	
	return rate;
};

// Param 
Game_Enemy.prototype.prefixParamRateEffect = function(paramId) {
	if(!this.hasNamePrefix()) return 1;
	let rate = 1;
	let prefixType = this.getNamePrefixType();
	
	if(paramId === PARAM_MAXSTAMINA_ID) { //Stamina
		if(this.hasBadPrefix() || this.hasHungryPrefix() || this.hasWeakPrefix()) rate -= 0.15;
		else if(this.hasStarvingPrefix() || this.hasDrunkPrefix()) rate -= 0.25;
		else if(this.hasSensitivePrefix()) rate -= 0.10;
		else if(this.hasGoodPrefix() || this.hasStrongPrefix()) rate += 0.25;
		else if(this.hasMasoPrefix()) rate += 0.40;
		else if(this.hasElitePrefix() || this.hasBigPrefix()) rate += 0.50;
	}
	else if(paramId === PARAM_MAXENERGY_ID) { //Energy
		if(this.hasBadPrefix() || this.hasHungryPrefix() || this.hasSensitivePrefix()) rate -= 0.15;
		else if(this.hasStarvingPrefix() || this.hasDrunkPrefix()) rate -= 0.25;
		else if(this.hasIneptPrefix()) rate -= 0.10;
		else if(this.hasDexterousPrefix()) rate += 0.10;
		else if(this.hasGoodPrefix()) rate += 0.15;
		else if(this.hasMasoPrefix() || prefixType == ENEMY_PREFIX_ENDURING) rate += 0.25;
		else if(this.hasElitePrefix()) rate += 0.50;
		else if(this.hasVirginPrefix() || prefixType == ENEMY_PREFIX_BIG) rate += 1;
	}
	else if(paramId === PARAM_STRENGTH_ID) { //Strength
		if(this.hasBadPrefix() || this.hasHungryPrefix()) rate -= 0.15;
		else if(this.hasStarvingPrefix() || this.hasDrunkPrefix() || this.hasWeakPrefix()) rate -= 0.25;
		else if(this.hasGoodPrefix() || this.hasHornyPrefix() || this.hasSadoPrefix() || this.hasMetalPrefix()) rate += 0.15;
		else if(this.hasStrongPrefix()) rate += 0.25;
		else if(this.hasElitePrefix() || this.hasBigPrefix()) rate += 0.30;
	}
	else if(paramId === PARAM_ENDURANCE_ID) { //Endurance
		if(this.hasBadPrefix() || this.hasHungryPrefix()) rate -= 0.15;
		else if(this.hasStarvingPrefix() || this.hasDrunkPrefix() || this.hasSensitivePrefix() || this.hasVirginPrefix()) rate -= 0.20;
		else if(this.hasGoodPrefix() || this.hasSlowPrefix()) rate += 0.15;
		else if(this.hasEnduringPrefix() || this.hasBigPrefix() || this.hasMetalPrefix()) rate += 0.25;
		else if(this.hasElitePrefix()) rate += 0.30;
	}
	else if(paramId === PARAM_DEXTERITY_ID) { //Dexterity
		if(this.hasBadPrefix() || this.hasHungryPrefix()) rate -= 0.15;
		else if(this.hasIneptPrefix() || this.hasDrunkPrefix() || this.hasStarvingPrefix()  || this.hasVirginPrefix()) rate -= 0.25;
		else if(this.hasGoodPrefix() || this.hasHornyPrefix() || this.hasSadoPrefix() || this.hasBigPrefix() || this.hasMetalPrefix()) rate += 0.15;
		else if(this.hasDexterousPrefix()) rate += 0.25;
		else if(this.hasElitePrefix()) rate += 0.30;
	}
	else if(paramId === PARAM_MIND_ID) { //Mind
		if(this.hasBadPrefix() || this.hasHungryPrefix()) rate -= 0.15;
		else if(this.hasStarvingPrefix() || this.hasDrunkPrefix()) rate -= 0.25;
		else if(this.hasGoodPrefix() || this.hasMetalPrefix()) rate += 0.15;
		else if(this.hasElitePrefix()) rate += 0.30;
	}
	else if(paramId === PARAM_AGILITY_ID) { //Agility
		if(this.hasBadPrefix() || this.hasHungryPrefix()) rate -= 0.15;
		else if(this.hasStarvingPrefix() || this.hasDrunkPrefix() || this.hasSlowPrefix() || this.hasBigPrefix()) rate -= 0.25;
		else if(this.hasGoodPrefix() || this.hasMetalPrefix()) rate += 0.15;
		else if(this.hasHornyPrefix() || this.hasSadoPrefix()) rate += 0.10;
		else if(this.hasAgilePrefix()) rate += 0.25;
		else if(this.hasElitePrefix()) rate += 0.30;
	}
	else if(paramId === PARAM_CHARM_ID) { //Charm
		if(this.hasVirginPrefix() && Karryn.hasPassive(PASSIVE_VIRGINS_TOTAL_ONE_ID)) rate -= 0.5;
		else if(this.hasElitePrefix() || this.hasMetalPrefix()) rate += 0.25;
		else if(this.hasGoodPrefix()) rate += 0.15;
	}
	
	
	return rate;
};

Game_Enemy.prototype.prefixOverblowProtectionRateEffect = function() {
	let rate = 1;
	
	if(this.hasWeakPrefix() || this.hasHungryPrefix() || this.hasBadPrefix()) 
		rate = 1.2;
	else if(this.hasWeakPrefix())
		rate = 2;
	else if(this.hasStrongPrefix() || this.hasBigPrefix())
		rate = 0.75;
	else if(this.hasElitePrefix())
		rate = 0.6;

	return rate;
};

Game_Enemy.prototype.addJustJoinedState = function() {
	if(this.hasWeakPrefix() || this.hasSensitivePrefix() || this.hasIneptPrefix() || this.hasVirginPrefix()) {
		return;
	}
	this.addState(STATE_JUST_JOINED_ID);
};

//////
// Battler Hue

Game_Enemy.prototype.battlerHue = function() {
    if(this.isBossType) 
		return this.enemy().battlerHue;
	
	//Yellow-ish skin tone
	if(this.isGoblinType) {
		if(this.hasMetalPrefix()) return 155;
		else if(this.hasGoodPrefix()) return 330;
		else if(this.hasElitePrefix()) return 236;
		else if(this.hasWeakPrefix() || this.hasHungryPrefix()) return 11;
		else if(this.hasDrunkPrefix()) return 348;
		else if(this.hasBigPrefix()) return 282;
		else if(this.isWanted) return 3;
	}
	//Green skin tone
	else if(this.isOrcType) {
		if(this.hasMetalPrefix()) return 110;
		else if(this.hasGoodPrefix()) return 320;
		else if(this.hasElitePrefix()) return 184;
		else if(this.hasWeakPrefix() || this.hasHungryPrefix()) return 335;
		else if(this.hasDrunkPrefix()) return 344;
		else if(this.hasBigPrefix()) return 29;
		else if(this.isWanted) return 14;
	}
	//Red skin tone
	else if(this.isLizardmanType) {
		if(this.hasMetalPrefix()) return 205;
		else if(this.hasGoodPrefix()) return 330;
		else if(this.hasElitePrefix()) return 258;
		else if(this.hasWeakPrefix() || this.hasHungryPrefix()) return 73;
		else if(this.hasDrunkPrefix()) return 349;
		else if(this.hasBigPrefix()) return 304;
		else if(this.isWanted) return 3;
	}
	//Blue skin tone
	else if(this.isSlimeType) {
		if(this.hasMetalPrefix()) return 21;
		else if(this.hasGoodPrefix()) return 207;
		else if(this.hasElitePrefix()) return 75;
		else if(this.hasWeakPrefix() || this.hasHungryPrefix()) return 302;
		else if(this.hasBigPrefix()) return 144;
		else if(this.isWanted) return 4;
	}
	//Human skin tone
	else {
		if(this.hasMetalPrefix()) return 210;
		else if(this.hasDrunkPrefix()) return 328;
		else if(this.hasBadPrefix() || this.hasStarvingPrefix()) return 38;
		else if(this.hasWeakPrefix() || this.hasHungryPrefix()) return 16;
		else if(this.hasGoodPrefix()) return 338;
		else if(this.hasElitePrefix()) return 251;
		else if(this.hasBigPrefix()) return 310;
		else if(this.isWanted) return 353;
	}
	
	return this.enemy().battlerHue;
};


///////////
/////////////
// Sprite Enemy
///////////////
/////////////

Sprite_Enemy.prototype.updateFrame = function() {
    Sprite_Battler.prototype.updateFrame.call(this);
    let frameHeight = this.bitmap.height;
    if (this._effectType === 'bossCollapse') {
        frameHeight = this._effectDuration;
    }
	
	if(Karryn.isInDrawEnemiesAtHalfWidthPose()) {
		let half = Math.round(this.bitmap.width * 0.5);
		this.setFrame(half, 0, half, frameHeight);
	}
	else {
		this.setFrame(0, 0, this.bitmap.width, frameHeight);
	}
};

//Fixed positioning
Sprite_Enemy.prototype.setBattler = function(battler) {
    Sprite_Battler.prototype.setBattler.call(this, battler);
    this._enemy = battler;
    this.setHome(battler.screenX(), battler.screenY());
    this._stateIconSprite.setup(battler);

	battler._spriteEnemy = this;
	
	if (this._visualSelectWindow) this._visualSelectWindow.setBattler(battler);
	this._remEnemyNameWindow.setBattler(battler);
};

Sprite_Enemy.prototype.updateStateSprite = function() {
    this._stateIconSprite.y = -Math.round((this.bitmap.height + 40) * 0.9);
    if (this._stateIconSprite.y < 20 - this.y) {
        this._stateIconSprite.y = 20 - this.y;
    }
};

Remtairy.EnemyName.Sprite_Enemy_preSpriteInitialize = Sprite_Enemy.prototype.preSpriteInitialize;
Sprite_Enemy.prototype.preSpriteInitialize = function(battler) {
    Remtairy.EnemyName.Sprite_Enemy_preSpriteInitialize.call(this, battler);
    this.createRemEnemyNameWindow();
};

Remtairy.EnemyName.Sprite_Enemy_update = Sprite_Enemy.prototype.update;
Sprite_Enemy.prototype.update = function() {
    Remtairy.EnemyName.Sprite_Enemy_update.call(this);
    this.addRemEnemyNameWindow();
	
    if (!SceneManager._scene) return;
    var scene = SceneManager._scene;
    if (!scene._windowLayer) return;
	if (!scene.children.contains(this._remEnemyNameWindow)) {
      this._addedRemEnemyName = true;
	  this.parent.parent.addChild(this._remEnemyNameWindow);
    }
};

Sprite_Enemy.prototype.addRemEnemyNameWindow = function() {
    if (this._addedRemEnemyName) return;
    if (!SceneManager._scene) return;
    var scene = SceneManager._scene;
    if (!scene._windowLayer) return;
    this._addedRemEnemyName = true;
	this.parent.parent.addChild(this._remEnemyNameWindow);
};

Sprite_Enemy.prototype.createRemEnemyNameWindow = function() {
    this._remEnemyNameWindow = new Window_RemEnemyName();
};

Sprite_Enemy.prototype.damageOffsetX = function() {
	if(this._enemy._tagDontDrawImage) {
		return -999;
	}
	else if(Karryn.isInShowEnemyImageOnlyDuringValidSelectionPose()) {
		return -999;
	}
    else return SBP_ENEMY_DAMAGE_OFFSET_X;
};

Sprite_Enemy.prototype.damageOffsetY = function() {
	if(this._enemy._tagDontDrawImage) {
		return -999;
	}
	else if(Karryn.isInShowEnemyImageOnlyDuringValidSelectionPose()) {
		return -999;
	}
    else return SBP_ENEMY_DAMAGE_OFFSET_Y;
};


//////////////////////
///// Window RemEnemyName
///////////////////////

function Window_RemEnemyName() {
    this.initialize.apply(this, arguments);
}

Window_RemEnemyName.prototype = Object.create(Window_Base.prototype);
Window_RemEnemyName.prototype.constructor = Window_RemEnemyName;

Window_RemEnemyName.prototype.initialize = function() {
    Window_Base.prototype.initialize.call(this, 0, 0, 1, 1);
    this._battler = null;
    this._enemyName = '';
    this._showEnemyName = true;
    this.contentsOpacity = 0;
    this.opacity = 0;
};

Window_RemEnemyName.prototype.setBattler = function(battler) {
    if (this._battler === battler) return;
    this._battler = battler;
    this._enemyName = battler.name();
	if(this._battler._tagDontDrawName) 
		this._showEnemyName = false;
	else 
		this.drawRemEnemyName();
};

Window_RemEnemyName.prototype.update = function() {
	if(!this._battler) return;
	if(Karryn.isInDontShowEnemyNameEverPose()) return;
	if(!this._showEnemyName && !Karryn.isInShowEnemyNameOnlyDuringValidSelectionPose()) return;
    Window_Base.prototype.update.call(this);
    
	this.updateEnemyName();
	this.updateWindowSize();
    this.updateWindowPosition();
    this.updateOpacity();
    this.updateRefresh();
};

Window_RemEnemyName.prototype.updateEnemyName = function() {
	if(!this._battler) return;
	if(this._enemyName !== this._battler.name()) {
		this._enemyName = this._battler.name();
		this._requestRefresh = true;
	}
};

Window_RemEnemyName.prototype.updateWindowSize = function() {
    var spriteWidth = this._battler.spriteWidth();
    var width = spriteWidth + this.standardPadding() * 2;
    width = Math.ceil(width);
    var height = this._battler.spriteHeight() + this.standardPadding() * 2;
    height = Math.ceil(height);
    height = Math.max(height, this.lineHeight() + this.standardPadding() * 2);
    if (width === this.width && height === this.height) return;
    this.width = width;
    this.height = height;
    this.createContents();
    this._requestRefresh = true;
    this.makeWindowBoundaries();
};

Window_RemEnemyName.prototype.makeWindowBoundaries = function() {
    if (!this._requestRefresh) return;
    this._minX = -1 * this.standardPadding();
    this._maxX = Graphics.boxWidth - this.width + this.standardPadding();
    this._minY = -1 * this.standardPadding();
    this._maxY = Graphics.boxHeight - this.height + this.standardPadding();
    //this._maxY -= SceneManager._scene._statusWindow.height;
};

Window_RemEnemyName.prototype.updateWindowPosition = function() {
    if (!this._battler) return;
	if(Karryn.isInDrawEnemiesAtHalfWidthPose()) {
		this.x = -1 * this.width / 4;
		this.y = -1 * this.height + this.standardPadding();
		this.x += this._battler.spritePosX();
		this.y += this._battler.spritePosY();
		this.y -= 28;
		this.x = this.x.clamp(this._minX, this._maxX);
		this.y = this.y.clamp(this._minY, this._maxY);
	}
	else if(Karryn.isInReceptionistPose()) {
		this.x = -1 * this.width / 2;
		this.y = -1 * this.height + this.standardPadding();
		this.x += this._battler.spritePosX();
		this.x += VISITOR_NAME_TEXT_X;
		this.y += this._battler.spritePosY();
		this.x = this.x.clamp(this._minX, this._maxX);
		this.y = this.y.clamp(this._minY, this._maxY);
	}
	else {
		this.x = -1 * this.width / 2;
		this.y = -1 * this.height + this.standardPadding();
		this.x += this._battler.spritePosX();
		this.y += this._battler.spritePosY();
		this.x = this.x.clamp(this._minX, this._maxX);
		this.y = this.y.clamp(this._minY, this._maxY);
	}
};

Window_RemEnemyName.prototype.updateOpacity = function() {
    if (this.isShowWindow()) {
      this.contentsOpacity += 32;
    } else {
      this.contentsOpacity -= 32;
    }
};

Window_RemEnemyName.prototype.isShowWindow = function() {
    if(!this._battler.isAppeared()) return false;
    if(this._battler.isDead()) {
		return false;
    }
    return true;
};

Window_RemEnemyName.prototype.updateRefresh = function() {
    if(this._requestRefresh || Karryn.isInShowEnemyNameOnlyDuringValidSelectionPose()) 
		this.refresh();
};

Window_RemEnemyName.prototype.refresh = function() {
    this.contents.clear();
	//if(!this._showEnemyName && !Karryn.isInShowEnemyNameOnlyDuringValidSelectionPose()) return;
	
	if(Karryn.isInShowEnemyNameOnlyDuringValidSelectionPose()) {
		if(!SceneManager._scene._enemyWindow.isOpenAndActive() || !this._battler._selectionShowName) 
			return;
	}
	
    if(!this._battler) return;
    if(this._battler.isHidden()) return;
	this._requestRefresh = false;
    this.drawRemEnemyName();
};

Window_RemEnemyName.prototype.drawRemEnemyName = function() {
	this.contents.fontSize = ENEMY_NAME_NORMAL_FONT_SIZE;
	this.changeTextColor(this.textColor(this.prefixColor()));
	let x = ENEMY_NAME_TEXT_X;
	let y = ENEMY_NAME_TEXT_Y;
	let rowHeight = this._battler.enemy().dataRowHeight;
	let isBoss = this._battler.isBossType;
	if(rowHeight === 2) {
		//y += ENEMY_NAME_TEXT_SECOND_ROW_Y;
	}
	if(isBoss) {
		this.contents.fontSize = ENEMY_NAME_BOSS_FONT_SIZE;
		y += ENEMY_NAME_TEXT_SECOND_ROW_Y;
	}
	
	let nameWidth = ENEMY_NAME_TEXT_WIDTH;
	if(this._battler.isAron) {
		nameWidth = ENEMY_ARON_NAME_TEXT_WIDTH;
	}
	
	
	if(Karryn.isInDrawEnemiesAtHalfWidthPose()) {
		this.contents.fontSize = ENEMY_NAME_HALF_WIDTH_FONT_SIZE;
		nameWidth *= 0.5;
	}
	else if(Karryn.isInReceptionistPose()) {
		this.contents.fontSize = ENEMY_NAME_HALF_WIDTH_FONT_SIZE;
		nameWidth = VISITOR_NAME_TEXT_WIDTH;
	}

	this.drawText(this._enemyName, x, y, nameWidth);
};

Window_RemEnemyName.prototype.prefixColor = function() {
	if(!this._battler.hasNamePrefix()) return 0;
   
	if(this._battler.hasWeakPrefix()) return COLOR_PREFIX_WEAK;
	else if(this._battler.hasBadPrefix()) return COLOR_PREFIX_BAD;
	else if(this._battler.hasDrunkPrefix()) return COLOR_PREFIX_DRUNK;
	else if(this._battler.hasHungryPrefix()) return COLOR_PREFIX_HUNGRY;
	else if(this._battler.hasStarvingPrefix()) return COLOR_PREFIX_STARVING;
	else if(this._battler.hasSensitivePrefix()) return COLOR_PREFIX_SENSITIVE;
	else if(this._battler.hasGoodPrefix()) return COLOR_PREFIX_GOOD;
	else if(this._battler.hasElitePrefix()) return COLOR_PREFIX_ELITE;
	else if(this._battler.hasVirginPrefix()) return COLOR_PREFIX_VIRGIN;
	else if(this._battler.hasHornyPrefix()) return COLOR_PREFIX_HORNY;
	else if(this._battler.hasBigPrefix()) return COLOR_PREFIX_BIG;
	else if(this._battler.hasMetalPrefix()) return COLOR_PREFIX_METAL;
	
	
	return 0;
};