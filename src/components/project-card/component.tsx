import { useNavigate } from 'react-router-dom';
import { projectService } from '../../service/api';
import './styles.scss';

export default function ProjectCard(props: {
  title?: string;
  location?: string;
  pic?: string;
  isSelected?: boolean;
  role: string;
  id: number;
}) {
  const navigate = useNavigate();
  const onSelect = () => {
    projectService.getById(props.id).then(() => navigate('/dashboard'));
  };

  return (
    <div
      onClick={onSelect}
      className={`ProjectCard ${props.isSelected ? 'selected' : null} ${
        props.role === 'artisan' && props.isSelected
          ? 'backgroundArtisan'
          : props.role === 'client' && props.isSelected
          ? 'backgroundClient'
          : null
      } ${
        props.role === 'artisan'
          ? 'borderArtisan colorArtisan'
          : 'borderClient colorClient'
      }`}
    >
      {/* <div className="pic"></div> */}
      <div>
        <h4>{props.title}</h4>
        <p>{props.location}</p>
      </div>
    </div>
  );
}
