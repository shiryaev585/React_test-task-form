import React from 'react';
import Form from './Form';
import './ContactUs.scss';

const ContactUs = (props) => {
    return (
        <div className='form-wrapper'>
            <h2 className='form-wrapper__title'>Get In Touch</h2>
            <h3 className='form-wrapper__subtitle'>Leave us a message</h3>
            <Form />
        </div>
    );
};

export default ContactUs;