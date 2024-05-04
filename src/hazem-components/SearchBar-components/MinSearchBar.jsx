

function MinSearchBar({ Data}) {
    return (
        <div className="bar  ">
            <div className="container mx-auto  py-10 bg-[#141414] ">
                <h1 className=" text-3xl text-white pb-2 my-3">{ Data.SearchBar.MinSearchBar.h1 ? Data.SearchBar.MinSearchBar.h1 : "Null"}</h1>
                <div className="holder bg-white mt-2 py-3 px-4 relative rounded-[35px]">
                    <input type="text" name="" id="" placeholder="Job title or keyword" className="  md:border-r-2 md:border-[#e7e7e7] sm:border-r-none p-2 w-1/2 focus:outline-none"/>
                    <input type="text" name="" id="" placeholder="Add country or city"  className=" ml-0 md:ml-3  focus:outline-none p-2"/>
                    <input type="button" value="Search" className=" cursor-pointer absolute right-7 bottom-5 md:right-[6px] md:bottom-[4px] px-8 py-4 bg-[#2a85ff] text-white rounded-[20px] md:rounded-[35px]" />
                </div>
            </div>
        </div>

    )

}
export default MinSearchBar;