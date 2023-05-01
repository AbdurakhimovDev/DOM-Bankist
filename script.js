 'use strict';
//
// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;
// //
// // const BMIMark = massMark/heightMark ** 2;
// // const BMIJohn = massJohn/(heightJohn ** 2);
// //
// // const markHigherBMI = BMIMark > BMIJohn;
// // console.log(markHigherBMI);
// //
// // console.log(BMIMark, BMIJohn);
// // //
// // // const firstName = 'Jonas';
// // // const job = 'teacher';
// // // const birthYear = 1991;
// // // const year = 2037;
// // //
// // // const jonas = "I'm +" + firstName + ', a ' + (year - birthYear) + " years old " + job + '!';
// // // console.log(jonas);
// // //
// // // const jonasNew = `I'm ${firstName} + a + ${year - birthYear} years old ${job}!`;
// // // console.log(jonasNew);
// // //
// // // console.log(`Just a regular string...`);
// // //
// // // console.log('String with \n\multipie\n\lines');
// //
// //
// // if (BMIJohn>BMIMark){
// //     console.log("John's BMI is higher than Mark's!")
// // }else{
// //     console.log("Mark's BMI is higher than John's!")
// //
// // }
//
// // const inputYear = '1991';
// // console.log(Number(inputYear),inputYear);
// // console.log(Number(inputYear)+20);
// //
// // console.log(Number('Jonas'));
// // console.log(typeof NaN);
// //
// // console.log(String(23),24);
//
// // console.log(Boolean(0));
// // console.log(Boolean(undefined));
// // console.log(Boolean('Jonas'));
// // console.log(Boolean({}));
// // console.log(Boolean(''));
// //
// // const money = 100;
// // if (money){
// //     console.log("Don't spend it all money");
// // }else{
// //     console.log("You should get a job!");
// // }
// //
// // let hight;
// // if (hight){
// //     console.log("YAY! Height is defind");
// // }else{
// //     console.log("Height is UNDEFINED");
// // }
//
// // let favourite = Number(prompt("what is favourite number"));
// // console.log(favourite);
// // if (favourite ===23){
// //     console.log('Cool! 23 is an amazing number!');
// // }else if (favourite ===7){
// //     console.log('7 is also a cool number');
// // }else if (favourite ===9){
// //     console.log('9 is also a cool number');
// // }else{
// //     console.log('Number is not 23 or 7 or 9');
// // }
// // if (favourite !== 23) console.log('why is 23');
//
// // const hasDriversLicense =true;
// // const hasGoodVision = true;
// //
// // console.log(hasGoodVision && hasDriversLicense);
// // console.log(hasGoodVision || hasDriversLicense);
// // console.log(!hasDriversLicense);
// //
// // if (hasDriversLicense && hasGoodVision){
// //     console.log('Sarah is able to drive');
// // }else{
// //     console.log('Someone else shold drive...')
// // }
// // const isTired = true;
//
// // const scoreDolphins = (96+108+89)/3;
// // const scoreKoalas = (88+91+110)/3;
// // console.log(scoreDolphins,scoreKoalas);
// //
// // if(scoreDolphins > scoreKoalas){
// //     console.log('Dolphins win the trophy')
// // }else if (scoreKoalas > scoreDolphins){
// //     console.log('Koalas win the trophy');
// // }else if (scoreKoalas === scoreDolphins){
// //     console.log('Both win the trophy');
// // }
//
// //Bonus 1
// // const scoreDolphins = (97+112+101)/3;
// // const scoreKoalas = (109+95+106)/3;
// // console.log(scoreDolphins,scoreKoalas);
// // if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){
// //     console.log('Dolphins win the trophy');
// // }else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
// //     console.log('Koalas win the trophy');
// // }else if (scoreKoalas === scoreDolphins && scoreDolphins >= 100 && scoreKoalas >= 100){
// //     console.log('Both win the trophy!');
// // }else {
// //     console.log('No one wins the trophy')
// // }
//
// // const day = 'monday';
// // switch (day){
// //     case 'monday':
// //         console.log('Plan course structure');
// //         console.log('Go to coding meet up');
// //         break;
// //     case 'tuesday':
// //         console.log('Prapare theory videos');
// //         break;
// //     case 'wednesday':
// //         break;
// //     case 'thursday':
// //         console.log('write code examples');
// //         break;
// //     case 'friday':
// //         console.log('Record videos');
// //         break;
// //     case 'saturday' :
// //         break;
// //     case 'sunday':
// //         console.log('Enjoy the weekend :D')
// //         break;
// //     default:
// //         console.log('Not a valid day! ')
// // }
//
// // const age = 23;
// // age >= 18 ? console.log('I like to drink wine') :
// //     console.log('I like to drink water');
// //
// // const drink = age >= 18 ? 'wine' : 'water';
// // console.log(drink);
// //
// // let drink2;
// // if (age >=18){
// //     drink2 = 'wine';
// // }else {
// //     drink2 = 'water';
// // }
// // console.log(drink2);
// //
// // console.log(`I like to drink ${age >= 18 ? 'wine' : 'water' }`)
//
// // const bill = 275;
// // const tip = bill <= 300 && bill >=50 ? bill * .15 : bill * .20;
// // console.log(tip);
//
// // //Function declaration
// // function calcAge1(birhtYear){
// //     return 2037-birhtYear;
// // }
// // const age1 = calcAge1(1991);
// //
// // //Function expression
// //
// // const calcAge2 = function (birthYear){
// //     return 2037-birthYear;
// // }
// // const age2 = calcAge2(1991);
// // console.log(age1,age2);
//
// //Arrow Function
//
// // const calcAge3 = (birthYear)=> 2037 - birthYear;
// // const age3 = calcAge3(1991);
// // console.log(age3);
//
// // const yearsUntilRetirement = (birthYear,firstName)=>{
// //     const age = 2037 - birthYear;
// //     const retirement = 65 - age;
// //     // return retirement;
// //     return `${firstName} retires in ${retirement} years`;
// // }
// // console.log(yearsUntilRetirement(1991,'Jonas'))
// // console.log(yearsUntilRetirement(1991,'BOb'))
//
// // const cutPieces = function (fruit){
// //     return fruit * 4;
// // };
// // const fruitProcessor = function (apples,oranges){
// //     const applePieces = cutPieces(apples);
// //     const orangePieces = cutPieces(oranges);
// //
// //     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} piece of orange`;
// //     return juice;
// // };
//
// // const calcAge = function (birthYear){
// //     return 2037 - birthYear;
// // }
// // const yearsUntilRetirement = (birthYear,firstName)=>{
// //     const age = calcAge(birthYear);
// //     const retirement = 65-age;
// //     if (retirement > 0){
// //         return retirement;
// //     }else {
// //         return -1;
// //     }
// //    // return `${firstName} retires in ${retirement} years`;
// // }
// // console.log(yearsUntilRetirement(1991,'Bob'))
//
// // const calcAverage = (a,b,c)=> (a + b + c)/3;
// // let scoreDolphins = calcAverage(44,23,71);
// // let scoreKoalas = calcAverage(65,54,49);
// // console.log(scoreDolphins,scoreKoalas);
// //
// // const checkWinner = function (avgDolphins,avgKoalas){
// //     if (avgDolphins >= 2 * avgKoalas){
// //         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
// //     }else if (avgKoalas >= 2 * avgDolphins){
// //         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
// //
// //     }else {
// //         console.log('No team win');
// //     }
// // }
// //
// // checkWinner(scoreDolphins,scoreKoalas);
//
// // const friends = ['Michael','Steven','Peter'];
// // const newLength = friends.push('Jay');
// // console.log(friends);
// // console.log(newLength)
//
// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // let fruit = fruits.at(3);
// // console.log(fruit);
//
// // const arr1 = ["Cecilie", "Lone"];
// // const arr2 = ["Emil", "Tobias", "Linus"];
// // const children = arr1.concat(arr2);
// // console.log(children);
//
// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // let text = fruits.constructor;
// // console.log(text);
//
// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// //  fruits.copyWithin(2, 0);
// // console.log(fruits);
//
// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // const isMango = fruits.includes("Mango",3);
// // console.log(isMango);
//
// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // let index = fruits.indexOf("Apple");
// // console.log(index);
//
// // const calcTip= function(bill){
// //     return bill >= 50 && bill <= 300 ? bill * 0.15:
// //         bill * 0.2;
// // }
// // //const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// //
// // const bills = [125,555,44];
// // const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]
// // const totals = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]]
// // console.log(bills,tips,totals);
//
// // const jonas = {
// //     firsName: 'Jonas',
// //     lastName: 'Schmedtmann',
// //     age: 2037 - 2001,
// //     job: 'student',
// //     friends: ['Behzod', 'Adham', 'Diyor'],
// // };
// // jonas.location = 'Portugal';
// // console.log(jonas);
// //
// // const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName,age,job and friends ');
// // console.log(jonas[interestedIn]);
// //
// // if (jonas[interestedIn]){
// //     alert(jonas[interestedIn]);
// // }else {
// //     alert('Wrong requests Choose between firstName, lastName,age,job and friends ')
// // }
//
// // const fazliddin = {
// //     firstName:'Fazliddin',
// //     lastName:'Abduraximov',
// //     birthYear:1991,
// //     job:'student',
// //     friends:['Behzod','Adham','Diyor'],
// //     hasDriversLicense:false,
// //    /* calcAge:function (birthYear){
// //         return 2037 - birthYear;
// //     }*/
// //     calcAge:function (){
// //         this.age = 2037 - this.birthYear;
// //         console.log(this);
// //         return this.age;
// //     },
// //     getSummary:function (){
// //         return `${this.firstName} is a ${this.age} - year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' :'no'} driver's license `
// //     }
// // };
// // console.log(fazliddin.calcAge());
// // console.log(fazliddin.getSummary())
// // //console.log(fazliddin['calcAge'](1991))
//
// // const mark = {
// //     fullName:'Mark Miller',
// //     mass :78,
// //     height:1.69,
// //     calcBMI : function (){
// //         this.bmi = this.mass / this.height ** 2;
// //         return this;
// //     }
// // };
// //
// // const john = {
// //     fullName: 'John Smith',
// //     mass: 92,
// //     height: 1.95,
// //     calcBMI:function (){
// //         this.bmi = this.mass / this.height ** 2;
// //         return this.bmi;
// //     }
// // };
// //
// // john.calcBMI();
// // mark.calcBMI();
// //
// // if (mark.bmi > john.bmi){
// //     console.log(`${mark.fullName}'s BMI (${mark.bmi})`);
// // }else if (mark.bmi < john.bmi) {
// //     console.log(`${john.fullName}'s BMI (${john.bmi})`);
// // }
//
// // for (let i = 1; i <= 10; i++) {
// //     console.log(`Lifting weights repetition ${i}` )
// // }
//
// // const jonas = [
// //   'Jonas',
// //   'Schmedtmann',
// //   2037 - 1991,
// //   'teacher',
// //   ['Michael', 'Peter', 'Steven'],
// //   true,
// // ];
// // const types = [];
// // for (let i = 0; i < jonas.length; i++) {
// //     //Reading from jonas array
// //     console.log(jonas[i],typeof jonas[i]);
// //     //Filling types array
// //    // types[i] = typeof jonas[i];
// //
// //     types.push( jonas[i]);
// // }
// // console.log(types);
// //
// //
// // const years = [1991,2007,1969,2020];
// // const age = [];
// //
// // for (let i = 0; i < years.length; i++) {
// //     age.push(2037 - years[i]);
// //
// // }
// // console.log(age);
// // console.log('---- ONLY STRINGS----');
// // for (let i = 0; i < jonas.length; i++) {
// //     if (typeof jonas[i] !== 'string') continue;
// //     console.log(jonas[i],typeof jonas[i]);
// // }
// // console.log('---BREAK WITH NUMBER ---')
// // for (let i = 0; i < jonas.length; i++) {
// //     if (typeof jonas[i] === 'number') break;
// //     console.log(jonas[i],typeof jonas[i]);
// // }
//
// // for (let i = jonas.length-1; i >=0 ; i--) {
// //     console.log(jonas[i]);
// // }
//
// // let dice = Math.trunc(Math.random() * 6) + 1;
// // while (dice !== 6) {
// //   console.log(`you rolled a ${dice}`);
// //   dice = Math.trunc(Math.random() * 6) + 1;
// //   if (dice === 6) console.log('Loop is about to end...');
// // }
// //
// // const calcAge = (bithYear) => 2027 - bithYear;
//
// // const measureKelvin = function (){
// //   const measurement = {
// //     type: 'temp',
// //     until: 'celsius',
// //     value: prompt('Degrees celsius')
// //   };
// //   console.table(measurement);
//
// //   const kelvin = measurement.value + 273;
// //   return kelvin;
// // };
// // console.log(measureKelvin());
//
// // const calculator = document.querySelector('.calculator');
// // const display = document.querySelector('#display');
// // const buttons = document.querySelectorAll('button');
//
// // let firstNumber = '';
// // let secondNumber = '';
// // let operator = '';
//
// // buttons.forEach((button) => {
// //   button.addEventListener('click', (e) => {
// //     const buttonValue = e.target.innerText;
//
// //     if (
// //       buttonValue === '+' ||
// //       buttonValue === '-' ||
// //       buttonValue === '*' ||
// //       buttonValue === '/'
// //     ) {
// //       operator = buttonValue;
// //     } else if (buttonValue === '=') {
// //       secondNumber = display.value;
// //       display.value = eval(firstNumber + operator + secondNumber);
// //     } else {
// //       display.value += buttonValue;
// //     }
// //   });
// // });
//
// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// // for (let i = 0let arr = [1,2,3,4,5,6,7,8,9,0];
// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }; i < arr.length - 1; i++) {
// //   console.log(arr[i]);
// // }
//
// // function calcAge(birhtYear) {
// //   const age = 2037 - birhtYear;
//
// //   function printAge() {
// //     const output = `${firstName}, you are ${age},
// //         born in ${birhtYear}`;
// //   }
// //   printAge();
//
// //   return age;
// // }
//
// // const firsName = 'Jonas';
// // calcAge(1991);
//
// // console.log(me);
// // //console.log(job);
// // //console.log(year);
// //
// // var me = 'Fazliddin';
// // //let job = 'teacher';
// // //const year = 1991;


