import Marquee from "react-fast-marquee";
import axios from "axios";
import { MARKET_API_KEY } from '../utils';
import { useState, useEffect} from 'react'

function Marque() {

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
        <div className="marquee text-center pri-light-bg  fixed-bottom">
        <Marquee>
					{ loading ? <p>Loading...</p> :
          coinPrices.map((item, index) => (
						<div className='d-flex gap-2 align-items-center px-4' key={index} >
							<img className='rounded-circle' style={{ width: '4vh', height: '4vh' }} src={item.iconUrl} alt='' />
							<p style={{fontSize: "15px"}} className='text-purple px-2 m-0'>{item.name}</p>
							<p style={{fontSize: "15px"}} className='text-purple pr-2 m-0'>{new Intl.NumberFormat('en-US', { style: 'decimal' }).format(item.price)}</p>
							<p className='m-0' style={{ color: item.change < 0 ? 'red' : 'green', fontSize: "15px" }}>{item.change}%</p>
						</div>
					))}
				</Marquee>
        </div>
      </>
    )
  }
  
export default Marque