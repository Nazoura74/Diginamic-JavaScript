function Livre(titre, auteur, annee) {
    this.titre = titre;
    this.auteur = auteur;
    this.annee = annee;
    this.id = Date.now().toString();
}

Livre.prototype.afficherInfos = function() {
    return `${this.titre} par ${this.auteur} (${this.annee})`;
};