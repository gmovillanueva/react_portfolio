import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose } from '@fortawesome/free-solid-svg-icons';
import LogoS from '../../assets/images/logo_s.png'
import LongSub from '../../assets/images/temp_logo_sub.png'
import './index.scss';

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='nav-bar'>
      <Link className='logo'
            to='/'
            onClick={() => setShowNav(false)}>
        <img src={LogoS} alt='logo' />
        <img className='sub-logo' src={LongSub} alt='gmo' />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact='true'
          activeClassName='active'
          to='/'
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
        </NavLink>
        <NavLink
          activeClassName='active'
          className='about-link'
          to='/about'
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
        </NavLink>
        <NavLink
          activeClassName='active'
          className='portfolio-link'
          to='/portfolio'
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e' />
        </NavLink>
        <NavLink
          activeClassName='active'
          className='contact-link'
          to='/contact'
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color='#ffd700'
          size='3x'
          className='close-icon'
        />
      </nav>
      <ul>
        <li>
          <a
            href='https://www.linkedin.com/in/gmodvillanueva/'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color='#4d4d4e'
              className='anchor-icon'
            />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/gmovillanueva'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon
              icon={faGithub}
              color='#4d4d4e'
              className='anchor-icon'
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(false)}
        icon={faBars}
        color='#ffd700'
        size='3x'
        className='hamburger-icon'
      />
    </div>
  )
}

export default Sidebar
