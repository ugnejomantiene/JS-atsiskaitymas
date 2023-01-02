/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    let kg = e.target.elements.kg.value;
    console.log(kg)
    function svarai() {
      let svaraiAtsakymas = kg * 2.2046
      return svaraiAtsakymas
    }
    function gramai() {
      let gramaiAtsakymas = kg / 0.001
      return gramaiAtsakymas
    }
    function uncijos() {
      let uncijosAtsakymas = kg * 35.274
      return uncijosAtsakymas
    }
  
  
    document.querySelector("h2").innerHTML = `
    <p class="resultsblock">
    ${kg} kg yra ${svarai()} lb <br>
    ${kg} kg yra ${gramai()} g <br>
    ${kg} kg yra ${uncijos()} oz <br>
    </p>
    `
  
  })