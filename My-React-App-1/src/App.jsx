// import React, { useState } from "react";

// const App = () => {
//   const [institutions, setinstitutions] = useState([
//     {
//       name: "Bengal coding academic1",
//       isOpen: true,
//     }
//     // {
//     //   name: "Bengal coding academic2",
//     //   isOpen: false,
//     // },
//     // {
//     //   name: "Bengal coding academic3",
//     //   isOpen: true,
//     // },
//   ]);

//   return (
//     <div className="p-4">
//       {/* {vals.map((val, index) => (
//         <div key='index' > */}
//           <h1>Name: {institutions.name}</h1>
//           <h2>Coaching open: {institutions.isOpen.toString()}</h2>
//           <button onClick ={()=>
//             setinstitutions({
//               ...institutions,
//               isOpen:!institutions.isOpen,
//             })
//           } 
//           clasName="px-2 py-2 cursor-pointer bg-blue-950 text-white rounded-md">
//             Toggle
//             </button>
//         {/* </div> */}
//       {/* )} */}
//     </div>
//   );
// };

// export default App;




    // const [count,setcount]=useState(0);
    // using useState fuction()
  //  return (
  //  <div className=" container  border p-1 mt-2 mb-2 ml-5 mr-5 w-full h-screen text-center text-amber-500 bg-amber-100">App
  //     <h1>{count}</h1>
  //     {/* <button onClick={()=>{setcount(count+1)}} className="px-3 py-1 text-green-600 bg-blue-800 rounded-md">increse</button><br /><br />
  //     <button onClick={()=>{setcount(count-1)}} className="px-3 py-1 text-green-600 bg-blue-800 rounded-md">decrese</button> */}
    
  //   <button onClick={()=>setcount((prev)=> prev+1)}>click meeee</button><br /><br />
  //   <button onClick={()=>setcount((prev)=> prev-1)}>click me</button>
    
  //   </div>
  //  );


  import React, { useState } from "react";

  const App = () => {
    const [institutions, setInstitutions] = useState([
      {
        name: "Bengal coding academic1",
        isOpen: true,
      },
    ]);
    console.log("rendered");
    
  
    const toggleInstitution = (index) => {
      const updatedInstitutions = institutions.map((institution, i) =>
        i === index ? { ...institution, isOpen: !institution.isOpen } : institution
      );
      setInstitutions(updatedInstitutions);
    };
  
    return (
      <div className="p-4">
        {institutions.map((institution, index) => (
          <div key={index} className="mb-4">
            <h1>Name: {institution.name}</h1>
            <h2>Coaching open: {institution.isOpen.toString()}</h2>
            <button
              onClick={() => toggleInstitution(index)}
              className="px-2 py-2 cursor-pointer bg-blue-500 text-white rounded-md"
            >
              Toggle
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default App;
  