// const restaurant = {
//     name:'Classico Italiano',
//     location:'Via Tavanti 23, Frirenze, Italy',
//     categories:['Italian','Pizzeri','Vegetarian','Organic'],
//     starterMenu:['Focaccia','Bruschetta','Garlic','Bread','Caprese Salad'],
//     mainMenu:['Pizza','Pasta','Risotto'],
//     openingHours:{
//         thu: {
//             open:12,
//             close:22,
//         },
//         fir: {
//             open:11,
//             close:23,
//         },
//         sat: {
//             open:0,
//             close:24,
//         },
//     },
//     order:function (starterIndex, mainIndex) {
//         return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
//     },
//     orderDelivery: function (){
//         console.log(obj);
//     },
//
// }
//
// restaurant.orderDelivery({
//     time:'22:30',
//     address: 'Via del Sole, 21',
//     mainIndex: 2,
//     starterIndex: 2,
// })

// const arr = [2,3,4];
// const [x,y,z] = arr;
// console.log(x,y,z);
// console.log(arr);

// let [main,secondary] = restaurant.categories;
// console.log(main,secondary);

// let  temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);

// [main,secondary] = [secondary,main]
// console.log(main,secondary);
//
// const [starter,mainCource] = restaurant.order(2,0);
// console.log(starter,mainCource);


