// Retorne o url da página atual utilizando o objeto window
const href = window.location.href; // pode retirar a palavra window que funciona tbm
console.log(href);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector(".ativo");
console.log(elementoAtivo);
// Retorne a linguagem do navegador
const language = navigator.language;
console.log(language);
// Retorne a largura da janela
const largura = window.innerWidth;
console.log(largura);
