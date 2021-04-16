import React from 'react';
import semaphore from '../assets/semaphore.png';
import './Semaphore.css';

const Semaphore = () => {
    return (
        <section>
            <p>Another mysterious message...</p>
            <img src={semaphore} alt="semaphore encoded" className="semaphore" />
        </section>
    )
}

export default Semaphore;