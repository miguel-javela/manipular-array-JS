const letters = ['a','b','c','d']

const newArray = [];
for (let index = 0; index < letters.length; index++){
    const element = letters[index];
    newArray.push(element + '++')
}

console.log('original', letters);
console.log('new', newArray)

const newArray1 = letters.map(item => item + '++')

console.log('new', newArray1)