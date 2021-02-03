import './ListeProduits.css';
import Produit from './Produit';

export default function ListeProduits(props) {
  return (
    <>
      <h2>Produits disponibles</h2>
      <ul className="listeProduits">
        <Produit nom="T-Shirt blanc à manches longues" prix="20.67" id="prd0002" />
        <Produit nom="T-Shirt gris" prix="15.95" id="prd0001" />
      </ul>
    </>
  );
}
