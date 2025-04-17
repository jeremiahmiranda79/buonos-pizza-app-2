import React, {useState, useEffect} from 'react';

function CurrentDateTime() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {setNow(new Date());}, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <p 
        className='x'
        style={{marginTop: '10px', marginBottom: '0px', fontWeight: 'bolder'}}>
        Current Date: {now.toLocaleDateString()}<br/>
        Current Time: {now.toLocaleTimeString()}
      </p>
    </>
  );
}

export default CurrentDateTime;