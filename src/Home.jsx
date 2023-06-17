import React from 'react';
import style from './styles/home.module.css';
import myImage from './resources/profile_pic.jpg';

const Home = () => {   
    return (
        <section id="Home" className="home-section">
        <h2>Welcome to My App</h2>
        <p>This is the home section of my app.</p>
        <div className={style.container}>
            <div className={style.text_container}>Hello, this is me. I am a software developer studying at
            the University of Santa Cruz.</div>
        </div>
        </section>
    );
};

export default Home;
