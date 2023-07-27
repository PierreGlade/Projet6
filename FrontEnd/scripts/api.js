const baseUrl = "http://localhost:5678/api/";

const getAllWorks = async () => {
  const response = await fetch(baseUrl + "works");
  const data = await response.json();
  return data;
};
