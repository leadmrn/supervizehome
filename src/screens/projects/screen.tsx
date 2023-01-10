import { Link } from 'react-router-dom';
import ProjectCard from '../../components/project-card';

import './styles.scss';

function Projects() {
  return (
    <div className="Projects page">
      <ProjectCard title="Maison" location="Nice" />
      <ProjectCard title="Loft" location="Paris" />
      <Link to="/add-project">
        <ProjectCard addProject={true} />
      </Link>
    </div>
  );
}

export default Projects;
