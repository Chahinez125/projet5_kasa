import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Data from '../../Data/data.json'
export default function Accomodation() {
  const { appartementId } = useParams(); 
  //récupération de l'id dnas l'url
  const app = Data.find((logement)=> logement.id === appartementId);
  if (!app)
    return(
  <Navigate to ="/error" />
    )
 
}
