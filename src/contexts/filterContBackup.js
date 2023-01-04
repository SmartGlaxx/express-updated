import React, {useEffect, useReducer, useContext} from 'react'
import {Products} from './productContext';
import reducer from '../reducers//filterReducer'
import {useProductContext} from './productContext';

const FilterContext = React.createContext()
const SET_PRODUCTS = 'SET_PRODUCTS' 
const LOADING = 'LOADING'
const ERROR = 'ERROR'
const SET_VIEW = 'SET_VIEW'
const SET_SORT = 'SET_SORT'
const SET_SORT_VALUE = 'SET_SORT_VALUE'
const SET_FILTER = 'SET_FILTER'
const SET_FILTER_VALUES = 'SET_FILTER_VALUES'
const CLEAR_FILTERS = 'CLEAR_FILTERS'

const initialState ={
    loading : false,
    error : false,
    all_products : [],
    filtered_products : [],
    sort: '',
    view: 'grid',
    filters : {
        search: '',
        category: 'all',
        company: 'all',
        color: 'all',
        price: 0,
        max_price: 0,
        min_price: 0,
        shipping: 'all',
        }
}

export const FilterProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)
    const {all_products : products, loading, error} = useProductContext()

    
    useEffect(()=>{
        dispatch({type: SET_FILTER})
        dispatch({type: SET_SORT})
    },[products, state.sort, state.filters])

    const setSortValue =(e)=>{
        const value = e.target.value
        dispatch({type: SET_SORT_VALUE, payload: value})
    }
    
    const setView = (value)=>{
        dispatch({type: SET_VIEW, payload: value})
    }


   const setFilterValues = (e)=>{
       let name = e.target.name 
        let value = '' 
       if(name == 'search'){
           value = e.target.value
       }
       if(name == 'category'){
           value = e.target.textContent
       }
       if(name == 'company'){
           value = e.target.value
       }
       if(name == 'color'){
           value = e.target.value
       }
       if(name == 'price'){
           value = e.target.value
       }
       if(name == 'shipping'){
           if(e.target.value == 'all'){
               value='true'
           }else if(e.target.value == 'true'){
               value = 'all'
           }
       }

       dispatch({type: SET_FILTER_VALUES, payload: {name, value}})
   }

    const clearFilters =()=>{
        dispatch({type: CLEAR_FILTERS})
    }

console.log(state.filtered_products)
    useEffect(()=>{
        dispatch({type: LOADING, payload: true})
        dispatch({type: SET_PRODUCTS , payload: products})
    },[products])


    return <FilterContext.Provider value={{
    ...state, setView, setSortValue, setFilterValues, clearFilters
    }}>
        {children}
    </FilterContext.Provider>
}

export const useFilterContext =()=>{
    return useContext(FilterContext)
}