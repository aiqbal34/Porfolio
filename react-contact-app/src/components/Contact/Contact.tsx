import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import './Contact.css';

const Contact: React.FC = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <ContactForm />
            <ContactInfo />
        </div>
    );
};

export default Contact;