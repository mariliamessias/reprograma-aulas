const btnBusca = document.getElementById("btn-busca");
btnBusca.addEventListener("click", trazResultadoDaBusca);
let listaGifs = [];

function buscaGif(){
  return document.getElementById("campo-busca").value;
}

function erro(){
  console.log("erro");
}

function trazResultadoDaBusca(event){
  event.preventDefault();
  const respostaDaBusca = new XMLHttpRequest();
  respostaDaBusca.open("GET",   
  `http://api.giphy.com/v1/gifs/search?q=${buscaGif()}&api_key=I5HKpC7PubCko21CruBJHhbZE2fAk9Ze`);
  respostaDaBusca.onload = carregaPostsComGifs; // o que vai acontecer no carregamento da resposta
  respostaDaBusca.onerror = erro;
  respostaDaBusca.send();
}

function carregaPostsComGifs(){
  listaGifs = JSON.parse(this.responseText)["data"];
  exibePosts();
}

function exibePosts(){
  let exibeBusca = document.getElementById("exibe-busca");
    exibeBusca.innerHTML = 
      `<div class="area-gif"> ${listaGifs.map(gif => `
        <div class="gif">
          <img src="${gif.images.fixed_height.url}"></img>
        </div>
        `).join("")}
      </div>`;
}
  


