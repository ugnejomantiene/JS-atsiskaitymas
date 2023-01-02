/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

let button = document.querySelector("#btn__element");
let display = document.querySelector("#btn__state");
let clickCount = 0;

function handleClick() {
  clickCount++;
  display.innerHTML = clickCount;
}

button.addEventListener("click", handleClick); //have fun <3