// const nested = [2,4,[5,6]];
// // const [i, , j] = nested;
// //  console.log(i,j);
// const [i, ,[j,k]] = nested;
// console.log(i,j,k);

//  const {name, openingHours, categories } = restaurant;
//  console.log(name,openingHours,categories);
//
//  const {
//      name: restaurantName,
//      openingHours: hours,
//      categories: tags,
//  } = restaurant;
// console.log(restaurantName,hours,tags);

// let a = 111;
// let b = 999;
// const obj = {a:23, b:7, c:14};
//  ({a,b} = obj);
//  console.log(a,b);


 // const {fir: {open: o,close: c}} = openingHours;
 // console.log(o,c);


 // const arr = [7,8,9];
 // const badNewArr = [1,2,3,arr[0],arr[1],arr[2]];
 // console.log(badNewArr);
 //
 // const newArr = [1,2,3,...arr];
 // console.log(newArr);
 //
 // const str = 'Jonas';
 // console.log([...str]);
 // const letters = [...str,' ','s.'];
 // console.log(letters);


 // const game = {
 //  team1:'Bayern Munich',
 //  team2:'Borrussia Dortmund',
 //  players:[
 //      ['Neuer',
 //       'Pavard',
 //       'Martinez',
 //       'Alaba',
 //       'Davies',
 //       'Kimmich',
 //       'Goretzka',
 //       'Coman',
 //       'Muller',
 //       'Gnarby',
 //       'Lewandowski'
 //      ],
 //
 //       ['Neuer1',
 //        'Pavard1',
 //        'Martinez1',
 //        'Alaba1',
 //        'Davies1',
 //        'Kimmich1',
 //        'Goretzka1',
 //        'Coman1',
 //        'Muller1',
 //        'Gnarby1',
 //        'Lewandowski1'
 //       ]
 //      ],
 //  score:'4:0',
 //  scored:['Lewandowski','Gnarby','Lewandowski','Coman1'],
 //  date:'Now 9th,20370,',
 //  adds: {
 //   team1:1.33,
 //   x:3.25,
 //   team2:6.25,
 // }
 // };
 //
 // const [players1,players2] = game.players;
 // console.log(players1,players2);
 //
 // const [gk,fieldPlayers] = players1;
 // console.log(gk,fieldPlayers);
 //
 // const allPlayers = [...players1,...players2];
 // console.log(allPlayers);
 //
 // const players1Final = [...players1,'Thiago','Countinho','Periscic'];
 //
 // const {adds:{team1,x:draw,team2}} = game;
 // console.log(team1,draw,team2);

