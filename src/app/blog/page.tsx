import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, CATEGORIES } from '@/data/blog'
import { BlogCard } from '@/components/BlogCard'

export const metadata: Metadata = {
  title: 'ブログ記事一覧',
  description: 'FX投資に関する基礎知識・戦略・会社比較など、役立つ記事を掲載しています。',
}

interface Props {
  searchParams: Promise<{ category?: string }>
}

export default async function BlogListPage({ searchParams }: Props) {
  const { category } = await searchParams
  const allPosts = getAllPosts()
  const posts = category ? allPosts.filter(p => p.category === category) : allPosts

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Blog</p>
        <h1 className="text-3xl font-black text-gray-900">ブログ記事一覧</h1>
        <p className="text-gray-500 mt-2 text-sm">{posts.length}件の記事</p>
      </div>

      {/* Category tabs */}
      <div className="flex gap-2 flex-wrap mb-8">
        <Link
          href="/blog"
          className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
            !category
              ? 'bg-blue-700 text-white border-blue-700'
              : 'border-gray-200 text-gray-600 hover:border-blue-400 hover:text-blue-700'
          }`}
        >
          すべて
        </Link>
        {CATEGORIES.map(cat => (
          <Link
            key={cat}
            href={`/blog?category=${encodeURIComponent(cat)}`}
            className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
              category === cat
                ? 'bg-blue-700 text-white border-blue-700'
                : 'border-gray-200 text-gray-600 hover:border-blue-400 hover:text-blue-700'
            }`}
          >
            {cat}
          </Link>
        ))}
      </div>

      {posts.length === 0 ? (
        <p className="text-gray-500 text-center py-16">記事が見つかりませんでした。</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
