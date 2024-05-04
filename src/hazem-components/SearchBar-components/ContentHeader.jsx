



function ContentHeader({ Data}) {
    return (

        <div className="header pt-8  ">
            <div className="container  bg-[#141414] mx-auto flex flex-col  md:flex-row md:justify-between items-center rounded-t-3xl py-0">
                <div className="nav flex md:flex-row justify-between items-center flex-1 p-0 ">
                    <div className="logo font-bold text-[#2a85ff]">
                    { Data.SearchBar.ContentHeader.div ? Data.SearchBar.ContentHeader.div : "Null" }
                    </div>
                    <ul className=" flex  justify-start md:flex-row  items-center  md:gap-4 text-white" >
                        <li className=" text-[10px] md:text-[14px] text-borderColor hover:border-t-2 border-[#2a85ff] hover:text-[#2a85ff] py-2 px-3">{ Data.SearchBar.ContentHeader.li1 ? Data.SearchBar.ContentHeader.li1 : "Null" }</li>
                        <li className=" text-[10px] md:text-[14px] text-borderColor hover:border-t-2 border-[#2a85ff] hover:text-[#2a85ff] py-2 px-3">{ Data.SearchBar.ContentHeader.li2 ? Data.SearchBar.ContentHeader.li2 : "Null" }</li>
                        <li className=" text-[10px] md:text-[14px] text-borderColor hover:border-t-2 border-[#2a85ff] hover:text-[#2a85ff] py-2 px-3">{ Data.SearchBar.ContentHeader.li3 ? Data.SearchBar.ContentHeader.li3 : "Null" }</li>
                        <li className=" text-[10px] md:text-[14px] text-borderColor hover:border-t-2 border-[#2a85ff] hover:text-[#2a85ff] py-2 px-3">{ Data.SearchBar.ContentHeader.li4 ? Data.SearchBar.ContentHeader.li4 : "Null" }</li>
                    </ul>
                </div>
                <div className="left w-1/3 hidden md:flex justify-end p-2">
                    <div className="bell w-8 h-8 rounded-full bg-[#1e1e1e] mr-2"></div>
                    <div className="cont flex items-center gap-2">
                        <p className=" text-white text-[14px]">Fintan Corbrera</p>
                        <div className="image">
                            <img src="/public/photos/download3.jpeg" alt="" className=" w-8 h-8 rounded-full"  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContentHeader;