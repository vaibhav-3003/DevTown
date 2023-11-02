import React,{useEffect} from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion";

const Product = ({product,index}) => {
    const priceInRupees = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(product.price);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [window.location.search]);
  return (
    <MotionFlexBox
      key={product.id}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <ProductImage src={product.image} alt="image" />
      <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p className="price">{priceInRupees}</p>
      </div>
    </MotionFlexBox>
  );
}

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  gap: 15px;
  background-color: #a8b99a;
  border-radius: 10px;

  h1 {
    width: 80%;
  }

  p {
    font-size: 14px;
    opacity: 90%;
    width: 70%;
  }

  .price {
    font-size: 16px;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    padding: 15px;
    gap: 10px;

    p {
      width: 90%;
    }
  }

  @media screen and (max-width: 1024px){
    width: 90%;
  }
`;

const MotionFlexBox = motion(FlexBox);

const ProductImage = styled.img`
  width: 250px;
  object-fit:cover;
  aspect-ratio:1/1; 
  mix-blend-mode: multiply;
`;

export default Product
