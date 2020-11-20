var React = require('react');
var { Link, IndexLink } = require('react-router');

var Nav = () => {
	return (
		<div className="top-bar">
			<div className="top-bar-left">
				<ul className="menu">
					<li className="menu-text">React Timer App</li>
					<li>
						<IndexLink
							to="/"
							activeClass="active"
							activeStyle={{ fontWeight: 'bold' }}>Timer
						</IndexLink>
					</li>
					<li>
						<IndexLink
							to="/"
							activeClass="active"
							activeStyle={{ fontWeight: 'bold' }}>Countdown
						</IndexLink>
					</li>
				</ul>
			</div>
			<div className="top-bar-right">
				<div>
					<ul className="menu">
						<li className="menu-text">
							Created by <a href="https://github.com/happycycler/reacttimer" target="_blank" className="created-text">Mark Price</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

module.exports = Nav;