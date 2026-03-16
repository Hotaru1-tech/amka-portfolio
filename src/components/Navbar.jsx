import { useState, useEffect } from 'react'

const links = ['HOME','ABOUT','SKILLS','PROJECTS','CONTACT']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-4 transition-all duration-300
      ${scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-cyan/10' : 'bg-transparent'}`}>
      <span className="font-mono text-sm text-cyan tracking-[4px]" style={{textShadow:'0 0 18px #00d4ff'}}>
        ⬡ <span className="text-green">AMKA</span>.DEV
      </span>
      <div className="hidden md:flex gap-7">
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`}
            className="font-mono text-[10px] tracking-[3px] text-dim hover:text-cyan transition-colors duration-200 relative group">
            {l}
            <span className="absolute bottom-0 left-0 w-0 h-px bg-cyan group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </div>
      <span className="w-2 h-2 rounded-full bg-green animate-blink" style={{boxShadow:'0 0 8px #00ff88'}} />
    </nav>
  )
}