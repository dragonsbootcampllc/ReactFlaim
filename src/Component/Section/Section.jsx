import React from 'react'
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { color } from 'chart.js/helpers';
export default function Section() {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                color:"white",
                backgroundColor: 'rgba(75, 125, 50, 1)',
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

  return (
    <>
     <div class="bg-black text-white min-h-screen ">
     <div className="text-center pt-5">
                <button className="border border-white-400 text-white-400 rounded-xl px-4
                 py-2 transition duration-300 hover:bg-gray-500 hover:text-white">
     Extract Features
    </button>
                    <h1 className=' text-4xl pt-3 '>Zentro has All Kind of features<br/>
                    you will need
                        </h1>
                        <p className='mt-4 p-5'>our Ai-Powered tool takes your ideas and turns them<br/> and captivating
         reader-friendly content that resonates with your audience</p>
                </div>
{/* tow cards */}
                <div class="grid grid-cols-2 gap-4 p-4 w-3/4 m-auto">

{/* card1 */}
<div class="bg-blue-100 text-white bg-opacity-10 shadow-lg rounded-lg p-4">
   <div class="p-4" >
   <h2 class="text-xl font-semibold">  Analytic&Report</h2>
    <p>with Zentro has All Kind of features<br/>
                    you will need</p>
   </div>
   <div class="bg-blue-100 bg-opacity-20 p-6 rounded-lg shadow-lg text-white ">
            <Line data={data} options={options} />
        </div>

   <div class="p-4">
    <h2>Zentro dashboard has :</h2>
    <button className="border border-white-400 text-white-400 rounded-xl px-4
                 py-2 transition duration-300 hover:bg-gray-500 hover:text-white m-1">
     Real Time-Data Updates
    </button><button className="border border-white-400 text-white-400 rounded-xl px-4
                 py-2 transition duration-300 hover:bg-gray-500 hover:text-white m-1">
    Advanced Data Analysis
    </button><button className="border border-white-400 text-white-400 rounded-xl px-4 m-1
                 py-2 transition duration-300 hover:bg-gray-500 hover:text-white">
    Report Tampletes
    </button><button className="border border-white-400 text-white-400 rounded-xl px-2
                 py-2 transition duration-300 hover:bg-gray-500 hover:text-white m-1">
     Data Visualization
    </button>
   </div>
</div>

{/* card2 */}
<div class="bg-blue-100 text-white bg-opacity-10 shadow-lg rounded-lg p-4">
   <div class="p-4" >
   <h2 class="text-xl font-semibold"> Real Time Collaboration</h2>
    <p>with Zentro has All Kind of features<br/>
                    you will need</p>
   </div>
   <div class="p-4">
    <h2>Zentro Comes With :</h2>
    <button className="border border-white-400 text-white-400 rounded-xl px-4
                 py-2 transition duration-300 hover:bg-gray-500 hover:text-white m-1">
     Real Time-Dox Edit
    </button><button className="border border-white-400 text-white-400 rounded-xl px-4
                 py-2 transition duration-300 hover:bg-gray-500 hover:text-white m-1">
    User Real
    </button><button className="border border-white-400 text-white-400 rounded-xl px-4 m-1
                 py-2 transition duration-300 hover:bg-gray-500 hover:text-white">
    Screen Sharing
    </button><button className="border border-white-400 text-white-400 rounded-xl px-2
                 py-2 transition duration-300 hover:bg-gray-500 hover:text-white m-1">
     Vedioes Contacting
    </button>
   </div>
   <div className="bg-blue-100 bg-opacity-20 p-6 rounded-lg shadow-lg text-white">
            <h4 className="text-2xl ">Mergs who can view projects</h4>
            <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quibusdam?</p>
            
        </div>
</div>

</div>


</div>
    </>
  )
}
