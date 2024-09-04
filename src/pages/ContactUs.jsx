import React from 'react';
import "../pages/contactUs/contactUs.css"
import HeroSection from './contactUs/HeroSection';
import FAQSection from './contactUs/FAQSection';
import ContactForm from './contactUs/ContactFormSection';

const ContactUs = () => {
    return (
        <div>
            <HeroSection/>
            <FAQSection/>
            <ContactForm/>
        </div>
    );
};

export default ContactUs;