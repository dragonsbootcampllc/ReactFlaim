import Header from '../hazem-components/PageN5-components/Header';
import Content from '../hazem-components/PageN5-components/Content';
import Footer from '../hazem-components/PageN5-components/Footer';
import Data from '../MainData.json';



function PageN5() {
    return (
        <div className="all bg-black ">
            <div className='container mx-auto '>
                <Header Data ={ Data}/>
                <Content Data ={ Data} />
                <Footer  Data ={ Data}/>
            </div>
        </div>
    );
}
export default PageN5;