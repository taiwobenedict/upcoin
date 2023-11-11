import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import axios from "axios";
import { MARKET_API_KEY } from '../utils';

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

  const [coinPrices, setCoinPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.coinranking.com/v2/coins', {
      headers: {
        'x-access-token': MARKET_API_KEY,
      },
    })
      .then(response => {
        // Handle the API response data here
        const { coins } = response.data.data;
        setCoinPrices(coins);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle errors here
        setLoading(false);
      });
  }, [])

  return (
    <>
      <div className="marquee text-center fixed-bottom">
        <Marquee autoFill>
          {loading && <p>Loading coin prices...</p>}
          {!loading && coinPrices.length > 0 ? (
            <ul className="d-flex mr-2 align-items-center p-2">
              {coinPrices.map(coin => (
                <h6 key={coin.id} style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                  <p>{coin.name}</p> <p>({coin.symbol}): </p> <p style={{ marginRight: 20 }}>${Math.floor(coin.price / 100).toFixed(2)}</p>
                </h6>
              ))}
            </ul>
          ) : (
            <p>No coin prices available.</p>
          )}
        </Marquee>
      </div>
    </>
  )
}