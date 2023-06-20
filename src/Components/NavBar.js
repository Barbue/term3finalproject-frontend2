import { Link } from "react-router-dom";
import { useAuth } from "../Hooks/AuthContext";
//import { removeUserToken } from "../Hooks/authLocalStorage";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { VscSignIn, VscSignOut, VscSaveAs } from "react-icons/vsc";
import { FcHome } from "react-icons/fc";
import { FaUserEdit } from "react-icons/fa";
//import Button from "react-bootstrap/Button";

const NavBar = () => {
  const { isVerified, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const logoutResult = await logout();
    if (logoutResult) navigate("/login");
  };

  return (
    <nav className="navbar">
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
    </nav>
  );
};

export default NavBar;
