
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
//object


// OBJECT(C:CREATE)
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
var arrKeys = Object.keys(obj);
console.log("the keys in the form of arrays:", arrKeys);

// Iteration over the arrKeys
for (let i = 0; i < arrKeys.length; i++) {
    // Accessing the values using the keys
  //  console.log(i, arrKeys[i], obj[arrKeys[i]]);
   //error=>obj.arrKeys[i]
   var keyNames=arrKeys[i];
  console.log(i, arrKeys[i], obj.keyNames);
}

var arrValues=Object.values(obj); //get the object values in the form of arrays
console.log(arrValues);


// ITERATING USING for in and for of
// =>for in :always on keys /index;
// =>for of :always on values/elements

var arr1=[12,34,67,44,2,1,34];
for (var x in arr1){
    console.log(x); //give the index of the array
    console.log(x, arr1[x]);
}

let obj1={
    name:"sudha landa",
    age:20,
    rollno:76,
    dob:'Aug 13 2003',
    college:"GHMC",
    cgpa:70.2
};
console.log(obj1);
for (var x in obj1){
    console.log(x); //give the keys of the object1
    console.log(x, obj1[x]);
}
// =>for of :always on values/elements (not support on objects!!!)

for (var x of arr1){
    console.log(x); //give the elements of the array
}

//function->regular
function callme(a,b){
    console.log("regular function");
    console.log(`the sum of ${a} and ${b}`,a+b);
}
callme(10,20);
console.log("the type of callme() is a :",typeof callme);

let fun=function (){
    console.log("regular function but stored in a variable");
}
console.log("the type of fun is a :",typeof fun);

function callme(a,b){
    //inside the function the var a,b get cretated and values are assigned
    //let a=10 since b have ntg so it is defined as undefined
    console.log("regular function");
    console.log(typeof a ,typeof b)
    //console.log(`the sum of ${a} and ${b}`,a+b);

}
callme(10);

var b=function(){console.log("hello b")}
function callme(a,b){ //since callme taking f(){} in the second argument we call it as HOF
    // this time b is holding the function
    console.log(typeof a ,typeof b)
    console.log(b);
}
//callme(10,function(){console.log("hello b")});
callme(10,b);
//var b=function(){console.log("hello b")}

let parent=function (a,b){ //since parent taking f(){} in the second parameter we call it as HOF
    // this time b is holding the function=>callback f(){}
    console.log(typeof a ,typeof b)
    console.log(b);
}
//b is a callback f(){}

//in array we have some built-in method=>push(),unshift(),pop,shift,slice(si,ei),splice(i,c,v1,v2..) =>NOT HOF