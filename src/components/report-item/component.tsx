import './styles.scss';

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
      <div className="attachments">
        <p>
          {props.pics?.length} images , {props.documents?.length} documents
        </p>
      </div>
      <div>
        <p>
          <strong>{props.date}</strong>
        </p>
        <p>{props.title}</p>
        <p className="text">{props.content}</p>
      </div>
    </div>
  );
}
