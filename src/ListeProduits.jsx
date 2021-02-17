import './ListeProduits.scss';
import Produit from './Produit';
import tabProduits from './data/produits.json';

export default function ListeProduits(props) {  
  return (
    <div className="ListeProduits">
      <h2>Produits disponibles</h2>
      <ul className="ul-produits">
        {
          tabProduits.map(unProd => <Produit etatPanier={props.etatPanier} key={unProd.id} nom={unProd.nom} prix={unProd.prix} id={unProd.id} />)
        }
      </ul>
    </div>
  );
}
