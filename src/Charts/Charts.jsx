import React from 'react'
import { Line } from 'react-chartjs-2';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
export default function Charts() {
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
      

      const dataSpin = [
        { name: 'January', uv: 4000, pv: 2400 },
        { name: 'February', uv: 3000, pv: 2210 },
        { name: 'March', uv: 2000, pv: 2290 },
        { name: 'April', uv: 2780, pv: 2000 },
        { name: 'May', uv: 1890, pv: 2181 },
        { name: 'June', uv: 2390, pv: 2500 },
      ];
      
  return (
    <>
    <div className=' text-center w-3/4 mx-auto pt-5'>
      <div className="grid grid-cols-4 gap-4 pt-5 ">
    
    {directors.map((director, index) => (
      <div key={index}  className=" rounded-lg overflow-hidden shadow-lg text-black ">
        <h2>{director.title}</h2>
        <p className=' font-bold'> {director.num}</p> 
        <div className=''>
<AreaChart
      width={250}
      height={150}
      data={dataSpin}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis />
      <YAxis  />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="uv"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.3}
      />
    </AreaChart>
</div>
      </div>
    ))}
  </div>
  </div>
    </>
  )
}
