const $btnsearch = document.querySelector(".btn-search");
const $form = document.querySelector("form");

const API_URL = "http://10.69.4.208:3000/v1/entities/";

$form.addEventListener("submit", async (e) => {
	e.preventDefault();

	const response = await fetch(API_URL);
	const data = await response.json();

	for (let i = 0; i < data.length; i++) {
		console.log(data[i]);
		document.createElement("p");
		p.textContent = data[i].name;
	}

	// const formData = new FormData(feur);
	// let data = await fetch(API_URL, {
	// 	method: "POST",
	// 	headers: { "Content-Type": "application/json" },
	// 	body: JSON.stringify({
	// 		id: formData.get("id"),
	// 		name: formData.get("name"),
	// 		description: formData.get("description"),
	// 		classification: formData.get("classification"),
	// 		health: formData.get("health"),
	// 		armor: formData.get("armor"),
	// 		type: formData.get("type"),
	// 		width: formData.get("width"),
	// 		height: formData.get("height"),
	// 		icon: formData.get("icon"),
	// 		image: formData.get("image"),
	// 	}),
	// });
	// data = await data.json();
});
