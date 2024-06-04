import React from 'react'
import './About.scss'
import Banner from '../../components/Banner/Banner';
import mountain from '../../image/mountain.png'
import dataAbout from '../../Data/description.json'

const About = () => {

  const documentTitle = "Kasa - A propos de nous";
  document.title = documentTitle
  return (
    <>
   <Banner imageUrl={mountain} />
   <div className='about'>
    {dataAbout.map 
    ((description, index) => (
      <div key={index}>
      <h2>{description.title}</h2>
      <p>{description.content}</p>
    </div>

    ))}
   </div>
    </>
  )
}
 export default About;