import React from 'react';
import { fetchMoviesByGenre } from '@/app/services/moviesService';
import { Movie } from '@/app/interfaces/Movie';
import ClientPagination from "@/app/components/ClientPagination";
import Link from "next/link";
import { Rating, Button, Card, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';
import styles from "@/app/styles/MoviesList.module.css";
import { GenreProps } from "@/app/interfaces/Movie";

const Page = async ({ params, searchParams }: GenreProps) => {
    const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
    const genreId = parseInt(params.id, 10);
    const { name } = searchParams;

    const { movies, totalPages, totalResults } = await fetchMoviesByGenre(genreId, page);

    return (
        <Container>
            <Grid container spacing={4}>
                {movies && movies.length > 0 ? (
                    movies.map((movie: Movie) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    sx={{ objectFit: 'cover' }}
                                />
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography variant="h6" gutterBottom>
                                        {movie.title || 'No Title'}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        <Rating
                                            name={`rating-${movie.id}`}
                                            value={movie.vote_average / 2}
                                            precision={0.1}
                                            readOnly
                                        />
                                    </Typography>
                                </CardContent>
                                <CardContent sx={{ flex: 'none', paddingTop: 0 }}>
                                    <Link
                                        href={{
                                            pathname: `/movie/${movie.id}`,
                                            query: {
                                                title: movie.title || 'No Title',
                                                overview: movie.overview || 'No overview available',
                                                poster_path: movie.poster_path || '',
                                                vote_average: movie.vote_average.toString(),
                                                release_date: movie.release_date || 'N/A',
                                                genre_ids: movie.genre_ids.join(',') || '',
                                                popularity: movie.popularity.toString(),
                                                original_title: movie.original_title || '',
                                                original_language: movie.original_language || '',
                                                runtime: movie.runtime ? movie.runtime.toString() : 'N/A',
                                                production_countries: JSON.stringify(movie.production_countries) || '[]',
                                                budget: movie.budget ? movie.budget.toString() : 'N/A',
                                                revenue: movie.revenue ? movie.revenue.toString() : 'N/A',
                                            },
                                        }}
                                        passHref
                                    >
                                        <Button variant="contained" color="primary" fullWidth>
                                            View Movie Details
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Typography variant="body1" align="center">
                        No movies found.
                    </Typography>
                )}
            </Grid>
            <div className={styles.paginationContainer}>
                <ClientPagination
                    initialCurrent={page}
                    total={totalResults}
                    pageSize={10}
                    baseRoute={`/genre/${params.id}`}
                />
            </div>
        </Container>
    );
};

export default Page;
