let swi = document.getElementById("switch");
document.body.style.backgroundColor = "white";

swi.addEventListener("click", ()=>{
    if(document.body.style.backgroundColor == "white")
    {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
    else if(document.body.style.backgroundColor == "black")
    {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    };
})