"use strict";

// ===================================================
//       JS-Vertiefung – String Methoden Level 1
// ===================================================

// ===================================================
//      JS-Vertiefung – String-Methods-Level-1_1
// ===================================================

console.log("%c JS-Vertiefung – String-Methods-Level-1_1", "color: tomato");

const firstName = "Rainer";
const lastName = "Busch";
const fullName = firstName + lastName;

console.log(firstName.length);
console.log(lastName.length);
console.log(fullName.length);

// ===================================================
//      JS-Vertiefung – String-Methods-Level-1_2
// ===================================================

console.log("%c JS-Vertiefung – String-Methods-Level-1_2", "color: tomato");

const txt =
	"How inappropriate to call this planet Earth, when clearly it is Ocean.";

console.log(txt.indexOf("h"));
console.log(txt.indexOf("Earth"));
console.log(txt.indexOf("Moon"));

// ===================================================
//      JS-Vertiefung – String-Methods-Level-1_3
// ===================================================

console.log("%c JS-Vertiefung – String-Methods-Level-1_3", "color: tomato");

let txt2 =
	"Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";
console.log(txt2.search(";"));
console.log(txt2.search("green"));
console.log(txt2.search("blue"));

// ===================================================
//      JS-Vertiefung – String-Methods-Level-1_4
// ===================================================

console.log("%c JS-Vertiefung – String-Methods-Level-1_4", "color: tomato");

const output = document.querySelector("#output");
const a = "Susi is going to codingschool";

output.innerHTML = `<p>${a.slice(0, 4)}</p>`;
output.innerHTML += `<p>${a.slice(5, 7)}</p>`;
output.innerHTML += `<p>${a.slice(5, 16)} ${a.slice(23)}</p>`;
output.innerHTML += `<p>${a.slice(23)}</p>`;
output.innerHTML += `<p>${a.slice(0, 7)} ${a.slice(23)}</p>`;

// ===================================================
//      JS-Vertiefung – String-Methods-Level-1_5
// ===================================================

console.log("%c JS-Vertiefung – String-Methods-Level-1_5", "color: tomato");

const output2 = document.querySelector("#output2");
const text = "Susi is back from codingschool";

output2.innerHTML = `<p>${text.substring(0, 4)}</p>`;
output2.innerHTML += `<p>${text.substring(5, 7)}</p>`;
output2.innerHTML += `<p>${text.substring(24)}</p>`;
output2.innerHTML += `<p>${text.substring(0, 7)} ${text.substring(24)}</p>`;

// ===================================================
//      JS-Vertiefung – String-Methods-Level-1_7
// ===================================================

console.log("%c JS-Vertiefung – String-Methods-Level-1_7", "color: tomato");

const output3 = document.querySelector("#output3");
const text2 = "Sam is good at codingschool";
const text2Clipping = `${text2.slice(0, 15)} ${text2.slice(21)}`;

output3.innerHTML = `<p>${text2Clipping.replace("good", "bad")}</p>`;
output3.innerHTML += `<p>${text2Clipping.replace("Sam", "Susi")}</p>`;
output3.innerHTML += `<p>${text2Clipping.replace("school", "tennis")}</p>`;

// ===================================================
//      JS-Vertiefung – String-Methods-Level-1_8
// ===================================================

console.log("%c JS-Vertiefung – String-Methods-Level-1_8", "color: tomato");

const output4 = document.querySelector("#output4");
const text3 = "Sam is going to codingschool";
const text3Clipping = `${text3.slice(0, 15)} ${text3.slice(22)}`;

output4.innerHTML = `<p>${text3Clipping.toUpperCase()}</p>`;
output4.innerHTML += `<p>${text3Clipping.toLowerCase()}</p>`;

output4.innerHTML += `<p>${text3Clipping
	.slice(0, 3)
	.toUpperCase()} ${text3Clipping.slice(4, 15)} ${text3Clipping
	.slice(16)
	.toUpperCase()}</p>`;

output4.innerHTML += `<p>${text3Clipping
	.slice(0, 3)
	.toLowerCase()} ${text3Clipping
	.slice(4, 15)
	.toUpperCase()} ${text3Clipping.slice(16)}</p>`;

const i = text3Clipping.indexOf("i");
const g = text3Clipping.indexOf("g");
const t = text3Clipping.indexOf("t");
const s = text3Clipping.indexOf("s");

output4.innerHTML += `<p>${text3Clipping.slice(0, 4)} ${text3Clipping
	.charAt(i)
	.toUpperCase()}${text3Clipping.slice(5, 7)} ${text3Clipping
	.charAt(g)
	.toUpperCase()}${text3Clipping.slice(8, 12)} ${text3Clipping
	.charAt(t)
	.toUpperCase()}${text3Clipping.slice(14, 15)} ${text3Clipping
	.charAt(s)
	.toUpperCase()}${text3Clipping.slice(17)}</p>`;

// ===================================================
//      JS-Vertiefung – String-Methods-Level-1_9
// ===================================================

console.log("%c JS-Vertiefung – String-Methods-Level-1_9", "color: tomato");

const output5 = document.querySelector("#output5");

const text4 = "Sam is going to codingschool";
const text5 = "Susi";
const text6 = "and";

const text4Clipping = `${text3.slice(0, 15)} ${text3.slice(22)}`;

output5.innerHTML = `<p>${text4Clipping
	.concat(" " + text6)
	.concat(" to the movie theater")} </p>`;
output5.innerHTML += `<p>${text4
	.slice(0, 15)
	.concat(" the movie theater")} </p>`;
output5.innerHTML += `<p>${text5} ${text6} ${text4Clipping
	.slice(0, 4)
	.concat("are")
	.concat(text4Clipping.slice(6))} </p>`;
output5.innerHTML += `<p>${text5} ${text6} ${text4Clipping
	.slice(0, 4)
	.concat("are")
	.concat(text4Clipping.slice(6, 15))
	.concat(" gym and to the movie theater")} </p>`;
output5.innerHTML += `<p>${text4Clipping
	.replace("Sam", "Susi")
	.concat(" " + text6)
	.concat(" to the movie theater")} </p>`;


// ===================================================
//      JS-Vertiefung – String-Methods-Level-3_2
// ===================================================

console.log("%c JS-Vertiefung – String-Methods-Level-3_2", "color: tomato");

const btnSubmit = document.querySelector("#btn-submit");

btnSubmit.addEventListener("click", (event) => {
	event.preventDefault();

	const output6 = document.querySelector("#output6");
	const stringInput = document.querySelector("#string").value;
	const sliceInput = document.querySelector("#slice").value;

	let rdBtn = document.querySelectorAll("input[name='beforeAfter']");
	let indexStringInput = stringInput.indexOf(sliceInput)

	if (rdBtn[0].checked) {
		output6.innerHTML = `${stringInput.slice(0, indexStringInput)}<br>`;
		output6.innerHTML += stringInput.slice(indexStringInput);
	} else if (rdBtn[1].checked) {
		output6.innerHTML = `${stringInput.slice(0, indexStringInput + sliceInput.length)}<br>`;
		output6.innerHTML += stringInput.slice(indexStringInput + sliceInput.length);
	} else {
		output6.textContent = 'Bitte "Davor" oder "Danach" auswählen!'
	}

	
});