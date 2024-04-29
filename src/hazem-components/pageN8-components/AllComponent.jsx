



function AllComponent( props ) {
    const { Data } = props;
    Data ? Data : null;
    return (
        <div className=" all mt-8">
            <div className="header">
                <div className="container mx-auto text-center">
                    <p className=" text-4xl font-bold">{Data.PageN8.header.p1}</p>
                    <p className=" text-4xl m-0  md:ml-14 font-bold">{Data.PageN8.header.p2}</p>
                </div>
            </div>
            <div className="content mt-8">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center  gap-10">
                    <div className="image ">
                        <img src="/public/photos/man.jpg" alt=" image" className=" rounded-2xl " />
                    </div>
                    <div className="left">
                        <h1 className=" text-6xl p-0">{Data.PageN8.content_left.h1}</h1>
                        <p className="text-borderColor pt-3 text-xl">{Data.PageN8.content_left.p1} <span className="text-black">{Data.PageN8.content_left.span} </span>
                            {Data.PageN8.content_left.p1}</p>
                        <div className="item flex justify-between items-center my-4">
                            <div className="text">
                                <h3 className=" font-bold">{Data.PageN8.content_left.item.h3}</h3>
                                <span className="text-borderColor ">{Data.PageN8.content_left.item.span}</span>
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