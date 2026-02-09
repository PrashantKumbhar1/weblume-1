// src/components/work/ProjectCard.tsx

import { motion } from "framer-motion";

interface Project {
  category: string;
  title: string;
}

interface Props {
  project: Project;
  onClick: () => void;
}

export const ProjectCard = ({ project, onClick }: Props) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.06,
        rotateY: 6,
      }}
      className="
        min-w-[320px] h-[220px]
        rounded-2xl cursor-pointer
        bg-gradient-to-br from-white/5 to-white/10
        border border-white/10
        backdrop-blur-md
        flex items-end p-6
      "
      onClick={onClick}
      style={{ perspective: 1000 }}
    >
      <div>
        <span className="text-sm text-muted-foreground">
          {project.category}
        </span>
        <h3 className="text-xl font-semibold mt-1">
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
};
