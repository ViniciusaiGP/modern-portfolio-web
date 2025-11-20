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
      <div className="text-center py-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-lg mx-auto"
        >
          <div className="w-40 h-40 mx-auto mb-10 rounded-3xl bg-gradient-to-br from-accent/30 via-primary/25 to-secondary/20 border-2 border-border/30 flex items-center justify-center shadow-2xl shadow-accent/10">
            <span className="text-8xl">📁</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-5 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Nenhum projeto ainda
          </h3>
          <p className="text-muted-foreground text-xl leading-relaxed font-medium">
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
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-20"
      >
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10 border border-accent/30 backdrop-blur-md mb-8">
          <span className="text-sm font-semibold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent uppercase tracking-wide">Portfólio</span>
        </div>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
          Projetos em{' '}
          <span className="block mt-2 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
            Destaque
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
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
