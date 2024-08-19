import { CardMedia } from '@mui/material';
import { PosterPreviewProps } from '@/app/interfaces/Movie';

export default function PosterPreview({ posterPath, alt }: PosterPreviewProps) {
    return (
        <CardMedia
            component="img"
            image={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt={alt}
            height="300"
            sx={{ objectFit: 'cover' }}
        />
    );
}
