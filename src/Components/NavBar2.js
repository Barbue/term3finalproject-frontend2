//import { Link } from "react-router-dom";
import { useAuth } from "../Hooks/AuthContext";
//import { removeUserToken } from "../Hooks/authLocalStorage";
import { useNavigate } from "react-router-dom";
import { VscSignIn, VscSignOut, VscSaveAs } from "react-icons/vsc";
import { FcHome } from "react-icons/fc";
import { FaUserEdit } from "react-icons/fa";
//import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import { GiFleurDeLys } from "react-icons/gi";
//import Image from 'react-bootstrap/Image'

const NavBar2 = () => {
  const { isVerified, logout } = useAuth(); //logout
  const navigate = useNavigate();

  const handleLogout = async () => {
    const logoutResult = await logout();
    if (logoutResult) navigate("/login");
  };
  
  return (
    <Navbar>    
    {/* <Container>   */}
        <Navbar.Brand></Navbar.Brand>
        <Nav>
          <Nav.Link className="navLink1" href="/"><FcHome />Home</Nav.Link>

          {isVerified && <Nav.Link className="navLink1" href="/expressions">Expressions</Nav.Link>}
          {isVerified && <Nav.Link className="navLink1" href="/wordform">Word<VscSaveAs /></Nav.Link>}
          {isVerified && (
            <Nav.Link className="navLink1" href="/expressionform">Expression<VscSaveAs /></Nav.Link>
          )}
          <Nav.Link className="navLink1" href="/registration">Register <FaUserEdit /></Nav.Link>
          <Nav.Link className="navLink1" href="/login">Login<VscSignIn /></Nav.Link>
          {isVerified && <Nav.Link className="navLink1" onClick={handleLogout}>Logout<VscSignOut /></Nav.Link>}
        </Nav>
       {/* </Container>   */}
    </Navbar>
  );
};

export default NavBar2;

//bg="light" data-bs-theme="dark"

