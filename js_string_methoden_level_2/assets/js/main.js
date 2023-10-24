"use strict";

// ===================================================
//       JS-Vertiefung – String Methoden Level 2
// ===================================================

// ===================================================
//      JS-Vertiefung – String-Methods-Level-2_3
// ===================================================

console.log("%c JS-Vertiefung – String-Methods-Level-2_3", "color: tomato");

const btnSearch = document.querySelector('#search-button');

btnSearch.addEventListener('click', () => {
	const article = document.querySelector('article');
	const articleText = document.querySelector('article').innerText;
	const inputSearch = document.querySelector('#search-input').value;
	article.innerHTML = articleText.replaceAll(inputSearch, `<span style="background-color: yellow">${inputSearch}</span>`);
});