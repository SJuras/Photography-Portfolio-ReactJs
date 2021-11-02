import React from 'react'
import './Product.css'


const Product = ({src, title}) => {
  return(
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <div className="p-img-box">
        <img src={src} alt="" className="p-img" />
        <h4>{title}</h4>
      </div>
    </div>
  )
}

export default Product
