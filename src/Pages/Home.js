import About from "../components/About"
import Bars from "../components/Bars"
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
            <Bars />
            <About />
            <Catalogue />
            <Services />
            <Metrics />
            <Team />
            <Partners />
            <Footer />
        </>
    )
}