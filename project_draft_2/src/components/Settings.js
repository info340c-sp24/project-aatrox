import React from 'react';
import { Link } from 'react-router-dom';
import '../css/settings.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

const Settings = () => {
    return (
        <div>
            <header>
                <h1>User Settings</h1>
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
                    <h2>Language Settings</h2>
                    <label htmlFor="language">Select Language:</label>
                    <select id="language" name="language">
                        <option value="en">English</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        {/* Add more language options as needed */}
                    </select>
                </section>

                <section>
                    <h2>Game Version</h2>
                    <label htmlFor="version">Select Game Version:</label>
                    <select id="version" name="version">
                        <option value="v1.0">Version 1.0</option>
                        <option value="v2.0">Version 2.0</option>
                        <option value="v3.0">Version 3.0</option>
                        {/* Add more version options as needed */}
                    </select>
                </section>
            </main>

            <footer>
                <p>&copy; 2024 LOL. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Settings;
