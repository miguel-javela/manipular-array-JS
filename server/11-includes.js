const pets = ['cat', 'dog', 'bat'];

let includeInArray = false;
for (let index = 0; index < pets.length; index++){
    let element = pets[index];
    if(element === 'dog'){
        includeInArray = true;
        break;
    }
}

console.log('includeInArray',includeInArray)

const rta2 = pets.includes('dog')
console.log('rta2',rta2)