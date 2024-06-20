import React from 'react'
import { useGetProductsQuery } from '../../context/api/productsApi'
import { PiShoppingCartFill } from 'react-icons/pi';
import { FaRegHeart } from 'react-icons/fa';

import './products.scss'

const Products = () => {
  const { data } = useGetProductsQuery({limit: 100})
  console.log(data);

  let card = data?.data?.products?.map(el => (
    <div className="cards__card">
      <div className="cards__card-img">
        <img src={el.urls.length ? el.urls[0] : 'https://static.thenounproject.com/png/4595376-200.png'} alt={el.title} />
      </div>
      <div className="cards__card-title">
        <h3>{el.title}</h3>
      </div>
      <div className="cards__card-btns">
        <p>{el.price}</p>
        <button className='cards__card-shop'><PiShoppingCartFill /></button>
        <button className='cards__card-heart'><FaRegHeart /></button>
      </div>
    </div>
  ))

  return (
    <div className='cards container'>
      {card}
    </div>
  )
}

export default Products