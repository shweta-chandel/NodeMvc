// naming convention

// var x = 5;
// var y = 6;
// var z = x + y;
// console.log(z);

// let x = 5;
// let y = 6;
// let z = x + y;
// console.log(z);

// const price1 = 5;
// const price2 = 6;
// let total = price1 + price2;
// console.log(total);

// operator
// arithmetic************

// let text1 = "What a very ";
// text1 += "nice day";
// console.log(text1)

// let x = 5 + 5;
// let y = "5" + 5;
// let z = "Hello" + 5;
// console.log(x + "" + y + "" + z);

// let x = 5;
// let y = 2;
// let z = x - y;
// console.log(z);

// let x = 5;
// let y = 2;
// let z = x * y;
// console.log(z);

// let x = 5;
// let y = 2;
// let z = x / y;
// console.log(z);

// let x = 5;
// let y = 2;
// let z = x % y;
// console.log(z)

// let x = 5;
// x++;
// let z = x;
// console.log(z)

// let x = 5;
// x--;
// let z = x;
// console.log(z)

// let y = 50
// let x = 10 + y;
// console.log(x)

// let x = 10;
// x += 5;
// console.log(x)

// let x = 10;
// x -= 5;
// console.log(x)

// let x = 10;
// x *= 5;
// console.log(x)

// let x = 10;
// x **= 5;
// console.log(x)

// let x = 10;
// x /= 5;
// console.log(x)

// let x = 10;
// x %= 5;
// console.log(x)

// let x = -100;
// x <<= 5;
// console.log(x)

// let x = -100;
// x >>= 5;
// console.log(x)

// let x = -100;
// x >>>= 5;
// console.log(x)

// condition
// let a = 10;
// if (a < 20){
//   console.log( "a is greater");
// }else{
//   console.log( "a is smaller");
// }

// const time = new Date().getHours();
// let greeting;
// if (time < 10) {
//   greeting = "Good morning";
// } else if (time < 20) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }
// console.log(greeting)

// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }
//     console.log(day)

    // let i = 0;
    // for(i=0;i<5;i++)
    // console.log(i)

//     let text = ""
// let i = 0;

// do {
//   text += "The number is "  + i;
//   i++;
// }
// while (i < 10); 
// console.log(text)

// let text =''
// let i =0;
// while (i < 10) {
//   text += "The number is " + i;
//   i++;
// }console.log(text)


// array method

//Calculate simple interest
// p = 1000;
// t = 10;
// r = 1;
// SI = (p * t * r) / 100;
// console.log(SI);

 //array intialization
// var x= [1,2,3,4]
// console.log(x)

//array push
// const fruit = ["apple", "banana", "grapes"]
// console.log(fruit);
// fruit.push("lemon");
// console.log(fruit);

//array pop
// const fruit =  ["apple", "banana", "grapes"]
// console.log(fruit);
// fruit.pop();
// console.log(fruit);

//shift
// const fruit = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruit);
// fruit.shift();
// console.log(fruit);

//unshift
// const veg = ["Banana", "Orange", "Apple", "Mango"];
// veg.unshift("Lemon");
// console.log(veg);

//sort
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// fruits.sort();
// console.log(fruits);

//for each
// const numbers = [1, 2, 3, 4, 5];
// for (i = 0; i < numbers.length; i++) {
// console.log(numbers[i]);
// } 

//map
// let numbers = [2, 4, 6, 8, 10];
// function square(number) {
//   return number * number;
// }
// let square_numbers = numbers.map(square);
// console.log(square_numbers);


// const d = new Date();
// console.log(d);
// *Math.round(4.6);
// console.log(
//   Math.round(4.6))
// ;

/*Math.ceil(4.9);
console.log(Math.ceil(4.9));*/

/*function Area(radius)
{
    x.radius = radius;
    x.area = function () 
    {
      return Math.PI * this.radius * this.radius;
      console.log(radius);
    }}*/

    // function Area(r)
    // {
    // console.log(Math.PI*r*r);
    // }
    // Area(7);

    //reduce
    // const numbers = [1,2,3,4,5];
    // let sum = numbers.reduce(myFunction);
    // function myFunction(total, value,) {
    //   return total + value;
    // }
    //  console.log(numbers);
    //  console.log(sum);
   
    //  function Si(p,r,t){
    //   return p*r*t/100;
    //  }
    //  console.log(Si(100,10,2));

    //   function Celsius(fahrenheit)
    //  {
    //   return (5/9) * (fahrenheit-32);
    //  }
    //   console.log( Celsius(77));
      
    //   function Centimeter(kilometer)
    //  {
    //   return (kilometer*1/10000);
    //  }
    //   console.log(Centimeter(3));
      

      // function getDaysInMonth(year, month)
      // {
      //   return new Date (year, month, 0.getDate())
      // }
      //    console.log(getDaysInMonth(2022, 2)
      //    );
      
    //  function DayName(daynumber)
    //  {
    //   var dayname = ["sunday","monday","tuesday", "wednesday", "thursday", "friday", "saturday"];

    //   return dayname[daynumber];
    //  }
    //    console.log(DayName(2));


  //    for (var i = 1; i<=100; i++)
  //    {
  //     if (i%3==0)

  // console.log(i);

  //    }
    

    // var year;
    // function LeapYear(year)
    // {
    //   if(year%4==0)
    //   {
    //   console.log(year + ' is a leap year');
    //   }
    //   else
    //   {
    //     console.log(year + ' is a not leap year');
    //   }
    // }
     
    // LeapYear(2020);

    //Array//

    //1 concat//
    // const arr1 = ["1", "2"];
    // const arr2 = ["3", "4", "5"];
    // const children = arr1.concat(arr2); 
    // console.log(children);


