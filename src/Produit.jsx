import './Produit.scss';

export default function Produit(props) {
  console.log("Le paramètre props dans Produit : ", props);
  return (
    <li className="Produit">
      <img src={'images-produits/' + props.id + '.webp'} alt={props.nom}/>
      <div className="info">
        <p className="nom">{props.nom}</p>
        <p className="prix">{props.prix} $CA</p>
      </div>
      <button>Ajouter au panier</button>
    </li>
  );
}