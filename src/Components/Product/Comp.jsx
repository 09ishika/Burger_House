import React from 'react'
  import{
    ProductContainer,
    ProductWrapper,
    ProductHeading,
    ProductTittle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton
  }from './ProductsElement';
const Product = ({ heading, Data, img , alt , desc , price, button}) => {
    return(
      <div id='product'>
      <h1>CHOOSE & ENJOY</h1>
      <ProductContainer>
        <ProductHeading>{heading , Data , img , alt , desc , price, button}</ProductHeading>
        <ProductWrapper>
        {Data.map((product , Comp) => {
            return(
                <ProductCard key={Comp}>
                <ProductImg src={product.img} alt={product.alt}/>
                <ProductInfo>
                <ProductTittle>{product.name}</ProductTittle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton>{product.button}</ProductButton>
                </ProductInfo>
                </ProductCard>
            );
        })}
        </ProductWrapper>
      </ProductContainer>
</div>
    );
    };
export default Product;