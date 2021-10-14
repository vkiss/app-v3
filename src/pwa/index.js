import "./styles.scss";

const pwaTitle = () => {
  const el = document.createElement( "h1" );
  el.innerHTML = "KaaS";

  return el;
};

export default function () {
  const pwaContainer = document.createElement( "DIV" );
  pwaContainer.className = "pwa-container";

  pwaContainer.appendChild( pwaTitle() );

  return pwaContainer;
}
