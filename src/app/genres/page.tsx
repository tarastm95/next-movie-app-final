import React from 'react';
import { fetchGenres } from '@/app/services/moviesService';
import { Genre } from '@/app/interfaces/Movie';
import Link from 'next/link';
import { Container, Typography, Card, CardContent, Button, Grid } from '@mui/material';

const Page = async () => {
    const { genres } = await fetchGenres();

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Movie Genres
            </Typography>
            <Grid container spacing={3}>
                {genres.map((genre: Genre) => (
                    <Grid item xs={12} sm={6} md={4} key={genre.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" component="h2" gutterBottom>
                                    {genre.name}
                                </Typography>
                                <Link href={{
                                    pathname: `/genre/${genre.id}`,
                                    query: { name: genre.name }
                                }} passHref>
                                    <Button variant="contained" color="primary">
                                        Go to
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Page;
