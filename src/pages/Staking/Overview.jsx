import { useContext } from "react"
import { useEffect } from "react"
import { UIContext } from "../../context/UIcontext"
import TotalValueLocked from '../../components/TotalValueLocked'
import Performance from '../../components/Performance'
import StakingActivityLines from "../../components/chart/StakingActivityLines"
import History from "../../components/History"
import './staking.css'
import SidebarButton from "../../components/SideBarButton"
import { TabValues } from "../../common/constants"
import { fadeInUp } from "../../common/constants"
import Reveal from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { averageHolding, numberWithCommas, weightedAverageAPY } from "../../common/methods";
import { useNavigate } from "react-router-dom";
import StakingMenu from "./StakingMenu"

const backgroundImageStyle = {
  backgroundImage: `url("/main_bg.jpg")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  minHeight: "100vh", // Adjust as needed
};

export default function Overview() {

  const poolsData = useSelector(state => state.staking.poolsData);

  return (
    <div className="w-100 h-100 bg-dark "
      style={backgroundImageStyle}>

      <StakingMenu/>

      <div className="d-flex w-100 h-100 bg-gradient p-5">

        <div style={{ width: '300px', height: '100%', marginTop: "30px" }} className=" d-none d-md-block" >
          {
            TabValues.map((item, idx) =>
              <SidebarButton
                label={item}
                icon={item}
                key={idx}
                isActive={idx === 0}
              />
            )
          }
        </div>

        <div className={`d-flex flex-column text-white w-100 pt-10 h-100`}>

          <div className="d-flex gap-20 mb-5 flex-column flex-md-row">
            <div
              className="overflow-hidden position-relative bg-custom-light-white border-custom-medium-white col-12 col-md-7 border rounded-3xl d-flex flex-wrap pt-20 w-full justify-content-center gap-20"
              style={{ minHeight: '350px' }}
            >
              <Reveal keyframes={fadeInUp} className='onStep' delay={0} duration={800} triggerOnce>
                <div className="d-flex flex-column gap-2 align-items-center" style={{ minWidth: '160px' }}>
                  <img
                    src="/statistics/marketcap.svg"
                    className="w-[30px] h-[30px]"
                    alt="statistic icon"
                  />
                  <div className="text-17 font-semibold">Market Cap</div>
                  <div className="text-17 font-semibold">
                    ${numberWithCommas(process.env.REACT_APP_SUP_MARKETCAP)}
                  </div>
                </div>
                <div className="d-flex flex-column gap-2 align-items-center" style={{ minWidth: '160px' }}>
                  <img
                    src="/statistics/apy.svg"
                    className="w-[30px] h-[30px]"
                    alt="statistic icon"
                  />
                  <div className="text-17 font-semibold">APY Statistics</div>
                  <div className="text-17 font-semibold">
                    {numberWithCommas(weightedAverageAPY(poolsData))}%
                  </div>
                </div>

                <div className="d-flex flex-column gap-2 align-items-center" style={{ minWidth: '160px' }}>

                  <img
                    src="/statistics/totalsupply.svg"
                    className="w-[30px] h-[30px]"
                    alt="statistic icon"
                  />
                  <div className="text-17 font-semibold">Total Supply</div>
                  <div className="text-17 font-semibold">
                    {numberWithCommas(process.env.REACT_APP_SUP_TOTOALSUPPLY)}
                  </div>
                </div>

                <div className="d-flex flex-column gap-2 align-items-center" style={{ minWidth: '160px' }}>
                  <img
                    src="/statistics/circumstance.svg"
                    className="w-[30px] h-[30px]"
                    alt="statistic icon"
                  />
                  <div className="text-17 font-semibold">Circulating Supply</div>
                  <div className="text-17 font-semibold">
                    {numberWithCommas(process.env.REACT_APP_SUP_CIRCULATINGSUPPLY)}
                  </div>
                </div>

                <div className="d-flex flex-column gap-2 align-items-center" style={{ minWidth: '160px' }}>
                  <img
                    src="/statistics/averagehoding.svg"
                    className="w-[30px] h-[30px]"
                    alt="statistic icon"
                  />
                  <div className="text-17 font-semibold">Average Holding</div>
                  <div className="text-17 font-semibold">
                    {numberWithCommas(averageHolding(poolsData))}
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="col-md-4 col-12 pl-md-0 pr-md-3 p-0">
              <TotalValueLocked />
            </div>
          </div>
          {/* <div className="d-flex gap-20 mb-5">
            <StakingActivityLines className="max-h-[400px]  col-md-7 " />

            <div className="col-4 pl-0 ">
              <Performance className="max-h-[400px]" />
            </div>
          </div> */}

          <div className="d-flex w-full mb-md-5">
            <History />
          </div>

        </div>
      </div>
    </div>


  )
}