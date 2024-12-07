const API_KEY = '9085453d86649703329e5cd1ff9dd599';
const APILINK = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`;
const GENRES_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");
const genreDropdown = document.getElementById("genreDropdown");

// Fetch Genres and Populate Dropdown
fetch(GENRES_API)
    .then(res => res.json())
    .then(data => {
        const genres = data.genres;
        const dropdownMenu = genreDropdown.nextElementSibling;

        genres.forEach(genre => {
            const genreItem = document.createElement('li');
            const genreLink = document.createElement('a');
            genreLink.classList.add('dropdown-item');
            genreLink.href = "#";
            genreLink.textContent = genre.name;
            genreLink.dataset.genreId = genre.id; // Store the genre ID in a data attribute

            // Add click event for filtering movies by genre
            genreLink.addEventListener('click', (e) => {
                e.preventDefault();
                const genreId = e.target.dataset.genreId;
                filterMoviesByGenre(genreId);
            });

            genreItem.appendChild(genreLink);
            dropdownMenu.appendChild(genreItem);
        });
    })
    .catch(error => console.error("Error fetching genres: ", error));

// Fetch and Display Movies
function returnMovies(url) {
    fetch(url)
        .then(res => {
            if (!res.ok) throw new Error("Network response was not ok");
            return res.json();
        })
        .then(data => {
            main.innerHTML = ''; // Clear previous movies
            data.results.forEach(element => {
                const div_card = document.createElement('div');
                div_card.setAttribute('class', 'card');

                const div_row = document.createElement('div');
                div_row.setAttribute('class', 'row');

                const div_column = document.createElement('div');
                div_column.setAttribute('class', 'column');

                const image = document.createElement('img');
                image.setAttribute('class', 'thumbnail');
                const imageSrc = element.poster_path ? IMG_PATH + element.poster_path : 'path/to/default-image.jpg';
                image.setAttribute('src', imageSrc);

                const link = document.createElement('a');
                link.setAttribute('href', `reviews.html?id=${element.id}&title=${element.poster_path}`);
                link.appendChild(image);

                const center = document.createElement('div');
                center.setAttribute('class', 'center');
                center.appendChild(link);

                div_card.appendChild(center);
                div_column.appendChild(div_card);
                div_row.appendChild(div_column);

                main.appendChild(div_row);
            });
        })
        .catch(error => console.error("Fetch error: ", error));
}

// Filter Movies by Genre
function filterMoviesByGenre(genreId) {
    const genreURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&sort_by=popularity.desc`;
    returnMovies(genreURL);
}

// Search Movies
form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = "";

    const searchItem = search.value;

    if (searchItem) {
        returnMovies(SEARCHAPI + searchItem);
        search.value = "";
    }
});

// Load popular movies initially
returnMovies(APILINK);
