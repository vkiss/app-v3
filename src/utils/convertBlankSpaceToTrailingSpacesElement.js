/**
 * @function convertBlankSpaceToTrailingSpacesElement
 * @objective substitui os espaços de uma string pelo elemento de trailing space
 */
export default function convertBlankSpaceToTrailingSpacesElement ( string, replacePattern = " " ) {
  const replaceRegex = new RegExp( replacePattern, "g" );
  return string.replace( replaceRegex, "<span class=\"html-space\"> <span>•</span></span>" );
}
