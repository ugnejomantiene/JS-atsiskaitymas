/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';


async function getUsers() {
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  const output = document.querySelector("#output");
  let html = "";

  data.forEach(item => {
    html += `
      <div class="mainUsers">
        <div class="users"> 
          <img src="${item.avatar_url}" alt="">
        </div>
        <br>
        <div class="login">
          <p>Login: ${item.login} </p>
        </div>
      </div>
    `;
  });

  output.innerHTML = html;
}

document.querySelector("#btn").addEventListener("click", (e) => {
  console.log(e);
  getUsers();

  const button = document.querySelector("#btn");
  button.setAttribute("class", "hidden");
});