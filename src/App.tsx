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

const App: React.FC = () => {
	return (
		<div className={styles.app}>
			<Router>
				
					<Routes>
						<Route
							path='/'
							element={
             
									<HomePage />
								
							}
						/>
						<Route
							path='/menu'
							element={
					
									<MenuPage />
					
							}
						/>
						<Route
							path='/about'
							element={
						
									<AboutPage />
						
							}
						/>
						<Route
							path='/contact'
							element={

									<ContactPage />
				
							}
						/>
						<Route
							path='/reservation'
							element={

									<ReservationPage />
				
							}
						/>
					</Routes>
				
			</Router>
		</div>
	);
};

export default App;
