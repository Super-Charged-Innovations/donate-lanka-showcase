import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

interface LoadingTransitionProps {
  isLoading: boolean;
}

export const LoadingTransition = ({ isLoading }: LoadingTransitionProps) => {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
      aria-label="Loading page"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-3 text-foreground"
      >
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
        <span className="text-sm font-medium">Loading...</span>
      </motion.div>
    </motion.div>
  );
};