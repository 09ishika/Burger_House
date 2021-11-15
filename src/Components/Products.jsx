import React from 'react';
import Productbox from './Productbox';
import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png';
import pimage3 from '../images/s3.jpeg';
import pimage4 from '../images/hero.png';
function Products() {
    return (
        <>
        <div id='product'>
            <h1>CHOOSE & ENJOY</h1>
            <p>We Aspire To Deliver A Great Shopping Experience Through The Food We Offer.We gather fresh food products that range between the basic, everyday groceries like staples and spices to exotic imports from across the globe.</p> 
            <div className='a-container'>
                <Productbox image={pimage1} tittle="luger burger"/>
                <Productbox image={pimage2} tittle="luger burger"/>
                <Productbox image={pimage3} tittle="luger burger"/>
                <Productbox image={pimage4} tittle="luger burger"/>
               
            </div>
        </div>
        </>
    )
}

export default Products;
