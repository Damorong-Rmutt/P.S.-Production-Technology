import { Link } from 'react-router-dom'
import './Nav.css'

export default function Navbar() {
  return (
    <>
      <div className="top-bar">
        <span id='ps'>P.S. Production Technology</span>
        <div className="top-bar-right">
        <span id='phone'>📞 02-077-4149</span>
        <span className='email'>📧 pspro9999@gmail.com</span>
        </div>
      </div>
    <section className='navbar'>
      <div className='logo'>
        <Link to='/'>
          <img
            src='/static/PS1.png'
            alt='Hikvision Logo'
          />
        </Link>
      </div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/promotion'>Promotion</Link>
        </li>
        <li
          className='dropdown'
          onClick={e => e.currentTarget.classList.toggle('active')}
        >
          <Link to='/product'>Product</Link>
          <ul className='dropdown-menu'>
            <li>
              <Link to='/product/link1'>Link 1</Link>
            </li>
            <li>
              <Link to='/product/link2'>Link 2</Link>
            </li>
            <li>
              <Link to='/product/link3'>Link 3</Link>
            </li>
          </ul>
        </li>
        <li>
          <a href='#'>Payment</a>
        </li>
        <li>
          <Link to='/contacts'>Contact</Link>
        </li>
      </ul>
      <div
        className='hamburger'
        onClick={() => {
          const menu = document.querySelector('.navbar ul')
          menu.classList.toggle('active')
        }}
      >
        ☰
      </div>
    </section>
    </>
  )
}
