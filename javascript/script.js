const coups = ['pierre', 'feuille', 'ciseaux'];
const traduction = {
  pierre: 'Pierre',
  feuille: 'Feuille',
  ciseaux: 'Ciseaux'
};

// Écoutez les events sur les boutons
document.getElementById('pierre').addEventListener('click', jouerCoup);
document.getElementById('feuille').addEventListener('click', jouerCoup);
document.getElementById('ciseaux').addEventListener('click', jouerCoup);

function jouerCoup(event) {
  const choixJoueur = event.target.id;
  const choixOrdinateur = coups[Math.floor(Math.random() * coups.length)];

  document.getElementById('choix-ordinateur').innerHTML = `Le robot a choisi ${traduction[choixOrdinateur]}.`;

  if (choixJoueur === choixOrdinateur) {
    document.getElementById('resultat').innerHTML = "Match nul !";
  } else if (
    (choixJoueur === 'pierre' && choixOrdinateur === 'ciseaux') ||
    (choixJoueur === 'feuille' && choixOrdinateur === 'pierre') ||
    (choixJoueur === 'ciseaux' && choixOrdinateur === 'feuille')
  ) {
    document.getElementById('resultat').innerHTML = "Vous avez gagné !";
  } else {
    document.getElementById('resultat').innerHTML = "Vous avez perdu !";
  }
}
