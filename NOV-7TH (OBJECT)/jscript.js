/*
let arr=[1,2,3,4,5,6];
//access the value
console.log(arr[3]);
//changing the data in the array
arr[3]=2023 //or by splice
arr.splice(4,0,2024);
console.log(arr);
//for deleting the element in the array [1, 2, 3, 2023, 2024, 5, 6] 5
//using splice method
arr.splice(5,1,"removeElePlace");
arr.splice(5,1); //remove the element at index no:5
*/
//object


// OBJECT(C:CREATE)
/*
let obj={
    name:"srinija landa",
    age:21,
    rollno:25,
    dob:'jan 24 2002',
    college:"sfc",
    cgpa:9.32
};


//OBJECT(R:READ)
//accessing the objects value can be done in 2 ways..
console.log(obj.name, obj.age, obj.college);
console.log(obj["name"]); //2nd way of accessing the values from the object.
console.log(obj["age"]);


//OBJECT(U:UPDATE)
//change the values in the objects-using cutom index or by accessing the .keyName
obj["name"]="srinija landa"
obj.college="Accio"  
console.log(obj);


//console.log(obj[0].name); //undefined.name =>gives error saying that can't read the value on undefine...

//OBJECT(D:DELETE)
//to delete the value from the obj
delete obj.name;
console.log(obj);
delete obj["age"];

//OBJECT iterating on it.
// var arrKeys=Object.keys(obj);
// console.log("the keys in the form of arrays:",arrKeys);

 //iteration over the arrkeys
/**
 * for(let i=0;i< arrKeys.length;i++){
 
       console.log(i,arrKeys[i],obj[arrKeys[i]]);
    }
 */


//var obj = { /* Your object here */ };

// var arrKeys = Object.keys(obj);
// console.log("the keys in the form of arrays:", arrKeys);

// // Iteration over the arrKeys
// for (let i = 0; i < arrKeys.length; i++) {
//     // Accessing the values using the keys
//   //  console.log(i, arrKeys[i], obj[arrKeys[i]]);
//    //error=>obj.arrKeys[i]
//    var keyNames=arrKeys[i];
//   console.log(i, arrKeys[i], obj.keyNames);
// }

// var arrValues=Object.values(obj); //get the object values in the form of arrays
// console.log(arrValues);


// // ITERATING USING for in and for of
// // =>for in :always on keys /index;
// // =>for of :always on values/elements

// var arr1=[12,34,67,44,2,1,34];
// for (var x in arr1){
//     console.log(x); //give the index of the array
//     console.log(x, arr1[x]);
// }

// let obj1={
//     name:"sudha landa",
//     age:20,
//     rollno:76,
//     dob:'Aug 13 2003',
//     college:"GHMC",
//     cgpa:70.2
// };
// console.log(obj1);
// for (var x in obj1){
//     console.log(x); //give the keys of the object1
//     console.log(x, obj1[x]);
// }
// // =>for of :always on elements (not support on objects!!!)

// for (var x of arr1){
//     console.log(x); //give the elements of the array
// }

// //function->regular
// function callme(a,b){
//     console.log("regular function");
//     console.log(`the sum of ${a} and ${b}`,a+b);
// }
// callme(10,20);
// console.log("the type of callme() is a :",typeof callme);

// let fun=function (){
//     console.log("regular function but stored in a variable");
// }
// console.log("the type of fun is a :",typeof fun);

// function callme(a,b){
//     //inside the function the var a,b get cretated and values are assigned
//     //let a=10 since b have ntg so it is defined as undefined
//     console.log("regular function");
//     console.log(typeof a ,typeof b)
//     //console.log(`the sum of ${a} and ${b}`,a+b);

// }
// callme(10);

// var b=function(){console.log("hello b")}
// function callme(a,b){ //since callme taking f(){} in the second argument we call it as HOF
//     // this time b is holding the function
//     console.log(typeof a ,typeof b)
//     console.log(b);
// }
// //callme(10,function(){console.log("hello b")});
// callme(10,b);
// //var b=function(){console.log("hello b")}

// let parent=function (a,b){ //since parent taking f(){} in the second parameter we call it as HOF
//     // this time b is holding the function
//     console.log(typeof a ,typeof b)
//     console.log(b);
// }

