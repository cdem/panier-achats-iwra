import './Entete.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Badge } from '@material-ui/core';
import SommairePanier from './SommairePanier';
import { Link, NavLink } from 'react-router-dom';

export default function Entete(props) {
  const [panier] = props.etatPanier;
  return (
    <header className="Entete">
      <div className="logo"><Link to="/">Logo</Link></div>
      <ul className="navPrincipale">
        <li><NavLink activeClassName="urlActive" to="/nos-produits" >Produits</NavLink></li>
        <li><NavLink activeClassName="urlActive" to="/a-propos-de-nous">À propos de nous</NavLink></li>
        <li><NavLink activeClassName="urlActive" to="/contactez-nous">Contactez-nous</NavLink></li>
      </ul>
      <ul className="navUtilisateur">
        <li>
          <Badge badgeContent={Object.values(panier).reduce((acc, article) => acc + article.qte, 0)} color="secondary">
            <ShoppingCartIcon />
          </Badge>
          <SommairePanier panier={panier} />
        </li>
        <li>Mon compte</li>
      </ul>
    </header>
  );
}