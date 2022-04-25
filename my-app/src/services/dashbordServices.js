import api from "../api/api";

export async function getItems(url, id = "") {
	return api.get(url + id);
}

export function deleItem(id) {
	return api.delete(`${id}`);
}

export function addItem(item) {
	return api.post("", item);
}

export function setItemById(item) {
	return api.put(`${item.id}`, {
		data: item,
	});
}
