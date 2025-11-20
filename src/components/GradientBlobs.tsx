import { motion } from 'framer-motion'

export function GradientBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          x: [0, 150, -50, 0],
          y: [0, -80, 100, 0],
          scale: [1, 1.3, 0.9, 1],
          rotate: [0, 90, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-[10%] right-[15%] w-[700px] h-[700px] bg-gradient-to-br from-accent/25 via-primary/15 to-transparent rounded-full blur-3xl opacity-70"
      />
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 120, -60, 0],
          scale: [1, 1.4, 1.1, 1],
          rotate: [360, 270, 90, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-[5%] left-[10%] w-[800px] h-[800px] bg-gradient-to-tr from-secondary/25 via-primary/20 to-transparent rounded-full blur-3xl opacity-60"
      />
      <motion.div
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 80, -40, 0],
          scale: [1, 1.2, 0.95, 1],
          rotate: [0, 180, 360, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-[40%] left-[40%] w-[650px] h-[650px] bg-gradient-to-br from-primary/15 via-accent/10 to-transparent rounded-full blur-3xl opacity-50"
      />
    </div>
  )
}
