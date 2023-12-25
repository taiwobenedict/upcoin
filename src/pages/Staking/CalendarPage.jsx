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
import Reveal from "react-awesome-reveal"
import Calendar from "./Calendar"

const backgroundImageStyle = {
  backgroundImage: `url("/main_bg.jpg")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  minHeight: "100vh", // Adjust as needed
};

export default function CalendarPage() {
  const { setHideNav } = useContext(UIContext)
  useEffect(() => {
    setHideNav(false)
  })

  return (
    <div className="w-100 h-100 bg-dark "
      style={backgroundImageStyle}>

      <div className="d-flex w-100 h-100 bg-gradient p-5">

        <div style={{ width: '300px', height: '100%' }} className="" >
          {
            TabValues.map((item, idx) =>
              <SidebarButton
                label={item}
                icon={item}
                key={idx}
                isActive={idx === 4}
              />
            )
          }
        </div>

        <div className={`d-flex flex-column text-white w-100`}>

          <div className="d-flex w-full mb-5">
            <Calendar />
          </div>

          <div className="d-flex w-full mb-5">
            <History />
          </div>

        </div>
      </div>
    </div>

  )
}