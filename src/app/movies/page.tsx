import MoviesList from '@/app/components/MoviesList';
import { fetchMovies } from '@/app/services/moviesService';

export default async function Page({ searchParams }: { searchParams: { page?: string } }) {
    const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;

    try {
        const { movies, totalPages } = await fetchMovies(page);

        return (
            <div>
                <MoviesList
                    moviesData={movies}
                    totalPages={totalPages}
                    currentPage={page}
                />
            </div>
        );
    } catch (error) {
        console.error('Failed to fetch movies:', error);
        return <p>Failed to fetch movies.</p>;
    }
}