//2 entries//
//   const girl = ["tina", "pia", "sana"];
//   const g = girl.entries();
// for (let x of g)
// {
//   console.log(x)
// }

//array push -3//
// const fruit = ["apple", "banana", "grapes"];
// console.log(fruit);
// fruit.push("kiwi");
// console.log(fruit);  


//array pop- 4//
// const fruit = ["apple", "banana", "grapes"]
// console.log(fruit);
// fruit.pop();
// console.log(fruit);


//shift - 5//
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// fruits.shift();
// console.log(fruits);


//unshift- 6//
/*const veg = ["Banana", "Orange", "Apple", "Mango"];
veg.unshift("Lemon");
console.log(veg);*/


//sort -7//
/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.sort();
console.log(fruits);*/


//join -  8//
// const girl = ["ria", "sana", "dia", "gia"];
// let text = girl.join(" or ");
// console.log(text);

//reverse - 9//
// const arr = [1,2,3,45];
// arr.reverse();
// console.log(arr);


//slice - 10//
// var a = ["a", "b", "c"];
// var abs = a.slice(0,2);
// console.log(abs);
 

// //splice 11//
// var a = ["a", "b", "c", "d", "e"];
// var abs = a.splice(1,1);
// console.log(abs);


//find 12//
// var a = [1,2,3];
// var b = a.find(greater);
// console.log(b);
// function greater(a)
// {
//   return a>=0;
// }

// findIndex 13//
// var a = [1,2,3];
// var b = a.findIndex(greater);
// console.log(b);
// function greater(a)
// {
//   return a>=0;
// }


//is array 14//
  // var a = ["a", "b", "c", "d", "e"];
  // var abs = Array.isArray(a);
  // console.log(abs);


  //index of 15//
  // var a = [1,2,3,4,5];
  // var abs =  a.indexOf(2);
  // console.log(abs);


  //last index 16//
  // var a = ["a", "b", "a", "d", "c"];
  // var abs =  a.lastIndexOf("a");
  // console.log(abs);

//some 18//
// var a = [1,2,3];
// var b = a.some(greater);
// console.log(b);
// function greater(a)
// {
//   return a>=2;
// }

//every 19//
// var a = [1,2,3];
// var b = a.every(greater);
// console.log(b);
// function greater(a)
// {
//   return a>=3;
// }


//fill 20//
  // var a = ["a", "b", "c", "d", "e"];
  // var abs = a.fill("q", 2, 4);
  // console.log(abs);


  //constructor 21//
  // const fruits = ["Banana", "Orange", "Apple", "Mango"];
  // let text = fruits.constructor;
  // console.log(text);


//copywith 22//
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.copyWithin(3, 0);
// console.log(fruits.copyWithin(3, 0));


//filter 23//
// var a = [1,2,3];
// var b = a.filter(greater);
// console.log(b);
// function greater(a)
// {
//   return a>=2;
// }


//foreach 24//
// const numbers = [1, 2, 3, 4, 5];
// for (i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

//from 25//
// let text = ["ABCDEFG"];
// const myArr = Array.from(text);
// console.log(text);

//keys 26//
// const array1 = ['a', 'b', 'c'];
// const iterator = array1.keys();

// for (const key of iterator) {
//   console.log(key);
// }


//length 27//
// const girl = ["aa", "bb", "cc"]
// let length = girl.length;
// console.log(length);


//map 28//
// var a = [1,2,3]
// var b = a.map(test);
// console.log(b);
//  function test(x)
//  {
//   return x * 10;
//  }


//tostring 29//
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.toString();
// console.log(text);


// loops//
//if//

// var a = 12;
// if (a == 10)
//    console.log("good");

//else//
//    var a = 12;
// if (a == 10)
// {
//    console.log("good");
// }
// else
// {
//   console.log("nice");
// }

//else if//
// //var time = 12
// if (time == 10)
// {
//    console.log("good");
// }
// else if (time<20);
// {
//   console.log("good day");
// }
// else 
// {
//   console.log("greting");
// }//


//js boolen

//js claas

// class Mobile
// {
//   constructor()
//   {
//     this.a = 12
//     this.show = function()
//     {
//       return "instance member";
//   };
// }
//  display ()
//  {
//  return "prototype member";
// }

//eval //
// let x = 10;
// let y = 20;
// let text = "x * y";
// let result = eval(text);
// console.log(result);

//infinity//
// let x = 1.797693134862315E+308;
// let y = x * 1.001;
// console.log(y);


//undefined //
// let x =10 ;
// if (x === undefined) {
//   text = "x is undefined";
// } else {
//   text = "x is defined";
// }
// console.log(text);


//statement//
//if//
// var a = 12;
// if (a == 10)
//    console.log("good");

//else//
//    var a = 12;
// if (a == 10)
// {
//    console.log("good");
// }
// else
// {
//   console.log("nice");
// }

// myString = "this is my string";
// for (let char in myString){
// console.log(myString[char])};

// people = ["shweta", "shikha"];
// for (let name of people){
//   console.log(name)
// }