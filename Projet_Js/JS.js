//const toggleButton = document.getElementById('toggle-button');
let toggleButton = document.getElementById('toggle-button');
let isClicked = false;

//alert("hhhhh");
toggleButton.addEventListener('click', () => {
    let containere=document.getElementById('containere');
    console.log(containere)
  if (isClicked) {
    console.log('aaaaaaaaa')
    document.getElementById('planing').style.backgroundColor = 'salmon';
    /*document.getElementById('jou').style.backgroundColor = 'salmon';*/
    document.querySelector('.a').style.backgroundColor='#B0C4DE'
  } else {
    containere.style.backgroundColor = 'blue';
    document.getElementById('planing').style.backgroundColor = 'none';
    console.log('bbbbbbbbbbb');
  }
  
  isClicked = !isClicked;
});

/*let Enseign=['Enseignant','Aly','Baila','Ndoye','Mbaye','Djiby','SecKouba'];
let salles=['Salles','101','102','103','104','201','inclub'];
let classes=['L2 GLRS A','L2 GLRS B','L2 ETSE','L1 A','IAGE B','L2 CDSD']*/
let menu={
  Enseignants:[
    {nom:'Enseignants',idEgn:1,modules:[]},
    {nom:'Aly',idEgn:2,modules:['JAVASCRIPT','PHP']},
    {nom:'Baila',idEgn:3,modules:['ALGO','JAVA']},
    {nom:'Ndoye',idEgn:4,modules:['LC','PHP']},
    {nom:'Mbaye',idEgn:5,modules:['ALGO','PYTHON']},
    {nom:'Djiby',idEgn:6,modules:['ALGO','JAVA']},
    {nom:'Seckouba',idEgn:7,modules:['PYTHON','JAVA']}
  ],
  Salles:[
    {nom:'Salles',idSalles:1,capacite:null},
    {nom:'101',idSalles:2,capacite:100},
    {nom:'103',idSalles:3,capacite:100},
    {nom:'104',idSalles:4,capacite:100},
    {nom:'105',idSalles:5,capacite:100},
    {nom:'201',idSalles:6,capacite:100},
    {nom:'inclub',idSalles:7,capacite:100}
  ],
  Classes:[
    {nom:'Classes',effectif:null},
    {nom:'L2 GLRS A',effectif:100},
    {nom:'L2 GLRS B',effectif:100},
    {nom:'L2 ETSE',effectif:100},
    {nom:'L1 A',effectif:100},
    {nom:'IAGE B',effectif:100},
    {nom:'L2 CDSD',effectif:100}
  ],
  
  Modules:[
    {nom:'Modules',idEgn:[]},
    {nom:'ALGO',idEgn:[3,6,5]},
    {nom:'PHP',idEgn:[2,4]},
    {nom:'PYTHON',idEgn:[5,7]},
    {nom:'LC',idEgn:[4]},
    {nom:'JAVASCRIPT',idEgn:[2]},
    {nom:'JAVA',idEgn:[3,6,7]}

  ]
}
const Enseign=document.querySelector('.Eng');
const salles=document.querySelector('.salles');
const classes=document.querySelector('.classes');
const modules=document.querySelector('.modules');
//Recuperation dans un tableau
TabMenu=[Enseign,salles,classes,modules]
/*Enseign.addEventListener('click',()=>{
  console.log(menu.Enseignants)
});*/
let MonSelect=document.getElementById('selection');
TabMenu.forEach(element => {
  element.addEventListener('click',()=>{    
    MonSelect.style.fontSize='17px'
    MonSelect.innerHTML=''
    let tab=[];
    if(element.className=='Eng'){
      
      tab=menu.Enseignants;
      /*element.style.backgroundColor='yellow'*/
    }
    if(element.className=='salles'){
      tab=menu.Salles;
      /*element.style.backgroundColor='red'*/
    }
    if(element.className=='classes'){
      tab=menu.Classes;
    }
    if(element.className=='modules'){
      tab=menu.Modules;
    }
    tab.forEach((elem) => {
      const options=document.createElement('option')
      /*options.value='options'+index
      console.log(options.value)*/
      options.textContent=elem.nom
      options.style.fontSize='17px'
      MonSelect.appendChild(options)
      
    });
  })
  
});
const titre=document.getElementById('titre')
MonSelect.addEventListener('change',function(e){
   titre.innerHTML=e.target.value
   const x=e.target.value
   
});

