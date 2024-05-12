



import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

function Task() {
    const Header = {
        header: "Last 30 days"
    }
    const Data = [

        {
            h3: "Total Subscribers",
            p: "71,897",
            span: "From 70,946",
            number: "12%",
            icon: <FaArrowUp />,
            ClassName: {
                paraColor: "text-[#857bd2]",
                SpanAndNumberColor: "text-[#dddee0]",
                IconColor: "text-[#4efb88]"
            }
        },
        {
            h3: "Awg, Open Rote",
            p: "58,16",
            span: "From 56.14%",
            number: "2.02%",
            icon: <FaArrowUp />,
            ClassName: {
                paraColor: "text-[#857bd2]",
                SpanAndNumberColor: "text-[#dddee0]",
                IconColor: "text-[#4efb88]"
            }
        },
        {
            h3: "Total Subscribers",
            p: "71,897",
            span: "From 70,946",
            number: "12%",
            icon: <FaArrowDown />,
            ClassName: {
                paraColor: "text-[#857bd2]",
                SpanAndNumberColor: "text-[#dddee0]",
                IconColor: "text-[#e28693]"
            }
        }
    ]

    return (
        <div className="all py-6 px-5 bg-[#f3f4f6] container mx-auto rounded-3xl mt-12 " >
            <h3 className=" font-bold pb-3"> { Header.header}</h3>
            <div className="  grid grid-cols-3 bg-white p-4 gap-6 rounded-3xl">
                {Data.map((item, index) => {
                    return (
                        <div className="card" key={index}>
                            <h3>{item.h3}</h3>
                            <div className="text flex justify-between items-end ">
                                <div className="left flex items-end">
                                    <p className=   {`text-3xl font-bold ${ item.ClassName.paraColor} mr-2 pt-3`}  >
                                        {item.p}
                                    </p>
                                    <span className={` text-sm  ${ item.ClassName.SpanAndNumberColor}`}> {item.span}</span>
                                </div>
                                <div className="right flex items-center bg-[#dafde5] rounded-3xl p-1">
                                    <span className= {` ${ item.ClassName.IconColor} `}>{ item.icon  } </span>
                                    <span className= {` text-black text-xs `}>{ item.number  } </span>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    );
}
export default Task;