import React from 'react';
import Banner from './Home/Banner';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Contact from './Home/Contact';
import Summary from './Home/Summary';
import Tools from './Home/Tools';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Review from './Home/Review';
import BuyNow from './Home/BuyNow';

const Home = () => {
  return (
    <div>
      <Flip left>
        <Banner></Banner>
      </Flip>
        <Summary></Summary>
      <Fade left>
        <Tools></Tools>
        <Link to={'/resource'}><button className="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-md block mx-auto text-2xl">See all tools<FontAwesomeIcon className='ml-5 text-xl' icon={faArrowRight} /> </button></Link>
        <Contact></Contact>
        <Review></Review>
        <BuyNow></BuyNow>
      </Fade>
    </div>
  );
};

export default Home;