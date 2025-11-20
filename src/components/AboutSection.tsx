import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code, Lightbulb, Rocket, Users } from '@phosphor-icons/react'

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs']
  },
  {
    category: 'DevOps',
    items: ['Docker', 'AWS', 'Firebase', 'Git', 'CI/CD']
  },
  {
    category: 'Design',
    items: ['Figma', 'UI/UX', 'Responsive Design', 'Prototyping']
  }
]

const values = [
  {
    icon: Code,
    title: 'Código Limpo',
    description: 'Escrevo código que outros desenvolvedores amam ler e manter'
  },
  {
    icon: Lightbulb,
    title: 'Inovação',
    description: 'Sempre buscando as melhores soluções e tecnologias emergentes'
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Otimização e velocidade são prioridades em cada projeto'
  },
  {
    icon: Users,
    title: 'Colaboração',
    description: 'Trabalho em equipe e comunicação clara para resultados incríveis'
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-accent-foreground">Sobre Mim</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
            Transformando Ideias em{' '}
            <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-transparent">
              Realidade
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto" style={{ lineHeight: '1.6' }}>
            Sou um desenvolvedor apaixonado por criar experiências digitais que combinam design excepcional 
            com código robusto e escalável
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 group">
                <div className="mb-4 p-3 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 w-fit group-hover:scale-110 transition-transform duration-300">
                  <value.icon size={24} weight="duotone" className="text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm" style={{ lineHeight: '1.6' }}>
                  {value.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Tecnologias & Skills
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300">
                <h4 className="font-semibold text-lg mb-4 text-accent">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: groupIndex * 0.1 + skillIndex * 0.05,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                    >
                      <Badge 
                        variant="secondary"
                        className="font-mono text-xs px-3 py-1 bg-secondary/50 hover:bg-secondary hover:scale-105 transition-all cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