// const rest = new Map();
// rest.set('name','Classico Italiano');
// rest.set(1,'Firenze,Italy');
// rest.set(2,'Lisbon,Portugal');
// console.log(rest);
// rest.
// set('categories',['Italian','Pizzeria','Vegetarian','Organic']).
// set('Open',11).
// set('close',23).
// set(true,'we are open :D').
// set(false,'we are closed :(');
//  console.log(rest);
//
//  console.log(rest.get('name'));
//  console.log(rest.get(true));
//  console.log(rest.get(1));
//
//  const time = 21;
//  console.log(rest.get(time > rest.get("open") && time < rest.get('close')));
//
//  console.log(rest.has('categories'));
//  rest.delete(2);
//
//  const arr = [1,2];
//  rest.set(arr,'Test');
//  console.log(rest.size);
//  console.log(rest.get(arr));

 // const question = new Map([
 //     ['question','What is the best programming language in the world'],
 //     [1,'C'],
 //     [2,'Java'],
 //     [3,'JavaScript'],
 //     ['correct',3],
 //     [true,'Correct'],
 //     [false,'Try again'],
 // ]);
 // console.log(question.get('question'));
 // for (const [key,value] of question) {
 //  if (typeof key === 'number') console.log(`Answer ${key}:${value}`);
 // }
 // const answer = Number(prompt('Your answer'));
 // console.log(answer);
 // console.log(question.get(question.get('correct')===answer));

 // const airline = 'TAP Air Portugal';
 // const plane = 'A320';
 // console.log(plane[0]);


 // const passenger = 'jOnAS';
 // const passengerLower = passenger.toLowerCase();
 // const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
 // console.log(passengerCorrect);

 // const priceGB = '288,97E£';
 // const priceUS = priceGB.replace('£','$').replace(',','.');
 // console.log(priceUS);

 // const plane = 'Airbus A32neo  ';
 // console.log(plane);
 // console.log(plane.includes('A320'));
 // console.log(plane.includes('Booeing'));
 // console.log(plane.startsWith('Air'));
 // console.log(plane.trimEnd(' '));


 // console.log('a+very+nice+string'.split('+'));
 // console.log('Jonas Schmedtman'.split(' '));
 //
 // const [firstName, lastName] = 'Jonas Schmedtman'.split(' ');
 //
 // const newName = ['Mr.',firstName,lastName.toUpperCase()].join(' ');
 // console.log(newName);
 //
 // const capitalizeName = function (name){
 //  const names = name.split(' ');
 //  let namesUpper = [];
 //  for (const n of names){
 //   //namesUpper.push(n[0].toUpperCase() + n.slice(1));
 //   namesUpper.push(n.replace(n[0],n[0].toUpperCase()));
 //  }
 //  console.log(namesUpper.join(' '));
 // };
 // capitalizeName('jessica ann smith davis');
 // capitalizeName('jonas Schmedtman');
 //
 //
 // const message = 'Go to gate 23!';
 // console.log(message.padStart(25,'+'));
 // console.log('Jonas'.padStart(25,'+'));
 //
 // const maskCreditCard = function (number){
 //  const str = number + '';
 //  const last = str.slice(-4);
 //  return last.padStart(str.length, '*');
 //
 // };
 // console.log(maskCreditCard(34434245576765));
 // console.log(maskCreditCard(34343434343434347656));
 // console.log(maskCreditCard('4343434343434343434434324'));
 //
 //
 //
 // const message2 = 'Bad weather...All Departues';
 // console.log(message2.repeat(5));
 //
 // const planesInLine = function (n){
 //  console.log(`There are ${n} planes in line ${n}`);
 // }



 // const bookings = [];
 //
 // const createBooking = function (
 //     flightNum,
 //     numPassenger = 1,
 //     price = 199 * numPassenger
 // ){
 //     const booking = {
 //         flightNum,
 //         numPassenger,
 //         price,
 //     };
 //     console.log(booking);
 //     bookings.push(booking);
 // };
 // createBooking('Lh123');
 // createBooking('Lh123',5,200);
 // createBooking('LH123',1000);
 // createBooking('LH123',undefined,1000);


 //
 // const flight = 'LH123';
 // const jonas = {
 //     name: 'Jonas Schmedtmann',
 //     passport: 23456789,
 // };
 //
 // const checkIn = function (flightNum,passenger) {
 //     flightNum = 'LH999';
 //     passenger.name = 'Mr. ' + passenger.name;
 //
 //     if (passenger.passport === 23456789){
 //         console.log('Checked in');
 //     }else{
 //         console.log('Wrong passport!')
 //     }
 // };
 // checkIn(flight,jonas);
 // console.log(flight);
 // console.log(jonas);
 //
 // const flightNum = flight;
 // const passenger = jonas;
 //
 // const newPassport = function (person){
 //     person.passport = Math.trunc(Math.random() * 100000000)
 // };
 // newPassport(jonas);
 // checkIn(flight,jonas);

 // const gettingArr = (getting)=> (name)=>console.log(`${getting} ${name}`);
 // gettingArr('Hello')('Jonathan')

 // const lufthansa = {
 //     airline: 'lufthansa',
 //     iataCode: 'LH',
 //     bookings: [],
 //     book(flightName,name){
 //         console.log(
 //             `${name} booked a seat on ${this.airline}
 //             flight ${this.iataCode} ${flightName}`
 //         );
 //         this.bookings.push({flight: `${this.iataCode} ${flightName}`,name});
 //     },
 // }
 //
 // lufthansa.book(230,'Jonas Schmedtman');
 // lufthansa.book(635,'John Smith');
 // console.log(lufthansa);
 //
 // const eurowings = {
 //     name: 'Eurowings',
 //     iataCode: 'Ew',
 //     bookings: [],
 // };
 //
 // const book = lufthansa.book;
 //
 // book.call(eurowings,23,'Sarah Williams');

 // const addTax = (rate,value) => value + value * rate;
 // console.log(addTax(0.1,200));
 //
 // const addVAT = addTax.bind(null,0.23);
 // console.log(addVAT(100));
 // console.log(addVAT(23));
 //
 // const addTaxRate = function (rate) {
 //     return function (value){
 //         return value + value * rate;
 //     };
 //
 // };
 //
 // const addVat2 = addTaxRate(0.23);
 // console.log(addVat2(100));
 // console.log(addVat2(23));

 // const poll = {
 //     question: 'What is your favourite programmning language?',
 //     options: ['0:JavaScript','1:Python','2:Rust','3:C++'],
 //     answers: new Array(4).fill(0),
 // }


