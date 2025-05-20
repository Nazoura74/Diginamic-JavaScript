function Bibliothecaire(nom) {
    Utilisateur.call(this, nom);
}

Bibliothecaire.prototype = Object.create(Utilisateur.prototype);
Bibliothecaire.prototype.constructor = Bibliothecaire;

Bibliothecaire.prototype.ajouterLivre = function(livre, bibliotheque) {
    bibliotheque.push(livre);
};