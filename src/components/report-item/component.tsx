import Badge from '../badge';
import './styles.scss';
import iconPicture from '../../assets/icons/attachment.svg';
import iconFile from '../../assets/icons/file.svg';

export default function ReportItem(props: {
  title: string;
  content: string;
  user: string;
  date: string;
  pics?: string[];
  documents?: string[];
}) {
  return (
    <div className="ReportItem">
      {props.pics || props.documents ? (
        <div className="attachments_files">
          {props.pics ? (
            <div>
              <img src={iconPicture} alt="Icon" />
              <p>
                {props.pics.length} {props.pics.length > 1 ? 'images' : 'image'}
              </p>
            </div>
          ) : null}
          {props.documents ? (
            <div>
              <img src={iconFile} alt="Icon" />
              <p>
                {props.documents.length}{' '}
                {props.documents.length > 1 ? 'documents' : 'document'}
              </p>
            </div>
          ) : null}
        </div>
      ) : null}
      <div>
        <div className="date_job">
          <h3>{props.date}</h3>
          <Badge job="Plombier" />
        </div>
        <h4>{props.title}</h4>
        <p className="text">{props.content}</p>
      </div>
    </div>
  );
}
