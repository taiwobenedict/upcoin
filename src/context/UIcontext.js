import React, { useState, createContext } from 'react';

export const UIContext = createContext();

const UIContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [navDrop, setNavDrop] = useState({ drop1: false, drop2: false });
  const [formDrop, setFormDrop] = useState({ drop3: false, drop4: false });
  const [optHeight, setOptHeight] = useState(0);
  const [openModal, setModal ] = useState(false)
  const [teamMember, setTeamMember] = useState({})

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

  const handleModal = (member) => {
    setTeamMember(member)
    setModal(prev => !prev)
  }


  return (
    <UIContext.Provider value={{
      toggle,
      navDrop,
      formDrop,
      optHeight,
      openModal,
      teamMember,
      setToggle,
      handleDropDown,
      handleModal
    }}>
      {children}
    </UIContext.Provider>
  );
};

export default UIContextProvider;
