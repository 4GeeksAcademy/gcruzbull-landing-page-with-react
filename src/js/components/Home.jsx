import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";


//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<Card />
				{/* <Card />
			<Card />
			<Card /> */}
			</div>
			<Footer />
		</>
	);
};

export default Home;