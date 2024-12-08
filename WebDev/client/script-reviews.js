

document.addEventListener("DOMContentLoaded", () => {
    const movieID = "https://api.themoviedb.org/3/review/{review_id}";
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get('id');

    if (movieId) {
        fetchReviews(movieId);
        fetchTrailer(movieId);
    } else {
        console.error("Movie ID not found in the URL.");
    }
});

function fetchReviews(movieId) {
    const REVIEWS_API = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=9085453d86649703329e5cd1ff9dd599`;

    fetch(REVIEWS_API)
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((reviewData) => {
            renderReviews(reviewData.results);
        })
        .catch((error) => {
            console.error("Failed to fetch reviews: ", error);
            renderError("Unable to fetch reviews. Please try again later.");
        });
}

function renderReviews(reviews) {
    const main = document.getElementById('reviews-section');

    if (reviews.length > 0) {
        reviews.forEach((review) => {
            const reviewCard = document.createElement('div');
            reviewCard.className = 'review-card';

            reviewCard.innerHTML = `
                <p><strong>${review.author}</strong>: ${review.content.substring(0, 200)}...</p>
            `;
            main.appendChild(reviewCard);
        });
    } else {
        renderError('No reviews available for this movie.');
    }
}

function fetchTrailer(movieId) {
    const TRAILER_API = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=9085453d86649703329e5cd1ff9dd599`;

    fetch(TRAILER_API)
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((videoData) => {
            const trailers = videoData.results.filter(
                (video) => video.type === 'Trailer' && video.site === 'YouTube'
            );

            if (trailers.length > 0) {
                renderTrailer(trailers[0]); // Use the first available trailer
            } else {
                renderError('No trailer available for this movie.');
            }
        })
        .catch((error) => {
            console.error('Failed to fetch trailer: ', error);
            renderError('Unable to fetch trailer. Please try again later.');
        });
}

function renderTrailer(trailer) {
    const trailerSection = document.getElementById('trailer-section');
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${trailer.key}`;
    iframe.width = '560';
    iframe.height = '315';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;

    trailerSection.appendChild(iframe);
}

function renderError(message) {
    const main = document.getElementById('reviews-section');
    const errorElement = document.createElement('p');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    main.appendChild(errorElement);
}

