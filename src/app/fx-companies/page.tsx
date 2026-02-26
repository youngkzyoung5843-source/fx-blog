import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllCompanies } from '@/data/fxCompanies'
import { FxCompanyCard } from '@/components/FxCompanyCard'

export const metadata: Metadata = {
  title: 'おすすめFX会社比較',
  description: 'スプレッド・スワップポイント・レバレッジなどを基準にFX会社を徹底比較。あなたに最適なFX会社を見つけましょう。',
}

export default function FxCompaniesPage() {
  const companies = getAllCompanies()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10 text-center">
        <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">FX Company Guide</p>
        <h1 className="text-3xl font-black text-gray-900 mb-3">おすすめFX会社比較 2026年版</h1>
        <p className="text-gray-500 text-sm max-w-xl mx-auto">
          スプレッド・スワップ・取引単位・サポートなど複数の観点から厳選したFX会社を紹介します。
        </p>
      </div>

      {/* 比較表 */}
      <section className="mb-14">
        <h2 className="text-xl font-bold text-gray-900 mb-4">一覧比較表</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm bg-white">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="text-left px-4 py-3 font-semibold">会社名</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">ドル円スプレッド</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">ユーロ円スプレッド</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">最大レバレッジ</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">最低取引単位</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">スワップ水準</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">キャンペーン</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company, i) => (
                <tr key={company.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-bold text-gray-900 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-6 h-6 rounded-full text-white text-xs flex items-center justify-center font-bold flex-shrink-0"
                        style={{ backgroundColor: company.color }}
                      >
                        {i + 1}
                      </span>
                      {company.name}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center font-bold text-blue-700">{company.dollarYenSpread}</td>
                  <td className="px-4 py-3 text-center">{company.euroYenSpread}</td>
                  <td className="px-4 py-3 text-center">{company.maxLeverage}</td>
                  <td className="px-4 py-3 text-center">{company.minUnit}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`font-semibold ${
                      company.swapLevel === 'high' ? 'text-green-600' :
                      company.swapLevel === 'medium' ? 'text-yellow-600' : 'text-gray-400'
                    }`}>
                      {company.swapLevel === 'high' ? '★★★' : company.swapLevel === 'medium' ? '★★' : '★'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center text-xs text-gray-600">{company.bonus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-2">※ スプレッドは原則固定・通常時の値。市場状況により変動する場合があります。</p>
      </section>

      {/* 各社カード */}
      <section className="mb-14">
        <h2 className="text-xl font-bold text-gray-900 mb-6">各社の詳細・特徴</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company, i) => (
            <FxCompanyCard key={company.id} company={company} rank={i + 1} />
          ))}
        </div>
      </section>

      {/* 各社のメリット・デメリット詳細 */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-gray-900">メリット・デメリット詳細</h2>
        {companies.map((company, i) => (
          <div key={company.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100">
              <span
                className="w-8 h-8 rounded-full text-white text-sm flex items-center justify-center font-black"
                style={{ backgroundColor: company.color }}
              >
                {i + 1}
              </span>
              <h3 className="font-bold text-gray-900 text-lg">{company.name}</h3>
              <span className="ml-auto text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {company.recommended}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
              <div className="p-6">
                <p className="text-sm font-bold text-green-700 mb-3 flex items-center gap-1">
                  <span>✓</span> メリット
                </p>
                <ul className="space-y-2">
                  {company.pros.map(pro => (
                    <li key={pro} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-green-500 mt-0.5 flex-shrink-0">●</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6">
                <p className="text-sm font-bold text-red-600 mb-3 flex items-center gap-1">
                  <span>✗</span> デメリット
                </p>
                <ul className="space-y-2">
                  {company.cons.map(con => (
                    <li key={con} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">●</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <div className="mt-14 bg-blue-900 rounded-2xl text-white text-center py-12 px-6">
        <h2 className="text-2xl font-black mb-3">FXをもっと学びたい方へ</h2>
        <p className="text-blue-200 mb-6 text-sm">初心者向けの基礎解説からテクニカル分析まで、役立つ記事を多数掲載しています。</p>
        <Link
          href="/blog"
          className="inline-block bg-white text-blue-800 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
        >
          ブログ記事を読む →
        </Link>
      </div>
    </div>
  )
}
