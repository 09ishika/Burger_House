import styled from 'styled-components'
export const ProductContainer= styled.div`
width:100w;
min-height: 100vh;
padding: 2rem  calc((100vw-1300px)/2);
background:#150fof;
color:#000;
`

export const ProductWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 0 auto;
`

export const ProductCard = styled.div`
margin:0 2rem;
line-height: 2;
width: 380px;
`

export const ProductImg = styled.img`
margin-top:0%;
margin-bottom:0%;
padding:3%;
height:205px;
min-width:100px;
max-width:90%;
box-shadow: 8px 8px #fdc500;
`
export const ProductHeading = styled.h1`
width:10px;
max-width: 100%;
padding:0 ;
margin:0 auto;

`

export const ProductTittle = styled.h2`
margin-bottom:11rem;
font-size: 1.8rem;
text-align:left;
font-weight: 170;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
position: absolute;
`

export const ProductInfo =styled.div`
display : flex;
flex-diretion: column;
justify-content: center;
align-items: center;
padding:2rem;
text-align: center;
`

export const ProductDesc = styled.p`
margin-bottom:6rem;
padding:150px;
font-size: 1.4rem;
font-weight:500;
font-family:'Lato';
text-align:left;
position: absolute;
`

export const ProductPrice = styled.p`

margin-top:1.9rem;
font-size:1.5rem;
text-align:left;
padding: 0.8rem 6rem;
color:#006400
`

export const ProductButton = styled.button`
margin-top:1rem;
font-size: 0.8rem;
padding: 0.8rem 3.2rem;
border-radius: 8px;
background: #e31837;
color: #fff;
transition:0.2 ease-out;

&:hover{
    background: #ffc500;
    transition:0.5s ease-out;
    color: #3d2514;
    cursor:pointer;
    }
   `
