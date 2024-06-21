const API_KEY = 'api_key=4f00557104368d0ce446912832483512';
const url = 'https://api.themoviedb.org/3';
const API_URL = url + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500'

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search-form');

function showMovies(data) {
    main.innerHTML = '';

    (data.results).forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = ` 
        <img src="${IMG_URL+poster_path}" alt="${title}">
        <div class="movie-info">
            <h2>${title}</h2>
            <span class="green">${vote_average}</span>
        </div>
        <h3>Overview</h3>
        <div class="overview">
        ${overview}
        </div>`



        main.appendChild(movieEl);
    })


}
const getMovies = async() => {
    let data = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4f00557104368d0ce446912832483512`);
    let parsedData = await data.json();
    console.log(parsedData);
    showMovies(parsedData);
}
getMovies();

form.addEventListener('submit', (e) => {


})