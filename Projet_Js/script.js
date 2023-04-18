let bouton = document.getElementById("mon-bouton");
let formulaire = document.getElementById("mon-formulaire");
bouton.addEventListener("click", function() {
	if (formulaire.style.display === "none") {
		formulaire.style.display = "block";
	} else {
		formulaire.style.display = "none";
	}
});
///Recuperation formulaire 
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const heureDebut = parseInt(document.querySelector('#heureDebut').value);
  const heureFin = parseInt(document.querySelector('#heureFin').value);
  const jour = document.querySelector('#jour').value;
  const classe = document.querySelector('#classe').value;
  const module = document.querySelector('#module').value;
  const salle = document.querySelector('#salle').value;
  
  creer(heureDebut, heureFin, jour, classe, module, salle);
  
  form.reset();
});
