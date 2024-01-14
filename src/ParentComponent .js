
import ChildComponent from './ChildComponent ';

// Родительский компонент
const ParentComponent = () => {
  const string = "Сергей";
  // const number = 50;
  const boolean = string === "Сергей"?"true":"false";
  // const object = {a:1,b:2};
  const func = () =>"Телефон";
  // const array = [1,9,3,3,9,2,4];
  return <ChildComponent string={string} number={50} boolean={boolean} object={{a:1,b:2}} func={func} array={[1,9,3,3,9,2,4]} />;
}

export default ParentComponent;

