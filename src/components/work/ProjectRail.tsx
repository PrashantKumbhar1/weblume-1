import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

interface Project {
  title: string;
  category: string;
  thumbnail: string;
}

interface Props {
  projects: Project[];
  onSelect: (project: Project) => void;
}

export const ProjectRail = ({ projects, onSelect }: Props) => {
  const railRef = useRef<HTMLDivElement>(null);

  /**
   * SPEED TUNING
   * Increase for faster auto-scroll
   * Mobile feels better slightly faster
   */
  const SPEED = 0.6;

  useAnimationFrame(() => {
    if (!railRef.current) return;

    const rail = railRef.current;
    rail.scrollLeft += SPEED;

    /**
     * TRUE INFINITE LOOP
     * When first half is gone, jump seamlessly
     */
    if (rail.scrollLeft >= rail.scrollWidth / 2) {
      rail.scrollLeft = 0;
    }
  });

  const looped = [...projects, ...projects];

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={railRef}
        className="
          flex gap-6
          overflow-x-scroll
          no-scrollbar
          touch-pan-x
          py-6
        "
      >
        {looped.map((project, index) => (
          <motion.div
            key={index}
            onClick={() => onSelect(project)}
            whileHover={{
              rotateY: 6,
              rotateX: -4,
              scale: 1.04,
            }}
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
            style={{ perspective: 1200 }}
            className="
              flex-shrink-0
              w-[85vw] sm:w-[60vw] md:w-[38vw] lg:w-[30vw]
              rounded-3xl
              bg-[#020617]/95
              border border-white/10
              hover:border-emerald-400/40
              cursor-pointer
              overflow-hidden
              shadow-xl
            "
          >
            {/* THUMBNAIL */}
            <div className="relative h-56 sm:h-64 w-full">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="h-full w-full object-cover"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>

            {/* TEXT */}
            <div className="p-5">
              <p className="text-xs uppercase tracking-wide text-emerald-400 mb-1">
                {project.category}
              </p>
              <h3 className="text-lg font-semibold leading-snug">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
