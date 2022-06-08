import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1> HELLO THERE!!</h1>
      <p>  My name is Arvind Kumar, a CSE student in VIT university</p>

    </div>
  )
}

export default HeroSection
