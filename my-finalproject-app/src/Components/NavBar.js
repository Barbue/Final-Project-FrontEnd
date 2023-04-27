import { Link } from "react-router-dom";
import { useAuth } from "../Hooks/AuthContext";
import { removeUserToken } from "../Hooks/authLocalStorage";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const NavBar = () => {
    
  const {isVerified, logout} = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const logoutResult = await logout();
    if (logoutResult) navigate("/login");
    
};

return (

          <nav> 

           <Link className="link" to="/"> Home </Link>   
           
           {isVerified && <Link className="link2" to="/ticketform"> Create Ticket </Link> }

         {isVerified && <Link className="link3" to="/registration"> Register </Link>}

          <Link className="link4" to="/login"> Login </Link> 
          
          
         {isVerified && <Button variant="primary" size="sm" onClick={handleLogout}>Logout</Button>}

         
          </nav> 
       
    // </div>
    )
 }




export default NavBar;














//<button onClick={handleLogout}>Logout</button>















// // import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../Hooks/Auth";

// const NavBar = () => {
//     //we need this in the navbar, so that we can log out
// 	//instead of passing logout through props,
// 	// we are importing the useAuth which is Auth's 
// 	// contxt which allows us to call logout()
// //  const auth = useAuth();
//     return (
//         //<div>
//          <nav> 
//             <Link className="link" to="/"> Home </Link>
//             {/* <Link className="link5" to="/ticketslist"> Tickets list </Link> */}
            
//             <Link className="link2" to="/ticketform"> Create Ticket </Link> 

            
//             <Link className="link3" to="/registration"> Register </Link>
           
// 			<Link className="link4" to="/login"> Login </Link>

//         {/* <button onClick={  }>Logout</button> */}
//                  {/* ()=>{ auth.logout() } */}
//          </nav> 
       
//       // </div>
//     )
// }
// export default NavBar;

// //"/registration"
// //"/login"

// <Link className="link5" to="/ticketslist"> Tickets list </Link> 