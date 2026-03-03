import { siteConfig } from '@/site.config'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 50%, #DDD6FE 100%)' }}>
      {/* Floating Header */}
      <header className="sticky top-4 z-50 mx-4 md:mx-8">
        <div className="clay-card max-w-6xl mx-auto px-6 py-4 bg-white/90 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                {siteConfig.name}
              </h1>
              <p className="text-sm text-gray-600 mt-1 font-medium">{siteConfig.description}</p>
            </div>
            <Link 
              href="/articles"
              className="clay-button hidden md:block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 font-bold text-sm"
            >
              浏览文章
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section - Wave Layout */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-16 relative">
          {/* SVG Decorations */}
          <div className="absolute -top-8 left-1/4 w-16 h-16 opacity-60">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-orange-400">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
            </svg>
          </div>
          <div className="absolute -top-8 right-1/4 w-16 h-16 opacity-60">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-pink-400">
              <circle cx="12" cy="12" r="10" fill="currentColor"/>
            </svg>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 relative z-10 leading-tight">
            让每个节日都充满<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">欢乐歌声</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium max-w-2xl mx-auto">
            专为小朋友准备的节日歌曲，让孩子在音乐中快乐成长
          </p>
          
          {/* CTA */}
          <a 
            href={siteConfig.targetProduct.url}
            target="_blank"
            rel="noopener noreferrer"
            className="clay-button inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-10 py-5 font-black text-lg shadow-xl"
          >
            <svg className="inline-block w-6 h-6 mr-2 -mt-1" viewBox="0 0 24 24" fill="none">
              <path d="M9 18V5L21 12L9 19V18Z" fill="currentColor"/>
            </svg>
            用 AI 生成专属歌曲
          </a>
        </div>

        {/* Categories - Puzzle/Staggered Layout */}
        <div className="mb-16">
          <h3 className="text-3xl font-black text-gray-900 mb-8 text-center">探索节日音乐</h3>
          
          {/* Staggered Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {siteConfig.theme.categories.map((category, index) => {
              const icons = [
                // 六一儿童节
                <svg key="1" viewBox="0 0 24 24" fill="none" className="w-12 h-12"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/></svg>,
                // 春节
                <svg key="2" viewBox="0 0 24 24" fill="none" className="w-12 h-12"><circle cx="12" cy="12" r="10" fill="currentColor"/></svg>,
                // 中秋节
                <svg key="3" viewBox="0 0 24 24" fill="none" className="w-12 h-12"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor"/></svg>,
                // 元宵节
                <svg key="4" viewBox="0 0 24 24" fill="none" className="w-12 h-12"><circle cx="12" cy="8" r="6" fill="currentColor"/><path d="M12 14v8" stroke="currentColor" strokeWidth="2"/></svg>,
                // 国庆节
                <svg key="5" viewBox="0 0 24 24" fill="none" className="w-12 h-12"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" fill="currentColor"/><line x1="4" y1="22" x2="4" y2="15" stroke="currentColor" strokeWidth="2"/></svg>,
                // 圣诞节
                <svg key="6" viewBox="0 0 24 24" fill="none" className="w-12 h-12"><path d="M12 2L2 12h3v8h14v-8h3L12 2z" fill="currentColor"/></svg>
              ]
              
              const gradients = [
                'from-pink-400 to-rose-400',
                'from-red-500 to-orange-500',
                'from-yellow-400 to-amber-500',
                'from-green-400 to-emerald-500',
                'from-blue-400 to-cyan-500',
                'from-purple-500 to-pink-500'
              ]
              
              // Staggered positioning
              const staggerClass = index % 3 === 1 ? 'md:mt-8' : ''
              
              return (
                <Link
                  key={category}
                  href="/articles"
                  className={`clay-card bg-gradient-to-br ${gradients[index]} p-6 md:p-8 cursor-pointer group ${staggerClass}`}
                >
                  <div className="text-white mb-4 transform group-hover:scale-110 transition-transform duration-200">
                    {icons[index]}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white drop-shadow-lg">{category}</h3>
                  <p className="text-sm text-white/90 mt-2 font-semibold">点击探索 →</p>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Articles CTA - Wave Shape */}
        <div className="mb-16 relative">
          <div className="clay-card bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 md:p-12 text-white text-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" fill="white"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black mb-4">发现更多精彩内容</h3>
              <p className="text-lg mb-6 text-white/90 font-medium">
                节日歌曲推荐、亲子音乐活动、儿童音乐教育
              </p>
              <Link
                href="/articles"
                className="clay-button inline-block bg-white text-purple-600 px-8 py-4 font-black text-lg"
              >
                浏览所有文章 →
              </Link>
            </div>
          </div>
        </div>

        {/* Product Promotion - Circular Layout */}
        <div className="mb-16">
          <div className="clay-card bg-white p-8 md:p-12 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200 rounded-full opacity-20 -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-200 rounded-full opacity-20 -ml-20 -mb-20"></div>
            
            <div className="relative z-10 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18V5L21 12L9 19V18Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">想为孩子定制专属歌曲？</h3>
                  <p className="text-gray-700 mb-4 font-medium text-lg">
                    {siteConfig.targetProduct.description}
                  </p>
                  <a 
                    href={siteConfig.targetProduct.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clay-button inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 font-black"
                  >
                    立即体验 →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Sites - Horizontal Scroll Cards */}
        <div className="border-t-4 border-dashed border-indigo-200 pt-12">
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 text-center">更多精彩推荐</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {siteConfig.relatedSites.map((site, index) => {
              const bgColors = ['bg-pink-50', 'bg-yellow-50', 'bg-green-50']
              const textColors = ['text-pink-600', 'text-yellow-700', 'text-green-600']
              const borderColors = ['border-pink-200', 'border-yellow-200', 'border-green-200']
              
              return (
                <a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`clay-card ${bgColors[index]} p-6 cursor-pointer border-4 ${borderColors[index]} group`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-lg font-black ${textColors[index]}`}>{site.name}</span>
                    <svg className={`w-6 h-6 ${textColors[index]} transform group-hover:translate-x-2 transition-transform`} viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              )
            })}
          </div>
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
