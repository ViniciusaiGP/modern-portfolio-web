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
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <Button
        size="lg"
        onClick={onClick}
        className="relative rounded-full h-16 w-16 shadow-2xl hover:shadow-xl transition-all bg-gradient-to-br from-accent to-primary hover:from-accent/90 hover:to-primary/90 group overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <Plus size={28} weight="bold" className="relative z-10" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/0 to-white/20" />
      </Button>
    </motion.div>
  )
}
