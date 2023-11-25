
const fetchJoke = document.getElementById('fetchJoke');
const jokeList = document.getElementById('jokeList');
let chistesGuardados = []; 

fetchJoke.addEventListener('click', (e) => {
    e.preventDefault()
    fetch('https://api.chucknorris.io/jokes/random')
        .then(res => {
            if (!res.ok) {
                throw new Error('Ha habido un error');
            }
            return res.json();
        })
        .then(chiste => {


            let parsel = `<li>${chiste.value}</li>`;
            jokeList.innerHTML += parsel;
            guardar(parsel);
        })
        .catch(error => {
            console.error("Hubo un tremendo error", error);
        });
});

const guardar = (ele) => {
    let nuevosChistes = JSON.parse(localStorage.getItem('chistes')) || [];

    nuevosChistes.push(ele);

    localStorage.setItem('chistes', JSON.stringify(nuevosChistes));

    jokeList.innerHTML = nuevosChistes.join('');
};

window.onload = () => {
   let nuevosChistes = JSON.parse(localStorage.getItem('chistes')) || [];

    jokeList.innerHTML = nuevosChistes.join('');
   
};
