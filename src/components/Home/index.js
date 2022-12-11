import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo_s.png';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['G','u','i','l','l','e','r','m','o']
  const jobArray = ['D','e','v','e','l','o','p','e','r']

  return (
    /**
     * Setting up container with dancing text.
     * Why dancing text?
     * Based off tutorial to learn how to animate text.
     * TODO replace with something better.
     */
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>Hello, <br /> I am
        <img src={LogoTitle} alt='developer' />
          uillermo
          <br />
          Lonely Developer
        </h1>
        <h2>
          Backend Developer / Forever Student / Desperate
        </h2>
        <Link to='/contact' className='flat-button'>
          CONTACT ME
        </Link>

      </div>

    </div>
  );
}

export default Home;