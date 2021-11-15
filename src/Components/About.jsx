import React from 'react';
import aboutimage from '../images/about.png';
function About() {
    return (
        <div id='about'>
            <div className='about-text'>
                <h1>UPCOMINGN EVENT</h1>
                <p> We aspire to serve a great eating experience through the food we offer.
                Burger House (BH) is an American multinational chain of hamburger fast food restaurants. 
                Burger King's menu has expanded from a basic offering of burgers, French fries, sodas, 
                and milkshakes to a larger and more diverse set of products.
                   </p>
                     <button>READ MORE</button>
            </div>
            <div className='about-image'>
                <img src={aboutimage} alt=''/>
            </div>
            
        </div>
    )
}

export default About;
