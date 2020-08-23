import React from "react";

const ProgressCard = ({ tile }) => {
	return (
		<div className="ProgressCard-wrapper">
			<img alt="preview" src={tile.image} />
			<div className="card-content">
				<h5>{tile.title}</h5>
				<p>{tile.content}</p>
			</div>
		</div>
	);
};

export default ProgressCard;
