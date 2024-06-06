import { useParams } from "react-router-dom"; 
import { Navigate } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel"
import Tags from "../../components/Tags/Tags";
import Rating from "../../components/Rating/Rating";
import "./Accomodation.scss"
import Data from "../../Data/data.json"
import Article from '../../components/Article/article';


export default function Accomodation (){
    const { appartementId } = useParams (); // Récupération de l'id dans l'URL

    const app = Data.find((log) => log.id === appartementId);

    if(!app) {
        return(
            <Navigate to = "/error" />
        )
    } else {

    return(
        <>
            <div className="carrousel-container">
                <Carrousel images = {app.pictures}
            />
            </div>
            <div className="all-info">
                <div className="left-info">
                    <div className="title-location">
                        <h1>{app.title}</h1>
                        <p>{app.location}</p>
                    </div>
                <Tags tags={app.tags}/>
                </div>
                <div className="right-container">
                    <div className="host">
                        <p>{app.host.name}</p>
                        <img src={app.host.picture} alt = {"photo de " + app.host.name}></img>
                    </div>
                    <div className="rating">
                        <Rating rating = {app.rating}/>
                    </div>
                </div>
            </div>
            <div className="collapse-description-container">
        <Article logementId={appartementId} />
      </div>
        </>
        )
    }
}
