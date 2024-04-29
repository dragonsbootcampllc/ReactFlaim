


function Content(props) {
    const { Data } = props;
    return (
        <div className=" container boxes grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 pt-7 gap-4 ">
            <div className="card border border-borderColor p-4 rounded-lg text-center md:text-left">
                <div className="w-12 h-12 bg-ItemsColor rounded-full mx-auto md:m-0 border border-white outline outline-blue-500 "></div>
                <p className=" text-white text-lg py-6"> { Data.PageN5.Content.card_p1 }</p>
            </div>
            <div className="card border border-borderColor p-4 rounded-lg text-center md:text-left">
                <div className="w-12 h-12 bg-ItemsColor rounded-full mx-auto md:m-0 border border-white outline outline-blue-500  "></div>
                <p className=" text-white text-lg py-6 ">{ Data.PageN5.Content.card_p2 }</p>
            </div>
            <div className="card border border-borderColor p-4 rounded-lg text-center md:text-left">
                <div className="w-12 h-12 bg-ItemsColor rounded-full mx-auto md:m-0 border border-white outline outline-blue-500 "></div>
                <p className=" text-white text-lg py-6 ">{ Data.PageN5.Content.card_p3 }</p>
            </div>
            <div className="card border border-borderColor p-4 rounded-lg text-center md:text-left">
                <div className="w-12 h-12 bg-ItemsColor rounded-full mx-auto md:m-0 border border-white outline outline-blue-500 "></div>
                <p className=" text-white text-lg py-6 ">{ Data.PageN5.Content.card_p4 }</p>
            </div>
        </div>
    );
}
export default Content;