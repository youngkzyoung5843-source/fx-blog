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
          <nav className="flex items-center gap-6">
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
