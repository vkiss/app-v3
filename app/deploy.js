const FtpDeploy = require( "ftp-deploy" );
const ftpDeploy = new FtpDeploy();
const defaultConfig = require( "../../toolkit/deploy/vkiss" );
const config = {
  ...defaultConfig,
  remoteRoot: process.argv.slice( 2 ).includes( "hml" ) ? "/public/hml/vkiss" : defaultConfig.remoteRoot
};

// use with promises
if ( config.publishEnabled ) {
  ftpDeploy
    .deploy( config )
    .then( res => console.log( "finished:", res ) )
    .catch( err => console.log( err ) );
}
