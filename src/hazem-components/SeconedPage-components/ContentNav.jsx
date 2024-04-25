

function ContentNav() {
    return (

        <div className="nav mt-5 border-t border-borderColor ">
            <ul className=" flex">
                <li className=" text-TextColor p-4 border-b-2 border-TextColor mr-4  ">Tool</li>
                <li className=" text-borderColor p-4 hover:border-b-2 border-TextColor hover:text-TextColor transition duration-200 mr-4">chat</li>
                <li className=" text-borderColor p-4 hover:border-b-2 border-TextColor hover:text-TextColor transition duration-200 mr-4">Library</li>
            </ul>
        </div>
    );
}
export default ContentNav;