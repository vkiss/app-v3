export default ( single = false ) => {
  const urlSearchParams = new URLSearchParams( window.location.search );
  const params = Object.fromEntries( urlSearchParams.entries() );

  return single ? params[single] : params;
};
