import { useState } from "react";
import { registerUser } from "../Hooks/authUtils";
import { useNavigate } from "react-router-dom";

export default function Registration() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [role, setRole] = useState("user");

	const navigate = useNavigate();

	const handleSubmit = async () => {
		const newUser = {
			email: email,
			password: password,
			role: role,
		};
		const registerResult = await registerUser(newUser);
		if (registerResult) {
			navigate("/");
		}
	};

	return (
		<div>
			<h1>Registration Page</h1>
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
			<button onClick={handleSubmit}>Register</button>
		</div>
	);
}



















// import { useState } from "react";
// import { useAuth } from "../Hooks/Auth";
// import { useNavigate } from "react-router-dom";

// const RegistrationPage = (props) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [registerMessage, setRegisterMessage] = useState("");

//   //we are accessing the authentication context from within our 
//   // component 
//   const auth = useAuth();
//   const navigate = useNavigate();
//   return (
//     <div>
//       <h1>Registration Page</h1>
//       <h3>{registerMessage}</h3>
//       <label>Email: </label>
//       <input
//         type="text"
//         onChange={(e) => {
//           setEmail(e.target.value);
//         }}
//       />
//       <label> Password:  </label>
//       <input
//         type="password"
//         onChange={(e) => {
//           setPassword(e.target.value);
//         }}
//       />
//       <button
//         onClick={async () => {
//           const registerResult = await auth.register(email, password);
//           if (registerResult.success) {
// 						navigate("/login");
//           }
//           if (!registerResult.success) {
//             setRegisterMessage(registerResult.message);
//           }
//         }}
//       >
//         Signup
//       </button>
//     </div>
//   );
// };

// export default RegistrationPage;
