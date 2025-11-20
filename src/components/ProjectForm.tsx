import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import type { Project } from '@/types/project'
import { useState, useEffect } from 'react'

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

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {project ? 'Editar Projeto' : 'Novo Projeto'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Título do Projeto</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Nome do projeto"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descreva o projeto..."
              rows={4}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="imageUrl">URL da Imagem (Firebase)</Label>
            <Input
              id="imageUrl"
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://firebasestorage.googleapis.com/..."
              required
            />
            <p className="text-xs text-muted-foreground">
              Cole a URL da imagem do Firebase Storage
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="linkedinUrl">URL do LinkedIn</Label>
            <Input
              id="linkedinUrl"
              type="url"
              value={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.target.value)}
              placeholder="https://linkedin.com/in/seu-perfil"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="technologies">Tecnologias</Label>
            <Input
              id="technologies"
              value={technologies}
              onChange={(e) => setTechnologies(e.target.value)}
              placeholder="React, TypeScript, Firebase (separado por vírgula)"
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancelar
            </Button>
            <Button type="submit" className="flex-1">
              {project ? 'Salvar Alterações' : 'Criar Projeto'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
