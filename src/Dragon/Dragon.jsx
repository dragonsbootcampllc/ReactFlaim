import React from 'react'
import { TfiCup } from "react-icons/tfi";
import people from "../../public/photos/people.jpg"
import man from "../../public/photos/man.jpg"
import { BsStars } from "react-icons/bs";

export default function Dragon() {
  return (
    <>
    <div className="h-screen">
  <div className="h-2/3 bg-blue-100  ">

  <h1 className="text-5xl font-bold text-center text-blue-500 pt-5">
    
    <span className='text-blue-900'>Join India's First</span>
    <br/>Builders Community   </h1>
    <p className='text-center pt-5 font-bold text-blue-900'>
        we help individuals to grow by unleasing to grow in social media
        <i className="fa-solid fa-rocket "></i>
    </p>
    <div className='pt-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <img src={people} className='w-100' />
    </div>
    
  </div>
 
  <div className='pt-5' style={{ display: 'flex', justifyContent: "space-between"  ,padding:"5px"}}>
   <div className='px-5 ' >
   <h4 className='font-bold text-blue-900 '>Trusted By </h4>
   <div style={{ display: 'flex', justifyContent: "space-between"}}>
   <img src={man} className='w-10 rounded-full' />
    <img src={man} className='w-10 rounded-full' />
    <img src={man} className='w-10 rounded-full' />
   </div>
   </div>

   <div className='px-5' style={{ display: 'flex', justifyContent: "space-between" }}>
   <TfiCup size={45}  className="text-yellow-500" style={{padding:"5px"}}/>
   <h4 className='font-bold text-blue-900 '> Best Community <br/> Award 2024 </h4>
   
   </div>
    </div>
</div>
    </>
  )
}
