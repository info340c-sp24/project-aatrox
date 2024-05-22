import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/guide.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import aatroxImage from '../img/aatrox.jpg';
import dariusImage from '../img/darius.jpg';
import fioraImage from '../img/fiora.jpg';
import gnarImage from '../img/gnar.jpg';
import ireliaImage from '../img/irelia.jpg';
import garenImage from '../img/garen.jpg';

const Guide = () => {
    const [showDetails, setShowDetails] = useState({
        top: false,
        mid: false,
        bottom: false,
        jungle: false,
        support: false
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
                <h1>League of Legends Strategy Guide</h1>
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
                <section className="role" id="top">
                    <h2>TOP</h2>
                    <button onClick={() => toggleDetails('top')}>Description</button>
                    <button onClick={() => toggleDetails('top')}>Details</button>
                    <p className="description" hidden={showDetails.top}>Top lane strategies and champion insights.</p>
                    <table className="details" hidden={!showDetails.top}>
                        <thead>
                            <tr>
                                <th scope="col">Champion</th>
                                <th scope="col">Skills</th>
                                <th scope="col">Portrait</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Aatrox</th>
                                <td>Description: Aatrox is a powerful and relentless warrior known for his high sustain and damage output.</td>
                                <td><img src={aatroxImage} alt="Aatrox" /></td>
                            </tr>
                            <tr>
                                <th>Darius</th>
                                <td>Darius is a fearsome juggernaut known for his ability to execute enemies and dominate the top lane with his powerful melee attacks.</td>
                                <td><img src={dariusImage} alt="Darius" /></td>
                            </tr>
                            <tr>
                                <th>Fiora</th>
                                <td>Fiora is a duelist known for her incredible agility and precision with a rapier, allowing her to outmaneuver and outplay opponents in one-on-one combat.</td>
                                <td><img src={fioraImage} alt="Fiora" /></td>
                            </tr>
                            <tr>
                                <th>Gnar</th>
                                <td>Gnar is a yordle transformed by an ancient curse, switching between a playful and nimble form and a monstrous and ferocious form during combat.</td>
                                <td><img src={gnarImage} alt="Gnar" /></td>
                            </tr>
                            <tr>
                                <th>Irelia</th>
                                <td>Irelia is a skilled Ionian fighter known for her graceful and deadly blade work, allowing her to slice through enemies with precision and finesse.</td>
                                <td><img src={ireliaImage} alt="Irelia" /></td>
                            </tr>
                            <tr>
                                <th>Garen</th>
                                <td>Garen is a mighty warrior known for his unmatched durability and relentless pursuit of justice on the battlefield.</td>
                                <td><img src={garenImage} alt="Garen" /></td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* Repeat the same structure for other roles (MID, BOTTOM, JUNGLE, SUPPORT) */}
            </main>

            <footer>
                <p>&copy; 2024 YourGameName. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Guide;
