// JS VARIABLES

/*var Rocky, age, is;
Rocky = "myname";
age = 24;
is = true;

console.log(Rocky + 'is rocky ' + ' my age is' + age + is);
 alert(Rocky + 'is rocky ' + ' my age is' + age + is);

var lastName = prompt('whats his last name');

console.log(lastName);

var FirstName = "John";
var LastName = "Dash";
var FullName =  FirstName + LastName;

alert(FullName);*/

// JS OPERATOR


// var BirthYear = 1995;
// var RockyDob = BirthYear - 24;
// var BhaiDob = BirthYear -29;

// console.log(BhaiDob);


// var firstName = 'john';
// var LastName ='Dash';
// console.log('The Full Name Is' + ' ' + firstName + ' ' + LastName);
// var full = firstName + LastName;
// console.log(full)

// var Price1, price2, Total;
// price2 = 60;
// Price1 = 50;

// Total = Price1 * price2;

// console.log("Total Price Is" + ' ' + Total);

// var x = 56;
// var y = 5;
//  x **= 6;
// console.log(x);

// var x , y , z , l;
// x = 5;
// y = 6;
// z = "hi"
// x >>= y;
// console.log(l)

var firstName = 'JOhn "digol"';
var LastName = 'JOhn "digol"';
var MdilName = 'JOhn "digol"';
console.log(firstName + '<br/>' + LastName + MdilName);

var x, y, z;
x = 5;
y= 6;
 z = 5;
 console.log(x == z);

 // JS ARRAY

 var k = [65 , 57 , 85];
 console.log(k[2]);

 var person = {firstName:'jogn', LastName:'small', age:66};
 person = "null";
 console.log(person.age);

 var s = "";
 console.log(s);

 // IF ELSE

//  var my = 'Ram';
//  var status = "single";
//  if (status === 'married'){
//      console.log(my + ' '+ 'is married');
//  } 
//  else{
//      console.log(my + " " +"will marry soon");
//  }

var x = 54;
var y = 65;
if(x == y){
    console.log(x +'is big of 65');
}
else{
    console.log(y + "is big than 54");
}

// BOOLEAN

var Name = "jogn";
var age = 15;

if(age == 15 && age >20){
    console.log(Name + 'is a you');
}
else if (age >=15 && age >25){
    console.log(Name + 'is  a teenager');
}
else if (age == 15 && age <20){
    console.log(Name + 'is  a son');
}
else{
    console.log(Name + "is a Man ");
}


// TERNARY OPERATOR 

var Name= "john";
var age = 15;

age>=15 ? console.log(Name + ' he drinks ') : console.log(Name + 'jusice' );

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// SWITCH STATEMENT

var job = "goo";
switch(job){
    case 'Teacher':
    case 'good':
        console.log(Name + 'is a teacher');
        break;
    case 'Driver':
    console.log(Name + 'is a Driver');
    break;
    default:
        console.log(Name + "is a good amsn")
}

// SWITCH TASK

var day = new Date().getDay();
switch(day){
    case 0:
        console.log('Today is' + day);
        break;
        case 1:
            console.log('Today is' + day);
            break;
        case 2:
        console.log('Today is' + day);
        break;
        case 3:
        console.log('Today is' + day);
        break;
        case 4:
        console.log('Today is' + day);
        break;
        case 5:
        console.log('Today is' + day);
        break;
        case 6:
        console.log('Today is' + day);
        break;
        default:
            console.log('Have a nice day')
}

// FUNCTION

// var ageJohn = calculateage(2019);

// function calculateage(birthday) {
//     return  birthday - 1995;
// }

// console.log(ageJohn);

// var firstName = "John"; LastName = "Smith"; done = firstName +' '+ LastName; age = 'twenty eight';

// console.log(age);

var name = "jogn"; 
// var lst = prompt ('what is your lat name');
//  console.log(typeof name);
//  console.log (typeof lst);


//  var x , y;

//  x = y = (3 * 5)+2;
//  console.log (x , y);

var massMark = 95; //kg
var heightMark = 1.57; // meter

var massJohn = 45; //kg
var heightJohn =1.26; //meter;


var X = 45;
var Y = 35;

if(X > Y){
    console.log('X is greater than Y\'s');
}
else{
    console.log('y is greater than x');
}


var day;
switch(1){
    case 0:
        console.log('Today is Monday');
        break;
    case 1:
        console.log('Today is Tuesday');
        break;
    default:
        console.log('Today is Dry day');
}

