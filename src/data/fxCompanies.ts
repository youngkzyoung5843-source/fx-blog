export interface FxCompany {
  id: string
  name: string
  logo: string
  tagline: string
  dollarYenSpread: string
  euroYenSpread: string
  maxLeverage: string
  minUnit: string
  bonus: string
  swapLevel: 'high' | 'medium' | 'low'
  features: string[]
  pros: string[]
  cons: string[]
  recommended: string
  affiliateUrl: string
  affiliateBannerUrl?: string
  affiliateBannerWidth?: number
  affiliateBannerHeight?: number
  affiliateTrackingPixelUrl?: string
  color: string
}

export const fxCompanies: FxCompany[] = [
  {
    id: 'gmo-click',
    name: 'GMOクリック証券',
    logo: 'GMO',
    tagline: '業界最低水準のスプレッドと高い約定力',
    dollarYenSpread: '0.2銭',
    euroYenSpread: '0.5銭',
    maxLeverage: '25倍',
    minUnit: '1,000通貨',
    bonus: '最大100万円キャッシュバック',
    swapLevel: 'medium',
    features: ['スプレッド最小クラス', '高約定力', '豊富な分析ツール', 'スマホアプリ充実'],
    pros: [
      'ドル円スプレッドが業界最低水準（原則0.2銭）',
      '約定拒否が少なく、スキャルピングに最適',
      'テクニカル指標が豊富なチャートツール',
      '外為どっとコム系でサポートが充実',
    ],
    cons: [
      '口座開設に少し時間がかかる場合がある',
      'スワップポイントは他社と比べて平均的',
    ],
    recommended: 'スキャルピング・デイトレード向け',
    affiliateUrl: 'https://www.click-sec.com/corp/kouza/entry/',
    color: '#0066CC',
  },
  {
    id: 'jfx',
    name: 'JFX',
    logo: 'JFX',
    tagline: 'MATRIX TRADERで超高速約定。スキャルパー御用達',
    dollarYenSpread: '0.2銭',
    euroYenSpread: '0.4銭',
    maxLeverage: '25倍',
    minUnit: '1,000通貨',
    bonus: '口座開設キャンペーン実施中',
    swapLevel: 'high',
    features: ['超高速約定', 'MATRIX TRADER', '高スワップ', 'スキャルピング対応'],
    pros: [
      '独自プラットフォーム「MATRIX TRADER」で超高速約定',
      'スキャルピングを公式に認めている数少ないFX会社',
      'スワップポイントが業界上位水準',
      '注文約定率が非常に高くスリッページが少ない',
    ],
    cons: [
      '取り扱い通貨ペア数はやや少なめ',
      'MATRIX TRADERに慣れるまで時間がかかる場合がある',
    ],
    recommended: 'スキャルピング・高速取引向け',
    affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4AXL46+OESKY+25B2+601S1',
    affiliateBannerUrl: 'https://www22.a8.net/svt/bgt?aid=260227878041&wid=001&eno=01&mid=s00000010019001008000&mc=1',
    affiliateBannerWidth: 120,
    affiliateBannerHeight: 60,
    affiliateTrackingPixelUrl: 'https://www13.a8.net/0.gif?a8mat=4AXL46+OESKY+25B2+601S1',
    color: '#1A3A6B',
  },
  {
    id: 'dmm-fx',
    name: 'DMM FX',
    logo: 'DMM',
    tagline: '固定スプレッドで安心取引。サポートも充実',
    dollarYenSpread: '0.2銭（固定）',
    euroYenSpread: '0.5銭（固定）',
    maxLeverage: '25倍',
    minUnit: '1万通貨',
    bonus: '最大20万円キャッシュバック',
    swapLevel: 'low',
    features: ['固定スプレッド', '24時間サポート', 'シンプルな画面', '充実したキャンペーン'],
    pros: [
      '全通貨ペアで固定スプレッド。相場急変時も安心',
      '24時間365日の電話・チャットサポート',
      'シンプルで使いやすいインターフェース',
      '業界トップクラスの口座数',
    ],
    cons: [
      '固定スプレッドのため、市場が落ち着いているときはやや不利',
      'スワップポイントは低め',
    ],
    recommended: '初心者・スプレッドの安定性重視の方',
    affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4AXL45+FK8X0Y+1WP2+6DZBL',
    affiliateBannerUrl: 'https://www24.a8.net/svt/bgt?aid=260227877941&wid=001&eno=01&mid=s00000008903001073000&mc=1',
    affiliateTrackingPixelUrl: 'https://www15.a8.net/0.gif?a8mat=4AXL45+FK8X0Y+1WP2+6DZBL',
    color: '#FF6600',
  },
  {
    id: 'hirose-tsusho',
    name: 'ヒロセ通商',
    logo: 'LION',
    tagline: '業界トップクラスのスワップポイント',
    dollarYenSpread: '0.3銭',
    euroYenSpread: '0.6銭',
    maxLeverage: '25倍',
    minUnit: '1,000通貨',
    bonus: '最大30万円還元',
    swapLevel: 'high',
    features: ['高スワップポイント', 'LION FXブランド', '豊富な通貨ペア', 'キャッシュバック充実'],
    pros: [
      '業界最高水準のスワップポイント',
      '取り扱い通貨ペア数が非常に多い（50ペア以上）',
      'キャッシュバックキャンペーンが充実',
      'LIONチャートが高機能',
    ],
    cons: [
      'スプレッドはやや広め',
      '初心者には情報量が多すぎる場合も',
    ],
    recommended: 'スワップ投資・長期保有向け',
    affiliateUrl: 'https://register.hirose-fx.co.jp/register/personal',
    color: '#8B0000',
  },
  {
    id: 'minnanofx',
    name: 'みんなのFX',
    logo: 'みんな',
    tagline: 'スワップポイントNo.1を目指す新興勢力',
    dollarYenSpread: '0.2銭',
    euroYenSpread: '0.4銭',
    maxLeverage: '25倍',
    minUnit: '1,000通貨',
    bonus: '口座開設＋取引でプレゼント',
    swapLevel: 'high',
    features: ['高スワップポイント', '狭いスプレッド', 'シンプルUI', 'TRADEVIEW採用'],
    pros: [
      'スプレッドとスワップポイントのバランスが優秀',
      'ユーロ円スプレッドが業界最狭水準（0.4銭）',
      'TRADEVIEWベースの高機能チャート',
      '使いやすいスマートフォンアプリ',
    ],
    cons: [
      '会社の歴史がやや浅い',
      '取り扱い通貨ペアは他社より少なめ',
    ],
    recommended: 'スワップ＋デイトレードのハイブリッド向け',
    affiliateUrl: 'https://min-fx.jp/',
    color: '#00AA44',
  },
]

export function getAllCompanies(): FxCompany[] {
  return fxCompanies
}

export function getCompanyById(id: string): FxCompany | undefined {
  return fxCompanies.find(c => c.id === id)
}
