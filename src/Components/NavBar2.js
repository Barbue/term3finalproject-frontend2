import { Link } from "react-router-dom";
import { useAuth } from "../Hooks/AuthContext";
//import { removeUserToken } from "../Hooks/authLocalStorage";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { VscSignIn, VscSignOut, VscSaveAs } from "react-icons/vsc";
import { FcHome } from "react-icons/fc";
import { FaUserEdit } from "react-icons/fa";
//import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GiFleurDeLys } from "react-icons/gi";
import Image from 'react-bootstrap/Image'

const NavBar2 = () => {
  const { isVerified, logout } = useAuth(); //logout
  const navigate = useNavigate();

  const handleLogout = async () => {
    const logoutResult = await logout();
    if (logoutResult) navigate("/login");
  };
  
  return (
    <Navbar bg="primary" data-bs-theme="dark">    
    {/* <Container>  */}
        <Navbar.Brand></Navbar.Brand>
        <Nav>
          <Nav.Link href="/"><FcHome />Home</Nav.Link>

          {isVerified && <Nav.Link href="/expressions">Expressions</Nav.Link>}
          {isVerified && <Nav.Link href="/wordform">Word<VscSaveAs /></Nav.Link>}
          {isVerified && (
            <Nav.Link href="/expressionform">Expression<VscSaveAs /></Nav.Link>
          )}
          <Nav.Link href="/registration">Register <FaUserEdit /></Nav.Link>
          <Nav.Link href="/login">Login<VscSignIn /></Nav.Link>
          {isVerified && <Nav.Link onClick={handleLogout}>Logout<VscSignOut /></Nav.Link>}
        </Nav>
       {/* </Container>  */}
    </Navbar>
  );
};

export default NavBar2;

//bg="light" data-bs-theme="dark"

{
  /* <nav className="navbar">
<Link className="link" to="/">
  <FcHome /> Home{" "}
</Link>{" "}
{isVerified && (
  <Link className="link2" to="/expressions">
    {" "}
    Expressions
  </Link>
)}{" "}
{isVerified && (
  <Link className="link2" to="/wordform">
    {" "}
    Word Entry <VscSaveAs />{" "}
  </Link>
)}{" "}
{isVerified && (
  <Link className="link2" to="/expressionform">
    {" "}
    Expression Entry <VscSaveAs />
  </Link>
)}{" "}
<Link className="link3" to="/registration">
  {" "}
  Register <FaUserEdit />{" "}
</Link>
<Link className="link4" to="/login">
  {" "}
  Login <VscSignIn />
</Link>
{""}
{isVerified && (
  <Card.Link
    style={{
      color: "green",
      fontFamily:
        "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
      fontWeight: 1000,
    }}
    variant="primary"
    size="sm"
    onClick={handleLogout}
  >
    Logout <VscSignOut />
  </Card.Link>
)}
</nav>  */
}
