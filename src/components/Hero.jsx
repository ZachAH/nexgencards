import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import charizardImg from '../../images/charizard.jpg'

/* ── Sparkle particle ── */
function Sparkle({ style }) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        width: 8, height: 8,
        ...style,
      }}
    >
      <svg viewBox="0 0 20 20" fill="currentColor" style={{ color: '#ffd700', filter: 'drop-shadow(0 0 4px #ffd700)' }}>
        <path d="M10 0 L11.5 8.5 L20 10 L11.5 11.5 L10 20 L8.5 11.5 L0 10 L8.5 8.5 Z" />
      </svg>
    </div>
  )
}

/* ── Ember particle ── */
function Ember({ style, delay }) {
  return (
    <div
      className="absolute pointer-events-none rounded-full"
      style={{
        width: 5, height: 5,
        background: 'radial-gradient(circle, #fff7ed, #ff6b00)',
        boxShadow: '0 0 6px #ff6b00',
        animation: `ember-rise ${1.2 + Math.random() * 0.8}s ease-out ${delay}s infinite`,
        ...style,
      }}
    />
  )
}

/* Static sparkle positions (stable across renders) */
const SPARKLES = [
  { top: '8%',  left: '-12%', animationDelay: '0s',    animationDuration: '2.1s', width: 14, height: 14 },
  { top: '22%', left: '-8%',  animationDelay: '0.7s',  animationDuration: '1.8s', width: 10, height: 10 },
  { top: '5%',  right: '-10%',animationDelay: '0.3s',  animationDuration: '2.4s', width: 12, height: 12 },
  { top: '40%', right: '-14%',animationDelay: '1.1s',  animationDuration: '2.0s', width: 9,  height: 9  },
  { top: '60%', left: '-10%', animationDelay: '0.5s',  animationDuration: '2.6s', width: 11, height: 11 },
  { top: '75%', right: '-8%', animationDelay: '1.4s',  animationDuration: '1.9s', width: 8,  height: 8  },
  { top: '85%', left: '-6%',  animationDelay: '0.9s',  animationDuration: '2.2s', width: 7,  height: 7  },
  { top: '15%', right: '-6%', animationDelay: '1.8s',  animationDuration: '2.5s', width: 10, height: 10 },
]

const EMBERS = [
  { bottom: '2%', left: '20%',  '--dx': '-8px',  delay: 0    },
  { bottom: '2%', left: '35%',  '--dx': '12px',  delay: 0.4  },
  { bottom: '2%', left: '50%',  '--dx': '-5px',  delay: 0.8  },
  { bottom: '2%', left: '65%',  '--dx': '10px',  delay: 1.2  },
  { bottom: '2%', left: '80%',  '--dx': '-14px', delay: 0.2  },
  { bottom: '2%', left: '10%',  '--dx': '7px',   delay: 1.6  },
]

