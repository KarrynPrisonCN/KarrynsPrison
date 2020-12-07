//=============================================================================
// RecollectionMode.js
// Copyright (c) 2015 rinne_grid
// This plugin is released under the MIT license.
// http://opensource.org/licenses/mit-license.php
//
// Version
// 1.0.0 2015/12/26 公開
// 1.1.0 2016/04/19 回想一覧にサムネイルを指定できるように対応
// 1.1.1 2016/05/03 セーブデータ20番目のスイッチが反映されない不具合を修正
//                  セーブデータ間のスイッチ共有オプション
//                  (share_recollection_switches)を追加
// 1.1.2 2016/05/09 回想用のCGリストのキーを数字から文字列に変更
// 1.1.3 2016/11/23 セーブデータが増えた場合にロード時間が長くなる問題を解消
// 1.1.4 2016/12/23 CG閲覧時にクリック・タップで画像送りができるよう対応
// 1.1.5 2017/01/26 CG・シーンで一部サムネイルが表示されない問題を解消
//=============================================================================

/*:ja
 * @plugindesc 回想モード機能を追加します。
 * @author rinne_grid
 *
 *
 * @help このプラグインには、プラグインコマンドはありません。
 *
 */

//-----------------------------------------------------------------------------
// ◆ プラグイン設定
//-----------------------------------------------------------------------------
    var rngd_recollection_mode_settings = {
  "rec_cg_set": {
    "1": {"title": "うたたねメルティス",
      "common_event_id": 31,
      "switch_id": 301,
      "thumbnail": "thum_001",
      "pictures": ["001_01","001_02","001_03","001_04"]},

    "2": {"title": "ゴブリン敗北Ｈ",
      "common_event_id": 32,
      "switch_id": 302,
      "thumbnail": "thum_002",
      "pictures": ["002_01","002_02","002_03","002_04","002_05","002_06","002_07","002_08","002_09","002_10"]},

    "3": {"title": "ゴブリーナ敗北Ｈ",
      "common_event_id": 33,
      "switch_id": 303,
      "thumbnail": "thum_003",
      "pictures": ["003_01","003_02","003_03","003_04","003_05","003_06","003_07","003_08"]},

    "4": {"title": "スライム敗北Ｈ",
      "common_event_id": 34,
      "switch_id": 304,
      "thumbnail": "thum_004",
      "pictures": ["004_01","004_02","004_03","004_04","004_05","004_06","004_07","004_08"]},

    "5": {"title": "ライミィ敗北Ｈ",
      "common_event_id": 35,
      "switch_id": 305,
      "thumbnail": "thum_005",
      "pictures": ["005_01","005_02","005_03","005_04","005_05","005_06","005_07","005_08"]},

    "6": {"title": "リザードマン敗北Ｈ",
      "common_event_id": 36,
      "switch_id": 306,
      "thumbnail": "thum_006",
      "pictures": ["006_01","006_02","006_03","006_04","006_05","006_06","006_07"]},

    "7": {"title": "ナーガル敗北Ｈ",
      "common_event_id": 37,
      "switch_id": 307,
      "thumbnail": "thum_007",
      "pictures": ["007_01","007_02","007_03","007_04","007_05","007_06","007_07","007_08","007_09"]},

    "8": {"title": "ウェアウルフ敗北Ｈ",
      "common_event_id": 38,
      "switch_id": 308,
      "thumbnail": "thum_008",
      "pictures": ["008_01","008_02","008_03","008_04","008_05","008_06","008_07"]},

    "9": {"title": "イッシー敗北Ｈ",
      "common_event_id": 39,
      "switch_id": 309,
      "thumbnail": "thum_009",
      "pictures": ["009_01","009_02","009_03","009_04","009_05","009_06","009_07","009_08","009_09"]},

    "10": {"title": "サキュバス敗北Ｈ",
      "common_event_id": 40,
      "switch_id": 310,
      "thumbnail": "thum_010",
      "pictures": ["010_01","010_02","010_03","010_04","010_05","010_06","010_07"]},

    "11": {"title": "ムーマ＆ユーコ敗北Ｈ",
      "common_event_id": 41,
      "switch_id": 311,
      "thumbnail": "thum_011",
      "pictures": ["011_01","011_02","011_03","011_04","011_05","011_06","011_07","011_08","011_09","011_10","011_11","011_12"]},

    "12": {"title": "オーク敗北Ｈ",
      "common_event_id": 42,
      "switch_id": 312,
      "thumbnail": "thum_012",
      "pictures": ["012_01","012_02","012_03","012_04","012_05","012_06"]},

    "13": {"title": "エマ敗北Ｈ",
      "common_event_id": 43,
      "switch_id": 313,
      "thumbnail": "thum_013",
      "pictures": ["013_01","013_02","013_03","013_04","013_05","013_06","013_07","013_08","013_09"]},

    "14": {"title": "イエティ敗北Ｈ",
      "common_event_id": 44,
      "switch_id": 314,
      "thumbnail": "thum_014",
      "pictures": ["014_01","014_02","014_03","014_04","014_05","014_06"]},

    "15": {"title": "ガーネット敗北Ｈ",
      "common_event_id": 45,
      "switch_id": 315,
      "thumbnail": "thum_015",
      "pictures": ["015_01","015_02","015_03","015_04","015_05","015_06","015_07","015_08","015_09"]},
  
    "16": {"title": "サイクロプス敗北Ｈ",
      "common_event_id": 46,
      "switch_id": 316,
      "thumbnail": "thum_016",
      "pictures": ["016_01","016_02","016_03","016_04","016_05","016_06","016_07","016_08","016_09"]},
  
    "17": {"title": "スミス敗北Ｈ",
      "common_event_id": 47,
      "switch_id": 317,
      "thumbnail": "thum_017",
      "pictures": ["017_01","017_02","017_03","017_04","017_05","017_06","017_07","017_08","017_09","017_10","017_11","017_12","017_13","017_14","017_15","017_16"]},
  
    "18": {"title": "ダリア敗北Ｈ",
      "common_event_id": 48,
      "switch_id": 318,
      "thumbnail": "thum_018",
      "pictures": ["018_01","018_02","018_03","018_04","018_05","018_06","018_07","018_08","018_09","018_10"]},
  
    "19": {"title": "カハン敗北Ｈ",
      "common_event_id": 49,
      "switch_id": 319,
      "thumbnail": "thum_019",
      "pictures": ["019_01","019_02","019_03","019_04","019_05","019_06","019_07","019_08","019_09","019_10"]},
  
    "20": {"title": "シャドウ敗北Ｈ",
      "common_event_id": 50,
      "switch_id": 320,
      "thumbnail": "thum_020",
      "pictures": ["020_01","020_02","020_03","020_04","020_05","020_06","020_07","020_08","020_09","020_10","020_11","020_12","020_13"]},
  
    "21": {"title": "ブラック・ダリア敗北Ｈ",
      "common_event_id": 51,
      "switch_id": 321,
      "thumbnail": "thum_021",
      "pictures": ["021_01","021_02","021_03","021_04","021_05","021_06","021_07","021_08","021_09","021_10","021_11","021_12"]},

    "22": {"title": "ダーク・メルティス",
      "common_event_id": 52,
      "switch_id": 322,
      "thumbnail": "thum_022",
      "pictures": ["022_01","022_02","022_03","022_04","022_05","022_06","022_07","022_08","022_09","022_10","022_11"]},      

    "23": {"title": "おじいさんの介護１",
      "common_event_id": 61,
      "switch_id": 323,
      "thumbnail": "thum_A01",
      "pictures": ["A01_01","A01_02","A01_03","A01_04","A01_05","A01_06","A01_07","A01_08","A01_09"]},

    "24": {"title": "おじいさんの介護２",
      "common_event_id": 62,
      "switch_id": 324,
      "thumbnail": "thum_A02a",
      "pictures": ["A01_10","A01_11","A01_12","A01_13","A02_01","A02_02","A02_03","A02_04","A02_05","A02_06"]},

    "25": {"title": "おじいさんの介護３",
      "common_event_id": 63,
      "switch_id": 325,
      "thumbnail": "thum_A02b",
      "pictures": ["A01_14","A01_15","A01_16","A01_17","A01_18","A01_19","A01_20","A02_07","A02_08","A02_09","A02_10","A02_11","A02_12","A02_13","A02_14","A02_15"]},

    "26": {"title": "懺悔フェラ１",
      "common_event_id": 65,
      "switch_id": 326,
      "thumbnail": "thum_B01a",
      "pictures": ["B01_01","B01_02","B01_03","B01_04","B01_05","B01_06","B01_07","B01_08","B01_09","B01_10","B01_11","B01_12","B01_13","B01_14"]},

    "27": {"title": "懺悔フェラ２",
      "common_event_id": 66,
      "switch_id": 327,
      "thumbnail": "thum_B01b",
      "pictures": ["B01_15","B01_16","B01_17","B01_18","B01_19","B01_20","B01_21","B01_22","B01_23","B01_24","B01_25","B01_26","B01_27","B01_28"]},

    "28": {"title": "懺悔フェラ３",
      "common_event_id": 67,
      "switch_id": 328,
      "thumbnail": "thum_B01c",
      "pictures": ["B01_29","B01_30","B01_31","B01_32","B01_33","B01_34","B01_35","B01_36","B01_37","B01_38","B01_39","B01_40","B01_41","B01_42","B01_43"]},
      
    "29": {"title": "トイレで立ちション",
      "common_event_id": 182,
      "switch_id": 329,
      "thumbnail": "thum_X02a",
      "pictures": ["X02_01","X02_02","X02_03"]},

    "30": {"title": "ディルドオナニー",
      "common_event_id": 186,
      "switch_id": 330,
      "thumbnail": "thum_O01",
      "pictures": ["O01_01","O01_02","O01_03","O01_04","O01_05","O01_06","O01_07","O01_08","O01_09","O01_10"]},

    "31": {"title": "童貞中年を搾精",
      "common_event_id": 69,
      "switch_id": 331,
      "thumbnail": "thum_F01",
      "pictures": ["F01_01","F01_02","F01_03","F01_04","F01_05","F01_06","F01_07","F01_08","F01_09","F01_10","F01_11","F01_12"]},

    "32": {"title": "アナルで筆おろし",
      "common_event_id": 70,
      "switch_id": 332,
      "thumbnail": "thum_F02",
      "pictures": ["F02_01","F02_02","F02_03","F02_04","F02_05","F02_06","F02_07","F02_08","F02_09","F02_10"]},

    "33": {"title": "酔いどれセックス",
      "common_event_id": 73,
      "switch_id": 333,
      "thumbnail": "thum_G01",
      "pictures": ["G01_01","G01_02","G01_03","G01_04","G01_05","G01_06","G01_07"]},

    "34": {"title": "壺に立ちション",
      "common_event_id": 74,
      "switch_id": 334,
      "thumbnail": "thum_X02b",
      "pictures": ["X02_04","X02_05","X02_06"]},

    "35": {"title": "寝取られガーネット",
      "common_event_id": 77,
      "switch_id": 335,
      "thumbnail": "thum_K01",
      "pictures": ["K01_01","K01_02","K01_03","K01_04","K01_05","K01_06","K01_07","K01_08","K01_09"]},

    "36": {"title": "ロイのお願い",
      "common_event_id": 79,
      "switch_id": 336,
      "thumbnail": "thum_P01",
      "pictures": ["P01_04","P01_05","P01_06","P01_07","P01_08"]},

    "37": {"title": "少年たちのお願い",
      "common_event_id": 80,
      "switch_id": 337,
      "thumbnail": "thum_P02",
      "pictures": ["P01_01","P01_02","P01_03","P02_01","P02_02","P02_03","P02_04","P02_05","P02_06"]},

    "38": {"title": "初めてのビジネス",
      "common_event_id": 82,
      "switch_id": 338,
      "thumbnail": "thum_R01",
      "pictures": ["R01_01","R01_02","R01_03","R01_04","R01_05","R01_06","R01_07","R01_08","R01_09","R01_10","R01_11"]},

    "39": {"title": "姉妹のVIPルーム",
      "common_event_id": 83,
      "switch_id": 339,
      "thumbnail": "thum_S01",
      "pictures": ["S01_01","S01_02","S01_03","S01_04","S01_05","S01_06","S01_07","S01_08","S01_09","S01_10","S01_11","S01_12","S01_13","S01_14","S01_15","S01_16","S01_17","S01_18"]},

    "40": {"title": "エマと豚１",
      "common_event_id": 85,
      "switch_id": 340,
      "thumbnail": "thum_H01a",
      "pictures": ["H01_01","H01_02","H01_03","H01_04","H01_05","H01_06","H01_07","H01_08","H01_09","H01_10","H01_11","H01_12","H01_13","H01_14"]},

    "41": {"title": "エマと豚２",
      "common_event_id": 86,
      "switch_id": 341,
      "thumbnail": "thum_H02a",
      "pictures": ["H02_01","H02_02","H02_03","H02_04","H02_05","H02_06","H02_07","H02_08","H02_09","H02_10"]},   

    "42": {"title": "エマと豚３",
      "common_event_id": 87,
      "switch_id": 342,
      "thumbnail": "thum_H01b",
      "pictures": ["H01_15","H01_16","H01_17","H01_18","H01_19","H01_20","H01_21","H01_22","H01_23","H01_24","H01_25","H01_26"]},

    "43": {"title": "エマと豚４",
      "common_event_id": 88,
      "switch_id": 343,
      "thumbnail": "thum_H02b",
      "pictures": ["H02_11","H02_12","H02_13","H02_14","H02_15","H02_16","H02_17","H02_18","H02_19","H02_20","H02_21"]},   

    "44": {"title": "チンチンのお花畑",
      "common_event_id": 81,
      "switch_id": 344,
      "thumbnail": "thum_P03",
      "pictures": ["P03_01","P03_02","P03_03","P03_04","P03_05","P03_06","P03_07","P03_08","P03_09","P03_11","P03_12"]}, 
    
    "45": {"title": "輪フェラ姫",
      "common_event_id": 71,
      "switch_id": 345,
      "thumbnail": "thum_L01",
      "pictures": ["L01_01","L01_02","L01_03","L01_04","L01_05","L01_06","L01_07","L01_08","L01_09","L01_10"]}, 
    
    "46": {"title": "ふたなりとヤリチンと",
      "common_event_id": 75,
      "switch_id": 346,
      "thumbnail": "thum_E02",
      "pictures": ["E01_27","E01_28","E01_29","E01_30","E01_31","E02_01","E02_02","E02_03","E02_04","E02_05","E02_06","E02_07","E02_08","E02_09","E02_10","E02_11","E02_12","E02_13"]}, 
 
    "47": {"title": "感謝祭",
      "common_event_id": 179,
      "switch_id": 347,
      "thumbnail": "thum_W01",
      "pictures": ["O02_07","O02_08","W01_01","W01_02","W01_03","W01_04","W01_05","W01_06","W01_07","W01_08","W01_09","W01_10","W01_11","W01_12","W01_13","W01_14","W01_15","W01_16"]}, 

    "48": {"title": "野外でフェラ１",
      "common_event_id": 55,
      "switch_id": 348,
      "thumbnail": "thum_E01a",
      "pictures": ["E01_09","E01_10","E01_11"]},                   
        
    "49": {"title": "野外でフェラ２",
      "common_event_id": 56,
      "switch_id": 349,
      "thumbnail": "thum_E01b",
      "pictures": ["E01_15","E01_16","E01_17","E01_18"]},                   
    
    "50": {"title": "少年を吸うビッチ姫",
      "common_event_id": 89,
      "switch_id": 350,
      "thumbnail": "thum_E01c",
      "pictures": ["E01_23","E01_24","E01_25","E01_26","E01_03","E01_04","E01_05","E01_06","E01_07","E01_08"]},       
      
    "51": {"title": "野外でパイフェラ",
      "common_event_id": 57,
      "switch_id": 351,
      "thumbnail": "thum_Y01",
      "pictures": ["Y01_01","Y01_02","Y01_03","Y01_04","Y01_05"]},   
      
    "52": {"title": "野外で逆レイプ",
      "common_event_id": 58,
      "switch_id": 352,
      "thumbnail": "thum_Y02",
      "pictures": ["Y02_01","Y02_02","Y02_03","Y02_04","Y02_05"]},
      
    "53": {"title": "野外でボテ腹ファック",
      "common_event_id": 59,
      "switch_id": 353,
      "thumbnail": "thum_Y03",
      "pictures": ["Y03_01","Y03_02","Y03_03","Y03_04","Y03_05"]},   

    "54": {"title": "露出で立ちション",
      "common_event_id": 184,
      "switch_id": 354,
      "thumbnail": "thum_X02c",
      "pictures": ["X02_07","X02_08","X02_09"]},

    "55": {"title": "公開オナニー",
      "common_event_id": 188,
      "switch_id": 355,
      "thumbnail": "thum_O02",
      "pictures": ["O02_01","O02_02","O02_03","O02_04","O02_05","O02_06"]},      

    "56": {"title": "出産",
      "common_event_id": 170,
      "switch_id": 356,
      "thumbnail": "thum_X01",
      "pictures": ["X01_01","X01_02","X01_06","X01_07","X01_08","X01_09","X01_10","X01_11","X01_12","X01_13","X01_14","X01_15","X01_16",
                   "X01_01","X01_02","X01_03a","X01_04a","X01_05", "X01_01","X01_02","X01_03b","X01_04b","X01_05", "X01_01","X01_02","X01_03c","X01_04c","X01_05",
                   "X01_01","X01_02","X01_03d","X01_04d","X01_05", "X01_01","X01_02","X01_17","X01_18","X01_19","X01_20",
                   "X01_01","X01_02","X01_03","X01_04","X01_05"]},      

    "57": {"title": "【おまけ】ボス差分",
      "common_event_id": 215,
      "switch_id": 357,
      "thumbnail": "thum_enemy",
      "pictures": ["enemy01_Esmeralda1","enemy01_Esmeralda2","enemy01_Esmeralda3","enemy02_Gobna1","enemy02_Gobna2","enemy02_Gobna3","enemy03_limy1","enemy03_limy2","enemy03_limy3",
                   "enemy04_Hebico1","enemy04_Hebico2","enemy04_Hebico3","enemy05_Issie1","enemy05_Issie2","enemy05_Issie3","enemy06_Muma1","enemy06_Muma2","enemy06_Muma3",
                   "enemy08_Ema1","enemy08_Ema2","enemy08_Ema3","enemy09_Garnet1","enemy09_Garnet2","enemy09_Garnet3","enemy10_Daliah1","enemy10_Daliah2","enemy10_Daliah3",
                   "enemy12_Kahan1","enemy12_Kahan2","enemy12_Kahan3","enemy12_Kahan4","enemy12_Kahan5","enemy12_Kahan6","enemy12_Kahan7",
                   "enemy13_BlackDaliah0","enemy13_BlackDaliah1","enemy13_BlackDaliah2","enemy13_BlackDaliah3","enemy13_BlackDaliah4","enemy13_BlackDaliah5","enemy13_BlackDaliah6","enemy13_BlackDaliah7"]},

    "58": {"title": "【おまけ】キャラ立ち絵",
      "common_event_id": 216,
      "switch_id": 358,
      "thumbnail": "thum_Z01",
      "pictures": ["Z01_01","Z01_02","Z01_03","Z01_04","Z01_05","Z01_06","Z01_07","Z01_08","Z01_09","Z01_10","Z01_11","Z01_12","Z01_13","Z01_14","Z01_15","Z01_16","Z01_17","Z01_18"]},   

    "59": {"title": "【おまけ】クレジット",
      "common_event_id": 217,
      "switch_id": 359,
      "thumbnail": "thum_Credits",
      "pictures": ["Ed000"]}, 

     "60": {"title": "ミノタウロス敗北Ｈ",
     "common_event_id": 246,
     "switch_id": 360,
     "thumbnail": "thum_023",
     "pictures": ["023_01","023_02","023_03","023_04","023_05","023_06","023_07","023_08","023_09","023_10"]},      

     "61": {"title": "ママと乳搾り",
     "common_event_id": 247,
     "switch_id": 361,
     "thumbnail": "thum_N01",
     "pictures": ["N01_01","N01_02","N01_03","N01_04","N01_05","N01_06","N01_07","N01_08","N01_09","N01_10","N01_11","N01_12"]},      

     "62": {"title": "パパに親孝行",
     "common_event_id": 248,
     "switch_id": 362,
     "thumbnail": "thum_Q01",
     "pictures": ["Q01_01","Q01_02","Q01_03","Q01_04","Q01_05","Q01_06","Q01_07","Q01_08","Q01_09"]},   
     
     "63": {"title": "浴場で欲情",
     "common_event_id": 249,
     "switch_id": 362,
     "thumbnail": "thum_Q02",
     "pictures": ["Q02_01","Q02_02","Q02_03","Q02_04","Q02_05","Q02_06"]},
       
     "64": {"title": "ギャルたちの日常",
     "common_event_id": 250,
     "switch_id": 363,
     "thumbnail": "thum_T01",
     "pictures": ["T01_01","T01_02","T01_03","T01_04","T01_05","T01_06","T01_07","T01_08","T01_09","T01_10","T01_11"]},
     
     "65": {"title": "異世界から来たビッチ",
     "common_event_id": 251,
     "switch_id": 364,
     "thumbnail": "thum_U01",
     "pictures": ["U01_01","U01_02","U01_03","U01_04","U01_05","U01_06","U01_07","U01_08","U01_09"]},         
    },
  

    "rec_mode_bgm": {
    "bgm": {
      "name": "25_Bitch",
      "pan": 0,
      "pitch": 100,
      "volume": 90
    }

  },
  "rec_mode_window": {
    "x": 260,
    "y": 180,
    "recollection_title": "   回想モード",
    "str_select_recollection": "回想を見る",
    "str_select_cg": "ＣＧを見る",
    "str_select_back_title": "タイトルに戻る"
  },
  "rec_list_window": {
    "item_height": 4,
    "item_width": 5,
    "show_title_text": true,
    "title_text_align": "center",
    "never_watch_picture_name": "never_watch_picture",
    "never_watch_title_text": "？？？"
  },
  "sandbox_map_id": 17,
  "share_recollection_switches": false
};

    function rngd_hash_size(obj) {
        var cnt = 0;
        for(var o in obj) {
            cnt++;
        }
        return cnt;
    }

