import { Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const registerNewUser = () => {
    fetch("http://localhost:8088/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((createdUser) => {
        if (createdUser.hasOwnProperty("id")) {
          localStorage.setItem(
            "mybrary_user",
            JSON.stringify({
              id: createdUser.id,
              username: createdUser.username,
              password: createdUser.password,
            })
          );

          navigate("/");
        }
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8088/users?username=${user.username}`)
      .then((res) => res.json())
      .then((response) => {
        if (response.length > 0) {
          // Duplicate username. No good.
          <Alert variant="danger">
            Account with that username already exists
          </Alert>;
        } else {
          // Good username, create user.
          registerNewUser();
        }
      });
  };

  const updateUser = (evt) => {
    const copy = { ...user };
    copy[evt.target.id] = evt.target.value;
    setUser(copy);
  };

  return (
    <form className="form--login" onSubmit={handleRegister}>
      <div className="registration">
        <h3 className="card-title signup fw-normal">Sign Up</h3>
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            onChange={updateUser}
            id="username"
            required
            autoFocus
          />
        </div>
        <div>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={updateUser}
            id="password"
            required
            autoFocus
          />
        </div>
        <div className="loginButtons">
          <Button variant="outline-success" type="submit">
            Sign Up
          </Button>{" "}
          <div className="textRegister">
            <div className="text">Already have an account?</div>
            <a href="/" className="link-success register">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};