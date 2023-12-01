import React, { useRef, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { UIContext } from '../context/UIcontext';

export const Email = ({children, template, serviceID}) => {
  const form = useRef();
  const {setAlert} = useContext(UIContext)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, template , form.current, "QPJVRgZZW1eLCgMnA", this)
      .then((result) => {

          setAlert({
            type: "success",
            show: true,
            message: `${result.text}! Form submission successful.`
          })
          form.current.reset()
          setTimeout(() => {
            setAlert(prev => ({
              ...prev,
              show: false
            }))
            
          }, 4000);
      }, (error) => {
          
        setAlert({
          type: "danger",
          show: true,
          message: `${error.text ? error.text : "Something went wrong"}!`
        })
        
        setTimeout(() => {
          setAlert(prev => ({
            ...prev,
            show: false
          }))
          
        }, 4000);
      });

     
  };

  return (
    <form ref={form} onSubmit={sendEmail}  encType="multipart/form-data" method="post">
        {children}
    </form>
  );
};

export default Email