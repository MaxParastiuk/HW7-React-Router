import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
	return (
		<header>
			<ul>
				<li>
					<NavLink to={"/dashboard"}>Dashboard</NavLink>
				</li>
				<li>
					<NavLink to={"/users"}>Users</NavLink>
				</li>
				<li>
					<NavLink to={"/albums"}>Albums</NavLink>
				</li>
			</ul>
		</header>
	);
}
