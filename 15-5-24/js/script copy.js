const inserireTesto = document.getElementById("inserireTesto");
const bottone = document.getElementById("add");

//funzione del bottone input
const eventoBottone = function (event) {
  const testoInput = inserireTesto.value;
  const nuovaLista = document.createElement("li");
  const nuovoP = document.createElement("p");
  nuovoP.innerText = testoInput;
  const nuovoBottone = document.createElement("button");
  nuovoBottone.setAttribute("type", "button");
  nuovoBottone.innerText = "Cancella";
  const ul = document.getElementById("listaNonOrdinata");
  ul.appendChild(nuovaLista);
  nuovaLista.appendChild(nuovoP);
  nuovoP.appendChild(nuovoBottone);
};
