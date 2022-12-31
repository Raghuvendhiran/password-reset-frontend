import {useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";



function ResetPassword() {


	const [Password, setPassword] = useState("");
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");
	const params = useParams();
	// const [data, setData] = useState(null);
	const { userString, userId } = params;


	// useEffect(() => {
	// 	fetch(`${process.env.BaseURl}/PasswordReset/${userString}/${userId}`)
	// 		.then(response => response.json())
	// 		.then(data => setData(data));
	// }, []);



	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post(`${process.env.REACT_APP_BaseURl}/PasswordReset/${userString}/${userId}`, { Password });
			setMsg(data.message);
			setError("");
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
				setMsg("");
			}
		}
	};

	return (
		<>
			<div className="container">
				<form className="container" onSubmit={handleSubmit}>
					<h1 className="mb-5" >Add New Password</h1>
					<input
						type="Password"
						placeholder="Password"
						name="Password"
						onChange={(e) => setPassword(e.target.value)}
						value={Password}
						required
						className="input"
					/>
					{error && <div className="my-4">{error}</div>}
					{msg && <div className="my-4">{msg}</div>}
					<button type="submit" className="btn btn-success ms-5">
						Submit
					</button>
				</form>
			</div>

		</>
	)
}

export default ResetPassword;

