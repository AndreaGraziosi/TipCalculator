// javaScript Code written here! 
console.log('Hello World')




const inputBill = document.querySelector('#input-bill')
const inputTip = document.querySelector('#input-tip')
const inputPeople = document.querySelector('#input-people')
const splitTip = document.querySelector('#split-tip')
const splitBill = document.querySelector('#split-bill')
//----------------------------------------------------------------------------
//Calculate tip


function calculateTip() {
    const tipAmount = (inputBill.value  * inputTip.value / 100)/inputPeople.value
    console.log(tipAmount, "tipAmount")    
    splitTip.innerHTML = tipAmount.toFixed(2)
    const guestSplit = tipAmount + (inputBill.value/inputPeople.value)
    splitBill.innerHTML = guestSplit.toFixed(2)
}
calculateTip()


   
//-----------------------------------------------------------------------------
inputBill.addEventListener("click", calculateTip)
inputTip.addEventListener('click', calculateTip)
inputPeople.addEventListener ('click', calculateTip)
//--------------------------------------------------------------

