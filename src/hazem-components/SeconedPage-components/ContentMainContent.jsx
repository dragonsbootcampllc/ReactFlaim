


function ContentMainContent({ Data }) {
    Data ? Data : null;
    return (
        <div className="content text-white mt-8">
            <div className="text max-w-4xl text-center">
                <h1 className=' text-2xl'>{Data.secondPage.ContentMainContent.content.h1 ?Data.secondPage.ContentMainContent.content.h1:"Null"}</h1>
                <p className=' p-5 text-sm text-borderColor mb-6 '>{Data.secondPage.ContentMainContent.content.p?Data.secondPage.ContentMainContent.content.p:"Null" }</p>
            </div>
            <div className="boxes flex flex-col md:flex-row justify-evenly items-center  ">
                <div className="box text-center mb-14 ">
                    <div className="icon">
                        <div className="w-12 h-12 bg-ItemsColor rounded-full mx-auto shadow-box-shadow"></div>
                    <p className="p-2">{Data.secondPage.ContentMainContent.box1.p1?Data.secondPage.ContentMainContent.box1.p1:"Null" } </p>
                    </div>
                    <div className="items">
                    <p className=" text-start bg-gradient-to-r from-background to-borderColor border-none  p-2 rounded-lg">{Data.secondPage.ContentMainContent.box1.p2 ? Data.secondPage.ContentMainContent.box1.p2: "Null" } </p>
                    </div>
                </div>
                <div className="box  text-center mb-14 ">
                    <div className="icon">
                        <div className="w-12 h-12 bg-ItemsColor rounded-full mx-auto shadow-box-shadow"></div>
                    <p className="p-2">{Data.secondPage.ContentMainContent.box2.p1 ?Data.secondPage.ContentMainContent.box2.p1:"Null"}</p>
                    </div>
                    <div className="items">
                    <p className=" text-start bg-gradient-to-r from-background to-borderColor border-none  p-2 rounded-lg">{Data.secondPage.ContentMainContent.box2.p2 ?Data.secondPage.ContentMainContent.box2.p2:"Null" } </p>
                    </div>
                </div>
                <div className="box  text-center mb-14">
                    <div className="icon">
                        <div className="w-12 h-12 bg-ItemsColor rounded-full mx-auto shadow-box-shadow"></div>
                    <p className="p-2">{Data.secondPage.ContentMainContent.box3.p1 ?Data.secondPage.ContentMainContent.box3.p1 :"Null"} </p>
                    </div>
                    <div className="items">
                    <p className=" text-start bg-gradient-to-r from-background to-borderColor border-none  p-2 rounded-lg">{Data.secondPage.ContentMainContent.box3.p2 ?Data.secondPage.ContentMainContent.box3.p2:"Null" } </p>
                    </div>
                </div>
                <div className="box text-center mb-14">
                    <div className="icon">
                        <div className="w-12 h-12 bg-ItemsColor rounded-full mx-auto shadow-box-shadow"></div>
                    <p className="p-2">{Data.secondPage.ContentMainContent.box4.p1 ? Data.secondPage.ContentMainContent.box4.p1 : "Null" }</p>
                    </div>
                    <div className="items">
                    <p className=" text-start bg-gradient-to-r from-background to-borderColor border-none  p-2 rounded-lg">{Data.secondPage.ContentMainContent.box4.p2 ? Data.secondPage.ContentMainContent.box4.p2 : "Null"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContentMainContent;