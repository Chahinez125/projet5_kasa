import React from 'react'
import './Banner.scss'
function Banner ({imageUrl, opacity, title}) {
  const opacityStyle = {
      opacity: opacity,
  };
  //Affichage Banner
  return (
    <div className='banner-bar'>
    <img className='imageBanner' src={imageUrl} style={opacityStyle} alt="Banner"></img>
    <h1 className='titleBanner'>{title}</h1>
</div>
  )
}
export default Banner;
