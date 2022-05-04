const elements = ['fire','air','water'];

let rtaFinal = '';
separaror = '--';
for (let index = 0; index < elements.length; index++){
    let element = elements[index];
    rtaFinal = rtaFinal + element +separaror;
}

console.log('for',rtaFinal)

const rta2 = elements.join('--');
console.log('rta2',rta2);

const title = 'Curso de manipulacion de array'
const titleFinal = title.split(' ').join('-').toLowerCase();
console.log(titleFinal)