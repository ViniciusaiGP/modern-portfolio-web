import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { GithubLogo, LinkedinLogo as LinkedinLogoIcon, EnvelopeSimple } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.8)']
  )
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(12px)']
  )

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
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
      className={`fixed top-0 left-0 right-0 z-40 transition-shadow duration-300 ${
        scrolled ? 'shadow-lg shadow-black/5' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl md:text-2xl font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
            >
              Projetos
            </button>
          </div>

          <div className="flex items-center gap-2">
            <Button 
              size="sm" 
              variant="ghost"
              className="hover:bg-accent/10"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <LinkedinLogoIcon weight="fill" size={18} />
              </a>
            </Button>
            <Button 
              size="sm" 
              variant="ghost"
              className="hover:bg-accent/10"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <GithubLogo weight="fill" size={18} />
              </a>
            </Button>
            <Button 
              size="sm" 
              variant="ghost"
              className="hover:bg-accent/10"
              asChild
            >
              <a href="mailto:contato@email.com">
                <EnvelopeSimple weight="fill" size={18} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
