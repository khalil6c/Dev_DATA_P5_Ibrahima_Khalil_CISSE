// Récupération des éléments HTML
const lengthInput = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const specialCheckbox = document.getElementById('special');
const generateButton = document.getElementById('generate');
const passwordInput = document.getElementById('password');

// Tableaux des caractères utilisables
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numbersChars = '0123456789';
const specialChars = '!@#$%^&*()_+-=[]{}|;:",./<>?';

// Fonction pour générer un mot de passe
function generatePassword() {
  let password = '';
  let chars = '';

  // Ajout des caractères correspondant aux critères cochés
  if (uppercaseCheckbox.checked) {
    chars += uppercaseChars;
  }
  if (lowercaseCheckbox.checked) {
    chars += lowercaseChars;
  }
  if (numbersCheckbox.checked) {
    chars += numbersChars;
  }
  if (specialCheckbox.checked) {
    chars += specialChars;
  }

  // Génération du mot de passe aléatoire
  for (let i = 0; i < lengthInput.value; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  // Affichage du mot de passe
  passwordInput.value = password;
}

// Activation/Désactivation du bouton de génération
function checkGenerateButton() {
  if (uppercaseCheckbox.checked || lowercaseCheckbox.checked || numbersCheckbox.checked || specialCheckbox.checked) {
    generateButton.disabled = false;
  } else {
    generateButton.disabled = true;
  }
}

// Activation du tooltip copy
passwordInput.addEventListener('mouseover', function() {
  passwordInput.setAttribute('title', 'Copier le mot de passe');
});

// Événements
lengthInput.addEventListener('input', generatePassword);
uppercaseCheckbox.addEventListener('change', generatePassword);
lowercaseCheckbox.addEventListener('change', generatePassword);
numbersCheckbox.addEventListener('change', generatePassword);
specialCheckbox.addEventListener('change', generatePassword);

uppercaseCheckbox.addEventListener('change', checkGenerateButton);
lowercaseCheckbox.addEventListener('change', checkGenerateButton);
numbersCheckbox.addEventListener('change', checkGenerateButton);
specialCheckbox.addEventListener('change', checkGenerateButton);
             