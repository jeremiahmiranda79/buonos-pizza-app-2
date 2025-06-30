import React from 'react';
import Information from '../components/layout/Information';
import  '../css/specials.css';

const Specials = () => {
  return (
    <div className='SpecialsPage' style={{margin: '100px 10px 10px 10px'}}>
      <h1 rel="preload" style={{textAlign: 'center'}}>Specials</h1>
      <Information/>
      <p className='y' style={{textAlign: 'center', fontWeight: 'bold'}}>*Ask us about our all day Specials*</p>
      
      {/* <h2 style={{textAlign: 'center'}}>Try Our New Creation</h2>
      <p style={{textAlign: 'center'}}>
        <img src="/images/specials/pasta-bowl.webp" alt="pasta bowl" className="Image"/>
      </p> */}

      {/* <p className='x' style={{textAlign: 'center', marginBottom: '0px', fontWeight: 'bold'}}>Check in on our new pasta bowl</p>
      <p className='x' style={{textAlign: 'center', marginBottom: '0px'}}>$14.99 plus tax</p>
      <p className='y' style={{textAlign: 'center', marginBottom: '18px'}}>Choice of spaghetti or penne. <br/> Choice of chicken, meatball, or sausage. <br/> Choice of marinara, pink vodka, or alfredo. <br/> Topped with fresh basil, and parmesan</p> */}
      <h2 style={{textAlign: 'center', marginTop: '10px'}}>Game Day</h2>
      <p style={{textAlign: 'center'}}>
        <img src="/images/specials/sunday-football.webp" alt="pasta bowl" className="Image"/>
      </p>

      <p className='x' style={{textAlign: 'center'}}>Large 16" one topping Neapolitan pizza & 10 wings for $29.99 plus tax.</p>
      <p className='x' style={{textAlign: 'center'}}>Available for dine in or take out, open to close on NFL game day's only(Sunday, Monday, Thursday).</p>
      <h2 style={{textAlign: 'center', marginTop: '10px'}}>Lunch Specials</h2>
      <div style={{textAlign: 'center', marginTop: '10px'}}>
        <p className='x'style={{marginBottom: '0px'}}>Available Monday-Friday 11am to 4pm</p>
        <p className='y'>(Fountain Drink included)</p>
        <p className='x' style={{marginBottom: '0px'}}>2 Slice of Cheese</p>
        <p className='x' style={{marginBottom: '0px'}}>$8.99</p>
        <p className='x' style={{marginBottom: '0px'}}>1 Slice of Cheese w/ Salad</p>
        <p className='x' style={{marginBottom: '0px'}}>$9.99</p>
        <p className='x' style={{marginBottom: '0px'}}>6 inch Cold Sub w/ Fries</p>
        <p className='x' style={{marginBottom: '0px'}}>$11.99</p>
      </div>
      
      <h2 style={{textAlign: 'center', marginTop: '10px'}}>Pizza Topping Specials</h2>
      <div style={{textAlign: 'center', marginTop: '10px'}}>
        <p className='x' style={{marginBottom: '0px'}}>All day every day</p>
        <p className='x' style={{marginBottom: '0px'}}>Any 4 toppings</p>
        <p className='x' style={{marginBottom: '0px'}}>$8.99</p>
      </div>
    </div>
  );
};

export default Specials;