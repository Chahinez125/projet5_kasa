import './Card.scss'; // Import du fichier de styles SCSS pour le composant Card

function Card({ cover, title }) {
    // Affichage des cards
    return (
        <article className='card'>
            <img src={cover} alt="location"></img> {/* Affiche l'image de couverture */}
            <figcaption className='cardTitle'>{title}</figcaption> {/* Affiche le titre */}
        </article>
    )
}

export default Card; // Export du composant Card