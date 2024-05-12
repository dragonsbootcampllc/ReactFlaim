
import Card from '../underDevelop/hazem-components/LogosComp-components/Card';
import Data from '../MainData.json';

function LogosComp() {
    return (
        <div className='container mx-auto'>
            
            <Card Data ={ Data.LogosComp} />
        </div>
    )
}
export default LogosComp;