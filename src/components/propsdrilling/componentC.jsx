import React from 'react';

const ComponentC = (props) => {
  console.log(props);

  return (
    <div>
      ComponentC - Received User: {props.data}
    </div>
  );
};

export default ComponentC;



// import React from 'react'

// const ComponentC = (props) => {
//   console.log(props);

//   return (
//     <div>ComponentC
    
//       {props.data}
//       </div>
//   )
// }

// export default ComponentC