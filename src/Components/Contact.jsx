import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Contact() {
    const diffToast =() => {
        toast("Your Table Has Booked SUCCESSFULLY!!", {position:"top-center" ,autoClose:150000,ideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 1});
    }
   
    return (
        <div id='contact'>
            <h1>BOOK YOUR TABLE</h1>
            <form>
                <input type='text' placeholder='Full Name'/>
                <input type='email' placeholder='Enter Email id'/>
                 <input type='Address' placeholder='Enter Your Address'/>
                <textarea placeholder='write here..'></textarea>
                <input type='submit' value='BOOK your order'
                onClick={diffToast}/>
               
            </form> 
            <ToastContainer/>
        </div>
        
    )
}

export default Contact;
