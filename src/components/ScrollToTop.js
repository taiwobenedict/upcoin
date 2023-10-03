import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Marquee from "react-fast-marquee";

const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation(); // Get the current pathname from the router

  useEffect(() => {
    // Scroll the page to the top whenever the pathname changes (i.e., a new page/route is loaded)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


export default ScrollToTopOnNavigate;



export function Marque() {
  return <>
    <div className="marquee text-center fixed-bottom">
      <Marquee autoFill>
        <div className="d-flex mr-5 align-items-center p-F2">
          <h6 className='mr-2'>Coin</h6>
          <small>price</small>
        </div>
        <div className="d-flex mr-5 align-items-center p-2">
          <h6 className='mr-2'>Coin</h6>
          <small>price</small>
        </div>
        <div className="d-flex mr-5 align-items-center p-2">
          <h6 className='mr-2'>Coin</h6>
          <small>price</small>
        </div>
        <div className="d-flex mr-5 align-items-center p-2">
          <h6 className='mr-2'>Coin</h6>
          <small>price</small>
        </div>
        <div className="d-flex mr-5 align-items-center p-2">
          <h6 className='mr-2'>Coin</h6>
          <small>price</small>
        </div>
        <div className="d-flex mr-5 align-items-center p-2">
          <h6 className='mr-2'>Coin</h6>
          <small>price</small>
        </div>
      </Marquee>
    </div>
  </>

}
