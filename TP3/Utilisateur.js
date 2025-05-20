function Utilisateur(nom) {
    this.nom = nom;
    this.idUtilisateur = Date.now().toString();
}

Utilisateur.prototype.voirProfil = function() {
    return `Utilisateur : ${this.nom}`;
};