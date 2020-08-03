const searchInput = document.getElementById("search");
const searchButton = document.getElementById("searchButton");
const pokemonDiv = document.getElementById("pokemonDiv");

const searchPokemon = async (pokemonId) => { 
  try{
  const { data } = await axios.get(`http://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  makeDiv(data.name, data.height, data.weight,data.sprites.front_default, data.sprites.back_default);
  searchInput.value="";
  searchInput.focus();
} catch(err){
  let notFound = document.createElement("div");
  notFound.innerHTML="Pokemon not found!";
  pokemonDiv.appendChild(notFound);
}
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





