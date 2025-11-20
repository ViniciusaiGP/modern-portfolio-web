import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { LinkedinLogo, ArrowUpRight, Pencil, Trash, X } from '@phosphor-icons/react'
import type { Project } from '@/types/project'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden p-0 gap-0">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:border-accent/50 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="grid md:grid-cols-2 gap-0 max-h-[90vh]">
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full bg-muted overflow-hidden">
            <AnimatePresence mode="wait">
              {!imageError ? (
                <>
                  {!imageLoaded && (
                    <motion.div 
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-br from-muted via-accent/5 to-primary/5"
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] animate-[shimmer_2s_infinite]" />
                    </motion.div>
                  )}
                  <motion.img
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: imageLoaded ? 1 : 0, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                  />
                </>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-background flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎨</div>
                    <span className="text-muted-foreground">Imagem não disponível</span>
                  </div>
                </div>
              )}
            </AnimatePresence>
          </div>

          <div className="overflow-y-auto p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ letterSpacing: '-0.02em' }}>
                  {project.title}
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-accent to-primary rounded-full" />
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                    Sobre o Projeto
                  </h4>
                  <p className="text-foreground text-lg" style={{ lineHeight: '1.7' }}>
                    {project.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                    Tecnologias
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                      >
                        <Badge 
                          variant="secondary"
                          className="font-mono text-sm px-3 py-1.5 bg-secondary/50 hover:bg-secondary transition-colors"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-6">
                  {project.linkedinUrl && (
                    <Button 
                      onClick={handleLinkedInClick}
                      size="lg"
                      className="w-full gap-2 text-base"
                      style={{ letterSpacing: '0.01em' }}
                    >
                      <LinkedinLogo weight="fill" size={20} />
                      Ver no LinkedIn
                      <ArrowUpRight weight="bold" size={18} />
                    </Button>
                  )}

                  {isOwner && (
                    <div className="flex gap-3">
                      <Button 
                        variant="secondary"
                        size="lg"
                        className="flex-1 gap-2"
                        onClick={() => onEdit(project)}
                      >
                        <Pencil size={18} />
                        Editar
                      </Button>
                      <Button 
                        variant="destructive"
                        size="lg"
                        className="flex-1 gap-2"
                        onClick={() => onDelete(project)}
                      >
                        <Trash size={18} />
                        Excluir
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
