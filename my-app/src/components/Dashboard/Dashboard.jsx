import { Link } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
	return (
		<div className='dashboard'>
			<Link to='/users'>Users</Link>
			<Link to='/albums'>Albums</Link>
		</div>
	);
}
