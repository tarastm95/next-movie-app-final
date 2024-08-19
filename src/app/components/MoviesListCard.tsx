import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import Link from 'next/link';
import PosterPreview from './PosterPreview';
import StarsRating from './StarsRating';
import { Movie } from '@/app/interfaces/Movie';

interface MoviesListCardProps {
    movie: Movie;
}

export default function MoviesListCard({ movie }: MoviesListCardProps) {
    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <PosterPreview posterPath={movie.poster_path} alt={movie.title} />
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant="h6" gutterBottom>
                    {movie.title || 'No Title'}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    <StarsRating rating={movie.vote_average} />
                </Typography>
            </CardContent>
            <CardContent sx={{ flex: 'none', paddingTop: 0 }}>
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
                        View movie details
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
}
