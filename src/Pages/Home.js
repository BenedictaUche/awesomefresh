import About from "../components/About"
import Problem from "../components/Problem"
import Catalogue from "../components/Catalogue"
import Footer from "../components/Footer"
import { Hero } from "../components/Hero"
import { Navbar } from '../components/Navbar'
import { Team } from '../components/Team'
import { Metrics } from '../components/Metrics'
import { Services } from "../components/Services"
import { Partners } from '../components/Partners'

export function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Problem />

            <Services />
            <Metrics />
            <Catalogue />

            <Team />
            <Partners />
            <Footer />
        </>
    )
}