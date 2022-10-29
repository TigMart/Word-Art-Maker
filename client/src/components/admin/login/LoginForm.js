import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { AiOutlineLoading } from "react-icons/ai";
import { login } from "../../../api/auth";
import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let res = await login({ email, password });

      if (res.data) {
        window.localStorage.setItem("token", JSON.stringify(res.data.token));
        dispatch({
          type: "LOGGED_IN_USER",
          payload: res.data,
        });
        navigate("/admin");
      }
    } catch (err) {
      if (err.response.status !== 200) toast.error(err.response.data.messages);
    }
  };
  return (
    <Container>
      <Row className="mt-5 d-flex justify-content-center ">
        <Col md={4} sm={10} xs={10}>
          <h3 className="mb-5">
            Welcome To WordArt Maker
            <br />
            <small className="text-muted">Please login.</small>
          </h3>
          <Form autoComplete="off" onSubmit={loginHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button disabled={!email || !password} variant="primary" type="submit">
              {loading ? <AiOutlineLoading /> : "Login"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
