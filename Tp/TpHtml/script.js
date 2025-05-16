 const bibliotheque = [];

    function afficherBibliotheque() {
      const list = document.getElementById("bookList");
      list.innerHTML = "";
      if (bibliotheque.length === 0) {
        list.innerHTML = "<p>Aucun livre dans la bibliothèque.</p>";
        return;
      }
      bibliotheque.forEach(livre => {
        const div = document.createElement("div");
        div.className = "book";
        div.textContent = `Titre: ${livre.titre}, Auteur: ${livre.auteur}, Année: ${livre.annee}`;
        list.appendChild(div);
      });
    }

    function addBook() {
      const titre = document.getElementById("title").value.trim();
      const auteur = document.getElementById("author").value.trim();
      const annee = parseInt(document.getElementById("year").value);

      if (!titre || !auteur || isNaN(annee)) {
        alert("Veuillez remplir tous les champs correctement.");
        return;
      }

      bibliotheque.push({ titre, auteur, annee });
      afficherBibliotheque();
      document.getElementById("title").value = "";
      document.getElementById("author").value = "";
      document.getElementById("year").value = "";
    }

    function searchBook() {
      const titreRecherche = document.getElementById("searchTitle").value.trim().toLowerCase();
      const livre = bibliotheque.find(l => l.titre.toLowerCase() === titreRecherche);
      if (livre) {
        alert(`Trouvé : ${livre.titre}, ${livre.auteur}, ${livre.annee}`);
      } else {
        alert("Livre non trouvé.");
      }
    }

    function deleteBook() {
      const titreSupp = document.getElementById("deleteTitle").value.trim().toLowerCase();
      const index = bibliotheque.findIndex(l => l.titre.toLowerCase() === titreSupp);
      if (index !== -1) {
        bibliotheque.splice(index, 1);
        alert("Livre supprimé.");
        afficherBibliotheque();
      } else {
        alert("Livre non trouvé.");
      }
    }