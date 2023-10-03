import React, { useState, createContext } from 'react';
import { wallets } from '../store';

export const UIContext = createContext();

const UIContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [navDrop, setNavDrop] = useState({ drop1: false, drop2: false });
  const [formDrop, setFormDrop] = useState({ drop3: false, drop4: false });
  const [openAcc, setOpenAcc] = useState({ acc1: true, acc2: false, acc3: false, acc4: false });
  const [bg, setBg ] = useState([true, false, false])
  const [optHeight, setOptHeight] = useState(0);
  const [openModal, setModal] = useState(false)
  const [teamMember, setTeamMember] = useState({})
  const [walletGuide, setWalletGuide] = useState(wallets[0])

  const handleDropDown = (e) => {
    const id = e.target.id;

    if (id === "drop3" || id === "drop4") {
      const opt = e.target.parentElement.nextElementSibling.firstElementChild.clientHeight;
      setOptHeight(opt);
    }


    // Toggle the dropdown if it's already open; otherwise, set it to open
    setNavDrop((prevState) => ({
      drop1: id === "drop1" ? !prevState.drop1 : false,
      drop2: id === "drop2" ? !prevState.drop2 : false,
    }));

    setFormDrop((prevState) => ({
      drop3: id === "drop3" ? !prevState.drop3 : false,
      drop4: id === "drop4" ? !prevState.drop4 : false,
    }));
    

    
  };

  const handleAccordion = (id) => {
    
        setOpenAcc((prevState) => ({
          acc1: id === "acc1" ,
          acc2: id === "acc2" ,
          acc3: id === "acc3" ,
          acc4: id === "acc4",
          
        }));

  }


  const handleModal = (member) => {
    setTeamMember(member)
    setModal(prev => !prev)
  }

  const uploadGuide = (guide, id) => {
    setWalletGuide(guide)

    setBg( [
      id === "bg1" ,
      id === "bg2" ,
      id === "bg3" 
    ]);
  }




  return (
    <UIContext.Provider value={{
      toggle,
      navDrop,
      formDrop,
      optHeight,
      openModal,
      teamMember,
      openAcc,
      walletGuide,
      bg,
      setToggle,
      handleDropDown,
      handleModal,
      uploadGuide,
      handleAccordion
    }}>
      {children}
    </UIContext.Provider>
  );
};

export default UIContextProvider;
