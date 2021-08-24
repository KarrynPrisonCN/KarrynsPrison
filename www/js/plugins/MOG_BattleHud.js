//=============================================================================
// MOG_BattleHud.js
//=============================================================================

/*:
 * @plugindesc (v4.0) Permite customizar o layout de batalha.
 * @author Moghunter
 *
 * @param Hud X-Axis
 * @desc Definição da posição X-Axis da Hud.
 * @default -85
 *
 * @param Hud Y-Axis
 * @desc Definição da posição Y-Axis da Hud.
 * @default 465
 *
 * @param Hud Space X
 * @desc Define o espaço na horizontal entre as huds.
 * @default 0
 *
 * @param Hud Space Y
 * @desc Define o espaço na vertical entre as huds.
 * @default 0
 *
 * @param Hud Slide X
 * @desc Deslizar X-Axis.
 * @default 0
 *
 * @param Hud Slide Y
 * @desc Deslizar Y-Axis.
 * @default 0 
 * 
 * @param Vertical Mode
 * @desc Deixar a Hud na posição vertical.
 * @default false
 *
 * @param Command Auto Adjust
 * @desc Ativar ajuste automático baseado na posição
 * da Hud. (false - Define a posição fixa.)
 * @default true
 *
 * @param Max Battle Members
 * @desc Quantidade de maxima de battler na batalha.
 * @default 4
 *
 * @param >> LAYOUT OVERLAY =========
 *
 * @param Layout2 Visible
 * @desc Ativar o segunda imagem do layout, esta imagem 
 * ficará acima das faces e medidores.
 * @default false
 *
 * @param Layout2 X-Axis
 * @desc Definição da posição X-Axis da Hud.
 * @default 0
 *
 * @param Layout2 Y-Axis
 * @desc Definição da posição Y-Axis da Hud.
 * @default 0 
 *
 * @param >> TURN ===================
 * @desc 
 * @default  
 *
 * @param Turn Visible
 * @desc Apresentar a imagem do turno.
 * @default true
 *
 * @param Turn X-Axis
 * @desc Definição da posição X-Axis do turno.
 * @default -30
 *
 * @param Turn Y-Axis
 * @desc Definição da posição Y-Axis do turno.
 * @default 0
 *
 * @param Turn Rotation Speed
 * @desc Definição da velocidade de rotação da imagem.
 * @default 0
 *
 * @param Turn Zoom Animation
 * @desc Ativar a animação de zoom ao ativar.
 * @default false
 *  
 * @param >> FACE ===================
 * @desc 
 * @default  
 *
 * @param Face Visible
 * @desc Apresentar a imagem da face.
 * @default true
 *
 * @param Face X-Axis
 * @desc X-Axis position of Face
 * @default 76
 *
 * @param Face Y-Axis
 * @desc Y-Axis position of Face
 * @default 50
 *
 * @param Face Shake Animation
 * @desc Ativar animação de tremer da face.
 * @default true
 *
 * @param Face Zoom Animation
 * @desc Ativar animação de zoom de ação.
 * @default true
 *
 * @param Face Frame Animation
 * @desc Ativar animação por frames.
 *       É necessário dividir a imagem por 5.
 * @default false
 *
 * @param Face Priority
 * @desc Prioridade da Face. (0 Low - 1 High)
 * @default 0
 *
 * @param >> NAME ===================
 * @desc 
 * @default
 *
 * @param Name Visible
 * @desc Apresentar o nome do personagem.
 * @default false
 *
 * @param Name X-Axis
 * @desc Definição da posição X-Axis do nome.
 * @default 40
 *
 * @param Name Y-Axis
 * @desc Definição da posição Y-Axis do nome.
 * @default -8 
 *
 * @param Name Align
 * @desc Alinhamento do nome.
 * 0 - Left  1 - Center   2 - Right
 * @default 0
 * 
 * @param Name Font Size
 * @desc Definição do tamanho da fonte do nome.
 * @default 20
 *
 * @param Name Bold Size
 * @desc Definição do tamanho do contorno.
 * @default 4
 *
 * @param Name Font Italic
 * @desc Ativar fonte em itálico.
 * @default false
 *
 * @param >> HP ===================
 * @desc 
 * @default 
 *
 * @param HP Meter Visible
 * @desc Apresentar o medidor de HP
 * @default true   
 *
 * @param HP Meter X-Axis
 * @desc Definição da posição X-Axis do medidor de HP.
 * @default 47
 *
 * @param HP Meter Y-Axis
 * @desc Definição da posição Y-Axis do medidor de HP.
 * @default 41
 *
 * @param HP Meter Angle
 * @desc Ángulo do medidor.
 * @default 0 
 *
 * @param HP Meter Flow Anime
 * @desc Ativar animação de gradiente no medidor.
 * É necessário que a imagem tenha 3x a largura do medidor.
 * @default false
 *
 * @param HP Number Visible
 * @desc Apresentar o numero de HP
 * @default true
 *
 * @param HP Number Align type
 * @desc Definição do tipo de alinhamento dos números.
 * (0 - right 1) (Center 2 - Left) (3 - Diagonal)
 * @default 0    
 *
 * @param HP Number X-Axis
 * @desc Definição da posição X-Axis do numero de HP.
 * @default 145
 *
 * @param HP Number Y-Axis
 * @desc Definição da posição Y-Axis do numero de HP.
 * @default 30
 * 
 * @param MaxHP Number Visible
 * @desc Apresentar o numero de HP maximo.
 * @default false
 *
 * @param MaxHP Number X-Axis
 * @desc Definição da posição X-Axis do numero de HP maximo.
 * @default 185
 *
 * @param MaxHP Number Y-Axis
 * @desc Definição da posição Y-Axis do numero de HP maximo.
 * @default 40
 *
 * @param >> MP ===================
 * @desc 
 * @default  
 *
 * @param MP Meter Visible
 * @desc Apresentar o medidor de MP
 * @default true   
 *
 * @param MP Meter X-Axis
 * @desc Definição da posição X-Axis do medidor de MP.
 * @default 47
 *
 * @param MP Meter Y-Axis
 * @desc Definição da posição Y-Axis do medidor de MP.
 * @default 74
 *
 * @param MP Meter Angle
 * @desc Ángulo do medidor.
 * @default 0
 *
 * @param MP Meter Flow Anime
 * @desc Ativar animação de gradiente no medidor.
 * É necessário que a imagem tenha 3x a largura do medidor.
 * @default false 
 *
 * @param MP Number Visible
 * @desc Apresentar o numero de MP
 * @default true
 *
 * @param MP Number Align type
 * @desc Definição do tipo de alinhamento dos números.
 * (0 - right 1) (Center 2 - Left) (3 - Diagonal)
 * @default 0 
 *
 * @param MP Number X-Axis
 * @desc Definição da posição X-Axis do numero de MP.
 * @default 145
 *
 * @param MP Number Y-Axis
 * @desc Definição da posição Y-Axis do numero de MP.
 * @default 63
 *
 * @param MaxMP Number Visible
 * @desc Apresentar o numero de MP maximo.
 * @default false
 *
 * @param MaxMP Number X-Axis
 * @desc Definição da posição X-Axis do numero de MP maximo.
 * @default 196
 *
 * @param MaxMP Number Y-Axis
 * @desc Definição da posição Y-Axis do numero de MP maximo.
 * @default 78
 *
 * @param >> TP ===================
 * @desc 
 * @default  
 *
 * @param TP Meter Visible
 * @desc Apresentar o medidor de TP
 * @default true   
 *
 * @param TP Meter X-Axis
 * @desc Definição da posição X-Axis do medidor de TP.
 * @default 47
 *
 * @param TP Meter Y-Axis
 * @desc Definição da posição Y-Axis do medidor de TP.
 * @default 107
 *
 * @param TP Meter Angle
 * @desc Ángulo do medidor.
 * @default 0
 *
 * @param TP Meter Flow Anime
 * @desc Ativar animação de gradiente no medidor.
 * É necessário que a imagem tenha 3x a largura do medidor.
 * @default false 
 *
 * @param TP Number Visible
 * @desc Apresentar o numero de TP.
 * @default true   
 *
 * @param TP Number Align type
 * @desc Definição do tipo de alinhamento dos números.
 * (0 - right 1) (Center 2 - Left) (3 - Diagonal)
 * @default 0
 * 
 * @param TP Number X-Axis
 * @desc Definição da posição X-Axis do numero de TP.
 * @default 145
 *
 * @param TP Number Y-Axis
 * @desc Definição da posição Y-Axis do numero de TP.
 * @default 96
 *
 * @param MaxTP Number Visible
 * @desc Apresentar o numero de TP maximo.
 * @default false
 *
 * @param MaxTP Number X-Axis
 * @desc Definição da posição X-Axis do numero de TP maximo.
 * @default 185
 *
 * @param MaxTP Number Y-Axis
 * @desc Definição da posição Y-Axis do numero de TP maximo.
 * @default 116
 *
 * @param >> ATB ===================
 * @desc 
 * @default  
 *
 * @param ATB Meter Visible
 * @desc Apresentar o medidor de TP
 * @default true   
 *
 * @param ATB Meter X-Axis
 * @desc Definição da posição X-Axis do medidor de ATB.
 * @default 45
 *
 * @param ATB Meter Y-Axis
 * @desc Definição da posição Y-Axis do medidor de ATB.
 * @default 23
 *
 * @param ATB Meter Angle
 * @desc Ángulo do medidor.
 * @default 0
 *
 * @param ATB Meter Flow Anime
 * @desc Ativar animação de gradiente no medidor.
 * É necessário que a imagem tenha 3x a largura do medidor.
 * @default false 
 *
 * @param >> STATES ===================
 * @desc 
 * @default 
 *
 * @param States Visible
 * @desc Apresentar o numero as condições.
 * @default true   
 *
 * @param States X-Axis
 * @desc Definição da posição X-Axis das condições.
 * @default 105
 *
 * @param States Y-Axis
 * @desc Definição da posição Y-Axis das condições.
 * @default 123
 *
 * @param States Mode
 * @desc Definição do modo apresentado das condições.
 * 0 - Timing Mode     1 - Line Mode
 * @default 0
 *
 * @param States Max
 * @desc Quantidade maxima de ícones apresentados.
 * @default 4
 *
 * @param States Align
 * @desc Alinhamento dos ícones.
 * 0 - Left  1 - Right  2 - Upper  3 - Below 
 * @default 0
 *  
 * @param >> W COMMAND ===================
 * @desc 
 * @default 
 *
 * @param W Command X-Axis
 * @desc Definição do posição X-axis do comando.
 * @default 0    
 *
 * @param W Command Y-Axis
 * @desc Definição do posição Y-axis do comando.
 * @default -70
 *
 * @param W Command Width
 * @desc Definição da largura da janela.
 * @default 192
 *
 * @param W Command Height
 * @desc Definição da altura da janela.
 * @default 180
 *
 * @param W Command Slide X
 * @desc Deslizar X-Axis.
 * @default 0    
 *
 * @param W Command Slide Y
 * @desc Deslizar Y-Axis.
 * @default 0
 *  
 * @param Layout Command
 * @desc Ativar a imagem de layout.
 * @default true
 *
 * @param L Command X-Axis
 * @desc Definição do posição X-axis do layout.
 * @default -2   
 *
 * @param L Command Y-Axis
 * @desc Definição do posição Y-axis do layout.
 * @default 5
 *
 * @param >> W PARTY ===================
 * @desc 
 * @default  
 *
 * @param W Party X-Axis
 * @desc Window Party X-axis position.
 * @default 325    
 *
 * @param W Party Y-Axis
 * @desc Window Party Y-axis position.
 * @default 170
 *
 * @param W Party Width
 * @desc Window Party Width.
 * @default 192
 *
 * @param W Party Height
 * @desc Definição da altura da janela.
 * @default 110
 *
 * @param W Party Slide X
 * @desc Deslizar X-Axis.
 * @default 0
 *
 * @param W Party Slide Y
 * @desc Deslizar Y-Axis.
 * @default 0
 * 
 * @param Layout Party
 * @desc Ativar a imagem de layout.
 * @default true
 *
 * @param L Party X-Axis
 * @desc Definição do posição X-axis do layout.
 * @default -325   
 *
 * @param L Party Y-Axis
 * @desc Definição do posição Y-axis do layout.
 * @default -42 
 *
 * @param >> W HELP ===================
 * @desc 
 * @default  
 *
 * @param W Help X-Axis
 * @desc Definição do posição X-axis da janela.
 * @default 0    
 *
 * @param W Help Y-Axis
 * @desc Definição do posição Y-axis do janela.
 * @default 0
 *
 * @param W Help Width
 * @desc Definição da largura da janela.
 * @default 816
 *
 * @param W Help Height
 * @desc Definição da altura da janela.
 * @default 108
 *
 * @param W Help Slide X
 * @desc Deslizar X-Axis.
 * @default 0
 *
 * @param W Help Slide Y
 * @desc Deslizar Y-Axis.
 * @default 0
 *
 * @param Layout Help
 * @desc Ativar a imagem de layout.
 * @default true
 *
 * @param L Help X-Axis
 * @desc Definição do posição X-axis do layout.
 * @default 0   
 *
 * @param L Help Y-Axis
 * @desc Definição do posição Y-axis do layout.
 * @default 0 
 *
 * @param >> W SKILL ===================
 * @desc 
 * @default  
 *
 * @param W Skill X-Axis
 * @desc Definição do posição X-axis da janela.
 * @default 0    
 *
 * @param W Skill Y-Axis
 * @desc Definição do posição Y-axis do janela.
 * @default 444
 *
 * @param W Skill Width
 * @desc Definição da largura da janela.
 * @default 816
 *
 * @param W Skill Height
 * @desc Definição da altura da janela.
 * @default 180
 *
 * @param W Skill maxCols
 * @desc Definição da quantidade de colunas da janela.
 * @default 2 
 *
 * @param W Skill Slide X
 * @desc Deslizar X-Axis.
 * @default 0
 *
 * @param W Skill Slide Y
 * @desc Deslizar Y-Axis.
 * @default 0 
 * 
 * @param Layout Skill
 * @desc Ativar a imagem de layout.
 * @default true
 *
 * @param L Skill X-Axis
 * @desc Definição do posição X-axis do layout.
 * @default 0   
 *
 * @param L Skill Y-Axis
 * @desc Definição do posição Y-axis do layout.
 * @default -67
 *
 * @param >> W ITEM ===================
 * @desc 
 * @default  
 *
 * @param W Item X-Axis
 * @desc Definição do posição X-axis da janela.
 * @default 0    
 *
 * @param W Item Y-Axis
 * @desc Definição do posição Y-axis do janela.
 * @default 444
 *
 * @param W Item Width
 * @desc Definição da largura da janela.
 * @default 816
 *
 * @param W Item Height
 * @desc Definição da altura da janela.
 * @default 180
 *
 * @param W Item maxCols
 * @desc Definição da quantidade de colunas da janela.
 * @default 2 
 *
 * @param W Item Slide X
 * @desc Deslizar X-Axis.
 * @default 0
 *
 * @param W Item Slide Y
 * @desc Deslizar Y-Axis.
 * @default 0 
 * 
 * @param Layout Item
 * @desc Ativar a imagem de layout.
 * @default true
 *
 * @param L Item X-Axis
 * @desc Definição do posição X-axis do layout.
 * @default 0   
 *
 * @param L Item Y-Axis
 * @desc Definição do posição Y-axis do layout.
 * @default -67 
 *
 * @param >> W ACTOR ===================
 * @desc 
 * @default  
 *
 * @param W Actor X-Axis
 * @desc Definição do posição X-axis da janela.
 * @default 0    
 *
 * @param W Actor Y-Axis
 * @desc Definição do posição Y-axis do janela.
 * @default 444
 *
 * @param W Actor Width
 * @desc Definição da largura da janela.
 * @default 816
 *
 * @param W Actor Height
 * @desc Definição da altura da janela.
 * @default 180
 *
 * @param W Actor maxCols
 * @desc Definição da quantidade de colunas da janela.
 * @default 1 
 *
 * @param W Actor Slide X
 * @desc Deslizar X-Axis.
 * @default 0
 *
 * @param W Actor Slide Y
 * @desc Deslizar Y-Axis.
 * @default 0 
 * 
 * @param Layout Actor
 * @desc Ativar a imagem de layout.
 * @default true
 *
 * @param L Actor X-Axis
 * @desc Definição do posição X-axis do layout.
 * @default 0   
 *
 * @param L Actor Y-Axis
 * @desc Definição do posição Y-axis do layout.
 * @default -67   
 *
 * @param >> W ENEMY ===================
 * @desc 
 * @default  
 *
 * @param W Enemy X-Axis
 * @desc Definição do posição X-axis da janela.
 * @default 0    
 *
 * @param W Enemy Y-Axis
 * @desc Definição do posição Y-axis do janela.
 * @default 444
 *
 * @param W Enemy Width
 * @desc Definição da largura da janela.
 * @default 816
 *
 * @param W Enemy Height
 * @desc Definição da altura da janela.
 * @default 180
 *
 * @param W Enemy maxCols
 * @desc Definição da quantidade de colunas da janela.
 * @default 2 
 *
 * @param W Enemy Slide X
 * @desc Deslizar X-Axis.
 * @default 0
 *
 * @param W Enemy Slide Y
 * @desc Deslizar Y-Axis.
 * @default 0 
 * 
 * @param Layout Enemy
 * @desc Ativar a imagem de layout.
 * @default true
 *
 * @param L Enemy X-Axis
 * @desc Definição do posição X-axis do layout.
 * @default 0
 *
 * @param L Enemy Y-Axis
 * @desc Definição do posição Y-axis do layout.
 * @default -67
 *
 * @param >> SCREEN LAYOUT ===================
 * @desc 
 * @default
 *
 * @param Screen Layout
 * @desc Ativar o Layout da tela.
 * @default true
 *
 * @param Screen X-Axis
 * @desc Definição do posição X-axis da imagem.
 * @default 0
 *
 * @param Screen Y-Axis
 * @desc Definição do posição Y-axis da imagem.
 * @default 0 
 *
 * @param >> CUSTOM POSITION ===================
 * @desc 
 * @default   
 *
 * @param Custom Position 1
 * @desc Definição da posição da hud.
 * Ex -     200,200
 * @default
 *
 * @param Custom Position 2
 * @desc Definição da posição da hud.
 * Ex -     200,200
 * @default
 *
 * @param Custom Position 3
 * @desc Definição da posição da hud.
 * Ex -     200,200
 * @default
 *
 * @param Custom Position 4
 * @desc Definição da posição da hud.
 * Ex -     200,200
 * @default
 *
 * @param Custom Position 5
 * @desc Definição da posição da hud.
 * Ex -     200,200
 * @default
 *
 * @param Custom Position 6
 * @desc Definição da posição da hud.
 * Ex -     200,200
 * @default  
 *
 * @param Custom Position 7
 * @desc Definição da posição da hud.
 * Ex -     200,200
 * @default
 *
 * @param Custom Position 8
 * @desc Definição da posição da hud.
 * Ex -     200,200
 * @default  
 *
 * @help  
 * =============================================================================
 * +++ MOG_BattleHud (v4.0) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * O plugin permite customizar o layout de batalha.
 * Serão necessários os arquivos. (img/battlehud/)
 *
 * HP_Meter.png
 * HP_Number.png
 * MP_Meter.png
 * MP_Number.png
 * TP_Meter.png
 * TP_Number.png
 * ATB_Meter.png
 * Layout.png
 * Layout_Actor.png
 * Layout_Command.png
 * Layout_Enemy.png
 * Layout_Help.png
 * Layout_Item.png
 * Layout_Party.png
 * Layout_Screen.png
 * Layout_Skill.png
 * Turn.png
 *
 * =============================================================================
 * Para nomear as faces dos battlers basta nomear da seguinte forma.
 *
 * Face_ + ACTOR_ID.png
 *
 * Ex
 *
 * Face_1.png
 * Face_2.png
 * Face_3.png
 * ...
 *
 * =============================================================================
 * PLUGIN COMMANDS
 * ============================================================================= 
 * Para ocultar a hud use o commando abaixo.
 *
 * bhud_disable
 * 
 * Para apresentar a hud use o commando abaixo
 *
 * bhud_enable 
 *
 * =============================================================================
 * SCRIPT COMMANDS
 * ============================================================================= 
 * Para ocultar a hud use o commando abaixo.
 *
 * $gameSystem._bhud_visible = false
 *
 * Para apresentar a hud use o commando abaixo.
 *
 * $gameSystem._bhud_visible = true
 *  
 * =============================================================================
 * HISTÓRICO
 * =============================================================================
 * (4.0) - Compatibilidade com MOG ATB.  
 * (3.9) - Correção na apresentação do sprite de layout.  
 * (3.8) - Correção na apresentação do valor do TP. 
 * (3.7) - Correção na prioridade de layers (sobreposição de huds).
 *       - Correção na apresentação do valor do TP maximo.
 *       - Melhoria na codificação.  
 * (3.6) - Compatibilidade com Chrono Engine. 
 * (3.5) - Correção na apresentação de nomes longos.   
 * (3.4) - Adição do modo de apresentar as condições em linha. 
 * (3.3) - Correção do crash ao desativar as condições (states). 
 * (3.2) - Adição da animação de Slide.
 *       - Adição de novos efeitos no sprite de turno.
 *       - Adição do parâmetro de alinhar o nome. 
 *       - Compatibilidade com Victor Active Time Battle.  
 * (3.1) - Correção do crash quando a face é desativada.
 * (3.0) - Correção da função da face animada.
 * (2.9) - Modificação da posição do layout (Overlay) acima dos medidores .  
 * (2.8) - Adição do comando para ocultar a hud. 
 * (2.7) - Correção de alguns plugins parameters.   
 * (2.6) - Correção do parâmetro do Screen Layout Y não funcionar. 
 * (2.5) - Correção de alguns plugins parameters não funcionarem.
 * (2.4) - Correção de não apresentar os ícones de Buff e Debuff.
 * (2.3) - Melhoria na codificação.
 * (2.2) - Adição da opção do alinhamento dos números. 
 *       - Adição do layout Overlay. 
 * (2.1) - Compatibilidade com MOG Battle Cursor no modo Front View. 
 * (2.0) - Faces como actors no modo Frontview. 
 *       - Opção de definir a quantidade battlers na batalha.
 * (1.5) - Correção no setup do ângulo dos medidores. 
 * (1.4) - Correção na prioridade do layout Screen.
 * (1.3) - Correção na posição do plugin do template. 
 * (1.2) - Adição do modo hud na vertical.
 *       - Opção de definir o espaço entre as huds.
 *       - Opção de definir uma posição absoluta para a janela de comando.
 *       - Opção de definir posições especificas das huds.
 *       - Função de faces animadas por frames.
 *       - Opção da animação em gradiente do medidor.
 * (1.1) - Opção de poder definir a prioridade da face. 
 *               (0 - Abaixo do layout. 1 - Acima do layout.)
 *       - Opção de definir a quantidade de colunas da janela.
 *       - Correção da posição das condições através do setup.
 *
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================

const REM_BHD_HUD_X = -720; //Overall position
const REM_BHD_HUD_Y = 685;
const REM_BHD_CMD_X = 560; //Command circle
const REM_BHD_CMD_Y = -135;
//Stamina
const REM_BHD_HP_METER_X = 580; //Stamina meter
const REM_BHD_HP_METER_Y = 58;
const REM_BHD_HP_NUM_X = 820; //Stamina number
const REM_BHD_HP_NUM_Y = 33;
//Energy
const REM_BHD_MP_METER_X = 874; //Energy meter
const REM_BHD_MP_METER_Y = 58;
const REM_BHD_MP_NUM_X = 1120; //Energy number
const REM_BHD_MP_NUM_Y = 33;
//Willpower
const REM_BHD_WP_METER_X = 1168; //Willpower meter
const REM_BHD_WP_METER_Y = 58;
const REM_BHD_WP_NUM_X = 1410; //Willpower number
const REM_BHD_WP_NUM_Y = 33;
//Pleasure
const REM_BHD_TP_METER_X = 111; //Pleasure meter
const REM_BHD_TP_METER_Y = 85;
const REM_BHD_TP_NUM_X = 490; //Pleasure number
const REM_BHD_TP_NUM_Y = 60;
const REM_BHD_TP_METER_ROTATE = 0
//Desire bars
const REM_BHD_COCK_METER_X = 38; //Cock Desire
const REM_BHD_COCK_METER_Y = 73;
const REM_BHD_COCK_NUM_X = 112;
const REM_BHD_COCK_NUM_Y = 18;
const REM_BHD_MOUTH_METER_X = 128; //Mouth Desire
const REM_BHD_MOUTH_METER_Y = 73;
const REM_BHD_BOOBS_METER_X = 218; //Boobs Desire
const REM_BHD_BOOBS_METER_Y = 73;
const REM_BHD_PUSSY_METER_X = 308; //Pussy Desire
const REM_BHD_PUSSY_METER_Y = 73;
const REM_BHD_BUTT_METER_X = 398; //Butt Desire
const REM_BHD_BUTT_METER_Y = 73;
const REM_BHD_DESIRE_NUM_OFFSET_X = 58;
const REM_BHD_DESIRE_NUM_OFFSET_Y = -46;
const REM_BHD_DESIRE_METER_ROTATE = -1.57
//States
const REM_BHD_STATES_X = 565;
const REM_BHD_STATES_Y = 89;
const REM_BHD_STATES_MAX = 8;
const REM_BHD_STATES_COUNTER_OFFSET_Y = 8;
//Help
const REM_BHD_HELP_WIDTH = 816;
//Skills
const REM_BHD_SKILL_HEIGHT = 240;

const TachieSelectionBattlerWidth = 400;
const TachieSelectionBattlerHeight = 450;
const TachieSelectionBattlerScaling = 0.5;
const TachieEvadeAnimationDistance = 35;
const TachieZoomAnimationStep = 0.004;

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_BattleHud = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_BattleHud');
   
    // HUD POSITION
	//Moghunter.bhud_pos_x = Number(Moghunter.parameters['Hud X-Axis'] || -85);
	Moghunter.bhud_pos_x = REM_BHD_HUD_X;
	Moghunter.bhud_pos_y = REM_BHD_HUD_Y;
	//Moghunter.bhud_pos_y = Number(Moghunter.parameters['Hud Y-Axis'] || 465);
	Moghunter.bhud_space_x = Number(Moghunter.parameters['Hud Space X'] || 0);
	Moghunter.bhud_space_y  = Number(Moghunter.parameters['Hud Space Y'] || 0);
	Moghunter.bhud_pos_mode = String(Moghunter.parameters['Vertical Mode'] || false);
	Moghunter.bhud_max_battle_members = Number(Moghunter.parameters['Max Battle Members'] || 4);
	Moghunter.bhud_slideX = Number(Moghunter.parameters['Hud Slide X'] || 0);
	Moghunter.bhud_slideY = Number(Moghunter.parameters['Hud Slide Y'] || 0);	
	
    // Layout Overlay
	Moghunter.bhud_layoverlay_visible = String(Moghunter.parameters['Layout2 Visible'] || "false");
	Moghunter.bhud_layoverlay_x = Number(Moghunter.parameters['Layout2 X-Axis'] || 0);
	Moghunter.bhud_layoverlay_y = Number(Moghunter.parameters['Layout2 Y-Axis'] || 0);	
	
    // Screen Layout
	Moghunter.bhud_screen_layout = String(Moghunter.parameters['Screen Layout'] || true);
	Moghunter.bhud_screen_layout_x = Number(Moghunter.parameters['Screen X-Axis'] || 0);
	Moghunter.bhud_screen_layout_y = Number(Moghunter.parameters['Screen Y-Axis'] || 0);
		
	// TURN POSITION
	Moghunter.bhud_turn_visible = String(Moghunter.parameters['Turn Visible'] || true);
	Moghunter.bhud_turn_pos_x = Number(Moghunter.parameters['Turn X-Axis'] || -30);
	Moghunter.bhud_turn_pos_y = Number(Moghunter.parameters['Turn Y-Axis'] || 0);		
	Moghunter.bhud_turn_rotation = Number(Moghunter.parameters['Turn Rotation Speed'] || 0);	
	Moghunter.bhud_turn_zoom = String(Moghunter.parameters['Turn Zoom Animation'] || "false");
		
	// FACE POSITION
	Moghunter.bhud_face_visible = String(Moghunter.parameters['Face Visible'] || true);
	Moghunter.bhud_face_shake = String(Moghunter.parameters['Face Shake Animation'] || true);
	Moghunter.bhud_face_zoom = String(Moghunter.parameters['Face Zoom Animation'] || true);
	Moghunter.bhud_face_animated = String(Moghunter.parameters['Face Frame Animation2'] || false);
	Moghunter.bhud_face_pos_x = Number(Moghunter.parameters['Face X-Axis'] || 76);
	Moghunter.bhud_face_pos_y = Number(Moghunter.parameters['Face Y-Axis'] || 50);
	Moghunter.bhud_face_priority = Number(Moghunter.parameters['Face Priority'] || 0);
	
	// NAME POSITION
	Moghunter.bhud_name_visible = String(Moghunter.parameters['Name Visible'] || false);
	Moghunter.bhud_name_font_size = Number(Moghunter.parameters['Name Font Size'] || 20);
	Moghunter.bhud_name_font_bold_size = Number(Moghunter.parameters['Name Bold Size'] || 4);
	Moghunter.bhud_name_font_italic = String(Moghunter.parameters['Name Font Italic'] || false);
	Moghunter.bhud_name_align  = Number(Moghunter.parameters['Name Align'] || 0);	
	Moghunter.bhud_name_pos_x = Number(Moghunter.parameters['Name X-Axis'] || 40);
	Moghunter.bhud_name_pos_y = Number(Moghunter.parameters['Name Y-Axis'] || -8);	
		
	// HP METER POSITION
	Moghunter.bhud_hp_meter_visible = String(Moghunter.parameters['HP Meter Visible'] || true);
	//Moghunter.bhud_hp_meter_pos_x = Number(Moghunter.parameters['HP Meter X-Axis'] || 47);
	Moghunter.bhud_hp_meter_pos_x = REM_BHD_HP_METER_X;
	//Moghunter.bhud_hp_meter_pos_y = Number(Moghunter.parameters['HP Meter Y-Axis'] || 41);
	Moghunter.bhud_hp_meter_pos_y = REM_BHD_HP_METER_Y;
	Moghunter.bhud_hp_meter_rotation = Number(Moghunter.parameters['HP Meter Angle'] || 0);
	Moghunter.bhud_hp_meter_flow = String(Moghunter.parameters['HP Meter Flow Anime'] || false);
	
	// HP NUMBER POSITION
	Moghunter.bhud_hp_number_visible  = String(Moghunter.parameters['HP Number Visible'] || true);
	//Moghunter.bhud_hp_number_pos_x  = Number(Moghunter.parameters['HP Number X-Axis'] || 145);
	Moghunter.bhud_hp_number_pos_x  = REM_BHD_HP_NUM_X;
	//Moghunter.bhud_hp_number_pos_y  = Number(Moghunter.parameters['HP Number Y-Axis'] || 30);
	Moghunter.bhud_hp_number_pos_y = REM_BHD_HP_NUM_Y;
	Moghunter.bhud_maxhp_number_visible  = String(Moghunter.parameters['MaxHP Number Visible'] || false);
	Moghunter.bhud_maxhp_number_pos_x  = Number(Moghunter.parameters['MaxHP Number X-Axis'] || 185);
	Moghunter.bhud_maxhp_number_pos_y  = Number(Moghunter.parameters['MaxHP Number Y-Axis'] || 40);	
    Moghunter.bhud_hp_align_type  = Number(Moghunter.parameters['HP Number Align type'] || 0);
	
	// MP METER POSITION
	Moghunter.bhud_mp_meter_visible = String(Moghunter.parameters['MP Meter Visible'] || true);
	//Moghunter.bhud_mp_meter_pos_x = Number(Moghunter.parameters['MP Meter X-Axis'] || 47);
	//Moghunter.bhud_mp_meter_pos_y = Number(Moghunter.parameters['MP Meter Y-Axis'] || 74);
	Moghunter.bhud_mp_meter_pos_x = REM_BHD_MP_METER_X;
	Moghunter.bhud_mp_meter_pos_y = REM_BHD_MP_METER_Y;
	Moghunter.bhud_mp_meter_rotation = Number(Moghunter.parameters['MP Meter Angle'] || 0);
	Moghunter.bhud_mp_meter_flow = String(Moghunter.parameters['MP Meter Flow Anime'] || false);
	
	// MP NUMBER POSITION
	Moghunter.bhud_mp_number_visible  = String(Moghunter.parameters['MP Number Visible'] || true);
	//Moghunter.bhud_mp_number_pos_x  = Number(Moghunter.parameters['MP Number X-Axis'] || 145);
	//Moghunter.bhud_mp_number_pos_y  = Number(Moghunter.parameters['MP Number Y-Axis'] || 63);
	Moghunter.bhud_mp_number_pos_x  = REM_BHD_MP_NUM_X;
	Moghunter.bhud_mp_number_pos_y  = REM_BHD_MP_NUM_Y;
	Moghunter.bhud_maxmp_number_visible  = String(Moghunter.parameters['MaxMP Number Visible'] || false);
	Moghunter.bhud_maxmp_number_pos_x  = Number(Moghunter.parameters['MaxMP Number X-Axis'] || 196);
	Moghunter.bhud_maxmp_number_pos_y  = Number(Moghunter.parameters['MaxMP Number Y-Axis'] || 78);	
    Moghunter.bhud_mp_align_type  = Number(Moghunter.parameters['MP Number Align type'] || 0);
	
	// TP METER POSITION
	Moghunter.bhud_tp_meter_visible = String(Moghunter.parameters['TP Meter Visible'] || true);
	//oghunter.bhud_tp_meter_pos_x = Number(Moghunter.parameters['TP Meter X-Axis'] || 47);
	//Moghunter.bhud_tp_meter_pos_y = Number(Moghunter.parameters['TP Meter Y-Axis'] || 107);	
	Moghunter.bhud_tp_meter_pos_x = REM_BHD_TP_METER_X
	Moghunter.bhud_tp_meter_pos_y = REM_BHD_TP_METER_Y;	
	Moghunter.bhud_tp_meter_rotation = REM_BHD_TP_METER_ROTATE;
	Moghunter.bhud_tp_meter_flow = String(Moghunter.parameters['TP Meter Flow Anime'] || false);
	
	// TP NUMBER POSITION
	Moghunter.bhud_tp_number_visible  = String(Moghunter.parameters['TP Number Visible'] || true);
	//Moghunter.bhud_tp_number_pos_x  = Number(Moghunter.parameters['TP Number X-Axis'] || 145);
	//Moghunter.bhud_tp_number_pos_y  = Number(Moghunter.parameters['TP Number Y-Axis'] || 96);
	Moghunter.bhud_tp_number_pos_x  = REM_BHD_TP_NUM_X;
	Moghunter.bhud_tp_number_pos_y  = REM_BHD_TP_NUM_Y;
	Moghunter.bhud_maxtp_number_visible  = String(Moghunter.parameters['MaxTP Number Visible'] || false);
	Moghunter.bhud_maxtp_number_pos_x  = Number(Moghunter.parameters['MaxTP Number X-Axis'] || 185);
	Moghunter.bhud_maxtp_number_pos_y  = Number(Moghunter.parameters['MaxTP Number Y-Axis'] || 116);	
    Moghunter.bhud_tp_align_type  = Number(Moghunter.parameters['TP Number Align type'] || 0);
	
    // AT METER POSITION
	Moghunter.bhud_at_meter_visible = String(Moghunter.parameters['ATB Meter Visible'] || true);
	Moghunter.bhud_at_meter_pos_x = Number(Moghunter.parameters['ATB Meter X-Axis'] || 45);
	Moghunter.bhud_at_meter_pos_y = Number(Moghunter.parameters['ATB Meter Y-Axis'] || 23);	
	Moghunter.bhud_at_meter_rotation = Number(Moghunter.parameters['ATB Meter Angle'] || 0);
	Moghunter.bhud_at_meter_flow = String(Moghunter.parameters['ATB Meter Flow Anime'] || false);
	
	// STATES POSITION
	Moghunter.bhud_states_visible = String(Moghunter.parameters['States Visible'] || true);
	Moghunter.bhud_states_pos_x = Number(Moghunter.parameters['States X-Axis'] || 105);
	Moghunter.bhud_states_pos_y = Number(Moghunter.parameters['States Y-Axis'] || 123);	
    Moghunter.bhud_statesType = Number(Moghunter.parameters['States Mode'] || 0);	
	Moghunter.bhud_statesMax = Number(Moghunter.parameters['States Max'] || 4);	
	Moghunter.bhud_statesAlign = Number(Moghunter.parameters['States Align'] || 0);		

    // COMMAND WINDOWS
	Moghunter.bhud_auto_pos = String(Moghunter.parameters['Command Auto Adjust'] || true);
    //Moghunter.bhud_com_x = Number(Moghunter.parameters['W Command X-Axis'] || 0);
	//Moghunter.bhud_com_y = Number(Moghunter.parameters['W Command Y-Axis'] || -70);
	Moghunter.bhud_com_x = REM_BHD_CMD_X;
    Moghunter.bhud_com_y = REM_BHD_CMD_Y;
	Moghunter.bhud_com_layout = String(Moghunter.parameters['Layout Command'] || true);
    Moghunter.bhud_com_lay_x = Number(Moghunter.parameters['L Command X-Axis'] || -2);
    Moghunter.bhud_com_lay_y = Number(Moghunter.parameters['L Command Y-Axis'] || 5);
	Moghunter.bhud_com_width =  Number(Moghunter.parameters['W Command Width'] || 192);
    Moghunter.bhud_com_height =  Number(Moghunter.parameters['W Command Height'] || 180);		
	Moghunter.bhud_com_slideX = Number(Moghunter.parameters['W Command Slide X'] || 0);
    Moghunter.bhud_com_slideY = Number(Moghunter.parameters['W Command Slide Y'] || 0);	
		
	// PARTY WINDOWS
    Moghunter.bhud_party_x = Number(Moghunter.parameters['W Party X-Axis'] || 325);
    Moghunter.bhud_party_y = Number(Moghunter.parameters['W Party Y-Axis'] || 170);
	Moghunter.bhud_party_layout = String(Moghunter.parameters['Layout Party'] || true);
    Moghunter.bhud_party_lay_x = Number(Moghunter.parameters['L Party X-Axis'] || -325);
    Moghunter.bhud_party_lay_y = Number(Moghunter.parameters['L Party Y-Axis'] || -42);	
	Moghunter.bhud_party_width =  Number(Moghunter.parameters['W Party Width'] || 192);
    Moghunter.bhud_party_height =  Number(Moghunter.parameters['W Party Height'] || 110);	
	Moghunter.bhud_party_slide_x = Number(Moghunter.parameters['W Party Slide X'] || 0);
    Moghunter.bhud_party_slide_y = Number(Moghunter.parameters['W Party Slide Y'] || 0);
			
	// HELP WINDOW
	Moghunter.bhud_help_x = Number(Moghunter.parameters['W Help X-Axis'] || 0);
    Moghunter.bhud_help_y = Number(Moghunter.parameters['W Help Y-Axis'] || 0);
	Moghunter.bhud_help_layout = String(Moghunter.parameters['Layout Help'] || true);
	Moghunter.bhud_help_lay_x = Number(Moghunter.parameters['L Help X-Axis'] || 0);
    Moghunter.bhud_help_lay_y = Number(Moghunter.parameters['L Help Y-Axis'] || 0);
	//Moghunter.bhud_help_width = Number(Moghunter.parameters['W Help Width'] || 816); 
	Moghunter.bhud_help_width = REM_BHD_HELP_WIDTH;
    Moghunter.bhud_help_height = Number(Moghunter.parameters['W Help Height'] || 108);
	Moghunter.bhud_help_slide_x = Number(Moghunter.parameters['W Help Slide X'] || 0);
    Moghunter.bhud_help_slide_y = Number(Moghunter.parameters['W Help Slide Y'] || 0);
			
	// SKILL WINDOW
	Moghunter.bhud_skill_x =  Number(Moghunter.parameters['W Skill X-Axis'] || 0);
    Moghunter.bhud_skill_y =  Number(Moghunter.parameters['W Skill Y-Axis'] || 444);
	Moghunter.bhud_skill_layout = String(Moghunter.parameters['Layout Skill'] || true);
	Moghunter.bhud_skill_lay_x =  Number(Moghunter.parameters['L Skill X-Axis'] || 0);
    Moghunter.bhud_skill_lay_y =  Number(Moghunter.parameters['L Skill Y-Axis'] || -67);
	Moghunter.bhud_skill_width =  Number(Moghunter.parameters['W Skill Width'] || 816);
    Moghunter.bhud_skill_height =  Number(Moghunter.parameters['W Skill Height'] || 180);
	Moghunter.bhud_skill_maxcols = Number(Moghunter.parameters['W Skill maxCols'] || 2);	
	Moghunter.bhud_skill_slide_x =  Number(Moghunter.parameters['W Skill Slide X'] || 0);
    Moghunter.bhud_skill_slide_y =  Number(Moghunter.parameters['W Skill Slide Y'] || 0);	
		
	// ITEM WINDOW
	Moghunter.bhud_item_x =  Number(Moghunter.parameters['W Item X-Axis'] || 0);
    Moghunter.bhud_item_y =  Number(Moghunter.parameters['W Item Y-Axis'] || 444);
	Moghunter.bhud_item_layout = String(Moghunter.parameters['Layout Item'] || true);
	Moghunter.bhud_item_lay_x =  Number(Moghunter.parameters['L Item X-Axis'] || 0);
    Moghunter.bhud_item_lay_y =  Number(Moghunter.parameters['L Item Y-Axis'] || -67);
	Moghunter.bhud_item_width =  Number(Moghunter.parameters['W Item Width'] || 816);
    Moghunter.bhud_item_height =  Number(Moghunter.parameters['W Item Height'] || 180);	
	Moghunter.bhud_item_maxcols = Number(Moghunter.parameters['W Item maxCols'] || 2);
	Moghunter.bhud_item_slide_x =  Number(Moghunter.parameters['W Item Slide X'] || 0);
    Moghunter.bhud_item_slide_y =  Number(Moghunter.parameters['W Item Slide Y'] || 0);	
		
    // ACTOR WINDOWS
    Moghunter.bhud_actor_x = Number(Moghunter.parameters['W Actor X-Axis'] || 0);
    Moghunter.bhud_actor_y = Number(Moghunter.parameters['W Actor Y-Axis'] || 444);
	Moghunter.bhud_actor_layout = String(Moghunter.parameters['Layout Actor'] || true);
    Moghunter.bhud_actor_lay_x = Number(Moghunter.parameters['L Actor X-Axis'] || 0);
    Moghunter.bhud_actor_lay_y = Number(Moghunter.parameters['L Actor Y-Axis'] || -67);
	Moghunter.bhud_actor_width =  Number(Moghunter.parameters['W Actor Width'] || 816);
    Moghunter.bhud_actor_height =  Number(Moghunter.parameters['W Actor Height'] || 180);	
	Moghunter.bhud_actor_maxcols = Number(Moghunter.parameters['W Actor maxCols'] || 1);
	Moghunter.bhud_actor_slide_x = Number(Moghunter.parameters['W Actor Slide X'] || 0);
    Moghunter.bhud_actor_slide_y = Number(Moghunter.parameters['W Actor Slide Y'] || 0);
		
    // ENEMY WINDOWS
    Moghunter.bhud_enemy_x = Number(Moghunter.parameters['W Enemy X-Axis'] || 0);
    Moghunter.bhud_enemy_y = Number(Moghunter.parameters['W Enemy Y-Axis'] || 444);
	Moghunter.bhud_enemy_layout = String(Moghunter.parameters['Layout Enemy'] || true);
    Moghunter.bhud_enemy_lay_x = Number(Moghunter.parameters['L Enemy X-Axis'] || 0);
    Moghunter.bhud_enemy_lay_y = Number(Moghunter.parameters['L Enemy Y-Axis'] || -67);
	Moghunter.bhud_enemy_width =  Number(Moghunter.parameters['W Enemy Width'] || 816);
    Moghunter.bhud_enemy_height =  Number(Moghunter.parameters['W Enemy Height'] || 180);			
	Moghunter.bhud_enemy_maxcols = Number(Moghunter.parameters['W Enemy maxCols'] || 2);
	Moghunter.bhud_enemy_slide_x = Number(Moghunter.parameters['W Enemy Slide X'] || 0);
    Moghunter.bhud_enemy_slide_y = Number(Moghunter.parameters['W Enemy Slide Y'] || 0);
	
	// Custom Position
	Moghunter.bhud_custom_pos = [];
	for (var i = 0; i < 8; i++) {
		Moghunter.bhud_custom_pos[i] = (Moghunter.parameters['Custom Position ' + String(i + 1)] || null);
	};

//=============================================================================
// ** ImageManager
//=============================================================================

//==============================
// * BHud
//==============================
ImageManager.loadBHud = function(filename) {
    return this.loadBitmap('img/battlehud/', filename, 0, true);
};		

//=============================================================================
// ** Game_Interpreter
//=============================================================================	

//==============================
// * PluginCommand
//==============================
var _alias_mog_bhud_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_alias_mog_bhud_pluginCommand.call(this,command, args)
	if (command === "bhud_disable")  {$gameSystem._bhud_visible = false};
	if (command === "bhud_enable")  {$gameSystem._bhud_visible = true};
	return true;
};
	
//=============================================================================
// ** Game_Temp
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_bhud_temp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
	_alias_mog_bhud_temp_initialize.call(this);
	this._bhud_position = [];	
	this._bhud_position_active = null;
	this._battleEnd = false;
	this._bhud_dp = false;
	this._refreshBhud = false;
	this._forceCreateBattleHud = false;
	this._forceRemoveBattleHud = false;
};

//=============================================================================
// ** Game_System
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_bhud_sys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_alias_mog_bhud_sys_initialize.call(this);
	this._bhud_position = [];
	for (var i = 0; i < 8; i++) {
	    this._bhud_position[i] = this.set_hudcp(Moghunter.bhud_custom_pos[i]);
    };
	this._bhud_auto_com = false;
	this._bhud_pos_mode = 0;
	this._bhud_visible = true;
	if (String(Moghunter.bhud_pos_mode) === "true") {this._bhud_pos_mode = 1};
	if (String(Moghunter.bhud_auto_pos) === "true") {this._bhud_auto_com = true};
};

//==============================
// * set Hudcp
//==============================
Game_System.prototype.set_hudcp = function(value) {
	if (!value) {return null};
	var s = value.split(',');
	if (!s[0] || !s[1]) {return null};
	return  [Number(s[0]),Number(s[1])];
}

//=============================================================================
// ** Game Interpreter
//=============================================================================

//==============================
// * Command129
//==============================
var _alias_mog_bhud_command129 = Game_Interpreter.prototype.command129;
Game_Interpreter.prototype.command129 = function() {	
	_alias_mog_bhud_command129.call(this);	
	$gameTemp._refresh_Bhud = true;
	return true;
};

//=============================================================================
// ** Game Party
//=============================================================================

//==============================
// * max Battle Members
//==============================
Game_Party.prototype.maxBattleMembers = function() {
	if (Imported.MOG_ChronoEngine) {Math.min(Math.max(Number(Moghunter.ras_maxBattleMembers),1),4)};
    return Math.max(Number(Moghunter.bhud_max_battle_members),1);
};

//=============================================================================
// ** BattleManager
//=============================================================================

//==============================
// * processVictory
//==============================
var _alias_mog_bhud_processVictory = BattleManager.processVictory;
BattleManager.processVictory = function() {
	 $gameTemp._battleEnd = true;
	 _alias_mog_bhud_processVictory.call(this);	 
};

//==============================
// * processAbort
//==============================
var _alias_mog_bhud_processAbort = BattleManager.processAbort;
BattleManager.processAbort = function() {
	 $gameTemp._battleEnd = true;
	 _alias_mog_bhud_processAbort.call(this);	 
};

//==============================
// * processDefeat
//==============================
var _alias_mog_bhud_processDefeat = BattleManager.processDefeat;
BattleManager.processDefeat = function() {
	 $gameTemp._battleEnd = true;
	 _alias_mog_bhud_processDefeat.call(this);	 
};


//=============================================================================
// ** Game BattlerBase
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_bhud_gbat_initMembers = Game_BattlerBase.prototype.initMembers
Game_BattlerBase.prototype.initMembers = function() {
	_alias_mog_bhud_gbat_initMembers.call(this);
	this.need_refresh_bhud_states = false;
	this._bhud_face_data = [0,0,0,0];
	this._face_pos = [0,0];
};

//==============================
// * addNewState
//==============================
var _alias_mog_bhud_addNewState = Game_BattlerBase.prototype.addNewState
Game_BattlerBase.prototype.addNewState = function(stateId) {
    _alias_mog_bhud_addNewState.call(this,stateId);
	this.need_refresh_bhud_states = true;
};

//==============================
// * eraseState
//==============================
var _alias_mog_bhud_eraseState = Game_BattlerBase.prototype.eraseState
Game_BattlerBase.prototype.eraseState = function(stateId) {
	_alias_mog_bhud_eraseState.call(this,stateId);
	this.need_refresh_bhud_states = true;
};

//=============================================================================
// ** Game Action
//=============================================================================

//==============================
// * Apply
//==============================
var _alias_mog_bhud_apply = Game_Action.prototype.apply;
Game_Action.prototype.apply = function(target) {
	 var oldhp = target.hp
	 _alias_mog_bhud_apply.call(this,target);
	 if (target.isActor()) {
		 if (oldhp > target.hp) { target._bhud_face_data = [30,20,3,30]; }
		 else if (oldhp < target.hp) { target._bhud_face_data = [0,20,1,30]; }
		 else if (target.result().evaded) {
			target._bhud_face_data = [-30,20,3,30];
		 }
	 };
};

//==============================
// * Prepare
//==============================
var _alias_mog_bmhud_action_prepare = Game_Action.prototype.prepare
Game_Action.prototype.prepare = function() {	
	_alias_mog_bmhud_action_prepare.call(this);
	if (this.subject().isActor() && String(Moghunter.bhud_face_zoom) === "true"){this.subject()._bhud_face_data = [0,40,2,40];};
};

//=============================================================================
// ** Game Actor
//=============================================================================

//==============================
// * Gain HP
//==============================
var _alias_mog_bhud_gainHp =Game_Actor.prototype.gainHp;
Game_Actor.prototype.gainHp = function(value) {
    _alias_mog_bhud_gainHp.call(this,value);
	this._bhud_face_data[3] += 1;
};

//==============================
// * Recover All
//==============================
var _alias_mog_bhud_recoverAll = Game_Actor.prototype.recoverAll;
Game_Actor.prototype.recoverAll = function() {
	_alias_mog_bhud_recoverAll.call(this);
	this._bhud_face_data[3] += 1;
};

//=============================================================================
// ** Window_BattleStatus
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_bhud_initialize = Window_BattleStatus.prototype.initialize
Window_BattleStatus.prototype.initialize = function() {
	_alias_mog_bhud_initialize.call(this);
    this.visible = false
};

//=============================================================================
// ** Window_BattleSkill
//=============================================================================

//==============================
// * windowWidth
//==============================
Window_BattleSkill.prototype.windowWidth = function() {
   return Moghunter.bhud_skill_width;
};

//==============================
// * maxCols
//==============================
Window_BattleSkill.prototype.maxCols = function() {
    return Moghunter.bhud_skill_maxcols;
};

//=============================================================================
// ** Window_BattleItem
//=============================================================================

//==============================
// * windowWidth
//==============================
Window_BattleItem.prototype.windowWidth = function() {
   return Moghunter.bhud_item_width;
};

//==============================
// * maxCols
//==============================
Window_BattleItem.prototype.maxCols = function() {
    return Moghunter.bhud_item_maxcols;
};

//=============================================================================
// ** Window_BattleActor
//=============================================================================

//==============================
// * Initialize
//==============================
Window_BattleActor.prototype.windowWidth = function() {
    return Moghunter.bhud_actor_width;
};

//==============================
// * maxCols
//==============================
Window_BattleActor.prototype.maxCols = function() {
    return Moghunter.bhud_actor_maxcols;
};

//=============================================================================
// ** Window_BattleEnemy
//=============================================================================

//==============================
// * windowWidth
//==============================
Window_BattleEnemy.prototype.windowWidth = function() {
   return Moghunter.bhud_enemy_width;
};

//==============================
// * maxCols
//==============================
Window_BattleEnemy.prototype.maxCols = function() {
    return Moghunter.bhud_enemy_maxcols;
};

//=============================================================================
// ** Window Actor Command
//=============================================================================

//==============================
// * initialize
//==============================
var _alias_mog_bhud_wActCom_initialize = Window_ActorCommand.prototype.initialize;
Window_ActorCommand.prototype.initialize = function() {
    _alias_mog_bhud_wActCom_initialize.call(this);
	this._com_mode = Number($gameSystem._bhud_pos_mode);
	this._force_hide_duration = 0;
	this.org = [Moghunter.bhud_com_x,Moghunter.bhud_com_y];
	this.org2 = [
			this.org[0] + Moghunter.bhud_com_slideX,
			this.org[1] + Moghunter.bhud_com_slideY
	];
	this.slide = Moghunter.bhud_com_slideX === 0 && Moghunter.bhud_com_slideY === 0 ? false : true;
	this._actorVis != this._actor;
	this.xp = -1;
	this.yp = -1;
};

//==============================
// * Activate
//==============================
var _alias_mog_bhud_wActCom_activate = Window_ActorCommand.prototype.activate;
Window_ActorCommand.prototype.activate = function() {
    _alias_mog_bhud_wActCom_activate.call(this);
    if (String(Moghunter.bhud_com_layout) === "true") {this._force_hide_duration = 1};
};

//==============================
// * Sprite Move To
//==============================
Window_ActorCommand.prototype.sprite_move_to = function(value,real_value) {
	if (value === real_value) {return value};
	var dnspeed = 1 + (Math.abs(value - real_value) / 12);
	if (value > real_value) {value -= dnspeed;
	    if (value < real_value) {value = real_value};}
    else if (value < real_value) {value  += dnspeed;
    	if (value  > real_value) {value  = real_value};		
    };
	return Math.floor(value);
};

//==============================
// ** slideWindow
//==============================
Window_ActorCommand.prototype.slideWindow = function(win,vmode) {
	 var vm = vmode ? win.active : win.visible;
	 if (vm) {
	     var np = [win.org[0],win.org[1]];
		 win.contentsOpacity += 15;	
	 } else {
	     var np = [win.org2[0],win.org2[1]];
		 win.contentsOpacity = 0;	
    };
	 win.x = this.sprite_move_to(win.x,np[0]);
	 win.y = this.sprite_move_to(win.y,np[1]);	
};

//==============================
// ** update Position
//==============================
Window_ActorCommand.prototype.updatePosition = function() {
	if (Imported.MOG_BattleCommands) {
	     this.updateBattleCommands();
    } else {
		 if (!this.slide) {
			 this.updatePosN();
		 } else {
			 this.updatePosS();
		 };
    };
};

//==============================
// ** update Battle Commands
//==============================
Window_ActorCommand.prototype.updateBattleCommands = function() {
	if ($gameTemp._bhud_position_active) {
		this.visible = this.active;
		if ($gameSystem._bhud_auto_com) {
        	this.x = $gameTemp._bhud_position_active[0] + Moghunter.bhud_com_x;
			if (this._com_mode === 0) {
	        	this.y = $gameTemp._bhud_position_active[1] + Moghunter.bhud_com_y - this.height;}
		    else {this.y = $gameTemp._bhud_position_active[1] + Moghunter.bhud_com_y};	}
	    else {
        	this.x = Moghunter.bhud_com_x;
         	this.y = Moghunter.bhud_com_y;
		};
	};
};

//==============================
// ** update Position S
//==============================
Window_ActorCommand.prototype.updatePosS = function() {
	if ($gameTemp._bhud_position_active) {
		this.visible = this.active;
		if ($gameSystem._bhud_auto_com) {
			if (this.xp != $gameTemp._bhud_position_active[0] || this.yp != $gameTemp._bhud_position_active[1]) {
				this.xp = $gameTemp._bhud_position_active[0];
				this.yp = $gameTemp._bhud_position_active[1];
				this.org[0] = $gameTemp._bhud_position_active[0] + Moghunter.bhud_com_x;
				if (this._com_mode === 0) {
					this.org[1] = $gameTemp._bhud_position_active[1] + Moghunter.bhud_com_y - this.height;
				} else {
					this.org[1] = $gameTemp._bhud_position_active[1] + Moghunter.bhud_com_y;
				};
				this.org2 = [
					this.org[0] + Moghunter.bhud_com_slideX,
					this.org[1] + Moghunter.bhud_com_slideY
				];
				if (this._actorVis != this._actor) {
					this.x = this.org2[0];
					this.y = this.org2[1];		
					this._actorVis = this._actor;  
				};					
			};
			this.slideWindow(this,false);			
	    } else {
        	this.slideWindow(this,false);
		};
	};
};

//==============================
// ** update Position N
//==============================
Window_ActorCommand.prototype.updatePosN = function() {
	if ($gameTemp._bhud_position_active) {
		this.visible = this.active;
		if ($gameSystem._bhud_auto_com) {
        	this.x = $gameTemp._bhud_position_active[0] + Moghunter.bhud_com_x;
			if (this._com_mode === 0) {
	        	this.y = $gameTemp._bhud_position_active[1] + Moghunter.bhud_com_y - this.height;}
		    else {this.y = $gameTemp._bhud_position_active[1] + Moghunter.bhud_com_y};	}
	    else {
        	this.x = Moghunter.bhud_com_x;
         	this.y = Moghunter.bhud_com_y;
		};
	};
};

//==============================
// * Update
//==============================
var _alias_mog_bhud_wcom_update = Window_ActorCommand.prototype.update;
Window_ActorCommand.prototype.update = function() {
    _alias_mog_bhud_wcom_update.call(this);	
    this.updatePosition();
	if (this._force_hide_duration > 0) {this._force_hide_duration -= 1;this.visible = false};
};


//=============================================================================
// ** Sprite Actor
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_bhud_sprt_actor_initialize = Sprite_Actor.prototype.initialize
Sprite_Actor.prototype.initialize = function(battler) {
	_alias_bhud_sprt_actor_initialize.call(this,battler);
	this._sprite_face = false;
	if (String(Moghunter.bhud_face_visible) === "true") {this._sprite_face = true};
};

//==============================
// * Damage Offset X
//==============================
Sprite_Actor.prototype.damageOffsetX = function() {
	if (!$gameSystem.isSideView() && this._sprite_face) {return 0;};
    return -32;
};

Sprite_Actor.prototype.damageOffsetY = function() {
	if (!$gameSystem.isSideView() && this._sprite_face) {return 0;};
    return 0;
};

//==============================
// * update Position
//==============================
var _alias_mog_bhud_sprt_actor_updatePosition = Sprite_Battler.prototype.updatePosition;
Sprite_Battler.prototype.updatePosition = function() {
	if (!$gameSystem.isSideView() && this._sprite_face) {
		if (this._battler && $gameTemp._bhud_position[this._battler.index()]) {
   		   this.x = $gameTemp._bhud_position[this._battler.index()][0] + Moghunter.bhud_face_pos_x + this.remSpriteBattlerPosX();
		   this.y = $gameTemp._bhud_position[this._battler.index()][1] + Moghunter.bhud_face_pos_y + this.remSpriteBattlerPosY();
		   return;
		};
	};	
    _alias_mog_bhud_sprt_actor_updatePosition.call(this);
};

//==============================
// * Setup Animation
//==============================
var _alias_mog_bhud_sprt_actor_setupAnimation = Sprite_Battler.prototype.setupAnimation;
Sprite_Actor.prototype.setupAnimation = function() {
	if (!$gameSystem.isSideView() && this._sprite_face) {
    while (this._battler.isAnimationRequested()) {
        var data = this._battler.shiftAnimation();
        var animation = $dataAnimations[data.animationId];
        var mirror = data.mirror;
        var delay = animation.position === 3 ? 0 : data.delay;
        this.startAnimation(animation, mirror, delay);
        for (var i = 0; i < this._animationSprites.length; i++) {
            var sprite = this._animationSprites[i];
            sprite.visible = true;
        }
    }
	return;
	};
	_alias_mog_bhud_sprt_actor_setupAnimation.call(this);
};

//==============================
// * Setup Damage Popup
//==============================
var _alias_mog_bhud_sprt_actor_setupDamagePopup = Sprite_Battler.prototype.setupDamagePopup
Sprite_Actor.prototype.setupDamagePopup = function() {
	if (!$gameSystem.isSideView() && this._sprite_face) {
	    if (this._battler.isDamagePopupRequested()) {
            var sprite = new Sprite_Damage();
            sprite.x = this.x + this.damageOffsetX();
            sprite.y = this.y + this.damageOffsetY();
            sprite.setup(this._battler);
			this.pushDamageSprite(sprite);
			BattleManager._spriteset.addChild(sprite);
            this._battler.clearResult();
        } else {
			this._battler.clearDamagePopup();
    }
	return;
	};
	_alias_mog_bhud_sprt_actor_setupDamagePopup.call(this);
};

//=============================================================================
// ** Spriteset Battle
//=============================================================================

//==============================
// ** update Actors
//==============================
var _mog_bhud_sprbat_updateActors = Spriteset_Battle.prototype.updateActors;
Spriteset_Battle.prototype.updateActors = function() {
	if (!$gameSystem.isSideView()) {return};
	_mog_bhud_sprbat_updateActors.call(this);
};

//=============================================================================
// ** Scene Base
//=============================================================================

//==============================
// ** create Hud Field
//==============================
Scene_Base.prototype.createHudField = function() {
	this._hudField = new Sprite();
	this._hudField.z = 10;
	this.addChild(this._hudField);
};

//==============================
// ** sort MZ
//==============================
Scene_Base.prototype.sortMz = function() {
   this._hudField.children.sort(function(a, b){return a.mz-b.mz});
};

//==============================
// ** create Battle Hud
//==============================
Scene_Base.prototype.createBattleHud = function() {
	if (String(Moghunter.bhud_screen_layout) === "true") {this.createBattleHudScreenLayout();};
	$gameTemp.refresh_Bhud = false;
	$gameTemp._battleEnd = false;
	this._com_mode = Number($gameSystem._bhud_pos_mode)
	this._battle_hud = [];
	for (var i = 0; i < $gameParty.maxBattleMembers(); i++) {
		this._battle_hud[i] = new Battle_Hud(i);
		this._battle_hud[i].mz = 110;
		this._hudField.addChild(this._battle_hud[i]);
	};	
};

//==============================
// ** remove Battle Hud
//==============================
Scene_Base.prototype.removeBattleHud = function() {
	if (!this._battle_hud) {return};
	if (this._screen_layout) {
	    this._hudField.removeChild(this._screen_layout);
	};
	for (var i = 0; i < this._battle_hud.length; i++) {
	     this._hudField.removeChild(this._battle_hud[i]);
	};
	this._battle_hud = null;
};

//==============================
// * Create Battle Hud Screen
//==============================
Scene_Base.prototype.createBattleHudScreenLayout = function() {	
	this._screen_layout = new Sprite(ImageManager.loadBHud("Layout_Screen"));
	this._screen_layout.opacity = 0;
	this._screen_layout.x = Moghunter.bhud_screen_layout_x;
	this._screen_layout.y = Moghunter.bhud_screen_layout_y;
	this._screen_layout.mz = 100;
	this._hudField.addChild(this._screen_layout);
};

//==============================
// * Update Battle Hud visible
//==============================
Scene_Base.prototype.updateBattleHudVisible = function() {
	if (this.isBattleHudVisible()) {this._screen_layout.opacity += 10}	 
	else {this._screen_layout.opacity -= 10};
};

//==============================
// * Is Battle Hud Visible
//==============================
Scene_Base.prototype.isBattleHudVisible = function() {
	//if ($gameMessage.isBusy()) {return false};
	if ($gameTemp._battleEnd) {return false};
	if (!$gameSystem._bhud_visible) {return false};
	return true
};

//==============================
// ** Refresh Battle Hud
//==============================
Scene_Base.prototype.refreshBattleHud = function() {
	if (!this._battle_hud) {return};
	$gameTemp._refresh_Bhud = false;
	for (var i = 0; i < $gameParty.maxBattleMembers(); i++) {
		this._battle_hud[i].refresh_bhud();
	};		
};

//==============================
// ** force Create Battle Hud
//==============================
Scene_Base.prototype.forceCreateBattleHud = function() {
     $gameTemp._forceCreateBattleHud = false;
	 this.forceRemoveBattleHud();
	 this.createBattleHud();
	 this.sortMz();
};

//==============================
// ** force Remove Battle Hud
//==============================
Scene_Base.prototype.forceRemoveBattleHud = function() {
     $gameTemp._forceRemoveBattleHud = false;
	 this.removeBattleHud();
};

//==============================
// ** Update Battle Hud
//==============================
Scene_Base.prototype.updateBatteHud = function() {
	if (this._screen_layout) {this.updateBattleHudVisible()};
	if ($gameTemp._refresh_Bhud) {this.refreshBattleHud()};
};

//==============================
// ** createActorsF
//==============================
Scene_Base.prototype.createActorsF = function() {
	if (this._actorSprites) {
		for (var i = 0; i < this._actorSprites.length; i++) {
		    this._hudField.removeChild(this._actorSprites[i]);
		};
	};
    this._actorSprites = [];
    for (var i = 0; i < $gameParty.maxBattleMembers(); i++) {
        this._actorSprites[i] = new Sprite_Actor();
		this._actorSprites[i].mz = 110;
        this._hudField.addChild(this._actorSprites[i]);
    };
};

//==============================
// ** Update
//==============================
var _mog_bhud_Smap_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function() {
	_mog_bhud_Smap_update.call(this);
	if ($gameTemp._forceCreateBattleHud) {this.forceCreateBattleHud()};
	if ($gameTemp._forceRemoveBattleHud) {this.forceRemoveBattleHud()};
	if (this._battle_hud) {this.updateBatteHud()};
};

//=============================================================================
// ** Scene Battle
//=============================================================================

//==============================
// ** create Spriteset
//==============================
var _mog_bhud_sbattle_createSpriteset = Scene_Battle.prototype.createSpriteset;
Scene_Battle.prototype.createSpriteset = function() {
	_mog_bhud_sbattle_createSpriteset.call(this);
	//this._spriteset = new Spriteset_Battle();
	//this.addChild(this._spriteset);
	if (!this._hudField) {this.createHudField()};

	this.createBattleHudSB();

};

//==============================
// ** create Battle Hud SB
//==============================
Scene_Battle.prototype.createBattleHudSB = function() {
	this.createBattleHud();
	if (!$gameSystem.isSideView()) {this.createActorsF()};
	
};

//==============================
// ** update Actors
//==============================
Scene_Battle.prototype.updateActors = function() {
    var members = $gameParty.battleMembers();
    for (var i = 0; i < this._actorSprites.length; i++) {
        this._actorSprites[i].setBattler(members[i]);
    }
};

//==============================
// ** create Spriteset
//==============================
var _mog_bhud_sMap_createSpriteset = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function() {
	_mog_bhud_sMap_createSpriteset.call(this);
	if (!this._hudField) {this.createHudField()};
};

//==============================
// ** createWindowLayer
//==============================
var _alias_mog_bhud_createWindowLayer = Scene_Battle.prototype.createWindowLayer
Scene_Battle.prototype.createWindowLayer = function() {
	this.create_layout_window();	
	_alias_mog_bhud_createWindowLayer.call(this);
};

//==============================
// ** createAllWindows
//==============================
var _alias_mog_bhud_createAllWindows = Scene_Battle.prototype.createAllWindows;
Scene_Battle.prototype.createAllWindows = function() {
	_alias_mog_bhud_createAllWindows.call(this);
	// ACTOR COMMAND ---------------------------------------------------------------------
    this._actorCommandWindow.x = Moghunter.bhud_com_x;
	this._actorCommandWindow.y = Moghunter.bhud_com_y;
	this._actorCommandWindow.vis = this._actorCommandWindow.visible;
	this._actorCommandWindow.width = Moghunter.bhud_com_width;
	this._actorCommandWindow.height = Moghunter.bhud_com_height;		
	if (String(Moghunter.bhud_com_layout) === "true") {this._actorCommandWindow.opacity = 0};
	// PARTY COMMAND ---------------------------------------------------------------------	
	this._partyCommandWindow.x = Moghunter.bhud_party_x;
	this._partyCommandWindow.y = Moghunter.bhud_party_y;
	this._partyCommandWindow.org = [Moghunter.bhud_party_x,Moghunter.bhud_party_y];
	this._partyCommandWindow.org2 = [
	      this._partyCommandWindow.org[0] + Moghunter.bhud_party_slide_x,
		  this._partyCommandWindow.org[1] + Moghunter.bhud_party_slide_y
    ];
	this._partyCommandWindow.slide = Moghunter.bhud_party_slide_x === 0 && Moghunter.bhud_party_slide_y === 0 ? false : true;
	this._partyCommandWindow.vis = this._partyCommandWindow.visible;
	this._partyCommandWindow.width = Moghunter.bhud_party_width;
	this._partyCommandWindow.height = Moghunter.bhud_party_height;		
	if (String(Moghunter.bhud_party_layout) === "true") {this._partyCommandWindow.opacity = 0};
	// HELP WINDOW ---------------------------------------------------------------------
	this._helpWindow.x = Moghunter.bhud_help_x;
	this._helpWindow.y = Moghunter.bhud_help_y;
	this._helpWindow.org = [this._helpWindow.x,this._helpWindow.y];
	this._helpWindow.org2 = [
	     this._helpWindow.org[0] + Moghunter.bhud_help_slide_x,
		 this._helpWindow.org[1] + Moghunter.bhud_help_slide_y
	];
	this._helpWindow.slide = Moghunter.bhud_help_slide_x === 0 && Moghunter.bhud_help_slide_y === 0 ? false : true;
	this._helpWindow.vis = this._helpWindow.visible;
	this._helpWindow.width = Moghunter.bhud_help_width;
	this._helpWindow.height = Moghunter.bhud_help_height;	
	if (String(Moghunter.bhud_help_layout) === "true") {this._helpWindow.opacity = 0};
	// SKILL WINDOW ---------------------------------------------------------------------
	this._skillWindow.x = Moghunter.bhud_skill_x;
	this._skillWindow.y = Moghunter.bhud_skill_y;
	this._skillWindow.org = [Moghunter.bhud_skill_x,Moghunter.bhud_skill_y];
	this._skillWindow.org2 = [
	     this._skillWindow.org[0] + Moghunter.bhud_skill_slide_x,
		 this._skillWindow.org[1] + Moghunter.bhud_skill_slide_y
	];
	this._skillWindow.slide = Moghunter.bhud_skill_slide_x === 0 && Moghunter.bhud_skill_slide_y === 0 ? false : true;
	this._skillWindow.vis = this._skillWindow.visible;
	this._skillWindow.width = Moghunter.bhud_skill_width;
	this._skillWindow.height = REM_BHD_SKILL_HEIGHT;
	if (String(Moghunter.bhud_skill_layout) === "true") {this._skillWindow.opacity = 0};
	// ITEM COMMAND ---------------------------------------------------------------------
	this._itemWindow.x = Moghunter.bhud_item_x;
	this._itemWindow.y = Moghunter.bhud_item_y;
	this._itemWindow.org = [this._itemWindow.x,this._itemWindow.y];
	this._itemWindow.org2 = [
	     this._itemWindow.org[0] + Moghunter.bhud_item_slide_x,
		 this._itemWindow.org[1] + Moghunter.bhud_item_slide_y
	];
	this._itemWindow.slide = Moghunter.bhud_item_slide_x === 0 && Moghunter.bhud_item_slide_y === 0 ? false : true;
	this._itemWindow.vis = this._itemWindow.visible;
	this._itemWindow.width = Moghunter.bhud_item_width;
	this._itemWindow.height = Moghunter.bhud_item_height;	
	if (String(Moghunter.bhud_item_layout) === "true") {this._itemWindow.opacity = 0};
	// ACTOR WINDOW ---------------------------------------------------------------------
	this._actorWindow.x = Moghunter.bhud_actor_x;
	this._actorWindow.y = Moghunter.bhud_actor_y;
	this._actorWindow.org = [this._actorWindow.x,this._actorWindow.y];
	this._actorWindow.org2 = [
	     this._actorWindow.org[0] + Moghunter.bhud_actor_slide_x,
		 this._actorWindow.org[1] + Moghunter.bhud_actor_slide_y
	];
	this._actorWindow.slide = Moghunter.bhud_actor_slide_x === 0 && Moghunter.bhud_actor_slide_y === 0 ? false : true;
	this._actorWindow.vis = this._actorWindow.visible;
	this._actorWindow.width = Moghunter.bhud_actor_width;
	this._actorWindow.height = Moghunter.bhud_actor_height;	
	if (String(Moghunter.bhud_actor_layout) === "true") {this._actorWindow.opacity = 0};
	// ENEMY WINDOW ---------------------------------------------------------------------
	this._enemyWindow.x = Moghunter.bhud_enemy_x;
	this._enemyWindow.y = Moghunter.bhud_enemy_y;
	this._enemyWindow.org = [Moghunter.bhud_enemy_x,Moghunter.bhud_enemy_y];
	this._enemyWindow.org2 = [
	     this._enemyWindow.org[0] + Moghunter.bhud_enemy_slide_x,
		 this._enemyWindow.org[1] + Moghunter.bhud_enemy_slide_y
	];
	this._enemyWindow.slide = Moghunter.bhud_enemy_slide_x === 0 && Moghunter.bhud_enemy_slide_y === 0 ? false : true;
	this._enemyWindow.vis = this._enemyWindow.visible;
	this._enemyWindow.width = Moghunter.bhud_enemy_width;
	this._enemyWindow.height = Moghunter.bhud_enemy_height;
	if (String(Moghunter.bhud_enemy_layout) === "true") {this._enemyWindow.opacity = 0};
};

//==============================
// ** create Layout Window 
//==============================
Scene_Battle.prototype.create_layout_window = function() {
	this._layoutField = new Sprite();
	this.addChild(this._layoutField);
	if (String(Moghunter.bhud_com_layout) === "true") {
		this._com_layout = new Sprite(ImageManager.loadBHud("Layout_Command"))
		this._com_layout.x = Moghunter.bhud_com_lay_x;
		this._com_layout.y = Moghunter.bhud_com_lay_y;
		this._com_layout.visible = false;
		this._layoutField.addChild(this._com_layout);
	};
	if (String(Moghunter.bhud_party_layout) === "true") {
		this._party_layout = new Sprite(ImageManager.loadBHud("Layout_Party"))
		this._party_layout.x = Moghunter.bhud_party_lay_x;
		this._party_layout.y = Moghunter.bhud_party_lay_y;
		this._party_layout.visible = false;
		this._layoutField.addChild(this._party_layout);
	};
	if (String(Moghunter.bhud_help_layout) === "true") {
		this._help_layout = new Sprite(ImageManager.loadBHud("Layout_Help"))
		this._help_layout.x = Moghunter.bhud_help_lay_x;
		this._help_layout.y = Moghunter.bhud_help_lay_y;
		this._help_layout.visible = false;
		this._layoutField.addChild(this._help_layout);
	};	
	if (String(Moghunter.bhud_skill_layout) === "true") {
		this._skill_layout = new Sprite(ImageManager.loadBHud("Layout_Skill"))
		this._skill_layout.x = Moghunter.bhud_skill_lay_x;
		this._skill_layout.y = Moghunter.bhud_skill_lay_y;
		this._skill_layout.visible = false;
		this._layoutField.addChild(this._skill_layout);
		
		//Rem
		if(TextManager.isEnglish)
			this._skill_layout_stamina = new Sprite(ImageManager.loadBHud("Layout_Skill_Stamina"));
		else if(TextManager.isJapanese)
			this._skill_layout_stamina = new Sprite(ImageManager.loadBHud("Layout_Skill_Stamina_jp"));
		this._skill_layout_stamina.x = Moghunter.bhud_skill_lay_x;
		this._skill_layout_stamina.y = Moghunter.bhud_skill_lay_y;
		this._skill_layout_stamina.visible = false;
		this._layoutField.addChild(this._skill_layout_stamina);
		if(TextManager.isEnglish)
			this._skill_layout_energy = new Sprite(ImageManager.loadBHud("Layout_Skill_Energy"));
		else if(TextManager.isJapanese)
			this._skill_layout_energy = new Sprite(ImageManager.loadBHud("Layout_Skill_Energy_jp"));
		this._skill_layout_energy.x = Moghunter.bhud_skill_lay_x;
		this._skill_layout_energy.y = Moghunter.bhud_skill_lay_y;
		this._skill_layout_energy.visible = false;
		this._layoutField.addChild(this._skill_layout_energy);
		if(TextManager.isEnglish)
			this._skill_layout_sexual = new Sprite(ImageManager.loadBHud("Layout_Skill_Sexual"));
		else if(TextManager.isJapanese)
			this._skill_layout_sexual = new Sprite(ImageManager.loadBHud("Layout_Skill_Sexual_jp"));
		this._skill_layout_sexual.x = Moghunter.bhud_skill_lay_x;
		this._skill_layout_sexual.y = Moghunter.bhud_skill_lay_y;
		this._skill_layout_sexual.visible = false;
		this._layoutField.addChild(this._skill_layout_sexual);
		if(TextManager.isEnglish)
			this._skill_layout_willpower = new Sprite(ImageManager.loadBHud("Layout_Skill_Willpower"));
		else if(TextManager.isJapanese)
			this._skill_layout_willpower = new Sprite(ImageManager.loadBHud("Layout_Skill_Willpower_jp"));
		this._skill_layout_willpower.x = Moghunter.bhud_skill_lay_x;
		this._skill_layout_willpower.y = Moghunter.bhud_skill_lay_y;
		this._skill_layout_willpower.visible = false;
		this._layoutField.addChild(this._skill_layout_willpower);
		if(TextManager.isEnglish)
			this._skill_layout_special = new Sprite(ImageManager.loadBHud("Layout_Skill_Special"));
		else if(TextManager.isJapanese)
			this._skill_layout_special = new Sprite(ImageManager.loadBHud("Layout_Skill_Special_jp"));
		this._skill_layout_special.x = Moghunter.bhud_skill_lay_x;
		this._skill_layout_special.y = Moghunter.bhud_skill_lay_y;
		this._skill_layout_special.visible = false;
		this._layoutField.addChild(this._skill_layout_special);
		
		
	};
	if (String(Moghunter.bhud_item_layout) === "true") {
		this._item_layout = new Sprite(ImageManager.loadBHud("Layout_Item"))
		this._item_layout.x = Moghunter.bhud_item_lay_x;
		this._item_layout.y = Moghunter.bhud_item_lay_y;
		this._item_layout.visible = false;
		this._layoutField.addChild(this._item_layout);
	};		
	if (String(Moghunter.bhud_actor_layout) === "true") {
		this._actor_layout = new Sprite(ImageManager.loadBHud("Layout_Actor"))
		this._actor_layout.x = Moghunter.bhud_actor_lay_x;
		this._actor_layout.y = Moghunter.bhud_actor_lay_y;
		this._actor_layout.visible = false;
		this._layoutField.addChild(this._actor_layout);
	};
	if (String(Moghunter.bhud_enemy_layout) === "true") {
		this._enemy_layout = new Sprite(ImageManager.loadBHud("Layout_Enemy"))
		this._enemy_layout.x = Moghunter.bhud_enemy_lay_x;
		this._enemy_layout.y = Moghunter.bhud_enemy_lay_y;
		this._enemy_layout.visible = false;
		this._layoutField.addChild(this._enemy_layout);
	};	
};

//==============================
// ** update
//==============================
var _alias_mog_bhud_scnbattle_update = Scene_Battle.prototype.update
Scene_Battle.prototype.update = function() {
    _alias_mog_bhud_scnbattle_update.call(this);
	this.updateBattleHud();
};

//==============================
// ** update Battle Hud
//==============================
Scene_Battle.prototype.updateBattleHud = function() {
	if ($gameTemp._forceCreateBattleHud) {this.forceCreateBattleHud()};
	if ($gameTemp._forceRemoveBattleHud) {this.forceRemoveBattleHud()};	
	if (this._screen_layout) {this.updateBattleHudVisible()};
	this.updateWindowSlideEffect()
	this.updateLayoutWindow();
	if (this._actorSprites) {this.updateActors()};
};

//==============================
// ** slideWindow
//==============================
Scene_Battle.prototype.slideWindow = function(win,vmode) {
	 var vm = vmode ? win.active : win.visible;
	 if (vm) {
	     var np = [win.org[0],win.org[1]];
		 win.contentsOpacity += 15;	
	 } else {
	     var np = [win.org2[0],win.org2[1]];
		 win.contentsOpacity = 0;	
	 };
	 win.x = this.sprite_move_to(win.x,np[0]);
	 win.y = this.sprite_move_to(win.y,np[1]);	
};

//==============================
// ** updateWindowSlideEffect
//==============================
Scene_Battle.prototype.updateWindowSlideEffect = function() {
	if (this._partyCommandWindow.slide) {this.slideWindow(this._partyCommandWindow,true)};
	if (this._helpWindow.slide) {this.slideWindow(this._helpWindow,false)};
	if (this._skillWindow.slide){this.slideWindow(this._skillWindow,false)};
	if (this._itemWindow.slide) {this.slideWindow(this._itemWindow,false)};
	if (this._actorWindow.slide){this.slideWindow(this._actorWindow,false)};
	if (this._enemyWindow.slide) {this.slideWindow(this._enemyWindow,false)};
};	 
	 
//==============================
// ** updateLayoutWindows
//==============================
Scene_Battle.prototype.updateLayoutWindow = function() {
	if (this._com_layout) {
    	this._com_layout.x = Moghunter.bhud_com_lay_x + this._actorCommandWindow.x;
    	this._com_layout.y = Moghunter.bhud_com_lay_y + this._actorCommandWindow.y;
    	this._com_layout.visible = this._actorCommandWindow.isOpenAndActive();
		this._com_layout.opacity = this._actorCommandWindow.contentsOpacity;
		if (!this._actorCommandWindow.visible) {this._com_layout.visible = false};
    };	
	if (this._party_layout) {
    	this._party_layout.x = Moghunter.bhud_party_lay_x + this._partyCommandWindow.x;
    	this._party_layout.y = Moghunter.bhud_party_lay_y + this._partyCommandWindow.y;
    	this._party_layout.visible = this._partyCommandWindow.isOpenAndActive();
		this._party_layout.opacity = this._partyCommandWindow.contentsOpacity;
		if (!this._partyCommandWindow.visible) {this._party_layout.visible = false};
    };
	if (this._help_layout) {
    	this._help_layout.x = Moghunter.bhud_help_lay_x + this._helpWindow.x;
    	this._help_layout.y = Moghunter.bhud_help_lay_y + this._helpWindow.y;
    	this._help_layout.visible = this._helpWindow.visible;
		this._help_layout.opacity = this._helpWindow.contentsOpacity;		
    };	
	if (this._skill_layout) {
		//Rem
    	this._skill_layout.x = Moghunter.bhud_skill_lay_x + this._skillWindow.x;
    	this._skill_layout.y = Moghunter.bhud_skill_lay_y + this._skillWindow.y;
		this._skill_layout_stamina.x = Moghunter.bhud_skill_lay_x + this._skillWindow.x;
    	this._skill_layout_stamina.y = Moghunter.bhud_skill_lay_y + this._skillWindow.y;
		this._skill_layout_sexual.x = Moghunter.bhud_skill_lay_x + this._skillWindow.x;
    	this._skill_layout_sexual.y = Moghunter.bhud_skill_lay_y + this._skillWindow.y;
		this._skill_layout_energy.x = Moghunter.bhud_skill_lay_x + this._skillWindow.x;
    	this._skill_layout_energy.y = Moghunter.bhud_skill_lay_y + this._skillWindow.y;
		this._skill_layout_willpower.x = Moghunter.bhud_skill_lay_x + this._skillWindow.x;
    	this._skill_layout_willpower.y = Moghunter.bhud_skill_lay_y + this._skillWindow.y;
		this._skill_layout_special.x = Moghunter.bhud_skill_lay_x + this._skillWindow.x;
    	this._skill_layout_special.y = Moghunter.bhud_skill_lay_y + this._skillWindow.y;
		
    	//this._skill_layout.visible = this._skillWindow.isOpenAndActive();
		//this._skill_layout.opacity = this._skillWindow.contentsOpacity;
		
		if(this._skillWindow.isOpenAndActive()) {
			var stypeId = this._skillWindow._stypeId;
			
			if(stypeId === SKILLTYPE_WILLPOWER_ID) {
				this._skill_layout_willpower.visible = true;
				this._skill_layout_willpower.opacity = this._skillWindow.contentsOpacity;
			}
			else if(stypeId === SKILLTYPE_ATTACK_ID) {
				this._skill_layout_stamina.visible = true;
				this._skill_layout_stamina.opacity = this._skillWindow.contentsOpacity;
			}
			else if(stypeId === SKILLTYPE_SEXUAL_ID || stypeId === SKILLTYPE_MASTURBATE_COUCH_ID || stypeId === SKILLTYPE_MASTURBATE_INBATTLE_ID || stypeId === SKILLTYPE_TOILET_ID) {
				this._skill_layout_sexual.visible = true;
				this._skill_layout_sexual.opacity = this._skillWindow.contentsOpacity;
			}
			else if(stypeId === SKILLTYPE_ENERGY_ID) {
				this._skill_layout_energy.visible = true;
				this._skill_layout_energy.opacity = this._skillWindow.contentsOpacity;
			}
			else if(stypeId === SKILLTYPE_OFFBALANCE_ID || stypeId === SKILLTYPE_FALLEN_ID || stypeId === SKILLTYPE_DISARMED_ID || stypeId === SKILLTYPE_WAITRESS_ID || stypeId === SKILLTYPE_BARTENDER_ID || stypeId === SKILLTYPE_RECEPTIONIST_ID || stypeId === SKILLTYPE_STRIPPER_ID || stypeId === SKILLTYPE_INTERMISSION_ID) {
				this._skill_layout_special.visible = true;
				this._skill_layout_special.opacity = this._skillWindow.contentsOpacity;
			}
			else {
				this._skill_layout.visible = true;
				this._skill_layout.opacity = this._skillWindow.contentsOpacity;
			}
		}
		
		if (!this._skillWindow.visible) {
			this._skill_layout.visible = false;
			this._skill_layout_stamina.visible = false;
			this._skill_layout_sexual.visible = false;
			this._skill_layout_energy.visible = false;
			this._skill_layout_willpower.visible = false;
			this._skill_layout_special.visible = false;
		};
    };	
	if (this._item_layout) {
    	this._item_layout.x = Moghunter.bhud_item_lay_x + this._itemWindow.x;
    	this._item_layout.y = Moghunter.bhud_item_lay_y + this._itemWindow.y;
    	this._item_layout.visible = this._itemWindow.isOpenAndActive();
		this._item_layout.opacity = this._itemWindow.contentsOpacity;
		if (!this._itemWindow.visible) {this._item_layout.visible = false};
    };	
	if (this._actor_layout) {
    	this._actor_layout.x = Moghunter.bhud_actor_lay_x + this._actorWindow.x;
    	this._actor_layout.y = Moghunter.bhud_actor_lay_y + this._actorWindow.y;
    	this._actor_layout.visible = this._actorWindow.isOpenAndActive();
		this._actor_layout.opacity = this._actorWindow.contentsOpacity;
		if (!this._actorWindow.visible) {this._actor_layout.visible = false};
    };	
	if (this._enemy_layout) {
    	this._enemy_layout.x = Moghunter.bhud_enemy_lay_x + this._enemyWindow.x;
    	this._enemy_layout.y = Moghunter.bhud_enemy_lay_y + this._enemyWindow.y;
    	this._enemy_layout.visible = this._enemyWindow.isOpenAndActive();
		this._enemy_layout.opacity = this._enemyWindow.contentsOpacity;
		if (!this._enemyWindow.visible) {this._enemy_layout.visible = false};
    };		
};

//==============================
// * Sprite Move To
//==============================
Scene_Battle.prototype.sprite_move_to = function(value,real_value) {
	if (value === real_value) {return value};
	var dnspeed = 1 + (Math.abs(value - real_value) / 12);
	if (value > real_value) {value -= dnspeed;
	    if (value < real_value) {value = real_value};}
    else if (value < real_value) {value  += dnspeed;
    	if (value  > real_value) {value  = real_value};		
    };
	return Math.floor(value);
};

//=============================================================================
// * Battle_Hud
//=============================================================================
function Battle_Hud() {
    this.initialize.apply(this, arguments);
};

Battle_Hud.prototype = Object.create(Sprite.prototype);
Battle_Hud.prototype.constructor = Battle_Hud;

//==============================
// * Initialize
//==============================
Battle_Hud.prototype.initialize = function(hud_id) {
    Sprite.prototype.initialize.call(this);	
    this._data_initial_ref = [0,true];
	this._hud_id = hud_id;
	this._slideA = [0,Moghunter.bhud_slideX,Moghunter.bhud_slideY];
	if (this._slideA[1] != 0 || this._slideA[2] != 0) {this._slideA[0] = this._hud_id * 10};
	this.x = this._slideA[1];
	this.y = this._slideA[2];
	this._hud_size = [0,0];
    this.base_parameter_clear();
    this.load_img();
	this.opacity = 0;
	$gameTemp._bhud_position_active = null;
	$gameTemp._battleEnd = false;
};

//==============================
// * Load Img
//==============================
Battle_Hud.prototype.load_img = function() {
	if(DEBUG_MODE) {
		if(ConfigManager.displayPleasureAsPercent)
			this._layout_img = ImageManager.loadBHud("Layout_Stats_YesPercent");
		else {
			this._layout_img = ImageManager.loadBHud("Layout_Stats_NoPercent");
		}
	}
	else
		this._layout_img = ImageManager.loadBHud("Layout_Stats_Steam");
	
	
	if (String(Moghunter.bhud_layoverlay_visible) == "true") {this._layout2_img = ImageManager.loadBHud("Layout2");};
	this._turn_img = ImageManager.loadBHud("Turn");
	this._state_img = ImageManager.loadSystem("IconSet");
	if(TextManager.isEnglish) this._state_language_img = ImageManager.loadSystem("IconSet_Language_EN");
	else if(TextManager.isJapanese) this._state_language_img = ImageManager.loadSystem("IconSet_Language_JP");
	this._hp_meter_img = ImageManager.loadBHud("HP_Meter");
	this._mp_meter_img = ImageManager.loadBHud("MP_Meter");
	this._wp_meter_img = ImageManager.loadBHud("WP_Meter");
	this._desire_meter_img = ImageManager.loadBHud("Desire_Meter");
	this._tp_meter_img = ImageManager.loadBHud("TP_Meter");
	if (String(Moghunter.bhud_at_meter_visible) == "true") {this._at_meter_img = ImageManager.loadBHud("ATB_Meter");};
	if (String(Moghunter.bhud_hp_number_visible) == "true") {this._hp_number_img = ImageManager.loadBHud("HP_Number");};
	if (String(Moghunter.bhud_mp_number_visible) == "true") {this._mp_number_img = ImageManager.loadBHud("MP_Number");};
	if (String(Moghunter.bhud_mp_number_visible) == "true") {this._wp_number_img = ImageManager.loadBHud("WP_Number");};
	if (String(Moghunter.bhud_tp_number_visible) == "true") {this._tp_number_img = ImageManager.loadBHud("TP_Number");};
	if (String(Moghunter.bhud_maxhp_number_visible) == "true") {this._maxhp_number_img = ImageManager.loadBHud("HP_Number2");};
	if (String(Moghunter.bhud_maxmp_number_visible) == "true") {this._maxmp_number_img = ImageManager.loadBHud("MP_Number2");};
	if (String(Moghunter.bhud_maxtp_number_visible) == "true") {this._maxtp_number_img = ImageManager.loadBHud("TP_Number2");};	
	
	this._desire_number_img = ImageManager.loadBHud("Desire_Number");
	
	//Add if japanese etc
	if(TextManager.isEnglish) {
		if(DEBUG_MODE) 
			this._en_text_img = ImageManager.loadBHud("En_Text");
		else
			this._en_text_img = ImageManager.loadBHud("En_Text_Steam");
	}
	else if(TextManager.isJapanese) {
		if(DEBUG_MODE) 
			this._en_text_img = ImageManager.loadBHud("Jp_Text");
		else
			this._en_text_img = ImageManager.loadBHud("Jp_Text_Steam");
	}
};

//==============================
// * Base Parameter Clear
//==============================
Battle_Hud.prototype.base_parameter_clear = function() {
 	 this._hp_old = [-1,-1];
	 this._maxhp_old = [-1,-1];
	 this._hp_old_ani = [-1,-1];
	 this._hp_flow = [false,0,0,0];
     this._mp_old = [-1,-1];
	 this._maxmp_old = [-1,-1];
	 this._mp_old_ani = [-1,-1];
	 this._mp_flow = [false,0,0,0];
	 
	 this._wp_old = [-1,-1];
	 this._maxwp_old = [-1,-1];
	 this._wp_old_ani = [-1,-1];
	 this._wp_flow = [false,0,0,0];
	 
	 this._cock_desire_old = [-1,-1];
	 this._cock_desire_old_ani = [-1,-1];
	 this._mouth_desire_old = [-1,-1];
	 this._mouth_desire_old_ani = [-1,-1];
	 this._boobs_desire_old = [-1,-1];
	 this._boobs_desire_old_ani = [-1,-1];
	 this._pussy_desire_old = [-1,-1];
	 this._pussy_desire_old_ani = [-1,-1];
	 this._butt_desire_old = [-1,-1];
	 this._butt_desire_old_ani = [-1,-1];
	 
	 this._tp_old = [-1,-1];
	 this._maxtp_old = [-1,-1];
	 this._tp_old_ani = -1;
	 this._tp_flow = [false,0,0,0];
	 this._at_flow = [false,0,0,0];
	 this._hp_number_old = -1;
	 this._mp_number_old = -1;
	 this._hp_number_old = -1;
	 this._number_align = [];
	 this._number_align[0] = Moghunter.bhud_hp_align_type;
	 this._number_align[1] = Moghunter.bhud_mp_align_type;
	 this._number_align[2] = Moghunter.bhud_tp_align_type;
	 this._diagonal_number = [];
	 this._diagonal_number[0] = Moghunter.bhud_hp_diagonal_number;
	 this._diagonal_number[1] = Moghunter.bhud_mp_diagonal_number;
	 this._diagonal_number[2] = Moghunter.bhud_tp_diagonal_number;
	 this._hp_img_data = [0,0,0];
	 this._mp_img_data = [0,0,0];
	 this._tp_img_data = [0,0,0];
	 this._states_old = [];
	 this._states_data = [0,0,0];
	 this._active = false;
	 this._hud_size = [0,0];
};

//==============================
// * Need Refresh Bhud
//==============================
Battle_Hud.prototype.need_refreh_bhud = function() {
	if (this._data_initial_ref[1]) {return true};
	if (this._battler != $gameParty.battleMembers()[this._hud_id]) {return true};
	return false;
};

//==============================
// * Refresh Bhud
//==============================
Battle_Hud.prototype.refresh_bhud = function() {
	 this._data_initial_ref[1] = false;
	 this._battler = $gameParty.battleMembers()[this._hud_id];
	 this.opacity = 0;
	 this._hud_size = [0,0];
	 this.base_parameter_clear();
	 this.create_base_sprites();
};

//==============================
// * Refresh Position
//==============================
Battle_Hud.prototype.refresh_position = function() {
	 this.set_hud_position();	      
	 this.create_sprites();
 	 this._layout.x = this._pos_x;
	 this._layout.y = this._pos_y;
	 this._hud_text.x = this._pos_x;
	 this._hud_text.y = this._pos_y;
	 if (this._face) {
     	 this._face.x = this._pos_x + Moghunter.bhud_face_pos_x;
 	     this._face.y = this._pos_y + Moghunter.bhud_face_pos_y;
     };
	 if (this._turn) {
        this._turn.x = this._pos_x + (this._turn.width / 2) + Moghunter.bhud_turn_pos_x;
	    this._turn.y = this._pos_y + (this._turn.height / 2) + Moghunter.bhud_turn_pos_y;
	 };
	 if (this._layout2) { 
	  	 this._layout2.x = this._pos_x + Moghunter.bhud_layoverlay_x;
	     this._layout2.y = this._pos_y + Moghunter.bhud_layoverlay_y;
     };
	 if (this._face) {this._battler._face_pos = [this._face.x,this._face.y]}; 
};

//==============================
// * Set Hud Position
//==============================
Battle_Hud.prototype.set_hud_position = function() {
   	 this._hud_size = [this._layout.bitmap.width,this._layout.bitmap.height];
	 this._members_max = $gameParty.battleMembers().length;
	 var ps = [Number(Moghunter.bhud_space_x) * this._hud_id,
                Number(Moghunter.bhud_space_y) * this._hud_id];
	 if ($gameSystem._bhud_position[this._hud_id]) {
	     this._pos_x = $gameSystem._bhud_position[this._hud_id][0];
		 this._pos_y = $gameSystem._bhud_position[this._hud_id][1];
	 }
	 else {
		if (Number($gameSystem._bhud_pos_mode) === 0) {
			var spc = ((Graphics.boxWidth - 14) / this._members_max);
			var px = (spc / 2) + (spc * this._hud_id);
			this._pos_x = Moghunter.bhud_pos_x + px + ps[0];
			this._pos_y = Moghunter.bhud_pos_y + ps[1];
		}
		else {
			var py = (this._hud_size[1] + 5) * this._hud_id;
			this._pos_x = Moghunter.bhud_pos_x + ps[0];
			this._pos_y = Moghunter.bhud_pos_y + py + ps[1];
		};
     };
	 $gameTemp._bhud_position[this._hud_id] = [this._pos_x,this._pos_y];

		
};

//==============================
// * Update
//==============================
Battle_Hud.prototype.update = function() {
    Sprite.prototype.update.call(this);	
	if (this._data_initial_ref[0] < 2) {this._data_initial_ref[0] += 1; return};
	if (this.need_refreh_bhud()) {this.refresh_bhud()};
    if (!this._battler) {return};
	if (!this._layout.bitmap.isReady()) {return};
	if (this._hud_size[0] === 0) {this.refresh_position();return};
	this.update_sprites();
	this.updateSlide();
};

//==============================
// * Update Slide
//==============================
Battle_Hud.prototype.updateSlide = function() {
	 if (!this.is_hud_visible()) {return}; 
	 if (this._slideA[0] > 0) {
		 this.visible = false;
		 this.opacity = 0;
		 this._slideA[0]--;
	     return;
	 };
	 this.visible = true;
	 this.x = this.update_dif(this.x,0,20);
	 this.y = this.update_dif(this.y,0,20);
};

//==============================
// * Create Base Sprites
//==============================
Battle_Hud.prototype.create_base_sprites = function() {
	this.create_turn();
	if (Number(Moghunter.bhud_face_priority) === 0) {
   	    this.create_face();
	    this.create_layout();}
	else {
		this.create_layout();
   	    this.create_face();	    		
    };
};

//==============================
// * Create Sprites
//==============================
Battle_Hud.prototype.create_sprites = function() {
	this.create_hp_meter();
	this.create_mp_meter();
	this.create_wp_meter();
	this.create_desire_meter();
    this.create_tp_meter();
	this.create_at_meter();	
	if (String(Moghunter.bhud_layoverlay_visible) == "true") {this.create_layoutOverlay()};
	this.create_hp_number();	
	this.create_maxhp_number();
	this.create_mp_number();	
    this.create_maxmp_number();
	this.create_wp_number();
 	this.create_tp_number();
	this.create_maxtp_number();
	this.create_desire_number();
	this._stateType = Number(Moghunter.bhud_statesType);
	if (this._stateType === 0) {
        this.create_states();
	} else { 
	    this.create_states2();
	};
	this.create_name();
	this.create_hud_text();
};

//==============================
// * Update Sprites
//==============================
Battle_Hud.prototype.update_sprites = function() {	
    this.update_active();
	this.update_visible();
	this.update_turn();
	this.update_face();	
    this.update_hp();
	this.update_mp();
	this.update_wp();
	this.update_desire();
    this.update_tp();
	this.update_at();	 
    if (this._state_icon) {
		if (this._stateType === 0) {
 		     this.update_states();
		} else {
			 this.update_states2();
		};
	};
};

//==============================
// * Update Active
//==============================
Battle_Hud.prototype.update_active = function() {	
   this._active = false
   if (this.isChronoBattle()) {
	   if (this._battler == $gameTemp._chronoCom.user[1]) {
		   this._active = true;
		   $gameTemp._bhud_position_active = $gameTemp._bhud_position[this._hud_id]
	   };   
   
   } else {
	   if (this._battler == BattleManager.actor()) {
		   this._active = true;
		   $gameTemp._bhud_position_active = $gameTemp._bhud_position[this._hud_id]
	   };
   };
};

//==============================
// * is Chrono Battle
//==============================
Battle_Hud.prototype.isChronoBattle = function() {
	if (!Imported.MOG_ChronoEngine) {return false};
	if (!$gameSystem.isChronoMode()) {return false};
	if (!$gameTemp._chronoCom.user) {return false};
	return true;
};


//==============================
// * Update visible
//==============================
Battle_Hud.prototype.update_visible = function(sprite) {
	if (this.is_hud_visible()) {this.opacity += 10}	 
	else {this.opacity -= 10};
};

//==============================
// * Is Hud Visible
//==============================
Battle_Hud.prototype.is_hud_visible = function(sprite) {
	//if ($gameMessage.isBusy()) {return false};
	if ($gameTemp._battleEnd) {return false};
	if (!$gameSystem._bhud_visible) {return false};
	if (Imported.MOG_ChronoEngine) {
	    if ($gameSystem._chronoMode.phase > 3 && $gameSystem._chronoMode.phaseEndPhaseDuration === 0) {return false}
	};
	return true
};

//==============================
// * Update Dif
//==============================
Battle_Hud.prototype.update_dif = function(value,real_value,speed) {
	if (value == real_value) {return value};
	var dnspeed = 1 + (Math.abs(value - real_value) / speed);
	if (value > real_value) {value -= dnspeed;
	    if (value < real_value) {value = real_value};}
    else if (value < real_value) {value  += dnspeed;
    	if (value  > real_value) {value  = real_value};		
    };
	return Math.floor(value);
};

//==============================
// * Refresh Meter
//==============================
Battle_Hud.prototype.refresh_meter = function(sprite,value,value_max,type) {
	var ch = sprite.bitmap.height / 2;
	var value_over_max = Math.min(value / value_max, 1);
    var meter_rate = sprite.bitmap.width * value_over_max;
	sprite.setFrame(0,type * ch, meter_rate, ch);
};

//==============================
// * Refresh Flow
//==============================
Battle_Hud.prototype.refresh_meter_flow = function(sprite,value,value_max,type,flow) {
	var cw = sprite.bitmap.width / 3;
	var ch = sprite.bitmap.height / 2;
    var meter_rate = cw * value / value_max;
	sprite.setFrame(flow,type * ch, meter_rate, ch);
};

//==============================
// * Refresh Number
//==============================
Battle_Hud.prototype.refresh_number = function(sprites,value,img_data,x,y,type) {
    numbers = Math.abs(value).toString().split("");  
	var nx = 0;
	var ny = 0;
	var dir = 1;
   	for (var i = 0; i < sprites.length ; i++) {
	   sprites[i].visible = false;
	   if (i > numbers.length) {return};
	   var n = Number(numbers[i]);
	   sprites[i].setFrame(n * img_data[2], 0, img_data[2], img_data[1]);
	   sprites[i].visible = true;	
	   if (this._number_align[type] === 0) {
            var nx = -(img_data[2] * i) + (img_data[2] * numbers.length);
	   } else if (this._number_align[type] === 1) {
	        var nx = -(img_data[2] * i) + ((img_data[2] / 2) * numbers.length);
	   } else if (this._number_align[type] === 2) {
	        var nx = -(img_data[2] * i);
	   } else if (this._number_align[type] === 3) {
		  var nx = -(img_data[2] * i);
	      var ny = (img_data[3] * i);				
	   } else {
	      var nx = -(img_data[2] * i) + (img_data[2] * numbers.length);
	      var ny = (img_data[3] / 2) * dir;		  
	   };
	   sprites[i].x = x - nx;
	   sprites[i].y = y - ny;
	   dir = dir === 0 ? 1 : 0;
    };
};

//==============================
// * Need Refresh Parameter
//==============================
Battle_Hud.prototype.need_refresh_parameter = function(parameter) {
  switch (parameter) {
  	case 0:
         if (this._hp_old[0] != this._battler.hp) {return true};
		 if (this._hp_old[1] != this._battler.mhp) {return true};
         break;
  	case 1:
         if (this._mp_old[0] != this._battler.mp) {return true};
		 if (this._mp_old[1] != this._battler.mmp) {return true};
         break;			
  	case 2:
         if (this._tp_old[0] != this._battler.tp) {return true};
		 if (this._tp_old[1] != this._battler.orgasmPoint()) {return true};
         break;	
	case 3:	
         if (this._wp_old[0] != this._battler.will) {return true};
		 if (this._wp_old[1] != this._battler.maxwill) {return true};
         break;		
	case 4:	
         if (this._cock_desire_old[0] != this._battler.cockDesire) {return true};
		 if (this._cock_desire_old[1] != this._battler.maxCockDesire) {return true};
         break;	
	case 5:	
         if (this._mouth_desire_old[0] != this._battler.mouthDesire) {return true};
		 if (this._mouth_desire_old[1] != this._battler.maxMouthDesire) {return true};
         break;	
	case 6:	
         if (this._boobs_desire_old[0] != this._battler.boobsDesire) {return true};
		 if (this._boobs_desire_old[1] != this._battler.maxBoobsDesire) {return true};
         break;	
	case 7:	
         if (this._pussy_desire_old[0] != this._battler.pussyDesire) {return true};
		 if (this._pussy_desire_old[1] != this._battler.maxPussyDesire) {return true};
         break;	
	case 8:	
         if (this._butt_desire_old[0] != this._battler.buttDesire) {return true};
		 if (this._butt_desire_old[1] != this._battler.maxButtDesire) {return true};
         break;			 
  };
  return false;
};

//==============================
// * Create Layout
//==============================
Battle_Hud.prototype.create_layout = function() {
	this.removeChild(this._layout);
	if (!this._battler) {return};
	this._layout = new Sprite(this._layout_img);
	this.addChild(this._layout);
};

//==============================
// * Create Layout Overlay
//==============================
Battle_Hud.prototype.create_layoutOverlay = function() {
	this.removeChild(this._layout2);
	if (!this._battler) {return};
	this._layout2 = new Sprite(this._layout2_img);
	//this.addChild(this._layout2);
};

//==============================
// * Create Turn
//==============================
Battle_Hud.prototype.create_turn = function() {
	if (String(Moghunter.bhud_turn_visible) != "true") {return};
	this.removeChild(this._turn);	
	if (!this._battler) {return};
	this._turn = new Sprite(this._turn_img);
	this._turn.anchor.x = 0.5;
	this._turn.anchor.y = 0.5;
	this._turn.rt = Number(Moghunter.bhud_turn_rotation);
	this._turn.zt = String(Moghunter.bhud_turn_zoom) === "true" ? true : false;
	this._turn.vis = this._turn.visible;
	this._turn_blink = [0,0];
	this.addChild(this._turn);
};
	
//==============================
// * Update Turn
//==============================
Battle_Hud.prototype.update_turn = function() {
	if (!this._turn) {return};
    if (!this._active) {this._turn.visible = false;return;};
	if (this._turn.rt != 0) {this._turn.rotation += this._turn.rt};
	if (this._turn.zt) {this.updateTurnZoom()};
	this._turn.visible = true;
	this._turn_blink[0] += 1
	if (this._turn_blink[0] < 60) {this._turn_blink[1] += 2}
	else if (this._turn_blink[0] < 120) {this._turn_blink[1] -= 2}
	else {this._turn_blink = [0,0]};
	this._turn.opacity = 135 + this._turn_blink[1]
};	

//==============================
// * Update Turn Zoom
//==============================
Battle_Hud.prototype.updateTurnZoom = function() {
	if (this._turn.vis != this._turn.visible) {
		this._turn.vis = this._turn.visible;
		this._turn.scale.x = 1.50;
		this._turn.scale.y = this._turn.scale.x;
	};
	if (this._turn.scale.x > 0) {
		this._turn.scale.x -= 0.04;
		if (this._turn.scale.x <= 1.00) {this._turn.scale.x = 1.00};
	};
	this._turn.scale.y = this._turn.scale.x;
};
	
	
//==============================
// * Create Face
//==============================
Battle_Hud.prototype.create_face = function() {
	if (String(Moghunter.bhud_face_visible) != "true") {return};
	this.removeChild(this._face);
	if (!this._battler) {return};	
	
	this._face = new Sprite(ImageManager.loadBHud("Face_" + this._battler._actorId));
	this._face.anchor.x = 0.5;
	this._face.anchor.y = 0.5;

	
	this._face_data = [0,0,false,false,false,-1];
	if (String(Moghunter.bhud_face_shake) === "true") {this._face_data[2] = true}
	if (String(Moghunter.bhud_face_animated) === "true") {this._face_data[4] = true}
	this._battler._bhud_face_data = [0,0,0,0]
	this.addChild(this._face);
};

//==============================
// * Update Face
//==============================

Battle_Hud.prototype.update_face = function() {
	if (!this._face) {return};
	if (!this._face.bitmap.isReady()) {return};
	if (this._face_data[4] && this._face_data[5] != this._battler._bhud_face_data[2]) {this.refresh_face();};
    this.update_face_animation();
    this.update_face_shake();
    this.update_face_zoom();
};

//==============================
// * Refresh Face
//==============================
Battle_Hud.prototype.refresh_face = function() {
	this._face_data[5] = this._battler._bhud_face_data[2];
	var cw = this._face.bitmap.width / 5;
	var ch = this._face.bitmap.height;
	this._face.setFrame(cw * this._face_data[5], 0, cw, ch);
};

//==============================

// * Update Face Animation
//==============================
Battle_Hud.prototype.update_face_animation = function() {
	if (this._battler._bhud_face_data[3] > 0) {this._battler._bhud_face_data[3] -= 1;
	    if (this._battler._bhud_face_data[3] === 0) {
			if (this._battler.isDead()) {this._battler._bhud_face_data[2] = 4}
			else if (this._battler.hp <= 30 * this._battler.mhp / 100) {this._battler._bhud_face_data[2] = 3}
			else {this._battler._bhud_face_data[2] = 0};
			};
	};
};

//==============================
// * Update Face Zoom
//==============================
Battle_Hud.prototype.update_face_zoom = function() {
	if (this._battler._bhud_face_data[1] > 0) {this._battler._bhud_face_data[1] -= 1;
	    if (this._battler._bhud_face_data[1] == 0) {this._face.scale.x = 1.00}
		else if (this._battler._bhud_face_data[1] < 20) {this._face.scale.x -= TachieZoomAnimationStep;
		         if (this._face.scale.x < 1.00) {this._face.scale.x = 1.00;};	
	    }
		else if (this._battler._bhud_face_data[1] < 40){this._face.scale.x += TachieZoomAnimationStep;
		        // if (this._face.scale.x > 1.25) {this._face.scale.x = 1.25;};
				if (this._face.scale.x > 1 + .25 * TachieSelectionBattlerScaling) {
					this._face.scale.x = 1 + .25 * TachieSelectionBattlerScaling;
				};
	    };
	    this._face.scale.y = this._face.scale.x;
	};
};

//==============================
// * Update Face Shake
//==============================
Battle_Hud.prototype.update_face_shake = function() {
	this._face.x = this._pos_x + Moghunter.bhud_face_pos_x;
	if (this._face_data[2] && this._battler._bhud_face_data[0] > 0) {this._battler._bhud_face_data[0] -= 1;
	    this._face.x = this._pos_x + Moghunter.bhud_face_pos_x + ((Math.random() * 12) - 6);
	}
	else if(this._face_data[2] && this._battler._bhud_face_data[0] < 0) {
		this._battler._bhud_face_data[0] += 1;
	    this._face.x = this._pos_x + Moghunter.bhud_face_pos_x + TachieEvadeAnimationDistance;
	}
};

//==============================
// * Create Name
//==============================
Battle_Hud.prototype.create_name = function() {
	if (String(Moghunter.bhud_name_visible) != "true") {return};
	this.removeChild(this._name);
	if (!this._battler) {return};	
	this._name = new Sprite(new Bitmap(200,48));
	this._name.x = this._pos_x + Moghunter.bhud_name_pos_x;
	this._name.y = this._pos_y + Moghunter.bhud_name_pos_y;
	this._name.bitmap.fontSize = Number(Moghunter.bhud_name_font_size);
	if (String(Moghunter.bhud_name_font_italic) === "true") {this._name.bitmap.fontItalic = true};

    this._name.bitmap.outlineWidth = Number(Moghunter.bhud_name_font_bold_size);
	this.addChild(this._name);	
	this.refresh_name();
};

//==============================
// * Refresh Name
//==============================
Battle_Hud.prototype.refresh_name = function() {
	this._name.bitmap.clear();
	var align = "left"
	if (Moghunter.bhud_name_align === 1) {
		var align = "center"
	} else if (Moghunter.bhud_name_align === 2) {
		var align = "right"
	};
	this._name.bitmap.drawText(this._battler._name, 0, 0, this._name.bitmap.width, this._name.bitmap.height,align);	
};

//==============================
// * Create HP Meter
//==============================
Battle_Hud.prototype.create_hp_meter = function() {
	if (String(Moghunter.bhud_hp_meter_visible) != "true") {return};
	this.removeChild(this._hp_meter_blue);
	this.removeChild(this._hp_meter_red);
	if (!this._battler) {return};
	this._hp_meter_red = new Sprite(this._hp_meter_img);
	this._hp_meter_red.x = this._pos_x + Moghunter.bhud_hp_meter_pos_x;
	this._hp_meter_red.y = this._pos_y + Moghunter.bhud_hp_meter_pos_y;
	this._hp_meter_red.rotation = Moghunter.bhud_hp_meter_rotation;
	this.addChild(this._hp_meter_red);		
	this._hp_meter_blue = new Sprite(this._hp_meter_img);
	this._hp_meter_blue.x = this._hp_meter_red.x;
	this._hp_meter_blue.y = this._hp_meter_red.y;
	this._hp_meter_blue.rotation = this._hp_meter_red.rotation;
	this.addChild(this._hp_meter_blue);
	if (String(Moghunter.bhud_hp_meter_flow) === "true") {this._hp_flow[0] = true;
	    this._hp_flow[2] = this._hp_meter_img.width / 3;
		this._hp_flow[3] = this._hp_flow[2] * 2;
		this._hp_flow[1] = Math.floor(Math.random() * this._hp_flow[2]);
	};
};

//==============================
// * Create HP Number
//==============================
Battle_Hud.prototype.create_hp_number = function() {
	if (String(Moghunter.bhud_hp_number_visible) != "true") {return};
	if (this._hp_number) {for (var i = 0; i < this._hp_number.length; i++) {this.removeChild(this._hp_number[i]);}};
	if (!this._battler) {return};
	this._hp_number = [];
	this._hp_img_data = [this._hp_number_img.width,this._hp_number_img.height,
	                      this._hp_number_img.width / 10, this._hp_number_img.height / 2,
						  this._pos_x + Moghunter.bhud_hp_number_pos_x,
						  this._pos_y + Moghunter.bhud_hp_number_pos_y,
						  ];
	for (var i = 0; i < 5; i++) {
	   this._hp_number[i] = new Sprite(this._hp_number_img);
	   this._hp_number[i].visible = false;
	   this._hp_number[i].x = this._hp_img_data[4];
	   this._hp_number[i].y = this._hp_img_data[5];
	   this.addChild(this._hp_number[i]);
	};	
	this._hp_number_old = this._battler.hp;
	this.refresh_number(this._hp_number,this._hp_number_old,this._hp_img_data,this._hp_img_data[4],this._hp_img_data[5],0);	
};

//==============================
// * Create maxHP Number
//==============================
Battle_Hud.prototype.create_maxhp_number = function() {
	if (String(Moghunter.bhud_maxhp_number_visible) != "true") {return};
	if (this._maxhp_number) {for (var i = 0; i < this._maxhp_number.length; i++) {this.removeChild(this._maxhp_number[i]);}};
	if (!this._battler) {return};	
	this._maxhp_number = [];
	this._maxhp_img_data = [this._maxhp_number_img.width,this._maxhp_number_img.height,
	                      this._maxhp_number_img.width / 10, this._maxhp_number_img.height / 2,
						  this._pos_x + Moghunter.bhud_maxhp_number_pos_x,
						  this._pos_y + Moghunter.bhud_maxhp_number_pos_y,
						  ];
	for (var i = 0; i < 5; i++) {
	   this._maxhp_number[i] = new Sprite(this._maxhp_number_img);
	   this._maxhp_number[i].visible = false;
	   this._maxhp_number[i].x = this._maxhp_img_data[4];
	   this._maxhp_number[i].y = this._maxhp_img_data[5];
	   this.addChild(this._maxhp_number[i]);
	};		
	this._maxhp_number_old = this._battler.mhp;
	this.refresh_number(this._maxhp_number,this._maxhp_number_old,this._maxhp_img_data,this._maxhp_img_data[4],this._maxhp_img_data[5],0);	
};

//==============================
// * Update HP
//==============================
Battle_Hud.prototype.update_hp = function() {
	if (this._hp_meter_blue) {
		if(this._hp_flow[0]) {
		   this.refresh_meter_flow(this._hp_meter_blue,this._battler.hp,this._battler.mhp,0,this._hp_flow[1]);
	   	   var dif_meter = this.update_dif(this._hp_old_ani[0],this._battler.hp,160);
		   if (this._hp_old_ani[0] != dif_meter) {this._hp_old_ani[0] = dif_meter;
	       this.refresh_meter_flow(this._hp_meter_red,this._hp_old_ani[0],this._battler.mhp,1,this._hp_flow[1]);
		   };
		   this._hp_flow[1] += 1.5;
		   if (this._hp_flow[1] > this._hp_flow[3]) {this._hp_flow[1] = 0};		   
   	    }
		else {
		   if (this.need_refresh_parameter(0)) {
				this.refresh_meter(this._hp_meter_blue,this._battler.hp,this._battler.mhp,0);
				this._hp_old = [this._battler.hp,this._battler.mhp];
			};
			var dif_meter = this.update_dif(this._hp_old_ani[0],this._battler.hp,160);
			if (this._hp_old_ani[0] != dif_meter) {this._hp_old_ani[0] = dif_meter;
			this.refresh_meter(this._hp_meter_red,this._hp_old_ani[0],this._battler.mhp,1);};		
	    };
    };
	if (this._hp_number) {
		var dif_number = this.update_dif(this._hp_number_old,this._battler.hp,30);
		if (this._hp_number_old != dif_number) {this._hp_number_old = dif_number;
		this.refresh_number(this._hp_number,this._hp_number_old,this._hp_img_data,this._hp_img_data[4],this._hp_img_data[5],0);};
	};
    if (this._maxhp_number) {
		if (this._maxhp_number_old != this._battler.mhp) {this._maxhp_number_old = this._battler.mhp;
		this.refresh_number(this._maxhp_number,this._maxhp_number_old,this._maxhp_img_data,this._maxhp_img_data[4],this._maxhp_img_data[5],0);};
	};
};

//==============================
// * Create MP Meter
//==============================
Battle_Hud.prototype.create_mp_meter = function() {
	if (String(Moghunter.bhud_mp_meter_visible) != "true") {return};
	this.removeChild(this._mp_meter_blue);
	this.removeChild(this._mp_meter_red);
	if (!this._battler) {return};
	this._mp_meter_red = new Sprite(this._mp_meter_img);
	this._mp_meter_red.x = this._pos_x + Moghunter.bhud_mp_meter_pos_x;
	this._mp_meter_red.y = this._pos_y + Moghunter.bhud_mp_meter_pos_y;
	this._mp_meter_red.rotation = Moghunter.bhud_mp_meter_rotation;
	this.addChild(this._mp_meter_red);		
	this._mp_meter_blue = new Sprite(this._mp_meter_img);
	this._mp_meter_blue.x = this._mp_meter_red.x;
	this._mp_meter_blue.y = this._mp_meter_red.y;
	this._mp_meter_blue.rotation = this._mp_meter_red.rotation;
	this.addChild(this._mp_meter_blue);
	if (String(Moghunter.bhud_mp_meter_flow) === "true") {this._mp_flow[0] = true;
	    this._mp_flow[2] = this._mp_meter_img.width / 3;
		this._mp_flow[3] = this._mp_flow[2] * 2;
		this._mp_flow[1] = Math.floor(Math.random() * this._mp_flow[2]);
	};
};

//==============================
// * Create MP Number
//==============================
Battle_Hud.prototype.create_mp_number = function() {
	if (String(Moghunter.bhud_mp_number_visible) != "true") {return};
	if (this._mp_number) {for (var i = 0; i < this._mp_number.length; i++) {this.removeChild(this._mp_number[i]);}};
	if (!this._battler) {return};
	this._mp_number = [];
	this._mp_img_data = [this._mp_number_img.width,this._mp_number_img.height,
	                      this._mp_number_img.width / 10, this._mp_number_img.height / 2,
						  this._pos_x + Moghunter.bhud_mp_number_pos_x,
						  this._pos_y + Moghunter.bhud_mp_number_pos_y,
						  ];
	for (var i = 0; i < 5; i++) {
	   this._mp_number[i] = new Sprite(this._mp_number_img);
	   this._mp_number[i].visible = false;
	   this._mp_number[i].x = this._mp_img_data[4];
	   this._mp_number[i].y = this._mp_img_data[5] ;
	   this.addChild(this._mp_number[i]);
	};	
	this._mp_number_old = this._battler.mp;
	this.refresh_number(this._mp_number,this._mp_number_old,this._mp_img_data,this._mp_img_data[4],this._mp_img_data[5],1);	
};

//==============================
// * Create MaxMP Number
//==============================
Battle_Hud.prototype.create_maxmp_number = function() {
	if (String(Moghunter.bhud_maxmp_number_visible) != "true") {return};
	if (this._maxmp_number) {for (var i = 0; i < this._maxmp_number.length; i++) {this.removeChild(this._maxmp_number[i]);}};
	if (!this._battler) {return};
	this._maxmp_number = [];
	this._maxmp_img_data = [this._maxmp_number_img.width,this._maxmp_number_img.height,
	                      this._maxmp_number_img.width / 10, this._maxmp_number_img.height / 2,
						  this._pos_x + Moghunter.bhud_maxmp_number_pos_x,
						  this._pos_y + Moghunter.bhud_maxmp_number_pos_y,
						  ];
	for (var i = 0; i < 5; i++) {
	   this._maxmp_number[i] = new Sprite(this._maxmp_number_img);
	   this._maxmp_number[i].visible = false;
	   this._maxmp_number[i].x = this._maxmp_img_data[4];
	   this._maxmp_number[i].y = this._maxmp_img_data[5] ;
	   this.addChild(this._maxmp_number[i]);
	};	
	this._maxmp_number_old = this._battler.mmp;
	this.refresh_number(this._maxmp_number,this._maxmp_number_old,this._maxmp_img_data,this._maxmp_img_data[4],this._maxmp_img_data[5],1);	
};

//==============================
// * Update MP
//==============================
Battle_Hud.prototype.update_mp = function() {
	if (this._mp_meter_blue) {
		if(this._mp_flow[0]) {
		   this.refresh_meter_flow(this._mp_meter_blue,this._battler.mp,this._battler.mmp,0,this._mp_flow[1]);
	   	   var dif_meter = this.update_dif(this._mp_old_ani[0],this._battler.mp,160);
		   if (this._mp_old_ani[0] != dif_meter) {this._mp_old_ani[0] = dif_meter;
	       this.refresh_meter_flow(this._mp_meter_red,this._mp_old_ani[0],this._battler.mmp,1,this._mp_flow[1]);
		   };
		   this._mp_flow[1] += 1.5;
		   if (this._mp_flow[1] > this._mp_flow[3]) {this._mp_flow[1] = 0};		   
   	    }
		else {		
			if (this.need_refresh_parameter(1)) {
				this.refresh_meter(this._mp_meter_blue,this._battler.mp,this._battler.mmp,0);
				this._mp_old = [this._battler.mp,this._battler.mmp];
			};
			var dif_meter = this.update_dif(this._mp_old_ani[0],this._battler.mp,160);
			if (this._mp_old_ani[0] != dif_meter) {this._mp_old_ani[0] = dif_meter;
			this.refresh_meter(this._mp_meter_red,this._mp_old_ani[0],this._battler.mmp,1);};
		};
    };
	if (this._mp_number) {
		var dif_number = this.update_dif(this._mp_number_old,this._battler.mp,30);
		if (this._mp_number_old != dif_number) {this._mp_number_old = dif_number;
		this.refresh_number(this._mp_number,this._mp_number_old,this._mp_img_data,this._mp_img_data[4],this._mp_img_data[5],1);};
	};
	if (this._maxmp_number) {
		if (this._maxmp_number_old != this._battler.mmp) {this._maxmp_number_old = this._battler.mmp;
		this.refresh_number(this._maxmp_number,this._maxmp_number_old,this._maxmp_img_data,this._maxmp_img_data[4],this._maxmp_img_data[5],1);};
	};	
	
};

//==============================
// * Create WillPower Meter
//==============================
Battle_Hud.prototype.create_wp_meter = function() {
	this.removeChild(this._wp_meter_blue);
	this.removeChild(this._wp_meter_red);
	if (!this._battler) {return};
	this._wp_meter_red = new Sprite(this._wp_meter_img);
	this._wp_meter_red.x = this._pos_x + REM_BHD_WP_METER_X;
	this._wp_meter_red.y = this._pos_y + REM_BHD_WP_METER_Y;
	this._wp_meter_red.rotation = Moghunter.bhud_mp_meter_rotation;
	this.addChild(this._wp_meter_red);		
	this._wp_meter_blue = new Sprite(this._wp_meter_img);
	this._wp_meter_blue.x = this._wp_meter_red.x;
	this._wp_meter_blue.y = this._wp_meter_red.y;
	this._wp_meter_blue.rotation = this._mp_meter_red.rotation;
	this.addChild(this._wp_meter_blue);
	if (String(Moghunter.bhud_mp_meter_flow) === "true") {this._wp_flow[0] = true;
	    this._wp_flow[2] = this._wp_meter_img.width / 3;
		this._wp_flow[3] = this._wp_flow[2] * 2;
		this._wp_flow[1] = Math.floor(Math.random() * this._wp_flow[2]);
	};
};

//==============================
// * Create WillPower Number
//==============================
Battle_Hud.prototype.create_wp_number = function() {
	if (this._wp_number) {for (var i = 0; i < this._wp_number.length; i++) {this.removeChild(this._wp_number[i]);}};
	if (!this._battler) {return};
	this._wp_number = [];
	this._wp_img_data = [this._wp_number_img.width,this._wp_number_img.height,
	                      this._wp_number_img.width / 10, this._wp_number_img.height / 2,
						  this._pos_x + REM_BHD_WP_NUM_X,
						  this._pos_y + REM_BHD_WP_NUM_Y,
						  ];
	for (var i = 0; i < 5; i++) {
	   this._wp_number[i] = new Sprite(this._wp_number_img);
	   this._wp_number[i].visible = false;
	   this._wp_number[i].x = this._wp_img_data[4];
	   this._wp_number[i].y = this._wp_img_data[5];
	   this.addChild(this._wp_number[i]);
	};	
	this._wp_number_old = this._battler.will;
	this.refresh_number(this._wp_number,this._wp_number_old,this._wp_img_data,this._wp_img_data[4],this._wp_img_data[5],1);	
};

//==============================
// * Update WillPower
//==============================
Battle_Hud.prototype.update_wp = function() {
	if (this._wp_meter_blue) {
		if(this._wp_flow[0]) {
		   this.refresh_meter_flow(this._wp_meter_blue,this._battler.will,this._battler.maxwill,0,this._wp_flow[1]);
	   	   var dif_meter = this.update_dif(this._wp_old_ani[0],this._battler.will,160)
		   if (this._wp_old_ani[0] != dif_meter) {this._wp_old_ani[0] = dif_meter;
	       this.refresh_meter_flow(this._wp_meter_red,this._wp_old_ani[0],this._battler.maxwill,1,this._wp_flow[1]);
		   };
		   this._wp_flow[1] += 1.5;
		   if (this._wp_flow[1] > this._wp_flow[3]) {this._wp_flow[1] = 0};		   
   	    }
		else {		
			if (this.need_refresh_parameter(3)) {
				this.refresh_meter(this._wp_meter_blue,this._battler.will,this._battler.maxwill,0);
				this._wp_old = [this._battler.will,this._battler.maxwill];
			};
			var dif_meter = this.update_dif(this._wp_old_ani[0],this._battler.will,160);
			if (this._wp_old_ani[0] != dif_meter) {this._wp_old_ani[0] = dif_meter;
			this.refresh_meter(this._wp_meter_red,this._wp_old_ani[0],this._battler.maxwill,1);};
		};
    };
	if (this._wp_number) {
		var dif_number = this.update_dif(this._wp_number_old,this._battler.will,30);
		if (this._wp_number_old != dif_number) {this._wp_number_old = dif_number;
		this.refresh_number(this._wp_number,this._wp_number_old,this._wp_img_data,this._wp_img_data[4],this._wp_img_data[5],1);};
	};
	if (this._maxwp_number) {
		if (this._maxwp_number_old != this._battler.maxwill) {this._maxwp_number_old = this._battler.maxwill;
		this.refresh_number(this._maxwp_number,this._maxwp_number_old,this._maxwp_img_data,this._maxwp_img_data[4],this._maxwp_img_data[5],1);};
	};	
	
};


//==============================
// * Create Desire Meters
//==============================
Battle_Hud.prototype.create_desire_meter = function() {
	this.removeChild(this._cock_meter_blue);
	this.removeChild(this._cock_meter_red);
	this.removeChild(this._mouth_meter_blue);
	this.removeChild(this._mouth_meter_red);
	this.removeChild(this._boobs_meter_blue);
	this.removeChild(this._boobs_meter_red);
	this.removeChild(this._pussy_meter_blue);
	this.removeChild(this._pussy_meter_red);
	this.removeChild(this._butt_meter_blue);
	this.removeChild(this._butt_meter_red);
	if (!this._battler) {return};
	
	this._cock_meter_red = new Sprite(this._desire_meter_img);
	this._cock_meter_red.x = this._pos_x + REM_BHD_COCK_METER_X;
	this._cock_meter_red.y = this._pos_y + REM_BHD_COCK_METER_Y;
	this._cock_meter_red.rotation = REM_BHD_DESIRE_METER_ROTATE;
	this.addChild(this._cock_meter_red);		
	this._cock_meter_blue = new Sprite(this._desire_meter_img);
	this._cock_meter_blue.x = this._cock_meter_red.x;
	this._cock_meter_blue.y = this._cock_meter_red.y;
	this._cock_meter_blue.rotation = this._cock_meter_red.rotation;
	this.addChild(this._cock_meter_blue);
	
	this._mouth_meter_red = new Sprite(this._desire_meter_img);
	this._mouth_meter_red.x = this._pos_x + REM_BHD_MOUTH_METER_X;
	this._mouth_meter_red.y = this._pos_y + REM_BHD_MOUTH_METER_Y;
	this._mouth_meter_red.rotation = REM_BHD_DESIRE_METER_ROTATE;
	this.addChild(this._mouth_meter_red);		
	this._mouth_meter_blue = new Sprite(this._desire_meter_img);
	this._mouth_meter_blue.x = this._mouth_meter_red.x;
	this._mouth_meter_blue.y = this._mouth_meter_red.y;
	this._mouth_meter_blue.rotation = this._mouth_meter_red.rotation;
	this.addChild(this._mouth_meter_blue);
	
	this._boobs_meter_red = new Sprite(this._desire_meter_img);
	this._boobs_meter_red.x = this._pos_x + REM_BHD_BOOBS_METER_X;
	this._boobs_meter_red.y = this._pos_y + REM_BHD_BOOBS_METER_Y;
	this._boobs_meter_red.rotation = REM_BHD_DESIRE_METER_ROTATE;
	this.addChild(this._boobs_meter_red);		
	this._boobs_meter_blue = new Sprite(this._desire_meter_img);
	this._boobs_meter_blue.x = this._boobs_meter_red.x;
	this._boobs_meter_blue.y = this._boobs_meter_red.y;
	this._boobs_meter_blue.rotation = this._boobs_meter_red.rotation;
	this.addChild(this._boobs_meter_blue);

	this._pussy_meter_red = new Sprite(this._desire_meter_img);
	this._pussy_meter_red.x = this._pos_x + REM_BHD_PUSSY_METER_X;
	this._pussy_meter_red.y = this._pos_y + REM_BHD_PUSSY_METER_Y;
	this._pussy_meter_red.rotation = REM_BHD_DESIRE_METER_ROTATE;
	this.addChild(this._pussy_meter_red);		
	this._pussy_meter_blue = new Sprite(this._desire_meter_img);
	this._pussy_meter_blue.x = this._pussy_meter_red.x;
	this._pussy_meter_blue.y = this._pussy_meter_red.y;
	this._pussy_meter_blue.rotation = this._pussy_meter_red.rotation;
	this.addChild(this._pussy_meter_blue);
	
	this._butt_meter_red = new Sprite(this._desire_meter_img);
	this._butt_meter_red.x = this._pos_x + REM_BHD_BUTT_METER_X;
	this._butt_meter_red.y = this._pos_y + REM_BHD_BUTT_METER_Y;
	this._butt_meter_red.rotation = REM_BHD_DESIRE_METER_ROTATE;
	this.addChild(this._butt_meter_red);		
	this._butt_meter_blue = new Sprite(this._desire_meter_img);
	this._butt_meter_blue.x = this._butt_meter_red.x;
	this._butt_meter_blue.y = this._butt_meter_red.y;
	this._butt_meter_blue.rotation = this._butt_meter_red.rotation;
	this.addChild(this._butt_meter_blue);
};

//==============================
// * Create Desire Number
//==============================
Battle_Hud.prototype.create_desire_number = function() {
	//Cock
	if (this._cock_number) {for (var i = 0; i < this._cock_number.length; i++) {this.removeChild(this._cock_number[i]);}};
	if (!this._battler) {return};
	this._cock_number = [];
	this._cock_img_data = [this._desire_number_img.width,this._desire_number_img.height,
	                      this._desire_number_img.width / 10, this._desire_number_img.height / 2,
						  this._pos_x + REM_BHD_COCK_METER_X + REM_BHD_DESIRE_NUM_OFFSET_X,
						  this._pos_y + REM_BHD_COCK_METER_Y + REM_BHD_DESIRE_NUM_OFFSET_Y,
						  ];
	for (var i = 0; i < 3; i++) {
	   this._cock_number[i] = new Sprite(this._desire_number_img);
	   this._cock_number[i].visible = false;
	   this._cock_number[i].x = this._cock_img_data[4];
	   this._cock_number[i].y = this._cock_img_data[5];
	   this.addChild(this._cock_number[i]);
	};	
	this._cock_number_old = this._battler.cockDesire;
	this.refresh_number(this._cock_number,this._cock_number_old,this._cock_img_data,this._cock_img_data[4],this._cock_img_data[5],1);	
	
	//Mouth
	if (this._mouth_number) {for (var i = 0; i < this._mouth_number.length; i++) {this.removeChild(this._mouth_number[i]);}};
	if (!this._battler) {return};
	this._mouth_number = [];
	this._mouth_img_data = [this._desire_number_img.width,this._desire_number_img.height,
	                      this._desire_number_img.width / 10, this._desire_number_img.height / 2,
						  this._pos_x + REM_BHD_MOUTH_METER_X + REM_BHD_DESIRE_NUM_OFFSET_X,
						  this._pos_y + REM_BHD_MOUTH_METER_Y + REM_BHD_DESIRE_NUM_OFFSET_Y,
						  ];
	for (var i = 0; i < 3; i++) {
	   this._mouth_number[i] = new Sprite(this._desire_number_img);
	   this._mouth_number[i].visible = false;
	   this._mouth_number[i].x = this._mouth_img_data[4];
	   this._mouth_number[i].y = this._mouth_img_data[5];
	   this.addChild(this._mouth_number[i]);
	};	
	this._mouth_number_old = this._battler.mouthDesire;
	this.refresh_number(this._mouth_number,this._mouth_number_old,this._mouth_img_data,this._mouth_img_data[4],this._mouth_img_data[5],1);	
	
	//Boobs
	if (this._boobs_number) {for (var i = 0; i < this._boobs_number.length; i++) {this.removeChild(this._boobs_number[i]);}};
	if (!this._battler) {return};
	this._boobs_number = [];
	this._boobs_img_data = [this._desire_number_img.width,this._desire_number_img.height,
	                      this._desire_number_img.width / 10, this._desire_number_img.height / 2,
						  this._pos_x + REM_BHD_BOOBS_METER_X + REM_BHD_DESIRE_NUM_OFFSET_X,
						  this._pos_y + REM_BHD_BOOBS_METER_Y + REM_BHD_DESIRE_NUM_OFFSET_Y,
						  ];
	for (var i = 0; i < 3; i++) {
	   this._boobs_number[i] = new Sprite(this._desire_number_img);
	   this._boobs_number[i].visible = false;
	   this._boobs_number[i].x = this._boobs_img_data[4];
	   this._boobs_number[i].y = this._boobs_img_data[5];
	   this.addChild(this._boobs_number[i]);
	};	
	this._boobs_number_old = this._battler.boobsDesire;
	this.refresh_number(this._boobs_number,this._boobs_number_old,this._boobs_img_data,this._boobs_img_data[4],this._boobs_img_data[5],1);	
	
	//Pussy
	if (this._pussy_number) {for (var i = 0; i < this._pussy_number.length; i++) {this.removeChild(this._pussy_number[i]);}};
	if (!this._battler) {return};
	this._pussy_number = [];
	this._pussy_img_data = [this._desire_number_img.width,this._desire_number_img.height,
	                      this._desire_number_img.width / 10, this._desire_number_img.height / 2,
						  this._pos_x + REM_BHD_PUSSY_METER_X + REM_BHD_DESIRE_NUM_OFFSET_X,
						  this._pos_y + REM_BHD_PUSSY_METER_Y + REM_BHD_DESIRE_NUM_OFFSET_Y,
						  ];
	for (var i = 0; i < 3; i++) {
	   this._pussy_number[i] = new Sprite(this._desire_number_img);
	   this._pussy_number[i].visible = false;
	   this._pussy_number[i].x = this._pussy_img_data[4];
	   this._pussy_number[i].y = this._pussy_img_data[5];
	   this.addChild(this._pussy_number[i]);
	};	
	this._pussy_number_old = this._battler.pussyDesire;
	this.refresh_number(this._pussy_number,this._pussy_number_old,this._pussy_img_data,this._pussy_img_data[4],this._pussy_img_data[5],1);
	
	//Butt
	if (this._butt_number) {for (var i = 0; i < this._butt_number.length; i++) {this.removeChild(this._butt_number[i]);}};
	if (!this._battler) {return};
	this._butt_number = [];
	this._butt_img_data = [this._desire_number_img.width,this._desire_number_img.height,
	                      this._desire_number_img.width / 10, this._desire_number_img.height / 2,
						  this._pos_x + REM_BHD_BUTT_METER_X + REM_BHD_DESIRE_NUM_OFFSET_X,
						  this._pos_y + REM_BHD_BUTT_METER_Y + REM_BHD_DESIRE_NUM_OFFSET_Y,
						  ];
	for (var i = 0; i < 3; i++) {
	   this._butt_number[i] = new Sprite(this._desire_number_img);
	   this._butt_number[i].visible = false;
	   this._butt_number[i].x = this._butt_img_data[4];
	   this._butt_number[i].y = this._butt_img_data[5];
	   this.addChild(this._butt_number[i]);
	};	
	this._butt_number_old = this._battler.boobsDesire;
	this.refresh_number(this._butt_number,this._butt_number_old,this._butt_img_data,this._butt_img_data[4],this._butt_img_data[5],1);
	
};

//==============================
// * Update Desire
//==============================
Battle_Hud.prototype.update_desire = function() {
	if (this._cock_meter_blue) {
		if (this.need_refresh_parameter(4)) {
			this.refresh_meter(this._cock_meter_blue,this._battler.cockDesire,this._battler.maxCockDesire,0);
			this._cock_desire_old = [this._battler.cockDesire,this._battler.maxCockDesire];
		};
		var dif_meter = this.update_dif(this._cock_desire_old_ani[0],this._battler.cockDesire,160);
		if (this._cock_desire_old_ani[0] != dif_meter) {this._cock_desire_old_ani[0] = dif_meter;
		this.refresh_meter(this._cock_meter_red,this._cock_desire_old_ani[0],this._battler.maxCockDesire,1);};
    };
	
	if (this._cock_number) {
		var dif_number = this.update_dif(this._cock_number_old,this._battler.cockDesire,30);
		if (this._cock_number_old != dif_number) {this._cock_number_old = dif_number;
		this.refresh_number(this._cock_number,this._cock_number_old,this._cock_img_data,this._cock_img_data[4],this._cock_img_data[5],1);};
	};
	
	if (this._mouth_meter_blue) {
		if (this.need_refresh_parameter(5)) {
			this.refresh_meter(this._mouth_meter_blue,this._battler.mouthDesire,this._battler.maxMouthDesire,0);
			this._mouth_desire_old = [this._battler.mouthDesire,this._battler.maxMouthDesire];
		};
		var dif_meter = this.update_dif(this._mouth_desire_old_ani[0],this._battler.mouthDesire,160);
		if (this._mouth_desire_old_ani[0] != dif_meter) {this._mouth_desire_old_ani[0] = dif_meter;
		this.refresh_meter(this._mouth_meter_red,this._mouth_desire_old_ani[0],this._battler.maxMouthDesire,1);};
    };
	
	if (this._mouth_number) {
		var dif_number = this.update_dif(this._mouth_number_old,this._battler.mouthDesire,30);
		if (this._mouth_number_old != dif_number) {this._mouth_number_old = dif_number;
		this.refresh_number(this._mouth_number,this._mouth_number_old,this._mouth_img_data,this._mouth_img_data[4],this._mouth_img_data[5],1);};
	};
	
	if (this._boobs_meter_blue) {
		if (this.need_refresh_parameter(6)) {
			this.refresh_meter(this._boobs_meter_blue,this._battler.boobsDesire,this._battler.maxBoobsDesire,0);
			this._boobs_desire_old = [this._battler.boobsDesire,this._battler.maxBoobsDesire];
		};
		var dif_meter = this.update_dif(this._boobs_desire_old_ani[0],this._battler.boobsDesire,160);
		if (this._boobs_desire_old_ani[0] != dif_meter) {this._boobs_desire_old_ani[0] = dif_meter;
		this.refresh_meter(this._boobs_meter_red,this._boobs_desire_old_ani[0],this._battler.maxBoobsDesire,1);};
    };
	
	if (this._boobs_number) {
		var dif_number = this.update_dif(this._boobs_number_old,this._battler.boobsDesire,30);
		if (this._boobs_number_old != dif_number) {this._boobs_number_old = dif_number;
		this.refresh_number(this._boobs_number,this._boobs_number_old,this._boobs_img_data,this._boobs_img_data[4],this._boobs_img_data[5],1);};
	};
	
	if (this._pussy_meter_blue) {
		if (this.need_refresh_parameter(7)) {
			this.refresh_meter(this._pussy_meter_blue,this._battler.pussyDesire,this._battler.maxPussyDesire,0);
			this._pussy_desire_old = [this._battler.pussyDesire,this._battler.maxPussyDesire];
		};
		var dif_meter = this.update_dif(this._pussy_desire_old_ani[0],this._battler.pussyDesire,160);
		if (this._pussy_desire_old_ani[0] != dif_meter) {this._pussy_desire_old_ani[0] = dif_meter;
		this.refresh_meter(this._pussy_meter_red,this._pussy_desire_old_ani[0],this._battler.maxPussyDesire,1);};
    };
	
	if (this._pussy_number) {
		var dif_number = this.update_dif(this._pussy_number_old,this._battler.pussyDesire,30);
		if (this._pussy_number_old != dif_number) {this._pussy_number_old = dif_number;
		this.refresh_number(this._pussy_number,this._pussy_number_old,this._pussy_img_data,this._pussy_img_data[4],this._pussy_img_data[5],1);};
	};
	
	if (this._butt_meter_blue) {
		if (this.need_refresh_parameter(8)) {
			this.refresh_meter(this._butt_meter_blue,this._battler.buttDesire,this._battler.maxButtDesire,0);
			this._butt_desire_old = [this._battler.buttDesire,this._battler.maxButtDesire];
		};
		var dif_meter = this.update_dif(this._butt_desire_old_ani[0],this._battler.buttDesire,160);
		if (this._butt_desire_old_ani[0] != dif_meter) {this._butt_desire_old_ani[0] = dif_meter;
		this.refresh_meter(this._butt_meter_red,this._butt_desire_old_ani[0],this._battler.maxButtDesire,1);};
    };
	
	if (this._butt_number) {
		var dif_number = this.update_dif(this._butt_number_old,this._battler.buttDesire,30);
		if (this._butt_number_old != dif_number) {this._butt_number_old = dif_number;
		this.refresh_number(this._butt_number,this._butt_number_old,this._butt_img_data,this._butt_img_data[4],this._butt_img_data[5],1);};
	};
};

//==============================
// * Create TP Meter
//==============================
Battle_Hud.prototype.create_tp_meter = function() {
	if (String(Moghunter.bhud_tp_meter_visible) != "true") {return};
	this.removeChild(this._tp_meter_blue);
	this.removeChild(this._tp_meter_red);
	if (!this._battler) {return};
	this._tp_meter_red = new Sprite(this._tp_meter_img);
	this._tp_meter_red.x = this._pos_x + Moghunter.bhud_tp_meter_pos_x;
	this._tp_meter_red.y = this._pos_y + Moghunter.bhud_tp_meter_pos_y;
	this._tp_meter_red.rotation = Moghunter.bhud_tp_meter_rotation;
	this.addChild(this._tp_meter_red);		
	this._tp_meter_blue = new Sprite(this._tp_meter_img);
	this._tp_meter_blue.x = this._tp_meter_red.x;
	this._tp_meter_blue.y = this._tp_meter_red.y;
	this._tp_meter_blue.rotation = this._tp_meter_red.rotation;
	this.addChild(this._tp_meter_blue);
	if (String(Moghunter.bhud_tp_meter_flow) === "true") {this._tp_flow[0] = true;
	    this._tp_flow[2] = this._tp_meter_img.width / 3;
		this._tp_flow[3] = this._tp_flow[2] * 2;
		this._tp_flow[1] = Math.floor(Math.random() * this._tp_flow[2]);
	};
};

//==============================
// * Create TP Number
//==============================
Battle_Hud.prototype.create_tp_number = function() {
	if (String(Moghunter.bhud_tp_number_visible) != "true") {return};
	if (this._tp_number) {for (var i = 0; i < this._tp_number.length; i++) {this.removeChild(this._tp_number[i]);}};
	if (!this._battler) {return};
	this._tp_number = [];
	this._tp_img_data = [this._tp_number_img.width,this._tp_number_img.height,
	                      this._tp_number_img.width / 10, this._tp_number_img.height / 2,
						  this._pos_x + Moghunter.bhud_tp_number_pos_x,
						  this._pos_y + Moghunter.bhud_tp_number_pos_y,
						  ];
	for (var i = 0; i < 5; i++) {
	   this._tp_number[i] = new Sprite(this._tp_number_img);
	   this._tp_number[i].visible = false;
	   this._tp_number[i].x = this._tp_img_data[4];
	   this._tp_number[i].y = this._tp_img_data[5] ;
	   this.addChild(this._tp_number[i]);
	};	
	//this._tp_number_old = this._battler.tp;
	if(ConfigManager.displayPleasureAsPercent)
		this._tp_number_old = this._battler.currentPercentOfOrgasm(false);
	else
		this._tp_number_old = this._battler.tp;
	
	this.refresh_number(this._tp_number,this._tp_number_old,this._tp_img_data,this._tp_img_data[4],this._tp_img_data[5],2);	
};

//==============================
// * Create MaxTP Number
//==============================
Battle_Hud.prototype.create_maxtp_number = function() {
	if (String(Moghunter.bhud_maxtp_number_visible) != "true") {return};
	if (this._maxtp_number) {for (var i = 0; i < this._maxtp_number.length; i++) {this.removeChild(this._maxtp_number[i]);}};
	if (!this._battler) {return};
	this._maxtp_number = [];
	this._maxtp_img_data = [this._maxtp_number_img.width,this._maxtp_number_img.height,
	                      this._maxtp_number_img.width / 10, this._maxtp_number_img.height / 2,
						  this._pos_x + Moghunter.bhud_maxtp_number_pos_x,
						  this._pos_y + Moghunter.bhud_maxtp_number_pos_y,
						  ];
	for (var i = 0; i < 5; i++) {
	   this._maxtp_number[i] = new Sprite(this._maxtp_number_img);
	   this._maxtp_number[i].visible = false;
	   this._maxtp_number[i].x = this._maxtp_img_data[4];
	   this._maxtp_number[i].y = this._maxtp_img_data[5] ;
	   this.addChild(this._maxtp_number[i]);
	};	
	this._maxtp_number_old = this._battler.orgasmPoint();
	this.refresh_number(this._maxtp_number,this._maxtp_number_old,this._maxtp_img_data,this._maxtp_img_data[4],this._maxtp_img_data[5],2);	
};

//==============================
// * Update TP
//==============================
Battle_Hud.prototype.update_tp = function() {
	if (this._tp_meter_blue) {
		if(this._tp_flow[0]) {
		   this.refresh_meter_flow(this._tp_meter_blue,this._battler.tp,this._battler.orgasmPoint(),0,this._tp_flow[1]);
	   	   var dif_meter = this.update_dif(this._tp_old_ani[0],this._battler.tp,160);
		   if (this._tp_old_ani[0] != dif_meter) {this._tp_old_ani[0] = dif_meter;
	       this.refresh_meter_flow(this._tp_meter_red,this._tp_old_ani[0],this._battler.orgasmPoint(),1,this._tp_flow[1]);
		   };
		   this._tp_flow[1] += 1.5;
		   if (this._tp_flow[1] > this._tp_flow[3]) {this._tp_flow[1] = 0};		   
   	    }
		else {	
			if (this.need_refresh_parameter(2)) {
				this.refresh_meter(this._tp_meter_blue,this._battler.tp,this._battler.orgasmPoint(),0);
				this._tp_old = [this._battler.tp,this._battler.orgasmPoint()];
			};
			var dif_meter = this.update_dif(this._tp_old_ani[0],this._battler.tp,160);
			if (this._tp_old_ani[0] != dif_meter) {this._tp_old_ani[0] = dif_meter;
			this.refresh_meter(this._tp_meter_red,this._tp_old_ani[0],this._battler.orgasmPoint(),1);};
		};
    };
	if (this._tp_number) {
		//var dif_number = this.update_dif(this._tp_number_old,this._battler.tp,30);
		let dif_num = 0;
		if(ConfigManager.displayPleasureAsPercent)
			dif_number = this.update_dif(this._tp_number_old,this._battler.currentPercentOfOrgasm(false),30);
		else
			dif_number = this.update_dif(this._tp_number_old,this._battler.tp,30);
		
		if (this._tp_number_old != dif_number) {this._tp_number_old = dif_number;
		this.refresh_number(this._tp_number,this._tp_number_old,this._tp_img_data,this._tp_img_data[4],this._tp_img_data[5],2);};
	};
};

//==============================
// * Create AT Meter
//==============================
Battle_Hud.prototype.create_at_meter = function() {
	if (String(Moghunter.bhud_at_meter_visible) != "true") {return};
	this.removeChild(this._at_meter);
	if (!this._battler) {return};
	this._at_meter = new Sprite(this._at_meter_img);
	this._at_meter.x = this._pos_x + Moghunter.bhud_at_meter_pos_x;
	this._at_meter.y = this._pos_y + Moghunter.bhud_at_meter_pos_y;
	this._at_meter.rotation = Moghunter.bhud_at_meter_rotation; 
	this.addChild(this._at_meter);	
	if (String(Moghunter.bhud_at_meter_flow) === "true") {this._at_flow[0] = true;
	    this._at_flow[2] = this._at_meter_img.width / 3;
		this._at_flow[3] = this._at_flow[2] * 2;
		this._at_flow[1] = Math.floor(Math.random() * this._at_flow[2]);
	};
    this.check_compatibility_atb();	
};

//==============================
// * Check Compatibility ATB
//==============================
Battle_Hud.prototype.check_compatibility_atb = function() {
	if (Imported.Ellye_ATB) {
        var parameters = $plugins.filter(function(p) {
            return p.description.contains('<Ellye ATB>');
        })[0].parameters; 
	this._ellye_max_atb = Number(parameters['Full ATB Gauge'] || 50000);
	};
};

//==============================
// * Update AT
//==============================
Battle_Hud.prototype.update_at = function() {
	if (this._at_meter) {
		if (!this.at === -1) {this._at_meter.visible = false; return}
	    else {this._at_meter.visible = true};
		if(this._at_flow[0]) {
    		if (this.is_casting()){
				if (this.is_max_cast()){
				   this.refresh_at_meter_flow(this._at_meter,this.cast_at(),this.cast_max_at(),3,this._at_flow[1]);}
				else {
				   this.refresh_at_meter_flow(this._at_meter,this.cast_at(),this.cast_max_at(),2,this._at_flow[1]);
				};
			}
			else if (this.is_max_at()){
			   this.refresh_at_meter_flow(this._at_meter,this.at(),this.max_at(),1,this._at_flow[1]);}
			else {
			   this.refresh_at_meter_flow(this._at_meter,this.at(),this.max_at(),0,this._at_flow[1]);};
			   
		   this._at_flow[1] += 1.5;
		   if (this._at_flow[1] > this._at_flow[3]) {this._at_flow[1] = 0};		   
   	    }
		else {	
			if (this.is_casting()){
				if (this.is_max_cast()){
				   this.refresh_at_meter(this._at_meter,this.cast_at(),this.cast_max_at(),3);}
				else {
				   this.refresh_at_meter(this._at_meter,this.cast_at(),this.cast_max_at(),2);
				};
			}
			else if (this.is_max_at()){
			   this.refresh_at_meter(this._at_meter,this.at(),this.max_at(),1);}
			else {
			   this.refresh_at_meter(this._at_meter,this.at(),this.max_at(),0);};
		};
    };
};

//==============================
// * Refresh AT Meter
//==============================
Battle_Hud.prototype.refresh_at_meter = function(sprite,value,value_max,type) {
	var ch = sprite.bitmap.height / 4;
    var meter_rate = sprite.bitmap.width * value / value_max;
	sprite.setFrame(0,type * ch, meter_rate, ch);
};

//==============================
// * Refresh AT Meter Flow
//==============================
Battle_Hud.prototype.refresh_at_meter_flow = function(sprite,value,value_max,type,flow) {
	var cw = sprite.bitmap.width / 3;
	var ch = sprite.bitmap.height / 4;
    var meter_rate = cw * value / value_max;
	sprite.setFrame(flow,type * ch, meter_rate, ch);
};

//==============================
// * At
//==============================
Battle_Hud.prototype.at = function() {
 if (Imported.MOG_ATB) {return this._battler._atb};
 if (Imported.Ellye_ATB) {return this._battler.atb};
 if (Imported.YEP_X_BattleSysATB) {return Math.abs(this._battler._atbSpeed)};
 if (Imported['VE - Active Time Battle']) {
	 return this._battler.maxAtb - this._battler.atb;
 }; 
 if (this._battler._ras && $gameSystem.isChronoMode()) {
      return this._battler._chrono.atb;
 };
 return -1;	
}

//==============================
// * Max At
//==============================
Battle_Hud.prototype.max_at = function() {
  if (Imported.MOG_ATB) {return this._battler._max_atb};
  if (Imported.Ellye_ATB) {return this._ellye_max_atb};
  if (Imported.YEP_X_BattleSysATB) {return Math.abs(BattleManager._atbTarget)};
  if (Imported['VE - Active Time Battle']) {return this._battler.maxAtb};
  if (this._battler._ras && $gameSystem.isChronoMode()) {
      return this._battler._chrono.maxAtb;
  };  
  return 1;	
};

//==============================
// * Cast AT
//==============================
Battle_Hud.prototype.cast_at = function() {
  if (Imported.MOG_ATB) {return this._battler._cast_atb[1]};
  if (Imported.Ellye_ATB) {return this._battler.current_cast_atb};
  if (Imported.YEP_X_BattleSysATB) {return Math.abs(this._battler._atbCharge)};
  if (Imported['VE - Active Time Battle']) {
	  return this._battler.maxAtb - this._battler.atb;
  };
  if (this._battler._ras && $gameSystem.isChronoMode()) {
      return this._battler._ras.cast.duration;
  };
  return 0;	
};

//==============================
// * Cast Max AT
//==============================
Battle_Hud.prototype.cast_max_at = function() {
  if (Imported.MOG_ATB) {return this._battler._cast_atb[2]};
  if (Imported.Ellye_ATB) {return this._battler.target_cast_atb};
  if (Imported.YEP_X_BattleSysATB) {return Math.abs(BattleManager._atbCharge)};
  if (Imported['VE - Active Time Battle']) {return this._battler.maxAtb};
  if (this._battler._ras && $gameSystem.isChronoMode()) {
      return this._battler._ras.cast.maxDuration;
  };  
  return 1;	
};

//==============================
// * Is Casting
//==============================
Battle_Hud.prototype.is_casting = function() {
  if (Imported.MOG_ATB) {if (this._battler._cast_atb[0]) {return true;}};
  if (Imported.Ellye_ATB) {if (this._battler.casting_action) {return true;}}; 
  if (Imported.YEP_X_BattleSysATB) {if (this._battler._atbCharging) {return true;}} ;
  if (Imported['VE - Active Time Battle']) {return this._battler.isAtbCast()};
  if (this._battler._chrono && $gameSystem.isChronoMode()) {
      return this._battler.isCastingC();
  };    
  return false;	
};

//==============================
// * Is Max Atb
//==============================
Battle_Hud.prototype.is_max_at = function() {
	return this.at() >= this.max_at();
};

//==============================
// * Is Max Cast
//==============================
Battle_Hud.prototype.is_max_cast = function() {
	return this.cast_at() >= this.cast_max_at();
};

//==============================
// * Create States
//==============================
Battle_Hud.prototype.create_states = function() {
	if (String(Moghunter.bhud_states_visible) != "true") {return};
	this.removeChild(this._state_icon);
	if (!this._battler) {return};
	this._states_data = [0,0,0];
	this._state_icon = new Sprite(this._state_img);
	this._state_icon.x = this._pos_x + REM_BHD_STATES_X;
	this._state_icon.y = this._pos_y + REM_BHD_STATES_Y;
	this._state_icon.visible = false;
	this.addChild(this._state_icon);
	this.refresh_states();	
};

//==============================
// * Create States
//==============================
Battle_Hud.prototype.refresh_states = function() {
	this._states_data[0] = 0;
	this._states_data[2] = 0;
	this._state_icon.visible = false;
	if (this._battler.allIcons().length == 0) {this._states_data[1] = 0;return};
       if (this._battler.allIcons()[this._states_data[1]]) {	
		this._states_data[0] = this._battler.allIcons()[this._states_data[1]];
		this._state_icon.visible = true;
		var sx = this._states_data[0] % 16 * 32;
		var sy = Math.floor(this._states_data[0] / 16) * 32;
		this._state_icon.setFrame(sx, sy, 32, 32);
		this._battler.need_refresh_bhud_states = false;	
	
	   };
	this._states_data[1] += 1;
	if (this._states_data[1] >= this._battler.allIcons().length) {
		this._states_data[1] = 0
	};
};

//==============================
// * Update States
//==============================
Battle_Hud.prototype.update_states = function() {
	this._states_data[2] += 1;
	if (this.need_refresh_states()) {this.refresh_states();};
};

//==============================
// * Need Refresh States
//==============================
Battle_Hud.prototype.need_refresh_states = function() {
	if (this._battler.need_refresh_bhud_states) {return true};
	if (this._states_data[2] > 60) {return true};
	return false;
};

//==============================
// * Create States 2
//==============================
Battle_Hud.prototype.create_states2 = function() {
	if (String(Moghunter.bhud_states_visible) != "true") {return};
	this.removeChild(this._state_icon);
	if (!this._battler) {return};
	this._states_data = [0,0,0];
	this._stateIcons = [];
	this._state_icon = new Sprite();
	this._state_icon.x = this._pos_x + REM_BHD_STATES_X;
	this._state_icon.y = this._pos_y + REM_BHD_STATES_Y;
	this._state_icon.visible = false;	
	this.addChild(this._state_icon);
	this.refresh_states2();	
};

//==============================
// * Create States
//==============================
Battle_Hud.prototype.refresh_states2 = function() {
	this._state_icon.visible = false;
	this._battler.need_refresh_bhud_states = false;
	for (i = 0; i < this._stateIcons.length; i++){
		this._state_icon.removeChild(this._stateIcons[i]);
	};	
	if (this._battler.allIcons().length == 0) {return};
	this._state_icon.visible = true;
	this._stateIcons = [];
	if(this._stateCounters) {
		for(var scl = 0; scl < this._stateCounters.length; scl++) {
			this.removeChild(this._stateCounters[scl]);
		}
	}
	this._stateCounters = [];
	var w = Window_Base._iconWidth;
	var icons = this._battler.allIcons().slice(0,w);
	var states = this._battler.states();
	//var m = Math.min(Math.max(this._battler.allIcons().length,0),Moghunter.bhud_statesMax);
	var m = Math.min(Math.max(states.length,0),REM_BHD_STATES_MAX);
	var align = Moghunter.bhud_statesAlign;
	for (i = 0; i < m; i++){
		var state = states[i];
		//console.log(state.id)
		if (state.iconIndex <= 0) continue;
		var iconId = state.iconIndex;
		if(state.hasLanguageIcon) {
			var iconId = state.languageIconIndex;
			this._stateIcons[i] = new Sprite(this._state_language_img);
		}
		else {
			this._stateIcons[i] = new Sprite(this._state_img);
		}
	     //var sx = icons[i] % 16 * w;
		 //var sy = Math.floor(icons[i] / 16) * w;
		 var sx = iconId % 16 * w;
		 var sy = Math.floor(iconId / 16) * w;
		 
		 this._stateIcons[i].setFrame(sx, sy, w, w);
		 if (align === 1) {
		     this._stateIcons[i].x = -((w + 4) * i);
		 } else if (align === 2) { 
		     this._stateIcons[i].y = (w + 4) * i;
		 } else if (align === 3) {
			 this._stateIcons[i].y = -((w + 4) * i);
		 } else {	 
		     this._stateIcons[i].x = (w + 4) * i;
		 };
		 this._state_icon.addChild(this._stateIcons[i]);
		 
		if (state.autoRemovalTiming > 0) {
			this.drawStateTurns(this._battler, state, this._state_icon.x + this._stateIcons[i].x, 
			this._state_icon.y + this._stateIcons[i].y);
		}
		this.drawStateCounter(this._battler, state, this._state_icon.x + this._stateIcons[i].x, 
		this._state_icon.y + this._stateIcons[i].y);
		 
	};
};

Battle_Hud.prototype.drawStateTurns = function(actor, state, wx, wy) { 
  if (!state.showTurns) return;
  var turns = actor.stateTurns(state.id);
  if (turns !== 0 && !turns) return;
  turns = Yanfly.Util.toGroup(Math.ceil(turns));
  
  var iconWidth = 32;
  var iconHeight = 32;
  
  var counter = new Sprite(new Bitmap(iconWidth,iconHeight));
  counter.bitmap.clear();
  
  wx += state.turnBufferX;
  wy += state.turnBufferY + REM_BHD_STATES_COUNTER_OFFSET_Y;
  
  counter.bitmap.fontSize = state.turnFontSize;   
  //contents.textColor = this.textColor(state.turnColor);
  counter.x = wx;
  counter.y = wy;
  
  counter.bitmap.drawText(turns, 0, 0, iconWidth, iconHeight, state.turnAlign);

  this._stateCounters.push(counter);
  this.addChild(counter);	
};

Battle_Hud.prototype.drawStateCounter = function(actor, state, wx, wy) {
  var value = actor.getStateCounter(state.id);
  if (value === undefined) return;
  var settings = state.stateCounterSettings;
  value = Yanfly.Util.toGroup(value);
  
  var iconWidth = 32;
  var iconHeight = 32;
  
  var counter = new Sprite(new Bitmap(iconWidth,iconHeight));
  counter.bitmap.clear();
  
  wx += settings.bufferX;
  wy += settings.bufferY + REM_BHD_STATES_COUNTER_OFFSET_Y;
 
  //this.changeTextColor(this.textColor(settings.color));
  counter.bitmap.fontSize = settings.size;
  counter.x = wx;
  counter.y = wy;
  
  counter.bitmap.drawText(value, 0, 0, iconWidth, iconHeight, settings.align);
  
  this._stateCounters.push(counter);
  this.addChild(counter);	
};

//==============================
// * Update States 2
//==============================
Battle_Hud.prototype.update_states2 = function() {
	if (this.need_refresh_states2()) {this.refresh_states2();};
	//REM
	if (!!this.tooltipWindow() && this.isMouseOverStatesOrDesires()) {
        this.updateStateIconTooltipWindow();
    }
};

Battle_Hud.prototype.updateStateIconTooltipWindow = function() {
    this.tooltipWindow().setTargetHost(this, true);
};

Battle_Hud.prototype.tooltipWindow = function() {
    return SceneManager._scene._stateIconTooltipWindow;
};

Battle_Hud.prototype.isMouseOverStatesOrDesires = function() {
	if(!this.isFullyVisible() || x < 0 || y < 0) return false;
	if(!!SceneManager._scene._victoryTitleWindow || !!SceneManager._scene._logWindow.isOpenAndActive() || !!SceneManager._scene._statusInfoWindow.isOpenAndActive()) return false;
    var x = this.canvasToLocalX(TouchInput._mouseOverX);
    var y = this.canvasToLocalY(TouchInput._mouseOverY);
    x += this.anchor.x * this.width;
    y += this.anchor.y * this.height;

	let mouseIsOverStates = x >= this._pos_x + REM_BHD_STATES_X 
		&& x <= this._pos_x + REM_BHD_STATES_X + this._stateIcons.length * (Window_Base._iconWidth + 4)
		&& y >= this._pos_y + REM_BHD_STATES_Y;
		
	let mouseIsOverDesires = x >= this._pos_x + REM_BHD_COCK_METER_X - 20 
		&& x <= this._pos_x + REM_BHD_BUTT_METER_X + 80
		&& y >= this._pos_y + REM_BHD_COCK_METER_Y - 70
		&& y <= this._pos_y + REM_BHD_TP_METER_Y;
	
	if(mouseIsOverStates) 
		this.tooltipWindow().setXYPos_states(x - this._pos_x - REM_BHD_STATES_X, y - this._pos_y - REM_BHD_STATES_Y);
	else if(mouseIsOverDesires) 
		this.tooltipWindow().setXYPos_desires(x - this._pos_x, y - this._pos_y);
	
    return mouseIsOverStates || mouseIsOverDesires;
};

Battle_Hud.prototype.canvasToLocalX = function(x) {
    var node = this;
    while (node) {
        x -= node.x;
        node = node.parent;
    }
    return x;
};

Battle_Hud.prototype.canvasToLocalY = function(y) {
    var node = this;
    while (node) {
        y -= node.y;
        node = node.parent;
    }
    return y;
};

Battle_Hud.prototype.isFullyVisible = function() {
	if(Karryn.hasTachieCutInOnScreen()) return false;
    var node = this;
    while (node) {
        if (!this.visible) {
            return false;
        } else if (this.opacity <= 0) {
            return false;
        } else {
            node = node.parent;
        }
    }
    return true;
};

//==============================
// * Need Refresh States 2
//==============================
Battle_Hud.prototype.need_refresh_states2 = function() {
	if (this._battler.need_refresh_bhud_states) {return true};
	return false;
};