//-----------------------------------------------------------------------------
// ◆ Scene関数
//-----------------------------------------------------------------------------

    //=========================================================================
    // ■ Scene_Recollection
    //=========================================================================
    // 回想用のシーン関数です
    //=========================================================================
    function Scene_Recollection() {
        this.initialize.apply(this, arguments);
    }

    Scene_Recollection.prototype = Object.create(Scene_Base.prototype);
    Scene_Recollection.prototype.constructor = Scene_Recollection;

    Scene_Recollection.prototype.initialize = function() {
        Scene_Base.prototype.initialize.call(this);
    };

    Scene_Recollection.prototype.create = function() {
        Scene_Base.prototype.create.call(this);
        this.createWindowLayer();
        this.createCommandWindow();
    };

    // 回想モードのカーソル
    Scene_Recollection.rec_list_index = 0;

    // 回想モードの再読み込み判定用 true: コマンドウィンドウを表示せず回想リストを表示 false:コマンドウィンドウを表示
    Scene_Recollection.reload_rec_list = false;

    Scene_Recollection.prototype.createCommandWindow = function() {

        if(Scene_Recollection.reload_rec_list) {
            // 回想モード選択ウィンドウ
            this._rec_window = new Window_RecollectionCommand();
            this._rec_window.setHandler('select_recollection', this.commandShowRecollection.bind(this));
            this._rec_window.setHandler('select_cg', this.commandShowCg.bind(this));
            this._rec_window.setHandler('select_back_title', this.commandBackTitle.bind(this));

            // リロードの場合：選択ウィンドウを非表示にする
            this._rec_window.visible = false;
            this._rec_window.deactivate();
            this.addWindow(this._rec_window);

            // 回想リスト
            this._rec_list = new Window_RecList(0, 0, Graphics.width, Graphics.height);

            // リロードの場合：回想リストを表示にする
            this._rec_list.visible = true;
            this._rec_list.setHandler('ok', this.commandDoRecMode.bind(this));
            this._rec_list.setHandler('cancel', this.commandBackSelectMode.bind(this));
            this._mode = "recollection";
            this._rec_list.activate();
            this._rec_list.select(Scene_Recollection.rec_list_index);

            this.addWindow(this._rec_list);

            // CG参照用ダミーコマンド
            this._dummy_window = new Window_Command(0, 0);
            this._dummy_window.deactivate();
            this._dummy_window.visible = false;
            this._dummy_window.setHandler('ok', this.commandDummyOk.bind(this));
            this._dummy_window.setHandler('cancel', this.commandDummyCancel.bind(this));
            this._dummy_window.addCommand('next', 'ok');
            this.addWindow(this._dummy_window);

            Scene_Recollection.reload_rec_list = false;

        } else {
            // 回想モード選択ウィンドウ
            this._rec_window = new Window_RecollectionCommand();
            this._rec_window.setHandler('select_recollection', this.commandShowRecollection.bind(this));
            this._rec_window.setHandler('select_cg', this.commandShowCg.bind(this));
            this._rec_window.setHandler('select_back_title', this.commandBackTitle.bind(this));
            this.addWindow(this._rec_window);

            // 回想リスト
            this._rec_list = new Window_RecList(0, 0, Graphics.width, Graphics.height);
            this._rec_list.visible = false;
            this._rec_list.setHandler('ok', this.commandDoRecMode.bind(this));
            this._rec_list.setHandler('cancel', this.commandBackSelectMode.bind(this));
            this._rec_list.select(Scene_Recollection.rec_list_index);
            this.addWindow(this._rec_list);

            // CG参照用ダミーコマンド
            this._dummy_window = new Window_Command(0, 0);
            this._dummy_window.deactivate();
            this._dummy_window.playOkSound = function(){}; // CGﾓｰﾄﾞの場合、OK音を鳴らさない
            this._dummy_window.visible = false;
            this._dummy_window.setHandler('ok', this.commandDummyOk.bind(this));
            this._dummy_window.setHandler('cancel', this.commandDummyCancel.bind(this));
            this._dummy_window.addCommand('next', 'ok');
            this.addWindow(this._dummy_window);
        }

    };

    //-------------------------------------------------------------------------
    // ● 開始処理
    //-------------------------------------------------------------------------
    Scene_Recollection.prototype.start = function() {
        Scene_Base.prototype.start.call(this);
        this._rec_window.refresh();
        this._rec_list.refresh();
        AudioManager.playBgm(rngd_recollection_mode_settings.rec_mode_bgm.bgm);
        Scene_Recollection._rngd_recollection_doing = false;
    };

    //-------------------------------------------------------------------------
    // ● 更新処理
    //-------------------------------------------------------------------------
    Scene_Recollection.prototype.update = function() {
        Scene_Base.prototype.update.call(this);

    };

    //-------------------------------------------------------------------------
    // ● 「回想を見る」を選択した際のコマンド
    //-------------------------------------------------------------------------
    Scene_Recollection.prototype.commandShowRecollection = function() {
        // モードウィンドウの無効化とリストウィンドウの有効化
        this.do_exchange_status_window(this._rec_window, this._rec_list);
        this._mode = "recollection";
    };

    //-------------------------------------------------------------------------
    // ● 「CGを見る」を選択した際のコマンド
    //-------------------------------------------------------------------------
    Scene_Recollection.prototype.commandShowCg = function() {
        this.do_exchange_status_window(this._rec_window, this._rec_list);
        this._mode = "cg";
    };

    //-------------------------------------------------------------------------
    // ● 「タイトルに戻る」を選択した際のコマンド
    //-------------------------------------------------------------------------
    Scene_Recollection.prototype.commandBackTitle = function() {
        Scene_Recollection.rec_list_index = 0;
        SceneManager.goto(Scene_Title);
    };

    //-------------------------------------------------------------------------
    // ● 回想orCGモードから「キャンセル」して前の画面に戻った場合のコマンド
    //-------------------------------------------------------------------------
    Scene_Recollection.prototype.commandBackSelectMode = function() {
        this.do_exchange_status_window(this._rec_list, this._rec_window);
    };

    //-------------------------------------------------------------------------
    // ● 回想orCGモードにおいて、実際の回想orCGを選択した場合のコマンド
    //-------------------------------------------------------------------------
    Scene_Recollection.prototype.commandDoRecMode = function() {
        var target_index = this._rec_list.index() + 1;
        Scene_Recollection.rec_list_index = target_index - 1;

        if (this._rec_list.is_valid_picture(this._rec_list.index() + 1)) {
            // 回想モードの場合
            if (this._mode == "recollection") {
                Scene_Recollection._rngd_recollection_doing = true;

                DataManager.setupNewGame();
                $gamePlayer.setTransparent(255);
                this.fadeOutAll();
                // TODO: パーティを透明状態にする

                //$dataSystem.optTransparent = false;
                $gameTemp.reserveCommonEvent(rngd_recollection_mode_settings.rec_cg_set[target_index]["common_event_id"]);
                $gamePlayer.reserveTransfer(rngd_recollection_mode_settings.sandbox_map_id, 0, 0, 0);
                SceneManager.push(Scene_Map);

                // CGモードの場合
            } else if (this._mode == "cg") {
                this._cg_sprites = [];
                this._cg_sprites_index = 0;

                // シーン画像をロードする
                rngd_recollection_mode_settings.rec_cg_set[target_index].pictures.forEach(function (name) {
                    // CGクリックを可能とする
                    var sp = new Sprite_Button();
                    sp.setClickHandler(this.commandDummyOk.bind(this));
                    sp.processTouch = function() {
                        Sprite_Button.prototype.processTouch.call(this);

                    };
                    sp.bitmap = ImageManager.loadPicture(name);
                    // 最初のSprite以外は見えないようにする
                    if (this._cg_sprites.length > 0) {
                        sp.visible = false;
                    }

                    // TODO: 画面サイズにあわせて、拡大・縮小すべき
                    this._cg_sprites.push(sp);
                    this.addChild(sp);

                }, this);

                this.do_exchange_status_window(this._rec_list, this._dummy_window);
                this._dummy_window.visible = false;
            }
        } else {
            this._rec_list.activate();
        }
    };

    Scene_Recollection.prototype.commandDummyOk = function() {

        if(this._cg_sprites_index < this._cg_sprites.length - 1) {
            this._cg_sprites[this._cg_sprites_index].visible = false;
            this._cg_sprites_index++;
            this._cg_sprites[this._cg_sprites_index].visible = true;
            SoundManager.playOk();

            this._dummy_window.activate();
        } else {
            SoundManager.playOk();
            this.commandDummyCancel();
        }
    };

    Scene_Recollection.prototype.commandDummyCancel = function() {
        this._cg_sprites.forEach(function(obj) {
            obj.visible = false;
            obj = null;
        });
        this.do_exchange_status_window(this._dummy_window, this._rec_list);
    };

    // コモンイベントから呼び出す関数
    Scene_Recollection.prototype.rngd_exit_scene = function() {
        if(Scene_Recollection._rngd_recollection_doing) {
            // Window_RecListを表示する
            Scene_Recollection.reload_rec_list = true;
            SceneManager.push(Scene_Recollection);
        }
    };

    //-------------------------------------------------------------------------
    // ● ウィンドウの無効化と有効化
    //-------------------------------------------------------------------------
    // win1: 無効化するウィンドウ
    // win2: 有効化するウィンドウ
    //-------------------------------------------------------------------------
    Scene_Recollection.prototype.do_exchange_status_window = function(win1, win2) {
        win1.deactivate();
        win1.visible = false;
        win2.activate();
        win2.visible = true;
    };
    //-------------------------------------------------------------------------
    // ● セーブ・ロード・ニューゲーム時に必要なスイッチをONにする
    //-------------------------------------------------------------------------
    Scene_Recollection.setRecollectionSwitches = function() {
        // 各セーブデータを参照し、RecollectionMode用のスイッチを検索する
        // スイッチが一つでもONになっている場合は回想をONにする
        for(var i = 1; i <= DataManager.maxSavefiles(); i++) {
            var data = null;
            try {
                data = StorageManager.loadFromLocalFile(i);
            } catch(e) {
                data = StorageManager.loadFromWebStorage(i);
            }
            if(data) {
                var save_data_obj = JsonEx.parse(data);
                var rec_cg_max = rngd_hash_size(rngd_recollection_mode_settings.rec_cg_set);

                for(var j = 0; j < rec_cg_max; j++) {
                    var cg = rngd_recollection_mode_settings.rec_cg_set[j+1];
                    if(save_data_obj["switches"]._data[cg.switch_id] &&
                        save_data_obj["switches"]._data[cg.switch_id] == true) {
                        $gameSwitches.setValue(cg.switch_id, true);
                    }
                }
            }
        }
    };

