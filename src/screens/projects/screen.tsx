import ProjectCard from '../../components/project-card';

import './styles.scss';
import Back from '../../components/back/component';
import Add from '../../components/add/component';
import { useSelector } from 'react-redux';

function Projects() {
  const role = useSelector((state: any) => state.userInfo.type);
  const projects = useSelector((state: any) => state.projects);
  const selectedProject = useSelector((state: any) => state.selectedProject);

  return (
    <div className="Projects page content_center">
      <Back to="/dashboard" />
      {projects.length !== 0 ? (
        <div className="items">
          {projects.map((project: any) => (
            <ProjectCard
              role={role}
              key={project.id}
              id={project.id}
              title={project.name}
              location={project.location}
              isSelected={project.id === selectedProject.id}
            />
          ))}
        </div>
      ) : role === 'artisan' ? (
        <p className="center">
          Vous n'avez pas de projets pour le moment, demandez à votre client de
          vous ajouter à son projet.
        </p>
      ) : (
        <p className="center">
          Vous n'avez pas de projets pour le moment, veuillez en créer un pour
          utiliser au mieu notre plateforme.
        </p>
      )}
      {role === 'client' ? (
        <Add role="client" routeToGo="/add-project" text="Ajouter un projet" />
      ) : null}
    </div>
  );
}

export default Projects;
