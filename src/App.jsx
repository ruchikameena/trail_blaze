import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import TrekList from './components/TrekList';
import DescriptionPage from './components/DescriptionPage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/treks" element={<TrekList />} />
                    <Route path="/treks/:trekId" element={<DescriptionPage />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/contactus" element={<ContactUs />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;