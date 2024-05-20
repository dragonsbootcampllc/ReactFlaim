import TopCarousel_1 from "../Components/Carousel/TopCarousel_1";
import TeamSection from "../Components/Second Task/TeamDescribtion";

export default function ComponentsPlayGround() {
    return (
        <div className="flex flex-col gap-12 items-center bg-black py-12">
            <TopCarousel_1 />
            <TeamSection/>
        </div>
    )
}