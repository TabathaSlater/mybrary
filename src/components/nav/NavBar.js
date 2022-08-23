import { useNavigate } from "react-router-dom"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./nav.css"


export const NavBar = () => {
    const navigate = useNavigate()

    const localMybraryUser = localStorage.getItem("mybrary_user");
    const mybraryUser = JSON.parse(localMybraryUser);

    return (
        <Navbar className="navbar">
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <div className="intro">Hello, {mybraryUser.username}!</div>
          <Nav className="nav justify-content-end" style={{ width: "100%"}}>
            <Nav.Link className="home"
            to=""
            onClick={() => {
                navigate("/home")
            }} >Home</Nav.Link>
            <Nav.Link className="library" href="#library">My Library</Nav.Link>
            <Nav.Link className="find" 
            to=""
            onClick={() => {
                navigate("/search_results")
            }}>Find Books</Nav.Link>
            <Nav.Link className="logout"
            to=""
            onClick={() => {
                localStorage.removeItem("mybrary_user")
                navigate("/login", {replace: true})
            }} >Logout</Nav.Link>
          </Nav>
      </Navbar>
    )
}