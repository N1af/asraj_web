import { motion, AnimatePresence } from "framer-motion";
import anriLogo from "@/assets/anri-logo.jpg";

interface SplashScreenProps {
  isVisible: boolean;
}

export default function SplashScreen({ isVisible }: SplashScreenProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          {/* Background glow orbs */}
          <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-primary/10 blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-accent/10 blur-[120px] animate-pulse" style={{ animationDelay: "0.5s" }} />

          <div className="relative flex flex-col items-center gap-6">
            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center"
            >
              <img src={anriLogo} alt="ANRI Solution" className="h-24 w-auto object-contain" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-center"
            >
              <h1 className="font-display font-bold text-3xl text-foreground">
                ANRI <span className="text-gradient">Solution</span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-muted-foreground text-sm mt-2 tracking-widest uppercase"
              >
                Transforming Ideas Into Digital Reality
              </motion.p>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.3 }}
              className="w-48 h-1 rounded-full bg-secondary overflow-hidden mt-4"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-gradient-primary rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
