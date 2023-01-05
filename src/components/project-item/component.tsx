import './styles.scss';

export default function ProjectItem(props: {
  title: string;
  location: string;
  landArea: number;
  houseArea: number;
  dateStart: string;
  pic?: string;
}) {
  return (
    <div className="ProjectItem">
      <div>
        <p>{props.title}</p>
        <p>{props.location}</p>
        <p>Superficie du terrain : {props.landArea}</p>
        <p>Superficie de la maison : {props.houseArea}</p>
        <p>Date de début du projet : {props.dateStart}</p>
      </div>
      <div>
        <div className="pic"></div>
      </div>
    </div>
  );
}
