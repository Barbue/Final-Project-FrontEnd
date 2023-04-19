import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/AuthContext";

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
		}
	};
	return (
		<div>
			<h1>Login Page</h1>
			<label htmlFor="email">Email:</label>
			<input
				type="text"
				name="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<br />
			<label htmlFor="password">Password:</label>
			<input
				type="text"
				name="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handleSubmit}>Login</button>
		</div>
	);
}

























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
