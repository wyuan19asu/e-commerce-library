import React, { useEffect, useState } from 'react'
import EmptyCart from '../assets/empty_cart.svg'
import { Link } from 'react-router-dom';
export default function Cart({ cart, changeQuantity, removeItem }) {
    const total = () => {
        let price = 0;
        cart.forEach(item => {
            price +=
                +((item.salePrice || item.originalPrice) * item.quantity);
        });
        return price;
    }


    const subTotal = () => {

    }
    return (
        <div id="books__body">
            <main id="books">
                <div className="books__container">
                    <div className="row">
                        <div className="books__selected--top">
                            <h2 className="cart__title">Cart</h2>
                        </div>
                        <div className="cart">
                            <div className="cart__header">
                                <span className="cart__book">Book</span>
                                <span className="cart__quantity">Quantity</span>
                                <span className="cart__total">Price</span>
                            </div>
                            <div className="cart__body">
                                {
                                    cart.map((book) => {
                                        const itemPrice = (book.salePrice || book.originalPrice);
                                        return (
                                            <div className="cart__item" key={book.id}>
                                                <div className="cart__book">
                                                    <img src={book.url} alt="" className='cart__book--img' />
                                                    <div className="cart__book--info">
                                                        <span className="cart__book--title">{book.title}</span>
                                                        <span className="cart__book--price">${itemPrice.toFixed(2)}</span>
                                                        <button className='cart__book--remove' onClick={() => removeItem(book)}>Remove</button>
                                                    </div>
                                                </div>
                                                <div className="cart__quantity">
                                                    <input
                                                        type="number"
                                                        min={0}
                                                        max={99}
                                                        value={book.quantity}
                                                        className='cart__input' onChange={(event) => changeQuantity(book, event.target.value)} />
                                                </div>
                                                <div className="cart__total">
                                                    ${(itemPrice * book.quantity).toFixed(2)}
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            {
                                cart.length === 0 && (<div className="cart__empty">
                                    <img src={EmptyCart} alt="" className='cart__empty--img' />
                                    <h2>You don't have any books in your cart!</h2>
                                    <Link to="/books">
                                        <button className="btn">Browse books</button>
                                    </Link>
                                </div>
                                )
                            }

                            {
                                cart.length > 0 && (<div className="total">
                                    <div className="total__item total__sub-total">
                                        <span>Subtotal</span>
                                        <span>${(total() * 0.9).toFixed(2)}</span>
                                    </div>
                                    <div className="total__item total__tax">
                                        <span>Tax</span>
                                        <span>${(total() * 0.1).toFixed(2)}</span>
                                    </div>
                                    <div className="total__item total__price">
                                        <span>Total</span>
                                        <span>${total().toFixed(2)}</span>
                                    </div>
                                    <button className="btn btn__checkout no-cursor" onClick={() => alert("not yet")}>Proceed to checkout</button>
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
