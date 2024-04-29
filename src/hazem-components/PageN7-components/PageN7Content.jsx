import Data from '../../MainData.json';



function PageN7Content() {
    return (
        <div className="content py-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center  gap-10">
                <div className="image">
                    <img src="/public/photos/papers.jpg" alt=" image" className=" rounded-2xl " />
                </div>
                <div className="text text-white ">
                    <h3 className=" text-[#f87760] text-sm">{ Data.PageN7.PageN7Content.h3}</h3>
                    <h1 className=" text-3xl py-2">{ Data.PageN7.PageN7Content.h1}</h1>
                    <p className=" text-borderColor pt-3">{ Data.PageN7.PageN7Content.p1}</p>
                    <p  className=" text-borderColor py-3">{ Data.PageN7.PageN7Content.p2}</p>
                </div>
            </div>
        </div>
    );
}
export default PageN7Content;