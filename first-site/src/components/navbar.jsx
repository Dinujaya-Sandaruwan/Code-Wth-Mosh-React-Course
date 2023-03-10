const NavBar = ({ totalCounters }) => {
	return (
		<nav className="navbar navbar-light bg-light">
			<a className="navbar-brand" href="Dinujaya.com">
				NavBar
				<span className="badge badge-pill badge-secondary m-1">
					{totalCounters}
				</span>
			</a>
		</nav>
	);
};

export default NavBar;
