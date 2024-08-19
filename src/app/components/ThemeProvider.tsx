'use client';

import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export default function ClientThemeProvider({ children }: { children: ReactNode }) {
    const theme = useSelector((state: RootState) => state.theme.theme);

    return (
        <html lang="en" data-theme={theme}>
        <body>
        {children}
        </body>
        </html>
    );
}
