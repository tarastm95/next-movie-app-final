import Rating from '@mui/material/Rating';
import { StarsRatingProps } from '@/app/interfaces/Movie';

export default function StarsRating({ rating }: StarsRatingProps) {
    return (
        <Rating
            name="rating"
            value={rating / 2}
            precision={0.1}
            readOnly
        />
    );
}