for (let i=8; i < 18; i++) {
  const elem=document.querySelector('.heures')
  const span=document.createElement('span')
  span.setAttribute('id','span')
  const x=`${i}H`
  span.append(x)
  elem.appendChild(span)
}


function creer(heureDebut, heureFin, jour, classe, module, salle) {
  const a = document.getElementById(jour);
  
  // création de l'élément pour chaque appel de la fonction
  const elt = document.createElement('div');
  elt.setAttribute('class', 'elt');
  
  let n = heureFin - heureDebut;
  let m = heureDebut - 8;
  
  elt.style.width = `${n*10}%`;
  elt.style.marginLeft = `${(m*10)+1}%`;
  if (module==='PYTHON'){
    elt.style.backgroundColor = 'red';
  }
  if (module==='JAVA'){
    elt.style.backgroundColor = 'HotPink';
  }
  if (module==='ALGO'){
    elt.style.backgroundColor = 'Teal';
  }
  if (module==='JAVASCRIPT'){
    elt.style.backgroundColor = 'Coral';
  }
  if (module==='LC'){
    elt.style.backgroundColor = 'DarkKhaki';
  }
  if (module==='PHP'){
    elt.style.backgroundColor = 'MediumSlateBlue';
  }
  
  
  const contenuElt = document.createElement('div');
  contenuElt.setAttribute('class', 'contenuElt');
  
  const clas = document.createElement('p');
  clas.setAttribute('class', 'span1');
  clas.append(classe);
  
  const modul = document.createElement('p');
  modul.setAttribute('class', 'span2');
  modul.append(module);
  
  const sall = document.createElement('p');
  sall.setAttribute('class', 'span3');
  sall.append(salle);
  
  contenuElt.appendChild(clas);
  contenuElt.appendChild(modul);
  contenuElt.appendChild(sall);
  elt.appendChild(contenuElt);

  a.appendChild(elt);

  // vérification si les deux éléments sont sur le même jour
  if (heureDebut > 9 && document.querySelectorAll(`#${jour} .elt`).length > 1) {
    elt.style.marginTop = '-98px';
  }
}


//modifie la fonction pour que l'appelles du fonction creer  le dieuxieme elt correctement

