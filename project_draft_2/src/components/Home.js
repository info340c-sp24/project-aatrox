import React from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div>
            <header>
                <h1>Welcome to the League of Legends Strategic Guide</h1>

                <nav>
                    <ul>
                        <li><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
                        <li><Link to="/guide"><FontAwesomeIcon icon={faBook} /> Guide</Link></li>
                        <li><Link to="/profile"><FontAwesomeIcon icon={faUser} /> Profile</Link></li>
                        <li><Link to="/settings"><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
                    </ul>
                </nav>
            </header>

            <main>
                <p>Discover effective strategies and tips to dominate your League of Legends games! Our guide offers comprehensive insights for each role to help you improve your gameplay.</p>
                <p>Explore various tactics, champion recommendations, and game mechanics tailored to new and seasoned players alike. Whether you're playing TOP, MID, BOTTOM, JUNGLE, or SUPPORT, our strategic guide will elevate your gaming experience.</p>
            </main>

            <footer>
                <p>League of Legends Strategic Guide © 2024</p>
            </footer>
        </div>
    );
};

export default Home;
