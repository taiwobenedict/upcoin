import React, {useContext} from 'react'
import { UIContext } from '../context/UIcontext'

import "./Components.css"
function Alert({message, type}) {
    const {alert} = useContext(UIContext)
    return (
        <div>
            <div className={`alert alert-${type} ${alert.show && "show-alert"}`} role="alert">
                {message}
            </div>
        </div>
    )
}

export default Alert