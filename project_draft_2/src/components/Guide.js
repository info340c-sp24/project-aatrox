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

    const [champions, setChampions] = useState([
        { name: 'Aatrox', description: 'Aatrox is a powerful and relentless warrior known for his high sustain and damage output.', image: aatroxImage },
        { name: 'Darius', description: 'Darius is a fearsome juggernaut known for his ability to execute enemies and dominate the top lane with his powerful melee attacks.', image: dariusImage },
        { name: 'Fiora', description: 'Fiora is a duelist known for her incredible agility and precision with a rapier, allowing her to outmaneuver and outplay opponents in one-on-one combat.', image: fioraImage },
        { name: 'Gnar', description: 'Gnar is a yordle transformed by an ancient curse, switching between a playful and nimble form and a monstrous and ferocious form during combat.', image: gnarImage },
        { name: 'Irelia', description: 'Irelia is a skilled Ionian fighter known for her graceful and deadly blade work, allowing her to slice through enemies with precision and finesse.', image: ireliaImage },
        { name: 'Garen', description: 'Garen is a mighty warrior known for his unmatched durability and relentless pursuit of justice on the battlefield.', image: garenImage }
    ]);

    const [newChampion, setNewChampion] = useState({ name: '', description: '', image: '' });

    const toggleDetails = (role) => {
        setShowDetails(prevState => ({
            ...prevState,
            [role]: !prevState[role]
        }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewChampion(prevState => ({ ...prevState, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (newChampion.name && newChampion.description && newChampion.image) {
            setChampions([...champions, newChampion]);
            setNewChampion({ name: '', description: '', image: '' });
        }
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
                            {champions.map((champion, index) => (
                                <tr key={index}>
                                    <th>{champion.name}</th>
                                    <td>{champion.description}</td>
                                    <td><img src={champion.image} alt={champion.name} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
                <section>
                    <h2>Add a New Champion</h2>
                    <form onSubmit={handleFormSubmit}>
                        <label htmlFor="name">Champion Name:</label>
                        <input type="text" id="name" name="name" value={newChampion.name} onChange={handleInputChange} placeholder="Enter champion name" required />

                        <label htmlFor="description">Description:</label>
                        <input type="text" id="description" name="description" value={newChampion.description} onChange={handleInputChange} placeholder="Enter champion description" required />

                        <label htmlFor="image">Image URL:</label>
                        <input type="text" id="image" name="image" value={newChampion.image} onChange={handleInputChange} placeholder="Enter image URL" required />

                        <button type="submit">Add Champion</button>
                    </form>
                </section>
            </main>

            <footer>
                <p>&copy; 2024 YourGameName. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Guide;
