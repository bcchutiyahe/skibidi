const testimonials = [
  { name: 'Priya Sharma', course: 'MBA — Sage University', text: 'Educational Mitra helped me find the perfect MBA college in Indore. The counsellor understood my budget and goals and suggested Sage University. Best decision of my life!', year: '2024' },
  { name: 'Rohit Verma', course: 'MSc AI — Edinburgh Napier, UK', text: 'I was confused between multiple UK universities. The team at Educational Mitra explained each option clearly, handled my application, and I got an offer in 3 weeks!', year: '2024' },
  { name: 'Sneha Joshi', course: 'BBA LLB — Renaissance University', text: 'I wanted an integrated law programme and they knew exactly which colleges offer it. Zero fees for their guidance, complete support. Highly recommend!', year: '2023' },
  { name: 'Aryan Patel', course: 'B.Tech CSE — LNCT University', text: 'As a student from a small town near Indore, I was nervous about admissions. Educational Mitra guided me step by step and I got into a great engineering college.', year: '2023' },
  { name: 'Kavya Malhotra', course: 'MBA — Clark University, USA', text: 'The 1+1 pathway they suggested was exactly what I needed. One year in India, one year in the USA. They handled everything from application to visa guidance.', year: '2024' },
  { name: 'Ankit Dubey', course: 'MBBS — Malwanchal University', text: 'Getting MBBS admission is stressful, but Educational Mitra made it smooth. They knew the exact NEET cutoffs and guided me to the right college immediately.', year: '2023' },
]

export default function Testimonials() {
  return (
    <section style={{ background: 'var(--cream)', padding: '80px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="badge-gold" style={{ marginBottom: 12, display: 'inline-block' }}>Student Stories</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 4vw, 40px)', color: 'var(--navy)', marginBottom: 12 }}>
            What Our Students Say
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>Real stories from students we've guided to their dream colleges.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
          {testimonials.map(t => (
            <div key={t.name} style={{ background: 'white', borderRadius: 14, padding: 28, border: '1px solid var(--border)' }}>
              <div style={{ color: 'var(--gold)', fontSize: 24, marginBottom: 12, letterSpacing: 2 }}>❝</div>
              <p style={{ color: 'var(--text-dark)', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{t.text}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid var(--border)' }}>
                <div>
                  <p style={{ fontWeight: 600, color: 'var(--navy)', fontSize: 14 }}>{t.name}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: 12, marginTop: 2 }}>{t.course}</p>
                </div>
                <span style={{ fontSize: 12, color: 'var(--text-muted)', background: 'var(--cream)', padding: '3px 10px', borderRadius: 20 }}>Batch {t.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