//  const secureBooking = function (){
//      let passengerCount = 0;
//      return function (){
//          passengerCount++;
//          console.log(`${passengerCount} passengers`)
//      };
//  };
// secureBooking();
// secureBooking();
 // const booker = secureBooking();
 // booker();
 // booker();
 // booker();


 // let arr = ['a','b','c','d','e'];

 // console.log(arr.slice(2));
 // console.log(arr.slice(2,4));
 // console.log(arr.slice(-2));
 // console.log(arr.slice(-1));
 // console.log(arr.slice(1,-2));
 //
 // console.log(arr.slice());
 // console.log([...arr]);
 //
 // // SPLICE
 //
 // console.log(arr.splice(2));
 // console.log(arr);
 // console.log(arr.splice(2));

 //REVERSE
 // let arr = ['a','b','c','d','e'];
 // const arr2 = ['j','e','g','h','f'];
 // console.log(arr2.reverse());
 // console.log(arr2);
 //
 // //CONCAT
 // const letters = arr.concat(arr2);
 // console.log(letters);
 // console.log([...arr,...arr2]);
 //
 // //JOIN
 // console.log(letters.join(' '));

 // const movements = [200,450,-400,3000,-650,-130,70,1300];
 // for (const [i,movement] of movements.entries()) {
 //     if (movement > 0){
 //         console.log(`Movement ${i+1} You deposited ${movement}`);
 //     }else{
 //         console.log(`Movement ${i+1} You withdrew ${Math.abs(movement)}`);
 //     }
 // }
 //
 // console.log('------------------FOREACH---------------')
 //
 // movements.forEach((movement,index,array) =>{
 //     if (movement > 0){
 //         console.log(`Movement ${index+1} You deposited ${movement} Array ${array}`);
 //     }else {
 //         console.log(`Movement ${index+1} You withdrew ${Math.abs(movement)}`);
 //     }
 // })


 // const currencies = new Map([
 //     ['USD','United States dollar'],
 //     ['EUR','Euro'],
 //     ['GBP','Pound sterling']
 // ]);
 //
 // currencies.forEach(function (value, key, map){
 //     console.log(`${key}: ${value}`);
 // });

 const currenciesUnique = new Set(['USD','GBP','USD','EUR','EUR']);
 currenciesUnique.forEach(function (value, key, map){
     console.log(`${value}: ${key}`);
 })
