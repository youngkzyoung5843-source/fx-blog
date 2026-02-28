import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '運営者情報・自己紹介',
  description: 'FXラボの運営者プロフィールと自己紹介ページです。',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">About</p>
        <h1 className="text-3xl font-black text-gray-900">運営者情報・自己紹介</h1>
      </div>

      {/* Profile card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8">
        <div className="h-2 bg-blue-700" />
        <div className="p-8">
          <div className="flex items-center gap-5 mb-6">
            <div className="w-20 h-20 rounded-full bg-blue-700 flex items-center justify-center text-white text-2xl font-black flex-shrink-0">
              K
            </div>
            <div>
              <h2 className="text-xl font-black text-gray-900">kzy</h2>
              <p className="text-sm text-gray-500 mt-1">FXトレーダー・FXラボ運営者</p>
              <a
                href="https://x.com/kzyoungfx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-2 text-sm text-blue-600 hover:text-blue-800 transition-colors font-medium"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                @kzyoungfx
              </a>
            </div>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">はじめまして</h3>
              <p className="text-sm">
                FXラボを運営しているkzyと申します。FX投資歴は数年で、主にドル円・ユーロ円を中心にトレードしています。
                このブログでは、自分自身の経験をもとに初心者の方でも理解しやすいFX情報を発信しています。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">このブログについて</h3>
              <p className="text-sm">
                FXを始めたころ、情報が多すぎて何から勉強すればよいかわかりませんでした。
                そんな経験から「自分が欲しかった情報をわかりやすく届けたい」という思いでFXラボを立ち上げました。
              </p>
              <ul className="mt-3 space-y-1.5 text-sm">
                <li className="flex items-start gap-2"><span className="text-blue-700 font-bold mt-0.5">✓</span>初心者向けのFX基礎知識</li>
                <li className="flex items-start gap-2"><span className="text-blue-700 font-bold mt-0.5">✓</span>FX会社の比較・おすすめ情報</li>
                <li className="flex items-start gap-2"><span className="text-blue-700 font-bold mt-0.5">✓</span>テクニカル分析・チャートの読み方</li>
                <li className="flex items-start gap-2"><span className="text-blue-700 font-bold mt-0.5">✓</span>リスク管理・メンタル管理</li>
                <li className="flex items-start gap-2"><span className="text-blue-700 font-bold mt-0.5">✓</span>実践的な投資戦略</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">X（旧Twitter）でも発信中</h3>
              <p className="text-sm mb-3">
                日々のトレード記録や相場の見通し、ブログ更新情報などをXで発信しています。
                ぜひフォローして最新情報をチェックしてください！
              </p>
              <a
                href="https://x.com/kzyoungfx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                @kzyoungfx をフォローする
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-sm text-gray-700">
        <h3 className="font-bold text-gray-900 mb-2">免責事項</h3>
        <p className="leading-relaxed">
          当サイトに掲載している情報は、投資の勧誘を目的としたものではありません。
          FX取引にはリスクが伴います。投資判断はご自身の責任のもとで行ってください。
          当サイトは一部のリンクにアフィリエイト広告を使用しています。
        </p>
      </div>

      <div className="mt-8 flex gap-4">
        <Link href="/blog" className="text-sm text-blue-700 hover:underline font-medium">← ブログ記事一覧へ</Link>
        <Link href="/fx-companies" className="text-sm text-blue-700 hover:underline font-medium">FX会社比較へ →</Link>
      </div>
    </div>
  )
}
