import { motion } from 'framer-motion'
import productsImg from '../../images/products.jpg'

const categories = [
  {
    title: 'Sports Cards',
    description: 'NFL, NBA, MLB & NHL. Rookies, autos, patches — we pull them all. Singles and sealed wax in stock.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
      </svg>
    ),
    accent: '#00f2ff',
    tag: 'Most Popular',
  },
  {
    title: 'Pokémon',
    description: 'Booster packs, ETBs, vintage binders, and rare holos. Your next chase card is waiting.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    accent: '#ff4d00',
    tag: 'Hot Right Now',
  },
  {
    title: 'Collectibles',
    description: 'Funko Pops, Magic: The Gathering, comic books, and rare memorabilia. Browse our packed shelves.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    accent: '#00f2ff',
    tag: 'Huge Selection',
  },
  {
    title: 'Video Games',
    description: 'Retro consoles, loose carts, CIB games, and modern releases. NES to Switch — we\'ve got it.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
    accent: '#ff4d00',
    tag: 'Buy & Sell',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function ProductCategories() {
  return (
    <section id="categories" className="relative py-28 overflow-hidden">
      {/* Background products image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={productsImg}
          alt=""
          className="w-full h-full object-cover opacity-5"
          style={{ filter: 'saturate(0)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #0a0a0a, transparent 30%, transparent 70%, #0a0a0a)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="text-xs font-bold tracking-[0.3em] uppercase"
            style={{ fontFamily: 'Orbitron, sans-serif', color: '#00f2ff' }}
          >
            What We Carry
          </span>
          <h2
            className="text-4xl lg:text-5xl font-black uppercase mt-3 mb-4 text-white"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Shop by <span style={{ color: '#00f2ff' }}>Category</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From sealed wax to graded slabs, vintage classics to modern pulls — we stock what collectors actually want.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              className="category-card relative rounded-lg p-6 cursor-pointer group"
              style={{ background: '#111111' }}
            >
              {/* Top tag */}
              <div className="mb-4">
                <span
                  className="text-[9px] font-bold tracking-[0.25em] uppercase px-2 py-1 rounded-sm"
                  style={{
                    color: cat.accent,
                    background: `${cat.accent}18`,
                    border: `1px solid ${cat.accent}33`,
                    fontFamily: 'Orbitron, sans-serif',
                  }}
                >
                  {cat.tag}
                </span>
              </div>

              {/* Icon */}
              <div
                className="mb-4 inline-flex p-3 rounded-lg transition-all duration-300 group-hover:scale-110"
                style={{
                  color: cat.accent,
                  background: `${cat.accent}10`,
                  border: `1px solid ${cat.accent}20`,
                }}
              >
                {cat.icon}
              </div>

              <h3
                className="text-lg font-bold mb-2 text-white group-hover:text-[#00f2ff] transition-colors duration-300"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                {cat.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {cat.description}
              </p>

              {/* Bottom CTA */}
              <div className="mt-6 flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 group-hover:gap-3" style={{ color: cat.accent, fontFamily: 'Orbitron, sans-serif' }}>
                Browse
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 overflow-hidden group-hover:w-8 group-hover:h-8 transition-all duration-300"
                style={{ borderTop: `2px solid ${cat.accent}`, borderRight: `2px solid ${cat.accent}` }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
