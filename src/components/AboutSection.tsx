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
    description: 'Escrevo código que outros desenvolvedores amam ler e manter',
    gradient: 'from-accent/20 to-primary/20'
  },
  {
    icon: Lightbulb,
    title: 'Inovação',
    description: 'Sempre buscando as melhores soluções e tecnologias emergentes',
    gradient: 'from-primary/20 to-secondary/20'
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Otimização e velocidade são prioridades em cada projeto',
    gradient: 'from-secondary/20 to-accent/20'
  },
  {
    icon: Users,
    title: 'Colaboração',
    description: 'Trabalho em equipe e comunicação clara para resultados incríveis',
    gradient: 'from-primary/20 to-accent/20'
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-32 md:py-40 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10 border border-accent/30 backdrop-blur-md mb-8">
            <span className="text-sm font-semibold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent uppercase tracking-wide">Sobre Mim</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
            Transformando Ideias em{' '}
            <span className="block mt-2 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              Realidade Digital
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
            Desenvolvedor apaixonado por criar experiências digitais que combinam{' '}
            <span className="text-foreground font-semibold">design excepcional</span> com{' '}
            <span className="text-foreground font-semibold">código robusto</span> e escalável
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className={`p-7 h-full bg-card border-2 border-border/30 hover:border-accent/60 transition-all duration-300 group hover:shadow-2xl hover:shadow-accent/10`}>
                <div className={`mb-5 p-4 rounded-2xl bg-gradient-to-br ${value.gradient} w-fit group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon size={28} weight="duotone" className="text-accent" />
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-accent transition-colors duration-300">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <h3 className="text-4xl md:text-5xl font-extrabold mb-4 text-center bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Tecnologias & Skills
          </h3>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Ferramentas e tecnologias que domino para criar soluções completas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="p-7 bg-card border-2 border-border/30 hover:border-primary/60 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 h-full">
                <h4 className="font-bold text-xl mb-5 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent uppercase tracking-wide">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2.5">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        delay: groupIndex * 0.1 + skillIndex * 0.05,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                    >
                      <Badge 
                        variant="secondary"
                        className="font-mono text-xs px-3 py-1.5 bg-gradient-to-br from-secondary/60 to-primary/40 hover:from-accent/70 hover:to-primary/60 border border-border/30 hover:scale-110 transition-all cursor-default font-semibold"
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
