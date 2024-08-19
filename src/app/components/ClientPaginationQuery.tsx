'use client';

import { useState } from 'react';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import { useRouter } from 'next/navigation';
import { ClientPaginationQueryProps } from '@/app/interfaces/Movie';

export default function ClientPaginationQuery({ initialCurrent, total, pageSize, baseRoute, query }: ClientPaginationQueryProps) {
    const [current, setCurrent] = useState(initialCurrent);
    const router = useRouter();

    const MAX_PAGES = 500;
    const limitedTotal = Math.min(total, MAX_PAGES * pageSize);

    const handlePageChange = (page: number) => {
        setCurrent(page);
        router.push(`${baseRoute}?page=${page}&query=${encodeURIComponent(query)}`);
    };

    return (
        <Pagination
            current={current}
            total={limitedTotal}
            pageSize={pageSize}
            onChange={handlePageChange}
        />
    );
}
