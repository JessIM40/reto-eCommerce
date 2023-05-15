/* eslint-disable react/prop-types */
import { Carousel } from 'react-bootstrap';

function PromoCarousel ({promProduct}) {
  return (
    <>
      <Carousel style={{background:"black"} }>
      <Carousel.Item>
        <img
          className="d-block"
          style={{height: 500}}
          src={promProduct[0].images[0]}
          alt="First slide"
        />
        <Carousel.Caption style={{color:'red'}}>
          <h3><a href={`/product/${promProduct[0].id}`}>{promProduct[0].title}</a></h3>
          <p><strong>${promProduct[0].price}</strong> </p>
          <p>{promProduct[0].discountPercentage}% DCTO</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          style={{height: 500}}
          src={promProduct[1].images[0]}
          alt="Second slide"
        />

        <Carousel.Caption style={{color:'red'}}>
          <h3><a href={`/product/${promProduct[1].id}`}>{promProduct[1].title}</a></h3>
          <p><strong>${promProduct[1].price}</strong> </p>
          <p>{promProduct[1].discountPercentage}% DCTO</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          style={{height: 500}}
          src={promProduct[2].images[0]}
          alt="Third slide"
        />

        <Carousel.Caption style={{color:'red'}}>
          <h3><a href={`/product/${promProduct[2].id}`}>{promProduct[2].title}</a></h3>
          <p><strong>${promProduct[2].price}</strong> </p>
          <p>{promProduct[2].discountPercentage}% DCTO</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          style={{height: 500}}
          src={promProduct[3].images[0]}
          alt="Fourth slide"
        />
        <Carousel.Caption style={{color:'red'}}>
          <h3><a href={`/product/${promProduct[3].id}`}>{promProduct[3].title}</a></h3>
          <p><strong>${promProduct[3].price}</strong> </p>
          <p>{promProduct[3].discountPercentage}% DCTO</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default PromoCarousel;
