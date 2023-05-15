/* eslint-disable react/prop-types */
//import React from 'react'
import { useNavigate  } from 'react-router-dom'
function CardProduct({producto}) {
  const navigate = useNavigate();

  return (
    <>
            
                <div className='card-product'>
                  <h3 onClick={() => navigate(`/product/${producto.id}`)}>{producto.title}</h3>
                    <img src={producto.images[0]} alt=""  className='imagen-producto'/>
                    <p>{producto.description}</p>
                    <strong>${producto.price}</strong>
                </div>   
    </>
  )
}

export default CardProduct;