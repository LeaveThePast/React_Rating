import React from 'react';
import Star from '../Star/Star';

export default function Stars({ count = 0 }) {
    const filledStars = Math.floor(count);
    const halfStar = count % 1 !== 0;

    return (
        <ul className="card-body-stars u-clearfix">
            {Array(filledStars).fill().map((_, index) => (
                <li key={index}>
                    <Star filled />
                </li>
            ))}
            {halfStar && (
                <li>
                    <Star halfFilled />
                </li>
            )}
            {Array(5 - Math.ceil(count)).fill().map((_, index) => (
                <li key={index}>
                    <Star />
                </li>
            ))}
        </ul>
    );
}