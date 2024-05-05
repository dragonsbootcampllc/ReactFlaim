import React from 'react'
import one from "../../../public/photos/papers.jpg"
export default function FirstPage() {
  return (
    <>
      <div className=" text-white text-center pt-10 bg-black  h-screen"
        style={{
          "background-color": " rgba(5, 2, 10)",
          "-webkit-backdrop-filter": "blur(1px)",
          " backdrop-filter": "blur(1px)"
        }}>
        <div className="container mx-auto max-w-3xl	 ">
          <div className="title">
            <button className="border border-white-400 text-white-400 rounded-xl px-4 py-2 transition duration-300 hover:bg-gray-500 hover:text-white">
              Integration
            </button>
            <h1 className=' text-4xl pt-3 '>Integrations To Platforms That Power Your Business
            </h1>
            <p className='mt-4 p-5'>our Ai-Powered tool takes your ideas and turns them and captivating
              reader-friendly content that resonates with your audience</p>
          </div>
          <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="p-1 row-start-2 row-span-2 ..."><img src={one} alt="Your Image" className="rounded-full w-20 h-20 "></img>
            </div>
            <div className="row-end-3 row-span-2 ... p-1"><img src={one} alt="Your Image" className="rounded-full w-20 h-20 "></img>
            </div>
            <div className="row-start-1 row-end-4 ... p-1"><img src={one} alt="Your Image" className="rounded-full w-20 h-20 "></img>
            </div>
            <div className="p-1 row-start-1 row-end-4 ..."><img src={one} alt="Your Image" className="rounded-full w-20 h-20 "></img>
            </div>
            <div className="p-1 row-start-1 row-end-4 ..."><img src={one} alt="Your Image" className="rounded-full w-20 h-20 "></img>
            </div>
            <div className="p-1 row-start-2 row-end-4 ..."><img src={one} alt="Your Image" className="rounded-full w-20 h-20 "></img>
            </div>
          </div>

          <h4 className=' text-3xl pt-3'>All In One AI Powered Solution For Business& Marketing
          </h4>
          <p className='mt-4 p-5'>our Ai-Powered tool takes your ideas and turns them and captivating
            reader-friendly content that resonates with your audience</p>
          <button className="border border-white-400 text-white-400 rounded-full px-4 py-2 transition duration-300 hover:bg-gray-500 hover:text-white">
            View All Integration
          </button>
        </div>
                                          
      </div>
    </>
  )
}
