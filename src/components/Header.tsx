import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-black text-blue-700 tracking-tight">FX</span>
            <span className="text-lg font-bold text-gray-800">ラボ</span>
          </Link>
          <nav className="flex items-center gap-5">
            <Link
              href="/blog"
              className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
            >
              ブログ
            </Link>
            <Link
              href="/fx-companies"
              className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
            >
              FX会社比較
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
            >
              自己紹介
            </Link>
            <a
              href="https://x.com/kzyoungfx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors"
              aria-label="X (Twitter)"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <Link
              href="/fx-companies"
              className="bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
            >
              口座開設
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
