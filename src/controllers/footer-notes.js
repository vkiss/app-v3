import { convertBlankSpaceToTrailingSpacesElement } from "$/utils";
import globalVars from "$/data/global-vars";

// ELEMENTS
const FOOTER_NOTES = document.getElementById( "footer-notes" );

const newFooterNote = ( content ) => {
  const itemToInclude = document.createElement( "P" );
  itemToInclude.innerHTML = `.${convertBlankSpaceToTrailingSpacesElement( content, "\#" )}`;

  FOOTER_NOTES.appendChild( itemToInclude );
};

export function createFooterNotes ( selectedColorPallete ) {
  // tipografia
  newFooterNote( "tipografia:#<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://sourcefoundry.org/hack/\">hack</a>" );

  // crédito do tema vigente
  newFooterNote( `tema#da#sintax#baseado#em#<a target=\"_blank\" rel=\"noopener noreferrer\" href="${selectedColorPallete.link}">${convertBlankSpaceToTrailingSpacesElement( selectedColorPallete.name )}</a>` );

  // icones
  const sortedArray = [
    {
      "credit": "freepik",
      "link": "https://www.flaticon.com/br/autores/freepik"
    },
    {
      "credit": "vaadin",
      "link": "http://vaadin.com/font-icons"
    },
    {
      "credit": "icon8",
      "link": "https://icons8.com/"
    },
    {
      "credit": "svgrepo",
      "link": "https://www.svgrepo.com/svg/130038/flasks"
    }
  ].sort( ( a, b ) => {
    if( a.credit < b.credit ) { return -1; }
    if( a.credit > b.credit ) { return 1; }
    return 0;
  } );

  newFooterNote( `ícones:${sortedArray.map( ( icon ) => {
    return "#<a href=\"" + icon.link + "\" target=\"_blank\">" + icon.credit + "</a>";
  } )}` );

  // hosted by
  newFooterNote( `hospedado#pela#<a target="_blank" rel="noopener noreferrer" href="${globalVars.umblerRef}">umbler</a>` );

  // version and source code
  const filterVersion = ( version ) => {
    const major = version.split( "." )[0];
    const minor = version.split( "." )[1];
    const patch = version.split( "." )[2];

    return `${major}.${minor}${ patch === "0" ? "" : "." + patch }`;
  };

  const versionText = `v${filterVersion( globalVars.packageVersion )}${globalVars.versionSufix}`;

  newFooterNote( `${versionText}#|#<a target="_blank" rel="noopener noreferrer" href="https://github.com/vkiss/app">código#fonte</a>` );

  // float mobile version
  const mobileVersion = document.createElement( "DIV" );
  mobileVersion.className = "mobile-version-display";
  mobileVersion.innerHTML = versionText;
  document.body.appendChild( mobileVersion );
}
