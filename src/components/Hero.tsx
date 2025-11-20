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
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.3, 0])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
      
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <motion.div 
          style={{ y }}
          className="absolute inset-0"
        >
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-gradient-to-br from-accent/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] bg-gradient-to-tr from-primary/30 via-secondary/20 to-transparent rounded-full blur-3xl" />
        </motion.div>
      </div>
      
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-6 md:px-12 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10 border border-accent/30 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent shadow-lg shadow-accent/50"></span>
            </span>
            <span className="text-sm font-semibold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Disponível para novos projetos</span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight mb-8 leading-[1.1]"
        >
          <span className="block mb-2 bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">
            Desenvolvedor
          </span>
          <span className="block bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            Full Stack
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed font-medium"
        >
          Transformando ideias em{' '}
          <span className="text-foreground font-semibold">experiências digitais</span>{' '}
          memoráveis através de código limpo e design excepcional
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-20"
        >
          <Button 
            size="lg" 
            className="group gap-2.5 text-base px-8 py-6 font-semibold bg-gradient-to-r from-accent via-primary to-secondary hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 hover:scale-105"
            onClick={scrollToProjects}
          >
            Ver Meu Trabalho
            <ArrowDown className="group-hover:translate-y-1 transition-transform duration-300" weight="bold" size={20} />
          </Button>
          
          <div className="flex items-center gap-3">
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2 hover:border-accent hover:bg-accent/5 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer">
                <LinkedinLogo weight="fill" size={20} />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2 hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
                <GithubLogo weight="fill" size={20} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto"
        >
          {[
            { label: 'Anos de Experiência', value: '5+' },
            { label: 'Projetos Entregues', value: '50+' },
            { label: 'Clientes Felizes', value: '30+' },
            { label: 'Xícaras de Café', value: '∞' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="group text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-br from-accent via-primary to-secondary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={scrollToProjects}
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="p-3 rounded-full bg-card/80 backdrop-blur-md border border-border/50 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <ArrowDown className="text-accent" size={24} weight="bold" />
        </motion.button>
      </motion.div>
    </section>
  )
}