//console.log(creer(11,13,'mercredi','LC','ALGO','102'))
//prof:classe ,module,salle,heureDebut,heureFin
//console.log(creer(15,17,'mercredi','LC','JAVA','102'))
//classes:prof,module,salle,heureDebut,heureFin
//salles :classe,prof,module,heureDebut,heureFin
//module :classe,prof,salle ,heureDebut,heureFin
/*let Enseign=['Enseignant','Aly','Baila','Ndoye','Mbaye','Djiby','SecKouba'];
let salles=['Salles','101','102','103','104','201','inclub'];
let classes=['L2 GLRS A','L2 GLRS B','L2 ETSE','L1 A','IAGE B','L2 CDSD']*/
/*function creer({heureDebut, heureFin, jour, classe, module, salle}) {
  const a = document.getElementById(jour);
  
  // création de l'élément pour chaque appel de la fonction
  const elt = document.createElement('div');
  elt.setAttribute('class', 'elt');
  
  let n = heureFin - heureDebut;
  let m = heureDebut - 8;
  
  elt.style.width = `${n*10}%`;
  elt.style.marginLeft = `${(m*10)+1}%`;
  if (module==='PYTHON'){
    elt.style.backgroundColor = 'red';
  }
  if (module==='JAVA'){
    elt.style.backgroundColor = 'HotPink';
  }
  if (module==='ALGO'){
    elt.style.backgroundColor = 'Teal';
  }
  if (module==='JAVASCRIPT'){
    elt.style.backgroundColor = 'Coral';
  }
  if (module==='LC'){
    elt.style.backgroundColor = 'DarkKhaki';
  }
  if (module==='PHP'){
    elt.style.backgroundColor = 'MediumSlateBlue';
  }
  
  
  const contenuElt = document.createElement('div');
  contenuElt.setAttribute('class', 'contenuElt');
  
  const clas = document.createElement('p');
  clas.setAttribute('class', 'span1');
  clas.append(classe);
  
  const modul = document.createElement('p');
  modul.setAttribute('class', 'span2');
  modul.append(module);
  
  const sall = document.createElement('p');
  sall.setAttribute('class', 'span3');
  sall.append(salle);
  
  contenuElt.appendChild(clas);
  contenuElt.appendChild(modul);
  contenuElt.appendChild(sall);
  elt.appendChild(contenuElt);

  a.appendChild(elt);

  // vérification si les deux éléments sont sur le même jour
  if (heureDebut > 9 && document.querySelectorAll(`#${jour} .elt`).length > 1) {
    elt.style.marginTop = '-98px';
  }
}*/

let cours=[
  {prof:1,jour:'lundi',classe:2,module:'PHP',salle:'101',heureDebut:10,heureFin:13},
 
]
let EmploisTempsProf={
  Aly:[
    {jour:'lundi',classe:'L2 GLRS A',module:'PHP',salle:'101',heureDebut:10,heureFin:13},
    {jour:'mardi',classe:'L2 GLRS B',module:'JAVASCRIPT',salle:'201',heureDebut:13,heureFin:15},
    
  ],
  Ndoye:[
    {jour:'lundi',classe:'L2 ETSE',module:'PYTHON',salle:'104',heureDebut:9,heureFin:12},
    {jour:'mercredi',classe:'L2 GLRS A',module:'PYTHON',salle:'102',heureDebut:8,heureFin:10},

  ]
}
// Récupérer les clés de l'objet EmploisTempsProf
let keys = Object.keys(EmploisTempsProf);
// Récupérer les cours d'Aly
// Récupérer les cours d'Aly
let coursAly = EmploisTempsProf.Aly;



// Définir les fonctions à appeler
// fonction pour supprimer les éléments de la semaine précédente
function supprimerSemaine() {
  const elts = document.querySelectorAll('.elt');
  elts.forEach(elt => elt.remove());
}

// fonction pour créer les éléments de la semaine en fonction de la sélection de l'utilisateur
function creerSemaine(x) {
  console.log(x)
  if (x == 'Aly') {
    creer(8, 10, 'lundi', 'L2 GLRS A', 'JAVASCRIPT', '101');
    creer(15, 17, 'lundi', 'L2 GLRS A', 'PHP', '201');
  }
  if (x == 'Baila') {
    creer(10, 12, 'jeudi', 'L2 GLRS B', 'ALGO', '103');
    creer(13, 15, 'mercredi', 'L2 GLRS B', 'JAVA', '103');
  }
  if (x == 'Ndoye') {
    creer(12, 14, 'vendredi', 'L2 ETSE', 'ALGO', '103');
    
  }
  if (x == 'L2 GLRS A') {
    creer(12, 14, 'samedi', 'Aly', 'ALGO', '105');
    
  }
  if (x == 'L2 GLRS B') {
    creer(11, 13, 'mercredi', 'Baila', 'ALGO', '104');
    creer(15, 17, 'vendredi', 'Baila', 'JAVA', '104');
    
  }
  if (x == 'L2 ETSE') {
    creer(11, 13, 'lundi', 'Ndoye', 'LC', '201');
    creer(13, 15, 'jeudi', 'Ndoye', 'PHP', '201');
    
  }
}

