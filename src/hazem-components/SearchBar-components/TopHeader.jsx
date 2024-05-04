


function TopHeader({ Data}) {
    return (

        <div className="top-header py-8">
            <div className="container mx-auto text-white flex flex-col md:flex-row justify-between items-center">
                <div className="left w-80 text-center md:text-left">
                    <h3 className=" text-2xl">{ Data.SearchBar.TopHeader.top_header.h3_1? Data.SearchBar.TopHeader.top_header.h3_1:"Null" }</h3>
                    <h1 className=" font-bold text-5xl py-4">{ Data.SearchBar.TopHeader.top_header.h1? Data.SearchBar.TopHeader.top_header.h1:"Null" }</h1>
                    <p className=" py-4">{ Data.SearchBar.TopHeader.top_header.p? Data.SearchBar.TopHeader.top_header.p:"Null" }</p>
                    <h3 className=" text-sm">{ Data.SearchBar.TopHeader.top_header.h3_2? Data.SearchBar.TopHeader.top_header.h3_2:"Null" }</h3>
                </div>
                <div className="right hidden md:block ">
                    <div>
                    <p className=" my-3">{ Data.SearchBar.TopHeader.right.p? Data.SearchBar.TopHeader.right.p:"Null" }</p>
                    </div>
                    <div className="cont flex flex-col md:flex-row justify-between items-center gap-4 bg-[#141414] p-5 rounded-3xl">
                        <div className="item">
                            <div className=" w-24 h-24 rounded-xl bg-[#2a85ff]"></div>
                            <span className=" text-sm">{ Data.SearchBar.TopHeader.right.span1? Data.SearchBar.TopHeader.right.span1:"Null" }</span>
                        </div>
                        <div className="item">
                            <div className=" w-24 h-24 rounded-xl bg-[#a7a7a7]"></div>
                            <span className=" text-sm">{ Data.SearchBar.TopHeader.right.span2? Data.SearchBar.TopHeader.right.span2:"Null" }</span>
                        </div>
                        <div className="item">
                            <div className=" w-24 h-24 rounded-xl bg-[#070707]"></div>
                            <span className=" text-sm">{ Data.SearchBar.TopHeader.right.span3? Data.SearchBar.TopHeader.right.span3:"Null" }</span>
                        </div>
                        <div className="item">
                            <div className=" w-24 h-24 rounded-xl bg-[#f0f5fa]"></div>
                            <span className=" text-sm">{ Data.SearchBar.TopHeader.right.span4? Data.SearchBar.TopHeader.right.span4:"Null" }</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopHeader;