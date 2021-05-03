import React from 'react';
import '../../App.css';
import Footer from '../Footer'
import Cards from '../Cards';

export default function Services() {
    return (
        <>
            {/* <h1 className='ser-text'>SERVICES</h1> */}
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1 className='products'>SERVICES</h1>
            <Cards />
            <Footer />



        </>
    )
}