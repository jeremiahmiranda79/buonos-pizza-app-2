import React from 'react';
import {INFORMATION} from '../../constants/information';

const Information = () => {
  return (
    <div className='x' style={{textAlign: 'center'}}>
      <p style={{fontWeight: 'bold', marginBottom: '0px'}}>{INFORMATION[0].llc}</p>
      <a style={{textDecoration: 'none'}} href={INFORMATION[0].address_link}>
        <p style={{marginBottom: '0px'}}>{INFORMATION[0].address}</p>
      </a>
      <a style={{textDecoration: 'none'}} href={INFORMATION[0].phone_link}>
        <p style={{marginBottom: '0px'}}>{INFORMATION[0].phone}</p>
      </a>
      <a style={{textDecoration: 'none'}} href={INFORMATION[0].email_link}>
        <p>{INFORMATION[0].email}</p>
      </a>
    </div>
  );
};

export default Information;