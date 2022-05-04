const numbers = [1,30,39,29,10,13];


let rta = true;
for (let index = 0; index < numbers.length; index++){
    let element = numbers[index];
    if(element >= 40){
        rta = false;
        break;
    }
}
console.log(rta);

const rta2 = numbers.every(item => item <= 40);
console.log('rta',rta);

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 8,
    },
];

const rta3 = team.every(item => item.age < 15)
console.log(rta3)