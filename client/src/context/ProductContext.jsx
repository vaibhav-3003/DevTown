import { createContext,useEffect,useReducer } from "react";
import reducer from '../reducer/productReducer.js'
import axios from 'axios'

const initialState = {
  products: [],
  filteredProducts: [],
  categories: ["electronics", "jewelery", "men's clothing", "women's clothing"],
};

const ProductContext = createContext(initialState);

const ProductProvider = ({children})=>{

    const [state,dispatch] = useReducer(reducer,initialState) 

    const getAllProducts = async()=>{
        try{
            const {data} = await axios.get('https://fakestoreapi.com/products')
            dispatch({type:'SET_ALL_PRODUCTS',payload:data})
        }catch(err){
            console.log(err)
        }
    }

    const filterProductsByCategory = async(categoryFilter)=>{
        try{
            if(categoryFilter!=='all'){
                const {data} = await axios.get(`https://fakestoreapi.com/products/category/${categoryFilter}`)
                dispatch({type:'SET_FILTERED_PRODUCTS',payload:data})
            }else{
                dispatch({type:'SET_FILTERED_PRODUCTS',payload:state.products})
            }
        }catch(err){
            console.log(err)
        }
    }

    const filterProductsByPrice = (priceFilter)=>{
        if(priceFilter==='lowToHigh'){
            dispatch({type:'SORT_PRODUCTS_BY_PRICE',payload:'lowToHigh'})
        }else if(priceFilter==='highToLow'){
            dispatch({ type: "SORT_PRODUCTS_BY_PRICE", payload: "highToLow" });
        }
    }

    useEffect(()=>{
        const getProducts = async()=>{
            await getAllProducts()
        }
        getProducts()
    },[])

    return <ProductContext.Provider value={{...state,filterProductsByCategory,filterProductsByPrice}}>
        {children}
    </ProductContext.Provider>
}

export {ProductContext,ProductProvider};

