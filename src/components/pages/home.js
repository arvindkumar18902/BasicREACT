import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Cards from '../Cards'
import Footer from '../footer';
import HeroSection from '../HeroSection'
import './home.css'


function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Link to="../MockAPI" className='home-link'> MOCKAPI </Link>
            <Footer />
        </>
    )    
}

export default Home;