const btn = document.querySelector('input[type="submit"]');
const resultado = document.querySelector('#resultado');
function handleSubmit(e) {
	e.preventDefault();

	let numSel = [];

	let numRnd = [];
	let iptNum = document.querySelectorAll('input[type="number"]');
	resultado.innerHTML = '';
	iptNum.forEach((v) => {
		numSel.push(v.value);
	});
	let impressao = 0;
	while (impressao < 100) {
		for (let i = 0; i < 6; i++) {
			let temp = Math.floor(Math.random() * numSel.length);
			if (numRnd.indexOf(numSel[temp]) == -1) {
				numRnd.push(numSel[temp]);
			} else {
				i--;
			}
		}
		const numeroOrdenado = numRnd.sort((a, b) => a - b);

		resultado.innerHTML += `<p class="background">${numeroOrdenado}</p>`;
		numRnd = [];
		impressao++;
	}
}

btn.addEventListener('click', handleSubmit);
