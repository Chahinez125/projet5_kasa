import './Container.scss'; // Import des styles
import data from "../../Data/data.json"; // Import des données JSON
import { NavLink } from 'react-router-dom'; // Import de NavLink pour la navigation
import Card from '../Crad/Card';

function Container() {
    // Affichage du body avec intégration des cards
    return (
        <div className='body-container'>
            {data.map((renting) => (
                <NavLink key={renting.id} to={`/accomodation/${renting.id}`}>
                    <Card cover={renting.cover} title={renting.title} /> {/* Utilisation du composant Card */}
                </NavLink>
            ))}
        </div>
    );
}

export default Container; 