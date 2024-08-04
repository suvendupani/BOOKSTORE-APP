import React from "react";
import CartTile from "./CartTile";
import axios from "axios";
import { useEffect,useState } from "react";
import Header from "./Header";
import { useAuth } from "./AuthProvider";

function CartList(props){
    const {cartData, setCartData} = useAuth();
    const cartRenderList =  cartData.map( (book, index) => {
        return <CartTile dataindex={index} book={book} key={book.id}/>
    });

    const processCartClickHandler = () => {
        axios.post('http://localhost:8080/cart/user/1001/process', cartData)
            .then(response => {
                console.log(response);
                setCartData([])
                alert("Processed") 
            }).catch(error=>{
                console.log(error)
            });
         }

    return (
     <div>
         <Header cartData={cartData}/>
         <ol className="list-group list-group-numbered">
             {cartRenderList}
        </ol>
        <button type="button" class="btn btn-primary" onClick={() => processCartClickHandler()}>Process</button>
    </div>   
   );
}

export default CartList;