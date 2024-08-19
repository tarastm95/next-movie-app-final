'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';

export default function ClientProvider({ children }: { children: ReactNode }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}
