import { motion } from 'framer-motion'

const rareCards = [
  { name: 'Shining Charizard',    set: 'Neo Destiny',       grade: 'PSA 10', number: '107/105', color: '#ff6b00' },
  { name: 'Charizard Holo',       set: 'Base Set 1st Ed.',  grade: 'PSA 9',  number: '4/102',   color: '#ff4d00' },
  { name: 'Pikachu Illustrator',  set: 'CoroCoro Promo',    grade: 'PSA 7',  number: 'Promo',   color: '#ffd700' },
  { name: 'Lugia',                set: 'Neo Genesis 1st Ed.',grade: 'BGS 9.5',number: '9/111',   color: '#00f2ff' },
  { name: 'Blastoise Holo',       set: 'Base Set 1st Ed.',  grade: 'PSA 8',  number: '2/102',   color: '#00aaff' },
  { name: 'Mewtwo Holo',          set: 'Base Set',          grade: 'PSA 10', number: '10/102',  color: '#a855f7' },
  { name: 'Ancient Mew',          set: 'Movie Promo',       grade: 'PSA 9',  number: 'Promo',   color: '#ec4899' },
  { name: 'Umbreon Gold Star',    set: 'POP Series 5',      grade: 'PSA 10', number: '17/17',   color: '#ffd700' },
  { name: 'Rayquaza Gold Star',   set: 'EX Deoxys',         grade: 'BGS 9',  number: '107/107', color: '#00f2ff' },
  { name: 'Trophy Pikachu',       set: 'Trainer Promo',     grade: 'PSA 8',  number: 'No. 3',   color: '#ffd700' },
  { name: '1st Ed. Chansey',      set: 'Base Set',          grade: 'PSA 10', number: '3/102',   color: '#ff6b00' },
  { name: 'Espeon Gold Star',     set: 'POP Series 5',      grade: 'PSA 9',  number: '16/17',   color: '#a855f7' },
]

// Double for seamless loop
const allCards = [...rareCards, ...rareCards]

function GradeTag({ grade }) {
  const isPSA10 = grade === 'PSA 10'
  const isBGS95 = grade === 'BGS 9.5'
  return (
    <span
      className="text-[9px] font-black tracking-widest px-1.5 py-0.5 rounded"
      style={{
        fontFamily: 'Orbitron, sans-serif',
        background: isPSA10 ? 'rgba(255,215,0,0.15)' : isBGS95 ? 'rgba(0,242,255,0.12)' : 'rgba(255,255,255,0.06)',
        color: isPSA10 ? '#ffd700' : isBGS95 ? '#00f2ff' : '#aaa',
        border: `1px solid ${isPSA10 ? 'rgba(255,215,0,0.4)' : isBGS95 ? 'rgba(0,242,255,0.3)' : 'rgba(255,255,255,0.1)'}`,
      }}
    >
      {grade}
    </span>
  )
}

function CardChip({ card }) {
  return (
    <div
      className="inline-flex items-center gap-3 mx-3 px-4 py-3 rounded-lg shrink-0 group cursor-default"
      style={{
        background: 'linear-gradient(135deg, #111, #161616)',
        border: `1px solid ${card.color}22`,
        transition: 'border-color 0.3s, box-shadow 0.3s',
        minWidth: 220,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = card.color + '66'
        e.currentTarget.style.boxShadow = `0 0 15px ${card.color}22`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = card.color + '22'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Color dot */}
      <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: card.color, boxShadow: `0 0 8px ${card.color}` }} />

      {/* Card info */}
      <div className="min-w-0">
        <div className="text-xs font-bold text-white truncate" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          {card.name}
        </div>
        <div className="text-[10px] text-gray-600 truncate mt-0.5">
          {card.set} · {card.number}
        </div>
      </div>

      <GradeTag grade={card.grade} />
    </div>
  )
}

export default function ChaseCollection() {
  return (
    <section className="relative py-16 overflow-hidden" style={{ borderTop: '1px solid rgba(0,242,255,0.08)', borderBottom: '1px solid rgba(0,242,255,0.08)' }}>
      {/* Subtle bg */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to right, #0a0a0a, rgba(255,215,0,0.015) 50%, #0a0a0a)',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-8">
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-base">🏆</span>
              <span
                className="text-xs font-bold tracking-[0.3em] uppercase"
                style={{ fontFamily: 'Orbitron, sans-serif', color: '#ffd700' }}
              >
                Chase Collection
              </span>
            </div>
            <h2
              className="text-2xl font-black uppercase text-white"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              Rare Slabs We <span style={{ color: '#ffd700' }}>Carry</span>
            </h2>
          </div>

          <motion.a
            href="#categories"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              color: '#ffd700',
              border: '1px solid rgba(255,215,0,0.3)',
              background: 'rgba(255,215,0,0.05)',
            }}
            whileHover={{ scale: 1.04, boxShadow: '0 0 15px rgba(255,215,0,0.25)' }}
          >
            View All
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Scrolling ticker */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #0a0a0a, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #0a0a0a, transparent)' }} />

        <div className="ticker-wrap py-1">
          <div className="ticker-inner">
            {allCards.map((card, i) => (
              <CardChip key={`${card.name}-${i}`} card={card} />
            ))}
          </div>
        </div>
      </div>

      {/* PSA 10 callout bar */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div
          className="rounded-lg p-4 flex flex-wrap items-center justify-between gap-4"
          style={{
            background: 'linear-gradient(135deg, rgba(255,215,0,0.06), rgba(255,140,0,0.04))',
            border: '1px solid rgba(255,215,0,0.2)',
          }}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🃏</span>
            <div>
              <div className="text-sm font-bold text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Looking for a specific card?
              </div>
              <div className="text-xs text-gray-500 mt-0.5">
                We source rare slabs and singles on request. Come in and let's talk.
              </div>
            </div>
          </div>
          <a
            href="#location"
            className="text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded transition-all duration-200 hover:scale-105"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              color: '#0a0a0a',
              background: 'linear-gradient(135deg, #ffd700, #ff8c00)',
              boxShadow: '0 0 20px rgba(255,215,0,0.3)',
            }}
          >
            Visit the Shop
          </a>
        </div>
      </motion.div>
    </section>
  )
}
