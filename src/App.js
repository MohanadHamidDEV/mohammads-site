import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Header from "./components/common/jsx/Header.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/common/jsx/Footer.jsx";
import SignUp from "./components/specific/SignUp.jsx";
import SignIn from "./components/specific/SignIn.jsx";

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home.jsx";

function App() {
    return (
        <Router>
            <div>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home biggestHeading="Welcome to the Home page" homeParagraph="This is an Example paragraph." />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/signin" element={<SignIn />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
