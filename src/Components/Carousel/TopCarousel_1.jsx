import PropTypes from 'prop-types';
import TopCursal1BG from './TopCarousel1BG';
import placeholder1 from './placeholder_1.png';
import placeholder2 from './placeholder_2.png';
import placeholder3 from './placeholder_3.png';
import { useEffect, useRef, useState } from 'react';

/**
 * Component to display a carousel with dynamic tabs and associated content.
 * Each tab displays content that can be navigated through, along with a changing background.
 * 
 * Props:
 * - title: A JSX element to display as the title of the carousel.
 * - bgImgComponent: A JSX element rendering the background image of the carousel.
 * - className: Additional CSS classes for styling the outermost container.
 * - tabs: An array of objects defining properties for each tab.
 */

export default function TopCarousel_1({
    title = (<>Component Title with Almost Fifty-Four Characters <span className='rounded-full border font-serif italic font-thin px-2 pb-3'>Special</span></>),
    bgImgComponent = (<div className='absolute w-full top-0 left-1/2 -translate-x-1/2'><TopCursal1BG className='min-w-full max-h-full object-cover animate-pulse' /></div>),
    className = "",
    tabs = [
        {
            tabTitle: '0001',
            imgSrc: placeholder1,
            note: { text: '- IT SIMPLE NOTE', className: '' },
            title: 'Here is a title here is a title here is a title here is a title',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At cum mollitia earum aliquam recusandae maxime explicabo ipsum obcaecati architecto facilis temporibus, enim deleniti, voluptatibus quidem?'
        },
        {
            tabTitle: '0002',
            imgSrc: placeholder2,
            title: 'Here is a title here is a title here is a title here is a title',
            subTitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non beatae itaque officiis. Dolor, id. Sed.',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At cum mollitia earum aliquam recusandae maxime explicabo ipsum obcaecati architecto facilis temporibus, enim deleniti, voluptatibus quidem?'
        },
        {
            tabTitle: '0003',
            imgSrc: placeholder3,
            note: { text: '- IT SIMPLE NOTE', className: '' },
            subTitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non beatae itaque officiis. Dolor, id. Sed.',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At cum mollitia earum aliquam recusandae maxime explicabo At cum mollitia ipsum obcaecati At cum mollitia At cum mollitia architecto facilis temporibus, enim deleniti, voluptatibus quidem?'
        },
        {
            tabTitle: '0004',
            note: { text: '- IT SIMPLE NOTE', className: '' },
            title: 'Here is a title here is a title here is a title here is a title here is a title here is a title',
            subTitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing em ipsum dolor sit, amet consectetur a elit. Non beatae itaque em ipsum dolor sit, amet consectetur a em ipsum dolor sit, amet consectetur a em ipsum dolor sit, amet consectetur a officiis. Dolor, id. Sed.',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At cum mollitia earum aliquam recusandae maximesum dolor sit, amet consectetur adipisicing elit. At cum mollitia explicabo At cum mollitia ipsum obcaecatisum dolor sit, amet consectetur adipisicing elit. At cum mollitia At cum mollitia Atsum dolor sit, amet consectetur adipisicing elit. At cum mollitia cum mollitia architecto facilis temporibussum dolor sit, amet consectetur adipisicing elit. At cum mollitia, enim deleniti, voluptatibus quidem?'
        },
    ]
}) {
    const [tabWidth, setTabWidth] = useState(0);
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const tabContainerRef = useRef(null)

    useEffect(() => {
        setTabWidth(100 / tabs.length);
    }, [tabs]);

    const handleActiveTabIndex = (index) => {
        setActiveTabIndex(index);
    }

    return (
        <div className={`text-7xl max-[1200px]:text-5xl max-[750px]:text-3xl max-[450px]:text-xl font-semibold relative max-w-screen-2xl flex flex-col gap-32 max-[750px]:gap-12 max-[450px]:gap-6 w-full mx-[5%] px-[5%] pt-14 max-[750px]:pt-4 max-[450px]:pt-2 min-h-screen text-white border-white overflow-hidden ${className}`}>
            <h1 className="px-[5%] leading-[5rem] text-center">{title}</h1>

            <div ref={tabContainerRef} className='relative flex border bg-transparent rounded-full border-white text-center'>
                {
                    tabs.map(({ tabTitle }, index) => (
                        <span
                            onClick={() => handleActiveTabIndex(index)}
                            className={`${index == activeTabIndex ? 'text-black' : 'text-white'} cursor-pointer z-10 py-3 w-full transition-all flex justify-center items-center `}
                            key={index}>
                            <span>{tabTitle}</span>
                        </span>
                    ))
                }
                <span className='h-full inline-block bg-white rounded-full absolute transition-all' style={{ width: `${tabWidth}%`, left: `${activeTabIndex * tabWidth}%` }} />
            </div>

            <div className='flex overflow-hidden'>
                {tabs.map(({ title, imgSrc, subTitle, description, note }, index) => (
                    <div className='flex justify-center flex-none items-center gap-12 w-full transition-all max-[950px]:flex-col' style={{ transform: `translateX(${activeTabIndex * -100}%)` }} key={index}>
                        {imgSrc && (<div className='overflow-hidden rounded-xl h-96 max-[450px]:h-60 w-full bg-slate-400 flex justify-center items-center'><img src={imgSrc} className='min-w-full min-h-full object-cover' /></div>)}
                        <div className='w-full flex flex-col gap-6'>
                            {note && (<span className={`text-purple-900 font-semibold text-base max-[750px]:text-sm max-[450px]:text-xs ${note.className}`}>{note.text}</span>)}
                            {title && (<span className='font-semibold text-2xl max-[750px]:text-lg max-[450px]:text-base'>{title}</span>)}
                            {subTitle && (<span className='font-semibold text-lg max-[750px]:text-base max-[450px]:text-sm'>{subTitle}</span>)}
                            {description && (<span className='font-normal text-base max-[750px]:text-sm max-[450px]:text-xs'>{description}</span>)}
                        </div>
                    </div>
                ))}
            </div>

            {bgImgComponent}
        </div>
    )
}

TopCarousel_1.propTypes = {
    title: PropTypes.element,
    bgImgComponent: PropTypes.element,
    className: PropTypes.string,
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            tabTitle: PropTypes.string,
            imgSrc: PropTypes.string,
            note: PropTypes.object,
            title: PropTypes.string,
            subTitle: PropTypes.string,
            description: PropTypes.string
        })
    )
};

/* TODO:
    - Develop the dynamic font sizing based on tab content length and tab container width.
        Formula: fontSize = (containerWidth / tabTitle.length) * scalingFactor
        Adjust scalingFactor for optimal readability.
*/