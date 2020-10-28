import React from 'react'
import "./uploadfoodbutton.css"
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
function UploadFoodButton() {
    const hello = () => {
        console.log("hello")
    }
    return (
        <button className = "uploadFoodButton" onClick = {hello}>Upload your home made pizza Here...<LocalPizzaIcon className = "pizzaIcon" /></button>
    )
}

export default UploadFoodButton
