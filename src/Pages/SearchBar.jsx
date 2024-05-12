
import TopHeader from "../hazem-components/SearchBar-components/TopHeader";
import MinSearchBar from "../hazem-components/SearchBar-components/MinSearchBar";
import ContentHeader from "../hazem-components/SearchBar-components/ContentHeader";
import RecommendedJobs from "../hazem-components/SearchBar-components/RecommendedJobs";
import Data from '../MainData.json';


function SearchBar() {
    return (
        <div className=" bg-[#9faece]">
            <TopHeader Data={ Data} />
            <div className="content  ">
            <ContentHeader Data={ Data}/>
            <MinSearchBar Data={ Data} />
            </div>
            <RecommendedJobs Data={ Data}/>
        </div>
    );
}
export default SearchBar;