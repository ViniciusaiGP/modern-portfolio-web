import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, GithubLogo, LinkedinLogo, EnvelopeSimple } from '@phosphor-icons/react'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
      
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl" />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0),rgba(255,255,255,0.8)_70%)]" />
      
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-6 md:px-12 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm font-medium text-accent-foreground">Disponível para projetos</span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          style={{ letterSpacing: '-0.03em' }}
        >
          <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
            Criando Experiências
          </span>
          <br />
          <span className="bg-gradient-to-br from-accent via-primary to-accent bg-clip-text text-transparent">
            Digitais Incríveis
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12"
          style={{ lineHeight: '1.6' }}
        >
          Desenvolvedor Full Stack apaixonado por transformar ideias em produtos digitais que fazem a diferença
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Button 
            size="lg" 
            className="group gap-2 text-base px-8"
            onClick={scrollToProjects}
          >
            Ver Projetos
            <ArrowDown className="group-hover:translate-y-1 transition-transform" weight="bold" />
          </Button>
          
          <div className="flex items-center gap-3">
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <LinkedinLogo weight="fill" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <GithubLogo weight="fill" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2"
              asChild
            >
              <a href="mailto:contato@email.com">
                <EnvelopeSimple weight="fill" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-3xl mx-auto"
        >
          {[
            { label: 'Anos de Experiência', value: '5+' },
            { label: 'Projetos Completos', value: '50+' },
            { label: 'Clientes Satisfeitos', value: '30+' },
            { label: 'Linhas de Código', value: '100K+' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-accent to-primary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={scrollToProjects}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="p-2 rounded-full bg-background/50 backdrop-blur-sm border border-border hover:border-accent/50 transition-colors"
        >
          <ArrowDown className="text-muted-foreground" size={24} weight="bold" />
        </motion.button>
      </motion.div>
    </section>
  )
}
