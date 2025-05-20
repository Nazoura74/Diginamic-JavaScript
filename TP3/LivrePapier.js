function LivrePapier(titre, auteur, annee, nombrePages) {
    Livre.call(this, titre, auteur, annee);
    this.nombrePages = nombrePages;
}

LivrePapier.prototype = Object.create(Livre.prototype);
LivrePapier.prototype.constructor = LivrePapier;

LivrePapier.prototype.afficherInfos = function() {
    return `${Livre.prototype.afficherInfos.call(this)} - ${this.nombrePages} pages`;
};