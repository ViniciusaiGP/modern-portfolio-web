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
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-hidden p-0 gap-0 bg-card/95 backdrop-blur-xl border-border/50">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2.5 rounded-xl bg-background/90 backdrop-blur-md border border-border/60 hover:bg-accent/10 hover:border-accent/50 hover:scale-105 transition-all duration-200 shadow-lg"
        >
          <X size={20} className="text-foreground" />
        </button>

        <div className="grid md:grid-cols-[1.2fr,1fr] gap-0 max-h-[95vh]">
          <div className="relative aspect-[16/10] md:aspect-auto md:h-full bg-gradient-to-br from-muted/30 via-accent/5 to-primary/5 overflow-hidden">
            <AnimatePresence mode="wait">
              {!imageError ? (
                <>
                  {!imageLoaded && (
                    <motion.div 
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-br from-muted/50 via-accent/10 to-primary/10"
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.15)_50%,transparent_100%)] animate-[shimmer_2s_infinite]" />
                    </motion.div>
                  )}
                  <motion.img
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: imageLoaded ? 1 : 0, scale: 1 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
                </>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl mb-4 opacity-40">🎨</div>
                    <span className="text-muted-foreground text-sm">Imagem não disponível</span>
                  </div>
                </div>
              )}
            </AnimatePresence>
          </div>

          <div className="overflow-y-auto p-8 md:p-10 lg:p-12 bg-gradient-to-br from-background/60 to-muted/20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div>
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent" 
                  style={{ letterSpacing: '-0.03em', lineHeight: '1.1' }}
                >
                  {project.title}
                </motion.h2>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 80 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="h-1.5 bg-gradient-to-r from-accent via-primary to-accent/50 rounded-full shadow-sm shadow-accent/20" 
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                <h4 className="text-xs font-bold text-muted-foreground/80 mb-3 uppercase tracking-[0.15em]">
                  Sobre o Projeto
                </h4>
                <p className="text-foreground/90 text-base leading-relaxed" style={{ lineHeight: '1.75' }}>
                  {project.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <h4 className="text-xs font-bold text-muted-foreground/80 mb-4 uppercase tracking-[0.15em]">
                  Tecnologias
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.85, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.5 + index * 0.04,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                    >
                      <Badge 
                        variant="secondary"
                        className="font-mono text-xs px-3.5 py-1.5 bg-secondary/60 hover:bg-secondary/90 border border-border/40 hover:border-accent/30 transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="flex flex-col gap-3 pt-4"
              >
                {project.linkedinUrl && (
                  <Button 
                    onClick={handleLinkedInClick}
                    size="lg"
                    className="w-full gap-2.5 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] group"
                    style={{ letterSpacing: '0.01em' }}
                  >
                    <LinkedinLogo weight="fill" size={22} className="group-hover:scale-110 transition-transform" />
                    Ver no LinkedIn
                    <ArrowUpRight weight="bold" size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Button>
                )}

                {isOwner && (
                  <div className="flex gap-3 mt-2">
                    <Button 
                      variant="secondary"
                      size="lg"
                      className="flex-1 gap-2 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] border border-border/40 group"
                      onClick={() => onEdit(project)}
                    >
                      <Pencil size={19} className="group-hover:scale-110 transition-transform" />
                      Editar
                    </Button>
                    <Button 
                      variant="destructive"
                      size="lg"
                      className="flex-1 gap-2 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] group"
                      onClick={() => onDelete(project)}
                    >
                      <Trash size={19} className="group-hover:scale-110 transition-transform" />
                      Excluir
                    </Button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
