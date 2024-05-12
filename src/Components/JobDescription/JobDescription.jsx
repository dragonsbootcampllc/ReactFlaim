import PropTypes from 'prop-types';
import { Heart } from 'lucide-react';
import { useState } from 'react';
import logo from './32.png';

function JobCard({
    title,
    companyName,
    applicationNumber,
    companyLogo,
    labels,
    description,
    salary,
    salaryPeriodType,
    postDate,
    className,
    onClick
}) {
    const [isLiked, setIsLiked] = useState(false);
    const MAX_DESCRIPTION_CHARACTER_NUMBER = 94;

    const toggleLike = () => setIsLiked(prev => !prev);

    return (
        <div
            className={`text-start cursor-pointer flex flex-col gap-5 rounded-xl text-white flex-shrink-0 w-full bg-slate-900 shadow-white hover:opacity-90 p-5 transition-all ${className}`}
            onClick={onClick}
            role="button"
            tabIndex="0"
            aria-label={`Job card for ${title} at ${companyName}`}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
        >
            <div className="flex items-center gap-2 justify-between w-full">
                <div className="flex gap-5 items-center w-full">
                    <div className="w-16 flex justify-center items-center overflow-hidden bg-slate-800 aspect-square rounded-xl">
                        <img className='min-h-full min-w-full object-cover' src={companyLogo} alt={`${companyName} logo`} />
                    </div>

                    <div>
                        <h2 className="font-bold">{title}</h2>
                        <span className="text-xs opacity-60 mr-1">
                            {companyName}
                            <span className="font-bold"> . </span>
                            {applicationNumber} Applications
                        </span>
                    </div>
                </div>

                <button
                    onClick={toggleLike}
                    className="rounded-full w-8 aspect-square focus:outline-none"
                    aria-label={isLiked ? 'Unlike this job' : 'Like this job'}
                >
                    {isLiked ? (<Heart fill='red' stroke='red' />) : <Heart stroke='red' />}
                </button>
            </div>

            {labels && (
                <div className="flex gap-2">
                    {labels.map((label, index) => (
                        <span
                            className={`text-xs py-px font-bold rounded-full px-3 ${index === 0 ? 'text-[#a680ca] bg-[#a680ca]/20' : index === 1 ? 'text-[#80b3ca] bg-[#80b3ca]/20' : 'text-[#83ca80] bg-[#83ca80]/20'}`}
                            key={index}
                        >
                            {label}
                        </span>
                    ))}
                </div>
            )}

            <p className="text-sm text-white/60">{description.length > MAX_DESCRIPTION_CHARACTER_NUMBER ? `${description.substring(0, MAX_DESCRIPTION_CHARACTER_NUMBER)}...` : description}</p>

            <div className="border-t border-white/20 flex justify-between items-end w-full pt-4">
                <p className="font-semibold">{salary}<span className='opacity-50 font-normal'>/{salaryPeriodType}</span></p>
                <p className="text-xs text-white/35">Posted {postDate}</p>
            </div>
        </div>
    );
}

JobCard.propTypes = {
    title: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    applicationNumber: PropTypes.number.isRequired,
    companyLogo: PropTypes.string.isRequired,
    labels: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    salaryPeriodType: PropTypes.string.isRequired,
    postDate: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

export default function JobDescription({ className = '' }) {
    const [activeJobIndex, setActiveJobIndex] = useState(0);

    const list = [
        {
            title: 'title 1',
            companyName: 'compoany name',
            applicationNumber: 5,
            companyLogo: logo,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, nostrum c fdcofficia error. Autem deserunt qui facilis quibusdam veritatis aperiam necessitatibus quod impedit, laudantium veniam!',
            postDate: '10/20/2020',
            salaryPeriodType: "hr",
            salary: 2000
        },
        {
            title: 'title 2',
            companyName: 'compoany name',
            applicationNumber: 5,
            companyLogo: logo,
            labels: ['00000', '00001', '00002'],
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, nostrum vel? Numquam modi sequi ex commodi, officia error. Autem deserunt qui facilis quibusdam veritatis aperiam necessitatibus quod impedit, laudantium veniam!',
            postDate: '10/20/2020',
            salaryPeriodType: "hr",
            salary: 2000
        },
        {
            title: 'title',
            companyName: 'compoany name',
            applicationNumber: 5,
            companyLogo: logo,
            labels: ['00000', '00001', '00002'],
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, nostrum vel? Numquam modi sequi ex commodi, officia error. Autem deserunt qui facilis quibusdam veritatis aperiam necessitatibus quod impedit, laudantium veniam!',
            postDate: '10/20/2020',
            salaryPeriodType: "hr",
            salary: 2000
        },
        {
            title: 'title',
            companyName: 'compoany name',
            applicationNumber: 5,
            companyLogo: logo,
            labels: ['00000', '00001', '00002'],
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, nostrum vel? Numquam modi sequi ex commodi, officia error. Autem deserunt qui facilis quibusdam veritatis aperiam necessitatibus quod impedit, laudantium veniam!',
            postDate: '10/20/2020',
            salaryPeriodType: "hr",
            salary: 2000
        },
    ]

    return (
        <div className={`px-[5%] py-14 flex w-full gap-3 h-[1000px] overflow-hidden ${className}`}>
            <div className="w-1/3 flex flex-col gap-3 py-1 overflow-y-auto px-3">
                {
                    list.map((item, index) => (
                        <JobCard
                            onClick={() => { setActiveJobIndex(index) }}
                            className={` ${index == activeJobIndex ? 'opacity-100 scale-[1.02] ring-sky-900 ring-2' : 'opacity-80 ring-0'}`}
                            key={index}
                            {...item} />
                    ))
                }

            </div>

            <div className="flex bg-slate-900 h-full w-full text-white rounded-xl">
                <div className="h-full flex w-full flex-col">
                    <div className="flex w-full items-center justify-between">
                        <h1 className='text-5xl'>{list[activeJobIndex].title}</h1>
                        
                        <div className="flex gap-2">
                            {list[activeJobIndex].labels && list[activeJobIndex].labels.map((label, index) => (
                                <span
                                    className={`text-xl py-px font-bold rounded-full px-3 ${index === 0 ? 'text-[#a680ca] bg-[#a680ca]/20' : index === 1 ? 'text-[#80b3ca] bg-[#80b3ca]/20' : 'text-[#83ca80] bg-[#83ca80]/20'}`}
                                    key={index}
                                >
                                    {label}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex w-full"></div>
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