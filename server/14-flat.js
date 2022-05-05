const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const matriz1 = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

newArray = [];
for (let i = 0; i < matriz1.length; i++){
    const array = matriz1[i];
    for (let j = 0; j < array.length; j++){
        const element = matriz1[i][j];
        newArray.push(element);
    }
}

console.log('for',newArray);

const rta = matriz1.flat(3);
console.log('rta',rta)