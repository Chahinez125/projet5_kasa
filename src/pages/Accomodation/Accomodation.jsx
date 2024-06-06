import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Data from '../../Data/data.json';
import Article from '../../components/Article/article';
import './Accomodation.scss';
import Carrousel from '../../components/Carrousel/Carrousel';
import Tags from '../../components/Tags/Tags';


export default function Accomodation() {
  const { appartementId } = useParams(); 
  // Récupération de l'id dans l'URL
  const app = Data.find((logement) => logement.id === appartementId);
  
  if (!app) {
    return <Navigate to="/error" />;
  } else {
    return (
      <>
      <div className="carrousel-container">
      <Carrousel images = {app.pictures}/>
  </div>
  <div className='all-info'>
  <div className="left-info">
  <div className="title-location">
                        <h1>{app.title}</h1>
                        <p>{app.location}</p>
                    </div>
                    <Tags tags={app.tags}/>
    </div>

  </div>
      <div className="collapse-description-container">
        <Article logementId={appartementId} />
      </div>
      </>
    );
  }
}