// gestionnaire d'événements pour la sélection de l'utilisateur
MonSelect.addEventListener('change', function(e) {
  const x = e.target.value;
  // suppression des éléments de la semaine précédente
  supprimerSemaine();
  // création des nouveaux éléments de la semaine en fonction de la sélection de l'utilisateur
  creerSemaine(x);
});


/*let bton=document.getElementById('plus');*/
// Sélectionnez l'élément avec l'ID "plus"
// Sélectionnez tous les éléments avec la classe "jo"
const jourElements = document.querySelectorAll('.jo');

// Parcourir tous les éléments "jo" et ajouter un gestionnaire d'événement pour le clic
jourElements.forEach(jourElement => {
  jourElement.addEventListener('click', () => {
    // Récupérez l'élément de formulaire et affichez-le
    const formulaireElement = document.getElementById('mon-formulaire');
    formulaireElement.style.display = 'block';
  });
});



// Associer l'idEgn de chaque module à celui de chaque enseignant
/*for(let i=1;i<menu.Modules.length;i++){
  const module = menu.Modules[i];
  const enseignantsId = module.idEgn;
  if(enseignantsId){
    for(let j=0;j<enseignantsId.length;j++){
      const enseignant = menu.Enseignants.find(e => e.idEgn === enseignantsId[j]);
     
      if(enseignant){
        enseignant.modules = enseignant.modules || [];
        enseignant.modules.push(module.nom);
        
      }
    }
  }
}*/
// Parcours des modules
for (let i = 1; i < menu.Modules.length; i++) {
  let module = menu.Modules[i];

  // Parcours des enseignants
  for (let j = 1; j < menu.Enseignants.length; j++) {
    let enseignant = menu.Enseignants[j];

    // Vérification si l'enseignant a le même idEgn que celui du module et si cet idEgn correspond à celui d'Aly
    if (module.idEgn.includes(enseignant.idEgn) && enseignant.idEgn === 2) {
      //console.log(module.nom);
      
    }
  }
}
////////RECUPERATION DONNER FORMULAIRE
const joElements = document.querySelectorAll('.jo');
function jourCorrespondant(){
  joElements.forEach(joElement => {
    joElement.addEventListener('click', (event) => {
      const jourCorrespondant = event.target.closest('.jour').getAttribute('data-jour').toLowerCase();
      console.log(jourCorrespondant)
      
    });
  });

}

// Récupération du formulaire
const formulaire = document.getElementById('formulaire');

// Ecoute de l'événement submit
formulaire.addEventListener('submit', function(event) {
  // Empêcher la soumission par défaut du formulaire
  event.preventDefault();
  
  // Récupération des valeurs des champs du formulaire
  const module = document.getElementById('module').value;
  const enseignant = document.getElementById('enseignant').value;
  const salle = document.getElementById('salle').value;
  const heureDebut = parseInt(document.getElementById('heureDebut').value);
  const heureFin = parseInt(document.getElementById('heureFin').value);
  
  // Récupération du jour sélectionné
  //const jour = document.querySelector('.jour .jo span');
  //const jourChoisi = document.querySelector('.jo').value; // par exemple 'lundi'
  //const jourDiv = document.querySelector(`[data-jour="${jourChoisi}"]`);

  // Récupération du jour sélectionné
/*const jourDiv = document.querySelector('.jour.active');
const jour = jourDiv.getAttribute('data-jour');
console.log(jour)*/
/*const jour = document.querySelector('.jour .jo span').textContent.toLowerCase();

const jourDiv = document.querySelector(`[data-jour="${jour}"]`);
console.log(jourDiv)*/
const jour = jourCorrespondant();
//console.log(jourCorrespondant())

  // Appel de la fonction creer() avec les valeurs récupérées
  creer(heureDebut, heureFin, jour, enseignant, module, salle);
});









