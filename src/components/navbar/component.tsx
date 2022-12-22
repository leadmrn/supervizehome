import { Link, Outlet } from 'react-router-dom';

function NavBar() {
  return (
    <div className="NavBar">
      <p>Logo</p>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/guide">Guide de construction</Link>
        <Link to="/login">Connexion</Link>
        <Link to="/register">Inscription</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;
