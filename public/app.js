import { Invoice } from "./classes/invoice.js";
import { Payment } from './classes/payment.js';
// let docOne:HasFormatter;
// let docTwo:HasFormatter;
// docOne=new Invoice('yoshi','web work',250);
// docTwo=new Payment('mario','plumbing work',200);
// let docs:HasFormatter[]=[];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs)
// const invOne=new Invoice("siddhant","work on web",200);
// console.log(invOne)
// let invoices:Invoice[]=[]
// invoices.push(invOne)
// const anchor=document.querySelector('a')!
// console.log(anchor.href)
//type casting an element
const form = document.querySelector('.new-item-form');
// console.log(form.children)
//grabbing inputs
const type = document.querySelector("#type");
const toForm = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toForm.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toForm.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
