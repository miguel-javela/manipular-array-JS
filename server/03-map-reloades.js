const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

console.log('original', orders)
const rta = orders.map(item => item.total)
console.log('rta',rta)

//const rta2 = orders.map(item => {
//     item.tax = .19;
//     return item;//al hacer una modificacion al objeto original y retornar este, lo que hacemos es copiar la referencia en memoria
//                 haciendo que el origninal se modifique
// })
// console.log('original', orders)
// console.log('rta2',rta2)

const rta3 = orders.map(item => {
    //retornamos un objeto nuevo donde no se copia la referencia en memoria y tomamos sus elementos con el 
    //spread operation
    return {
        ...item,
        tax: .19
    };
});
console.log('original', orders);
console.log('rta3',rta3);