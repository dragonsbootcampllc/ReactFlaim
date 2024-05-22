
import HeroComponent_Inner from './HeroComponent_Child';

function HeroComponent_Wrapper() { 
    const HeroData = {
        image: "./public/assets/images/HeroImage1.png",
        title1: "Ac mattis nunc",
        title2: "erat pharetra",
        spanContent: "senectus",
        description: "Dictum aliquam porta in condimentum ac integer turpis pulvinar, est scelerisque ligula sem",
        LftButton: "Get Started",
        RgtButton: "Learn More",
    }
    return (
        <HeroComponent_Inner
        image={HeroData.image}
        title1={HeroData.title1}
        title2={HeroData.title2}
        spanContent={HeroData.spanContent}
        description={HeroData.description}
        LftButton={HeroData.LftButton}
        RgtButton={HeroData.RgtButton} />
    )
}
export default HeroComponent_Wrapper;
