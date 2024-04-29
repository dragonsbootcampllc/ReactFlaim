import Data from '../../MainData.json';

function ContentNav() {
    return (

        <div className="nav mt-5 border-t border-borderColor ">
            <ul className=" flex">
                <li className=" text-TextColor p-4 border-b-2 border-TextColor mr-4  ">{ Data.secondPage.ContentNav.Li1}</li>
                <li className=" text-borderColor p-4 hover:border-b-2 border-TextColor hover:text-TextColor transition duration-200 mr-4">{ Data.secondPage.ContentNav.Li2}</li>
                <li className=" text-borderColor p-4 hover:border-b-2 border-TextColor hover:text-TextColor transition duration-200 mr-4">{ Data.secondPage.ContentNav.Li3}</li>
            </ul>
        </div>
    );
}
export default ContentNav;