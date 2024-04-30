



function Aside({ Data }) {
    Data ? Data : null;
    return (
        <div className="side-bar text-white w-full  md:w-3/12 bg-SectionAsideColor2 ">
            <div className="head border-b border-borderColor ">
                <h1 className=" text-3xl italic text-white ">{ Data.secondPage.Aside.Headh1? Data.secondPage.Aside.Headh1:"Null"}</h1>
                <p className=" text-blue-700 text-sm pb-3 ">{Data.secondPage.Aside.HeadP ?Data.secondPage.Aside.HeadP: "Null"} </p>
            </div>
            <div className="general pb-4">
                <p className=" text-gray-500 uppercase p-2">{Data.secondPage.Aside.generalP?Data.secondPage.Aside.generalP:"Null"}</p>
                <ul>
                    <li className=" p-2  transition duration-500 hover:bg-gradient-to-l from-black to-gray-500 rounded-lg">{Data.secondPage.Aside.generalLi1 ? Data.secondPage.Aside.generalLi1:"Null" }</li>
                    <li className="p-2 transition duration-500 hover:bg-gradient-to-l from-black to-gray-500 rounded-lg"> {Data.secondPage.Aside.generalLi2 ? Data.secondPage.Aside.generalLi2 :"Null"}</li>
                </ul>
            </div>
            <div className="projects">
                <p className=" text-gray-500 uppercase p-2">{Data.secondPage.Aside.projectsP?Data.secondPage.Aside.projectsP:"Null"}</p>
                <ul>
                    <li className=" p-2  bg-gradient-to-l from-black to-gray-500 rounded-lg mt-2"> {Data.secondPage.Aside.projectsLi1?Data.secondPage.Aside.projectsLi1:"Null"}</li>
                    <li className=" p-2 transition duration-200 hover:bg-gradient-to-l from-black to-gray-500 rounded-lg  mt-2"> <span className=" border border-TextColor w-6 h-6 rounded-lg mr-3 "></span>  {Data.secondPage.Aside.projectsLi2?Data.secondPage.Aside.projectsLi2:"Null"}</li>
                    <li className=" p-2 transition duration-200 hover:bg-gradient-to-l from-black to-gray-500 rounded-lg  mt-2 "> <span className=" border border-TextColor w-6 h-6 rounded-lg mr-3"></span> {Data.secondPage.Aside.projectsLi3?Data.secondPage.Aside.projectsLi3:"Null"}</li>
                    <li className=" p-2 transition duration-200 hover:bg-gradient-to-l from-black to-gray-500 rounded-lg  mt-2 "> <span className=" border border-TextColor w-6 h-6 rounded-lg mr-3"></span> {Data.secondPage.Aside.projectsLi4?Data.secondPage.Aside.projectsLi4:"Null"}</li>
                </ul>
            </div>
        </div> 
    )
}

export default Aside;