import React, { useState, createContext } from 'react';
import { wallets } from '../store/wallets';

export const UIContext = createContext();

const UIContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [navDrop, setNavDrop] = useState({ drop1: false, drop2: false });
  const [openAcc, setOpenAcc] = useState({ acc1: true, acc2: false, acc3: false, acc4: false });
  const [bg, setBg ] = useState([true, false, false, false])
  const [openModal, setModal] = useState(false)
  const [teamMember, setTeamMember] = useState({})
  const [walletGuide, setWalletGuide] = useState(wallets[0])
  const [hideNav, setHideNav] = useState(true)

  const handleDropDown = (id) => {
  
    // Toggle the dropdown if it's already open; otherwise, set it to open
    setNavDrop((prevState) => ({
      drop1: id === "drop1",
      drop2: id === "drop2",
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
    setModal(true)
  }

  const uploadGuide = (guide, id) => {
    setWalletGuide(guide)

    setBg( [
      id === "bg1" ,
      id === "bg2" ,
      id === "bg3",
      id === "bg4" 
    ]);
  }




  return (
    <UIContext.Provider value={{
      toggle,
      navDrop,
      openModal,
      teamMember,
      openAcc,
      walletGuide,
      bg,
      hideNav,
      setToggle,
      handleDropDown,
      handleModal,
      uploadGuide,
      handleAccordion,
      setHideNav,
      setModal
    }}>
      {children}
    </UIContext.Provider>
  );
};

export default UIContextProvider;
