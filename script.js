const $btnsearch = document.querySelector(".btn-search");
const $form = document.querySelector("form");
const maincard = document.querySelector(".main-card");
const inputHealth = document.querySelector("#health");
const inputDamage = document.querySelector("#damage");
const inputArmor = document.querySelector("#armor");
const inputSearch = document.querySelector("#search");
const selectClassification = document.querySelector("#classification");
const selectType = document.querySelector("#type");

$form.addEventListener("submit", async (e) => {
	const searchvalue = $form.querySelector("input").value;

	e.preventDefault();

	let isQueryAtLeastOne = false;
	let url = "http://10.69.4.208:3000/v1/entities?";

	if (inputHealth.value != "") {
		url += "health=" + inputHealth.value;
		isQueryAtLeastOne = true;
	}

	if (inputDamage.value != "") {
		if (isQueryAtLeastOne == true) {
			url += "&";
		}
		url += "damage=" + inputDamage.value;
		isQueryAtLeastOne = true;
	}

	if (selectClassification.value != "") {
		if (isQueryAtLeastOne == true) {
			url += "&";
		}
		url += "classification=" + selectClassification.value;
		isQueryAtLeastOne = true;
	}

	if (selectType.value != "") {
		if (isQueryAtLeastOne == true) {
			url += "&";
		}
		url += "type=" + selectType.value;
		isQueryAtLeastOne = true;
	}

	if (inputArmor.value != "") {
		if (isQueryAtLeastOne == true) {
			url += "&";
		}
		url += "armor=" + inputArmor.value;
		isQueryAtLeastOne = true;
	}

	console.log(url);

	const response = await fetch(url);
	const data = await response.json();

	// if (response == []) {
	// 	console.log("gg bg ta rater");
	// }

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

		let divsubtext = document.createElement("div");
		divsubtext.classList.add("div-sub-text");
		divcard.appendChild(divsubtext);

		let divtext = document.createElement("div");
		divtext.classList.add("div-text");
		divsubtext.appendChild(divtext);

		let a = document.createElement("a");
		a.textContent = "Animal";
		a.classList.add("a-card");
		a.setAttribute("href", "");
		divtext.appendChild(a);

		let hr = document.createElement("hr");
		hr.classList.add("hr-card");
		divsubtext.appendChild(hr);

		let ptype = document.createElement("p");
		ptype.textContent = data[i].type;
		ptype.classList.add("ptype");
		divtext.appendChild(ptype);

		let btn = document.createElement("btn");
		btn.textContent = "SEE MORE";
		btn.classList.add("btn-card");
		divcard.appendChild(btn);

		if (type == "neutral") {
			p.style.backgroundColor = "rgba(227, 181, 153, 1)";
			btn.style.backgroundColor = "rgba(227, 181, 153, 1)";
			hr.style.backgroundColor = "rgba(227, 181, 153, 1)";
			divcard.style.border = "solid 2px rgba(227, 181, 153, 1)";
		}

		if (type == "passive") {
			p.style.backgroundColor = "rgba(79, 140, 105, 1)";
			btn.style.backgroundColor = "rgba(79, 140, 105, 1)";
			hr.style.backgroundColor = "rgba(79, 140, 105, 1)";
			divcard.style.border = "solid 2px rgba(79, 140, 105, 1)";
		}

		if (type == "hostile") {
			p.style.backgroundColor = "rgba(210, 70, 70, 1)";
			btn.style.backgroundColor = "rgba(210, 70, 70, 1)";
			hr.style.backgroundColor = "rgba(210, 70, 70, 1)";
			divcard.style.border = "solid 2px rgba(210, 70, 70, 1)";
		}
	}
});
