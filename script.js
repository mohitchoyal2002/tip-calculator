const billAmount = document.querySelector('.bill-amount');
const tipPercent = document.querySelector('.tip-amount');



const plus = document.querySelector('#plus');
const people = document.querySelector('#no-of-people');
const minus = document.querySelector('#minus');
const final = document.querySelector('.final'); 


// alert(people.innerHTML)
function increment(){
let num = Number(people.innerHTML)
    num++;
    people.innerHTML = num;
    calculateBill()
}
function decrement() {
    // alert(people.innerHTML)
    let num = Number(people.innerHTML)
    if(num > 1){
        num--;
        people.innerHTML = num;
    }
    calculateBill()
}

console.log(billAmount)

function calculateBill(){
    
    let noOfPeople = Number(people.innerHTML);
    console.log(` No. of People: ${noOfPeople}`)
    const tipAmount = Number(tipPercent.value) / 100;
    console.log(`tip amount${tipAmount}`)
    const totalBill = Number(billAmount.value)
    console.log(`total Bill ${totalBill}`)
    const finalTip = tipAmount*totalBill
    let result = (Number(totalBill) + Number(finalTip))/noOfPeople
    result = result.toFixed(2)
    final.innerHTML = result;
    console.log(`per person bill is:${result}`)
}