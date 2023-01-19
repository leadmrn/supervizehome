import './styles.scss';

export default function ProjectCard(props: {
  title?: string;
  location?: string;
  pic?: string;
}) {
  return (
    <div className="ProjectCard">
      <div className="pic"></div>
      <div>
        <h4>{props.title}</h4>
        <p>{props.location}</p>
      </div>
    </div>
  );
}
