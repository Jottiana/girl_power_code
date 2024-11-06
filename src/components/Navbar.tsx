import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>Accueil</Link>
      <Link to="/heroines" style={styles.link}>Héroïnes de la Tech</Link>
      <Link to="/metiers" style={styles.link}>Métiers de la Tech</Link>
      <Link to="/apprendre" style={styles.link}>Apprendre</Link>
      <Link to="/blog" style={styles.link}>Blog</Link>
      <Link to="/communaute" style={styles.link}>Communauté</Link>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    gap: '15px',
    padding: '10px 20px',
    backgroundColor: '#b19cd9', // Couleur Lavande de ta palette
    borderRadius: '8px',
  },
  link: {
    textDecoration: 'none',
    color: '#444444', // Gris Ardoise pour le texte
    fontSize: '1rem',
    padding: '8px 16px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
  linkHover: {
    backgroundColor: '#ffb3ba', // Rose Poudré pour effet de hover
  },
};

export default Navbar;
