console.log("Yup, it loaded");

let products = null;
let categories = null;
// get products

function buildCard(prodObj) {
	let card = `<div class="prodCard">
								<h2>${prodObj.name}</h2>
								<h3>${prodObj.dept}</h3>
								<p>${prodObj.price}</p>
							</div>`;
	return card;
};

let tempObj = {name: "Ferby", dept: "Toys", price: 12.75,}
console.log("card", buildCard(tempObj)); 

function displayProducts() {
	products = JSON.parse(event.target.responseText).products;
};

function displayCategories() {
	categories = JSON.parse(event.target.responseText).categories;
};

function getCategories() {
	let reqCategories = new XMLHttpRequest();
	reqCategories.addEventListener("load", displayCategories);
	reqCategories.open("GET", "data/categories.json");	
	reqCategories.send();
};

function getProducts() {
	let reqProducts = new XMLHttpRequest();
	reqProducts.addEventListener("load", displayProducts);
	reqProducts.open("GET", "data/products.json");
	reqProducts.send();
};
getProducts();
getCategories();

// get categories
console.log("Products?", products);





