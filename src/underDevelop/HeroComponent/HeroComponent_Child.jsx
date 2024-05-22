import PropTypes from 'prop-types';

function HeroComponent_inner({ image,title1,title2,spanContent, description, LftButton, RgtButton}) {
    return (
        <div className="hero bg-[rgb(243,244,246)] py-6 ">
            <div className="container mx-auto flex flex-col justify-between md:flex-row items-center">
                <div className="image bg-[#f3f4f6]" >
                    <img src={image } alt="Hero Image" className='flex-shrink-0'/>
                </div>
                <div className="content flex flex-col gap-12">
                    <div className="text flex flex-col gap-7 w-full text-center md:text-left  md:max-w-[450px]">
                        <h1 className='text-4xl md:text-6xl text-black/90 font-semibold'>{title1}<span className=' text-[#2563eb]'> {spanContent} </span> {title2}  </h1>
                        <p className='text-xl text-black/85'>{description}</p>
                    </div>
                    <div className="buttons flex  md:flex-row gap-5 justify-center items-center md:justify-start ">
                        <button className='text-white text-sm md:text-xl border border-[#2563eb] px-6 py-2 rounded-[5px] bg-[#2563eb] hover:opacity-90 transition duration-100'>{LftButton} </button>
                        <button className='text-sm md:text-xl  border border-black/80 px-6 py-2 rounded-[5px]'>{RgtButton}</button>
                    </div>
                </div>
        </div>
        </div>
    );
}

HeroComponent_inner.propTypes = {
    image: PropTypes.string.isRequired,
    title1: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    spanContent: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    LftButton: PropTypes.string.isRequired,
    RgtButton: PropTypes.string.isRequired
};

export default HeroComponent_inner;