import React, { useContext } from "react";
import { Alert, Form } from "react-bootstrap";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { updateLoginInfo, loginInfo, isLoginLoading, loginUser, loginError } =
    useContext(AuthContext);
  const handleChange = (e) => {
    updateLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        //height: "100vh",
        width: "100%",
        paddingTop: "100px",
      }}
    >
      <div
        style={{
          width: "500px",
          backgroundColor: "rgb(195, 199, 196)",
          padding: "50px",
          borderRadius: "15px",
          color: "white",
        }}
      >
        <Form onSubmit={loginUser}>
          {loginError && (
            <Alert variant="danger" className="text-center" dismissible>
              {loginError.message}
            </Alert>
          )}
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              onChange={handleChange}
              required
              value={loginInfo.email}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={handleChange}
              value={loginInfo.password}
              required
            ></Form.Control>
          </Form.Group>
          <button
            style={{ marginTop: "20px", width: "100%" }}
            className="btn btn-primary"
          >
            {isLoginLoading ? "Getting you in..." : "Login"}
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
