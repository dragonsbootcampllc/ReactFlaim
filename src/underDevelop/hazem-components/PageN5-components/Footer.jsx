

function Footer() {
    return (
        <div className="container pt-10  pb-5">
            <div className="cont text-center md:text-left bg-background p-5 border border-borderColor my-5 flex flex-col md:flex-row justify-between items-center rounded-lg">
                <div className="text">
                    <h1 className=" text-white text-xl md:text-2xl">Sound like you?</h1>
                    <p className=" text-borderColor text-sm md:text-sm mt-3 pt-0 ">Apply to receive a free CMS site plan for a full year.</p>
                </div>
                <div className="left text-white mt-5 md:mt-0">
                    <div>
                        <button className=" bg-blue-600 p-3 rounded-lg cursor-pointer">Apply for the startup discount</button>
                    </div>
                    <p className=" text-borderColor text-sm md:text-sm mt-1 pt-0 ">Startups must all critena amve to qualify.</p>
                </div>
            </div>
        </div>
    );
}
export default Footer;