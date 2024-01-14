
import ChildComponent from './ChildComponent ';

const ParentComponent = () => {
  const string = "Сергей";
  const boolean = string === "Сергей"?"true":"false";
  const func = () =>"Телефон";
  return <ChildComponent string={string} number={50} boolean={boolean} object={{a:1,b:2}} func={func} array={[1,9,3,3,9,2,4]} />;
}

export default ParentComponent;

