import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Image, Link, LinkedinLogo, Stack, TextT, X } from '@phosphor-icons/react'
import type { Project } from '@/types/project'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ProjectFormProps {
  open: boolean
  onClose: () => void
  onSave: (project: Omit<Project, 'id' | 'createdAt'>) => void
  project?: Project | null
}

export function ProjectForm({ open, onClose, onSave, project }: ProjectFormProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [linkedinUrl, setLinkedinUrl] = useState('')
  const [technologies, setTechnologies] = useState('')

  useEffect(() => {
    if (project) {
      setTitle(project.title)
      setDescription(project.description)
      setImageUrl(project.imageUrl)
      setLinkedinUrl(project.linkedinUrl)
      setTechnologies(project.technologies.join(', '))
    } else {
      setTitle('')
      setDescription('')
      setImageUrl('')
      setLinkedinUrl('')
      setTechnologies('')
    }
  }, [project, open])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const techArray = technologies
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0)

    onSave({
      title,
      description,
      imageUrl,
      linkedinUrl,
      technologies: techArray
    })

    onClose()
  }

  const techPreview = technologies
    .split(',')
    .map(t => t.trim())
    .filter(t => t.length > 0)

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card/50 backdrop-blur-xl border-border/50">
        <DialogHeader className="space-y-3 pb-6 border-b border-border/50">
          <DialogTitle className="text-3xl font-bold tracking-tight">
            {project ? 'Editar Projeto' : 'Novo Projeto'}
          </DialogTitle>
          <DialogDescription className="text-base">
            {project 
              ? 'Atualize as informações do seu projeto abaixo.'
              : 'Preencha os detalhes para adicionar um novo projeto ao seu portfólio.'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 pt-6">
          <div className="space-y-3">
            <Label htmlFor="title" className="text-sm font-semibold flex items-center gap-2">
              <TextT size={16} weight="bold" className="text-accent" />
              Título do Projeto
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: Sistema de Gestão Empresarial"
              className="text-base h-11 bg-background/50"
              required
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="description" className="text-sm font-semibold flex items-center gap-2">
              <TextT size={16} weight="bold" className="text-accent" />
              Descrição
            </Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descreva os objetivos, desafios e resultados do projeto..."
              rows={4}
              className="text-base resize-none bg-background/50"
              required
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="imageUrl" className="text-sm font-semibold flex items-center gap-2">
              <Image size={16} weight="bold" className="text-accent" />
              URL da Imagem
            </Label>
            <Input
              id="imageUrl"
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://firebasestorage.googleapis.com/..."
              className="text-base h-11 bg-background/50 font-mono text-sm"
              required
            />
            <p className="text-xs text-muted-foreground flex items-center gap-1.5">
              💡 Use Firebase Storage ou outro serviço de hospedagem de imagens
            </p>
          </div>

          <div className="space-y-3">
            <Label htmlFor="linkedinUrl" className="text-sm font-semibold flex items-center gap-2">
              <LinkedinLogo size={16} weight="bold" className="text-accent" />
              URL do LinkedIn <span className="text-muted-foreground font-normal">(opcional)</span>
            </Label>
            <Input
              id="linkedinUrl"
              type="url"
              value={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.target.value)}
              placeholder="https://linkedin.com/posts/..."
              className="text-base h-11 bg-background/50 font-mono text-sm"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="technologies" className="text-sm font-semibold flex items-center gap-2">
              <Stack size={16} weight="bold" className="text-accent" />
              Tecnologias
            </Label>
            <Input
              id="technologies"
              value={technologies}
              onChange={(e) => setTechnologies(e.target.value)}
              placeholder="React, TypeScript, Node.js, PostgreSQL"
              className="text-base h-11 bg-background/50"
              required
            />
            <AnimatePresence mode="wait">
              {techPreview.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-wrap gap-2 p-3 rounded-lg bg-muted/30 border border-border/30"
                >
                  <span className="text-xs text-muted-foreground w-full mb-1">Preview:</span>
                  {techPreview.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Badge variant="secondary" className="font-mono text-xs">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex gap-3 pt-6 border-t border-border/50">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose} 
              className="flex-1 h-11"
            >
              Cancelar
            </Button>
            <Button 
              type="submit" 
              className="flex-1 h-11 bg-gradient-to-br from-accent to-primary hover:from-accent/90 hover:to-primary/90"
            >
              {project ? 'Salvar Alterações' : 'Criar Projeto'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
