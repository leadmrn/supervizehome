import { Link } from 'react-router-dom';
import ProjectCard from '../../components/project-card';
import iconAdd from '../../assets/icons/add-orange.svg';

import './styles.scss';

function Projects() {
  return (
    <div className="Projects page">
      <div className="items">
        <ProjectCard title="Maison" location="Nice" />
        <ProjectCard title="Loft" location="Paris" />
      </div>
      <div className="add_project">
        <Link to="/add-project">
          <div>
            <img src={iconAdd} alt="Icon ajouter un projet" />
            <p>Ajouter un projet</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
