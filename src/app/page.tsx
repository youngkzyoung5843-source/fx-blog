import Link from 'next/link'
import { getLatestPosts } from '@/data/blog'
import { getAllCompanies } from '@/data/fxCompanies'
import { BlogCard } from '@/components/BlogCard'
import { FxCompanyCard } from '@/components/FxCompanyCard'

export default function Home() {
  const latestPosts = getLatestPosts(3)
  const topCompanies = getAllCompanies().slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="inline-block bg-blue-600 text-blue-100 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide">
            FX投資情報メディア
          </p>
          <h1 className="text-4xl sm:text-5xl font-black mb-5 leading-tight">
            FX投資を、もっと<br className="sm:hidden" />わかりやすく。
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            初心者から中級者まで役立つFX基礎知識・戦略解説と、<br className="hidden sm:block" />
            おすすめFX会社の徹底比較をお届けします。
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/blog"
              className="bg-white text-blue-800 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              ブログを読む
            </Link>
            <Link
              href="/fx-companies"
              className="bg-blue-600 text-white font-bold px-6 py-3 rounded-lg border border-blue-500 hover:bg-blue-500 transition-colors"
            >
              FX会社を比較する
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 gap-4 text-center">
          {[
            { label: '掲載記事数', value: '5+' },
            { label: '比較FX会社数', value: '5社' },
            { label: '毎月更新', value: '最新情報' },
          ].map(item => (
            <div key={item.label}>
              <p className="text-2xl font-black text-blue-700">{item.value}</p>
              <p className="text-xs text-gray-500 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Blog */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Latest Articles</p>
            <h2 className="text-2xl font-black text-gray-900">最新ブログ記事</h2>
          </div>
          <Link href="/blog" className="text-sm font-semibold text-blue-700 hover:underline">
            すべて見る →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* FX Companies */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Top Picks</p>
              <h2 className="text-2xl font-black text-gray-900">おすすめFX会社</h2>
            </div>
            <Link href="/fx-companies" className="text-sm font-semibold text-blue-700 hover:underline">
              全社比較を見る →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCompanies.map((company, i) => (
              <FxCompanyCard key={company.id} company={company} rank={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-14 px-4 text-center">
        <h2 className="text-2xl font-black mb-3">あなたに合ったFX会社を見つけよう</h2>
        <p className="text-blue-200 mb-6 text-sm">スプレッド・スワップ・使いやすさで徹底比較</p>
        <Link
          href="/fx-companies"
          className="inline-block bg-white text-blue-800 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
        >
          FX会社比較ページへ
        </Link>
      </section>
    </>
  )
}
