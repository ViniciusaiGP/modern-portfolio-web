import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { Project } from '@/types/project'
import { useState } from 'react'

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
    >
      <Card 
        className="overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-xl hover:border-accent/50"
        onClick={onClick}
      >
        <div className="relative aspect-video bg-muted overflow-hidden">
          {!imageError ? (
            <>
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-muted via-muted/80 to-muted animate-pulse" />
              )}
              <img
                src={project.imageUrl}
                alt={project.title}
                className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-muted flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Imagem não disponível</span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 line-clamp-1">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground mb-4 line-clamp-2" style={{ lineHeight: '1.6' }}>
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary"
                className="font-mono text-xs"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="outline" className="font-mono text-xs">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
