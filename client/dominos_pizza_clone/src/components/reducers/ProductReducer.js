
const ProductReducer = (state, action) => {
    switch (action.type) {
        case 'place-order' : 
            return [...state, action.payload ]
      
        case 'remove-order' :
            const newBasket = [...state]
            const array = []
            newBasket.map(item => array.push(item.id))
            const removedIndex = array.indexOf(action.payload.id)
            newBasket.splice(removedIndex, 1)
            return (state = newBasket)
        
        case 'update-quantity' :
            const currentBasket = [...state]
            const arr = []
            currentBasket.map(item => arr.push(item.id))
            const index = arr.indexOf(action.payload.id)
            currentBasket[index].quantity = action.payload.quantity
            return (state = currentBasket)

        case 'edit-order' : 
            
        const editableBasket = [...state]
        const editArray = []
        editableBasket.map(item => editArray.push(item.id))
        const editable = editArray.indexOf(action.payload.id)
        console.log(editableBasket[editable])
        default :
            return state
    }

}

export default ProductReducer