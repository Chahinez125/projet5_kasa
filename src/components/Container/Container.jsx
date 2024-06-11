import './Container.scss';
import data from "../../Data/data.json"; 
import { NavLink } from 'react-router-dom'; 
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