import githubLogo from "$/assets/logos/github.svg";

import npmPackages from "$/controllers/context-menu/content/npm-packages";
import portfolio from "$/controllers/context-menu/content/portfolio";
import chromePlugins from "$/controllers/context-menu/content/chrome-plugins";
import divider from "$/controllers/context-menu/content/divider";

export default [
  npmPackages,
  portfolio,
  chromePlugins,
  // divider,
  // {
  //   "title": "start pixel.js",
  //   "type": "app",
  //   "app": pixelEditor
  // },
  divider,
  {
    "icon": githubLogo,
    "iconAdjust": 3,
    "title": "exibir código fonte",
    "type": "link",
    "link": "https://github.com/vkiss/app"
  }
];
