import { getAllArticles } from '@/lib/articles'
import { siteConfig } from '@/site.config'
import Link from 'next/link'

export default function ArticlesPage() {
  const articles = getAllArticles()
  
  // 按分类分组
  const categories = Array.from(new Set(articles.map(a => a.category)))
  
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 50%, #DDD6FE 100%)' }}>
      {/* Floating Header */}
      <header className="sticky top-4 z-50 mx-4 md:mx-8">
        <div className="clay-card max-w-6xl mx-auto px-6 py-4 bg-white/90 backdrop-blur-sm">
          <Link href="/" className="inline-block group">
            <h1 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
              {siteConfig.name}
            </h1>
            <p className="text-sm text-gray-600 mt-1 font-medium">节日音乐资讯与推荐</p>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">文章列表</h1>
          <p className="text-lg text-gray-700 font-medium">探索儿童节日音乐的精彩世界</p>
        </div>
        
        {/* Category Navigation - Bubble Style */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => {
            const categoryColors = [
              'bg-gradient-to-r from-pink-400 to-rose-400',
              'bg-gradient-to-r from-red-500 to-orange-500',
              'bg-gradient-to-r from-yellow-400 to-amber-500',
              'bg-gradient-to-r from-green-400 to-emerald-500',
              'bg-gradient-to-r from-blue-400 to-cyan-500',
              'bg-gradient-to-r from-purple-500 to-pink-500'
            ]
            const colorIndex = categories.indexOf(category) % categoryColors.length
            
            return (
              <a
                key={category}
                href={`#${category}`}
                className={`clay-button ${categoryColors[colorIndex]} text-white px-6 py-3 text-sm font-bold`}
              >
                {category}
              </a>
            )
          })}
        </div>

        {/* Articles by Category - Organic Layout */}
        {categories.map((category, catIndex) => {
          const categoryArticles = articles.filter(a => a.category === category)
          
          const headerGradients = [
            'from-pink-500 to-rose-500',
            'from-red-500 to-orange-500',
            'from-yellow-500 to-amber-500',
            'from-green-500 to-emerald-500',
            'from-blue-500 to-cyan-500',
            'from-purple-500 to-pink-500'
          ]
          
          return (
            <div key={category} id={category} className="mb-16">
              {/* Category Header - Wave Shape */}
              <div className={`clay-card bg-gradient-to-r ${headerGradients[catIndex % headerGradients.length]} p-6 mb-8 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,30 Q25,10 50,30 T100,30 L100,100 L0,100 Z" fill="white"/>
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white relative z-10 drop-shadow-lg">
                  {category}
                </h2>
              </div>
              
              {/* Articles Grid - Masonry-like */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryArticles.map((article, index) => {
                  // Alternate card heights for visual interest
                  const isLarge = index % 3 === 0
                  
                  return (
                    <Link
                      key={article.slug}
                      href={`/articles/${article.slug}`}
                      className={`clay-card bg-white p-6 md:p-8 cursor-pointer group ${isLarge ? 'md:col-span-2' : ''}`}
                    >
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18V5L21 12L9 19V18Z" fill="currentColor"/>
                          </svg>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-gray-600 text-sm md:text-base mb-3 font-medium line-clamp-2">
                            {article.description}
                          </p>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500 font-medium">{article.date}</span>
                            <span className="text-indigo-600 font-bold group-hover:translate-x-2 transition-transform inline-block">
                              阅读更多 →
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}

        {/* Back to Home CTA */}
        <div className="text-center mt-16">
          <Link
            href="/"
            className="clay-button inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-10 py-5 font-black text-lg"
          >
            <svg className="inline-block w-6 h-6 mr-2 -mt-1" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            返回首页
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-indigo-200 mt-16 py-8 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-800 font-bold text-lg">{siteConfig.name} © 2025</p>
          <p className="text-sm text-gray-600 mt-2 font-medium">让音乐陪伴孩子快乐成长</p>
        </div>
      </footer>
    </div>
  )
}
