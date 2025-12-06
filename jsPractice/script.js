// console.log("Hello, World!");
// console.warn("hello javascript warning");
// console.error("This is  chirkut error message");

// console.log( 35*2- (10/2) + 7); 


// ============================================================================================
// console.log(typeof(123))
// console.log(typeof("123"))
// console.log(typeof(true))
// console.log(typeof(null))

// ============================================================================================
// let n1 = Number(prompt("Enter first number"));
// let n2 = Number(prompt("Enter second number"));

// var n3= n1;
// n1= n2;
// n2= n3;
// ====================================
// [n1, n2] = [n2, n1];
// console.log(n1, n2);
// ====================================
// n1= n1 + n2; 
// n2= n1-n2;
// n1=n1-n2; 
// console.log("First number is now swapped to : " + n1);
// console.log("Second number is now swapped to: " + n2);

// ============================================================================================
// convert string into number

// Number("1234"); //1234
// parseInt("1234");
// +"1234"; //1234

// ============================================================================================
//for loop to print numbers from 10 to 1 in reverse
// for(let i=10;i>0;i--){
//     console.log(i)
// }

// ============================================================================================
//multiples of 3 from 3 to 30
// let i=3;
// while(i<=30){
//     console.log(i);
//     i+=3;
// }

// ============================================================================================
//sum of numbers from 1 to 100
// sum=0;
// for(let i=1;i<=100;i++){
//     sum+=i;
// }
// console.log("Sum of numbers from 1 to 100 is: " + sum);

// ============================================================================================

// var js = "JavaScript";
// for (let i of js) {
//     console.log(i);
// }

// ============================================================================================

// ARRAY


// remove duplicates from array
// let arr= [1,1,3,45,4,2,2,2, 1, 1,5,5,5,6,6,3,3,4,4,2]
// let arrar = [...new Set(arr)];
// console.log(arrar);

// ============================================================================================
//find second largest number in array
// let numbers = [12, 34, 56, 78, 90, 11, 23, 45, 67, 89];
// let sorted=numbers.sort((a,b)=> a-b);
// console.log(sorted);
// console.log("Second largest number is  " + sorted[sorted.length-2]);

// ============================================================================================
//sort array in descending order
// let numbers = [12, 34, 56, 78, 90, 11, 23, 45, 67, 89];
// let sorted = numbers.sort((a,b) => b-a);
// console.log(sorted);

// ============================================================================================
//reverse an array
// let arr= [1,2,3,4,5,6,7,8,9];
// let reversed= [];
// for(let i= arr.length-1; i>=0; i--){
//     reversed.push(arr[i]);
// }
// console.log(reversed);

// ============================================================================================
//how frequent the numhers are in an array
// let arr= [1,2,2,3,4,4,4,5,5,6,7,7,7,7,8,9];
// let freq={};
// for(let i=0; i< arr.length; i++){
//     freq[arr[i]] === undefined ? freq[arr[i]] =1 : freq[arr[i]] +=1;    
// }
// console.log(freq);

// ============================================================================================
//  HOF + Callback
// function greet (name, cb){
//     setTimeout(cb , 2000);
// }
// let named = "Alisha";
// greet(named, () => {console.log("Hello " + named )});

// ============================================================================================

 //implementation of map function by Chetan
//  let arr= [1,2,3,4,5];

// function customMap(array, fun){
//     let ans = [];

//     for(let i of array ){
//         ans.push(fun(i))
//     }
//     return ans;
// }

// let result =customMap(arr,(num)=> num*2 );
// console.log(result);

// ============================================================================================

// Understanding closures with counter example

// function makecounter (){
//     let count = 0;
//     return () => {
//         count++;
//         return count;
//     } 
// }

// let counter = makecounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// ============================================================================================

// Repeating function after every n seconds 
//hint: use setInterval

//  function barbarchalao(cb){
//     setInterval(cb, 3000);
//  }

// barbarchalao( () => {console.log("Im running after every 3 seconds") } );

// ============================================================================================

// preset greeting function using closure

// function greetpreset (greeting){
//     return (naam) => `${greeting} ${naam}`;
// }

// let indianGreet = greetpreset("Namaste");
// console.log(indianGreet("Chetan"));


//============================================================================================

// run only once using closure and hof

// function HOf_runonlyonce (){
//     let ran= false;

//     return () =>{
//         if(ran!== true){
//             ran= true;
//             console.log("mai ek bar chal gaya");
//         }
//         else{
//             console.log("Function has already been run once");
//         }
//     }
// }

// let ans = HOf_runonlyonce();
// ans();
// ans();
// ans();
// ans();  

// ============================================================================================

//throttled function using closure and hof

// function HOf_throttle (cb, delay){
//     let lastcall= 0;

//     return (namee) => {
//         let now = Date.now();
//         if(now - lastcall >=delay){
//             lastcall= now;
//             cb(namee);
//         }
//         else{
//             console.log("Wait for sometime before calling again");  
//         }
//     }
// }

// let Tnameprint = HOf_throttle( (namee) => {console.log("Hello " + namee )}, 5000 );

// Tnameprint("Chetan");

