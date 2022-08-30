import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";

export const Login = () => {
  //Set States for relenavt user information
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  // Function to handle the login once the button is clicked
  const handleLogin = (e) => {
    e.preventDefault();

    //Fetch should be specific to the user trying to log in
    return fetch(`http://localhost:8088/users?username=${username}&password=${password}`)
      .then((response) => response.json())
      .then((foundUsers) => {
        if (foundUsers.length === 1) {
          const user = foundUsers[0];
          localStorage.setItem(
            "mybrary_user",
            JSON.stringify({
              id: user.id,
              username: user.username,
              password: user.password,
            })
          );

          navigate("/home");
        } else {
          window.alert("Invalid Login")
        }
      });
  };

  return (
    <main className="container--login">
      <Container className="containerField">
        <Form className="form" onSubmit={handleLogin}>
          <Col>
            <h4 className="card-title text-center fw-normal">Sign In</h4>
            <Form.Group controlId="formEmail">
              <Form.Control
                className="username"
                type="username"
                placeholder="username"
                value={username}
                onChange={(evt) => setUsername(evt.target.value)}
                required
                autoFocus
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="password"
                value={password}
                onChange={(evt) => setPassword(evt.target.value)}
                required
                autoFocus
              />
            </Form.Group>
          </Col>
          <div className="loginButtons">
            <Button variant="outline-success" type="submit"
            >Sign In
            </Button>{" "}
            <div className="textRegister">
              <div className="text">Need an account?</div>
              <a href="/register" className="link-success register"
              >Register
              </a>
            </div>
          </div>
        </Form>
      </Container>
    </main>
  );
};
