import React from 'react'

export default function Book({ img, title, rating, originalPrice, salePrice }) {
    return (
        <div className="book">
            <figure className="book__img--wrapper">
                {img}
            </figure>
            <div className="book__title">
                <a href="/" className='book__title--link'>
                    {title}
                </a>
            </div>
            <div className="book__ratings">
                {/* <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star-half-alt" /> */}
            </div>
            <div className="book__price">
                <span className="book__price--normal">
                    {originalPrice}
                </span>
                {salePrice}
            </div>
        </div>)
}
