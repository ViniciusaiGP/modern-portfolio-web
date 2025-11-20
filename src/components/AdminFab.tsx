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
      transition={{ duration: 0.3, delay: 0.5 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <Button
        size="lg"
        onClick={onClick}
        className="rounded-full h-16 w-16 shadow-2xl hover:shadow-xl transition-shadow"
      >
        <Plus size={28} weight="bold" />
      </Button>
    </motion.div>
  )
}
