import React from 'react';
import Information from '../components/layout/Information';
import '../css/delivery.css';

const Delivery = () => {
  return (
    <div style={{margin: '100px 10px 10px 10px'}}>
      <h1 rel="preload" style={{textAlign: 'center'}}>Delivery</h1>
      <Information/>
      <h2 style={{textAlign: 'center'}}>Delivery Service Thru 3rd Party</h2>
      <p style={{textAlign: 'center'}} className='x'>We use 3rd party delivery services.</p>
      <p style={{textAlign: 'center', marginBottom: '0px'}} className='y'>*Please click your favorite delivery app. Our favorite is Slice*</p>
      <p style={{textAlign: 'center', marginBottom: '0px'}}>
        <a href="https://slicelife.com/restaurants/az/gilbert/85234/buonos-higley/menu?utm_campaign=order_now_button&utm_medium=referral&utm_source=buonosgilbert.com&utm_content=custom_link">
          <img 
            style={{border: '1px solid rgba(0, 0, 0, 1)', marginBottom: '0px'}}
            src="/images/icons-logos/slice.webp" 
            alt="icon slice" 
            className="btn-delivery-main">
          </img>
        </a>
        <ul className="nav flex-row delivery">
          <a href="https://www.doordash.com/store/buono's-higley-gilbert-30837549/41558965/?srsltid=AfmBOophinLYOtATvUW-1BUuWOl3moE_a-AJnlz-YvlS">
            <img
              style={{border: '1px solid rgba(0, 0, 0, 1)', marginBottom: '0px'}} 
              src="/images/icons-logos/doordash.webp" 
              alt="icon door dash" 
              className="btn-delivery">
            </img>
          </a>
          <a href="https://www.ubereats.com/store/buonos-higley-gilbert/GhFJxhcjWL2ALTRlI1c9rQ">
            <img 
              style={{border: '1px solid rgba(0, 0, 0, 1)', marginBottom: '0px'}}
              src="/images/icons-logos/uber-eats.webp" 
              alt="icon uber eats" 
              className="btn-delivery">  
            </img>
          </a>
          <a href="https://www.grubhub.com/restaurant/buonos-higley-pizza-1652-n-higley-rd-gilbert/8878248">
            <img 
              style={{border: '1px solid rgba(0, 0, 0, 1)', marginBottom: '0px'}}
              src="/images/icons-logos/grubhub.webp" 
              alt="icon grub hub" 
              className="btn-delivery">
            </img>
          </a>
        </ul>
      </p>
      <p style={{textAlign: 'center'}} className='y'>*Please click your favorite delivery app. Our favorite is Slice*</p>
      <p className='x' style={{fontWeight: "bold", textAlign: 'center'}}>PLEASE NOTE: Buono's cannot guarantee the warmth or quality of food delivered by any of the 3rd party delivery services. We make ALL of our food to order and have no control over time of pick up or delivery quality. We make every effort to ensure we provide the best quality food.</p>
      <p className='y' style={{fontWeight: "bold", textAlign: 'center'}}>To ensure your food is top notch we encourage our customers to dine in or do direct pick up.</p>
      <hr />
      <p className='y' style={{fontWeight: "bold", textAlign: 'center'}}>THANK YOU KINDLY FOR YOUR UNDERSTANDING! <br /> BUONO'S MANAGEMENT</p>
    </div>
  );
};

export default Delivery;