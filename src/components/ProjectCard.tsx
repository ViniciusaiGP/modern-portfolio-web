import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowUpRight } from '@phosphor-icons/react'
import type { Project } from '@/types/project'
import { useState, useRef } from 'react'

interface ProjectCardProps {
  project: Project
  onClick: () => void
  index: number
}

export function ProjectCard({ project, onClick, index }: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-5deg', '5deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group"
    >
      <Card 
        className="relative overflow-hidden cursor-pointer transition-all duration-500 border-2 border-border/30 hover:border-accent/60 bg-card hover:shadow-2xl hover:shadow-accent/10"
        onClick={onClick}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-primary/0 to-secondary/0 group-hover:from-accent/10 group-hover:via-primary/5 group-hover:to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        <div className="relative aspect-[4/3] bg-gradient-to-br from-muted via-accent/5 to-primary/5 overflow-hidden">
          {!imageError ? (
            <>
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-muted via-accent/10 to-primary/10">
                  <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.15)_50%,transparent_100%)] animate-[shimmer_2s_infinite]" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img
                src={project.imageUrl}
                alt={project.title}
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
              <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                <div className="p-2.5 rounded-full bg-card/95 backdrop-blur-md border-2 border-accent/50 shadow-xl shadow-accent/20">
                  <ArrowUpRight weight="bold" className="text-accent" size={20} />
                </div>
              </div>
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl mb-3">🎨</div>
                <span className="text-muted-foreground text-sm font-medium">Imagem não disponível</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="relative p-6 bg-card" style={{ transform: 'translateZ(20px)' }}>
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-xl font-bold line-clamp-1 group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-primary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              {project.title}
            </h3>
          </div>
          
          <p className="text-muted-foreground mb-5 line-clamp-2 text-sm leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary"
                className="font-mono text-xs px-3 py-1 bg-gradient-to-br from-secondary/60 to-primary/40 hover:from-accent/70 hover:to-primary/60 border border-border/30 transition-all duration-300 hover:scale-105 font-semibold"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="font-mono text-xs px-3 py-1 border-2 border-border/50 hover:border-accent/50 transition-all duration-300 font-semibold">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
