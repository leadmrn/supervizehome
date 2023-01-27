import Badge from '../badge';
import './styles.scss';
import iconMail from '../../assets/icons/mail.svg';
import iconTel from '../../assets/icons/tel.svg';

export default function ArtisanItem(props: {
  name: string;
  job: string;
  tel: string;
  mail: string;
  role: 'client' | 'artisan';
}) {
  return (
    <div className="ArtisanItem">
      <div>
        <p>{props.name}</p>
        <Badge role={props.role} job={props.job} />
      </div>
      <div>
        <div className="ArtisanItem_info">
          <div
            className={`icon ${
              props.role === 'artisan'
                ? 'backgroundArtisan'
                : 'backgroundClient'
            }`}
          >
            <img src={iconTel} alt="Icon tel" />
          </div>
          <p>{props.tel}</p>
        </div>
        <div className="ArtisanItem_info">
          <div
            className={`icon ${
              props.role === 'artisan'
                ? 'backgroundArtisan'
                : 'backgroundClient'
            }`}
          >
            <img src={iconMail} alt="Icon mail" />
          </div>
          <p>{props.mail}</p>
        </div>
      </div>
    </div>
  );
}
