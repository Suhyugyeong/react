import { Link } from "react-router-dom";

//화면의 주 메뉴 부분
//각 메뉴가 클릭되었을때 맞는 화면(Component)가 나와야 한다.
const Header = () => {
  return (
    <div className="card bg-light">
      <div className="card-heading">
        <h2>My App</h2>
        <div className="row">
          <div className="col-12">
            {/* 클릭시에 다른 화면으로 전환되는 링크 제공.. 
            파일이 분리되어 파일단위 화면단위인 경우에는 html 기본인 <a> 태그로
            링크 제공.. 
            SAP, html 파일 내에서 논리적인 화면단위. path 부분을 바꾸어서 
            화면에 맞는 Component 를 출력해야 한다. 
            마치 링크처럼 사용이 되면서 url 의 path 를 쉽게 바꾸어주는 Link 이용 */}
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
            {/* url path 를 쉽게 교체하기 위한 Link 컴포넌트이지.. 이것만으로
            화면전환은 안된다. 어디선가.. 이 path 에 해당되는 component 정보가
            등록되어 있어야 한다.. */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
