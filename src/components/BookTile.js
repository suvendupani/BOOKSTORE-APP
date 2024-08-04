import React from "react";

function BookTile(props){
    const {book, addToCartClickHandler} = props;
    return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{book.title}</div>
        {book.author}
      </div>
      <button type="button" class="btn btn-primary" onClick={() => addToCartClickHandler(book)}>Add To Cart</button>
    </li>
    );
}

export default BookTile;