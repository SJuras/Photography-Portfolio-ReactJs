import React from 'react'
import './ProductList.css'
import Product from '../product/Product'
import { products } from '../../data'

import Hipster from '../../img/hipster.jpg'
import Girls from '../../img/girls.jpg'
import Oil from '../../img/oil.jpg'
import Mountain from '../../img/mountain.jpg'
import Food from '../../img/food.jpg'
import Wedding from '../../img/wedding.jpg'


const ProductList = () => {
  return(
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & Inspire</h1>
        <p className="pl-desc">
          This is a creative portfolio that inspires.
        </p>
      </div>
      <div className="pl-list">
        <Product src={Hipster} />
        <Product src={Girls} />
        <Product src={Oil} />
        <Product src={Mountain} />
        <Product src={Food} />
        <Product src={Wedding} />
      </div>
    </div>
  )
}

export default ProductList
