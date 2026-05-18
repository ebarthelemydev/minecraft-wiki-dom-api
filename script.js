const $btnsearch = document.querySelector(".btn-search");
const $form = document.querySelector("form");
const maincard = document.querySelector(".main-card");

$form.addEventListener("submit", async (e) => {
	const searchvalue = $form.querySelector("input").value;

	e.preventDefault();

	const response = await fetch("http://10.69.4.208:3000/v1/entities/");
	const data = await response.json();

	let divglobalcard = document.createElement("div");
	divglobalcard.classList.add("div-global-card");
	maincard.appendChild(divglobalcard);

	for (let i = 0; i < data.length; i++) {
		console.log(data[i]);

		const type = data[i].type;

		let divcard = document.createElement("div");
		divcard.classList.add("div-card");
		divglobalcard.appendChild(divcard);

		let p = document.createElement("p");
		p.textContent = data[i].name;
		p.classList.add("p-search");
		divcard.appendChild(p);

		let img = document.createElement("img");
		img.setAttribute("src", data[i].image);
		img.classList.add("img-search");
		divcard.appendChild(img);

		if (type == "neutral") {
			p.style.backgroundColor = "rgba(227, 181, 153, 1)";
		}

		if (type == "passive") {
			p.style.backgroundColor = "rgba(79, 140, 105, 1)";
		}

		if (type == "hostile") {
			p.style.backgroundColor = "rgba(210, 70, 70, 1)";
		}
	}
});
