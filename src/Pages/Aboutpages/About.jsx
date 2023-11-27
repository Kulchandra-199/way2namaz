import React from 'react';
import './about.css';
import about1 from './../../assets/images/about3.png'

const About = () => {
    return (
        <section id='about' className='aboutus'>
      <div className="container">
        <div className="">
          <div className="col-10 mx-auto about-text">
            <h1> About <span> Us</span></h1> 
          </div>
          <div className="row">
            <div className="col-12 mx-auto">
                <div className="row">
          <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 ">
              <div className="row about-2">
                <img src={about1} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
                <div className="row about-1">
                    <h1> Seeking of knowledge is a duty of every Muslim</h1>
                    <p> The rise of Muslims to the zenith of civilization in a 
                        period of four decades was based on lslam's emphasis on learning.
                         This is obvious when one takes a look at the Qur'an and the
                          traditions of Prophet Muhammad which are filled with
                         references to learning, education, observation.</p>

                        <button> Discover More</button>
                </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default About;
