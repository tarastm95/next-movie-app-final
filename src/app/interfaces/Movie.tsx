export interface Movie {
    id: number;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    genre_ids: number[];
    runtime: number;
    popularity: number;
    original_language: string;
    budget: number;
    revenue: number;
    production_countries: {
        iso_3166_1: string;
        name: string;
    }[];
}


export interface MoviesResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export interface Genre {
    id: number;
    name: string;
}

export interface FetchGenresResponse {
    genres: Genre[];
}

export interface Video {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    site: string;
    size: number;
    type: string;
}

export interface FetchMovieVideosResponse {
    results: Video[];
}

export interface SearchProps {
    searchParams?: {
        query?: string;
        page?: string;
    };
}

export interface PageProps {
    params: { id: string };
    searchParams: {
        title?: string;
        overview?: string;
        poster_path?: string;
        vote_average?: string;
        release_date?: string;
        genre_ids?: string;
        popularity?: string;
        original_title?: string;
        original_language?: string;
        runtime?: string;
        production_countries?: string;
        budget?: string;
        revenue?: string;
    };
}

export interface GenreProps {
    params: { id: string };
    searchParams: { name?: string; page?: string };
}

export interface StarsRatingProps {
    rating: number;
}

export interface PosterPreviewProps {
    posterPath: string;
    alt: string;
}

export interface MovieVideosProps {
    videos: Video[];
}

export interface ClientPaginationQueryProps {
    initialCurrent: number;
    total: number;
    pageSize: number;
    baseRoute: string;
    query: string;
}

export interface ClientPaginationProps {
    initialCurrent: number;
    total: number;
    pageSize: number;
    baseRoute: string;
}
