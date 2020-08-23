import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles/Main.scss";

import Home from "./components/static-pages/Home";
import MyProgress from "./components/my-progress/MyProgress";
import HomeHunter from "./components/home-hunter/HomeHunter";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route
						exact
						path="/my-progress/:progressStage"
						component={MyProgress}
					/>
					<Route exact path="/home-hunter" component={HomeHunter} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
