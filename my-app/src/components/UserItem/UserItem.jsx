import { useState } from "react";

export default function UserItem({ item }) {
	const [hiddenDetails, setHiddenDetails] = useState({
		hidden: true,
		nameClass: "",
	});

	function toggleDetails() {
		if (hiddenDetails.hidden) {
			setHiddenDetails({ hidden: false, nameClass: "show" });
		} else {
			setHiddenDetails({ hidden: true, nameClass: "" });
		}
	}

	return (
		<div className='item' onClick={toggleDetails}>
			<div className='item-head'>
				<span className='head-username'>{item.username}</span> - {item.name}
			</div>
			<div className={`item-details ${hiddenDetails.nameClass}`}>
				<table>
					<tbody>
						<tr>
							<td>Phone:</td>
							<td>{item.phone}</td>
						</tr>
						<tr>
							<td>Website:</td>
							<td>{item.website}</td>
						</tr>
						<tr>
							<td>Home address:</td>
							<td>{`${item.address.city}, ${item.address.street}, ${item.address.suite}`}</td>
						</tr>
						<tr>
							<td>Zipcode:</td>
							<td>{item.address.zipcode}</td>
						</tr>
						<tr>
							<td>Company:</td>
							<td>{item.company.name}</td>
						</tr>
						<tr>
							<td>Catchphrase:</td>
							<td>{item.company.catchPhrase}</td>
						</tr>
						<tr>
							<td>Activity:</td>
							<td>{item.company.bs}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
