let add1 = document.getElementById("add1");
let remove1 = document.getElementById("remove1");
let result1 = document.getElementById("result1");
let add2 = document.getElementById("add2");
let remove2 = document.getElementById("remove2");
let result2 = document.getElementById("result2");
let totalValue1 = 1;
let totalValue2 = 1;

function buttons()
{
    result1.textContent = totalValue1;
    add1.disabled = totalValue1 >= 5 ;//as the totalvalue >= 5 returns true / false, it's assigned to add1.disabled making it (add1.disabled = true / false;)
    remove1.disabled = totalValue1 <= 1;
}

add1.addEventListener("click", ()=>{
    totalValue1 = ++totalValue1;
    result1.textContent = totalValue1;
    buttons()
})

remove1.addEventListener("click", ()=>{
    totalValue1 = --totalValue1;
    result1.textContent = totalValue1;
    buttons()
})

buttons()


// --------------------------------------------------------------------
// Popup


add2.addEventListener("click", ()=>{
        if(totalValue2<5)
        {
            totalValue2 = ++totalValue2;
            result2.textContent = totalValue2;
        }
        else if(totalValue2==5)
        {
            alert(`You can only choose a maximum of 5 items`)
        }
})



remove2.addEventListener("click", ()=>{
    if(totalValue2>0)
    {
        totalValue2 = --totalValue2;
        result2.textContent = totalValue2;
    }
    else if(totalValue2==0)
    {
        alert(`The value can't be negative`)
    }
})

//Disabled without using ternary operator


// add.addEventListener("click", ()=>{
//     totalValue = ++totalValue;
//     result.textContent = totalValue;
//     if(totalValue==5)
//     {
//         add.disabled = true;
//     }
//     else
//     {
//         remove.disabled = false
//     }
// })



// remove.addEventListener("click", ()=>{
//     totalValue = --totalValue;
//     result.textContent = totalValue;
//     if(totalValue==0)
//     {
//         remove.disabled = true;
//     }
//     else
//     {
//         add.disabled = false
//     }
// })