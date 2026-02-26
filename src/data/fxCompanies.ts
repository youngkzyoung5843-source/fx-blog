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
    affiliateUrl: 'https://www.click-sec.com/corp/guide/fx/account/',
    color: '#0066CC',
  },
  {
    id: 'sbi-fx',
    name: 'SBI FXトレード',
    logo: 'SBI',
    tagline: '1通貨から取引可能！少額投資の定番',
    dollarYenSpread: '0.18銭',
    euroYenSpread: '0.5銭',
    maxLeverage: '25倍',
    minUnit: '1通貨',
    bonus: '新規口座開設キャンペーン実施中',
    swapLevel: 'medium',
    features: ['1通貨から取引可', 'スプレッド最狭水準', '初心者向けサポート', 'SBIグループの安心感'],
    pros: [
      'ドル円スプレッドが業界最狭水準（0.18銭）',
      '1通貨（約150円）から取引可能で初心者に最適',
      'SBIグループの信頼性と財務基盤',
      '充実した投資情報・経済指標カレンダー',
    ],
    cons: [
      '高機能トレーディングツールは他社に劣る面も',
      'スキャルピング制限がある場合がある',
    ],
    recommended: '初心者・少額投資家向け',
    affiliateUrl: 'https://www.sbifxt.co.jp/account/open.html',
    color: '#E50000',
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
    affiliateUrl: 'https://fx.dmm.com/apply/',
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
    affiliateUrl: 'https://www.hirose-fx.co.jp/open/',
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
    affiliateUrl: 'https://min-fx.jp/account/open/',
    color: '#00AA44',
  },
]

export function getAllCompanies(): FxCompany[] {
  return fxCompanies
}

export function getCompanyById(id: string): FxCompany | undefined {
  return fxCompanies.find(c => c.id === id)
}
