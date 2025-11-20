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

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg'])

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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
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
        className="relative overflow-hidden cursor-pointer transition-all duration-500 border-border/50 hover:border-accent/50 bg-card/50 backdrop-blur-sm"
        onClick={onClick}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative aspect-[4/3] bg-muted overflow-hidden">
          {!imageError ? (
            <>
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-muted via-accent/5 to-primary/5">
                  <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] animate-[shimmer_2s_infinite]" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img
                src={project.imageUrl}
                alt={project.title}
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
              <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                <div className="p-2 rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-lg">
                  <ArrowUpRight weight="bold" className="text-foreground" size={20} />
                </div>
              </div>
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-background flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2">🎨</div>
                <span className="text-muted-foreground text-sm">Imagem não disponível</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="relative p-6" style={{ transform: 'translateZ(50px)' }}>
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-xl font-semibold line-clamp-1 group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
          </div>
          
          <p className="text-muted-foreground mb-4 line-clamp-2 text-sm" style={{ lineHeight: '1.6' }}>
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary"
                className="font-mono text-xs px-2.5 py-0.5 bg-secondary/50 hover:bg-secondary transition-colors"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="font-mono text-xs px-2.5 py-0.5">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
