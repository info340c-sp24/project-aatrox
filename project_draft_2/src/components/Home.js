import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [showDetails, setShowDetails] = useState({
        top: false,
        mid: false,
        bottom: false
    });

    const toggleDetails = (role) => {
        setShowDetails(prevState => ({
            ...prevState,
            [role]: !prevState[role]
        }));
    };

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
                <section>
                    <h2>Discover Strategies</h2>
                    <p>Discover effective strategies and tips to dominate your League of Legends games! Our guide offers comprehensive insights for each role to help you improve your gameplay.</p>
                </section>
                <section>
                    <h2>Explore Tactics</h2>
                    <p>Explore various tactics, champion recommendations, and game mechanics tailored to new and seasoned players alike. Whether you're playing TOP, MID, BOTTOM, JUNGLE, or SUPPORT, our strategic guide will elevate your gaming experience.</p>
                    <div className="card-container">
                        <div className="card">
                            <h3>TOP</h3>
                            <p>Strategies for top lane domination.</p>
                            <button onClick={() => toggleDetails('top')}>Read More</button>
                            {showDetails.top && <div className="details">
                                <p><strong>Role:</strong> Top Lane</p>
                                <p><strong>Champion Suggestions:</strong> Darius, Garen, Camille</p>
                                <p><strong>Strategies:</strong></p>
                                <ul>
                                    <li>Focus on farming and maintaining lane control.</li>
                                    <li>Use teleport to assist other lanes.</li>
                                    <li>Engage in team fights with strong initiation abilities.</li>
                                </ul>
                            </div>}
                        </div>
                        <div className="card">
                            <h3>MID</h3>
                            <p>Mid lane tactics and champion builds.</p>
                            <button onClick={() => toggleDetails('mid')}>Read More</button>
                            {showDetails.mid && <div className="details">
                                <p><strong>Role:</strong> Mid Lane</p>
                                <p><strong>Champion Suggestions:</strong> Zed, Ahri, LeBlanc</p>
                                <p><strong>Strategies:</strong></p>
                                <ul>
                                    <li>Dominate the lane with burst damage and mobility.</li>
                                    <li>Roam to other lanes to secure kills and objectives.</li>
                                    <li>Keep vision control of key areas around mid lane.</li>
                                </ul>
                            </div>}
                        </div>
                        <div className="card">
                            <h3>BOTTOM</h3>
                            <p>Best practices for ADC and support.</p>
                            <button onClick={() => toggleDetails('bottom')}>Read More</button>
                            {showDetails.bottom && <div className="details">
                                <p><strong>Role:</strong> Bottom Lane</p>
                                <p><strong>ADC Suggestions:</strong> Jhin, Ezreal, Kai'Sa</p>
                                <p><strong>Support Suggestions:</strong> Thresh, Leona, Lulu</p>
                                <p><strong>Strategies:</strong></p>
                                <ul>
                                    <li>Coordinate with your support for optimal trading.</li>
                                    <li>Focus on last hitting and managing wave control.</li>
                                    <li>Play safe until you have a clear advantage.</li>
                                </ul>
                            </div>}
                        </div>
                    </div>
                </section>
                <section className="community-section">
                    <h2>Join the Community</h2>
                    <p>Join a community of like-minded players, share your experiences, and learn from others. Stay updated with the latest patches and meta shifts to always stay ahead of the competition.</p>
                </section>
            </main>

            <footer>
                <p>League of Legends Strategic Guide © 2024</p>
            </footer>
        </div>
    );
};

export default Home;
