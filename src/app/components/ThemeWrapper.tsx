'use client';

import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export default function ThemeWrapper({ children }: { children: ReactNode }) {
    const theme = useSelector((state: RootState) => state.theme.theme);

    return (
        <div data-theme={theme}>
            {children}
        </div>
    );
}
