import { Outlet } from "react-router-dom";
import { useAuth } from "../Hooks/AuthContext";

export default function PrivatePage() {
	const { isVerified } = useAuth();

	return (
		<div>{isVerified ? <Outlet /> : <div> Please Register/Login</div>}</div>
	);
}

