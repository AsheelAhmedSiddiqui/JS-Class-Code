// "use strict";

// /* var fruits = ["orange", "banana", "mango", "guava"];
// var userInput = +prompt("Enter a number");
// console.log(fruits[userInput - 1]);

// // if (userInput < fruits.length) {
// //   fruits = [prompt("enter your value")];
// //   console.log(fruits);
// // } else {
// //   console.log("This number is not exist in my array");
// // }

// for (let i = 0; i < fruits.length; i++) {
//   if (userInput < fruits.length) {
//     fruits[userInput - 1] = prompt("enter a value");
//     console.log(fruits);
//     break
//   } else {
//     console.log("enter a valid number");
//   }
// }
//  */

// /* Nested loop */
// /* for (let i = 0; i < 10; i++) {
//   document.write(`${i} <br> <br>`);
//   for (var j = 0; j < 5; j++) {
//     document.write(`${j} <br>`);
//   }
// } */
// // var userInput = +prompt("Enter a table Number");
// // var Tablelenght = +prompt("Enter a lenght of table")
// // for (let userInput; userInput <= Tablelenght; userInput++) {
// //   for (let j = 1; j <= Tablelenght; j++) {
// //     document.write(`${userInput} X ${j} = ${userInput * j} <br>`);
// //   }
// //   document.write("<br>");
// // }

// // for (let i = 1; i < 10; i++) {
// //   document.write(i);
// //   for(let j = 1; j <= )

// // }

// /* for (let i = 1; i <= 100; i += 10) {
//   document.write(i + "<br>");
//   for (let j = i; j <= i; j++);
//   document.write(j + "<br>");
// } */

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];

// /* if (firstNames[0][0] === lastNames[0][0]) {
//   fullNames.push(firstNames[0] + lastNames[0]);
// } else if (firstNames[1][0] === lastNames[1][0]) {
//   fullNames.push(firstNames[1] + lastNames[1]);
// } else if (firstNames[2][0] === lastNames[2][0]) {
//   fullNames.push(firstNames[2] + lastNames[2]);
// } else if (firstNames[3][0] === lastNames[3][0]) {
//   fullNames.push(firstNames[3] + lastNames[3]);
// }
// console.log(fullNames); */

// // console.log(firstNames[0][0]);
// // for (let i = 0; i < firstNames.length; i++) {
// //   console.log(firstNames[i][i]);
// //   console.log("------------");
// //   console.log(lastNames[i][i]);
// // }

// /* for (let i = 0; i < firstNames.length; i++) {
//   for (let j = 0; j < lastNames.length; j++) {
//     if (firstNames[i][0] === lastNames[j][0]) {
//       fullNames.push(firstNames[i] + lastNames[j]);
//     }
//   }
// }
// console.log(fullNames); */

// var arr = [1, 2, 3, 4, 5, 6];
// // var newArr = new Array(1, 2, 3, 4, 5, 6);
// // console.log(arr);
// // var popValue = arr.pop();
// // console.log(arr, popValue);
// // console.log(newArr);

// // var shiftValue = arr.shift();
// // console.log(shiftValue);

// // arr.push("asheel");
// // console.log(arr);

// // var joinMethod = arr.join(); // join method subko string banadeta he
// // console.log(joinMethod);

// /* console.log(arr.slice(1, 4));
// console.log(arr.splice(1, 4));
// console.log(arr); */

// var str =
//   "Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.";

// // var findText = "online";

// // for (let i = 0; i < str.length; i++) {
// //   if(findText === str.slice(i, i + findText.length)){
// //     console.log("Found");
// //     break;
// //   }
// // }

// // var fLCapital = str[]

// // var arr = str.split(" ");

// // for (let i = 0; i < arr.length; i++) {
// //   // const element = array[i];
// //   newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1));
// // }

// // console.log(newArr.join(" "))

// var name1 = "ashe!el";
// /* var firstChar = name1.slice(0, 1);
// console.log(firstChar);
// var firstChar = name1.charAt(0);
// console.log(firstChar);
// var lastChar = name1.charAt(name1.length - 1);
// console.log(lastChar); */

// for (var i = 0; i < name1.length; i++) {
//   if (name1.charAt(i) === "!") {
//     alert("Exclamation point found!");
//     break;
//   } else {
//     console.log("not found");
//   }
// }

/* console.log(Math.round(7.0));
console.log(Math.round(7.1));
console.log(Math.round(7.5));
console.log(Math.round(7.9));

console.log(Math.ceil(7.0));
console.log(Math.ceil(7.1));
console.log(Math.ceil(7.5));
console.log(Math.ceil(7.9));

console.log(Math.floor(7.0));
console.log(Math.floor(7.1));
console.log(Math.floor(7.5));
console.log(Math.floor(7.9)); */

