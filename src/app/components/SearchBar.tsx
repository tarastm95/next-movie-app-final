'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, TextField, Button, Typography } from '@mui/material';

const SearchBar = () => {
    const router = useRouter();
    const [query, setQuery] = useState('');

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/search?page=1&query=${encodeURIComponent(query.trim())}`);
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSearch}
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                padding: 1,
                borderRadius: 1,
                backgroundColor: 'background.paper',
                boxShadow: 1,
                maxWidth: '600px',
                margin: '0 auto',
            }}
        >
            <TextField
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for movies"
                variant="outlined"
                size="small"
                sx={{
                    flex: 1,
                    backgroundColor: 'white',
                    borderRadius: 1,
                }}
            />
            <Button variant="contained" color="primary" type="submit">
                Search
            </Button>
        </Box>
    );
};

export default SearchBar;
