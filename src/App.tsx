import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";
import styles from "./App.module.css";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/menuPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ReservationPage from "./pages/ReservationPage";
import Navigation from "./components/ui/navigation";
import { ScrollRestoration } from "react-router-dom";
import ScrollToTop from "./components/ui/scrollToTop";
const App: React.FC = () => {
	const location = useLocation();

	const routeVariants = {
		initial: {
			opacity: 0.7,
		},
		final: {
			opacity: 1,
		},
	};
	return (
		<div className={styles.app}>
			<ScrollToTop>
			<Navigation />
			<Routes
				location={location}
				key={location.key}
			>
				
				<Route
					index
					path='/'
					element={
						<motion.div
							variants={routeVariants}
							initial='initial'
							animate='final'
						>
							<HomePage />
							
						</motion.div>
					}
				/>
				<Route
					path='/menu'
					element={
						<motion.div
							variants={routeVariants}
							initial='initial'
							animate='final'
						>
							<MenuPage />
						</motion.div>
					}
				/>
				<Route
					path='/about'
					element={
						<motion.div
							variants={routeVariants}
							initial='initial'
							animate='final'
						>
							<AboutPage />
						</motion.div>
					}
				/>
				<Route
					path='/contact'
					element={
						<motion.div
							variants={routeVariants}
							initial='initial'
							animate='final'
						>
							<ContactPage />
						</motion.div>
					}
				/>
				<Route
					path='/reservation'
					element={
						<motion.div
							variants={routeVariants}
							initial='initial'
							animate='final'
						>
							<ReservationPage />
						</motion.div>
					}
				/>
			</Routes>
			</ScrollToTop>
		</div>
	);
};

export default App;
