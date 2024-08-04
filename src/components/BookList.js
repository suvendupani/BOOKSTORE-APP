import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import BookTile from "./BookTile";
import Header from "./Header";
import { useAuth } from "./AuthProvider";

function BookList(){
   const [bookList, setBookList] = useState([]);

   //const [cartData, setCartData] = useState([]);
   const {cartData, setCartData} = useAuth();

    useEffect(() => {
        axios.get('http://localhost:8080/cart/user/1001')
            .then(response => {
                console.log(response);
                setCartData(response.data)
            })

            .catch(error =>{
                console.log(error)
            })
    },[]);
   

    useEffect(() =>{
        axios.get('http://localhost:8080/books')
        .then(response => {
            console.log(response);
            setBookList(response.data)
        }).catch(error=>{
            console.log(error)
        });
    },[]);

    const addToCartClickHandler = (book) => {
   
        axios.post('http://localhost:8080/cart/user/1001', book)
            .then(response => {
                console.log(response);
                alert("Book added successfully to cart.")
                setCartData(prev =>[...prev, book]);
            }).catch(error=>{
                console.log(error)
            });
    }

    

  const bookRenderList =  bookList.map( (book) => {
        return <BookTile book={book} key={book} addToCartClickHandler = {addToCartClickHandler}/>
    });

    return (
     <div>
         <Header cartData={cartData}/>
         <ol className="list-group list-group-numbered">
             {bookRenderList}
        </ol>
    </div>   
   );
}

export default BookList;