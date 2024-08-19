import React from 'react';
import { Box, Typography, Badge, Chip } from '@mui/material';
import Link from 'next/link';
import { fetchGenres } from '@/app/services/moviesService';

const GenreBadge = async () => {
    const { genres } = await fetchGenres();

    const uniqueGenres = Array.from(new Set(genres.map(genre => genre.name)))
        .map(name => genres.find(genre => genre.name === name)!)
        .filter(genre => genre);

    return (
        <Box sx={{
            display: 'flex',
            gap: 2,
            flexWrap: 'wrap',
            padding: 2,
            marginTop: 2
        }}>
            {uniqueGenres.map((genre) => (
                <Link
                    key={genre.id}
                    href={`/genre/${genre.id}?name=${encodeURIComponent(genre.name)}`}
                    passHref
                    style={{ textDecoration: 'none' }}
                >
                    <Chip
                        label={genre.name}
                        sx={{
                            backgroundColor: '#4caf50',
                            color: '#ffffff',
                            borderRadius: '12px',
                            padding: '6px 12px',
                            '&:hover': {
                                backgroundColor: '#388e3c',
                            }
                        }}
                    />
                </Link>
            ))}
        </Box>
    );
};

export default GenreBadge;
