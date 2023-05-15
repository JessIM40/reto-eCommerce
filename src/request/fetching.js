async function getProducts(state) {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  state(data.products);
}

async function uniqueProduct(id, state) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();

  state(data);
}

async function addUser(state) {
  try {
    const response = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error", error);
  }
}

async function loginUser(state) {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(state),
  });
  const data = response.json();
  //console.log(data)
  return data;
}

async function categorySmartPhone(category, state) {
  const response = await fetch(
    `https://dummyjson.com/products/category/${category}`
  );
  const data = await response.json();
  console.log(data);
  state(data.products)
}

export { getProducts, uniqueProduct, addUser, loginUser, categorySmartPhone };
