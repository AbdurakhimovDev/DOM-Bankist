 'use strict';
//
// const Person = function (firstName,birthYear){
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//     this.calcAge = function (){
//         console.log(2037- this.birthYear);
//     };
// };
// const jonas = new Person('Jonas',1991);
// console.log(jonas);
//
// const matilda = new Person('Matilda',2017,);
// console.log(matilda.calcAge)
// const jack = new Person('Jack',1975);
// console.log(matilda,jack);
//
// const Car = function (make,speed){
//     this.make = make;
//     this.speed = speed;
//
// };
//
// Car.prototype.accelerate = function (){
//     this.speed +=10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
// };
//
// Car.prototype.brake = function (){
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
// };
//
// const bmw = new Car('BMW',120);
// const mercedec = new Car('Mercedes',95);
//
// bmw.accelerate();
// mercedec.accelerate();
// bmw.brake();
// bmw.accelerate();

 // class PersonCl {
 //     constructor(firstName,birthYear) {
 //         this.firstName = firstName;
 //         this.birthYear = birthYear;
 //     }
 //  calcAge(){
 //         return 2037 - this.birthYear;
 //  }
 // }
 //
 // const jessica = new PersonCl('Jessica',1996);
 // console.log(jessica.calcAge())
 // console.log(jessica);
 // PersonCl.prototype.greet = function (){
 //     console.log(`Hey ${this.firstName}`);
 // };
 // jessica.greet();

 class Account {
     constructor(owner,currency,pin) {
         this.owner = owner;
         this.currency = currency;
         this.pin = pin;
         this.movements = [];
         this.locate = navigator.language;

         console.log(`Thanks for opening an account, ${owner}`)
     }
     deposit(val){
         this.movements.push(val);
     }
     withdraw(val){
         this.deposit(-val);
     }
     approveLoan(val){
         return true;
     }
     requestLoan(val){
         if (this.approveLoan(val)){
             this.deposit(val);
             console.log(`loan approved`);
         }
     }
 }
 const acc1 = new Account('Jonas','EUR',1111);
 //console.log(acc1);

 // acc1.movements.push(250);
 // acc1.movements.push(-140);

 acc1.deposit(250);
 acc1.withdraw(140);
 acc1.requestLoan(1000);
 acc1.approveLoan(1000)
 console.log(acc1);

