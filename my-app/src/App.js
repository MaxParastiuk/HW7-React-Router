import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from "./components/Users/Users";
import Albums from "./components/Albums/Albums";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path={"/dashboard"} element={<Dashboard></Dashboard>} />
				<Route path={"/albums"} element={<Albums></Albums>} />
				<Route exact path={"/users"} element={<Users></Users>} />
			</Routes>
		</Router>
	);
}

export default App;
