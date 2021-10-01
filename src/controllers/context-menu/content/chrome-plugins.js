import chromeLogo from "$/assets/logos/chrome.svg";

const iconAdjust = 2;

const chromePluginList = [
  {
    "title": "instagrid",
    "link": "/instapage-grid/mohdjgbnilphfcgejcccmgecffppgcin?hl=pt"
  },
];

const transformChromePluginListToContextMenu = ( packageArray ) => {
  const contextMenuArray = [];

  for ( const packageItem of packageArray ) {
    contextMenuArray.push( {
      "icon": chromeLogo,
      "iconAdjust": iconAdjust,
      "label": packageItem.title,
      "link": "https://chrome.google.com/webstore/detail" + packageItem.link
    } );
  }

  return contextMenuArray;
};

export default {
  "icon": chromeLogo,
  "iconAdjust": iconAdjust,
  "title": "plugins pro chrome",
  "sort": "abc",
  "itens": transformChromePluginListToContextMenu( chromePluginList )
};
