import { useEffect, useRef } from 'react'

export default function About() {
  const ref = useRef()
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if(e.isIntersecting) e.target.classList.add('visible') }, {threshold:0.1})
    ref.current && obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const rows = [
    { key:'NAME',     val:'Amka',              color:'text-green' },
    { key:'ROLE',     val:'Full Stack Eng.',    color:'text-green' },
    { key:'LOCATION', val:'Ulaanbaatar, MN',    color:'text-green' },
    { key:'PHONE',    val:'+976 88720112',      color:'text-green' },
    { key:'SCHOOL',   val:'Indra Cyber Inst.',  color:'text-purple' },
    { key:'STATUS',   val:'● AVAILABLE',        color:'text-green' },
  ]

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="reveal">
          <span className="font-mono text-[10px] text-green tracking-[5px] block mb-2">// 01 — WHO AM I</span>
          <h2 className="font-mono text-4xl text-light">ABOUT <span className="text-cyan">ME</span></h2>
          <div className="w-14 h-0.5 mt-3 mb-12" style={{background:'linear-gradient(90deg,#00d4ff,transparent)'}} />

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              {/* school badge */}
              <div className="flex gap-4 items-start p-4 rounded-lg border"
                style={{background:'rgba(191,95,255,0.05)',borderColor:'rgba(191,95,255,0.25)'}}>
                <span className="text-2xl">🏫</span>
                <p className="text-[13px] text-dim leading-relaxed">
                  <span className="text-purple font-semibold">Indra Cyber Institute</span> — Trained at one of Mongolia's leading tech institutes, with a solid foundation in full stack development and modern engineering practices.
                </p>
              </div>
              <p className="text-[15px] text-dim leading-relaxed">Hey, I'm <strong className="text-light">Amka</strong> — a 18-year-old full stack engineer based in Ulaanbaatar. I trained at <strong className="text-light">Indra Cyber Institute</strong> where I built a strong foundation in web development.</p>
              <p className="text-[15px] text-dim leading-relaxed">I've built <strong className="text-light">6 real projects</strong> and earned <strong className="text-light">12 HackerRank certifications</strong> across frontend, backend, and algorithms — and I'm just getting started.</p>
              <p className="text-[15px] text-dim leading-relaxed">I'm hungry to grow, fast to learn, and ready to contribute to real teams and real products.</p>
            </div>

            {/* card */}
            <div className="rounded-xl p-7 relative overflow-hidden" style={{background:'#0c1220',border:'1px solid #1a3050'}}>
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{background:'linear-gradient(90deg,#00d4ff,#bf5fff,#00ff88)'}} />
              <div className="text-center mb-6">
                <div className="font-mono text-6xl text-cyan leading-none" style={{textShadow:'0 0 30px rgba(0,212,255,0.5)'}}>18</div>
                <div className="font-mono text-[10px] text-dim tracking-[4px] mt-1">YEARS OLD</div>
              </div>
              <div className="space-y-3">
                {rows.map(r => (
                  <div key={r.key} className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="font-mono text-[10px] text-dim tracking-widest">{r.key}</span>
                    <span className={`font-mono text-[11px] ${r.color}`}>{r.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}