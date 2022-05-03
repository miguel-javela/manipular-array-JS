const totales = [1,2,3,4]

let sum = 0;
for (let index = 0; index < totales.length; index++){
    let element = totales[index];
    sum = sum + element;
}
console.log(sum);

//el cero es el estado inicial
//const rta = totales.reduce((sum1,element) => {sum1+element}, 0)// no se porque asi no sirve
const rta = totales.reduce((sum1,element) => sum1+element, 0)
console.log('rta',rta)