import './index.css';
import Nav from "./components/Nav";
import Home from './pages/Home';
import Books from './pages/Books';
import BookInfo from './pages/BookInfo';
import Footer from './components/Footer';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { books } from './data'
import Cart from './pages/Cart';

function App() {
  const [cart, setCart] = useState([]);


  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    // loop through everything, if they match then change that quantity if not return the item
    setCart(cart.map((item) =>
      +item.id === +book.id ?
        {
          ...item,
          // quantity is from Cart.jsx the event.target.value
          quantity: +quantity,
        }
        : item
    )
    )
  }
  function removeItem(item) {
    setCart(cart.filter((book) => +book.id !== +item.id))
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += item.quantity;
    })
    return counter;
  }
  // function addToCart(book) {
  // this only sets it to one book
  // setCart([book])

  // code works for adding to cart
  //   const dupeItem = cart.find((item) => +item.id === +book.id);
  //   if (dupeItem) {
  //     setCart(cart.map((item) => {
  //       if (item.id === dupeItem.id) {
  //         return {
  //           ...item,
  //           quantity: item.quantity + 1,
  //         }
  //       }
  //       else {
  //         return item;
  //       }
  //     })
  //     );
  //   } else {
  //     // use spread operator
  //     setCart([...cart, { ...book, quantity: 1 }])
  //   }
  // }

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books books={books} />} />
          <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} cart={cart} />} />
          {/* pass in addtocart function then accept it */}
          <Route path='/cart' element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
        </Routes>

        <Footer />
      </div>
    </Router >
  );
}

export default App;
