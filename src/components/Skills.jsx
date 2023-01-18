import { Container,Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import sliderimg01 from "../assets/img/slider01t.svg"
import sliderimg02 from "../assets/img/slider02.svg"
import sliderimg03 from "../assets/img/slider03.svg"
import sliderimg04 from "../assets/img/slider04.svg"
import sliderimg05 from "../assets/img/slider05.svg"
import colorsharp from "../assets/img/Moonlit Asteroid.jpg"
const Skills=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl orci, pulvinar id tellus fermentum, lacinia congue mi. Duis sit amet quam quis metus imperdiet commodo in non tortor. Vestibulum.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={sliderimg01} alt='Image'/>
                                    <h5>Flim Production</h5>
                                </div>

                                <div className="item">
                                    <img src={sliderimg02} alt='Image'/>
                                    <h5>Post Production</h5>
                                </div>

                                <div className="item">
                                    <img src={sliderimg03} alt='Image'/>
                                    <h5>Online Branding</h5>
                                </div>

                                <div className="item">
                                    <img src={sliderimg04} alt='Image'/>
                                    <h5>Photography</h5>
                                </div>

                                <div className="item">
                                    <img src={sliderimg05} alt='Image'/>
                                    <h5>Graphic Design</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-left" src={colorsharp}/> */}
        </section>
    )
}

export default Skills