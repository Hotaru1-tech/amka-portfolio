import { useRef, useEffect } from 'react'
import { projects } from '../data/projects'

const colorMap = {
  cyan:   { border:'hover:border-cyan/40',   top:'from-cyan to-purple',   tag:'text-cyan border-cyan/20 bg-cyan/5'   },
  green:  { border:'hover:border-green/40',  top:'from-green to-cyan',    tag:'text-green border-green/20 bg-green/5'  },
  orange: { border:'hover:border-orange/40', top:'from-orange to-purple', tag:'text-orange border-orange/20 bg-orange/5'},
  purple: { border:'hover:border-purple/40', top:'from-purple to-green',  tag:'text-purple border-purple/20 bg-purple/5'},
}

export default function Projects() {
  const ref = useRef()
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if(e.isIntersecting) e.target.classList.add('visible') }, {threshold:0.05})
    ref.current && obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="reveal">
          <span className="font-mono text-[10px] text-green tracking-[5px] block mb-2">// 03 — WHAT I BUILT</span>
          <h2 className="font-mono text-4xl text-light">MY <span className="text-cyan">PROJECTS</span></h2>
          <div className="w-14 h-0.5 mt-3 mb-12" style={{background:'linear-gradient(90deg,#00d4ff,transparent)'}} />

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map(p => {
              const c = colorMap[p.color]
              return (
                <div key={p.id} className={`rounded-xl border border-border ${c.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)] relative overflow-hidden`}
                  style={{background:'#0c1220'}}>
                  {/* top accent */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${c.top}`} />

                  {/* screenshot or icon */}
                  {p.screenshot ? (
                    <div className="w-full h-40 overflow-hidden">
                      <img src={p.screenshot} alt={p.title} className="w-full h-full object-cover" />
                    </div>
                  ) : null}

                  <div className="p-6">
                    {/* status badge */}
                    <span className="absolute top-4 right-4 font-mono text-[9px] px-2 py-0.5 rounded border text-green border-green/25 bg-green/10">
                      ● LIVE
                    </span>

                    <div className="text-3xl mb-3">{p.icon}</div>
                    <h3 className="font-mono text-sm text-light tracking-widest mb-2">{p.title}</h3>
                    <p className="text-[13px] text-dim leading-relaxed mb-4">{p.desc}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.tags.map(t => (
                        <span key={t} className={`font-mono text-[9px] px-2.5 py-1 rounded border ${c.tag}`}>{t}</span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-dim hover:text-cyan transition-colors tracking-widest">⬡ LIVE DEMO</a>}
                      {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-dim hover:text-cyan transition-colors tracking-widest">⬡ GITHUB</a>}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}