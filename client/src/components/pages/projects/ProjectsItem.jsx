import { motion } from "framer-motion";
import "./ProjectsItem.css";
import PictureBox from "../../ui/PictureBox.jsx";

function ProjectsItem({ project }) {
  const picUri = `/images/projects/${project.name}/${project.thumbnail}`;

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className="projects-item__container"
    >
      <a href={`/${project.name}`}>
        <PictureBox
          className=""
          aspectRatio=""
          img={picUri}
          alt={project.title}
        />
        <h4 className="projects-item__title">{project.title}</h4>
      </a>
    </motion.div>
  );
}

export default ProjectsItem;
