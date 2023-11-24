//reduce method
/**
let arr=[12,34,1,2];
//arr.reduce(cb,previous) 
let cb=function(prev,current,index){
 //1st iteration:11,12,0
 //2nd iteration:23,34,1 (takes the last returned value from 1st iteartion)
 //3rd iteration:57,1,2 (takes the last returned value from 2nd iteartion)
 //4th iteration:58,2,3 (takes the last returned value from 3rd iteartion)
    console.log(prev,current,index);
    //1st iteration:11+12=23
    //2nd iteration:23+34=57
    //3rd iteration:57+1=58
     //4th iteration:58+2=60
    return prev+current;
}
var previuos=11;
arr.reduce(cb,previuos);
 */


//=>when second Argument is not passed (cb executes runs n-1 times)
//=>it will the frist element as previous values and starts at iteartion at 1st index (array)
//simple from the above sentence it return the SUM OF ARRAY.

/** 
let arr=[12,3,1,2];
let cb=function(prev,current,index){
    console.log(prev+current,index);
    return prev+current ; //used to return for the next iteration
}
let x=arr.reduce(cb); //return the final value from here
console.log(`the final sum value is ${x}`);
*/
/*
let arr=[12,3,1,2];
let cb=function(prev,current,index){
    console.log(prev+current,index);
    return prev+current ; 
}
let x=arr.reduce(cb,0); 
console.log(`the final sum value is ${x}`);
*/



/**
 * problem :give an array multiply even number with 2 and odd number with 3 (map method).
 * and filter out Number which are blw 5 to 25.
 * finally find the sum of all the elements.
 */
/*
let arr=[2,4,7,12,9];//step1=>[4,8,21,24,27];=>step2:[8,21,24]=>step3[8+21+24]
//using map method
let cbmap=function(e,index,list){
    return e%2==0? e*2:e*3;
}
let mapArr=arr.map(cbmap);
//using mapArr need to filter out
let cbfilter=function(e,index,list){
    if(e>=5 && e<=25){
        return e;
    }
}
let filterArr=mapArr.filter(cbfilter);
//using above filterArr
let f=function(prev,current,index){
    var sum=prev+current;
    return sum;
}
let sum=filterArr.reduce(f,0);
console.log(sum)

let result=arr.map(cbmap).filter(cbfilter).reduce(f,0);
console.log(result);
**/


//string
let fName="srinija landa";
console.log(fName[5]);
console.log(fName.charAt(5));
console.log(fName[18]); //outOfBound
console.log(fName.charAt(18)); //gives empty string

//slice
console.log(fName.slice(3,9));
//STRING ARE IMMUTABLE
fName[3]="s";
console.log(fName);

console.log("a"=="a");
console.log('a'>'b'); //compare with ascii value

//charCodeAt(index_no) is a method
//charCodeAt(index_no):return the ascii value of the character
let str="A&b%h@#0";
for(let x in str){
    console.log(`index: ${x} and word is ${str[x]} its ascii value : ${str.charCodeAt(x)}`);
}

//acsii no=>char using String.fromCharCode(index_no);
console.log(String.fromCharCode(100));
console.log(String.fromCharCode(97));

//concate Method
console.log("srinija"+" sfc"+ " honors");
console.log("concate Method:",fName.concat(" Anand Rao"))
console.log(fName.concat(" Anand Rao"," jaya"," sudha"))

//split Method..=>returns in the form of array
console.log(fName.split('a'));

//join method =>returns in the form of String
let a=["sri","nija","sfc"];
console.log(a.join('#'));

let arr=[5,12,6,90,-2,5,78,1,10];
arr.sort(function(a,b){
   // return b-a;
   return a-b;
});
console.log(arr);

let products = [
    { name: "Product1", price: 1210.99 },
    { name: "Product2", price: 124.95 },
    { name: "Product3", price: 241.95 },
    { name: "Product3", price: -8.49 },
    // Add more objects as needed
];
products.sort(function(a,b){
    // return b-a;
    //return a-b;
    //a:{name:jjk,price:23} b:{name:jjk,price:123}
    if(a.price>b.price) return 13;
    if (a.price<b.price) return -13;
    if (a.price==b.price) return 0;
    
 });
 //console.log(arr);
console.log(products);

