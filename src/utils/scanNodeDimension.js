/**
 * @function scanNodeDimension
 * calculate node element dimension and applies class to identify ui changes
 * @param {*} event
 * @param {*} scan node elemento to scan
 * @param {*} greatestHeight (optional) maximum element height to calc
 * @returns mouse position
 */
export default function scanNodeDimension( event, scan, greatestHeight = false ) {
  const elementRect = scan.getBoundingClientRect();

  const leftPos = event.clientX - ( window.innerWidth - event.clientX < elementRect.width ? elementRect.width + 4 : 4 );
  const topPos = event.clientY - ( window.innerHeight - event.clientY < elementRect.height ? elementRect.height + 4 : 4 );

  if ( window.innerWidth - event.clientX < elementRect.width * 2 ) {
    scan.classList.add( "--left" );
  } else {
    scan.classList.remove( "--left" );
  }

  if ( window.innerHeight - event.clientY < ( greatestHeight || elementRect.height * 2 ) ) {
    scan.classList.add( "--bottom" );
  } else {
    scan.classList.remove( "--bottom" );
  }

  return {
    left: leftPos,
    top: topPos,
  };
}
