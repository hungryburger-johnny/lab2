import { NavLink } from 'react-router-dom';
import cvsuLogo from '../assets/cvsu.logo.png';

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="brand">
          <img src={cvsuLogo} alt="CvSU Logo" className="brand-logo-img" />
          <div className="brand-text">
            <span className="brand-title">College of Engineering & Information Technology</span>
            <span className="brand-sub">Student Information Portal</span>
          </div>
        </div>
        <ul className="nav-links">
          <li><NavLink to="/" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>Home</NavLink></li>
          <li><NavLink to="/students" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>Students</NavLink></li>
          <li><NavLink to="/courses" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>Courses</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>About</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;