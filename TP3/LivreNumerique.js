function LivreNumerique(titre, auteur, annee, tailleFichier) {
    Livre.call(this, titre, auteur, annee);
    this.tailleFichier = tailleFichier;
}

LivreNumerique.prototype = Object.create(Livre.prototype);
LivreNumerique.prototype.constructor = LivreNumerique;

LivreNumerique.prototype.afficherInfos = function() {
    return `${Livre.prototype.afficherInfos.call(this)} - ${this.tailleFichier} Mo`;
};