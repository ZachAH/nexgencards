import { motion } from 'framer-motion'
const steps = [
  {
    number: '01',
    title: 'Submit Your Cards',
    description: 'Bring your cards in-store or ship them to us. We accept PSA, BGS, CGC, SGC, and more. No order minimums.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Expert Assessment',
    description: 'Our team evaluates centering, corners, edges, and surface. We give you honest grade estimates before you submit.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0016.803 15.803zM13.5 10.5h-6" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Track & Receive',
    description: 'We handle all the paperwork, shipping, and tracking. Your graded slab comes back safely — ready to display or flip.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
]

const gradingCompanies = ['PSA', 'BGS', 'CGC', 'SGC', 'HGA']

export default function GradingFeaturette() {
  return (
    <section id="grading" className="relative py-28 overflow-hidden schematic-bg">
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 rounded-full blur-3xl opacity-10"
          style={{ background: '#00f2ff' }} />
        <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full blur-3xl opacity-8"
          style={{ background: '#ff4d00' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Owner photo + trust badges */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div
              className="relative rounded-lg p-10 text-center"
              style={{
                background: 'linear-gradient(135deg, #111, #1a1a1a)',
                border: '1px solid rgba(0,242,255,0.15)',
                minHeight: '480px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2" style={{ borderColor: '#00f2ff' }} />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2" style={{ borderColor: '#ff4d00' }} />

              <span
                className="text-4xl lg:text-5xl font-black uppercase text-white mb-4"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                Local <span style={{ color: '#00f2ff' }}>Card Shop</span>
              </span>
              <p className="text-gray-500 text-sm max-w-xs mx-auto leading-relaxed mb-8">
                Milwaukee's trusted hobby shop for sports cards, Pokémon, collectibles & grading since 2014.
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { label: 'Cards in Stock', value: '10K+' },
                  { label: 'Slabs Graded', value: '500+' },
                  { label: 'Happy Collectors', value: '1K+' },
                ].map(({ label, value }) => (
                  <div key={label} className="text-center">
                    <div className="text-2xl font-black" style={{ fontFamily: 'Orbitron, sans-serif', color: '#00f2ff' }}>{value}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">{label}</div>
                  </div>
                ))}
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 rounded-lg p-4"
                style={{
                  background: 'linear-gradient(135deg, #111, #1a1a1a)',
                  border: '1px solid rgba(0,242,255,0.3)',
                  boxShadow: '0 0 20px rgba(0,242,255,0.2)',
                }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="text-xs text-gray-500 uppercase tracking-widest mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>Experience</div>
                <div className="text-2xl font-black" style={{ fontFamily: 'Orbitron, sans-serif', color: '#00f2ff' }}>10+</div>
                <div className="text-xs text-gray-400">Years in the hobby</div>
              </motion.div>
            </div>

            {/* Grading partners */}
            <div className="mt-12">
              <div className="text-xs text-gray-600 uppercase tracking-widest mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                We Submit To
              </div>
              <div className="flex flex-wrap gap-3">
                {gradingCompanies.map((company) => (
                  <span
                    key={company}
                    className="px-4 py-2 rounded text-sm font-bold tracking-widest"
                    style={{
                      fontFamily: 'Orbitron, sans-serif',
                      color: '#e5e5e5',
                      background: '#111',
                      border: '1px solid #1a1a1a',
                    }}
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Steps */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span
              className="text-xs font-bold tracking-[0.3em] uppercase"
              style={{ fontFamily: 'Orbitron, sans-serif', color: '#00f2ff' }}
            >
              Professional Grading
            </span>
            <h2
              className="text-4xl lg:text-5xl font-black uppercase mt-3 mb-4 text-white leading-tight"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              Get Your Cards <span style={{ color: '#00f2ff' }}>Slabbed</span>
            </h2>
            <p className="text-gray-500 text-lg mb-12 leading-relaxed">
              A graded PSA 10 is worth 10x raw. We help you identify, submit, and receive your slabs — hassle-free. Walk in with a binder, leave with a plan.
            </p>

            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  className="flex gap-6 items-start"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  {/* Number + line */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center font-black text-sm shrink-0"
                      style={{
                        fontFamily: 'Orbitron, sans-serif',
                        color: '#00f2ff',
                        background: 'rgba(0,242,255,0.08)',
                        border: '1px solid rgba(0,242,255,0.25)',
                      }}
                    >
                      {step.number}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px h-full mt-2 min-h-8" style={{ background: 'linear-gradient(to bottom, rgba(0,242,255,0.3), transparent)' }} />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <span style={{ color: '#00f2ff' }}>{step.icon}</span>
                      <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#location"
              className="inline-flex items-center gap-3 mt-12 px-8 py-4 rounded font-bold text-sm uppercase tracking-widest"
              style={{
                fontFamily: 'Orbitron, sans-serif',
                color: '#ff4d00',
                border: '1px solid rgba(255,77,0,0.4)',
                background: 'rgba(255,77,0,0.05)',
              }}
              whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(255,77,0,0.3)' }}
              whileTap={{ scale: 0.97 }}
            >
              Start Your Submission
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
