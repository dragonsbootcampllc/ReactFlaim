


function PageN7Nav(props) {
    const { Data } = props;
    return (
        <div className="nav p-5">
            <div className="container mx-auto ">
                <ul className=" border border-white grid grid-cols-4  rounded-[35px] ">
                    <li className=" block px-3 py-4 text-white font-bold text-xl text-center rounded-[35px] hover:bg-white hover:text-black">{ Data.PageN7.PageN7Nav.li1 }</li>
                    <li className=" block px-3 py-4 text-white font-bold text-xl text-center rounded-[35px] hover:bg-white hover:text-black">{ Data.PageN7.PageN7Nav.li2 }</li>
                    <li className=" block px-3 py-4 text-white font-bold text-xl text-center rounded-[35px] hover:bg-white hover:text-black">{ Data.PageN7.PageN7Nav.li3 }</li>
                    <li className=" block px-3 py-4 text-black font-bold text-xl text-center bg-white rounded-[35px]">{ Data.PageN7.PageN7Nav.li4 }</li>
            </ul>
            </div>
        </div>
    )
}
export default PageN7Nav;