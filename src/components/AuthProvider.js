import { useContext, createContext,useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
const AuthProvider = ({ children }) => { 
    const [user, setUser] = useState(null);
    const [token, setToken] = useState("");
    const [cartData, setCartData] =  useState([]);

    const navigate = useNavigate();
    const loginAction = (data) => {
      try {
        if (data.username == "admin" && data.password == "admin") {
          setUser(data.user);
          setToken("1234");
          navigate("/booklist");
          return;
        }
        throw new Error("Not a valid userr");
      } catch (err) {
        alert("Not a valid user");
        console.error(err);
      }
    };
  
    const logOut = () => {
      setUser(null);
      setToken("");
      navigate("/login");
    };
  
    return (
      <AuthContext.Provider value={{ token, user, loginAction, logOut, cartData, setCartData }}>
        {children}
      </AuthContext.Provider>
    );
  
  };
  
  export default AuthProvider;
  
  export const useAuth = () => {
    return useContext(AuthContext);
};