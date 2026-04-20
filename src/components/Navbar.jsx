import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../../images/nexgen_logo.jpg'

const links = [
  { label: 'Breaks', href: '#breaks' },
  { label: 'Singles', href: '#singles' },
  { label: 'Grading', href: '#grading' },
  { label: 'Visit Us', href: '#location' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,242,255,0.1)' : '1px solid transparent',
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="NexGen Cards"
            className="h-10 w-10 rounded-sm object-cover"
          />
          <span
            className="font-bold text-lg tracking-widest text-white uppercase hidden sm:block"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            NexGen <span style={{ color: '#00f2ff' }}>Cards</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-widest uppercase text-gray-400 hover:text-white transition-colors duration-200 relative group"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                style={{ background: '#00f2ff', boxShadow: '0 0 6px #00f2ff' }}
              />
            </a>
          ))}
          <a
            href="tel:+14143493060"
            className="px-5 py-2 rounded text-sm font-bold tracking-widest uppercase border border-current transition-all duration-300 hover:bg-[#00f2ff] hover:text-black"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              color: '#00f2ff',
              borderColor: '#00f2ff',
            }}
          >
            Call Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-0.5 w-6 transition-all duration-300"
              style={{
                background: '#00f2ff',
                transformOrigin: 'center',
                transform:
                  menuOpen
                    ? i === 0
                      ? 'rotate(45deg) translate(4px, 4px)'
                      : i === 2
                      ? 'rotate(-45deg) translate(4px, -4px)'
                      : 'scaleX(0)'
                    : 'none',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
            style={{
              background: 'rgba(10,10,10,0.95)',
              borderBottom: '1px solid rgba(0,242,255,0.2)',
            }}
          >
            <nav className="flex flex-col px-6 pb-6 pt-2 gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium tracking-widest uppercase text-gray-300 hover:text-white py-2 border-b border-gray-800"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+14143493060"
                className="mt-2 text-center px-5 py-3 rounded text-sm font-bold tracking-widest uppercase"
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  color: '#00f2ff',
                  border: '1px solid #00f2ff',
                }}
              >
                +1 414-349-3060
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
