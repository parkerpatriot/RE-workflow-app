import React from "react";
import { Link } from "react-router-dom";

//Props:
//	-sideBarActive: true/false (toggles logo)

const Navbar = (props) => {
	return (
		<nav
			class="navbar navbar-expand-lg navbar-light bg-light"
			style={props.sideBarActive ? { width: "85vw" } : { width: "100vw" }}
		>
			{props.sideBarActive ? null : (
				<Link class="navbar-brand" to="/">
					HIHOME
				</Link>
			)}
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarColor03"
				aria-controls="navbarColor03"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarColor03">
				<ul class="navbar-main-links navbar-nav ml-auto">
					<li class="nav-item">
						<Link class="nav-link" to="/my-progress">
							My Progress
						</Link>
					</li>
					<li class="nav-item">
						<Link class="nav-link" to="/home-hunter">
							Home Hunter
						</Link>
					</li>
				</ul>
				<ul class="navbar-secondary-links navbar-nav">
					<li class="nav-item">
						<Link class="nav-link">
							<i class="fas fa-bell"></i>
						</Link>
					</li>
					<li class="nav-item">
						<Link class="nav-link">
							<i class="fas fa-comment"></i>
						</Link>
					</li>
					<li class="nav-item">
						<Link class="nav-link">
							<i class="fas fa-user-circle"></i> Agent Name
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
