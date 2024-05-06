import React, { useContext } from "react";
import { Navbar, Stack, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  console.log(user);
  return (
    <Navbar bg="dark" style={{ height: "3.75rem" }}>
      <Container>
        <h2>
          <Link to={"/"} className="text-decoration-none link-light">
            Ticket
          </Link>
        </h2>
        <span className="text-warning" style={{ textTransform: "capitalize" }}>
          {user ? user?.name : null}
        </span>
        <Nav>
          <Stack direction="horizontal" gap={3}>
            {!user && (
              <Link to={"/login"} className="text-decoration-none link-light">
                Login
              </Link>
            )}
            {user && (
              <Link
                to={"/login"}
                className="text-decoration-none link-light"
                onClick={() => logoutUser()}
              >
                Logout
              </Link>
            )}
          </Stack>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavBar;
