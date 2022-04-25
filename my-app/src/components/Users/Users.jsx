import { USERS_URL } from "../../constants/index";
import { useDatas } from "../../hooks/hooks";
import UserItem from "../UserItem/UserItem";
import "./Users.css";

export default function Users() {
	const { items } = useDatas(USERS_URL);
	return (
		<div className='users'>
			{items.map((item) => (
				<UserItem item={item} key={item.id} />
			))}
		</div>
	);
}
