import PageN7Header from "../underDevelop/hazem-components/PageN7-components/PageN7Header";
import PageN7Nav from "../underDevelop/hazem-components/PageN7-components/PageN7Nav";
import PageN7Content from "../underDevelop/hazem-components/PageN7-components/PageN7Content";
import Data from '../MainData.json';


function PageN7( ) { 
    return (
        <div className="all bg-black ">
            <div className="">
                <PageN7Header  Data ={ Data} />
                <PageN7Nav  Data ={ Data} />
                <PageN7Content  Data ={ Data} />
            </div>
        </div>
    );
}
export default PageN7;