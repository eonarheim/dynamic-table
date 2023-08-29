
const api = 'https://pokeapi.co/api/v2/pokemon/ditto';

const table$ = document.getElementById('table');
const submit$ = document.getElementById('submit');

submit$.addEventListener('click', async () => {
    const result = await fetch(api);

    const row = table$.insertRow(-1); // add to the end

    // add 5 cells using the index
    for (let i = 1; i <= 5; i++) {
        const cell = row.insertCell(-1);
        cell.classList.add(Math.random() > .5 ? 'hit' : 'wrong-pos');
        cell.appendChild(document.createTextNode(i));
    }

    console.log(row);
});
