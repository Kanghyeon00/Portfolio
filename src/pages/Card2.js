import Header from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Card2 = () => {

  const diaryUrl = "https://github.com/Kanghyeon00/Diary";
  
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  return (
    <>
      <div className="card-wrap">
        <Header />
        <h1 data-aos="fade-down">감정 일기장</h1>
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
              <p className="github-link" onClick={()=>{window.open(diaryUrl)}}>링크</p>
            </div>
            <div className="contribution">
              <span>기여도 :</span>
              <p>개인개발 (100%)</p>
            </div>
            <div className="ex">
              <span>설명 :</span>
              <p>
                일기를 기록할 수 있는 사이트입니다
                <br />
                리액트를 더 공부하기 위해
                <br />
                클론코딩을 해보았습니다
                <br />
                Firebase로 배포까지 해보았습니다
                <br />
                완벽하게 모두 이해하진 못했지만
                <br />
                useEffect,localStorage등에 대한
                <br />
                공부가 되었습니다
              </p>
            </div>
          </div>
          <div className="card-bg">
            <img onClick={()=>{window.open(diaryUrl)}}
              data-aos="flip-left"
              src={process.env.PUBLIC_URL + "../imgs/card2.png"}
              alt="card2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card2;
