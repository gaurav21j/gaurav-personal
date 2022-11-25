const map= {
	"Blog": {
		"Link": "https://gaurav21j.medium.com/",
        "Images": [
            "media/blog/1.png"
		]
	},
	"Travel": {
		"Link": "travel.html",
        "Images": [
            "media/india/kotagiri/1.jpeg"
		]
	},
	"Food": {
		"Link": "food.html",
        "Images": [
            "media/food/italiano/1.jpeg"
		]
	},	
	"Tech": {
		"Link": "https://github.com/gaurav21j/",
        "Images": [
            "media/tech/1.png"
		]
	}
};

var path = window.location.pathname;
var page = path.split("/").pop();

// Get the URL param
const queryString = window.location.search;
const urlParams   = new URLSearchParams(queryString);    
const datas = Object.entries(map);

const levelBValue  = urlParams.get('levelB');    
const levelAValue  = urlParams.get('levelA');  

var headerOutput = "Meraki - essence of yourself."
let output  = '';
var countriesDisplayed = new Set()
for(let key of datas) 
{
	var Name = key[0];
	var Link = key[1]["Link"];
	var Imag = key[1]["Images"][0];

	output += `
	<a href="${Link}" class="item">
		<div class="img-container">
			<img src="${Imag}" alt="">
		</div>
		<span>${Name}</span>
	</a>
	`;
}

// Create element
const div     = document.createElement("div");
div.className = 'generic-items';
div.innerHTML = output;
document.querySelector(".generic-leaf-container").insertAdjacentElement("beforeend", div);
document.querySelector(".generic-header").innerHTML = headerOutput;