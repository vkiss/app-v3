export default function favicon ( theme ) {
  const canvas = document.createElement( "canvas" );
  canvas.height = 64;
  canvas.width = 64;

  const ctx = canvas.getContext( "2d" );
  ctx.fillStyle = theme.colors.siteBg; // bg color
  ctx.fillRect( 0, 0, canvas.width, canvas.height );
  ctx.font = "30px \"Hack\""; // hack font not working
  ctx.fillStyle = theme.colors.htmlElement; // html element color
  ctx.fillText( "vk", 14, 44 );

  const link = document.createElement( "link" );
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href = canvas.toDataURL();

  // Use for debug:
  // canvas.style.width = "64px";
  // canvas.style.height = "64px";
  // canvas.style.position = "absolute";
  // canvas.style.border = "1px solid red";
  // document.body.appendChild( canvas );

  document.getElementsByTagName( "head" )[0].appendChild( link );
}
