import React from 'react';
import burst from '../assets/burst.svg';
import './Popup.css';

const Popup = () => {
    return (
        <div className="popup">
            <img src={burst} />
            <p className="popup-message">NOPE</p>
        </div>
    )
}

export default Popup;