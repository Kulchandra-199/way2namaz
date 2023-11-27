import React from 'react';
import './footer.css';
import logo from './../../assets/images/logo12.png';
const Footer = () => {
    return (
        <footer className="wpo-site-footer">
                <div className="wpo-upper-footer">
                    <div className="container">
                        <div className="row widget-title3">
                            <div className="col-lg-3 col-xl-3 col-md-12 col-sm-12">
                                <div className="widget about-widget">
                                    <div className="logo widget-title">
                                       <img src={logo} alt="" />
                                    </div>
                                    <p>Build and Earn with your online <br />store with lots of cool and <br /> exclusive wpo-features </p>
                                   
                                </div>
                            </div>
                            <div className="col-lg-3 col-xl-3 col-md-12 col-sm-12">
                                <div className="widget link-widget">
                                    <div className="widget-title">
                                        <h3>Service</h3>
                                    </div>
                                    <ul>
                                        <li><a href="/">Islamic School</a></li>
                                        <li><a href="/">Our Causes</a></li>
                                        <li><a href="/">Our Mission</a></li>
                                       
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-xl-3 col-md-12 col-sm-12">
                                <div className="widget link-widget">
                                    <div className="widget-title">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                    <li><a href="home">Home</a></li>
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="/">Services</a></li>
                                        
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-xl-3 col-md-12 col-sm-12">
                                <div className="widget market-widget wpo-service-link-widget">
                                    <div className="widget-title">
                                        <h3>Contact </h3>
                                    </div>
                                    <div className="contact-ft">
                                    <ul>
                                    <li>online store with lots of cool and exclusive wpo-features</li>
                                        <br />
                                       
                                            <li><i className="fi ti-location-pin"></i> D-242, Secter 63, Noida</li>
                                            <li><i className="fi flaticon-call"></i>+000123456789</li>
                                            <li><i className="fi flaticon-envelope"></i>ummah@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="wpo-lower-footer">
                    <div className="container">
                        <div className="row">
                            {/* <div className="col col-xs-12">
                                <p className="copyright">© 2020 Ummah. All rights reserved</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </footer>
    );
}

export default Footer;
