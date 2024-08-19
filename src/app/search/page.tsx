import { Rating, Card, CardContent, CardMedia, Typography, Button, Grid, Container } from '@mui/material';
import Link from 'next/link';
import ClientPaginationQuery from '@/app/components/ClientPaginationQuery';
import { Movie } from '@/app/interfaces/Movie';
import { searchMovies } from '@/app/services/moviesService';
import styles from "@/app/styles/MoviesList.module.css";
import { SearchProps } from '@/app/interfaces/Movie';

const SearchPage = async ({ searchParams = {} }: SearchProps) => {
    const query = searchParams.query || '';
    const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;

    const { movies, totalPages } = await searchMovies(query, page);

    return (
        <Container>
            <Typography variant="h1" gutterBottom>
                Search Results
            </Typography>
            <Grid container spacing={4}>
                {movies.length > 0 ? (
                    movies.map((movie: Movie) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                            <Card sx={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                <CardMedia
                                    component="img"
                                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    height="300"
                                    sx={{objectFit: 'cover'}}
                                />
                                <CardContent sx={{flex: '1 0 auto'}}>
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
                                <CardContent sx={{flex: 'none', paddingTop: 0}}>
                                    <Link
                                        href={{
                                            pathname: `/movie/${movie.id}`,
                                            query: {
                                                title: movie.title,
                                                poster_path: movie.poster_path,
                                                vote_average: movie.vote_average.toString(),
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
                <ClientPaginationQuery
                    baseRoute="/search"
                    initialCurrent={page}
                    total={totalPages * 10}
                    pageSize={10}
                    query={query}
                />
            </div>
        </Container>
);
};

export default SearchPage;
