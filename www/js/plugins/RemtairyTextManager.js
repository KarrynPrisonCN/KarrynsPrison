var Remtairy = Remtairy || {};
Remtairy.TextManager = Remtairy.TextManager || {};

var Imported = Imported || {};
Imported.RemtairyTextManager = true;

const RemVersionText = '8.m';

//=============================================================================
 /*:
 * @plugindesc TextManager
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 * @param RemLanguage
 * @text Language
 * @type number
 * @min 0
 * @max 3
 * @desc 0 - Japanese, 1 - English, 2 - T.Chinese, 3 - S.Chinese
 * @default 1
 *
 */
//=============================================================================

var RemLanguage = Number(PluginManager.parameters('RemtairyTextManager')['RemLanguage']);
const RemLanguageJP = 0;
const RemLanguageEN = 1;
const RemLanguageTCH = 2;
const RemLanguageSCH = 3;
const RemLanguageKR = 4;

//Basic Strings
const LevelNameEN = "Level";
const LevelNameJP = "レベル";
const LevelAbbrEN = "Lv.";
const LevelAbbrJP = "Lv.";
const HPNameEN = "Stamina"; 
const HPNameJP = "体力";
const HPAbbrEN = "Sta";
const HPAbbrJP = "体力";
const MPNameEN = "Energy"; 
const MPNameJP = "精力";
const MPAbbrEN = "EN";
const MPAbbrJP = "精力";
const TPNameEN = "Pleasure";
const TPNameJP = "快楽度";
const TPAbbrEN = "Pleasure";
const TPAbbrJP = "快楽度";
const EXPNameEN = "Experience Points";
const EXPNameJP = "経験値";
const EXPAbbrEN = "EXP";
const EXPAbbrJP = "EXP";

//Param Strings
const MaxHPNameEN = "Max Stamina";
const MaxHPNameJP = "最大体力";
const MaxMPNameEN = "Max Energy";
const MaxMPNameJP = "最大精力";
const AtkNameEN = "Strength";
const AtkNameJP = "腕力";
const DefNameEN = "Endurance";
const DefNameJP = "忍耐力";
const MatNameEN = "Dexterity";
const MatNameJP = "器用さ";
const MdfNameEN = "Mind";
const MdfNameJP = "マインド";
const AgiNameEN = "Agility";
const AgiNameJP = "素早さ";
const LukNameEN = "Charm";
const LukNameJP = "魅力";

const CritDmgNameEN = "Critical Damage";
const CritDmgNameJP = "クリティカルダメージ";
const WpAtkNameEN = "Weapon Attack";
const WpAtkNameJP = "攻撃力";
const WpDefNameEN = "Weapon Defense";
const WpDefNameJP = "防御力";
const OverblowProtectionNameEN = "Overblow Protection";
const OverblowProtectionNameJP = "ダメージ軽減量";
const FatigueNameEN = "Fatigue";
const FatigueNameJP = "現在の疲労";
const FatigueGainNameEN = "Fatigue Gain";
const FatigueGainNameJP = "疲労蓄積量";
const FatigueRecoveryNameEN = "Fatigue Recovery";
const FatigueRecoveryNameJP = "疲労回復量";
const MaxWillpowerNameEN = "Max Willpower";
const MaxWillpowerNameJP = "最大意志力";
const WillpowerNameEN = "Willpower";
const WillpowerNameJP = "意思力";
const WillpowerAbbrEN = "Will";
const WillpowerAbbrJP = "意思";
const CooldownTurnsSingularNameEN = "%1 Turn";
const CooldownTurnsSingularNameJP = "%1ターン";
const CooldownTurnsPluralNameEN = "%1 Turns";
const CooldownTurnsPluralNameJP = "%1ﾀｰﾝ";
const CockinessNameEN = "Cockiness";
const CockinessNameJP = "大胆さ";


const XParamNameEN = [
"Accuracy",
"Evasion",
"Critical Rate",
"Critical Evasion",
"Graze",
"",
"Counterattack Rate",
"Stamina Regen",
"Energy Regen",
"Pleasure Gain Per Turn"];

const XParamNameJP = [
"命中力",
"回避力",
"クリティカル率",
"クリティカル回避力",
"かすりダメージ",
"",
"カウンター率",
"体力回復量",
"精力回復量",
"ターンごとに得る快楽"];

const SParamNameEN = [
"Target Rate",
"Weapon Defense",
"Recovery Rate",
"Energy Skill Cost",
"Weapon Attack",
"Willpower Regen",
"Will Skill Cost",
"Sex Skill Cost",
"Attack Skill Cost",
"Experience Rate"];

const SParamNameJP = [
"狙われ率",
"ハルバード防御力",
"回復率",
"精スキルコスト",
"ハルバード攻撃力",
"意思力回復量",
"意思スキルコスト",
"精スキルコスト",
"攻撃スキルコスト",
"経験率"];

//Elements String

const ElementSlashNameEN = "Slash";
const ElementSlashNameJP = "斬撃";
const ElementPierceNameEN = "Pierce";
const ElementPierceNameJP = "突撃";
const ElementBluntNameEN = "Blunt";
const ElementBluntNameJP = "打撃";
const ElementTalkNameEN = "Talk";
const ElementTalkNameJP = "猥談";
const ElementSightNameEN = "Sight";
const ElementSightNameJP = "視姦";
const ElementPettingNameEN = "Petting";
const ElementPettingNameJP = "愛撫";
const ElementStripNameEN = "Strip";
const ElementStripNameJP = "ストリップ";
const ElementAlmightyNameEN = "Almighty";
const ElementAlmightyNameJP = "全般";
const ElementDrugsNameEN = "Drugs";
const ElementDrugsNameJP = "ドラッグ";
const ElementStenchNameEN = "Stench";
const ElementStenchNameJP = "嗅覚";
const ElementSexNameEN = "Sex";
const ElementSexNameJP = "セックス";

//Passive Categories
const PassiveCategoryNameEN = [
"\\I[56]All",
"\\I[57]\\C[1]Mouth Desire",
" ├Mouth",
" ├Kiss",
" └Blowjob",
"\\I[58]\\C[1]Boobs Desire",
" ├Boobs",
" ├Nipples",
" └Titjob",
"\\I[59]\\C[1]Pussy Desire",
" ├Clit",
" ├Pussy",
" ├Wet",
" ├Cunninlingus",
" └Vaginal Sex",
"\\I[60]\\C[1]Butt Desire",
" ├Butt",
" ├Anal",
" └Anal Sex",
"\\I[61]\\C[1]Cock Desire",
" ├Worship",
" ├Handjob",
" ├Bukkake",
" ├Swallow",
" ├Creampie",
" └Relations",
"\\I[44]\\C[1]Sadism",
" ├Status",
" ├Skills", 
" ├Resist",
" ├Footjob",
" └Dominance",
"\\I[45]\\C[1]Masochism",
" ├Talk",
" ├Debuffs",
" ├Rimjob",
" ├Fetishism",
" └Submission",
"\\I[46]\\C[1]Masturbation",
" ├Urges",
" ├Sleep",
" ├Toys",
" └Orgasm",
"\\I[47]\\C[1]Exhibitionism",
" ├Sight",
" ├Clothes",
" ├Nudity",
" └Activities"
];

const PassiveCategoryNameJP = [
"\\I[56]取得パッシブ",
"\\I[57]\\C[1]口欲",
" ├クチ",
" ├キス",
" └フェラチオ",
"\\I[58]\\C[1]乳欲",
" ├おっぱい",
" ├乳首",
" └パイズリ",
"\\I[59]\\C[1]膣欲",
" ├クリトリス",
" ├マンコ",
" ├愛液",
" ├クンニ",
" └マンコセックス",
"\\I[60]\\C[1]尻欲",
" ├ケツ",
" ├アナル",
" └アナルセックス",
"\\I[61]\\C[1]棒欲",
" ├チンポ愛",
" ├手コキ",
" ├ぶっかけ",
" ├精飲",
" ├中出し",
" └肉体関係",
"\\I[44]\\C[1]サド",
" ├ステータス",
" ├スキル", 
" ├耐性",
" ├足コキ",
" └支配欲",
"\\I[45]\\C[1]マゾ",
" ├猥談",
" ├弱体化",
" ├ケツ舐め",
" ├フェチ",
" └服従心",
"\\I[46]\\C[1]オナニー",
" ├性衝動",
" ├睡眠の質",
" ├オモチャ",
" └絶頂",
"\\I[47]\\C[1]露出",
" ├視姦",
" ├着衣",
" ├全裸",
" └アルバイト"
];


//Command Strings
const FightNameEN = "Fight";
const FightNameJP = "戦闘";
const EscapeNameEN = "Flee";
const EscapeNameJP = "撤退";
const AttackNameEN = "Attack"; 
const AttackNameJP = "攻撃"; 
const GuardNameEN = "End Mental Phase";
const GuardNameJP = "意思コマンドを終了";
const ItemNameEN = "Item";
const ItemNameJP = "アイテム";
const SkillNameEN = "Passives";
const SkillNameJP = "パッシブ";
const EquipNameEN = "Equip";
//const EquipNameEN = "REM\\I[95]Equip";
const EquipNameJP = "装備";
const StatusNameEN = "Status";
const StatusNameJP = "ステータス";
const FormationNameEN = "Party";
const FormationNameJP = "パーティ";
const SaveNameEN = "Save";
const SaveNameJP = "セーブ";
const LoadNameEN = "Load";
const LoadNameJP = "ロード";
const DeleteNameEN = "Delete";
const DeleteNameJP = "削除";
const GameEndNameEN = "End Game";
const GameEndNameJP = "終了";
const OptionsNameEN = "Settings";
const OptionsNameJP = "環境設定";
const WeaponNameEN = "Weapon";
const WeaponNameJP = "武器";
const ArmorNameEN = "Accessory";
const ArmorNameJP = "装飾";
const KeyItemNameEN = "Key Item";
const KeyItemNameJP = "主要アイテム";
const Equip2NameEN = "Equip";
const Equip2NameJP = "装備";
//const NewGameNameEN = "REM\\I[126]New Game EN";
const NewGameNameEN = "New Game";
const NewGameNameJP = "ニューゲーム";
const ContinueNameEN = "Continue";
const ContinueNameJP = "コンティニュー";
const ToTitleNameEN = "Title";
const ToTitleNameJP = "タイトル";
const CancelNameEN = "Cancel";
const CancelNameJP = "キャンセル";
const BuyNameEN = "Shop";
const BuyNameJP = "ショップ";
const SellNameEN = "Sell";
const SellNameJP = "売却";

//Message Strings
const ActionFailureEN = "There is no effect on %1!";
const ActionFailureJP = "%1には効果なし！";
const ActorDamageEN = "\\C[16]%1 takes %2 points of stamina damage!";
const ActorDamageJP = "\\C[16]%1の体力が%2ダウン！！";
const ActorDrainEN = "%1's %2 are drained by %3 points!"; //currently unused
const ActorDrainJP = "%1's %2 are drained by %3 points!"; //currently unused
const ActorGainEN = "\\C[11]%1 gains %3 %2!";
const ActorGainJP = "\\C[11]%1の%3が%2アップ！";
const ActorLossEN = "\\C[2]%1 loses %3 %2!";
const ActorLossJP = "\\C[2]%1の%3が%2ダウン！";
const ActorNoDamageEN = "%1 takes no damage!";
const ActorNoDamageJP = "%1はダメージを受けていない！！";
const ActorNoHitEN = "\\C[6]Graze! %1 takes %2 points of damage!";
const ActorNoHitJP = "\\C[6]かすった！%1は%2のダメージを受けた！";
const ActorNoDamageGrazeEN = "Graze! %1 takes no damage!";
const ActorNoDamageGrazeJP = "かすった！しかし%1はダメージを受けていない！";
const ActorRecoveryEN = "%1's %2 are restored by %3 points!"; //currently unused
const ActorRecoveryJP = "%1's %2 are restored by %3 points!"; //currently unused
const CriticalToActorEN = "\\C[10]Critical hit!!";
const CriticalToActorJP = "\\C[10]クリティカルダメージ！！！";
const CriticalToEnemyEN = "Critical hit!!";
const CriticalToEnemyJP = "クリティカルヒット！！！";
const DefeatTextEN = "%1 is exhausted!"; //currently unused
const DefeatTextJP = "%1 is exhausted!"; //currently unused
const EmergeTextEN = "%1 appears!"; //currently unused
const EmergeTextJP = "%1 appears!jp"; //currently unused
const EnemyDamageEN = "%1 takes %2 points of stamina damage!";
const EnemyDamageJP = "%1に%2のダメージ！";
const EnemyDrainEN = "%1's %2 are drained by %3 points!"; //currently unused
const EnemyDrainJP = "%1's %2 are drained by %3 points!"; //currently unused
const EnemyGainEN = "%1 gains %3 %2!";
const EnemyGainJP = "%1の%2が%3アップ！";
const EnemyLossEN = "%1 loses %3 %2!";
const EnemyLossJP = "%1の%2が%3ダウン！";
const EnemyNoDamageEN = "\\C[7]%1 takes no damage!";
const EnemyNoDamageJP = "\\C[7]%1にダメージを与えられない！";
const EnemyNoHitEN = "\\C[8]Graze! %1 takes %2 points of damage!";
const EnemyNoHitJP = "\\C[8]かすった！%1に%2のダメージ！";
const EnemyNoDamageGrazeEN = "\\C[7]Graze! %1 takes no damage!";
const EnemyNoDamageGrazeJP = "\\C[7]かすった！しかし%1にはダメージを与えられない！";
const EnemyRecoveryEN = "%1's %2 are restored by %3 points!"; //currently unused
const EnemyRecoveryJP = "%1's %2 are restored by %3 points!"; //currently unused
const EscapeFailureEN = "But they couldn't escape!"; //currently unused
const EscapeFailureJP = "But they couldn't escape!"; //currently unused
const EscapeStartEN = "%1 runs away!"; //currently unused
const EscapeStartJP = "%1 runs away!"; //currently unused
const EvasionTextEN = "%1 evades the attack!";
const EvasionTextJP = "%1は避けた！";
const SuperEffectiveTextEN = "It was super effective!";
const SuperEffectiveTextJP = "効果はバツグンだ！";
const NotEffectiveTextEN = "It was not very effective...";
const NotEffectiveTextJP = "効果は今ひとつのようだ……。";
const SaveFileTextEN = "File";
const SaveFileTextJP = "ﾌｧｲﾙ";
const LoadMessageEN = "Load which file?";
const LoadMessageJP = "ロード";
const PreemptiveTextEN = "%1 is successfully sneak attacked!";
const PreemptiveTextJP = "%1は脱出した！";
const SurpriseTextEN = "%1 is ambushed!";
const SurpriseTextJP = "%1は抵抗出来ない！";
const UseItemTextEN = "%1 uses %2!";
const UseItemTextJP = "%1は%2を使った！";
const VictoryTextEN = "%1 has won!"; //currently unused
const VictoryTextJP = "%1 has won!"; //currently unused
const CounterAttackTextEN = "%1 counterattacks!";
const CounterAttackTextJP = "%1が反撃！";


const WardenNameEN = "Warden Level";
const WardenNameJP = "看守レベル";
const WardenLvlLimitEN = "Warden Level Limit";
const WardenLvlLimitJP = "看守レベル上限";
const SlutNameEN = "Slut Level";
const SlutNameJP = "ビッチレベル";
const StatLevelNameEN = "%1 Level";
const StatLevelNameJP = "%1レベル";
const DayNameEN = "Day";
const DayNameJP = "日数";
const OrderNameEN = "Order";
const OrderNameJP = "秩序";
const OrderChangeNameEN = "Control";
const OrderChangeNameJP = "統制力";
const CorruptionNameEN = "Corruption";
const CorruptionNameJP = "堕落";
const TitlesNameEN = "Titles";
const TitlesNameJP = "称号";
const FundingNameEN = "Funds";
const FundingNameJP = "資金";
const LedgerNameEN = "《 Ledger 》";
const LedgerNameJP = "《 損益 》";
const IncomeNameEN = "General Income";
const IncomeNameJP = "収入";
const BarIncomeNameEN = "Bar Income";
const BarIncomeNameJP = "酒場の収入";
const StoreIncomeNameEN = "Store Income";
const StoreIncomeNameJP = "ショップの収入";
const OutsourcingIncomeNameEN = "Outsourcing Income";
const OutsourcingIncomeNameJP = "残業の収入";
const NerdBlackmailNameEN = "Nerd Blackmail Payment";
const NerdBlackmailNameJP = "オタクのゆすり";
const ExpenseNameEN = "Expense";
const ExpenseNameJP = "経費";
const EstimatedSubsidiesNameEN = "Estimated Subsidies";
const EstimatedSubsidiesNameJP = "支援金";
const EstimatedProfitNameEN = "Est. Profit";
const EstimatedProfitNameJP = "翌日収益";
const EstimatedLossNameEN = "Est. Loss";
const EstimatedLossNameJP = "翌日支出";

const SecretaryModeNameEN = "Secretary Mode";
const SecretaryModeNameJP = "秘書モード";
const WardenModeNameEN = "Warden Mode";
const WardenModeNameJP = "看守モード";
const PrisonerModeNameEN = "Prisoner Mode";
const PrisonerModeNameJP = "囚人モード";

//Right Click Status
const RCMenuSleepQualityNegTwoTextEN = "\\C[7]Karryn barely got any sleep last night... \\C[0](\\C[18]Stats -10%, Charm -20%\\C[0])";
const RCMenuSleepQualityNegTwoTextJP = "\\C[7]昨夜の睡眠：ほとんど眠れなかった……。 \\C[0](\\C[18]全ステータス-10％ / 魅力-20％\\C[0])";
const RCMenuSleepQualityNegOneTextEN = "\\C[7]Karryn did not sleep well last night... \\C[0](\\C[2]Stats -5%, Charm -10%\\C[0])";
const RCMenuSleepQualityNegOneTextJP = "\\C[7]昨夜の睡眠：あまり眠れなかった…。 \\C[0](\\C[2]全ステータス-5％ / 魅力-10％\\C[0])";
const RCMenuSleepQualityZeroTextEN = "\\C[8]Karryn slept alright last night.\\C[0]";
const RCMenuSleepQualityZeroTextJP = "\\C[8]昨夜の睡眠：よく眠れた。\\C[0]";
const RCMenuSleepQualityOneTextEN = "\\C[0]Karryn got a good rest last night. (\\C[24]Stats +3%\\C[0])";
const RCMenuSleepQualityOneTextJP = "\\C[0]昨夜の睡眠：リラックスしてよく眠れた。 (\\C[24]全ステータス+3％\\C[0])";
const RCMenuSleepQualityTwoTextEN = "\\C[0]Karryn is well rested from last night. (\\C[29]Stats +6%\\C[0])";
const RCMenuSleepQualityTwoTextJP = "\\C[0]昨夜の睡眠：非常に質の高い睡眠が取れた。 (\\C[29]全ステータス+6％\\C[0])";
const RCMenuSleepQualityThreeTextEN = "\\C[0]Karryn is very well rested from last night. (\\C[28]Stats +9%\\C[0])";
const RCMenuSleepQualityThreeTextJP = "\\C[0]昨夜の睡眠：最高のコンディションで眠れた。 (\\C[28]全ステータス+9％\\C[0])";

const RCMenuFatigueLevelOneTextEN = "\\C[0]Karryn is starting to feel tired. (\\C[2]Stats -10%\\C[0])";
const RCMenuFatigueLevelOneTextJP = "\\C[0]疲労感：少し疲れを感じ始めている。 (\\C[2]全ステータス-10％\\C[0])";
const RCMenuFatigueLevelTwoTextEN = "\\C[0]Karryn feels tired... (\\C[2]Stats -20%\\C[0])";
const RCMenuFatigueLevelTwoTextJP = "\\C[0]疲労感：疲れを感じている…。 (\\C[2]全ステータス-20％\\C[0])";
const RCMenuFatigueLevelThreeTextEN = "\\C[8]Karryn is starting to feel exhausted... \\C[0](\\C[10]Stats -30%\\C[0])";
const RCMenuFatigueLevelThreeTextJP = "\\C[8]疲労感：疲れている……。 \\C[0](\\C[10]全ステータス-30％\\C[0])";
const RCMenuFatigueLevelFourTextEN = "\\C[7]Karryn is exhausted... \\C[0](\\C[18]Stats -40%, Can't Escape\\C[0])";
const RCMenuFatigueLevelFourTextJP = "\\C[7]疲労感：かなり疲弊している………。 \\C[0](\\C[18]全ステータス-40％ / 撤退不可\\C[0])";
const RCMenuFatigueLevelFiveTextEN = "\\C[7]Karryn is dead tired...... \\C[0](\\C[18]Stats -50%, Can't Escape\\C[0])";
const RCMenuFatigueLevelFiveTextJP = "\\C[7]疲労感：完全に疲労困憊になっている…………。 \\C[0](\\C[18]全ステータス-50％ / 撤退不可\\C[0])";

const RCMenuArousedLevelOneTextEN = "\\C[27]Karryn is currently aroused...\\C[0]";
const RCMenuArousedLevelOneTextJP = "\\C[27]興奮状態：発情している…。\\C[0]";
const RCMenuArousedLevelTwoTextEN = "\\C[5]Karryn is currently very aroused...\\C[0]";
const RCMenuArousedLevelTwoTextJP = "\\C[5]興奮状態：完全に発情している……。\\C[0]";

const RCMenuFrustratedLevelOneTextEN = "\\C[27]Karryn is currently sexually frustrated...\\C[0]";
const RCMenuFrustratedLevelOneTextJP = "\\C[27]興奮状態：ムラムラしている…。\\C[0]";
const RCMenuFrustratedLevelTwoTextEN = "\\C[5]Karryn is currently very sexually frustrated...\\C[0]";
const RCMenuFrustratedLevelTwoTextJP = "\\C[5]興奮状態：かなりムラムラしている……。\\C[0]";

const RCMenuLostPantiesTextEN = "\\C[27]Karryn isn't wearing any panties right now.\\C[0]";
const RCMenuLostPantiesTextJP = "\\C[27]ノーパンで巡回中。\\C[0]";

const RCMenuDefiledHalberdTextEN = "\\C[7]Karryn's halberd has been defiled... \\C[0](\\C[18]Unarmed\\C[0])";
const RCMenuDefiledHalberdTextJP = "\\C[7]ハルバード：汚されている……。\\C[0]";

const RCMenuMetalSingleTextEN = "\\C[0]Karryn subdued a metallic inmate today. (\\C[11]Exp Rate +%1%\\C[0])";
const RCMenuMetalSingleTextJP = "\\C[0]メタル囚人を撃退した。 (\\C[11]経験値+%1％\\C[0])";
const RCMenuMetalPluralTextEN = "\\C[0]Karryn subdued %2 metallic inmates today. (\\C[11]Exp Rate +%1%\\C[0])";
const RCMenuMetalPluralTextJP = "\\C[0]メタル囚人を%2人撃退した。 (\\C[11]経験値+%1％\\C[0])";

const RCMenuGiftsSingleTextEN = "\\C[0]Karryn received a gift: \\C[0]";
const RCMenuGiftsSingleTextJP = "\\C[0]受け取った贈呈品： \\C[0]";
const RCMenuGiftsPluralTextEN = "\\C[0]Karryn received gifts: \\C[0]";
const RCMenuGiftsPluralTextJP = "\\C[0]受け取った贈呈品： \\C[0]";

const RCMenuMealOneTextEN = "\\C[0]Karryn ate an artisanal meal: (\\C[11]Exp Rate +50%\\C[0])";
const RCMenuMealOneTextJP = "\\C[0]専属シェフの特別料理を食べた。 (\\C[11]経験値+50％\\C[0])";
const RCMenuMealTwoTextEN = "\\C[0]Karryn ate an artisanal meal: (\\C[11]Stamina Regen, Energy Regen, Willpower Regen +5%\\C[0])";
const RCMenuMealTwoTextJP = "\\C[0]専属シェフの特別料理を食べた。 (\\C[11]体力回復量+5％ / 精力回復量+5％ / 意志力回復量+5％\\C[0])";
const RCMenuMealThreeTextEN = "\\C[0]Karryn ate an artisanal meal: (\\C[11]Stamina +15%, Take less orgasm damage\\C[0])";
const RCMenuMealThreeTextJP = "\\C[0]専属シェフの特別料理を食べた。 (\\C[11]体力+15％ / 絶頂による精力ダメージを軽減\\C[0])";
const RCMenuMealFourTextEN = "\\C[0]Karryn ate an artisanal meal: (\\C[27]Increased chance of getting horny on every turn\\C[0])";
const RCMenuMealFourTextJP = "\\C[0]専属シェフの特別料理を食べた。 (\\C[27]興奮状態になる確率が毎ターン上昇\\C[0])";
const RCMenuMealFiveTextEN = "\\C[0]Karryn ate an artisanal meal: (\\C[27]Boobs & Pussy Sensitivity +50%\\C[0])";
const RCMenuMealFiveTextJP = "\\C[0]専属シェフの特別料理を食べた。 (\\C[27]おっぱい感度+50％ / マンコ感度+50％\\C[0])";
const RCMenuMealSixTextEN = "\\C[0]Karryn ate an artisanal meal: (\\C[11]Strength, Dexterity, Agility +5%\\C[0])";
const RCMenuMealSixTextJP = "\\C[0]専属シェフの特別料理を食べた。 (\\C[11]腕力+5％ / 器用さ+5％ / 素早さ+5％\\C[0])";
const RCMenuMealSevenTextEN = "\\C[0]Karryn ate an artisanal meal: (\\C[11]Fatigue Gain -33%\\C[0])";
const RCMenuMealSevenTextJP = "\\C[0]専属シェフの特別料理を食べた。 (\\C[11]疲労蓄積-33％\\C[0])";
const RCMenuMealEightTextEN = "\\C[0]Karryn ate an artisanal meal: (\\C[11]Petting & Sex Resist +15%\\C[0])";
const RCMenuMealEightTextJP = "\\C[0]専属シェフの特別料理を食べた。 (\\C[11]愛撫耐性+15％ / セックス耐性+15％\\C[0])";
const RCMenuMealNineTextEN = "\\C[0]Karryn ate an artisanal meal: (\\C[11]Enemies Attack Chance---\\C[0])";
const RCMenuMealNineTextJP = "\\C[0]専属シェフの特別料理を食べた。 (\\C[11]敵の攻撃性↓↓↓\\C[0])";
const RCMenuMealTenTextEN = "\\C[0]Karryn ate an artisanal meal: (\\C[27]Mouth & Anal Sensitivity +50%\\C[0])";
const RCMenuMealTenTextJP = "\\C[0]専属シェフの特別料理を食べた。 (\\C[27]クチ感度+50％ / アナル感度+50％\\C[0])";

const RCMenuStoreItemOneTextEN = "\\C[0]Karryn is using store item: (\\C[11]Fatigue Gain -20% \\C[10]Stats -5%\\C[0])";
const RCMenuStoreItemOneTextJP = "\\C[0]ショップのアイテムを使用。 (\\C[11]疲労蓄積-20％ / \\C[10]能力-5％\\C[0])";
const RCMenuStoreItemTwoTextEN = "\\C[0]Karryn is using store item: (\\C[11]Halberd Crit Rate +25% \\C[10]Halberd Defense -10%\\C[0])";
const RCMenuStoreItemTwoTextJP = "\\C[0]ショップのアイテムを使用。 (\\C[11]ハルバードクリティカル率+25％ / \\C[10]ハルバード防御力-10％\\C[0])";
const RCMenuStoreItemThreeTextEN = "\\C[0]Karryn is using store item: (\\C[11]Slash & Pierce & Blunt Resist +15% \\C[10]Stamina Regen -2%\\C[0])";
const RCMenuStoreItemThreeTextJP = "\\C[0]ショップのアイテムを使用。 (\\C[11]斬撃耐性・突撃耐性・打撃耐性+15％ / \\C[10]体力回復量-2％\\C[0])";
const RCMenuStoreItemFourTextEN = "\\C[0]Karryn is using store item: (\\C[11]Strip Resist +30% \\C[10]Charm (During Battle) -15%\\C[0])";
const RCMenuStoreItemFourTextJP = "\\C[0]ショップのアイテムを使用。 (\\C[11]ストリップ耐性+30％ / \\C[10]]魅力-15％(戦闘中)\\C[0])";
const RCMenuStoreItemFiveTextEN = "\\C[0]Karryn is using store item: (\\C[11]Charm (During Battle) +15% \\C[10]Talk & Strip Resist -15%\\C[0])";
const RCMenuStoreItemFiveTextJP = "\\C[0]ショップのアイテムを使用。 (\\C[11]魅力+15％(戦闘中) / \\C[10]]猥談耐性・ストリップ耐性-15％\\C[0])";

const PrisonLevelNameEN = "Level";
const PrisonLevelNameJP = "LEVEL";
const PrisonLevelStatusUnknownEN = "???????";
const PrisonLevelStatusUnknownJP = "???????";
const PrisonLevelStatusAnarchyEN = "ANARCHY";
const PrisonLevelStatusAnarchyJP = "無法状態";
const PrisonLevelStatusSubjugatedEN = "Subjugated";
const PrisonLevelStatusSubjugatedJP = "制圧";
const PrisonLevelStatusRiotingEN = "RIOTING";
const PrisonLevelStatusRiotingJP = "暴動発生中!!";

const PrisonMapLevelNameEN = "Level %1: ";
const PrisonMapLevelNameJP = "【LEVEL %1】 ";
const PrisonMapOutsideNameEN = "Fort Ganon: ";
const PrisonMapOutsideNameJP = "【要塞ガナン】 ";
const PrisonMapUnknownNameEN = "Somewhere";
const PrisonMapUnknownNameJP = "要塞内";
const PrisonMapUndiscoveredNameEN = "???";
const PrisonMapUndiscoveredNameJP = "???";


//カリンのレベル
const KissingLevelEN = "Kissing Level";
const KissingLevelJP = "キスレベル";
const PettingLevelEN = "Petting Level";
const PettingLevelJP = "愛撫レベル";
const HandjobLevelEN = "Handjob Level";
const HandjobLevelJP = "手コキレベル";
const BlowjobLevelEN = "Blowjob Level";
const BlowjobLevelJP = "フェラレベル";
const FootjobLevelEN = "Footjob Level";
const FootjobLevelJP = "足コキレベル";
const RimjobLevelEN = "Rimjob Level";
const RimjobLevelJP = "ケツ舐めレベル";
const TittyFuckLevelEN = "Titjob Level";
const TittyFuckLevelJP = "パイズリレベル";
const PussyLevelEN = "Vaginal Sex Level";
const PussyLevelJP = "マンコセックスレベル";
const AnalLevelEN = "Anal Sex Level";
const AnalLevelJP = "アナルセックスレベル";
const MasturbationLevelEN = "Masturbation Level";
const MasturbationLevelJP = "オナニーレベル";
const SadismLevelEN = "Sadism Level";
const SadismLevelJP = "サドレベル";
const MasochismLevelEN = "Masochism Level";
const MasochismLevelJP = "マゾレベル";

const MouthSensitivityEN = "Mouth Sensitivity";
const MouthSensitivityJP = "クチ感度";
const FingerSensitivityEN = "Hand Sensitivity";
const FingerSensitivityJP = "手の感度";
const BoobsSensitivityEN = "Boobs Sensitivity";
const BoobsSensitivityJP = "おっぱい感度";
const NipplesSensitivityEN = "Nipples Sensitivity";
const NipplesSensitivityJP = "チクビ感度";
const ClitorisSensitivityEN = "Clitoris Sensitivity";
const ClitorisSensitivityJP = "クリトリス感度";
const PussySensitivityEN = "Pussy Sensitivity";
const PussySensitivityJP = "マンコ感度";
const ButtSensitivityEN = "Butt Sensitivity";
const ButtSensitivityJP = "ケツ感度";
const AnalSensitivityEN = "Anal Sensitivity";
const AnalSensitivityJP = "アナル感度";
const FootSensitivityEN = "Feet Sensitivity";
const FootSensitivityJP = "足の感度";
const TalkSensitivityEN = "Talk Sensitivity";
const TalkSensitivityJP = "猥談感度";
const SightSensitivityEN = "Sight Sensitivity";
const SightSensitivityJP = "視姦感度";
const SwallowSensitivityEN = "Swallow Sensitivity";
const SwallowSensitivityJP = "ごっくん感度";
const PussyCreampieSensitivityEN = "Pussy Creampie Sensitivity";
const PussyCreampieSensitivityJP = "マンコ中出し感度";
const AnalCreampieSensitivityEN = "Anal Creampie Sensitivity";
const AnalCreampieSensitivityJP = "アナル中出し感度";
const BukkakeSensitivityEN = "Bukkake Sensitivity";
const BukkakeSensitivityJP = "ぶっかけ感度";
const ButtSpankingSensitivityEN = "Butt Spanking Sensitivity";
const ButtSpankingSensitivityJP = "スパンキング感度";

//Status Menu
const StatusMenuPrimaryEN = "Primary";
const StatusMenuPrimaryJP = "ステータス①";
const StatusMenuSecondaryEN = "Secondary";
const StatusMenuSecondaryJP = "ステータス②";
const StatusMenuProfileEN = "Profile";
const StatusMenuProfileJP = "経歴";
const StatusMenuTertiaryEN = "Tertiary";
const StatusMenuTertiaryJP = "セックス";
const StatusMenuRecordsEN = "Records";
const StatusMenuRecordsJP = "体験記録";
const StatusMenuDesiresEN = "Desires";
const StatusMenuDesiresJP = "必須性欲";
const StatusMenuEffectsEN = "Condition";
const StatusMenuEffectsJP = "状態";

const StatusMenuStatsEN = "Stats";
const StatusMenuStatsJP = "《 身体能力 》";
const StatusMenuStatLevelsEN = "《 Stat Levels 》";
const StatusMenuStatLevelsJP = "《 レベル 》";
const StatusMenuAttributesEN = "《 Attributes 》";
const StatusMenuAttributesJP = "《 戦闘能力 》";
const StatusMenuResistsEN = "《 Resists 》";
const StatusMenuResistsJP = "《 耐性 》";
const StatusMenuLevelsEN = "《 Sex Levels 》";
const StatusMenuLevelsJP = "《 性レベル 》";
const StatusMenuSensitivitiesEN = "《 Sensitivities 》";
const StatusMenuSensitivitiesJP = "《 性感度 》";

const StatusMenuMouthDesireReqEN = "《 Mouth Desire Requirements 》";
const StatusMenuMouthDesireReqJP = "《 口欲 》";
const StatusMenuBoobsDesireReqEN = "《 Boobs Desire Requirements 》";
const StatusMenuBoobsDesireReqJP = "《 乳欲 》";
const StatusMenuPussyDesireReqEN = "《 Pussy Desire Requirements 》";
const StatusMenuPussyDesireReqJP = "《 膣欲 》";
const StatusMenuButtDesireReqEN = "《 Butt Desire Requirements 》";
const StatusMenuButtDesireReqJP = "《 尻欲 》";
const StatusMenuCockDesireReqEN = "《 Cock Desire Requirements 》";
const StatusMenuCockDesireReqJP = "《 棒欲 》";

const ProfileNameTextEN = "Name:";
const ProfileNameTextJP = "名前：";
const ProfileAgeTextEN = "Age:";
const ProfileAgeTextJP = "年齢：";
const ProfileThreeSizesTextEN = "Three Sizes:";
const ProfileThreeSizesTextJP = "スリーサイズ：";
const ProfileBioTextEN = "Bio";
const ProfileBioTextJP = "経歴";

const ProfileNameEN = "Karryn";
const ProfileNameJP = "カリン";
const ProfileThreeSizesEN = "110(K Cup)-59-100cm (43-23-39 inches)";
const ProfileThreeSizesJP = "110cm (Ｋカップ) / 59cm / 100cm";
const ProfileBio_One_EN = [
"Karryn is a prodigy who overwhelmed her competition in talent and achievements ever since she could walk.", 
"Her spectacular results allowed her to quickly catapult up to the ranks of the elites within the Zanados Empire.",
"Before long, she had become the Emperor's exclusive secretary, truly making her an elite without peer.",
"Further blessed by the gods with a beautiful face and shapely body, her confidence and pride are also second to none."
];
const ProfileBio_One_JP = [
"ザナドス帝国皇帝の直属秘書として名を馳せるまで、まさしく俊足の早さで到達した正真正銘のエリート。",
"幼少期から優秀な成績と身体能力で他を圧倒する才能で、キャリアの階段を意図もたやすく上り詰めていった。", 
"また、その恵まれた美貌と体型に絶対的な自信を持っているため、プライドが非常に高い。"
];

const ProfileRecordFirstEN = "First: ";
const ProfileRecordFirstJP = "初体験：";
const ProfileRecordLastEN = "Last: ";
const ProfileRecordLastJP = "最　近：";
const ProfileRecordSecretEN = "\\C[7]Secret\\C[0]";
const ProfileRecordSecretJP = "\\C[7]ヒミツ\\C[0]";
const ProfileRecordNeverEN = "\\C[29]Never\\C[0]";
const ProfileRecordNeverJP = "\\C[29]未経験\\C[0]";

const ProfileRecordKissEN = "Kiss";
const ProfileRecordKissJP = "キス";
const ProfileRecordSexEN = "Sex";
const ProfileRecordSexJP = "セックス";
const ProfileRecordAnalEN = "Anal";
const ProfileRecordAnalJP = "アナル";
const ProfileRecordHandjobEN = "Handjob";
const ProfileRecordHandjobJP = "手コキ";
const ProfileRecordBlowjobEN = "Blowjob";
const ProfileRecordBlowjobJP = "フェラチオ";
const ProfileRecordTittyFuckEN = "Titjob";
const ProfileRecordTittyFuckJP = "パイズリ";
const ProfileRecordFootjobEN = "Footjob";
const ProfileRecordFootjobJP = "足コキ";
const ProfileRecordRimjobEN = "Rimjob";
const ProfileRecordRimjobJP = "ケツ舐め";
const ProfileRecordSwallowEN = "Cum Swallowing";
const ProfileRecordSwallowJP = "精飲";
const ProfileRecordPussyCreampieEN = "Pussy Creampie";
const ProfileRecordPussyCreampieJP = "中出し";
const ProfileRecordAnalCreampieEN = "Anal Creampie";
const ProfileRecordAnalCreampieJP = "アナル中出し";
const ProfileRecordBodyBukkakeEN = "Body Bukkake";
const ProfileRecordBodyBukkakeJP = "体へのぶっかけ";
const ProfileRecordFaceBukkakeEN = "Cum Facial";
const ProfileRecordFaceBukkakeJP = "顔射";

const ProfileRecordCunnilingusEN = "Cunnilingus";
const ProfileRecordCunnilingusJP = "クンニ";
const ProfileRecordSuckFingersEN = "Mouth Petting";
const ProfileRecordSuckFingersJP = "指しゃぶり";
const ProfileRecordButtSpankEN = "Butt Spanking";
const ProfileRecordButtSpankJP = "スパンキング";
const ProfileRecordBoobsPettingEN = "Boobs Petting";
const ProfileRecordBoobsPettingJP = "おっぱい愛撫";
const ProfileRecordNipplesPettingEN = "Nipples Petting";
const ProfileRecordNipplesPettingJP = "乳首愛撫";
const ProfileRecordClitPettingEN = "Clit Petting";
const ProfileRecordClitPettingJP = "クリ愛撫";
const ProfileRecordPussyPettingEN = "Pussy Petting";
const ProfileRecordPussyPettingJP = "マンコ愛撫";
const ProfileRecordButtPettingEN = "Butt Petting";
const ProfileRecordButtPettingJP = "ケツ愛撫";
const ProfileRecordAnalPettingEN = "Anal Petting";
const ProfileRecordAnalPettingJP = "アナル愛撫";
const ProfileRecordClitToyEN = "Clit Toy";
const ProfileRecordClitToyJP = "クリのオモチャ";
const ProfileRecordPussyToyEN = "Pussy Toy";
const ProfileRecordPussyToyJP = "マンコのオモチャ";
const ProfileRecordAnalToyEN = "Anal Toy";
const ProfileRecordAnalToyJP = "アナルのオモチャ";
const ProfileRecordPussySexEN = "Vaginal Sex";
const ProfileRecordPussySexJP = "マンコセックス";
const ProfileRecordAnalSexEN = "Anal Sex";
const ProfileRecordAnalSexJP = "アナルセックス";


const ProfileRecordFirstKissEN = "Got my first kiss taken by \\C[31]%2\\C[0] in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordFirstKissJP = "初キスは、\\C[26]%1日目\\C[0]の%3で\\C[31]%2\\C[0]と交わした。";
const ProfileRecordFirstKissWasPenisEN = "Had my maiden kiss taken by \\C[31]%2\\C[0]'s cock in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordFirstKissWasPenisJP = "\\C[26]%1日目\\C[0]に%3で経験した初キスは\\C[31]%2\\C[0]のチンポの亀頭だった。";
const ProfileRecordFirstKissWasAnusEN = "Got my virgin kiss taken by \\C[31]%2\\C[0]'s anus in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordFirstKissWasAnusJP = "記念すべきファーストキスは、\\C[26]%1日目\\C[0]に%3で舐めた\\C[31]%2\\C[0]のケツ穴だった。";

const ProfileRecordLastKissEN = "Kissed \\C[31]%2\\C[0] in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordLastKissJP = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]とキスした。";
const ProfileRecordFirstSexEN = "Lost my virginity to \\C[31]%2\\C[0] in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordFirstSexJP = "\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]に処女を奪われた。";
const ProfileRecordFirstPussySexWasDildoEN = "Lost my virginity to \\C[31]%2\\C[0]'s dildo in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordFirstPussySexWasDildoJP = "\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]のディルドに処女を奪われた。";
const ProfileRecordLastSexEN = "Had sex with \\C[31]%2\\C[0] in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordLastSexJP = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]とヤッた。";
const ProfileRecordFirstAnalEN = "Lost my anal virginity to \\C[31]%2\\C[0] in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordFirstAnalJP = "\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]にアナル処女を奪われた。";
const ProfileRecordLastAnalEN = "Had anal sex with \\C[31]%2\\C[0] in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordLastAnalJP = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]とケツマンコでヤッた。";
const ProfileRecordFirstHandjobEN = "Jerked off my first dick on \\C[26]Day %1\\C[0] in %3 using \\C[31]%2\\C[0]'s cock.";
const ProfileRecordFirstHandjobJP = "\\C[26]%1日目\\C[0]、%3で初めて手コキしたのは\\C[31]%2\\C[0]のチンポだった。";
const ProfileRecordLastHandjobEN = "Gave a handjob to \\C[31]%2\\C[0] in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordLastHandjobJP = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]の勃起チンポをシコった。";
const ProfileRecordFirstBlowjobEN = "Sucked my first dick on \\C[26]Day %1\\C[0] in %3 using \\C[31]%2\\C[0]'s cock.";
const ProfileRecordFirstBlowjobJP = "\\C[26]%1日目\\C[0]、%3でしゃぶった\\C[31]%2\\C[0]のチンポが初フェラだった。";
const ProfileRecordLastBlowjobEN = "Blew \\C[31]%2\\C[0] in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordLastBlowjobJP = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]の勃起チンポをしゃぶった。";
const ProfileRecordFirstTittyFuckEN = "Sandwiched my first cock on \\C[26]Day %1\\C[0] using \\C[31]%2\\C[0]'s cock in %3.";
const ProfileRecordFirstTittyFuckJP = "\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]に初パイズリをさせられた。";
const ProfileRecordLastTittyFuckEN = "Titty fucked \\C[31]%2\\C[0] in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordLastTittyFuckJP = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]のチンポをおっぱいで気持ち良くした。";

const ProfileRecordFirstFootjobEN = "Rubbed my first dick using my feet on \\C[26]Day %1\\C[0] in %3 using \\C[31]%2\\C[0]'s cock.";
const ProfileRecordFirstFootjobJP = "\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]のチンポを足でコスった。";
const ProfileRecordLastFootjobEN = "Gave a footjob to \\C[31]%2\\C[0] in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordLastFootjobJP = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]のチンポを足でシゴいてやった。";
const ProfileRecordFirstRimjobEN = "Performed my first anilingus on \\C[26]Day %1\\C[0] in %3 on \\C[31]%2\\C[0].";
const ProfileRecordFirstRimjobJP = "\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]に初めてアナルを舐めさせられた。";
const ProfileRecordLastRimjobEN = "Tossed \\C[31]%2\\C[0]'s salad in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordLastRimjobJP = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]のケツ穴を舐め回してあげた。";

const ProfileRecordFirstBukkakeEN = "Got bukkaked for the first time on \\C[26]Day %1\\C[0] from \\C[31]%2\\C[0] in %3.";
const ProfileRecordFirstBukkakeJP = "\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]から初めて体にぶっかけられた。";
const ProfileRecordLastBukkakeEN = "Got a cum shower from \\C[31]%2\\C[0] in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordLastBukkakeJP = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]のザーメンを体に浴びた。";
const ProfileRecordFirstFaceBukkakeEN = "Got my first facial on \\C[26]Day %1\\C[0] from \\C[31]%2\\C[0] in %3.";
const ProfileRecordFirstFaceBukkakeJP = "\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]から初めて顔射された。";
const ProfileRecordLastFaceBukkakeEN = "Welcomed \\C[31]%2\\C[0]'s semen on my face in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordLastFaceBukkakeJP = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]のザーメンを顔面で受け入れた。";

const ProfileRecordFirstSwallowEN = "Tasted my first cum on \\C[26]Day %1\\C[0] in %3 from swallowing \\C[31]%2\\C[0]'s cum.";
const ProfileRecordFirstSwallowJP = "\\C[26]%1日目\\C[0]、%3で初めて飲んだのは\\C[31]%2\\C[0]の精子だった。";
const ProfileRecordLastSwallowEN = "Swallowed \\C[31]%2\\C[0]'s cum in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordLastSwallowJP = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]が口内に発射したザーメンをごっくんした。";
const ProfileRecordFirstPussyCreampieEN = "Let \\C[31]%2\\C[0] creampie inside me in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordFirstPussyCreampieJP = "ついに\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]に初めて膣内射精をされた。";
const ProfileRecordLastPussyCreampieEN = "Received a big creampie from \\C[31]%2\\C[0] in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordLastPussyCreampieJP = "\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]が膣奥にザーメンをぶちまけていった。";
const ProfileRecordFirstAnalCreampieEN = "Let \\C[31]%2\\C[0] cum inside my butt in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordFirstAnalCreampieJP = "とうとう\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]に初めて腸内射精された。";
const ProfileRecordLastAnalCreampieEN = "Got creampied up my butt by \\C[31]%2\\C[0] in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordLastAnalCreampieJP = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]がケツ奥へザーメンを放出していった。";


const StatusRecordDaysSingularEN = "day";
const StatusRecordDaysSingularJP = "日";
const StatusRecordDaysPluralEN = "total days";
const StatusRecordDaysPluralJP = "日";
const StatusRecordTimesSingularEN = "time";
const StatusRecordTimesSingularJP = "回";
const StatusRecordTimesPluralEN = "times";
const StatusRecordTimesPluralJP = "回";
const StatusRecordJustPeopleSingularEN = "person";
const StatusRecordJustPeopleSingularJP = "人";
const StatusRecordJustPeoplePluralEN = "people";
const StatusRecordJustPeoplePluralJP = "人";
const StatusRecordDifferentPeopleSingularEN = "person";
const StatusRecordDifferentPeopleSingularJP = "人";
const StatusRecordDifferentPeoplePluralEN = "different people";
const StatusRecordDifferentPeoplePluralJP = "人";

const StatusRecordDateEN = "Spent %1 total days in the prison.";
const StatusRecordDateJP = "私が監獄に着任してから%1日が経過した。";
const StatusRecordFightEN = "Subdued %1 people and lost %2 times.";
const StatusRecordFightJP = "戦闘で%1人を撃退したが、%2回は敗北してしまった。";
const StatusRecordFightSubduedOnlyEN = "Subdued %1 people.";
const StatusRecordFightSubduedOnlyJP = "戦闘で%1人を撃退した。";
const StatusRecordStripEN = "Got my clothes stripped off %1 times and panties taken off %2 times by other people.";
const StatusRecordStripJP = "服を%1回脱がされた。その内、パンティは%2回脱がされた。";
const StatusRecordKissEN = "Got kissed %1 times by %2 different people.";
const StatusRecordKissJP = "キスを%2人の男と交わした。合計で%1回キスをしている。";
const StatusRecordBoobsPettedEN = "Got my boobs squeezed %1 times by %2 different people.";
const StatusRecordBoobsPettedJP = "私の胸を%2人の男に揉まれた。合計で%1回おっぱいを揉まれている。";
const StatusRecordNipplesPettedEN = "Got my nipples pinched %1 times by %2 different people.";
const StatusRecordNipplesPettedJP = "私の乳首を%2人の男につままれた。合計で%1回乳首をつままれている。";
const StatusRecordClitPettedEN = "Got my clit touched %1 times by %2 different people.";
const StatusRecordClitPettedJP = "私のクリトリスを%2人の男にイジられた。合計で%1回クリをイジられている。";
const StatusRecordPussyPettedEN = "Got my pussy fingered %1 times by %2 different people.";
const StatusRecordPussyPettedJP = "私のマンコを%2人の男にイジられた。合計で%1回マンコをイジられている。";
const StatusRecordButtPettedEN = "Got my butt felt up %1 times by %2 different people.";
const StatusRecordButtPettedJP = "私のお尻を%2人の男に鷲掴みにされた。合計で%1回尻を鷲掴みされている。";
const StatusRecordAnalPettedEN = "Got my butthole fingered %1 times by %2 different people.";
const StatusRecordAnalPettedJP = "私のアナルを%2人の男に指でほじられた。合計で%1回アナルをほじられている。";
const StatusRecordMasturbateEN = "Masturbated %1 times and saw other people masturbate %2 times.";
const StatusRecordMasturbateJP = "私は%1回オナニーをした。男たちにオナニーを目撃されたのは%2回目。";
const StatusRecordSexPartnersEN = "Had %1 different sexual partners.";
const StatusRecordSexPartnersJP = "私と性的な関係がある男は%1人。";
const StatusRecordHandjobEN = "Gave %1 handjobs to %2 different people.";
const StatusRecordHandjobJP = "私がシコったチンポは%2本。合計で%1回手コキをした。";
const StatusRecordBlowjobEN = "Gave %1 blowjobs to %2 different people.";
const StatusRecordBlowjobJP = "私がしゃぶったチンポは%2本。合計で%1回フェラチオをした。";
const StatusRecordTittyFuckEN = "Got titty fucked %1 times by %2 different people.";
const StatusRecordTittyFuckJP = "私がおっぱいで挟んだチンポは%2本。合計で%1回パイズリをした。";
const StatusRecordFootjobEN = "Gave %1 footjobs to %2 different people.";
const StatusRecordFootjobJP = "私が足でシゴいたチンポは%2本。合計で%1回足コキをした。";
const StatusRecordRimjobEN = "Gave %1 rimjobs to %2 different people.";
const StatusRecordRimjobJP = "私がアナルを舐めた男は%2人。合計で%1回ケツ舐めをした。";
const StatusRecordCunniEN = "Received cunnilingus %1 times from %2 different people.";
const StatusRecordCunniJP = "私をクンニした男は%2人。合計で%1回マンコを舐められている。";
const StatusRecordSpankedEN = "Got spanked %1 times by %2 different people.";
const StatusRecordSpankedJP = "私をスパンキングした男は%2人。合計で%1回ケツを叩かれている。";
const StatusRecordPussySexEN = "Got fucked in my pussy %1 times by %2 different people.";
const StatusRecordPussySexJP = "私とセックスした男は%2人。合計%1回マンコファックしている。";
const StatusRecordAnalSexEN = "Got fucked in my butt %1 times by %2 different people.";
const StatusRecordAnalSexJP = "私とアナルセックスした男は%2人。合計%1回アナルファックしている。";
const StatusRecordGangbangEN = "Got double penetrated %1 times and gangbanged %2 times.";
const StatusRecordGangbangJP = "私と男たちとの二穴ファックは%1回目で、輪姦セックスは%2回目。";
const StatusRecordOrgasmEN = "Came %1 times in front of %2 different people, squirting %3 ml of fluids.";
const StatusRecordOrgasmJP = "私がイカせた男は%2人。全部で%1回チンポを射精させている。その合計ザーメン量は%3ml。";
const StatusRecordSwallowEN = "Swallowed cum %1 times for a total of %3 ml of cum from %2 different people.";
const StatusRecordSwallowJP = "私がザーメンを飲んだチンポは%2本。全部で%1回精飲している。その合計ごっくん量は%3ml。";
const StatusRecordPussyCreampieEN = "Got creampied in my pussy %1 times for a total of %3 ml of cum from %2 different people.";
const StatusRecordPussyCreampieJP = "私のマンコに中出しした男は%2人。全部で%1回膣内射精されている。合計%3mlのザーメンが膣を満たした。";
const StatusRecordAnalCreampieEN = "Got creampied in my butt %1 times for a total of %3 ml of cum from %2 different people.";
const StatusRecordAnalCreampieJP = "私のアナルに中出しした男は%2人。全部で%1回腸内射精されている。合計%3mlのザーメンがお腹を満たした。";

const StatusRecordFingersSuckedEN = "Sucked %2 different people's fingers %1 times.";
const StatusRecordFingersSuckedJP = "私が指をしゃぶった男は%2人。合計%1回おしゃぶりしている。";
const StatusRecordBukkakeEN = "Got bukkaked %1 times for a total of %3 ml of cum from %2 different people.";
const StatusRecordBukkakeJP = "私にぶっかけた男は%2人。全部で%1回ぶっかけられている。その合計ザーメン量は%3ml。";
const StatusRecordFaceBukkakeEN = "Got facialed %1 times for a total of %3 ml of cum from %2 different people.";
const StatusRecordFaceBukkakeJP = "私の顔にぶっかけした男は%2人。全部で%1回顔射されている。その合計ザーメン量は%3ml。";

//StatusBattleEffectはステータスメニューの「状態」に書いてる
const StatusBattleEffectOrgasmEN = "Karryn \\C[5]just orgasmed\\C[0]! She's a mess right now and can not do anything!";
const StatusBattleEffectOrgasmJP = "【快楽：\\C[5]絶頂中！\\C[0]】今は何も出来ない！";
const StatusBattleEffectCoolEN = "Karryn is \\C[4]cool and collected\\C[0] from having low desires!\nHer accuracy, evasion, critical rate, critical evasion and regens are slightly increased.";
const StatusBattleEffectCoolJP = "【感情：\\C[4]冷静沈着①\\C[0]】命中力、回避力、クリティカル率、クリティカル回避率が少しアップ。\n【感情：\\C[4]冷静沈着②\\C[0]】全ての回復量が少しアップ。";
const StatusBattleEffectIsHornyZeroEN = "Karryn is \\C[18]horny\\C[0]! All her sexual resists are decreased.";
const StatusBattleEffectIsHornyZeroJP = "【快楽：\\C[18]興奮中！\\C[0]】全てのセクハラ耐性がダウン。";
const StatusBattleEffectIsHornyOneEN = "Karryn is \\C[18]horny\\C[0]! All her sexual resists are decreased, and all her desires will rise a bit every turn.";
const StatusBattleEffectIsHornyOneJP = "【快楽：\\C[18]興奮中！\\C[0]】全てのセクハラ耐性がダウン。全ての性欲が少しづつ上昇中【毎ターン】";
const StatusBattleEffectIsHornyTwoEN = "Karryn is \\C[18]horny\\C[0]! All her sexual resists are decreased,\nsuppress desire skills cost more and all her desires will rise a bit every turn.";
const StatusBattleEffectIsHornyTwoJP = "【快楽：\\C[18]興奮中！①\\C[0]】全てのセクハラ耐性がダウン。抑制スキルのコストがアップ【毎ターン】\n【快楽：\\C[18]興奮中！②\\C[0]】全ての性欲が少しづつ上昇中【毎ターン】";
const StatusBattleEffectIsHornyThreeEN = "Karryn is \\C[18]horny\\C[0]! Her evasion, accuracy and all her sexual resists are decreased,\nsuppress desire skills cost more, and all her desires will rise a bit every turn.";
const StatusBattleEffectIsHornyThreeJP = "【快楽：\\C[18]興奮中！①\\C[0]】回避力、命中力、全てのセクハラ耐性がダウン。抑制スキルのコストがアップ【毎ターン】\n【快楽：\\C[18]興奮中！②\\C[0]】全ての性欲が少しづつ上昇中【毎ターン】";
const StatusBattleEffectIsArousedEN = "Karryn is \\C[27]aroused\\C[0]! Her pussy will slowly get \\C[23]wetter\\C[0] every turn.";
const StatusBattleEffectIsArousedJP = "【快楽：\\C[27]発情中！\\C[0]】マンコがゆっくりと\\C[23]濡れていく\\C[0]【毎ターン】";
const StatusBattleEffectNotArousedEN = "Karryn is currently not aroused. She must be aroused before her pussy can get any wetter.";
const StatusBattleEffectNotArousedJP = "【快楽：発情していない】マンコは濡れていない。";
const StatusBattleEffectIsWetEN = "Karryn is \\C[23]wet\\C[0]! She is now able to receive vaginal penetration.";
const StatusBattleEffectIsWetJP = "【マンコ：\\C[23]濡れている！\\C[0]】挿入可能。";
const StatusBattleEffectNotWetEN = "Karryn is currently not wet. She will not receive any vaginal penetration.";
const StatusBattleEffectNotWetJP = "【マンコ：濡れていない】挿入不可。";
const StatusBattleEffectIsWearingPantiesEN = "Karryn is wearing panties. Her clothes need to be heavily displaced\nbefore her nether regions are accessible.";
const StatusBattleEffectIsWearingPantiesJP = "【パンティ：履いている】服を脱がされない限り下半身への接触は守られる。";
const StatusBattleEffectIsNotWearingPantiesEN = "Karryn is \\C[27]not wearing any panties\\C[0]! Her clothes only need to be moderately displaced\nbefore her nether regions are accessible.";
const StatusBattleEffectIsNotWearingPantiesJP = "【パンティ：\\C[27]履いてない！\\C[0]】服を脱がされれば下半身への接触を許してしまう。";
const StatusBattleEffectIsVirginPublishedEN = "Karryn is a \\C[27]known virgin\\C[0]! Her charm during battle is increased.";
const StatusBattleEffectIsVirginPublishedJP = "【性体験の情報：\\C[27]処女だと知られてしまっている！\\C[0]】戦闘中は魅力アップ。";
const StatusBattleEffectIsVirginHighEN = "Karryn is a \\C[27]suspected virgin\\C[0]! Her charm during battle is increased.";
const StatusBattleEffectIsVirginHighJP = "【性体験の情報：\\C[27]処女の噂が広がっている！\\C[0]】戦闘中は魅力アップ。";
const StatusBattleEffectIsVirginMedEN = "Karryn is rumored to still be a \\C[27]virgin\\C[0]! Her charm during battle is slightly increased.";
const StatusBattleEffectIsVirginMedJP = "【性体験の情報：\\C[27]処女疑惑を持たれ始めている！\\C[0]】戦闘中は魅力が少しアップ。";
const StatusBattleEffectIsVirginLowEN = "Karryn is actually still a \\C[27]virgin\\C[0] but no one thinks she is! Her charm during battle remains unaffected.";
const StatusBattleEffectIsVirginLowJP = "【性体験の情報：\\C[27]まだ未経験だと誰にも知られていない\\C[0]】魅力に影響なし。";

const StatusBattleEffectIsConfidentZeroEN = "Karryn is feeling \\C[30]confident\\C[0]! All her stats are increased!";
const StatusBattleEffectIsConfidentZeroJP = "【感情：\\C[30]自信満々！\\C[0]】全ステータスアップ！";
const StatusBattleEffectIsConfidentOneEN = "Karryn is feeling \\C[30]confident\\C[0]! All her stats are increased based on her cockiness!";
const StatusBattleEffectIsConfidentOneJP = "【感情：\\C[30]自信満々！\\C[0]】全ステータスが大胆さによってアップ！";

const StatusBattleEffectIsFrustratedEN = "Karryn is \\C[18]sexually frustrated\\C[0]! Her Attack is increased while her Defense, Agility, Accuracy and Critical Evasion are decreased!";
const StatusBattleEffectIsFrustratedJP = "【感情：\\C[18]ムラムラしている！\\C[0]】攻撃力アップと引き換えに、防御力・素早さ・命中力・クリティカル回避率ダウン！";

const StatusBattleEffectDisarmedEN = "Karryn is \\C[18]disarmed\\C[0]! She will need to get closer to her halberd to rearm herself.";
const StatusBattleEffectDisarmedJP = "【武装：\\C[18]なし\\C[0]】ハルバードを拾い上げて再武装が必要。";
const StatusBattleEffectDefiledHalberdEN = "Karryn's \\C[18]halberd is currently defiled\\C[0]! She can't use her halberd until she rests in her office or a guard station.";
const StatusBattleEffectDefiledHalberdJP = "【武装：\\C[18]不可\\C[0]】ハルバードが汚されていて武装出来ない。【ベッドで休む必要あり】";
const StatusBattleEffectOffBalancedEN = "Karryn is \\C[18]off-balanced\\C[0]! Her attack, defense and evasion are decreased.";
const StatusBattleEffectOffBalancedJP = "【状態：\\C[18]バランス崩壊\\C[0]】攻撃力、防御力、回避力ダウン。";
const StatusBattleEffectWeakenEN = "Karryn is \\C[18]weakened\\C[0]! Her strength and attack are decreased.";
const StatusBattleEffectWeakenJP = "【状態：\\C[18]脱力\\C[0]】腕力、攻撃力ダウン。";
const StatusBattleEffectDizzyEN = "Karryn is \\C[18]dizzy\\C[0]! Her accuracy and evasion are decreased.";
const StatusBattleEffectDizzyJP = "【状態：\\C[18]めまい\\C[0]】命中力、回避力ダウン。";
const StatusBattleEffectSlowEN = "Karryn is \\C[18]slowed\\C[0]! Her agility is greatly decreased.";
const StatusBattleEffectSlowJP = "【状態：\\C[18]鈍い\\C[0]】素早さが大幅ダウン！";
const StatusBattleEffectVulnerableEN = "Karryn is currently \\C[18]vulnerable\\C[0]! Her defense is decreased.";
const StatusBattleEffectVulnerableJP = "【状態：\\C[18]放心\\C[0]】防御力ダウン。";
const StatusBattleEffectPoisonEN = "Karryn is \\C[18]poisoned\\C[0]! Her stamina decreases every turn instead of regenerating.";
const StatusBattleEffectPoisonJP = "【状態：\\C[18]毒\\C[0]】体力が減少していく【毎ターン】";
const StatusBattleEffectYetiHeatAuraOneEN = "Karryn is being affected by \\C[18]the Yeti's heat aura\\C[0]! Her stamina regeneration is greatly decreased.";
const StatusBattleEffectYetiHeatAuraOneJP = "【状態：\\I[18]イエティの熱オーラ\\C[0]】体力回復量が大幅ダウン！";
const StatusBattleEffectYetiHeatAuraTwoEN = "Karryn is being affected by \\C[18]the Yetis's heat aura\\C[0]! Her stamina and willpower regeneration are greatly decreased.";
const StatusBattleEffectYetiHeatAuraTwoJP = "【状態：\\I[18]イエティの熱オーラ\\C[0]】体力回復量、意志力回復量が大幅ダウン！";
const StatusBattleEffectExposeWeaknessEN = "Karryn's \\C[18]weaknesses are exposed\\C[0]! Her evasion, critical evasion, and all her resists are decreased.";
const StatusBattleEffectExposeWeaknessJP = "【状態：\\C[18]弱点バレ\\C[0]】回避力、クリティカル回避力、全ての耐性がダウン。";
const StatusBattleEffectAttackComboEN = "Karryn has attacked \\C[2]%1 consecutive times\\C[0]! The damage, accuracy and cost of her next attack will be increased.";
const StatusBattleEffectAttackComboJP = "【攻撃コンボ：\\C[2]%1連続目\\C[0]】次の攻撃時にダメージ、命中力、スキルコストがアップ。";
const StatusBattleEffectAttackComboCockyEN = "Attacking four times or more in a row will increase her \\C[30]cockiness\\C[0].";
const StatusBattleEffectAttackComboCockyJP = "4回以上のコンボで大胆さアップ。";
const StatusBattleEffectSexComboOneEN = "Karryn has used her sexual skills \\C[2]%1 consecutive times\\C[0]! The pleasure damage and cost of her next non-petting sexual skill will be increased.";
const StatusBattleEffectSexComboOneJP = "【SEXコンボ：\\C[2]%1連続目\\C[0]】次の攻撃時に性スキルの快楽ダメージとスキルコストがアップ【愛撫は除く】";
const StatusBattleEffectSexComboTwoEN = "Consecutively using the same type of non-petting sexual skill on the same person will also greatly increase pleasure damage and cost.";
const StatusBattleEffectSexComboTwoJP = "更に同じ相手に同じ性スキルを連続使用で、快楽ダメージとスキルコストが大幅アップ【愛撫は除く】";

//Tooltipsは戦闘画面のステートTooltipに表示される
const StateTooltipsRemainingTurnsSingularEN = "\\c[27](1 Turn Left)\\c[0]";
const StateTooltipsRemainingTurnsSingularJP = "\\c[27](残り1ターン)\\c[0]";
const StateTooltipsRemainingTurnsPluralEN = "\\c[27](%1 Turns Left)\\c[0]";
const StateTooltipsRemainingTurnsPluralJP = "\\c[27](残り%1ターン)\\c[0]";

const StateTooltipsOrgasmEN = "Karryn \\C[5]just orgasmed\\C[0]!\nShe's a mess right now and can not do anything!";
const StateTooltipsOrgasmJP = "\\C[5]【絶頂中！】\\C[0]\n今は何も出来ない！";
const StateTooltipsSlashStanceEN = "%1 will take more damage and\nbe easier to hit with a \\C[4]Pierce-type attack.\\C[0]\nBut will also take less damage and\nbe harder to hit with a \\C[2]Blunt-type attack.\\C[0]";
const StateTooltipsSlashStanceJP = "有効\\I[42]\\C[4]スラスト系\\C[0]\n耐久\\I[42]\\C[2]ストライク系\\C[0]";
const StateTooltipsPierceStanceEN = "%1 will take more damage and\nbe easier to hit with a \\C[2]Blunt-type attack.\\C[0]\nBut will also take less damage and\nbe harder to hit with a \\C[3]Slash-type attack.\\C[0]";
const StateTooltipsPierceStanceJP = "有効\\I[42]\\C[2]ストライク系\\C[0]\n耐久\\I[42]\\C[3]スラッシュ系\\C[0]";
const StateTooltipsBluntStanceEN = "%1 will take more damage and\nbe easier to hit with a \\C[3]Slash-type attack.\\C[0]\nBut will also take less damage and\nbe harder to hit with a \\C[4]Pierce-type attack.\\C[0]";
const StateTooltipsBluntStanceJP = "有効\\I[42]\\C[3]スラッシュ系\\C[0]\n耐久\\I[42]\\C[4]スラスト系\\C[0]";
const StateTooltipsHornyZeroEN = "Karryn is \\C[18]horny\\C[0]!\nAll her sexual resists are decreased.";
const StateTooltipsHornyZeroJP = "\\C[18]【興奮中！】\\C[0]\n\\I[42]全てのセクハラ耐性 ダウン";
const StateTooltipsHornyOneEN = "Karryn is \\C[18]horny\\C[0]!\nAll her sexual resists are decreased,\nand all her desires will rise a bit every turn.";
const StateTooltipsHornyOneJP = "\\C[18]【興奮中！】\\C[0]\n\\I[42]全てのセクハラ耐性 ダウン\n\\I[40]全ての性欲 少しづつ上昇中\n（毎ターン）";
const StateTooltipsHornyTwoEN = "Karryn is \\C[18]horny\\C[0]!\nAll her sexual resists are decreased,\nher suppress desire skills cost more,\nand all her desires will rise a bit every turn.";
const StateTooltipsHornyTwoJP = "\\C[18]【興奮中！】\\C[0]\n\\I[42]全てのセクハラ耐性 ダウン\n\\I[42]抑制スキルのコスト アップ\n\\I[40]全ての性欲 少しづつ上昇中\n（毎ターン）";
const StateTooltipsHornyThreeEN = "Karryn is \\C[18]horny\\C[0]!\nHer evasion, accuracy and all her sexual resists are decreased,\nher suppress desire skills cost more,\nand all her desires will rise a bit every turn.";
const StateTooltipsHornyThreeJP = "\\C[18]【興奮中！】\\C[0]\n\\I[42]回避力 ダウン\n\\I[42]命中力 ダウン\n\\I[42]全てのセクハラ耐性 ダウン\n\\I[42]抑制スキルのコスト アップ\n\\I[40]全ての性欲 少しづつ上昇中\n（毎ターン）";



const StateTooltipsEnemyHornyEN = "%1 is \\C[18]horny\\C[0]!\nHe has higher act chance, lower attack chance, lower resists\nlower charm requirement, and will ejaculate more.";
const StateTooltipsEnemyHornyJP = "\\C[18]【興奮中！】\\C[0]\n\\I[42]判断力 アップ\n\\I[42]攻撃性 ダウン\n\\I[42]全ての耐性 ダウン\n\\I[42]魅力の必要値 ダウン\n\\I[40]射精量 アップ";

const StateTooltipsCoolEN = "Karryn is \\C[4]cool and collected\\C[0] from having low desires!\nHer accuracy, evasion, critical rate, critical evasion\nand all her regens are slightly increased.";
const StateTooltipsCoolJP = "\\C[4]【冷静沈着】\\C[0]\n\\I[42]命中力 少しアップ\n\\I[42]回避力 少しアップ\n\\I[42]クリティカル率 少しアップ\n\\I[42]クリティカル回避率 少しアップ\n\\I[42]全ての回復量 少しアップ";

const StateTooltipsIsWetEN = "Karryn is \\C[23]wet\\C[0]!\nShe is now able to receive vaginal penetration.";
const StateTooltipsIsWetJP = "\\C[23]【マンコが濡れている！】\n\\I[40]\\C[0]挿入可能";
const StateTooltipsNotWetEN = "Karryn is currently not wet.\nShe will not allow any vaginal penetration.";
const StateTooltipsNotWetJP = "【マンコは濡れていない】\n\\I[42]挿入不可";
const StateTooltipsWearingPantiesEN = "Karryn is wearing panties.\nHer clothes need to be heavily displaced\nbefore her nether regions are accessible.";
const StateTooltipsWearingPantiesJP = "【パンティを履いている】\n\\I[42]服を脱がされない限り下半身への接触は守られる";
const StateTooltipsNotWearingPantiesEN = "Karryn is \\C[27]not wearing any panties\\C[0]! \nHer clothes only need to be moderately displaced before her nether regions are accessible.";
const StateTooltipsNotWearingPantiesJP = "\\C[27]【パンティを履いていない！】\\C[0]\n\\I[40]服を脱がされれば下半身への接触を許してしまう";
const StateTooltipsVirginPublishedEN = "Karryn is a \\C[27]known virgin\\C[0]!\nHer charm during battle is increased.";
const StateTooltipsVirginPublishedJP = "\\C[27]【処女の情報が公開されている！】\\C[0]\n\\I[40]魅力 増加中";
const StateTooltipsVirginHighEN = "Karryn is a \\C[27]suspected virgin\\C[0]!\nHer charm during battle is increased.";
const StateTooltipsVirginHighJP = "\\C[27]【処女疑惑が広がっている！】\\C[0]\n\\I[40]魅力 増加中";
const StateTooltipsVirginMedEN = "Karryn is rumored to still be a \\C[27]virgin\\C[0]!\nHer charm during battle is slightly increased.";
const StateTooltipsVirginMedJP = "\\C[27]【処女かもと噂され始めている……】\\C[0]\n\\I[40]魅力 少し増加中";
const StateTooltipsVirginLowEN = "Karryn is actually still a \\C[27]virgin\\C[0] but no one thinks she is!\nHer charm during battle remains unaffected.";
const StateTooltipsVirginLowJP = "\\C[27]【処女バレしていない】\\C[0]\n\\I[42]魅力に影響なし";
const StateTooltipsConfidentZeroEN = "Karryn is feeling \\C[30]confident\\C[0]!\nAll her stats are increased!";
const StateTooltipsConfidentZeroJP = "\\C[30]【自信満々！】\\C[0]\n\\I[42]全ステータス アップ";
const StateTooltipsConfidentOneEN = "Karryn is feeling \\C[30]confident\\C[0]!\nAll her stats are increased based on her cockiness!";
const StateTooltipsConfidentOneJP = "\\C[30]【自信満々！】\\C[0]\n\\I[42]全ステータス 大胆さによってアップ";
const StateTooltipsFrustratedEN = "Karryn is \\C[18]sexually frustrated\\C[0]!\nHer Attack is increased but her Defense, Agility,\nAccuracy and Critical Evasion are decreased!";
const StateTooltipsFrustratedJP = "\\C[18]【ムラムラしている！】\\C[0]\n\\I[42]攻撃力 アップ\n\\I[42]防御力 ダウン\n\\I[42]素早さ ダウン\n\\I[42]命中力 ダウン\n\\I[42]クリティカル回避率 ダウン";
const StateTooltipsDisarmedEN = "Karryn is \\C[18]disarmed\\C[0]!!\nShe will need to get closer to her halberd to rearm herself.";
const StateTooltipsDisarmedJP = "\\C[18]【武装なし】\\C[0]\nハルバードを拾って再武装が必要";
const StateTooltipsOffBalancedEN = "%1 is \\C[18]off-balanced\\C[0]!\nTheir attack, defense and evasion are decreased.";
const StateTooltipsOffBalancedJP = "\\C[18]【バランス崩壊】\\C[0]\n\\I[42]攻撃力 ダウン\n\\I[42]防御力 ダウン\n\\I[42]回避力 ダウン";
const StateTooltipsWeakenEN = "%1 is \\C[18]weakened\\C[0]!\nTheir strength and attack are decreased.";
const StateTooltipsWeakenJP = "\\C[18]【脱力している！】\\C[0]\n\\I[42]腕力 ダウン\n\\I[42]攻撃力 ダウン";
const StateTooltipsDizzyEN = "%1 is \\C[18]dizzy\\C[0]!\nTheir accuracy and evasion are decreased.";
const StateTooltipsDizzyJP = "\\C[18]【フラついている！】\\C[0]\n\\I[42]命中力 ダウン\n\\I[42]回避力 ダウン";
const StateTooltipsSlowEN = "%1 is \\C[18]slowed\\C[0]!\nTheir agility is greatly decreased.";
const StateTooltipsSlowJP = "\\C[18]【鈍くなっている！】\\C[0]\n\\I[42]素早さ 大幅ダウン";
const StateTooltipsVulnerableEN = "%1 is currently \\C[18]vulnerable\\C[0]!\nTheir defense is decreased.";
const StateTooltipsVulnerableJP = "\\C[18]【放心している！】\\C[0]\n\\I[42]防御力 ダウン";
const StateTooltipsPoisonEN = "%1 is \\C[18]poisoned\\C[0]!\nTheir stamina decreases every turn instead of regenerating.";
const StateTooltipsPoisonJP = "\\C[18]【毒に侵されている！】\\C[0]\n\\I[42]体力 ダウン\n　（毎ターン）";
const StateTooltipsExposeWeaknessEN = "Karryn's \\C[18]weaknesses are exposed\\C[0]!\nHer evasion, critical evasion,\nand all her resists are decreased.";
const StateTooltipsExposeWeaknessJP = "\\C[18]【弱点バレしている！】\\C[0]\n\\I[42]回避力 ダウン\n\\I[42]クリティカル回避力 ダウン\n\\I[42]全ての耐性 ダウン";
const StateTooltipsStunnedEN = "%1 is \\C[18]stunned\\C[0]!\nTheir current turn will be skipped.";
const StateTooltipsStunnedJP = "\\C[18]【スタン状態！】\\C[0]\nこのターンは行動不可";
const StateTooltipsEnemyPoseMasterEN = "Karryn's current sexual position might reset after %1 ejaculates!";
const StateTooltipsEnemyPoseMasterJP = "ヤリ主\\I[12]%1\n※射精で体位リセットの可能性あり";
const StateTooltipsActorAttackComboEN = "Karryn has attacked \\C[2]%1 consecutive times\\C[0]!\nThe damage, accuracy and cost of her next attack will be increased.";
const StateTooltipsActorAttackComboJP = "\\C[2]【アタックコンボ！%1連続攻撃】\\C[0]\n次の攻撃で：\n\\I[42]ダメージ アップ\n\\I[42]命中力 アップ\n\\I[42]スキルコスト アップ";
const StateTooltipsActorAttackComboCockyEN = "Karryn has attacked \\C[2]%1 consecutive times\\C[0]!\nThe damage, accuracy and cost of her next attack will be increased.\nAttacking four times or more in a row will increase her \\C[30]cockiness\\C[0].";
const StateTooltipsActorAttackComboCockyJP = "\\C[2]【アタックコンボ！%1連続攻撃】\\C[0]\n\\I[42]ダメージ アップ\n\\I[42]命中力 アップ\n\\I[42]スキルコスト アップ\n\\I[42]4コンボ目で大胆さ アップ";
const StateTooltipsActorSexComboEN = "Karryn has used her sexual skills \\C[2]%1 consecutive times\\C[0]!\nThe pleasure damage and cost of her next non-petting sexual skill will be increased.\nConsecutively using the same type of non-petting sexual skill on the same person will also greatly increase pleasure damage and cost.";
const StateTooltipsActorSexComboJP = "\\C[2]【SEXコンボ！%1連続性行為】\\C[0]\n性スキル(愛撫以外)使用で：\n\\I[42]快楽ダメージ アップ\n\\I[42]スキルコスト アップ\n　\n同じ相手に同じ性スキル(愛撫以外)を連続使用で：\n\\I[42]快楽ダメージ大幅 アップ\n\\I[42]スキルコスト 大幅アップ";
const StateTooltipsEnemyPosePussySexEN = "%1 is fucking Karryn's pussy!";
const StateTooltipsEnemyPosePussySexJP = "マンコをファックしている！";
const StateTooltipsEnemyPoseCunnilingusEN = "%1 is licking Karryn's pussy!";
const StateTooltipsEnemyPoseCunnilingusJP = "マンコをクンニしている！";
const StateTooltipsEnemyPoseAnalSexEN = "%1 is fucking Karryn's ass!";
const StateTooltipsEnemyPoseAnalSexJP = "アナルをファックしている！";
const StateTooltipsEnemyPosePaizuriEN = "%1 is fucking Karryn's breasts!";
const StateTooltipsEnemyPosePaizuriJP = "パイズリさせている！";
const StateTooltipsEnemyPoseHandjobEN = "%1 is getting a handjob from Karryn!";
const StateTooltipsEnemyPoseHandjobJP = "手コキさせている！";
const StateTooltipsEnemyPoseBlowjobEN = "%1 is getting a blowjob from Karryn!";
const StateTooltipsEnemyPoseBlowjobJP = "フェラさせている！";
const StateTooltipsEnemyPoseFootjobEN = "%1 is getting a footjob from Karryn!";
const StateTooltipsEnemyPoseFootjobJP = "足コキしてもらっている！";
const StateTooltipsEnemyPoseRimjobEN = "%1 is getting a rimjob from Karryn!";
const StateTooltipsEnemyPoseRimjobJP = "ケツ舐めさせている！";
const StateTooltipsEnemyKissedEN = "%1 got kissed!\nHis attack, accuracy and evasion are decreased.";
const StateTooltipsEnemyKissedJP = "キスされてデレデレ！\n\\I[42]攻撃力 ダウン\n\\I[42]命中力 ダウン\n\\I[42]回避力 ダウン";
const StateTooltipsArousedEN = "Karryn is \\C[27]aroused\\C[0]!\nHer pussy will slowly get \\C[23]wetter\\C[0] every turn.";
const StateTooltipsArousedJP = "\\C[27]【発情中！】\\C[0]\n\\I[40]\\C[23]マンコがゆっくり濡れていく\\C[0]\n（毎ターン）";
const StateTooltipsCautiousStanceEN = "Karryn's evasion and critical evasion are greatly increased.";
const StateTooltipsCautiousStanceJP = "【見抜きの構え】\n\\I[42]回避力 大幅アップ\n\\I[42]クリティカル回避率 大幅アップ";
const StateTooltipsDefensiveStanceEN = "Karryn is protected from various debuffs.\nHer defense, overblow protection, petting resist,\nand strip resist are also greatly increased.";
const StateTooltipsDefensiveStanceJP = "【守備の構え】\n\\I[42]様々なデバフを保護\n\\I[42]守備力 大幅アップ\n\\I[42]ダメージ軽減量 大幅アップ\n\\I[42]愛撫耐性 大幅アップ\n\\I[42]ストリップ耐性 大幅アップ";
const StateTooltipsCounterStanceEN = "Karryn's counterattack chance is greatly increased.\nHer maximum number of counterattacks is increased.\nHer overblow protection is slightly increased.";
const StateTooltipsCounterStanceJP = "【反撃の構え】\n\\I[42]カウンター率 大幅アップ\n\\I[42]カウンター最大数 アップ\n\\I[42]ダメージ軽減量 少しアップ";
const StateTooltipsSecretaryStanceEN = "Karryn's talk, sight, petting\nand sex resists are greatly increased.\nPleasure damage dealt to enemies are increased.";
const StateTooltipsSecretaryStanceJP = "【秘書の構え】\n\\I[42]猥談耐性 大幅アップ\n\\I[42]視姦耐性 大幅アップ\n\\I[42]愛撫耐性 大幅アップ\n\\I[42]セックス耐性 大幅アップ\n\\I[42]敵への快楽ダメージ アップ";
const StateTooltipsLadyStanceEN = "Karryn's petting and sex resists are slightly increased.\nHer charm during battle is increased.";
const StateTooltipsLadyStanceJP = "【淑女の構え】\n\\I[42]愛撫耐性 少しアップ\n\\I[42]セックス耐性 少しアップ\n\\I[40]魅力 増加中";
const StateTooltipsPleasureStanceEN = "Karryn is welcoming the pleasure.♥";
const StateTooltipsPleasureStanceJP = "【快楽の構え】\n\\I[40]快感を受け入れている！";
const StateTooltipsWillpowerKiOneEN = "Karryn's attack is increased.";
const StateTooltipsWillpowerKiOneJP = "【チャージ】\n\\I[42]攻撃力 アップ";
const StateTooltipsWillpowerKiTwoEN = "Karryn's attack and critical damage are increased.";
const StateTooltipsWillpowerKiTwoJP = "【チャージ】\n\\I[42]攻撃力 アップ\n\\I[42]クリティカルダメージ アップ";
const StateTooltipsWillpowerFocusOneEN = "Karryn's counterattack chance is increased.";
const StateTooltipsWillpowerFocusOneJP = "【フォーカス】\n\\I[42]カウンター率 アップ";
const StateTooltipsWillpowerFocusTwoEN = "Karryn's counterattack chance and overblow protection are increased.";
const StateTooltipsWillpowerFocusTwoJP = "【フォーカス】\n\\I[42]カウンター率 アップ\n\\I[42]ダメージ軽減率 アップ";
const StateTooltipsWillpowerEyeOfTheMindOneEN = "Karryn's accuracy, evasion and critical rate are increased.";
const StateTooltipsWillpowerEyeOfTheMindOneJP = "【マインドアイズ】\n\\I[42]命中力 アップ\n\\I[42]回避力 アップ\n\\I[42]クリティカル率 アップ";
const StateTooltipsWillpowerEyeOfTheMindTwoEN = "Karryn's accuracy, evasion, critical rate\nand critical damage are increased.";
const StateTooltipsWillpowerEyeOfTheMindTwoJP = "【マインドアイズ】\n\\I[42]命中力 アップ\n\\I[42]回避力 アップ\n\\I[42]クリティカルダメージ アップ";
const StateTooltipsWillpowerSeeNoEvilEN = "Karryn's sight resist is increased.";
const StateTooltipsWillpowerSeeNoEvilJP = "【スコトーマ】\n\\I[42]視姦耐性 アップ";
const StateTooltipsWillpowerHearNoEvilEN = "Karryn's talk resist is increased.";
const StateTooltipsWillpowerHearNoEvilJP = "【マスキング】\n\\I[42]猥談耐性 アップ";
const StateTooltipsWillpowerRealityMarbleEN = "Karryn's charm during battle is increased.";
const StateTooltipsWillpowerRealityMarbleJP = "【ゲシュタルト】\n\\I[40]魅力 増加中";
const StateTooltipsWillpowerResistOrgasmEN = "Karryn is trying to resist having an orgasm!\nThe amount of pleasure required to have an orgasm is increased.";
const StateTooltipsWillpowerResistOrgasmJP = "【絶頂抑制】\nイクのを我慢している！\n\\I[42]絶頂の必須快楽度 アップ";
const StateTooltipsWillpowerEdgingControlKarrynEN = "Karryn is trying to edge her next target!\nThe amount of pleasure required to have an ejaculation\nfor her next target is increased.";
const StateTooltipsWillpowerEdgingControlKarrynJP = "【射精管理】\nターゲットの射精を制御する！\n\\I[42]敵が射精に必須の快楽度 アップ";
const StateTooltipsWillpowerEdgingControlEnemyEN = "%1 is being edged by Karryn!\nThe amount of pleasure required to have an ejaculation is increased.";
const StateTooltipsWillpowerEdgingControlEnemyJP = "【射精管理】\n%1の射精を抑制中！\n\\I[42]敵が射精に必須の快楽度 アップ";
const StateTooltipsBonusPierceDamageEN = "%1 will deal extra damage with \\C[4]Pierce-type attacks\\C[0].";
const StateTooltipsBonusPierceDamageJP = "【ボーナスアタック\\I[42]\\C[4]スラスト系\\C[0]】";
const StateTooltipsBonusBluntDamageEN = "%1 will deal extra damage with \\C[2]Blunt-type attacks\\C[0].";
const StateTooltipsBonusBluntDamageJP = "【ボーナスアタック\\I[42]\\C[2]ストライク系\\C[0]】";
const StateTooltipsBonusSlashDamageEN = "%1 will deal extra damage with \\C[3]Slash-type attacks\\C[0].";
const StateTooltipsBonusSlashDamageJP = "【ボーナスアタック\\I[42]\\C[3]スラッシュ系\\C[0]】";
const StateTooltipsEjaculationStunnedEN = "%1 is \\C[18]stunned\\C[0]!\nHis current turn will be skipped.\nHis sexual resists are increased.\nHis evasion and critical evasion are decreased.";
const StateTooltipsEjaculationStunnedJP = "\\C[18]【スタン状態！】\\C[0]\nこのターンは行動不可\n\\I[42]セクハラ耐性 アップ\n\\I[42]回避力 ダウン\n\\I[42]クリティカル回避率 ダウン";
const StateTooltipsSlimeRegenNormalEN = "%1 will regenerate 20% of stamina per turn.";
const StateTooltipsSlimeRegenNormalJP = "【再生能力】\n\\I[42]体力 20％回復\n（毎ターン）";
const StateTooltipsSlimeRegenFourthEN = "%1 will regenerate 5% of stamina per turn.";
const StateTooltipsSlimeRegenFourthJP = "【再生能力】\n\\I[42]体力 5％回復\n（毎ターン）";
const StateTooltipsOrcDefensivePresenceEN = "%1's defense is increased.";
const StateTooltipsOrcDefensivePresenceJP = "【オークの肉壁】\n\\I[42]防御力 アップ";
const StateTooltipsOrcCommandingPresenceOneEN = "%1's attack, defense and evasion are increased.";
const StateTooltipsOrcCommandingPresenceOneJP = "【進撃のオーク】\n\\I[42]攻撃力＆防御力＆回避力 アップ";
const StateTooltipsOrcCommandingPresenceTwoEN = "%1's defense and evasion are increased.";
const StateTooltipsOrcCommandingPresenceTwoJP = "【オークの肉壁】\n\\I[42]防御力＆回避力 アップ";
const StateTooltipsOrcCommandingPresenceThreeEN = "%1's attack is increased.";
const StateTooltipsOrcCommandingPresenceThreeJP = "【進撃のオーク】\n\\I[42]攻撃力 アップ";
const StateTooltipsOrcCommandingPresenceFourEN = "%1's pleasure damage is increased.";
const StateTooltipsOrcCommandingPresenceFourJP = "【オークの豚汁】\n\\I[42]快楽度ダメージ アップ";
const StateTooltipsLizardmanRacialEN = "%1 is with another lizardman.\nAll his stats are increased.";
const StateTooltipsLizardmanRacialJP = "【群れるリザードマン】\n\\I[42]全ステータス アップ";
const StateTooltipsLizardmanRacialWeakEN = "%1 is with another lizardman.\nAll his stats are slightly increased.";
const StateTooltipsLizardmanRacialWeakJP = "【群れるリザードマン】\n\\I[42]全ステータス 少しアップ";
const StateTooltipsYetiHeatAuraEN = "%1's heat aura causes\nvarious debuffs to everyone.";
const StateTooltipsYetiHeatAuraJP = "【熱オーラ放出中】\n\\I[42]全員に様々なデバフ";
const StateTooltipsYetiHeatAuraEnemyOneEN = "%1 is being affected by \\C[18]the Yeti's heat aura\\C[0]!\nHe is dealing lower pleasure damage.";
const StateTooltipsYetiHeatAuraEnemyOneJP = "\\C[18]【イエティの熱オーラ】\\C[0]\n\\I[40]カリンへの快楽度ダメージ ダウン";
const StateTooltipsYetiHeatAuraEnemyTwoEN = "%1 is being affected by \\C[18]the Yetis's heat aura\\C[0]!\nHe is dealing greatly lower pleasure damage.";
const StateTooltipsYetiHeatAuraEnemyTwoJP = "\\C[18]【イエティの熱オーラ】\\C[0]\n\\I[40]カリンへの快楽度ダメージ 大幅ダウン";
const StateTooltipsYetiHeatAuraKarrynOneEN = "Karryn is being affected by \\C[18]the Yeti's heat aura\\C[0]!\nHer stamina regeneration is greatly decreased.";
const StateTooltipsYetiHeatAuraKarrynOneJP = "\\C[18]【イエティの熱オーラ】\\C[0]\n\\I[42]体力回復量 大幅ダウン";
const StateTooltipsYetiHeatAuraKarrynTwoEN = "Karryn is being affected by \\C[18]the Yetis's heat aura\\C[0]!\nHer stamina and willpower regeneration\nare greatly decreased.";
const StateTooltipsYetiHeatAuraKarrynTwoJP = "\\C[18]【イエティの熱オーラ】\\C[0]\n\\I[42]体力回復量＆意志力回復量 大幅ダウン";

const StateTooltipsKarrynClitToyEN = "Karryn has a toy attached to her clitoris!";
const StateTooltipsKarrynClitToyJP = "【オモチャ】\nピンクローター\n\\I[40]クリに装着中！";
const StateTooltipsKarrynPussyToyEN = "Karryn has a toy inserted in her pussy!";
const StateTooltipsKarrynPussyToyJP = "【オモチャ】\nディルド\n\\I[40]マンコに挿入中！";
const StateTooltipsKarrynAnalToyEN = "Karryn has a toy inserted in her anus!";
const StateTooltipsKarrynAnalToyJP = "【オモチャ】\nアナルビーズ\n\\I[40]ケツ穴に挿入中！";
const StateTooltipsEnemyClitToyPinkRotorEN = "%1 has a pink rotor!";
const StateTooltipsEnemyClitToyPinkRotorJP = "ピンクローターを持っている！";
const StateTooltipsEnemyPussyToyPenisDildoEN = "%1 has a penis dildo!";
const StateTooltipsEnemyPussyToyPenisDildoJP = "ディルドを持っている！";
const StateTooltipsEnemyAnalToyAnalBeadsEN = "%1 has anal beads!";
const StateTooltipsEnemyAnalToyAnalBeadsJP = "アナルビーズを持っている！";
const StateTooltipsToiletPinkRotorEN = "Someone left a pink rotor in the stall...";
const StateTooltipsToiletPinkRotorJP = "ピンクローターが放置されている……";
const StateTooltipsToiletPenisDildoEN = "Someone left a penis dildo in the stall...";
const StateTooltipsToiletPenisDildoJP = "ディルドが放置されている……";
const StateTooltipsToiletAnalBeadsEN = "Someone left anal beads in the stall...";
const StateTooltipsToiletAnalBeadsJP = "アナルビーズが放置されている……";
const StateWaitressNoAlcoholEN = "Karryn is refusing all \\C[2]attempts to get her to drink\\C[0].\n%1 Willpower will be required to refuse a drink.\nHer Willpower Regen will also be greatly reduced after refusing a drink.";
const StateWaitressNoAlcoholJP = "\\C[2]【飲酒を拒否中】\\C[0]\n全ての飲み物を断っている\n\\I[42]飲み物を断るのに必要な意志力：%1\n\\I[42]飲み物を断った時は意志力回復量 大幅ダウン";
const StateWaitressDirtyMugsSingularEN = "%1 has a dirty mug waiting to be collected.";
const StateWaitressDirtyMugsSingularJP = "【回収待ちのジョッキ】\n1杯";
const StateWaitressDirtyMugsPluralEN = "%1 has %2 dirty mugs waiting to be collected.";
const StateWaitressDirtyMugsPluralJP = "【回収待ちのジョッキ】\n%2杯";
const StateWaitressDirtyGlassesSingularEN = "%1 has a dirty glass waiting to be collected.";
const StateWaitressDirtyGlassesSingularJP = "【回収待ちのグラス】\n1杯";
const StateWaitressDirtyGlassesPluralEN = "%1 has %2 dirty glasses waiting to be collected.";
const StateWaitressDirtyGlassesPluralJP = "【回収待ちのグラス】\n%2杯";
const StateWaitressAvailableMugsSingularEN = "There is only one clean mug available.";
const StateWaitressAvailableMugsSingularJP = "【キレイなジョッキ】\n1杯";
const StateWaitressAvailableMugsPluralEN = "There are %1 clean mugs available.";
const StateWaitressAvailableMugsPluralJP = "【キレイなジョッキ】\n%1杯";
const StateWaitressAvailableGlassesSingularEN = "There is only one clean glass available.";
const StateWaitressAvailableGlassesSingularJP = "【キレイなグラス】\n1杯";
const StateWaitressAvailableGlassesPluralEN = "There are %1 clean glasses available.";
const StateWaitressAvailableGlassesPluralJP = "【キレイなグラス】\n%1杯";
const StateWaitressKarrynLocationEN = "Karryn is at %1.";
const StateWaitressKarrynLocationJP = "【現在の場所】\n%1";
const StateWaitressTableALocationEN = "Karryn is at Table A.";
const StateWaitressTableALocationJP = "【現在のテーブル】\nＡ";
const StateWaitressTableBLocationEN = "Karryn is at Table B.";
const StateWaitressTableBLocationJP = "【現在のテーブル】\nＢ";
const StateWaitressTableCLocationEN = "Karryn is at Table C.";
const StateWaitressTableCLocationJP = "【現在のテーブル】\nＣ";
const StateWaitressTableDLocationEN = "Karryn is at Table D.";
const StateWaitressTableDLocationJP = "【現在のテーブル】\nＤ";
const StateWaitressSleepingEN = "%1 is drunkenly sleeping!\nKick them out of the bar!";
const StateWaitressSleepingJP = "【泥酔中！】\n追い払うべき迷惑客";
const StateWaitressDrinkingDrinkEN = "%1 is drinking a %2.";
const StateWaitressDrinkingDrinkJP = "%2を飲んでいる";
const StateReceptionistVisitorUnknownBeforeEN = "%1 has not stated the purpose of their visitation yet.";
const StateReceptionistVisitorUnknownBeforeJP = "目的はまだ不明";
const StateReceptionistVisitorUnknownAfterEN = "%1 is waiting for Karryn's response.";
const StateReceptionistVisitorUnknownAfterJP = "受付嬢の対応待ち";
const StateReceptionistVisitorWritingBeforeEN = "%1 is holding the papers they need to fill out.";
const StateReceptionistVisitorWritingBeforeJP = "未記入の申込書を持っている";
const StateReceptionistVisitorWritingDuringEN = "%1 is filling out the paperwork.";
const StateReceptionistVisitorWritingDuringJP = "申込書に記入中……";
const StateReceptionistVisitorWritingAfterEN = "%1 is holding the papers they filled out.";
const StateReceptionistVisitorWritingAfterJP = "記入済みの申込書を持っている";
const StateReceptionistVisitorPaperBeforeEN = "%1's %2 pages of paperwork need to be processed.";
const StateReceptionistVisitorPaperBeforeJP = "%2ページある申込書を持っている";
const StateReceptionistVisitorPaperAfterEN = "%1's %2 pages of paperwork are being processed.";
const StateReceptionistVisitorPaperAfterJP = "%2ページの申込書を記入中……";
const StateReceptionistVisitorTimeEN = "%1's paperwork has been processed.\nThey are allowed %2 minutes for visitation.";
const StateReceptionistVisitorTimeJP = "申込書の処理が完了\n\\I[42]所有時間：%2分";
const StateReceptionistVisitorMovingEN = "%1 is currently walking.";
const StateReceptionistVisitorMovingJP = "受付デスクに向かっている……";
const StateReceptionistVisitorSittingEN = "%1 is sitting in their seat.";
const StateReceptionistVisitorSittingJP = "座って待機している";
const StateReceptionistVisitorLineEN = "%1 is waiting on line in front of the desk.";
const StateReceptionistVisitorLineJP = "並んで待機中";
const StateReceptionistVisitorDeskEN = "%1 is standing in front of the desk.";
const StateReceptionistVisitorDeskJP = "カリンの前に立っている";

const DesireTooltipsMouthIntroEN = "Karryn's Mouth Desire represents her desire\nto have other men's body parts in her mouth\nand to taste their various bodily fluids.";
const DesireTooltipsMouthIntroJP = "\\C[1]【口欲】\\C[0]\n\\C[27]カリンの性感帯の１つ、クチの欲求。\\C[0]\nその舌は男のカラダのあらゆる部分を感じ、\n分泌される汁を味わい尽くしてしまう。\n何度もしゃぶり、体液を飲まされる事で\n口内から全身に渡って性衝動が溢れていく。";
const DesireTooltipsBoobsIntroEN = "Karryn's Boobs Desire represents her desire\nto have her perfect breasts be squeezed,\nto have her nipples be squeezed hard,\nand to have hard objects inbetween them.";
const DesireTooltipsBoobsIntroJP = "\\C[1]【乳欲】\\C[0]\n\\C[27]カリンの性感帯の１つ、おっぱいの欲求。\\C[0]\n完璧に実った乳房は揉みしだかれる事を、\n硬く突起した乳首はイジり倒される事を望んでいる。\n胸への刺激は恋のようなドキドキを生み、\n強い性衝動へと駆られてしまう。";
const DesireTooltipsPussyIntroEN = "Karryn's Pussy Desire represents her desire\nto have her clitoris be played with and\nto have increasingly bigger objects\ninserted into her pussy.";
const DesireTooltipsPussyIntroJP = "\\C[1]【膣欲】\\C[0]\n\\C[27]カリンの性感帯の１つ、マンコの欲求。\\C[0]\n誠実な生き方を貫いてきた性器にとって、\nクリと穴への刺激は強烈な興奮材料になる。\nあらゆる手段で濡らしほぐされた膣は、\n腹の奥から性衝動を昂ぶらせていく。";
const DesireTooltipsButtIntroEN = "Karryn's Butt Desire represents her desire\nto have her big butt be groped by others\nand to foreign objects be put up her ass.";
const DesireTooltipsButtIntroJP = "\\C[1]【尻欲】\\C[0]\n\\C[27]カリンの性感帯の１つ、ケツの欲求。\\C[0]\n誰もが振り返る自慢の巨尻は\n家畜のようにしつけられ、ホジられる事を望んでいる。\n呼び起こされたマゾヒズムは好奇心から\n性衝動を抑えられなくなってしまう。";
const DesireTooltipsCockIntroEN = "Karryn's Cock Desire represents her desire\nto know everything there is know about\neveryone's cock through sight, hearing,\nsmell, taste and touch.";
const DesireTooltipsCockIntroJP = "\\C[1]【棒欲】\\C[0]\n\\C[27]カリンの性感帯の１つ、チンポへの欲求。\\C[0]\n長らく持ち続けた勃起チンポへの興味は強く、\n五感を通してその全てを知りたがっている。\nチンポが持つ想像以上の魅力を知るたびに、\n性衝動のリミッターは完全に崩壊していく。";

const DesireTooltipsBodyDesireRequirementsUnknownEN = "\\I[40] 50    \\I[41]   Soft Petting\n\\I[40] 75    \\I[41]   Heavy Petting\n\\I[40]100   \\I[41]   Sex\n(Default Desire Requirements)";
const DesireTooltipsBodyDesireRequirementsUnknownJP = "\\I[40]ソフト愛撫\\I[41]50\n\\I[40]ハード愛撫\\I[41]75\n\\I[40]セックス\\I[41]100\n （全てデフォルト値）";
const DesireTooltipsCockDesireRequirementsUnknownEN = "\\I[40] 50    \\I[41]   Handjob\n\\I[40] 65    \\I[41]   Service\n\\I[40] 85    \\I[41]   Penetration\n(Default Desire Requirements)";
const DesireTooltipsCockDesireRequirementsUnknownJP = "\\I[40]手コキ\\I[41]50\n\\I[40]挿入なしプレイ\\I[41]65\n\\I[40]挿入セックス\\I[41]85\n （全てデフォルト値）";
const DesireTooltipsDesireRequirementsKnownEN = "Desire Requirements";
const DesireTooltipsDesireRequirementsKnownJP = "";
const DesireTooltipsDesireRequirementsKnownFormatEN = "";
const DesireTooltipsDesireRequirementsKnownFormatJP = "\\I[40]\\C[27]%1\\I[41]\\C[0]%2";


const DesireTooltipsMouthDesireDebuffOneEN = "\\I[56]\\C[2]Karryn's Accuracy will start decreasing\n\\C[0]at 50 Mouth Desire and above from\nunconsciously opening her mouth wider\nto shout out her attacks beforehand.";
const DesireTooltipsMouthDesireDebuffOneJP = "\\I[56]口欲が50に達すると、\n\\I[0]口寂しさから気が散ってしまい\n\\I[0]\\C[2]攻撃が命中しにくくなる……。\\C[0]";
const DesireTooltipsMouthDesireDebuffTwoEN = "\\I[56]\\C[2]Karryn's Critical Damage will start decreasing\n\\C[0]at 100 Mouth Desire and above from wasting\ntime on excessively licking her lips to satisfy\nher urges to have something else there.";
const DesireTooltipsMouthDesireDebuffTwoJP = "\\I[56]口欲が100に達すると、\n\\I[0]“何か”をしゃぶりたい気持ちが邪魔して\n\\I[0]\\c[2]クリティカルダメージが低下してしまう……。\\C[0]";

const DesireTooltipsBoobsDesireDebuffOneEN = "\\I[56]\\C[2]Karryn's Evasion will start decreasing\n\\C[0]at 50 Boobs Desire from being too\ndistracted by her nipples demanding\nsome love and attention.";
const DesireTooltipsBoobsDesireDebuffOneJP = "\\I[56]乳欲が50に達すると、\n\\I[0]ビンカンになっている乳首が気になって\n\\I[0]\\C[2]攻撃を避けにくくなってしまう……。\\C[0]";
const DesireTooltipsBoobsDesireDebuffTwoEN = "\\I[56]\\C[2]Karryn's Critical Rate will start decreasing\n\\C[0]at 100 Boobs Desire from the pressure on \nher chest making her feel like they are\ntrying to escape.";
const DesireTooltipsBoobsDesireDebuffTwoJP = "\\I[56]乳欲が100に達すると、\n\\I[0]爆乳から誘惑フェロモンが漏れて\n\\I[0]\\C[2]クリティカルヒットは出づらくなっていく……。\\C[0]";

const DesireTooltipsPussyDesireDebuffOneEN = "\\I[56]\\C[2]Karryn's Strip Resist will start decreasing\n\\C[0]at 50 Pussy Desire from wanting to free\nher vagina from its pulsing heat.";
const DesireTooltipsPussyDesireDebuffOneJP = "\\I[56]膣欲が50に達すると、\n\\I[0]股間が火照ってカラダ全体の体温も増すため\n\\I[0]\\C[2]脱がされやすくなってしまう……。\\C[0]";
const DesireTooltipsPussyDesireDebuffTwoEN = "\\I[56]\\C[2]Karryn's Critical Evasion will start decreasing\n\\C[0]at 100 Pussy Desire from the phantom ache\naround her vulva distracting her. ";
const DesireTooltipsPussyDesireDebuffTwoJP = "\\I[56]膣欲が100に達すると、\n\\I[0]マン奥の疼きを収めるのに夢中で\n\\I[0]\\C[2]クリティカルを避けづらくなる……。\\C[0]";

const DesireTooltipsButtDesireDebuffOneEN = "\\I[56]\\C[2]Karryn's Defense will start decreasing\n\\C[0]at 50 Butt Desire from unconsciously messing\nup her stance by showing off her ass.";
const DesireTooltipsButtDesireDebuffOneJP = "\\I[56]尻欲が50に達すると、\n\\I[0]無意識にケツがオスを求め出し\n\\I[0]\\C[2]守備が疎かになってしまう……。\\C[0]";
const DesireTooltipsButtDesireDebuffTwoEN = "\\I[56]\\C[2]Karryn's Pet Resist will start decreasing\n\\C[0]at 100 Butt Desire from wanting a man\nto vigorously attack her naughty ass.";
const DesireTooltipsButtDesireDebuffTwoJP = "\\I[56]尻欲が100に達すると、\n\\I[0]飢えたエロ尻で男を誘ってしまい\n\\I[0]\\C[2]愛撫を受け入れやすくなる……。\\C[0]";

const DesireTooltipsCockDesireDebuffOneEN = "\\I[56]\\C[2]Karryn's Attack will start decreasing\n\\C[0]at 50 Cock Desire from unconsciously\nholding back her full power in case\nshe accidently hits them in the groin.";
const DesireTooltipsCockDesireDebuffOneJP = "\\I[56]棒欲が50に達すると、\n\\I[0]男の股間に意識を持っていかれて\n\\I[0]\\C[2]攻撃するパワーが弱まってしまう……。\\C[0]";
const DesireTooltipsCockDesireDebuffTwoEN = "\\I[56]\\C[2]Karryn's Sex Resist will start decreasing\n\\C[0]at 100 Cock Desire from the thoughts in\nher head telling her to just submit to cock.";
const DesireTooltipsCockDesireDebuffTwoJP = "\\I[56]棒欲が100に達すると、\n\\I[0]勃起チンポへの忠誠心が膨らんでしまい\n\\I[0]\\C[2]セックスへの抵抗は薄れていく……。\\C[0]";

const DesireTooltipsMouthDesireTopBuffEN = "\\I[56]When Karryn's Mouth Desire is her top desire,\n\\C[11]her enemies' Defense will be lowered\n\\C[0]because of her seductively inviting mouth\nand lewd tongue movements.";
const DesireTooltipsMouthDesireTopBuffJP = "\\I[56]性欲の中で口欲が最も高い時、\n\\I[0]卑猥に誘う舌先に魅了された敵は\n\\I[0]\\C[11]カリンからの攻撃に対し守備が甘くなる。\\C[0]";
const DesireTooltipsBoobsDesireTopBuffEN = "\\I[56]When Karryn's Boobs Desire is her top desire,\n\\C[11]her enemies' Evasion will be lowered\n\\C[0]because they can't keep their eyes off the tits\nshe keeps emphasizing with every move.";
const DesireTooltipsBoobsDesireTopBuffJP = "\\I[56]性欲の中で乳欲が最も高い時、\n\\I[0]爆乳から視線を逸らせなくなった敵は\n\\I[0]\\C[11]カリンからの攻撃を避けにくくなる。\\C[0]";
const DesireTooltipsPussyDesireTopBuffEN = "\\I[56]When Karryn's Pussy Desire is her top desire,\n\\C[11]her enemies have an increased chance of\ngetting Horny every turn \\C[0]because of the\npheromones leaking out of her honey trap.";
const DesireTooltipsPussyDesireTopBuffJP = "\\I[56]性欲の中で膣欲が最も高い時、\n\\I[0]カリンの股間から放たれるフェロモンのせいで\n\\I[0]\\C[27]敵は毎ターン興奮する可能性がある。\\C[0]";
const DesireTooltipsButtDesireTopBuffEN = "\\I[56]When Karryn's Butt Desire is her top desire,\n\\C[11]her enemies' Accuracy will be lowered\n\\C[0]because they're too focused on chasing \nher swaying meaty hips.";
const DesireTooltipsButtDesireTopBuffJP = "\\I[56]性欲の中で尻欲が最も高い時、\n\\I[0]揺れるケツを追いかけるのに必死で\n\\I[0]\\C[11]敵はカリンに攻撃を当てにくくなる。\\C[0]";
const DesireTooltipsCockDesireTopBuffEN = "\\I[56]When Karryn's Cock Desire is her top desire,\n\\C[27]her Cock Desire Gain Rate will be increased\n\\C[0]because she can't stop thinking about cock.";
const DesireTooltipsCockDesireTopBuffJP = "\\I[56]性欲の中で棒欲が最も高い時、\n\\I[0]頭の中は勃起チンポでいっぱいになり\n\\I[0]\\C[27]棒欲がどんどん上昇してしまう……。\\C[0]";

const VirginityTextEN = "Sex Status";  //currently unused
const VirginityTextJP = "セックスのステータス"; //currently unused
const VirginityYesEN = "\\C[13]Virgin\\C[0]";
const VirginityYesJP = "\\C[13]処女\\C[0]";
const VirginityNoEN = "\\C[27]Non-virgin\\C[0]";
const VirginityNoJP = "\\C[27]非処女\\C[0]";
const VirginActorTextEN = "First Time With:"; //currently unused
const VirginActorTextJP = "初体験："; //currently unused
const VirginActorNoneEN = "---------"; //currently unused
const VirginActorNoneJP = "---------"; //currently unused

const ResistNameEN = " Resist";
const ResistNameJP = "耐性";
const SafeModeEN = "Safe Mode"; //currently unused
const SafeModeJP = "Safe Mode"; //currently unused
const ReplayModeEN = "Replay Mode"; //currently unused
const ReplayModeJP = "Replay Mode"; //currently unused
const PixelMovementEN = "Pixel Movement"; //currently unused
const PixelMovementJP = "Pixel Movement"; //currently unused
const BattleLogEN = "History"; 
const BattleLogJP = "ログ";
const BattleStatusEN = "Status"; 
const BattleStatusJP = "ステータス";
const EdictsEN = "Edicts";
const EdictsJP = "指令";
const EdictCostEN = "Edict Cost";
const EdictCostJP = "指令コスト";
const QuestLogEN = "Radio"; //currently unused
const QuestLogJP = "無線";//currently unused
const GlossaryEN = "Notes";//currently unused
const GlossaryJP = "メモ";//currently unused
const PassiveObtainedOnEN = "Obtained on Day %1";
const PassiveObtainedOnJP = "%1日目に取得";
const StaminaRecoveryEN = "\\C[11]%1's stamina is restored by %2 points!";
const StaminaRecoveryJP = "\\C[11]%1の体力が%2回復！";
const EnergyRecoveryEN = "\\C[4]%1's energy is restored by %2 points!";
const EnergyRecoveryJP = "\\C[4]%1の精力が%2回復！";

const KarrynTauntMessageEN = "Karryn starts taunting!";
const KarrynTauntMessageJP = "カリンは挑発した！";
const KarrynFlauntMessageEN = "Karryn starts flaunting!";
const KarrynFlauntMessageJP = "カリンは自慢のボディで誘惑した！";

const AronCallLizardmanFailEN = "However, no one showed up...!";
const AronCallLizardmanFailJP = "しかし、誰も現れなかった……！";

const ActorGainPleasureEN = "\\C[27]%1's pleasure increases by %2!";
const ActorGainPleasureJP = "\\C[27]%1の快楽度が%2アップ！";
const ActorGainPleasure_SightEN = "\\C[27]%1's pleasure increases by %2 just from being looked at!";
const ActorGainPleasure_SightJP = "\\C[27]%1は見られて快楽度が%2アップ！";
const ActorGainPleasure_ToyEN = "\\C[27]%1's pleasure increases by %2 from the toys!";
const ActorGainPleasure_ToyJP = "\\C[27]%1は装着されたオモチャで快楽度が%2アップ！";

const PleasurePercentTextEN = " percent";
const PleasurePercentTextJP = "％";

const EnemyGainPleasure_Percent_EN = "\\C[1]%1 is %2 closer to ejaculating!";
const EnemyGainPleasure_Percent_JP = "\\C[1]%1の射精感が%2上昇！";
const EnemyGainPleasure_Value_EN = "\\C[1]%1's pleasure increases by %2!";
const EnemyGainPleasure_Value_JP = "\\C[1]%1の射精感が%2上昇！";
const ActorSingleOrgasmEN = "\\C[31]%1 loses %2 points of energy!";
const ActorSingleOrgasmJP = "\\C[31]%1は精力を%2失った！";
const ActorMultipleOrgasmEN = "\\C[1]%1 has %3 consecutive orgasms! \\C[31]%1 loses %2 points of energy!";
const ActorMultipleOrgasmJP = "\\C[1]%1は%3回連続イッた！\\C[31]精力を%2失った！";

const EjaculatePussyEN = "\\C[27]%1 invades %2's womb with \\C[1]%3 ml of semen!";
const EjaculatePussyJP = "\\C[27]膣内\\C[0]に出されたザーメン量、\\C[1]%3ml\\C[0]！！";
const EjaculateAnalEN = "\\C[27]%1 fills up %2's ass with \\C[1]%3 ml of semen!";
const EjaculateAnalJP = "\\C[27]アナル\\C[0]に出されたザーメン量、\\C[1]%3ml\\C[0]！！";
const EjaculateMouthEN = "\\C[27]%1 coats %2's throat with \\C[1]%3 ml of semen!";
const EjaculateMouthJP = "\\C[27]クチ\\C[0]に出されたザーメン量、\\C[1]%3ml\\C[0]！！";

const BukkakeFaceEN = "\\C[27]%1 covers %2's face with \\C[1]%3 ml of semen!";
const BukkakeFaceJP = "\\C[27]顔\\C[0]に付いたザーメン量、\\C[1]%3ml\\C[0]！！";
const BukkakeBoobsEN = "\\C[27]%1 cums on %2's boobs with \\C[1]%3 ml of semen!";
const BukkakeBoobsJP = "\\C[27]おっぱい\\C[0]に付いたザーメン量、\\C[1]%3ml\\C[0]！！";
const BukkakeArmsEN = "\\C[27]%1 cums on %2's arms with \\C[1]%3 ml of semen!";
const BukkakeArmsJP = "\\C[27]腕\\C[0]に付いたザーメン量、\\C[1]%3ml\\C[0]！！";
const BukkakeLegsEN = "\\C[27]%1 cums on %2's legs with \\C[1]%3 ml of semen!";
const BukkakeLegsJP = "\\C[27]足\\C[0]に付いたザーメン量、\\C[1]%3ml\\C[0]！！";
const BukkakeButtEN = "\\C[27]%1 cums on %2's butt with \\C[1]%3 ml of semen!";
const BukkakeButtJP = "\\C[27]ケツ\\C[0]に付いたザーメン量、\\C[1]%3ml\\C[0]！！";

const ActorFirstKissMouthEN = "\\C[18]Karryn just had her first kiss!!!";
const ActorFirstKissMouthJP = "\\C[18]カリンはファーストキスを奪われてしまった！！！";
const ActorFirstKissCockEN = "\\C[18]Oh no! Karryn's first kiss was with someone's dick!!!";
const ActorFirstKissCockJP = "\\C[18]なんと！カリンのファーストキスの相手はチンポの先っちょになってしまった！！！";
const ActorFirstKissAnusEN = "\\C[18]Oh no! Karryn's first kiss was with someone's anus!!!";
const ActorFirstKissAnusJP = "\\C[18]なんと！カリンのファーストキスの相手はケツの穴になってしまった！！！";
const ActorLostPussyVirginityEN = "\\C[18]Karryn's hymen broke!!!!";
const ActorLostPussyVirginityJP = "\\C[18]カリンは処女を失った！！！！！";
const ActorLostAnalVirginityEN = "\\C[18]Karryn lost her anal virginity!!";
const ActorLostAnalVirginityJP = "\\C[18]カリンはアナルの処女を失った！！！！！";

const InvasionNoiseLevelOneEN = "\\C[8]Faint noises can be heard outside.";
const InvasionNoiseLevelOneJP = "\\C[8]外で何やら物音がしているようだ……。";
const InvasionNoiseLevelTwoEN = "\\C[7]Faint movement can be heard outside.";
const InvasionNoiseLevelTwoJP = "\\C[7]外からわずかに騒音が聞こえる…。";
const InvasionNoiseLevelThreeEN = "\\C[2]Inaudible talking can be heard outside.";
const InvasionNoiseLevelThreeJP = "\\C[2]別の場所から話声が聞こえる。";
const InvasionNoiseLevelFourEN = "\\C[10]Someone is shouting outside.";
const InvasionNoiseLevelFourJP = "\\C[10]近くで騒ぎ声が聞こえる！";
const InvasionBattleStartEN = "A bunch of people barge into the room!";
const InvasionBattleStartJP = "侵入者が現れた！！";

const MasturbateBattleTouchClitEN = "Karryn starts rubbing her clitoris!";
const MasturbateBattleTouchClitJP = "カリンはクリトリスを刺激し始めた！";
const MasturbateBattleTouchPussyEN = "Karryn starts rubbing her pussy lips!";
const MasturbateBattleTouchPussyJP = "カリンはマンコを刺激し始めた！";
const MasturbateBattleTouchAnalEN = "Karryn starts touching her anus!";
const MasturbateBattleTouchAnalJP = "カリンはアナルを刺激し始めた！";
const MasturbateBattleTouchBoobsEN = "Karryn starts squeezing her boobs!";
const MasturbateBattleTouchBoobsJP = "カリンはおっぱいを揉みしだき始めた！";
const MasturbateBattleTouchNipplesEN = "Karryn starts pinching her nipples!";
const MasturbateBattleTouchNipplesJP = "カリンは乳首をつまんで刺激し始めた！";

const MasturbateBattleFingerPussyEN = "Karryn starts fingering her pussy!";
const MasturbateBattleFingerPussyJP = "カリンはマンコに指を挿れて出し入れを始めた！";
const MasturbateBattleFingerAnalEN = "Karryn starts fingering her anus!";
const MasturbateBattleFingerAnalJP = "カリンはアナルに指を挿れて出し入れを始めた！";

const MasturbateBattleSuckFingersEN = "Karryn starts sucking on her fingers!";
const MasturbateBattleSuckFingersJP = "カリンは指をしゃぶり始めた！";
const MasturbateBattleSuckNipplesEN = "Karryn starts sucking on her own nipples!";
const MasturbateBattleSuckNipplesJP = "カリンは乳首をしゃぶり始めた！";

const SkillDescriptionNoValidTargetsEN = "There is no valid target.";
const SkillDescriptionNoValidTargetsJP = "※使える相手がいません。";
const SkillDescriptionNotEnoughDesireEN = "Not enough desire to do this.";
const SkillDescriptionNotEnoughDesireJP = "※性欲が不足しています。";
const SkillDescriptionCantDoThisEN = "Can't use this skill right now.";
const SkillDescriptionCantDoThisJP = "※今はまだ使えません。";
const SkillDescriptionHandsBusyEN = "Need a free hand to do this.";
const SkillDescriptionHandsBusyJP = "※手の空きが必要です。";
const SkillDescriptionNotWetEN = "Not wet enough to do this.";
const SkillDescriptionNotWetJP = "※濡れていないので出来ません。";

const TitleDescriptionFirstTimeTitleEquipEN = "\\C[0](Equip once to get effects for this playthrough)";
const TitleDescriptionFirstTimeTitleEquipJP = "\\C[0](１度装備すれば効果を取得可能)";

const CharmEquipReqTextEN = "Charm Requirement: ";
const CharmEquipReqTextJP = "必要な魅力： ";
const GrowthRateTextEN = " Growth";
const GrowthRateTextJP = "成長度";

const RemResultsVictoryEN = "Battle Victory!";
const RemResultsVictoryJP = "勝利！！";
const RemResultsDefeatEN = "Battle Defeat...";
const RemResultsDefeatJP = "敗北した……";
const RemResultsAbortedEN = "Battle Aborted.";
const RemResultsAbortedJP = "撤退した……";
const RemResultsMasturbateBattleNoneEN = "Karryn is tired...";
const RemResultsMasturbateBattleNoneJP = "カリンは疲れてしまった……";
const RemResultsMasturbateBattleSingleEN = "Karryn came!";
const RemResultsMasturbateBattleSingleJP = "カリンは満足した！！";
const RemResultsMasturbateBattlePluralEN = "Karryn came %1 times!";
const RemResultsMasturbateBattlePluralJP = "カリンは%1回絶頂した！！！";
const RemResultsJobBattleEndEN = "Karryn's shift has ended.";
const RemResultsJobBattleEndJP = "■ アルバイトタイム 終了 ■";
const RemResultsGainedExpEN = "EXP Gained";
const RemResultsGainedExpJP = "獲得経験値";
const RemResultsLevelUpEN = "LEVEL UP!";
const RemResultsLevelUpJP = "レベルアップ！";
const RemResultsOrderIncreaseEN = "\\I[408]\\C[11]Restored %1 Prison Order!";
const RemResultsOrderIncreaseJP = "\\I[408]\\C[11]秩序が%1上昇した！";
const RemResultsOrderDecreaseEN = "\\I[409]\\C[10]Lost %1 Prison Order...";
const RemResultsOrderDecreaseJP = "\\I[409]\\C[10]秩序が%1低下した……。";
const RemResultsFundingIncreaseEN = "\\I[400]\\C[11]Gained %1 G!";
const RemResultsFundingIncreaseJP = "\\I[400]\\C[11]資金が%1Ｇ増えた！";
const RemResultsFundingDecreaseEN = "\\I[401]\\C[10]Lost %1 G...";
const RemResultsFundingDecreaseJP = "\\I[401]\\C[10]資金が%1Ｇ減った……。";
const RemResultsFatigueIncreaseEN = "\\I[389]\\C[10]Fatigue increased by %1%...";
const RemResultsFatigueIncreaseJP = "\\I[389]\\C[10]疲労を%1％蓄積した……。";
const RemResultsFatigueDecreaseEN = "\\I[388]\\C[11]Fatigue decreased by %1%!";
const RemResultsFatigueDecreaseJP = "\\I[388]\\C[11]疲労が%1％減少した！";

const CockinessIncreasedTextEN = "\\I[354]\\C[11]Cockiness increased to %1%!";
const CockinessIncreasedTextJP = "\\I[354]\\C[11]大胆さが%1％まで上昇した！";
const CockinessDecreasedTextEN = "\\I[489]\\C[10]Cockiness has fallen to %1%...";
const CockinessDecreasedTextJP = "\\I[489]\\C[10]大胆さが%1％に減少した……。";
const CockinessResetEN = "\\I[489]\\C[10]Cockiness reset to zero...";
const CockinessResetJP = "\\I[489]\\C[10]大胆さがリセットされた……。";
const CockinessMaxxedOutEN = "\\I[354]\\C[11]Cockiness is at 100%!";
const CockinessMaxxedOutJP = "\\I[354]\\C[11]大胆さが100％になった！";

const RemResultsSubduedWithAttackEN = "\\I[74]\\C[11]Subdued %1 %2 physically!";
const RemResultsSubduedWithAttackJP = "\\I[74]\\C[11]%1人を撃退した！";
const RemResultsSubduedSexuallyEN = "\\I[43]\\C[27]Subdued %1 %2 sexually!";
const RemResultsSubduedSexuallyJP = "\\I[43]\\C[27]%1人を性的に屈服させた！";
const RemResultsSubduedWithAttackAndSexuallyEN = "\\I[291]\\C[11]Subdued %1 %2 physically and \\C[27]%3 %4 sexually\\C[11]!";
const RemResultsSubduedWithAttackAndSexuallyJP = "\\I[291]\\C[11]%1人を撃退し、%3人は性的に屈服させた！";
const RemResultsKarrynOrgasmSingularEN = "\\I[99]\\C[27]Orgasmed once!";
const RemResultsKarrynOrgasmSingularJP = "\\I[99]\\C[27]1回だけ絶頂した！";
const RemResultsKarrynOrgasmPluralEN = "\\I[99]\\C[27]Orgasmed %1 times!";
const RemResultsKarrynOrgasmPluralJP = "\\I[99]\\C[27]%1回絶頂した！";
const RemResultsKarrynMasturbatedInBattleSingularEN = "\\I[46]\\C[27]Masturbated during battle once!";
const RemResultsKarrynMasturbatedInBattleSingularJP = "\\I[46]\\C[27]人前で1回だけオナニーした！";
const RemResultsKarrynMasturbatedInBattlePluralEN = "\\I[46]\\C[27]Masturbated during battle %1 times!";
const RemResultsKarrynMasturbatedInBattlePluralJP = "\\I[46]\\C[27]人前で%1回オナニーした！";
const RemResultsKarrynKissEN = "\\I[288]\\C[27]Kissed %1 %2!";
const RemResultsKarrynKissJP = "\\I[288]\\C[27]%1人とキスした！";
const RemResultsKarrynHandjobEN = "\\I[289]\\C[27]Gave handjobs to %1 %2!";
const RemResultsKarrynHandjobJP = "\\I[289]\\C[27]%1人に手コキした！";
const RemResultsKarrynBlowjobEN = "\\I[294]\\C[27]Gave blowjobs to %1 %2!";
const RemResultsKarrynBlowjobJP = "\\I[294]\\C[27]%1人にフェラした！";
const RemResultsKarrynTitjobEN = "\\I[221]\\C[27]Gave titjobs to %1 %2!";
const RemResultsKarrynTitjobJP = "\\I[221]\\C[27]%1人にパイズリした！";
const RemResultsKarrynFootjobEN = "\\I[219]\\C[27]Gave footjobs to %1 %2!";
const RemResultsKarrynFootjobJP = "\\I[219]\\C[27]%1人に足コキした！";
const RemResultsKarrynRimjobEN = "\\I[299]\\C[27]Gave rimjobs to %1 %2!";
const RemResultsKarrynRimjobJP = "\\I[299]\\C[27]%1人にケツ舐めした！";
const RemResultsKarrynVaginalSexEN = "\\I[295]\\C[27]Had vaginal sex with %1 %2!";
const RemResultsKarrynVaginalSexJP = "\\I[295]\\C[27]%1人とマンコでセックスした！";
const RemResultsKarrynAnalSexEN = "\\I[296]\\C[27]Had anal sex with %1 %2!";
const RemResultsKarrynAnalSexJP = "\\I[296]\\C[27]%1人とアナルでセックスした！";


const RemParamLevelGainedSingularEN = "\\C[16]%3Gained %1 %2 Level!";
const RemParamLevelGainedSingularJP = "\\C[16]%3%2レベルが %1 上がった！";
const RemParamLevelGainedPluralEN = "\\C[16]%3Gained %1 %2 Levels!!";
const RemParamLevelGainedPluralJP = "\\C[16]%3%2レベルが %1 上がった！";

const RemWardenLevelRequireSingularEN = "\\C[8]\\I[42]%1 more stat level until the next Warden Level!";
const RemWardenLevelRequireSingularJP = "\\C[8]\\I[42]次の看守レベルまで、あと%1のステータスレベル！";
const RemWardenLevelRequirePluralEN = "\\C[8]\\I[42]%1 more stat levels until the next Warden Level!";
const RemWardenLevelRequirePluralJP = "\\C[8]\\I[42]次の看守レベルまで、あと%1のステータスレベル！";
const RemWardenLevelUpEN = "\\I[352]\\C[11]LEVEL UP!!! \\C[16]%1 has reached Warden Level %2!!";
const RemWardenLevelUpJP = "\\I[352]\\C[11]レベルアップ！！\\C[16]%1は看守レベルが %2 になった！！";
const RemWardenLevelLimitReachedEN = "\\I[353]\\C[8]%1 has reached the Warden Level Limit and will not gain any more stat levels.";
const RemWardenLevelLimitReachedJP = "\\I[353]\\C[8]看守レベルが上限に達しているためこれ以上ステータスレベルを上げられません。";

const RemResultsPassivesTitleEN = "New Passives Unlocked!!";
const RemResultsPassivesTitleJP = "新パッシブ開放！！";

const RemDailyReportDayCountEN = "\\#\\{\\{Day %1: Daily Report\\}\\}";
const RemDailyReportDayCountJP = "\\#\\{\\{■ 報告書 ～%1日目～ ■\\}\\}";
const RemDailyReportAnarchyNoLimitEN = "\\I[377]Day %2 of Level %1 being in \\C[7]Anarchy\\C[0].";
const RemDailyReportAnarchyNoLimitJP = "\\I[377]監獄レベル%1は%2日間\\C[7]無法状態\\C[0]です。";
const RemDailyReportAnarchyLimitBefore_singularEN = "\\I[377]Day %2 of Level %1 being in \\C[7]Anarchy\\C[0]. Control might be further decreased starting tomorrow from unrest!";
const RemDailyReportAnarchyLimitBefore_singularJP = "\\I[377]監獄レベル%1は%2日間\\C[7]無法状態\\C[0]です。そのため、明日には統制力が更に減少するおそれがあります！";
const RemDailyReportAnarchyLimitBefore_pluralEN = "\\I[377]Day %2 of Level %1 being in \\C[7]Anarchy\\C[0]. Control might further decrease in about %3 days from unrest!";
const RemDailyReportAnarchyLimitBefore_pluralJP = "\\I[377]監獄レベル%1は%2日間\\C[7]無法状態\\C[0]です。そのため、%3日後には統制力が更に減少するかもしれません！";
const RemDailyReportAnarchyPastLimitEN = "\\I[377]Day %2 of Level %1 being in Anarchy. Control is further decreased by \\C[18]-%3\\C[0] due to unrest!";
const RemDailyReportAnarchyPastLimitJP = "\\I[377]監獄レベル%1は%2日間\\C[7]無法状態\\C[0]です。そのため統制力が\\C[18]%3\\C[0]減少しました！";
const RemDailyReportRiot_NewEN = "\\I[407]Level %1 has started \\C[18]RIOTING\\C[0]!! Order has decreased by \\C[18]-%2\\C[0]!";
const RemDailyReportRiot_NewJP = "\\I[407]監獄レベル%1で\\C[18]暴動が勃発\\C[0]！！秩序が\\C[18]%2\\C[0]減少しました！";
const RemDailyReportRiot_OldEN = "\\I[407]Level %1 has been \\C[18]RIOTING\\C[0] for %2 days! Control is further decreased by \\C[18]-%3\\C[0]!";
const RemDailyReportRiot_OldJP = "\\I[407]監獄レベル%1の\\C[18]暴動が%2日間継続中\\C[0]！統制力が更に\\C[18]%3\\C[0]減少しました！";
const RemDailyReportOrderChange_PositiveEN = "\\I[408]Order has risen to %1.";
const RemDailyReportOrderChange_PositiveJP = "\\I[408]秩序が上昇して%1になりました。";
const RemDailyReportOrderChange_NegativeEN = "\\I[409]Order has fallen to %1.";
const RemDailyReportOrderChange_NegativeJP = "\\I[409]秩序が低下して%1になりました。";
const RemDailyReportOrderChange_NeutralEN = "\\I[408]Order has remained the same at %1.";
const RemDailyReportOrderChange_NeutralJP = "\\I[408]秩序は前日と変わらず%1を維持しています。";
const RemDailyReportFundingChange_PositiveEN = "\\I[410]Funds have increased to \\C[11]$%1\\C[0].";
const RemDailyReportFundingChange_PositiveJP = "\\I[410]資金は\\C[11]%1G\\C[0]まで増えました。";
const RemDailyReportFundingChange_NegativeEN = "\\I[411]Funds have decreased to \\C[2]$%1\\C[0].";
const RemDailyReportFundingChange_NegativeJP = "\\I[411]資金は\\C[2]%1G\\C[0]まで減りました。";
const RemDailyReportBankruptcyEN = "\\I[411]The prison is currently \\C[2]BANKRUPTED\\C[0]!!! Control is further decreased by \\C[18]-%1\\C[0]!";
const RemDailyReportBankruptcyJP = "\\I[411]\\C[2]監獄は破産しました！！！\\C[0]統制力が更に\\C[18]%1\\C[0]減少！";
const RemDailyReportEdictPoints_SingularEN = "\\I[364]%1 Edict Point is available today.";
const RemDailyReportEdictPoints_SingularJP = "\\I[364]本日の使用可能な指令値：%1";
const RemDailyReportEdictPoints_PluralEN = "\\I[364]%1 Edict Points are available today.";
const RemDailyReportEdictPoints_PluralJP = "\\I[364]本日の使用可能な指令値：%1";
const RemDailyReportBarRep_AlmostDecayEN = "\\I[188]Bar Reputation is about to \\C[8]decay\\C[0]. Work as a waitress today to prevent it.";
const RemDailyReportBarRep_AlmostDecayJP = "\\I[188]酒場の評判が\\C[8]ガタ落ち\\C[0]しています。対策としてウェイトレスのバイトをオススメします。";
const RemDailyReportBarRep_DecayedEN = "\\I[188]\\C[8]Bar Reputation has decayed by -1.\\C[0]";
const RemDailyReportBarRep_DecayedJP = "\\I[188]\\C[8]酒場の評判が1レベル低下しました。\\C[0]";
const RemDailyReportVisitorRep_AlmostDecayEN = "\\I[159]Visitor Center Reputation is about to \\C[8]decay\\C[0]. Work as a receptionist today to prevent it.";
const RemDailyReportVisitorRep_AlmostDecayJP = "\\I[159]面会人受付所の評判が\\C[8]ガタ落ち\\C[0]しています。対策として受付嬢のバイトをオススメします。";
const RemDailyReportVisitorRep_DecayedEN = "\\I[159]\\C[8]Visitor Center Reputation has decayed by -1.\\C[0]";
const RemDailyReportVisitorRep_DecayedJP = "\\I[159]\\C[8]面会人受付所の評判が1レベル低下しました。\\C[0]";
const RemDailyReportToiletRep_AlmostDecayEN = "\\I[234]Bathroom Reputation is about to \\C[8]decay\\C[0]. Rest at the toilet today to prevent it.";
const RemDailyReportToiletRep_AlmostDecayJP = "\\I[234]トイレの評判が\\C[8]ガタ落ち\\C[0]しています。対策として真ん中の個室で休憩するのをオススメします。";
const RemDailyReportToiletRep_DecayedEN = "\\I[234]\\C[8]Bathroom Reputation has decayed by -1.\\C[0]";
const RemDailyReportToiletRep_DecayedJP = "\\I[234]\\C[8]トイレの評判が1レベル低下しました。\\C[0]";

const RemParamGainedStrengthEN = "Strength increased by %1!"; //unused
const RemParamGainedStrengthJP = "腕力が %1 上がった！"; //unused
const RemParamGainedStaminaEN = "Stamina increased by %1!"; //unused
const RemParamGainedStaminaJP = "体力が %1 上がった！"; //unused
const RemParamGainedEnergyEN = "Energy increased by %1!"; //unused
const RemParamGainedEnergyJP = "精力が %1 上がった！"; //unused
const RemParamGainedDexterityEN = "Dexterity increased by %1!"; //unused
const RemParamGainedDexterityJP = "器用さが %1 上がった！"; //unused
const RemParamGainedAgilityEN = "Agility increased by %1!"; //unused
const RemParamGainedAgilityJP = "素早さが %1 上がった！"; //unused
const RemParamGainedEnduranceEN = "Endurance increased by %1!"; //unused
const RemParamGainedEnduranceJP = "忍耐力が %1 上がった！"; //unused
const RemParamGainedMindEN = "Mind increased by %1!"; //unused
const RemParamGainedMindJP = "マインドが %1 上がった！"; //unused
const RemParamGainedCharmEN = "Charm increased by %1!"; //unused
const RemParamGainedCharmJP = "魅力が %1 上がった！"; //unused

const RemExpEnemiesDefeatedEN = "Enemies Defeated EXP"; //currently unused
const RemExpEnemiesDefeatedJP = "【戦闘】熟練度"; //currently unused
const RemExpHalberdCombatEN = "Halberd Combat EXP"; //currently unused
const RemExpHalberdCombatJP = "【武器】熟練度"; //currently unused
const RemExpUnarmedCombatEN = "Unarmed Combat EXP"; //currently unused
const RemExpUnarmedCombatJP = "【素手】熟練度"; //currently unused
const RemExpEvasionCombatEN = "Evasion EXP"; //currently unused
const RemExpEvasionCombatJP = "【回避】熟練度"; //currently unused
const RemExpWillpowerCombatEN = "Willpower EXP"; //currently unused
const RemExpWillpowerCombatJP = "【意思】熟練度"; //currently unused
const RemExpEnduranceCombatEN = "Endurance EXP"; //currently unused
const RemExpEnduranceCombatJP = "【忍耐】熟練度"; //currently unused
const RemExpTalkSensitivityEN = "Talk Sensitivity EXP"; //currently unused
const RemExpTalkSensitivityJP = "猥談感度"; //currently unused
const RemExpSightSensitivityEN = "Sight Sensitivity EXP"; //currently unused
const RemExpSightSensitivityJP = "視姦感度"; //currently unused
const RemExpFingerSensitivityEN = "Finger Sensitivity EXP"; //currently unused
const RemExpFingerSensitivityJP = "指先の感度"; //currently unused
const RemExpMouthSensitivityEN = "Mouth Sensitivity EXP"; //currently unused
const RemExpMouthSensitivityJP = "クチ感度"; //currently unused
const RemExpBoobsSensitivityEN = "Boobs Sensitivity EXP"; //currently unused
const RemExpBoobsSensitivityJP = "おっぱい感度"; //currently unused
const RemExpPussySensitivityEN = "Pussy Sensitivity EXP"; //currently unused
const RemExpPussySensitivityJP = "マンコ感度"; //currently unused
const RemExpButtSensitivityEN = "Butt Sensitivity EXP"; //currently unused
const RemExpButtSensitivityJP = "アナル感度"; //currently unused
const RemExpCreampieSensitivityEN = "Creampie Recipient EXP"; //currently unused
const RemExpCreampieSensitivityJP = "中出し感度"; //currently unused
const RemExpBukkakeSensitivityEN = "Bukkake EXP"; //currently unused
const RemExpBukkakeSensitivityJP = "ぶっかけ感度"; //currently unused
const RemExpSwallowSensitivityEN = "Swallowing EXP"; //currently unused
const RemExpSwallowSensitivityJP = "ごっくん感度"; //currently unused
const RemExpKissSkillEN = "Kissing EXP"; //currently unused
const RemExpKissSkillJP = "キス熟練度"; //currently unused
const RemExpPettingSkillEN = "Petting EXP"; //currently unused
const RemExpPettingSkillJP = "愛撫熟練度"; //currently unused
const RemExpHandjobSkillEN = "Handjob EXP"; //currently unused
const RemExpHandjobSkillJP = "手コキ熟練度"; //currently unused
const RemExpBlowjobSkillEN = "Blowjob EXP"; //currently unused
const RemExpBlowjobSkillJP = "フェラ熟練度"; //currently unused
const RemExpTittyFuckSkillEN = "Titjob EXP"; //currently unused
const RemExpTittyFuckSkillJP = "パイズリ熟練度"; //currently unused
const RemExpPussySexSkillEN = "Vaginal Sex EXP"; //currently unused
const RemExpPussySexSkillJP = "生ハメ熟練度"; //currently unused
const RemExpAnalSexSkillEN = "Anal Sex EXP"; //currently unused
const RemExpAnalSexSkillJP = "ケツマンコ熟練度"; //currently unused
const RemExpMasturbateSkillEN = "Masturbation EXP"; //currently unused
const RemExpMasturbateSkillJP = "オナニー熟練度"; //currently unused
const RemExpOrgasmSpecialEN = "Orgasm EXP"; //currently unused
const RemExpOrgasmSpecialJP = "アクメ熟練度"; //currently unused
const RemExpStrippedSpecialEN = "Stripped EXP"; //currently unused
const RemExpStrippedSpecialJP = "ストリップ熟練度"; //currently unused
const RemExpDoublePenetrationSpecialEN = "Double Penetration EXP"; //currently unused
const RemExpDoublePenetrationSpecialJP = "ニ穴ファック熟練度"; //currently unused
const RemExpTriplePenetrationSpecialEN = "Triple Penetration EXP"; //currently unused
const RemExpTriplePenetrationSpecialJP = "三穴ファック熟練度"; //currently unused


const RemYanflyBattleCoreUserEN = "User";
const RemYanflyBattleCoreUserJP = "ユーザー";
const RemYanflyBattleCoreAllyEN = "Ally";
const RemYanflyBattleCoreAllyJP = "味方";
const RemYanflyBattleCoreAlliesEN = "Allies";
const RemYanflyBattleCoreAlliesJP = "味方";
const RemYanflyBattleCoreEnemyEN = "Enemy";
const RemYanflyBattleCoreEnemyJP = "敵";
const RemYanflyBattleCoreEnemiesEN = "Enemies";
const RemYanflyBattleCoreEnemiesJP = "敵";
const RemYanflyBattleCoreAllTargetsEN = "All %1";
const RemYanflyBattleCoreAllTargetsJP = "%1全体";
const RemYanflyBattleCoreRandomTargetsEN = "%2 Random %1";
const RemYanflyBattleCoreRandomTargetsJP = "%2のランダムな%1";

const RemYanflyRemoveEN = "Remove";
const RemYanflyRemoveJP = "外す";
const RemYanflyEmptyEN = "<Empty>";
const RemYanflyEmptyJP = "<未使用>";

//Options Main
const RemYanflyOptions_All_EN = "\\I[272]All";
const RemYanflyOptions_All_JP = "\\I[272]全体";
const RemYanflyOptions_All_Help_EN = "A list of all of the game's settings.";
const RemYanflyOptions_All_Help_JP = "ゲームの設定を全て表示します。";
const RemYanflyOptions_General_EN = "\\I[273]General";
const RemYanflyOptions_General_JP = "\\I[273]一般";
const RemYanflyOptions_General_Help_EN = "General settings that alter the way the game behaves.";
const RemYanflyOptions_General_Help_JP = "言語や速度などの一般設定を変更出来ます。";
const RemYanflyOptions_Audio_EN = "\\I[274]Audio";
const RemYanflyOptions_Audio_JP = "\\I[274]オーディオ";
const RemYanflyOptions_Audio_Help_EN = "Adjust the audio settings for the game.";
const RemYanflyOptions_Audio_Help_JP = "ゲーム内で流れる音のボリュームを設定出来ます。";
const RemYanflyOptions_Visual_EN = "\\I[276]Visual";
const RemYanflyOptions_Visual_JP = "\\I[276]画面";
const RemYanflyOptions_Visual_Help_EN = "Settings that adjust the visual properties of the game.";
const RemYanflyOptions_Visual_Help_JP = "ゲームの表示に関する設定を変更出来ます。";
const RemYanflyOptions_Controls_EN = "\\I[280]Controls";
const RemYanflyOptions_Controls_JP = "\\I[280]キー";
const RemYanflyOptions_Controls_Help_EN = "Change the way you can control the game.\nPress a button on your gamepad in order to access the Gamepad Config menu.";
const RemYanflyOptions_Controls_Help_JP = "ゲームの操作キーを変更出来ます。\nゲームパッドが接続されている場合、ゲームパッドの設定を変更出来ます。";
const RemYanflyOptions_Cheats_EN = "\\I[250]Cheats";
const RemYanflyOptions_Cheats_JP = "\\I[250]チート";
const RemYanflyOptions_Cheats_Help_EN = "Cheats are only activated during Secretary Mode.\nUse these cheats if you like playing in Secretary Mode\nbut prefer certain aspects of the game to be more difficult.";
const RemYanflyOptions_Cheats_Help_JP = "秘書コース専用の設定です。\n部分的な難易度をお好みにカスタマイズしてプレイ出来ます。";
const RemYanflyOptions_Exit_EN = "\\I[254]Exit";
const RemYanflyOptions_Exit_JP = "\\I[254]終了";
const RemYanflyOptions_Exit_Help_EN = "Exit the Options Menu.";
const RemYanflyOptions_Exit_Help_JP = "設定画面を終了します。";

//Options General
const RemYanflyOptions_Language_EN = "\\i[275]Language";
const RemYanflyOptions_Language_JP = "\\i[275]言語";
const RemYanflyOptions_Language_Help_EN = "Set the game's language here.\nFor the safest results, do this in the Title Screen.";
const RemYanflyOptions_Language_Help_JP = "ゲームの言語を変更出来ます。\nまずはタイトルメニューでこの設定を確認してください。";
const RemYanflyOptions_AlwaysDash_EN = "\\i[273]Always Dash";
const RemYanflyOptions_AlwaysDash_JP = "\\i[273]常時ダッシュ";
const RemYanflyOptions_AlwaysDash_Help_EN = "Player walks when OFF. Player dashes when ON.\nHolding SHIFT switches between walking and dashing.";
const RemYanflyOptions_AlwaysDash_Help_JP = "ON：常にダッシュのスピード\nOFF：歩行スピード\n※OFFの場合は、SHIFTキーを押し続けることでダッシュします。";
const RemYanflyOptions_MessageSpeed_EN = "\\i[273]Message Speed";
const RemYanflyOptions_MessageSpeed_JP = "\\i[273]メッセージ表示速度";
const RemYanflyOptions_MessageSpeed_Help_EN = "Changes the speed text is displayed during messages.";
const RemYanflyOptions_MessageSpeed_Help_JP = "通常テキストの表示速度を変更出来ます。";
const RemYanflyOptions_MessageSpeed_NoWait_EN = "No Wait";
const RemYanflyOptions_MessageSpeed_NoWait_JP = "ノーウェイト";
const RemYanflyOptions_CommandRemember_EN = "\\i[273]Command Remember";
const RemYanflyOptions_CommandRemember_JP = "\\i[273]コマンド記憶";
const RemYanflyOptions_CommandRemember_Help_EN = "The game remembers the last Mental and Action Phase skill used.";
const RemYanflyOptions_CommandRemember_Help_JP = "メンタルフェーズとアクションフェーズの最後に使ったスキルを記憶します。";

const RemYanflyOptions_Battlelog_Duration_EN = "\\i[273]Battlelog Duration";
const RemYanflyOptions_Battlelog_Duration_JP = "\\i[273]バトルメッセージ表示時間";
const RemYanflyOptions_Battlelog_Duration_Help_EN = "Changes how long battlelog messages stay on the screen.";
const RemYanflyOptions_Battlelog_Duration_Help_JP = "バトル内テキストの表示時間を変更出来ます。";
const RemYanflyOptions_Battlelog_Duration_Zero_EN = "Very Short";
const RemYanflyOptions_Battlelog_Duration_Zero_JP = "ベリーショート";
const RemYanflyOptions_Battlelog_Duration_One_EN = "Short";
const RemYanflyOptions_Battlelog_Duration_One_JP = "ショート";
const RemYanflyOptions_Battlelog_Duration_Two_EN = "Default";
const RemYanflyOptions_Battlelog_Duration_Two_JP = "デフォルト";
const RemYanflyOptions_Battlelog_Duration_Three_EN = "Long";
const RemYanflyOptions_Battlelog_Duration_Three_JP = "ロング";
const RemYanflyOptions_Battlelog_Duration_Four_EN = "Very Long";
const RemYanflyOptions_Battlelog_Duration_Four_JP = "ベリーロング";

const RemYanflyOptions_Battlelog_Fontsize_EN = "\\i[273]Battlelog Font Size";
const RemYanflyOptions_Battlelog_Fontsize_JP = "\\i[273]バトルメッセージのフォントサイズ";
const RemYanflyOptions_Battlelog_Fontsize_Help_EN = "Changes the font size for battlelog messages.";
const RemYanflyOptions_Battlelog_Fontsize_Help_JP = "バトル内テキストのサイズを変更出来ます。";
const RemYanflyOptions_Battlelog_Fontsize_Zero_EN = "Smallest";
const RemYanflyOptions_Battlelog_Fontsize_Zero_JP = "最小";
const RemYanflyOptions_Battlelog_Fontsize_One_EN = "Smaller";
const RemYanflyOptions_Battlelog_Fontsize_One_JP = "小さい";
const RemYanflyOptions_Battlelog_Fontsize_Two_EN = "Default";
const RemYanflyOptions_Battlelog_Fontsize_Two_JP = "普通";
const RemYanflyOptions_Battlelog_Fontsize_Three_EN = "Bigger";
const RemYanflyOptions_Battlelog_Fontsize_Three_JP = "大きい";
const RemYanflyOptions_Battlelog_Fontsize_Four_EN = "Biggest";
const RemYanflyOptions_Battlelog_Fontsize_Four_JP = "最大";

const RemYanflyOptions_MaleDialogueAppear_EN = "\\i[273]Enemy Battle Dialogue";
const RemYanflyOptions_MaleDialogueAppear_JP = "\\i[273]敵のセリフ表示頻度";
const RemYanflyOptions_MaleDialogueAppear_Help_EN = "Changes how likely enemies will make a comment while using a sexual skill.\nNote there are some exceptions where enemies will always talk regardless of this setting.";
const RemYanflyOptions_MaleDialogueAppear_Help_JP = "セクハラ/セックス時に表示される敵のセリフ頻度を設定出来ます。\n※敵によっては例外があります。";
const RemYanflyOptions_MaleDialogueAppear_Zero_EN = "Silence";
const RemYanflyOptions_MaleDialogueAppear_Zero_JP = "沈黙";
const RemYanflyOptions_MaleDialogueAppear_One_EN = "Rarely";
const RemYanflyOptions_MaleDialogueAppear_One_JP = "ごく稀に";
const RemYanflyOptions_MaleDialogueAppear_Two_EN = "Sometimes";
const RemYanflyOptions_MaleDialogueAppear_Two_JP = "時々";
const RemYanflyOptions_MaleDialogueAppear_Three_EN = "Often (Default)";
const RemYanflyOptions_MaleDialogueAppear_Three_JP = "普通(デフォルト)";
const RemYanflyOptions_MaleDialogueAppear_Four_EN = "Talkative";
const RemYanflyOptions_MaleDialogueAppear_Four_JP = "おしゃべり";

const RemYanflyOptions_KarrynLinesPrompt_EN = "\\i[273]Karryn Dialogue Pause";
const RemYanflyOptions_KarrynLinesPrompt_JP = "\\i[273]カリンのセリフは待つ";
const RemYanflyOptions_KarrynLinesPrompt_Help_EN = "The battle is paused after Karryn speaks until the confirm key is pressed.\nTurning this option OFF will skip this pause for most of Karryn's battle dialogues.";
const RemYanflyOptions_KarrynLinesPrompt_Help_JP = "バトル中にカリンが話す時は自動送りするかどうかの設定が出来ます。\nON：カリン発言時のみ、決定キーを押すまで戦闘メッセージは停止します。\nOFF：カリンのセリフも含めて、戦闘メッセージは全て自動送りされます。";
const RemYanflyOptions_Disable_Rimjobs_EN = "\\i[273]Disable Rimjobs";
const RemYanflyOptions_Disable_Rimjobs_JP = "\\i[273]『ケツ舐め』プレイの非表示";
const RemYanflyOptions_Disable_Rimjobs_Help_EN = "Prevents all rimjob content from occuring while this is option is on.\nNote that this game's progression and full content is designed with rimjobs in mind.\nOnly select this option if it'd otherwise keep you from wanting to play this game.";
const RemYanflyOptions_Disable_Rimjobs_Help_JP = "ON：全てのアナル舐めシーンが発生しなくなります。\nOFF：カリンが男のアナルを舐めるシーンが発生するのでご注意下さい。\n※このフェチを閲覧したくない場合のみ選択して下さい。";

const RemYanflyOptions_DisplayPleasureAsPercent_EN = "\\i[273]Display Pleasure As Percentage";
const RemYanflyOptions_DisplayPleasureAsPercent_JP = "\\i[273]快楽度を％で表示";
const RemYanflyOptions_DisplayPleasureAsPercent_Help_EN = "When this option is turned ON, pleasure values will be displayed as a percentage based \non the amount of pleasure needed to have an orgasm.\nWhen this option is turned OFF, pleasure values will be displayed as normal numbers.";
const RemYanflyOptions_DisplayPleasureAsPercent_Help_JP = "絶頂に必要な『快楽度』の表示を変更出来ます。\nON：快楽度をパーセンテージで表示します。\nOFF：快楽度を通常の数値で表示します。";

const RemYanflyOptions_ShorterDefeatBattles_EN = "\\i[273]Shorter Defeated Battles";
const RemYanflyOptions_ShorterDefeatBattles_JP = "\\i[273]敗北Ｈの短縮";
const RemYanflyOptions_ShorterDefeatBattles_Help_EN = "Normally Defeated Battles (the battles after Karryn is defeated) are over only after all \nenemies are satisfied. Turning this option ON will allow the battle to also end after Karryn \nis exhausted. Prisoner Mode ignores this option, this is always OFF in Prisoner Mode."
const RemYanflyOptions_ShorterDefeatBattles_Help_JP = "通常の敗北Ｈは全ての敵が射精後に終了します。\nON：敵が射精し終わらなくても、カリンの体力が０になった時点で終了します。\nOFF：通常通り全員が射精するまで続きます。囚人コースでは常にOFFになります。";

//Options Audio
const RemYanflyOptions_MasterVolume_EN = "\\i[274]Master Volume";
const RemYanflyOptions_MasterVolume_JP = "\\i[274]マスター音量";
const RemYanflyOptions_MasterVolume_Help_EN = "Adjusts the overall volume of the game.";
const RemYanflyOptions_MasterVolume_Help_JP = "ゲーム全体のボリュームを設定出来ます。";
const RemYanflyOptions_BGMVolume_EN = "\\i[274]BGM Volume";
const RemYanflyOptions_BGMVolume_JP = "\\i[274]BGM";
const RemYanflyOptions_BGMVolume_Help_EN = "Adjusts the volume of the background music.";
const RemYanflyOptions_BGMVolume_Help_JP = "ゲーム内で流れる音楽のボリュームを設定出来ます。";
const RemYanflyOptions_BGSVolume_EN = "\\i[274]BGS Volume";
const RemYanflyOptions_BGSVolume_JP = "\\i[274]ループ効果音";
const RemYanflyOptions_BGSVolume_Help_EN = "Adjusts the volume of the background sound effects.";
const RemYanflyOptions_BGSVolume_Help_JP = "あえぎ声や体液のボリュームを設定出来ます。";
const RemYanflyOptions_MEVolume_EN = "\\i[274]ME Volume";
const RemYanflyOptions_MEVolume_JP = "\\i[274]演出音";
const RemYanflyOptions_MEVolume_Help_EN = "Adjusts the volume of the melody effects such as fanfares.";
const RemYanflyOptions_MEVolume_Help_JP = "休息のときやファンファーレに流れる音楽のボリュームを設定出来ます。";
const RemYanflyOptions_SEVolume_EN = "\\i[274]SE Volume";
const RemYanflyOptions_SEVolume_JP = "\\i[274]SE";
const RemYanflyOptions_SEVolume_Help_EN = "Adjusts the volume of the sound effects.";
const RemYanflyOptions_SEVolume_Help_JP = "効果音のボリュームを設定出来ます。";

//Options Visual
const RemYanflyOptions_WindowToneRed_EN = "\\i[277]Window Tone: Red";
const RemYanflyOptions_WindowToneRed_JP = "\\i[277]ウィンドウトーン：RED";
const RemYanflyOptions_WindowToneRed_Help_EN = "Changes the window tone's \\c[18]red\\c[0] value.\nHold SHIFT while pressing LEFT/RIGHT to adjust more.";
const RemYanflyOptions_WindowToneRed_Help_JP = "ウィンドウ色彩の\\c[18]赤\\c[0]を変更出来ます。\nSHIFTキーを押しながら左右に動かすことで大きく変更出来ます。";
const RemYanflyOptions_WindowToneGreen_EN = "\\i[278]Window Tone: Green";
const RemYanflyOptions_WindowToneGreen_JP = "\\i[278]ウィンドウトーン：GREEN";
const RemYanflyOptions_WindowToneGreen_Help_EN = "Changes the window tone's \\c[29]green\\c[0] value.\nHold SHIFT while pressing LEFT/RIGHT to adjust more.";
const RemYanflyOptions_WindowToneGreen_Help_JP = "ウィンドウ色彩の\\c[29]緑\\c[0]を変更出来ます。\nSHIFTキーを押しながら左右に動かすことで大きく変更出来ます。";
const RemYanflyOptions_WindowToneBlue_EN = "\\i[279]Window Tone: Blue";
const RemYanflyOptions_WindowToneBlue_JP = "\\i[279]ウィンドウトーン：BLUE";
const RemYanflyOptions_WindowToneBlue_Help_EN = "Changes the window tone's \\c[14]blue\\c[0] value.\nHold SHIFT while pressing LEFT/RIGHT to adjust more.";
const RemYanflyOptions_WindowToneBlue_Help_JP = "ウィンドウ色彩の\\c[14]青\\c[0]を変更出来ます。\nSHIFTキーを押しながら左右に動かすことで大きく変更出来ます。";
const RemYanflyOptions_FasterBattleDialogue_EN = "\\i[276]Fast Battle Dialogues";
const RemYanflyOptions_FasterBattleDialogue_JP = "\\i[276]バトルメッセージ倍速化";
const RemYanflyOptions_FasterBattleDialogue_Help_EN = "Turning this option ON will make battle dialogue go faster.";
const RemYanflyOptions_FasterBattleDialogue_Help_JP = "バトル中に表示されるメッセージが速くなります。";
const RemYanflyOptions_FasterBattleCutins_EN = "\\i[276]Fast Battle Cut-ins";
const RemYanflyOptions_FasterBattleCutins_JP = "\\i[276]カットインを簡略化";
const RemYanflyOptions_FasterBattleCutins_Help_EN = "Turning this option ON will make battle cut-ins go faster and turn off the cut-in animations.\nTurn this option ON if you're experiencing slowdown during cut-ins.";
const RemYanflyOptions_FasterBattleCutins_Help_JP = "ON：バトル中のカットインが速くなり、アニメなしの静止画が表示されます。\nOFF：カットインは通常速度で、アニメ再生もされます。\n※カットイン中にゲームが重くなる場合はONにして下さい。";
const RemYanflyOptions_SmootherBattleCutinLoading_EN = "\\i[276]Smoother Battle Cut-in Loading";
const RemYanflyOptions_SmootherBattleCutinLoading_JP = "\\i[276]カットインのスムーズ化";
const RemYanflyOptions_SmootherBattleCutinLoading_Help_EN = "\\}This is an experimental option for stronger PCs that might make battle cut-ins load in smoother.\n\\{Please turn this option off if you experience slowdowns in your game.\nThis option has no effect when Fast Battle Cut-ins is turned on.";
const RemYanflyOptions_SmootherBattleCutinLoading_Help_JP = "バトル中のカットインアニメのロードをスムーズにするオプションです。\n注意１：ゲームが重くなる場合はOFFにしてください。\n注意２：「カットイン簡略化」がONの場合は無効になります。";
const RemYanflyOptions_DisableBattleCutins_EN = "\\i[276]Disable Battle Cut-ins";
const RemYanflyOptions_DisableBattleCutins_JP = "\\i[276]カットインの非表示";
const RemYanflyOptions_DisableBattleCutins_Help_EN = "Turning this option ON will completely disable battle cut-ins.\nThe intended visual experience is to play and enjoy the game with battle cut-ins appearing.\nThis option should only be used as a last resort if cut-ins are causing serious FPS issues.";
const RemYanflyOptions_DisableBattleCutins_Help_JP = "ON：バトル中のカットインは全て表示されません。\nOFF：バトル中のカットインが表示されます。\n※カットインの影響で処理落ちする場合のみ、最終手段としてご使用下さい。";
const RemYanflyOptions_SmootherCGLoading_EN = "\\i[276]Smoother CG Loading";
const RemYanflyOptions_SmootherCGLoading_JP = "\\i[276]CG表示のスムーズ化";
const RemYanflyOptions_SmootherCGLoading_Help_EN = "\\}\\}This is an option for stronger PCs that will make CGs load in smoother at the cost of much longer initial boot up time for the game.\nPlease keep this option off if your initial boot up time is already longer than twenty seconds or if your game often crashes.\n\\{Please restart your game for this option to take effect.";
const RemYanflyOptions_SmootherCGLoading_Help_JP = "起動時のロード時間が長くなる代わりに、CG表示で発生する遅延をかなり抑制します。\n注意１：起動時間が20秒を超える、または頻繁にフリーズする場合はOFFにして下さい。\n注意２：ONにした後、ゲームを再起動することで設定が有効になります。";
const RemYanflyOptions_SortPassivesAscending_EN = "\\i[276]Sort Passives Ascending";
const RemYanflyOptions_SortPassivesAscending_JP = "\\i[276]パッシブの並び順を変更";
const RemYanflyOptions_SortPassivesAscending_Help_EN = "Passives are visually sorted in the Passives screen by the date they were obtained.\nON: They will be sorted with the oldest ones on top.\nOFF: They will sorted with the newest ones on top.";
const RemYanflyOptions_SortPassivesAscending_Help_JP = "パッシブの並べ替えをします。\nON：初日から現在までに取得した順列で表示されます。\nOFF：最新取得から過去までの順列で表示されます。";
const RemYanflyOptions_SynchFPS_EN = "\\i[276]Synch Monitor FPS";
const RemYanflyOptions_SynchFPS_JP = "\\i[276]FPSの同期処理";
const RemYanflyOptions_SynchFPS_Help_EN = "Keep option turned ON if your monitor runs above 60 FPS so the game will cap at 60 FPS.\nTurn this option off if your game is running way below 60 FPS.\nPressing F2 will show the game's current FPS.";
const RemYanflyOptions_SynchFPS_Help_JP = "モニターが60FPSを超えて動作している場合、ONにしてください。\n60FPSで動作するようにゲーム同期を変更出来ます。\n※F2キーで現在のFPSを確認出来ます。";
const RemYanflyOptions_LightingEffects_EN = "\\i[276]Map Lighting Effects";
const RemYanflyOptions_LightingEffects_JP = "\\i[276]フラッシュ演出";
const RemYanflyOptions_LightingEffects_Help_EN = "Map lighting effects include the effects from light sources such as torches.\nTurning this OFF will remove those effects and help improve game performance if\nyour game is experiencing slow downs in areas with map lightning effects." 
const RemYanflyOptions_LightingEffects_Help_JP = "フラッシュが使われるイベントでゲーム速度が遅くなる場合は、\nOFFにすることでゲームからフラッシュを解除し、\n動作パフォーマンスを向上させることが出来ます。";
const RemYanflyOptions_MapEffects_EN = "\\i[276]Animated Map Effects";
const RemYanflyOptions_MapEffects_JP = "\\i[276]マップのエフェクト";
const RemYanflyOptions_MapEffects_Help_EN = "Animated map effects include fogs and mists.\nTurning this OFF will remove those effects and help improve game performance if your game \nis experiencing slow downs in areas with animated map effects." 
const RemYanflyOptions_MapEffects_Help_JP = "マップのミストや雲などの演出表示を変更出来ます。\nON：マップ演出を表示します。\nOFF：マップ演出を非表示にします（処理が遅くなる場合は推奨）。";
const RemYanflyOptions_DisplayPubicHair_EN = "\\i[276]Toggle Pubic Hair";
const RemYanflyOptions_DisplayPubicHair_JP = "\\i[276]アンダーヘアの処理";
const RemYanflyOptions_DisplayPubicHair_Help_EN = "Turn this option ON for Karryn to have pubic hair.\nTurn this option OFF for Karryn's groin to be smooth and hairless.";
const RemYanflyOptions_DisplayPubicHair_Help_JP = "アンダーヘアの生え方を変更します。\nON：カリンの股間には丁寧に整えられた陰毛があります。\nOFF：カリンがパイパンになります。";
const RemYanflyOptions_ShowSexualDamagePopup_EN = "\\i[276]Toggle Karryn Sexual Damage Popup";
const RemYanflyOptions_ShowSexualDamagePopup_JP = "\\i[276]性ダメージのポップアップ";
const RemYanflyOptions_ShowSexualDamagePopup_Help_EN = "\\}Turn this option ON to have damage numbers from sexual attacks popup over Karryn's body.\nTurn this option OFF to hide the damage numbers from sexual attacks over Karryn's body.\nInformation about sexual attacks will still appear in the battle log.";
const RemYanflyOptions_ShowSexualDamagePopup_Help_JP = "バトル中の性ダメージの表示を変更出来ます。\nON：カリンの上に性ダメージ数が表示されます。\nOFF：性ダメージはテキストログのみでの表示になります。";


//Options Controls
const RemYanflyOptions_GamepadControl_EN = "\\i[281]Gamepad Config";
const RemYanflyOptions_GamepadControl_JP = "\\i[281]ゲームパッド設定";
const RemYanflyOptions_GamepadControl_Help_EN = "Configure the gamepad button settings.";
const RemYanflyOptions_GamepadControl_Help_JP = "ゲームパッドのボタン割り当てが設定出来ます。";
const RemYanflyOptions_KeyboardControl_EN = "\\i[280]Keyboard Config";
const RemYanflyOptions_KeyboardControl_JP = "\\i[280]キーボード設定";
const RemYanflyOptions_KeyboardControl_Help_EN = "Configure the keyboard keys settings.";
const RemYanflyOptions_KeyboardControl_Help_JP = "キーボードのキー割り当てが設定出来ます。";
const RemYanflyOptions_CancelSkipMentalPhase_EN = "\\I[280]Cancel Skips Mental Phase";
const RemYanflyOptions_CancelSkipMentalPhase_JP = "\\I[280]戦闘のメンタルフェーズをスキップ";
const RemYanflyOptions_CancelSkipMentalPhase_Help_EN = "Turning this option ON will cause Mental Phase to end automatically when pressing \nthe cancel key/button or right clicking with the mouse.";
const RemYanflyOptions_CancelSkipMentalPhase_Help_JP = "ON：キャンセルボタン/右クリックでメンタルフェーズをスキップ出来ます。\nOFF：コマンド入力するまで、メンタルフェーズからアタックフェーズに移行出来ません。";

const RemYanflyGamepadButtonNameEN = "Button %1";
const RemYanflyGamepadButtonNameJP = "%1ボタン";
const RemYanflyGamepadOkButtonNameEN = "OK / Interact";
const RemYanflyGamepadOkButtonNameJP = "決定 / 調べる";
const RemYanflyGamepadOkButtonHelpEN = "Used to accept command actions and interact with objects and people.";
const RemYanflyGamepadOkButtonHelpJP = "選択肢の決定や、マップ上で調べたり会話したいときに使います。";
const RemYanflyGamepadCancelButtonNameEN = "Cancel";
const RemYanflyGamepadCancelButtonNameJP = "キャンセル";
const RemYanflyGamepadCancelButtonHelpEN = "Used to cancel menu actions.";
const RemYanflyGamepadCancelButtonHelpJP = "選択肢のキャンセルや、メニューを閉じるときに使います。";
const RemYanflyGamepadShiftButtonNameEN = "Shift";
const RemYanflyGamepadShiftButtonNameJP = "Shift";
const RemYanflyGamepadShiftButtonHelpEN = "Hold this button to dash on the map or hide text.";
const RemYanflyGamepadShiftButtonHelpJP = "ダッシュしたいときと、テキストを非表示したいときに使います。";
const RemYanflyGamepadMenuButtonNameEN = "Menu";
const RemYanflyGamepadMenuButtonNameJP = "メニュー";
const RemYanflyGamepadMenuButtonHelpEN = "Used to open the Main Menu.";
const RemYanflyGamepadMenuButtonHelpJP = "メニューウィンドウを開くボタンです。";
const RemYanflyGamepadPageUpButtonNameEN = "Shoulder Left / Backlog";
const RemYanflyGamepadPageUpButtonNameJP = "ページ送り(↑) / テキストログの表示";
const RemYanflyGamepadPageUpButtonHelpEN = "Used to scroll through menus and items, and also open the message backlog.";
const RemYanflyGamepadPageUpButtonHelpJP = "メニュー画面やテキストログのページ送りと、テキストログの表示に使います。";
const RemYanflyGamepadPageDownButtonNameEN = "Shoulder Right";
const RemYanflyGamepadPageDownButtonNameJP = "ページ送り(↓) ";
const RemYanflyGamepadPageDownButtonHelpEN = "Used to scroll through menus and items.";
const RemYanflyGamepadPageDownButtonHelpJP = "メニュー画面やテキストログのページ送りに使います。";
const RemYanflyGamepadResetDefaultNameEN = "Reset to Default";
const RemYanflyGamepadResetDefaultNameJP = "デフォルトに戻す";
const RemYanflyGamepadResetDefaultHelpEN = "Returns your controller to default settings.";
const RemYanflyGamepadResetDefaultHelpJP = "ゲームパッドの設定を初期状態に戻します。";
const RemYanflyGamepadFinishConfigNameEN = "Finish Configuration";
const RemYanflyGamepadFinishConfigNameJP = "設定を保存する";
const RemYanflyGamepadFinishConfigHelpEN = "Are you done configuring your gamepad?";
const RemYanflyGamepadFinishConfigHelpJP = "ゲームパッドの設定を保存して閉じます。";

const RemYanflyKeyboardHelpEN = "Change the configuration of this key?";
const RemYanflyKeyboardHelpJP = "キーボードに動作を割り当てて下さい。";
const RemYanflyKeyboardDefaultLayoutTextEN = "Default Keyboard Layout";
const RemYanflyKeyboardDefaultLayoutTextJP = "初期状態に戻す";
const RemYanflyKeyboardDefaultLayoutHelpEN = "Reverts your keyboard setting to the default setup.";
const RemYanflyKeyboardDefaultLayoutHelpJP = "キーボードの設定をデフォルトに戻します。";
const RemYanflyKeyboardWASDTextEN = "WASD Movement Layout";
const RemYanflyKeyboardWASDTextJP = "WASDモード";
const RemYanflyKeyboardWASDHelpEN = "Changes your keyboard to WASD movement.";
const RemYanflyKeyboardWASDHelpJP = "WASDキーを方向キーにします。";
const RemYanflyKeyboardFinishConfigTextEN = "Finish Configuration";
const RemYanflyKeyboardFinishConfigTextJP = "設定を完了する";
const RemYanflyKeyboardFinishConfigHelpEN = "Are you done configuring your keyboard?";
const RemYanflyKeyboardFinishConfigHelpJP = "キーボードの設定を保存して戻ります。";
const RemYanflyKeyboardClearTextEN = "Clear";
const RemYanflyKeyboardClearTextJP = "未設定";
const RemYanflyKeyboardOKKeyEN = "OK";
const RemYanflyKeyboardOKKeyJP = "OK";
const RemYanflyKeyboardOKTextEN = "OK / Interact";
const RemYanflyKeyboardOKTextJP = "OK / 調べる";
const RemYanflyKeyboardEscapeKeyEN = "Cancel/Menu";
const RemYanflyKeyboardEscapeKeyJP = "ｷｬﾝｾﾙ&ﾒﾆｭｰ";
const RemYanflyKeyboardEscapeTextEN = "Cancel / Menu";
const RemYanflyKeyboardEscapeTextJP = "キャンセル / メニュー";
const RemYanflyKeyboardCancelKeyEN = "Cancel";
const RemYanflyKeyboardCancelKeyJP = "ｷｬﾝｾﾙ";
const RemYanflyKeyboardCancelTextEN = "Cancel";
const RemYanflyKeyboardCancelTextJP = "キャンセル";
const RemYanflyKeyboardMenuKeyEN = "Menu";
const RemYanflyKeyboardMenuKeyJP = "ﾒﾆｭｰ";
const RemYanflyKeyboardMenuTextEN = "Menu";
const RemYanflyKeyboardMenuTextJP = "メニュー";
const RemYanflyKeyboardShiftKeyEN = "Shift";
const RemYanflyKeyboardShiftKeyJP = "Shift";
const RemYanflyKeyboardShiftTextEN = "Shift";
const RemYanflyKeyboardShiftTextJP = "Shift";
const RemYanflyKeyboardPageUpKeyEN = "PgUp";
const RemYanflyKeyboardPageUpKeyJP = "PgUp";
const RemYanflyKeyboardPageUpTextEN = "Page Up / Backlog";
const RemYanflyKeyboardPageUpTextJP = "Page Up / テキストログの表示";
const RemYanflyKeyboardPageDownKeyEN = "PgDn";
const RemYanflyKeyboardPageDownKeyJP = "PgDn";
const RemYanflyKeyboardPageDownTextEN = "Page Down";
const RemYanflyKeyboardPageDownTextJP = "Page Down";
const RemYanflyKeyboardLeftKeyEN = "←";
const RemYanflyKeyboardLeftKeyJP = "←";
const RemYanflyKeyboardLeftTextEN = "Left";
const RemYanflyKeyboardLeftTextJP = "←方向";
const RemYanflyKeyboardUpKeyEN = "↑";
const RemYanflyKeyboardUpKeyJP = "↑";
const RemYanflyKeyboardUpTextEN = "Up";
const RemYanflyKeyboardUpTextJP = "↑方向";
const RemYanflyKeyboardRightKeyEN = "→";
const RemYanflyKeyboardRightKeyJP = "→";
const RemYanflyKeyboardRightTextEN = "Right";
const RemYanflyKeyboardRightTextJP = "→方向";
const RemYanflyKeyboardDownKeyEN = "↓";
const RemYanflyKeyboardDownKeyJP = "↓";
const RemYanflyKeyboardDownTextEN = "Down";
const RemYanflyKeyboardDownTextJP = "↓方向";


//Options Cheats
const RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_EN = "\\i[429]\\C[14]WhosYourDaddy";
const RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_JP = "\\i[429]\\C[14]体力ダメージ２倍";
const RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_Help_EN = "Enemies deal double the amount of stamina damage to Karryn.\nFor people who want to see Karryn be less invincible.";
const RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_Help_JP = "敵からの物理ダメージが２倍になります。\n★カリンの無敵っぷりを解除したい人向け。";
const RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_EN = "\\i[429]\\C[14]iddqd";
const RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_JP = "\\i[429]\\C[14]体力ダメージ３倍";
const RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_Help_EN = "Enemies deal triple the amount of stamina damage to Karryn.\nFor people who want to see Karryn fall down from a few hits.";
const RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_Help_JP = "敵からの物理ダメージが３倍になります。\n★手っ取り早くカリンに倒れて欲しい人向け。";
const RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_EN = "\\i[387]\\C[1]BigDaddy";
const RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_JP = "\\i[387]\\C[1]快楽ダメージ２倍";
const RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_Help_EN = "Enemies deal double the amount of pleasure damage to Karryn.\nFor people who want to see Karryn succumb to pleasure faster.";
const RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_Help_JP = "敵からの快楽ダメージが２倍になります。\n★快楽堕ちを早く見たい人向け。";
const RemYanflyOptions_Cheats_EnemyTripleSexualDamage_EN = "\\i[387]\\C[1]there is no cow level";
const RemYanflyOptions_Cheats_EnemyTripleSexualDamage_JP = "\\i[387]\\C[1]快楽ダメージ３倍";
const RemYanflyOptions_Cheats_EnemyTripleSexualDamage_Help_EN = "Enemies deal triple the amount of pleasure damage to Karryn.\nFor people who want to turn Karryn into a puddle.";
const RemYanflyOptions_Cheats_EnemyTripleSexualDamage_Help_JP = "敵からの快楽ダメージが３倍になります。\n★即イキ濡れ濡れ状態で楽しみたい人向け。";
const RemYanflyOptions_Cheats_EnemyAlwaysAct_EN = "\\i[385]\\C[2]godmode";
const RemYanflyOptions_Cheats_EnemyAlwaysAct_JP = "\\i[385]\\C[2]敵が必ず行動";
const RemYanflyOptions_Cheats_EnemyAlwaysAct_Help_EN = "Enemies will always act every turn.\nFor people who don't want enemies to skip their turn.";
const RemYanflyOptions_Cheats_EnemyAlwaysAct_Help_JP = "敵が必ず毎ターン行動するようになります。\n★敵のターンをスキップさせたくない人向け。";
const RemYanflyOptions_Cheats_ActorHalfStaminaRegen_EN = "\\i[473]\\C[29]pepperoni pizza";
const RemYanflyOptions_Cheats_ActorHalfStaminaRegen_JP = "\\i[473]\\C[29]回復半減";
const RemYanflyOptions_Cheats_ActorHalfStaminaRegen_Help_EN = "Karryn only regenerates half as much stamina.\nFor people who want to see Karryn get gradually worn down.";
const RemYanflyOptions_Cheats_ActorHalfStaminaRegen_Help_JP = "カリンの体力回復が半減します。\n★じわじわと追い詰められるのを見たい人向け。";
const RemYanflyOptions_Cheats_ActorThirdStaminaRegen_EN = "\\i[473]\\C[29]Thereisnospoon";
const RemYanflyOptions_Cheats_ActorThirdStaminaRegen_JP = "\\i[0473]\\C[29]回復３分の１";
const RemYanflyOptions_Cheats_ActorThirdStaminaRegen_Help_EN = "Karryn only regenerates one-third as much stamina.\nFor people who want Karryn to regenerate much less.";
const RemYanflyOptions_Cheats_ActorThirdStaminaRegen_Help_JP = "カリンの体力回復が３分の１になります。\n★回復量を大幅に減らしたい人向け。";
const RemYanflyOptions_Cheats_ActorNoEvasion_EN = "\\i[427]\\C[30]Jack be nimble";
const RemYanflyOptions_Cheats_ActorNoEvasion_JP = "\\i[427]\\C[30]フルボッコ\\C[30]";
const RemYanflyOptions_Cheats_ActorNoEvasion_Help_EN = "Karryn can no longer evade.\nFor people who want Karryn to take every attack head on.";
const RemYanflyOptions_Cheats_ActorNoEvasion_Help_JP = "カリンは一切回避しなくなります。\n★攻撃を全部受けさせたい人向け。";
const RemYanflyOptions_Cheats_ActorHalfExpRate_EN = "\\i[361]\\C[30]hoyohoyo";
const RemYanflyOptions_Cheats_ActorHalfExpRate_JP = "\\i[361]\\C[30]経験値半減";
const RemYanflyOptions_Cheats_ActorHalfExpRate_Help_EN = "Karryn's experience rate is cut in half.\nFor people who want Karryn to take longer to level up.";
const RemYanflyOptions_Cheats_ActorHalfExpRate_Help_JP = "カリンの取得経験値が半減します。\n★レベルアップにもっと時間をかけたい人向け。";
const RemYanflyOptions_Cheats_LessControlFive_EN = "\\i[377]\\C[10]ROSEBUD";
const RemYanflyOptions_Cheats_LessControlFive_JP = "\\i[377]\\C[10]統制力が-5";
const RemYanflyOptions_Cheats_LessControlFive_Help_EN = "Lowers the prison's Control by 5.\nFor people who want to see more lower Order stuff.";
const RemYanflyOptions_Cheats_LessControlFive_Help_JP = "監獄の統制力が５下がります。\n★より低い秩序でプレイしたい人向け。";
const RemYanflyOptions_Cheats_LessControlTen_EN = "\\i[377]\\C[10]showracemenu";
const RemYanflyOptions_Cheats_LessControlTen_JP = "\\i[377]\\C[10]統制が-10";
const RemYanflyOptions_Cheats_LessControlTen_Help_EN = "Lowers the prison's Control by 10.\nFor people who want to quickly drop the prison's Order.";
const RemYanflyOptions_Cheats_LessControlTen_Help_JP = "監獄の統制力が１０下がります。\n★手っ取り早く秩序を落としたい人向け。";
const RemYanflyOptions_Cheats_InstantRiotsOne_EN = "\\i[407]\\C[7]Greedisgood";
const RemYanflyOptions_Cheats_InstantRiotsOne_JP = "\\i[407]\\C[7]レベル１で暴動多発";
const RemYanflyOptions_Cheats_InstantRiotsOne_Help_EN = "Prison Level One is pretty much going to riot every three days.\nFor people who want to re-experience a certain level's contents.";
const RemYanflyOptions_Cheats_InstantRiotsOne_Help_JP = "監獄レベル１でほぼ３日に１回暴動が発生するようになります。\n★特定の監獄レベルで再戦したい人向け。";
const RemYanflyOptions_Cheats_InstantRiotsTwo_EN = "\\i[407]\\C[7]black sheep wall";
const RemYanflyOptions_Cheats_InstantRiotsTwo_JP = "\\i[407]\\C[7]レベル２で暴動多発";
const RemYanflyOptions_Cheats_InstantRiotsTwo_Help_EN = "Prison Level Two is pretty much going to riot every three days.\nFor people who want to re-experience a certain level's contents.";
const RemYanflyOptions_Cheats_InstantRiotsTwo_Help_JP = "監獄レベル２でほぼ３日に１回暴動が発生するようになります。\n★特定の監獄レベルで再戦したい人向け。";
const RemYanflyOptions_Cheats_InstantRiotsThree_EN = "\\i[407]\\C[7]lumberjack";
const RemYanflyOptions_Cheats_InstantRiotsThree_JP = "\\i[407]\\C[7]レベル３で暴動多発";
const RemYanflyOptions_Cheats_InstantRiotsThree_Help_EN = "Prison Level Three is pretty much going to riot every three days.\nFor people who want to re-experience a certain level's contents.";
const RemYanflyOptions_Cheats_InstantRiotsThree_Help_JP = "監獄レベル３でほぼ３日に１回暴動が発生するようになります。\n★特定の監獄レベルで再戦したい人向け。";
const RemYanflyOptions_Cheats_InstantRiotsFour_EN = "\\i[407]\\C[7]allyourbasearebelongtous";
const RemYanflyOptions_Cheats_InstantRiotsFour_JP = "\\i[407]\\C[7]レベル４で暴動多発";
const RemYanflyOptions_Cheats_InstantRiotsFour_Help_EN = "Prison Level Four is pretty much going to riot every three days.\nFor people who want to re-experience a certain level's contents.";
const RemYanflyOptions_Cheats_InstantRiotsFour_Help_JP = "監獄レベル４でほぼ３日に１回暴動が発生するようになります。\n★特定の監獄レベルで再戦したい人向け。";
const RemYanflyOptions_Cheats_NoAutoSave_EN = "\\i[282]The \\C[18]K*n*mi\\C[0] Code";
const RemYanflyOptions_Cheats_NoAutoSave_JP = "\\i[282]\\C[18]オートセーブ解除";
const RemYanflyOptions_Cheats_NoAutoSave_Help_EN = "Disables autosave.\nJust make sure to save often!";
const RemYanflyOptions_Cheats_NoAutoSave_Help_JP = "オートセーブを無効化します。\n※こまめなセーブをお忘れなく！";

//Save
const RemYanflySaveYesEN = "Yes";
const RemYanflySaveYesJP = "はい";
const RemYanflySaveNoEN = "No";
const RemYanflySaveNoJP = "いいえ";
const RemYanflySaveEmptyEN = "Empty";
const RemYanflySaveEmptyJP = "未使用";
const RemYanflySaveDeleteTextEN = "Do you wish to delete this save file?";
const RemYanflySaveDeleteTextJP = "このファイルを削除しますか？";
const RemYanflySaveLoadTextEN = "Do you wish to load this save file?";
const RemYanflySaveLoadTextJP = "このファイルをロードしますか？";
const RemYanflySaveSaveTextEN = "Do you wish to overwrite this save file?";
const RemYanflySaveSaveTextJP = "このファイルに上書きしてもいいですか？";
const RemYanflySaveInvalidTextEN = "This save is for a different game.";
const RemYanflySaveInvalidTextJP = "このファイルは別のゲームで使用されています。";
const RemYanflySaveSelectHelpEN = "Please select a file slot.";
const RemYanflySaveSelectHelpJP = "ファイルを選んでください。";
const RemYanflySaveLoadHelpEN = "Loads the data from the saved game.";
const RemYanflySaveLoadHelpJP = "このファイルをロードします。";
const RemYanflySaveSaveHelpEN = "Saves the current progress in your game.";
const RemYanflySaveSaveHelpJP = "このファイルにセーブします。";
const RemYanflySaveDeleteHelpEN = "Deletes all data from this save file.";
const RemYanflySaveDeleteHelpJP = "このファイルを削除します。";
const RemYanflyAutosavingEN = "Autosaving...";
const RemYanflyAutosavingJP = "セーブ中...";

const RemYanflySavePlaytimeEN = "Playtime:";
const RemYanflySavePlaytimeJP = "プレイ時間:";
const RemYanflySaveTotalSavesEN = "Total Saves:";
const RemYanflySaveTotalSavesJP = "セーブ数:";
const RemYanflySaveTotalDaysEN = "Total Days Spent:";
const RemYanflySaveTotalDaysJP = "総合日数:";
const RemYanflySaveTotalPlaythroughsEN = "Total Playthroughs:";
const RemYanflySaveTotalPlaythroughsJP = "クリア数:";
const RemYanflySaveTotalEndingsEN = "Endings Seen:";
const RemYanflySaveTotalEndingsJP = "エンディング:";


const RemYanflyTargetEverybodyEN = "Everybody"; // currently unused
const RemYanflyTargetEverybodyJP = "Everybody"; // currently unused
const RemYanflyTargetMultiEverybodyEN = "Anyone"; // currently unused
const RemYanflyTargetMultiEverybodyJP = "Anyone"; // currently unused
const RemYanflyTargetMultiAlliesEN = "Any Ally"; // currently unused
const RemYanflyTargetMultiAlliesJP = "Any Ally"; // currently unused
const RemYanflyTargetMultiFoesEN = "Any Enemy"; // currently unused
const RemYanflyTargetMultiFoesJP = "Any Enemy"; // currently unused
const RemYanflyTargetFemaleAllyEN = "Female Ally"; // currently unused
const RemYanflyTargetFemaleAllyJP = "Female Ally"; // currently unused
const RemYanflyTargetFemaleEnemyEN = "Female Enemy"; // currently unused
const RemYanflyTargetFemaleEnemyJP = "Female Enemy"; // currently unused

const RemFTKRSkillTreeConfirmTextEN = "%2";
const RemFTKRSkillTreeConfirmTextJP = "%2";
const RemFTKRSkillTreeYesEN = "Enact";
const RemFTKRSkillTreeYesJP = "実行";
const RemFTKRSkillTreeNoEN = "Cancel";
const RemFTKRSkillTreeNoJP = "キャンセル";
const RemFTKRSkillTreeEdictPointsEN = "Edict Points:";
const RemFTKRSkillTreeEdictPointsJP = "指令値(EP)";
const RemFTKRSkillTreeEdictPointsAbbrEN = "EP";
const RemFTKRSkillTreeEdictPointsAbbrJP = "EP";
const RemFTKRSkillTreeOrderEN = "Order:";
const RemFTKRSkillTreeOrderJP = "秩序";
const RemFTKRSkillTreeFundingEN = "Funds:";
const RemFTKRSkillTreeFundingJP = "資金";
const RemFTKRSkillTreeFundingCostEN = "Cost:";
const RemFTKRSkillTreeFundingCostJP = "コスト";
const RemFTKRSkillTreeCostItemEN = "%1 Cost:"; // currently unused
const RemFTKRSkillTreeCostItemJP = "%1 コスト"; // currently unused
const RemFTKRSkillTreePreReqTextEN = "\\c[16]Requirements:";
const RemFTKRSkillTreePreReqTextJP = "\\c[16]【取得条件】";
const RemFTKRSkillTreeReqTypeEdictEN = "Edict: ";
const RemFTKRSkillTreeReqTypeEdictJP = "指令：";
const RemFTKRSkillTreeReqTypePassiveEN = "Passive: ";
const RemFTKRSkillTreeReqTypePassiveJP = "パッシブ：";


// currently unused
const RemGALVQuestCategoriesEN = "Main Quests|#ffcc66,Side Quests|#ffff99,Character Quests|#ccccff";
const RemGALVQuestCategoriesJP = "メインクエスト|#ffcc66,サイドクエスト|#ffff99,キャラクエスト|#ccccff";
const RemGALVQuestActiveEN = "Current";
const RemGALVQuestActiveJP = "実行中";
const RemGALVQuestCompletedEN = "Completed";
const RemGALVQuestCompletedJP = "達成済み";
const RemGALVQuestDetailsEN = "Details";
const RemGALVQuestDetailsJP = "詳細";
const RemGALVQuestObjectivesEN = "Objectives";
const RemGALVQuestObjectivesJP = "目的";

// currently unused
const RemGlossaryCatHelpEN = "Greetings! I am Enhalflinpedia! \nThe halfling with the encyclopedic knowledge! \nThese are the notes I have written down for you!";
const RemGlossaryCatHelpJP = "やぁ、よく来たね！\n僕は物知りボーイくんさ！\nThese are the notes I have written down for you!";
const RemGlossaryHelpEN = "To select a note to read, use the up and down arrow keys! \nIf the note you're reading has more than one page,\nuse the right and left arrow to change pages!";
const RemGlossaryHelpJP = "jp To select a note to read, use the up and down arrow keys! \nIf the note you're reading has more than one page,\nuse the right and left arrow to change pages!";

const RemErrorMessageEN = "If your error message says 'Array buffer allocation failed' or 'Out of memory', then your game has run out of memory so please close all other programs, ESPECIALLY BROWSER WINDOWS, before running Karryn's Prison. For all other errors, if your game files or save file haven't been modified, please take a screenshot of this screen and report it to the #kp-bug-reports channel on our Discord! Please also tell us what version of the game you are running, as well as many details of what happened before your error occurred! (v." + RemVersionText + ")";
const RemErrorMessageJP = "申し訳ありません。エラーが発生しました！メッセージ「Array buffer allocation failed」「Out of memory」が表示される場合、PCのメモリが不足しています。ゲームを起動する前に他のソフトウェア、特にブラウザソフトを全て閉じて下さい。その他エラーの場合は現在のバージョン、エラー発生時の状態、そしてこのエラー画面のスクリーンショットをRemtairyのDiscordにある「#バグ報告」チャンネルに添付していただければ、迅速に対応させていただきます。エラー発生前後の具体的な状況もお知らせ頂くと幸いです。お手数おかけして申し訳ございませんが、どうぞよろしくお願い致します！ (v."  + RemVersionText + ")";

const RemEquipTypesEN = ["","Weapon","Accessory","Title"];
const RemEquipTypesJP = ["","武器"," ｱｸｾｻﾘｰ ","称号"];

const RemSkillTypesEN = ["",
"Attack",
"Energy",
"Sexual",
"Willpower",
"Buffs",
"Debuffs",
"Passives",
"Edicts",
"Talk",
"Sight",
"Off-balance",
"Fallen",
"Masturbate",
"Disarmed",
"Waitress",
"Bartender",
"Receptionist",
"Toilet",
"Masturbate"
];

const RemSkillTypesJP = ["",
"攻撃スキル",
"精神スキル",
"性スキル",
"意思スキル",
"強化スキル",
"弱体スキル",
"パッシブ",
"指令",
"猥談",
"視姦",
"足がフラつく…",
"立たないと…",
"オナニー",
"再武装",
"ウェイトレス",
"バーテンダー",
"受付嬢",
"トイレ",
"オナニー"
];

//Enemy Types
const RemPrisonerGenericEN = "Prisoner";
const RemPrisonerGenericJP = "囚人";
const RemPrisonerGuardEN = "Guard";
const RemPrisonerGuardJP = "警備兵";
const RemPrisonerThugEN = "Thug";
const RemPrisonerThugJP = "チンピラ";
const RemPrisonerGoblinEN = "Goblin";
const RemPrisonerGoblinJP = "ゴブリン";
const RemPrisonerOrcEN = "Orc";
const RemPrisonerOrcJP = "オーク";
const RemPrisonerSlimeEN = "Slime";
const RemPrisonerSlimeJP = "スライム";
const RemPrisonerNerdEN = "Nerd";
const RemPrisonerNerdJP = "オタク";
const RemPrisonerRogueEN = "Rogue";
const RemPrisonerRogueJP = "盗賊";
const RemPrisonerLizardmanEN = "Lizardman";
const RemPrisonerLizardmanJP = "リザードマン";
const RemPrisonerHomelessEN = "Hobo";
const RemPrisonerHomelessJP = "浮浪者";
const RemPrisonerWerewolfEN = "Werewolf";
const RemPrisonerWerewolfJP = "ウェアウルフ";
const RemPrisonerYetiEN = "Yeti";
const RemPrisonerYetiJP = "イエティ";


const RemReceptionistVisitorEN = "Visitor";
const RemReceptionistVisitorJP = "面会人";
const RemReceptionistFanEN = "Fan";
const RemReceptionistFanJP = "ファン";

//Boss Types
const RemBossYasuEN = "Deputy Warden";
const RemBossYasuJP = "副長官";
const RemBossTonkinEN = "Orc";
const RemBossTonkinJP = "オーク";
const RemBossCargillEN = "Doctor";
const RemBossCargillJP = "Dr.";
const RemBossAronEN = "Alpha Lizardman";
const RemBossAronJP = "アルファリザードマン";
const RemBossNoinimEN = "Great Yeti";
const RemBossNoinimJP = "グレートイエティ";

//Skills
const RemRestoreMindPartialSuccessEN = "%1 succeeds in restoring a bit of her mind.";
const RemRestoreMindPartialSuccessJP = "%1の絶頂はわずかに収まった。";
const RemRestoreMindFullSuccessEN = "%1 succeeds in regaining her mind!";
const RemRestoreMindFullSuccessJP = "%1の絶頂は完全に収まった！";
const RemRestoreMindFailureEN = "%1 wasn't able to restore her mind...";
const RemRestoreMindFailureJP = "%1の絶頂は収まらなかった…。";

//Waitress
const RemAlcoholTypeWaterEN = "glass of water";
const RemAlcoholTypeWaterJP = "水";
const RemAlcoholTypePaleAleEN = "pint of pale ale";
const RemAlcoholTypePaleAleJP = "生ビール";
const RemAlcoholTypeDarkAleEN = "pint of dark ale";
const RemAlcoholTypeDarkAleJP = "黒ビール";
const RemAlcoholTypeVodkaEN = "glass of vodka";
const RemAlcoholTypeVodkaJP = "ウォッカ";
const RemAlcoholTypeTequilaEN = "glass of tequila";
const RemAlcoholTypeTequilaJP = "テキーラ";
const RemAlcoholTypeGoldRumEN = "glass of gold rum";
const RemAlcoholTypeGoldRumJP = "ゴールドラム";
const RemAlcoholTypeOverproofRumEN = "glass of overproof rum";
const RemAlcoholTypeOverproofRumJP = "高アルコールラム";
const RemAlcoholTypeWhiskeyEN = "glass of whiskey";
const RemAlcoholTypeWhiskeyJP = "ウイスキー";
const RemAlcoholTypeDirtyMugsSingularEN = "used mug";
const RemAlcoholTypeDirtyMugsSingularJP = "空ジョッキ";
const RemAlcoholTypeDirtyMugsPluralEN = "used mugs";
const RemAlcoholTypeDirtyMugsPluralJP = "重ねた空ジョッキ";
const RemAlcoholTypeDirtyGlassesSingularEN = "used glass";
const RemAlcoholTypeDirtyGlassesSingularJP = "空グラス";
const RemAlcoholTypeDirtyGlassesPluralEN = "used glasses";
const RemAlcoholTypeDirtyGlassesPluralJP = "重ねた空グラス";

const RemWaitressGetsTipEN = "\\C[3]%1 gets a tip of %2 gold!";
const RemWaitressGetsTipJP = "\\C[3]%1は%2Ｇのチップをゲット！";
const RemWaitressEnemySleepEN = "%1 drunkenly falls asleep on the table.";
const RemWaitressEnemySleepJP = "%1は酔いつぶれてテーブルに突っ伏したまま眠った。";
const RemWaitressEnemyWakeUpEN = "%1 jolts awake from all the commotion.";
const RemWaitressEnemyWakeUpJP = "%1は喧騒で目が覚めた。";
const RemWaitressEnemyLeavesBarEN = "\\C[8]%1 gets up and leaves the bar.";
const RemWaitressEnemyLeavesBarJP = "\\C[8]%1は起き上がって酒場から立ち去った。";
const RemWaitressEnemyLeavesBarDrunkEN = "\\C[8]%1 gets up and drunkenly stumbles out of the bar.";
const RemWaitressEnemyLeavesBarDrunkJP = "\\C[8]%1は起き上がると、酔った足取りで酒場から去った。";
const RemWaitressEnemyCallingForWaitressEN = "\\C[2]%1 starts calling for a waitress's attention.";
const RemWaitressEnemyCallingForWaitressJP = "\\C[2]%1はウェイトレスを呼んでいる！";
const RemWaitressEnemyDidntCallForWaitressEN = "However, %1 did not call for a waitress.";
const RemWaitressEnemyDidntCallForWaitressJP = "しかし%1はまだ、何を飲むか決めかねているようだ。";
const RemWaitressEnemyAskingForDrinkEN = "\\C[2]%1 would like to have a %2.";
const RemWaitressEnemyAskingForDrinkJP = "\\C[2]%1は『%2』を注文した。";
const RemWaitressEnemyAskingForWaitressToDrinkEN = "%1 is offering to give %2 a tip if she takes a sip of his drink.";
const RemWaitressEnemyAskingForWaitressToDrinkJP = "%1は彼の飲み残しを飲めば、チップを渡すと提案してきた。";
const RemWaitressEnemyAskingForWaitressToFlashEN = "%1 is offering to give %2 a tip if she flashes her hot body.";
const RemWaitressEnemyAskingForWaitressToFlashJP = "%1は%2が服をまくれば、チップを渡すと提案してきた。";
const RemWaitressRefusesDrinkEN = "But %1 refuses the drink to the disappointment of everyone around her.";
const RemWaitressRefusesDrinkJP = "しかし、%1はプライドを守るために断った。";
const RemWaitressAcceptsDrinkEN = "\\C[31]%1 takes a sip of the drink while everyone grins and cheers.";
const RemWaitressAcceptsDrinkJP = "\\C[31]客達が注目する中、%1は一口だけすすった。";
const RemWaitressWontFlashEN = "But %1 refuses to flash her body to random men in a bar.";
const RemWaitressWontFlashJP = "しかし、%1は拒否した。";
const RemWaitressFlashesEN = "\\C[27]%1 smiles and gives everyone an eyeful to look at.";
const RemWaitressFlashesJP = "\\C[27]%1は笑みを浮かべて応じた。";
const RemWaitressEnemyRefusesDrinkEN = "But %1 didn't ask for that drink.";
const RemWaitressEnemyRefusesDrinkJP = "しかし、%1は受け取らなかった。";
const RemWaitressEnemyAcceptsDrinkEN = "%1 takes and pays for the drink.";
const RemWaitressEnemyAcceptsDrinkJP = "%1は受け取ると、料金を支払った。";
const RemWaitressEnemyAlcoholKissEN = "\\C[27]%1 force fed %2 his drink while kissing her!";
const RemWaitressEnemyAlcoholKissJP = "\\C[27]%1は口移しで%2に飲ませた！";
const RemWaitressEnemyCheerForBrawlNoDrinkEN = "%1 cheers as he watches the ongoing brawl.";
const RemWaitressEnemyCheerForBrawlNoDrinkJP = "%1は喧嘩をあおっている。";
const RemWaitressEnemyCheerForBrawlYesDrinkEN = "%1 drinks as he cheers and watches the ongoing brawl.";
const RemWaitressEnemyCheerForBrawlYesDrinkJP = "%1は喧嘩を楽しみながら飲んでいる。";
const RemWaitressBrawlStartEN = "\\C[18]A brawl has started!!";
const RemWaitressBrawlStartJP = "\\C[18]喧嘩が始まった！！";
const RemWaitressBrawlJoinEN = "\\C[18]%1 eagerly jumps into the brawl!";
const RemWaitressBrawlJoinJP = "\\C[18]%1が喧嘩に参加した！";
const RemWaitressBarDamageEN = "\\C[3]The bar takes %1 gold worth of damage!";
const RemWaitressBarDamageJP = "\\C[3]酒場は%1Ｇの損害！";
const RemWaitressEnemyTellsJokeEN = "%1 starts telling a joke.";
const RemWaitressEnemyTellsJokeJP = "%1はクダを巻き始めた。";
const RemWaitressEnemyContinuesJokeEN = "%1 continues to share his joke.";
const RemWaitressEnemyContinuesJokeJP = "%1はまだクダを巻いている。";
const RemWaitressEnemyHearsJokeEN = "%1 listens to %2's joke.";
const RemWaitressEnemyHearsJokeJP = "%1は%2の冗談に付き合っている。";
const RemWaitressEnemyLaughsJokeEN = "%1 laughs at %2's joke.";
const RemWaitressEnemyLaughsJokeJP = "%1は%2のジョークにウケている。";
const RemWaitressEnemyChugsDrinkEN = "%1 starts chugging his drink.";
const RemWaitressEnemyChugsDrinkJP = "%1は一気飲みした。";
const RemWaitressEnemyChugsDrinkFinishEN = "%1 chugs down the rest of his drink.";
const RemWaitressEnemyChugsDrinkFinishJP = "%1は残りを一気飲みした。";
const RemWaitressEnemyChattingEN = "%1 chats with %2.";
const RemWaitressEnemyChattingJP = "%1は%2と雑談している。";
const RemWaitressEnemyChattingHimselfEN = "%1 talks to himself.";
const RemWaitressEnemyChattingHimselfJP = "%1は独り言をつぶやいている。";
const RemWaitressEnemyEntersBarEN = "\\C[2]%1 enters the bar and sits down at %2.";
const RemWaitressEnemyEntersBarJP = "\\C[2]%1が入店して来た。%1は%2席に腰掛けた。";
const RemWaitressEnemyFumingEN = "\\C[10]%1 has a dark look on his face...";
const RemWaitressEnemyFumingJP = "\\C[10]%1は暗い面持ちをしている……。";
const RemWaitressEnemyStartSexEN = "\\C[27]%2 drunkenly stumbles a bit and %1 helps her rest her body on top of the table!!!";
const RemWaitressEnemyStartSexJP = "\\C[27]%1は酔った%2をテーブルに押し倒した！！！";
const RemWaitressEnemyRefillsKarrynMugEN = "%1 refills %2's mug with more pale ale!";
const RemWaitressEnemyRefillsKarrynMugJP = "%1は%2のジョッキへ更にビールを注ぎ込んだ！";
const RemWaitressEnemyDumpsKarrynMugEN = "%1 takes %2's mug and dumps all the ale on the floor!";
const RemWaitressEnemyDumpsKarrynMugJP = "%1がおっぱいジョッキの中身を捨てた！";
const RemWaitressDrinkSemenMugEN = "\\C[27]%1 gulps down \\C[1]%2 ml of semen!";
const RemWaitressDrinkSemenMugJP = "\\C[27]%1はジョッキに溜まったザーメンを飲み干した！！ザーメン量\\C[1]%2ml\\C[0]！！";

const RemReceptionistVisitingRoomA_EN = "Visiting Room A";
const RemReceptionistVisitingRoomA_JP = "面会室Ａ";
const RemReceptionistVisitingRoomB_EN = "Visiting Room B";
const RemReceptionistVisitingRoomB_JP = "面会室Ｂ";
const RemReceptionistVisitingRoomC_EN = "Visiting Room C";
const RemReceptionistVisitingRoomC_JP = "面会室Ｃ";
const RemReceptionistVisitingRoomD_EN = "Visiting Room D";
const RemReceptionistVisitingRoomD_JP = "面会室Ｄ";

const RemReceptionistNewVisitorEN = "\\C[2]%1 got assigned their number and sits down.";
const RemReceptionistNewVisitorJP = "\\C[2]%1は番号札を受け取って着席した。";
const RemReceptionistNewGoblinEN = "\\C[10]A goblin has appeared!";
const RemReceptionistNewGoblinJP = "\\C[10]ゴブリンが侵入してきた！";
const RemReceptionistGoblinDefeatedEN = "\\C[8]%1 has fled away!";
const RemReceptionistGoblinDefeatedJP = "\\C[8]%1は立ち去った！";
const RemReceptionistVisitorEntersVisitingRoomEN = "\\C[11]%1 entered %2.";
const RemReceptionistVisitorEntersVisitingRoomJP = "\\C[11]%1は%2へ向かって行った。";
const RemReceptionistVisitingRoomStatusOccupiedPluralEN = "\\C[23]\"%1 is in use for %2 more minutes, over!\"";
const RemReceptionistVisitingRoomStatusOccupiedPluralJP = "\\C[23]「%1は%2分以上使用中になっています！」";
const RemReceptionistVisitingRoomStatusOccupiedSingleEN = "\\C[23]\"%1 is in use for one more minute, over!\"";
const RemReceptionistVisitingRoomStatusOccupiedSingleJP = "\\C[23]「%1は1分以上使用中になっています！」";
const RemReceptionistVisitingRoomStatusNotOccupiedEN = "\\C[23]\"%1 is currently not being used, over!\"";
const RemReceptionistVisitingRoomStatusNotOccupiedJP = "\\C[23]「現在、%1は空室です！」";
const RemReceptionistVisitorWantsToHandOverPaperEN = "%1 is waiting to hand over their filled out paperwork.";
const RemReceptionistVisitorWantsToHandOverPaperJP = "%1は記入済み申込書を手渡そうとしている。";
const RemReceptionistVisitorAngryComplaint_OccupiedVisitingRoomEN = "\\C[10]%1 is complaining that %2 was still occupied.";
const RemReceptionistVisitorAngryComplaint_OccupiedVisitingRoomJP = "%2は別の面会人が使っている！\\C[10]%1が苦情を言ってきた。";
const RemReceptionistGreetVisitorResultNormalEN = "%1 replies that they are here for visitation.";
const RemReceptionistGreetVisitorResultNormalJP = "%1は囚人との面会に来ているようだ。";
const RemReceptionistFinishedProcessingPapersEN = "%1's papers are processed. They're allowed %2 minutes of visitation.";
const RemReceptionistFinishedProcessingPapersJP = "申込書の処理が完了。%1の面会時間：%2分";
const RemReceptionistVisitorLeavesAngryEN = "\\C[10]%1 suddenly angrily leaves the Visitor Center!";
const RemReceptionistVisitorLeavesAngryJP = "\\C[10]%1は怒ってその場から立ち去ってしまった！";
const RemReceptionistFanLeavesHappyEN = "%1 leaves the Visitor Center with a smile.";
const RemReceptionistFanLeavesHappyJP = "%1は笑顔で受付所から立ち去った。";
const RemReceptionistFanLeavesDejectedEN = "%1 dejectedly leaves the Visitor Center.";
const RemReceptionistFanLeavesDejectedJP = "%1はガックリして受付所から立ち去った……。";
const RemReceptionistPervLeavesHappyEN = "%1 leaves the Visitor Center with a huge grin.";
const RemReceptionistPervLeavesHappyJP = "%1はスッキリして受付所から立ち去った。";
const RemReceptionistPervLeavesAngryEN = "%1 angrily leaves the Visitor Center.";
const RemReceptionistPervLeavesAngryJP = "%1は欲求不満のまま受付所から立ち去った……。";
const RemReceptionistNotHereForVisitationEN = "Seems like %1 is not actually interested in visiting any inmates!";
const RemReceptionistNotHereForVisitationJP = "%1はカリンに会いに来ただけだった！";

const RemGloryBattleEndEN = "The door opens...";
const RemGloryBattleEndJP = "■ お手洗いタイム 終了 ■";
const RemGloryLeftStallCockNameEN = "The Cock on the Left";
const RemGloryLeftStallCockNameJP = "左のチンポ";
const RemGloryRightStallCockNameEN = "The Cock on the Right";
const RemGloryRightStallCockNameJP = "右のチンポ";
const RemGloryGuestEnterBathroomEN = "\\C[8]Someone has entered the bathroom.";
const RemGloryGuestEnterBathroomJP = "\\C[8]トイレに人が来た気配がする……。";
const RemGloryGuestLeaveBathroomEN = "\\C[8]Someone has left the bathroom.";
const RemGloryGuestLeaveBathroomJP = "\\C[8]誰かがトイレから立ち去った。";
const RemGloryGuestEnterLeftStallEN = "\\C[7]Someone has entered the left stall.";
const RemGloryGuestEnterLeftStallJP = "\\C[7]誰かが左の個室に入った。";
const RemGloryGuestLeaveLeftStallEN = "\\C[7]Someone has vacated the left stall.";
const RemGloryGuestLeaveLeftStallJP = "\\C[7]左の個室から人が出たようだ。";
const RemGloryGuestEnterRightStallEN = "\\C[7]Someone has entered the right stall.";
const RemGloryGuestEnterRightStallJP = "\\C[7]誰かが右の個室に入った。";
const RemGloryGuestLeaveRightStallEN = "\\C[7]Someone has vacated the right stall.";
const RemGloryGuestLeaveRightStallJP = "\\C[7]右の個室から人が出たようだ";
const RemGloryGuestPissingLeftStallEN = "\\C[8]Pissing sounds are coming from the left stall.";
const RemGloryGuestPissingLeftStallJP = "\\C[8]左の個室から小便の音がしている。";
const RemGloryGuestEatingLeftStallEN = "\\C[8]Food chewing sounds are coming from the left stall.";
const RemGloryGuestEatingLeftStallJP = "\\C[8]左の個室から食べる音が聞こえる。";
const RemGloryGuestPissingRightStallEN = "\\C[8]Pissing sounds are coming from the right stall.";
const RemGloryGuestPissingRightStallJP = "\\C[8]右の個室から小便の音がしている。";
const RemGloryGuestEatingRightStallEN = "\\C[8]Food chewing sounds are coming from the right stall.";
const RemGloryGuestEatingRightStallJP = "\\C[8]右の個室から食べる音が聞こえる。";
const RemGloryGuestShowedThroughLeftHoleEN = "\\C[27]A cock appears from the hole on the left!";
const RemGloryGuestShowedThroughLeftHoleJP = "\\C[27]左の穴からチンポが現れた！";
const RemGloryGuestShowedThroughRightHoleEN = "\\C[27]A cock appears from the hole on the right!";
const RemGloryGuestShowedThroughRightHoleJP = "\\C[27]右の穴からチンポが現れた！";

const RemMidBattleEnemyReinforcementEN = "\\C[2]%1 arrives as enemy reinforcement!";
const RemMidBattleEnemyReinforcementJP = "\\C[2]増援に%1が現れた！";

/////////
// TextManager
////////////

Object.defineProperties(TextManager, {
	isJapanese: {
		get: function() { 
		
			//if(!$gameTemp.isPlaytest() || !ConfigManager.remLanguage)
			//	return (RemLanguage === RemLanguageJP);
			//return (ConfigManager.remLanguage === RemLanguageJP);
			if($gameTemp.isPlaytest()) {
				return (ConfigManager.remLanguage === RemLanguageJP);
			}
			else {
				return KARRYN_PRISON_LANGUAGE === RemLanguageJP;
			}
		}, configurable: true
	},
	isEnglish: {
		get: function() { 
			//if(!$gameTemp.isPlaytest() || !ConfigManager.remLanguage)
			//	return (RemLanguage === RemLanguageEN);
			//return (ConfigManager.remLanguage === RemLanguageEN);
			if($gameTemp.isPlaytest()) {
				return (ConfigManager.remLanguage === RemLanguageEN);
			}
			else {
				return KARRYN_PRISON_LANGUAGE === RemLanguageEN;
			}
		}, configurable: true
	},
	isTChinese: {
		get: function() { 
			if($gameTemp.isPlaytest()) {
				return (ConfigManager.remLanguage === RemLanguageTCH);
			}
			else {
				return KARRYN_PRISON_LANGUAGE === RemLanguageTCH;
			}
		}, configurable: true
	},
	isSChinese: {
		get: function() { 
			if($gameTemp.isPlaytest()) {
				return (ConfigManager.remLanguage === RemLanguageSCH);
			}
			else {
				return KARRYN_PRISON_LANGUAGE === RemLanguageSCH;
			}
		}, configurable: true
	},
	isKorean: {
		get: function() { 
			if($gameTemp.isPlaytest()) {
				return (ConfigManager.remLanguage === RemLanguageKR);
			}
			else {
				return KARRYN_PRISON_LANGUAGE === RemLanguageKR;
			}
		}, configurable: true
	},
	
	
	wpAtk: {
		get: function() { 
			if(this.isJapanese) return WpAtkNameJP;
			else if(this.isEnglish) return WpAtkNameEN;
		}, configurable: true
	},	
	wpDef: {
		get: function() { 
			if(this.isJapanese) return WpDefNameJP;
			else if(this.isEnglish) return WpDefNameEN;
		}, configurable: true
	},	
	overblowProtection: {
		get: function() { 
			if(this.isJapanese) return OverblowProtectionNameJP;
			else if(this.isEnglish) return OverblowProtectionNameEN;
		}, configurable: true
	},	
	fatigue: {
		get: function() { 
			if(this.isJapanese) return FatigueNameJP;
			else if(this.isEnglish) return FatigueNameEN;
		}, configurable: true
	},
	fatigueGain: {
		get: function() { 
			if(this.isJapanese) return FatigueGainNameJP;
			else if(this.isEnglish) return FatigueGainNameEN;
		}, configurable: true
	},
	fatigueRecovery: {
		get: function() { 
			if(this.isJapanese) return FatigueRecoveryNameJP;
			else if(this.isEnglish) return FatigueRecoveryNameEN;
		}, configurable: true
	},
	maxWillpower: {
		get: function() { 
			if(this.isJapanese) return MaxWillpowerNameJP;
			else if(this.isEnglish) return MaxWillpowerNameEN;
		}, configurable: true
	},	
	willpower: {
		get: function() { 
			if(this.isJapanese) return WillpowerNameJP;
			else if(this.isEnglish) return WillpowerNameEN;
		}, configurable: true
	},	
	willpowerAbbr: {
		get: function() { 
			if(this.isJapanese) return WillpowerAbbrJP;
			else if(this.isEnglish) return WillpowerAbbrEN;
		}, configurable: true
	},		
	cooldownTurnsSingular: {
		get: function() { 
			if(this.isJapanese) return CooldownTurnsSingularNameJP;
			else if(this.isEnglish) return CooldownTurnsSingularNameEN;
		}, configurable: true
	},	
	cooldownTurnsPlural: {
		get: function() { 
			if(this.isJapanese) return CooldownTurnsPluralNameJP;
			else if(this.isEnglish) return CooldownTurnsPluralNameEN;
		}, configurable: true
	},	
	cockiness: {
		get: function() { 
			if(this.isJapanese) return CockinessNameJP;
			else if(this.isEnglish) return CockinessNameEN;
		}, configurable: true
	},	
	cockinessIncrease: {
		get: function() { 
			if(this.isJapanese) return CockinessIncreasedTextJP;
			else if(this.isEnglish) return CockinessIncreasedTextEN;
		}, configurable: true
	},
	cockinessDecrease: {
		get: function() { 
			if(this.isJapanese) return CockinessDecreasedTextJP;
			else if(this.isEnglish) return CockinessDecreasedTextEN;
		}, configurable: true
	},	
	cockinessReset: {
		get: function() { 
			if(this.isJapanese) return CockinessResetJP;
			else if(this.isEnglish) return CockinessResetEN;
		}, configurable: true
	},	
	cockinessMaxxedOut: {
		get: function() { 
			if(this.isJapanese) return CockinessMaxxedOutJP;
			else if(this.isEnglish) return CockinessMaxxedOutEN;
		}, configurable: true
	},	

	critDmgName: {
		get: function() { 
			if(this.isJapanese) return CritDmgNameJP;
			else if(this.isEnglish) return CritDmgNameEN;
		}, configurable: true
	},
	resistName: {
		get: function() { 
			if(this.isJapanese) return ResistNameJP;
			else if(this.isEnglish) return ResistNameEN;
		}, configurable: true
	},
    loadFileName: {
		get: function() { 
			if(this.isJapanese) return LoadNameJP;
			else if(this.isEnglish) return LoadNameEN;
		}, configurable: true
	},
	saveFileName: {
		get: function() { 
			if(this.isJapanese) return SaveNameJP;
			else if(this.isEnglish) return SaveNameEN;
		}, configurable: true
	},
	deleteFileName: {
		get: function() { 
			if(this.isJapanese) return DeleteNameJP;
			else if(this.isEnglish) return DeleteNameEN;
		}, configurable: true
	},
    safeMode: { 
		get: function() { 
			if(this.isJapanese) return SafeModeJP;
			else if(this.isEnglish) return SafeModeEN;
		}, configurable: true
	},
	replayMode: { 
		get: function() { 
			if(this.isJapanese) return ReplayModeJP;
			else if(this.isEnglish) return ReplayModeEN;
		}, configurable: true
	},
	pixelMovement: { 
		get: function() { 
			if(this.isJapanese) return PixelMovementJP;
			else if(this.isEnglish) return PixelMovementEN;
		}, configurable: true
	},	
	battleLog: { 
		get: function() { 
			if(this.isJapanese) return BattleLogJP;
			else if(this.isEnglish) return BattleLogEN;
		}, configurable: true
	},	
	battleStatus: { 
		get: function() { 
			if(this.isJapanese) return BattleStatusJP;
			else if(this.isEnglish) return BattleStatusEN;
		}, configurable: true
	},	
	edicts: { 
		get: function() { 
			if(this.isJapanese) return EdictsJP;
			else if(this.isEnglish) return EdictsEN;
		}, configurable: true
	},
	edictCostName: { 
		get: function() { 
			if(this.isJapanese) return EdictCostJP;
			else if(this.isEnglish) return EdictCostEN;
		}, configurable: true
	},
	
	questLog: { 
		get: function() { 
			if(this.isJapanese) return QuestLogJP;
			else if(this.isEnglish) return QuestLogEN;
		}, configurable: true
	},	
	glossary: { 
		get: function() { 
			if(this.isJapanese) return GlossaryJP;
			else if(this.isEnglish) return GlossaryEN;
		}, configurable: true
	},	
	PassiveObtainedOn: { 
		get: function() { 
			if(this.isJapanese) return PassiveObtainedOnJP;
			else if(this.isEnglish) return PassiveObtainedOnEN;
		}, configurable: true
	},
	
	staminaRecovery: { 
		get: function() { 
			if(this.isJapanese) return StaminaRecoveryJP;
			else if(this.isEnglish) return StaminaRecoveryEN;
		}, configurable: true
	},		
	energyRecovery: { 
		get: function() { 
			if(this.isJapanese) return EnergyRecoveryJP;
			else if(this.isEnglish) return EnergyRecoveryEN;
		}, configurable: true
	},		
	karrynTauntMessage: { 
		get: function() { 
			if(this.isJapanese) return KarrynTauntMessageJP;
			else if(this.isEnglish) return KarrynTauntMessageEN;
		}, configurable: true
	},	
	karrynFlauntMessage: { 
		get: function() { 
			if(this.isJapanese) return KarrynFlauntMessageJP;
			else if(this.isEnglish) return KarrynFlauntMessageEN;
		}, configurable: true
	},	
	
	aronCallLizardmanFail: { 
		get: function() { 
			if(this.isJapanese) return AronCallLizardmanFailJP;
			else if(this.isEnglish) return AronCallLizardmanFailEN;
		}, configurable: true
	},	
	
	actorGainPleasure: { 
		get: function() { 
			if(this.isJapanese) return ActorGainPleasureJP;
			else if(this.isEnglish) return ActorGainPleasureEN;
		}, configurable: true
	},	
	actorGainPleasure_Sight: { 
		get: function() { 
			if(this.isJapanese) return ActorGainPleasure_SightJP;
			else if(this.isEnglish) return ActorGainPleasure_SightEN;
		}, configurable: true
	},	
	actorGainPleasure_Toy: { 
		get: function() { 
			if(this.isJapanese) return ActorGainPleasure_ToyJP;
			else if(this.isEnglish) return ActorGainPleasure_ToyEN;
		}, configurable: true
	},
	pleasurePercentText: { 
		get: function() { 
			if(this.isJapanese) return PleasurePercentTextJP;
			else if(this.isEnglish) return PleasurePercentTextEN;
		}, configurable: true
	},	
	enemyGainPleasurePercent: { 
		get: function() { 
			if(this.isJapanese) return EnemyGainPleasure_Percent_JP;
			else if(this.isEnglish) return EnemyGainPleasure_Percent_EN;
		}, configurable: true
	},		
	enemyGainPleasureValue: { 
		get: function() { 
			if(this.isJapanese) return EnemyGainPleasure_Value_JP;
			else if(this.isEnglish) return EnemyGainPleasure_Value_EN;
		}, configurable: true
	},	
	
	
	actorSingleOrgasm: { 
		get: function() { 
			if(this.isJapanese) return ActorSingleOrgasmJP;
			else if(this.isEnglish) return ActorSingleOrgasmEN;
		}, configurable: true
	},	
	actorMultipleOrgasm: { 
		get: function() { 
			if(this.isJapanese) return ActorMultipleOrgasmJP;
			else if(this.isEnglish) return ActorMultipleOrgasmEN;
		}, configurable: true
	},	
	ejaculatePussy: { 
		get: function() { 
			if(this.isJapanese) return EjaculatePussyJP;
			else if(this.isEnglish) return EjaculatePussyEN;
		}, configurable: true
	},	
	ejaculateAnal: { 
		get: function() { 
			if(this.isJapanese) return EjaculateAnalJP;
			else if(this.isEnglish) return EjaculateAnalEN;
		}, configurable: true
	},		
	ejaculateMouth: { 
		get: function() { 
			if(this.isJapanese) return EjaculateMouthJP;
			else if(this.isEnglish) return EjaculateMouthEN;
		}, configurable: true
	},	
	bukkakeFace: { 
		get: function() { 
			if(this.isJapanese) return BukkakeFaceJP;
			else if(this.isEnglish) return BukkakeFaceEN;
		}, configurable: true
	},	
	bukkakeBoobs: { 
		get: function() { 
			if(this.isJapanese) return BukkakeBoobsJP;
			else if(this.isEnglish) return BukkakeBoobsEN;
		}, configurable: true
	},	
	bukkakeArms: { 
		get: function() { 
			if(this.isJapanese) return BukkakeArmsJP;
			else if(this.isEnglish) return BukkakeArmsEN;
		}, configurable: true
	},	
	bukkakeLegs: { 
		get: function() { 
			if(this.isJapanese) return BukkakeLegsJP;
			else if(this.isEnglish) return BukkakeLegsEN;
		}, configurable: true
	},	
	
	bukkakeButt: { 
		get: function() { 
			if(this.isJapanese) return BukkakeButtJP;
			else if(this.isEnglish) return BukkakeButtEN;
		}, configurable: true
	},	
	actorFirstKissMouth: { 
		get: function() { 
			if(this.isJapanese) return ActorFirstKissMouthJP;
			else if(this.isEnglish) return ActorFirstKissMouthEN;
		}, configurable: true
	},
	actorFirstKissCock: { 
		get: function() { 
			if(this.isJapanese) return ActorFirstKissCockJP;
			else if(this.isEnglish) return ActorFirstKissCockEN;
		}, configurable: true
	},
	actorFirstKissAnus: { 
		get: function() { 
			if(this.isJapanese) return ActorFirstKissAnusJP;
			else if(this.isEnglish) return ActorFirstKissAnusEN;
		}, configurable: true
	},
	actorLostPussyVirginity: { 
		get: function() { 
			if(this.isJapanese) return ActorLostPussyVirginityJP;
			else if(this.isEnglish) return ActorLostPussyVirginityEN;
		}, configurable: true
	},
	actorLostAnalVirginity: { 
		get: function() { 
			if(this.isJapanese) return ActorLostAnalVirginityJP;
			else if(this.isEnglish) return ActorLostAnalVirginityEN;
		}, configurable: true
	},
	invasionNoiseLevelOne: { 
		get: function() { 
			if(this.isJapanese) return InvasionNoiseLevelOneJP;
			else if(this.isEnglish) return InvasionNoiseLevelOneEN;
		}, configurable: true
	},
	invasionNoiseLevelTwo: { 
		get: function() { 
			if(this.isJapanese) return InvasionNoiseLevelTwoJP;
			else if(this.isEnglish) return InvasionNoiseLevelTwoEN;
		}, configurable: true
	},
	invasionNoiseLevelThree: { 
		get: function() { 
			if(this.isJapanese) return InvasionNoiseLevelThreeJP;
			else if(this.isEnglish) return InvasionNoiseLevelThreeEN;
		}, configurable: true
	},
	invasionNoiseLevelFour: { 
		get: function() { 
			if(this.isJapanese) return InvasionNoiseLevelFourJP;
			else if(this.isEnglish) return InvasionNoiseLevelFourEN;
		}, configurable: true
	},
	invasionBattleStart: { 
		get: function() { 
			if(this.isJapanese) return InvasionBattleStartJP;
			else if(this.isEnglish) return InvasionBattleStartEN;
		}, configurable: true
	},
	
	
	masturbateBattleTouchClit: { 
		get: function() { 
			if(this.isJapanese) return MasturbateBattleTouchClitJP;
			else if(this.isEnglish) return MasturbateBattleTouchClitEN;
		}, configurable: true
	},
	masturbateBattleTouchPussy: { 
		get: function() { 
			if(this.isJapanese) return MasturbateBattleTouchPussyJP;
			else if(this.isEnglish) return MasturbateBattleTouchPussyEN;
		}, configurable: true
	},
	masturbateBattleTouchBoobs: { 
		get: function() { 
			if(this.isJapanese) return MasturbateBattleTouchBoobsJP;
			else if(this.isEnglish) return MasturbateBattleTouchBoobsEN;
		}, configurable: true
	},
	masturbateBattleTouchNipples: { 
		get: function() { 
			if(this.isJapanese) return MasturbateBattleTouchNipplesJP;
			else if(this.isEnglish) return MasturbateBattleTouchNipplesEN;
		}, configurable: true
	},
	masturbateBattleTouchAnal: { 
		get: function() { 
			if(this.isJapanese) return MasturbateBattleTouchAnalJP;
			else if(this.isEnglish) return MasturbateBattleTouchAnalEN;
		}, configurable: true
	},
	masturbateBattleFingerPussy: { 
		get: function() { 
			if(this.isJapanese) return MasturbateBattleFingerPussyJP;
			else if(this.isEnglish) return MasturbateBattleFingerPussyEN;
		}, configurable: true
	},
	masturbateBattleFingerAnal: { 
		get: function() { 
			if(this.isJapanese) return MasturbateBattleFingerAnalJP;
			else if(this.isEnglish) return MasturbateBattleFingerAnalEN;
		}, configurable: true
	},
	masturbateBattleSuckFingers: { 
		get: function() { 
			if(this.isJapanese) return MasturbateBattleSuckFingersJP;
			else if(this.isEnglish) return MasturbateBattleSuckFingersEN;
		}, configurable: true
	},
	masturbateBattleSuckNipples: { 
		get: function() { 
			if(this.isJapanese) return MasturbateBattleSuckNipplesJP;
			else if(this.isEnglish) return MasturbateBattleSuckNipplesEN;
		}, configurable: true
	},
	
	SkillDescriptionNoValidTargets: { 
		get: function() { 
			if(this.isJapanese) return SkillDescriptionNoValidTargetsJP;
			else if(this.isEnglish) return SkillDescriptionNoValidTargetsEN;
		}, configurable: true
	},
	SkillDescriptionNotEnoughDesire: { 
		get: function() { 
			if(this.isJapanese) return SkillDescriptionNotEnoughDesireJP;
			else if(this.isEnglish) return SkillDescriptionNotEnoughDesireEN;
		}, configurable: true
	},
	SkillDescriptionCantDoThis: { 
		get: function() { 
			if(this.isJapanese) return SkillDescriptionCantDoThisJP;
			else if(this.isEnglish) return SkillDescriptionCantDoThisEN;
		}, configurable: true
	},
	SkillDescriptionHandsBusy: { 
		get: function() { 
			if(this.isJapanese) return SkillDescriptionHandsBusyJP;
			else if(this.isEnglish) return SkillDescriptionHandsBusyEN;
		}, configurable: true
	},
	SkillDescriptionNotWet: { 
		get: function() { 
			if(this.isJapanese) return SkillDescriptionNotWetJP;
			else if(this.isEnglish) return SkillDescriptionNotWetEN;
		}, configurable: true
	},
	

	TitleDescriptionFirstTimeTitleEquip: { 
		get: function() { 
			if(this.isJapanese) return TitleDescriptionFirstTimeTitleEquipJP;
			else if(this.isEnglish) return TitleDescriptionFirstTimeTitleEquipEN;
		}, configurable: true
	},

	
	wardenLevel: { 
		get: function() { 
			if(this.isJapanese) return WardenNameJP;
			else if(this.isEnglish) return WardenNameEN;
		}, configurable: true
	},	
	wardenLevelLimit: { 
		get: function() { 
			if(this.isJapanese) return WardenLvlLimitJP;
			else if(this.isEnglish) return WardenLvlLimitEN;
		}, configurable: true
	},
	
	slutLevel: { 
		get: function() { 
			if(this.isJapanese) return SlutNameJP;
			else if(this.isEnglish) return SlutNameEN;
		}, configurable: true
	},	
	statLevel: { 
		get: function() { 
			if(this.isJapanese) return StatLevelNameJP;
			else if(this.isEnglish) return StatLevelNameEN;
		}, configurable: true
	},	
	
	day: { 
		get: function() { 
			if(this.isJapanese) return DayNameJP;
			else if(this.isEnglish) return DayNameEN;
		}, configurable: true
	},		
	order: { 
		get: function() { 
			if(this.isJapanese) return OrderNameJP;
			else if(this.isEnglish) return OrderNameEN;
		}, configurable: true
	},		
	orderChange: { 
		get: function() { 
			if(this.isJapanese) return OrderChangeNameJP;
			else if(this.isEnglish) return OrderChangeNameEN;
		}, configurable: true
	},			
	corruption: { 
		get: function() { 
			if(this.isJapanese) return CorruptionNameJP;
			else if(this.isEnglish) return CorruptionNameEN;
		}, configurable: true
	},		
	titles: { 
		get: function() { 
			if(this.isJapanese) return TitlesNameJP;
			else if(this.isEnglish) return TitlesNameEN;
		}, configurable: true
	},
	
	funding: { 
		get: function() { 
			if(this.isJapanese) return FundingNameJP;
			else if(this.isEnglish) return FundingNameEN;
		}, configurable: true
	},		
	ledger: { 
		get: function() { 
			if(this.isJapanese) return LedgerNameJP;
			else if(this.isEnglish) return LedgerNameEN;
		}, configurable: true
	},
	
	income: { 
		get: function() { 
			if(this.isJapanese) return IncomeNameJP;
			else if(this.isEnglish) return IncomeNameEN;
		}, configurable: true
	},		
	barIncome: { 
		get: function() { 
			if(this.isJapanese) return BarIncomeNameJP;
			else if(this.isEnglish) return BarIncomeNameEN;
		}, configurable: true
	},	
	storeIncome: { 
		get: function() { 
			if(this.isJapanese) return StoreIncomeNameJP;
			else if(this.isEnglish) return StoreIncomeNameEN;
		}, configurable: true
	},	
	outsourcingIncome: { 
		get: function() { 
			if(this.isJapanese) return OutsourcingIncomeNameJP;
			else if(this.isEnglish) return OutsourcingIncomeNameEN;
		}, configurable: true
	},	
	nerdBlackmail: { 
		get: function() { 
			if(this.isJapanese) return NerdBlackmailNameJP;
			else if(this.isEnglish) return NerdBlackmailNameEN;
		}, configurable: true
	},
	
	
	expense: { 
		get: function() { 
			if(this.isJapanese) return ExpenseNameJP;
			else if(this.isEnglish) return ExpenseNameEN;
		}, configurable: true
	},			
	estimatedSubsidies: { 
		get: function() { 
			if(this.isJapanese) return EstimatedSubsidiesNameJP;
			else if(this.isEnglish) return EstimatedSubsidiesNameEN;
		}, configurable: true
	},	
	estimatedProfit: { 
		get: function() { 
			if(this.isJapanese) return EstimatedProfitNameJP;
			else if(this.isEnglish) return EstimatedProfitNameEN;
		}, configurable: true
	},		
	estimatedLoss: { 
		get: function() { 
			if(this.isJapanese) return EstimatedLossNameJP;
			else if(this.isEnglish) return EstimatedLossNameEN;
		}, configurable: true
	},
	
	SecretaryMode: { 
		get: function() { 
			if(this.isJapanese) return SecretaryModeNameJP;
			else if(this.isEnglish) return SecretaryModeNameEN;
		}, configurable: true
	},
	WardenMode: { 
		get: function() { 
			if(this.isJapanese) return WardenModeNameJP;
			else if(this.isEnglish) return WardenModeNameEN;
		}, configurable: true
	},
	PrisonerMode: { 
		get: function() { 
			if(this.isJapanese) return PrisonerModeNameJP;
			else if(this.isEnglish) return PrisonerModeNameEN;
		}, configurable: true
	},
	
	RCMenuSleepQualityNegTwoText: { 
		get: function() { 
			if(this.isJapanese) return RCMenuSleepQualityNegTwoTextJP;
			else if(this.isEnglish) return RCMenuSleepQualityNegTwoTextEN;
		}, configurable: true
	},
	RCMenuSleepQualityNegOneText: { 
		get: function() { 
			if(this.isJapanese) return RCMenuSleepQualityNegOneTextJP;
			else if(this.isEnglish) return RCMenuSleepQualityNegOneTextEN;
		}, configurable: true
	},
	RCMenuSleepQualityZeroText: { 
		get: function() { 
			if(this.isJapanese) return RCMenuSleepQualityZeroTextJP;
			else if(this.isEnglish) return RCMenuSleepQualityZeroTextEN;
		}, configurable: true
	},
	RCMenuSleepQualityOneText: { 
		get: function() { 
			if(this.isJapanese) return RCMenuSleepQualityOneTextJP;
			else if(this.isEnglish) return RCMenuSleepQualityOneTextEN;
		}, configurable: true
	},
	RCMenuSleepQualityTwoText: { 
		get: function() { 
			if(this.isJapanese) return RCMenuSleepQualityTwoTextJP;
			else if(this.isEnglish) return RCMenuSleepQualityTwoTextEN;
		}, configurable: true
	},
	RCMenuSleepQualityThreeText: { 
		get: function() { 
			if(this.isJapanese) return RCMenuSleepQualityThreeTextJP;
			else if(this.isEnglish) return RCMenuSleepQualityThreeTextEN;
		}, configurable: true
	},
	RCMenuFatigueLevelOneText: { 
		get: function() { 
			if(this.isJapanese) return RCMenuFatigueLevelOneTextJP;
			else if(this.isEnglish) return RCMenuFatigueLevelOneTextEN;
		}, configurable: true
	},
	RCMenuFatigueLevelTwoText: { 
		get: function() { 
			if(this.isJapanese) return RCMenuFatigueLevelTwoTextJP;
			else if(this.isEnglish) return RCMenuFatigueLevelTwoTextEN;
		}, configurable: true
	},
	RCMenuFatigueLevelThreeText: { 
		get: function() { 
			if(this.isJapanese) return RCMenuFatigueLevelThreeTextJP;
			else if(this.isEnglish) return RCMenuFatigueLevelThreeTextEN;
		}, configurable: true
	},
	RCMenuFatigueLevelFourText: { 
		get: function() { 
			if(this.isJapanese) return RCMenuFatigueLevelFourTextJP;
			else if(this.isEnglish) return RCMenuFatigueLevelFourTextEN;
		}, configurable: true
	},
	RCMenuFatigueLevelFiveText: { 
		get: function() { 
			if(this.isJapanese) return RCMenuFatigueLevelFiveTextJP;
			else if(this.isEnglish) return RCMenuFatigueLevelFiveTextEN;
		}, configurable: true
	},
	RCMenuArousedLevelOneText: { 
		get: function() { 
			if(this.isJapanese) return RCMenuArousedLevelOneTextJP;
			else if(this.isEnglish) return RCMenuArousedLevelOneTextEN;
		}, configurable: true
	},
	RCMenuArousedLevelTwoText: { 
		get: function() { 
			if(this.isJapanese) return RCMenuArousedLevelTwoTextJP;
			else if(this.isEnglish) return RCMenuArousedLevelTwoTextEN;
		}, configurable: true
	},
	RCMenuFrustratedLevelOneText: { 
		get: function() { 
			if(this.isJapanese) return RCMenuFrustratedLevelOneTextJP;
			else if(this.isEnglish) return RCMenuFrustratedLevelOneTextEN;
		}, configurable: true
	},
	RCMenuFrustratedLevelTwoText: { 
		get: function() { 
			if(this.isJapanese) return RCMenuFrustratedLevelTwoTextJP;
			else if(this.isEnglish) return RCMenuFrustratedLevelTwoTextEN;
		}, configurable: true
	},
	RCMenuLostPantiesText: { 
		get: function() { 
			if(this.isJapanese) return RCMenuLostPantiesTextJP;
			else if(this.isEnglish) return RCMenuLostPantiesTextEN;
		}, configurable: true
	},
	RCMenuDefiledHalberdText: { 
		get: function() { 
			if(this.isJapanese) return RCMenuDefiledHalberdTextJP;
			else if(this.isEnglish) return RCMenuDefiledHalberdTextEN;
		}, configurable: true
	},
	
	RCMenuMetalSingleText: { 
		get: function() { 
			if(this.isJapanese) return RCMenuMetalSingleTextJP;
			else if(this.isEnglish) return RCMenuMetalSingleTextEN;
		}, configurable: true
	},
	RCMenuMetalPluralText: { 
		get: function() { 
			if(this.isJapanese) return RCMenuMetalPluralTextJP;
			else if(this.isEnglish) return RCMenuMetalPluralTextEN;
		}, configurable: true
	},
	
	RCMenuGiftsSingleText: { 
		get: function() { 
			if(this.isJapanese) return RCMenuGiftsSingleTextJP;
			else if(this.isEnglish) return RCMenuGiftsSingleTextEN;
		}, configurable: true
	},
	RCMenuGiftsPluralText: { 
		get: function() { 
			if(this.isJapanese) return RCMenuGiftsPluralTextJP;
			else if(this.isEnglish) return RCMenuGiftsPluralTextEN;
		}, configurable: true
	},
	
	prisonLevelName: { 
		get: function() { 
			if(this.isJapanese) return PrisonLevelNameJP;
			else if(this.isEnglish) return PrisonLevelNameEN;
		}, configurable: true
	},	
	prisonLevelStatusUnknown: { 
		get: function() { 
			if(this.isJapanese) return PrisonLevelStatusUnknownJP;
			else if(this.isEnglish) return PrisonLevelStatusUnknownEN;
		}, configurable: true
	},	
	prisonLevelStatusAnarchy: { 
		get: function() { 
			if(this.isJapanese) return PrisonLevelStatusAnarchyJP;
			else if(this.isEnglish) return PrisonLevelStatusAnarchyEN;
		}, configurable: true
	},	
	prisonLevelStatusSubjugated: { 
		get: function() { 
			if(this.isJapanese) return PrisonLevelStatusSubjugatedJP;
			else if(this.isEnglish) return PrisonLevelStatusSubjugatedEN;
		}, configurable: true
	},
	prisonLevelStatusRioting: { 
		get: function() { 
			if(this.isJapanese) return PrisonLevelStatusRiotingJP;
			else if(this.isEnglish) return PrisonLevelStatusRiotingEN;
		}, configurable: true
	},
	prisonMapLevelName: { 
		get: function() { 
			if(this.isJapanese) return PrisonMapLevelNameJP;
			else if(this.isEnglish) return PrisonMapLevelNameEN;
		}, configurable: true
	},
	prisonMapOutsideName: { 
		get: function() { 
			if(this.isJapanese) return PrisonMapOutsideNameJP;
			else if(this.isEnglish) return PrisonMapOutsideNameEN;
		}, configurable: true
	},
	prisonMapUnknownName: { 
		get: function() { 
			if(this.isJapanese) return PrisonMapUnknownNameJP;
			else if(this.isEnglish) return PrisonMapUnknownNameEN;
		}, configurable: true
	},
	prisonMapUndiscoveredName: { 
		get: function() { 
			if(this.isJapanese) return PrisonMapUndiscoveredNameJP;
			else if(this.isEnglish) return PrisonMapUndiscoveredNameEN;
		}, configurable: true
	},
	
	
	kissingLevel: { 
		get: function() { 
			if(this.isJapanese) return KissingLevelJP;
			else if(this.isEnglish) return KissingLevelEN;
		}, configurable: true
	},	
	pettingLevel: { 
		get: function() { 
			if(this.isJapanese) return PettingLevelJP;
			else if(this.isEnglish) return PettingLevelEN;
		}, configurable: true
	},	
	handjobLevel: { 
		get: function() { 
			if(this.isJapanese) return HandjobLevelJP;
			else if(this.isEnglish) return HandjobLevelEN;
		}, configurable: true
	},	
	blowjobLevel: { 
		get: function() { 
			if(this.isJapanese) return BlowjobLevelJP;
			else if(this.isEnglish) return BlowjobLevelEN;
		}, configurable: true
	},	
	footjobLevel: { 
		get: function() { 
			if(this.isJapanese) return FootjobLevelJP;
			else if(this.isEnglish) return FootjobLevelEN;
		}, configurable: true
	},
	rimjobLevel: { 
		get: function() { 
			if(this.isJapanese) return RimjobLevelJP;
			else if(this.isEnglish) return RimjobLevelEN;
		}, configurable: true
	},
	tittyFuckLevel: { 
		get: function() { 
			if(this.isJapanese) return TittyFuckLevelJP;
			else if(this.isEnglish) return TittyFuckLevelEN;
		}, configurable: true
	},	
	pussySexLevel: { 
		get: function() { 
			if(this.isJapanese) return PussyLevelJP;
			else if(this.isEnglish) return PussyLevelEN;
		}, configurable: true
	},	
	analSexLevel: { 
		get: function() { 
			if(this.isJapanese) return AnalLevelJP;
			else if(this.isEnglish) return AnalLevelEN;
		}, configurable: true
	},	
	masturbationLevel: { 
		get: function() { 
			if(this.isJapanese) return MasturbationLevelJP;
			else if(this.isEnglish) return MasturbationLevelEN;
		}, configurable: true
	},	
	sadismLevel: { 
		get: function() { 
			if(this.isJapanese) return SadismLevelJP;
			else if(this.isEnglish) return SadismLevelEN;
		}, configurable: true
	},	
	masochismLevel: { 
		get: function() { 
			if(this.isJapanese) return MasochismLevelJP;
			else if(this.isEnglish) return MasochismLevelEN;
		}, configurable: true
	},	
	mouthSensitivity: { 
		get: function() { 
			if(this.isJapanese) return MouthSensitivityJP;
			else if(this.isEnglish) return MouthSensitivityEN;
		}, configurable: true
	},	
	fingerSensitivity: { 
		get: function() { 
			if(this.isJapanese) return FingerSensitivityJP;
			else if(this.isEnglish) return FingerSensitivityEN;
		}, configurable: true
	},	
	boobsSensitivity: { 
		get: function() { 
			if(this.isJapanese) return BoobsSensitivityJP;
			else if(this.isEnglish) return BoobsSensitivityEN;
		}, configurable: true
	},	
	nipplesSensitivity: { 
		get: function() { 
			if(this.isJapanese) return NipplesSensitivityJP;
			else if(this.isEnglish) return NipplesSensitivityEN;
		}, configurable: true
	},	
	clitorisSensitivity: { 
		get: function() { 
			if(this.isJapanese) return ClitorisSensitivityJP;
			else if(this.isEnglish) return ClitorisSensitivityEN;
		}, configurable: true
	},	
	pussySensitivity: { 
		get: function() { 
			if(this.isJapanese) return PussySensitivityJP;
			else if(this.isEnglish) return PussySensitivityEN;
		}, configurable: true
	},	
	buttSensitivity: { 
		get: function() { 
			if(this.isJapanese) return ButtSensitivityJP;
			else if(this.isEnglish) return ButtSensitivityEN;
		}, configurable: true
	},	
	analSensitivity: { 
		get: function() { 
			if(this.isJapanese) return AnalSensitivityJP;
			else if(this.isEnglish) return AnalSensitivityEN;
		}, configurable: true
	},	
	footSensitivity: { 
		get: function() { 
			if(this.isJapanese) return FootSensitivityJP;
			else if(this.isEnglish) return FootSensitivityEN;
		}, configurable: true
	},	
	
	talkSensitivity: { 
		get: function() { 
			if(this.isJapanese) return TalkSensitivityJP;
			else if(this.isEnglish) return TalkSensitivityEN;
		}, configurable: true
	},	
	sightSensitivity: { 
		get: function() { 
			if(this.isJapanese) return SightSensitivityJP;
			else if(this.isEnglish) return SightSensitivityEN;
		}, configurable: true
	},	
	swallowSensitivity: { 
		get: function() { 
			if(this.isJapanese) return SwallowSensitivityJP;
			else if(this.isEnglish) return SwallowSensitivityEN;
		}, configurable: true
	},	
	pussyCreampieSensitivity: { 
		get: function() { 
			if(this.isJapanese) return PussyCreampieSensitivityJP;
			else if(this.isEnglish) return PussyCreampieSensitivityEN;
		}, configurable: true
	},	
	analCreampieSensitivity: { 
		get: function() { 
			if(this.isJapanese) return AnalCreampieSensitivityJP;
			else if(this.isEnglish) return AnalCreampieSensitivityEN;
		}, configurable: true
	},	
	bukkakeSensitivity: { 
		get: function() { 
			if(this.isJapanese) return BukkakeSensitivityJP;
			else if(this.isEnglish) return BukkakeSensitivityEN;
		}, configurable: true
	},	
	buttSpankingSensitivity: { 
		get: function() { 
			if(this.isJapanese) return ButtSpankingSensitivityJP;
			else if(this.isEnglish) return ButtSpankingSensitivityEN;
		}, configurable: true
	},	
	
	
	statusMenuPrimary: { 
		get: function() { 
			if(this.isJapanese) return StatusMenuPrimaryJP;
			else if(this.isEnglish) return StatusMenuPrimaryEN;
		}, configurable: true
	},	
	statusMenuSecondary: { 
		get: function() { 
			if(this.isJapanese) return StatusMenuSecondaryJP;
			else if(this.isEnglish) return StatusMenuSecondaryEN;
		}, configurable: true
	},
	statusMenuTertiary: { 
		get: function() { 
			if(this.isJapanese) return StatusMenuTertiaryJP;
			else if(this.isEnglish) return StatusMenuTertiaryEN;
		}, configurable: true
	},
	statusMenuProfile: { 
		get: function() { 
			if(this.isJapanese) return StatusMenuProfileJP;
			else if(this.isEnglish) return StatusMenuProfileEN;
		}, configurable: true
	},
	statusMenuRecords: { 
		get: function() { 
			if(this.isJapanese) return StatusMenuRecordsJP;
			else if(this.isEnglish) return StatusMenuRecordsEN;
		}, configurable: true
	},
	statusMenuDesire: { 
		get: function() { 
			if(this.isJapanese) return StatusMenuDesiresJP;
			else if(this.isEnglish) return StatusMenuDesiresEN;
		}, configurable: true
	},
	statusMenuEffects: { 
		get: function() { 
			if(this.isJapanese) return StatusMenuEffectsJP;
			else if(this.isEnglish) return StatusMenuEffectsEN;
		}, configurable: true
	},

	statusMenuStats: { 
		get: function() { 
			if(this.isJapanese) return StatusMenuStatsJP;
			else if(this.isEnglish) return StatusMenuStatsEN;
		}, configurable: true
	},
	statusMenuStatLevels: { 
		get: function() { 
			if(this.isJapanese) return StatusMenuStatLevelsJP;
			else if(this.isEnglish) return StatusMenuStatLevelsEN;
		}, configurable: true
	},
	statusMenuAttributes: { 
		get: function() { 
			if(this.isJapanese) return StatusMenuAttributesJP;
			else if(this.isEnglish) return StatusMenuAttributesEN;
		}, configurable: true
	},
	statusMenuResists: { 
		get: function() { 
			if(this.isJapanese) return StatusMenuResistsJP;
			else if(this.isEnglish) return StatusMenuResistsEN;
		}, configurable: true
	},
	statusMenuLevels: { 
		get: function() { 
			if(this.isJapanese) return StatusMenuLevelsJP;
			else if(this.isEnglish) return StatusMenuLevelsEN;
		}, configurable: true
	},
	statusMenuSensitivities: { 
		get: function() { 
			if(this.isJapanese) return StatusMenuSensitivitiesJP;
			else if(this.isEnglish) return StatusMenuSensitivitiesEN;
		}, configurable: true
	},
	
	statusMenuMouthDesireReq: { 
		get: function() { 
			if(this.isJapanese) return StatusMenuMouthDesireReqJP;
			else if(this.isEnglish) return StatusMenuMouthDesireReqEN;
		}, configurable: true
	},
	statusMenuBoobsDesireReq: { 
		get: function() { 
			if(this.isJapanese) return StatusMenuBoobsDesireReqJP;
			else if(this.isEnglish) return StatusMenuBoobsDesireReqEN;
		}, configurable: true
	},
	statusMenuPussyDesireReq: { 
		get: function() { 
			if(this.isJapanese) return StatusMenuPussyDesireReqJP;
			else if(this.isEnglish) return StatusMenuPussyDesireReqEN;
		}, configurable: true
	},
	statusMenuButtDesireReq: { 
		get: function() { 
			if(this.isJapanese) return StatusMenuButtDesireReqJP;
			else if(this.isEnglish) return StatusMenuButtDesireReqEN;
		}, configurable: true
	},
	statusMenuCockDesireReq: { 
		get: function() { 
			if(this.isJapanese) return StatusMenuCockDesireReqJP;
			else if(this.isEnglish) return StatusMenuCockDesireReqEN;
		}, configurable: true
	},
	
	profileNameText: { 
		get: function() { 
			if(this.isJapanese) return ProfileNameTextJP;
			else if(this.isEnglish) return ProfileNameTextEN;
		}, configurable: true
	},
	profileAgeText: { 
		get: function() { 
			if(this.isJapanese) return ProfileAgeTextJP;
			else if(this.isEnglish) return ProfileAgeTextEN;
		}, configurable: true
	},
	profileThreeSizesText: { 
		get: function() { 
			if(this.isJapanese) return ProfileThreeSizesTextJP;
			else if(this.isEnglish) return ProfileThreeSizesTextEN;
		}, configurable: true
	},
	profileBioText: { 
		get: function() { 
			if(this.isJapanese) return ProfileBioTextJP;
			else if(this.isEnglish) return ProfileBioTextEN;
		}, configurable: true
	},
	profileName: { 
		get: function() { 
			if(this.isJapanese) return ProfileNameJP;
			else if(this.isEnglish) return ProfileNameEN;
		}, configurable: true
	},
	profileThreeSizes: { 
		get: function() { 
			if(this.isJapanese) return ProfileThreeSizesJP;
			else if(this.isEnglish) return ProfileThreeSizesEN;
		}, configurable: true
	},
	profileBio_One: { 
		get: function() { 
			if(this.isJapanese) return ProfileBio_One_JP;
			else if(this.isEnglish) return ProfileBio_One_EN;
		}, configurable: true
	},
	
	profileRecordFirst: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordFirstJP;
			else if(this.isEnglish) return ProfileRecordFirstEN;
		}, configurable: true
	},
	profileRecordLast: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordLastJP;
			else if(this.isEnglish) return ProfileRecordLastEN;
		}, configurable: true
	},
	profileRecordSecret: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordSecretJP;
			else if(this.isEnglish) return ProfileRecordSecretEN;
		}, configurable: true
	},
	profileRecordNever: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordNeverJP;
			else if(this.isEnglish) return ProfileRecordNeverEN;
		}, configurable: true
	},
	profileRecordFirstKissWasPenis: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordFirstKissWasPenisJP;
			else if(this.isEnglish) return ProfileRecordFirstKissWasPenisEN;
		}, configurable: true
	},
	profileRecordFirstKissWasAnus: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordFirstKissWasAnusJP;
			else if(this.isEnglish) return ProfileRecordFirstKissWasAnusEN;
		}, configurable: true
	},

	profileRecordFirstPussySexWasDildo: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordFirstPussySexWasDildoJP;
			else if(this.isEnglish) return ProfileRecordFirstPussySexWasDildoEN;
		}, configurable: true
	},
	
	
	profileRecordKiss: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordKissJP;
			else if(this.isEnglish) return ProfileRecordKissEN;
		}, configurable: true
	},
	profileRecordSex: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordSexJP;
			else if(this.isEnglish) return ProfileRecordSexEN;
		}, configurable: true
	},
	profileRecordAnal: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordAnalJP;
			else if(this.isEnglish) return ProfileRecordAnalEN;
		}, configurable: true
	},
	profileRecordHandjob: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordHandjobJP;
			else if(this.isEnglish) return ProfileRecordHandjobEN;
		}, configurable: true
	},
	profileRecordBlowjob: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordBlowjobJP;
			else if(this.isEnglish) return ProfileRecordBlowjobEN;
		}, configurable: true
	},
	profileRecordTittyFuck: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordTittyFuckJP;
			else if(this.isEnglish) return ProfileRecordTittyFuckEN;
		}, configurable: true
	},
	profileRecordFootjob: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordFootjobJP;
			else if(this.isEnglish) return ProfileRecordFootjobEN;
		}, configurable: true
	},
	profileRecordRimjob: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordRimjobJP;
			else if(this.isEnglish) return ProfileRecordRimjobEN;
		}, configurable: true
	},
	profileRecordSwallow: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordSwallowJP;
			else if(this.isEnglish) return ProfileRecordSwallowEN;
		}, configurable: true
	},
	profileRecordPussyCreampie: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordPussyCreampieJP;
			else if(this.isEnglish) return ProfileRecordPussyCreampieEN;
		}, configurable: true
	},
	profileRecordAnalCreampie: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordAnalCreampieJP;
			else if(this.isEnglish) return ProfileRecordAnalCreampieEN;
		}, configurable: true
	},
	profileRecordBodyBukkake: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordBodyBukkakeJP;
			else if(this.isEnglish) return ProfileRecordBodyBukkakeEN;
		}, configurable: true
	},
	profileRecordFaceBukkake: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordFaceBukkakeJP;
			else if(this.isEnglish) return ProfileRecordFaceBukkakeEN;
		}, configurable: true
	},
	

	profileRecordCunnilingus: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordCunnilingusJP;
			else if(this.isEnglish) return ProfileRecordCunnilingusEN;
		}, configurable: true
	},
	profileRecordSuckFingers: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordSuckFingersJP;
			else if(this.isEnglish) return ProfileRecordSuckFingersEN;
		}, configurable: true
	},
	profileRecordButtSpank: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordButtSpankJP;
			else if(this.isEnglish) return ProfileRecordButtSpankEN;
		}, configurable: true
	},
	profileRecordBoobsPetting: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordBoobsPettingJP;
			else if(this.isEnglish) return ProfileRecordBoobsPettingEN;
		}, configurable: true
	},
	profileRecordNipplesPetting: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordNipplesPettingJP;
			else if(this.isEnglish) return ProfileRecordNipplesPettingEN;
		}, configurable: true
	},
	profileRecordClitPetting: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordClitPettingJP;
			else if(this.isEnglish) return ProfileRecordClitPettingEN;
		}, configurable: true
	},
	profileRecordPussyPetting: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordPussyPettingJP;
			else if(this.isEnglish) return ProfileRecordPussyPettingEN;
		}, configurable: true
	},
	profileRecordButtPetting: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordButtPettingJP;
			else if(this.isEnglish) return ProfileRecordButtPettingEN;
		}, configurable: true
	},
	profileRecordAnalPetting: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordAnalPettingJP;
			else if(this.isEnglish) return ProfileRecordAnalPettingEN;
		}, configurable: true
	},
	profileRecordClitToy: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordClitToyJP;
			else if(this.isEnglish) return ProfileRecordClitToyEN;
		}, configurable: true
	},
	profileRecordPussyToy: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordPussyToyJP;
			else if(this.isEnglish) return ProfileRecordPussyToyEN;
		}, configurable: true
	},
	profileRecordAnalToy: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordAnalToyJP;
			else if(this.isEnglish) return ProfileRecordAnalToyEN;
		}, configurable: true
	},
	profileRecordPussySex: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordPussySexJP;
			else if(this.isEnglish) return ProfileRecordPussySexEN;
		}, configurable: true
	},
	profileRecordAnalSex: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordAnalSexJP;
			else if(this.isEnglish) return ProfileRecordAnalSexEN;
		}, configurable: true
	},
	
	
	profileRecordFirstKiss: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordFirstKissJP;
			else if(this.isEnglish) return ProfileRecordFirstKissEN;
		}, configurable: true
	},
	profileRecordLastKiss: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordLastKissJP;
			else if(this.isEnglish) return ProfileRecordLastKissEN;
		}, configurable: true
	},
	profileRecordFirstSex: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordFirstSexJP;
			else if(this.isEnglish) return ProfileRecordFirstSexEN;
		}, configurable: true
	},
	profileRecordLastSex: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordLastSexJP;
			else if(this.isEnglish) return ProfileRecordLastSexEN;
		}, configurable: true
	},
	profileRecordFirstAnal: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordFirstAnalJP;
			else if(this.isEnglish) return ProfileRecordFirstAnalEN;
		}, configurable: true
	},
	profileRecordLastAnal: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordLastAnalJP;
			else if(this.isEnglish) return ProfileRecordLastAnalEN;
		}, configurable: true
	},
	profileRecordFirstHandjob: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordFirstHandjobJP;
			else if(this.isEnglish) return ProfileRecordFirstHandjobEN;
		}, configurable: true
	},
	profileRecordLastHandjob: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordLastHandjobJP;
			else if(this.isEnglish) return ProfileRecordLastHandjobEN;
		}, configurable: true
	},
	profileRecordFirstBlowjob: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordFirstBlowjobJP;
			else if(this.isEnglish) return ProfileRecordFirstBlowjobEN;
		}, configurable: true
	},
	profileRecordLastBlowjob: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordLastBlowjobJP;
			else if(this.isEnglish) return ProfileRecordLastBlowjobEN;
		}, configurable: true
	},
	profileRecordFirstTittyFuck: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordFirstTittyFuckJP;
			else if(this.isEnglish) return ProfileRecordFirstTittyFuckEN;
		}, configurable: true
	},
	profileRecordLastTittyFuck: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordLastTittyFuckJP;
			else if(this.isEnglish) return ProfileRecordLastTittyFuckEN;
		}, configurable: true
	},
	profileRecordFirstFootjob: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordFirstFootjobJP;
			else if(this.isEnglish) return ProfileRecordFirstFootjobEN;
		}, configurable: true
	},
	profileRecordLastFootjob: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordLastFootjobJP;
			else if(this.isEnglish) return ProfileRecordLastFootjobEN;
		}, configurable: true
	},
	profileRecordFirstRimjob: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordFirstRimjobJP;
			else if(this.isEnglish) return ProfileRecordFirstRimjobEN;
		}, configurable: true
	},
	profileRecordLastRimjob: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordLastRimjobJP;
			else if(this.isEnglish) return ProfileRecordLastRimjobEN;
		}, configurable: true
	},
	profileRecordFirstBukkake: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordFirstBukkakeJP;
			else if(this.isEnglish) return ProfileRecordFirstBukkakeEN;
		}, configurable: true
	},
	profileRecordLastBukkake: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordLastBukkakeJP;
			else if(this.isEnglish) return ProfileRecordLastBukkakeEN;
		}, configurable: true
	},
	profileRecordFirstFaceBukkake: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordFirstFaceBukkakeJP;
			else if(this.isEnglish) return ProfileRecordFirstFaceBukkakeEN;
		}, configurable: true
	},
	profileRecordLastFaceBukkake: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordLastFaceBukkakeJP;
			else if(this.isEnglish) return ProfileRecordLastFaceBukkakeEN;
		}, configurable: true
	},
	profileRecordFirstSwallow: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordFirstSwallowJP;
			else if(this.isEnglish) return ProfileRecordFirstSwallowEN;
		}, configurable: true
	},
	profileRecordLastSwallow: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordLastSwallowJP;
			else if(this.isEnglish) return ProfileRecordLastSwallowEN;
		}, configurable: true
	},
	profileRecordFirstPussyCreampie: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordFirstPussyCreampieJP;
			else if(this.isEnglish) return ProfileRecordFirstPussyCreampieEN;
		}, configurable: true
	},
	profileRecordLastPussyCreampie: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordLastPussyCreampieJP;
			else if(this.isEnglish) return ProfileRecordLastPussyCreampieEN;
		}, configurable: true
	},
	profileRecordFirstAnalCreampie: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordFirstAnalCreampieJP;
			else if(this.isEnglish) return ProfileRecordFirstAnalCreampieEN;
		}, configurable: true
	},
	profileRecordLastAnalCreampie: { 
		get: function() { 
			if(this.isJapanese) return ProfileRecordLastAnalCreampieJP;
			else if(this.isEnglish) return ProfileRecordLastAnalCreampieEN;
		}, configurable: true
	},
	
	statusRecordDaysSingular: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordDaysSingularJP;
			else if(this.isEnglish) return StatusRecordDaysSingularEN;
		}, configurable: true
	},
	statusRecordDaysPlural: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordDaysPluralJP;
			else if(this.isEnglish) return StatusRecordDaysPluralEN;
		}, configurable: true
	},
	statusRecordTimesSingular: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordTimesSingularJP;
			else if(this.isEnglish) return StatusRecordTimesSingularEN;
		}, configurable: true
	},
	statusRecordTimesPlural: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordTimesPluralJP;
			else if(this.isEnglish) return StatusRecordTimesPluralEN;
		}, configurable: true
	},
	statusRecordJustPeopleSingular: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordJustPeopleSingularJP;
			else if(this.isEnglish) return StatusRecordJustPeopleSingularEN;
		}, configurable: true
	},
	statusRecordJustPeoplePlural: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordJustPeoplePluralJP;
			else if(this.isEnglish) return StatusRecordJustPeoplePluralEN;
		}, configurable: true
	},
	statusRecordDifferentPeopleSingular: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordDifferentPeopleSingularJP;
			else if(this.isEnglish) return StatusRecordDifferentPeopleSingularEN;
		}, configurable: true
	},
	statusRecordDifferentPeoplePlural: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordDifferentPeoplePluralJP;
			else if(this.isEnglish) return StatusRecordDifferentPeoplePluralEN;
		}, configurable: true
	},
	
	statusRecordDate: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordDateJP;
			else if(this.isEnglish) return StatusRecordDateEN;
		}, configurable: true
	},
	statusRecordFight: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordFightJP;
			else if(this.isEnglish) return StatusRecordFightEN;
		}, configurable: true
	},
	statusRecordFightSubduedOnly: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordFightSubduedOnlyJP;
			else if(this.isEnglish) return StatusRecordFightSubduedOnlyEN;
		}, configurable: true
	},
	statusRecordStrip: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordStripJP;
			else if(this.isEnglish) return StatusRecordStripEN;
		}, configurable: true
	},
	statusRecordKiss: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordKissJP;
			else if(this.isEnglish) return StatusRecordKissEN;
		}, configurable: true
	},
	statusRecordBoobsPetted: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordBoobsPettedJP;
			else if(this.isEnglish) return StatusRecordBoobsPettedEN;
		}, configurable: true
	},
	statusRecordNipplesPetted: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordNipplesPettedJP;
			else if(this.isEnglish) return StatusRecordNipplesPettedEN;
		}, configurable: true
	},
	statusRecordClitPetted: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordClitPettedJP;
			else if(this.isEnglish) return StatusRecordClitPettedEN;
		}, configurable: true
	},
	statusRecordPussyPetted: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordPussyPettedJP;
			else if(this.isEnglish) return StatusRecordPussyPettedEN;
		}, configurable: true
	},
	statusRecordButtPetted: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordButtPettedJP;
			else if(this.isEnglish) return StatusRecordButtPettedEN;
		}, configurable: true
	},
	statusRecordAnalPetted: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordAnalPettedJP;
			else if(this.isEnglish) return StatusRecordAnalPettedEN;
		}, configurable: true
	},
	statusRecordMasturbate: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordMasturbateJP;
			else if(this.isEnglish) return StatusRecordMasturbateEN;
		}, configurable: true
	},
	statusRecordSexPartners: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordSexPartnersJP;
			else if(this.isEnglish) return StatusRecordSexPartnersEN;
		}, configurable: true
	},
	statusRecordHandjob: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordHandjobJP;
			else if(this.isEnglish) return StatusRecordHandjobEN;
		}, configurable: true
	},
	statusRecordBlowjob: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordBlowjobJP;
			else if(this.isEnglish) return StatusRecordBlowjobEN;
		}, configurable: true
	},
	statusRecordTittyFuck: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordTittyFuckJP;
			else if(this.isEnglish) return StatusRecordTittyFuckEN;
		}, configurable: true
	},
	statusRecordFootjob: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordFootjobJP;
			else if(this.isEnglish) return StatusRecordFootjobEN;
		}, configurable: true
	},
	statusRecordRimjob: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordRimjobJP;
			else if(this.isEnglish) return StatusRecordRimjobEN;
		}, configurable: true
	},
	statusRecordCunni: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordCunniJP;
			else if(this.isEnglish) return StatusRecordCunniEN;
		}, configurable: true
	},
	statusRecordSpanked: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordSpankedJP;
			else if(this.isEnglish) return StatusRecordSpankedEN;
		}, configurable: true
	},
	statusRecordPussySex: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordPussySexJP;
			else if(this.isEnglish) return StatusRecordPussySexEN;
		}, configurable: true
	},
	statusRecordAnalSex: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordAnalSexJP;
			else if(this.isEnglish) return StatusRecordAnalSexEN;
		}, configurable: true
	},
	statusRecordGangbang: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordGangbangJP;
			else if(this.isEnglish) return StatusRecordGangbangEN;
		}, configurable: true
	},

	statusRecordOrgasm: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordOrgasmJP;
			else if(this.isEnglish) return StatusRecordOrgasmEN;
		}, configurable: true
	},
	statusRecordSwallow: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordSwallowJP;
			else if(this.isEnglish) return StatusRecordSwallowEN;
		}, configurable: true
	},
	statusRecordPussyCreampie: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordPussyCreampieJP;
			else if(this.isEnglish) return StatusRecordPussyCreampieEN;
		}, configurable: true
	},
	statusRecordAnalCreampie: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordAnalCreampieJP;
			else if(this.isEnglish) return StatusRecordAnalCreampieEN;
		}, configurable: true
	},
	
	statusRecordFingersSucked: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordFingersSuckedJP;
			else if(this.isEnglish) return StatusRecordFingersSuckedEN;
		}, configurable: true
	},
	statusRecordBukkake: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordBukkakeJP;
			else if(this.isEnglish) return StatusRecordBukkakeEN;
		}, configurable: true
	},
	statusRecordFaceBukkake: { 
		get: function() { 
			if(this.isJapanese) return StatusRecordFaceBukkakeJP;
			else if(this.isEnglish) return StatusRecordFaceBukkakeEN;
		}, configurable: true
	},
	
	statusBattleEffectOrgasm: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectOrgasmJP;
			else if(this.isEnglish) return StatusBattleEffectOrgasmEN;
		}, configurable: true
	},
	StatusBattleEffectCool: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectCoolJP;
			else if(this.isEnglish) return StatusBattleEffectCoolEN;
		}, configurable: true
	},
	
	
	statusBattleEffectIsHornyZero: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectIsHornyZeroJP;
			else if(this.isEnglish) return StatusBattleEffectIsHornyZeroEN;
		}, configurable: true
	},
	statusBattleEffectIsHornyOne: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectIsHornyOneJP;
			else if(this.isEnglish) return StatusBattleEffectIsHornyOneEN;
		}, configurable: true
	},
	statusBattleEffectIsHornyTwo: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectIsHornyTwoJP;
			else if(this.isEnglish) return StatusBattleEffectIsHornyTwoEN;
		}, configurable: true
	},
	StatusBattleEffectIsHornyThree: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectIsHornyThreeJP;
			else if(this.isEnglish) return StatusBattleEffectIsHornyThreeEN;
		}, configurable: true
	},
	
	
	statusBattleEffectIsConfidentZero: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectIsConfidentZeroJP;
			else if(this.isEnglish) return StatusBattleEffectIsConfidentZeroEN;
		}, configurable: true
	},
	statusBattleEffectIsConfidentOne: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectIsConfidentOneJP;
			else if(this.isEnglish) return StatusBattleEffectIsConfidentOneEN;
		}, configurable: true
	},
	
	statusBattleEffectIsFrustrated: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectIsFrustratedJP;
			else if(this.isEnglish) return StatusBattleEffectIsFrustratedEN;
		}, configurable: true
	},
	
	statusBattleEffectIsAroused: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectIsArousedJP;
			else if(this.isEnglish) return StatusBattleEffectIsArousedEN;
		}, configurable: true
	},
	statusBattleEffectNotAroused: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectNotArousedJP;
			else if(this.isEnglish) return StatusBattleEffectNotArousedEN;
		}, configurable: true
	},
	statusBattleEffectIsWet: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectIsWetJP;
			else if(this.isEnglish) return StatusBattleEffectIsWetEN;
		}, configurable: true
	},
	statusBattleEffectNotWet: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectNotWetJP;
			else if(this.isEnglish) return StatusBattleEffectNotWetEN;
		}, configurable: true
	},
	statusBattleEffectIsWearingPanties: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectIsWearingPantiesJP;
			else if(this.isEnglish) return StatusBattleEffectIsWearingPantiesEN;
		}, configurable: true
	},
	statusBattleEffectIsNotWearingPanties: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectIsNotWearingPantiesJP;
			else if(this.isEnglish) return StatusBattleEffectIsNotWearingPantiesEN;
		}, configurable: true
	},
	StatusBattleEffectIsVirginHigh: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectIsVirginHighJP;
			else if(this.isEnglish) return StatusBattleEffectIsVirginHighEN;
		}, configurable: true
	},
	StatusBattleEffectIsVirginMed: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectIsVirginMedJP;
			else if(this.isEnglish) return StatusBattleEffectIsVirginMedEN;
		}, configurable: true
	},
	StatusBattleEffectIsVirginLow: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectIsVirginLowJP;
			else if(this.isEnglish) return StatusBattleEffectIsVirginLowEN;
		}, configurable: true
	},
	StatusBattleEffectIsVirginPublished: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectIsVirginPublishedJP;
			else if(this.isEnglish) return StatusBattleEffectIsVirginPublishedEN;
		}, configurable: true
	},
	
	statusBattleEffectDisarmed: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectDisarmedJP;
			else if(this.isEnglish) return StatusBattleEffectDisarmedEN;
		}, configurable: true
	},
	statusBattleEffectDefiledHalberd: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectDefiledHalberdJP;
			else if(this.isEnglish) return StatusBattleEffectDefiledHalberdEN;
		}, configurable: true
	},
	
	statusBattleEffectOffBalanced: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectOffBalancedJP;
			else if(this.isEnglish) return StatusBattleEffectOffBalancedEN;
		}, configurable: true
	},
	statusBattleEffectWeaken: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectWeakenJP;
			else if(this.isEnglish) return StatusBattleEffectWeakenEN;
		}, configurable: true
	},
	statusBattleEffectDizzy: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectDizzyJP;
			else if(this.isEnglish) return StatusBattleEffectDizzyEN;
		}, configurable: true
	},
	statusBattleEffectSlow: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectSlowJP;
			else if(this.isEnglish) return StatusBattleEffectSlowEN;
		}, configurable: true
	},
	statusBattleEffectVulnerable: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectVulnerableJP;
			else if(this.isEnglish) return StatusBattleEffectVulnerableEN;
		}, configurable: true
	},
	statusBattleEffectPoison: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectPoisonJP;
			else if(this.isEnglish) return StatusBattleEffectPoisonEN;
		}, configurable: true
	},
	StatusBattleEffectYetiHeatAuraOne: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectYetiHeatAuraOneJP;
			else if(this.isEnglish) return StatusBattleEffectYetiHeatAuraOneEN;
		}, configurable: true
	},
	StatusBattleEffectYetiHeatAuraTwo: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectYetiHeatAuraTwoJP;
			else if(this.isEnglish) return StatusBattleEffectYetiHeatAuraTwoEN;
		}, configurable: true
	},
	
	statusBattleEffectExposeWeakness: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectExposeWeaknessJP;
			else if(this.isEnglish) return StatusBattleEffectExposeWeaknessEN;
		}, configurable: true
	},
	StatusBattleEffectAttackCombo: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectAttackComboJP;
			else if(this.isEnglish) return StatusBattleEffectAttackComboEN;
		}, configurable: true
	},
	StatusBattleEffectAttackComboCocky: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectAttackComboCockyJP;
			else if(this.isEnglish) return StatusBattleEffectAttackComboCockyEN;
		}, configurable: true
	},
	StatusBattleEffectSexComboOne: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectSexComboOneJP;
			else if(this.isEnglish) return StatusBattleEffectSexComboOneEN;
		}, configurable: true
	},
	StatusBattleEffectSexComboTwo: { 
		get: function() { 
			if(this.isJapanese) return StatusBattleEffectSexComboTwoJP;
			else if(this.isEnglish) return StatusBattleEffectSexComboTwoEN;
		}, configurable: true
	},
	
	StateTooltipsRemainingTurnsSingular: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsRemainingTurnsSingularJP;
			else if(this.isEnglish) return StateTooltipsRemainingTurnsSingularEN;
		}, configurable: true
	},
	StateTooltipsRemainingTurnsPlural: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsRemainingTurnsPluralJP;
			else if(this.isEnglish) return StateTooltipsRemainingTurnsPluralEN;
		}, configurable: true
	},

	StateTooltipsDisarmed: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsDisarmedJP;
			else if(this.isEnglish) return StateTooltipsDisarmedEN;
		}, configurable: true
	},
	StateTooltipsOrgasm: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsOrgasmJP;
			else if(this.isEnglish) return StateTooltipsOrgasmEN;
		}, configurable: true
	},
	StateTooltipsSlashStance: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsSlashStanceJP;
			else if(this.isEnglish) return StateTooltipsSlashStanceEN;
		}, configurable: true
	},
	StateTooltipsPierceStance: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsPierceStanceJP;
			else if(this.isEnglish) return StateTooltipsPierceStanceEN;
		}, configurable: true
	},
	StateTooltipsBluntStance: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsBluntStanceJP;
			else if(this.isEnglish) return StateTooltipsBluntStanceEN;
		}, configurable: true
	},
	StateTooltipsHornyZero: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsHornyZeroJP;
			else if(this.isEnglish) return StateTooltipsHornyZeroEN;
		}, configurable: true
	},
	StateTooltipsHornyOne: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsHornyOneJP;
			else if(this.isEnglish) return StateTooltipsHornyOneEN;
		}, configurable: true
	},
	StateTooltipsHornyTwo: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsHornyTwoJP;
			else if(this.isEnglish) return StateTooltipsHornyTwoEN;
		}, configurable: true
	},
	StateTooltipsHornyThree: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsHornyThreeJP;
			else if(this.isEnglish) return StateTooltipsHornyThreeEN;
		}, configurable: true
	},
	
	StateTooltipsEnemyHorny: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsEnemyHornyJP;
			else if(this.isEnglish) return StateTooltipsEnemyHornyEN;
		}, configurable: true
	},
	StateTooltipsCool: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsCoolJP;
			else if(this.isEnglish) return StateTooltipsCoolEN;
		}, configurable: true
	},
	StateTooltipsIsWet: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsIsWetJP;
			else if(this.isEnglish) return StateTooltipsIsWetEN;
		}, configurable: true
	},
	StateTooltipsNotWet: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsNotWetJP;
			else if(this.isEnglish) return StateTooltipsNotWetEN;
		}, configurable: true
	},
	StateTooltipsWearingPanties: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsWearingPantiesJP;
			else if(this.isEnglish) return StateTooltipsWearingPantiesEN;
		}, configurable: true
	},
	StateTooltipsNotWearingPanties: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsNotWearingPantiesJP;
			else if(this.isEnglish) return StateTooltipsNotWearingPantiesEN;
		}, configurable: true
	},
	StateTooltipsVirginPublished: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsVirginPublishedJP;
			else if(this.isEnglish) return StateTooltipsVirginPublishedEN;
		}, configurable: true
	},
	StateTooltipsVirginHigh: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsVirginHighJP;
			else if(this.isEnglish) return StateTooltipsVirginHighEN;
		}, configurable: true
	},
	StateTooltipsVirginMed: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsVirginMedJP;
			else if(this.isEnglish) return StateTooltipsVirginMedEN;
		}, configurable: true
	},
	StateTooltipsVirginLow: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsVirginLowJP;
			else if(this.isEnglish) return StateTooltipsVirginLowEN;
		}, configurable: true
	},
	StateTooltipsConfidentZero: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsConfidentZeroJP;
			else if(this.isEnglish) return StateTooltipsConfidentZeroEN;
		}, configurable: true
	},
	StateTooltipsConfidentOne: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsConfidentOneJP;
			else if(this.isEnglish) return StateTooltipsConfidentOneEN;
		}, configurable: true
	},
	StateTooltipsFrustrated: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsFrustratedJP;
			else if(this.isEnglish) return StateTooltipsFrustratedEN;
		}, configurable: true
	},
	StateTooltipsOffBalanced: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsOffBalancedJP;
			else if(this.isEnglish) return StateTooltipsOffBalancedEN;
		}, configurable: true
	},
	StateTooltipsWeaken: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsWeakenJP;
			else if(this.isEnglish) return StateTooltipsWeakenEN;
		}, configurable: true
	},
	StateTooltipsDizzy: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsDizzyJP;
			else if(this.isEnglish) return StateTooltipsDizzyEN;
		}, configurable: true
	},
	StateTooltipsSlow: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsSlowJP;
			else if(this.isEnglish) return StateTooltipsSlowEN;
		}, configurable: true
	},
	StateTooltipsVulnerable: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsVulnerableJP;
			else if(this.isEnglish) return StateTooltipsVulnerableEN;
		}, configurable: true
	},
	StateTooltipsPoison: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsPoisonJP;
			else if(this.isEnglish) return StateTooltipsPoisonEN;
		}, configurable: true
	},
	StateTooltipsExposeWeakness: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsExposeWeaknessJP;
			else if(this.isEnglish) return StateTooltipsExposeWeaknessEN;
		}, configurable: true
	},
	StateTooltipsStunned: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsStunnedJP;
			else if(this.isEnglish) return StateTooltipsStunnedEN;
		}, configurable: true
	},
	StateTooltipsEnemyPoseMaster: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsEnemyPoseMasterJP;
			else if(this.isEnglish) return StateTooltipsEnemyPoseMasterEN;
		}, configurable: true
	},
	StateTooltipsActorAttackCombo: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsActorAttackComboJP;
			else if(this.isEnglish) return StateTooltipsActorAttackComboEN;
		}, configurable: true
	},
	StateTooltipsActorAttackComboCocky: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsActorAttackComboCockyJP;
			else if(this.isEnglish) return StateTooltipsActorAttackComboCockyEN;
		}, configurable: true
	},
	StateTooltipsActorSexCombo: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsActorSexComboJP;
			else if(this.isEnglish) return StateTooltipsActorSexComboEN;
		}, configurable: true
	},
	StateTooltipsEnemyPosePussySex: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsEnemyPosePussySexJP;
			else if(this.isEnglish) return StateTooltipsEnemyPosePussySexEN;
		}, configurable: true
	},
	StateTooltipsEnemyPoseCunnilingus: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsEnemyPoseCunnilingusJP;
			else if(this.isEnglish) return StateTooltipsEnemyPoseCunnilingusEN;
		}, configurable: true
	},
	StateTooltipsEnemyPoseAnalSex: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsEnemyPoseAnalSexJP;
			else if(this.isEnglish) return StateTooltipsEnemyPoseAnalSexEN;
		}, configurable: true
	},
	StateTooltipsEnemyPosePaizuri: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsEnemyPosePaizuriJP;
			else if(this.isEnglish) return StateTooltipsEnemyPosePaizuriEN;
		}, configurable: true
	},
	StateTooltipsEnemyPoseHandjob: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsEnemyPoseHandjobJP;
			else if(this.isEnglish) return StateTooltipsEnemyPoseHandjobEN;
		}, configurable: true
	},
	StateTooltipsEnemyPoseBlowjob: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsEnemyPoseBlowjobJP;
			else if(this.isEnglish) return StateTooltipsEnemyPoseBlowjobEN;
		}, configurable: true
	},
	StateTooltipsEnemyPoseFootjob: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsEnemyPoseFootjobJP;
			else if(this.isEnglish) return StateTooltipsEnemyPoseFootjobEN;
		}, configurable: true
	},
	StateTooltipsEnemyPoseRimjob: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsEnemyPoseRimjobJP;
			else if(this.isEnglish) return StateTooltipsEnemyPoseRimjobEN;
		}, configurable: true
	},
	StateTooltipsEnemyKissed: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsEnemyKissedJP;
			else if(this.isEnglish) return StateTooltipsEnemyKissedEN;
		}, configurable: true
	},
	StateTooltipsAroused: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsArousedJP;
			else if(this.isEnglish) return StateTooltipsArousedEN;
		}, configurable: true
	},
	StateTooltipsCautiousStance: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsCautiousStanceJP;
			else if(this.isEnglish) return StateTooltipsCautiousStanceEN;
		}, configurable: true
	},
	StateTooltipsDefensiveStance: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsDefensiveStanceJP;
			else if(this.isEnglish) return StateTooltipsDefensiveStanceEN;
		}, configurable: true
	},
	StateTooltipsCounterStance: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsCounterStanceJP;
			else if(this.isEnglish) return StateTooltipsCounterStanceEN;
		}, configurable: true
	},
	StateTooltipsSecretaryStance: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsSecretaryStanceJP;
			else if(this.isEnglish) return StateTooltipsSecretaryStanceEN;
		}, configurable: true
	},
	StateTooltipsLadyStance: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsLadyStanceJP;
			else if(this.isEnglish) return StateTooltipsLadyStanceEN;
		}, configurable: true
	},
	StateTooltipsPleasureStance: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsPleasureStanceJP;
			else if(this.isEnglish) return StateTooltipsPleasureStanceEN;
		}, configurable: true
	},
	StateTooltipsWillpowerKiOne: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsWillpowerKiOneJP;
			else if(this.isEnglish) return StateTooltipsWillpowerKiOneEN;
		}, configurable: true
	},
	StateTooltipsWillpowerKiTwo: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsWillpowerKiTwoJP;
			else if(this.isEnglish) return StateTooltipsWillpowerKiTwoEN;
		}, configurable: true
	},
	StateTooltipsWillpowerFocusOne: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsWillpowerFocusOneJP;
			else if(this.isEnglish) return StateTooltipsWillpowerFocusOneEN;
		}, configurable: true
	},
	StateTooltipsWillpowerFocusTwo: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsWillpowerFocusTwoJP;
			else if(this.isEnglish) return StateTooltipsWillpowerFocusTwoEN;
		}, configurable: true
	},
	StateTooltipsWillpowerEyeOfTheMindOne: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsWillpowerEyeOfTheMindOneJP;
			else if(this.isEnglish) return StateTooltipsWillpowerEyeOfTheMindOneEN;
		}, configurable: true
	},
	StateTooltipsWillpowerEyeOfTheMindTwo: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsWillpowerEyeOfTheMindTwoJP;
			else if(this.isEnglish) return StateTooltipsWillpowerEyeOfTheMindTwoEN;
		}, configurable: true
	},
	StateTooltipsWillpowerSeeNoEvil: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsWillpowerSeeNoEvilJP;
			else if(this.isEnglish) return StateTooltipsWillpowerSeeNoEvilEN;
		}, configurable: true
	},
	StateTooltipsWillpowerHearNoEvil: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsWillpowerHearNoEvilJP;
			else if(this.isEnglish) return StateTooltipsWillpowerHearNoEvilEN;
		}, configurable: true
	},
	StateTooltipsWillpowerRealityMarble: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsWillpowerRealityMarbleJP;
			else if(this.isEnglish) return StateTooltipsWillpowerRealityMarbleEN;
		}, configurable: true
	},
	StateTooltipsWillpowerResistOrgasm: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsWillpowerResistOrgasmJP;
			else if(this.isEnglish) return StateTooltipsWillpowerResistOrgasmEN;
		}, configurable: true
	},
	StateTooltipsWillpowerEdgingControlKarryn: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsWillpowerEdgingControlKarrynJP;
			else if(this.isEnglish) return StateTooltipsWillpowerEdgingControlKarrynEN;
		}, configurable: true
	},
	StateTooltipsWillpowerEdgingControlEnemy: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsWillpowerEdgingControlEnemyJP;
			else if(this.isEnglish) return StateTooltipsWillpowerEdgingControlEnemyEN;
		}, configurable: true
	},
	StateTooltipsBonusPierceDamage: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsBonusPierceDamageJP;
			else if(this.isEnglish) return StateTooltipsBonusPierceDamageEN;
		}, configurable: true
	},
	StateTooltipsBonusSlashDamage: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsBonusSlashDamageJP;
			else if(this.isEnglish) return StateTooltipsBonusSlashDamageEN;
		}, configurable: true
	},
	StateTooltipsBonusBluntDamage: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsBonusBluntDamageJP;
			else if(this.isEnglish) return StateTooltipsBonusBluntDamageEN;
		}, configurable: true
	},
	StateTooltipsEjaculationStunned: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsEjaculationStunnedJP;
			else if(this.isEnglish) return StateTooltipsEjaculationStunnedEN;
		}, configurable: true
	},
	StateTooltipsSlimeRegenNormal: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsSlimeRegenNormalJP;
			else if(this.isEnglish) return StateTooltipsSlimeRegenNormalEN;
		}, configurable: true
	},
	StateTooltipsSlimeRegenFourth: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsSlimeRegenFourthJP;
			else if(this.isEnglish) return StateTooltipsSlimeRegenFourthEN;
		}, configurable: true
	},
	StateTooltipsOrcDefensivePresence: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsOrcDefensivePresenceJP;
			else if(this.isEnglish) return StateTooltipsOrcDefensivePresenceEN;
		}, configurable: true
	},
	StateTooltipsOrcCommandingPresenceOne: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsOrcCommandingPresenceOneJP;
			else if(this.isEnglish) return StateTooltipsOrcCommandingPresenceOneEN;
		}, configurable: true
	},
	StateTooltipsOrcCommandingPresenceTwo: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsOrcCommandingPresenceTwoJP;
			else if(this.isEnglish) return StateTooltipsOrcCommandingPresenceTwoEN;
		}, configurable: true
	},
	StateTooltipsOrcCommandingPresenceThree: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsOrcCommandingPresenceThreeJP;
			else if(this.isEnglish) return StateTooltipsOrcCommandingPresenceThreeEN;
		}, configurable: true
	},
	StateTooltipsOrcCommandingPresenceFour: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsOrcCommandingPresenceFourJP;
			else if(this.isEnglish) return StateTooltipsOrcCommandingPresenceFourEN;
		}, configurable: true
	},
	StateTooltipsLizardmanRacial: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsLizardmanRacialJP;
			else if(this.isEnglish) return StateTooltipsLizardmanRacialEN;
		}, configurable: true
	},
	StateTooltipsLizardmanRacialWeak: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsLizardmanRacialWeakJP;
			else if(this.isEnglish) return StateTooltipsLizardmanRacialWeakEN;
		}, configurable: true
	},
	
	StateTooltipsYetiHeatAura: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsYetiHeatAuraJP;
			else if(this.isEnglish) return StateTooltipsYetiHeatAuraEN;
		}, configurable: true
	},
	StateTooltipsYetiHeatAuraEnemyOne: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsYetiHeatAuraEnemyOneJP;
			else if(this.isEnglish) return StateTooltipsYetiHeatAuraEnemyOneEN;
		}, configurable: true
	},
	StateTooltipsYetiHeatAuraEnemyTwo: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsYetiHeatAuraEnemyTwoJP;
			else if(this.isEnglish) return StateTooltipsYetiHeatAuraEnemyTwoEN;
		}, configurable: true
	},
	StateTooltipsYetiHeatAuraKarrynOne: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsYetiHeatAuraKarrynOneJP;
			else if(this.isEnglish) return StateTooltipsYetiHeatAuraKarrynOneEN;
		}, configurable: true
	},
	StateTooltipsYetiHeatAuraKarrynTwo: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsYetiHeatAuraKarrynTwoJP;
			else if(this.isEnglish) return StateTooltipsYetiHeatAuraKarrynTwoEN;
		}, configurable: true
	},
	StateTooltipsKarrynClitToy: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsKarrynClitToyJP;
			else if(this.isEnglish) return StateTooltipsKarrynClitToyEN;
		}, configurable: true
	},
	StateTooltipsKarrynPussyToy: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsKarrynPussyToyJP;
			else if(this.isEnglish) return StateTooltipsKarrynPussyToyEN;
		}, configurable: true
	},
	StateTooltipsKarrynAnalToy: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsKarrynAnalToyJP;
			else if(this.isEnglish) return StateTooltipsKarrynAnalToyEN;
		}, configurable: true
	},
	StateTooltipsEnemyClitToyPinkRotor: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsEnemyClitToyPinkRotorJP;
			else if(this.isEnglish) return StateTooltipsEnemyClitToyPinkRotorEN;
		}, configurable: true
	},
	StateTooltipsEnemyPussyToyPenisDildo: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsEnemyPussyToyPenisDildoJP;
			else if(this.isEnglish) return StateTooltipsEnemyPussyToyPenisDildoEN;
		}, configurable: true
	},
	StateTooltipsEnemyAnalToyAnalBeads: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsEnemyAnalToyAnalBeadsJP;
			else if(this.isEnglish) return StateTooltipsEnemyAnalToyAnalBeadsEN;
		}, configurable: true
	},
	StateTooltipsToiletPinkRotor: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsToiletPinkRotorJP;
			else if(this.isEnglish) return StateTooltipsToiletPinkRotorEN;
		}, configurable: true
	},
	StateTooltipsToiletPenisDildo: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsToiletPenisDildoJP;
			else if(this.isEnglish) return StateTooltipsToiletPenisDildoEN;
		}, configurable: true
	},
	StateTooltipsToiletAnalBeads: { 
		get: function() { 
			if(this.isJapanese) return StateTooltipsToiletAnalBeadsJP;
			else if(this.isEnglish) return StateTooltipsToiletAnalBeadsEN;
		}, configurable: true
	},
	
	StateWaitressNoAlcohol: { 
		get: function() { 
			if(this.isJapanese) return StateWaitressNoAlcoholJP;
			else if(this.isEnglish) return StateWaitressNoAlcoholEN;
		}, configurable: true
	},
	StateWaitressDirtyMugsSingular: { 
		get: function() { 
			if(this.isJapanese) return StateWaitressDirtyMugsSingularJP;
			else if(this.isEnglish) return StateWaitressDirtyMugsSingularEN;
		}, configurable: true
	},
	StateWaitressDirtyMugsPlural: { 
		get: function() { 
			if(this.isJapanese) return StateWaitressDirtyMugsPluralJP;
			else if(this.isEnglish) return StateWaitressDirtyMugsPluralEN;
		}, configurable: true
	},
	StateWaitressDirtyGlassesSingular: { 
		get: function() { 
			if(this.isJapanese) return StateWaitressDirtyGlassesSingularJP;
			else if(this.isEnglish) return StateWaitressDirtyGlassesSingularEN;
		}, configurable: true
	},
	StateWaitressDirtyGlassesPlural: { 
		get: function() { 
			if(this.isJapanese) return StateWaitressDirtyGlassesPluralJP;
			else if(this.isEnglish) return StateWaitressDirtyGlassesPluralEN;
		}, configurable: true
	},
	StateWaitressAvailableMugsSingular: { 
		get: function() { 
			if(this.isJapanese) return StateWaitressAvailableMugsSingularJP;
			else if(this.isEnglish) return StateWaitressAvailableMugsSingularEN;
		}, configurable: true
	},
	StateWaitressAvailableMugsPlural: { 
		get: function() { 
			if(this.isJapanese) return StateWaitressAvailableMugsPluralJP;
			else if(this.isEnglish) return StateWaitressAvailableMugsPluralEN;
		}, configurable: true
	},
	StateWaitressAvailableGlassesSingular: { 
		get: function() { 
			if(this.isJapanese) return StateWaitressAvailableGlassesSingularJP;
			else if(this.isEnglish) return StateWaitressAvailableGlassesSingularEN;
		}, configurable: true
	},
	StateWaitressAvailableGlassesPlural: { 
		get: function() { 
			if(this.isJapanese) return StateWaitressAvailableGlassesPluralJP;
			else if(this.isEnglish) return StateWaitressAvailableGlassesPluralEN;
		}, configurable: true
	},
	StateWaitressKarrynLocation: { 
		get: function() { 
			if(this.isJapanese) return StateWaitressKarrynLocationJP;
			else if(this.isEnglish) return StateWaitressKarrynLocationEN;
		}, configurable: true
	},
	StateWaitressTableALocation: { 
		get: function() { 
			if(this.isJapanese) return StateWaitressTableALocationJP;
			else if(this.isEnglish) return StateWaitressTableALocationEN;
		}, configurable: true
	},
	StateWaitressTableBLocation: { 
		get: function() { 
			if(this.isJapanese) return StateWaitressTableBLocationJP;
			else if(this.isEnglish) return StateWaitressTableBLocationEN;
		}, configurable: true
	},
	StateWaitressTableCLocation: { 
		get: function() { 
			if(this.isJapanese) return StateWaitressTableCLocationJP;
			else if(this.isEnglish) return StateWaitressTableCLocationEN;
		}, configurable: true
	},
	StateWaitressTableDLocation: { 
		get: function() { 
			if(this.isJapanese) return StateWaitressTableDLocationJP;
			else if(this.isEnglish) return StateWaitressTableDLocationEN;
		}, configurable: true
	},
	StateWaitressSleeping: { 
		get: function() { 
			if(this.isJapanese) return StateWaitressSleepingJP;
			else if(this.isEnglish) return StateWaitressSleepingEN;
		}, configurable: true
	},
	StateWaitressDrinkingDrink: { 
		get: function() { 
			if(this.isJapanese) return StateWaitressDrinkingDrinkJP;
			else if(this.isEnglish) return StateWaitressDrinkingDrinkEN;
		}, configurable: true
	},
	StateReceptionistVisitorUnknownBefore: { 
		get: function() { 
			if(this.isJapanese) return StateReceptionistVisitorUnknownBeforeJP;
			else if(this.isEnglish) return StateReceptionistVisitorUnknownBeforeEN;
		}, configurable: true
	},
	StateReceptionistVisitorUnknownAfter: { 
		get: function() { 
			if(this.isJapanese) return StateReceptionistVisitorUnknownAfterJP;
			else if(this.isEnglish) return StateReceptionistVisitorUnknownAfterEN;
		}, configurable: true
	},
	StateReceptionistVisitorWritingBefore: { 
		get: function() { 
			if(this.isJapanese) return StateReceptionistVisitorWritingBeforeJP;
			else if(this.isEnglish) return StateReceptionistVisitorWritingBeforeEN;
		}, configurable: true
	},
	StateReceptionistVisitorWritingDuring: { 
		get: function() { 
			if(this.isJapanese) return StateReceptionistVisitorWritingDuringJP;
			else if(this.isEnglish) return StateReceptionistVisitorWritingDuringEN;
		}, configurable: true
	},
	StateReceptionistVisitorWritingAfter: { 
		get: function() { 
			if(this.isJapanese) return StateReceptionistVisitorWritingAfterJP;
			else if(this.isEnglish) return StateReceptionistVisitorWritingAfterEN;
		}, configurable: true
	},
	StateReceptionistVisitorPaperBefore: { 
		get: function() { 
			if(this.isJapanese) return StateReceptionistVisitorPaperBeforeJP;
			else if(this.isEnglish) return StateReceptionistVisitorPaperBeforeEN;
		}, configurable: true
	},
	StateReceptionistVisitorPaperAfter: { 
		get: function() { 
			if(this.isJapanese) return StateReceptionistVisitorPaperAfterJP;
			else if(this.isEnglish) return StateReceptionistVisitorPaperAfterEN;
		}, configurable: true
	},
	StateReceptionistVisitorTime: { 
		get: function() { 
			if(this.isJapanese) return StateReceptionistVisitorTimeJP;
			else if(this.isEnglish) return StateReceptionistVisitorTimeEN;
		}, configurable: true
	},
	StateReceptionistVisitorMoving: { 
		get: function() { 
			if(this.isJapanese) return StateReceptionistVisitorMovingJP;
			else if(this.isEnglish) return StateReceptionistVisitorMovingEN;
		}, configurable: true
	},
	StateReceptionistVisitorSitting: { 
		get: function() { 
			if(this.isJapanese) return StateReceptionistVisitorSittingJP;
			else if(this.isEnglish) return StateReceptionistVisitorSittingEN;
		}, configurable: true
	},
	StateReceptionistVisitorLine: { 
		get: function() { 
			if(this.isJapanese) return StateReceptionistVisitorLineJP;
			else if(this.isEnglish) return StateReceptionistVisitorLineEN;
		}, configurable: true
	},
	StateReceptionistVisitorDesk: { 
		get: function() { 
			if(this.isJapanese) return StateReceptionistVisitorDeskJP;
			else if(this.isEnglish) return StateReceptionistVisitorDeskEN;
		}, configurable: true
	},
	
	DesireTooltipsMouthIntro: { 
		get: function() { 
			if(this.isJapanese) return DesireTooltipsMouthIntroJP;
			else if(this.isEnglish) return DesireTooltipsMouthIntroEN;
		}, configurable: true
	},
	DesireTooltipsBoobsIntro: { 
		get: function() { 
			if(this.isJapanese) return DesireTooltipsBoobsIntroJP;
			else if(this.isEnglish) return DesireTooltipsBoobsIntroEN;
		}, configurable: true
	},
	DesireTooltipsPussyIntro: { 
		get: function() { 
			if(this.isJapanese) return DesireTooltipsPussyIntroJP;
			else if(this.isEnglish) return DesireTooltipsPussyIntroEN;
		}, configurable: true
	},
	DesireTooltipsButtIntro: { 
		get: function() { 
			if(this.isJapanese) return DesireTooltipsButtIntroJP;
			else if(this.isEnglish) return DesireTooltipsButtIntroEN;
		}, configurable: true
	},
	DesireTooltipsCockIntro: { 
		get: function() { 
			if(this.isJapanese) return DesireTooltipsCockIntroJP;
			else if(this.isEnglish) return DesireTooltipsCockIntroEN;
		}, configurable: true
	},
	DesireTooltipsBodyDesireRequirementsUnknown: { 
		get: function() { 
			if(this.isJapanese) return DesireTooltipsBodyDesireRequirementsUnknownJP;
			else if(this.isEnglish) return DesireTooltipsBodyDesireRequirementsUnknownEN;
		}, configurable: true
	},
	DesireTooltipsCockDesireRequirementsUnknown: { 
		get: function() { 
			if(this.isJapanese) return DesireTooltipsCockDesireRequirementsUnknownJP;
			else if(this.isEnglish) return DesireTooltipsCockDesireRequirementsUnknownEN;
		}, configurable: true
	},
	DesireTooltipsDesireRequirementsKnown: { 
		get: function() { 
			if(this.isJapanese) return DesireTooltipsDesireRequirementsKnownJP;
			else if(this.isEnglish) return DesireTooltipsDesireRequirementsKnownEN;
		}, configurable: true
	},
	DesireTooltipsDesireRequirementsKnownFormat: { 
		get: function() { 
			if(this.isJapanese) return DesireTooltipsDesireRequirementsKnownFormatJP;
			else if(this.isEnglish) return DesireTooltipsDesireRequirementsKnownFormatEN;
		}, configurable: true
	},
	
	DesireTooltipsMouthDesireDebuffOne: { 
		get: function() { 
			if(this.isJapanese) return DesireTooltipsMouthDesireDebuffOneJP;
			else if(this.isEnglish) return DesireTooltipsMouthDesireDebuffOneEN;
		}, configurable: true
	},
	DesireTooltipsMouthDesireDebuffTwo: { 
		get: function() { 
			if(this.isJapanese) return DesireTooltipsMouthDesireDebuffTwoJP;
			else if(this.isEnglish) return DesireTooltipsMouthDesireDebuffTwoEN;
		}, configurable: true
	},
	DesireTooltipsBoobsDesireDebuffOne: { 
		get: function() { 
			if(this.isJapanese) return DesireTooltipsBoobsDesireDebuffOneJP;
			else if(this.isEnglish) return DesireTooltipsBoobsDesireDebuffOneEN;
		}, configurable: true
	},
	DesireTooltipsBoobsDesireDebuffTwo: { 
		get: function() { 
			if(this.isJapanese) return DesireTooltipsBoobsDesireDebuffTwoJP;
			else if(this.isEnglish) return DesireTooltipsBoobsDesireDebuffTwoEN;
		}, configurable: true
	},
	DesireTooltipsPussyDesireDebuffOne: { 
		get: function() { 
			if(this.isJapanese) return DesireTooltipsPussyDesireDebuffOneJP;
			else if(this.isEnglish) return DesireTooltipsPussyDesireDebuffOneEN;
		}, configurable: true
	},
	DesireTooltipsPussyDesireDebuffTwo: { 
		get: function() { 
			if(this.isJapanese) return DesireTooltipsPussyDesireDebuffTwoJP;
			else if(this.isEnglish) return DesireTooltipsPussyDesireDebuffTwoEN;
		}, configurable: true
	},
	DesireTooltipsButtDesireDebuffOne: { 
		get: function() { 
			if(this.isJapanese) return DesireTooltipsButtDesireDebuffOneJP;
			else if(this.isEnglish) return DesireTooltipsButtDesireDebuffOneEN;
		}, configurable: true
	},
	DesireTooltipsButtDesireDebuffTwo: { 
		get: function() { 
			if(this.isJapanese) return DesireTooltipsButtDesireDebuffTwoJP;
			else if(this.isEnglish) return DesireTooltipsButtDesireDebuffTwoEN;
		}, configurable: true
	},
	DesireTooltipsCockDesireDebuffOne: { 
		get: function() { 
			if(this.isJapanese) return DesireTooltipsCockDesireDebuffOneJP;
			else if(this.isEnglish) return DesireTooltipsCockDesireDebuffOneEN;
		}, configurable: true
	},
	DesireTooltipsCockDesireDebuffTwo: { 
		get: function() { 
			if(this.isJapanese) return DesireTooltipsCockDesireDebuffTwoJP;
			else if(this.isEnglish) return DesireTooltipsCockDesireDebuffTwoEN;
		}, configurable: true
	},
	DesireTooltipsMouthDesireTopBuff: { 
		get: function() { 
			if(this.isJapanese) return DesireTooltipsMouthDesireTopBuffJP;
			else if(this.isEnglish) return DesireTooltipsMouthDesireTopBuffEN;
		}, configurable: true
	},
	DesireTooltipsBoobsDesireTopBuff: { 
		get: function() { 
			if(this.isJapanese) return DesireTooltipsBoobsDesireTopBuffJP;
			else if(this.isEnglish) return DesireTooltipsBoobsDesireTopBuffEN;
		}, configurable: true
	},
	DesireTooltipsPussyDesireTopBuff: { 
		get: function() { 
			if(this.isJapanese) return DesireTooltipsPussyDesireTopBuffJP;
			else if(this.isEnglish) return DesireTooltipsPussyDesireTopBuffEN;
		}, configurable: true
	},
	DesireTooltipsButtDesireTopBuff: { 
		get: function() { 
			if(this.isJapanese) return DesireTooltipsButtDesireTopBuffJP;
			else if(this.isEnglish) return DesireTooltipsButtDesireTopBuffEN;
		}, configurable: true
	},
	DesireTooltipsCockDesireTopBuff: { 
		get: function() { 
			if(this.isJapanese) return DesireTooltipsCockDesireTopBuffJP;
			else if(this.isEnglish) return DesireTooltipsCockDesireTopBuffEN;
		}, configurable: true
	},
	
	
	virginityText: { 
		get: function() { 
			if(this.isJapanese) return VirginityTextJP;
			else if(this.isEnglish) return VirginityTextEN;
		}, configurable: true
	},		
	virginityYes: { 
		get: function() { 
			if(this.isJapanese) return VirginityYesJP;
			else if(this.isEnglish) return VirginityYesEN;
		}, configurable: true
	},	
	virginityNo: { 
		get: function() { 
			if(this.isJapanese) return VirginityNoJP;
			else if(this.isEnglish) return VirginityNoEN;
		}, configurable: true
	},	
	virginActorText: { 
		get: function() { 
			if(this.isJapanese) return VirginActorTextJP;
			else if(this.isEnglish) return VirginActorTextEN;
		}, configurable: true
	},	
	virginActorNone: { 
		get: function() { 
			if(this.isJapanese) return VirginActorNoneJP;
			else if(this.isEnglish) return VirginActorNoneEN;
		}, configurable: true
	},		

	actorNoDamageGraze: { 
		get: function() { 
			if(this.isJapanese) return ActorNoDamageGrazeJP;
			else if(this.isEnglish) return ActorNoDamageGrazeEN;
		}, configurable: true
	},	
	enemyNoDamageGraze: { 
		get: function() { 
			if(this.isJapanese) return EnemyNoDamageGrazeJP;
			else if(this.isEnglish) return EnemyNoDamageGrazeEN;
		}, configurable: true
	},		
	charmEquipReq: { 
		get: function() { 
			if(this.isJapanese) return CharmEquipReqTextJP;
			else if(this.isEnglish) return CharmEquipReqTextEN;
		}, configurable: true
	},			
	growthRateText: { 
		get: function() { 
			if(this.isJapanese) return GrowthRateTextJP;
			else if(this.isEnglish) return GrowthRateTextEN;
		}, configurable: true
	},	
	
	resultsVictory: { 
		get: function() { 
			if(this.isJapanese) return RemResultsVictoryJP;
			else if(this.isEnglish) return RemResultsVictoryEN;
		}, configurable: true
	},	
	resultsDefeat: { 
		get: function() { 
			if(this.isJapanese) return RemResultsDefeatJP;
			else if(this.isEnglish) return RemResultsDefeatEN;
		}, configurable: true
	},	
	resultsAborted: { 
		get: function() { 
			if(this.isJapanese) return RemResultsAbortedJP;
			else if(this.isEnglish) return RemResultsAbortedEN;
		}, configurable: true
	},		
	resultsMasturbateBattleNone: { 
		get: function() { 
			if(this.isJapanese) return RemResultsMasturbateBattleNoneJP;
			else if(this.isEnglish) return RemResultsMasturbateBattleNoneEN;
		}, configurable: true
	},	
	resultsMasturbateBattleSingle: { 
		get: function() { 
			if(this.isJapanese) return RemResultsMasturbateBattleSingleJP;
			else if(this.isEnglish) return RemResultsMasturbateBattleSingleEN;
		}, configurable: true
	},	
	resultsMasturbateBattlePlural: { 
		get: function() { 
			if(this.isJapanese) return RemResultsMasturbateBattlePluralJP;
			else if(this.isEnglish) return RemResultsMasturbateBattlePluralEN;
		}, configurable: true
	},	
	
	resultsJobBattleEnd: { 
		get: function() { 
			if(this.isJapanese) return RemResultsJobBattleEndJP;
			else if(this.isEnglish) return RemResultsJobBattleEndEN;
		}, configurable: true
	},	

	resultsGainedExp: { 
		get: function() { 
			if(this.isJapanese) return RemResultsGainedExpJP;
			else if(this.isEnglish) return RemResultsGainedExpEN;
		}, configurable: true
	},		
	resultsLevelUp: { 
		get: function() { 
			if(this.isJapanese) return RemResultsLevelUpJP;
			else if(this.isEnglish) return RemResultsLevelUpEN;
		}, configurable: true
	},		
	resultsOrderIncrease: { 
		get: function() { 
			if(this.isJapanese) return RemResultsOrderIncreaseJP;
			else if(this.isEnglish) return RemResultsOrderIncreaseEN;
		}, configurable: true
	},		
	resultsOrderDecrease: { 
		get: function() { 
			if(this.isJapanese) return RemResultsOrderDecreaseJP;
			else if(this.isEnglish) return RemResultsOrderDecreaseEN;
		}, configurable: true
	},		
	resultsFundingIncrease: { 
		get: function() { 
			if(this.isJapanese) return RemResultsFundingIncreaseJP;
			else if(this.isEnglish) return RemResultsFundingIncreaseEN;
		}, configurable: true
	},		
	resultsFundingDecrease: { 
		get: function() { 
			if(this.isJapanese) return RemResultsFundingDecreaseJP;
			else if(this.isEnglish) return RemResultsFundingDecreaseEN;
		}, configurable: true
	},	
	resultsFatigueIncrease: { 
		get: function() { 
			if(this.isJapanese) return RemResultsFatigueIncreaseJP;
			else if(this.isEnglish) return RemResultsFatigueIncreaseEN;
		}, configurable: true
	},	
	resultsFatigueDecrease: { 
		get: function() { 
			if(this.isJapanese) return RemResultsFatigueDecreaseJP;
			else if(this.isEnglish) return RemResultsFatigueDecreaseEN;
		}, configurable: true
	},	
	
	resultsSubduedWithAttack: { 
		get: function() { 
			if(this.isJapanese) return RemResultsSubduedWithAttackJP;
			else if(this.isEnglish) return RemResultsSubduedWithAttackEN;
		}, configurable: true
	},	
	resultsSubduedSexually: { 
		get: function() { 
			if(this.isJapanese) return RemResultsSubduedSexuallyJP;
			else if(this.isEnglish) return RemResultsSubduedSexuallyEN;
		}, configurable: true
	},	
	resultsSubduedWithAttackAndSexually: { 
		get: function() { 
			if(this.isJapanese) return RemResultsSubduedWithAttackAndSexuallyJP;
			else if(this.isEnglish) return RemResultsSubduedWithAttackAndSexuallyEN;
		}, configurable: true
	},	
	resultsKarrynOrgasmSingular: { 
		get: function() { 
			if(this.isJapanese) return RemResultsKarrynOrgasmSingularJP;
			else if(this.isEnglish) return RemResultsKarrynOrgasmSingularEN;
		}, configurable: true
	},	
	resultsKarrynOrgasmPlural: { 
		get: function() { 
			if(this.isJapanese) return RemResultsKarrynOrgasmPluralJP;
			else if(this.isEnglish) return RemResultsKarrynOrgasmPluralEN;
		}, configurable: true
	},
	resultsKarrynMasturbatedInBattleSingular: { 
		get: function() { 
			if(this.isJapanese) return RemResultsKarrynMasturbatedInBattleSingularJP;
			else if(this.isEnglish) return RemResultsKarrynMasturbatedInBattleSingularEN;
		}, configurable: true
	},
	resultsKarrynMasturbatedInBattlePlural: { 
		get: function() { 
			if(this.isJapanese) return RemResultsKarrynMasturbatedInBattlePluralJP;
			else if(this.isEnglish) return RemResultsKarrynMasturbatedInBattlePluralEN;
		}, configurable: true
	},
	resultsKarrynKiss: { 
		get: function() { 
			if(this.isJapanese) return RemResultsKarrynKissJP;
			else if(this.isEnglish) return RemResultsKarrynKissEN;
		}, configurable: true
	},
	resultsKarrynHandjob: { 
		get: function() { 
			if(this.isJapanese) return RemResultsKarrynHandjobJP;
			else if(this.isEnglish) return RemResultsKarrynHandjobEN;
		}, configurable: true
	},
	resultsKarrynBlowjob: { 
		get: function() { 
			if(this.isJapanese) return RemResultsKarrynBlowjobJP;
			else if(this.isEnglish) return RemResultsKarrynBlowjobEN;
		}, configurable: true
	},
	resultsKarrynTitjob: { 
		get: function() { 
			if(this.isJapanese) return RemResultsKarrynTitjobJP;
			else if(this.isEnglish) return RemResultsKarrynTitjobEN;
		}, configurable: true
	},
	resultsKarrynFootjob: { 
		get: function() { 
			if(this.isJapanese) return RemResultsKarrynFootjobJP;
			else if(this.isEnglish) return RemResultsKarrynFootjobEN;
		}, configurable: true
	},
	resultsKarrynRimjob: { 
		get: function() { 
			if(this.isJapanese) return RemResultsKarrynRimjobJP;
			else if(this.isEnglish) return RemResultsKarrynRimjobEN;
		}, configurable: true
	},
	resultsKarrynVaginalSex: { 
		get: function() { 
			if(this.isJapanese) return RemResultsKarrynVaginalSexJP;
			else if(this.isEnglish) return RemResultsKarrynVaginalSexEN;
		}, configurable: true
	},
	resultsKarrynAnalSex: { 
		get: function() { 
			if(this.isJapanese) return RemResultsKarrynAnalSexJP;
			else if(this.isEnglish) return RemResultsKarrynAnalSexEN;
		}, configurable: true
	},


	resultsPassivesTitle: { 
		get: function() { 
			if(this.isJapanese) return RemResultsPassivesTitleJP;
			else if(this.isEnglish) return RemResultsPassivesTitleEN;
		}, configurable: true
	},	
	
	RemDailyReportDayCount: { 
		get: function() { 
			if(this.isJapanese) return RemDailyReportDayCountJP;
			else if(this.isEnglish) return RemDailyReportDayCountEN;
		}, configurable: true
	},		
	RemDailyReportAnarchyNoLimit: { 
		get: function() { 
			if(this.isJapanese) return RemDailyReportAnarchyNoLimitJP;
			else if(this.isEnglish) return RemDailyReportAnarchyNoLimitEN;
		}, configurable: true
	},	
	RemDailyReportAnarchyLimitBefore_singular: { 
		get: function() { 
			if(this.isJapanese) return RemDailyReportAnarchyLimitBefore_singularJP;
			else if(this.isEnglish) return RemDailyReportAnarchyLimitBefore_singularEN;
		}, configurable: true
	},	
	RemDailyReportAnarchyLimitBefore_plural: { 
		get: function() { 
			if(this.isJapanese) return RemDailyReportAnarchyLimitBefore_pluralJP;
			else if(this.isEnglish) return RemDailyReportAnarchyLimitBefore_pluralEN;
		}, configurable: true
	},
	RemDailyReportAnarchyPastLimit: { 
		get: function() { 
			if(this.isJapanese) return RemDailyReportAnarchyPastLimitJP;
			else if(this.isEnglish) return RemDailyReportAnarchyPastLimitEN;
		}, configurable: true
	},
	RemDailyReportRiot_New: { 
		get: function() { 
			if(this.isJapanese) return RemDailyReportRiot_NewJP;
			else if(this.isEnglish) return RemDailyReportRiot_NewEN;
		}, configurable: true
	},	
	RemDailyReportRiot_Old: { 
		get: function() { 
			if(this.isJapanese) return RemDailyReportRiot_OldJP;
			else if(this.isEnglish) return RemDailyReportRiot_OldEN;
		}, configurable: true
	},
	RemDailyReportOrderChange_Positive: { 
		get: function() { 
			if(this.isJapanese) return RemDailyReportOrderChange_PositiveJP;
			else if(this.isEnglish) return RemDailyReportOrderChange_PositiveEN;
		}, configurable: true
	},
	RemDailyReportOrderChange_Negative: { 
		get: function() { 
			if(this.isJapanese) return RemDailyReportOrderChange_NegativeJP;
			else if(this.isEnglish) return RemDailyReportOrderChange_NegativeEN;
		}, configurable: true
	},
	RemDailyReportOrderChange_Neutral: { 
		get: function() { 
			if(this.isJapanese) return RemDailyReportOrderChange_NeutralJP;
			else if(this.isEnglish) return RemDailyReportOrderChange_NeutralEN;
		}, configurable: true
	},
	RemDailyReportFundingChange_Positive: { 
		get: function() { 
			if(this.isJapanese) return RemDailyReportFundingChange_PositiveJP;
			else if(this.isEnglish) return RemDailyReportFundingChange_PositiveEN;
		}, configurable: true
	},
	RemDailyReportFundingChange_Negative: { 
		get: function() { 
			if(this.isJapanese) return RemDailyReportFundingChange_NegativeJP;
			else if(this.isEnglish) return RemDailyReportFundingChange_NegativeEN;
		}, configurable: true
	},
	RemDailyReportBankruptcy: { 
		get: function() { 
			if(this.isJapanese) return RemDailyReportBankruptcyJP;
			else if(this.isEnglish) return RemDailyReportBankruptcyEN;
		}, configurable: true
	},
	RemDailyReportEdictPoints_Singular: { 
		get: function() { 
			if(this.isJapanese) return RemDailyReportEdictPoints_SingularJP;
			else if(this.isEnglish) return RemDailyReportEdictPoints_SingularEN;
		}, configurable: true
	},
	RemDailyReportEdictPoints_Plural: { 
		get: function() { 
			if(this.isJapanese) return RemDailyReportEdictPoints_PluralJP;
			else if(this.isEnglish) return RemDailyReportEdictPoints_PluralEN;
		}, configurable: true
	},
	RemDailyReportBarRep_AlmostDecay: { 
		get: function() { 
			if(this.isJapanese) return RemDailyReportBarRep_AlmostDecayJP;
			else if(this.isEnglish) return RemDailyReportBarRep_AlmostDecayEN;
		}, configurable: true
	},
	RemDailyReportBarRep_Decayed: { 
		get: function() { 
			if(this.isJapanese) return RemDailyReportBarRep_DecayedJP;
			else if(this.isEnglish) return RemDailyReportBarRep_DecayedEN;
		}, configurable: true
	},
	RemDailyReportVisitorRep_AlmostDecay: { 
		get: function() { 
			if(this.isJapanese) return RemDailyReportVisitorRep_AlmostDecayJP;
			else if(this.isEnglish) return RemDailyReportVisitorRep_AlmostDecayEN;
		}, configurable: true
	},
	RemDailyReportVisitorRep_Decayed: { 
		get: function() { 
			if(this.isJapanese) return RemDailyReportVisitorRep_DecayedJP;
			else if(this.isEnglish) return RemDailyReportVisitorRep_DecayedEN;
		}, configurable: true
	},
	RemDailyReportToiletRep_AlmostDecay: { 
		get: function() { 
			if(this.isJapanese) return RemDailyReportToiletRep_AlmostDecayJP;
			else if(this.isEnglish) return RemDailyReportToiletRep_AlmostDecayEN;
		}, configurable: true
	},
	RemDailyReportToiletRep_Decayed: { 
		get: function() { 
			if(this.isJapanese) return RemDailyReportToiletRep_DecayedJP;
			else if(this.isEnglish) return RemDailyReportToiletRep_DecayedEN;
		}, configurable: true
	},

	
	paramGainedStrength: { 
		get: function() { 
			if(this.isJapanese) return RemParamGainedStrengthJP;
			else if(this.isEnglish) return RemParamGainedStrengthEN;
		}, configurable: true
	},
	paramGainedStamina: { 
		get: function() { 
			if(this.isJapanese) return RemParamGainedStaminaJP;
			else if(this.isEnglish) return RemParamGainedStaminaEN;
		}, configurable: true
	},
	paramGainedEnergy: { 
		get: function() { 
			if(this.isJapanese) return RemParamGainedEnergyJP;
			else if(this.isEnglish) return RemParamGainedEnergyEN;
		}, configurable: true
	},
	paramGainedDexterity: { 
		get: function() { 
			if(this.isJapanese) return RemParamGainedDexterityJP;
			else if(this.isEnglish) return RemParamGainedDexterityEN;
		}, configurable: true
	},
	paramGainedAgility: { 
		get: function() { 
			if(this.isJapanese) return RemParamGainedAgilityJP;
			else if(this.isEnglish) return RemParamGainedAgilityEN;
		}, configurable: true
	},
	paramGainedEndurance: { 
		get: function() { 
			if(this.isJapanese) return RemParamGainedEnduranceJP;
			else if(this.isEnglish) return RemParamGainedEnduranceEN;
		}, configurable: true
	},
	paramGainedMind: { 
		get: function() { 
			if(this.isJapanese) return RemParamGainedMindJP;
			else if(this.isEnglish) return RemParamGainedMindEN;
		}, configurable: true
	},
	paramGainedCharm: { 
		get: function() { 
			if(this.isJapanese) return RemParamGainedCharmJP;
			else if(this.isEnglish) return RemParamGainedCharmEN;
		}, configurable: true
	},
	
	paramLevelGainedSingular: { 
		get: function() { 
			if(this.isJapanese) return RemParamLevelGainedSingularJP;
			else if(this.isEnglish) return RemParamLevelGainedSingularEN;
		}, configurable: true
	},
	paramLevelGainedPlural: { 
		get: function() { 
			if(this.isJapanese) return RemParamLevelGainedPluralJP;
			else if(this.isEnglish) return RemParamLevelGainedPluralEN;
		}, configurable: true
	},
	wardenLevelRequireSingular: { 
		get: function() { 
			if(this.isJapanese) return RemWardenLevelRequireSingularJP;
			else if(this.isEnglish) return RemWardenLevelRequireSingularEN;
		}, configurable: true
	},
	wardenLevelRequirePlural: { 
		get: function() { 
			if(this.isJapanese) return RemWardenLevelRequirePluralJP;
			else if(this.isEnglish) return RemWardenLevelRequirePluralEN;
		}, configurable: true
	},
	wardenLevelUp: { 
		get: function() { 
			if(this.isJapanese) return RemWardenLevelUpJP;
			else if(this.isEnglish) return RemWardenLevelUpEN;
		}, configurable: true
	},
	wardenLevelLimitReached: { 
		get: function() { 
			if(this.isJapanese) return RemWardenLevelLimitReachedJP;
			else if(this.isEnglish) return RemWardenLevelLimitReachedEN;
		}, configurable: true
	},
	
	
	expEnemiesDefeated: { 
		get: function() { 
			if(this.isJapanese) return RemExpEnemiesDefeatedJP;
			else if(this.isEnglish) return RemExpEnemiesDefeatedEN;
		}, configurable: true
	},	
	expHalberdCombat: { 
		get: function() { 
			if(this.isJapanese) return RemExpHalberdCombatJP;
			else if(this.isEnglish) return RemExpHalberdCombatEN;
		}, configurable: true
	},		
	expUnarmedCombat: { 
		get: function() { 
			if(this.isJapanese) return RemExpUnarmedCombatJP;
			else if(this.isEnglish) return RemExpUnarmedCombatEN;
		}, configurable: true
	},	
	expEvasionCombat: { 
		get: function() { 
			if(this.isJapanese) return RemExpEvasionCombatJP;
			else if(this.isEnglish) return RemExpEvasionCombatEN;
		}, configurable: true
	},	
	expWillpowerCombat: { 
		get: function() { 
			if(this.isJapanese) return RemExpWillpowerCombatJP;
			else if(this.isEnglish) return RemExpWillpowerCombatEN;
		}, configurable: true
	},
	expEnduranceCombat: { 
		get: function() { 
			if(this.isJapanese) return RemExpEnduranceCombatJP;
			else if(this.isEnglish) return RemExpEnduranceCombatEN;
		}, configurable: true
	},
	
	expTalkSensitivity: { 
		get: function() { 
			if(this.isJapanese) return RemExpTalkSensitivityJP;
			else if(this.isEnglish) return RemExpTalkSensitivityEN;
		}, configurable: true
	},
	expSightSensitivity: { 
		get: function() { 
			if(this.isJapanese) return RemExpSightSensitivityJP;
			else if(this.isEnglish) return RemExpSightSensitivityEN;
		}, configurable: true
	},
	expFingerSensitivity: { 
		get: function() { 
			if(this.isJapanese) return RemExpFingerSensitivityJP;
			else if(this.isEnglish) return RemExpFingerSensitivityEN;
		}, configurable: true
	},	
	expMouthSensitivity: { 
		get: function() { 
			if(this.isJapanese) return RemExpMouthSensitivityJP;
			else if(this.isEnglish) return RemExpMouthSensitivityEN;
		}, configurable: true
	},	
	expBoobsSensitivity: { 
		get: function() { 
			if(this.isJapanese) return RemExpBoobsSensitivityJP;
			else if(this.isEnglish) return RemExpBoobsSensitivityEN;
		}, configurable: true
	},	
	expPussySensitivity: { 
		get: function() { 
			if(this.isJapanese) return RemExpPussySensitivityJP;
			else if(this.isEnglish) return RemExpPussySensitivityEN;
		}, configurable: true
	},
	expButtSensitivity: { 
		get: function() { 
			if(this.isJapanese) return RemExpButtSensitivityJP;
			else if(this.isEnglish) return RemExpButtSensitivityEN;
		}, configurable: true
	},	
	expCreampieSensitivity: { 
		get: function() { 
			if(this.isJapanese) return RemExpCreampieSensitivityJP;
			else if(this.isEnglish) return RemExpCreampieSensitivityEN;
		}, configurable: true
	},	
	expBukkakeSensitivity: { 
		get: function() { 
			if(this.isJapanese) return RemExpBukkakeSensitivityJP;
			else if(this.isEnglish) return RemExpBukkakeSensitivityEN;
		}, configurable: true
	},
	expSwallowSensitivity: { 
		get: function() { 
			if(this.isJapanese) return RemExpSwallowSensitivityJP;
			else if(this.isEnglish) return RemExpSwallowSensitivityEN;
		}, configurable: true
	},
	expKissSkill: { 
		get: function() { 
			if(this.isJapanese) return RemExpKissSkillJP;
			else if(this.isEnglish) return RemExpKissSkillEN;
		}, configurable: true
	},		
	expPettingSkill: { 
		get: function() { 
			if(this.isJapanese) return RemExpPettingSkillJP;
			else if(this.isEnglish) return RemExpPettingSkillEN;
		}, configurable: true
	},		
	expHandjobSkill: { 
		get: function() { 
			if(this.isJapanese) return RemExpHandjobSkillJP;
			else if(this.isEnglish) return RemExpHandjobSkillEN;
		}, configurable: true
	},
	expBlowjobSkill: { 
		get: function() { 
			if(this.isJapanese) return RemExpBlowjobSkillJP;
			else if(this.isEnglish) return RemExpBlowjobSkillEN;
		}, configurable: true
	},
	expTittyFuckSkill: { 
		get: function() { 
			if(this.isJapanese) return RemExpTittyFuckSkillJP;
			else if(this.isEnglish) return RemExpTittyFuckSkillEN;
		}, configurable: true
	},
	expPussySexSkill: { 
		get: function() { 
			if(this.isJapanese) return RemExpPussySexSkillJP;
			else if(this.isEnglish) return RemExpPussySexSkillEN;
		}, configurable: true
	},
	expAnalSexSkill: { 
		get: function() { 
			if(this.isJapanese) return RemExpAnalSexSkillJP;
			else if(this.isEnglish) return RemExpAnalSexSkillEN;
		}, configurable: true
	},
	expMasturbateSkill: { 
		get: function() { 
			if(this.isJapanese) return RemExpMasturbateSkillJP;
			else if(this.isEnglish) return RemExpMasturbateSkillEN;
		}, configurable: true
	},
	expOrgasmSpecial: { 
		get: function() { 
			if(this.isJapanese) return RemExpOrgasmSpecialJP;
			else if(this.isEnglish) return RemExpOrgasmSpecialEN;
		}, configurable: true
	},
	expStrippedSpecial: { 
		get: function() { 
			if(this.isJapanese) return RemExpStrippedSpecialJP;
			else if(this.isEnglish) return RemExpStrippedSpecialEN;
		}, configurable: true
	},
	expDoublePenetrationSpecial: { 
		get: function() { 
			if(this.isJapanese) return RemExpDoublePenetrationSpecialJP;
			else if(this.isEnglish) return RemExpDoublePenetrationSpecialEN;
		}, configurable: true
	},
	expTriplePenetrationSpecial: { 
		get: function() { 
			if(this.isJapanese) return RemExpTriplePenetrationSpecialJP;
			else if(this.isEnglish) return RemExpTriplePenetrationSpecialEN;
		}, configurable: true
	},	
	
	yanflyBattleCoreUser: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyBattleCoreUserJP;
			else if(this.isEnglish) return RemYanflyBattleCoreUserEN;
		}, configurable: true
	},		
	yanflyBattleCoreAlly: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyBattleCoreAllyJP;
			else if(this.isEnglish) return RemYanflyBattleCoreAllyEN;
		}, configurable: true
	},		
	yanflyBattleCoreAllies: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyBattleCoreAlliesJP;
			else if(this.isEnglish) return RemYanflyBattleCoreAlliesEN;
		}, configurable: true
	},	
	yanflyBattleCoreEnemy: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyBattleCoreEnemyJP;
			else if(this.isEnglish) return RemYanflyBattleCoreEnemyEN;
		}, configurable: true
	},		
	yanflyBattleCoreEnemies: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyBattleCoreEnemiesJP;
			else if(this.isEnglish) return RemYanflyBattleCoreEnemiesEN;
		}, configurable: true
	},		
	yanflyBattleCoreAllTargets: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyBattleCoreAllTargetsJP;
			else if(this.isEnglish) return RemYanflyBattleCoreAllTargetsEN;
		}, configurable: true
	},		
	yanflyBattleCoreRandomTargets: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyBattleCoreRandomTargetsJP;
			else if(this.isEnglish) return RemYanflyBattleCoreRandomTargetsEN;
		}, configurable: true
	},	
	yanflyRemove: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyRemoveJP;
			else if(this.isEnglish) return RemYanflyRemoveEN;
		}, configurable: true
	},
	yanflyEmpty: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyEmptyJP;
			else if(this.isEnglish) return RemYanflyEmptyEN;
		}, configurable: true
	},
	
	yanflyOptionsAll: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_All_JP;
			else if(this.isEnglish) return RemYanflyOptions_All_EN;
		}, configurable: true
	},
	yanflyOptionsAllHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_All_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_All_Help_EN;
		}, configurable: true
	},
	yanflyOptionsGeneral: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_General_JP;
			else if(this.isEnglish) return RemYanflyOptions_General_EN;
		}, configurable: true
	},
	yanflyOptionsGeneralHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_General_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_General_Help_EN;
		}, configurable: true
	},
	yanflyOptionsAudio: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Audio_JP;
			else if(this.isEnglish) return RemYanflyOptions_Audio_EN;
		}, configurable: true
	},
	yanflyOptionsAudioHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Audio_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Audio_Help_EN;
		}, configurable: true
	},
	yanflyOptionsVisual: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Visual_JP;
			else if(this.isEnglish) return RemYanflyOptions_Visual_EN;
		}, configurable: true
	},
	yanflyOptionsVisualHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Visual_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Visual_Help_EN;
		}, configurable: true
	},
	yanflyOptionsControls: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Controls_JP;
			else if(this.isEnglish) return RemYanflyOptions_Controls_EN;
		}, configurable: true
	},
	yanflyOptionsControlsHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Controls_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Controls_Help_EN;
		}, configurable: true
	},
	yanflyOptionsCheats: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_EN;
		}, configurable: true
	},
	yanflyOptionsCheatsHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_Help_EN;
		}, configurable: true
	},

	yanflyOptionsExit: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Exit_JP;
			else if(this.isEnglish) return RemYanflyOptions_Exit_EN;
		}, configurable: true
	},
	yanflyOptionsExitHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Exit_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Exit_Help_EN;
		}, configurable: true
	},
	
	yanflyOptionsLanguage: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Language_JP;
			else if(this.isEnglish) return RemYanflyOptions_Language_EN;
		}, configurable: true
	},
	yanflyOptionsLanguageHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Language_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Language_Help_EN;
		}, configurable: true
	},
	yanflyOptionsAlwaysDash: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_AlwaysDash_JP;
			else if(this.isEnglish) return RemYanflyOptions_AlwaysDash_EN;
		}, configurable: true
	},
	yanflyOptionsAlwaysDashHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_AlwaysDash_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_AlwaysDash_Help_EN;
		}, configurable: true
	},
	
	yanflyOptionsKarrynLinesPrompt: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_KarrynLinesPrompt_JP;
			else if(this.isEnglish) return RemYanflyOptions_KarrynLinesPrompt_EN;
		}, configurable: true
	},
	yanflyOptionsKarrynLinesPromptHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_KarrynLinesPrompt_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_KarrynLinesPrompt_Help_EN;
		}, configurable: true
	},
	yanflyOptionsFasterBattleDialogue: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_FasterBattleDialogue_JP;
			else if(this.isEnglish) return RemYanflyOptions_FasterBattleDialogue_EN;
		}, configurable: true
	},
	yanflyOptionsFasterBattleDialogueHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_FasterBattleDialogue_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_FasterBattleDialogue_Help_EN;
		}, configurable: true
	},
	yanflyOptionsFasterBattleCutins: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_FasterBattleCutins_JP;
			else if(this.isEnglish) return RemYanflyOptions_FasterBattleCutins_EN;
		}, configurable: true
	},
	yanflyOptionsFasterBattleCutinsHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_FasterBattleCutins_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_FasterBattleCutins_Help_EN;
		}, configurable: true
	},
	
	yanflyOptionsSmootherBattleCutinLoading: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_SmootherBattleCutinLoading_JP;
			else if(this.isEnglish) return RemYanflyOptions_SmootherBattleCutinLoading_EN;
		}, configurable: true
	},
	yanflyOptionsSmootherBattleCutinLoadingHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_SmootherBattleCutinLoading_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_SmootherBattleCutinLoading_Help_EN;
		}, configurable: true
	},
	yanflyOptionsDisableBattleCutins: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_DisableBattleCutins_JP;
			else if(this.isEnglish) return RemYanflyOptions_DisableBattleCutins_EN;
		}, configurable: true
	},
	yanflyOptionsDisableBattleCutinsHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_DisableBattleCutins_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_DisableBattleCutins_Help_EN;
		}, configurable: true
	},
	yanflyOptionsSmootherCGLoading: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_SmootherCGLoading_JP;
			else if(this.isEnglish) return RemYanflyOptions_SmootherCGLoading_EN;
		}, configurable: true
	},
	yanflyOptionsSmootherCGLoadingHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_SmootherCGLoading_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_SmootherCGLoading_Help_EN;
		}, configurable: true
	},
	
	
	
	yanflyOptionsSortPassivesAscending: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_SortPassivesAscending_JP;
			else if(this.isEnglish) return RemYanflyOptions_SortPassivesAscending_EN;
		}, configurable: true
	},
	yanflyOptionsSortPassivesAscendingHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_SortPassivesAscending_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_SortPassivesAscending_Help_EN;
		}, configurable: true
	},
	
	
	yanflyOptionsCommandRemember: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_CommandRemember_JP;
			else if(this.isEnglish) return RemYanflyOptions_CommandRemember_EN;
		}, configurable: true
	},
	yanflyOptionsCommandRememberHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_CommandRemember_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_CommandRemember_Help_EN;
		}, configurable: true
	},
	yanflyOptionsCancelSkipMentalPhase: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_CancelSkipMentalPhase_JP;
			else if(this.isEnglish) return RemYanflyOptions_CancelSkipMentalPhase_EN;
		}, configurable: true
	},
	yanflyOptionsCancelSkipMentalPhaseHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_CancelSkipMentalPhase_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_CancelSkipMentalPhase_Help_EN;
		}, configurable: true
	},
	yanflyOptionsMessageSpeed: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_MessageSpeed_JP;
			else if(this.isEnglish) return RemYanflyOptions_MessageSpeed_EN;
		}, configurable: true
	},
	yanflyOptionsMessageSpeedHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_MessageSpeed_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_MessageSpeed_Help_EN;
		}, configurable: true
	},
	yanflyOptionsMessageSpeedNoWait: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_MessageSpeed_NoWait_JP;
			else if(this.isEnglish) return RemYanflyOptions_MessageSpeed_NoWait_EN;
		}, configurable: true
	},
	
	yanflyOptionsBattlelogDuration: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Battlelog_Duration_JP;
			else if(this.isEnglish) return RemYanflyOptions_Battlelog_Duration_EN;
		}, configurable: true
	},
	yanflyOptionsBattlelogDurationHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Battlelog_Duration_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Battlelog_Duration_Help_EN;
		}, configurable: true
	},
	
	yanflyOptionsBattlelogFontsize: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Battlelog_Fontsize_JP;
			else if(this.isEnglish) return RemYanflyOptions_Battlelog_Fontsize_EN;
		}, configurable: true
	},
	yanflyOptionsBattlelogFontsizeHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Battlelog_Fontsize_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Battlelog_Fontsize_Help_EN;
		}, configurable: true
	},
	
	yanflyOptionsMaleDialogueAppear: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_MaleDialogueAppear_JP;
			else if(this.isEnglish) return RemYanflyOptions_MaleDialogueAppear_EN;
		}, configurable: true
	},
	yanflyOptionsMaleDialogueAppearHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_MaleDialogueAppear_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_MaleDialogueAppear_Help_EN;
		}, configurable: true
	},
	
	yanflyOptionsDisableRimjob: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Disable_Rimjobs_JP;
			else if(this.isEnglish) return RemYanflyOptions_Disable_Rimjobs_EN;
		}, configurable: true
	},
	yanflyOptionsDisableRimjobHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Disable_Rimjobs_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Disable_Rimjobs_Help_EN;
		}, configurable: true
	},
	
	yanflyOptionsDisplayPleasureAsPercent: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_DisplayPleasureAsPercent_JP;
			else if(this.isEnglish) return RemYanflyOptions_DisplayPleasureAsPercent_EN;
		}, configurable: true
	},
	yanflyOptionsDisplayPleasureAsPercentHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_DisplayPleasureAsPercent_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_DisplayPleasureAsPercent_Help_EN;
		}, configurable: true
	},
	
	
	yanflyOptionsShorterDefeatBattles: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_ShorterDefeatBattles_JP;
			else if(this.isEnglish) return RemYanflyOptions_ShorterDefeatBattles_EN;
		}, configurable: true
	},
	yanflyOptionsShorterDefeatBattlesHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_ShorterDefeatBattles_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_ShorterDefeatBattles_Help_EN;
		}, configurable: true
	},
	
	
	
	yanflyOptionsMasterVolume: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_MasterVolume_JP;
			else if(this.isEnglish) return RemYanflyOptions_MasterVolume_EN;
		}, configurable: true
	},
	yanflyOptionsMasterVolumeHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_MasterVolume_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_MasterVolume_Help_EN;
		}, configurable: true
	},
	yanflyOptionsBGMVolume: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_BGMVolume_JP;
			else if(this.isEnglish) return RemYanflyOptions_BGMVolume_EN;
		}, configurable: true
	},
	yanflyOptionsBGMVolumeHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_BGMVolume_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_BGMVolume_Help_EN;
		}, configurable: true
	},
	yanflyOptionsBGSVolume: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_BGSVolume_JP;
			else if(this.isEnglish) return RemYanflyOptions_BGSVolume_EN;
		}, configurable: true
	},
	yanflyOptionsBGSVolumeHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_BGSVolume_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_BGSVolume_Help_EN;
		}, configurable: true
	},
	yanflyOptionsMEVolume: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_MEVolume_JP;
			else if(this.isEnglish) return RemYanflyOptions_MEVolume_EN;
		}, configurable: true
	},
	yanflyOptionsMEVolumeHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_MEVolume_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_MEVolume_Help_EN;
		}, configurable: true
	},
	yanflyOptionsSEVolume: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_SEVolume_JP;
			else if(this.isEnglish) return RemYanflyOptions_SEVolume_EN;
		}, configurable: true
	},
	yanflyOptionsSEVolumeHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_SEVolume_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_SEVolume_Help_EN;
		}, configurable: true
	},
	yanflyOptionsWindowToneRed: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_WindowToneRed_JP;
			else if(this.isEnglish) return RemYanflyOptions_WindowToneRed_EN;
		}, configurable: true
	},
	yanflyOptionsWindowToneRedHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_WindowToneRed_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_WindowToneRed_Help_EN;
		}, configurable: true
	},
	yanflyOptionsWindowToneGreen: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_WindowToneGreen_JP;
			else if(this.isEnglish) return RemYanflyOptions_WindowToneGreen_EN;
		}, configurable: true
	},
	yanflyOptionsWindowToneGreenHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_WindowToneGreen_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_WindowToneGreen_Help_EN;
		}, configurable: true
	},
	yanflyOptionsWindowToneBlue: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_WindowToneBlue_JP;
			else if(this.isEnglish) return RemYanflyOptions_WindowToneBlue_EN;
		}, configurable: true
	},
	yanflyOptionsWindowToneBlueHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_WindowToneBlue_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_WindowToneBlue_Help_EN;
		}, configurable: true
	},
	yanflyOptionsSynchFPS: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_SynchFPS_JP;
			else if(this.isEnglish) return RemYanflyOptions_SynchFPS_EN;
		}, configurable: true
	},
	yanflyOptionsSynchFPSHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_SynchFPS_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_SynchFPS_Help_EN;
		}, configurable: true
	},
	yanflyOptionsLightingEffects: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_LightingEffects_JP;
			else if(this.isEnglish) return RemYanflyOptions_LightingEffects_EN;
		}, configurable: true
	},
	yanflyOptionsLightingEffectsHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_LightingEffects_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_LightingEffects_Help_EN;
		}, configurable: true
	},
	yanflyOptionsMapEffects: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_MapEffects_JP;
			else if(this.isEnglish) return RemYanflyOptions_MapEffects_EN;
		}, configurable: true
	},
	yanflyOptionsMapEffectsHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_MapEffects_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_MapEffects_Help_EN;
		}, configurable: true
	},
	
	yanflyOptionsDisplayPubicHair: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_DisplayPubicHair_JP;
			else if(this.isEnglish) return RemYanflyOptions_DisplayPubicHair_EN;
		}, configurable: true
	},
	yanflyOptionsDisplayPubicHairHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_DisplayPubicHair_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_DisplayPubicHair_Help_EN;
		}, configurable: true
	},
	yanflyOptionsShowSexualDamagePopup: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_ShowSexualDamagePopup_JP;
			else if(this.isEnglish) return RemYanflyOptions_ShowSexualDamagePopup_EN;
		}, configurable: true
	},
	yanflyOptionsShowSexualDamagePopupHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_ShowSexualDamagePopup_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_ShowSexualDamagePopup_Help_EN;
		}, configurable: true
	},
	
	yanflyOptionsGamepadControl: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_GamepadControl_JP;
			else if(this.isEnglish) return RemYanflyOptions_GamepadControl_EN;
		}, configurable: true
	},
	yanflyOptionsGamepadControlHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_GamepadControl_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_GamepadControl_Help_EN;
		}, configurable: true
	},
	yanflyOptionsKeyboardControl: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_KeyboardControl_JP;
			else if(this.isEnglish) return RemYanflyOptions_KeyboardControl_EN;
		}, configurable: true
	},
	yanflyOptionsKeyboardControlHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_KeyboardControl_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_KeyboardControl_Help_EN;
		}, configurable: true
	},
	
	yanflyOptionsGamepadButtonName: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyGamepadButtonNameJP;
			else if(this.isEnglish) return RemYanflyGamepadButtonNameEN;
		}, configurable: true
	},
	yanflyOptionsOkButtonName: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyGamepadOkButtonNameJP;
			else if(this.isEnglish) return RemYanflyGamepadOkButtonNameEN;
		}, configurable: true
	},
	yanflyOptionsOkButtonHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyGamepadOkButtonHelpJP;
			else if(this.isEnglish) return RemYanflyGamepadOkButtonHelpEN;
		}, configurable: true
	},
	yanflyOptionsCancelButtonName: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyGamepadCancelButtonNameJP;
			else if(this.isEnglish) return RemYanflyGamepadCancelButtonNameEN;
		}, configurable: true
	},
	yanflyOptionsCancelButtonHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyGamepadCancelButtonHelpJP;
			else if(this.isEnglish) return RemYanflyGamepadCancelButtonHelpEN;
		}, configurable: true
	},
	yanflyOptionsShiftButtonName: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyGamepadShiftButtonNameJP;
			else if(this.isEnglish) return RemYanflyGamepadShiftButtonNameEN;
		}, configurable: true
	},
	yanflyOptionsShiftButtonHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyGamepadShiftButtonHelpJP;
			else if(this.isEnglish) return RemYanflyGamepadShiftButtonHelpEN;
		}, configurable: true
	},
	yanflyOptionsMenuButtonName: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyGamepadMenuButtonNameJP;
			else if(this.isEnglish) return RemYanflyGamepadMenuButtonNameEN;
		}, configurable: true
	},
	yanflyOptionsMenuButtonHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyGamepadMenuButtonHelpJP;
			else if(this.isEnglish) return RemYanflyGamepadMenuButtonHelpEN;
		}, configurable: true
	},
	yanflyOptionsPageUpButtonName: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyGamepadPageUpButtonNameJP;
			else if(this.isEnglish) return RemYanflyGamepadPageUpButtonNameEN;
		}, configurable: true
	},
	yanflyOptionsPageUpButtonHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyGamepadPageUpButtonHelpJP;
			else if(this.isEnglish) return RemYanflyGamepadPageUpButtonHelpEN;
		}, configurable: true
	},
	yanflyOptionsPageDownButtonName: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyGamepadPageDownButtonNameJP;
			else if(this.isEnglish) return RemYanflyGamepadPageDownButtonNameEN;
		}, configurable: true
	},
	yanflyOptionsPageDownButtonHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyGamepadPageDownButtonHelpJP;
			else if(this.isEnglish) return RemYanflyGamepadPageDownButtonHelpEN;
		}, configurable: true
	},
	yanflyOptionsResetDefaultName: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyGamepadResetDefaultNameJP;
			else if(this.isEnglish) return RemYanflyGamepadResetDefaultNameEN;
		}, configurable: true
	},
	yanflyOptionsResetDefaultHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyGamepadResetDefaultHelpJP;
			else if(this.isEnglish) return RemYanflyGamepadResetDefaultHelpEN;
		}, configurable: true
	},
	yanflyOptionsFinishConfigName: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyGamepadFinishConfigNameJP;
			else if(this.isEnglish) return RemYanflyGamepadFinishConfigNameEN;
		}, configurable: true
	},
	yanflyOptionsFinishConfigHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyGamepadFinishConfigHelpJP;
			else if(this.isEnglish) return RemYanflyGamepadFinishConfigHelpEN;
		}, configurable: true
	},
	yanflyKeyboardHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyKeyboardHelpJP;
			else if(this.isEnglish) return RemYanflyKeyboardHelpEN;
		}, configurable: true
	},
	yanflyKeyboardDefaultLayoutText: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyKeyboardDefaultLayoutTextJP;
			else if(this.isEnglish) return RemYanflyKeyboardDefaultLayoutTextEN;
		}, configurable: true
	},
	yanflyKeyboardDefaultLayoutHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyKeyboardDefaultLayoutHelpJP;
			else if(this.isEnglish) return RemYanflyKeyboardDefaultLayoutHelpEN;
		}, configurable: true
	},
	yanflyKeyboardWASDText: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyKeyboardWASDTextJP;
			else if(this.isEnglish) return RemYanflyKeyboardWASDTextEN;
		}, configurable: true
	},
	yanflyKeyboardWASDHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyKeyboardWASDHelpJP;
			else if(this.isEnglish) return RemYanflyKeyboardWASDHelpEN;
		}, configurable: true
	},
	yanflyKeyboardFinishConfigText: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyKeyboardFinishConfigTextJP;
			else if(this.isEnglish) return RemYanflyKeyboardFinishConfigTextEN;
		}, configurable: true
	},
	yanflyKeyboardFinishConfigHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyKeyboardFinishConfigHelpJP;
			else if(this.isEnglish) return RemYanflyKeyboardFinishConfigHelpEN;
		}, configurable: true
	},
	yanflyKeyboardClearText: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyKeyboardClearTextJP;
			else if(this.isEnglish) return RemYanflyKeyboardClearTextEN;
		}, configurable: true
	},
	yanflyKeyboardOKKey: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyKeyboardOKKeyJP;
			else if(this.isEnglish) return RemYanflyKeyboardOKKeyEN;
		}, configurable: true
	},
	yanflyKeyboardOKText: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyKeyboardOKTextJP;
			else if(this.isEnglish) return RemYanflyKeyboardOKTextEN;
		}, configurable: true
	},
	yanflyKeyboardEscapeKey: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyKeyboardEscapeKeyJP;
			else if(this.isEnglish) return RemYanflyKeyboardEscapeKeyEN;
		}, configurable: true
	},
	yanflyKeyboardEscapeText: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyKeyboardEscapeTextJP;
			else if(this.isEnglish) return RemYanflyKeyboardEscapeTextEN;
		}, configurable: true
	},
	yanflyKeyboardCancelKey: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyKeyboardCancelKeyJP;
			else if(this.isEnglish) return RemYanflyKeyboardCancelKeyEN;
		}, configurable: true
	},
	yanflyKeyboardCancelText: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyKeyboardCancelTextJP;
			else if(this.isEnglish) return RemYanflyKeyboardCancelTextEN;
		}, configurable: true
	},
	yanflyKeyboardMenuKey: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyKeyboardMenuKeyJP;
			else if(this.isEnglish) return RemYanflyKeyboardMenuKeyEN;
		}, configurable: true
	},
	yanflyKeyboardMenuText: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyKeyboardMenuTextJP;
			else if(this.isEnglish) return RemYanflyKeyboardMenuTextEN;
		}, configurable: true
	},
	yanflyKeyboardShiftKey: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyKeyboardShiftKeyJP;
			else if(this.isEnglish) return RemYanflyKeyboardShiftKeyEN;
		}, configurable: true
	},
	yanflyKeyboardShiftText: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyKeyboardShiftTextJP;
			else if(this.isEnglish) return RemYanflyKeyboardShiftTextEN;
		}, configurable: true
	},
	yanflyKeyboardPageUpKey: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyKeyboardPageUpKeyJP;
			else if(this.isEnglish) return RemYanflyKeyboardPageUpKeyEN;
		}, configurable: true
	},
	yanflyKeyboardPageUpText: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyKeyboardPageUpTextJP;
			else if(this.isEnglish) return RemYanflyKeyboardPageUpTextEN;
		}, configurable: true
	},
	yanflyKeyboardPageDownKey: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyKeyboardPageDownKeyJP;
			else if(this.isEnglish) return RemYanflyKeyboardPageDownKeyEN;
		}, configurable: true
	},
	yanflyKeyboardPageDownText: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyKeyboardPageDownTextJP;
			else if(this.isEnglish) return RemYanflyKeyboardPageDownTextEN;
		}, configurable: true
	},
	yanflyKeyboardLeftKey: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyKeyboardLeftKeyJP;
			else if(this.isEnglish) return RemYanflyKeyboardLeftKeyEN;
		}, configurable: true
	},
	yanflyKeyboardLeftText: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyKeyboardLeftTextJP;
			else if(this.isEnglish) return RemYanflyKeyboardLeftTextEN;
		}, configurable: true
	},
	yanflyKeyboardUpKey: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyKeyboardUpKeyJP;
			else if(this.isEnglish) return RemYanflyKeyboardUpKeyEN;
		}, configurable: true
	},
	yanflyKeyboardUpText: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyKeyboardUpTextJP;
			else if(this.isEnglish) return RemYanflyKeyboardUpTextEN;
		}, configurable: true
	},
	yanflyKeyboardRightKey: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyKeyboardRightKeyJP;
			else if(this.isEnglish) return RemYanflyKeyboardRightKeyEN;
		}, configurable: true
	},
	yanflyKeyboardRightText: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyKeyboardRightTextJP;
			else if(this.isEnglish) return RemYanflyKeyboardRightTextEN;
		}, configurable: true
	},
	yanflyKeyboardDownKey: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyKeyboardDownKeyJP;
			else if(this.isEnglish) return RemYanflyKeyboardDownKeyEN;
		}, configurable: true
	},
	yanflyKeyboardDownText: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyKeyboardDownTextJP;
			else if(this.isEnglish) return RemYanflyKeyboardDownTextEN;
		}, configurable: true
	},
	
	RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_Help: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_Help: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_EnemyDoubleSexualDamage: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_Help: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_EnemyTripleSexualDamage: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_EnemyTripleSexualDamage_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_EnemyTripleSexualDamage_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_EnemyTripleSexualDamage_Help: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_EnemyTripleSexualDamage_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_EnemyTripleSexualDamage_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_EnemyAlwaysAct: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_EnemyAlwaysAct_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_EnemyAlwaysAct_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_EnemyAlwaysAct_Help: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_EnemyAlwaysAct_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_EnemyAlwaysAct_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_ActorHalfStaminaRegen: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_ActorHalfStaminaRegen_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_ActorHalfStaminaRegen_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_ActorHalfStaminaRegen_Help: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_ActorHalfStaminaRegen_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_ActorHalfStaminaRegen_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_ActorThirdStaminaRegen: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_ActorThirdStaminaRegen_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_ActorThirdStaminaRegen_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_ActorThirdStaminaRegen_Help: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_ActorThirdStaminaRegen_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_ActorThirdStaminaRegen_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_ActorNoEvasion: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_ActorNoEvasion_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_ActorNoEvasion_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_ActorNoEvasion_Help: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_ActorNoEvasion_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_ActorNoEvasion_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_ActorHalfExpRate: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_ActorHalfExpRate_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_ActorHalfExpRate_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_ActorHalfExpRate_Help: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_ActorHalfExpRate_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_ActorHalfExpRate_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_LessControlFive: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_LessControlFive_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_LessControlFive_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_LessControlFive_Help: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_LessControlFive_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_LessControlFive_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_LessControlTen: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_LessControlTen_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_LessControlTen_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_LessControlTen_Help: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_LessControlTen_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_LessControlTen_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_InstantRiotsOne: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_InstantRiotsOne_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_InstantRiotsOne_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_InstantRiotsOne_Help: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_InstantRiotsOne_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_InstantRiotsOne_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_InstantRiotsTwo: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_InstantRiotsTwo_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_InstantRiotsTwo_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_InstantRiotsTwo_Help: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_InstantRiotsTwo_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_InstantRiotsTwo_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_InstantRiotsThree: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_InstantRiotsThree_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_InstantRiotsThree_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_InstantRiotsThree_Help: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_InstantRiotsThree_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_InstantRiotsThree_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_InstantRiotsFour: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_InstantRiotsFour_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_InstantRiotsFour_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_InstantRiotsFour_Help: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_InstantRiotsFour_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_InstantRiotsFour_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_NoAutoSave: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_NoAutoSave_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_NoAutoSave_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_NoAutoSave_Help: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyOptions_Cheats_NoAutoSave_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_NoAutoSave_Help_EN;
		}, configurable: true
	},
	
	
	yanflySaveYes: { 
		get: function() { 
			if(this.isJapanese) return RemYanflySaveYesJP;
			else if(this.isEnglish) return RemYanflySaveYesEN;
		}, configurable: true
	},
	yanflySaveNo: { 
		get: function() { 
			if(this.isJapanese) return RemYanflySaveNoJP;
			else if(this.isEnglish) return RemYanflySaveNoEN;
		}, configurable: true
	},
	yanflySaveDeleteText: { 
		get: function() { 
			if(this.isJapanese) return RemYanflySaveDeleteTextJP;
			else if(this.isEnglish) return RemYanflySaveDeleteTextEN;
		}, configurable: true
	},
	yanflySaveSaveText: { 
		get: function() { 
			if(this.isJapanese) return RemYanflySaveSaveTextJP;
			else if(this.isEnglish) return RemYanflySaveSaveTextEN;
		}, configurable: true
	},
	yanflySaveLoadText: { 
		get: function() { 
			if(this.isJapanese) return RemYanflySaveLoadTextJP;
			else if(this.isEnglish) return RemYanflySaveLoadTextEN;
		}, configurable: true
	},	
	yanflySaveInvalidText: { 
		get: function() { 
			if(this.isJapanese) return RemYanflySaveInvalidTextJP;
			else if(this.isEnglish) return RemYanflySaveInvalidTextEN;
		}, configurable: true
	},
	yanflySaveEmpty: { 
		get: function() { 
			if(this.isJapanese) return RemYanflySaveEmptyJP;
			else if(this.isEnglish) return RemYanflySaveEmptyEN;
		}, configurable: true
	},
	yanflySaveSelectHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflySaveSelectHelpJP;
			else if(this.isEnglish) return RemYanflySaveSelectHelpEN;
		}, configurable: true
	},
	yanflySaveLoadHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflySaveLoadHelpJP;
			else if(this.isEnglish) return RemYanflySaveLoadHelpEN;
		}, configurable: true
	},
	yanflySaveSaveHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflySaveSaveHelpJP;
			else if(this.isEnglish) return RemYanflySaveSaveHelpEN;
		}, configurable: true
	},
	yanflySaveDeleteHelp: { 
		get: function() { 
			if(this.isJapanese) return RemYanflySaveDeleteHelpJP;
			else if(this.isEnglish) return RemYanflySaveDeleteHelpEN;
		}, configurable: true
	},
	yanflyAutosaving: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyAutosavingJP;
			else if(this.isEnglish) return RemYanflyAutosavingEN;
		}, configurable: true
	},
	
	yanflySavePlaytime: { 
		get: function() { 
			if(this.isJapanese) return RemYanflySavePlaytimeJP;
			else if(this.isEnglish) return RemYanflySavePlaytimeEN;
		}, configurable: true
	},
	yanflySaveTotalSaves: { 
		get: function() { 
			if(this.isJapanese) return RemYanflySaveTotalSavesJP;
			else if(this.isEnglish) return RemYanflySaveTotalSavesEN;
		}, configurable: true
	},
	yanflySaveTotalDays: { 
		get: function() { 
			if(this.isJapanese) return RemYanflySaveTotalDaysJP;
			else if(this.isEnglish) return RemYanflySaveTotalDaysEN;
		}, configurable: true
	},
	yanflySaveTotalPlaythroughs: { 
		get: function() { 
			if(this.isJapanese) return RemYanflySaveTotalPlaythroughsJP;
			else if(this.isEnglish) return RemYanflySaveTotalPlaythroughsEN;
		}, configurable: true
	},
	yanflySaveTotalEndings: { 
		get: function() { 
			if(this.isJapanese) return RemYanflySaveTotalEndingsJP;
			else if(this.isEnglish) return RemYanflySaveTotalEndingsEN;
		}, configurable: true
	},
	
	
	yanflyTargetEverybody: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyTargetEverybodyJP;
			else if(this.isEnglish) return RemYanflyTargetEverybodyEN;
		}, configurable: true
	},	
	yanflyTargetMultiEverybody: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyTargetMultiEverybodyJP;
			else if(this.isEnglish) return RemYanflyTargetMultiEverybodyEN;
		}, configurable: true
	},		
	yanflyTargetMultiAllies: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyTargetMultiAlliesJP;
			else if(this.isEnglish) return RemYanflyTargetMultiAlliesEN;
		}, configurable: true
	},		
	yanflyTargetMultiFoes: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyTargetMultiFoesJP;
			else if(this.isEnglish) return RemYanflyTargetMultiFoesEN;
		}, configurable: true
	},		
	yanflyTargetFemaleAlly: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyTargetFemaleAllyJP;
			else if(this.isEnglish) return RemYanflyTargetFemaleAllyEN;
		}, configurable: true
	},			
	yanflyTargetFemaleEnemy: { 
		get: function() { 
			if(this.isJapanese) return RemYanflyTargetFemaleEnemyJP;
			else if(this.isEnglish) return RemYanflyTargetFemaleEnemyEN;
		}, configurable: true
	},	


	FTKRSkillTreeConfirmText: { 
		get: function() { 
			if(this.isJapanese) return RemFTKRSkillTreeConfirmTextJP;
			else if(this.isEnglish) return RemFTKRSkillTreeConfirmTextEN;
		}, configurable: true
	},
	FTKRSkillTreeYes: { 
		get: function() { 
			if(this.isJapanese) return RemFTKRSkillTreeYesJP;
			else if(this.isEnglish) return RemFTKRSkillTreeYesEN;
		}, configurable: true
	},
	FTKRSkillTreeNo: { 
		get: function() { 
			if(this.isJapanese) return RemFTKRSkillTreeNoJP;
			else if(this.isEnglish) return RemFTKRSkillTreeNoEN;
		}, configurable: true
	},
	FTKRSkillTreeEdictPoints: { 
		get: function() { 
			if(this.isJapanese) return RemFTKRSkillTreeEdictPointsJP;
			else if(this.isEnglish) return RemFTKRSkillTreeEdictPointsEN;
		}, configurable: true
	},	
	FTKRSkillTreeEdictPointsAbbr: { 
		get: function() { 
			if(this.isJapanese) return RemFTKRSkillTreeEdictPointsAbbrJP;
			else if(this.isEnglish) return RemFTKRSkillTreeEdictPointsAbbrEN;
		}, configurable: true
	},	
	FTKRSkillTreeOrder: { 
		get: function() { 
			if(this.isJapanese) return RemFTKRSkillTreeOrderJP;
			else if(this.isEnglish) return RemFTKRSkillTreeOrderEN;
		}, configurable: true
	},	
		
	FTKRSkillTreeFunding: { 
		get: function() { 
			if(this.isJapanese) return RemFTKRSkillTreeFundingJP;
			else if(this.isEnglish) return RemFTKRSkillTreeFundingEN;
		}, configurable: true
	},		
	FTKRSkillTreeFundingCost: { 
		get: function() { 
			if(this.isJapanese) return RemFTKRSkillTreeFundingCostJP;
			else if(this.isEnglish) return RemFTKRSkillTreeFundingCostEN;
		}, configurable: true
	},		
	FTKRSkillTreeCostText: { 
		get: function() { 
			if(this.isJapanese) return RemFTKRSkillTreeCostTextJP;
			else if(this.isEnglish) return RemFTKRSkillTreeCostTextEN;
		}, configurable: true
	},
	FTKRSkillTreeCostItem: { 
		get: function() { 
			if(this.isJapanese) return RemFTKRSkillTreeCostItemJP;
			else if(this.isEnglish) return RemFTKRSkillTreeCostItemEN;
		}, configurable: true
	},	
	FTKRSkillTreePreReqText: { 
		get: function() { 
			if(this.isJapanese) return RemFTKRSkillTreePreReqTextJP;
			else if(this.isEnglish) return RemFTKRSkillTreePreReqTextEN;
		}, configurable: true
	},			
	FTKRSkillTreeReqTypeEdict: { 
		get: function() { 
			if(this.isJapanese) return RemFTKRSkillTreeReqTypeEdictJP;
			else if(this.isEnglish) return RemFTKRSkillTreeReqTypeEdictEN;
		}, configurable: true
	},	
	FTKRSkillTreeReqTypePassive: { 
		get: function() { 
			if(this.isJapanese) return RemFTKRSkillTreeReqTypePassiveJP;
			else if(this.isEnglish) return RemFTKRSkillTreeReqTypePassiveEN;
		}, configurable: true
	},	

	
	RemGALVQuestActive: { 
		get: function() { 
			if(this.isJapanese) return RemGALVQuestActiveJP;
			else if(this.isEnglish) return RemGALVQuestActiveEN;
		}, configurable: true
	},		
	RemGALVQuestCompleted: { 
		get: function() { 
			if(this.isJapanese) return RemGALVQuestCompletedJP;
			else if(this.isEnglish) return RemGALVQuestCompletedEN;
		}, configurable: true
	},		
	RemGALVQuestDetails: { 
		get: function() { 
			if(this.isJapanese) return RemGALVQuestDetailsJP;
			else if(this.isEnglish) return RemGALVQuestDetailsEN;
		}, configurable: true
	},	
	RemGALVQuestObjectives: { 
		get: function() { 
			if(this.isJapanese) return RemGALVQuestObjectivesJP;
			else if(this.isEnglish) return RemGALVQuestObjectivesEN;
		}, configurable: true
	},
	RemGlossaryHelp: { 
		get: function() { 
			if(this.isJapanese) return RemGlossaryHelpJP;
			else if(this.isEnglish) return RemGlossaryHelpEN;
		}, configurable: true
	},
	RemGlossaryCatHelp: { 
		get: function() { 
			if(this.isJapanese) return RemGlossaryCatHelpJP;
			else if(this.isEnglish) return RemGlossaryCatHelpEN;
		}, configurable: true
	},
	
	RemErrorMessage: { 
		get: function() { 
			if(this.isJapanese) return RemErrorMessageJP;
			else if(this.isEnglish) return RemErrorMessageEN;
		}, configurable: true
	},
	
	
	SuperEffectiveText: { 
		get: function() { 
			if(this.isJapanese) return SuperEffectiveTextJP;
			else if(this.isEnglish) return SuperEffectiveTextEN;
		}, configurable: true
	},
	NotEffectiveText: { 
		get: function() { 
			if(this.isJapanese) return NotEffectiveTextJP;
			else if(this.isEnglish) return NotEffectiveTextEN;
		}, configurable: true
	},

	prisonerGeneric: { 
		get: function() { 
			if(this.isJapanese) return RemPrisonerGenericJP;
			else if(this.isEnglish) return RemPrisonerGenericEN;
		}, configurable: true
	},	
	prisonerThug: { 
		get: function() { 
			if(this.isJapanese) return RemPrisonerThugJP;
			else if(this.isEnglish) return RemPrisonerThugEN;
		}, configurable: true
	},	
	prisonerOrc: { 
		get: function() { 
			if(this.isJapanese) return RemPrisonerOrcJP;
			else if(this.isEnglish) return RemPrisonerOrcEN;
		}, configurable: true
	},
	prisonerGoblin: { 
		get: function() { 
			if(this.isJapanese) return RemPrisonerGoblinJP;
			else if(this.isEnglish) return RemPrisonerGoblinEN;
		}, configurable: true
	},
	prisonerGuard: { 
		get: function() { 
			if(this.isJapanese) return RemPrisonerGuardJP;
			else if(this.isEnglish) return RemPrisonerGuardEN;
		}, configurable: true
	},	
	prisonerSlime: { 
		get: function() { 
			if(this.isJapanese) return RemPrisonerSlimeJP;
			else if(this.isEnglish) return RemPrisonerSlimeEN;
		}, configurable: true
	},	
	prisonerRogue: { 
		get: function() { 
			if(this.isJapanese) return RemPrisonerRogueJP;
			else if(this.isEnglish) return RemPrisonerRogueEN;
		}, configurable: true
	},	
	prisonerNerd: { 
		get: function() { 
			if(this.isJapanese) return RemPrisonerNerdJP;
			else if(this.isEnglish) return RemPrisonerNerdEN;
		}, configurable: true
	},	
	prisonerLizardman: { 
		get: function() { 
			if(this.isJapanese) return RemPrisonerLizardmanJP;
			else if(this.isEnglish) return RemPrisonerLizardmanEN;
		}, configurable: true
	},	
	prisonerHomeless: { 
		get: function() { 
			if(this.isJapanese) return RemPrisonerHomelessJP;
			else if(this.isEnglish) return RemPrisonerHomelessEN;
		}, configurable: true
	},	
	prisonerWerewolf: { 
		get: function() { 
			if(this.isJapanese) return RemPrisonerWerewolfJP;
			else if(this.isEnglish) return RemPrisonerWerewolfEN;
		}, configurable: true
	},	
	prisonerYeti: { 
		get: function() { 
			if(this.isJapanese) return RemPrisonerYetiJP;
			else if(this.isEnglish) return RemPrisonerYetiEN;
		}, configurable: true
	},
	
	receptionistVisitor: { 
		get: function() { 
			if(this.isJapanese) return RemReceptionistVisitorJP;
			else if(this.isEnglish) return RemReceptionistVisitorEN;
		}, configurable: true
	},	
	receptionistFan: { 
		get: function() { 
			if(this.isJapanese) return RemReceptionistFanJP;
			else if(this.isEnglish) return RemReceptionistFanEN;
		}, configurable: true
	},
	
	
	
	bossYasu: { 
		get: function() { 
			if(this.isJapanese) return RemBossYasuJP;
			else if(this.isEnglish) return RemBossYasuEN;
		}, configurable: true
	},	
	bossTonkin: { 
		get: function() { 
			if(this.isJapanese) return RemBossTonkinJP;
			else if(this.isEnglish) return RemBossTonkinEN;
		}, configurable: true
	},	
	bossCargill: { 
		get: function() { 
			if(this.isJapanese) return RemBossCargillJP;
			else if(this.isEnglish) return RemBossCargillEN;
		}, configurable: true
	},	
	bossAron: { 
		get: function() { 
			if(this.isJapanese) return RemBossAronJP;
			else if(this.isEnglish) return RemBossAronEN;
		}, configurable: true
	},	
	bossNoinim: { 
		get: function() { 
			if(this.isJapanese) return RemBossNoinimJP;
			else if(this.isEnglish) return RemBossNoinimEN;
		}, configurable: true
	},	
	
	
	restoreMindPartialSuccess: { 
		get: function() { 
			if(this.isJapanese) return RemRestoreMindPartialSuccessJP;
			else if(this.isEnglish) return RemRestoreMindPartialSuccessEN;
		}, configurable: true
	},
	restoreMindFullSuccess: { 
		get: function() { 
			if(this.isJapanese) return RemRestoreMindFullSuccessJP;
			else if(this.isEnglish) return RemRestoreMindFullSuccessEN;
		}, configurable: true
	},
	restoreMindFailure: { 
		get: function() { 
			if(this.isJapanese) return RemRestoreMindFailureJP;
			else if(this.isEnglish) return RemRestoreMindFailureEN;
		}, configurable: true
	},
	
	alcoholWater: { 
		get: function() { 
			if(this.isJapanese) return RemAlcoholTypeWaterJP;
			else if(this.isEnglish) return RemAlcoholTypeWaterEN;
		}, configurable: true
	},
	alcoholPaleAle: { 
		get: function() { 
			if(this.isJapanese) return RemAlcoholTypePaleAleJP;
			else if(this.isEnglish) return RemAlcoholTypePaleAleEN;
		}, configurable: true
	},
	alcoholDarkAle: { 
		get: function() { 
			if(this.isJapanese) return RemAlcoholTypeDarkAleJP;
			else if(this.isEnglish) return RemAlcoholTypeDarkAleEN;
		}, configurable: true
	},
	alcoholVodka: { 
		get: function() { 
			if(this.isJapanese) return RemAlcoholTypeVodkaJP;
			else if(this.isEnglish) return RemAlcoholTypeVodkaEN;
		}, configurable: true
	},
	alcoholTequila: { 
		get: function() { 
			if(this.isJapanese) return RemAlcoholTypeTequilaJP;
			else if(this.isEnglish) return RemAlcoholTypeTequilaEN;
		}, configurable: true
	},
	alcoholGoldRum: { 
		get: function() { 
			if(this.isJapanese) return RemAlcoholTypeGoldRumJP;
			else if(this.isEnglish) return RemAlcoholTypeGoldRumEN;
		}, configurable: true
	},
	alcoholOverproofRum: { 
		get: function() { 
			if(this.isJapanese) return RemAlcoholTypeOverproofRumJP;
			else if(this.isEnglish) return RemAlcoholTypeOverproofRumEN;
		}, configurable: true
	},
	alcoholWhiskey: { 
		get: function() { 
			if(this.isJapanese) return RemAlcoholTypeWhiskeyJP;
			else if(this.isEnglish) return RemAlcoholTypeWhiskeyEN;
		}, configurable: true
	},
	alcoholDirtyMugsSingular: { 
		get: function() { 
			if(this.isJapanese) return RemAlcoholTypeDirtyMugsSingularJP;
			else if(this.isEnglish) return RemAlcoholTypeDirtyMugsSingularEN;
		}, configurable: true
	},
	alcoholDirtyMugsPlural: { 
		get: function() { 
			if(this.isJapanese) return RemAlcoholTypeDirtyMugsPluralJP;
			else if(this.isEnglish) return RemAlcoholTypeDirtyMugsPluralEN;
		}, configurable: true
	},
	alcoholDirtyGlassesSingular: { 
		get: function() { 
			if(this.isJapanese) return RemAlcoholTypeDirtyGlassesSingularJP;
			else if(this.isEnglish) return RemAlcoholTypeDirtyGlassesSingularEN;
		}, configurable: true
	},
	alcoholDirtyGlassesPlural: { 
		get: function() { 
			if(this.isJapanese) return RemAlcoholTypeDirtyGlassesPluralJP;
			else if(this.isEnglish) return RemAlcoholTypeDirtyGlassesPluralEN;
		}, configurable: true
	},
	
	waitressGetsTip: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressGetsTipJP;
			else if(this.isEnglish) return RemWaitressGetsTipEN;
		}, configurable: true
	},
	waitressEnemySleep: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressEnemySleepJP;
			else if(this.isEnglish) return RemWaitressEnemySleepEN;
		}, configurable: true
	},
	waitressEnemyWakeUp: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressEnemyWakeUpJP;
			else if(this.isEnglish) return RemWaitressEnemyWakeUpEN;
		}, configurable: true
	},
	waitressEnemyLeavesBar: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressEnemyLeavesBarJP;
			else if(this.isEnglish) return RemWaitressEnemyLeavesBarEN;
		}, configurable: true
	},
	waitressEnemyLeavesBarDrunk: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressEnemyLeavesBarDrunkJP;
			else if(this.isEnglish) return RemWaitressEnemyLeavesBarDrunkEN;
		}, configurable: true
	},
	waitressEnemyCallingForWaitress: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressEnemyCallingForWaitressJP;
			else if(this.isEnglish) return RemWaitressEnemyCallingForWaitressEN;
		}, configurable: true
	},
	waitressEnemyDidntCallForWaitress: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressEnemyDidntCallForWaitressJP;
			else if(this.isEnglish) return RemWaitressEnemyDidntCallForWaitressEN;
		}, configurable: true
	},
	waitressEnemyAskingForDrink: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressEnemyAskingForDrinkJP;
			else if(this.isEnglish) return RemWaitressEnemyAskingForDrinkEN;
		}, configurable: true
	},
	waitressEnemyAskingForWaitressToDrink: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressEnemyAskingForWaitressToDrinkJP;
			else if(this.isEnglish) return RemWaitressEnemyAskingForWaitressToDrinkEN;
		}, configurable: true
	},
	waitressEnemyAskingForWaitressToFlash: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressEnemyAskingForWaitressToFlashJP;
			else if(this.isEnglish) return RemWaitressEnemyAskingForWaitressToFlashEN;
		}, configurable: true
	},
	waitressRefusesDrink: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressRefusesDrinkJP;
			else if(this.isEnglish) return RemWaitressRefusesDrinkEN;
		}, configurable: true
	},
	waitressAcceptsDrink: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressAcceptsDrinkJP;
			else if(this.isEnglish) return RemWaitressAcceptsDrinkEN;
		}, configurable: true
	},
	waitressWontFlash: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressWontFlashJP;
			else if(this.isEnglish) return RemWaitressWontFlashEN;
		}, configurable: true
	},
	waitressFlashes: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressFlashesJP;
			else if(this.isEnglish) return RemWaitressFlashesEN;
		}, configurable: true
	},
	waitressEnemyRefusesDrink: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressEnemyRefusesDrinkJP;
			else if(this.isEnglish) return RemWaitressEnemyRefusesDrinkEN;
		}, configurable: true
	},
	waitressEnemyAcceptsDrink: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressEnemyAcceptsDrinkJP;
			else if(this.isEnglish) return RemWaitressEnemyAcceptsDrinkEN;
		}, configurable: true
	},
	waitressEnemyAlcoholKiss: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressEnemyAlcoholKissJP;
			else if(this.isEnglish) return RemWaitressEnemyAlcoholKissEN;
		}, configurable: true
	},
	waitressEnemyCheerForBrawlNoDrink: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressEnemyCheerForBrawlNoDrinkJP;
			else if(this.isEnglish) return RemWaitressEnemyCheerForBrawlNoDrinkEN;
		}, configurable: true
	},
	waitressEnemyCheerForBrawlYesDrink: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressEnemyCheerForBrawlYesDrinkJP;
			else if(this.isEnglish) return RemWaitressEnemyCheerForBrawlYesDrinkEN;
		}, configurable: true
	},
	waitressBrawlStart: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressBrawlStartJP;
			else if(this.isEnglish) return RemWaitressBrawlStartEN;
		}, configurable: true
	},
	waitressBrawlJoin: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressBrawlJoinJP;
			else if(this.isEnglish) return RemWaitressBrawlJoinEN;
		}, configurable: true
	},
	waitressBarDamage: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressBarDamageJP;
			else if(this.isEnglish) return RemWaitressBarDamageEN;
		}, configurable: true
	},
	waitressBarEnemyTellsJoke: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressEnemyTellsJokeJP;
			else if(this.isEnglish) return RemWaitressEnemyTellsJokeEN;
		}, configurable: true
	},
	waitressBarEnemyContinuesJoke: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressEnemyContinuesJokeJP;
			else if(this.isEnglish) return RemWaitressEnemyContinuesJokeEN;
		}, configurable: true
	},
	waitressBarEnemyHearsJoke: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressEnemyHearsJokeJP;
			else if(this.isEnglish) return RemWaitressEnemyHearsJokeEN;
		}, configurable: true
	},
	waitressBarEnemyLaughsJoke: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressEnemyLaughsJokeJP;
			else if(this.isEnglish) return RemWaitressEnemyLaughsJokeEN;
		}, configurable: true
	},
	waitressBarEnemyChugsDrink: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressEnemyChugsDrinkJP;
			else if(this.isEnglish) return RemWaitressEnemyChugsDrinkEN;
		}, configurable: true
	},
	waitressBarEnemyChugsDrinkFinish: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressEnemyChugsDrinkFinishJP;
			else if(this.isEnglish) return RemWaitressEnemyChugsDrinkFinishEN;
		}, configurable: true
	},
	waitressBarEnemyChatting: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressEnemyChattingJP;
			else if(this.isEnglish) return RemWaitressEnemyChattingEN;
		}, configurable: true
	},
	waitressBarEnemyChattingHimself: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressEnemyChattingHimselfJP;
			else if(this.isEnglish) return RemWaitressEnemyChattingHimselfEN;
		}, configurable: true
	},
	waitressBarEnemyStartSex: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressEnemyStartSexJP;
			else if(this.isEnglish) return RemWaitressEnemyStartSexEN;
		}, configurable: true
	},
	
	
	waitressEnemyRefillsKarrynMug: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressEnemyRefillsKarrynMugJP;
			else if(this.isEnglish) return RemWaitressEnemyRefillsKarrynMugEN;
		}, configurable: true
	},
	waitressEnemyDumpsKarrynMug: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressEnemyDumpsKarrynMugJP;
			else if(this.isEnglish) return RemWaitressEnemyDumpsKarrynMugEN;
		}, configurable: true
	},
	
	waitressDrinkSemenMug: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressDrinkSemenMugJP;
			else if(this.isEnglish) return RemWaitressDrinkSemenMugEN;
		}, configurable: true
	},
	
	
	waitressBarEnemyEntersBar: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressEnemyEntersBarJP;
			else if(this.isEnglish) return RemWaitressEnemyEntersBarEN;
		}, configurable: true
	},
	waitressBarEnemyFuming: { 
		get: function() { 
			if(this.isJapanese) return RemWaitressEnemyFumingJP;
			else if(this.isEnglish) return RemWaitressEnemyFumingEN;
		}, configurable: true
	},
	
	receptionistNewVisitor: { 
		get: function() { 
			if(this.isJapanese) return RemReceptionistNewVisitorJP;
			else if(this.isEnglish) return RemReceptionistNewVisitorEN;
		}, configurable: true
	},
	receptionistNewGoblin: { 
		get: function() { 
			if(this.isJapanese) return RemReceptionistNewGoblinJP;
			else if(this.isEnglish) return RemReceptionistNewGoblinEN;
		}, configurable: true
	},
	receptionistGoblinDefeated: { 
		get: function() { 
			if(this.isJapanese) return RemReceptionistGoblinDefeatedJP;
			else if(this.isEnglish) return RemReceptionistGoblinDefeatedEN;
		}, configurable: true
	},
	
	receptionistVisitorEntersVisitingRoom: { 
		get: function() { 
			if(this.isJapanese) return RemReceptionistVisitorEntersVisitingRoomJP;
			else if(this.isEnglish) return RemReceptionistVisitorEntersVisitingRoomEN;
		}, configurable: true
	},
	receptionistVisitingRoomStatusOccupiedPlural: { 
		get: function() { 
			if(this.isJapanese) return RemReceptionistVisitingRoomStatusOccupiedPluralJP;
			else if(this.isEnglish) return RemReceptionistVisitingRoomStatusOccupiedPluralEN;
		}, configurable: true
	},
	receptionistVisitingRoomStatusOccupiedSingle: { 
		get: function() { 
			if(this.isJapanese) return RemReceptionistVisitingRoomStatusOccupiedSingleJP;
			else if(this.isEnglish) return RemReceptionistVisitingRoomStatusOccupiedSingleEN;
		}, configurable: true
	},
	receptionistVisitingRoomStatusNotOccupied: { 
		get: function() { 
			if(this.isJapanese) return RemReceptionistVisitingRoomStatusNotOccupiedJP;
			else if(this.isEnglish) return RemReceptionistVisitingRoomStatusNotOccupiedEN;
		}, configurable: true
	},
	
	receptionistVisitorWantsToHandOverPaper: { 
		get: function() { 
			if(this.isJapanese) return RemReceptionistVisitorWantsToHandOverPaperJP;
			else if(this.isEnglish) return RemReceptionistVisitorWantsToHandOverPaperEN;
		}, configurable: true
	},
	
	receptionistVisitorAngryComplaint_OccupiedVisitingRoom: { 
		get: function() { 
			if(this.isJapanese) return RemReceptionistVisitorAngryComplaint_OccupiedVisitingRoomJP;
			else if(this.isEnglish) return RemReceptionistVisitorAngryComplaint_OccupiedVisitingRoomEN;
		}, configurable: true
	},
	receptionistGreetVisitorResultNormal: { 
		get: function() { 
			if(this.isJapanese) return RemReceptionistGreetVisitorResultNormalJP;
			else if(this.isEnglish) return RemReceptionistGreetVisitorResultNormalEN;
		}, configurable: true
	},
	
	receptionistFinishedProcessingPapers: { 
		get: function() { 
			if(this.isJapanese) return RemReceptionistFinishedProcessingPapersJP;
			else if(this.isEnglish) return RemReceptionistFinishedProcessingPapersEN;
		}, configurable: true
	},
	
	receptionistVisitorLeavesAngry: { 
		get: function() { 
			if(this.isJapanese) return RemReceptionistVisitorLeavesAngryJP;
			else if(this.isEnglish) return RemReceptionistVisitorLeavesAngryEN;
		}, configurable: true
	},
	receptionistFanLeavesHappy: { 
		get: function() { 
			if(this.isJapanese) return RemReceptionistFanLeavesHappyJP;
			else if(this.isEnglish) return RemReceptionistFanLeavesHappyEN;
		}, configurable: true
	},
	receptionistFanLeavesDejected: { 
		get: function() { 
			if(this.isJapanese) return RemReceptionistFanLeavesDejectedJP;
			else if(this.isEnglish) return RemReceptionistFanLeavesDejectedEN;
		}, configurable: true
	},
	receptionistPervLeavesHappy: { 
		get: function() { 
			if(this.isJapanese) return RemReceptionistPervLeavesHappyJP;
			else if(this.isEnglish) return RemReceptionistPervLeavesHappyEN;
		}, configurable: true
	},
	receptionistPervLeavesAngry: { 
		get: function() { 
			if(this.isJapanese) return RemReceptionistPervLeavesAngryJP;
			else if(this.isEnglish) return RemReceptionistPervLeavesAngryEN;
		}, configurable: true
	},
	receptionistNotHereForVisitation: { 
		get: function() { 
			if(this.isJapanese) return RemReceptionistNotHereForVisitationJP;
			else if(this.isEnglish) return RemReceptionistNotHereForVisitationEN;
		}, configurable: true
	},
	
	
	
	gloryBattleEnd: { 
		get: function() { 
			if(this.isJapanese) return RemGloryBattleEndJP;
			else if(this.isEnglish) return RemGloryBattleEndEN;
		}, configurable: true
	},
	gloryLeftStallCockName: { 
		get: function() { 
			if(this.isJapanese) return RemGloryLeftStallCockNameJP;
			else if(this.isEnglish) return RemGloryLeftStallCockNameEN;
		}, configurable: true
	},
	gloryRightStallCockName: { 
		get: function() { 
			if(this.isJapanese) return RemGloryRightStallCockNameJP;
			else if(this.isEnglish) return RemGloryRightStallCockNameEN;
		}, configurable: true
	},
	gloryGuestEnterBathroom: { 
		get: function() { 
			if(this.isJapanese) return RemGloryGuestEnterBathroomJP;
			else if(this.isEnglish) return RemGloryGuestEnterBathroomEN;
		}, configurable: true
	},
	gloryGuestLeaveBathroom: { 
		get: function() { 
			if(this.isJapanese) return RemGloryGuestLeaveBathroomJP;
			else if(this.isEnglish) return RemGloryGuestLeaveBathroomEN;
		}, configurable: true
	},
	gloryGuestEnterLeftStall: { 
		get: function() { 
			if(this.isJapanese) return RemGloryGuestEnterLeftStallJP;
			else if(this.isEnglish) return RemGloryGuestEnterLeftStallEN;
		}, configurable: true
	},
	gloryGuestLeaveLeftStall: { 
		get: function() { 
			if(this.isJapanese) return RemGloryGuestLeaveLeftStallJP;
			else if(this.isEnglish) return RemGloryGuestLeaveLeftStallEN;
		}, configurable: true
	},
	gloryGuestEnterRightStall: { 
		get: function() { 
			if(this.isJapanese) return RemGloryGuestEnterRightStallJP;
			else if(this.isEnglish) return RemGloryGuestEnterRightStallEN;
		}, configurable: true
	},
	gloryGuestLeaveRightStall: { 
		get: function() { 
			if(this.isJapanese) return RemGloryGuestLeaveRightStallJP;
			else if(this.isEnglish) return RemGloryGuestLeaveRightStallEN;
		}, configurable: true
	},
	gloryGuestPissingLeftStall: { 
		get: function() { 
			if(this.isJapanese) return RemGloryGuestPissingLeftStallJP;
			else if(this.isEnglish) return RemGloryGuestPissingLeftStallEN;
		}, configurable: true
	},
	gloryGuestEatingLeftStall: { 
		get: function() { 
			if(this.isJapanese) return RemGloryGuestEatingLeftStallJP;
			else if(this.isEnglish) return RemGloryGuestEatingLeftStallEN;
		}, configurable: true
	},
	gloryGuestPissingRightStall: { 
		get: function() { 
			if(this.isJapanese) return RemGloryGuestPissingRightStallJP;
			else if(this.isEnglish) return RemGloryGuestPissingRightStallEN;
		}, configurable: true
	},
	gloryGuestEatingRightStall: { 
		get: function() { 
			if(this.isJapanese) return RemGloryGuestEatingRightStallJP;
			else if(this.isEnglish) return RemGloryGuestEatingRightStallEN;
		}, configurable: true
	},
	gloryGuestShowedThroughLeftHole: { 
		get: function() { 
			if(this.isJapanese) return RemGloryGuestShowedThroughLeftHoleJP;
			else if(this.isEnglish) return RemGloryGuestShowedThroughLeftHoleEN;
		}, configurable: true
	},
	gloryGuestShowedThroughRightHole: { 
		get: function() { 
			if(this.isJapanese) return RemGloryGuestShowedThroughRightHoleJP;
			else if(this.isEnglish) return RemGloryGuestShowedThroughRightHoleEN;
		}, configurable: true
	},
	
	midBattleEnemyReinforcement: { 
		get: function() { 
			if(this.isJapanese) return RemMidBattleEnemyReinforcementJP;
			else if(this.isEnglish) return RemMidBattleEnemyReinforcementEN;
		}, configurable: true
	},
	
	
	
	
	
	
});


TextManager.param = function(paramId) {
	switch (paramId) {
	case 0:
		if(this.isEnglish)
			return MaxHPNameEN;
		else if(this.isJapanese)
			return MaxHPNameJP;
		else
			return MaxHPNameEN;
		break;
	case 1:
		if(this.isEnglish)
			return MaxMPNameEN;
		else if(this.isJapanese)
			return MaxMPNameJP;
		else 
			return MaxMPNameEN;
		break;
	case 2:
		if(this.isEnglish)
			return AtkNameEN;
		else if(this.isJapanese)
			return AtkNameJP;
		else 
			return AtkNameEN;
		break;
	case 3:
		if(this.isEnglish)
			return DefNameEN;
		else if(this.isJapanese)
			return DefNameJP;
		else
			return DefNameEN;
		break;
	case 4:
		if(this.isEnglish)
			return MatNameEN;
		else if(this.isJapanese)
			return MatNameJP;
		else 
			return MatNameEN;
		break;
	case 5:
		if(this.isEnglish)
			return MdfNameEN;
		else if(this.isJapanese)
			return MdfNameJP;
		else
			return MdfNameEN;
		break;
	case 6:
		if(this.isEnglish)
			return AgiNameEN;
		else if(this.isJapanese)
			return AgiNameJP;
		else
			return AgiNameEN;
		break;
	case 7:
		if(this.isEnglish)
			return LukNameEN;
		else if(this.isJapanese)
			return LukNameJP;
		else 
			return LukNameEN;
		break;
	}
	
	return $dataSystem.terms.param[basicId] || '';
};

TextManager.xparam = function(paramId) {
	if(this.isJapanese) return XParamNameJP[paramId];
	else if(this.isEnglish) return XParamNameEN[paramId];
};

TextManager.sparam = function(paramId) {
	if(this.isJapanese) return SParamNameJP[paramId];
	else if(this.isEnglish) return SParamNameEN[paramId];
};

TextManager.passiveCategory = function(catNum) {
	if(this.isJapanese) return PassiveCategoryNameJP[catNum];
	else if(this.isEnglish) return PassiveCategoryNameEN[catNum];
};


TextManager.basic = function(basicId) {
	switch (basicId) {
	case 0:
		if(this.isJapanese)
			return LevelNameJP;
		else if(this.isEnglish)
			return LevelNameEN;
		break;
	case 1:
		if(this.isJapanese)
			return LevelAbbrJP;
		else if(this.isEnglish)
			return LevelAbbrEN;
		break;
	case 2:
		if(this.isJapanese)
			return HPNameJP;
		else if(this.isEnglish)
			return HPNameEN;
		break;
	case 3:
		if(this.isJapanese)
			return HPAbbrJP;
		else if(this.isEnglish)
			return HPAbbrEN;
		break;
	case 4:
		if(this.isJapanese)
			return MPNameJP;
		else if(this.isEnglish)
			return MPNameEN;
		break;
	case 5:
		if(this.isJapanese)
			return MPAbbrJP;
		else if(this.isEnglish)
			return MPAbbrEN;
		break;
	case 6:
		if(this.isJapanese)
			return TPNameJP;
		else if(this.isEnglish)
			return TPNameEN;
		break;
	case 7:
		if(this.isJapanese)
			return TPAbbrJP;
		else if(this.isEnglish)
			return TPAbbrEN;
		break;
	case 8:
		if(this.isJapanese)
			return EXPNameJP;
		else if(this.isEnglish)
			return EXPNameEN;
		break;
	case 9:
		if(this.isJapanese)
			return EXPAbbrJP;
		else if(this.isEnglish)
			return EXPAbbrEN;
		break;
	}
	
	return $dataSystem.terms.basic[basicId] || '';
};

TextManager.command = function(commandId) {
    switch (commandId) {
	case 0:
		if(this.isJapanese)
			return FightNameJP;
		else if(this.isEnglish)
			return FightNameEN;
		break;
	case 1:
		if(this.isJapanese)
			return EscapeNameJP;
		else if(this.isEnglish)
			return EscapeNameEN;
		break;
	case 2:
		if(this.isJapanese)
			return AttackNameJP;
		else if(this.isEnglish)
			return AttackNameEN;
		break;
	case 3:
		if(this.isJapanese)
			return GuardNameJP;
		else if(this.isEnglish)
			return GuardNameEN;
		break;
	case 4:
		if(this.isJapanese)
			return ItemNameJP;
		else if(this.isEnglish)
			return ItemNameEN;
		break;
	case 5:
		if(this.isJapanese)
			return SkillNameJP;
		else if(this.isEnglish)
			return SkillNameEN;
		break;
	case 6:
		if(this.isJapanese)
			return EquipNameJP;
		else if(this.isEnglish)
			return EquipNameEN;
		break;
	case 7:
		if(this.isJapanese)
			return StatusNameJP;
		else if(this.isEnglish)
			return StatusNameEN;
		break;
	case 8:
		if(this.isJapanese)
			return FormationNameJP;
		else if(this.isEnglish)
			return FormationNameEN;
		break;
	case 9:
		if(this.isJapanese)
			return SaveNameJP;
		else if(this.isEnglish)
			return SaveNameEN;
		break;
	case 10:
		if(this.isJapanese)
			return GameEndNameJP;
		else if(this.isEnglish)
			return GameEndNameEN;
		break;
	case 11:
		if(this.isJapanese)
			return OptionsNameJP;
		else if(this.isEnglish)
			return OptionsNameEN;
		break;
	case 12:
		if(this.isJapanese)
			return WeaponNameJP;
		else if(this.isEnglish)
			return WeaponNameEN;
		break;						
	case 13:
		if(this.isJapanese)
			return ArmorNameJP;
		else if(this.isEnglish)
			return ArmorNameEN;
		break;
	case 14:
		if(this.isJapanese)
			return KeyItemNameJP;
		else if(this.isEnglish)
			return KeyItemNameEN;
		break;
	case 15:
		if(this.isJapanese)
			return Equip2NameJP;
		else if(this.isEnglish)
			return Equip2NameEN;
		break;
	case 18:
		if(this.isJapanese)
			return NewGameNameJP;
		else if(this.isEnglish)
			return NewGameNameEN;
		break;
	case 19:
		if(this.isJapanese)
			return ContinueNameJP;
		else if(this.isEnglish)
			return ContinueNameEN;
		break;
	case 21:
		if(this.isJapanese)
			return ToTitleNameJP;
		else if(this.isEnglish)
			return ToTitleNameEN;
		break;
	case 22:
		if(this.isJapanese)
			return CancelNameJP;
		else if(this.isEnglish)
			return CancelNameEN;
		break;
	case 24:
		if(this.isJapanese)
			return BuyNameJP;
		else if(this.isEnglish)
			return BuyNameEN;
		break;
	case 25:
		if(this.isJapanese)
			return SellNameJP;
		else if(this.isEnglish)
			return SellNameEN;
		break;		
	}	
	
	return $dataSystem.terms.commands[commandId] || '';
};

TextManager.element = function(elementId) {
	switch (elementId) {
	case 1:
		if(this.isJapanese)
			return ElementAlmightyNameJP;
		else if(this.isEnglish)
			return ElementAlmightyNameEN;
		break;
	case 2:
		if(this.isJapanese)
			return ElementSlashNameJP;
		else if(this.isEnglish)
			return ElementSlashNameEN;
		break;
	case 3:
		if(this.isJapanese)
			return ElementPierceNameJP;
		else if(this.isEnglish)
			return ElementPierceNameEN;
		break;
	case 4:
		if(this.isJapanese)
			return ElementBluntNameJP;
		else if(this.isEnglish)
			return ElementBluntNameEN;
		break;
	case 5:
		if(this.isJapanese)
			return ElementTalkNameJP;
		else if(this.isEnglish)
			return ElementTalkNameEN;
		break;
	case 6:
		if(this.isJapanese)
			return ElementSightNameJP;
		else if(this.isEnglish)
			return ElementSightNameEN;
		break;
	case 7:
		if(this.isJapanese)
			return ElementPettingNameJP;
		else if(this.isEnglish)
			return ElementPettingNameEN;
		break;
	case 8:
		if(this.isJapanese)
			return ElementStripNameJP;
		else if(this.isEnglish)
			return ElementStripNameEN;
		break;	
	case 9:
		if(this.isJapanese)
			return ElementDrugsNameJP;
		else if(this.isEnglish)
			return ElementDrugsNameEN;
		break;	
	case 10:
		if(this.isJapanese)
			return ElementStenchNameJP;
		else if(this.isEnglish)
			return ElementStenchNameEN;
		break;	
	case 11:
		if(this.isJapanese)
			return ElementSexNameJP;
		else if(this.isEnglish)
			return ElementSexNameEN;
		break;	
	}

	return '';
};

TextManager.message = function(messageId) {
	switch (messageId) {
	case 'actionFailure':
		if(this.isJapanese)
			return ActionFailureJP;
		else if(this.isEnglish)
			return ActionFailureEN;
		break;
	case 'actorDamage':
		if(this.isJapanese)
			return ActorDamageJP;
		else if(this.isEnglish)
			return ActorDamageEN;
		break;
	case 'actorDrain':
		if(this.isJapanese)
			return ActorDrainJP;
		else if(this.isEnglish)
			return ActorDrainEN;
		break;
	case 'actorGain':
		if(this.isJapanese)
			return ActorGainJP;
		else if(this.isEnglish)
			return ActorGainEN;
		break;
	case 'actorLoss':
		if(this.isJapanese)
			return ActorLossJP;
		else if(this.isEnglish)
			return ActorLossEN;
		break;
	case 'actorNoDamage':
		if(this.isJapanese)
			return ActorNoDamageJP;
		else if(this.isEnglish)
			return ActorNoDamageEN;
		break;
	case 'actorNoHit':
		if(this.isJapanese)
			return ActorNoHitJP;
		else if(this.isEnglish)
			return ActorNoHitEN;
		break;
	case 'actorRecovery':
		if(this.isJapanese)
			return ActorRecoveryJP;
		else if(this.isEnglish)
			return ActorRecoveryEN;
		break;
	case 'criticalToActor':
		if(this.isJapanese)
			return CriticalToActorJP;
		else if(this.isEnglish)
			return CriticalToActorEN;
		break;
	case 'criticalToEnemy':
		if(this.isJapanese)
			return CriticalToEnemyJP;
		else if(this.isEnglish)
			return CriticalToEnemyEN;
		break;		
	case 'defeatText':
		if(this.isJapanese)
			return DefeatTextJP;
		else if(this.isEnglish)
			return DefeatTextEN;
		break;
	case 'emerge':
		if(this.isJapanese)
			return EmergeTextJP;
		else if(this.isEnglish)
			return EmergeTextEN;
		break;				
	case 'enemyDamage':
		if(this.isJapanese)
			return EnemyDamageJP;
		else if(this.isEnglish)
			return EnemyDamageEN;
		break;			
	case 'enemyDrain':
		if(this.isJapanese)
			return EnemyDrainJP;
		else if(this.isEnglish)
			return EnemyDrainEN;
		break;
	case 'enemyGain':
		if(this.isJapanese)
			return EnemyGainJP;
		else if(this.isEnglish)
			return EnemyGainEN;
		break;			
	case 'enemyLoss':
		if(this.isJapanese)
			return EnemyLossJP;
		else if(this.isEnglish)
			return EnemyLossEN;
		break;		
	case 'enemyNoDamage':
		if(this.isJapanese)
			return EnemyNoDamageJP;
		else if(this.isEnglish)
			return EnemyNoDamageEN;
		break;			
	case 'enemyNoHit':
		if(this.isJapanese)
			return EnemyNoHitJP;
		else if(this.isEnglish)
			return EnemyNoHitEN;
		break;		
	case 'enemyRecovery':
		if(this.isJapanese)
			return EnemyRecoveryJP;
		else if(this.isEnglish)
			return EnemyRecoveryEN;
		break;			
	case 'escapeFailure':
		if(this.isJapanese)
			return EscapeFailureJP;
		else if(this.isEnglish)
			return EscapeFailureEN;
		break;		
	case 'escapeStart':
		if(this.isJapanese)
			return EscapeStartJP;
		else if(this.isEnglish)
			return EscapeStartEN;
		break;			
	case 'evasion':
		if(this.isJapanese)
			return EvasionTextJP;
		else if(this.isEnglish)
			return EvasionTextEN;
		break;	
	case 'file':
		if(this.isJapanese)
			return SaveFileTextJP;
		else if(this.isEnglish)
			return SaveFileTextEN;
		break;	
	case 'loadMessage':
		if(this.isJapanese)
			return LoadMessageJP;
		else if(this.isEnglish)
			return LoadMessageEN;
		break;	
	case 'preemptiveText':
		if(this.isJapanese)
			return PreemptiveTextJP;
		else if(this.isEnglish)
			return PreemptiveTextEN;
		break;
	case 'surprise':
		if(this.isJapanese)
			return SurpriseTextJP;
		else if(this.isEnglish)
			return SurpriseTextEN;
		break;		
	case 'useItemText':
		if(this.isJapanese)
			return UseItemTextJP;
		else if(this.isEnglish)
			return UseItemTextEN;
		break;		
	case 'victory':
		if(this.isJapanese)
			return VictoryTextJP;
		else if(this.isEnglish)
			return VictoryTextEN;
		break;	
	case 'counterAttack':
		if(this.isJapanese)
			return CounterAttackTextJP;
		else if(this.isEnglish)
			return CounterAttackTextEN;
		break;			
		
	}

    return $dataSystem.terms.messages[messageId] || '';
};

TextManager.equipTypes = function(index) {
    var text = false;
	if(TextManager.isJapanese) {
		if(index <= RemEquipTypesJP.length && index > 0)
			text = RemEquipTypesJP[index];
	}
	else if(TextManager.isEnglish) {
		if(index <= RemEquipTypesEN.length && index > 0)
			text = RemEquipTypesEN[index];
	}
	return text;
};

TextManager.skillTypes = function(index) {
    var text = false;
	if(TextManager.isJapanese) {
		if(index <= RemSkillTypesJP.length && index > 0)
			text = RemSkillTypesJP[index];
	}
	else if(TextManager.isEnglish) {
		if(index <= RemSkillTypesEN.length && index > 0)
			text = RemSkillTypesEN[index];
	}
	return text;
};

TextManager.skillName = function(skillId) {
	var skill = $dataSkills[skillId];
	var text = skill.name;
	
	if(TextManager.isJapanese && skill.hasRemNameJP) 
		text = skill.remNameJP;
	else if(TextManager.isEnglish && skill.hasRemNameEN) 
		text = skill.remNameEN;
	else if(TextManager.isTChinese && skill.hasRemNameTCH) 
		text = skill.remNameTCH;
	else if(TextManager.isSChinese && skill.hasRemNameSCH) 
		text = skill.remNameSCH;
	else if(TextManager.isKorean && skill.hasRemNameKR) 
		text = skill.remNameKR;

	return text;
};

TextManager.skillDesc = function(skillId) {
	var skill = $dataSkills[skillId];
	var text = skill.description;
	
	if(TextManager.isJapanese && skill.hasRemDescJP) 
		text = skill.remDescJP;
	else if(TextManager.isEnglish && skill.hasRemDescEN) 
		text = skill.remDescEN;
	else if(TextManager.isTChinese && skill.hasRemDescTCH) 
		text = skill.remDescTCH;
	else if(TextManager.isSChinese && skill.hasRemDescSCH) 
		text = skill.remDescSCH;
	else if(TextManager.isKorean && skill.hasRemDescKR) 
		text = skill.remDescKR;

	return text;
};

TextManager.alcoholName = function(alcoholType) {
	let text = false;
	if(alcoholType === ALCOHOL_TYPE_NOTHING) return '';
	else if(alcoholType === ALCOHOL_TYPE_WATER) text = TextManager.alcoholWater;
	else if(alcoholType === ALCOHOL_TYPE_PALE_ALE) text = TextManager.alcoholPaleAle;
	else if(alcoholType === ALCOHOL_TYPE_DARK_ALE) text = TextManager.alcoholDarkAle;
	else if(alcoholType === ALCOHOL_TYPE_VODKA) text = TextManager.alcoholVodka;
	else if(alcoholType === ALCOHOL_TYPE_TEQUILA) text = TextManager.alcoholTequila;
	else if(alcoholType === ALCOHOL_TYPE_GOLD_RUM) text = TextManager.alcoholGoldRum;
	else if(alcoholType === ALCOHOL_TYPE_OVERPROOF_RUM) text = TextManager.alcoholOverproofRum;
	else if(alcoholType === ALCOHOL_TYPE_WHISKEY) text = TextManager.alcoholWhiskey;
	else if(alcoholType === ALCOHOL_TYPE_DIRTY_MUGS_STACK_ONE) text = TextManager.alcoholDirtyMugsSingular;
	else if(alcoholType === ALCOHOL_TYPE_DIRTY_MUGS_STACK_TWO) text = TextManager.alcoholDirtyMugsPlural;
	else if(alcoholType === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_ONE) text = TextManager.alcoholDirtyGlassesSingular;
	else if(alcoholType === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_TWO || alcoholType === ALCOHOL_TYPE_DIRTY_GLASSES_STACK_THREE) text = TextManager.alcoholDirtyGlassesPlural;
	else return '';

	return text;
};

TextManager.visitorRoomName = function(roomId) {
	switch (roomId) {
	case VISITING_ROOM_A_ID:
		if(this.isJapanese)
			return RemReceptionistVisitingRoomA_JP;
		else if(this.isEnglish)
			return RemReceptionistVisitingRoomA_EN;
		break;
	case VISITING_ROOM_B_ID:
		if(this.isJapanese)
			return RemReceptionistVisitingRoomB_JP;
		else if(this.isEnglish)
			return RemReceptionistVisitingRoomB_EN;
		break;
	case VISITING_ROOM_C_ID:
		if(this.isJapanese)
			return RemReceptionistVisitingRoomC_JP;
		else if(this.isEnglish)
			return RemReceptionistVisitingRoomC_EN;
		break;
	case VISITING_ROOM_D_ID:
		if(this.isJapanese)
			return RemReceptionistVisitingRoomD_JP;
		else if(this.isEnglish)
			return RemReceptionistVisitingRoomD_EN;
		break;
	}
};

TextManager.artisanMeal = function(mealId) {
	switch (mealId) {
	case ARTISAN_MEAL_SMART:
		if(this.isJapanese)
			return RCMenuMealOneTextJP;
		else if(this.isEnglish)
			return RCMenuMealOneTextEN;
		break;
	case ARTISAN_MEAL_COMFY:
		if(this.isJapanese)
			return RCMenuMealTwoTextJP;
		else if(this.isEnglish)
			return RCMenuMealTwoTextEN;
		break;
	case ARTISAN_MEAL_HEART:
		if(this.isJapanese)
			return RCMenuMealThreeTextJP;
		else if(this.isEnglish)
			return RCMenuMealThreeTextEN;
		break;
	case ARTISAN_MEAL_SLUT:
		if(this.isJapanese)
			return RCMenuMealFourTextJP;
		else if(this.isEnglish)
			return RCMenuMealFourTextEN;
		break;
	case ARTISAN_MEAL_PUSSY:
		if(this.isJapanese)
			return RCMenuMealFiveTextJP;
		else if(this.isEnglish)
			return RCMenuMealFiveTextEN;
		break;
	case ARTISAN_MEAL_HERO:
		if(this.isJapanese)
			return RCMenuMealSixTextJP;
		else if(this.isEnglish)
			return RCMenuMealSixTextEN;
		break;
	case ARTISAN_MEAL_ARMED:
		if(this.isJapanese)
			return RCMenuMealSevenTextJP;
		else if(this.isEnglish)
			return RCMenuMealSevenTextEN;
		break;
	case ARTISAN_MEAL_WARDEN:
		if(this.isJapanese)
			return RCMenuMealEightTextJP;
		else if(this.isEnglish)
			return RCMenuMealEightTextEN;
		break;
	case ARTISAN_MEAL_BITCH:
		if(this.isJapanese)
			return RCMenuMealNineTextJP;
		else if(this.isEnglish)
			return RCMenuMealNineTextEN;
		break;
	case ARTISAN_MEAL_ANAL:
		if(this.isJapanese)
			return RCMenuMealTenTextJP;
		else if(this.isEnglish)
			return RCMenuMealTenTextEN;
		break;
		
	}
	
	return '';
};

TextManager.storeItem = function(itemId) {
	switch (itemId) {
	case STORE_ITEM_ENERGY_DRINK:
		if(this.isJapanese)
			return RCMenuStoreItemOneTextJP;
		else if(this.isEnglish)
			return RCMenuStoreItemOneTextEN;
		break;
	case STORE_ITEM_WELTSTONE:
		if(this.isJapanese)
			return RCMenuStoreItemTwoTextJP;
		else if(this.isEnglish)
			return RCMenuStoreItemTwoTextEN;
		break;
	case STORE_ITEM_PAIN_RESIST_PILL:
		if(this.isJapanese)
			return RCMenuStoreItemThreeTextJP;
		else if(this.isEnglish)
			return RCMenuStoreItemThreeTextEN;
		break;
	case STORE_ITEM_FABRIC_HARDENER:
		if(this.isJapanese)
			return RCMenuStoreItemFourTextJP;
		else if(this.isEnglish)
			return RCMenuStoreItemFourTextEN;
		break;
	case STORE_ITEM_APHRODISIAC_PERFUME:
		if(this.isJapanese)
			return RCMenuStoreItemFiveTextJP;
		else if(this.isEnglish)
			return RCMenuStoreItemFiveTextEN;
		break;
	}
	
	return '';
};


TextManager.edictsDesc = function(skillId) {
	if(!DEBUG_MODE) return '';
	
	switch (skillId) {
	case ARTISAN_MEAL_SMART:
		if(this.isJapanese)
			return RCMenuMealOneTextJP;
		else if(this.isEnglish)
			return RCMenuMealOneTextEN;
		break;
	case ARTISAN_MEAL_ANAL:
		if(this.isJapanese)
			return RCMenuMealTenTextJP;
		else if(this.isEnglish)
			return RCMenuMealTenTextEN;
		break;
		
	}	
	
	return '';
};

TextManager.pluralText_JustPeople = function(value) {
	if(value === 1) {
		return TextManager.statusRecordJustPeopleSingular;
	}
	else {
		return TextManager.statusRecordJustPeoplePlural;
	}
};

TextManager.battlelogDurationOption = function(value) {
	switch (value) {
	case 0:
		if(this.isJapanese)
			return RemYanflyOptions_Battlelog_Duration_Zero_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_Battlelog_Duration_Zero_EN;
		break;
	case 1:
		if(this.isJapanese)
			return RemYanflyOptions_Battlelog_Duration_One_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_Battlelog_Duration_One_EN;
		break;
	case 2:
		if(this.isJapanese)
			return RemYanflyOptions_Battlelog_Duration_Two_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_Battlelog_Duration_Two_EN;
		break;
	case 3:
		if(this.isJapanese)
			return RemYanflyOptions_Battlelog_Duration_Three_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_Battlelog_Duration_Three_EN;
		break;
	case 4:
		if(this.isJapanese)
			return RemYanflyOptions_Battlelog_Duration_Four_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_Battlelog_Duration_Four_EN;
		break;
	
	}
	
	return '';
};

TextManager.battlelogFontSizeOption = function(value) {
	switch (value) {
	case 0:
		if(this.isJapanese)
			return RemYanflyOptions_Battlelog_Fontsize_Zero_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_Battlelog_Fontsize_Zero_EN;
		break;
	case 1:
		if(this.isJapanese)
			return RemYanflyOptions_Battlelog_Fontsize_One_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_Battlelog_Fontsize_One_EN;
		break;
	case 2:
		if(this.isJapanese)
			return RemYanflyOptions_Battlelog_Fontsize_Two_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_Battlelog_Fontsize_Two_EN;
		break;
	case 3:
		if(this.isJapanese)
			return RemYanflyOptions_Battlelog_Fontsize_Three_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_Battlelog_Fontsize_Three_EN;
		break;
	case 4:
		if(this.isJapanese)
			return RemYanflyOptions_Battlelog_Fontsize_Four_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_Battlelog_Fontsize_Four_EN;
		break;
	
	}
	
	return '';
};

TextManager.maleDialogueAppearOption = function(value) {
	switch (value) {
	case 0:
		if(this.isJapanese)
			return RemYanflyOptions_MaleDialogueAppear_Zero_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_MaleDialogueAppear_Zero_EN;
		break;
	case 1:
		if(this.isJapanese)
			return RemYanflyOptions_MaleDialogueAppear_One_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_MaleDialogueAppear_One_EN;
		break;
	case 2:
		if(this.isJapanese)
			return RemYanflyOptions_MaleDialogueAppear_Two_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_MaleDialogueAppear_Two_EN;
		break;
	case 3:
		if(this.isJapanese)
			return RemYanflyOptions_MaleDialogueAppear_Three_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_MaleDialogueAppear_Three_EN;
		break;
	case 4:
		if(this.isJapanese)
			return RemYanflyOptions_MaleDialogueAppear_Four_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_MaleDialogueAppear_Four_EN;
		break;
	
	}
	
	return '';
};

//////////////
// Data Manager
/////////////////////

Remtairy.TextManager.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Remtairy.TextManager.DataManager_isDatabaseLoaded.call(this)) return false;
  if (!Remtairy._loaded_Rem_TextManager) {
    this.processRemTMNotetags_RemtairyTextManager($dataActors);
    this.processRemTMNotetags_RemtairyTextManager($dataEnemies);
	this.processRemTMNotetags_RemtairyTextManager($dataSkills);
	this.processRemTMNotetags_RemtairyTextManager($dataWeapons);
	this.processRemTMNotetags_RemtairyTextManager($dataArmors);
	this.processRemTMNotetags_RemtairyTextManager($dataStates);
	this.processRemTMNotetags_RemtairyTextManager($dataItems);
	this.processRemTMNotetags_RemtairyMisc_StateIcons($dataStates);
	this.processRemTMNotetags_RemtairyEnemy($dataEnemies);
	this.processRemTMNotetags_RemtairyEdicts($dataSkills);
	this.processRemTMNotetags_RemtairyPassives($dataSkills);
    Remtairy._loaded_Rem_TextManager = true;
  }
  return true;
};

DataManager.processRemTMNotetags_RemtairyTextManager = function(group) {
	for (let n = 1; n < group.length; n++) {
		let obj = group[n];
		let notedata = obj.note.split(/[\r\n]+/);

		obj.remNameEN = "";
		obj.remNameJP = "";
		obj.remNameTCH = "";
		obj.remNameSCH = "";
		obj.remNameKR = "";
		obj.hasRemNameEN = false;
		obj.hasRemNameJP = false;
		obj.hasRemNameSCH = false;
		obj.hasRemNameTCH = false;
		obj.hasRemNameKR = false;
		obj.remDescEN = "";
		obj.remDescJP = "";
		obj.remDescTCH = "";
		obj.remDescSCH = "";
		obj.remDescKR = "";
		obj.hasRemDescEN = false;
		obj.hasRemDescJP = false;
		obj.hasRemDescSCH = false;
		obj.hasRemDescTCH = false;
		obj.hasRemDescKR = false;
		obj.remMessageEN = ['','','',''];
		obj.remMessageJP = ['','','',''];
		obj.remMessageSCH = ['','','',''];
		obj.remMessageTCH = ['','','',''];
		obj.remMessageKR = ['','','',''];
		obj.hasRemMessageEN = [false,false,false,false];
		obj.hasRemMessageJP = [false,false,false,false];
		obj.hasRemMessageSCH = [false,false,false,false];
		obj.hasRemMessageTCH = [false,false,false,false];
		obj.hasRemMessageKR = [false,false,false,false];
		let evalMode = 'none';

		for (let i = 0; i < notedata.length; i++) {
			let line = notedata[i];
			if (line.match(/<(?:REM NAME JP)>/i)) {
				evalMode = 'rem name jp';
			}
			else if (line.match(/<(?:REM NAME EN)>/i)) {
				evalMode = 'rem name en';
			} 
			else if (line.match(/<(?:REM NAME TCH)>/i)) {
				evalMode = 'rem name tch';
			} 
			else if (line.match(/<(?:REM NAME SCH)>/i)) {
				evalMode = 'rem name sch';
			} 
			else if (line.match(/<(?:REM NAME KR)>/i)) {
				evalMode = 'rem name kr';
			} 
			else if (line.match(/<(?:REM DESC JP)>/i)) {
				evalMode = 'rem desc jp';
			} 
			else if (line.match(/<(?:REM DESC EN)>/i)) {
				evalMode = 'rem desc en';
			} 
			else if (line.match(/<(?:REM DESC TCH)>/i)) {
				evalMode = 'rem desc tch';
			} 
			else if (line.match(/<(?:REM DESC SCH)>/i)) {
				evalMode = 'rem desc sch';
			} 
			else if (line.match(/<(?:REM DESC KR)>/i)) {
				evalMode = 'rem desc kr';
			} 
			else if (line.match(/<(?:REM MESSAGE1 EN)>/i)) {
				evalMode = 'rem message1 en';
			} 
			else if (line.match(/<(?:REM MESSAGE1 JP)>/i)) {
				evalMode = 'rem message1 jp';
			} 
			else if (line.match(/<(?:REM MESSAGE1 SCH)>/i)) {
				evalMode = 'rem message1 sch';
			} 
			else if (line.match(/<(?:REM MESSAGE1 TCH)>/i)) {
				evalMode = 'rem message1 tch';
			} 
			else if (line.match(/<(?:REM MESSAGE1 KR)>/i)) {
				evalMode = 'rem message1 kr';
			} 
			else if (line.match(/<(?:REM MESSAGE2 EN)>/i)) {
				evalMode = 'rem message2 en';
			} 
			else if (line.match(/<(?:REM MESSAGE2 JP)>/i)) {
				evalMode = 'rem message2 jp';
			} 
			else if (line.match(/<(?:REM MESSAGE2 TCH)>/i)) {
				evalMode = 'rem message2 tch';
			} 
			else if (line.match(/<(?:REM MESSAGE2 SCH)>/i)) {
				evalMode = 'rem message2 sch';
			} 
			else if (line.match(/<(?:REM MESSAGE2 KR)>/i)) {
				evalMode = 'rem message2 kr';
			} 
			else if (line.match(/<(?:REM MESSAGE3 EN)>/i)) {
				evalMode = 'rem message3 en';
			} 
			else if (line.match(/<(?:REM MESSAGE3 JP)>/i)) {
				evalMode = 'rem message3 jp';
			} 
			else if (line.match(/<(?:REM MESSAGE3 TCH)>/i)) {
				evalMode = 'rem message3 tch';
			} 
			else if (line.match(/<(?:REM MESSAGE3 SCH)>/i)) {
				evalMode = 'rem message3 sch';
			} 
			else if (line.match(/<(?:REM MESSAGE3 KR)>/i)) {
				evalMode = 'rem message3 kr';
			} 
			else if (line.match(/<(?:REM MESSAGE4 EN)>/i)) {
				evalMode = 'rem message4 en';
			} 
			else if (line.match(/<(?:REM MESSAGE4 JP)>/i)) {
				evalMode = 'rem message4 jp';
			} 
			else if (line.match(/<(?:REM MESSAGE4 TCH)>/i)) {
				evalMode = 'rem message4 tch';
			} 
			else if (line.match(/<(?:REM MESSAGE4 SCH)>/i)) {
				evalMode = 'rem message4 sch';
			} 
			else if (line.match(/<(?:REM MESSAGE4 KR)>/i)) {
				evalMode = 'rem message4 kr';
			} 
			else if (line.match(/<\/(?:REM NAME EN|REM NAME JP|REM DESC EN|REM DESC JP)>/i)) {
				evalMode = 'none';
			} 
			else if (line.match(/<\/(?:REM NAME SCH|REM NAME TCH|REM NAME KR|REM DESC SCH|REM DESC TCH|REM DESC KR)>/i)) {
				evalMode = 'none';
			} 
			else if (line.match(/<\/(?:REM MESSAGE1 EN|REM MESSAGE1 JP|REM MESSAGE2 EN|REM MESSAGE2 JP)>/i)) {
				evalMode = 'none';
			} 
			else if (line.match(/<\/(?:REM MESSAGE1 SCH|REM MESSAGE1 TCH|REM MESSAGE1 KR|REM MESSAGE2 SCH|REM MESSAGE2 TCH|REM MESSAGE2 KR)>/i)) {
				evalMode = 'none';
			} 
			else if (line.match(/<\/(?:REM MESSAGE3 EN|REM MESSAGE3 JP|REM MESSAGE4 EN|REM MESSAGE4 JP)>/i)) {
				evalMode = 'none';
			} 
			else if (line.match(/<\/(?:REM MESSAGE3 SCH|REM MESSAGE3 TCH|REM MESSAGE3 KR|REM MESSAGE4 SCH|REM MESSAGE4 TCH|REM MESSAGE4 KR)>/i)) {
				evalMode = 'none';
			} 
			else if (evalMode === 'rem name en') {
				obj.remNameEN = line;
				obj.hasRemNameEN = true;
			}
			else if (evalMode === 'rem name jp') {
				obj.remNameJP = line;
				obj.hasRemNameJP = true;
			}
			else if (evalMode === 'rem name sch') {
				obj.remNameSCH = line;
				obj.hasRemNameSCH = true;
			}
			else if (evalMode === 'rem name tch') {
				obj.remNameTCH = line;
				obj.hasRemNameTCH = true;
			}
			else if (evalMode === 'rem name kr') {
				obj.remNameKR = line;
				obj.hasRemNameKR = true;
			}
			else if (evalMode === 'rem desc en') {
				if(obj.remDescEN.length > 0) obj.remDescEN += "\n";
				obj.remDescEN += line;
				obj.hasRemDescEN = true;
			}
			else if (evalMode === 'rem desc jp') {
				if(obj.remDescJP.length > 0) obj.remDescJP += "\n";
				obj.remDescJP += line;
				obj.hasRemDescJP = true;
			}
			else if (evalMode === 'rem desc tch') {
				if(obj.remDescTCH.length > 0) obj.remDescTCH += "\n";
				obj.remDescTCH += line;
				obj.hasRemDescTCH = true;
			}
			else if (evalMode === 'rem desc sch') {
				if(obj.remDescSCH.length > 0) obj.remDescSCH += "\n";
				obj.remDescSCH += line;
				obj.hasRemDescSCH = true;
			}
			else if (evalMode === 'rem desc kr') {
				if(obj.remDescKR.length > 0) obj.remDescKR += "\n";
				obj.remDescKR += line;
				obj.hasRemDescKR = true;
			}
			else if (evalMode === 'rem message1 en') {
				obj.remMessageEN[0] = line;
				obj.hasRemMessageEN[0] = true;
			}
			else if (evalMode === 'rem message1 jp') {
				obj.remMessageJP[0] = line;
				obj.hasRemMessageJP[0] = true;
			}
			else if (evalMode === 'rem message1 tch') {
				obj.remMessageTCH[0] = line;
				obj.hasRemMessageTCH[0] = true;
			}
			else if (evalMode === 'rem message1 sch') {
				obj.remMessageSCH[0] = line;
				obj.hasRemMessageSCH[0] = true;
			}
			else if (evalMode === 'rem message1 kr') {
				obj.remMessageKR[0] = line;
				obj.hasRemMessageKR[0] = true;
			}
			else if (evalMode === 'rem message2 en') {
				obj.remMessageEN[1] = line;
				obj.hasRemMessageEN[1] = true;
			}
			else if (evalMode === 'rem message2 jp') {
				obj.remMessageJP[1] = line;
				obj.hasRemMessageJP[1] = true;
			}
			else if (evalMode === 'rem message2 tch') {
				obj.remMessageTCH[1] = line;
				obj.hasRemMessageTCH[1] = true;
			}
			else if (evalMode === 'rem message2 sch') {
				obj.remMessageSCH[1] = line;
				obj.hasRemMessageSCH[1] = true;
			}
			else if (evalMode === 'rem message2 kr') {
				obj.remMessageKR[1] = line;
				obj.hasRemMessageKR[1] = true;
			}
			else if (evalMode === 'rem message3 en') {
				obj.remMessageEN[2] = line;
				obj.hasRemMessageEN[2] = true;
			}
			else if (evalMode === 'rem message3 jp') {
				obj.remMessageJP[2] = line;
				obj.hasRemMessageJP[2] = true;
			}
			else if (evalMode === 'rem message3 sch') {
				obj.remMessageSCH[2] = line;
				obj.hasRemMessageSCH[2] = true;
			}
			else if (evalMode === 'rem message3 tch') {
				obj.remMessageTCH[2] = line;
				obj.hasRemMessageTCH[2] = true;
			}
			else if (evalMode === 'rem message3 kr') {
				obj.remMessageKR[2] = line;
				obj.hasRemMessageKR[2] = true;
			}
			else if (evalMode === 'rem message4 en') {
				obj.remMessageEN[3] = line;
				obj.hasRemMessageEN[3] = true;
			}
			else if (evalMode === 'rem message4 jp') {
				obj.remMessageJP[3] = line;
				obj.hasRemMessageJP[3] = true;
			}
			else if (evalMode === 'rem message4 sch') {
				obj.remMessageSCH[3] = line;
				obj.hasRemMessageSCH[3] = true;
			}
			else if (evalMode === 'rem message4 tch') {
				obj.remMessageTCH[3] = line;
				obj.hasRemMessageTCH[3] = true;
			}
			else if (evalMode === 'rem message4 kr') {
				obj.remMessageKR[3] = line;
				obj.hasRemMessageKR[3] = true;
			}
		}
	}
};

DataManager.getMapLocationDisplayNameRem = function() {
    var locationDisplayNameRem = ['',''];
	var map = $dataMap;
	var mapId = 0;
	var notedata = map.note.split(/[\r\n]+/);
	var evalMode = 'none';
	
	for (var i = 0; i < notedata.length; i++) {
		var line = notedata[i];
		if (line.match(/<(?:REM NAME JP)>/i)) {
			evalMode = 'rem name jp';
		}
		else if (line.match(/<(?:REM NAME EN)>/i)) {
			evalMode = 'rem name en';
		} 	
		else if (line.match(/<\/(?:REM NAME EN|REM NAME JP|REM NAME SCH|REM NAME TCH|REM NAME KR)>/i)) {
			evalMode = 'none';
		} 
		else if (evalMode === 'rem name jp') {
			locationDisplayNameRem[RemLanguageJP] = line;
		}
		else if (evalMode === 'rem name en') {
			locationDisplayNameRem[RemLanguageEN] = line;
		}
		else if (evalMode === 'rem name sch') {
			locationDisplayNameRem[RemLanguageSCH] = line;
		}
		else if (evalMode === 'rem name tch') {
			locationDisplayNameRem[RemLanguageTCH] = line;
		}
		else if (evalMode === 'rem name kr') {
			locationDisplayNameRem[RemLanguageKR] = line;
		}
		else if (line.match(/<REM MAP ID:[ ](.*)>/i)) {
			mapId = parseInt(RegExp.$1);
		}
	}
	
	if(mapId > 0) $gameParty.setMapName(mapId, locationDisplayNameRem);
	
	return locationDisplayNameRem;
};

var MAP_NAMES = [];
var $tempMapData = null;

DataManager.getMapLocationDisplayNameMapId = function(id) {
    if(!MAP_NAMES[id]) {
		var filename = 'Map%1.json'.format(id.padZero(3));
        this._mapLoader = ResourceHandler.createLoader('data/' + filename, this.loadDataFile.bind(this, '$tempMapData', filename));
        this.loadDataFile('$tempMapData', filename);
		return '';
	}
	else {
		if(TextManager.isEnglish) return MAP_NAMES[id][RemLanguageEN];
		else if(TextManager.isJapanese) return MAP_NAMES[id][RemLanguageJP];
		else if(TextManager.isTChinese) return MAP_NAMES[id][RemLanguageTCH];
		else if(TextManager.isSChinese) return MAP_NAMES[id][RemLanguageSCH];
		else if(TextManager.isKorean) return MAP_NAMES[id][RemLanguageKR];
	}
};

Remtairy.TextManager.DataManager_onLoad = DataManager.onLoad;
DataManager.onLoad = function(object) {
	if(object === $tempMapData) {
		var locationDisplayNameRem = ['',''];
		var notedata = object.note.split(/[\r\n]+/);
		var evalMode = 'none';
		var mapId = 0;
		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(/<(?:REM NAME JP)>/i)) {
				evalMode = 'rem name jp';
			}
			else if (line.match(/<(?:REM NAME EN)>/i)) {
				evalMode = 'rem name en';
			} 	
			else if (line.match(/<(?:REM NAME SCH)>/i)) {
				evalMode = 'rem name sch';
			} 	
			else if (line.match(/<(?:REM NAME TCH)>/i)) {
				evalMode = 'rem name tch';
			} 	
			else if (line.match(/<(?:REM NAME KR)>/i)) {
				evalMode = 'rem name kr';
			} 	
			else if (line.match(/<\/(?:REM NAME EN|REM NAME JP|REM NAME SCH|REM NAME TCH|REM NAME KR)>/i)) {
				evalMode = 'none';
			} 
			else if (evalMode === 'rem name jp') {
				locationDisplayNameRem[RemLanguageJP] = line;
			}
			else if (evalMode === 'rem name en') {
				locationDisplayNameRem[RemLanguageEN] = line;
			}
			else if (evalMode === 'rem name tch') {
				locationDisplayNameRem[RemLanguageTCH] = line;
			}
			else if (evalMode === 'rem name sch') {
				locationDisplayNameRem[RemLanguageSCH] = line;
			}
			else if (evalMode === 'rem name kr') {
				locationDisplayNameRem[RemLanguageKR] = line;
			}
			else if (line.match(/<REM MAP ID:[ ](.*)>/i)) {
				mapId = parseInt(RegExp.$1);
			}
		}
		if(mapId > 0)
			MAP_NAMES[mapId] = locationDisplayNameRem;
		else {
			console.log('getMapLocationDisplayNameMapId error loading');
			console.log(object);
		}
	}
	else
	Remtairy.TextManager.DataManager_onLoad.call(this, object);
};

////////
// Image Manager
/////////////////

ImageManager.loadSystemRem = function(filename, hue) {
	if(TextManager.isEnglish) {
		filename += "_EN";
	}
	else if(TextManager.isJapanese) {
		filename += "_JP";
	}
    return this.loadBitmap('img/system/', filename, hue, false);
};



/////////
// Game BattlerBase
/////////////

//State message3
Game_BattlerBase.prototype.mostImportantStateText = function() {
	if(this.dontDisplayStateLogMessages()) return '';
    let states = this.states();
    for (let i = 0; i < states.length; i++) {
		if(TextManager.isEnglish && states[i].hasRemMessageEN[2]) {
			return states[i].remMessageEN[2];
		}
		else if(TextManager.isJapanese && states[i].hasRemMessageJP[2]) {
			return states[i].remMessageJP[2];
		}
		else if(TextManager.isSChinese && states[i].hasRemMessageSCH[2]) {
			return states[i].remMessageSCH[2];
		}
		else if(TextManager.isTChinese && states[i].hasRemMessageTCH[2]) {
			return states[i].remMessageTCH[2];
		}
		else if(TextManager.isKorean && states[i].hasRemMessageKR[2]) {
			return states[i].remMessageKR[2];
		}
        
		if (states[i].message3) {
            return states[i].message3;
        }
    }
    return '';
};

/////////
// Window Battlelog
///////////////////

//State message 1 and 2
Window_BattleLog.prototype.displayAddedStates = function(target) {
	if(target.dontDisplayStateLogMessages()) return;
    target.result().addedStateObjects().forEach(function(state) {
        let stateMsg = target.isActor() ? state.message1 : state.message2;
		let displayStateMsg = true;
		
		if(target.isActor()) {
			if(TextManager.isEnglish && state.hasRemMessageEN[0]) {
				stateMsg = state.remMessageEN[0];
			}	
			else if(TextManager.isJapanese && state.hasRemMessageJP[0]) {
				stateMsg = state.remMessageJP[0];
			}
			else if(TextManager.isSChinese && state.hasRemMessageSCH[0]) {
				stateMsg = state.remMessageSCH[0];
			}	
			else if(TextManager.isTChinese && state.hasRemMessageTCH[0]) {
				stateMsg = state.remMessageTCH[0];
			}	
			else if(TextManager.isKorean && state.hasRemMessageKR[0]) {
				stateMsg = state.remMessageKR[0];
			}				
		}
		else { //target is enemy
			if(TextManager.isEnglish && state.hasRemMessageEN[1]) {
				stateMsg = state.remMessageEN[1];
			}	
			else if(TextManager.isJapanese && state.hasRemMessageJP[1]) {
				stateMsg = state.remMessageJP[1];
			}
			else if(TextManager.isSChinese && state.hasRemMessageSCH[1]) {
				stateMsg = state.remMessageSCH[1];
			}
			else if(TextManager.isTChinese && state.hasRemMessageTCH[1]) {
				stateMsg = state.remMessageTCH[1];
			}	
			else if(TextManager.isKorean && state.hasRemMessageKR[1]) {
				stateMsg = state.remMessageKR[1];
			}	
			
			if($gameParty.isInGloryBattle) displayStateMsg = false;
		}

		if(displayStateMsg) {
			if(state.id === target.deathStateId()) {
				this.push('performCollapse', target);
			}
			if(stateMsg) {
				this.push('popBaseLine');
				this.push('pushBaseLine');
				this.push('addText', target.displayName() + stateMsg);
				this.push('waitForEffect');
			}
		}
    }, this);
};

//state message4
Window_BattleLog.prototype.displayRemovedStates = function(target) {
	if(target.dontDisplayStateLogMessages()) return;
	
	if($gameParty.isInGloryBattle && target.isEnemy()) return;
	
    target.result().removedStateObjects().forEach(function(state) {
		if(TextManager.isEnglish) {
			if(state.hasRemMessageEN[3]) {
				this.push('popBaseLine');
				this.push('pushBaseLine');
				this.push('addText', target.displayName() + state.remMessageEN[3]);
			}
			else if (state.message4) {
				this.push('popBaseLine');
				this.push('pushBaseLine');
				this.push('addText', target.displayName() + state.message4);
			}
		}
		else if(TextManager.isJapanese) {
			if(state.hasRemMessageJP[3]) {
				this.push('popBaseLine');
				this.push('pushBaseLine');
				this.push('addText', target.displayName() + state.remMessageJP[3]);
			}
			else if (state.message4) {
				this.push('popBaseLine');
				this.push('pushBaseLine');
				this.push('addText', target.displayName() + state.message4);			
			}
		}
		else if(TextManager.isSChinese) {
			if(state.hasRemMessageSCH[3]) {
				this.push('popBaseLine');
				this.push('pushBaseLine');
				this.push('addText', target.displayName() + state.remMessageSCH[3]);
			}
			else if (state.message4) {
				this.push('popBaseLine');
				this.push('pushBaseLine');
				this.push('addText', target.displayName() + state.message4);
			}
		}
		else if(TextManager.isTChinese) {
			if(state.hasRemMessageTCH[3]) {
				this.push('popBaseLine');
				this.push('pushBaseLine');
				this.push('addText', target.displayName() + state.remMessageTCH[3]);
			}
			else if (state.message4) {
				this.push('popBaseLine');
				this.push('pushBaseLine');
				this.push('addText', target.displayName() + state.message4);
			}
		}
		else if(TextManager.isKorean) {
			if(state.hasRemMessageKR[3]) {
				this.push('popBaseLine');
				this.push('pushBaseLine');
				this.push('addText', target.displayName() + state.remMessageKR[3]);
			}
			else if (state.message4) {
				this.push('popBaseLine');
				this.push('pushBaseLine');
				this.push('addText', target.displayName() + state.message4);
			}
		}
		else if (state.message4) {
			this.push('popBaseLine');
			this.push('pushBaseLine');
			this.push('addText', target.displayName() + state.message4);
        }
    }, this);
};




/////////
// Game Enemy
/////////////

Game_Enemy.prototype.originalName = function() {
	if(TextManager.isEnglish && this.enemy().hasRemNameEN) {
		return this.enemy().remNameEN;
	}
	else if(TextManager.isJapanese && this.enemy().hasRemNameJP) {
		return this.enemy().remNameJP;
	}
	else if(TextManager.isSChinese && this.enemy().hasRemNameSCH) {
		return this.enemy().remNameSCH;
	}
	else if(TextManager.isTChinese && this.enemy().hasRemNameTCH) {
		return this.enemy().remNameTCH;
	}
	else if(TextManager.isKorean && this.enemy().hasRemNameKR) {
		return this.enemy().remNameKR;
	}
	return this.enemy().name;
};

////////////
// Game Actor
//////////////////

Game_Actor.prototype.name = function() {
	if(TextManager.isEnglish && this.actor().hasRemNameEN) {
		return this.actor().remNameEN;
	}
	else if(TextManager.isJapanese && this.actor().hasRemNameJP) {
		return this.actor().remNameJP;
	}
	else if(TextManager.isSChinese && this.actor().hasRemNameSCH) {
		return this.actor().remNameSCH;
	}
	else if(TextManager.isTChinese && this.actor().hasRemNameTCH) {
		return this.actor().remNameTCH;
	}
	else if(TextManager.isKorean && this.actor().hasRemNameKR) {
		return this.actor().remNameKR;
	}
	return this._name;
};

////////
// Window Help
/////////////////

Window_Help.prototype.setItem = function(item) {
	if(!item) {
		this.setText(item ? item.description : '');
	}

	else if(TextManager.isEnglish) {
		if(item.hasRemDescEN == false) this.setText(item ? item.description : '');
		else this.setText(item ? item.remDescEN : '');
	}
	else if(TextManager.isJapanese) {
		if(item.hasRemDescJP == false) this.setText(item ? item.description : '');
		else this.setText(item ? item.remDescJP : '');
	}
	else if(TextManager.isSChinese) {
		if(item.hasRemDescSCH == false) this.setText(item ? item.description : '');
		else this.setText(item ? item.remDescSCH : '');
	}
	else if(TextManager.isTChinese) {
		if(item.hasRemDescTCH == false) this.setText(item ? item.description : '');
		else this.setText(item ? item.remDescTCH : '');
	}
	else if(TextManager.isKorean) {
		if(item.hasRemDescKR == false) this.setText(item ? item.description : '');
		else this.setText(item ? item.remDescKR : '');
	}
	else
		this.setText(item ? item.description : '');
};


////////
// Window Command
// Original portion of the code credited to トリアコンタン's CommandIcon.js
////////////

Window_Command.prototype.drawText = function(text, x, y, width, align) {
	if (this instanceof Window_Options) {
		Window_Base.prototype.drawText.apply(this, arguments);
	} else {
		var str = text;
		if(isNaN(str)) {
			if(str == void 0 || str.length < 3) {
				Window_Base.prototype.drawText.apply(this, arguments);
			}
			else if(str.charAt(0) == 'R' && str.charAt(1) == 'E' && str.charAt(2) == 'M') {		
				str = str.substr(3);
				this.drawTextEx(str, x, y);
			}
			else 
				Window_Base.prototype.drawText.apply(this, arguments);
		}
		else
			Window_Base.prototype.drawText.apply(this, arguments);
	}
};

