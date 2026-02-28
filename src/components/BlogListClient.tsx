'use client'

import { useState } from 'react'
import { BlogCard } from '@/components/BlogCard'
import { CATEGORIES, type BlogPost } from '@/data/blog'

export function BlogListClient({ posts }: { posts: BlogPost[] }) {
  const [selected, setSelected] = useState<string | null>(null)
  const filtered = selected ? posts.filter(p => p.category === selected) : posts

  return (
    <>
      {/* Category tabs */}
      <div className="flex gap-2 flex-wrap mb-8">
        <button
          onClick={() => setSelected(null)}
          className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
            selected === null
              ? 'bg-blue-700 text-white border-blue-700'
              : 'border-gray-200 text-gray-600 hover:border-blue-400 hover:text-blue-700'
          }`}
        >
          すべて
        </button>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
              selected === cat
                ? 'bg-blue-700 text-white border-blue-700'
                : 'border-gray-200 text-gray-600 hover:border-blue-400 hover:text-blue-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="text-gray-500 mb-6 text-sm">{filtered.length}件の記事</p>

      {filtered.length === 0 ? (
        <p className="text-gray-500 text-center py-16">記事が見つかりませんでした。</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </>
  )
}
