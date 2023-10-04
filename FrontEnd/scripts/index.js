// Mode admin
let adminMode = false;

//Récupération dynamique des travaux

function displayWorks(data) {
  const galleryDiv = document.querySelector(".gallery");
  galleryDiv.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const figure = document.createElement("figure");
    figure.innerHTML = `
      <img src="${data[i].imageUrl}" alt="${data[i].title}" crossorigin="anonymous">
      <figcaption>${data[i].title}</figcaption>
    `;
    galleryDiv.appendChild(figure);
  }
}

// Recherche token

function checkToken() {
  if (localStorage.getItem("token")) {
    adminMode = true;
    //faire logout
    document.getElementById("Log").innerHTML = "Logout";
    document.getElementById("Log").addEventListener("click", logout());
    //création modifier
    document.querySelector(
      ".projects"
    ).innerHTML = `<h2>Mes projets</h2><p class="modify"><i class="fa-regular fa-pen-to-square" ></i
    >Modifier</p>`;
    //  ajouter event listener à modifier
    document.querySelector(".modify").addEventListener("click", modify);
    // Ouvrir la modale avec liste des images (getallworks)//
    // Rajouter icone poubelle + design//
    // ajouter event listener sur la poubelle
    // -> Récup la bonne image, envoyer l'effacement au backend, remettre à jour la liste image modale, remettre à jour la liste sur le index.html
    return true;
  }
  return false;
}

function displayWorksInModale(data) {
  const gallerieModale = document.querySelector(".gallerie_modale");
  gallerieModale.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const figure = document.createElement("figure");
    const trashIcon = document.createElement("div");
    trashIcon.classList.add("deleteIcon");
    trashIcon.value = data[i].id;
    figure.innerHTML = `
      <img src="${data[i].imageUrl}" alt="${data[i].title}" crossorigin="anonymous">
      
    `;
    trashIcon.innerHTML = `
    <i class="fa-regular fa-trash-can"></i>
            `;
    const imageGallerie = document.querySelector(".gallerie_modale");
    imageGallerie.appendChild(figure);
    figure.appendChild(trashIcon);
    //onclick poubelle supprimer image visée
    document.querySelectorAll(".deleteIcon").addEventListener =
      ("click", deleteOne);
  }
}

//Fonction de suppression d'un travail
async function deleteOne(e) {
  console.log("poubclic");
  /*let id = deleteOne.value;*/
}

// Fonction modifier modale
async function modify() {
  try {
    document.querySelector(".modale").classList.remove("noshow");
    const data = await getAllWorks();
    displayWorksInModale(data);
  } catch (error) {
    console.error("Error fetching or displaying data:", error);
  }
}

// Déconnection page Admin
function logout() {
  localStorage.clear();
}

//Définiton initialisation

const init = async () => {
  const allWorks = await getAllWorks();
  displayWorks(allWorks);
  const categories = await getCategories();
  if (checkToken()) {
    const adminHead = document.querySelector(".adminHead");
    adminHead.style.display = null;
    console.log("pageadmin");
  }
};

init();
