import TopCarousel_1 from "../Components/Carousel/TopCarousel_1";
import JobDescription from "../Components/JobDescription/JobDescription";

export default function ComponentsPlayGround() {
    return (
        <div className="flex flex-col gap-12 items-center bg-black py-12">
            <TopCarousel_1 title={'this is title'} />
            <JobDescription />
        </div>
    )
}