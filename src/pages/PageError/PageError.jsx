import { Link, } from 'react-router-dom'
import './PageError.scss'
function PageError(){

return (
  <>
    <div className="wrap">
     
      <div className="error">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n’existe pas.</p>
        <Link className="return-link" to="/">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </div>
   
  </>
)
}
export default PageError
