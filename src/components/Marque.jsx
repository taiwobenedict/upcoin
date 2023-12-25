import Marquee from "react-fast-marquee";
import axios from "axios";
import { MARKET_API_KEY } from '../utils';
import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { setBNBPrice, setETHPrice, setUSDTPrice } from "../redux-toolkit/reducers/Prices";

function Marque() {

  const dispatch = useDispatch();
  const [coinPrices, setCoinPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  const readPrices = () => {
    axios.get('https://api.coinranking.com/v2/coins', {
      headers: {
        'x-access-token': MARKET_API_KEY,
      },
    })
      .then(response => {
        // Handle the API response data here
        const { coins } = response.data.data;
        const ethPrice = coins.find(item => item["symbol"] === "ETH").price;
        const usdtPrice = coins.find(item => item["symbol"] === "USDT").price;
        const bnbPrice = coins.find(item => item["symbol"] === "BNB").price;
        setCoinPrices(coins);
        setLoading(false);
        dispatch(setETHPrice(ethPrice));
        dispatch(setUSDTPrice(usdtPrice));
        dispatch(setBNBPrice(bnbPrice));
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle errors here
        setLoading(false);
      });
  }

  useEffect(() => {
    let readInterval = setTimeout(() => {
      readPrices();
    }, 5000);
    return () => {
      if (readInterval) clearInterval(readInterval);
    }
  }, [])

  return (
    <>
      <div className="marquee text-center pri-light-bg  fixed-bottom">
        <Marquee>
          {loading ? <p>Loading...</p> :
            coinPrices.map((item, index) => (
              <div className='d-flex gap-2 align-items-center px-4' key={index} >
                <img className='rounded-circle' style={{ width: '3vh', height: '3vh' }} src={item.iconUrl} alt='' />
                <p style={{ fontSize: "15px" }} className='text-purple px-2 m-0'>{item.name}</p>
                <p style={{ fontSize: "15px" }} className='text-purple pr-2 m-0'>{new Intl.NumberFormat('en-US', { style: 'decimal' }).format(item.price)}</p>
                <p className='m-0' style={{ color: item.change < 0 ? 'red' : 'green', fontSize: "15px" }}>{item.change}%</p>
              </div>
            ))}
        </Marquee>
      </div>
    </>
  )
}

export default Marque