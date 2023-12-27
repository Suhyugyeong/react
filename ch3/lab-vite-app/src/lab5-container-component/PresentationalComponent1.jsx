//상위에서 관리하는 데이터를 props 로 받아서 화면만 구성하는 역할..
const PresentationalComponent1 = (props) => {
  return <div>좋아요 {props.count} 개</div>;
};

export default PresentationalComponent1;
