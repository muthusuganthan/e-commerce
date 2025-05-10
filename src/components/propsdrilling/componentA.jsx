import React, { useState } from 'react';
import ComponentB from './componentB';

const ComponentA = () => {
  const [user, setUser] = useState("sam");

  const handlechange = (data) => {
    setUser(data);
  };

  return (
    <div>
      ComponentA - Current User: {user}
      <ComponentB userdata={user} handlechange={handlechange} />
    </div>
  );
};

export default ComponentA;



// import React from 'react'
// import { useState } from 'react'
// import ComponentB from './componentB'

// const ComponentA = () => {
//     const  [user,setUser] = useState("sam")
//     const handlechange = (data)=>{
//         setUser(data);
//     }
//   return (
    
//     <div>componentA
//     <ComponentB userdata={user} handlechange={handlechange}/>
//     </div>

//   )
// }

// export default ComponentA
