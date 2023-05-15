const ordenarMayorAMenor=(x,y)=>{
return y['discountPercentage'] - x['discountPercentage']}


export const promociones =(array, numero)=>{
//ordena de mayor a menor según discountPercentage
const arrayOrdenado=array.sort(ordenarMayorAMenor)
//crea un nuevo arreglo a partir del arreglo incial con los numero primeros números

const promoarray=arrayOrdenado.slice(0,numero);
return promoarray;
}

const ejemplo=[
{
    "id": 10,
    "title": "HP Pavilion 15-DK1056WM",
    "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    "price": 1099,
    "discountPercentage": 6.18,
    "rating": 4.43,
    "stock": 89,
    "brand": "HP Pavilion",
    "category": "laptops",
    "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
    "images": [
    "https://i.dummyjson.com/data/products/10/1.jpg",
    "https://i.dummyjson.com/data/products/10/2.jpg",
    "https://i.dummyjson.com/data/products/10/3.jpg",
    "https://i.dummyjson.com/data/products/10/thumbnail.jpeg"
    ]
    },
    {
    "id": 11,
    "title": "perfume Oil",
    "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
    "price": 13,
    "discountPercentage": 8.4,
    "rating": 4.26,
    "stock": 65,
    "brand": "Impression of Acqua Di Gio",
    "category": "fragrances",
    "thumbnail": "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
    "images": [
    "https://i.dummyjson.com/data/products/11/1.jpg",
    "https://i.dummyjson.com/data/products/11/2.jpg",
    "https://i.dummyjson.com/data/products/11/3.jpg",
    "https://i.dummyjson.com/data/products/11/thumbnail.jpg"
    ]
    },
    {
    "id": 12,
    "title": "Brown Perfume",
    "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
    "price": 40,
    "discountPercentage": 15.66,
    "rating": 4,
    "stock": 52,
    "brand": "Royal_Mirage",
    "category": "fragrances",
    "thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
    "images": [
    "https://i.dummyjson.com/data/products/12/1.jpg",
    "https://i.dummyjson.com/data/products/12/2.jpg",
    "https://i.dummyjson.com/data/products/12/3.png",
    "https://i.dummyjson.com/data/products/12/4.jpg",
    "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
    ]
    }
]
console.log(promociones(ejemplo,2))
