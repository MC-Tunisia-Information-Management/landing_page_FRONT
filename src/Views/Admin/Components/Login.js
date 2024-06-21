import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeLogged } from "../../../Store/Slices/AuthSlice";
import api from "../../../Assets/APIEndpoint.json";
import { useCookies } from "react-cookie";

function Login(props) {
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(["access_token"]);
  const [validLogin, setValidLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    props.callBack(true);
  });

  const handleLogin = () => {
    fetch(api.api + "api/login", {
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        else {
          return response.json();
        }
      })
      .then((data) => {
        const accessToken = cookies.access_token;
        console.log("Access Token:", accessToken);
        if (data.access_token) {
          // Set the 'access_token' cookie
          setCookie("access_token", data.access_token, { path: "/" });
        }
        dispatch(changeLogged(true));
        navigate("tabs");
      })
      .catch((error) => {
        setValidLogin(false);
        console.log("error " + error);
      });
  };

  return (
    <Container style={{ marginTop: "180px" }}>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6}>
          <h2>Login</h2>
          <Form>
            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={handleEmailChange}
                isInvalid={!validLogin}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={handlePasswordChange}
                isInvalid={!validLogin}
              />
              <Form.Control.Feedback type="invalid">
                Incorrect mail or password
              </Form.Control.Feedback>
            </Form.Group>

            <Row
              className="justify-content-center"
              style={{ marginTop: "50px" }}
            >
              <Button variant="primary" type="button" onClick={handleLogin}>
                Login
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
