import { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import styles from "./styles.module.css";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {userSignInAction} from "../redux/actions/userActions"

const SignIn = () => {
	const [data, setData] = useState({
		email: "",
		password: ""
	});
	const [error, setError] = useState("");
	const navigate = useHistory();
	const dispatch=useDispatch();
	const signInState=useSelector(state=>state.signin)

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};


	// const formik=useFormik({})

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	try {
	// 		console.log("Dispatching userSignInAction");
	// 		await dispatch(userSignInAction(data));
	// 		console.log("Dispatched userSignInAction successfully");
	// 		navigate.push("/");
	// 	} catch (error) {
	// 		console.error("Error while dispatching userSignInAction:", error);
	// 		setError("invalid credentials");
	// 	}
		
	// };

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await dispatch(userSignInAction(data));
			navigate.push("/");
		} catch (error) {
			setError("invalid credentials");
		}
	};

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sing Up
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login</h1>
						
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sing In
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
