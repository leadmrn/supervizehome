import ProjectCard from '../../components/project-card';

import './styles.scss';

function Projects() {
  return (
    <div className="Projects page">
      <ProjectCard title="Maison" location="Nice" />
      <ProjectCard title="Loft" location="Paris" />
      <ProjectCard addProject={true} />
    </div>
  );
}

export default Projects;
