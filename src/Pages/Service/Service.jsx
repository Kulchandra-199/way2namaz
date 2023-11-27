import React from 'react';
import './service.css';
import mosque from './../../assets/images/mosque1.png'
import prayer from './../../assets/images/prayer1.png';
import Donation from './../../assets/images/donation1.png';
import classes from './../../assets/images/classes1.png';
import store  from './../../assets/images/store1.png'


const Service = () => {
    return (
    //     <section id='about' className='aboutus'>
    //     <div className="container">
    //       <div className="">
    //         <div className="col-10 mx-auto service-text">
    //           <h1> Our Features</h1> 
    //         </div>
    //         <div className="row">
    //           <div className="col-10 mx-auto">
    //               <div className="row">
           
    //                 <div className="col-4 service-item">
    //                     <div className=''>
    //                         <h6> Nearby Mosque</h6>
                            
    //                     </div>
    //                     <div className='card-img'><img src={mosque} alt="mosque" /></div>
    //                 </div>
    //                 <div className="col-4">
    //                     <div><h6> Prayer Timing</h6></div>
    //                     <div> <img src={prayer} alt="prayer timing" /></div>
    //                 </div>
    //                 <div className="col-4">
    //                     <div> <h6> Donations </h6></div>
    //                     <div> <img src={Donation} alt="" /></div>

    //                 </div>
    //                 <div className="col-4">
    //                     <div> <h6> Store </h6></div>
    //                     <div> <img src={store} alt="" /></div>

    //                 </div>
    //                 <div className="col-4">
    //                     <div> <h6> Islamic Classes </h6></div>
    //                     <div> <img src={classes} alt="" /></div>

    //                 </div>
    //               </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    <section className=' features'>
        <div className="container">
        <h1> Our <strong className='heading-text'>  Features</strong></h1> 
            <div className="wrapper">
                <div className="top">
                    <div className="feature_card">
                    <div className="feature_img"><img src={mosque} alt="mosque" /></div>
                        <div className="feature_heading">Find Nearby Mosque</div>
                        <div> <p> Locate mosques effortlessly, fostering a sense of community wherever you are.</p></div>
                      
                    </div>
                    <div className="feature_card1">
                    <div className="feature_img"><img src={prayer} alt="prayer timing" /></div>
                        <div className="feature_heading"> Get Prayer Timing</div>
                        <div> <p>Stay connected to your faith with real-time, accurate prayer schedules, helping you plan your day around your spiritual commitments.</p></div>
                        
                    </div>
                    <div className="feature_card2">
                    <div className="feature_img"><img src={Donation} alt="" /></div>
                        <div className="feature_heading"> Give Donations</div>
                        <div> <p>Support local mosques and charitable causes seamlessly, contributing to community projects with just a few clicks.</p></div>
                       
                    </div>

                </div>
                <div className="bottom">
                <div className="feature_card3">
                <div className="feature_img"><img src={store} alt="" /></div>
                        <div className="feature_heading">  Store</div>
                       <div> <p> Explore our online store, offering a curated selection of Islamic products to meet your spiritual needs.</p></div>
                    </div>
                    <div className="feature_card4">
                    <div className="feature_img"><img src={classes} alt="" /></div>
                        <div className="feature_heading">  Islamic Classes </div>
                        <div> <p>Deepen your understanding of Islam through online classes, catering to beginners and those seeking advanced studies.</p></div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    );
}

export default Service;
