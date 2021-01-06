import React from 'react';
import { Link } from 'react-router-dom';


import './home.styles.scss';

const HomePage = () => {
    return (
        <div id="home">
            <div className='info'>
                <div className='container'>
                    <p className='store-name'>CANDY'S</p>
                    <span className='first-sentence'>Os melhores doces</span>
                    <span className='second-sentence'>Os melhores preços</span>
                    <Link to='/produtos'>
                    <button className='btn'>Comece a comprar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage;