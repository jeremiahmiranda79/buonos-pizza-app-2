import React from 'react';
import {INFORMATION} from '../../constants/information';
import '../../css/bottom_nav_bar.css';

const Footer = () => {
  return (
    <div className='BottomNavBar'>
      <footer className="py-1 pt-1">
        <p className='x' style={{fontWeight: 'bold', textAlign: 'center', marginBottom: '0px', marginTop: '10px'}}>{INFORMATION[0].llc}</p>
        <a href={INFORMATION[0].phone_link}style={{textDecoration: 'none', color: 'inherit', textAlign: 'center'}}>
          <p className='x' style={{marginBottom: '0px'}}>{INFORMATION[0].phone}</p>
        </a>
        <a href={INFORMATION[0].email_link}style={{textDecoration: 'none', color:'inherit', textAlign: 'center'}}>
          <p className='x'>{INFORMATION[0].email}</p>
        </a>
        <p style={{textAlign: 'center'}} >
          <a 
            href={INFORMATION[0].face_book_link}
            className="fa-brands fa-facebook fa-2xl fa-fw" 
            aria-hidden="false" 
            aria-label="Link to Face Book"
            tabIndex="-1"
            style={{textDecoration: 'none', color: 'inherit', textAlign: 'center'}}
            alt="Face Book" 
          />                 
          <a 
            href={INFORMATION[0].instagram_link}
            className="fa-brands fa-square-instagram fa-2xl fa-fw" 
            aria-hidden="false"
            aria-label="Link to Instagram"
            tabIndex="-1" 
            style={{textDecoration: 'none', color: 'inherit', textAlign: 'center'}}
            alt="Instagram" 
          />
          <a 
            href={INFORMATION[0].yelp_link}
            className="fa-brands fa-yelp fa-2xl fa-fw" 
            aria-hidden="false"
            aria-label="Link to Yelp"
            tabIndex="-1"
            style={{textDecoration: 'none', color: 'inherit', textAlign: 'center'}}
            alt="Yelp" 
          />
          <a 
            href={INFORMATION[0].tiktok_link}
            className="fa-brands fa-tiktok fa-2xl fa-fw" 
            aria-hidden="false"
            aria-label="Link to Tiktok"
            tabIndex="-1"
            style={{textDecoration: 'none', color: 'inherit', textAlign: 'center'}}
            alt="tiktok" 
          />      
          <a 
            href={INFORMATION[0].google_map_link}
            className="fa-brands fa-google fa-2xl fa-fw" 
            aria-hidden="false"
            aria-label="Link to Google Maps"
            tabIndex="-1"
            style={{textDecoration: 'none', color: 'inherit', textAlign: 'center'}}
            alt='Google'
          /> 
        </p>
        <p style={{textAlign: 'center', marginBottom: '0px'}}>{INFORMATION[0].copy_right}</p>
        <p style={{textAlign: 'center', marginBottom: '10px', fontWeight: 'bold'}}>{INFORMATION[0].powered_by}</p>
      </footer>
    </div>
  );
};

export default Footer;