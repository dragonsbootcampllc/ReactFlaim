import PropTypes from 'prop-types';
import TopCursal1BG from './TopCursal1BG';
import placeholder1 from './placeholder_1.png';
import placeholder2 from './placeholder_2.png';
import placeholder3 from './placeholder_3.png';
import { useState } from 'react';

export default function TopCursal_1({
    title=(<>Component Title with Almost Fifty-Four Characters <span className='rounded-full border font-serif italic font-thin px-2 pb-3'>Special</span></>),
    bgImgComponent=(<div className='absolute w-full top-0 left-1/2 -translate-x-1/2'><TopCursal1BG className='min-w-full max-h-full object-cover animate-pulse' /></div>),
    className="",
    tabs=[
        {
            tabTitle: '01',
            imgSrc: placeholder1,
            note: {text: '- IT SIMPLE NOTE', className: ''},
            title: 'Here is a title here is a title here is a title here is a title',
            subTitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non beatae itaque officiis. Dolor, id. Sed.',
            data: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At cum mollitia earum aliquam recusandae maxime explicabo ipsum obcaecati architecto facilis temporibus, enim deleniti, voluptatibus quidem?'
        },
        {
            tabTitle: '02',
            imgSrc: placeholder2,
            note: {text: '- IT SIMPLE NOTE', className: ''},
            title: 'Here is a title here is a title here is a title here is a title',
            subTitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non beatae itaque officiis. Dolor, id. Sed.',
            data: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At cum mollitia earum aliquam recusandae maxime explicabo ipsum obcaecati architecto facilis temporibus, enim deleniti, voluptatibus quidem?'
        },
        {
            tabTitle: '03',
            imgSrc: placeholder3,
            note: {text: '- IT SIMPLE NOTE', className: ''},
            title: 'Here is a title here is a title here is a title here is a title here is a title here is a title',
            subTitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non beatae itaque officiis. Dolor, id. Sed.',
            data: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At cum mollitia earum aliquam recusandae maxime explicabo At cum mollitia ipsum obcaecati At cum mollitia At cum mollitia architecto facilis temporibus, enim deleniti, voluptatibus quidem?'
        },
        {
            tabTitle: '04',
            imgSrc: placeholder3,
            note: {text: '- IT SIMPLE NOTE', className: ''},
            title: 'Here is a title here is a title here is a title here is a title here is a title here is a title',
            subTitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non beatae itaque officiis. Dolor, id. Sed.',
            data: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At cum mollitia earum aliquam recusandae maxime explicabo At cum mollitia ipsum obcaecati At cum mollitia At cum mollitia architecto facilis temporibus, enim deleniti, voluptatibus quidem?'
        },
    ]
}) {
    const tabWidth = 100 / tabs.length;
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const handleActiveTabIndex = (index) => {
        setActiveTabIndex(index);
    }

    return (
        <div className={`text-7xl font-semibold relative max-w-screen-2xl flex flex-col gap-32 w-full mx-[5%] px-[5%] pt-14 min-h-screen text-white border-white overflow-hidden ${className}`}>
            <h1 className="px-[5%] leading-[5rem] text-center">{title}</h1>

            <div className='relative flex border bg-transparent rounded-full border-white text-center'>
                {
                    tabs.map((tab, index) => (
                        <span onClick={() => handleActiveTabIndex(index)} className={`${index == activeTabIndex ? 'text-black' : 'text-white'} cursor-pointer z-10 py-3 w-full transition-all`} key={index}>{tab.tabTitle}</span>
                    ))
                }
                <span className='h-full inline-block bg-white rounded-full absolute transition-all' style={{ width: `${tabWidth}%`, left: `${activeTabIndex*tabWidth}%`}} />
            </div>

            <div className='flex overflow-hidden'>
                {tabs.map((tab, index) => (
                    <div className='flex justify-center flex-none items-center gap-12 w-full transition-all' style={{transform: `translateX(${activeTabIndex*-100}%)`}} key={index}>
                        {tab.imgSrc && (<div className='overflow-hidden rounded-xl h-96 w-full bg-slate-400 flex justify-center items-center'><img src={tab.imgSrc} className='min-w-full min-h-full object-cover' /></div>)}
                        <div className='w-full flex flex-col gap-6'>
                            <span className={`text-purple-900 font-semibold text-base ${tab.note.className}`}>{tab.note.text}</span>
                            <span className='font-semibold text-2xl'>{tab.title}</span>
                            <span className='font-semibold text-lg'>{tab.subTitle}</span>
                            <span className='font-normal text-base'>{tab.data}</span>
                        </div>
                    </div>
                ))}
            </div>

            {bgImgComponent}
        </div>
    )
}

TopCursal_1.propTypes = {
    title: PropTypes.element,
    bgImgComponent: PropTypes.element,
    className: PropTypes.string,
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            tabTitle: PropTypes.string,
            imgSrc: PropTypes.string,
            note: PropTypes.shape({
                text: PropTypes.string,
                className: PropTypes.string
            }),
            title: PropTypes.string,
            subTitle: PropTypes.string,
            data: PropTypes.string
        })
    )
}   