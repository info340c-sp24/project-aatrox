import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
    const [profile, setProfile] = useState({
        username: '',
        email: '',
        summonerName: ''
    });

    const [profilePic, setProfilePic] = useState('https://via.placeholder.com/150');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert('Profile updated successfully!');
    };

    const handleChangePicture = () => {
        const newPic = prompt('Enter new profile picture URL:');
        if (newPic) {
            setProfilePic(newPic);
        }
    };

    return (
        <div className="profile-page">
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
                <section className="profile-section">
                    <h2>User Profile</h2>
                    <div className="profile-container">
                        <div className="profile-info">
                            <h3>Profile Information</h3>
                            <form onSubmit={handleFormSubmit}>
                                <label htmlFor="username">Username:</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={profile.username}
                                    onChange={handleInputChange}
                                    placeholder="Enter your username"
                                    required
                                />

                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={profile.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email"
                                    required
                                />

                                <label htmlFor="summonerName">Summoner Name:</label>
                                <input
                                    type="text"
                                    id="summonerName"
                                    name="summonerName"
                                    value={profile.summonerName}
                                    onChange={handleInputChange}
                                    placeholder="Enter your summoner name"
                                    required
                                />

                                <button type="submit">Update Profile</button>
                            </form>
                        </div>
                        <div className="profile-picture">
                            <h3>Profile Picture</h3>
                            <img src={profilePic} alt="Profile" />
                            <button onClick={handleChangePicture}>Change Picture</button>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <p>League of Legends Strategy Guide © 2024</p>
            </footer>
        </div>
    );
};

export default Profile;
