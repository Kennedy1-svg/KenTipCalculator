let bill = document.getElementById('bill')
let people= document.querySelector('.people')
let biller= document.querySelector('.billper')
let tipper= document.querySelector('.tipper')
let btn5= document.querySelector('.five')
let btn10= document.querySelector('.ten')
let btn15= document.querySelector('.fift')
let btn25= document.querySelector('.twent')
let btn50= document.querySelector('.fifty')
let custom=document.querySelector('.custom')
let reset=document.querySelector('.reset')

//console.log(bill.value)


    custom.addEventListener("keyup", () => {
        tipper.innerHTML=  ((bill.value * custom.value/100)/people.value).toFixed(2);
        biller.innerHTML=(((bill.value * custom.value/100)+ parseInt(bill.value))/people.value).toFixed(2);
        a();
        b();
        
    })



btn5.addEventListener("click", () => {
    tipper.innerHTML= "$" + ((bill.value * 0.05)/people.value).toFixed(2);
    biller.innerHTML= "$"  + (((bill.value * 0.05)+ parseInt(bill.value))/people.value).toFixed(2);
    a();
})

btn10.addEventListener("click", () => {
    tipper.innerHTML= "$" + ((bill.value * 0.1)/people.value).toFixed(2);
    biller.innerHTML= "$" + (((bill.value * 0.1)+ parseInt(bill.value))/people.value).toFixed(2);
    a();
})

btn15.addEventListener("click", () => {
    tipper.innerHTML="$" + ((bill.value * 0.15)/people.value).toFixed(2);
    biller.innerHTML= "$" + (((bill.value * 0.15)+ parseInt(bill.value))/people.value).toFixed(2);
    a();
})

btn25.addEventListener("click", () => {
    tipper.innerHTML="$"+ ((bill.value * 0.25)/people.value).toFixed(2);
    biller.innerHTML= "$" + (((bill.value * 0.25)+ parseInt(bill.value))/people.value).toFixed(2);
    a();
})

btn50.addEventListener("click", () => {
    tipper.innerHTML= "$" + ((bill.value * 0.5)/people.value).toFixed(2);
    biller.innerHTML="$" + (((bill.value * 0.5)+ parseInt(bill.value))/people.value).toFixed(2);
    a();
})



function a(){
    if (bill.value <= 0 || people.value <= 0) {
        tipper.innerHTML= "0.00"
        biller.innerHTML= "0.00"
    }


 }

 function b(){
    if(custom.value < 0 || custom.value > 100 ){
        tipper.innerHTML= "0.00"
        biller.innerHTML= "0.00"
    }
 }


reset.addEventListener("click", () => {
    people.value=''
    bill.value=''
    custom.value= ''
    tipper.innerHTML= "$0.00"
    biller.innerHTML= "$0.00"
})




