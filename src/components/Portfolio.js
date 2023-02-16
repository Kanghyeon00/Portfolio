import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  const navigate = useNavigate();

  return (
    <>
      <div className="portfolio-wrap" data-aos="fade-up">
        <span>Portfolio</span>
      </div>
      <div className="portfolio-card" data-aos="fade-up">
        <Container>
          <Row>
            <Col>
              <img
                className="card1"
                src={process.env.PUBLIC_URL + "./imgs/card1.png"}
                alt="portfolio1"
                onClick={() => {
                  navigate("/portfolio/1");
                }}
              />
              <p>캠핑용품 사이트</p>
            </Col>
            <Col>
              <img
                className="card2"
                src={process.env.PUBLIC_URL + "./imgs/card2.png"}
                alt="portfolio2"
                onClick={() => {
                  navigate("/portfolio/2");
                }}
              />
              <p>감정 일기장</p>
            </Col>
            <Col>
              <img
                className="card3"
                src={process.env.PUBLIC_URL + "./imgs/logo.png"}
                alt="portfolio3"
                onClick={() => {
                  navigate("/portfolio/3");
                }}
              />
              <p>포트폴리오 사이트</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Portfolio;
