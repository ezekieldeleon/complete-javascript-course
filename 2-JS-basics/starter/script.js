/************************************* 
 * Variables and Data Types
**************************************/
/*
var firstName = 'Ezekiel';
console.log(firstName);

var lastName = 'De Leon';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);
 
job = 'Developer';
console.log(job);
*/
/************************************* 
 * Variable mutation and type coercion
**************************************/
/*
var firstName = 'Ezekiel';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Developer';
isMarried = true;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he maried? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'Software Engineer';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he maried? ' + isMarried)

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/
/*************************************
 * Basic operators
*************************************/
/*
var now = 2018;
ageEzekiel = 28;
ageMark = 33;

// Math Operators
var yearEzekiel = now - ageEzekiel;
var yeahMark = now - ageMark;

console.log(yearEzekiel);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operator
var EzekielOlder = ageEzekiel > ageMark;
console.log(EzekielOlder);

// typeof Operator
console.log(typeof EzekielOlder);
console.log(typeof ageEzekiel);
console.log(typeof 'Mark is older than Ezekiel.')
var x;
console.log(typeof x);
*/
/*************************************
 * Operator Precedence
*************************************/
/*
var now = 2018;
var yearEzekiel = 1990;
var fullAge = 28;

// Multiple Operators
var isFullAge = now - yearEzekiel >= fullAge;
console.log(isFullAge);

// Grouping
var ageEzekiel = now - yearEzekiel;
var ageMark = 35;
var average = (ageEzekiel + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x,y);

// More Operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/
/*************************************
 * CODING CHALLENGE 1
*************************************/
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/
/*
var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var bmiJohn = massJohn / (heightJohn * heightJohn);
var bmiMark = massMark / (heightMark * heightMark);

var isMarkBmiGreater = bmiMark > bmiJohn;
console.log("Is Mark's BMI higher than John's? " + isMarkBmiGreater);
*/
/*************************************
 * If/Else Statements
*************************************/
/*
var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon!');
}

var isMarried = true;
if(isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon!');
}

var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var bmiJohn = massJohn / (heightJohn * heightJohn);
var bmiMark = massMark / (heightMark * heightMark);

if(bmiMark > bmiJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
}
*/
/*************************************
 * Boolean Logic
*************************************/
/*
var firstName = 'John';
var age = 20;

if(age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age < 20 && age >= 13){
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/
/*************************************
 * The Ternary Operator and Switch Statement
*************************************/
/*
var firstName = 'John';
var age = 16;

// Ternary Operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// if (age >= 18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

// Switch Statement
var job = 'Software Engineer';
switch(job) {
    case 'Developer':
    case 'Software Engineer':
        console.log(firstName + ' developes apps.');
        break;
    case 'Driver':
        console.log(firstName + ' drives an uber in Bakersfield.');
        break;
    case 'Designer':
        console.log(firstName + ' designs apps.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

age = 40;
switch(true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/
/*************************************
 * Truthy and Falsy values and equaility operators
*************************************/
/*
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;
height = 23;
if (height || height === 0) {
    console.log('Variable is defined.');
} else {
    console.log('Variable has NOT been defined.');
}

// Equaility Operators
if(height === '23') {
    console.log('The == operator does type coercion!')
}
*/
/*************************************
 * CODING CHALLENGE 2
*************************************/
/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
/*
var johnTeamAverageScore = (89 + 120 + 103) / 3;
var markTeamAverageScore = (116 + 94 + 123) / 3;
var maryTeamAverageScore = (97 + 134 + 105) / 3;

if(johnTeamAverageScore > markTeamAverageScore && johnTeamAverageScore > markTeamAverageScore) {
    console.log('John team average score is ' + johnTeamAverageScore + ' which is higher than Mark\'s team average score ' + markTeamAverageScore + ' and is higher than Mary\'s team average score ' + maryTeamAverageScore);
} else if ( markTeamAverageScore > johnTeamAverageScore && markTeamAverageScore > maryTeamAverageScore) {
    console.log('Mark team average score is ' + markTeamAverageScore + ' which is higher than John\'s team average score ' + johnTeamAverageScore + ' and is higher than Mary\'s team average score ' + maryTeamAverageScore);
} else if (maryTeamAverageScore > johnTeamAverageScore && maryTeamAverageScore > markTeamAverageScore) {
    console.log('Mary team average score is ' + maryTeamAverageScore + ' which is higher than Mark\'s team average score ' + markTeamAverageScore + ' and is higher than John\'s team average score ' + johnTeamAverageScore)
} else {
    console.log('It is a draw!')
}
*/
/*************************************
 * Functions
*************************************/
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageEzekiel = calculateAge(1990);
var ageKaylee = calculateAge(1992);
var ageEden = calculateAge(2017);
console.log(ageEzekiel, ageKaylee, ageEden);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
}

