import Pagination from "./components/Pagination";
import Product from "./components/Product"
import styled from "styled-components";
import { useContext, useState,useEffect } from "react";
import Filters from "./components/Filters";
import { ProductContext } from "./context/ProductContext";

function App() {

  const {filteredProducts} = useContext(ProductContext)
  const [currentPage, setCurrentPage] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page");
    return page ? Number(page) : 1;
  });
  const [productsPerPage] = useState(5);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.history.pushState(null, "", `?page=${pageNumber}`);
  };
  useEffect(() => {
    window.history.pushState(null, "", `?page=${currentPage}`);
  }, [currentPage]);

  return (
    <FlexBox>
      <Filters />
      {
        currentProducts.map((product,index)=>{
          return <Product product={product} index={index}/>
        })
      }

      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={filteredProducts.length}
        paginate={paginate}
        currentPage = {currentPage}
      />
    </FlexBox>
  );
}


const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  gap: 30px;
`;

export default App
