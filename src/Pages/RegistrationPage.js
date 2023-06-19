import { useState } from "react";
import { registerUser } from "../Hooks/authUtils";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import { FaUserEdit } from "react-icons/fa";

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
			 <br/>
			<h1>Registration Page <FaUserEdit /></h1>
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
          }>Register</Button>
		</div>
	);
}












