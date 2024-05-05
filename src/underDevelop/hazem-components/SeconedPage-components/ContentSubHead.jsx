


function ContentSubHead() {
    return (
        <div className="sub-head flex justify-between items-center text-white  ">
            <div className="text">
                <h1 className="  text-2xl ">Jappanese Pottery</h1>
                <p className=" text-borderColor pt-1 text-sm">Marketing Campaign for a new TV series Launch</p>
            </div>
            <div className="left hidden  md:flex justify-between items-center w-2/6 ">
                <div className="  images md:flex relative ">
                    <div className="image">
                        <img src="/public/photos/download2.jpeg" alt="" className="  w-10 h-10 rounded-full z-40 " />
                    </div>
                    <div className="image relative">
                        <span className=" w-4 h-4 bg-green-500 rounded-full absolute -right-1"></span>
                        <img src="/public/photos/download3.jpeg" alt="" className="  w-10 h-10 rounded-full z-30" />
                    </div>
                    <div className="image relative">
                    <span className=" w-4 h-4 bg-green-500 rounded-full absolute -right-1"></span>
                        <img src="/public/photos/download4.jpeg" alt="" className="  w-10 h-10 rounded-full z-20 " />
                    </div>
                    <div className="image">
                        <img src="/public/photos/pexels-olly-842811.jpg" alt="" className="  w-10 h-10 rounded-full z-10" />
                    </div>
                </div>
                <div className="box text-center">
                    <div className="button bg-background border-none text-borderColor p-2 rounded-lg cursor-pointer">share</div>
                </div>
            </div>
        </div>
    )
}

export default ContentSubHead;