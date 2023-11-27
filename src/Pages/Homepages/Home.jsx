import React from 'react';

import './home.css';
import Mahjid from './../../assets/images/mobile5.png';
import new1 from './../../assets/images/ad1.png';
import new2 from './../../assets/images/ad.png';

import Appstore from './../../assets/images/apple.png';
import Playstore from './../../assets/images/google-play.png';
import About from '../Aboutpages/About';
import Service from '../Service/Service';


const Home = () => {
  return (
    <>
   
    <section id="header" className="">
      <div className="container-fluid">
        <div className="row">
          <div className="col-9 mx-auto text1">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-md-12 col-xl-6 pt-6 pt-lg-0 order-2 order-lg-1 text">
                <button className='btn1'> <strong> <a href="about"> Let's Know Islam </a></strong></button>
                <h1> Read! In the Name of Your <br />Lord, Who has created.</h1>
                <p>  We are the best Educational Organization. <br /> Let's Know about Islam And the holy Quran!</p>

                

                <div className="mt-3">
                <a href=""> <img src={new2} alt="" /></a>
                  <a href=""> <img src={new1} alt="" /></a>
                  
                  {/* <button className='btn2 '> <img src={Appstore} alt="" /> Available Now <br /> App Store </button>
                    <button className='btn2 '> <img src={Playstore} alt="" /> Discover More</button> */}
                </div>

              </div>
              <div className="col-lg-6 col-sm-12 col-md-12 col-xl-6 order-lg-2 header-img ">
                <img src={Mahjid} alt="" />
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
   <About/>
   <Service/>
    </>
  );
}

export default Home;
