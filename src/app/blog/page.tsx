import type { Metadata } from 'next'
import { getAllPosts } from '@/data/blog'
import { BlogListClient } from '@/components/BlogListClient'

export const metadata: Metadata = {
  title: 'ブログ記事一覧',
  description: 'FX投資に関する基礎知識・戦略・会社比較など、役立つ記事を掲載しています。',
}

export default function BlogListPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Blog</p>
        <h1 className="text-3xl font-black text-gray-900">ブログ記事一覧</h1>
      </div>
      <BlogListClient posts={posts} />
    </div>
  )
}
