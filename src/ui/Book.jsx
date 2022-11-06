import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import Price from './Price';

export default function Book({ book }) {
    return (
        <div className="book">
            <Link to={`/books/${book.id}`}>
                <figure className="book__img--wrapper">
                    <img src={book.url} alt="" />
                </figure>
            </Link>
            <div className="book__title">
                <Link to={`/books/${book.id}`} className='book__title--link'>
                    {book.title}
                </Link>
            </div>
            <Rating rating="4.5" />
            <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
        </div>
    )
}