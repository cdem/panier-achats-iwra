import BtnAjoutPanier from './BtnAjoutPanier';
import './Produit.scss';

export default function Produit({id, nom, etatPanier, prix}) {
  const [panier, setPanier] = etatPanier;
  //console.log("Le panier d'achats : ", panier);

  function ajouterAuPanier() {
    const article = panier[id];
    if(article) {
      article.qte++; 
    }
    else {
      panier[id] = {prix: prix, qte: 1};
    }
    // Tant qu'on a pas fait appel à setPanier, React ne sait pas que l'état du panier est différent
    
    // let cloneDuPanier = {...panier};
    // let autreCloneDuPanier = JSON.parse(JSON.stringify(panier));
    // let encoreUnAutreClone = Object.assign({}, panier);

    setPanier({...panier});
  }

  let qteArticlePanier = 0;
  let texteBtnAjout = "Ajouter au panier";
  let classeCss = "";
  //let btnCouleurAjout = "";
  if(panier[id]) {
    qteArticlePanier = panier[id].qte;
    texteBtnAjout = "Augmenter la quantité";
    classeCss = "rouge";
    //btnCouleurAjout = "#900";
  }

  return (
    <li className="Produit">
      <img src={'images-produits/' + id + '.webp'} alt={nom}/>
      <div className="info">
        <p className="nom">{nom}</p>
        <p className="prix">{prix} $CA</p>
        <span></span>
      </div>
      <BtnAjoutPanier onClick={ajouterAuPanier} qte={qteArticlePanier} texte={texteBtnAjout} classeCss={classeCss} />
    </li>
  );
}