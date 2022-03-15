import React from 'react';
import {Link} from 'react-router-dom';
import '../Styles/landing.css'

export default function LandingPage() {
    return(
        <div className='bodyLanding'>
            <div className='h1Landing'>
                <h1>BIENVENIDOS!</h1>
            </div>
            <div className='divButtonLanding'>
                <Link to='/home'>
                    <button className='buttonLanding'>Ingresar</button>
                </Link>
            </div>
        </div>
    )
}