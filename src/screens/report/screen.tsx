import './styles.scss';
import Back from '../../components/back/component';
import Badge from '../../components/badge';
import { useSelector } from 'react-redux';

function Report() {
  const role = useSelector((state: any) => state.userInfo.type);
  const selectedReport = useSelector((state: any) => state.selectedReport);
  const userReport = useSelector(
    (state: any) => state.selectedReport.user.data.attributes
  );

  console.log(userReport);

  return (
    <div className="Report page">
      <Back />
      <h1>{selectedReport.name}</h1>
      <div className="userInfo">
        <h2>
          {userReport.firstName} {userReport.lastName}
        </h2>
        <Badge role={role} job={userReport.job} />
      </div>
      <div className="description">
        <p>{selectedReport.description}</p>
      </div>
      {/* <div className="pictures">
        <h3>Images</h3>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="documents">
        <h3>Documents</h3>
        <div>
          <div>doc</div>
        </div>
      </div> */}
    </div>
  );
}

export default Report;
