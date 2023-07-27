console.log("hello world");

const displayWorks = (allWorks) => {
  console.log(allWorks);
};

const init = async () => {
  const allWorks = await getAllWorks();
  displayWorks(allWorks);
};

document.body.onload = addElement;

function displayWorks(data) {
  const galleryDiv = document.getElementById("gallery");
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

init();
