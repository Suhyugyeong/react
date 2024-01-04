import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let [isNavShow, setIsNavShow] = useState(false);
  // . 초기에 감춰진 상태에서 시작하는 것이 일반적으로 사용자 경험 측면에서 더 자연스럽다고 판단되기 때문에 false로 초기화한 것으로 보입니다.
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <span className="navbar-brand ps-2">TodoList App</span>
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setIsNavShow(!isNavShow)}
      >
        {/* 토글 기능 구현 */}
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={
          isNavShow
            ? "collapse navbar-collapse show"
            : "collapse navbar-collapse"
        }
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/todos">
              TodoList
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
