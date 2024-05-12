
import React from 'react';

function MapPage() {
  const directors = [
    {
                title:'success rate',
                num:'545%',
               },
               {
                title:"Number oe server",
                num:"5",
               },
              {
                title:"Average deploy time ",
                num:"5,52",
               }
               ,
                {
                 title:"Number of deploy  ",
                 num:"552",
                }
  ];

  return (
  <div className=' w-3/4 mx-auto'>
      <div className="grid grid-cols-4 gap-4 pt-5 ">
    
    {directors.map((director, index) => (
      <div key={index}  className="bg-black rounded-lg p-4 text-white ">
        <h2>{director.title}</h2>
        <p className=' font-bold'> {director.num}</p>
      
      </div>
    ))}
  </div>
  </div>
  );
}

export default MapPage;
