import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl font-black text-blue-400">FX</span>
              <span className="text-lg font-bold text-white">ラボ</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              FX投資に関する基礎知識から実践的な戦略まで、初心者にもわかりやすく解説するメディアです。
            </p>
            <a
              href="https://x.com/kzyoungfx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              @kzyoungfx
            </a>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">コンテンツ</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="hover:text-white transition-colors">ブログ記事一覧</Link></li>
              <li><Link href="/fx-companies" className="hover:text-white transition-colors">FX会社比較</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">自己紹介</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">カテゴリ</h3>
            <ul className="space-y-2 text-sm">
              <li><span>初心者向け</span></li>
              <li><span>FX会社比較</span></li>
              <li><span>テクニカル分析</span></li>
              <li><span>リスク管理</span></li>
              <li><span>投資戦略</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-xs text-center space-y-2">
          <p className="text-yellow-400 font-medium">
            ⚠️ 当サイトはFX取引に関する情報提供を目的としています。投資判断はご自身の責任でお願いします。
          </p>
          <p>© 2026 FXラボ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
