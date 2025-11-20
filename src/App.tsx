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

      <footer className="relative border-t-2 border-border/30 py-20 px-6 md:px-12 lg:px-24 overflow-hidden bg-gradient-to-b from-background to-accent/5">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-primary/5" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-10">
            <h3 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Vamos trabalhar juntos?
            </h3>
            <p className="text-muted-foreground text-xl mb-12 max-w-2xl mx-auto font-medium">
              Estou sempre aberto a novos desafios e oportunidades de colaboração
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <a 
                href="mailto:seu.email@exemplo.com" 
                className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent/10 to-primary/10 hover:from-accent/20 hover:to-primary/20 border-2 border-border/30 hover:border-accent/50 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/20"
              >
                <span className="text-2xl">📧</span>
                <span className="font-semibold text-foreground group-hover:text-accent transition-colors">seu.email@exemplo.com</span>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://github.com/seu-usuario" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-2.5 bg-card hover:bg-gradient-to-r hover:from-accent/10 hover:to-primary/10 border-2 border-border/30 hover:border-accent/50 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <span className="text-xl">🐙</span>
                <span className="text-sm font-semibold text-foreground/80 group-hover:text-accent transition-colors">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/seu-usuario" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-2.5 bg-card hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 border-2 border-border/30 hover:border-primary/50 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <span className="text-xl">💼</span>
                <span className="text-sm font-semibold text-foreground/80 group-hover:text-primary transition-colors">LinkedIn</span>
              </a>
              <a 
                href="https://twitter.com/seu-usuario" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-2.5 bg-card hover:bg-gradient-to-r hover:from-secondary/10 hover:to-accent/10 border-2 border-border/30 hover:border-secondary/50 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <span className="text-xl">🐦</span>
                <span className="text-sm font-semibold text-foreground/80 group-hover:text-secondary transition-colors">Twitter</span>
              </a>
            </div>
          </div>
          <div className="pt-10 mt-10 border-t-2 border-border/30">
            <p className="text-muted-foreground text-sm font-medium">
              © {new Date().getFullYear()} Todos os direitos reservados. Feito com{' '}
              <span className="inline-block animate-pulse">💜</span> usando React + TypeScript
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