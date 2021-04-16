import React, { useState, useEffect } from 'react';
import Popup from '../components/Popup';
import bird from '../assets/bird.webp';
import cat from '../assets/cat.jpeg';
import dog from '../assets/dog.png';
import fish from '../assets/fish.jpeg';
import hamster from '../assets/hamster.jpeg';
import rabbit from '../assets/rabbit.gif';
import snake from '../assets/snake.png';
import spider from '../assets/spider.webp';
import turtle from '../assets/turtle.webp';
import './Animals.css';

const Animals = () => {
    const [popping, setPopping] = useState(false);

    useEffect(() => {
        if (popping) {
            const timer = setTimeout(() => {                
                setPopping(false);
            }, 2000)
            
            return () => clearTimeout(timer);
        }
    }, [popping])
    
    return (
        <section className="animals">
            <div className="animals-grid">
                {animalPics.map(({ src, bad }, index) => 
                    <img 
                        key={index} 
                        src={src} 
                        onClick={bad ? () => setPopping(true) : undefined}
                        className="animal-pic" 
                    />
                )}
            </div>
            {popping && <Popup />}
        </section>
    )
}

const animalPics = [
    {
        src: bird,
        bad: false
    },
    {
        src: cat,
        bad: true
    },
    {
        src: dog,
        bad: true
    },
    {
        src: fish,
        bad: false
    },
    {
        src: hamster,
        bad: false
    },
    {
        src: rabbit,
        bad: false
    },
    {
        src: snake,
        bad: true
    },
    {
        src: spider,
        bad: true
    },
    {
        src: turtle,
        bad: false
    }
]

export default Animals;