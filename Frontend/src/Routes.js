import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import FAQ from './Pages/FAQ';
import Terms from './Pages/Terms';
import Privacy from './Pages/Privacy';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

export default function AllRoutes() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/portfolios" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/terms-condition" element={<Terms />} />
                <Route path="/privacy-policy" element={<Privacy />} />
            </Routes>

            <Footer />
        </>
    )
}
