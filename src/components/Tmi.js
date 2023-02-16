import { useState } from "react";
import TmiContent from "./TmiContent";

const Tmi = () => {
  let [visible, setVisible] = useState(false);

  return (
    <>
      <div className="tmi-wrap">
        <span
          className="tmi-title"
          onClick={() => {
            setVisible(!visible);
          }}
        >
          강석현에 대한 TMI
        </span>
        <p>🡅</p>
        <p>궁금하시다면 클릭해주세요!</p>
      </div>
      {visible === true ? <TmiContent /> : null}
    </>
  );
};

export default Tmi;
