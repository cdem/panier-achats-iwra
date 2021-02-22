import BtnAjoutPanier from './BtnAjoutPanier';
import './Produit.scss';

export default function Produit(props) {
  const [panier, setPanier] = props.etatPanier;
  //console.log("Le panier d'achats : ", panier);

  function ajouterAuPanier() {
    const article = panier[props.id];
    if(article) {
      article.qte++; 
    }
    else {
      panier[props.id] = {prix: props.prix, qte: 1};
    }
    console.log("Le panier après Ajouter Au Panier : ", panier);
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
  if(panier[props.id]) {
    qteArticlePanier = panier[props.id].qte;
    texteBtnAjout = "Augmenter la quantité";
    classeCss = "rouge";
    //btnCouleurAjout = "#900";
  }

  return (
    <li className="Produit">
      <img src={'images-produits/' + props.id + '.webp'} alt={props.nom}/>
      <div className="info">
        <p className="nom">{props.nom}</p>
        <p className="prix">{props.prix} $CA</p>
        <span></span>
      </div>
      <BtnAjoutPanier onClick={ajouterAuPanier} qte={qteArticlePanier} texte={texteBtnAjout} classeCss={classeCss} />
    </li>
  );
}