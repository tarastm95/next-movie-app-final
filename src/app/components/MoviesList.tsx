import { Container, Grid, Typography } from '@mui/material';
import MoviesListCard from './MoviesListCard';
import ClientPagination from './ClientPagination';
import styles from '@/app/styles/MoviesList.module.css';
import { Movie } from '@/app/interfaces/Movie';

interface MoviesListProps {
    moviesData: Movie[];
    totalPages: number;
    currentPage: number;
}

export default function MoviesList({ moviesData, totalPages, currentPage }: MoviesListProps) {
    return (
        <Container>
            <Grid container spacing={4}>
                {moviesData.length > 0 ? (
                    moviesData.map(movie => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                            <MoviesListCard movie={movie} />
                        </Grid>
                    ))
                ) : (
                    <Typography variant="body1" align="center">
                        No movies available.
                    </Typography>
                )}
            </Grid>
            <div className={styles.paginationContainer}>
                <ClientPagination
                    baseRoute="/movies"
                    initialCurrent={currentPage}
                    total={totalPages * 10}
                    pageSize={10}
                />
            </div>
        </Container>
    );
}
