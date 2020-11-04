// Function Constructor

// Create Diff. Objects
var John = {
    name : 'John',
    age : 25,
    yearOfBirth : 1995,
    job : 'Designer'
};

var Ram = {
    name : 'Ram',
    age : 30,
    yearOfBirth : 1990,
    job : 'Engineer'
}

console.log(John, Ram);

// Creat Diff. Objects Using Function Constructor

var Person = function(name, age, yearOfBirth, job){
    this.name = name;
    this.age = age;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calcJob = function(){
    this.age <= 60 ? console.log(this.name + ' ' + 'Is not Retired') :
                     console.log(this.name + ' ' + 'Is Retired');
 }

Person.prototype.lastName = 'Dashian';

var Sam = new Person('Sam', 50, 1995, "teacher");
var Ram = new Person("Ram", 80, 2000, "Designer");
var Don = new Person("Don", 35, 1948, "Developer");

console.log(Sam.lastName, Ram);
Ram.calcJob();
Sam.calcJob();
Don.calcJob();

console.log(Don.lastName);
console.log(Sam.lastName);
console.log(Ram.lastName);

// Object.creat


var newperSOn = {
    calcJob: function(){
        this.age <= 60 ? console.log(this.name + ' ' + 'Is not Retired') :
        console.log(this.name + ' ' + 'Is Retired');
  }
};

var Das = Object.create(newperSOn, {
    name : { value : 'john'},
    age : { value : 25},
    yearOfBirth : { value : 1995}
}); 


// Primitives VS Object

var x = 30;
var y = x;
x = 40;

console.log(x);
console.log(y);


var O = {
    age : 25
};

O.age =  30;
var O1 = O;

console.log(O, O1)


var l = 30;
var Xy = {
    age: 30,
    city:'bbsr'
};

function change(){
    
    Xy.city = 'bam';
}
change();
console.log(Xy.city)


// Functions And Arguments

var years = [1991, 2000, 1995, 1857, 1951];

function arryCalc(years, fn){
    var arre = [];

    for( var i = 0; i < years.length; i++){
        arre.push(fn(years[i]));
    }
    return arre;
}

function calcuAge(years){
    return 2019 - years ;
}
var ages = arryCalc(years, calcuAge);

console.log(ages);


// Function Calls A Function

function interQues(job){
    if(job === 'teacher'){
        return function(name){
            console.log(name + 'is a teacher')
        }
    }
    else if (job === 'Desiger'){
        return function(name){
            console.log(name + 'is a designer')
        }
    }
    else{
        return function(name){
            console.log(name + 'What do you do')
        }
    }
}


var teacherQes = interQues('Designer');
teacherQes('John');


// IIFE (Invoked) Function 

(function(){
    var score = Math.random() * 10;
    console.log(score <= 5)
}())

// Closures

function retirement(retireAge){
    var a = 'Years left'
    return function(yearOfBirth){
        var age = 2020 - yearOfBirth
        console.log((retireAge - age) +  ' ' + a )
    }
};
// var retireIN = retirement(60);
// retireIN(1995)

retirement(2000)(80)

// Bind , Call,  Applay Methods

var Rocky = {
    name : 'Rocky',
    age : 25,
    job : 'designer',
    presentation : function(style,time){
        if(style === 'friendly'){
            console.log('Good' + time + 'i\'m' + this.name + ' here joined as a' + this.job );
        }
        else if(style === 'dressing'){
            console.log('Hey' + time + 'i\'m' + this.name + ' here joined as a' + this.job );

        }
        else{
            console.log('Namastaye' + time + 'i\'m' + this.name + ' here joined as a' + this.job );
        }
    }
};

Rocky.presentation('formal','morning' )

// var text = 'outside';
// function logIt(){
//     console.log(text);
//     var text = 'inside';
// };
// logIt();

function setVar(){
    // inside this function we have a new scope
    // so this variable, declared in this function's scope, won't be available outside the function
    var varInFunction = 'inside a function';

}


// console.log(varInFunction);


var a=b=5;
console.log("a defined? " + (typeof a === 'undefined'));
console.log("b defined? " + (typeof b === 'undefined'));



console.log(rwedr);

var rwedr ="hello";
