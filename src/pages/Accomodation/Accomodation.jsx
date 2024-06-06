import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Data from '../../Data/data.json';
import Article from '../../components/Article/article';
import './Accomodation.scss'

export default function Accomodation() {
  const { appartementId } = useParams(); 
  // Récupération de l'id dans l'URL
  const app = Data.find((logement) => logement.id === appartementId);
  
  if (!app) {
    return <Navigate to="/error" />;
  } else {
    return (
      <div className="collapse-description-container">
        <Article logementId={appartementId} />
      </div>
    );
  }
}