import React from 'react'
import './About.scss'
import Banner from '../../components/Banner/Banner';
import mountain from '../../image/mountain.png'
import Collapse from '../../components/Collapse/Collapse';
import data from '../../Data/description.json'

const About = () => {

  const documentTitle = "Kasa - A propos de nous";
  document.title = documentTitle
  return (
    <>
   <Banner imageUrl={mountain} />
  
   <div className='about'>
        {data.map((description, index) => (
          <Collapse 
          key={index}
          title={description.title}
          text={description.content}
      />
        ))}
      </div>
   
    </>
  )
}
 export default About;