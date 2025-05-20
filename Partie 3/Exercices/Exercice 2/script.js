// Reprenez l'exercice précédent, mutualisez les comportements en ajoutant une classe mère.
// Créez une classe mère "Personnage" avec des attributs et méthodes communes 
// Reprenez puis corrigez les classes filles en utilisant l'héritage, et si nécessaire 
// redéfinissez des comportements spécifiques aux méthodes 

// === CLASSE MÈRE : PERSONNAGE ===
class Personnage {
  constructor(nom, pointsDeVie, attaque) {
    this.nom = nom;
    this.pointsDeVie = pointsDeVie;
    this.attaque = attaque;
  }

  attaquer(cible) {
    cible.pointsDeVie -= this.attaque;
    log(`${this.nom} attaque ${cible.nom} et inflige ${this.attaque} dégâts.`);
    updateUI();
  }

  estVivant() {
    return this.pointsDeVie > 0;
  }
}

// === CLASSE GUERRIER ===
class Guerrier extends Personnage {
  constructor(nom) {
    super(nom, 150, 30);
    this.armure = 10;
  }

  attaquer(cible) {
    const degats = this.attaque - (cible.armure || 0);
    cible.pointsDeVie -= degats > 0 ? degats : 0;
    log(`${this.nom} frappe ${cible.nom} et inflige ${degats} dégâts.`);
    updateUI();
  }

  defendre() {
    this.armure += 5;
    log(`${this.nom} se défend et augmente son armure à ${this.armure}.`);
    updateUI();
  }
}

// === CLASSE FÉE ===
class Fee extends Personnage {
  constructor(nom) {
    super(nom, 100, 15);
    this.mana = 50;
  }

  soigner(cible) {
    if (this.mana >= 20) {
      cible.pointsDeVie += 30;
      this.mana -= 20;
      log(`${this.nom} soigne ${cible.nom} (+30 PV).`);
    } else {
      log(`${this.nom} n'a pas assez de mana pour soigner.`);
    }
    updateUI();
  }

  voler() {
    this.pointsDeVie += 10;
    log(`${this.nom} vole et récupère 10 PV.`);
    updateUI();
  }
}

// === CLASSE MAGICIEN ===
class Magicien extends Personnage {
  constructor(nom) {
    super(nom, 120, 25);
    this.mana = 100;
  }

  lancerSort(cible) {
    if (this.mana >= 30) {
      cible.pointsDeVie -= 40;
      this.mana -= 30;
      log(`${this.nom} lance un sort sur ${cible.nom} (-40 PV).`);
    } else {
      log(`${this.nom} n'a pas assez de mana pour lancer un sort.`);
    }
    updateUI();
  }

  regenererMana() {
    this.mana += 20;
    log(`${this.nom} régénère 20 mana (total : ${this.mana}).`);
    updateUI();
  }
}

// === INSTANCES ===
const thor = new Guerrier("Thor");
const elia = new Fee("Elia");
const merlin = new Magicien("Merlin");

// === FONCTIONS UTILES ===
function updateUI() {
  document.getElementById("thor").innerHTML = `
    <h2>${thor.nom} (Guerrier)</h2>
    <p>PV : ${thor.pointsDeVie}</p>
    <p>Attaque : ${thor.attaque}</p>
    <p>Armure : ${thor.armure}</p>
  `;
  document.getElementById("elia").innerHTML = `
    <h2>${elia.nom} (Fée)</h2>
    <p>PV : ${elia.pointsDeVie}</p>
    <p>Attaque : ${elia.attaque}</p>
    <p>Mana : ${elia.mana}</p>
  `;
  document.getElementById("merlin").innerHTML = `
    <h2>${merlin.nom} (Magicien)</h2>
    <p>PV : ${merlin.pointsDeVie}</p>
    <p>Attaque : ${merlin.attaque}</p>
    <p>Mana : ${merlin.mana}</p>
  `;
}

function log(message) {
  const logDiv = document.getElementById("log");
  logDiv.innerHTML += `<div>> ${message}</div>`;
  logDiv.scrollTop = logDiv.scrollHeight;
}

// Initialisation affichage
updateUI();
