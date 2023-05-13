const ordenarMayorAMenor = (x, y) => {
    return y['discountPercentage'] - x['discountPercentage']
}

export const promociones = (array, numero) => {
    //ordena de mayor a menor según discountPercentage
    const arrayOrdenado = array.sort(ordenarMayorAMenor)
    //crea un nuevo arreglo a partir del arreglo incial con los numero primeros números

    const promoarray = arrayOrdenado.slice(0, numero);
    return promoarray;
}