//-----------------------------------------------------------------------------
// ◆ Window関数
//-----------------------------------------------------------------------------

    //=========================================================================
    // ■ Window_RecollectionCommand
    //=========================================================================
    // 回想モードかCGモードを選択するウィンドウです
    //=========================================================================
    function Window_RecollectionCommand() {
        this.initialize.apply(this, arguments);
    }

    Window_RecollectionCommand.prototype = Object.create(Window_Command.prototype);
    Window_RecollectionCommand.prototype.constructor = Window_RecollectionCommand;

    Window_RecollectionCommand.prototype.initialize = function() {
        Window_Command.prototype.initialize.call(this, 0, 0);
        this.x = rngd_recollection_mode_settings.rec_mode_window.x;
        this.y = rngd_recollection_mode_settings.rec_mode_window.y;

    };

    Window_RecollectionCommand.prototype.makeCommandList = function() {
        Window_Command.prototype.makeCommandList.call(this);
        this.addCommand(rngd_recollection_mode_settings.rec_mode_window.str_select_recollection, "select_recollection");
        this.addCommand(rngd_recollection_mode_settings.rec_mode_window.str_select_cg, "select_cg");
        this.addCommand(rngd_recollection_mode_settings.rec_mode_window.str_select_back_title, "select_back_title");
    };

    //=========================================================================
    // ■ Window_RecollectionList
    //=========================================================================
    // 回想またはCGを選択するウィンドウです
    //=========================================================================
    function Window_RecList() {
        this.initialize.apply(this, arguments);
    }

    Window_RecList.prototype = Object.create(Window_Selectable.prototype);
    Window_RecList.prototype.constructor = Window_RecList;

    //-------------------------------------------------------------------------
    // ● 初期化処理
    //-------------------------------------------------------------------------
    Window_RecList.prototype.initialize = function(x, y, width, height) {
        Window_Selectable.prototype.initialize.call(this, x, y, width, height);
        this.windowWidth = width;
        this.windowHeight = height;
        this.select(0);
        this._formationMode = false;
        this.get_global_variables();
        this.refresh();

    };

    Window_RecList.prototype.maxItems = function() {
        return rngd_hash_size(rngd_recollection_mode_settings.rec_cg_set);
    };

    Window_RecList.prototype.itemHeight = function() {
        return (this.height - this.standardPadding()) / rngd_recollection_mode_settings.rec_list_window.item_height;
    };

    Window_RecList.prototype.maxPageItems = function() {
        return rngd_hash_size(rngd_recollection_mode_settings.rec_cg_set);
    };

    Window_RecList.prototype.maxCols = function() {
        return rngd_recollection_mode_settings.rec_list_window.item_width;
    };

    Window_RecList.prototype.maxPageRows = function() {
        var pageHeight = this.height;// - this.padding * 2;
        return Math.floor(pageHeight / this.itemHeight());
    };

    Window_RecList.prototype.drawItem = function(index) {
        var rec_cg = rngd_recollection_mode_settings.rec_cg_set[index+1];
        var rect = this.itemRect(index);
        var text_height = 0;
        if(rngd_recollection_mode_settings.rec_list_window.show_title_text) {
            if(this._global_variables["switches"][rec_cg.switch_id]) {
                this.contents.drawText(rec_cg.title, rect.x - 1, rect.y + 4, this.itemWidth(), 26,
                    rngd_recollection_mode_settings.rec_list_window.title_text_align);
            } else {
                this.contents.drawText(rngd_recollection_mode_settings.rec_list_window.never_watch_title_text,
                    rect.x - 1, rect.y + 4, this.itemWidth(), 26,
                    rngd_recollection_mode_settings.rec_list_window.title_text_align);
            }
            text_height = 30;
        }

        // CGセットのスイッチ番号が、全てのセーブデータを走査した後にTrueであればピクチャ表示
        if(this._global_variables["switches"][rec_cg.switch_id]) {

            var thumbnail_file_name = rec_cg.pictures[0];
            if(rec_cg.thumbnail !== undefined && rec_cg.thumbnail !== null) {
                thumbnail_file_name = rec_cg.thumbnail;
            }

            this.drawRecollection(thumbnail_file_name, 0, 0,
                this.itemWidth() - 0, this.itemHeight() - 0 - text_height, rect.x + 8, rect.y + 4 +text_height);


        } else {
            this.drawRecollection(rngd_recollection_mode_settings.rec_list_window.never_watch_picture_name,
                    0, 0 , this.itemWidth() - 0,
                    this.itemHeight() - 0 - text_height, rect.x + 8, rect.y + 4 + text_height);

        }

    };

    //-------------------------------------------------------------------------
    // ● 全てのセーブデータを走査し、対象のシーンスイッチ情報を取得する
    //-------------------------------------------------------------------------
    Window_RecList.prototype.get_global_variables = function() {
        this._global_variables = {
            "switches": {}
        };
        var maxSaveFiles = DataManager.maxSavefiles();
        for(var i = 1; i <= maxSaveFiles; i++) {
            if(DataManager.loadGameSwitch(i)) {
                var rec_cg_max = rngd_hash_size(rngd_recollection_mode_settings.rec_cg_set);

                for(var j = 0; j < rec_cg_max; j++) {
                    var cg = rngd_recollection_mode_settings.rec_cg_set[j+1];
                    if($gameSwitches._data[cg.switch_id]) {
                        this._global_variables["switches"][cg.switch_id] = true;
                    }
                }
            }
        }
    };
    //-------------------------------------------------------------------------
    // ● index番目に表示された回想orCGが有効かどうか判断する
    //-------------------------------------------------------------------------
    Window_RecList.prototype.is_valid_picture = function(index) {
        // CG情報の取得と対象スイッチの取得
        var _rec_cg_obj = rngd_recollection_mode_settings.rec_cg_set[index];
        return ( this._global_variables["switches"][_rec_cg_obj.switch_id] == true);

    };


