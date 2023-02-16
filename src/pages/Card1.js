import Header from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Card1 = () => {
  const campUrl = "https://github.com/Kanghyeon00/Campingshop";

  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  return (
    <>
      <div className="card-wrap">
        <Header />
        <h1 data-aos="fade-down">캠핑용품 사이트</h1>
        <div className="card-info-wrap">
          <div
            className="card-content"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="date">
              <span>개발기간 :</span>
              <p>약 10일</p>
            </div>
            <div className="skill">
              <span>사용된 기술 :</span>
              <p>HTML,CSS,JAVASCRIPT,REACT</p>
            </div>
            <div>
              <span>깃허브 링크 :</span>
              <p
                className="github-link"
                onClick={() => {
                  window.open(campUrl);
                }}
              >
                링크
              </p>
            </div>
            <div className="contribution">
              <span>기여도 :</span>
              <p>개인개발 (100%)</p>
            </div>
            <div className="ex">
              <span>설명 :</span>
              <p>
                캠핑용품 사이트 입니다
                <br />
                리액트를 처음 사용하여 개발하였습니다
                <br />
                state,props,component에 대한 공부가 되었습니다
              </p>
            </div>
          </div>
          <div className="card-bg">
            <img
              onClick={() => {
                window.open(campUrl);
              }}
              data-aos="flip-left"
              src={process.env.PUBLIC_URL + "../imgs/card1.png"}
              alt="card1"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card1;
