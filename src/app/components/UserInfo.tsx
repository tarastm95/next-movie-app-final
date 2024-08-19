import React from 'react';
import { Box, Typography } from '@mui/material';

const UserInfo = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
                sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 1
                }}
            >
                <Typography variant="body2">U</Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'white' }}>Taras Mazepa</Typography>
        </Box>
    );
};

export default UserInfo;
