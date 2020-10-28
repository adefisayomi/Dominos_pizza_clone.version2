import React from 'react'
import "./processCheckout.css"
import { useHistory } from "react-router-dom"
function ProcessCheckout() {
const history = useHistory()



    return (
        <div className = "process">
            <h1>Check out page</h1>
            
            <button onClick = {() => { history.goBack() }}>Go Back </button>
        </div>
    )
}

export default ProcessCheckout