(function(){

//-----------------------------------------------------------------------------
// ◆ 組み込み関数Fix
//-----------------------------------------------------------------------------

    Window_Base.prototype.drawRecollection = function(bmp_name, x, y, width, height, dx, dy) {
        var bmp = ImageManager.loadPicture(bmp_name);

        var _width = width;
        var _height = height;
        if(_width > bmp.width) {
            _width = bmp.width - 1;
        }

        if(_height > bmp.height) {
            _height = bmp.height - 1;
        }
        this.contents.blt(bmp, x, y, _width, _height, dx, dy);
    };

    var Window_TitleCommand_makeCommandList =
        Window_TitleCommand.prototype.makeCommandList;

    Window_TitleCommand.prototype.makeCommandList = function() {
        Window_TitleCommand_makeCommandList.call(this);
        this.clearCommandList();
        this.addCommand(TextManager.newGame,   'newGame');
        this.addCommand(TextManager.continue_, 'continue', this.isContinueEnabled());
        this.addCommand(rngd_recollection_mode_settings.rec_mode_window.recollection_title, 'recollection');
        this.addCommand(TextManager.options,   'options');
    };

    Scene_Title.prototype.commandRecollection = function() {
        SceneManager.push(Scene_Recollection);
    };

    var Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
    Scene_Title.prototype.createCommandWindow = function() {
        Scene_Title_createCommandWindow.call(this);
        this._commandWindow.setHandler('recollection', this.commandRecollection.bind(this));
    };

    // セーブデータ共有オプションが指定されている場合のみ、カスタマイズ
    if(rngd_recollection_mode_settings["share_recollection_switches"]) {
        DataManager.makeSaveContents = function() {
            // A save data does not contain $gameTemp, $gameMessage, and $gameTroop.

            Scene_Recollection.setRecollectionSwitches();

            var contents = {};
            contents.system       = $gameSystem;
            contents.screen       = $gameScreen;
            contents.timer        = $gameTimer;
            contents.switches     = $gameSwitches;
            contents.variables    = $gameVariables;
            contents.selfSwitches = $gameSelfSwitches;
            contents.actors       = $gameActors;
            contents.party        = $gameParty;
            contents.map          = $gameMap;
            contents.player       = $gamePlayer;

            return contents;
        };

        DataManager.extractSaveContents = function(contents) {
            $gameSystem        = contents.system;
            $gameScreen        = contents.screen;
            $gameTimer         = contents.timer;
            $gameSwitches      = contents.switches;
            $gameVariables     = contents.variables;
            $gameSelfSwitches  = contents.selfSwitches;
            $gameActors        = contents.actors;
            $gameParty         = contents.party;
            $gameMap           = contents.map;
            $gamePlayer        = contents.player;

            Scene_Recollection.setRecollectionSwitches();
        };

        DataManager.setupNewGame = function() {
            this.createGameObjects();
            Scene_Recollection.setRecollectionSwitches();
            this.selectSavefileForNewGame();
            $gameParty.setupStartingMembers();
            $gamePlayer.reserveTransfer($dataSystem.startMapId,
                $dataSystem.startX, $dataSystem.startY);
            Graphics.frameCount = 0;
        };
    }

//-----------------------------------------------------------------------------
// ◆ DataManager関数
//-----------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // ● スイッチのみロードする
    //-------------------------------------------------------------------------
    DataManager.loadGameSwitch = function(savefileId) {
        try {
            return this.loadGameSwitchWithoutRescue(savefileId);
        } catch (e) {
            console.error(e);
            return false;
        }
    };

    DataManager.loadGameSwitchWithoutRescue = function(savefileId) {
        var globalInfo = this.loadGlobalInfo();
        if (this.isThisGameFile(savefileId)) {
            var json = StorageManager.load(savefileId);
            this.createGameObjectSwitch();
            this.extractSaveContentsSwitches(JsonEx.parse(json));
            //this._lastAccessedId = savefileId;
            return true;
        } else {
            return false;
        }
    };

    DataManager.createGameObjectSwitch = function() {
        $gameSwitches      = new Game_Switches();
    };

    DataManager.extractSaveContentsSwitches = function(contents) {
        $gameSwitches      = contents.switches;
    };

})();