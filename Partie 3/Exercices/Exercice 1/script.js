// On imagine un jeu avec 3 personnages : Un guerrier, une fée et un magicien. 
// Créez trois classees pour chacun de ces personnages, avec au moins 3 attributs (point de vie, point d'attaque...) et 3 méthodes.
// On pourra créer des méthodes ou attributs identiques, mais chaque personnage avoir certains attributs et 
// méthodes spécifiques 

// Dans un second temps, créez trois instances de ces classes, et faites les intéragir en fonction des méthodes 
// et attributs spécifiques de chaque personnage.
// Déclaration des classes
class Guerrier {
  constructor(nom) {
    this.nom = nom;
    this.pointsDeVie = 150;
    this.attaque = 30;
    this.armure = 10;
  }

  attaquer(cible) {
    let degats = this.attaque - (cible.armure || 0);
    cible.pointsDeVie -= degats > 0 ? degats : 0;
    log(`${this.nom} attaque ${cible.nom} pour ${degats} dégâts !`);
    updateUI();
  }

  defendre() {
    this.armure += 5;
    log(`${this.nom} se défend et augmente son armure !`);
    updateUI();
  }
}

class Fee {
  constructor(nom) {
    this.nom = nom;
    this.pointsDeVie = 100;
    this.attaque = 15;
    this.mana = 50;
  }

  soigner(cible) {
    if (this.mana >= 20) {
      cible.pointsDeVie += 30;
      this.mana -= 20;
      log(`${this.nom} soigne ${cible.nom} (+30 PV)`);
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

class Magicien {
  constructor(nom) {
    this.nom = nom;
    this.pointsDeVie = 120;
    this.attaque = 25;
    this.mana = 100;
  }

  lancerSort(cible) {
    if (this.mana >= 30) {
      cible.pointsDeVie -= 40;
      this.mana -= 30;
      log(`${this.nom} lance un sort sur ${cible.nom} (-40 PV)`);
    } else {
      log(`${this.nom} n'a pas assez de mana pour lancer un sort.`);
    }
    updateUI();
  }

  regenererMana() {
    this.mana += 20;
    log(`${this.nom} régénère 20 mana.`);
    updateUI();
  }
}

// Création des personnages
const thor = new Guerrier("Thor");
const elia = new Fee("Elia");
const merlin = new Magicien("Merlin");

// Mise à jour de l'interface
function updateUI() {
  document.getElementById("thor").innerHTML = `
    <h3>${thor.nom} (Guerrier)</h3>
    <p>PV: ${thor.pointsDeVie}</p>
    <p>Attaque: ${thor.attaque}</p>
    <p>Armure: ${thor.armure}</p>
  `;

  document.getElementById("elia").innerHTML = `
    <h3>${elia.nom} (Fée)</h3>
    <p>PV: ${elia.pointsDeVie}</p>
    <p>Attaque: ${elia.attaque}</p>
    <p>Mana: ${elia.mana}</p>
  `;

  document.getElementById("merlin").innerHTML = `
    <h3>${merlin.nom} (Magicien)</h3>
    <p>PV: ${merlin.pointsDeVie}</p>
    <p>Attaque: ${merlin.attaque}</p>
    <p>Mana: ${merlin.mana}</p>
  `;
}

// Affiche un message dans la console et optionnellement dans un log visuel
function log(message) {
  console.log(message);
  // Pour affichage plus visible, on pourrait ajouter un log visuel dans la page si besoin
}

// Initialiser l'affichage
updateUI();
