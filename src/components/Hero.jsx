import { useEffect, useState } from 'react'

const STATS = [
  { num: 18,  label: 'AGE' },
  { num: 6,   label: 'PROJECTS' },
  { num: 12,  label: 'CERTS' },
  { num: 6,   label: 'PROJECTS' },
]

function useTypewriter(text, speed = 130) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      setDisplayed(text.slice(0, i + 1))
      i++
      if (i >= text.length) clearInterval(t)
    }, speed)
    return () => clearInterval(t)
  }, [text, speed])
  return displayed
}

function StatCounter({ num, label }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let c = 0
    const step = Math.ceil(num / 30)
    const t = setInterval(() => {
      c = Math.min(c + step, num)
      setCount(c)
      if (c >= num) clearInterval(t)
    }, 40)
    return () => clearInterval(t)
  }, [num])
  return (
    <div className="text-center">
      <span className="font-mono text-3xl text-cyan block" style={{textShadow:'0 0 20px rgba(0,212,255,0.5)'}}>{count}</span>
      <span className="text-[11px] text-dim tracking-widest">{label}</span>
    </div>
  )
}

export default function Hero() {
  const name = useTypewriter('AMKA')
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 pb-10 relative overflow-hidden">
      {/* grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{backgroundImage:'linear-gradient(rgba(0,212,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.04) 1px,transparent 1px)',backgroundSize:'60px 60px',maskImage:'radial-gradient(ellipse 80% 80% at 50% 50%,black 30%,transparent 100%)'}} />

      <div className="text-center relative z-10 max-w-3xl">
        <p className="font-mono text-[11px] text-green tracking-[5px] mb-5 animate-[fadeUp_0.7s_ease_0.2s_forwards] opacity-0">
          // FULL STACK ENGINEER — INDRA CYBER INSTITUTE
        </p>
        <h1 className="font-mono leading-none mb-3 animate-[fadeUp_0.7s_ease_0.4s_forwards] opacity-0"
          style={{fontSize:'clamp(52px,10vw,96px)'}}>
          {name}<span className="inline-block w-1 bg-cyan ml-1 animate-cursor align-middle" style={{height:'0.85em'}} />
        </h1>
        <p className="text-cyan font-bold tracking-[6px] mb-7 animate-[fadeUp_0.7s_ease_0.6s_forwards] opacity-0"
          style={{fontSize:'clamp(13px,2.5vw,20px)'}}>
          FULL STACK ENGINEER
        </p>
        <p className="text-dim leading-relaxed max-w-xl mx-auto mb-9 animate-[fadeUp_0.7s_ease_0.8s_forwards] opacity-0"
          style={{fontSize:'15px'}}>
          17 years old. Trained at Indra Cyber Institute. Already building real, full-stack applications — clean code, fast interfaces, powerful backends.
        </p>
        <div className="flex gap-4 justify-center flex-wrap animate-[fadeUp_0.7s_ease_1s_forwards] opacity-0">
          <a href="#projects" className="font-mono text-[10px] tracking-[3px] px-7 py-3 rounded border border-cyan/50 text-cyan bg-cyan/7 hover:bg-cyan/15 hover:shadow-[0_0_24px_rgba(0,212,255,0.3)] transition-all">
            VIEW PROJECTS
          </a>
          <a href="#contact" className="font-mono text-[10px] tracking-[3px] px-7 py-3 rounded border border-green/40 text-green hover:bg-green/10 hover:shadow-[0_0_18px_rgba(0,255,136,0.2)] transition-all">
            HIRE ME
          </a>
        </div>
        <div className="flex gap-10 justify-center mt-14 flex-wrap animate-[fadeUp_0.7s_ease_1.1s_forwards] opacity-0">
          {STATS.map((s,i) => <StatCounter key={i} {...s} />)}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  )
}