


function AllComponent() {
    return (
        <div className=" all mt-8">
            <div className="header">
                <div className="container text-center">
                    <p className=" text-4xl font-bold">Don't take our words</p>
                    <p className=" text-4xl m-0  md:ml-14 font-bold">trust our customer</p>
                </div>
            </div>
            <div className="content mt-8">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center  gap-10">
                    <div className="image ">
                        <img src="/public/photos/man.jpg" alt=" image" className=" rounded-2xl " />
                    </div>
                    <div className="left">
                        <h1 className=" text-6xl p-0">"</h1>
                        <p className="text-borderColor pt-3 text-xl">I can tell you first hand, Basecom is absolutely
                            amazing. They have helped me <span className="text-black"> grow my company by
                                125% </span> since they revamped our website and messaging.
                            Highly Recommened!</p>
                        <div className="item flex justify-between items-center my-4">
                            <div className="text">
                                <h3 className=" font-bold">David Henricks</h3>
                                <span className="text-borderColor ">VP of Marketing at Flash</span>
                            </div>
                            <div className="icons flex gap-4">
                                <div className=" w-10 h-8 rounded-[14px] border border-black "> <i></i></div>
                                <div className=" w-10 h-8 rounded-[14px] border border-black "> <i></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AllComponent;