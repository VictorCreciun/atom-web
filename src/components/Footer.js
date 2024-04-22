import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/atom-logo-white.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>Copyright 2024. All Rights Reserved to Atom Circle</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
