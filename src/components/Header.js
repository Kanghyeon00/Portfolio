import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="head-wrap">
      <div className="head-left">
        <img
          src={process.env.PUBLIC_URL + "../imgs/logo.png"}
          onClick={() => {
            navigate("/");
          }}
        />
        <span onClick={() => {
            navigate("/contact");
          }}>Contact</span>
      </div>
      <div className="head-right">
        <div className="github_wrap">
          <img className="github_on" src={process.env.PUBLIC_URL + "../imgs/github_on.png"} />
        </div>
        <div className="insta_wrap">
          <img className="insta_on" src={process.env.PUBLIC_URL + "../imgs/insta_on.png"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
