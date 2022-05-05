const products = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];

const myProducts = [];
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productIndex = products.findIndex(item => item.id === '🍔')
if(productIndex !== -1){
    myProducts.push(products[productIndex]);
    products.splice(productIndex,1)
}

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

//update
const productsV2 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];

const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: 'delicioso'
    }
}

productsAux = [...productsV2]
const productIndex1 = productsAux.findIndex(item => item.id === update.id);
productsAux[productIndex1] = {
    ...productsAux[productIndex1], ...update.changes
}
console.log(productsV2)
console.log(productsAux)