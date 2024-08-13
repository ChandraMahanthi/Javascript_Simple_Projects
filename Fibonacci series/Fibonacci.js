let input = document.getElementById("input")
let result = document.getElementById("result");
let submit = document.getElementById("submit");

submit.addEventListener("click",()=>
{
    event.preventDefault();
    let n = parseInt(input.value);
    let fibseries = [0,1]
    for(let i = 2; i < n ; i++)
    {
        fibseries[i] = fibseries[i-1] + fibseries[i-2];
    }
    result.textContent = fibseries;
})