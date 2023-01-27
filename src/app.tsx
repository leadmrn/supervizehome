import { Routes, Route } from 'react-router-dom';

import Dashboard from './screens/dashboard';
import Login from './screens/login';
import Register from './screens/register';
import ErrorPage from './screens/error';
import NavBar from './components/navbar';
import Projects from './screens/projects';
import AddArtisan from './screens/add-artisan';
import AddProject from './screens/add-project';
import AddReport from './screens/add-report';
import Report from './screens/report/screen';
import { useSelector } from 'react-redux';

import './app/theme.scss';

export default function App() {
  const token = useSelector((state: any) => state.token);
  const role = useSelector((state: any) => state.userInfo.type);

  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<NavBar />}>
          {!token ? (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
          ) : (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/report/:id" element={<Report />} />
              {role === 'artisan' ? (
                <>
                  <Route path="/add-report" element={<AddReport />} />
                </>
              ) : (
                <>
                  <Route path="/add-artisan" element={<AddArtisan />} />
                  <Route path="/add-project" element={<AddProject />} />
                </>
              )}
            </>
          )}
          {/* Using path="*"" means "match anything", so this route
                  acts like a catch-all for URLs that we don't have explicit
                  routes for. */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}
