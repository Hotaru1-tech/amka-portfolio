import { useRef, useEffect, useState } from 'react'

const socials = [
  { icon:'✉', label:'EMAIL',     val:'amka0112@gmail.com',              href:'mailto:amka0112@gmail.com' },
  { icon:'☏', label:'PHONE',     val:'+976 88720112',                  href:'tel:+97688720112' },
  { icon:'⬡', label:'GITHUB',    val:'github.com/Hotaru1-tech',         href:'https://github.com/Hotaru1-tech' },
  { icon:'◈', label:'FACEBOOK',  val:'fb.com/1.0.1.H.O.T.A.R.U',       href:'https://www.facebook.com/1.0.1.H.O.T.A.R.U.1.0.1' },
  { icon:'◉', label:'INSTAGRAM', val:'@______hotaru______',             href:'https://www.instagram.com/______hotaru______/' },
]

export default function Contact() {
  const ref = useRef()
  const [sent, setSent] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if(e.isIntersecting) e.target.classList.add('visible') }, {threshold:0.1})
    ref.current && obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="reveal">
          <span className="font-mono text-[10px] text-green tracking-[5px] block mb-2">// 04 — GET IN TOUCH</span>
          <h2 className="font-mono text-4xl text-light">CONTACT <span className="text-cyan">ME</span></h2>
          <div className="w-14 h-0.5 mt-3 mb-12" style={{background:'linear-gradient(90deg,#00d4ff,transparent)'}} />

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <p className="text-[15px] text-dim leading-relaxed mb-2">Open to internships, junior roles, and freelance work. I learn fast and I'm not afraid of a challenge.</p>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-cyan/40 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] hover:translate-x-1 transition-all duration-300 no-underline"
                  style={{background:'#0c1220'}}>
                  <span className="text-xl w-10 text-center">{s.icon}</span>
                  <div>
                    <div className="font-mono text-[9px] text-dim tracking-widest">{s.label}</div>
                    <div className="font-mono text-[12px] text-cyan">{s.val}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* form */}
            <div className="rounded-xl p-7 relative overflow-hidden" style={{background:'#0c1220',border:'1px solid #1a3050'}}>
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{background:'linear-gradient(90deg,#00d4ff,#bf5fff)'}} />
              <div className="space-y-4">
                <div>
                  <label className="font-mono text-[10px] text-dim tracking-widest block mb-2">YOUR NAME</label>
                  <input className="w-full bg-white/[0.03] border border-border rounded-md px-4 py-3 text-light font-sans text-[14px] outline-none focus:border-cyan focus:shadow-[0_0_12px_rgba(0,212,255,0.1)] transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="font-mono text-[10px] text-dim tracking-widest block mb-2">EMAIL</label>
                  <input type="email" className="w-full bg-white/[0.03] border border-border rounded-md px-4 py-3 text-light font-sans text-[14px] outline-none focus:border-cyan focus:shadow-[0_0_12px_rgba(0,212,255,0.1)] transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="font-mono text-[10px] text-dim tracking-widest block mb-2">MESSAGE</label>
                  <textarea rows={4} className="w-full bg-white/[0.03] border border-border rounded-md px-4 py-3 text-light font-sans text-[14px] outline-none focus:border-cyan focus:shadow-[0_0_12px_rgba(0,212,255,0.1)] transition-all resize-y" placeholder="Hey Amka, I have a project for you..." />
                </div>
                <button onClick={() => setSent(true)}
                  className={`w-full font-mono text-[11px] tracking-[3px] py-3.5 rounded-md border transition-all duration-300
                    ${sent ? 'text-green border-green/50 bg-green/10' : 'text-cyan border-cyan/50 bg-cyan/8 hover:bg-cyan/15 hover:shadow-[0_0_24px_rgba(0,212,255,0.3)]'}`}>
                  {sent ? '✓ MESSAGE SENT!' : 'SEND MESSAGE ⟶'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}