import { useEffect, useContext, useRef, useState } from "react"
import { UIContext } from "../../context/UIcontext"
import TotalValueLocked from '../../components/TotalValueLocked'
import Performance from '../../components/Performance'
import PrimaryButton from "../../components/PrimaryButton"
import History from "../../components/History"
import './staking.css'
import SidebarButton from "../../components/SideBarButton"
import { TabValues } from "../../common/constants"
import { fadeInRight, fadeInUp } from "../../common/constants"
import Reveal from "react-awesome-reveal"
import { calculateDailyRewardsByAPY } from "../../common/methods"
import { Button } from "../../Utilities"
import StakingMenu from "./StakingMenu"

const backgroundImageStyle = {
  backgroundImage: `url("/main_bg.jpg")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  minHeight: "100vh", // Adjust as needed
};

export default function CalculatorPage() {

  const { setHideNav } = useContext(UIContext)

  const [principleAmount, setPrincipleAmount] = useState(null);
  const [apy, setApy] = useState(null);


  return (
    <div className="w-100 h-100 bg-dark"
      style={backgroundImageStyle}>
      <StakingMenu />

      <div className="d-flex w-100 h-100 bg-gradient p-5">

        <div style={{ width: '300px', height: '100%', marginTop: "30px" }} className=" d-none d-md-block" >
          {
            TabValues.map((item, idx) =>
              <SidebarButton
                label={item}
                icon={item}
                key={idx}
                isActive={idx === 2}
              />
            )
          }
        </div>

        <div className={`pt-10 d-flex flex-column text-white w-100 h-100`}>
          <div className="d-flex gap-20 mb-5 flex-column flex-md-row">
            <div
              className="overflow-hidden position-relative border-custom-medium-white col-12 col-md-7 rounded-3xl d-flex flex-column flex-wrap  justify-content-center gap-20"
              style={{ minHeight: '350px' }}
            >
              <div className="text-27 font-normal text-center md:text-left">
                Calculate Your Daily Rewards
              </div>
              <Reveal keyframes={fadeInRight} className='onStep' delay={0} duration={800} triggerOnce>
                <div
                  className="overflow-hidden relative min-h-175 border-custom-medium-white bg-custom-light-white border rounded-3xl d-flex flex-column flex-wrap w-full justify-content-center gap-5"
                >
                  <div className="d-flex justify-content-center w-full">
                    <input
                      className={`w-80 min-h-86 bg-custom-heavy-white border-custom-medium-white text-22 border rounded-lg font-medium px-10 text-white
                outline-none calculator-placeholder `}
                      placeholder="enter your principle amount"
                      type="number"
                      value={principleAmount}
                      onChange={(e) => setPrincipleAmount(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div
                  className="overflow-hidden relative min-h-175 border-custom-medium-white bg-custom-light-white border rounded-3xl d-flex flex-column flex-wrap w-full justify-content-center gap-5"
                >
                  <div className="d-flex justify-content-center w-full">
                    <input
                      className="w-80 min-h-86 bg-custom-heavy-white border-custom-medium-white    border rounded-lg text-22 font-medium px-10 outline-none  text-white calculator-placeholder"
                      placeholder="enter your preferred APY(%)"
                      type="number"
                      value={apy}
                      onChange={(e) => setApy(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="d-flex justify-content-center my-4">
                  <Button type={"inline"} color={"light"} >Calculate</Button>
                </div>
                <div
                  className="overflow-hidden relative min-h-175 bg-custom-light-white border-custom-medium-white border rounded-3xl d-flex justify-content-center align-items-center gap-5 text-35 font-normal"
                >
                  {
                    calculateDailyRewardsByAPY(principleAmount, apy) > 0 ?
                      parseFloat(calculateDailyRewardsByAPY(principleAmount, apy)).toFixed(2) + " SUP"
                      : "Expected Daily Reward"
                  }
                </div>
              </Reveal>

            </div>

            <div className="col-md-4 col-12 px-0">
              <div className="pl-3 mr-3 pb-3" >
                <TotalValueLocked />
              </div>
              <div className="col-12">
                <Performance />
              </div>
            </div>
          </div>

          <div className="d-flex mb-5 px-0">
            <History />
          </div>

        </div>
      </div>
    </div>


  )
}