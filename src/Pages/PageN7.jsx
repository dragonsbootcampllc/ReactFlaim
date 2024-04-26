import PageN7Header from "../hazem-components/PageN7-components/PageN7Header";
import PageN7Nav from "../hazem-components/PageN7-components/PageN7Nav";
import PageN7Content from "../hazem-components/PageN7-components/PageN7Content";



function PageN7() { 
    return (
        <div className="all bg-black ">
            <div className="">
                <PageN7Header />
                <PageN7Nav />
                <PageN7Content />
            </div>
        </div>
    );
}
export default PageN7;