var age = calculateage(1990);
var age1 = calculateage(1980);
var age2 = calculateage(1970);
var age3 = calculateage(1960);
function calculateage(Birthyear){
    return 2019 - Birthyear;
}
console.log(age, age1, age2, age3);


function retirement(year, age){
    var age = calculateage(year);
    var retirement = 60 - age;
}
// console.log(lname + "retired");


// Function statement 

function myfunction(){

}
var agemath = function(job, name){
    switch(job){
        case 'teacher':
            return name + "is a teacher"
        case 'designer':
            return name + "is a designer"
        case 'worker':
            return name + 'is a worker'
        default:
            return name + 'do nothing'
    }
}
console.log(agemath('teache', 'john'));

// ARRAYS

// Initiate Array
var people = ['John', 'Mick', 'Bell'];
var years = new Array(1990, 1995, 2000);

// Mutate Array
years[1] = 1996;
// years[0] = 1995;
// years[years.length] = 20000; // it used for keep the number at last years.length
years.push(2002);
people.unshift('mr');
people.shift();
// people.pop();

console.log(people.indexOf('Mick'));

console.log(people[2] + ' ' + years[2] +' ' + 'old' );
console.log(people.length);
console.log(years);

var is = people.indexOf('Bell') !== -1 ? 'people is a designer' : 'not a designer';

console.log(is);

var bill = [124 , 24 , 268];
function tipcalculator(bill){
    var percentage;
    if (bill < 50){
        percentage =.2;
    } else if (bill > 50 && bill< 200){
        percentage = 5;
    }
    else{
        percentage = .1;
    }
    return percentage * bill;
}

var tips = [tipcalculator(bill[0]), tipcalculator(bill[1]), tipcalculator(bill[2])];

var final = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2] ]

console.log(final[0] + ' '+ 'paid this much'+'<br>',
final[1] + ' '+ 'paid this much'+'<br>',
final[2] + ' '+ 'paid this much'
);

// Objects And Properties

var Rocky = {
    firstName: 'Rocky',
    lastName: 'dash',
    age: 25,
    ismarried: 'true',
    job : ['designer', 'developer', 'editor']
};
var x = 'age';
var y = 'lastName';
Rocky.ismarried = false;
console.log(Rocky.age);
console.log(Rocky[y]);
console.log(Rocky);

//New Object

var roy = new Object();
roy.firstName = 'Mr';
roy.lastName = 'Dash';
roy.age = 26;
console.log(roy);

// Object Methods

var players = {
    firstName: 'john',
    LastName: 'dash',
    age : 26,
    year: 1996,
    family :['ram', 'dev', 'sam'],
    calcAge: function(){
       return 2019 - this.year;
    }
}
console.log(players.calcAge());
// Coding obect

var john = {
    firstName: 'John Smith',
    mass: 95,
    height: 1.72,
    bmical: function(){
       this.jhu = this.mass / (this.height * this.height);
        return this.jhu; 
    }
}


// LOOP

//FOR 
for(var i = 0; i <= 10; i += 2)
{
    console.log(i);
}

var sam = ['mith', 'sama', 'done', 25, 'blue'];

for (var i = 0; i < sam.length; i++){
    console.log(sam[i]);
}
// WHILE

var i = 0;
while(i < sam.length){
    console.log(sam[i]);
    i++;
}

//CONTINUE  & BREAK;

var sam = ['mith', 'sama', 'done', 25, 'blue'];

for (var i = 0; i < sam.length; i++){
    if (typeof sam[i] !== 'string') continue;
    console.log(sam[i]);
}

for (var i = 0; i<sam.length; i++){
    if (typeof sam[i] !== 'string') break;
    console.log(sam[i]);

}

// Loop BackWord

for (var i = sam.length-1; i >= 0; i--){
    console.log(sam[i]);

}

// THIS KEYWORD

// console.log(this);

var ram = {
    name: 'ram',
    year: 1995,
    calcAge: function(){
        console.log(2019 - this.year);
    }
};
ram.calcAge();


var mic = {
    name: 'mic',
    year:2005
}
mic.calcAge = ram.calcAge;
mic.calcAge();

// EX- 2
var Rage = {
    name: 'ram',
    year: 1995,
    calcAge: function(){
        console.log(2020 - this.year);
    }
};
Rage.calcAge();

var sm = {
    name: 'jh',
    year: 2000,
}
sm.calcAge = Rage.calcAge;
sm.calcAge();


