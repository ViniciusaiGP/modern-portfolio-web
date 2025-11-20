import { Button } from '@/components/ui/button'
import { Plus } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

interface AdminFabProps {
  onClick: () => void
}

export function AdminFab({ onClick }: AdminFabProps) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 0.5 
      }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <Button
        size="lg"
        onClick={onClick}
        className="relative rounded-full h-20 w-20 shadow-2xl shadow-accent/30 hover:shadow-3xl hover:shadow-accent/40 transition-all bg-gradient-to-r from-accent via-primary to-secondary hover:from-accent/90 hover:via-primary/90 hover:to-secondary/90 group overflow-hidden border-2 border-white/20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.3),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity" />
        <Plus size={32} weight="bold" className="relative z-10 group-hover:rotate-90 transition-transform duration-300" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/0 via-white/10 to-white/0 blur-sm" />
      </Button>
    </motion.div>
  )
}
