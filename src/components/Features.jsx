import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Book from './Book';
import { books } from '../data'

export default function Features() {
    function getFiveStartBooks() {

    }
    return (
        <section id="features">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        <span className="purple">Books</span>
                    </h2>
                    <div className="books">
                        <Book />
                        <Book />
                        <Book />
                        <Book />
                        <div className="book">
                            <figure className="book__img--wrapper">
                                <img src="https://covers.openlibrary.org/b/id/8091016-L.jpg" alt="" />
                            </figure>
                            <div className="book__title">
                                <a href="/" className='book__title--link'>
                                    Atomic Habits
                                </a>
                            </div>
                            <div className="book__ratings">
                                <FontAwesomeIcon icon="star" />
                                <FontAwesomeIcon icon="star" />
                                <FontAwesomeIcon icon="star" />
                                <FontAwesomeIcon icon="star" />
                                <FontAwesomeIcon icon="star-half-alt" />
                            </div>
                            <div className="book__price">
                                <span className="book__price--normal">
                                    $15.00
                                </span>
                                $10.00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
