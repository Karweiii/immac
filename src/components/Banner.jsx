import { useState, useEffect } from "react"
import { Container,Row,Col } from "react-bootstrap"
import headerImg from "../assets/img/banner-img.svg"
const Banner = ()=>{
    const[loopNum,setloopNum]=useState(0);
    const[isDeleting,setisDeleting]=useState(false);
    const toRotate=['are a Bunch of Creator','Do Flim Production','Do Photography','Do Graphic Design','Do Online Branding']
    const [text,setText]=useState('');
    const [delta,setDelta]=useState(300); 
    // 300-Math.random()*100
    const period=2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)

        return ()=>{clearInterval(ticker)};
    },[text])

    const tick=()=>{
        let i=loopNum % toRotate.length;
        let fullText=toRotate[i];
        let updatedText=isDeleting? fullText.substring(0,text.length-1):fullText.substring(0,text.length+1)
        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta=>prevDelta /2    )
        }

        if(!isDeleting &&updatedText=== fullText){
            setisDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText===''){
            setisDeleting(false)
            setloopNum(loopNum+1)
            setDelta(300)
            // 500
        }
    }
    
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={8}>
                        <span className="tagline">Hello from Imma.C</span>
                        <h1>{`We `}<span className="wrap">{text}</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl orci, pulvinar id tellus fermentum, lacinia congue mi. Duis sit amet quam quis metus imperdiet commodo in non tortor. Vestibulum.</p>
                        <button onClick={()=>{document.getElementById('contact').scrollIntoView()}}>Let's connect<i className="bi bi-arrow-right-circle"></i></button>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                        <img src={headerImg} alt="Header img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
    

}

export default Banner