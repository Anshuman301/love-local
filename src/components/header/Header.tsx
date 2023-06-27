import { Img } from "../../App";
import search from "../../assets/search.svg";
import chat from "../../assets/chat.svg";
import info from "../../assets/info.svg";
import arrow_down from "../../assets/arrow-down.svg";
import "./header.scss";
export default function Header() {
  return (
    <header className="header">
      <div className="header__div-1">
        <div>
          <Img src={search} />
        </div>
        <div>
          <Img src={chat} />
        </div>
        <div>
          <Img src={info} />
        </div>
      </div>
      <hr />
      <div className="header__div-2">
        <p>Himanshu</p>
        <Img src={arrow_down} />
      </div>
    </header>
  );
}
