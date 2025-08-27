import React from 'react';

interface ContactInfoProps {
    address: string;
    phone: string;
    email: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ address, phone, email }) => {
    return (
        <div className="contact-info">
            <h2>Contact Information</h2>
            <p><strong>Address:</strong> {address}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Email:</strong> {email}</p>
        </div>
    );
};

export default ContactInfo;