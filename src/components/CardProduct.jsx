import React from 'react'

function CardProduct({producto}) {
  return (
    <>
            
                <div className='card-product'>
                  <a href={`/product/${producto.id}`}>{producto.title}</a>
                    <img src={producto.images[0]} alt=""  className='imagen-producto'/>
                    <p>{producto.description}</p>
                    <strong>${producto.price}</strong>
                </div>   
    </>
  )
}

export default CardProduct