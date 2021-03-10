import { useState } from 'react';
import './ConteneurGlobal.scss';
import Entete from './Entete';
import Accueil from './Accueil';
import Contact from './Contact';
import Apropos from './Apropos';
import ListeProduits from './ListeProduits';
import PiedDePage from './PiedDePage';
import { Switch, Route } from 'react-router-dom';

export default function ConteneurGlobal() {
  // Vérifier s'il y a qqchose dans localStorage avec la clé 'panier-4pa'. 
  let panier = {};
  if(window.localStorage.getItem('panier-4pa')) {
    panier = JSON.parse(window.localStorage.getItem('panier-4pa'));
  }
  
  // Utiliser la gestion de l'état avec "useState"
  // Utiliser "Lazy Initialization" (prochain cours)
  const etatPanier = useState(panier);

  // Sauvegarder le panier dans localStorage à chaque fois que l'état du panier est muté.
  // Utiliser useEffect() (prochain cours)
  window.localStorage.setItem('panier-4pa', JSON.stringify(etatPanier[0]));

  return (
    <div className="ConteneurGlobal">
      <Entete etatPanier={etatPanier} />
      <section className="contenuPrincipal">
        <Switch>
          <Route path="/" exact>
            <Accueil/>
          </Route>
          <Route path="/nos-produits">
            <ListeProduits etatPanier={etatPanier} />
          </Route>
          <Route path="/a-propos-de-nous">
            <Apropos/>
          </Route>
          <Route path="/contactez-nous">
            <Contact/>
          </Route>
        </Switch>
        
      </section>
      <PiedDePage />
    </div>
  );
}
