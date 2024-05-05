


function ZenteroHeader() {
    return (
            <div className='container mx-auto flex justify-between items-center	bg-SectionAsideColor2 p-4 pb-6 rounded-3xl	' >
                <div className="colored flex">
                    <div className="red w-4 h-4 bg-red-500 rounded-full mr-1 "></div>
                    <div className="yellow w-4 h-4 bg-yellow-500 rounded-full mr-1 "></div>
                    <div className="blue w-4 h-4 bg-green-500 rounded-full mr-1"></div>
                </div>
                <div className="text text-white text-center bg-background rounded-3xl w-3/5">
                    <p className=' text-lg'> zentero.com </p>
                </div>
                <div className="boxs flex">
                    <div className="box bg-gray-500 w-6 h-6 rounded-lg mr-3 "></div>
                    <div className="box bg-gray-500 w-6 h-6 rounded-lg  "></div>
                </div>
            </div>

    );
}

export default ZenteroHeader;