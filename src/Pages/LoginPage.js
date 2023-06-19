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










