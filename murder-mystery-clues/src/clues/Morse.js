import React from 'react';
import useSound from 'use-sound';
import morse from '../assets/morse.m4a';
import playButton from '../assets/play.svg';
import './Morse.css';

const Morse = () => {
    const [play] = useSound(morse);
    
    return (
        <div>
            <p>A Mysterious Message...</p>
            <img 
                src={playButton} 
                alt="play by Fontawesome" 
                className="play-icon" 
                onClick={play}
            />
        </div>
    )
}

export default Morse;