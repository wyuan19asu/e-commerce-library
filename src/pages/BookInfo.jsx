import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useParams } from 'react'
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import Price from '../ui/Price';

export default function BookInfo({ books }) {
    // const params = useParams();
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
                                <img src="https://covers.openlibrary.org/b/id/8091016-L.jpg" alt="" />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book_selected__title">
                                    Crack the coding interview
                                </h2>
                                <Rating rating="4" />
                                <div className="book__selected--price">
                                    <Price salePrice={15} originalPrice={50} />
                                </div>
                                <div className="book__summary">
                                    <div className="book__summary--title">
                                        Summary
                                    </div>
                                    <p className="book__summary__para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam reprehenderit sunt soluta fugit dolore, ipsum, quo numquam repellendus recusandae reiciendis placeat ea quidem voluptatem dolorem deserunt voluptates ducimus beatae aspernatur!
                                    </p>
                                    <p className="book__summary__para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam reprehenderit sunt soluta fugit dolore, ipsum, quo numquam repellendus recusandae reiciendis placeat ea quidem voluptatem dolorem deserunt voluptates ducimus beatae aspernatur!
                                    </p>
                                </div>
                                <button className="btn">Add to cart</button>
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
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
