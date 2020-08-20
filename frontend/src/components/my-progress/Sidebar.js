import React from "react";

const Sidebar = () => {
	return (
		<div className="Sidebar-wrapper">
			<div className="logo">
				<p>HIHOME</p>
			</div>
			<div className="dashboard-banner">
				<h5>Dashboard</h5>
			</div>
			<hr />
			<div className="progress-links">
				<div className="p-link">
					<i class="fas fa-piggy-bank"></i>
					<button>Budget</button>
				</div>
				<div className="p-link">
					<i class="fas fa-user-tie"></i>
					<button>Buyer's Agent</button>
				</div>
				<div className="p-link">
					<i class="fas fa-university"></i>
					<button>Preapproval</button>
				</div>
				<div className="p-link">
					<i class="fas fa-search"></i>
					<button>Search and Compare</button>
				</div>
				<div className="p-link">
					<i class="fas fa-hand-holding-usd"></i>
					<button>Offer and Negotiate</button>
				</div>
				<div className="p-link">
					<i class="fas fa-clipboard-list"></i>
					<button>Purchase and Sales</button>
				</div>
				<div className="p-link">
					<i class="far fa-eye"></i>
					<button>Inspection</button>
				</div>
				<div className="p-link">
					<i class="fas fa-check-double"></i>
					<button>Appraisal</button>
				</div>
				<div className="p-link">
					<i class="fas fa-briefcase"></i>
					<button>Closing</button>
				</div>
				<div className="p-link">
					<i class="fas fa-award"></i>
					<button>Post-closing</button>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
