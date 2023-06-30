import './styles.scss';
import Back from '../../components/back/component';
import Badge from '../../components/badge';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Button from '../../components/button';
import { reportsService } from '../../service/api';
import { useNavigate } from 'react-router-dom';
import iconUploadFile from '../../assets/icons/download.png';
import iconDownloadFile from '../../assets/icons/download.svg';

function Report() {
  const navigate = useNavigate();
  const role = useSelector((state: any) => state.userInfo.type);
  const selectedReport = useSelector((state: any) => state.selectedReport);
  const userReport = useSelector(
    (state: any) => state.selectedReport.user.data.attributes
  );
  const user = useSelector((state: any) => state.userInfo);
  const images = selectedReport.images.data;
  const files = selectedReport.files.data;
  const publishDate = moment(selectedReport.start_date).format('DD/MM/YYYY');

  const onDelete = async () => {
    try {
      await reportsService.delete(selectedReport.id);
      navigate('/dashboard');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="Report page">
      <Back />
      <h1>{selectedReport.name}</h1>
      <div className="userInfo">
        <div>
          <h2>
            {userReport.firstName} {userReport.lastName}
          </h2>
          <Badge role={role} job={userReport.job} />
        </div>
        {userReport.email === user.email ? (
          <Button action={onDelete} text="Supprimer" type="destructive" />
        ) : null}
      </div>
      <div className="description">
        <p className="date">
          <b>Date de début : {publishDate}</b>
          {selectedReport.step ? (
            <>
              <br></br>
              <b>Étape : {selectedReport.step}</b>
            </>
          ) : null}
        </p>
        <p>{selectedReport.description}</p>
      </div>
      {images ? (
        <div className="pictures">
          <h3>Images</h3>
          <div>
            {images.map((img: any, index: number) => (
              <img
                className="Report_pic"
                key={index}
                src={`https://fast-citadel-34836.herokuapp.com${img.attributes.url}`}
                alt="img"
              />
            ))}
          </div>
        </div>
      ) : null}
      {files ? (
        <div className="documents">
          <h3>Documents</h3>
          <div>
            {files.map((doc: any, index: number) => (
              <div className="Report_doc" key={index}>
                <div>
                  <img src={iconUploadFile} alt="icon upload" />
                  <div>
                    <p>
                      <b>{doc.attributes.name}</b>
                    </p>
                  </div>
                </div>
                <a
                  href={`https://fast-citadel-34836.herokuapp.com${doc.attributes.url}`}
                  download
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src={iconDownloadFile} alt="icon télécharger" />
                </a>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Report;
