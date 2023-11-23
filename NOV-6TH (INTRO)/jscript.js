// console.log("hello world!")

// // DataType-read the documents
// //loops
// /* using loops- do the summation of frist 20 even numbers*/
// //2,4,6,8,10...40 ->first 20 even numbers

let i=2,n=20,sum=0;
for(;i<=n*2;i+=2){
    sum+=i;
}
console.log(`THE sum of frist ${n} even number are = ${sum}`); //template literals


// //using while loop
let m=2,l=20,add=0;
while(m<=l*2){
    add+=m;
   m+=2; //updation
}
console.log("using while loop")
console.log(`THE sum of frist ${l} even number are = ${add}`); //template literals

// //Array Concept
var arr2=['srinija',50,25,true,"single",'sfc',5.3]; //hetergenous
let arr=[23,4,5,6,78];
var length=arr.length; //return the length of the array
let arr1=[1,2,3,4, ,5];
var length=arr1.length; //6
console.log(arr1[4]); //undefined

var arr3=[23,4,"srinija"]; //length:3
// //trying to access the arr3[3];
// //3.for OUTOFBOUND always if we are trying to get the value it return -UNDEFINED.
console.log(arr3[3]) //undefined.
console.log(arr3[-3]) //undefined.

// // JS ARRAY ARE "DYNAMIC"-add and remove

var arr4=[1,2,3,44,67];
console.log(arr4)
arr4[1]=45;
console.log(arr4)

//using the push method to add the elements in the array
arr4.push(23,990,"srinija"); //muliple values
console.log(arr4);
arr4.push(123); //single values 
console.log(arr4);

//unshift() 
arr4.unshift(3,4,5,6); 
console.log(arr4);

//pop() is an empty argument where it return the deleted values
var deletedElement =arr4.pop();
console.log(arr4);

var deletedElement =arr4.shift();
console.log(arr4);

//splice method
var a=[4,2,8,12,3,4,5,6,7];
console.log(`the Original array ${a}`);
console.log("the Original array ",a);

//i=2 => 8
//arr.splice(index,count);
var deletedElement=a.splice(2,1); //index:2,count:1 (only one element)
console.log(`the deleted element array ${deletedElement}`);
console.log("the deleted ele arr",deletedElement);

// a.splice(3); //not passing the delete count it remove all the element till end.
// console.log(a);


a.splice(3,0,"srinija"); 
console.log(a);

var barray=["telugu","eng","math","sci","com",23,45];
//adding the hindi blw telugu and english
//["telugu","eng","math","sci","com",23,45]=>["telugu","hindi","eng","math","sci","com",23,45]
let newArray=barray.splice(1,0,"hindi");
console.log(newArray);
console.log(barray);

var carray=["brinjal","apple","fish","orange","tomato","potato","veg"];
//remove the fish adding ["eggs","meat","protiens"];
carray.splice(2,1,["eggs","meat","protiens"]);
console.log(carray);

var darray=[23,2,4,25,26,27];
var subarray=darray.slice(1,5); //returns in the form of array
console.log(subarray);
