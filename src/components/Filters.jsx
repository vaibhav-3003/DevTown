import React, { useContext, useEffect,useState } from 'react'
import styled from 'styled-components';
import { ProductContext } from '../context/ProductContext';

const Filters = () => {

    const {categories,filterProductsByCategory,filterProductsByPrice} = useContext(ProductContext)
    const [categoryFilter,setCategoryFilter] = useState('all')
    const [priceFilter,setPriceFilter] = useState('lowToHigh')

    useEffect(()=>{
        const filterProducts = async()=>{
            await filterProductsByCategory(categoryFilter)
            await filterProductsByPrice(priceFilter);
        }
        filterProducts()
    },[categoryFilter,priceFilter])

  return (
    <FiltersDiv>
      <Select onChange={(e) => setCategoryFilter(e.target.value)}>
        <option value="all">All</option>
        {categories.map((category) => {
          return <option value={category}>{category}</option>;
        })}
      </Select>
      <Select onChange={(e)=>setPriceFilter(e.target.value)}>
        <option value="lowToHigh">Price(Low to High)</option>
        <option value="highToLow">Price(High to Low)</option>
      </Select>
    </FiltersDiv>
  );
}

const FiltersDiv = styled.div`
  padding: 15px;
  width: 70%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

const Select = styled.select`
  padding: 8px;
  border-radius: 5px;
  background: #f9af42;
  border: none;
  outline: none;
  opacity: 95%;
  font-family: "Clash Display", sans-serif;

  option {
    background: #f9af42;
    opacity: 95%;
    color: #303030;
  }
`;

export default Filters
