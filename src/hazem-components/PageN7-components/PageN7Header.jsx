

function PageN7Header(props) {
    const { Data } = props;
    Data ? Data : null;
    return (
        <div className="header py-6">
            <div className="container mx-auto text-white text-center  max-w-3xl ">
                <h1 className=" text-2xl  md:text-4xl max-w-3xl md:leading-normal">{ Data.PageN7.PageN7Header.h1_1}<br />
                { Data.PageN7.PageN7Header.h1_2} <span className=" border border-white rounded-3xl px-2">{ Data.PageN7.PageN7Header.span}</span></h1>
            </div>
        </div>
    )
}
export default PageN7Header;