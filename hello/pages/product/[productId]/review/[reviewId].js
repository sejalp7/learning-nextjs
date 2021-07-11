import React from 'react'
import { useRouter } from 'next/router';

export default function reiew() {
    const router = useRouter();
    const { productId, reviewId} = router.query;
    return (
        <div>
            <h1>Rview {reviewId} for product {productId}</h1>
        </div>
    )
}
