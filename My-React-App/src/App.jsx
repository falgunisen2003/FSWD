import React from "react";

   const App =()=>{


    // const arr=[5,90,87,67,65,45,73];
 

//    return (
//      <div>lt is react App </div>
//    )  
// }

 const objs=[ { name: "mita", age: 22, regNo: "12345" },
  { name: "subhasish", age: 25, regNo: "120945" },
  { name: "abhra", age: 22, regNo: "189345" },
  { name: "piku", age: 29, regNo: "12387645" },
        ];
  return(
    
    <div className=" container  border p-1 mt-2 mb-2 ml-5 mr-5 w-full h-screen text-center text-amber-500 bg-amber-100">This is my css..........
     objs.map((obj)={">"}{(
      <div key={obj.regNo}>
        {/* // return( */}
          
          <h1 >
            {objs.name } - {objs.age} - {objs.regNo} </h1>
          {/* <h2>{obj.age}</h2>
          <h3>{obj.regNo}</h3> */}
          <br />
          </div>
    
        // )
      )})
     
    </div>
  );
};

export default App;

 

