billInput = document.querySelector(".bill__input");
peopleInput = document.querySelector(".people__input");

tip__buttons = document.querySelectorAll(".tip__buttons button");
reset = document.querySelector(".reset");

btn5 = document.querySelector(".btn5");
btn10 = document.querySelector(".btn10");
btn15 = document.querySelector(".btn15");
btn25 = document.querySelector(".btn25");
btn50 = document.querySelector(".btn50");
costumBtn = document.querySelector(".costumBtn");


tipResult = document.querySelector(".tip__result");
totalResult = document.querySelector(".total__result");

tip__buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("button.active").classList.remove("active");
        btn.classList.add("active");
        console.log(billInput.value)
    });
});

// TIP BUTTON
btn5.addEventListener("click", () => {
    tipResult.innerText = "$" + (billInput.value * (5 / 100)).toFixed(2);
    totalResult.innerText = "$" + (billInput.value * (5 / 100) * peopleInput.value).toFixed(2);
})
btn10.addEventListener("click", () => {
    tipResult.innerText = "$" + (billInput.value * (10 / 100)).toFixed(2);
    totalResult.innerText = "$" + (billInput.value * (10 / 100) * peopleInput.value).toFixed(2);
})
btn15.addEventListener("click", () => {
    tipResult.innerText = "$" + (billInput.value * (15 / 100)).toFixed(2);
    totalResult.innerText = "$" + (billInput.value * (15 / 100)* peopleInput.value).toFixed(2);
})
btn25.addEventListener("click", () => {
    tipResult.innerText = "$" + (billInput.value * (25 / 100)).toFixed(2);
    totalResult.innerText = "$" + (billInput.value * (25 / 100)* peopleInput.value).toFixed(2);
})
btn50.addEventListener("click", () => {
    tipResult.innerText = "$" + (billInput.value * (50 / 100)).toFixed(2);
    totalResult.innerText = "$" + (billInput.value * (50 / 100)* peopleInput.value).toFixed(2);
})


costumBtn.addEventListener("keyup", e => {
    
    if(e.key == "Enter"){
        tipResult.innerText = "$" + (billInput.value * (costumBtn.value / 100)).toFixed(2);
        totalResult.innerText = "$" + (billInput.value * (costumBtn.value / 100) * peopleInput.value).toFixed(2);
    }
    
});

reset.addEventListener('click', () => {
    billInput.value = ""
    peopleInput.value = ""
    costumBtn.value = ""
    tipResult.innerText = "$" + "0";
    totalResult.innerText = "$" + "0";
})