export default function Hero() {
  const cardRef = useRef(null)
  const [hovered, setHovered] = useState(false)
  const [revealed, setRevealed] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 250, damping: 28 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 250, damping: 28 })

  // Holo gradient follows mouse
  const holoX = useTransform(x, [-0.5, 0.5], ['0%', '100%'])
  const holoY = useTransform(y, [-0.5, 0.5], ['0%', '100%'])

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 200)
    return () => clearTimeout(t)
  }, [])

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setHovered(false)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #151515 50%, #0a0a0a 100%)',
      }}>
        <div className="absolute inset-0 opacity-30" style={{
          background: 'linear-gradient(135deg, rgba(0,242,255,0.03) 0%, transparent 50%, rgba(255,77,0,0.03) 100%)',
        }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Text ── */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-xs font-bold tracking-[0.3em] uppercase px-3 py-1 rounded-sm border"
                style={{ fontFamily: 'Orbitron, sans-serif', color: '#00f2ff', borderColor: 'rgba(0,242,255,0.3)', background: 'rgba(0,242,255,0.05)' }}>
                Milwaukee's Premier Hobby Shop
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-black leading-none mb-2 uppercase tracking-tight"
              style={{ fontFamily: 'Orbitron, sans-serif', color: '#ffffff' }}>COLLECT</motion.h1>
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-black leading-none mb-2 uppercase tracking-tight flicker"
              style={{ fontFamily: 'Orbitron, sans-serif', color: '#00f2ff' }}>GRADE</motion.h1>
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-black leading-none mb-8 uppercase tracking-tight"
              style={{ fontFamily: 'Orbitron, sans-serif', color: '#ff4d00' }}>DOMINATE</motion.h1>

            <motion.p variants={itemVariants} className="text-gray-400 text-lg leading-relaxed max-w-md mb-10">
              Sports cards, Pokémon, collectibles, and video games — all under one roof.
              Break boxes, find singles, and get your slabs professionally graded.
              <span className="text-gray-300 font-medium"> 1432 E Brady St, Milwaukee.</span>
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a href="#categories"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded font-bold text-sm uppercase tracking-widest text-black transition-all duration-300 hover:scale-105 pulse-cyan"
                style={{ fontFamily: 'Orbitron, sans-serif', background: '#00f2ff' }}>
                Shop Now
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a href="#grading"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 border"
                style={{ fontFamily: 'Orbitron, sans-serif', color: '#ff4d00', borderColor: 'rgba(255,77,0,0.5)', background: 'rgba(255,77,0,0.05)' }}>
                Get Grading
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-14 flex gap-10 border-t pt-8" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              {[
                { label: 'Cards in Stock', value: '10K+' },
                { label: 'Slabs Graded',   value: '500+' },
                { label: 'Happy Collectors', value: '1K+' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div className="text-2xl font-black" style={{ fontFamily: 'Orbitron, sans-serif', color: '#00f2ff' }}>{value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Chase Card Showcase ── */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
            className="flex flex-col items-center gap-5"
          >
            {/* CHASE CARD header label */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="text-lg">🔥</span>
              <span
                className="text-xs font-black tracking-[0.35em] uppercase px-4 py-1.5 rounded-full chase-badge"
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  color: '#ffd700',
                  background: 'linear-gradient(135deg, rgba(255,215,0,0.12), rgba(255,140,0,0.08))',
                  border: '1px solid rgba(255,215,0,0.5)',
                }}
              >
                Secret Rare · 107/105
              </span>
              <span className="text-lg">🔥</span>
            </motion.div>

            {/* The Card */}
            <div className="relative" style={{ perspective: 1200 }}>

              {/* Outer gold aura ring */}
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none gold-aura"
                style={{ margin: '-16px', borderRadius: '20px' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: revealed ? 1 : 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />

              {/* Sparkle particles */}
              {revealed && SPARKLES.map((s, i) => (
                <Sparkle key={i} style={{
                  ...s,
                  animation: `sparkle-pop ${s.animationDuration} ${s.animationDelay} ease-in-out infinite`,
                }} />
              ))}

              {/* 3D tilt card */}
              <motion.div
                ref={cardRef}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={handleMouseLeave}
                className="relative cursor-pointer"
                initial={{ scale: 0, rotateY: -30, filter: 'brightness(3) saturate(0)' }}
                animate={revealed
                  ? { scale: 1, rotateY: 0, filter: 'brightness(1) saturate(1)' }
                  : {}}
                transition={{ delay: 0.7, duration: 1.1, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ scale: 1.03 }}
              >
                {/* PSA slab */}
                <div
                  className="relative w-72 rounded-xl overflow-hidden rainbow-border-anim"
                  style={{
                    background: 'linear-gradient(160deg, #1c1c2e, #0d0d1a)',
                    borderWidth: '3px',
                  }}
                >
                  {/* PSA header */}
                  <div className="flex items-center justify-between px-4 py-2.5" style={{ background: '#cc0000' }}>
                    <span className="text-white text-sm font-black tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>PSA</span>
                    <div className="text-right">
                      <div className="text-white text-[9px] font-bold tracking-wider">AUTHENTIC</div>
                      <div className="text-yellow-300 text-[9px] font-black">GEM MINT</div>
                    </div>
                  </div>

                  {/* Card image */}
                  <div className="relative overflow-hidden" style={{ background: '#f5e6c0' }}>
                    <img
                      src={charizardImg}
                      alt="Shining Charizard 107/105 PSA 10"
                      className="w-full object-cover"
                      style={{ height: '390px', display: 'block' }}
                    />

                    {/* Rainbow holo sweep */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'linear-gradient(125deg, rgba(255,0,128,0.12), rgba(255,140,0,0.14), rgba(255,215,0,0.16), rgba(0,242,255,0.12), rgba(168,85,247,0.12), rgba(255,0,128,0.12))',
                        backgroundSize: '300% 300%',
                        animation: 'holo-sweep 4s ease infinite',
                        mixBlendMode: 'screen',
                      }}
                    />

                    {/* Mouse-tracking specular glare */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: hovered
                          ? `radial-gradient(ellipse 60% 40% at ${holoX} ${holoY}, rgba(255,255,255,0.22) 0%, transparent 70%)`
                          : 'none',
                        mixBlendMode: 'screen',
                        transition: 'background 0.05s',
                      }}
                    />

                    {/* Gold foil shimmer lines */}
                    <div className="absolute inset-0 pointer-events-none" style={{
                      background: 'repeating-linear-gradient(105deg, transparent 0px, transparent 4px, rgba(255,215,0,0.04) 4px, rgba(255,215,0,0.04) 5px)',
                      mixBlendMode: 'screen',
                    }} />

                    {/* Embers at bottom */}
                    {revealed && EMBERS.map((e, i) => (
                      <Ember key={i} style={{ bottom: e.bottom, left: e.left, '--dx': e['--dx'] }} delay={e.delay} />
                    ))}

                    {/* PSA 10 grade badge */}
                    <div
                      className="absolute bottom-3 right-3 w-16 h-16 rounded-full flex flex-col items-center justify-center font-black chase-badge"
                      style={{
                        background: 'radial-gradient(circle at 35% 35%, #cc0000, #660000)',
                        border: '2px solid rgba(255,100,100,0.8)',
                        fontFamily: 'Orbitron, sans-serif',
                      }}
                    >
                      <span className="text-white text-[8px] tracking-wider">GEM</span>
                      <span className="text-white text-2xl leading-none font-black">10</span>
                      <span className="text-white text-[8px] tracking-wider">MT</span>
                    </div>
                  </div>

                  {/* PSA footer */}
                  <div className="px-4 py-2.5 flex items-center justify-between" style={{ background: 'rgba(0,0,0,0.9)' }}>
                    <div>
                      <div className="font-black text-[11px] tracking-widest uppercase" style={{ color: '#ffd700' }}>
                        Shining Charizard
                      </div>
                      <div className="text-gray-500 text-[9px] tracking-wider">Neo Destiny · 107/105 Secret Rare</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[9px] text-gray-600">CERT #</div>
                      <div className="text-[10px] font-mono" style={{ color: '#ffd700' }}>08803291</div>
                    </div>
                  </div>
                </div>

                {/* Ground glow shadow */}
                <div
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-60 h-8 rounded-full blur-2xl"
                  style={{ background: hovered ? 'rgba(255,215,0,0.55)' : 'rgba(255,215,0,0.28)', transition: 'background 0.3s' }}
                />
              </motion.div>
            </div>

            {/* "In our collection" label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="text-center"
            >
              <span className="text-xs text-gray-600 tracking-widest uppercase" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Currently in our collection
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[10px] tracking-widest text-gray-600 uppercase" style={{ fontFamily: 'Orbitron, sans-serif' }}>Scroll</span>
        <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, rgba(0,242,255,0.5), transparent)' }} />
      </motion.div>
    </section>
  )
}
