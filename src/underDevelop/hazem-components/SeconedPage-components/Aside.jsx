


function Aside() {
    return (
        <div className="side-bar text-white w-full  md:w-3/12 bg-SectionAsideColor2 ">
            <div className="head border-b border-borderColor ">
                <h1 className=" text-3xl italic text-white ">Zentro</h1>
                <p className=" text-blue-700 text-sm pb-3 ">12members</p>
            </div>
            <div className="general pb-4">
                <p className=" text-gray-500 uppercase p-2">GENRAL</p>
                <ul>
                    <li className=" p-2  transition duration-500 hover:bg-gradient-to-l from-black to-gray-500 rounded-lg">Search</li>
                    <li className="p-2 transition duration-500 hover:bg-gradient-to-l from-black to-gray-500 rounded-lg"> Billing</li>
                </ul>
            </div>
            <div className="projects">
                <p className=" text-gray-500 uppercase p-2">PROJECTS</p>
                <ul>
                    <li className=" p-2  bg-gradient-to-l from-black to-gray-500 rounded-lg mt-2"> Oribital oddysey</li>
                    <li className=" p-2 transition duration-200 hover:bg-gradient-to-l from-black to-gray-500 rounded-lg  mt-2"> <span className=" border border-TextColor w-6 h-6 rounded-lg mr-3 "></span> Digital Product launch</li>
                    <li className=" p-2 transition duration-200 hover:bg-gradient-to-l from-black to-gray-500 rounded-lg  mt-2 "> <span className=" border border-TextColor w-6 h-6 rounded-lg mr-3"></span>Brand Fresh</li>
                    <li className=" p-2 transition duration-200 hover:bg-gradient-to-l from-black to-gray-500 rounded-lg  mt-2 "> <span className=" border border-TextColor w-6 h-6 rounded-lg mr-3"></span>Social Media Strategy</li>
                </ul>
            </div>
        </div>

    )
}

export default Aside;