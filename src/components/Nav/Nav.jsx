import { Link } from 'react-router-dom';
import './Nav.css';
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";

export default function Navbar() {
  const toggleMenu = () => {
    const menu = document.querySelector('.navbar ul');
    menu.classList.toggle('active');
  };

  return (
    <>
      <div className="top-bar">
        <span id="ps">P.S. Production Technology</span>
        <div className="top-bar-right">
          <span className ="phone-call"><FaSquarePhone /> 02-077-4149</span>
          <span className="email"><MdEmail />pspro9999@gmail.com</span>
        </div>
      </div>

      <section className="navbar" id="navbar">
        <div className="logo">
          <Link to="/">
            <img src="/static/PS1.png" alt="Hikvision Logo" />
          </Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/promotion">Promotion</Link></li>
          <li className="dropdown">
            <Link to="/product">Product</Link>
          </li>
          <li><Link to="/payment">Payment</Link></li>
          <li><Link to="/contacts">Contact</Link></li>
        </ul>
      </section>
    </>
  );
}
