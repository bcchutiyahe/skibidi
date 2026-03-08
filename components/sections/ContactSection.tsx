import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" style={{ background: 'white', padding: '80px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="badge-navy" style={{ marginBottom: 12, display: 'inline-block' }}>Get In Touch</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 4vw, 40px)', color: 'var(--navy)', marginBottom: 12 }}>
            Visit Us or WhatsApp Anytime
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>Free counselling. No appointments needed. Walk in or message us.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, maxWidth: 900, margin: '0 auto' }}>
          {[
            { icon: MapPin, title: 'Our Office', lines: ['402, Silver Sanchora Castle', 'RNT Marg, Regal Square', 'South Tukoganj, Indore MP 452001'] },
            { icon: Phone, title: 'Call / WhatsApp', lines: ['+91 7909500055', '+91 79872 37747', 'Available Mon–Sat'] },
            { icon: Clock, title: 'Working Hours', lines: ['Monday – Saturday', '9:00 AM – 7:00 PM', 'Sunday: By Appointment'] },
          ].map(({ icon: Icon, title, lines }) => (
            <div key={title} style={{ background: 'var(--cream)', borderRadius: 14, padding: 28, border: '1px solid var(--border)', textAlign: 'center' }}>
              <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <Icon size={22} style={{ color: 'white' }} />
              </div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', color: 'var(--navy)', fontSize: 18, marginBottom: 12 }}>{title}</h3>
              {lines.map(l => <p key={l} style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.8 }}>{l}</p>)}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a
            href="https://wa.me/917909500055?text=Hi%20Educational%20Mitra%2C%20I%20want%20to%20visit%20your%20office%20for%20admission%20guidance"
            target="_blank" rel="noopener"
            className="btn-gold"
            style={{ fontSize: 16, padding: '14px 36px' }}
          >
            <MessageCircle size={18} /> WhatsApp Now for Free Counselling
          </a>
        </div>
      </div>
    </section>
  )
}
