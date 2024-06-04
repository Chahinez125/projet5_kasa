import Banner from '../../components/Banner/Banner';
import Container from '../../components/Container/Container';
import Sea from "../../image/sea.png"

const Home = () => {

  const documentTitle = "Kasa - Accueil";
  document.title = documentTitle

    return (
      <>
        <Banner 
        imageUrl ={Sea}
        title={
        <>
          Chez vous, <span>partout et ailleurs</span>
        </>
        }
        opacity={0.6}
        />
        <Container />
      </>
    )
}

export default Home