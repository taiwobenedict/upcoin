import { useContext, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import { TabValues, fadeInLeft, fadeInRight } from "../../common/constants"
import { FaChevronRight  } from 'react-icons/fa'
import Reveal from "react-awesome-reveal";

const StakingMenu = () => {

  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef(null);

  const navigate = useNavigate();
  useEffect(() => {

    window.addEventListener('click', closeSelectBox);
    return () => {
      window.removeEventListener('click', closeSelectBox);
    };
  }, []);


  const closeSelectBox = (e) => {
    if (selectRef.current && !selectRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  return (
    <div className="menu-button d-md-none">
      <div className=" relative " ref={selectRef}>
        <div className="menu-icon" onClick={() => { setIsOpen(!isOpen) }}>
          <FaChevronRight  className='' />
        </div>
        {isOpen &&
          (<Reveal keyframes={fadeInRight} className='onStep' delay={0} duration={800} triggerOnce>
            <div className="border-gray-500 rounded  pt-2"
              style={{ zIndex: 100, position: "absolute", top: '-120px', background: "#FFFFFF" }}
            >
              {
                TabValues.map((item, idx) =>
                  <div key={idx} className={`text-dark px-5 font-semibold`} style={{ fontSize: '16px' }}
                    onClick={() => {
                      navigate("/" + String(item).toLocaleLowerCase());
                    }}>
                    <p>{item}</p>
                  </div>
                )
              }
            </div>
          </Reveal>
          )}
      </div>
    </div>
  )
}

export default StakingMenu;