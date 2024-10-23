import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='header'> 
    <div className="header-contents">
    <Link to={`/product/66dc3b609deaef26025c6ada`}>
     <button className='button'>See More</button>
     </Link>
    </div>

    </div>
  )
}

export default Header