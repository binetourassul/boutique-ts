import "./style.css";
console.log("La boutique demarre");
function trouver<T extends HTMLElement>(selecteur: string): T {
 const element = document.querySelector<T>(selecteur);
 if (!element) {
 throw new Error(`Élément ${selecteur} introuvable : vérifiez index.html`);
 }
 return element;
}
const ZoneCatalogue = trouver<HTMLDivElement>("#catalogue");
const ListPanier = trouver<HTMLUListElement>("#lignes-panier");
const zoneTotal = trouver<HTMLElement>("#total");
const compteur = trouver<HTMLSpanElement>("#compteur");
const champRecherche = trouver<HTMLInputElement>("#recherche");
const filtreCategorie = trouver<HTMLSelectElement>("#filtre-categorie");