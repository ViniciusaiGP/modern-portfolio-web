import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { LinkedinLogo, ArrowUpRight, Pencil, Trash } from '@phosphor-icons/react'
import type { Project } from '@/types/project'
import { useState } from 'react'

interface ProjectDetailProps {
  project: Project | null
  open: boolean
  onClose: () => void
  isOwner: boolean
  onEdit: (project: Project) => void
  onDelete: (project: Project) => void
}

export function ProjectDetail({ 
  project, 
  open, 
  onClose, 
  isOwner,
  onEdit,
  onDelete 
}: ProjectDetailProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  if (!project) return null

  const handleLinkedInClick = () => {
    if (project.linkedinUrl) {
      window.open(project.linkedinUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold pr-8">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
            {!imageError ? (
              <>
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-muted via-muted/80 to-muted animate-pulse" />
                )}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                />
              </>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-muted flex items-center justify-center">
                <span className="text-muted-foreground">Imagem não disponível</span>
              </div>
            )}
          </div>

          <div>
            <h4 className="text-sm font-semibold text-muted-foreground mb-2">Descrição</h4>
            <p className="text-foreground" style={{ lineHeight: '1.6' }}>
              {project.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-muted-foreground mb-3">Tecnologias</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge 
                  key={tech} 
                  variant="secondary"
                  className="font-mono text-sm"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            {project.linkedinUrl && (
              <Button 
                onClick={handleLinkedInClick}
                className="flex-1 gap-2"
                style={{ letterSpacing: '0.01em' }}
              >
                <LinkedinLogo weight="fill" />
                Ver no LinkedIn
                <ArrowUpRight weight="bold" />
              </Button>
            )}

            {isOwner && (
              <>
                <Button 
                  variant="secondary"
                  size="icon"
                  onClick={() => onEdit(project)}
                >
                  <Pencil />
                </Button>
                <Button 
                  variant="destructive"
                  size="icon"
                  onClick={() => onDelete(project)}
                >
                  <Trash />
                </Button>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
