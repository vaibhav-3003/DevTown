const productReducer = (state,action)=>{
    switch(action.type){
        case "SET_ALL_PRODUCTS":
            return{
                ...state,
                products: action.payload,
                filteredProducts: action.payload
            }
        
        case 'SET_FILTERED_PRODUCTS':
            return{
                ...state,
                filteredProducts: action.payload
            }
        
        case 'SORT_PRODUCTS_BY_PRICE':
            if(action.payload==='lowToHigh'){
                return{
                    ...state,
                    filteredProducts: state.filteredProducts.sort((a,b)=>a.price-b.price)
                }
            }else if(action.payload==='highToLow'){
                return{
                    ...state,
                    filteredProducts: state.filteredProducts.sort((a,b)=>b.price-a.price)
                }
            }
        
        default:
            return {
                ...state,
            }
    }
}

export default productReducer