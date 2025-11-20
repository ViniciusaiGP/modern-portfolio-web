import { useState, useEffect } from 'react'
import { useKV } from '@github/spark/hooks'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { AboutSection } from '@/components/AboutSection'
import { ProjectGrid } from '@/components/ProjectGrid'
import { ProjectDetail } from '@/components/ProjectDetail'
import { ProjectForm } from '@/components/ProjectForm'
import { AdminFab } from '@/components/AdminFab'
import { GradientBlobs } from '@/components/GradientBlobs'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog'
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'sonner'
import type { Project } from '@/types/project'

function App() {
  const [projects, setProjects] = useKV<Project[]>('portfolio-projects', [])
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [detailOpen, setDetailOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [deleteProject, setDeleteProject] = useState<Project | null>(null)
  const [isOwner, setIsOwner] = useState(false)

  useEffect(() => {
    const checkOwner = async () => {
      try {
        const user = await window.spark.user()
        setIsOwner(user?.isOwner || false)
      } catch (error) {
        setIsOwner(false)
      }
    }
    checkOwner()
  }, [])

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setDetailOpen(true)
  }

  const handleAddProject = () => {
    setEditingProject(null)
    setFormOpen(true)
  }

  const handleEditProject = (project: Project) => {
    setEditingProject(project)
    setDetailOpen(false)
    setFormOpen(true)
  }

  const handleDeleteClick = (project: Project) => {
    setDeleteProject(project)
    setDetailOpen(false)
  }

  const handleDeleteConfirm = () => {
    if (deleteProject) {
      setProjects((current) => (current || []).filter(p => p.id !== deleteProject.id))
      toast.success('Projeto excluído com sucesso')
      setDeleteProject(null)
    }
  }

  const handleSaveProject = (projectData: Omit<Project, 'id' | 'createdAt'>) => {
    if (editingProject) {
      setProjects((current) =>
        (current || []).map(p =>
          p.id === editingProject.id
            ? { ...projectData, id: p.id, createdAt: p.createdAt }
            : p
        )
      )
      toast.success('Projeto atualizado com sucesso')
    } else {
      const newProject: Project = {
        ...projectData,
        id: `project-${Date.now()}`,
        createdAt: Date.now()
      }
      setProjects((current) => [newProject, ...(current || [])])
      toast.success('Projeto criado com sucesso')
    }
  }

  return (
    <div className="min-h-screen bg-background relative">
      <GradientBlobs />
      <Navbar />
      <Hero />
      
      <AboutSection />

      <main id="projects" className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <ProjectGrid 
          projects={projects || []} 
          onProjectClick={handleProjectClick}
        />
      </main>

      <footer className="relative border-t border-border/50 py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-accent/5" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Vamos trabalhar juntos?</h3>
            <p className="text-muted-foreground mb-8">Entre em contato e vamos criar algo incrível</p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a 
                href="mailto:contato@exemplo.com" 
                className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
              >
                <span className="text-lg">📧</span>
                contato@exemplo.com
              </a>
              <a 
                href="https://github.com/seuusuario" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
              >
                <span className="text-lg">🐙</span>
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/seuusuario" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
              >
                <span className="text-lg">💼</span>
                LinkedIn
              </a>
              <a 
                href="https://twitter.com/seuusuario" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
              >
                <span className="text-lg">🐦</span>
                Twitter
              </a>
            </div>
          </div>
          <div className="pt-8 mt-8 border-t border-border/30">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Todos os direitos reservados. Feito com 💜 usando React + TypeScript
            </p>
          </div>
        </div>
      </footer>

      <ProjectDetail
        project={selectedProject}
        open={detailOpen}
        onClose={() => setDetailOpen(false)}
        isOwner={isOwner}
        onEdit={handleEditProject}
        onDelete={handleDeleteClick}
      />

      <ProjectForm
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onSave={handleSaveProject}
        project={editingProject}
      />

      <AlertDialog open={!!deleteProject} onOpenChange={() => setDeleteProject(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Excluir projeto?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta ação não pode ser desfeita. O projeto "{deleteProject?.title}" será permanentemente removido.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteConfirm}>
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {isOwner && <AdminFab onClick={handleAddProject} />}

      <Toaster />
    </div>
  )
}

export default App