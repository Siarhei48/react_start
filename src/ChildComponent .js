import React from 'react'

const ChildComponent = ({string,number,boolean,object,func,array}) => {
  return <div>
          <p>{string}{number}</p> 
          <p>{boolean}</p>  
          <p>{object.a+object.b}</p> 
          <p>{func()}{array}</p> 
  
  </div>
  
}

export default ChildComponent;