import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/AuthContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import { VscSignIn } from 'react-icons/vsc';


export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login } = useAuth();

	const navigate = useNavigate();

	const handleSubmit = async () => {
		const userData = {
			email: email,
			password: password,
		};
		const loginResult = await login(userData);
		if (loginResult) {
			navigate("/");
		} else {
			navigate("/register");
			alert('Not a valid user!  Please register or use a valid user and password!');
			
		}
	};
	return (
		<div>
			<br/>
			<h1>Login Page <VscSignIn /></h1>
			<br/>
			
		  <Form>
          <FormGroup>
          <Form.Label htmlFor="email">Email: </Form.Label>
          <Form.Control type="text" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
          </FormGroup>
          <br/>
		  <FormGroup>
          <Form.Label htmlFor="password">Password: </Form.Label>
          <Form.Control type="text" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
          </FormGroup>
		  </Form>
		  <br/>
			
			<Button variant="primary" size="sm" onClick={handleSubmit
          }>Login</Button>
		</div>
	);
}









// return (
// 	<div>
// 		<br/>
// 		<h1>Login Page</h1>
// 		<br/>
// 		<label htmlFor="email">Email: </label>
// 		<input
// 			type="text"
// 			name="email"
// 			value={email}
// 			onChange={(e) => setEmail(e.target.value)}
// 		/>
// 		<br />
// 		<br />
		
// 		<label htmlFor="password">Password: </label>
// 		<input
// 			type="text"
// 			name="password"
// 			value={password}
// 			onChange={(e) => setPassword(e.target.value)}
// 		/>
// 		{" "}
		
// 		<Button variant="primary" size="sm" onClick={handleSubmit
// 	  }>Login</Button>
// 	</div>
// );
// }



 //() => {handleSubmit()
//}}
//<button onClick={handleSubmit}>Login</button>






















// const LoginPage = (props) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   console.log(useAuth());

//   const [loginMessage, setLoginMessage] = useState("");
//   const auth = useAuth(); //access the authentication context 
// 	const navigate = useNavigate() // be able to navigate to home on login

//   return (
//     <div>
//       <h1>Login Page</h1>
//       <h3>{loginMessage}</h3>
//       <label>Email: </label>
//       <input
//         type="text"
//         onChange={(e) => {
//           setEmail(e.target.value);
//         }}
//       />
//       <label> Password: </label>
//       <input
//         type="password"
//         onChange={(e) => {
//           setPassword(e.target.value);
//         }}
//       />
      
//       <button
//         onClick={async () => {

//           //login in using auth context
//           const loginResult = await auth.login(email, password);
// 					console.log("button onclick loginResult: ", loginResult)
// 					if (loginResult.success) {
// 						navigate("/")
// 					}
//           if (!loginResult.success) {
//             setLoginMessage(loginResult.message)
//           }
//         }}
//       >
//         Login
//       </button>
//     </div>
//   );
// };

// export default LoginPage;
