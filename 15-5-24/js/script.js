const inserireTesto = document.getElementById("inserireTesto");
const bottone = document.getElementById("add");

const eventoBottone = function (event) {
  const nuovaLista = document.createElement("li");
  const nuovoInput = document.createElement("p");
  const nuovoBottone = document.createElement("button");
  const ul = document.getElementById("listaNonOrdinata");
  ul.appendChild(nuovaLista);
  nuovaLista.appendChild(nuovoInput);
  nuovoInput.appendChild(nuovoBottone);
};
