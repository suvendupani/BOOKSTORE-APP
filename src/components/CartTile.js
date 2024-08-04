import React from "react";
import axios from "axios";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

function CartTile(props){
    const {book} = props;
    const auth = useAuth();
    const navigate = useNavigate();
    
    const removeFromCartClickHandler = (id, dataindex) => {
      axios.delete('http://localhost:8080/cart/user/1001/book/'+id)
          .then(response => {
              console.log(response);
              const newArray = auth.cartData.filter((item,index) => index !== dataindex);
              auth.setCartData(newArray);
              alert("Book deleted successfully from cart." + dataindex);
              navigate("/cartlist")
          }).catch(error=>{
              console.log(error)
          });
       }

    return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{book.title}</div>
        {book.author}
      </div>
      <button type="button" class="btn btn-danger" onClick={() =>{removeFromCartClickHandler(book.id, props.dataindex)}}>Delete</button>

    </li>
    );
}

export default CartTile;