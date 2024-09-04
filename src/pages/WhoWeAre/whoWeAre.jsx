import React from 'react';
import "../AboutUs.css";
const WhoWeAre = () => {
    return (
        <section id="about" className="about-us">
            <div className="about-container">
                <div className="about-text">
                    <h2>WHO WE ARE</h2>
                    <p>
                        Welcome to Trail Blaze, where adventure meets the great outdoors! 
                        We are a passionate and dedicated team of outdoor enthusiasts who have come together 
                        to share our love for trekking, exploration, and the natural wonders of the world. 
                        With a deep-rooted commitment to preserving the beauty of our planet, we aim to 
                        provide unforgettable trekking experiences that leave a lasting impact on your life.
                    </p>
                    <div className="about_support">
                        <div className="features-container">
                            <div className="feature">
                                <img src="https://www.trekkersofindia.com/frontend/images/icon-01.png" alt="Professional Trekking Company" />
                                <p>Professional Trekking Company</p>
                            </div>
                            <div className="feature">
                                <img src="https://www.trekkersofindia.com/frontend/images/icon-02.png" alt="Professional Trek Leaders" />
                                <p>Professional Trek Leaders</p>
                            </div>
                            <div className="feature">
                                <img src="https://www.trekkersofindia.com/frontend/images/icon-04.png" alt="5 Stars Trekking Experience" />
                                <p>5 Stars Trekking Experience</p>
                            </div>
                            <div className="feature">
                                <img src="https://www.trekkersofindia.com/frontend/images/icon-05.png" alt="Trek Expert Support" />
                                <p>Trek Expert Support</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-image">
                    <img src="https://www.bikatadventures.com/images/BlogspotContents/BlogspotImageUrl53307.JPG" alt="About Us" />
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
