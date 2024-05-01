
function Card({ Data}) {
    return (

        <div className="all container mx-auto text-white bg-black rounded-2xl mt-7">
            <div className="header text-center py-8">
                <div className="container mx-auto">
                    <h1 className="  text-xl">
                        { Data.Header.h1 ? Data.Header.h1:"Null"} <span className=" text-black bg-white px-2 py-1 rounded-3xl italic font-bold">{Data.Header.span ? Data.Header.span:"Null" }</span></h1>
                </div>
            </div>
            <div className="content relative w-full p-2 overflow-hidden">
                <div className="overlay absolute z-10  top-0 left-0 w-full h-full bg-[linear-gradient(to_right,_black,_transparent_30%,_transparent_50%,_transparent,_black)]   bottom-[0%]  right-[0%]"></div>
                <div className="container relative" >
                    <div className="top flex justify-evenly overflow-hidden ">
                        <div className="icon">
                            { Data.Content.top.icon1 ? Data.Content.top.icon1:"Null"}
                        </div>
                        <div className="icon">
                        { Data.Content.top.icon2 ? Data.Content.top.icon2:"Null"}
                        </div>
                        <div className="icon">
                        { Data.Content.top.icon3 ? Data.Content.top.icon3:"Null"}
                        </div>
                        <div className="icon">
                        { Data.Content.top.icon4 ? Data.Content.top.icon4:"Null"}
                        </div>
                        <div className="icon">
                        { Data.Content.top.icon5 ? Data.Content.top.icon5:"Null"}
                        </div>
                        <div className="icon">
                        { Data.Content.top.icon6 ? Data.Content.top.icon6:"Null"}
                        </div>
                    </div>
                    <div className="bottom flex justify-evenly mt-2 overflow-hidden ">
                        <div className="icon">
                        { Data.Content.bottom.icon1 ? Data.Content.bottom.icon1:"Null"}
                        </div>
                        <div className="icon">
                        { Data.Content.bottom.icon2 ? Data.Content.bottom.icon2:"Null"}
                        </div>
                        <div className="icon">
                        { Data.Content.bottom.icon3 ? Data.Content.bottom.icon3:"Null"}
                        </div>
                        <div className="icon">
                        { Data.Content.bottom.icon4 ? Data.Content.bottom.icon4:"Null"}
                        </div>
                        <div className="icon">
                        { Data.Content.bottom.icon5 ? Data.Content.bottom.icon5:"Null"}
                        </div>
                        <div className="icon">
                        { Data.Content.bottom.icon6 ? Data.Content.bottom.icon6:"Null"}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Card;