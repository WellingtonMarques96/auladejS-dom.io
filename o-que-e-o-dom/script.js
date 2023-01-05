// window.alert("isso mesmo");
const href = window.location.href;
console.log(href);

if (href === "http://127.0.0.1:5500/o-que-e-o-dom/index.html") {
  console.log("É igual");
}

const h1selecionado = document.querySelector("h1");
