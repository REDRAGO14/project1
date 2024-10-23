import React, { useEffect, useState } from 'react'
import "./Home"
import Header from '../../component/Header/Header'
import ExploreMenu from '../../component/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../component/FoodDisplay/FoodDisplay.jsx'
import AppDownload from '../../component/AppDownload/AppDownload.jsx'

const Home = () => {
  const [category, setCategory] = useState("All");
 
   return (
    <div>
      <Header/> 
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
      <AppDownload/>
    </div>
  )            
}

export default Home