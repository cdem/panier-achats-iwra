import "./SommairePanier.scss";

export default function SommairePanier(props) {
  console.log("etatPanier dans SommairePanier : ", props.etatPanier);
  return (
    <div className="SommairePanier">
      <span>Articles différents : </span>
      <span>Nombre articles total : </span>
      <span>Sous-total : </span>
      <span>TPS : </span>
      <span>TVQ : </span>
      <span>Total : </span>
    </div>
  )
}