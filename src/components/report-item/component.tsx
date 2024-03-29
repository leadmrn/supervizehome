import './styles.scss';
import iconPicture from '../../assets/icons/attachment.svg';
import iconFile from '../../assets/icons/file.svg';
import { useNavigate } from 'react-router-dom';
import { reportsService } from '../../service/api';
import moment from 'moment';
import Badge from '../badge';

export default function ReportItem(props: {
  id: number;
  title: string;
  content: string;
  date: string;
  createdAt: string;
  pics?: any;
  files?: any;
  role: 'client' | 'artisan';
  user: any;
}) {
  const navigate = useNavigate();

  const onClick = async () => {
    try {
      await reportsService.getById(props.id);
      navigate(`/report/${props.id}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div onClick={onClick} className="ReportItem">
      {props.pics || props.files ? (
        <div className="attachments_files">
          {props.pics && props.pics.data ? (
            <div>
              <img src={iconPicture} alt="Icon" />
              <p>
                {props.pics.data.length}{' '}
                {props.pics.data.length > 1 ? 'images' : 'image'}
              </p>
            </div>
          ) : null}
          {props.files && props.files.data ? (
            <div>
              <img src={iconFile} alt="Icon" />
              <p>
                {props.files.data.length}{' '}
                {props.files.data.length > 1 ? 'documents' : 'document'}
              </p>
            </div>
          ) : null}
        </div>
      ) : null}
      <div>
        <div className="date_job">
          <h3>{moment(props.date).format('DD-MM-YYYY')}</h3>
          <Badge job={props.user.job} role={props.user.type} />
        </div>
        <h4>{props.title}</h4>
        <p className="text">{props.content}</p>
      </div>
    </div>
  );
}
