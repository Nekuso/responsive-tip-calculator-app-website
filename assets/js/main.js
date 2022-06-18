billInput = document.querySelector(".bill__input");

tip__buttons = document.querySelectorAll(".tip__buttons button");
reset = document.querySelector(".reset");


tipResult = document.querySelector(".tip__result");
totalResult = document.querySelector(".total__result");

tip__buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("button.active").classList.remove("active");
        btn.classList.add("active");
        console.log(billInput.value)
    });
});

reset.addEventListener('click', () => {
    tipResult.innerText = "$" + "0";
    totalResult.innerText = "$" + "0";
})