import React from "react";
import { useState } from "react";
import { useAuth } from "./AuthProvider";


function Login(){
    const auth = useAuth();
    const [input, setInput] = useState({
        username: "",
        password: "",
      });
    
      const handleSubmitEvent = (e) => {
        console.log("submit");
        e.preventDefault();
        if (input.username !== "" && input.password !== "") {
          //dispatch action from hooks
          console.log("inpurt: " + input.username + " "+input.password );
          auth.loginAction(input);
          return;
        }
        alert("please provide a valid input");
      };
    
      const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    

    return (
        <form onSubmit={handleSubmitEvent}  style={{  margin:"0 auto", width:'400px'}}>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">User Name</label>
                <input type="text" name="username"  onChange={handleInput} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" name="password" onChange={handleInput} class="form-control" id="exampleInputPassword1" />
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    );
}

export default Login;