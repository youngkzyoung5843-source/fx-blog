import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '@/data/blog'
import { RakutenWidget } from '@/components/RakutenWidget'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const related = getAllPosts()
    .filter(p => p.slug !== slug && p.category === post.category)
    .slice(0, 2)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="flex gap-8 items-start">
        {/* Article */}
        <article className="flex-1 min-w-0">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-blue-700">ホーム</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-700">ブログ</Link>
            <span>/</span>
            <span className="text-gray-600 truncate">{post.title}</span>
          </nav>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="h-2 bg-blue-700" />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-gray-400">{post.date}</span>
                <span className="text-sm text-gray-400">約{post.readingTime}分で読めます</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight mb-6">
                {post.title}
              </h1>
              <p className="text-gray-600 bg-gray-50 rounded-lg p-4 mb-8 leading-relaxed text-sm border-l-4 border-blue-700">
                {post.excerpt}
              </p>

              <div
                className="prose prose-blue max-w-none text-gray-700 leading-relaxed
                  [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-gray-900 [&_h2]:border-b [&_h2]:border-gray-200 [&_h2]:pb-2
                  [&_p]:mb-4 [&_p]:leading-relaxed
                  [&_ul]:mb-4 [&_ul]:space-y-1 [&_ul]:list-disc [&_ul]:pl-5
                  [&_li]:text-gray-700
                  [&_strong]:font-bold [&_strong]:text-gray-900"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>

          {/* Related Articles */}
          {related.length > 0 && (
            <div className="mt-10">
              <h2 className="text-lg font-bold text-gray-900 mb-4">関連記事</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map(p => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow group"
                  >
                    <p className="text-xs text-blue-700 font-semibold mb-1">{p.category}</p>
                    <p className="text-sm font-bold text-gray-900 group-hover:text-blue-700 transition-colors line-clamp-2">{p.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Sidebar */}
        <aside className="hidden lg:block w-72 flex-shrink-0 space-y-6">
          <div className="bg-blue-700 rounded-xl p-6 text-white">
            <h3 className="font-bold text-lg mb-2">FX口座をお探しですか？</h3>
            <p className="text-blue-200 text-sm mb-4">初心者におすすめのFX会社を厳選して紹介しています。</p>
            <Link
              href="/fx-companies"
              className="block text-center bg-white text-blue-700 font-bold text-sm py-2.5 rounded-lg hover:bg-blue-50 transition-colors"
            >
              FX会社を比較する →
            </Link>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <h3 className="font-bold text-gray-900 mb-3 text-sm">最新記事</h3>
            <div className="space-y-3">
              {getAllPosts().slice(0, 4).filter(p => p.slug !== slug).slice(0, 3).map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="block group">
                  <p className="text-xs text-blue-600 mb-0.5">{p.category}</p>
                  <p className="text-sm text-gray-800 group-hover:text-blue-700 transition-colors line-clamp-2 font-medium">
                    {p.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <RakutenWidget />
        </aside>
      </div>
    </div>
  )
}
