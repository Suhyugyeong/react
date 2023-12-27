import EventBinding from "./Test1-EventBinding";
import AsyncStateChange from "./Test2-AsyncStateChange";
import ControlledComponent from "./Test3-ControlledComponent";
import UncontrolledComponent from "./Test4-UnControlledComponent";

const EventComponent = () => {
  return (
    <div>
      <EventBinding />
      <AsyncStateChange />
      <ControlledComponent />
      <UncontrolledComponent />
    </div>
  );
};

export default EventComponent;
//Test 작성 후 Lab에 붙여준거임(순서)
//main.jsx가서 import 하고 render하는 부분에 붙여주면 됨
