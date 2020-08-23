import React from "react";
import axios from "axios";

import ProgressCard from "./ProgressCard";

const TileSet = (props) => {
	const [currentTiles, setCurrentTiles] = React.useState([]);
	const stage = props.match.params.progressStage;

	React.useEffect(() => {
		axios
			.get(`http://localhost:8000/api/tiles/${stage}`) //Update to hosted version when applicable
			.then((res) => {
				setCurrentTiles(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [stage]);

	return (
		<div className="TileSet-wrapper">
			<div className="openning-header text-center">
				<h1>
					{currentTiles[1]
						? currentTiles[1].stage === "Dashboard"
							? "Your journey home starts here."
							: currentTiles[1].stage
						: stage}
				</h1>
			</div>
			<div className="content-container">
				{currentTiles.map((tile) => (
					<ProgressCard key={tile.id} tile={tile} />
				))}
			</div>
		</div>
	);
};

export default TileSet;
