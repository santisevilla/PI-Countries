import React from 'react';
import {Link} from 'react-router-dom';
import '../Styles/landing.css'

export default function LandingPage() {
    return(
        <div className='bodyLanding'>
            <div className='h1'>
                <h1>BIENVENIDOS A MI PÁGINA</h1>
            </div>
            <div className='divButton'>
                <Link to='/home'>
                    <button className='button'>Ingresar</button>
                </Link>
            </div>
        </div>
    )
}