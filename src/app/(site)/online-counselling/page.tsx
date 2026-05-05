import LandingNavbar from "./components/navBar";
import LandingHero from "./components/hero";
import LandingTherapistsCard from "./components/therapist_card";
export default function LandingPage(){
    return(
        <>
        <LandingNavbar/>
        <LandingHero/>
        <LandingTherapistsCard/>
        </>
    )
}