import React from 'react';
import { Link } from 'react-router-dom';
import '../css/profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
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
                <section>
                    <h2>User Profile</h2>
                    <form>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" placeholder="Enter your username" />

                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" />

                        <button type="submit">Login</button>
                    </form>
                </section>
            </main>

            <footer>
                <p>This is the footer</p>
            </footer>
        </div>
    );
};

export default Profile;