// console.log(Math.random());

// Class Program 1

/* let randomNumber = Math.round(Math.random());
if (randomNumber === 1) {
  console.log("head");
} else {
  console.log("tail");
}
 */

// console.log(Math.round(Math.random()*10));

// Class Program 2
/* let userGuess = +prompt("Enter a Correct Number");
let computerNumber = Math.round(Math.random()*10);
console.log(computerNumber, userGuess)
if(userGuess === computerNumber) {
  console.log(`You Win your number ${userGuess} and Computer Number ${computerNumber} are both match`)
}
else if(computerNumber > userGuess) {
  console.log("Your number is less than Computer ");
}
else {
  console.log("Your number is greater than Computer");
} */

// Class Program 3
/* let red = Math.round(Math.random() * 255);
let green = Math.round(Math.random() * 255);
let blue = Math.round(Math.random() * 255);
document.write(`<h1 style="background: rgb(${red}, ${green}, ${blue})">RGB(${red}, ${green}, ${blue})</h1>`); */

// console.log(Math.max(4,5,8,20,48));
// console.log(Math.min(4,5,8,20,48));

// console.log(parseInt("32837.383")); // string to number and decimal are not show

// console.log(parseFloat("32837.238"));// string to number and decimal are show

// console.log(Number("372"));

// Number to string
// let num = 10;
// console.log(num)
// console.log(num.toString())
// console.log(String(num));

// var str = num.toString();
// if (str.charAt(str.length - 1) === "5") {
// str = str.slice(0, str.length - 1) + "6";
// }
// num = Number(str);
// prettyNum = num.toFixed(2);

// 27-04-2024

// var userName = "AsheelAhmedSiddiqui";
// console.log(userName[userName.length-1]);
// console.log(userName.charAt(userName.length-1));
// console.log(userName.slice(-1));
// for (let i = 0; i < userName.length; i++) {
//   // if(userName.charAt(i) === userName[i]){
//   //   console.log(i)
//   //   break
//   // }
// }

/* var generateNumber1 = Math.round(Math.random()*9);
var generateNumber2 = Math.round(Math.random()*9);
var generateNumber3 = Math.round(Math.random()*9);
console.log(String(generateNumber1)+String(generateNumber2)+String(generateNumber3)); */
/* var userNumber = +prompt("Enter your one time password (OTP)");
var otp = Math.floor(Math.random()*9000)+1000;
// console.log(generateNumber);

if(userNumber === otp){
  document.write(`<h1>Verify</h1>`)
}else{
  document.write(`<h1>Invalid OTP</h1>`)
} */

// var number;
// do {
//   number = Math.floor(Math.random() * 999);
// } while (number < 100);

// Chapter No 31
// Date

// var now = new Date();
// console.log(now);

// var dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay-1];
// console.log(nameOfToday)

// Date Methods
// console.log(now.getDate());
// console.log(now.getDay())
// console.log(now.getFullYear())
// console.log(now.getHours())
// console.log(now.getMilliseconds())
// console.log(now.getMinutes())
// console.log(now.getMonth())
// console.log(now.getTime())
// console.log(now.getTimezoneOffset())
// console.log(now.getUTCDate())
// console.log(now.getUTCDay())
// console.log(now.getUTCFullYear())
// console.log(now.getUTCHours())
// console.log(now.getUTCMilliseconds())
// console.log(now.getUTCMinutes())
// console.log(now.getUTCMonth())
// console.log(now.getUTCSeconds())

// var now = new Date();
// var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
// var date = now.getDate();
// var currentMonth = now.getMonth();
// var year = now.getFullYear();
// console.log(`${date}/${months[currentMonth-1]}/${year}`)
// console.log(`${currentMonth}-${date}-${year}`)
// console.log(`${date}-${currentMonth}-${year}`)

// console.log(now.setMonth());

// var now = new Date();
// var doomsday = new Date("June 30, 2035");
// console.log(now);
// console.log(doomsday);

// 30-04-2024
/* let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"];
let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let now = new Date();
let date = now.getDate();
let day = now.getDay();
let month = now.getMonth();
let year = now.getFullYear();
let hour = now.getHours();
let min = now.getMinutes();
let amPm;
if(hour > 12) {
  hour = hour - 12;
  amPm = "AM"
  if(hour < 10){
    hour = "0" + hour
  }
}else{
  hour;
  amPm = "PM"
}

if(min > 10){
  min = "0" + min;
}

let string = `${days[day]} ${date} ${months[month]} ${year} ${hour}:${min} ${amPm}`;
console.log(string) */

