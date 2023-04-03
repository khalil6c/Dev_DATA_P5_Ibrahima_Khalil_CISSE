// Définir la date cible
var dateCible = new Date("Jan 1, 2024 00:00:00").getTime();

// Mettre à jour le compte à rebours toutes les secondes
var x = setInterval(function() {

  // Obtenir la date et l'heure actuelles
  var dateActuelle = new Date().getTime();

  // Calculer la différence entre la date cible et la date actuelle
  var distance = dateCible - dateActuelle;

  // Calculer le temps restant en jours, heures, minutes et secondes
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Afficher le temps restant dans les éléments HTML appropriés
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Afficher un message lorsque le compte à rebours est terminé
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("compteRebours").innerHTML = "EXPIRED";
  }
}, 1000);
