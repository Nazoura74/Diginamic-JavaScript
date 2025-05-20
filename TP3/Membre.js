function Membre(nom) {
    Utilisateur.call(this, nom);
    this.livresEmpruntes = [];
}

Membre.prototype = Object.create(Utilisateur.prototype);
Membre.prototype.constructor = Membre;

Membre.prototype.emprunterLivre = function(livre) {
    this.livresEmpruntes.push(livre);
};
Membre.prototype.rendreLivre = function(livre) {
    this.livresEmpruntes = this.livresEmpruntes.filter(l => l.id !== livre.id);
};