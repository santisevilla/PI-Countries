import React from 'react';
import {Link} from 'react-router-dom';
import '../Styles/landing.css'

export default function LandingPage() {
    return(
        <div className='bodyLanding'>
            <div className='divButton'>
                <Link to='/home'>
                    <button className='buttonLanding'>Ingresar</button>
                </Link>
            </div>
        </div>
    )
}