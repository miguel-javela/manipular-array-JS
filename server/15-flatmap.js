const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
    { userId: 2, username: "Mike", attributes: ["Lovely"] },
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
  ];
  
const rta = users.map(user => user.attributes).flat();
console.log('map_flat',rta)

const rta1 = users.flatMap(user => user.attributes);
console.log('rta1',rta1)

const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 3",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
};

//const paso1 = Object.values(calendars)
//console.log('paso1',paso1)
//console.log('paso1.1',paso1[0])

const rta3 = Object.values(calendars).flatMap(item => {
    //console.log('item',item)
    return item.map(date => date.startDate)
});
console.log(rta3)