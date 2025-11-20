import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { GithubLogo, LinkedinLogo, EnvelopeSimple } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.9)']
  )
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(20px)']
  )

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
        WebkitBackdropFilter: backdropBlur,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'shadow-lg border-b border-border/50' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl md:text-3xl font-extrabold tracking-tight"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-semibold text-foreground/70 hover:text-accent transition-colors duration-300 uppercase tracking-wide"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors duration-300 uppercase tracking-wide"
            >
              Projetos
            </button>
            <a
              href="mailto:contato@exemplo.com"
              className="text-sm font-semibold text-foreground/70 hover:text-secondary transition-colors duration-300 uppercase tracking-wide"
            >
              Contato
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Button 
              size="sm" 
              variant="ghost"
              className="hover:bg-accent/10 hover:text-accent transition-all duration-300"
              asChild
            >
              <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer">
                <LinkedinLogo weight="fill" size={20} />
              </a>
            </Button>
            <Button 
              size="sm" 
              variant="ghost"
              className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
              asChild
            >
              <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
                <GithubLogo weight="fill" size={20} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
