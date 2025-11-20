import { motion } from 'framer-motion'
import { ProjectCard } from './ProjectCard'
import type { Project } from '@/types/project'

interface ProjectGridProps {
  projects: Project[]
  onProjectClick: (project: Project) => void
}

export function ProjectGrid({ projects, onProjectClick }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md mx-auto"
        >
          <div className="w-32 h-32 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/20 to-muted flex items-center justify-center">
            <span className="text-6xl">📁</span>
          </div>
          <h3 className="text-3xl font-bold mb-3">Nenhum projeto ainda</h3>
          <p className="text-muted-foreground text-lg" style={{ lineHeight: '1.6' }}>
            Os projetos aparecerão aqui quando forem adicionados.
          </p>
        </motion.div>
      </div>
    )
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm mb-6">
          <span className="text-sm font-medium text-accent-foreground">Portfólio</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
          Projetos em{' '}
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-transparent">
            Destaque
          </span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto" style={{ lineHeight: '1.6' }}>
          Uma seleção dos meus trabalhos mais recentes e impactantes
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => onProjectClick(project)}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}
