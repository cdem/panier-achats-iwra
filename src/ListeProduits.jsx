import './ListeProduits.scss';
import Produit from './Produit';
import tabProduits from './data/produits.json';

export default function ListeProduits(props) {
  console.log("Tableau des produits du fichier JSON : ", tabProduits);

  const notes = [95.9, 76.6874, 53.99, 85.6123];
  const notesArrondies = notes.map(function(note) {
    return note.toFixed(1);
  })
  const notesArrondies2 = notes.map(note => note.toFixed(1));
  
  console.log("Tableau des notes arrondies : ", notesArrondies);
  console.log("Tableau des notes arrondies (avec fonction fléchée) : ", notesArrondies2);
  // Tableau qui va contenir les composants Produit requis
  // let composantsProduit = [];
  
  // On le remplit de 3 façons différentes

  // 1. Avec une boucle for habituelle
  // for(let i=0; i<tabProduits.length; i++) {
  //   composantsProduit[i] = <Produit nom={tabProduits[i].nom} prix={tabProduits[i].prix} id={tabProduits[i].id} />
  // }

  // 2. Avec la méthode forEach des tableaux
  // tabProduits.forEach(function(p) {
  //   composantsProduit.push(<Produit nom={p.nom} prix={p.prix} id={p.id} />);
  // })

  return (
    <div className="ListeProduits">
      <h2>Produits disponibles</h2>
      <ul className="ul-produits">
        {
          // Utilisation d'une fonction fléchée
          tabProduits.map(unProd => <Produit key={unProd.id} nom={unProd.nom} prix={unProd.prix} id={unProd.id} />)
        }
      </ul>
    </div>
  );
}
