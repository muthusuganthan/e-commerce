import { useState } from "react";

const Counter = () => {
  let [valuess, setvaluess] = useState(0);
  let [name, setName] = useState("raam");
  let [bool, setBool] = useState(true);

  return (
    <>
    <div>
      <p>{bool ? "true" : "false"}</p>
      <button onClick={()=>{
        setBool(false);
      }}>true or false</button>
    </div>
    <div>
    
      <p>{name}</p>
      <button
        onClick={() => setName("arun")}
        className="bg-black text-white px-4 py-2"
      >
        Change Name
      </button></div>
<div>    <>
      <p>counter</p>
      <p>{valuess}</p>
      <button
        onClick={() => {
          console.log(valuess + 1);
          setvaluess(valuess + 1);
        }}
        className="bg-green-300 p-6 "
      >
        +
      </button>

      <button
        onClick={() => {
          console.log(valuess - 1);
          setvaluess(valuess - 1);
        }}
        className="bg-green-300 p-6 "
      >
        -
      </button>

      <button
        onClick={() => {
          console.log((valuess = 0));
          setvaluess(0);
        }}
        className="bg-green-300 p-6 "
      >
        reset
      </button>
    </></div> </>
  );
};
export default Counter;
