import React, { useState } from 'react'
import Footer from '../Footer'
import { homeNav } from "../Navigation"
import Header from '../Header'
import "./upload.css"
function Upload() {
    const [upload, setUpload] = useState({})

    const getUpload = () => {
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const itemInfo = {
            name : upload.category,
            category : {
                url : upload.url,
                price : upload.price,
                title : upload.title,
                subtitle : upload.subtitle,
                alt : upload.alt
            }

        }
    }


    return (
        <>
        <Header navs = {homeNav}  />
        <div className = "upload">
            <form>

                <p>Select a category: 
                    <select name="category" defaultValue = "Pizza" required>
                    <option value="Pizza">Pizzas</option>
                    <option value="Chicken">Chicken</option>
                    <option value="Smallie">Smallie</option>
                    <option value="Desserts">Desserts</option>
                    <option value="Extras">Extras</option>
                    <option value="Sides">Bread</option>
                    <option value="Drinks">Drinks</option>
                    </select>
                    </p>
                <p>Price: <input type="number" name="price" onChange = {getUpload} required placeholder = "Just numbers no" /></p>
                <p>Item Image url: <input type="text" name="url" onChange = {getUpload} required/></p>
                <p>Food Image alt-Text: <input type="text" name="alt" onChange = {getUpload} required/></p>
                <p>Item Subtitle: <input type="text" name="subtitle" onChange = {getUpload} required/></p>
                <p>item Name: <input type="text" name="title" onChange = {getUpload} required/></p>
                <p>item Name: <input type="text" name="title" onChange = {getUpload} required/></p>
                
            </form>
        </div>
        <Footer/>
        </>
    )
}

export default Upload