yearsUntilRetirement(1990, 'Ezekiel');
*/
/*************************************
 * Function Statements and Epressions
*************************************/
/*
// Fnction Decleration
// function whatDoYouDo(job, firstname) {}

// Function Expression
var whatDoYouDo = function(job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives for uber in Bakersfield.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'John'));
console.log(whatDoYouDo('retired', 'John'));
*/
/*************************************
 * Arrays
*************************************/
/*
// Initialize new array
var names = ['John', 'Mark', 'Ezekiel'];
var years = new Array(1990, 1992, 1919);

console.log(names);
console.log(names.length);

// Mutate array data
names[1] = 'Tom';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];
john.push('Blue'); // Adds to the end of the array.
john.unshift('Mr.'); // Adds in the beginning of the array.
console.log(john);

john.pop();
john.pop(); // Removes the last element of the array.
john.shift(); // Removes the first element of the array.
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer.';
console.log(isDesigner);
*/
/*************************************
 * CODING CHALLENGE 3
*************************************/
/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/
/*
var tipCalculator = function(bill) {
    if(bill < 50){
        return bill * (20/100);
    } else if (bill >= 50 && bill < 200){
        return bill * (15/100);
    } else {
        return bill * (10/100);
    }
}

var bill = [124, 48, 268];
var finalPaid = new Array();
var tips = new Array();

tips.push(tipCalculator(bill[0]));
tips.push(tipCalculator(bill[1]));
tips.push(tipCalculator(bill[2]));
console.log(tips);

finalPaid.push(tipCalculator(bill[0]) + bill[0]);
finalPaid.push(tipCalculator(bill[1]) + bill[1]);
finalPaid.push(tipCalculator(bill[2]) + bill[2]);
console.log(finalPaid);
*/
/*************************************
 * Objects and Properties
*************************************/
/*
// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Mark', 'Joe', 'Bob', 'Issac'],
    job: 'teacher',
    isMarried: true,
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = false;
console.log(john);

// new Object Syntax
var ezekiel = new Object();
ezekiel.name = 'Ezekiel';
ezekiel.birthYear = 1990;
ezekiel['lastName'] = 'De Leon';
console.log(ezekiel);
*/
/*************************************
 * Objects and Methods
*************************************/
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Mark', 'Joe', 'Bob', 'Issac'],
    job: 'teacher',
    isMarried: true,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/
/*************************************
 * CODING CHALLENGE 4
*************************************/
/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/
/*
var john = {
    name: 'John',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass /(this.height * this.height);
        return this.bmi;
    }
}

var mike = {
    name: 'Mike',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass /(this.height * this.height);
        return this.bmi;
    }
}

console.log(mike.calcBMI(), john.calcBMI());

if(mike.bmi > john.bmi) {
    console.log(mike.name + ' has a higher BMI than ' + john.name + '. John BMI:' + john.bmi + ', Mike BMI: ' + mike.bmi);
} else if (john.calcBMI > mike.calcBMI) {
    console.log(john.name + ' has a higher BMI than ' + mike.name + '. John BMI:' + john.bmi + ', Mike BMI: ' + mike.bmi);
} else {
    console.log('They both have the same BMI.')
}
*/
/*************************************
 * Loops and Iterations
*************************************/
/*
// for (var i = 1; i <= 20; i += 2) {
//     console.log(i);
// }

// var john = ['John', 'Smith', 1990, 'designer', false];
// for(var i = 0; i < john.length; i++) {
//     console.log(john[i]);
// }

// While loop
// var i = 0;
// while(i < john.length) {
//     console.log(john[i]);
//     i++;
// }

// continue and break statements.
var john = ['John', 'Smith', 1990, 'designer', false];
// for(var i = 0; i < john.length; i++) {
//     if(typeof john[i] !== 'string'){
//         break;
//     }
//     console.log(john[i]);
// }

// Looping backwards
for(var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
*/
/*************************************
 * CODING CHALLENGE 5
*************************************/
/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/
/*
var john = {
    bills: [124, 48, 268, 180, 42],
    billsWithTips: [],
    tips: [],
    calcTip: function() {
        var tips;
        for(var i = 0; i < this.bills.length; i++) {
            var bill = this.bills[i];
            if(bill < 50){
                tip = bill * (20/100);
            } else if (bill >= 50 && bill < 200){
                tip = bill * (15/100)
            } else {
                tip = this.bills[i] * (10/100)
            }
            this.tips.push(tip);
            this.billsWithTips.push(tip + bill);
        }
    }
}

john.calcTip()
console.log(john.bills);
console.log(john.billsWithTips);
console.log(john.tips);
*/