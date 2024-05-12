import TopHeader from '../hazem-components/SeconedPage-components/top-header';
import Aside from '../hazem-components/SeconedPage-components/Aside';
import ContentMainContent from '../hazem-components/SeconedPage-components/ContentMainContent';
import ContentNav from '../hazem-components/SeconedPage-components/ContentNav';
import ContentSubHead from '../hazem-components/SeconedPage-components/ContentSubHead';
import ZenteroHeader from '../hazem-components/SeconedPage-components/ZenteroHeader';
import Data from '../MainData.json'


function SecondPage() {
    return (
        <div className=' bg-black'>
            <TopHeader Data ={ Data } />
            <div className="container mx-auto bg-SectionAsideColor2 rounded-3xl w-full">
                <ZenteroHeader Data ={ Data}/>
                <div className=" flex flex-col md:flex-row gap-4 mx-auto  ">
                    <Aside Data ={ Data} />
                    <div className='content flex-1  '>
                        <div className="all bg-SectionColor p-3 rounded-lg">
                            <ContentSubHead Data ={ Data}/>
                            <ContentNav Data ={ Data}/>
                        </div>
                        <ContentMainContent Data={Data} />
                        <div />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SecondPage;