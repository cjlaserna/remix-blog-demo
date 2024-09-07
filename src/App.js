import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Profile from "./pages/Profile";
import Experiences from "./pages/Experiences";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Navigation from "./content/Navigation";
import SideQuests from "./pages/SideQuests";

const App = () => {
	return (
		<Router>
			<>
				<div className="holy-grail-grid !mt-[3rem]">
					<header className="header">
						<Navigation />
					</header>
					<Routes>
						<Route path="/" element={<Profile />} />
						<Route path="/experiences" element={<Experiences />} />
						<Route path="/achievements" element={<Achievements />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/sidequests" element={<SideQuests />} />
					</Routes>
				</div>
			</>
			<Link to="/sidequests">
				<button className="btn btn-primary text-white btn-circle text-[2rem] fixed bottom-10 right-10 z-20 hidden md:block md:hover:animate-pulse">
					?
				</button>
			</Link>
		</Router>
	);
};

export default App;
