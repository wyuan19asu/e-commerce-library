import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import Price from '../ui/Price';
import Book from '../ui/Book';

export default function BookInfo({ books, addToCart, cart }) {
    // gets the param in the link which is the ':id'
    const { id } = useParams();

    // plus sign converts to int
    const book = books.find((book) => +book.id === +id)

    // checks if the book has been added to cart to change to checkout button
    // const [added, setAdded] = useState(false);

    function addBookToCart(book) {
        addToCart(book);
    }

    function bookExistOnCart() {
        return cart.find((book) => +book.id === +id)
    }

    return (
        <div className="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" className="book__link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/books" className='book__link'>
                                <h2 className="book__selected--title--top">Books</h2>
                            </Link>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img src={book.url} alt="" className='book__selected--img' />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book_selected__title">
                                    {book.title}
                                </h2>
                                <Rating rating={book.rating} />
                                <div className="book__selected--price">
                                    <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
                                </div>
                                <div className="book__summary">
                                    <div className="book__summary--title">
                                        Summary
                                    </div>
                                    <p className="book__summary--para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam reprehenderit sunt soluta fugit dolore, ipsum, quo numquam repellendus recusandae reiciendis placeat ea quidem voluptatem dolorem deserunt voluptates ducimus beatae aspernatur!
                                    </p>
                                    <p className="book__summary--para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam reprehenderit sunt soluta fugit dolore, ipsum, quo numquam repellendus recusandae reiciendis placeat ea quidem voluptatem dolorem deserunt voluptates ducimus beatae aspernatur!
                                    </p>
                                </div>
                                {bookExistOnCart() ? (
                                    <Link to={`/cart`} className="book__link">
                                        <button className='btn'>Checkout </button>
                                    </Link>
                                )
                                    : (
                                        <button className="btn" onClick={() => addBookToCart(book)}>Add to cart</button>
                                    )}
                                {/* pass in the book to cart
                                <button className="btn" onClick={() => addBookToCart(book)}>Add to cart</button> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="books__container">
                    <div className="row">
                        <div className="books__selected--top">
                            <h2 className="books__selected--title--top">
                                Recommended
                            </h2>
                            <div className="books">
                                {
                                    books
                                        .filter((book) => book.rating === 5 && +book.id !== +id)
                                        .map((book) => <Book book={book} key={book.id} />)
                                        .slice(0, 4)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
