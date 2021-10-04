console.log("Hello World")

//any
let ages:any=25
ages=true
ages='hello'
ages={name:'sid'}

let mixes:any[]=[]
mixes.push(5)
mixes.push('mario')
mixes.push(false)



//explicit types
let character:string;
let age:number;
let isLoggedIn :boolean

// age='sid'  now u cannot initialize it to string
age=30
isLoggedIn=true

//arrays
let ninjas:string[];
ninjas=["sid",'mario']

//ninja.push("abc")  push will not work because we havent intialized it as an array
//if we want to use push feature then intialize it as an empty aray
//let ninjas:string[]=[] now you can run push command

//union types
let mix:(string|number)[]=[]
mix.push("hello");
mix.push(20)
// mix.push(false) this will show error as we only defined arrau for string and number



let uid:string|Number
uid='123';
uid=123

//objects

let ninjam :object;
ninjam={name:'yoshi',age:30}

let ninjaTwo:{
    name:string,
    age:number,
    beltColour:string
}

ninjaTwo={name:"sid",age:20,beltColour:'black'}



//arrays

let names=["sid","agarwal"];
names.push('tech');
// names.push(3) now it will not let you push any other type than string

let numbers=[10,20,30,40]
numbers.push(25);
// numbers.push("abc") now it will not le you push string or any other type than number

//Now in array we can push mixed if decalred in starting
let mixed=['ken',4,'chun-li']
mixed.push("a")
mixed.push(5)  



//Objects
let ninja={
    name:'siddhant',
    belt:'black',
    age:30
}
ninja.age=40;
ninja.name='sid';
// ninja.age='30' this will show error as age has to be a number 
// ninja.skills=['fighting,'sneaking] we cannot do this as well
 
//now if we change the Object to  

// ninja={
//     name:'sid',
//     age:20
// }
//Above code will produce error as Object does not matches with initial key value pair



// const character="siddhant";
// console.log(character)
// const inputs=document.querySelectorAll('input');
// console.log(inputs)

// inputs.forEach(input=>{
//     console.log(input)
// })

//writing a function with type of parameter

// const circ=(diameter:number)=>{
//     return diameter * Math.PI
// }
// console.log(circ(7.5))

