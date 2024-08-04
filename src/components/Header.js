import React from "react";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Header(props){
    const auth = useAuth();
    const navigate = useNavigate();

    return (
        <div className="alert alert-primary" role="alert">
        <Link to="/booklist"><h2>Book Store</h2></Link>
        <button type="button" class="btn btn-primary position-relative"  style={{  marginRight:"15px", marginTop:"-44px", float:'right'}} 
            onClick={()=>navigate("/cartlist")}>
            View Cart <i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {props.cartData.length}
            <span class="visually-hidden">unread messages</span>
        </span>
        </button>
        <i class="fa fa-sign-out" aria-hidden="true" onClick= {() => auth.logOut()} style={{ fontSize:"22px", marginTop:"-33px", float:'right', marginRight:"-12px" }}></i>
      </div>
    );
}

export default Header;

