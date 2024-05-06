import PropTypes from 'prop-types';
import { Heart } from 'lucide-react';
import { useState } from 'react';

function JobCard({ title, companyName, applicationNumber, companyLogo, labels, description, sallery, salaryPeriodType, postDate, className, onClick }) {
    const [isLiked, setIsLiked] = useState(false)
    return (
        <button className={`cursor-pointer rounded-xl flex-shrink-0 h-72 w-full bg-slate-900 shadow-white hover:opacity-90 p-5 transition-all ${className}`} onClick={onClick} >
            <div className="header flex items-start gap-2 justify-between">
                <div className="all flex">
                    <div className="w-16 flex justify-center items-center overflow-hidden bg-slate-800 aspect-square rounded-xl">
                        <img className='min-h-full min-w-full object-cover' src="./32.png" alt="logo" />
                    </div>

                    <div className="text">
                        <h2 className=" font-bold">{title}</h2>
                        <span className=" text-xs opacity-60 mr-1">
                            {companyName}
                            <span className=" font-bold">.</span>
                            {applicationNumber} Applications
                        </span>
                    </div>
                </div>

                <div onClick={() => setIsLiked((prev) => !prev)} className="rounded-full w-12 aspect-square">{isLiked ? (<Heart fill='red' stroke='red'/>) : <Heart stroke='red'/>}</div>
            </div>

            <div className="Properties flex items-center gap-2 pt-3 ">
                {
                    labels.map((label, index) => (
                        <span className=" text-xs text-[#a680ca] font-bold" key={index}>{label}</span>
                    ))
                }
            </div>
            {/* <div className="para py-4 ">
                <p className=" text-sm text-black/60">{Data.SearchBar.RecommendedJobs.cont.cards.card1.para ? Data.SearchBar.RecommendedJobs.cont.cards.card1.para : "Null"} </p>
            </div>
            <div className="footer border-t border-black/20 flex justify-between items-end p-3">
                <p className=" font-bold">{Data.SearchBar.RecommendedJobs.cont.cards.card1.footer.p_1 ? Data.SearchBar.RecommendedJobs.cont.cards.card1.footer.p_1 : "Null"} <span className=" text-black/40 font-normal">{Data.SearchBar.RecommendedJobs.cont.cards.card1.footer.span ? Data.SearchBar.RecommendedJobs.cont.cards.card1.footer.span : "Null"} </span></p>
                <p className=" text-xs text-black/35">{Data.SearchBar.RecommendedJobs.cont.cards.card1.footer.p_2 ? Data.SearchBar.RecommendedJobs.cont.cards.card1.footer.p_2 : "Null"} </p>
            </div> */}
        </button>
    );
}

export default function JobDescription({ className = '' }) {
    const [activeJobIndex, setActiveJobIndex] = useState(0);

    const list = [
        {
            title: 'title',
            companyName: 'compoany name',
            applicationNumber: 5,
            companyLogo: './32.png',
            labels: ['00000', '00001', '00002'],
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, nostrum vel? Numquam modi sequi ex commodi, officia error. Autem deserunt qui facilis quibusdam veritatis aperiam necessitatibus quod impedit, laudantium veniam!',
            postDate: '10/20/2020',
            salaryPeriodType: "hr",
            sallery: 2000
        },
        {
            title: 'title',
            companyName: 'compoany name',
            applicationNumber: 5,
            companyLogo: './32.png',
            labels: ['00000', '00001', '00002'],
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, nostrum vel? Numquam modi sequi ex commodi, officia error. Autem deserunt qui facilis quibusdam veritatis aperiam necessitatibus quod impedit, laudantium veniam!',
            postDate: '10/20/2020',
            salaryPeriodType: "hr",
            sallery: 2000
        },
        {
            title: 'title',
            companyName: 'compoany name',
            applicationNumber: 5,
            companyLogo: './32.png',
            labels: ['00000', '00001', '00002'],
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, nostrum vel? Numquam modi sequi ex commodi, officia error. Autem deserunt qui facilis quibusdam veritatis aperiam necessitatibus quod impedit, laudantium veniam!',
            postDate: '10/20/2020',
            salaryPeriodType: "hr",
            sallery: 2000
        },
        {
            title: 'title',
            companyName: 'compoany name',
            applicationNumber: 5,
            companyLogo: './32.png',
            labels: ['00000', '00001', '00002'],
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, nostrum vel? Numquam modi sequi ex commodi, officia error. Autem deserunt qui facilis quibusdam veritatis aperiam necessitatibus quod impedit, laudantium veniam!',
            postDate: '10/20/2020',
            salaryPeriodType: "hr",
            sallery: 2000
        },
    ]

    return (
        <div className={`px-[5%] py-14 flex w-full gap-3 h-[1000px] overflow-hidden ${className}`}>
            <div className="w-1/3 flex flex-col gap-3 py-1 overflow-y-auto px-3">
                {
                    list.map((item, index) => (
                        <JobCard onClick={() => { setActiveJobIndex(index) }} className={` ${index == activeJobIndex ? 'opacity-100 scale-[1.02] ring-sky-900 ring-2' : 'opacity-80 ring-0'}`} key={index} {...item} />
                    ))
                }

            </div>

            <div className="bg-slate-900 h-full w-full rounded-xl">
                <div className="">
                    <div className=""></div>
                    <div className=""></div>
                </div>

                <div className="">
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                </div>
            </div>
        </div>
    );
}

JobDescription.propTypes = {
    className: PropTypes.string
};