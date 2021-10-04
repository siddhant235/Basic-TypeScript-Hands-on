let greet=()=>{
    console.log("hello,world");
}
// greet='hello' //cant be assigned to string because it needs to be a function

let greets :Function;

// greets="hello" needs to be a function 

const add=(a:number,b:number)=>{
    console.log(a+b)  
}

add(5,5)  //can be called 
// add(5,'5')  cannot be called because both params should be string

//To make a param optional inside a function
const adds=(a:number ,b:number,c?:number|string)=>
{
    
}