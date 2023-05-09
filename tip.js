
    let amountBillElement = document.querySelector('.bill-amount');
    let percentageTipElement =document.querySelector('.tip');
    let peopleNumberElement = document.querySelector('.total-person');
    let calculate=document.querySelector('.button')
    let person_amount=document.querySelector('.each-person')
    let bill_amount=document.querySelector('.result-amount')
    let tip,total_amount,each_person;
    calculate.addEventListener('click',()=>{
        tip=(amountBillElement.value*percentageTipElement.value)/100; 
        total_amount=parseInt(amountBillElement.value)+parseInt(tip)
        each_person=(parseInt(tip*100)/parseInt(peopleNumberElement.value))/100
        bill_amount.textContent=total_amount
        person_amount.textContent=each_person

    });
   
