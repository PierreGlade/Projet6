const loginForm = document.getElementById("loginForm");
const statusMessage = document.getElementById("status");

document.querySelector("#connect").addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("cliqué");

  const username = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  console.log(username);
  console.log(password);
  const data = await login(username, password);
  console.log(data);
  if (data.token) {
    statusMessage.textContent = "Bienvenue";
    window.localStorage.setItem("token", data.token);
    console.log("Token obtenu");
    adminPage();
  } else {
    statusMessage.textContent = "Erreur";
  }
});

function adminPage() {
  document.location.href = "index.html";
  const adminHead = document.querySelector(".adminHead");
  adminHead.style.display = null;
}
