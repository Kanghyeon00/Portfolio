import { FaHome } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

const Footer= () => {

  const navigate = useNavigate();

  return (
    <>
      <Container className="footer-wrap">
        <Row>
          <Col className="footer-img-wrap">
            <img src={process.env.PUBLIC_URL+"./imgs/contact_img.png"} alt="img" />
          </Col>
          <Col className="footer-content">
            <p>
              안녕하세요
              <br />
              신입 프론트엔드 개발자 강석현 입니다
            </p>
            <p>
              제 포트폴리오 페이지를 보고
              <br />
              저에게 관심이 생기셨다면 아래버튼을 클릭하여
              <br />
              연락 부탁드립니다!
            </p>
            <button onClick={()=>{navigate('/contact')}}>Contact To Me!</button>
          </Col>
          <Col className="footer-info">
            <p>
              <FaHome size={25} /> Where i live
              <br />
              Gumi-si, Gyeongsangbuk-do, Republic of Korea
            </p>
            <p>
              <AiOutlineMail size={25} /> E-mail
              <br />
              hyeony0419@naver.com
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
