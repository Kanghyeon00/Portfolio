import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TmiContent = () => {
  
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  const navigate = useNavigate();

  return (
    <div>
      <div className="tmi-content" data-aos="fade-right">
        <p>1. 강석현의 MBTI는 ISTJ 이다</p>
        <p>2. 취미는 요리,캠핑,인터넷 방송보기 이다</p>
        <p>3. 강석현은 사실 고등학생때 요리 자격증을 땄었다</p>
        <p>4. 강석현은 고등학교를 졸업하고 필리핀에 어학연수를 갔었다</p>
        <p>
          5. 그후 호주 워킹홀리데이를 갔지만 4개월 후 코로나가 점점 퍼져서
          귀국했다
        </p>
        <p>6. 귀국한뒤 군대에 갔다 보직은 운전병이었다</p>
        <p>
          7. 전역한뒤 요식업에 취업 했지만 요식업에 대한 미래가 불투명해 보여
          다른 직업들을 알아보았다
        </p>
        <p>
          8. 그 중 웹개발자에 대한 흥미가 생겨 대구에 있는 학원에 웹퍼블리셔
          과정을 등록하였다
        </p>
        <p>
          9. 학원은 주말에만 수업을 하기에 평일엔 쿠팡알바와 학업을 병행 했었다
        </p>
        <p>
          10. 학원 종강후 공부가 조금 더 필요해보여 인터넷 강의 등으로 혼자
          독학을 이어나갔다
        </p>
        <p>11. 저에 대해 더 알고싶으시다면 연락주세요! <button onClick={()=>{navigate('/contact')}}>Contact To Me!</button></p>
      </div>
    </div>
  );
};

export default TmiContent;
