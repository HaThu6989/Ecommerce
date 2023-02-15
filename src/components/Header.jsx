import { useSelector } from "react-redux";
import DarkModeToggle from './DarkModeToggle';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const userFirst = useSelector((state) => state.user.firstName);
  const userLast = useSelector((state) => state.user.lastName);

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
            <Link to="/">
                My Website
            </Link>
        </div>
        <ul className="nav-list">
        
            <li className="nav-item padd"><Link to="/user"> &#x1F9D1;  {userFirst} {userLast}</Link></li>

            <li className="nav-item padd">&#x1F6D2; Cart</li>

            <li className="nav-item"><DarkModeToggle/></li>


        </ul>
      </nav>
    </header>
  );
};

export default Header;