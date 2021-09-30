import npmLogo from "$/assets/logos/npm.svg";

const iconAdjust = 2;

const packageList = [
  {
    "title": "clear-path",
    "link": "https://www.npmjs.com/package/clear-path"
  },
  {
    "title": "simple-webp-converter",
    "link": "https://www.npmjs.com/package/simple-webp-converter"
  },
  {
    "title": "vh-watch",
    "link": "https://www.npmjs.com/package/vh-watch"
  },
  {
    "title": "simple-ftp-deploy",
    "link": "https://www.npmjs.com/package/simple-ftp-deploy"
  }
];

const transformPackageListToContextMenu = ( packageArray ) => {
  const contextMenuArray = [];

  for ( const packageItem of packageArray ) {
    contextMenuArray.push( {
      "icon": npmLogo,
      "icon_adjust": iconAdjust,
      "label": packageItem.title,
      "link": packageItem.link
    } );
  }

  return contextMenuArray;
};

export default {
  "icon": npmLogo,
  "title": "packages",
  "icon_adjust": iconAdjust,
  "sort": "abc",
  "itens": transformPackageListToContextMenu( packageList )
};
