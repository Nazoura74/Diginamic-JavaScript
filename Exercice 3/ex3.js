/*console.log("Script chargé !");

// Fonction de gestion de majorité
function checkMajority(age) {
    if (age > 18) {
        console.log("Vous êtes majeur");
    } else if (age === 18) {
        console.log("Vous êtes tout juste majeur");
    } else {
        console.log("Vous êtes mineur");
    }
}

// Test simple
checkMajority(18);



// Fonction qui renvoie le nom du jour selon un numéro fourni en paramètre
function getDayName(number) {
    const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    return days[number - 1] || "Numéro invalide";
}


// Fonction qui affiche les nombres de 1 à 10 avec une boucle for 
function displayNumbers() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

// Fonction qui compte de 5 à 1 avec une boucle while
function countDown() {
    let i = 5;
    while (i >= 1) {
        console.log(i);
        i--;
    }
}
*/
// Fonction jeu : l'utilisateur doit deviner un nombre secret entre 1 et 10 
function guessNumber(secretNumber) {
    let guess;
    while (guess !== secretNumber) {
        guess = parseInt(prompt("Devinez le nombre entre 1 et 10 :"));
        if (guess === secretNumber) {
            console.log("Bravo, vous avez trouvé !");
        } else {
            console.log("Essaye encore !");
        }
    }
}

guessNumber(5);

// Affiche les nombres de 1 à 10 et indique s'ils sont pairs ou impairs
function showEvenOdd() {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i + " est pair");
        } else {
            console.log(i + " est impair");
        }
    }
}
showEvenOdd();

// Fonction qui simule une connexion 
// l'utilisateur a 3 tentatives pour deviner un mot de passe
function login(correctPassword) {
    let attempts = 3;
    while (attempts > 0) {
        let input = prompt("Entrez le mot de passe :");
        if (input === correctPassword) {
            console.log("Connexion réussie !");
            return;
        } else {
            attempts--;
            console.log("Mot de passe incorrect. Il vous reste " + attempts + " tentative(s).");
        }
    }
    console.log("Connexion échouée. Trop de tentatives.");
}
login("pass"); 

// Fonction qui vérifie si un nombre est parfait
function isPerfectNumber(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  return sum === number;
}

console.log(isPerfectNumber(6));   
console.log(isPerfectNumber());  
