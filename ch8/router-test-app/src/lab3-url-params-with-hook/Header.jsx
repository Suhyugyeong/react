import { Link } from "react-router-dom";
//react-router-dom 패키지의 Link 컴포넌트는 React 애플리케이션에서 내비게이션을 처리하는 데 사용됩니다.
//이 컴포넌트를 사용하면 사용자가 클릭했을 때 새로운 경로로 이동할 수 있습니다.

const Header = () => {
  return (
    <div className="card bg-light">
      <div className="card-heading">
        <h2>My App</h2>
        <div className="row">
          <div className="col-12">
            <Link className="btn btn-success menu" to="/">
              Home
            </Link>
            <Link className="btn btn-success menu" to="/about">
              About
            </Link>
            <Link className="btn btn-success menu" to="/members">
              Members
            </Link>
            <Link className="btn btn-success menu" to="/songs">
              Songs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
