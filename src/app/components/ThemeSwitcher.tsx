'use client';

import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';
import { RootState } from '../store/store';

export default function ThemeSwitcher() {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.theme.theme);

    const handleToggle = () => {
        dispatch(toggleTheme());
        if (document.body) {
            if (theme === 'light') {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
        }
    };

    return (
        <button className="theme-switcher-btn" onClick={handleToggle}>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
    );
}
