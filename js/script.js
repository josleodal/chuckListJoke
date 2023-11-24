const fetchJoke=document.getElementById('fetchJoke')
const jokeList=document.getElementById('jokeList')

//https://api.chucknorris.io/jokes/random
let chisteGuardar=JSON.parse(localStorage.getItem('chiste'))||[]  


fetchJoke.addEventListener('click',()=>{
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => {
      if (!response.ok) {
        throw new Error('No responde');
      }
      return response.json()
    })
    .then(data => {

        let texto=data.value;
        let html =`<li>
        <p>${texto}</p>
        <button id='btn'>Eliminar</button>
        </li>`    
        guardar(html)

        const boton =document.getElementById('btn')

boton.addEventListener('click',()=>{
chisteGuardar.shift()
})

    })})

const guardar=(ele)=>{
    chisteGuardar.push(ele)
    localStorage.setItem('chiste',JSON.stringify(chisteGuardar))
    jokeList.innerHTML=chisteGuardar

}
