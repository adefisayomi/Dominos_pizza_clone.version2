import React, { createContext, useState, useReducer, useContext, useEffect } from 'react'
import ProductReducer from "../reducers/ProductReducer"
import { auth, db } from "../firebase/Config"

const StateContext = createContext()

function StateProvider(props) {

// User state ======================
const [user, setUser] = useState()
// -------------------------------------------

// Persisting the user state =================

useEffect(() => {

    persistUser()
    
}, [])

    const persistUser = () => {
        auth.onAuthStateChanged(user => {
        if(user){
            if (user.isAnonymous != true) {
                db.collection("Registerd-Users").doc(user.uid).get().then(res => {
                    const data = res.data()
                    setUser(data)
                })
            }
            if (user.isAnonymous) {
                db.collection("Guest-Users").doc(user.uid).get().then(res => {
                    const data = res.data()
                    setUser(data)
                })
            }

        }else { setUser(null) }
    })
}

  // ------------------------------------------------ 

 
// Basket state ==============================================
    const [basket, dispatch] = useReducer(ProductReducer, [], () => {
        const initialBasket = localStorage.getItem('Basket')
        return initialBasket ? JSON.parse(initialBasket) : []
    } )

    useEffect(() => {
        localStorage.setItem('Basket', JSON.stringify(basket))
    }, [basket])
    

// ---------------------------------------------------------------
    return (
        <StateContext.Provider value = {{basket : user ? basket : [], dispatch, user }}>
            {props.children}
        </StateContext.Provider>
    )
}

export default StateProvider

export const UseStateValue = () => useContext(StateContext)