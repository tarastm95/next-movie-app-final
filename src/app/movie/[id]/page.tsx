
import { Rating, Card, CardContent, CardMedia, Typography, Container, Box, Grid } from '@mui/material';
import { fetchMovieDetails, fetchMovieVideos } from '@/app/services/moviesService';
import { Movie } from '@/app/interfaces/Movie';
import { notFound } from 'next/navigation';
import MovieVideos from '@/app/components/MovieVideos';
import { PageProps } from '@/app/interfaces/Movie';


export default async function Page({ params, searchParams }: PageProps) {
    const { id } = params;
    const {
        title, overview, poster_path, vote_average, release_date,
        genre_ids, popularity, original_title, original_language,
        runtime, production_countries, budget, revenue
    } = searchParams;

    let movie: Movie | null = null;

    if (title && overview && poster_path && vote_average && release_date && genre_ids && popularity && original_title && original_language && runtime && production_countries && budget && revenue) {
        movie = {
            id: Number(id),
            title,
            overview,
            poster_path: poster_path || '',
            release_date: release_date || '',
            vote_average: Number(vote_average) || 0,
            genre_ids: genre_ids.split(',').map(Number) || [],
            popularity: Number(popularity) || 0,
            original_title: original_title || '',
            original_language: original_language || '',
            runtime: Number(runtime) || 0,
            production_countries: JSON.parse(production_countries || '[]'),
            budget: Number(budget) || 0,
            revenue: Number(revenue) || 0,
        };
    } else {
        movie = await fetchMovieDetails(Number(id));

        if (!movie) {
            notFound();
            return null;
        }
    }

    const videos = await fetchMovieVideos(Number(id));

    const baseImageUrl = 'https://image.tmdb.org/t/p/w500';

    if (!movie) {
        return null;
    }

    return (
        <Container sx={{ marginTop: 4 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                    <Card>
                        {movie.poster_path && (
                            <CardMedia
                                component="img"
                                image={`${baseImageUrl}${movie.poster_path}`}
                                alt={movie.title}
                                sx={{ height: 400, objectFit: 'cover' }}
                            />
                        )}
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Card>
                        <CardContent>
                            <Typography variant="h3" component="h1" gutterBottom>
                                {movie.title || 'No Title'}
                            </Typography>
                            <Typography variant="h5" color="textSecondary" paragraph>
                                {movie.original_title ? `Original Title: ${movie.original_title}` : 'No Original Title'}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" paragraph>
                                {movie.overview || 'No Overview'}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" paragraph>
                                {movie.release_date ? `Release Date: ${movie.release_date}` : 'No Release Date'}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" paragraph>
                                {movie.runtime ? `Runtime: ${movie.runtime} min` : 'No Runtime Information'}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" paragraph>
                                {movie.popularity ? `Popularity: ${movie.popularity.toFixed(1)}` : 'No Popularity Information'}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" paragraph>
                                {movie.original_language ? `Language: ${movie.original_language}` : 'No Language Information'}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" paragraph>
                                {movie.budget ? `Budget: $${movie.budget.toLocaleString()}` : 'No Budget Information'}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" paragraph>
                                {movie.revenue ? `Revenue: $${movie.revenue.toLocaleString()}` : 'No Revenue Information'}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" paragraph>
                                {movie.production_countries.length > 0
                                    ? `Production Countries: ${movie.production_countries.map(country => country.name).join(', ')}`
                                    : 'No Production Countries Information'}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
                                <Typography variant="h6" sx={{ marginRight: 2 }}>Rating:</Typography>
                                <Rating
                                    name="movie-rating"
                                    value={movie.vote_average / 2}
                                    precision={0.1}
                                    readOnly
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <MovieVideos videos={videos} />
        </Container>
    );
}
