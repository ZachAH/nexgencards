import { motion } from 'framer-motion'

const hours = [
  { day: 'Monday – Thursday', time: '11:00 AM – 7:00 PM' },
  { day: 'Friday', time: '11:00 AM – 8:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 8:00 PM' },
  { day: 'Sunday', time: '11:00 AM – 6:00 PM' },
]

const contactInfo = [
  {
    label: 'Phone',
    value: '+1 414-349-3060',
    href: 'tel:+14143493060',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'info@nexgencards.com',
    href: 'mailto:info@nexgencards.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'Address',
    value: '1432 E Brady St, Milwaukee, WI 53202',
    href: 'https://maps.google.com/?q=1432+E+Brady+St+Milwaukee+WI',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
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
            Visit <span style={{ color: '#ff4d00' }}>Brady Street</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Come browse the shelves, break a box, or drop off cards for grading. We're right in the heart of Milwaukee's coolest neighborhood.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            className="relative rounded-lg overflow-hidden"
            style={{ border: '1px solid rgba(0,242,255,0.15)', height: '480px' }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 z-10" style={{ borderColor: '#00f2ff' }} />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 z-10" style={{ borderColor: '#ff4d00' }} />

            <iframe
              title="NexGen Cards Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.7!2d-87.8913!3d43.0543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880502d7b6b6b6b7%3A0x1234!2s1432+E+Brady+St%2C+Milwaukee%2C+WI+53202!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus&style=feature:all|element:geometry|color:0x0a0a0a&style=feature:all|element:labels.text.stroke|color:0x0a0a0a&style=feature:all|element:labels.text.fill|color:0x9d9d9d&style=feature:water|element:geometry|color:0x111111&style=feature:road|element:geometry|color:0x1a1a1a&style=feature:road.arterial|element:geometry|color:0x222222"
              width="100%"
              height="100%"
              style={{ filter: 'invert(90%) hue-rotate(180deg) saturate(0.6) brightness(0.8)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

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

              {/* Brady St callout */}
              <div
                className="mt-6 p-4 rounded"
                style={{
                  background: 'rgba(255,77,0,0.06)',
                  border: '1px solid rgba(255,77,0,0.2)',
                }}
              >
                <p className="text-sm text-gray-400">
                  <span style={{ color: '#ff4d00', fontWeight: 700 }}>Brady Street</span> is Milwaukee's most vibrant neighborhood — great food, great people, and now the best hobby shop in the city. Free street parking available.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