//CALLBACK 
/*
let parent1=function (a,b){ 
    console.log(typeof a ,typeof b)
    console.log(b);
}
parent1(10,function(){}); //here we are passing the functiona s an argument we call it as CALLBACK f(){}

//in array we have some built-in method
//=>push(),unshift(),pop,shift,slice(si,ei),splice(i,c,v1,v2..) =>NOT HOF

/**
 * forEach =>  ( n => length of the array )
 *      Takes a cllaback function and invokes that callback for `n` number of times.
 *      returns nothing.
 * map    =>
 *      Takes a cllaback function and invokes that callback for `n` number of times.
 *      returns another array of same length.
 *
 * filter =>
 *      Takes a cllaback function and invokes that callback for `n` number of times.
 *     returns an array of any length
 */

/*
var arr1=[1,2,3,4,5];
var f=function(){console.log("hello world!")}
let v1=arr1.forEach(f); //taking the function and for 5 times
//means the forEach function invokes or call the function "f" for 5time (arr.length)

var array=[1,12,32,43,54];
//the "f" take 3 parameter =>element,ndex,list
var f=function(element,index,list)
{
    //for the firstiteration:element -1,index -0,list-[1,12,32,43,54];
    //for the 2nditeration:element -12,index -1,list-[1,12,32,43,54];
    console.log(element,index,list);
};
let x=array.forEach(f); //hof=froEach and f=>callback
//for the invoking the f function handle by froEach()

//making own forEach
var fun1=function(){console.log("inside callback")}
function myforEach(f1){ //f1=>f(){} 
//f1=function(){console.log("inside callback")} take internally
    //inside forEach it call the 
    f1();
}
myforEach(fun1); //call the function
*/

/* OINTERANLLY WORK OF FOREACH FUNCTION...
function myForEach(x) {
    for(let i = 0 ; i < arr.length; i++) {
        x(arr[i], i, arr);
        // i = 0 ; x(4, 0, [4, 2, 6])
        // i = 1 ; x(2, 1, [4, 2, 6])
        // i = 2 ; x(6, 2, [4, 2, 6])
    }
}
//call the myForEach();
myForEach(
    function (a, b, c) {
        // first time:  a = 4, b = 0, c = [4, 2, 6]
        // scond time: a = 2, b = 1, c = [4, 2, 6]
        // third time: a = 6, b = 2, c = [4, 2, 6]
        console.log(a, b, c);
    }
);
*/
/*
//sum of the elements in the array using forEach function
var array=[1,2,2,3,4];
let add=0;
var fName=function (e){
    add=add+e;  
}
array.forEach(fName);
console.log("the sum of the ",array,"is :",add);
let sum=array.forEach(fName); //won't return anything 
console.log(sum); //return undefined!!

*/
//map method
// let arra3=[1,2,3,4,5,6,7,8,9];
// let fun2=function(e,i,list){
//     console.log(e,i,list);
// }
// arra3.map(fun2);

// let arra3=[1,2,3,4,5,6,7,8,9];
// let result=arra3.map(function(e,i,list){
//     //console.log(e,i,list);
//     //return 10;
//     //return e; ///return the elements and forms the same array
//     //return e+i;

// })
// console.log(result); //give the array of undefined values;

/**
 * problem:given an array, create another array which have
 * 1.double value of even number
 * 2.triple value of odd number
 */

//using map

/*
let set=[4,2,3,6,9]; //=>[8,4,9,12,27]
var fun=function(e,i,list){
    return e%2 ==0? e * 2: e *3; //tenary operator!! ya woohhh
}
let ans=set.map(fun);
console.log("using map method:",ans);
*/

//filter method =>lly to the forEach(take f(){} callback,e,i,list as parameter)

// let arr=[4,2,3,6,9]; //=>[8,4,9,12,27]
// var fun=function(e,i,list){
//     console.log(e,i,list);
// }
// arr.filter(fun);


//only returns the  boolean (true) vlaues only in the form of array
let arr=[4,2,3,6,9]; //=>[t,t,f,t,f]
var fun=function(e,i,list){
   // console.log(e,i,list);
    return (e%2==0);
    //return undefined,0,''=>[]
}
let result=arr.filter(fun);
console.log(result);

