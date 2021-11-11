export type ChampName = "Aatrox"
    | "Ahri"
    | "Akali"
    | "Akshan"
    | "Alistar"
    | "Amumu"
    | "Anivia"
    | "Annie"
    | "Aphelios"
    | "Ashe"
    | "AurelionSol"
    | "Azir"
    | "Bard"
    | "Blitzcrank"
    | "Brand"
    | "Braum"
    | "Caitlyn"
    | "Camille"
    | "Cassiopeia"
    | "Chogath"
    | "Corki"
    | "Darius"
    | "Diana"
    | "Draven"
    | "DrMundo"
    | "Ekko"
    | "Elise"
    | "Evelynn"
    | "Ezreal"
    | "Fiddlesticks"
    | "Fiora"
    | "Fizz"
    | "Galio"
    | "Gangplank"
    | "Garen"
    | "Gnar"
    | "Gragas"
    | "Graves"
    | "Gwen"
    | "Hecarim"
    | "Heimerdinger"
    | "Illaoi"
    | "Irelia"
    | "Ivern"
    | "Janna"
    | "JarvanIV"
    | "Jax"
    | "Jayce"
    | "Jhin"
    | "Jinx"
    | "Kaisa"
    | "Kalista"
    | "Karma"
    | "Karthus"
    | "Kassadin"
    | "Katarina"
    | "Kayle"
    | "Kayn"
    | "Kennen"
    | "Khazix"
    | "Kindred"
    | "Kled"
    | "KogMaw"
    | "Leblanc"
    | "LeeSin"
    | "Leona"
    | "Lillia"
    | "Lissandra"
    | "Lucian"
    | "Lulu"
    | "Lux"
    | "Malphite"
    | "Malzahar"
    | "Maokai"
    | "MasterYi"
    | "MissFortune"
    | "MonkeyKing"
    | "Mordekaiser"
    | "Morgana"
    | "Nami"
    | "Nasus"
    | "Nautilus"
    | "Neeko"
    | "Nidalee"
    | "Nocturne"
    | "Nunu"
    | "Olaf"
    | "Orianna"
    | "Ornn"
    | "Pantheon"
    | "Poppy"
    | "Pyke"
    | "Qiyana"
    | "Quinn"
    | "Rakan"
    | "Rammus"
    | "RekSai"
    | "Rell"
    | "Renekton"
    | "Rengar"
    | "Riven"
    | "Rumble"
    | "Ryze"
    | "Samira"
    | "Sejuani"
    | "Senna"
    | "Seraphine"
    | "Sett"
    | "Shaco"
    | "Shen"
    | "Shyvana"
    | "Singed"
    | "Sion"
    | "Sivir"
    | "Skarner"
    | "Sona"
    | "Soraka"
    | "Swain"
    | "Sylas"
    | "Syndra"
    | "TahmKench"
    | "Taliyah"
    | "Talon"
    | "Taric"
    | "Teemo"
    | "Thresh"
    | "Tristana"
    | "Trundle"
    | "Tryndamere"
    | "TwistedFate"
    | "Twitch"
    | "Udyr"
    | "Urgot"
    | "Varus"
    | "Vayne"
    | "Veigar"
    | "Velkoz"
    | "Vex"
    | "Vi"
    | "Viego"
    | "Viktor"
    | "Vladimir"
    | "Volibear"
    | "Warwick"
    | "Xayah"
    | "Xerath"
    | "XinZhao"
    | "Yasuo"
    | "Yone"
    | "Yorick"
    | "Yuumi"
    | "Zac"
    | "Zed"
    | "Ziggs"
    | "Zilean"
    | "Zoe"
    | "Zyra";



type ChampionTag = "Fighter" | "Tank" | "Mage" | "Assassin" | "Marksman" | "Support";
type Partype = "Blood Well" | "Mana" | "Energy" | "None" | "Rage" | "Courage" | "Shield" | "Fury" | "Ferocity" | "Heat" | "Grit" | "Crimson Rush" | "Flow";
export interface ILolChampion {
    [key: string]: ChampionInfo;
}

export interface IChampionsResponse {
    type: string;
    format: string;
    version: string;
    data: Champion;
}
export type Champion = Record<ChampName, ChampionInfo>

interface ChampionInfo {
    version: string;
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
    info: InfoChampion;
    image: ImageChampion;
    tags: ChampionTag[];
    partype: Partype;
    stats: StatsChampionInfo;
}

interface StatsChampionInfo {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
}

interface InfoChampion {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
}

interface ImageChampion {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
}
