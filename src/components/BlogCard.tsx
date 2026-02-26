import Link from 'next/link'
import { BlogPost } from '@/data/blog'

const CATEGORY_COLORS: Record<string, string> = {
  '初心者向け': 'bg-green-100 text-green-700',
  'FX会社比較': 'bg-blue-100 text-blue-700',
  'テクニカル分析': 'bg-purple-100 text-purple-700',
  'リスク管理': 'bg-red-100 text-red-700',
  '投資戦略': 'bg-yellow-100 text-yellow-700',
}

export function BlogCard({ post }: { post: BlogPost }) {
  const colorClass = CATEGORY_COLORS[post.category] ?? 'bg-gray-100 text-gray-700'

  return (
    <Link href={`/blog/${post.slug}`} className="group block bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow overflow-hidden">
      <div className="h-2 bg-blue-700" />
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colorClass}`}>
            {post.category}
          </span>
          <span className="text-xs text-gray-400">{post.date}</span>
          <span className="text-xs text-gray-400 ml-auto">約{post.readingTime}分</span>
        </div>
        <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-blue-700 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
      </div>
    </Link>
  )
}
