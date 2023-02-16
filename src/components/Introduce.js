import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Introduce = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  return (
    <div className="introduce" data-aos="fade-up">
      <span>I am</span>
      <p>
        안녕하세요 신입 프론트엔드 개발자, 강석현 입니다
        <br />
        1년 전 웹에 대해 아무것도 몰랐던 시절 우연히 웹에 대해 관심을 갖고
        대구에 있는 GrowEdu라는 학원에 웹퍼블리셔 과정에서 HTML/CSS/JAVASCRIPT에
        대해서 공부했습니다
        <br />
        처음엔 HTML,CSS 도 어려웠었지만 재미는 있었기에 노력하여 JAVASCRIPT까지
        이해하게 되었습니다 하지만 여기에서 만족하지 않고 REACT까지 독학하며
        배워나갔습니다.
        <br />
        이처럼 제로 베이스에서 리액트까지 배운 끈기로 현재에 만족하지 않고
        새로운 것을 배워나가는 것을 즐기며 도전을 멈추지 않는 프론트엔드
        개발자가 되겠습니다
      </p>
    </div>
  );
};

export default Introduce;
