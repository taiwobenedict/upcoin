import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 

const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation(); // Get the current pathname from the router

  useEffect(() => {
    // Scroll the page to the top whenever the pathname changes (i.e., a new page/route is loaded)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTopOnNavigate;
