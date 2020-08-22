import React from "react";
import axios from "axios";

import ProgressCard from "./ProgressCard";

const TileSet = (props) => {
	const catagory = props.match.params.progressCatagory;

	const getTiles = () => {
		axios
			.get(`http://localhost:8000/api/tilesets`) //Update to hosted version when applicable
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.error("getTiles() - " + err);
			});
	};

	return (
		<div className="TileSet-wrapper">
			<div className="openning-header text-center">
				{catagory === "dashboard" ? (
					<h1>Your journey home starts here.</h1>
				) : (
					<h1>{catagory}</h1> //Update to api data.TITLE when possible
				)}
			</div>
			<div className="content-container">
				{getTiles()}
				<ProgressCard />
				<ProgressCard />
				<ProgressCard />
				<ProgressCard />
			</div>
		</div>
	);
};

export default TileSet;
