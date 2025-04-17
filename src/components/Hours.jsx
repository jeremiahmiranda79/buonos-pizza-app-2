import React from 'react'
import {HOURS_INFORMATION} from '../constants/hoursInformation';
import CurrentDateTime from './layout/CurrentDateTime';
import {Image} from 'react-bootstrap';

const Hours = () => {
  return (
    <div style={{margin: '100px 10px 10px 10px'}}>  
      <h1 rel="preload" style={{textAlign: 'center'}}>Hours</h1>
      <Image rel="preload" fetchPriority="high" src='/images/photos/header-2.webp' alt='store front' fluid/>
      <div style={{textAlign: 'center'}}><CurrentDateTime/></div>
      <p className='y' style={{textAlign: 'center', marginBottom: '0px'}}>Hours of operation are subject to change based on circumstance or holidays.</p>
      <p className='y' style={{textAlign: 'center'}}>Please call ahead if you have inquires that need garenteed timing.</p>
      <h2 style={{textAlign: 'center'}}>Hours Of Operation</h2>
      <div style={{textAlign: 'center'}}>  
        {HOURS_INFORMATION.map((hours) => (<p key={hours.id} className='y' style={{marginBottom: '0px'}}>{hours.date}</p>))}
      </div>
    </div>
  )
};

export default Hours;