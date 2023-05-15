import "../style/cardProduct.css"

function CardProduct({ producto }) {
  return (
    <div className="card-product">
      <img src={producto.images[0]} alt={producto.title} className="imagen-producto" />
      <a href={`/product/${producto.id}`} className="">{producto.title}</a>
      <p>{producto.description}</p>
      <strong>${producto.price}</strong>
    </div>
  );
}

export default CardProduct;
