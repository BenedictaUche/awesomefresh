import About from "../components/About"
import Bars from "../components/Bars"
import Catalogue from "../components/Catalogue"
import Footer from "../components/Footer"
import { Hero } from "../components/Hero"
import {Navbar} from '../components/Navbar'
import {Team} from '../components/Team'

export function Home () {
    return (
        <>
            <Navbar />
            <Hero />
            <Bars />
            <About />
            <Catalogue />
            <Team />
            <Footer />
        </>
    )
}