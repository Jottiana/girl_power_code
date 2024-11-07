import Navbar from '../Navbar';
import AnimatedHeader from '../AnimatedHeader';
import { Outlet, useLocation } from 'react-router-dom';
import './Layout.css';

const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="container">
      <header className="header">
        <AnimatedHeader key={location.pathname} />
        <Navbar />
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <p>&copy; 2024 Girl Power Code. Inspirons la prochaine génération !</p>
      </footer>
    </div>
  );
};

export default Layout;
