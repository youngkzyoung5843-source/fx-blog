import { FxCompany } from '@/data/fxCompanies'

const SWAP_LABEL: Record<string, { label: string; color: string }> = {
  high: { label: '高い', color: 'text-green-600' },
  medium: { label: '普通', color: 'text-yellow-600' },
  low: { label: '低い', color: 'text-gray-400' },
}

export function FxCompanyCard({ company, rank }: { company: FxCompany; rank: number }) {
  const swap = SWAP_LABEL[company.swapLevel]

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="h-1.5" style={{ backgroundColor: company.color }} />
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-sm"
              style={{ backgroundColor: company.color }}
            >
              {rank}位
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">{company.logo}</p>
              <h3 className="font-bold text-gray-900 text-lg leading-tight">{company.name}</h3>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-4">{company.tagline}</p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <p className="text-xs text-gray-400 mb-1">ドル円スプレッド</p>
            <p className="font-bold text-blue-700 text-lg">{company.dollarYenSpread}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <p className="text-xs text-gray-400 mb-1">スワップ水準</p>
            <p className={`font-bold text-lg ${swap.color}`}>{swap.label}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {company.features.map(f => (
            <span key={f} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
              {f}
            </span>
          ))}
        </div>

        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-500 mb-2">こんな人におすすめ</p>
          <p className="text-sm text-gray-700 font-medium">{company.recommended}</p>
        </div>

        <a
          href={company.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="block w-full text-center bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition-colors text-sm"
        >
          無料口座開設はこちら →
        </a>
      </div>
    </div>
  )
}
