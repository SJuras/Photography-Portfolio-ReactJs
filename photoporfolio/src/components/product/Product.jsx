import React from 'react'
import './Product.css'


const Product = ({src}) => {
  return(
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <div className="p-img-box">
        <img src={src} alt="" className="p-img" />
      </div>
    </div>
  )
}

export default Product
