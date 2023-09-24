import React, { useState, useEffect } from 'react';

function ScrollStyledElement({ offset }) {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        // Function to check if an element is in the viewport
        function isInViewport(element, offset) {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            return rect.top >= 0 - offset && rect.bottom <= windowHeight + offset;
        }

        // Function to handle scroll events
        function handleScroll() {
            const element = document.querySelector('.styled-element');
            if (isInViewport(element, offset)) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        }

        // Initial check on component mount
        handleScroll();

        // Listen for scroll events
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [offset]);

    return (
        <div className={`styled-element ${isActive ? 'animate' : ''}`}>
            Scroll down to see the element with the offset.
        </div>
    );
}

export default ScrollStyledElement;
