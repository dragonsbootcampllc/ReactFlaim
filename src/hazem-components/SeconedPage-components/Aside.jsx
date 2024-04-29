



function Aside(props) {
    const { Data } = props;
    Data ? Data : null;
    return (
        <div className="side-bar text-white w-full  md:w-3/12 bg-SectionAsideColor2 ">
            <div className="head border-b border-borderColor ">
                <h1 className=" text-3xl italic text-white ">{ Data.secondPage.Aside.Headh1}</h1>
                <p className=" text-blue-700 text-sm pb-3 ">{Data.secondPage.Aside.HeadP} </p>
            </div>
            <div className="general pb-4">
                <p className=" text-gray-500 uppercase p-2">{Data.secondPage.Aside.generalP}</p>
                <ul>
                    <li className=" p-2  transition duration-500 hover:bg-gradient-to-l from-black to-gray-500 rounded-lg">{Data.secondPage.Aside.generaLi1}</li>
                    <li className="p-2 transition duration-500 hover:bg-gradient-to-l from-black to-gray-500 rounded-lg"> {Data.secondPage.Aside.generaLi2}</li>
                </ul>
            </div>
            <div className="projects">
                <p className=" text-gray-500 uppercase p-2">{Data.secondPage.Aside.projectsP}</p>
                <ul>
                    <li className=" p-2  bg-gradient-to-l from-black to-gray-500 rounded-lg mt-2"> {Data.secondPage.Aside.projectsLi1}</li>
                    <li className=" p-2 transition duration-200 hover:bg-gradient-to-l from-black to-gray-500 rounded-lg  mt-2"> <span className=" border border-TextColor w-6 h-6 rounded-lg mr-3 "></span>  {Data.secondPage.Aside.projectsLi2}</li>
                    <li className=" p-2 transition duration-200 hover:bg-gradient-to-l from-black to-gray-500 rounded-lg  mt-2 "> <span className=" border border-TextColor w-6 h-6 rounded-lg mr-3"></span> {Data.secondPage.Aside.projectsLi3}</li>
                    <li className=" p-2 transition duration-200 hover:bg-gradient-to-l from-black to-gray-500 rounded-lg  mt-2 "> <span className=" border border-TextColor w-6 h-6 rounded-lg mr-3"></span> {Data.secondPage.Aside.projectsLi4}</li>
                </ul>
            </div>
        </div>

    )
}

export default Aside;