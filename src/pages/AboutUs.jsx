import React from 'react';
import "./aboutUsContent/aboutUsSection"
import AboutSections from './aboutUsContent/aboutUsSection';
import WhoWeAre from './WhoWeAre/whoWeAre';
import Mission from './ourMission/OurMission';
import Vision from './ourVission/OurVission';
import JoinUs from './JoinUs/JoinUsSection';
import ReviewsSection from './reviewSection/ReviewSection';

const AboutUs = () => {
    return (
        <div>
            <AboutSections/>
            <WhoWeAre/>
            <Mission/>
            <Vision/>
            <ReviewsSection/>
            <JoinUs/>
        </div>
    );
};

export default AboutUs;