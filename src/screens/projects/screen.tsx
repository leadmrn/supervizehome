import ProjectCard from '../../components/project-card';

import './styles.scss';
import Back from '../../components/back/component';
import Add from '../../components/add/component';

function Projects() {
  return (
    <div className="Projects page">
      <Back />
      <div className="items">
        <ProjectCard title="Maison" location="Nice" />
        <ProjectCard title="Loft" location="Paris" />
      </div>
      <Add role="client" routeToGo="/add-project" text="Ajouter un projet" />
    </div>
  );
}

export default Projects;
