import './styles.scss';

export default function ArtisanItem(props: {
  name: string;
  job: string;
  tel: string;
  mail: string;
}) {
  return (
    <div className="ArtisanItem">
      <div>
        <p>{props.name}</p>
        <p>{props.job}</p>
      </div>
      <div>
        <div>
          <div className="icon"></div>
          <p>{props.tel}</p>
        </div>
        <div>
          <div className="icon"></div>
          <p>{props.mail}</p>
        </div>
      </div>
    </div>
  );
}
