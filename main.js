const searchInput = document.getElementById("search");
const searchButton = document.getElementById("searchButton");
const pokemonDiv = document.getElementById("pokemonDiv");

const searchPokemon = async (pokemonId) => { 
  try{
  const { data } = await axios.get(`http://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  //const { types } = await axios.get(`https://pokeapi.co/api/v2/type/${pokemonId}`);
  makeDiv(data.name, data.height, data.weight,data.sprites.front_default, data.sprites.back_default, data.types);
  console.log(data.types);
  searchInput.value="";
  searchInput.focus();
} catch(err){
  let notFound = document.createElement("div");
  notFound.innerHTML="Pokemon not found!";
  pokemonDiv.appendChild(notFound);
}
};

const makeDiv = (name, height, weight, picture, pictureBack, types) => {
  let nameDiv = document.createElement("div");
  let heightDiv = document.createElement("div");
  let weightDiv = document.createElement("div");
  let pictureDiv = document.createElement("img");
  let typesDiv = document.createElement("div");
  pictureDiv.src=picture;

  nameDiv.innerHTML ="Name: " + name;
  heightDiv.innerHTML = "Height: " + height;
  weightDiv.innerHTML = "Weight: " + weight;
  typesDiv.innerHTML = "Type: ";

  for (let i=0; i< types.length; i++){
    let typeName = types[i].type.name;
    let typeUrl = types[i].type.url;
    let liElement = document.createElement('li');
    typesDiv.appendChild(liElement);
    const htmlTextTypes = `<a href= "#" , onclick='sameTypePokemons(${typeUrl})'> ${typeName} </a>`;
    liElement.innerHTML= htmlTextTypes;
  }

  pokemonDiv.appendChild(nameDiv);
  pokemonDiv.appendChild(heightDiv);
  pokemonDiv.appendChild(weightDiv);
  pokemonDiv.appendChild(pictureDiv);
  pokemonDiv.appendChild(typesDiv);

  pictureDiv.onmouseover=()=>pictureDiv.src=pictureBack;
  pictureDiv.onmouseout=()=>pictureDiv.src=picture;
}

searchButton.addEventListener("click", () => {
  searchPokemon(searchInput.value);
});





