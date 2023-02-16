import Header from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Card3 = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  return (
    <>
      <div className="card-wrap">
        <Header />
        <h1 data-aos="fade-down">포트폴리오 사이트</h1>
        <div className="card-info-wrap">
          <div
            className="card-content"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="date">
              <span>개발기간 :</span>
              <p>약 5일</p>
            </div>
            <div className="skill">
              <span>사용된 기술 :</span>
              <p>
                HTML,CSS,JAVASCRIPT,REACT
                <br />
                Bootstrap,AOS.js,EmailJS,Firebase
              </p>
            </div>
            <div className="github-link">
              <span>깃허브 링크 :</span>
              <p>00</p>
            </div>
            <div className="contribution">
              <span>기여도 :</span>
              <p>개인개발 (100%)</p>
            </div>
            <div className="ex">
              <span>설명 :</span>
              <p>
                현재 보고 계시는 포트폴리오 사이트 입니다
                <br />
                지금 까지 배운것들을 토대로 만들었습니다
                <br />
                Firebase로 배포하였습니다
              </p>
            </div>
          </div>
          <div className="card-bg">
            <img
              data-aos="flip-left"
              src={process.env.PUBLIC_URL + "../imgs/logo.png"}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card3;
