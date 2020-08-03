const searchInput = document.getElementById("search");
const searchButton = document.getElementById("searchButton");
const pokemonDiv = document.getElementById("pokemonDiv");

const searchPokemon = async (pokemonId) => {
  const { data } = await axios.get(`http://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  console.log("name: " + data.name);
  console.log("Height: " + data.height);
  console.log("weight: " + data.weight);
  console.log("weight: " + data.sprites.front_default);
  makeDiv(data.name, data.height, data.weight,data.sprites.front_default, data.sprites.back_default);
};

const makeDiv = (name, height, weight, picture, pictureBack) => {
  let nameDiv = document.createElement("div");
  let heightDiv = document.createElement("div");
  let weightDiv = document.createElement("div");
  let pictureDiv = document.createElement("img");
  pictureDiv.src=picture;

  nameDiv.innerHTML ="Name: " + name;
  heightDiv.innerHTML = "Height: " + height;
  weightDiv.innerHTML = "Weight: " + weight;
  pictureDiv.innerHTML = picture;

  pokemonDiv.appendChild(nameDiv);
  pokemonDiv.appendChild(heightDiv);
  pokemonDiv.appendChild(weightDiv);
  pokemonDiv.appendChild(pictureDiv);

  pictureDiv.onmouseover=()=>pictureDiv.src=pictureBack;
  pictureDiv.onmouseout=()=>pictureDiv.src=picture;
}



searchButton.addEventListener("click", () => {
  searchPokemon(searchInput.value);
});





