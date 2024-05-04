


function RecommendedJobs({ Data }) {
    return (
        <div className="recommendedjobs ">
            <div className="container bg-[#f0f5fa] mx-auto">
                <div className="top flex justify-between items-center py-5">
                    <h1 className=" font-bold text-xl md:text-3xl">{Data.SearchBar.RecommendedJobs.top.h1 ? Data.SearchBar.RecommendedJobs.top.h1 : "Null"}</h1>
                    <div className=" border border-black/35 rounded-2xl py-1 px-3 cursor-pointer" >{Data.SearchBar.RecommendedJobs.top.div ? Data.SearchBar.RecommendedJobs.top.div : "Null"}</div>
                </div>
                <div className="cont grid sm:grid-cols-1 md:grid-cols-7 gap-5">
                    <div className="aside col-span-1">
                        <div className="head flex justify-between pb-6">
                            <h3 className=" text-xs font-bold">{Data.SearchBar.RecommendedJobs.cont.aside.head.h3 ? Data.SearchBar.RecommendedJobs.cont.aside.head.h3 : "Null"}</h3>
                            <p className=" text-xs text-[#fc6a6c] cursor-pointer"> {Data.SearchBar.RecommendedJobs.cont.aside.head.p ? Data.SearchBar.RecommendedJobs.cont.aside.head.p : "Null"}</p>
                        </div>
                        <div className="optains">
                            <ul>
                                <li className=" flex items-center"><input type="checkbox" id="item1" name="item1" className=" accent-black" /><label htmlFor="item1" className=" text-[14px] opacity-60 ml-2">{Data.SearchBar.RecommendedJobs.cont.aside.optians.li1 ? Data.SearchBar.RecommendedJobs.cont.aside.optians.li1 : "Null"}</label></li>
                                <li className=" flex items-center"><input type="checkbox" id="item2" name="item2" className=" accent-black" /><label htmlFor="item2" className=" text-[14px] opacity-60 ml-2">{Data.SearchBar.RecommendedJobs.cont.aside.optians.li2 ? Data.SearchBar.RecommendedJobs.cont.aside.optians.li2 : "Null"}</label></li>
                                <li className=" flex items-center"><input type="checkbox" id="item3" name="item3" className=" accent-black" /><label htmlFor="item3" className=" text-[14px] opacity-60 ml-2">{Data.SearchBar.RecommendedJobs.cont.aside.optians.li3 ? Data.SearchBar.RecommendedJobs.cont.aside.optians.li3 : "Null"} </label></li>
                                <li className=" flex items-center"><input type="checkbox" id="item4" name="item4" className=" accent-black" /><label htmlFor="item4" className=" text-[14px] opacity-60 ml-2">{Data.SearchBar.RecommendedJobs.cont.aside.optians.li4 ? Data.SearchBar.RecommendedJobs.cont.aside.optians.li4 : "Null"} </label></li>
                                <li className=" flex items-center"><input type="checkbox" id="item5" name="item5" className=" accent-black" /><label htmlFor="item5" className=" text-[14px] opacity-60 ml-2">{Data.SearchBar.RecommendedJobs.cont.aside.optians.li5 ? Data.SearchBar.RecommendedJobs.cont.aside.optians.li5 : "Null"} </label></li>
                            </ul>
                        </div>
                    </div>
                    <div className="cards col-span-6 grid sm:grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="card bg-white rounded-2xl p-3">
                            <div className="header flex items-start gap-2 justify-between">
                                <div className="all flex">
                                    <div className="logo h-10 w-10 bg-borderColor rounded-full mr-5"></div>
                                    <div className="text">
                                        <h2 className=" font-bold">{Data.SearchBar.RecommendedJobs.cont.cards.card1.header.h2 ? Data.SearchBar.RecommendedJobs.cont.cards.card1.header.h2 : "Null"} </h2>
                                        <span className=" text-xs opacity-60 mr-1">{Data.SearchBar.RecommendedJobs.cont.cards.card1.header.span1 ? Data.SearchBar.RecommendedJobs.cont.cards.card1.header.span1 : "Null"} </span>
                                        <span className=" font-bold">{Data.SearchBar.RecommendedJobs.cont.cards.card1.header.span2 ? Data.SearchBar.RecommendedJobs.cont.cards.card1.header.span2 : "Null"} </span>
                                        <span className=" text-xs opacity-60 ml-1">{Data.SearchBar.RecommendedJobs.cont.cards.card1.header.span3 ? Data.SearchBar.RecommendedJobs.cont.cards.card1.header.span3 : "Null"} </span>
                                    </div>
                                </div>
                                <div className="heart h-7 w-7 rounded-full bg-borderColor"></div>
                            </div>
                            <div className="Properties flex items-center gap-2 pt-3 ">
                                <div className="one bg-[#f3e5fe] py-1 px-2 rounded-xl">
                                    <span className=" text-xs text-[#a680ca] font-bold">{Data.SearchBar.RecommendedJobs.cont.cards.card1.properties.span1 ? Data.SearchBar.RecommendedJobs.cont.cards.card1.properties.span1 : "Null"} </span>
                                </div>
                                <div className="two bg-[#e2ffef] py-1 px-2 rounded-xl">
                                    <span className=" text-xs text-[#4fb16c] font-bold">{Data.SearchBar.RecommendedJobs.cont.cards.card1.properties.span2 ? Data.SearchBar.RecommendedJobs.cont.cards.card1.properties.span2 : "Null"} </span>
                                </div>
                                <div className="three bg-[#ffece1] py-1 px-2 rounded-xl">
                                    <span className=" text-xs text-[#b6865b] font-bold">{Data.SearchBar.RecommendedJobs.cont.cards.card1.properties.span3 ? Data.SearchBar.RecommendedJobs.cont.cards.card1.properties.span3 : "Null"} </span>
                                </div>
                            </div>
                            <div className="para py-4 ">
                                <p className=" text-sm text-black/60">{Data.SearchBar.RecommendedJobs.cont.cards.card1.para ? Data.SearchBar.RecommendedJobs.cont.cards.card1.para : "Null"} </p>
                            </div>
                            <div className="footer border-t border-black/20 flex justify-between items-end p-3">
                                <p className=" font-bold">{Data.SearchBar.RecommendedJobs.cont.cards.card1.footer.p_1 ? Data.SearchBar.RecommendedJobs.cont.cards.card1.footer.p_1 : "Null"} <span className=" text-black/40 font-normal">{Data.SearchBar.RecommendedJobs.cont.cards.card1.footer.span ? Data.SearchBar.RecommendedJobs.cont.cards.card1.footer.span : "Null"} </span></p>
                                <p className=" text-xs text-black/35">{Data.SearchBar.RecommendedJobs.cont.cards.card1.footer.p_2 ? Data.SearchBar.RecommendedJobs.cont.cards.card1.footer.p_2 : "Null"} </p>
                            </div>
                        </div>
                        <div className="card bg-white rounded-2xl p-3">
                            <div className="header flex items-start gap-2 justify-between">
                                <div className="all flex">
                                    <div className="logo h-10 w-10 bg-borderColor rounded-full mr-5"></div>
                                    <div className="text">
                                        <h2 className=" font-bold">{Data.SearchBar.RecommendedJobs.cont.cards.card1.header.h2 ? Data.SearchBar.RecommendedJobs.cont.cards.card1.header.h2 : "Null"} </h2>
                                        <span className=" text-xs opacity-60 mr-1">{Data.SearchBar.RecommendedJobs.cont.cards.card1.header.span1 ? Data.SearchBar.RecommendedJobs.cont.cards.card1.header.span1 : "Null"} </span>
                                        <span className=" font-bold">{Data.SearchBar.RecommendedJobs.cont.cards.card1.header.span2 ? Data.SearchBar.RecommendedJobs.cont.cards.card1.header.span2 : "Null"} </span>
                                        <span className=" text-xs opacity-60 ml-1">{Data.SearchBar.RecommendedJobs.cont.cards.card1.header.span3 ? Data.SearchBar.RecommendedJobs.cont.cards.card1.header.span3 : "Null"} </span>
                                    </div>
                                </div>
                                <div className="heart h-7 w-7 rounded-full bg-borderColor"></div>
                            </div>
                            <div className="Properties flex items-center gap-2 pt-3 ">
                                <div className="one bg-[#f3e5fe] py-1 px-2 rounded-xl">
                                    <span className=" text-xs text-[#a680ca] font-bold">{Data.SearchBar.RecommendedJobs.cont.cards.card1.properties.span1 ? Data.SearchBar.RecommendedJobs.cont.cards.card1.properties.span1 : "Null"} </span>
                                </div>
                                <div className="two bg-[#e2ffef] py-1 px-2 rounded-xl">
                                    <span className=" text-xs text-[#4fb16c] font-bold">{Data.SearchBar.RecommendedJobs.cont.cards.card1.properties.span2 ? Data.SearchBar.RecommendedJobs.cont.cards.card1.properties.span2 : "Null"} </span>
                                </div>
                                <div className="three bg-[#ffece1] py-1 px-2 rounded-xl">
                                    <span className=" text-xs text-[#b6865b] font-bold">{Data.SearchBar.RecommendedJobs.cont.cards.card1.properties.span3 ? Data.SearchBar.RecommendedJobs.cont.cards.card1.properties.span3 : "Null"} </span>
                                </div>
                            </div>
                            <div className="para py-4 ">
                                <p className=" text-sm text-black/60">{Data.SearchBar.RecommendedJobs.cont.cards.card1.para ? Data.SearchBar.RecommendedJobs.cont.cards.card1.para : "Null"} </p>
                            </div>
                            <div className="footer border-t border-black/20 flex justify-between items-end p-3">
                                <p className=" font-bold">{Data.SearchBar.RecommendedJobs.cont.cards.card1.footer.p_1 ? Data.SearchBar.RecommendedJobs.cont.cards.card1.footer.p_1 : "Null"} <span className=" text-black/40 font-normal">{Data.SearchBar.RecommendedJobs.cont.cards.card1.footer.span ? Data.SearchBar.RecommendedJobs.cont.cards.card1.footer.span : "Null"} </span></p>
                                <p className=" text-xs text-black/35">{Data.SearchBar.RecommendedJobs.cont.cards.card1.footer.p_2 ? Data.SearchBar.RecommendedJobs.cont.cards.card1.footer.p_2 : "Null"} </p>
                            </div>
                        </div>
                        <div className="card bg-white rounded-2xl p-3">
                            <div className="header flex items-start gap-2 justify-between">
                                <div className="all flex">
                                    <div className="logo h-10 w-10 bg-borderColor rounded-full mr-5"></div>
                                    <div className="text">
                                        <h2 className=" font-bold">{Data.SearchBar.RecommendedJobs.cont.cards.card1.header.h2 ? Data.SearchBar.RecommendedJobs.cont.cards.card1.header.h2 : "Null"} </h2>
                                        <span className=" text-xs opacity-60 mr-1">{Data.SearchBar.RecommendedJobs.cont.cards.card1.header.span1 ? Data.SearchBar.RecommendedJobs.cont.cards.card1.header.span1 : "Null"} </span>
                                        <span className=" font-bold">{Data.SearchBar.RecommendedJobs.cont.cards.card1.header.span2 ? Data.SearchBar.RecommendedJobs.cont.cards.card1.header.span2 : "Null"} </span>
                                        <span className=" text-xs opacity-60 ml-1">{Data.SearchBar.RecommendedJobs.cont.cards.card1.header.span3 ? Data.SearchBar.RecommendedJobs.cont.cards.card1.header.span3 : "Null"} </span>
                                    </div>
                                </div>
                                <div className="heart h-7 w-7 rounded-full bg-borderColor"></div>
                            </div>
                            <div className="Properties flex items-center gap-2 pt-3 ">
                                <div className="one bg-[#f3e5fe] py-1 px-2 rounded-xl">
                                    <span className=" text-xs text-[#a680ca] font-bold">{Data.SearchBar.RecommendedJobs.cont.cards.card1.properties.span1 ? Data.SearchBar.RecommendedJobs.cont.cards.card1.properties.span1 : "Null"} </span>
                                </div>
                                <div className="two bg-[#e2ffef] py-1 px-2 rounded-xl">
                                    <span className=" text-xs text-[#4fb16c] font-bold">{Data.SearchBar.RecommendedJobs.cont.cards.card1.properties.span2 ? Data.SearchBar.RecommendedJobs.cont.cards.card1.properties.span2 : "Null"} </span>
                                </div>
                                <div className="three bg-[#ffece1] py-1 px-2 rounded-xl">
                                    <span className=" text-xs text-[#b6865b] font-bold">{Data.SearchBar.RecommendedJobs.cont.cards.card1.properties.span3 ? Data.SearchBar.RecommendedJobs.cont.cards.card1.properties.span3 : "Null"} </span>
                                </div>
                            </div>
                            <div className="para py-4 ">
                                <p className=" text-sm text-black/60">{Data.SearchBar.RecommendedJobs.cont.cards.card1.para ? Data.SearchBar.RecommendedJobs.cont.cards.card1.para : "Null"} </p>
                            </div>
                            <div className="footer border-t border-black/20 flex justify-between items-end p-3">
                                <p className=" font-bold">{Data.SearchBar.RecommendedJobs.cont.cards.card1.footer.p_1 ? Data.SearchBar.RecommendedJobs.cont.cards.card1.footer.p_1 : "Null"} <span className=" text-black/40 font-normal">{Data.SearchBar.RecommendedJobs.cont.cards.card1.footer.span ? Data.SearchBar.RecommendedJobs.cont.cards.card1.footer.span : "Null"} </span></p>
                                <p className=" text-xs text-black/35">{Data.SearchBar.RecommendedJobs.cont.cards.card1.footer.p_2 ? Data.SearchBar.RecommendedJobs.cont.cards.card1.footer.p_2 : "Null"} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default RecommendedJobs;