

function Footer({ Data }) {
    Data ? Data : null;
    return (
        <div className="container pt-10  pb-5">
            <div className="cont text-center md:text-left bg-background p-5 border border-borderColor my-5 flex flex-col md:flex-row justify-between items-center rounded-lg">
                <div className="text">
                    <h1 className=" text-white text-xl md:text-2xl">{ Data.PageN5.Footer.text.h1 ?Data.PageN5.Footer.text.h1 :"Null"}</h1>
                    <p className=" text-borderColor text-sm md:text-sm mt-3 pt-0 ">{ Data.PageN5.Footer.text.p ?Data.PageN5.Footer.text.p:"Null"}</p>
                </div>
                <div className="left text-white mt-5 md:mt-0">
                    <div>
                        <button className=" bg-blue-600 p-3 rounded-lg cursor-pointer">{ Data.PageN5.Footer.Left.button ? Data.PageN5.Footer.Left.button :"Null"}</button>
                    </div>
                    <p className=" text-borderColor text-sm md:text-sm mt-1 pt-0 ">{ Data.PageN5.Footer.Left.p ? Data.PageN5.Footer.Left.p :"Null" }</p>
                </div>
            </div>
        </div>
    );
}
export default Footer;