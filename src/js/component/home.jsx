import React from "react";
import TrafficLight from "./trafficLight";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<>
		<div className="text-center">
			<h1 className="text-center mt-5">Traffic Light!</h1>
			<div>
			<TrafficLight/>
			</div>
		</div>
		</>
	);
};

export default Home;
