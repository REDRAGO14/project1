import React from 'react'
import  './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>for better expriance download<br />EthioFitness APP</p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        
      </div>
    </div>
  )
}

export default AppDownload
