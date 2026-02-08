import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";

interface Project {
  title: string;
  description: string;
  video: string;
}

interface Props {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // autoplay + pause
  useEffect(() => {
    if (project && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
    return () => {
      videoRef.current?.pause();
    };
  }, [project]);

  // ESC close
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/60 backdrop-blur-xl
            px-3
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.92, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.92, y: 40 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="
              relative
              w-full md:w-[70%]
              max-h-[90vh]
              overflow-y-auto
              bg-[#020617]
              rounded-2xl md:rounded-3xl
              border border-white/15
              shadow-2xl
              p-4 md:p-6
            "
          >
            {/* CLOSE */}
            <button
              onClick={onClose}
              className="
                absolute top-4 right-4
                text-white/70 hover:text-white
                transition
              "
            >
              <X />
            </button>

            {/* VIDEO */}
            <div className="rounded-xl overflow-hidden border border-white/10">
              <video
                ref={videoRef}
                src={project.video}
                muted
                controls
                playsInline
                className="w-full max-h-[50vh] object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="mt-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
