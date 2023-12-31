import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fd17cgp', 'template_s4fx7um', form.current, 'yqxhU25qfuV7-9MSo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container row-container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='content_option-icon' aria-label='email' />
            <h4>Email</h4>
            <h5>camriecan@gmail.com</h5>
            <a href='mailto:camriecan@gmail.com' target='_blank' rel='noreferrer'>Send a Message</a>
          </article>
          <article className='contact_option'>
            <BsLinkedin className='content_option-icon' aria-label='LinkedIn Messenger' />
            <h4>Messenger</h4>
            <h5>Linkedin</h5>
            <a href='https://www.linkedin.com/in/cameron-riecan' target='_blank' rel='noreferrer'>Send a Message</a>
          </article>
        </div>
        {/* End of Contact Options */}

        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor='name'>Name:</label>
          <input
            type="text"
            id='name'
            name='name'
            placeholder='Your Full Name'
            required
            autoComplete='name'
          />
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Your Email'
            required
            autoComplete='email'
          />
          <label htmlFor='message'>Message:</label>
          <textarea
            id='message'
            name='message'
            rows='7'
            placeholder='Your Message'
            required
            autoComplete='off'
          ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact