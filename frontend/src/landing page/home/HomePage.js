import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import OpenAccount from '../OpenAccount';
import Education from './Education';
import Pricing from './Pricing';
import Stats from './Stats';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
    return ( 
        <>
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
        </>
     );
}

export default HomePage;