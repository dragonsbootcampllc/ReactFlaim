


function PageN7Nav({ Data }) {
    Data ? Data : null;
    return (
        <div className="nav p-5">
            <div className="container mx-auto ">
                <ul className=" border border-white grid grid-cols-4  rounded-[35px] ">
                    <li className=" block px-3 py-4 text-white font-bold text-xl text-center rounded-[35px] hover:bg-white hover:text-black">{ Data.PageN7.PageN7Nav.li1 ?Data.PageN7.PageN7Nav.li1:"Null" }</li>
                    <li className=" block px-3 py-4 text-white font-bold text-xl text-center rounded-[35px] hover:bg-white hover:text-black">{ Data.PageN7.PageN7Nav.li2?Data.PageN7.PageN7Nav.li2:"Null" }</li>
                    <li className=" block px-3 py-4 text-white font-bold text-xl text-center rounded-[35px] hover:bg-white hover:text-black">{ Data.PageN7.PageN7Nav.li3 ?Data.PageN7.PageN7Nav.li3 :"Null"}</li>
                    <li className=" block px-3 py-4 text-black font-bold text-xl text-center bg-white rounded-[35px]">{ Data.PageN7.PageN7Nav.li4?Data.PageN7.PageN7Nav.li4:"Null" }</li>
            </ul>
            </div>
        </div>
    )
}
export default PageN7Nav;