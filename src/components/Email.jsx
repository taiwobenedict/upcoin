import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Email = ({children, template}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_taiwo', `${template}`, form.current, 'QE15DNMItP7yzj3PZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
        {children}
    </form>
  );
};

export default Email