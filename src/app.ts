import { Invoice } from "./classes/invoice.js";
import {Payment} from './classes/payment.js'
import { HasFormatter } from "./interfaces/HasFormatter";
import { ListTemplate } from "./classes/ListTemplate.js";
//type casting an element
const form=document.querySelector('.new-item-form') as HTMLFormElement
// console.log(form.children)

//grabbing inputs
const type=document.querySelector("#type") as HTMLSelectElement
const toForm=document.querySelector("#tofrom") as HTMLInputElement
const details=document.querySelector("#details") as HTMLInputElement
const amount=document.querySelector("#amount") as HTMLInputElement
//list template instance
const ul=document.querySelector('ul')!;
const list=new ListTemplate(ul)
form.addEventListener('submit',(e:Event)=>{
    e.preventDefault()
    let doc:HasFormatter;
    if(type.value==='invoice')
    {
        doc=new Invoice(toForm.value,details.value,amount.valueAsNumber)
    }else{
        doc=new Payment(toForm.value,details.value,amount.valueAsNumber)
    }
   list.render(doc,type.value,'end');
})

