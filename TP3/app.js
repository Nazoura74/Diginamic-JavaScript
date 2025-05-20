const bibliotheque = [];
const biblio = new Bibliothecaire("Admin");
const membre = new Membre("Jean");
let currentRole = null;

document.getElementById("ajoutForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const titre = document.getElementById("titre").value;
    const auteur = document.getElementById("auteur").value;
    const annee = parseInt(document.getElementById("annee").value);
    const type = document.getElementById("typeLivre").value;
    const tailleFichier = parseFloat(document.getElementById("tailleFichier").value);
    const nombrePages = parseInt(document.getElementById("nombrePages").value);

    let livre;
    if (type === "numerique") {
        livre = new LivreNumerique(titre, auteur, annee, tailleFichier);
    } else {
        livre = new LivrePapier(titre, auteur, annee, nombrePages);
    }

    biblio.ajouterLivre(livre, bibliotheque);
    afficherLivres();
    this.reset();
    toggleChampsSpecifiques("");
});

document.getElementById("typeLivre").addEventListener("change", function() {
    toggleChampsSpecifiques(this.value);
});

function toggleChampsSpecifiques(type) {
    document.getElementById("tailleFichier").classList.toggle("hidden", type !== "numerique");
    document.getElementById("nombrePages").classList.toggle("hidden", type !== "papier");
}

function setRole(role) {
    currentRole = role;
    document.getElementById("formAjout").classList.toggle("hidden", role !== "bibliothecaire");
    afficherLivres();
}

function afficherLivres() {
    const ul = document.getElementById("listeLivres");
    ul.innerHTML = "";
    bibliotheque.forEach((livre, index) => {
        const li = document.createElement("li");
        li.textContent = livre.afficherInfos();

        if (currentRole === "bibliothecaire") {
            const supprimerBtn = document.createElement("button");
            supprimerBtn.textContent = "Supprimer";
            supprimerBtn.onclick = () => {
                bibliotheque.splice(index, 1);
                afficherLivres();
            };
            li.appendChild(supprimerBtn);
        }

        if (currentRole === "membre") {
            if (!livre.empruntePar) {
                const emprunterBtn = document.createElement("button");
                emprunterBtn.textContent = "Emprunter";
                emprunterBtn.onclick = () => {
                    livre.empruntePar = membre.nom;
                    membre.emprunterLivre(livre);
                    afficherLivres();
                };
                li.appendChild(emprunterBtn);
            } else if (livre.empruntePar === membre.nom) {
                const rendreBtn = document.createElement("button");
                rendreBtn.textContent = "Rendre";
                rendreBtn.onclick = () => {
                    livre.empruntePar = null;
                    membre.rendreLivre(livre);
                    afficherLivres();
                };
                li.appendChild(rendreBtn);
            } else {
                const info = document.createElement("span");
                info.textContent = ` (Déjà emprunté par ${livre.empruntePar})`;
                li.appendChild(info);
            }
        }

        ul.appendChild(li);
    });
}

