const elements = [1,1,2,2];
const otherElements = [3,3,4,4];

//const newArray = [elements];
//se tiene que hacer asi para no copiar la referencia en memoria
const newArray = [...elements];
for (let index = 0; index < otherElements.length; index++){
    let element = otherElements[index];
    newArray.push(element);
}

console.log('for',newArray)

const rta2 = elements.concat(otherElements);
console.log('rta2',rta2)

const rta3 = [...elements,...otherElements]
console.log('...',rta3);

const rta4 = [...elements, ...'random']// si hago esto el me separa el ramdon como una array y lo concatena
console.log('rta4',rta4)

elements.push(...otherElements);
console.log('elements',elements)