import React, { useEffect, useState } from 'react';

const GoogleTranslate = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    useEffect(() => {
      const loadTranslateApi = async () => {
        try {
          // Load the Google Translate API script dynamically
          const script = document.createElement('script');
          script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
          script.async = true;
          document.head.appendChild(script);
  
          // Wait for the script to load before initializing translation
          await new Promise((resolve) => {
            script.onload = resolve;
          });
  
          // Define the translation initialization function
          window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement({ pageLanguage: selectedLanguage }, 'google_translate_element');
          };
  
        } catch (error) {
          console.error('Error loading Google Translate API:', error);
        }
      };
  
      // Call the asynchronous function
      loadTranslateApi();
  
      // Clean up the script on component unmount
      return () => {
        const script = document.querySelector('script[src^="https://translate.google.com/translate_a/element.js"]');
        script && document.head.removeChild(script);
        delete window.googleTranslateElementInit;
      };
    }, [selectedLanguage]);
  
    const handleLanguageChange = async (event) => {
      const newLanguage = event.target.value;
      setSelectedLanguage(newLanguage);
  
      // Reload the translation element with the new language
      if (window.google.translate.TranslateElement) {
        await new Promise((resolve) => {
          window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement({ pageLanguage: newLanguage }, 'google_translate_element');
            resolve();
          };
          // Load the script again to reinitialize with the new language
          const script = document.createElement('script');
          script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
          script.async = true;
          document.head.appendChild(script);
        });
      }
    };

  return (
    <div>
      <label htmlFor="languageSelect">Select Language: </label>
      <select id="languageSelect" value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        {/* Add more language options as needed */}
      </select>
    </div>
  );
};

export default GoogleTranslate;
