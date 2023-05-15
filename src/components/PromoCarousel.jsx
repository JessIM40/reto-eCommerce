/* eslint-disable react/prop-types */
import { Carousel } from "react-bootstrap";

function PromoCarousel({ promProduct }) {
  return (
    <>
      <Carousel style={{ background: "white" }}>
        {promProduct.map((p) => {
          return (
            <Carousel.Item key={p.id}>
              <img
                className="d-block"
                style={{
                  height: 400,
                  objectFit: "contain",
                  margin: "auto",
                  display: "block",
                }}
                src={p.images[0]}
                alt={p.title}
              />
              <Carousel.Caption
                style={{ color: "red", lineHeight: "0.4", bottom: "10" }}
              >
                <p>
                  <a href={`/product/${p.id}`}>{p.title}</a>
                </p>
                <p>
                  <strong>${p.price}</strong>{" "}
                </p>
                <p>{p.discountPercentage}% DCTO</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default PromoCarousel;
