const baseUrl = "http://localhost:5678/api/";

const getAllWorks = async () => {
  const response = await fetch(baseUrl + "works");
  const data = await response.json();
  return data;
};

const getCategories = async () => {
  const response = await fetch(baseUrl + "categories");
  const data = await response.json();
  return data;
};

const login = async (email, password) => {
  const response = await fetch(baseUrl + "users/login", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  console.log(response);
  const data = await response.json();
  if (response.status == 200) {
    return data;
  } else {
    return undefined;
  }
};

/*const response = await fetch("http://localhost:5678/api/works" + "/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/Json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  if (response.status === 200 || 204) {
    refreshGallery();
  } else if (response.status === 401 || 400) {
    console.log("erreur");
  }
*/