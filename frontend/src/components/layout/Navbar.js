import React from "react";
import { Link } from "react-router-dom";

//Props:
//	-sideBarActive: true/false (toggles logo)

const Navbar = (props) => {
	return (
		<nav
			className="navbar navbar-expand-lg navbar-light bg-light"
			style={props.sideBarActive ? { width: "85vw" } : { width: "100vw" }}
		>
			{props.sideBarActive ? null : (
				<Link className="navbar-brand" to="/">
					HIHOME
				</Link>
			)}
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarColor03"
				aria-controls="navbarColor03"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarColor03">
				<ul className="navbar-main-links navbar-nav ml-auto">
					<li className="nav-item">
						<Link className="nav-link" to="/my-progress/dashboard">
							My Progress
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/home-hunter">
							Home Hunter
						</Link>
					</li>
				</ul>
				<ul className="navbar-secondary-links navbar-nav">
					<li className="nav-item">
						<button className="nav-link">
							<i className="fas fa-bell"></i>
						</button>
					</li>
					<li className="nav-item">
						<button className="nav-link">
							<i className="fas fa-comment"></i>
						</button>
					</li>
					<li className="nav-item">
						<button className="nav-link">
							<i className="fas fa-user-circle"></i> Agent Name
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
