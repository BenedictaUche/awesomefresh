// import About from "../components/About"
import Whoweare from "../components/Whoweare"
import Catalogue from "../components/Catalogue"
import Footer from "../components/Footer"
import { Hero } from "../components/Hero"
import { Navbar } from '../components/Navbar'
import { Team } from '../components/Team'
import { Metrics } from '../components/Metrics'
import { Solution } from "../components/Solution"
import { Partners } from '../components/Partners'
import { Problem } from '../components/Problem'

export function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Problem />
            <Solution />
            <Partners />
            <Metrics />
            <Catalogue />
            <Whoweare />
            <Team />
            <Footer />
        </>
    )
}