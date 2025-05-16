// Bibliothèque (tableau contenant les livres)
let bibliotheque = [];

// Constructeur de livre
function Livre(titre, annee, auteur) {
  this.titre = titre;
  this.annee = annee;
  this.auteur = auteur;

  this.afficherInformations = function () {
    return `Titre : ${this.titre}\nAnnée : ${this.annee}\nAuteur : ${this.auteur}`;
  };
}

// Fonction pour ajouter un livre
function ajouterLivre() {
  while (true) {
    try {
      let titre = prompt("Entrez le titre du livre :");
      if (!titre) throw "Titre invalide";

      let annee = parseInt(prompt("Entrez l'année de publication :"));
      if (isNaN(annee)) throw "Année invalide";

      let auteur = prompt("Entrez le nom de l’auteur :");
      if (!auteur) throw "Auteur invalide";

      let livre = new Livre(titre, annee, auteur);
      bibliotheque.push(livre);
      alert("Livre ajouté avec succès !");

      let continuer = prompt("Souhaitez-vous ajouter un autre livre ? (oui/non)").toLowerCase();
      if (continuer !== "oui") break;

    } catch (error) {
      alert("Erreur : " + error);
    }
  }
}

// Fonction pour afficher tous les livres
function afficherLivres() {
  if (bibliotheque.length === 0) {
    alert("Aucun livre dans la bibliothèque.");
    return;
  }

  let message = "Liste des livres :\n\n";
  for (let i = 0; i < bibliotheque.length; i++) {
    message += `${i + 1}. ${bibliotheque[i].afficherInformations()}\n\n`;
  }
  alert(message);
}

// Fonction pour rechercher un livre par son titre
function rechercherLivre() {
  let titre = prompt("Entrez le titre du livre à rechercher :");
  let livre = bibliotheque.find(l => l.titre.toLowerCase() === titre.toLowerCase());

  if (livre) {
    alert("Livre trouvé :\n" + livre.afficherInformations());
  } else {
    alert("Livre non trouvé.");
  }
}

//  supprimer livre
function supprimerLivre() {
  let titre = prompt("Entrez le titre du livre à supprimer :");
  let index = bibliotheque.findIndex(l => l.titre.toLowerCase() === titre.toLowerCase());

  if (index !== -1) {
    bibliotheque.splice(index, 1);
    alert("Livre supprimé avec succès.");
  } else {
    alert("Livre non trouvé.");
  }
}

// Interface principale
function lancerInterface() {
  let choix;
  do {
    choix = prompt(
      "Bienvenue dans la bibliothèque !\n\n" +
      "1. Ajouter un livre\n" +
      "2. Afficher tous les livres\n" +
      "3. Rechercher un livre par titre\n" +
      "4. Supprimer un livre\n" +
      "5. Quitter\n\n" +
      "Entrez votre choix :"
    );

    switch (choix) {
      case "1":
        ajouterLivre();
        break;
      case "2":
        afficherLivres();
        break;
      case "3":
        rechercherLivre();
        break;
      case "4":
        supprimerLivre();
        break;
      case "5":
        alert("Merci d'avoir utilisé la bibliothèque !");
        break;
      default:
        alert("Choix invalide. Veuillez entrer un chiffre entre 1 et 5.");
    }
  } while (choix !== "5");
}

// Lancement du programme
lancerInterface();
