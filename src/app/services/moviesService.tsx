import {
    Movie,
    MoviesResponse,
    Genre,
    FetchGenresResponse,
    Video,
    FetchMovieVideosResponse
} from '@/app/interfaces/Movie';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjU3NTFiZDJjODI2NjU0MjFhODc3NTM2NWJlYWU5NCIsIm5iZiI6MTcyMzQ1ODYyOS44MjkyODEsInN1YiI6IjY2YjliYThiNzQzN2UxMzc4ZjA1ZmIwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LHUtgTyEdZ7wkzG1Od3cYiGi1sBGHgoNQdLuvYckWuQ';

export const fetchMovies = async (page: number = 1): Promise<{
    movies: Movie[],
    totalPages: number,
    totalResults: number
}> => {
    try {
        const response = await fetch(`${API_URL}/discover/movie?page=${page}`, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
        });
        const data: MoviesResponse = await response.json();
        return {movies: data.results, totalPages: data.total_pages, totalResults: data.total_results};
    } catch (error) {
        console.error('Error fetching popular movies:', error);
        return {movies: [], totalPages: 0, totalResults: 0};
    }
};

export const fetchMovieDetails = async (movieId: number): Promise<Movie | null> => {
    try {
        const response = await fetch(`${API_URL}/movie/${movieId}?api_key=${API_KEY}`, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching movie details: ${response.statusText}`);
        }

        const data: Movie = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return null;
    }
};

export const fetchGenres = async (): Promise<{ genres: Genre[] }> => {
    try {
        const response = await fetch(`${API_URL}/genre/movie/list?api_key=${API_KEY}`, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
        });
        const data: FetchGenresResponse = await response.json();
        return {genres: data.genres};
    } catch (error) {
        console.error('Error fetching genres:', error);
        return {genres: []};
    }
};

export const fetchMoviesByGenre = async (genreId: number, page: number = 1): Promise<{
    movies: Movie[],
    totalPages: number,
    totalResults: number
}> => {
    try {
        const response = await fetch(`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${page}`, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
        });
        const data: MoviesResponse = await response.json();
        return {movies: data.results, totalPages: data.total_pages, totalResults: data.total_results};
    } catch (error) {
        console.error('Error fetching movies by genre:', error);
        return {movies: [], totalPages: 0, totalResults: 0};
    }
};

export const searchMovies = async (query: string, page: number = 1): Promise<{
    movies: Movie[],
    totalPages: number,
    totalResults: number
}> => {
    try {
        const response = await fetch(`${API_URL}/search/movie?query=${encodeURIComponent(query)}&page=${page}&api_key=${API_KEY}`, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
        });
        const data: MoviesResponse = await response.json();
        return {movies: data.results, totalPages: data.total_pages, totalResults: data.total_results};
    } catch (error) {
        console.error('Error searching movies:', error);
        return {movies: [], totalPages: 0, totalResults: 0};
    }
};

export const fetchMovieVideos = async (movieId: number): Promise<Video[]> => {
    try {
        const response = await fetch(`${API_URL}/movie/${movieId}/videos?api_key=${API_KEY}`, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
        });
        const data: FetchMovieVideosResponse = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching movie videos:', error);
        return [];
    }
};


