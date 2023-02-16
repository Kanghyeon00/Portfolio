import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const instaUrl = "https://www.instagram.com/kang_i00/";
  const githubUrl = "https://github.com/Kanghyeon00?tab=repositories";

  return (
    <header className="head-wrap">
      <div className="head-left">
        <img
          src={process.env.PUBLIC_URL + "../imgs/logo.png"}
          onClick={() => {
            navigate("/");
          }}
        />
        <span
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact
        </span>
      </div>
      <div className="head-right">
        <div className="github_wrap">
          <img
            onClick={() => {
              window.open(githubUrl);
            }}
            className="github_on"
            src={process.env.PUBLIC_URL + "../imgs/github_on.png"}
          />
        </div>
        <div className="insta_wrap">
          <img
            onClick={() => {
              window.open(instaUrl);
            }}
            className="insta_on"
            src={process.env.PUBLIC_URL + "../imgs/insta_on.png"}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
