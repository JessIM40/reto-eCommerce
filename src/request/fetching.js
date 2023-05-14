async function getProducts(state){
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  
  state(data.products)  

}
const uniqueProduct=async (id, state)=>{
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();

  state(data)
  console.log(data)
}
const getProductsByCategory=async( category)=>{
const response =await fetch(`https://dummyjson.com/products/category/${category}`)
const data = await response.json();
// state(data)
console.log(data)

return data;
}  


export{
  getProducts, uniqueProduct, getProductsByCategory
}
