import axios from "axios";
import { API_URL } from "../constants";

export default axios.create({
	headers: { "Content-Type": "application/json" },
});