// Function Chapter

/* let userInput = prompt("Enter Your Name");
function greet () {
  console.log("Assalamualikum " + userInput);
}
greet() */

/* function greet () {
  var number = prompt("Enter a Number");
  if(number % 2 == 0) {
    console.log(number + " is even number");
  }else{
    console.log(number + " is odd number");
  }
} */

/* function addTwoNum (num1, num2) {
  console.log(num1 + num2)
}
addTwoNum(5, 6); */

/* var number1 = +prompt("Enter a Number1");
var number2 = +prompt("Enter a Number2");

function add (num1, num2){
  console.log(num1 + num2)
}
add(number1, number2); */

/* var userName = "xyz";
function user (name1) {
  console.log(name1)
}
user(userName); */

/* function now() {
  var date = new Date();
  console.log(date);
} */

/* function randomNumber() {
  var computerNumber = Math.floor(Math.random() * 10) + 1;
  console.log(computerNumber);
}

function guessTheNumber() {
  var userNumber = +prompt("Enter a number between 1 to 10");
  var computerNumber = Math.floor(Math.random() * 10) + 1;
  if (userNumber === computerNumber) {
    console.log("Congrats You Win 😎 ✔");
  } else if (userNumber > computerNumber) {
    console.log("Your number is greater than computer number 📈");
  } else if (userNumber < computerNumber) {
    console.log("Your number is greater than computer number 📉");
  } else {
    console.log("Invalid number");
  }
}

function colorGenerator() {
  var red = Math.round(Math.random() * 255);
  var green = Math.round(Math.random() * 255);
  var blue = Math.round(Math.random() * 255);
  document.write(
    `<h1 style="background-color: rgb(${red}, ${green}, ${blue})">RGB(${red}, ${green}, ${blue})</h1>`
  );
} */

// 02-May-2024

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(i, 'outside loop value')

// console.log("========================");

// let x;

// for (let x = 0; x < 10; x++) {
//   console.log(x);
// }
// console.log(x, 'outside loop value')

// console.log("========================");

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i, 'outside loop value')

// function abc(params) {
//   var name = "xyz";
//   console.log(name)
// }
// abc();

/* function tellTime() {
  var now = new Date();
  var theHr = now.getHours();
  var theMin = now.getMinutes();
  console.log(theHr, theMin);
  alert("Current time: "+ theHr + ":" + theMin);
}
tellTime(); */

/* function foo(a, b, c = 20){
  console.log(a+b+c);
}
foo(5, 10, 40); */

/* function foo(a, b, c) {
  console.log(a+b+c);
}
foo(+prompt("enter value1"), +prompt("enter value2"), +prompt("enter value3")) */
/* var a = +prompt("enter value1");
var b = +prompt("enter value1");
var c = +prompt("enter value1");
function foo(a, b, c) {
  console.log(a+b+c);
}
foo(); */

/* function foo(a,b,c) {
  var ans = a+b+c;
  return ans;
}
foo(2,5,10);
console.log(ans) */

/* function checkNum(a) {
  if(a%2 == 0){
    console.log("even number")
  }else{
    console.log("odd Number")
  }
}
checkNum(5) */

/* function checkNum(a) {
  var ans = a%2=== 0;
  return ans
}
console.log(checkNum(5)); */

/* function fo o(a) {
  var ans = a%2===0;
  return ans
}
console.log(foo(2)) */

// Class Practice
/* var user = prompt("enter your name")
function adc() {
  return user[0];
} 
console.log(adc()); */
/* var user = prompt("enter a word");
function palindrome() {
  if(user === user){
    console.log(user +" this is palindrome " + user.split("").reverse().join(""));
  }
}
palindrome(); */
/* var user = prompt("enter your")
function bigWord() {
  if(cpd){

  }
} */

// 04 May 2024
/* let now = new Date("14-Aug-2024");
console.log(now) */

/* let currentDate = new Date();
let now = new Date("14-Aug-2024");
let differenceBetween =  now - currentDate;
let difference = Math.floor(differenceBetween/1000/60/60/24);
console.log(difference) */

// let currentDate = new Date();
// let now = new Date("jan-2050");

/* for (let i = 24; i <= 50; i++) {
  let date = new Date(`1-jan-{i}`);
  let string = date.toString();
  if(string.slice(0, 0+3)){
    console.log("Sunday", i)
  }
} */


