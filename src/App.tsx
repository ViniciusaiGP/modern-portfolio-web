import { useState, useEffect } from 'react'
import { useKV } from '@github/spark/hooks'
import { Hero } from '@/components/Hero'
import { AboutSection } from '@/components/AboutSection'
import { ProjectGrid } from '@/components/ProjectGrid'
import { ProjectDetail } from '@/components/ProjectDetail'
import { ProjectForm } from '@/components/ProjectForm'
import { AdminFab } from '@/components/AdminFab'
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
    <div className="min-h-screen bg-background">
      <Hero />
      
      <AboutSection />

      <main id="projects" className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <ProjectGrid 
          projects={projects || []} 
          onProjectClick={handleProjectClick}
        />
      </main>

      <footer className="border-t border-border/50 py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
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