import { Col, Container, Row } from "react-bootstrap"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"
import logo from "../assets/img/logo.svg"
const Footer=()=>{
    return(
        <footer className="footer">
            <Container>
                <Row>
                    <Col sm={6}>
                        <img src={logo} alt="logo"/>
                    </Col>
                    <Col sm={6} align="end">
                        <div className="social-icon">
                            <a href=""><img src={navIcon1}/></a>
                            <a href="https://www.facebook.com/immacstudio" target="_blank"><img src={navIcon2}/></a>
                            <a href="https://www.instagram.com/immacstudio/" target="_blank"><img src={navIcon3}/></a>
                        </div>
                        <p>CopyRight 2023. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer