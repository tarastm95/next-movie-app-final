import { Video } from '@/app/interfaces/Movie';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import { MovieVideosProps } from '@/app/interfaces/Movie';

const MovieVideos: React.FC<MovieVideosProps> = ({ videos }) => {
    const baseImageUrl = 'https://img.youtube.com/vi/';

    return (
        <Container sx={{ marginTop: 4 }}>
            <Typography variant="h4" gutterBottom>
                Movie Videos
            </Typography>
            <Grid container spacing={4}>
                {videos.slice(0, 6).map((video) => (
                    <Grid item xs={12} sm={6} md={4} key={video.id}>
                        <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <CardMedia
                                component="iframe"
                                height="200"
                                width="100%"
                                src={`https://www.youtube.com/embed/${video.key}`}
                                title={video.name}
                                sx={{ objectFit: 'cover' }}
                            />
                            <CardContent sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Typography variant="h6" gutterBottom>
                                    {video.name}
                                </Typography>
                                <Box sx={{ marginTop: 2 }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        href={`https://www.youtube.com/watch?v=${video.key}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ width: '100%', textAlign: 'center' }}
                                    >
                                        Watch on YouTube
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                {videos.length === 0 && (
                    <Typography>No videos available.</Typography>
                )}
            </Grid>
        </Container>
    );
};

export default MovieVideos;
