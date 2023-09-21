import React, { useState } from 'react'
import { createContext } from 'react'

export const uiContext = createContext()


const UIContextProvider = ({ children }) => {
    const [toggle, setToggler ] = useState(false)
    const [learnTog, setLearnTog] = useState(false)
    const [howTog, setHowTog] = useState(false)

    
    const handleDropDown = (e) => {
        switch (e.target.id) {
            case "learn":
                setHowTog(false)
                setLearnTog(prev => !prev)
                break;

            case "how":
                setLearnTog(false)
                setHowTog(prev => !prev)
                break;

            default:
                setLearnTog(false)
                setHowTog(false)
                break;
        }


    }


    return <uiContext.Provider value={{
        toggle,
        learnTog,
        howTog,
        setToggler,
        handleDropDown

    }}>
        {children}
    </uiContext.Provider>
}

export default UIContextProvider