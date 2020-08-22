import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<div className="Sidebar-wrapper">
			<div className="logo">
				<p>HIHOME</p>
			</div>
			<div className="dashboard-banner">
				<Link to="/my-progress/dashboard">Dashboard</Link>
			</div>
			<div className="progress-links">
				<div className="p-link">
					<i className="fas fa-piggy-bank"></i>
					<Link to="/my-progress/budget">Budget</Link>
				</div>
				<div className="p-link">
					<i className="fas fa-user-tie"></i>
					<Link to="/my-progress/buyers-agent">Buyer's Agent</Link>
				</div>
				<div className="p-link">
					<i className="fas fa-university"></i>
					<Link to="/my-progress/preapproval">Preapproval</Link>
				</div>
				<div className="p-link">
					<i className="fas fa-search"></i>
					<Link to="/my-progress/search-and-compare">
						Search and Compare
					</Link>
				</div>
				<div className="p-link">
					<i className="fas fa-hand-holding-usd"></i>
					<Link to="/my-progress/offer-and-negotiate">
						Offer and Negotiate
					</Link>
				</div>
				<div className="p-link">
					<i className="fas fa-clipboard-list"></i>
					<Link to="/my-progress/purchase-and-sales">
						Purchase and Sales
					</Link>
				</div>
				<div className="p-link">
					<i className="far fa-eye"></i>
					<Link to="/my-progress/inspection">Inspection</Link>
				</div>
				<div className="p-link">
					<i className="fas fa-check-double"></i>
					<Link to="/my-progress/appraisal">Appraisal</Link>
				</div>
				<div className="p-link">
					<i className="fas fa-briefcase"></i>
					<Link to="/my-progress/closing">Closing</Link>
				</div>
				<div className="p-link">
					<i className="fas fa-award"></i>
					<Link to="/my-progress/post-closing">Post-closing</Link>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
