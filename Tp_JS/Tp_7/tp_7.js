const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movieContainer = document.querySelector(".movie-container");
const searchBox = document.getElementById("search-box");
const searchButton = document.getElementById("search-button");

// Fonction pour afficher les films
function showMovies(movies) {
  movieContainer.innerHTML = "";
  movies.forEach(movie => {
    const { poster_path, title, vote_average, overview } = movie;
    const movieElem = document.createElement("div");
    movieElem.classList.add("movie");
    movieElem.innerHTML = `
      <img src="${IMGPATH + poster_path}" alt="${title}">
      <div class="popup">
        <h3>${title}</h3>
        <p>${overview}</p>
        <p>Note : ${vote_average}</p>
      </div>
    `;
    movieContainer.appendChild(movieElem);
  });
}

// Fonction pour chercher les films
function searchMovies(searchTerm) {
  fetch(SEARCHAPI + searchTerm)
    .then(response => response.json())
    .then(data => {
      if (data.results.length === 0) {
        movieContainer.innerHTML = "<h2>Aucun film trouvé</h2>";
      } else {
        showMovies(data.results);
      }
    });
}

// Afficher les films par défaut au chargement de la page
fetch(APIURL)
  .then(response => response.json())
  .then(data => showMovies(data.results));

// Rechercher les films lorsqu'on soumet le formulaire
searchButton.addEventListener("click", () => {
  const searchTerm = searchBox.value;
  if (searchTerm) {
    searchMovies(searchTerm);
  }
});

// Rechercher les films lorsqu'on tape sur une touche
searchBox.addEventListener("keyup", event => {
  const searchTerm = event.target.value;
  if (searchTerm) {
    searchMovies(searchTerm);
  } else {
    fetch(APIURL)
      .then(response => response.json())
      .then(data => showMovies(data.results));
  }
});
