import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Header from "../components/Header";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_66uaz7h",
        "template_p2vztkh",
        form.current,
        "VrjzF_kWZunE8PFNC"
      )
      .then(
        (result) => {
          alert("성공적으로 전송되었습니다 :)");
        },
        (error) => {
          alert("전송에 오류가 있습니다 :(");
        }
      );
  };

  return (
    <>
      <div className="contact-wrap">
        <Header />
        <div className="contact-header">
          <h1>Contact To Me!</h1>
          <p>
            저에 대한 관심이 생기셨다면
            <br />
            폼을 작성하셔서 컨택해주신다면 정말 감사드리겠습니다!
          </p>
        </div>
        <div className="contact-form-wrap">
          <form ref={form} onSubmit={sendEmail}>
            <p>회사명 :</p>
            <input type="text" name="company" required />

            <p>성함 :</p>
            <input type="text" name="name" required />

            <p>연락처 :</p>
            <input type="tel" name="phone" required />

            <p>E-mail :</p>
            <input type="email" name="email" />

            <p>메세지 :</p>
            <textarea className="message" type="text" name="message" required />
            <br />
            <input className="submit-button" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
