import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import one from "../../../public/photos/download2.jpeg"
export default function Customer() {
      const navigate=useNavigate()
  return (
    <>
    <div class="bg-blue-500 p-4 h-screen text-center text-white">
   <div  class="  mx-auto max-w-3xl">
    
   <button class=" bg-white text-black p-4 rounded shadow-lg hover:bg-gray-100">
       . . .
    </button>
    <h1 className=' text-4xl  pt-5 '>What Our Customers Are<br/> Saying About Us
                        </h1>
                        <p className='mt-4 p-5'>our Ai-Powered tool takes your ideas and turns them and captivating
         reader-friendly content that resonates with your audience</p>
         <button class=" bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200">

    Get Started With NeverData  
    </button>
    <Link onClick={navigate("")} class="px-10" >Have a Question ? Contact Us </Link>
   </div>
 
   <div class="bg-blue-700 p-4 rounded-lg shadow-md mt-5  m-auto w-1/2">
      
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
            <div class="p-4  rounded-lg">
            <div class="p-1 flex justify-center items-center ">
                <img src={one} alt="Your Image" className=" rounded-full w-40 h-40  border-2 border-black"></img>
</div>
            </div>
            <div class="p-2  rounded-lg">
                <p > Harum voluptat animi quasi maxime esse facilis voluptates alias ipsum voluptatum cum ipsa a molestiae repudiandae id hic similique. Neque, illo maiores. Beatae harum repudiandae asperiores hic nihil officia, rerum magnam cupiditate et?</p>
            </div>
          
        </div>
       
    </div>
</div>
    </>
  )
}
