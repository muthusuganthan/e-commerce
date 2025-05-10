import React from "react";
import ComponentC from "./componentC";

const ComponentB = (props) => {
  console.log(props);
  const { userdata, handlechange } = props;

  return (
    <div>
      ComponentB - User: {userdata}
      <button onClick={() => handlechange("helloram")}>changethestate</button>
      <ComponentC data={userdata} />
    </div>
  );
};

export default ComponentB;





// import React from "react";
// import ComponentC from "./componentC";

// const ComponentB = (props) => {
// console.log(props);
// const {userdata,handlechange}=props;
// return ( <div>
// componentB
// {userdata}
// <button onClick={() => handlechange("helloram")}>changethestate</button>


// {props.userdata} <ComponentC data={props.userdata}/> </div>
// );
// };

// export default ComponentB;

