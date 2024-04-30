

function ContentNav({ Data }) {
    Data ? Data : null;
    return (
        <div className="nav mt-5 border-t border-borderColor ">
            <ul className=" flex">
                <li className=" text-TextColor p-4 border-b-2 border-TextColor mr-4  ">{ Data.secondPage.ContentNav.Li1 ? Data.secondPage.ContentNav.Li1 :"Null"}</li>
                <li className=" text-borderColor p-4 hover:border-b-2 border-TextColor hover:text-TextColor transition duration-200 mr-4">{ Data.secondPage.ContentNav.Li2 ? Data.secondPage.ContentNav.Li2: "Null" }</li>
                <li className=" text-borderColor p-4 hover:border-b-2 border-TextColor hover:text-TextColor transition duration-200 mr-4">{ Data.secondPage.ContentNav.Li3 ? Data.secondPage.ContentNav.Li3 :"Null"}</li>
            </ul>
        </div>
    );
}
export default ContentNav;