import './styles.scss';

export default function ProjectCard(props: {
  title?: string;
  location?: string;
  addProject?: boolean;
  pic?: string;
}) {
  return (
    <div className="ProjectCard">
      <div className="pic"></div>
      <div>
        {props.addProject ? (
          <>
            <p>+</p>
            <p>Ajouter un projet</p>
          </>
        ) : (
          <>
            <p>{props.title}</p>
            <p>{props.location}</p>
          </>
        )}
      </div>
    </div>
  );
}
