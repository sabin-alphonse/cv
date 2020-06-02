/*****************************
* Variables and data types
*/

/*  var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and MArk';
var if = 23;*/
/*****************************
* Variable Mutation and Type Coercion */
/*var firstName ='John';
var age = 28;
console.log(firstName + '' + age);
var job,isMarried;
job ='teacher';
isMarried ='false';
console.log(firstName+'is a' + age +'year old'+ job + '.Is he Married ' + isMarried);

//Variable Mutation
age = 'twenty eight';
job = 'driver';

alert(firstName+'is a' + age +'year old'+ job + '.Is he Married ' + isMarried);

var lastName = prompt('What is this last Name');
console.log(firstName + '' + lastName);
*/

/***********************
* Basic Operator */
/* var year, yearjohn, yearMark;
now = 2018;
agejohn = 28;
ageMark = 33;

//Math Operators
yearjohn = now - agejohn;
yearMark = now - ageMark;

console.log(yearjohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 18);

//Logical Operators
var johnolder = agejohn < ageMark;
console.log(johnolder);

//typeof Operator
console.log(typeof johnolder);
console.log(typeof agejohn);
console.log(typeof 'Mark is older than john');

var x ;
console.log(typeof x);*/

//
/****************
***** Operator precedence */

/*var now =2018;
var yearjohn = 1998;
var fullAge = 18;

//Multiple Operators

var isFullAge = now - yearjohn >= fullAge; //true
console.log (isFullAge);

//Grouping
var agejohn = now -yearjohn ;
var ageMark = 35;
var average = (agejohn + ageMark) / 2;
console.log(average);

//Multiple assignment

var x,y

x = y = ( 3 + 5 ) * 4 - 6;// 8 * 4 - 6 // 32 - 6 //26
console.log(x,y);


// More Operators

  x *= 2;
  console.log(x);

  x +=10;
  console.log(x);
x--;
console.log(x);*/

/*var massMark =78;
var heightMark =1.68;

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);*/

var firstName = 'John';
var civilStatus = 'married';

if (civilStatus === 'married'){
  console.log(firstName + ' is married');
}
