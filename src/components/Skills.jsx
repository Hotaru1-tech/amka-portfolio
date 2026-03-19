import { useEffect, useRef } from 'react'
import { skills, techTags } from '../data/skills'

const colorMap = {
  cyan:   { text:'text-cyan',   border:'border-cyan/30',   bg:'bg-cyan/5',   bar:'from-cyan to-purple' },
  green:  { text:'text-green',  border:'border-green/30',  bg:'bg-green/5',  bar:'from-green to-cyan'  },
  orange: { text:'text-orange', border:'border-orange/30', bg:'bg-orange/5', bar:'from-orange to-purple'},
  purple: { text:'text-purple', border:'border-purple/30', bg:'bg-purple/5', bar:'from-purple to-cyan' },
}
const levelColor = { SOLID:'text-cyan bg-cyan/10 border-cyan/30', GROWING:'text-green bg-green/10 border-green/30', LEARNING:'text-orange bg-orange/10 border-orange/30' }

function useReveal(ref) {
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if(e.isIntersecting) e.target.classList.add('visible') }, {threshold:0.1})
    ref.current && obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
}

export default function Skills() {
  const secRef = useRef()
  useReveal(secRef)

  useEffect(() => {
    const bars = document.querySelectorAll('.skill-bar-fill')
    const obs = new IntersectionObserver(entries => entries.forEach(e => {
      if(e.isIntersecting) e.target.classList.add('animated')
    }), {threshold:0.3})
    bars.forEach(b => obs.observe(b))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={secRef} className="reveal">
          <span className="font-mono text-[10px] text-green tracking-[5px] block mb-2">// 02 — WHAT I KNOW</span>
          <h2 className="font-mono text-4xl text-light">SKILLS & <span className="text-cyan">CERTS</span></h2>
          <div className="w-14 h-0.5 mt-3 mb-12" style={{background:'linear-gradient(90deg,#00d4ff,transparent)'}} />

          {/* skill bars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {skills.map(s => {
              const c = colorMap[s.color]
              return (
                <div key={s.name} className="rounded-lg p-5 border border-border hover:border-cyan/40 transition-all duration-300 hover:shadow-[0_0_28px_rgba(0,212,255,0.1)]"
                  style={{background:'#0c1220'}}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-mono text-[11px] text-light tracking-widest">{s.name}</span>
                    <span className={`font-mono text-[9px] px-2 py-0.5 rounded-full border ${levelColor[s.level]}`}>{s.level}</span>
                  </div>
                  <div className="h-1 rounded-full overflow-hidden mb-2" style={{background:'rgba(255,255,255,0.07)'}}>
                    <div className={`skill-bar-fill h-full rounded-full bg-gradient-to-r ${c.bar}`}
                      style={{ '--target-width': `${s.pct}%` }} />
                  </div>
                  <p className="text-[11px] text-dim">{s.category}</p>
                </div>
              )
            })}
          </div>

          {/* certs section */}
          <span className="font-mono text-[10px] text-green tracking-[5px] block mb-6">// CERTIFICATIONS — 12 EARNED · HACKERRANK VERIFIED</span>
          <CertGrid />

          {/* tags */}
          <div className="flex flex-wrap gap-2.5 mt-8">
            {techTags.map(t => {
              const c = colorMap[t.color]
              return (
                <span key={t.label} className={`font-mono text-[10px] px-3 py-1.5 rounded-full border ${c.text} ${c.border} ${c.bg} hover:-translate-y-0.5 transition-transform cursor-default`}>
                  {t.label}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function CertGrid() {
  const certData = [
    { title:'FRONTEND DEVELOPER (REACT)', level:'Role Cert ', url:'https://www.hackerrank.com/certificates/dfc15de3227d' },
    { title:'JAVASCRIPT (INTERMEDIATE)',  level:'Intermediate',  url:'https://www.hackerrank.com/certificates/86b6c09091af' },
    { title:'PROBLEM SOLVING (INTER.)',   level:'Intermediate',  url:'https://www.hackerrank.com/certificates/f3de58f48e70' },
    { title:'NODE.JS (INTERMEDIATE)',     level:'Intermediate',  url:'https://www.hackerrank.com/certificates/1ede34acfd29' },
    { title:'SQL (ADVANCED)',             level:'Advanced',      url:'https://www.hackerrank.com/certificates/303dbd084b6d' },
    { title:'SQL (INTERMEDIATE)',         level:'Intermediate',  url:'https://www.hackerrank.com/certificates/f2022a1c6335' },
    { title:'SQL (BASIC)',                level:'Basic',         url:'https://www.hackerrank.com/certificates/b26375f49d71' },
    { title:'REACT (BASIC)',              level:'Basic',         url:'https://www.hackerrank.com/certificates/e952d5e7c41d' },
    { title:'JAVASCRIPT (BASIC)',         level:'Basic',         url:'https://www.hackerrank.com/certificates/4c78998172e8' },
    { title:'PYTHON (BASIC)',             level:'Basic',         url:'https://www.hackerrank.com/certificates/380a599eb56b' },
    { title:'CSS (BASIC)',                level:'Basic',         url:'https://www.hackerrank.com/certificates/a134d98488f6' },
    { title:'PROBLEM SOLVING (BASIC)',    level:'Basic',         url:'https://www.hackerrank.com/certificates/f374ff4b8815' },
  ]
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      {certData.map(c => (
        <a key={c.url} href={c.url} target="_blank" rel="noopener noreferrer"
          className="flex gap-3 items-start p-4 rounded-lg border border-border hover:border-cyan/30 hover:-translate-y-1 transition-all duration-300 group"
          style={{background:'#0c1220',textDecoration:'none'}}>
          <span className="text-xl mt-0.5">{c.level.includes('⭐') ? '⭐' : '🏅'}</span>
          <div>
            <div className="font-mono text-[10px] text-light tracking-wide leading-tight mb-1">{c.title}</div>
            <div className="text-[11px] text-dim">HackerRank</div>
            <div className="font-mono text-[9px] text-cyan mt-1.5 group-hover:underline">✔ VERIFIED</div>
          </div>
        </a>
      ))}
    </div>
  )
}