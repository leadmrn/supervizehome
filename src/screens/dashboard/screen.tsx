import { Link } from 'react-router-dom';
import Add from '../../components/add/component';
import ArtisanItem from '../../components/artisan-item';
import LinkInline from '../../components/links/link-inline';
import ProjectItem from '../../components/project-item';
import ReportItem from '../../components/report-item';
import TitleMedium from '../../components/texts';

import './styles.scss';

function Dashboard() {
  return (
    <div className="Dashboard page">
      <div className="column-left">
        <div>
          <div className="Dashboard_divTitle">
            <TitleMedium title="mon projet" />
            <LinkInline name="changer" path="/projects" />
          </div>
          <div>
            <ProjectItem
              title="Maison"
              location="Nice"
              landArea={85}
              houseArea={55}
              dateStart="25 janvier 2023"
            />
          </div>
        </div>
        <div>
          <div className="Dashboard_divTitle">
            <TitleMedium title="l'équipe projet" />
            <LinkInline name="ajouter" path="/add-artisan" />
          </div>
          <div>
            <ArtisanItem
              name="Haby"
              job="Electricien"
              tel="06 23 21 45 26"
              mail="haby@elec.com"
            />
            <ArtisanItem
              name="Artisan 2"
              job="Plombier"
              tel="06 33 49 40 00"
              mail="artisan2@plomberie.com"
            />
          </div>
        </div>
      </div>
      <div className="column-right">
        <div>
          <div className="Dashboard_divTitle">
            <TitleMedium title="rapports travaux" />
          </div>
          <div>
            <ReportItem
              title="Fondations"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet ornare metus. Integer vel sodales est, vitae venenatis qu..."
              user="Artisan 2"
              date="12 mars 2023"
              pics={['test']}
            />
            <ReportItem
              title="Début du projet"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet ornare metus. Integer vel sodales est, vitae venenatis qu..."
              user="Haby"
              date="25 janvier 2023"
              pics={['test', 'test']}
              documents={['test', 'test', 'test']}
            />
            <Add
              role="artisan"
              routeToGo="/add-report"
              text="Ajouter un rapport"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
