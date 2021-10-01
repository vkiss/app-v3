const mapASCII = ( rows ) => {
  const asciiMap = [];
  for ( let rowIndex = 0; rowIndex < rows.length; rowIndex++ ) {
    const columns = rows[rowIndex].split( "" );

    for ( let columnIndex = 0; columnIndex < columns.length; columnIndex++ ) {
      const character = columns[columnIndex];

      if ( character === "1" ) {
        asciiMap.push( {
          x:( columnIndex + 1 ),
          y:( rowIndex + 1 )
        } );
      }
    }

  }

  return asciiMap;
};

export default function translateASCIICode ( code ) {
  const filteredCode = code.trim();

  if ( /^(1|0|\n)*$/g.test( filteredCode ) ) {
    const splittedRows = filteredCode.split( "\n" );
    const map = mapASCII( splittedRows );

    return {
      width: splittedRows[0].split( "" ).length,
      height: splittedRows.length,
      map
    };
  }
}
