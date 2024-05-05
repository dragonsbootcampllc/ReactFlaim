




function Header(props) {
    const { Data } = props;
    Data ? Data : null;
    return (
        <div className=" container bg-black pt-16 text-center md:text-left">
            <h1 className=" text-white text-2xl md:text-5xl"> {Data.PageN5.Header.h1?Data.PageN5.Header.h1:"Null" }</h1>
            <p className=" text-borderColor text-sm md:text-lg mt-3 ">{Data.PageN5.Header.p ?Data.PageN5.Header.p :"Null"}</p>
        </div>
    )
}
export default Header;