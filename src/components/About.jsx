import React from 'react';
import '../css/video_player.css';
import Information from '../components/layout/Information';

const About = () => {
  return (
    <div style={{margin: '100px 10px 10px 10px'}}>
      <h1 rel="preload" style={{textAlign: 'center'}}>About</h1>
      <Information/>
      <h2 style={{textAlign: 'center'}}>About Us</h2>
      <center>
        <div className="video-container">
          <iframe 
            className='responsive-iframe' 
            src="https://www.youtube-nocookie.com/embed/-yCUuy-aX80?si=Vt-eH92ZDxaQ4BbU&amp;start=603" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullscreen 
          />
        </div>
      </center>
      <h2 style={{textAlign: 'center'}}>Meet The Team</h2>
      <p className='x' style={{textAlign: 'center'}}>James and family from the ORIGINAL BUONO'S are BACK. At Buono's Higley we stay true to NYC style pizza, by using fresh local ingredients. Buono's has been bringing New York-style pizza to Arizona since 1989! Just like a local NYC neighborhood pizzeria. We are an independently family owned and operated pizzeria restaurant. Joining James is his fiance Nia from New York and his father Jimmy from New Jersey. We look forward to providing a great atmosphere and even better food for the community.</p>
      <h2 style={{textAlign: 'center'}}>Dine in or take out</h2>
      <p className='x' style={{textAlign: 'center'}}>We have worked to package our meals in a way that lets you bring the quality of our meals into your home. We always love to see you in person, but even when we can't we ensure that your dining experience is top notch!</p>
      <h2 style={{textAlign: 'center'}}>Made in store</h2>
      <p className='x' style={{textAlign: 'center'}}>We refuse to compromise. We use the freshest and finest ingredients. Our Pizza Dough is made fresh daily. All sauces and hand tossed pizzas are made in house. We thank you for supporting our locally owned and operated Pizzaria!!</p>
    </div>
  );
};

export default About;