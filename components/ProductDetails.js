import React, { Component } from 'react'
import CategoriesList from './CategoriesList'
import styled from 'styled-components';
var FontAwesome = require('react-fontawesome')
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCart, faFemale, faStar, faCoffee } from '@fortawesome/fontawesome-free-solid'

export default ({
  id,
  name,
  image,
  description,
  priceInEuro,
  currency,
  sku,
  color,
  size
}) => {
  return(
    <Wrapper>
      <ProductContainer>
        <ProductImg>
          <img src={image} alt="blank" />
        </ProductImg>
        <ProductInfo>
          <div>
            <h2>{name}</h2>
            <p>{sku}</p>
          </div>
          <Rating>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <p>
              <a href="">Write first review</a>
            </p>
          </Rating>
          <p>{description}</p>
          <p>Color: {color}</p>
          <p>Size: {size}</p>
          <p>€ {priceInEuro}</p>
          <Cart>
            <button>Add to cart</button>
          </Cart>
        </ProductInfo>
      </ProductContainer>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`
const ProductContainer = styled.div`
  margin: 0 auto;
  display: inline-flex;
  align-items: center;
  @media only screen and (max-width: 580px) {
    display: flex;
    flex-direction: column;
  }
`
const ProductImg = styled.div`
  text-align: center;
  img {
    height: auto;
    width: 70%;
  }
`
const ProductInfo = styled.div`
  max-width: 50em;
  @media only screen and (max-width: 1100px) {
    padding: 0 40px 0 40px;
    line-height: 26px;
  }
`
const Rating = styled.div`
  display: inline-flex;
  align-items: center;
  p {
    margin-left: 15px;
  }
`
const Cart = styled.div`
  button {
    padding: 15px 20px 15px 20px;
    border-radius: 2px;
    border-color: #EB4969;
    background-color: #eb4969;
    color : whitesmoke;
    font-size: 12px;
    text-transform: uppercase;
  }
`