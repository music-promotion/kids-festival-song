import { siteConfig } from '@/site.config'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-50 to-green-100">
      {/* Header */}
      <header className="border-b-4 border-rainbow bg-white/90 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            🎵 {siteConfig.name}
          </h1>
          <p className="text-sm text-gray-700 mt-2 font-medium">{siteConfig.description}</p>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 relative">
            {/* 装饰元素 */}
            <div className="absolute top-0 left-1/4 text-6xl animate-bounce">🎈</div>
            <div className="absolute top-0 right-1/4 text-6xl animate-bounce delay-100">🎪</div>
            
            <h2 className="text-5xl font-black text-gray-900 mb-6 relative z-10">
              🌈 让每个节日都充满欢乐歌声！
            </h2>
            <p className="text-xl text-gray-700 mb-8 font-medium">
              专为小朋友准备的节日歌曲，让孩子在音乐中快乐成长 🎶
            </p>
            
            {/* CTA */}
            <a 
              href={siteConfig.targetProduct.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl hover:shadow-2xl"
            >
              ✨ 用 AI 为孩子生成专属歌曲
            </a>
          </div>

          {/* Categories - 卡通风格 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {siteConfig.theme.categories.map((category, index) => {
              const emojis = ['🎉', '🧧', '🥮', '🏮', '🎊', '🎄']
              const colors = [
                'from-pink-400 to-rose-400',
                'from-red-400 to-orange-400',
                'from-yellow-400 to-amber-400',
                'from-green-400 to-emerald-400',
                'from-blue-400 to-cyan-400',
                'from-purple-400 to-pink-400'
              ]
              return (
                <Link
                  key={category}
                  href="/articles"
                  className={`bg-gradient-to-br ${colors[index]} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer border-4 border-white`}
                >
                  <div className="text-5xl mb-3 text-center">{emojis[index]}</div>
                  <h3 className="text-xl font-black text-white text-center drop-shadow-lg">{category}</h3>
                  <p className="text-sm text-white/90 mt-2 text-center font-semibold">点击查看歌曲</p>
                </Link>
              )
            })}
          </div>

          {/* 文章入口 - 彩虹按钮 */}
          <div className="text-center mb-12">
            <Link
              href="/articles"
              className="inline-block bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 text-white px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl"
            >
              📚 浏览所有精彩文章
            </Link>
          </div>

          {/* Product Promotion - 童趣卡片 */}
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-3xl p-10 text-white mb-12 shadow-2xl border-4 border-white relative overflow-hidden">
            <div className="absolute top-0 right-0 text-9xl opacity-20">🎵</div>
            <div className="absolute bottom-0 left-0 text-9xl opacity-20">🎨</div>
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-4">🎁 想为孩子定制专属歌曲？</h3>
              <p className="mb-6 text-pink-50 text-lg font-semibold">
                {siteConfig.targetProduct.description}
              </p>
              <a 
                href={siteConfig.targetProduct.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-black text-lg hover:bg-yellow-300 hover:text-purple-700 transition-colors shadow-lg"
              >
                立即体验 →
              </a>
            </div>
          </div>

          {/* Related Sites - 可爱卡片 */}
          <div className="border-t-4 border-dashed border-pink-300 pt-10">
            <h3 className="text-2xl font-black text-gray-900 mb-6 text-center">🌟 更多精彩推荐</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {siteConfig.relatedSites.map((site, index) => {
                const bgColors = ['bg-pink-100', 'bg-yellow-100', 'bg-green-100']
                const textColors = ['text-pink-600', 'text-yellow-600', 'text-green-600']
                return (
                  <a
                    key={site.url}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block p-6 ${bgColors[index]} rounded-2xl hover:scale-105 transition-transform shadow-md hover:shadow-xl border-2 border-white`}
                  >
                    <span className={`text-base font-black ${textColors[index]}`}>{site.name}</span>
                    <span className="text-2xl block mt-2">→</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-rainbow mt-16 py-8 bg-white/80">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-700 font-semibold">🎈 {siteConfig.name} © 2025 🎈</p>
          <p className="text-sm text-gray-500 mt-2">让音乐陪伴孩子快乐成长</p>
        </div>
      </footer>


    </div>
  )
}
