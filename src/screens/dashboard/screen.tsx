import { useSelector } from 'react-redux';
import Add from '../../components/add/component';
import ArtisanItem from '../../components/artisan-item';
import LinkInline from '../../components/links/link-inline';
import ProjectItem from '../../components/project-item';
import ReportItem from '../../components/report-item';
import TitleMedium from '../../components/texts';

import './styles.scss';
import Search from '../../components/search';
import { useState } from 'react';

const removeUppercaseAccent = (string: string) => {
  const value = string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return value.toLowerCase();
};

function Dashboard() {
  const [search, setSearch] = useState<string>('');

  const firstName = useSelector((state: any) => state.userInfo.firstName);
  const lastName = useSelector((state: any) => state.userInfo.lastName);
  const role = useSelector((state: any) => state.userInfo.type);
  const selectedProject = useSelector((state: any) => state.selectedProject);
  const artisansProject = useSelector((state: any) => state.artisansProject);
  const reportsProject = useSelector((state: any) => state.reportsProject);
  console.log(reportsProject);

  return (
    <div className="Dashboard page">
      <h2 className="hello">{`👋 Ravie de vous revoir ${firstName} ${lastName}`}</h2>
      <div className="columns">
        <div className="column-left">
          <div>
            <div className="Dashboard_divTitle">
              <TitleMedium title="mon projet" />
              <LinkInline role={role} name="changer" path="/projects" />
            </div>
            <div>
              {selectedProject.name ? (
                <ProjectItem
                  title={selectedProject.name}
                  location={selectedProject.location}
                  landArea={selectedProject.landArea}
                  houseArea={selectedProject.houseArea}
                  dateStart={selectedProject.start_date}
                  role={role}
                />
              ) : (
                <p>Vous n'avez pas sélectionné de projet.</p>
              )}
            </div>
          </div>
          <div>
            <div className="Dashboard_divTitle">
              <TitleMedium
                title="l'équipe projet"
                number={artisansProject.length}
              />
              {role === 'artisan' ? null : (
                <LinkInline role={role} name="ajouter" path="/add-artisan" />
              )}
            </div>
            {artisansProject.length !== 0 ? (
              <div>
                {artisansProject.map((artisan: any) => (
                  <ArtisanItem
                    name={`${artisan.firstName} ${artisan.lastName}`}
                    job={artisan.job}
                    tel={artisan.tel}
                    mail={artisan.email}
                    role={role}
                    key={artisan.id}
                  />
                ))}
              </div>
            ) : (
              <p>Veuillez ajouter un artisan à votre projet.</p>
            )}
          </div>
        </div>
        <div className="column-right">
          <div>
            <div className="Dashboard_divSearch">
              <TitleMedium
                title="rapports travaux"
                number={reportsProject.length}
              />
              {role === 'artisan' && selectedProject.name ? (
                <Add
                  role={role}
                  routeToGo="/add-report"
                  text="Ajouter un rapport"
                />
              ) : null}
              <Search
                onSearch={(value) => {
                  setSearch(value);
                }}
              />
            </div>
            <div>
              {search !== ''
                ? reportsProject.map((report: any) =>
                    removeUppercaseAccent(report.name).includes(
                      removeUppercaseAccent(search)
                    ) ||
                    removeUppercaseAccent(report.description).includes(
                      removeUppercaseAccent(search)
                    ) ? (
                      <ReportItem
                        id={report.id}
                        title={report.name}
                        content={report.description}
                        date={report.start_date}
                        createdAt={report.createdAt}
                        role={role}
                        key={report.id}
                        user={report.user}
                        pics={report.images}
                        files={report.files}
                      />
                    ) : null
                  )
                : reportsProject.map((report: any) => (
                    <ReportItem
                      id={report.id}
                      title={report.name}
                      content={report.description}
                      date={report.start_date}
                      createdAt={report.createdAt}
                      role={role}
                      key={report.id}
                      user={report.user}
                      pics={report.images}
                      files={report.files}
                    />
                  ))}
              {reportsProject.length === 0 && role === 'client' ? (
                <p>Vos artisans n'ont pas écrit de rapports pour le moment.</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
