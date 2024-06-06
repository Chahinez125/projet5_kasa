import React from 'react';
import Collapse from "../Collapse/Collapse";
import Data from "../../Data/data.json";

export default function Article({ logementId }) {
    const logement = Data.find((log) => log.id === logementId);

    // Création de la liste des équipements
    const equipementList = logement.equipments.map((equipement, index) => (
        <li key={index}>{equipement}</li>
    ));

    return (
        <>
            {/* Collapse pour la description */}
            <Collapse 
                title="Description"
                text={logement.description}
            />

            {/* Collapse pour les équipements */}
            <Collapse 
                title="Équipements"
                text={equipementList.length > 0 ? <ul>{equipementList}</ul> : "Aucun équipement disponible"}
            />
        </>
    );
}
