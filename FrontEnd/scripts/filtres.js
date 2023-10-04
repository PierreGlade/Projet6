const btnFiltersAll = document.getElementById("btn_filters_all");
const btnFiltersObject = document.getElementById("btn_filters_object");
const btnFiltersAppartment = document.getElementById("btn_filters_appartement");
const btnFiltersHotel = document.getElementById("btn_filters_hotel");

btnFiltersAll.addEventListener("click", (e) => {
  e.preventDefault();
  filterWorks("all");
});
btnFiltersObject.addEventListener("click", (e) => {
  e.preventDefault();
  filterWorks("Objets");
});
btnFiltersAppartment.addEventListener("click", (e) => {
  e.preventDefault();
  filterWorks("Appartements");
});
btnFiltersHotel.addEventListener("click", (e) => {
  e.preventDefault();
  filterWorks("Hotels & restaurants");
});



async function filterWorks(category) {
  const allWorks = await getAllWorks();
  if (category === "all") {
    displayWorks(allWorks);
  } else {
    console.log(allWorks);
    const filteredWorks = allWorks.filter((work) => work.category.name === category);
    console.log(filteredWorks)
    console.log(category)
    displayWorks(filteredWorks);
    
  }
  
}



/*async function filterWorks() {
  const response = await fetch(baseUrl + "categories");
  const categories = await response.json();
  console.log(categories);
  return categories;
}*/

/*document
  .getElementById("btn_filters_all")
  .addEventListener("click", () => filterWorks("all"));
document
  .getElementById("btn_filters_object")
  .addEventListener("click", () => filterWorks("Objets"));
document
  .getElementById("btn_filters_appartement")
  .addEventListener("click", () => filterWorks("Appartements"));
document
  .getElementById("btn_filters_hotel")
  .addEventListener("click", () => filterWorks("Hotels & restaurants"));*/