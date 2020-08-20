import React from "react";
import { Switch, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "../layout/Navbar";
import TileSet from "./components/TileSet";

const MyProgress = () => {
	return (
		<div className="MyProgress-wrapper">
			<Sidebar />
			<div className="page-container">
				<Navbar sideBarActive={true} />
				<Switch>
					<Route
						path="/my-progress/:progressCatagory"
						component={TileSet}
					/>
				</Switch>
			</div>
		</div>
	);
};

export default MyProgress;
