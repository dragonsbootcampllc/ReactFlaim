import TopHeader from '../underDevelop/hazem-components/SeconedPage-components/top-header';
import Aside from '../underDevelop/hazem-components/SeconedPage-components/Aside';
import ContentMainContent from '../underDevelop/hazem-components/SeconedPage-components/ContentMainContent';
import ContentNav from '../underDevelop/hazem-components/SeconedPage-components/ContentNav';
import ContentSubHead from '../underDevelop/hazem-components/SeconedPage-components/ContentSubHead';
import ZenteroHeader from '../underDevelop/hazem-components/SeconedPage-components/ZenteroHeader';



function SecondPage() {
    return (
        <div className=' bg-black'>
            <TopHeader />
            <div className="container mx-auto bg-SectionAsideColor2 rounded-3xl w-full">
                <ZenteroHeader />
                <div className=" flex flex-col md:flex-row gap-4 mx-auto  ">
                    <Aside />
                    <div className='content flex-1  '>
                        <div className="all bg-SectionColor p-3 rounded-lg">
                            <ContentSubHead />
                            <ContentNav />
                        </div>
                        <ContentMainContent />
                        <div />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SecondPage;