import { Outlet } from "react-router";
//React Router v6에서 라우트를 중첩하면, 중첩된 라우트의 컴포넌트가 중첩된 위치에 렌더링됩니다. <Outlet>은 이 중첩된 위치에 중첩된 라우트의 컴포넌트들을 렌더링하는 역할을 합니다.
//<Outlet>은 이러한 중첩된 라우트에서 렌더링 위치를 지정하는 데 사용됩니다.
import Header from "./Header";

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
