import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitSquare,
  FaBootstrap,
} from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  return (
    <>
      <div className="skill-wrap" data-aos="fade-up">
        <span>Skills</span>
      </div>
      <div className="skill-img-wrap" data-aos="fade-up">
        <Container>
          <Row>
            <Col>
              <FaHtml5 size={200} color="#FF6600" />
              <p className="skill-title">HTML5</p>
              <p className="skill-content">
                마크업, 페이지 콘텐트 구조화, 폼요소, 테이블 등 사용
              </p>
            </Col>
            <Col>
              <FaCss3Alt size={200} color="#3366FF" />
              <p className="skill-title">CSS3</p>
              <p className="skill-content">배경 스타일링, 텍스트 스타일링 등</p>
            </Col>
            <Col>
              <FaJs size={200} color="#FFCC00" />
              <p className="skill-title">JavaScript ES6</p>
              <p className="skill-content">
                바닐라 자바스크립트의 기본적인 문법 이해
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <FaReact size={200} color="#00CCFF" />
              <p className="skill-title">React</p>
              <p className="skill-content">
                Component,State,Props등 기본적인 SPA 시스템에 대한 이해
              </p>
            </Col>
            <Col>
              <FaGitSquare size={200} />
              <p className="skill-title">Git</p>
              <p className="skill-content">
                프로젝트 코드 관리, add, commit, pull, push, branch 사용
              </p>
            </Col>
            <Col>
              <FaBootstrap size={200} color="#6600CC" />
              <p className="skill-title">BootStrap</p>
              <p className="skill-content">
                레이아웃, 버튼, 입력창 등의 디자인 사용
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Skills;
