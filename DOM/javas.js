// DOM concept -2
const button=document.querySelector("#clickme");
/** every HTML have the built-i metod call addEventListener()=>it 
addEventListener()=>it is a function take 3 parameters last one is optional
Object.addEventListener("eventname",callback);
->use of callback(passing the f(){},regular,named function as an argument):
// which is also a function responsible to triggered when user makes that event
//callback is the event listener**/

/*
button.addEventListener("click",function(){
 console.log("clicked event srinija")   
});
*/
/**multiple event Listener */

/*
button.addEventListener("click",function(){
    console.log("EventListener -2")   
   });
   button.addEventListener("click",function(){
    console.log("EventListener -3")   
   });
   button.addEventListener("mouseleave",function(){
    console.log("Mouse leave event")   
   });
   button.addEventListener("dblclick",function(){
    console.log("double click listener")   
   });
**/
//removing the event listener when click more then two time
//USING removeEventListener("eventname",reference id);

/*
let count=0;
//storing the callfunction in a variable 
const listener=function(){ //#400
    count++;
    console.log("onclick the event");
    if(count==2){
        //need to stop /remove the listener #400
        button.removeEventListener("click",listener)
        console.log("remove the listener Event!");
    }
}
*/


//writting the Event passing callback function
//button.addEventListener("click",listener);


/*
const button1=document.querySelector("#btn1");
button1.addEventListener("click",(eventobj)=>{
    console.log(eventobj);
});
*/

//submit listeener
/**form
 * when you have list for properties inside the formElement
 * simple by accessing /extract any input Elements present inside it Just by using their NAME ATTribute value
 * formElement==eventobj.target(both are same)
 * -formElement.title=>give the object of that element
 * -from the above sentences formElement.title.value->give the value of the input which have name="title"
 * -formElement.isPublic.checked=> gives the boolean values...
 */
const formElement=document.querySelector("#form");
formElement.addEventListener("submit",(eventobj)=>{
    console.log(eventobj)//call the object of the form
    eventobj.preventDefault(); // prevent the default form submission behavior
    //extracting the elememnts using formElement.name.value
    const data={
        titleName:formElement.description.value,
        description:formElement.title.value,
        phoneNumber:formElement.phoneNumber.value,
        isPublic:formElement.isPublic.checked,
        isCommet:formElement.isCommet.checked
    };
    console.log(data);
});
//Usage of the include(); and also Filter method Nov 20 DOM events
//usage of oninput =>listener


//Keyup event
//KeyDown event