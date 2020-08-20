import React from "react";

import Sidebar from "./Sidebar";
import Navbar from "../layout/Navbar";
import ProgressCard from "./ProgressCard";

const MyProgress = () => {
	return (
		<div className="MyProgress-wrapper">
			<Sidebar />
			<div className="page-container">
				<Navbar sideBarActive={true} />
				<div className="openning-header text-center">
					<h1>Your journey home starts here.</h1>
				</div>
				<div className="content-container">
					<ProgressCard />
					<ProgressCard />
					<ProgressCard />
					<ProgressCard />
				</div>
			</div>
		</div>
	);
};

export default MyProgress;
