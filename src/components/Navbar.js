import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
   const showMenu = () => {
      const miniNavbar = document.getElementById('mini-navbar');

      if (miniNavbar.className.includes('show-menus')) {
         miniNavbar.className = miniNavbar.className.replace('show-menus', '');
      }
      else {
         miniNavbar.className += 'show-menus';
      }
   };

   return (
      <>
         <ul className="navbar">
            <li id="burgerMenu" onClick={() => showMenu()}> <span> &#8801; </span> </li>
            <li className="navbar-options"><Link to="/"> <span> Home </span> </Link></li>
            <li className="navbar-options"><Link to="/signin"> <span> Sign in </span> </Link></li>
            <li className="navbar-options"><Link to="/signup"> <span> Sign up </span> </Link></li>
         </ul>

         {/* Navbar for smaller screen */}
         <ul id="mini-navbar" className="">
            <li onClick={() => showMenu()}><Link to="/"> <span> Home </span> </Link></li>
            <li onClick={() => showMenu()}><Link to="/signin"> <span> Sign in </span> </Link></li>
            <li onClick={() => showMenu()}><Link to="/signup"> <span> Sign up </span> </Link></li>
         </ul>
      </>
   );
};

export default Navbar;
