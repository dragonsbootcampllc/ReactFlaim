import Data from '../../MainData.json';




function Header() {
    return (
        <div className=" container bg-black pt-16 text-center md:text-left">
            <h1 className=" text-white text-2xl md:text-5xl"> {Data.PageN5.Header.h1 }</h1>
            <p className=" text-borderColor text-sm md:text-lg mt-3 ">{Data.PageN5.Header.p }</p>
        </div>
    )
}
export default Header;