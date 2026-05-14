import { motion } from 'framer-motion'

const hours = [
  { day: 'Monday – Thursday', time: '11:00 AM – 7:00 PM' },
  { day: 'Friday', time: '11:00 AM – 8:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 8:00 PM' },
  { day: 'Sunday', time: '11:00 AM – 6:00 PM' },
]

const contactInfo = [
  {
    label: 'Email',
    value: 'info@localcardshop.com',
    href: 'mailto:info@localcardshop.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
]

export default function LocationContact() {
  return (
    <section id="location" className="relative py-28 overflow-hidden">
      {/* Subtle top/bottom border lines */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(0,242,255,0.2), transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(255,77,0,0.2), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
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
            Find Us
          </span>
          <h2
            className="text-4xl lg:text-5xl font-black uppercase mt-3 mb-4 text-white"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Visit <span style={{ color: '#ff4d00' }}>Main Street</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Come browse the shelves, break a box, or drop off cards for grading. We're your neighborhood hobby shop.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact info + hours */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Contact details */}
            <div
              className="rounded-lg p-6"
              style={{ background: '#111', border: '1px solid #1a1a1a' }}
            >
              <h3 className="text-sm font-bold tracking-widest uppercase mb-5 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Contact
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.label === 'Address' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div
                      className="shrink-0 mt-0.5 p-2 rounded transition-colors duration-200"
                      style={{
                        color: '#00f2ff',
                        background: 'rgba(0,242,255,0.08)',
                        border: '1px solid rgba(0,242,255,0.15)',
                      }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 uppercase tracking-widest mb-0.5" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                        {info.label}
                      </div>
                      <div className="text-gray-300 group-hover:text-white transition-colors duration-200 text-sm">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div
              className="rounded-lg p-6 flex-1"
              style={{ background: '#111', border: '1px solid #1a1a1a' }}
            >
              <h3 className="text-sm font-bold tracking-widest uppercase mb-5 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Store Hours
              </h3>
              <div className="space-y-3">
                {hours.map(({ day, time }) => (
                  <div key={day} className="flex justify-between items-center py-2 border-b" style={{ borderColor: '#1a1a1a' }}>
                    <span className="text-gray-500 text-sm">{day}</span>
                    <span className="text-sm font-medium" style={{ color: '#00f2ff', fontFamily: 'Orbitron, sans-serif', fontSize: '11px' }}>
                      {time}
                    </span>
                  </div>
                ))}
              </div>


            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
