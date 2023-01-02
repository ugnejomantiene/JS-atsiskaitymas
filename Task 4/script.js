/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';


fetch(ENDPOINT)
  .then(info => info.json())
  .then(data => data)
  .then(data => {
    let atvaizdavimas = ""
    data.forEach(marke => {
      atvaizdavimas += `
  <div class="card">
    <h1 class="brand">${marke.brand}</h1><br>
    <p class="models">${marke.models}</p>
  </div>
  `
    document.querySelector("#output").innerHTML = atvaizdavimas
    })});